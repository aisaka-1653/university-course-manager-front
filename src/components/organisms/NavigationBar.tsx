import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";

export function NavigationBar() {
  return (
    <NavigationMenu className="justify-start bg-blue-400 text-white px-6">
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link to="/home" className={navigationMenuTriggerStyle()}>
            ホーム
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link to="/courses" className={navigationMenuTriggerStyle()}>
            授業一覧
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link
            to="/courses/registration"
            className={navigationMenuTriggerStyle()}
          >
            受講登録
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link to="/courses/schedule" className={navigationMenuTriggerStyle()}>
            時間割
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
