import NewsList from '../../NewList/NewList';
import { TOTAL_PAGES } from '../../constants/constants';
import NewsFilters from '../NewsFilters/NewsFilters';
import Pagination from '../Pagination/Pagination';

import styles from './styles.module.css';

const NewsByFilter = ({filters, changeFilter, isLoading, news}) => {


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

      <Pagination
        totalPages={TOTAL_PAGES}
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
        handlePageClick={handlePageClick}
        currentPage={filters.page_number}
      />

      <NewsList isLoading={isLoading} news={news} />

      <Pagination
        totalPages={TOTAL_PAGES}
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
        handlePageClick={handlePageClick}
        currentPage={filters.page_number}
      />
        </section>
    );
}
 
export default NewsByFilter;