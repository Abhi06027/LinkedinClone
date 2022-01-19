import "./App.css";

import Textfield from "./components/Textfield";
import Headingtext from "./components/Headingtext";
import Password from "./components/Password";
import Email from "./components/Email";

function App() {
  return (
    <>
      <Headingtext heading="  Sign in  " />
      <Headingtext heading="  Stay updated on your professional world  " />

      <Textfield Name="Name " />
      <Password Password=" Password " />
      <Email Email=" Email " />
    </>
  );
}

export default App;
