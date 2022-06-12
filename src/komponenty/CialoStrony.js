import React, {useEffect, useState} from "react";
import classes from './CialoStrony.module.css';
import {Button, Grid} from "@mui/material";
/*JSON Object - JavaScript Object Notation Object*/
const lista = [
    {
        'id': 1,
        'imie': "Pawel",
        'nazwisko': "Gawel",
        'dataUrodzenia': "2000-01-01",
        'adres': "Praga"
    },
    {
        "id": 2,
        "imie": "Ala",
        "nazwisko": "Koala",
        "dataUrodzenia": "1992-01-01",
        "adres": "Warszawa"
    },
    {
        "id": 3,
        "imie": "Misio",
        "nazwisko": "Pysio",
        "dataUrodzenia": "1980-01-01",
        "adres": "Misiolandia"
    }
]

function CialoStrony() {
    const [listaObiektow, setListaObiektow] = useState(lista);

    function usunElementZListy(identyfikatorDoUsuniecia) {
        console.log('Usuwamy ' + identyfikatorDoUsuniecia)
        for (let i = 0; i < listaObiektow.length; i++) {
            // let == pozwól == zmienna
            // var == variable == zmienna
            let obiekt = listaObiektow[i];

            if (obiekt.id === identyfikatorDoUsuniecia) {
                // usun z listy 1 element na indeksie i
                listaObiektow.splice(i, 1);
            }
        }
        console.log(listaObiektow)

        // skopiowanie elementów listy listaObiektów do nowej listy i przekazanie jako parametr
        setListaObiektow([...listaObiektow]);
    }

    return (
        <div className={classes.ElementGlowny}>
            <Grid container className={classes.TabelaGrid}>
                <Grid container> {/* Nagłówek tabeli*/}
                    <Grid className={classes.NaglowekTabeli} item xs={1}>Lp.</Grid>
                    <Grid className={classes.NaglowekTabeli} item xs={2}>Imie</Grid>
                    <Grid className={classes.NaglowekTabeli} item xs={2}>Nazwisko</Grid>
                    <Grid className={classes.NaglowekTabeli} item xs={3}>Data urodzenia</Grid>
                    <Grid className={classes.NaglowekTabeli} item xs={2}>Adres</Grid>
                    <Grid className={classes.NaglowekTabeli} item xs={2}></Grid>
                </Grid>
                <Grid container className={classes.WierszeTabeli}> {/*Kontener do wierszy (wewnątrz są wiersze)*/}
                    {
                        // mapuj czyli zamień
                        listaObiektow.map((elementListy) => {
                            return (<Grid container className={classes.KomorkaTabeli}>
                                <Grid item xs={1}>{elementListy.id}</Grid>
                                <Grid item xs={2}>{elementListy.imie}</Grid>
                                <Grid item xs={2}>{elementListy.nazwisko}</Grid>
                                <Grid item xs={3}>{elementListy.dataUrodzenia}</Grid>
                                <Grid item xs={2}>{elementListy.adres}</Grid>
                                <Grid item xs={2}>
                                    <Button onClick={()=> usunElementZListy(elementListy.id)} variant="outlined">Usun</Button>
                                </Grid>
                            </Grid>);
                        })
                    }
                </Grid>
            </Grid>
        </div>
    );
}

export default CialoStrony;