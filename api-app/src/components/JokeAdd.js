import React from 'react';
import { connect } from "react-redux";
import { getData } from '../actions';
import styled from 'styled-components';



const JokeAdd = props => {
    const handleGetData = e => {
        e.preventDefault();
        props.getData();
    };
    return (
        <>
        {props.isFetchingData? (<div>making funnies...</div>) : (<button onClick={handleGetData}>GIVE ME JOKES!</button>)
        }
        </>
    )
}

const mapStateToProps = state => {
    return {
        isFetchingData: state.isFetchingData
    };
}

export default connect(
    mapStateToProps, { getData })
    (JokeAdd);