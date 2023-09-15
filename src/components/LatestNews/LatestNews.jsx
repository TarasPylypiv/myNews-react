import BannerList from '../BannerList/BannerList';
import styles from './styles.module.css';

const LatestNews = ({banners, isLoading}) => {
    return (
        <section className={styles.section}>
            <BannerList banners={banners} isLoading={isLoading}/>
        </section>
    );
}
 
export default LatestNews;