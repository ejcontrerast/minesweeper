import React from "react"

interface NumberDisplayProps {
    value: number,
    className: string
}

const NumberDisplay: React.FC<NumberDisplayProps> = ({value, className}) => {
  return (
    <div className="flex justify-center items-center ">
      <div className={`${className}
      flex justify-center items-center
      tilt-neon-01 neon-text
      w-20 text-6xl font-thin
      text-center m-1`}>
        {value < 0 ? `-${Math.abs(value).toString().padStart(2,"0")}` 
        : value.toString().padStart(3,"0")}
      </div>
    </div>
  )
}

export default NumberDisplay;