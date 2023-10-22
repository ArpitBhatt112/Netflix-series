import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card.jsx';
import Sdata from './Sdata.jsx';
import './index.css';

ReactDOM.render(
 <>
 <h1 className="heading">Netflix top 4 movies in 2024</h1>
{Sdata.map(function ncard(val)
{   
 return (
<Card
key={val.id}
imgsrc={val.imgsrc}
title={val.title}
sname= {val.sname}
link={val.link}
   />
);

})}
</>
,document.getElementById("root")
);