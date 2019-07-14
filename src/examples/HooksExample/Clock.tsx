import React from 'react'
import { TimeContextProvider } from './context'
import useTime from './useTime'
import { Numbers, Controls } from './view'

const Clock = () => {
  const [time, setHourType] = useTime()
  return (
    <fieldset>
      <legend>Hooks Example</legend>
      <Numbers {...time} />
      <Controls hourType={time.hourType} setter={setHourType} />
    </fieldset>
  )
}

const ClockWithProvider = () => (
  <TimeContextProvider>
    <Clock />
  </TimeContextProvider>
)

export default ClockWithProvider
