import React from 'react'

class CheckProduct extends React.Component {
  render() {
    return (
      <div className={'check_input_div'}>
        <input
          className={'check_input'}
          type={'checkbox'}
          checked={this.props.isRead}
          onChange={this.props.onChange}
        />
        <span>I have read the terms of conduct</span>
      </div>
    );
  }
}

export default CheckProduct;