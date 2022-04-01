import Home from './routes/home/home.component';

import { Routes, Route } from 'react-router';
import Navigation from './routes/Navigation/Navigation.component';
import SignIn from './routes/sign-in/sign-in.';


const Shop = () => {
  return ( <h2>Im am a shop page</h2> );
}



const App = () => {


  return (
  <Routes>
    <Route path="/" element= {<Navigation/>}>
    <Route index element={<Home/>}/>
    <Route path="shop" element={<Shop/>}/>
    <Route path="signIn" element={<SignIn/>}/>
    
    
    </Route> 
  </Routes>
  
  )
  
  
}
 
export default App;
