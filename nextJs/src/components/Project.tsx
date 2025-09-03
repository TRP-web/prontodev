
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
        <div className="mb-11 cursor-pointer max-w-[945px]">
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
                    : <div>
                        <div className="bg-gray-400 w-[945px] h-[300px] "></div>
                    </div>

            }
            <div className="flex justify-between" onClick={() => setOpen(!open)}>
                <h3>{title}</h3>
                <Image
                    src={DownArrow.src}
                    width={25}
                    height={25}
                    alt="arrow to opan description"
                    
                />
            </div>
            {
                open ?
                    <div className="">
                        <p>
                         ddd
                        </p>
                    </div>
                    : null
            }

        </div>
    )
}

export default Project