import React, { Component } from "react";

import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";

class InputRangee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: { min: props.minValue, max: props.maxValue },
    };
  }

  render() {
    return (
      <form>
        <InputRange
          step={this.props.step}
          maxValue={this.props.maxValue}
          minValue={this.props.minValue}
          formatLabel={(value) => `${value}`}
          value={this.state.value}
          onChange={(value) => {
            this.setState({ value });
            switch (this.props.name) {
              case "price":
                this.props.onPriceCall(value);
                break;
              case "ram":
                this.props.onRamCall(value);
                break;
              case "rom":
                this.props.onRomCall(value);
                break;
              case "front":
                this.props.onFrontCall(value);
                break;
              case "mainCam":
                this.props.onMainCamCall(value);
                break;
              case "size":
                this.props.onSizeCall(value);
                break;
              case "capacity":
                this.props.onCapacityCall(value);
                break;
              default:
                console.log("Ali Hassan");
            }
          }}
        />
      </form>
    );
  }
}

export default InputRangee;
