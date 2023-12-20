import { useEffect, useState} from 'react';
import {  Unstable_Grid2 as Grid } from '@mui/material';
import Appbar from './appBar';
import { IVille } from '../models/villes';
import CarteVille from './carteVille';
import axios from 'axios';

export default function Acceuil(){


    const [villes, setVilles] = useState<IVille[]>([]);
   
    useEffect(() => {
        axios.get('https://astounding-souffle-adaeb1.netlify.app/villes')
          .then((response) => {
            setVilles(response.data.Villes);
          })
          .catch((error) => {
            console.error('Error fetching data:', error);
          });
        },[]);
    return(
        <>
        <Appbar/>
        <Grid container spacing={5} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', marginTop: 10 }}>
            {villes &&
            villes.map((ville) => {
                return (
                <Grid sx={{paddingTop: '50px'}}>
                    <CarteVille ville={ville} favoris={false}/>
                </Grid>
                );
            })}
        </Grid>
        </>
    );
}