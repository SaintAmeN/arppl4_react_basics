import React from 'react';
import classes from './App.module.css';

function App() {
  return (
    <div className={classes.NaglowekStrony}>
        <div className={classes.LewaStrona}>
            <div className={classes.Logos}>
                <div>Logo</div>
                <div>Logo2</div>
                <div>Logo3</div>
            </div>
            <div className={classes.Tytul}>Tytuł strony</div>
        </div>
    </div>
  );
}

export default App;
