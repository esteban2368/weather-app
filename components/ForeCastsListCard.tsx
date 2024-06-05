import Image from "next/image"
import { ImageForeCast } from '@/constant/imageSize'
const ForeCastListCard = () => {
    return (
        <div className="d-flex justify-c flex-wrap gap-4">
            <div className="bg-secundary padding-5 color-lila d-flex flex-col items-c">
                <h3 className="heading-base fw-med margin-b-4">Tomorrow</h3>
                <Image
                    className="margin-b-7"
                    alt="Image forecast tomorrow"
                    src="/Shower.png"
                    width={ImageForeCast.width}
                    height={ImageForeCast.height}
                />
                <div className="d-flex gap-2">
                    <span>
                        16 <span>&#xb0;C</span>
                    </span>
                    <span className="color-gray-light">
                        11 <span>&#xb0;C</span>
                    </span>
                </div>
            </div>
            <div className="bg-secundary padding-5 color-lila d-flex flex-col items-c">
                <h3 className="heading-base fw-med margin-b-4">Tomorrow</h3>
                <Image
                    className="margin-b-7"
                    alt="Image forecast tomorrow"
                    src="/Shower.png"
                    width={ImageForeCast.width}
                    height={ImageForeCast.height}
                />
                <div className="d-flex gap-2">
                    <span>
                        16 <span>&#xb0;C</span>
                    </span>
                    <span className="color-gray-light">
                        11 <span>&#xb0;C</span>
                    </span>
                </div>
            </div>
            <div className="bg-secundary padding-5 color-lila d-flex flex-col items-c">
                <h3 className="heading-base fw-med margin-b-4">Tomorrow</h3>
                <Image
                    className="margin-b-7"
                    alt="Image forecast tomorrow"
                    src="/Shower.png"
                    width={ImageForeCast.width}
                    height={ImageForeCast.height}
                />
                <div className="d-flex gap-2">
                    <span>
                        16 <span>&#xb0;C</span>
                    </span>
                    <span className="color-gray-light">
                        11 <span>&#xb0;C</span>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default ForeCastListCard