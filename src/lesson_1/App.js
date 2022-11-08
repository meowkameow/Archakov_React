import './App.css';
import React, { Component } from 'react';

function Profile({name, registredAt}){
    let year = registredAt.getFullYear();
    let day = registredAt.getDate();
    let month = registredAt.getMonth();
    let userName = name.split(' ')[0];

    return(
        <p>Привет, {userName} <br/> Дата регистрации: {day} {montoToStr(month)} {year} </p>
    )
}

function montoToStr(num) {
    return num > 12 || num < 1
        ? null
        : 'января,февраля,марта,апреля,мая,июня,июля,августа,сентября,октября,ноября,декабря'.split(',')[
        num - 1
            ];
}

function App() {
  return (
    <div className="App">
        <Profile name="Вася Пупкин" registredAt={new Date(2021, 5, 22)} />
        <ProfileClass name="Вася Пупкин" registredAt={new Date(2021, 5, 22)} />
    </div>
  );
}

export default App;


class ProfileClass extends React.Component {
    render() {
        let year = this.props.registredAt.getFullYear();
        let day = this.props.registredAt.getDate();
        let month = this.props.registredAt.getMonth();
        let userName = this.props.name.split(' ')[0];
        return <p>Привет, {userName} <br/> Дата регистрации: {day} {montoToStr(month)} {year} </p>;
    }
}

