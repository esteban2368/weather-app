import style from "@/styles/components/ProgressBar.module.scss"

interface pros {
    value:number
}
const ProgressBar = ({
    value
}: pros) => {
    return (
        <div className={`w-full d-flex flex-col items-c`}>
            <div className={`${style.bar__leyend} d-flex justify-sb color-gray-light heading-3`}>
                <span>0</span>
                <span>50</span>
                <span>100</span>
            </div>
            <div className={`${style.bar} overflow-h bg-lila rounded-xl`}>
                <div className="bg-yellow h-full rounded-xl" style={{width: `${value}%`}}></div>
            </div>
        </div>
    )
}

export default ProgressBar