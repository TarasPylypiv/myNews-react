import withSkeleton from "../../helpers/hocs/withSkeleton";
import NewsBaner from '../NewsBaner/NewsBaner'
import styles from './styles.module.css';

const BannerList = ({banners}) => {
    return (
        <ul className={styles.banners}>
            {banners?.map(banner => {
                return (
                    <NewsBaner key={banner.id} item={banner}/>
                )
            })}
        </ul>
    );
}
const BannerListWithSkeleton = withSkeleton(BannerList, 'banner', 10, 'row')
 
export default BannerListWithSkeleton;