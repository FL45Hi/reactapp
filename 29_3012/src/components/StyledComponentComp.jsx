import React, { useState, useRef } from 'react';
import styled from 'styled-components';

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1;
  height: 100%;

  padding: 0 10px;
  margin: 5px 15px;

  p {
    margin-bottom: 1rem;
  }

  button {
    padding: 10px 24px;
    color: #fff;
    border: none;
  }
`;

const ButtonWrapper = styled.button`
width: 100%;
margin: 10px 0px 10px 0px;
padding: 10px 0px;
background-color: gray;
color: rgb(156, 156, 156);
border: 0.5px solid rgb(156, 156, 156);
border-radius: 8px;
display: flex;
align-items: center;
`;

const DividerWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  
  hr {
    width: 100%;
    color: black;
  }
  span {
    position: absolute;
    font-size: 20px;
    top: 0px;
    left: 50%;
    color: rgb(105, 105, 105);
    background: white;
    transform: translateX(-50%);
  }
`;

const InputWrapper = styled.input`
 width: 50%;
 height: 45px;
 border: 1px solid grey;
 border-radius: 5px;
 padding: "15px 5px";
 font-size: "20px";
 outline: none;
 text-align center;
 :focus {
     border : 1px solid rgb(0, 153, 153);
 }
 `;


export const StyledComponentComp = (props) => {

  return (
    <>
      <Div>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, neque.</p>

        <button>Click Me!</button>



        <DividerWrapper>
          <hr />
          <span>or</span>
        </DividerWrapper>

        <InputWrapper type="text" placeholder="Input in Styled Component" />

        <ButtonWrapper>Styled Button</ButtonWrapper>

      </Div>




    </>
  )
}