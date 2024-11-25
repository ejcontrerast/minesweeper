import React from "react"

interface NumberDisplayProps {
    value: number
}

const NumberDisplay: React.FC<NumberDisplayProps> = ({value}) => {
  return (
    <div className="flex justify-center items-center">
      <div className="w-20 h-12
      text-center text-[#ff0701] bg-black">{value.toString().padStart(3,"0")}</div>
    </div>
  )
}

export default NumberDisplay;