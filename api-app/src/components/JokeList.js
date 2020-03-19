import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { getData } from '../actions';

const Main=styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: white;
  background-color: cornflowerblue;
  width: 100%;
  max-width: 18rem;
  margin: 1rem;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 1px 6px -2px #000;
  margin-bottom: 30px;
  text-align: center;
`
const Each = styled.div `
display: flex;
flex-flow: row wrap;
position: absolute;
justify-content: space-between;
width: 100%;
min-height: 2rem;
max-height: 2rem;
`

const JokeList = props => {
    const handlePunchLine = e => {
        e.preventDefault();
        

    }
    return (
        <>
        <Each>
        {props.error ? (
            <div className="error"></div>
        ) : (
            
            props.jokes.map(joke =>
            <Main key={joke.id} className="card">
            <h1>{joke.setup}</h1>
            <h2>{joke.punchline}</h2>
                       
            </Main> 
            
            )
        )}
        </Each>
        </>
    )
}


const mapStateToProps = state => {
    return {
        jokes: state.jokes,
        error: state.error        
    }
};
export default connect(mapStateToProps,{ getData })(JokeList)