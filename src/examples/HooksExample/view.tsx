import * as React from 'react'
import useTime, { HourType } from './useTime'

// Numbers
// (i.e. The top part)

type NumberProps = ReturnType<typeof useTime>[0]

const pad0 = (n: number): string => {
  const str = n.toString()
  return str.length > 1 ? str : '0' + str
}

export const Numbers: React.FC<NumberProps> = ({ hours, minutes, seconds, amPm }) => {
  const numbers = [hours, minutes, seconds].map(pad0).join(':')
  return <h1>{`${numbers} ${amPm}`}</h1>
}

// Controls

type HourTypeSetter = ReturnType<typeof useTime>[1]
type ControlsProps = Pick<NumberProps, 'hourType'> & {
  setter: HourTypeSetter
}
export const Controls: React.FC<ControlsProps> = ({ hourType, setter }) => (
  <>
    {[HourType.twelve, HourType.twentyFour].map(ht => (
      <Control value={ht} current={hourType} setter={setter} />
    ))}
  </>
)

type ControlProps = {
  value: HourType
  current: HourType
  setter: HourTypeSetter
}
const Control = ({ value, current, setter }: ControlProps) => (
  <label>
    <input
      key={value}
      type="radio"
      name="hour-type"
      value={value}
      checked={value === current}
      onChange={() => setter(value)}
    />
    {value}
  </label>
)
