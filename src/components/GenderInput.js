import React from 'react'

class GenderInput extends React.Component {
  render() {
    return (
      <div>
        <select className={'gender_input'}
                name={'gender'}
                id={'gender'}
                value={this.props.gender}
                onChange={(event) => this.props.onChange('gender', event)}
        >
          <option value={'male'}>Male</option>
          <option value={'female'}>Female</option>
        </select>
      </div>
    );
  }
}

export default GenderInput;