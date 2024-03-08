import './App.css';
import React from 'react';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/react"
import { ChakraProvider, Flex, theme } from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';
import Nav from './components/navigation/Nav';
import About from './pages/About';
import Home from './pages/Home';
import Edu from './pages/Edu';
import Work from './pages/Work';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
    return (
        <Flex
            className='App'
            minH='100vh'
        >
            <ChakraProvider theme={theme}>
                <Nav />
                <div className='App-body'>
                    <Flex
                        w='75%'
                        mt={{ base: '15vh', xl: '30vh' }}
                    >
                        <Routes>
                            <Route path='/' element={<Home />} />
                            <Route path='/about' element={<About />} />
                            <Route path='/work' element={<Work />} />
                            <Route path='/education' element={<Edu />} />
                            <Route path='/projects' element={<Projects />} />
                            <Route path='/contact' element={<Contact />} />
                        </Routes>
                    </Flex>
                    <Analytics />
                    <SpeedInsights />
                </div>
            </ChakraProvider>
        </Flex>
    );
}

export default App;
