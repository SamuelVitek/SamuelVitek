import React from 'react';
import './App.css';
import Introduction from "./components/Introduction";
import {ChakraProvider, theme} from "@chakra-ui/react";

function App() {
    return (
        <div className="App">
            <ChakraProvider theme={theme}>
                <body className="App-body">
                    <Introduction/>
                </body>
            </ChakraProvider>
        </div>
    );
}

export default App;
