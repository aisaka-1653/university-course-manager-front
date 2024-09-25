import { useUser } from "@/hooks/useUser";
import { UserAvatar } from "../molecules/UserAvatar";
import { Loader2 } from "lucide-react";

export const Header = () => {
  const { currentUser, isLoading } = useUser();

  return (
    <div className="flex justify-between items-center bg-blue-500 text-white h-14 px-10">
      <h1 className="scroll-m-20 text-2xl font-extrabold tracking-tight">
        大学講義管理システム
      </h1>
      {isLoading ? (
        <Loader2 className="h-4 w-4 animate-spin" />
      ) : (
        <UserAvatar
          name={currentUser?.full_name ?? "Guest"}
          className="gap-4"
        />
      )}
    </div>
  );
};
