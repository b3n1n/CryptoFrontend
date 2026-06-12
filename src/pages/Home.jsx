import React from 'react';
import Body from './Home/components/Body';
import Header from '../components/UI/Header';

function Home({coins}) {
    return (
        <>
        <Header coins={coins}/>
        <Body coins={coins}/>
        </>
    );
}

export default Home;