import React, { Component } from 'react';

class ColorBoxes extends Component {

    static defaultProps = {
        colors: ["aqua", "black", "blue", "fuchsia", "green", "maroon", "purple", "red", "orange", "gray", "lime", "olive", "yellow", "teal", "navy", "plum", "peru", "indigo"]
    }

    state = {
        nColors: this.props.colors.map(c => Math.floor(Math.random() * this.props.colors.length))
    }


    changeColor = (index) => {
        let newColor = Math.floor(Math.random() * this.props.colors.length);
        let arrCopy = this.state.nColors;
        if (this.state.nColors[index] === newColor) {
            newColor = newColor + 1;
            arrCopy.splice(index, 1, newColor);
            this.setState({
                nColors: arrCopy
            })
        }else if (this.state.nColors[index] === this.props.colors.length) {
            newColor = newColor - 2;
            arrCopy.splice(index, 1, newColor);
            this.setState({
                nColors: arrCopy
            })
        } else {
            arrCopy.splice(index, 1, newColor);
            this.setState({
                nColors: arrCopy
            })
        }
    }

    render() {
        return (
            <div className="color-boxes">
                <ul>
                    {this.state.nColors.map((color, index) => {
                        return (
                        <li onClick={() => this.changeColor(index)} key={`${index}`} className="boxes" style={{ backgroundColor: this.props.colors[color] }}>{this.props.colors[index]}</li>
                        )
                    })}
                </ul>
            </div>
        );
    }
}

export default ColorBoxes;