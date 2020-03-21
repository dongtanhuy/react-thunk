import React from 'react';
import SearchBar from './SearchBar';
import UserInformation from './UserInformation';
import '../style/App.css';

const App = () => {
  return(
    <div className="App">
      <SearchBar />
      <UserInformation />
    </div>
  )
}

export default App;
