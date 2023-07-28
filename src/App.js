import './App.css';
import UserDiskCotainer from './Components/UserDisk/UserDiskContainer';
import {BrowserRouter, Routes,Route,} from 'react-router-dom'
import ResourceDiskCotainer from './Components/ResourceDisk/resourceDiskContainer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
           <Routes>
              <Route path="/" element = {<UserDiskCotainer/>}/> 
              <Route path="/resource" element = {<ResourceDiskCotainer/> }/>
           </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;