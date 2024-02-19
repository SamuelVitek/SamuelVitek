import './App.css';
import React from 'react';
import { ChakraProvider, Flex, theme } from "@chakra-ui/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Nav from "./components/navigation/Nav";
import About from "./pages/About";
import Home from "./pages/Home";
import Edu from "./pages/Edu";
import Work from "./pages/Work";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

const router = createBrowserRouter([
    { path: `/${process.env.PUBLIC_URL}`, element: <Home/> },
    { path: `/${process.env.PUBLIC_URL}/about`, element: <About/> },
    { path: `/${process.env.PUBLIC_URL}/work`, element: <Work/> },
    { path: `/${process.env.PUBLIC_URL}/education`, element: <Edu/> },
    { path: `/${process.env.PUBLIC_URL}/projects`, element: <Projects/> },
    { path: `/${process.env.PUBLIC_URL}/contact`, element: <Contact/> }
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
