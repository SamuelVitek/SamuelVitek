import './App.css';
import React from 'react';
import { ChakraProvider, theme } from "@chakra-ui/react";
import Introduction from "./components/Introduction";
import Experience from "./components/Experience";
import Nav from "./components/navigation/Nav";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Edu from "./pages/Edu";
import Work from "./pages/Work";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

const router = createBrowserRouter([
    { path: '/', element: <Home/> },
    { path: '/about', element: <About/> },
    { path: '/work', element: <Work/> },
    { path: '/education', element: <Edu/> },
    { path: '/projects', element: <Projects/> },
    { path: '/contact', element: <Contact/> }
])

function App() {
    return (
        <div className="App">
            <ChakraProvider theme={theme}>
                    <Nav/>
                    <div className="App-body">
                        <RouterProvider router={router} />
                    </div>
            </ChakraProvider>
        </div>
    );
}

export default App;
