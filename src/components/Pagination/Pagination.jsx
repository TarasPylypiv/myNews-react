import styles from './styles.module.css';

const Pagination = ({totalPages,handleNextPage, handlePreviousPage, handlePageClick, currentPage}) => {
    return (
        <div className={styles.pagination}>
            <button
            disabled ={currentPage <= 1}
            className={styles.arrow}
            onClick={handlePreviousPage}>{'<'}</button>
            <div className={styles.list}>
                {[...Array(totalPages)].map((_, index) => {
                    return <button
                    className={styles.pageNumber}
                    onClick={() => handlePageClick(index+1)}
                    disabled ={index+1 ===currentPage}
                    key={index}>{index+1}</button>
                })}
            </div>
            <button
             disabled ={currentPage >= totalPages}
             className={styles.arrow}
            onClick={handleNextPage}>{'>'}</button>
        </div>
    );
}
 
export default Pagination;