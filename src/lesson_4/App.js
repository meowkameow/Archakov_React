import './App.css';
import React, { Component } from 'react';
import {Phrase} from "./components/Phrase";
import {EmptyBlock} from "./components/EmptyBlock";


const adjectivesArr = [
    "абсолютный",
    "адский",
    "азартный",
    "активный",
    "ангельский",
    "астрономический",
    "баснословный",
    "безбожный",
    "безбрежный",
    "безвозвратный",
    "безграничный",
    "бездонный",
    "бездушный",
    "безжалостный",
    "замечательно",
    "замечательный",
    "записной",
    "запредельный",
    "заядлый",
    "звериный",
    "зверский",
    "зеленый",
    "злой",
    "злостный",
    "значительный",
    "неоспоримый",
    "неотразимый",
    "неоценимый",
    "непередаваемый"
];

const nounsArr = [
    "лгун",
    "день",
    "конь",
    "олень",
    "человек",
    "программист",
    "ребёнок",
    "конец",
    "город",
    "дурак"
];



function App(){
    //стейт списка фраз
    const [phraseList, setPhraseList] = React.useState([]);

    //функция добавляющая в стейт фраз новую фразу
    const addPhrase = () => {
        let adjectiveOne = adjectivesArr[Math.floor(Math.random() * adjectivesArr.length)];
        let adjectiveTwo = adjectivesArr[Math.floor(Math.random() * adjectivesArr.length)];
        let noun = nounsArr[Math.floor(Math.random() * nounsArr.length)];
        let phrase = `${adjectiveOne} ${adjectiveTwo} ${noun}`
        setPhraseList([...phraseList, phrase]);
    };

    const clearPhrases = ()=>{
        setPhraseList([]);
    }

    const renderPhrase = phraseList.map(p =>{
        return(
        <Phrase text={p}/>
        )
    })



    return(
        <div className="wrapper">
            {phraseList.length ?
            <div className="list">
                {renderPhrase}
            </div> :
            <EmptyBlock/>}
            <button className="btn btn_generate" onClick={addPhrase}>Сгенерировать</button>
            <button className="btn btn_clear" onClick={clearPhrases}> Очистить</button>
        </div>
    )
}

export default App;