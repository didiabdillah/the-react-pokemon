import React, { Component } from 'react'
import MyPokemonCard from './MyPokemonCard';

export default class MyPokemon extends Component {
    render() {
        let myPokemon = JSON.parse(localStorage.getItem('pokemon'));
        return (
            <div>
                <h2 className="my-3">My Pokemon</h2>
                <div className="row">
                {myPokemon.map((pokemon) => {
                    const { id, index, name, nickname } = pokemon;
                    return (
                         <MyPokemonCard 
                            key = {id}
                            id = {id}
                            name = {name}
                            nickname = {nickname}
                            url = {"https://pokeapi.co/api/v2/pokemon/" + index + "/"}
                            />
                        // <div className='item' key={id}>
                        // <h4>{nickname}</h4>
                        // <p>{name}</p>
                        // </div>
                    );
                })}
                </div>

                    {/* <div className="row">
                        {myPokemon.map((pokemon) => {
                            const { id, index, name, nickname } = pokemon;
                            <h1>{name}</h1>
                            // <PokemonCard 
                            // key = {id}
                            // name = {name}
                            // url = {"https://pokeapi.co/api/v2/pokemon/" + index}
                            // />
                        })};
                    </div> */}
        
    
            </div>
        )
    }
}
