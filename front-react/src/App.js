import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Login} from "./components/login";
import {HomeScreen} from "./screens/HomeScreen.js";
import {Navigation} from './components/navigation';
import {Logout} from './components/logout';
import {RegisterUser} from './components/Registration';
import {Footer} from './components/Footer.jsx';

//  importing fontawesome icons globally
// import the library
import { library } from '@fortawesome/fontawesome-svg-core'

// import your icons
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'


function App() {
    return<BrowserRouter>

        <Navigation></Navigation>
            <Routes>
                <Route path="/" element={<HomeScreen/>}/>
                <Route path="/register" element={<RegisterUser/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/logout" element={<Logout/>}/>
            </Routes>
        <Footer></Footer>    
    </BrowserRouter>;
}

export default App;
library.add(fab, fas, far)