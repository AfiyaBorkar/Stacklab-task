// import logo from './logo.svg';
import './App.css';
// import MainContainer from './Components/MainContainer';
import ProfileDiv from './Components/ProfileDiv';
import UserProfileForm from './Components/UserProfileForm';
import {BrowserRouter, Route, Routes} from 'react-router-dom';


function App() {
  return (
<>

<BrowserRouter>
<Routes>
  <Route path='/' Component={UserProfileForm}/>
</Routes>

<Routes>
  <Route path='/profile/:id' Component={ProfileDiv}/>
</Routes>


</BrowserRouter>

</> 
   
  );
}

export default App;
