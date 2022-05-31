//import logo from './logo.svg';
import './App.css';
import {Amazon} from "./components/Amazon"

function App() {
  const value={
    date:"28/10/2020",
    logo:"https://www.iconpacks.net/icons/3/free-amazon-logo-icon-6203.png",
    heading:"Amazon Gift",
    subheading:"Pay",
    device:"Desktop Mobile",
    case:"Case Study",
    color: "rgb(255,165,0)"
  }

  const valueapple={
    date:"17 Sep 2020",
    logo:"https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo-500x281.png",
    heading:"Apple Gift",
    subheading:"Payment",
    device:"MacOS Mobile",
    case:"Case Study",
    color:"rgb(245,245,245)"

  }
  return (
    <div className="App">
      <Amazon prop={value}/>
      <br></br>
      <br></br>
      <Amazon prop={valueapple}/>
    </div>
  );
}

export default App;