import React, { useState } from 'react';
import styled from 'styled-components';
import Header from './components/Header/header';
import "./index.css";
import ShoeIndex from './components/ShoeIndex/shoe-index';

function App() {

  const [sortId, setSortId] = useState('newest');

  return (
    <>
      <Header />
      <Main>
        <ShoeIndex sortId={sortId} setSortId={setSortId} />
      </Main>
    </>
  )
}

const Main = styled.main``;

export default App
