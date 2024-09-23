import { useAuth } from "@/hooks/useAuth";
import { Button } from "../ui/button";

export const Home = () => {
  const { logout } = useAuth();
  return <Button onClick={logout}>ログアウト</Button>;
};
