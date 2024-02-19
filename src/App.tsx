import './App.css';
import React from 'react';
import { ChakraProvider, Flex, theme } from "@chakra-ui/react";
import { createHashRouter, RouterProvider } from "react-router-dom";
import Nav from "./components/navigation/Nav";
import About from "./pages/About";
import Home from "./pages/Home";
import Edu from "./pages/Edu";
import Work from "./pages/Work";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

const router = createHashRouter([
    { path: `/SamuelVitek/`, element: <Home/> },
    { path: `/about`, element: <About/> },
    { path: `/work`, element: <Work/> },
    { path: `/education`, element: <Edu/> },
    { path: `/projects`, element: <Projects/> },
    { path: `/contact`, element: <Contact/> }
])

function App() {
    return (
        <div className="App">
            <ChakraProvider theme={theme}>
                    <Nav/>
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
