# Amplitude Integration in Next.js Application

This repository demonstrates how to use Amplitude, an event-driven analytics platform, in a Next.js application. 

## Quick Overview

We have a button that, when clicked, triggers an event in Amplitude. The application uses the `@amplitude/analytics-browser` package to track these events. 

A click event is tracked every time the button is clicked. This event is then visible on your Amplitude dashboard. 

A link is also provided to directly view the chart on the Amplitude dashboard.

## Getting Started

### 1. Clone the repository

Clone the repository by running this command in your terminal:

```bash
git clone https://github.com/your_username/your_repo_name.git
```

### 2. Install Dependencies

Change your directory to your cloned repository, then run:

```bash
yarn install
```

### 3. Setup Amplitude

Obtain your Amplitude API key from your Amplitude account. Add it to a `.env.local` file at the root of your project:

```env
NEXT_PUBLIC_AMPLITUDE_API_KEY=Your_Amplitude_API_Key
```

### 4. Start the Application

You can now run the application by executing:

```bash
npm run dev
```

or if you use yarn:

```bash
yarn dev
```

Your application will now be running at `http://localhost:3000`. Click the button to trigger an Amplitude event. 

### 5. View Tracked Events

Click the provided link in the application to open your Amplitude dashboard and view the tracked events.

## Code Explanation

The main integration of Amplitude happens inside the `Home` component. 

Firstly, the Amplitude package is asynchronously imported and initialized with your API key:

```js
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
```

The `initAmplitude` function is then called inside the `useEffect` hook, ensuring that it runs once when the component is first mounted:

```js
useEffect(() => {
  initAmplitude()
}, [])
```

The `clickHandler` function is responsible for tracking the click events:

```js
const clickHandler = () => {
  amplitude.track("click", {
    text: "each click is a new event, and each star or like helps me a lot!",
  })
}
```

It is attached to the onClick event of the button, tracking each click as an event:

```js
<button
  type="button"
  className="bg-[#e8378b] w-96 py-6 text-center font-semibold px-10 mx-auto rounded-xl hover:scale-95 active:scale-105 transition-all duration-100 ease-in-out"
  onClick={() => clickHandler()}
>
  Press me to trigger an event!
</button>
```
