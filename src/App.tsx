import './App.css';
import React from 'react';
import { ChakraProvider, Flex, theme } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/navigation/Nav";
import About from "./pages/About";
import Home from "./pages/Home";
import Edu from "./pages/Edu";
import Work from "./pages/Work";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
    return (
        <div className="App">
            <ChakraProvider theme={theme}>
                    <Nav/>
                    <div className="App-body">
                        <Flex w='75%'>
                            <Routes>
                                <Route path="/" element={<Home />}/>
                                <Route path="/about" element={<About />}/>
                                <Route path="/work" element={<Work />}/>
                                <Route path="/education" element={<Edu />}/>
                                <Route path="/projects" element={<Projects />}/>
                                <Route path="/contact" element={<Contact />}/>
                            </Routes>
                        </Flex>
                    </div>
            </ChakraProvider>
        </div>
    );
}

export default App;
