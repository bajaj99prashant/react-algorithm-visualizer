import React, { Component } from 'react';
import './sortingVisualizer.css';
import * as sortingAlgorithms from './sorting-algorithms/sortingAlgorithms.js';

export default class SortingVisualizer extends Component {
    constructor(props){
        super(props);

        this.state = {
            array: [],
        }
    }

    componentDidMount() {
        this.resetArray();
    }

    resetArray = () => {
        const array = [];
        const number = (89*(window.innerWidth))/400;
        for (let i = 0; i < number; i++) {
            array.push(randomFromInterval(5, 100));
        }
        this.setState({array});
    }
    mergeSort = () => {
        const sortedArray = sortingAlgorithms.mergeSort(this.state.array);
        
    }
    render() {
        const {array} = this.state;

        return (
            <div className="sorting-container">
                {array.map((value, idx) => {
                    return (<div className="sorting-bar" key={idx} style={{height: `${value}%`}}></div>);
                })} 
                <button className="array-generate" onClick={this.resetArray}>Generate new Array</button>
                <button className="array-generate" onClick={this.mergeSort}>Merge Sort</button>
            </div>)
        ;
    }
}

function randomFromInterval(min, max){
    return Math.floor(Math.random()*(max - min + 1) + min);
}
