import * as React from "react"
const SvgComponent = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={800}
    height={800}
    viewBox="0 0 64 64"
    {...props}
  >
    <path d="M6.7 13.456a1 1 0 0 0-1.414 0l-.767.767-.767-.767a1 1 0 0 0-1.414 1.414l.767.767-.767.767a1 1 0 1 0 1.414 1.414l.767-.767.767.767A1 1 0 1 0 6.7 16.404l-.767-.767.767-.767a1 1 0 0 0 0-1.414ZM56 53a3 3 0 1 0 3 3 3.003 3.003 0 0 0-3-3Zm0 4a1 1 0 1 1 1-1 1 1 0 0 1-1 1Z" />
    <circle cx={59} cy={45} r={1} />
    <path d="M32 9a23.992 23.992 0 0 0-20.63 36.254 5.804 5.804 0 0 0-.87 2.496 3.754 3.754 0 0 0 3.75 3.75 3.706 3.706 0 0 0 1.875-.522A23.993 23.993 0 1 0 32 9ZM12.5 47.75a9.516 9.516 0 0 1 1.75-3.29A9.495 9.495 0 0 1 16 47.75a1.75 1.75 0 0 1-3.5 0ZM32 55a21.923 21.923 0 0 1-14.477-5.458A3.702 3.702 0 0 0 18 47.75c0-1.735-2.273-4.706-2.97-5.576a1.035 1.035 0 0 0-1.56 0c-.197.246-.522.668-.883 1.172A21.999 21.999 0 1 1 32 55Z" />
    <path d="M32 39a4 4 0 1 0 4 4 4.004 4.004 0 0 0-4-4ZM47 20.75c0-1.735-2.273-4.706-2.97-5.576a1.035 1.035 0 0 0-1.56 0c-.697.87-2.97 3.841-2.97 5.576a3.75 3.75 0 0 0 7.5 0Zm-3.75 1.75a1.752 1.752 0 0 1-1.75-1.75 9.516 9.516 0 0 1 1.75-3.29A9.495 9.495 0 0 1 45 20.75a1.752 1.752 0 0 1-1.75 1.75ZM50.03 24.174a1.035 1.035 0 0 0-1.56 0c-.697.87-2.97 3.841-2.97 5.576a3.75 3.75 0 0 0 7.5 0c0-1.735-2.273-4.706-2.97-5.576Zm-.78 7.326a1.752 1.752 0 0 1-1.75-1.75 9.516 9.516 0 0 1 1.75-3.29A9.495 9.495 0 0 1 51 29.75a1.752 1.752 0 0 1-1.75 1.75ZM24.986 29.315a3.11 3.11 0 0 0-2.928 2.07 1 1 0 1 0 1.884.667 1.108 1.108 0 0 1 2.103.043 1 1 0 1 0 1.91-.59 3.092 3.092 0 0 0-2.969-2.19ZM38.986 29.315a3.11 3.11 0 0 0-2.928 2.07 1 1 0 1 0 1.884.667 1.108 1.108 0 0 1 2.103.043 1 1 0 1 0 1.91-.59 3.092 3.092 0 0 0-2.969-2.19Z" />
  </svg>
)
export default SvgComponent