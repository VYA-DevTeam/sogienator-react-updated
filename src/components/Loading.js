import React from 'react';
import ReactDOM from 'react-dom';
import styles from './Loading.css';

export default function Loading() {
  return ReactDOM.createPortal(
    <div className='overlay'>
      <div className='container'>
        <div className="loader"/>
      </div>
    </div>,
    document.querySelector('body'),
  );
}