import paintings from './paintings.json';
import GalleryList from 'components/GalleryList/GalleryList';


export default function App() {
  return (    
    <>   
        <GalleryList items={paintings} />     
      </>
  )
}
