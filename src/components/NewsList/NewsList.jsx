import withSceleton from "../../helpers/hocs/withSceleton";
import NewsItem from "../NewsItem/NewsItem";
import styles from "../NewsList/style.module.css";

const NewsList = ({ news }) => {
  return (
    <ul className={styles.list}>
      {news.map((item) => {
        return <NewsItem key={item.id} item={item} />;
      })}
    </ul>
  );
};

const NewsListWithSceleton = withSceleton(NewsList, "item", 10);
export default NewsListWithSceleton;
