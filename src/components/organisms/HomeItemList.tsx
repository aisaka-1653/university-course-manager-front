import { BookOpen, CalendarPlus, Clock } from "lucide-react";
import { HomeItemCard } from "../molecules/HomeItemCard";
import { twMerge } from "tailwind-merge";

type HomeItemListProps = {
  className?: string;
};

export const HomeItemList: React.FC<HomeItemListProps> = ({ className }) => {
  return (
    <div className={twMerge("flex flex-col gap-4", className)}>
      <HomeItemCard
        to="/courses"
        title="授業一覧"
        description="登録可能な授業を確認"
        icon={BookOpen}
      />
      <HomeItemCard
        to="/courses/registration"
        title="受講登録"
        description="新しい授業を登録"
        icon={CalendarPlus}
      />
      <HomeItemCard
        to="/courses/schedule"
        title="時間割"
        description="スケジュールを確認"
        icon={Clock}
      />
    </div>
  );
};
