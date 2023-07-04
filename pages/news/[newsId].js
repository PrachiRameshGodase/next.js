import { useRouter } from "next/router";
//our-domian.com/news/something-important
const DetailPage = () => {
  const router=useRouter();

  const newsId=router.query.newsId
  return (
    <div>
      <h1>Welcome to the Next.js Detail page!</h1>
    </div>
  );
};

export default  DetailPage;
