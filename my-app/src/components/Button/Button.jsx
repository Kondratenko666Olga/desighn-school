import './Button.scss';

export default function Button({
  text,
  onClick,
  className = '',
  disabled = false,
}) {
  return (
    <button
      className={`btn ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
}
