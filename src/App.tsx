import './App.css';
import React from 'react';
import { ChakraProvider, theme } from "@chakra-ui/react";
import Introduction from "./components/Introduction";
import Experience from "./components/Experience";
import Nav from "./components/navigation/Nav";

function App() {
    return (
        <body className="App">
            <ChakraProvider theme={theme}>
                <Nav/>
                <div className="App-body">
                    <Introduction/>
                    <Experience />
                </div>
            </ChakraProvider>
        </body>
    );
}

export default App;
