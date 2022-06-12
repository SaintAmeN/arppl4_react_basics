import React from "react";
import classes from "../App.module.css";

function Naglowek() {
    return (
        <div className={classes.NaglowekStrony}>
            <div className={classes.LewaStrona}>
                <div className={classes.Logos}>
                    <div className={classes.SingleLogo}>Logo</div>
                    <div className={classes.SingleLogo}>Logo2</div>
                    <div className={classes.SingleLogo}>Logo3</div>
                </div>
                <div className={classes.Tytul}>Tytuł strony</div>
            </div>
        </div>
    );
}

export default Naglowek;