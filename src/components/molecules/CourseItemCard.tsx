import { Course } from "@/hooks/useCourseList";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";

type CourseItemCardProps = {
  course: Course;
};

export const CourseItemCard: React.FC<CourseItemCardProps> = ({ course }) => {
  const { name, description } = course;

  return (
    <Card className="w-full bg-inherit shadow-md">
      <CardHeader>
        <CardTitle className="flex items-center gap-4 text-xl">
          {name}
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
    </Card>
  );
};
