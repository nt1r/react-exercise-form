import React from 'react'

class SubmitModule extends React.Component {
  render() {
    return (
      <div className={'submit_module_div'}>
        <input type={'submit'} value={'Submit'} disabled={this.props.checkDisabled}/>
      </div>
    );
  }
}

export default SubmitModule;