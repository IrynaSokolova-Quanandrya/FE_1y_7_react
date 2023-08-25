import { styled } from "styled-components";

export const Container = styled.div`
    padding: 10px;
`
export const Title = styled.h1`
line-height: 1.3;
`


export const Option = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 60px;
  margin: 8px;
  background-color: ${props=>props.backgroundcolor};
  transition: scale 250ms linear;
  border-radius: 50%;

  border: ${({currentidx, idx, theme})=> `3px solid ${theme.colors.success}` }

  &:hover{
    transform: scale(1.1)
  }
`
  
