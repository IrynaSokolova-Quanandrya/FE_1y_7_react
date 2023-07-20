import painting from '../painting.json';
import { Container } from './Container/Container';
import { GalleryList } from './GalleryList/GalleryList';
import { Recipe } from './Recipe/Recipe';
import recipies from 'recipies';
export const App = () => {

  return (
    <>
    {recipies.map(({name, time, servings, calories, image}) => (
     
    <Recipe
      key={image}
      name={name}
      time={time}
      servings={servings}
      calories={calories}
      image={image}
    />
    
    ))
    }
    {/* <Container title="Title">
      <GalleryList items={painting}/>
    </Container>
    <Container>  </Container>
    <Container title="Title2">  </Container> */}
      
    </>
    
  );
};
