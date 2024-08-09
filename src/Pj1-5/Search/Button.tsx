import { ReactNode } from "react";

interface ButtonProps {
  name: string;
  icon: ReactNode;
  bgColor: string;
}

const Button = ({ name, icon, bgColor }: ButtonProps) => {
  const borderClass = bgColor === "bg-white" ? "border border-[#DBD5EC]" : "";

  return (
    <>
      <button
        className={`flex h-[108px] w-[112px] flex-col items-center justify-center gap-1 rounded-lg ${bgColor} cursor-pointer ${borderClass} p-6 font-poppin font-medium`}
      >
        {icon}

        <h1 className="text-[#281A51]">{name}</h1>
      </button>
    </>
  );
};

export default Button;
