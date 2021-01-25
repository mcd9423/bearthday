import React from 'react';

export default class Image extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <img src={this.props.image} alt='earth on your birthday' />;
  }
}