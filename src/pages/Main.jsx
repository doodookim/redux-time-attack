import React from 'react'
import Header from '../redux/components/Header'
import Input from '../redux/components/Input';
import Todo from '../redux/components/Todo';

function Main() {
  return (
    <>
    <Header/>
    <Input/>
    <Todo isActive={true}/>
    <Todo isActive={false}/>
    <Todo/>
     {/* <Footer/>   */}
    </>
  )
}

export default Main;