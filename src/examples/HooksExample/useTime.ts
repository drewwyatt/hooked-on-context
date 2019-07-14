import { useCallback, useContext, useEffect, useRef } from 'react'
import { Time, AmPm, HourType } from 'our-fake-time-lib'
import { TimeContext } from './context'
import { setHours, setMinutes, setSeconds, setHourType, init, State } from './state'

export { AmPm, HourType }

export const useTime = (
  context: typeof TimeContext = TimeContext,
): [State, (h: HourType) => void] => {
  const { state, dispatch } = useContext(context)
  let time = useRef<Time | undefined>()
  useEffect(() => {
    time.current = new Time()
    dispatch(
      init({
        amPm: time.current.getAmPm(),
        hours: time.current.getHours(),
        hourType: time.current.getHourType(),
        minutes: time.current.getMinutes(),
        seconds: time.current.getSeconds(),
      }),
    )
    time.current.on('hours', h => dispatch(setHours(h)))
    time.current.on('minutes', m => dispatch(setMinutes(m)))
    time.current.on('seconds', s => dispatch(setSeconds(s)))
    time.current.on('hourType', (ht, e) => dispatch(setHourType(ht, e)))
  }, [])

  const setHourTypeOnTime = useCallback(
    (hourType: HourType) => {
      time.current && time.current.setHourType(hourType)
    },
    [time],
  )

  return [state, setHourTypeOnTime]
}
