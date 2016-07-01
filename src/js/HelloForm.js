/**
 * Created by huxiaomin on 16/6/23.
 */

/*
var HelloSayer = require('./HelloSayer');
var React = require('react');

var HelloForm = React.createClass({
  getInitialState: function() {
    return {
      name: 'world'
    };
  },

  render: function() {
    return (
        <div className="hello-form">
          <input type="text" onChange={this.onChange} />
          <HelloSayer name={this.state.name} />
        </div>);
  },

  onChange: function(e) {
    this.setState({
      name: e.target.value
    });
  }
});

module.exports = HelloForm;*/

import React from 'react';
import HelloSayer from './HelloSayer';
require('../sass/index.scss');

class HelloForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'world'
    }
    //this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({
      name: this.refs.inputBox.value,
    });
  }

  render() {
    return (<div className="hello-form">
      <input type="text" onChange={this.onChange.bind(this)} ref="inputBox" />
      <HelloSayer name={this.state.name} />
    </div>);
  }
}

export default HelloForm;