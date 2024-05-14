import Image from "../Image/Image";
import { formatDate } from "../../helpers/formatDate";
import { formatTimeAgo } from "../../helpers/formatTimeAgo";
import styles from "../NewsBanner/style.module.css";
import withSceleton from "../../helpers/hocs/withSceleton";

const NewsBanner = ({ item }) => {
  return (
    <div className={styles.banner}>
      <Image image={item.image} />
      <h3 className={styles.title}>{item.title}</h3>
      <p className={styles.extra}>
        {formatTimeAgo(item.published)} by {item.author}
      </p>
    </div>
  );
};

const NewsBannerWithSceleton = withSceleton(NewsBanner, "banner", 1);

export default NewsBannerWithSceleton;
