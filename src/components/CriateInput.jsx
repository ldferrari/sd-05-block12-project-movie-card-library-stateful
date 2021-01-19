import React from 'react';

class CriateInput extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor={this.props.title} className="caixaInput">
          {this.props.title}<br />
          <input
            className="caixaInput"
            type={this.props.type}
            name={this.props.name}
            value={this.props.value}
            onChange={this.props.funChange}
          />
        </label>
      </div>
    );
  }
}

export default CriateInput;
