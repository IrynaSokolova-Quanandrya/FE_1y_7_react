import GalleryItem from '../GalleryItem/GalleryItem';
import PropTypes from 'prop-types';
import s from './GalleryList.module.css';

console.log(s);

function GalleryList({ items }) {
  return (
    <ul className={s.GalleryItemList}>
      {items.map(item => (
        <li className={s.GalleryItem} key={item.id}>
          <GalleryItem
            imageUrl={item.url}
            title={item.title}
            author={item.author.tag}
            profileUrl={item.author.url}
            price={item.price}
            quantity={item.quantity}
          />
        </li>
      ))}
    </ul>
  );
}

GalleryList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};

export default GalleryList;
