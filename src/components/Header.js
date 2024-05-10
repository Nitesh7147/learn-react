import { useState } from "react";

/**
 const Title = () => {
 return (
    <h1 id="title" key="h2">
      Namaste React
    </h1>
  );
};
*/
// its same as above commented code
export const Title = () => (
  <a href="/">
    <img
      className="logo"
      alt="logo"
      src="https://i.pinimg.com/474x/e6/17/f1/e617f1bfb9af4d9cf132cd3dec0da072.jpg"
    ></img>
  </a>
);

const Header = () => {

  const [title, setTitle] = useState("Swiggy");
  const [isloggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="header">
      <Title />
      <h2>{title}</h2>
      <button onClick={() => {
        setTitle(title === "Swiggy" ? "Zomatao" : "Swiggy");
      }}>Click to change title</button>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
      {
        (isloggedIn) ? <button onClick={() => setIsLoggedIn(false)}>Logout</button>
         : <button onClick={() => setIsLoggedIn(true)}>Login</button>
      }
    </div>
  );
};

const loggedInUser = () =>{
  // can make API call to check authentication 
  return true;
}

export default Header;
// by export default we can only export one component
// but what if we have to export multiple components then we use direct export to the component
// export const Title = ()

/**
  Question - How many ways to export component?
  Answer - Two - export default and direct export
 */
