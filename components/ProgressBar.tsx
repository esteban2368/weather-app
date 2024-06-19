import style from "@/styles/components/ProgressBar.module.scss"

interface pros {
    value:number
}
const ProgressBar = ({
    value
}: pros) => {
    return (
        <div className={`w-full d-flex justify-c`}>
            <div className={`${style.bar} overflow-h bg-lila rounded-xl`}>
                <div className="bg-yellow h-full rounded-xl" style={{width: `${value}%`}}></div>
            </div>
        </div>
    )
}

export default ProgressBar