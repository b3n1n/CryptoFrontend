import React from 'react';
import PortfolioBody from './Portfolio/PortfolioBody.jsx';
import Header from '../components/UI/Header.jsx';

function Portfolio({coins}) {
    return (
        <>
        <Header coins={coins}/>
        <PortfolioBody/>
        </>
    );
}

export default Portfolio;