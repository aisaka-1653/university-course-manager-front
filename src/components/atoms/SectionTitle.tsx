import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type SectionTitleProps = {
  className?: string;
  children: ReactNode;
};

export const SectionTitle: React.FC<SectionTitleProps> = (props) => {
  const { className, children } = props;

  return (
    <h2 className={twMerge("text-xl font-bold", className)}>{children}</h2>
  );
};
