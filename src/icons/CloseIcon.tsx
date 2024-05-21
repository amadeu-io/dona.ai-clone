interface Props {
  className?: string
  onClick: () => void

}

const CloseIcon: React.FC<Props> = ({ className, onClick }) => {
  return (
    <svg
      width="24"
      height="24"
      className={className}
      onClick={onClick}

      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -960 960 960"
    >
      <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
    </svg>
  )
}

export default CloseIcon
