import * as React from "react"
const SvgComponent = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={800}
    height={800}
    viewBox="0 0 32 32"
    {...props}
  >
    <title>{"bomb-explosion"}</title>
    <path d="M30.79 20.247v-1.813c-3.349-1.335-5.321-2.581-5.928-4.568-.498-1.631 1.004-3.801 3.836-6.416-2.958 1.621-5.135 2.722-5.997 1.185-.774-1.38.093-3.966 1.464-7.357h-.976c-1.094 1.731-2.025 3.044-2.371 2.72-.301-.283-.305-1.301-.174-2.72l-2.022-.001c-1.338 2.997-2.757 4.695-4.812 4.986-1.756.249-4.029-1.814-6.59-4.742 1.458 2.894 1.994 5.215 1.011 5.788-1.162.678-3.491-.121-6.939-1.569v.662c2.372 1.506 4.557 2.975 4.149 3.522-.358.48-1.992.397-4.149.105v1.709c3.121 1.576 4.812 3.193 4.812 4.707 0 1.302-2.601 3.961-4.812 6.067v1.011c1.995-.654 4.443-.908 5.265.558.839 1.495.276 3.611-.802 6.695h1.848c1.958-2.645 3.819-4.766 4.812-4.672.703.066.375 2.225-.105 4.672h.558c1.743-4.845 3.892-7.814 7.078-7.706 2.796.096 5.449 2.91 8.368 4.916-1.526-1.867-4.337-4.526-3.731-5.021.637-.521 3.367.432 6.207 1.464v-.907c-1.863-1.271-3.576-2.492-3.138-2.929.394-.393 1.596-.456 3.138-.349zm-8.842-2.166c-.335.334 1.759 1.577 2.956 2.438-1.81-.632-4.092-1.582-4.518-1.234-.308.252 1.12 1.603 1.897 2.553-1.485-1.021-2.845-2.448-4.267-2.496-2.092-.071-3.29 2.442-4.323 6.282.272-1.823 1.089-4.679.502-4.733-.833-.078-2.846 2.892-4.351 5.106 1.051-3.185 2.006-5 1.367-6.139-.577-1.029-2.744-.403-3.682.143 1.105-1.043 3.447-3.141 3.447-4.025 0-1.286-2.32-2.733-6.599-3.951 2.572.405 5.888 1.149 6.275.631.303-.405-2.192-1.813-3.71-2.811 2.672 1.146 4.365 1.92 5.122 1.479.5-.292.222-1.47-.52-2.942 1.303 1.489 2.471 2.538 3.364 2.411 1.884-.267 2.698-2.76 4.166-7.518-.345 2.648-1.044 5.965-.614 6.369.322.303 1.636-2.144 2.65-3.701-1.144 2.886-2.245 5.056-1.69 6.045.439.782 1.552.23 3.056-.594-1.44 1.33-2.214 2.433-1.961 3.263.503 1.647 2.857 2.292 7.065 3.766-2.161-.28-5.135-.842-5.634-.344z" />
  </svg>
)
export default SvgComponent
