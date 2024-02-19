import './App.css';
import React from 'react';
import { ChakraProvider, Flex, theme } from "@chakra-ui/react";
import {createBrowserRouter, Route, RouterProvider, Routes} from "react-router-dom";
import Nav from "./components/navigation/Nav";
import About from "./pages/About";
import Home from "./pages/Home";
import Edu from "./pages/Edu";
import Work from "./pages/Work";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

// const router = createBrowserRouter([
//     { path: '/SamuelVitek/', element: <Home/> },
//     { path: '/SamuelVitek/about', element: <About/> },
//     { path: '/SamuelVitek/work', element: <Work/> },
//     { path: '/SamuelVitek/education', element: <Edu/> },
//     { path: '/SamuelVitek/projects', element: <Projects/> },
//     { path: '/SamuelVitek/contact', element: <Contact/> }
// ])

function App() {
    return (
        <div className="App">
            <ChakraProvider theme={theme}>
                    <Nav/>
                    <Routes>
                        <Route path="/" element={<Home />}/>
                        <Route path="/about" element={<About />}/>
                    </Routes>
                    <div className="App-body">
                        <Flex w='75%'>
                            <RouterProvider router={router} />
                        </Flex>
                    </div>
            </ChakraProvider>
        </div>
    );
}

export default App;
