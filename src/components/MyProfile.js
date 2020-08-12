import React, {Component} from 'react';
import '../style/myProfile.less';
import CheckProduct from "./CheckProduct";
import SubmitModule from "./SubmitModule";
import NameInput from "./NameInput";
import GenderInput from "./GenderInput";
import DescriptionInput from "./DescriptionInput";
import ProfileTitle from "./ProfileTitle";

class MyProfile extends Component {
  state = {
    name: 'Your name',
    gender: 'Male',
    description: 'Description about yourself',
    isRead: false,
  }

  render() {
    return (
      <div className={'body_div'}>
        <header>
          <ProfileTitle/>
        </header>

        <main>
          <section>
            <form onSubmit={this.onClickSubmitButton}>
              <div className={'input_div'}>
                <label htmlFor={'name'} className={'input_label'}>Name</label>
                <NameInput nameStr={this.state.name} onChange={this.onInputChange}/>
              </div>

              <div className={'input_div'}>
                <label htmlFor={'gender'} className={'input_label'}>Gender</label>
                <GenderInput gender={this.state.gender} onChange={this.onInputChange}/>
              </div>

              <div className={'input_div'}>
                <label htmlFor={'description'} className={'input_label'}>Description</label>
                <DescriptionInput desc={this.state.description} onChange={this.onInputChange}/>
              </div>

              <div className={'input_div'}>
                <CheckProduct isRead={this.state.isRead} onChange={this.onCheckboxChange}/>
              </div>

              <SubmitModule isRead={this.state.isRead}/>
            </form>
          </section>
        </main>
      </div>
    );
  }

  onClickSubmitButton = (event) => {
    let json = JSON.stringify(this.state);
    alert(json);
    console.log(json);
    event.preventDefault();
  }

  onInputChange = (field, event) => {
    // console.log(event);
    this.setState({
      [field]: event.target.value,
    });
  }

  onCheckboxChange = (event) => {
    console.log(event.target.checked);
    this.setState({
      isRead: event.target.checked,
    });
  }
}

export default MyProfile;


