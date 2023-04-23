interface Props {
  children: number;
  className?: string;
}

export default function Display({ children, className }: Props) {
  const baseClass = "calculator-display";
  const displayClassName = baseClass + (className ? " " + className : "");

  return <div className={displayClassName}>{children}</div>;
}
