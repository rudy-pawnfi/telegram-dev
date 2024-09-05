import {Account, ConnectAdditionalRequest, TonProofItemReplySuccess} from "@tonconnect/ui-react";
import './patch-local-storage-for-github-pages';

class TonProofDemoApiService {
    constructor() {
        this.localStorageKey = 'demo-api-access-token';
        this.host = 'https://demo.tonconnect.dev';
        this.accessToken = localStorage.getItem(this.localStorageKey);
        this.refreshIntervalMs = 9 * 60 * 1000;

        if (!this.accessToken) {
            this.generatePayload();
        }
    }

    async generatePayload() {
        try {
            const response = await (
                await fetch(`${this.host}/ton-proof/generatePayload`, {
                    method: 'POST',
                })
            ).json();
            return {tonProof: response.payload};
        } catch {
            return null;
        }
    }

    async checkProof(proof, account) {
        try {
            const reqBody = {
                address: account.address,
                network: account.chain,
                proof: {
                    ...proof,
                    state_init: account.walletStateInit,
                },
            };

            const response = await (
                await fetch(`${this.host}/ton-proof/checkProof`, {
                    method: 'POST',
                    body: JSON.stringify(reqBody),
                })
            ).json();

            if (response?.token) {
                localStorage.setItem(this.localStorageKey, response.token);
                this.accessToken = response.token;
            }
        } catch (e) {
            console.log('checkProof error:', e);
        }
    }

    async getAccountInfo(account) {
        const response = await (
            await fetch(`${this.host}/dapp/getAccountInfo?network=${account.chain}`, {
                headers: {
                    Authorization: `Bearer ${this.accessToken}`,
                    'Content-Type': 'application/json',
                },
            })
        ).json();

        return response;
    }

    reset() {
        this.accessToken = null;
        localStorage.removeItem(this.localStorageKey);
        this.generatePayload();
    }
}

export const TonProofDemoApi = new TonProofDemoApiService();
