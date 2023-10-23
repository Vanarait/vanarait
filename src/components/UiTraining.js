import React from 'react';
import '../css/UiTraining.css';

function getDayWithSuffix(day) {
  if (day >= 11 && day <= 13) {
    return `${day}th`;
  }
  const lastDigit = day % 10;
  switch (lastDigit) {
    case 1:
      return `${day}st`;
    case 2:
      return `${day}nd`;
    case 3:
      return `${day}rd`;
    default:
      return `${day}th`;
  }
}

function UiTraining() {
  const date = new Date(2023, 10, 10); // Replace with your desired date
  const formattedDate = `${getDayWithSuffix(date.getDate())} ${date.toLocaleString('default', {
    month: 'long',
  })} ${date.getFullYear()}`;

  return (
    <div className="UiTraining">
      <h1>UI Fullstack With React JS</h1>
      <h2> Online Training By Mr.Venkatesh </h2>
      <h3>Demo on 11<sup>th</sup> Nov 2023 @ 7am </h3>
      <h4>Fee:5000</h4>
      <a href="https://www.vanarait.com" target="_blank">
        click here for zoom link
      </a>
      <h5>please contact for any clarification:9494494085</h5>
    </div>
  );
}

export default UiTraining;
