import "./App.css"

function App() {
  const data=[{
    head:"Mobile Operating System",
    body:[{body1:"Android",id:"circle"},{body1:"Blackberry",id:"circle"},{body1:"iphone", id:"circle"},{body1:"Windows Phone",id:"circle"}]
  },
  {
    head:"Mobile Manufactures",
    body:[{body1:"Sumsung",id:"square"},{body1:"HTC",id:"square"},{body1:"Micromax",id:"circle"},{body1:"Apple",id:"hollowcircle"}]

  
   }]
  
  return (
    
    <div className="App">
     {data.map((el) =>(
       <div>{el.head}{el.body.map((le) =>(
         <li id={le.id}>{le.body1}</li>
       ))}</div>
     ))}
    </div>
  );
}

export default App;
