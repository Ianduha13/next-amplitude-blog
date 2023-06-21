"use client"
import Image from "next/image"
import ParticlesBg from "./components/ParticlesBg"
import { useEffect } from "react"
import Link from "next/link"
let amplitude

const AMPLITUDE_API_KEY = process.env.NEXT_PUBLIC_AMPLITUDE_API_KEY

export default function Home() {
  const initAmplitude = async () => {
    amplitude = await import("@amplitude/analytics-browser")
    amplitude.init(AMPLITUDE_API_KEY, undefined, {
      logLevel: amplitude.Types.LogLevel.Warn,
      defaultTracking: {
        sessions: true,
        formInteractions: true,
      },
    })
  }
  const clickHandler = () => {
    amplitude.track("click", {
      text: "each click is a new event, and each star or like helps me a lot!",
    })
  }

  useEffect(() => {
    initAmplitude()
  }, [])

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <ParticlesBg />
      <section className="w-full grid content-center h-full z-10 ">
        <button
          type="button"
          className="bg-[#e8378b] w-96 py-6 text-center font-semibold px-10 mx-auto rounded-xl hover:scale-95 active:scale-105 transition-all duration-100 ease-in-out"
          onClick={() => clickHandler()}
        >
          Press me to trigger an event!
        </button>
        <Link
          href="https://analytics.amplitude.com/share/65a8558434094c6895b5afde4b6f8c15"
          target="_blank"
          className="mt-4 py-6 px-10 w-96 mx-auto text-center font-semibold rounded-xl bg-[#191B1F] border-2 border-[#E8378B]"
        >
          Here you have a link to the chart!
        </Link>
      </section>
    </main>
  )
}
