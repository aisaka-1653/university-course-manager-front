import { useCourseList } from "@/hooks/useCourseList";
import { CourseItemCard } from "../molecules/CourseItemCard";
import { useLocation, useNavigate } from "react-router-dom";
import { SectionTitle } from "../atoms/SectionTitle";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { LuLoader2 } from "react-icons/lu";

export const CourseList = () => {
  const navigate = useNavigate();
  const search = useLocation().search;
  const query = new URLSearchParams(search);
  const season = query.get("season") || "first";

  const { courses, isLoading } = useCourseList(season);

  return (
    <div className="p-6 sm:p-10">
      <SectionTitle className="mb-4">授業一覧</SectionTitle>
      <Tabs defaultValue="first">
        <TabsList>
          <TabsTrigger
            value="first"
            onClick={() => navigate("/courses?season=first")}
          >
            {isLoading ? (
              <>
                <LuLoader2 className="mr-2 h-4 w-4 animate-spin" />
                <span>Please Wait</span>
              </>
            ) : (
              "前期"
            )}
          </TabsTrigger>
          <TabsTrigger
            value="second"
            onClick={() => navigate("/courses?season=second")}
          >
            {isLoading ? (
              <>
                <LuLoader2 className="mr-2 h-4 w-4 animate-spin" />
                <span>Please Wait</span>
              </>
            ) : (
              "後期"
            )}
          </TabsTrigger>
        </TabsList>
        <TabsContent value="first">
          {courses?.map((course) => (
            <CourseItemCard key={course.id} course={course} />
          ))}
        </TabsContent>
        <TabsContent value="second">
          {courses?.map((course) => (
            <CourseItemCard key={course.id} course={course} />
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
};
