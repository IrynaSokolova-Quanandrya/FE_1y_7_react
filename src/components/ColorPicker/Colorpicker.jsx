import { Component } from 'react';
import {Container, Title, Option} from './ColorPicker.styled'

export class ColorPicker extends Component {
    state = {
        currentOptionIdx: 0
    }

    handleActive = (idx) => {
        this.setState({
            currentOptionIdx: idx,
        })
    }
    render(){
        return (
            <Container>
                <Title >Color Picker</Title>
                <div>
                    {this.props.options.map((option, idx) => {
                    return <Option 
                            key={option.label}
                            onClick={()=>{this.handleActive(idx)}}
                            backgroundcolor={option.color}
                            currentidx={this.state.currentOptionIdx}
                            idx={idx}
                            >{option.label}</Option>
                            })}
                </div>
            </Container> 
    )}
}



