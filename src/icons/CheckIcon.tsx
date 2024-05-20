interface CheckIconProps {
  className?: string
}

const CheckIcon: React.FC<CheckIconProps> = ({ className = "" }) => {
  return (
    <svg
      className={className}
      fill="white"
      xmlns="http://www.w3.org/2000/svg"
      height="20"
      viewBox="0 -960 960 960"
      width="20"
    >
      <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
    </svg>
  )
}

export default CheckIcon
