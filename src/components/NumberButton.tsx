interface Props {
  onClick: (value: number) => void;
  children: string;
  className?: string;
}

export default function NumberButton({ children, className, onClick }: Props) {
  const baseClass = "calculator-btn";
  const buttonClassName = baseClass + (className ? " " + className : "");

  const handleClick = () => onClick(parseInt(children));

  return (
    <button className={buttonClassName} onClick={handleClick}>
      {children}
    </button>
  );
}
