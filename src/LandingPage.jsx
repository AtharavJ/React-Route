import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Home"
import Error from "./Error"
import Help from './Help';



export default function () {
    return (
        <>
            {/* <h2>This is Landig Page.</h2> */}
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