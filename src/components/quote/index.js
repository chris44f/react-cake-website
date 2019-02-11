import React, { Component } from 'react';
import './index.css'

const Quote = ({ id, quote, source }) => (
  <div id={id}>
    <p className="quotation">{quote}</p>
    <p className="quoter">-  {source}</p>
  </div>
)

export default Quote
