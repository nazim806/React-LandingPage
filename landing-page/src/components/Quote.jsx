// import React, { useState } from "react";

// import {quotesData} from "./components/Data";

// // add this component to app.js file for single quotation rendering

// const jsonData = Quotes.json.data();

// const keys = Object.keys(jsonData);
// const values = Object.values(jsonData);

// const randomKeys = keys[parseInt(Math.random() * keys.length)];
// const randomValue = values[parseInt(Math.random() * values.length)];

// function Quote() {
//   return (
//     <p>
//       {randomKeys}  {randomValue}
//     </p>
//   );
// }

// export default Quote;

import React from "react";
import { quotesData } from "./Data.js";


const newQuote = quotesData[Math.floor(Math.random() * quotesData.length)];

const Quotes = () => {
  return (
    <div className="quote-container">
      <b>Quote of the day:</b> <br/>
      <em>{newQuote.text}</em> <br/>  - {newQuote.author}
      {/* <p> <b>Quote of the day:</b><br/> <em>Genius is one percent inspiration and 99% perspiration.</em> <br/>    
        - Thomas Edison
          {randomQuote.key} {randomQuote.value} </p>  */}
    </div>
  );
};

export default Quotes;

// import React from "react";
// import Card from "react-bootstrap/Card";
// import { quotesData } from './Data';

// function Quote() {
//   return (
//     <Card>
//       <Card.Header>Quote</Card.Header>
//       <Card.Body>
//         <blockquote className="blockquote mb-0">
//           <p>
//             {" "}
//             Give me six hours to chop down a tree and I will spend the first four sharpening the ax.{" "}
//           </p>
//           <footer className="blockquote-footer">
//             Someone famous in <cite title="Source Title">Source Title</cite>
//           </footer>
//         </blockquote>
//       </Card.Body>
//     </Card>
//   );
// }

// export default Quote;
