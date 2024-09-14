import Image from "next/image"
import React, { FC } from "react"

interface VulpineSVGProps {
    scale?: number
}

export const VulpineSVG: FC<VulpineSVGProps> = ({ scale = 1 }) => { 
    const width = 200 * scale 
    const height = 200 * scale
    return (
        <div style={{ width, height, position: "relative" }}>
            <Image src="/vulpine.png" alt="Vulpine"  layout="fill" objectFit="contain"/>
        </div>
    )
}