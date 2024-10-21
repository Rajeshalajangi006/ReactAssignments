import UserProfile from "./components/UserProfile";
import { Component } from "react";
const initialuserDetailsList = [
  {
    uniqueNo: 1,
    imageUrl: "https://assets.ccbp.in/frontend/react-js/esther-howard-img.png",
    name: "Rajesh",
    role: "Software Developer",
  },
  {
    uniqueNo: 2,
    imageUrl: "https://assets.ccbp.in/frontend/react-js/esther-howard-img.png",
    name: "Swamy",
    role: "Software Developer",
  },
  {
    uniqueNo: 3,
    imageUrl: "https://assets.ccbp.in/frontend/react-js/esther-howard-img.png",
    name: "Sriram",
    role: "Software Developer",
  },
  {
    uniqueNo: 4,
    imageUrl: "https://assets.ccbp.in/frontend/react-js/esther-howard-img.png",
    name: "Prasanth",
    role: "Software Developer",
  },
];

class App extends Component {
  state = { searchInput: "", userDetailsList: initialuserDetailsList };
  change = (event) => {
    this.setState({
      searchInput: event.target.value,
    });
  };
  Deleteuser = (uniqueNo) => {
    const { userDetailsList } = this.state;
    const filterDetailsList = userDetailsList.filter((eachItem) => {
      return eachItem.uniqueNo !== uniqueNo;
    });
    this.setState({ userDetailsList: filterDetailsList });
  };
  render() {
    const { searchInput, userDetailsList } = this.state;
    const searchResult = userDetailsList.filter((eachitem) =>
      eachitem.name.includes(searchInput)
    );

    return (
      <div className="list-container">
        <h1 className="title">Users List</h1>
        <input type="text" value={searchInput} onChange={this.change} />
        <ul>
          {searchResult.map((eachItem) => (
            <UserProfile
              key={eachItem.uniqueNo}
              userDetails={eachItem}
              Deleteuser={this.Deleteuser}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
