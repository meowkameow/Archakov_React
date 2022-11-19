import React from "react";
import { CommentStateContext } from '../App'


export function Form() {
    const setComments = React.useContext(CommentStateContext).setCommentsList;
    const commentList = React.useContext(CommentStateContext).commentsList;

    const [fullName, setFullName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [text, setText] = React.useState('');


    function onChangeInput(event){
        if(event.target.id === 'name'){
            setFullName(event.target.value)
        }else if (event.target.id === 'email'){
            setEmail(event.target.value)
        } else{
            setText(event.target.value)
        }
    }

    function submitFunction(event){
        event.preventDefault();

        let comment = {
            fullName: fullName,
            email: email,
            createdAt: new Date(),
            text: text
        };
        setComments([...commentList, comment]);

        console.dir(commentList);

        setFullName('');
        setEmail('');
        setText('');
    }


    return(
        <div>
            <form onSubmit={submitFunction}>
                <h3>Обратная связь:</h3>
                <input id={'name'} type={"text"}  onChange={onChangeInput} placeholder={'Введите имя'} value={fullName} />
                <input id={'email'} type={"email"} onChange={onChangeInput} placeholder={'Введите почту'} value={email} />
                <input id={'comment'} type={"text"} onChange={onChangeInput} placeholder={'Введите комментарий'} value={text} />
                <button type={"submit"}>Отправить</button>
            </form>
        </div>
    )
}