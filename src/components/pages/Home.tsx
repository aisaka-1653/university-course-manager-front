import { HomeItemList } from "../organisms/HomeItemList";
import { SectionTitle } from "../atoms/SectionTitle";

export const Home = () => {
  return (
    <div className="p-6 sm:p-10">
      <SectionTitle className="mb-4">ホーム</SectionTitle>
      <HomeItemList className="mb-10" />
      <SectionTitle className="mb-4">お知らせ</SectionTitle>
      <p>お知らせはありません</p>
    </div>
  );
};
