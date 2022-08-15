import Card from "E:/reactprojects/travel/src/Card.jsx"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import data from "./data.js"
import Navbar from "./Navbar.jsx"
import './App.css'

function App() {
  const content = data.map((items) => {
    return (
      <Card
        {...items}
      />
    )
})
return (
  <div className="app">
    <Navbar />
    <div className='content'>
      {content}
    </div>
  </div>
);

}

export default App;
