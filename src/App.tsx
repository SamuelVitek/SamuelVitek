import React from 'react';
import './App.css';
import Introduction from "./components/Introduction";
import {ChakraProvider, theme} from "@chakra-ui/react";
import Experience from "./components/Experience";

function App() {
    return (
        <body className="App">
            <ChakraProvider theme={theme}>
                <div className="App-body">
                    <Introduction/>
                    <Experience />
                </div>
            </ChakraProvider>
        </body>
    );
}

export default App;
