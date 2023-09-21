import { Component } from "react";
import { ModalBackdrop, ModalContent } from "./Modal.styled";

export class Modal extends Component{

    componentDidMount(){
        window.addEventListener('keydown', this.handelKeyDown)
    }
    
    componentWillUnmount(){
        window.removeEventListener('keydown', this.handelKeyDown)
    }

    handelKeyDown = (e)=>{
        if (e.code === 'Escape') {
            console.log('Жмакнули ESC, потрібно закрити модалку');
            this.props.onClose();
          }
    }

    handelBackdropClick = (e)=>{
        if(e.target === e.currentTarget){
            this.props.onClose()
        }
    }

    render(){
        return (
            <ModalBackdrop onClick={this.handelBackdropClick}>
                <ModalContent>
                    <h1>Hello!</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam unde officiis dicta quae dignissimos, nobis dolores itaque cupiditate debitis necessitatibus tenetur totam quis dolorum est, id enim at exercitationem sit consequuntur? Laboriosam provident temporibus laudantium neque, eveniet accusantium eligendi suscipit eius nam labore inventore, iste obcaecati rerum distinctio. Sunt, provident!</p>
                    <button type="button" onClick={this.props.onClose}> Close </button>
                </ModalContent>
            </ModalBackdrop>
        )
    }
}