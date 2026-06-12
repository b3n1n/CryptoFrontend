import React from 'react';
import MarketBody from './Market/MarketBody';
import Header from '../components/UI/Header';

function Market({coins}) {
    return (
        <>
        <Header coins={coins}/>
        <MarketBody coins={coins} />
        </>
    );
}

export default Market;