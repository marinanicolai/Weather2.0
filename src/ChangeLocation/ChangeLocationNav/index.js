import React from "react";
import { StyledInput, StyledForm } from "./ChangeLocationNav.styles";

class ChangeLocationNav extends React.Component {
  state = {
    inputValue: ""
  };

  handleChange = ({ target: { value } }) => {
    this.setState({ inputValue: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleNewLocation(this.state.inputValue);
    this.setState({ inputValue: "" });
  };

  render() {
    return (
      <div>
        <StyledForm onSubmit={this.handleSubmit}>
          <StyledInput
            placeholder="enter city"
            value={this.state.inputValue}
            onChange={this.handleChange}
          ></StyledInput>
        </StyledForm>
      </div>
    );
  }
}
export default ChangeLocationNav;
