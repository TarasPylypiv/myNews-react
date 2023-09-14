import NewsItem from '../components/NewsItem/NewsItem';
import withSkeleton from '../helpers/hocs/withSkeleton';
import styles from './styles.module.css';

const NewList = ({news}) => {
    return (
        <ul className={styles.list}>
          {news.map(item => (
            <NewsItem key={item.id} item={item}/>
          ))}
        </ul>
    );
};
const NewsListWithSkeleton = withSkeleton(NewList, 'item', 10)
 
export default NewsListWithSkeleton;