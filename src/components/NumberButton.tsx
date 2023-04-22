interface Props {
  onClick: () => void;
  children: string;
  className: string;
}

export default function NumberButton({ children, className, onClick }: Props) {
  const baseClass = "calculator-btn";
  const buttonClassName = baseClass + (className ? " " + className : "");

  return (
    <button className={buttonClassName} onClick={onClick}>
      {children}
    </button>
  );
}
