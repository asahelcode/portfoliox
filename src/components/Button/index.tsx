interface ButtonProps {
  color?: string;
  label: string;
  icon?: React.ReactNode;
}

const Button = ({ color, label, icon }: ButtonProps) => {
  const buttonStyle = `px-10 py-3 ${
    color ? `bg-[#${color}]` : "bg-white"
  } flex justify-center items-center rounded-md font-poppins font-medium `;
  return (
    <button className={buttonStyle}>
      {label}
      {icon && <span className="ml-2 text-xs">{icon}</span>}
    </button>
  );
};

export default Button;
