import Card from "E:/reactprojects/travel/src/Card.jsx"
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import data from "./data.js"

function App() {
  const content = data.map((items) => {
    return (
      <Card
       img={items.cardimage}
       caption={items.caption} 
      />
    )
  })
  return (
    <div className='content'>
      {content}
    </div>
  );

}

export default App;
