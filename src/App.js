import React from 'react';
import Dates from './App/Dates';
import Numbers from "./App/Numbers";
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dates: [],
            numbers: []
        };

        this.addDate = this.addDate.bind(this);
        this.updateDate = this.updateDate.bind(this);
        this.addNumber = this.addNumber.bind(this);
        this.updateNumber = this.updateNumber.bind(this);
    }

    addDate() {
        const newDates = this.state.dates.slice();
        const date = new Date();
        const item = {
            date: date,
            value: date.toISOString().slice(0, 10),
            number: this.dateToRate(date)
        };
        newDates.push(item);
        this.setState(() => ({dates: newDates}));
    }

    addNumber() {
        const newNumbers = this.state.numbers.slice();
        newNumbers.push({value: 10, list: this.luckyNumbers(10)});
        this.setState(() => ({numbers: newNumbers}))
    }

    updateDate(e) {
        const newDates = this.state.dates.slice();
        const element = e.target;
        const index = element.dataset.index;
        if (element.value.match(/\d{4}-\d\d-\d\d/)) {
            const date = new Date();
            date.setTime(Date.parse(element.value));
            newDates[index].date = date;
            newDates[index].number = this.dateToRate(date)
        }
        newDates[element.dataset.index].value = element.value;
        this.setState(() => ({dates: newDates}));
    }

    updateNumber(e) {
        const newNumbers = this.state.numbers.slice();
        const element = e.target;
        const value = parseInt(element.value)
        newNumbers[element.dataset.index] = {value: value, list: this.luckyNumbers(value)};
        this.setState(() => ({numbers: newNumbers}));
    }

    dateToRate(date) {
        const year = date.getFullYear();
        const finalDay = Date.UTC(year, 11, 31) / 86400000;
        const today = Date.UTC(year, date.getMonth(), date.getDate()) / 86400000;
        const firstDay = Date.UTC(year, 0, 0) / 86400000;

        return (today - firstDay) / (finalDay - firstDay);
    }

    luckyNumbers(max) {
        console.log(this.state.dates.map(i => i.number))
        return this.state.dates.map(item => Math.round(item.number * max));
    }

    render() {
        return (
            <div>
                <Dates list={this.state.dates} updateHandler={this.updateDate}/>
                <button onClick={this.addDate}>Добавить</button>
                <Numbers list={this.state.numbers} updateHandler={this.updateNumber}/>
                <button onClick={this.addNumber}>Добавить</button>
            </div>
        );
    }
}

export default App;
