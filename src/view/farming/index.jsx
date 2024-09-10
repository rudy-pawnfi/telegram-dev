import imgIntegral from '/images/Farming/img-integral.svg'
import imgTonlord from '/images/Farming/img-Tonlord.png'
import imgNumberOfLives from '/images/Farming/img-NumberOfLives.png'
import './index.scss'
const FarmingPage = () => {

    return(
        <div className="farming_page pa_3">
            <div className="farming_bg flex column align_center justify_between pa_3 mb_3">
                <img src={imgIntegral} alt="" srcSet="" />
                <div className="text_center">
                    <div className="fs_5 fw_b">UserName</div>
                    <div className="fs_8 fw_b">1,151</div>
                </div>

                <div className="farming_btn cursor flex justify_center align_center br_6 py_5">
                    <i className="picon p-icon-StartUp is_4 mr_2"></i>
                    <div className="fs_3 fw_b">Farming</div>
                </div>

                {/* <div className="farming_btn_loadding cursor br_6 pa_2 p_relative">
                    <div className="farming_btn_loadding_box_bg"></div>
                    <div className="farming_btn_loadding_box flex justify_center align_center br_6 py_4">
                        <img className="mr_2" src="/images/Farming/img-Farming2.png" alt="" srcSet="" />
                        <div className="fs_3 fw_b">Farming</div>
                    </div>
                </div> */}
            </div>

            <div className="br_5 pa_4 dinosaur_box flex column align_center">
                <img className="header_img_box mb_5" src={imgTonlord} alt="" srcSet="" />
                <div className="fs_4 fw_b mb_4">Dinosaur Run ( Soon! )</div>
                <div className="flex align_center justify_center dinosaur_box_box">
                    <img className="mr_2" src={imgNumberOfLives} alt="" srcSet="" />
                    <span className="fs_3 fw_b">90</span>
                </div>
            </div>
        </div>
    )
}

export default FarmingPage