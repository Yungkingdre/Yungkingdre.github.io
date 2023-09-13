import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import App from './App';
//import reportWebVitals from './reportWebVitals';

const Navbar = () => {
  return (
    <nav>
      <a href="#">Gmail</a>
        <a href="#">Sign in</a>
        {/*<a href="#" class="app_icon"><span class="material-symbols-outlined">apps</span></a>*/}
        {/*<a href="#"><img src="/Image/Google_profile_pix.jpeg" alt=""/></a>*/}
    </nav>
  );
};

class Movie extends React.Component{
  constructor(props){
    super(props)
  };
  render(){
    return(
        <Navbar />
    )
  }
}
ReactDOM.render(
  <App/>,
  document.getElementById('root')
)
