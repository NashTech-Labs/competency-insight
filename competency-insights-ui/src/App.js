import './App.css';
import { Footer, Header } from './components';
import {AppRouters} from "./routes/AppRouters";

function App() {
  return (
    <div className="App dark:bg-dark"> 
    <Header/>
      <AppRouters />
      <Footer/> 
    </div>
  );
} 

export default App;

