import React from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components'

function Todo({isActive}) {

    const todos = useSelector((state)=>state.todos);

    

  return (
    <StyleList>
        <h4>{isActive ? '할 일🔥' : '완료된 일🐶'}</h4>
        {todos
        .filter((item) => item.isDone === !isActive)
        .map((item)=>{
            return (
            <StyledTodo>
            <h4>{item.title}</h4>
            <p>{item.contents}</p>
            <button>완료</button>
            <button>삭제</button>
            </StyledTodo>
        );
    })}
    </StyleList>
  )
}

export default Todo

const StyleList = styled.div`
    background-color: #cd9c6a;
    padding: 30px;
`
const StyledTodo = styled.div`
    background-color: #8f400c;
    color: white;
    margin: 10px;
    padding: 10px;
`