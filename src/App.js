import './App.css';
import UserDiskCotainer from './Components/UserDisk/UserDiskContainer';
import {BrowserRouter, Routes,Route,} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
           <Routes>
              <Route path='/' element = {<UserDiskCotainer/>}/> 
           </Routes>
      </BrowserRouter>
      </div>

      
   
  );
}

export default App;
//y0_AgAAAAA2Ijq0AAo-ZwAAAADoxrcg82vrhn5WQc64gB8bBxnWwVJIxYc  токен    31535895 время жизни токена
//https://oauth.yandex.ru/authorize?response_type=token&client_id=561cc133eaa645329cb7b628392f55fe получение токена
// https://oauth.yandex.ru/client/561cc133eaa645329cb7b628392f55fe 
// https://yandex.ru/dev/disk/rest/poligon полигон



    {/* <a href={"#"}>
        {fileName}
      </a>
      {dir.map(d=>
      <div>
        <a href={d.file}>
          {d.name}
        </a>  
      )}   */}