import { useEffect } from "react"

export let amplitude
const AMPLITUDE_API_KEY = process.env.NEXT_PUBLIC_AMPLITUDE_API_KEY

const useAmplitudeInit = () => {
  useEffect(() => {
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
    initAmplitude()
  }, [])
}

export default useAmplitudeInit
