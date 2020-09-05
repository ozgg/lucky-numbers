import React from "react";

class Dates extends React.Component {
    input(item, number) {
        return (
            <li key={number}>
                <input
                    type="date"
                    value={item.value}
                    onChange={this.props.updateHandler}
                    data-index={number}
                />
                [{item.number.toPrecision(4)}]
            </li>
        )
    }

    render() {
        return (
            <ol>{this.props.list.map((date, n) => this.input(date, n))}</ol>
        )
    }
}

export default Dates;
