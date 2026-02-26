//import Login from './components/Login.jsx';
import ManageData from './components/Estudo/ManageData.jsx';
import RenderizacaoCondicional from './components/Estudo/RenderizacaoCondicional.jsx';
import MostrasNome from './components/Estudo/MostrasNome.jsx';
import './App.css';



function App() {
  return (
    <div className="App">
      
      <RenderizacaoCondicional/>
      <MostrasNome nome="Lucas"/>
    </div>
  );
}

export default App;
