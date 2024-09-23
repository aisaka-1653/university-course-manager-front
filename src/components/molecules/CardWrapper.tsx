import { ReactElement } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

type CardWrapperProps = {
  title: string;
  description: string;
  children: ReactElement;
};

export const CardWrapper: React.FC<CardWrapperProps> = (props) => {
  const { title, description, children } = props;

  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
};
