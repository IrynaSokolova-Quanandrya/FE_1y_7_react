import PropTypes from 'prop-types';
import defaultImage from './default.jpg';
import './GalleryItem.css';

const GalleryItem = ({
  imageUrl = defaultImage,
  title,
  profileUrl,
  author,
  price,
  quantity,
}) => {
  return (
    <div className='GalleryItem'>
      <img src={imageUrl} alt={title} width="480" />
      <h2 className='title'>{title}</h2>
      <p>
        Автор: <a href={profileUrl}>{author}</a>
      </p>
      <p>Ціна: {price} грн</p>
      <p>Доступність: {quantity < 10 ? 'закінчується' : 'є в наявності'}</p>
      <button className={quantity < 10 ? 'red' : 'green'} type="button">Додати в кошик</button>
    </div>
  );
};

GalleryItem.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  profileUrl: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  price: PropTypes. number.isRequired,
  quantity: PropTypes.number.isRequired,

}

export default GalleryItem;
