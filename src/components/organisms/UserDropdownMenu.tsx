import { Button } from "@/components/ui/button";
import { ChevronDown, LogOut } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAuth } from "@/hooks/useAuth";
import { LuLoader2 } from "react-icons/lu";
import { UserAvatar } from "../molecules/UserAvatar";
import { useUser } from "@/hooks/useUser";

export const UserDropdownMenu = () => {
  const { currentUser, isLoading: isLoadingUser } = useUser();
  const { logout, isLoading: isLoggingOut } = useAuth();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        asChild
        className="focus-visible:ring-0 focus-visible:ring-offset-0 flex gap-1 p-2"
      >
        <Button variant="ghost" size="bare">
          {isLoadingUser ? (
            <LuLoader2 className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <UserAvatar
              name={currentUser?.full_name ?? "Guest"}
              className="gap-4 text-base"
            />
          )}
          <ChevronDown />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40">
        <DropdownMenuItem onClick={logout} disabled={isLoggingOut}>
          {isLoggingOut ? (
            <>
              <LuLoader2 className="mr-2 h-4 w-4 animate-spin" />
              <span>Please Wait</span>
            </>
          ) : (
            <>
              <LogOut className="mr-2 h-4 w-4" />
              <span>Log out</span>
              <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
            </>
          )}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
