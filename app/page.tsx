"use client"

import { VulpineSVG } from "@/components/icons/vulpine-svg"
import {useTheme} from "next-themes"
import Link from "next/link"

export default function HomePage() {
  const { theme } = useTheme()

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center">
      <div>
        <VulpineSVG scale={1}/>
      </div>
      <Link className="text-white" href="/chat">
      Login
      </Link>
    </div>
  )
}
