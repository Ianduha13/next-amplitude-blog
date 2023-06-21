"use client"
import ParticlesBg from "./components/ParticlesBg"
import Link from "next/link"
import useAmplitudeInit, { amplitude } from "@/app/hooks/useAmplitudeInit"

export default function Home() {
  useAmplitudeInit()
  const clickHandler = () => {
    amplitude.track("click", {
      text: "each click is a new event, and each star or like helps me a lot!",
    })
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center ">
      <ParticlesBg />
      <section className="w-full grid content-center h-full z-10 ">
        <button
          type="button"
          className="bg-[#e8378b] w-96 py-6 text-center font-semibold px-10 mx-auto rounded-xl hover:scale-95 active:scale-105 transition-all duration-100 ease-in-out"
          onClick={clickHandler}
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
