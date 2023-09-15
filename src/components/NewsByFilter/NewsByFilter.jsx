import NewsList from '../../NewList/NewList';
import { getNews } from '../../api/apiNews';
import { PAGE_SIZE, TOTAL_PAGES } from '../../constants/constants';
import { useDebaunce } from '../../helpers/hooks/useDebaunce';
import { usefetch } from '../../helpers/hooks/useFetch';
import { useFilters } from '../../helpers/hooks/useFilter';
import NewsFilters from '../NewsFilters/NewsFilters';
import PaginationWrapper from '../PaginationWrapper/PaginationWrapper';

import styles from './styles.module.css';

const NewsByFilter = () => {

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
        <section className={styles.section}>
          <NewsFilters changeFilter={changeFilter} filters={filters} />

          <PaginationWrapper
          top
          bottom
          totalPages={TOTAL_PAGES}
          handleNextPage={handleNextPage}
          handlePreviousPage={handlePreviousPage}
          handlePageClick={handlePageClick}
          currentPage={filters.page_number}
          >
          <NewsList isLoading={isLoading} news={data?.news} />
          </PaginationWrapper>
        </section>
    );
}
 
export default NewsByFilter;