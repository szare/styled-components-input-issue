import React, {Component} from 'react';
import styled from 'styled-components';

class Input extends Component {
  onChange = (e) => {
    return this.props.onChange(e.target.value);
  };

  render() {
    const InputNumeric = styled.input`
      color:red;
      background-color:gray;
    `;

    const props = this.props;
    return (
      <InputNumeric {...props} onChange={this.onChange}/>
    );
  }
}

export default Input;