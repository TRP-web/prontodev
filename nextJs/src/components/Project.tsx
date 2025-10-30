
import Image from "next/image"
import React from "react"
import DownArrow from "@/public/smallicons/down-arrow.png"
interface IProjectProps {
    image?: string
    title: string
    description: string
}

const Project: React.FC<IProjectProps> = ({
    image,
    description,
    title
}) => {

    const [open, setOpen] = React.useState(false)
    return (
        <div className="mb-11 cursor-pointer max-w-[945px] w-full rounded-t-2xl overflow-hidden">
            {
                image !== undefined ?
                    <div className="w-full relative shrink-0 grow max-w-[945px]">
                        <Image
                            src={image}
                            alt="profile"
                            fill
                            className="top-0 left-0"
                        />
                    </div>
                    : <div className="">
                        <div className="bg-gray-400 w-full h-[300px] "></div>
                    </div>

            }
            <div
                className={`flex justify-between p-2 items-center border border-gray-100 ${!open ? "rounded-b-2xl " : "border-b-0"}`}
                onClick={() => setOpen(!open)}
            >
                <h3 className="text-2xl">{title}</h3>
                <Image
                    src={DownArrow.src}
                    width={25}
                    height={25}
                    alt="arrow to opan description"
                    className={`${open ? "rotate-180" : ""} duration-100`}
                />
            </div>
            {
                open ?
                    <div className={`p-1 bg-gray-50 text-xl ${open ? "rounded-b-2xl ": ""}`}>
                        <p>
                            {description}
                        </p>
                    </div>
                    : null
            }

        </div>
    )
}

export default Project