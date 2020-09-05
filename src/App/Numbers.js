import React from "react";

class Numbers extends React.Component {
    input(item, number) {
        return (
            <li key={number}>
                <input
                    type="number"
                    value={item.value}
                    onChange={this.props.updateHandler}
                    data-index={number}
                    min="3"
                    max="100"
                />:
                {item.list.join(', ')}
            </li>
        )
    }

    render() {
        return (
            <ul>{this.props.list.map((item, n) => this.input(item, n))}</ul>
        )
    }
}

export default Numbers;
