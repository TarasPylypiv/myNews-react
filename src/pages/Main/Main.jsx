import { useEffect, useState } from "react";
import NewsBaner from "../../components/NewsBaner/NewsBaner";
import styles from "./styles.module.css";
import { getNews } from "../../api/apiNews";
import NewList from "../../NewList/NewList";

const Main = () => {
    const [news, setNews] = useState([])
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await getNews();
        setNews(response.news);
      } catch (error) {
        console.log(error);
      }
    };
    fetchNews();
  }, []);
  return (
    <main className={styles.main}>
      {news.length> 0 ? <NewsBaner item={news[0]}/> : null}
      <NewList news={news}/>
    </main>
  );
};

export default Main;
