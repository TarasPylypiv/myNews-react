import styles from "./styles.module.css";
import {getNews } from "../../api/apiNews";
import { useDebaunce } from "../../helpers/hooks/useDebaunce";
import { PAGE_SIZE} from "../../constants/constants";
import { usefetch } from "../../helpers/hooks/useFetch";
import { useFilters } from "../../helpers/hooks/useFilter";
import LatestNews from "../../components/LatestNews/LatestNews";
import NewsByFilter from "../../components/NewsByFilter/NewsByFilter";

const Main = () => {
const {filters, changeFilter} = useFilters({
  page_number: 1,
  page_size: PAGE_SIZE,
  category: null,
  keywords: "",
})

  const debouncedKeywords = useDebaunce(filters.keywords, 1500);

  const {data, isLoading} = usefetch(getNews, {
    ...filters,
    keywords: debouncedKeywords,
  })

  return (
    <main className={styles.main}>
      <LatestNews isLoading={isLoading} banners={data && data.news}/>
      <NewsByFilter
      news={data?.news} 
      isLoading={isLoading}
      filters={filters}
      changeFilter={changeFilter}
      
      />
    </main>
  );
};

export default Main;
