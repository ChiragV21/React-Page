import React from 'react';
import ReactDom from 'react-dom';
import Card from './Cards.jsx';
import Sdata from './Sdata.jsx';
import './index.css';

function ncard(val) {
    return (
        <Card
            imgsrc={val.imgsrc}
            title={val.title}
            sname={val.sname}
            link={val.link}
        />
    );
}

ReactDom.render(
    <>
        <h1 className="heading_style">List of Top 5 Netflix Series in 2021</h1>

        {Sdata.map(ncard)};


    </>, document.getElementById('root')
);