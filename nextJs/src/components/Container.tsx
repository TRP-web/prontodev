import React from "react"

interface IContainerProps {
    children: React.ReactNode
    className?: string
}

const Container: React.FC<IContainerProps> = ({children, className}) => {
    return (
        <div className={`m-auto max-w-[1464px] ${className ? className : ""}`}>
            {children}
        </div>
    )
}

export default Container