import { getLatesNews } from '../../api/apiNews';
import { usefetch } from '../../helpers/hooks/useFetch';
import BannerList from '../BannerList/BannerList';
import styles from './styles.module.css';

const LatestNews = () => {
    const {data, isLoading} = usefetch(getLatesNews)
    return (
        <section className={styles.section}>
            <BannerList banners={data && data.news} isLoading={isLoading}/>
        </section>
    );
}
 
export default LatestNews;