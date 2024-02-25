import React from 'react';

class UserClass extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        avata_url: "https://avatars.githubusercontent.com/u/62304758?v=4",
        name: "Default Name",
        location: "Default Location",
        contact: "Default Contact",
      }
    }
  }

  // This method is used make API calls
  // why API calls are made here?
  // because this method is called only once after the component is mounted
  async componentDidMount() {
    // console.log(`${this.props.name}  ComponentDidMount called`);

    // API call
    const data = await fetch('https://api.github.com/users/uday510');
    const json = await data.json();
    // console.log(json);

    this.setState({
      userInfo: {
        avatar_url: json.avatar_url,
        name: json.name,
        location: json.location,
        contact: json.login,
      }
    });
  }

  // this method is called when the component is updated, which means when the state or props are changed
  // for example, when we click a button and change the state, this method is called 
  componentDidUpdate() {
    // console.log(`${this.props.name}  ComponentDidUpdate called`);
  }

  // this method is called when the component is about to be removed from the DOM
  // for example, when we navigate to another page or when we remove the component from the DOM,
  //  this method is called
  componentWillUnmount() {
    // console.log(`${this.props.name}  ComponentWillUnmount called`);
  }

  render() {
    const { name, location, contact, avatar_url } = this.state.userInfo;

    return (
      <div className="user-card" >
        <img src={avatar_url} alt="avatar"/>
        <h1>Name: {name}</h1>
        <h2>Location: {location}</h2>
        <h3>Contact: {contact}</h3>
      </div>
    )
  }
}

export default UserClass;