import React from 'react'

class DescriptionInput extends React.Component {
  render() {
    return (
      <div>
        <textarea
          className={'description_input'}
          name={'description'}
          value={this.props.desc}
          placeholder={'Description about yourself'}
          onChange={(event) => this.props.onChange('description', event)}
        />
      </div>
    );
  }
}

export default DescriptionInput;