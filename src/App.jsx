import {Counter} from 'components/Counter/Counter';
import { GlobalStyle } from './Global.styled';



export const App = () => {
  return (
    <>
      
      <Counter />
      <GlobalStyle />
    </>
  )
}






















// import paintings from './paintings.json';
// import GalleryList from 'components/GalleryList/GalleryList';
// import { Container } from 'components/Container/Container';
// import { ColorPicker } from 'components/ColorPicker/Colorpicker';
{/* <Container>
        <ColorPicker options={colorPickerOptions} />
      </Container>

      <Container>
        <GalleryList items={paintings} />
      </Container> */}

      // const colorPickerOptions = [
      //   { label: 'red', color: '#F44336' },
      //   { label: 'green', color: '#4CAF50' },
      //   { label: 'blue', color: '#2196F3' },
      //   { label: 'grey', color: '#607D8B' },
      //   { label: 'pink', color: '#E91E63' },
      //   { label: 'indigo', color: '#3F51B5' },
      // ];