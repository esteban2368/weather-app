import Image from "next/image"
import Temperature from "./common/Temperature"
import { ImageForeCast } from '@/constant/imageSize'
const ForeCastListCard = () => {
    return (
        <div className="d-flex justify-c flex-wrap gap-4">
            <div className="bg-secundary padding-5 color-lila d-flex flex-col items-c">
                <h3 className="heading-base fw-med">Tomorrow</h3>
                <Image
                    className="margin-b-5"
                    alt="Image forecast tomorrow"
                    src="/09d.svg"
                    width={ImageForeCast.width}
                    height={ImageForeCast.height}
                />
                <div className="d-flex gap-2">
                    <Temperature variant="level-2" value={16.25}/>
                    <Temperature variant="level-3" value={11}/>
                </div>
            </div>
            <div className="bg-secundary padding-5 color-lila d-flex flex-col items-c">
                <h3 className="heading-base fw-med">Tomorrow</h3>
                <Image
                    className="margin-b-5"
                    alt="Image forecast tomorrow"
                    src="/09d.svg"
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
                <h3 className="heading-base fw-med">Tomorrow</h3>
                <Image
                    className="margin-b-5"
                    alt="Image forecast tomorrow"
                    src="/09d.svg"
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