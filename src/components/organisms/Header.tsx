import { UserDropdownMenu } from "./UserDropdownMenu";

export const Header = () => {
  return (
    <div className="flex justify-between items-center bg-blue-500 text-white h-14 px-10">
      <h1 className="scroll-m-20 text-xl sm:text-2xl font-extrabold tracking-tight">
        大学講義管理システム
      </h1>
      <UserDropdownMenu />
    </div>
  );
};
