import NewsItem from '../components/NewsItem/NewsItem';
import styles from './styles.module.css';

const NewList = ({news}) => {
    return (
        <ul className={styles.list}>
          {news.map(i => (
            <NewsItem key={i.id} item={i}/>
          ))}
        </ul>
    );
}
 
export default NewList;