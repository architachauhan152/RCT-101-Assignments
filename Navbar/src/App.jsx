import './App.css'

function App() {

  let data11 = ["Service", "Projects", "About"];
  return (
    <div className="navbar">
      <div id="first">LOGOBAKERY</div>
      <div id="second" style={{color:"black"}}>{data11.map((el) => (
        <a id="white" href="https://www.flipkart.com/">{el}</a>
      ))}</div>
      <button id="third">Contact</button>
    </div>
  );

}

export default App
