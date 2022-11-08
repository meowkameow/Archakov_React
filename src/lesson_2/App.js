import './App.css';
import React, { Component } from 'react';

function Form(){
    let email = '';
    let password = '';
    function onChangeInput(event) {
        if(event.target.type == 'text'){
            email = (event.target.value);
            console.log(email);
        }else {
            password = (event.target.value);
            console.log(password);
        }

    }

    // Функция проверки значений введенных в инпуты, ее должна вызвать форма
    function handleSubmit (event)
    {   event.preventDefault();
        let regExp = new RegExp('[0-9a-z]', 'i');
        let regExpMail = new RegExp(/[a-z0-9_.]+@[a-z0-9_.]/);
        let valid = true;

        if (regExp.test(password)== false || regExpMail.test(email)== false )
        {
            alert ( "incorrectly form." );
            valid = false;
        } else{
        console.log({ email, password });
        email = '';
        password = '';
        document.getElementById('mail').value = '';
        document.getElementById('pass').value = '';
        }

    }
    return(
        <form onSubmit={handleSubmit}>
            <input id={'mail'} className={"email"} type={"text"} onChange={onChangeInput} placeholder="email" /><br/>
            <input id={'pass'} className={"password"} type={"password"} onChange={onChangeInput} placeholder="password" /><br/>
            <button className={"formButton"} type={'submit'} >Send</button>
        </form>
    )
}


function App() {
  return (
    <div className="App">
        <Form />
    </div>
  );
}

export default App;



