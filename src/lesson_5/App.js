import './App.css';
import React, { Component } from 'react';


import CommentsList from "./components/CommentsList";
import {Form} from "./components/Form";


export const CommentStateContext = React.createContext({});

function App(){
    //стейт массива комментариев
    const [commentsList, setCommentsList] = React.useState([]);

    //функция добавляющая в стейт комментариев новый комментарий
   /* const addComment = () => {
       let comment = {
            fullName: "Вася Пупкин",
            email: "vasya@mail.ru",
            createdAt: "Thu Oct 14 2021 13:41:01",
            text: "....."
        }; новый комментарий должен быть объектом таким, но выводить в самом
        приложеении надо только имя и текст
        setCommentsList([...commentsList, comment]);
    }; */


    return(

        <div className="wrapper">
            <CommentStateContext.Provider value={{commentsList, setCommentsList}}>
            <CommentsList/>
            <Form/>
        </CommentStateContext.Provider>
        </div>
    )
}

export default App;