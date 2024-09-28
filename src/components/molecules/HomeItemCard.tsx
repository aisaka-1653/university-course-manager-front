import { LucideIcon } from "lucide-react";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Link } from "react-router-dom";

type HomeItemProps = {
  to: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export const HomeItemCard: React.FC<HomeItemProps> = (props) => {
  const { to, title, description, icon: Icon } = props;

  return (
    <Link to={to} className="rounded-lg hover:bg-accent">
      <Card className="w-full bg-inherit shadow-md">
        <CardHeader>
          <CardTitle className="flex items-center gap-4 text-xl">
            <Icon />
            <span>{title}</span>
          </CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
      </Card>
    </Link>
  );
};
