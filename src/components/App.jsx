import painting from '../painting.json';
import { Container } from './Container/Container';
import { GalleryList } from './GalleryList/GalleryList';

export const App = () => {
  return (
    <>
    <Container title="Title">
      <GalleryList items={painting}/>
    </Container>
    <Container>  </Container>
    <Container title="Title2">  </Container>
      
    </>
    
  );
};
