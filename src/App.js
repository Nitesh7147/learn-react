import React from "react";
import ReactDOM from "react-dom/client";
// Default import
import Header from "./components/Header";
// NAMED import - we have to use {}
import { Title } from "./components/Header";
// import Header, {Title} from "./components/Header"

// import * as Obj from "./components/Header"
// <Obj.Title />
import Body from "./components/Body";
import Footer from "./components/Footer";

const AppLayout = () => {
  return (
    <React.Fragment>
      <Header />
      <Body />
      <Footer />
    </React.Fragment>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
