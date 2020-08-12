import React from 'react'

class NameInput extends React.Component {
  /*static get propsType() {
    return {
      nameStr: PropsType:string,
    }
  }*/

  render() {
    return (
      <div>
        <input
          className={'name_input'}
          type={'text'} id={'name'}
          value={this.props.nameStr}
          onChange={(event) => this.props.onChange('name', event)}
        />
      </div>
    );
  }
}

export default NameInput;