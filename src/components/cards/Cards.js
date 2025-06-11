import { useEffect, useState } from "react";
import Card from "../card/Card";
import './style.scss';

const Cards = (props) => {

    const [characters, setCharacters] = useState([]);
    const [charactersByFormValue, setCharactersByFormValue] = useState([])
    
    useEffect(() => {
        fetch('https://naruto-br-api.site/characters')
            .then(response => response.json())
            .then(data => {
                setCharacters(data);
            });
    }, []); 

    useEffect(() => {
        if (props.researchValue)
        {
            const charactersFind = characters.filter(character => character.name.toLowerCase().includes(props.researchValue.toLowerCase()));
            setCharactersByFormValue(charactersFind);
        }
        else 
        {
            setCharactersByFormValue([]);
        }
    }, [props.researchValue])

    return (
        <div className="Cards">
            {
                !props.researchValue 
                ? 
                characters.map((character, index) => ( <Card key={index} character={character} /> )) 
                : 
                charactersByFormValue.map((character, index) => ( <Card key={index} character={character} /> )) 
            }
        </div>
    );
};

export default Cards;