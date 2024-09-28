import { User2 } from "lucide-react";
import { twMerge } from "tailwind-merge";

type UserAvatar = {
  name: string;
  className?: string;
};

export const UserAvatar: React.FC<UserAvatar> = (props) => {
  const { name, className } = props;

  return (
    <div className={twMerge("flex justify-center items-center", className)}>
      <User2 />
      <p>{name}</p>
    </div>
  );
};
