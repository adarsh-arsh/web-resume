import Header from "./component/Header/Header";
import About from "./component/About/About";
import Skill from "./component/Skill/Skill";
import Footer from "./component/Footer/Footer";
import './App.css';

function App() {
  return (
    <div className="App">
     <Header/>
     <div>
     <About/>
     <Skill/>
     <Footer/>
     </div>
     
     
    </div>
  );
}

export default App;
