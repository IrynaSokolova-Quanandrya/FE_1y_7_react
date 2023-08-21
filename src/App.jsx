import {Counter} from 'components/Counter/Counter';
import { GlobalStyle } from './Global.styled';
import { Dropdown } from 'components/Dropdown/Dropdown';
import { ColorPicker } from 'components/ColorPicker/Colorpicker';
const colorPickerOptions = [
        { label: 'red', color: '#F44336' },
        { label: 'green', color: '#4CAF50' },
        { label: 'blue', color: '#2196F3' },
        { label: 'grey', color: '#607D8B' },
        { label: 'pink', color: '#E91E63' },
        { label: 'indigo', color: '#3F51B5' },
      ];


export const App = () => {
  return (
    <>    
    <ColorPicker options={colorPickerOptions}/>
    {/* <Dropdown/> */}
      {/* <Counter  initialValue= {0}/> */}
      <GlobalStyle />
    </>
  )
}
























      