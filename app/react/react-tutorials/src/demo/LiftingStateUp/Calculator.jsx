import React from 'react'

function BoilingVerdict(props) {
    const text1 = <p>The water would boil.</p>
    const text2 = <p>The water would not boil.</p>
    if (props.scaleNames === 'c') {
        return (props.celsius >= 100) ? text1 : text2
    } else {
        return (props.celsius >= 200) ? text1 : text2
    }
}

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
};

class TemperatureInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {value: ''};
    }

    handleChange(e) {
        this.setState({value: e.target.value});
    }

    render() {
        const value = this.state.value;
        const scale = this.props.scale;
        return (
            <fieldset>
                <legend>Enter temperature in {scaleNames[scale]}:</legend>
                <input value={value}
                       onChange={this.handleChange}/>
                <BoilingVerdict
                    celsius={parseFloat(value)}
                    scaleNames={scale}
                />
            </fieldset>
        );
    }
}

class Calculator extends React.Component {
    render() {
        return (
            <div>
                <TemperatureInput scale="c"/>
                <TemperatureInput scale="f"/>
            </div>
        );
    }
}


export default Calculator