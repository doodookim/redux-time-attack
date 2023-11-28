import React from 'react'
import styled from 'styled-components'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {addTodo} from '../../modules/todos'
import {v4 as uuidv4} from 'uuid';
function Input() {

  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');


  const dispatch = useDispatch();

    const buttonSubmitHandler = (event)=>{
        event.preventDefault();


      const newTodo = {
          id: uuidv4(),
          title,
          contents,
          isDone: false,

      }

      dispatch(addTodo(newTodo));


    }

    const titleChangeHandler = (event)=>{
      setTitle(event.target.value)
    }
  const contentsChangeHandler = (event)=>{
    setContents(event.target.value)
  }
  return <StyledInputBox>
    <form onSubmit={buttonSubmitHandler}>
    <input onChange={titleChangeHandler} value={title} type='text'></input>
    <input onChange={contentsChangeHandler} value={contents}type='text'></input>
    <button type='submit'>추가하기</button>
    </form>

  </StyledInputBox>
 
}

export default Input;

const StyledInputBox = styled.div`
    padding:30px;    
    background-color: #a6b294;
`