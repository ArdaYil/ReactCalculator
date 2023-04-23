import OperatorType from "../enums/OperatorType";

interface Props {
  onClick: () => void;
  type: OperatorType;
  className?: string;
}

interface IconInterface {
  type: string;
  icon: string;
}

const icons = new Map<OperatorType, IconInterface>();

icons.set(OperatorType.ADDITION, { type: "text", icon: "+" });
icons.set(OperatorType.SUBTRACTION, { type: "text", icon: "-" });
icons.set(OperatorType.MULTIPLICATION, { type: "text", icon: "x" });
icons.set(OperatorType.DIVISION, { type: "text", icon: "÷" });
icons.set(OperatorType.POWEROF, { type: "text", icon: "^" });
icons.set(OperatorType.ROOT, { type: "text", icon: "√" });
icons.set(OperatorType.ROOT, { type: "text", icon: "√" });
icons.set(OperatorType.EQUAL, { type: "text", icon: "=" });

export default function OperatorButton({ type, className, onClick }: Props) {
  const baseClass = "operator-btn--" + type.toString();
  const buttonClassName = baseClass + (className ? " " + className : "");
  const icon = icons.get(type);

  return (
    <button onClick={onClick} className={buttonClassName}>
      {icon?.icon}
    </button>
  );
}
