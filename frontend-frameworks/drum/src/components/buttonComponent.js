import React, {Component} from 'react';

export default class Button extends Component {
  render() {
      const {name} = this.props;
    return (
      <div className="button">
        <p>{name}</p>
      </div>
    );
  }
}
