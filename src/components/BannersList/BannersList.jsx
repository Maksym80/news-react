import withSceleton from "../../helpers/hocs/withSceleton";
import styles from "../BannersList/style.module.css";
import NewsBanner from "../NewsBanner/NewsBanner";

const BannersList = ({ banners }) => {
  return (
    <ul className={styles.banners}>
      {banners?.map((banner) => {
        return <NewsBanner key={banner.id} item={banner} />;
      })}
    </ul>
  );
};

const BannersListWithSceleton = withSceleton(BannersList, "banner", 10, "row");

export default BannersListWithSceleton;
