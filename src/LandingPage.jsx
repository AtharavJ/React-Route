import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Home"
import Error from "./Error"
import Help from './Help';



export default function () {
    return (
        <>

            <Router>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/Error' element={<Error />} />
                    <Route path='/Help' element={<Help />} />
                </Routes>
            </Router>
            {/* 
            <Error /> */}
        </>
    )

}