
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
                    className="w-full relative shrink-0 grow max-w-[945px] rounded-t-2xl overflow-hidden border-3 border-b-0 border-purple-600 hover:border-orange duration-300">
                    <Image
                        src={image}
                        alt="profile"
                        sizes="100vw"
                        width={0}
                        height={0}
                        className="top-0 left-0"
                        style={{ width: "100%", height: "auto" }}
                    />
                </div>
            )
        } else if (image !== undefined && extraImages !== undefined) {
            return (
                <div
                    id="hover-change"
                    className="w-full relative shrink-0 grow max-w-[945px] rounded-t-2xl overflow-hidden border-3 border-b-0 border-purple-600 hover:border-orange duration-300"
                >
                     {0 == activeImage ?
                                        <Image
                                            src={image}
                                            alt="profile"
                                            sizes="100vw"
                                            width={0}
                                            height={0}
                                            className="top-0 left-0"
                                            style={{ width: "100%", height: "auto" }}
                                        />
                                        : null
                                    },
                    {
                        extraImages.map((image, index) => {
                            return (
                                <>
                                    {index == activeImage ?
                                        <Image
                                            src={image}
                                            alt="profile"
                                            sizes="100vw"
                                            width={0}
                                            height={0}
                                            className="top-0 left-0"
                                            style={{ width: "100%", height: "auto" }}
                                        />
                                        : null
                                    },


                                </>

                            )
                        })
                    }

                </div>
            )
        } else {
            return (
                <div className="">
                    <div className="bg-gray-400 w-full h-[300px] "></div>
                </div>
            )
        }


    }
    const [open, setOpen] = React.useState(false)
    const [activeImage, setActiveImage] = React.useState(0)
    return (
        <div className="mb-11 cursor-pointer max-w-[945px] w-full  overflow-hidden hover:scale-105 duration-300" id="hover">
            {
                viewingConditions()
                // image !== undefined ?
                //     <div
                //         id="hover-change"
                //         className="w-full relative shrink-0 grow max-w-[945px] rounded-t-2xl overflow-hidden border-3 border-b-0 border-purple-600 hover:border-orange duration-300">
                //         <Image
                //             src={image}
                //             alt="profile"
                //             sizes="100vw"
                //             width={0}
                //             height={0}
                //             className="top-0 left-0"
                //             style={{ width: "100%", height: "auto" }}
                //         />
                //     </div>
                //     : <div className="">
                //         <div className="bg-gray-400 w-full h-[300px] "></div>
                //     </div>

            }
            <div
                id="hover-change"
                className={`flex justify-between p-2 items-center border-2  border-purple-600 hover:border-orange duration-300 ${!open ? "rounded-b-2xl " : "border-b-0"}`}
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
                    <div className={`p-1 bg-gray-50 text-xl ${open ? "rounded-b-2xl " : ""}`}>
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