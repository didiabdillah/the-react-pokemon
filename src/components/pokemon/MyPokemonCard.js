import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'

import spinner from './spinner.gif'

const Sprite = styled.img`
    width: 5em;
    height: 5em;
    display: none;
`;

const Card = styled.div`
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    &:hover{
        box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    }
    -moz-user-select: none;
    -website-user-select: none;
    user-select: none;
    -o-user-select: none;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
    &:focus,
    &:hover,
    &:visited,
    &:link,
    &:active{
        text-decoration: none;
    }
`;
export default class MyPokemonCard extends Component {
    state = {
        id: '',
        name: '',
        nickname: '',
        imageUrl: '',
        pokemonIndex: '',
        imageLoading: true,
        toManyRequests: false
    };

    componentDidMount(){
         const {id, name, nickname, url} = this.props;
         const pokemonIndex = url.split("/")[url.split('/').length-2];
         const imageUrl = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokemonIndex}.png?raw=true`

         this.setState({id, name, nickname, imageUrl, pokemonIndex});
    }

    render() {
        const removePokemon = (id) =>{
            var confirm = window.confirm("Are You Sure?");

            if(confirm == true){ 
                let myPokemon = JSON.parse(localStorage.getItem('pokemon'));

                const newMyPokemon = myPokemon.filter((pokemon) => pokemon.id !== id);
                localStorage.setItem('pokemon', JSON.stringify(newMyPokemon));
                window.location.reload();
            }
        }
 
        return (
            <div className='col-md-3 col-sm-6 mb-5'>
                <Card className="card">
                    <h5 className="card-header">{this.state.pokemonIndex} <button className="btn btn-danger btn-sm" style={{float: 'right'}} onClick={() => removePokemon(this.state.id)}>Remove</button></h5>
                     <StyledLink to={`pokemon/${this.state.pokemonIndex}`}>
                    
                    {this.state.imageLoading ? (
                        <img src={spinner} style={{width: '5em', height: '5em'}} className="card-img-top rounded mx-auto d-block mt-2"></img>
                    ) : null}

                    <Sprite className="card-img-top rounded mx-auto mt-2" 
                    onLoad={() => this.setState({imageLoading: false})} 
                    onError={() => this.setState({toManyRequests: true})} 
                    src={this.state.imageUrl}
                    style={
                        this.state.toManyRequests ? {display: "none"} :
                        this.state.imageLoading ? null : {display: "block"}
                    }
                    />

                    {this.state.toManyRequests ? (<h6 className="mx-auto">
                        <span className="badge badge-danger mt-2">To Many Request</span>
                    </h6>) : null}
                    <div className="card-body mx-auto">
                        <h6 className="card-title text-center">
                            {this.state.nickname.toLowerCase().split(' ').map(letter=> letter.charAt(0).toUpperCase() + letter.substring(1)).join(' ')}
                        </h6>
                        <p className="text-center">({this.state.name})</p>
                    </div>
                     </StyledLink>
                </Card>
            </div>
        )
    }
}
