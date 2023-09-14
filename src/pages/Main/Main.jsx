import {useState } from "react";
import NewsBaner from "../../components/NewsBaner/NewsBaner";
import styles from "./styles.module.css";
import { getCategories, getNews } from "../../api/apiNews";
import NewList from "../../NewList/NewList";
import Pagination from "../../components/Pagination/Pagination";
import Categories from "../../components/Categories/Categories";
import Search from "../../components/Search/Search";
import { useDebaunce } from "../../helpers/hooks/useDebaunce";
import { PAGE_SIZE, TOTAL_PAGES } from "../../constants/constants";
import { usefetch } from "../../helpers/hooks/useFetch";
import { useFilters } from "../../helpers/hooks/useFilter";

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

  const {data: dataCategories} = usefetch(getCategories)

  const handleNextPage = () => {
    if (filters.page_number < TOTAL_PAGES) {
      changeFilter('page_number', filters.page_number + 1);
    }
  };

  const handlePreviousPage = () => {
    if (filters.page_number > 1) {
      changeFilter('page_number',filters.page_number - 1);
    }
  };

  const handlePageClick = (pageNumber) => {
    changeFilter('page_number',pageNumber);
  };

  return (
    <main className={styles.main}>
      {dataCategories ? ( 
      <Categories
        categories={dataCategories.categories}
        selectedCategory={filters.category}
        setSelectedCategory={(category) => changeFilter('category', category)}
      />): null}

      <Search keywords={filters.keywords} setKeywords={(keywords) => changeFilter('keywords', keywords)} />

      <NewsBaner isLoading={isLoading} item={data && data.news && data.news[0]} />

      <Pagination
        totalPages={TOTAL_PAGES}
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
        handlePageClick={handlePageClick}
        currentPage={filters.page_number}
      />

      <NewList isLoading={isLoading} news={data?.news} />

      <Pagination
        totalPages={TOTAL_PAGES}
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
        handlePageClick={handlePageClick}
        currentPage={filters.page_number}
      />
    </main>
  );
};

export default Main;
