import { Component } from 'react'
import {Container, Title, Option} from './ColorPicker.styled'

export class ColorPicker extends Component {

    state = {
        activeButtonIdx: 0 
    }


    render(){
        return (
            <Container>
                <Title >Color Picker</Title>
                <div>
                    {this.props.options.map((option, idx) => {
                    return <Option 
                            onClick={()=>{this.setState({activeButtonIdx: idx}
                                )}}
                            key={option.label}
                            style={{backgroundColor: option.color}}
                            >{option.label}</Option>
                            })}
                </div>
            </Container>      
        )
    }
}



