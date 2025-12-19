import Image from "next/image"
import React from "react"
import DownArrow from "@/public/smallicons/down-arrow.png"
interface IProjectProps {
    image?: string
    extraImages?: string[]
    title: string
    description: string
}

const Project: React.FC<IProjectProps> = ({
    image,
    extraImages,
    description,
    title
}) => {


    const viewingConditions = (): React.ReactNode => {
        if (image !== undefined && extraImages === undefined) {
            return (
                <div
                    id="hover-change"
                    className="w-full select-none relative shrink-0 grow max-w-[945px] rounded-t-2xl overflow-hidden border-3 border-b-0 border-gray-200 hover:border-orange duration-300">
                    <Image
                        src={image}
                        alt="profile"
                        sizes="100vw"
                        draggable="false"
                        width={0}
                        height={0}
                        className="top-0 left-0"
                        onClick={() => setOpen(!open)}
                        style={{ width: "100%", height: "auto" }}
                    />
                </div>
            )
        } else if (image !== undefined && extraImages !== undefined) {
            return (
                <div
                    onClick={() => setOpen(!open)}
                    id="hover-change"
                    className="w-full relative shrink-0 grow max-w-[945px]  rounded-t-2xl overflow-hidden border-3 border-b-0 border-gray-200 hover:border-orange duration-300"
                >
                    {0 == activeImage ?
                        <Image
                            src={image}
                            alt="profile"
                            sizes="100vw"
                            width={0}
                            height={0}
                            draggable="false"
                            className="top-0 left-0 select-none"
                            style={{ width: "100%", height: "auto" }}
                        />
                        : <Image
                            src={extraImages[activeImage - 1]}
                            alt="profile"
                            sizes="100vw"
                            width={0}
                            height={0}
                            draggable="false"
                            className="top-0 left-0 select-none max-h-[400px]"
                            style={{ width: "100%", height: "auto" }}
                        />
                    }
                </div>
            )
        } else {
            return (
                <div className="">
                    <div className="bg-gray-400 w-full h-[300px]"></div>
                </div>
            )
        }

    }
    const [open, setOpen] = React.useState(false)
    const [activeImage, setActiveImage] = React.useState(0)

    if (extraImages !== undefined)
        React.useEffect(() => {
            const interval = setInterval(() => {
                if (extraImages?.length === activeImage) {
                    setActiveImage(1)
                } else {
                    const nextImage = activeImage + 1
                    setActiveImage(nextImage)
                }
            }, 5000)

            return () => clearInterval(interval)
        }, [activeImage])


    return (
        <div className="mb-11 cursor-pointer max-w-[945px] w-full rounded-2xl shadow-[0_0_41px_9px_rgba(34,60,80,0.09)]   min-lg:hover:scale-105 duration-300" id="hover">
            {
                viewingConditions()
            }
            <div
                id="hover-change"
                className={`flex  justify-between p-2 items-center border-2 overflow-hidden  border-gray-200 hover:border-orange duration-300 ${!open ? "rounded-b-2xl " : "border-b-0"}`}
                onClick={() => setOpen(!open)}
            >
                <h3 className="text-2xl">{title}</h3>
                <Image
                    src={DownArrow.src}
                    width={25}
                    height={25}
                    alt="arrow to opan description"
                    className={`${open ? "rotate-180" : ""} duration-100 select-none`}
                />
            </div>
            {
                open ?
                    <div
                        id="hover-change"
                        className={`p-1 bg-gray-50 text-xl ${open
                            ? "rounded-b-2xl border-2 border-t-0 border-gray-300 hover:border-orange transition-colors"
                            : ""
                            }`}
                    >
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