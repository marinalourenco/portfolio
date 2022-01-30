import NavBar from './components/NavBar';
import MarinaImg from "./assets/marina.jpg"
import './App.css';
import { useGithub } from './hooks/userGithub';
import Services from './components/Services';
import Cursos from './components/Cursos';
import Contato from './components/Contato';
import Footer from './components/Footer';
import SobreMim from './components/SobreMim';
import Usuario from './components/Usuario';

function App() {
  const {repositories}= useGithub('marinalourenco')
  return (
    <> 
<NavBar/>
<Usuario/>
<SobreMim/>
<Services repositories={repositories}/>
<Cursos/>
<Contato/>
<Footer/>
   </>
);
}

export default App;
