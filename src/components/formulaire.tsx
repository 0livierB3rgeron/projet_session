import { Badge, Button, Grid, IconButton, InputLabel, MenuItem, Paper, Select, TextField} from '@mui/material';
import { Link } from 'react-router-dom';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import Appbar from './appBar';
import axios from 'axios';
import {  useState } from 'react';



export default function Formulaire(){

    const conti = ['Amérique du nord', 'Amérique du sud', 'Europe', 'Asie', 'Afrique', 'Océanie'];
    
    const [nom, setNom] = useState("");
    const [surnom, setSurnom] = useState("");
    const [pays, setPays] = useState("");
    const [climat, setClimat] = useState("");
    const [continent, setContinent] = useState("");
    const [population, setPopulation] = useState(0);
    const [elevation, setElevation] = useState(0);
    const [date, setDate] = useState("");
    const [success, setSuccess] = useState("");

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    axios.post(`https://astounding-souffle-adaeb1.netlify.app/villes`, { 
      "ville": {
        "nom": nom,
        "surnoms": surnom,
        "pays": pays,
        "longitude": "139°41'30 E",
        "lattitude": "35°41'22 N",
        "climat": climat,
        "continent": continent,
        "population": population,
        "superficie": 2190.93,
        "elevation": elevation,
        "infraImportante": [
            {
                "nom": "Tokyo Skytree",
                "adresse": "1 Chome-1-2 Oshiage, Sumida City"
            },
            {
                "nom": "Palais Imperial",
                "adresse": "1-1 Chiyoda, Chiyoda-ku 100-0001"
            }
        ],
        "anneeFondation": "24/03/1999",
        "dangereux": false,
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Cycliste_%C3%A0_la_V%C3%A9logare_du_Grand-Tronc.jpg/1200px-Cycliste_%C3%A0_la_V%C3%A9logare_du_Grand-Tronc.jpg"
    }
    })
      .then((response) => {
        setSuccess("s");
        console.log('Les données villes sont:', response.data);
      })
      .catch((error) => {
        setSuccess("e")
        console.error('erreur lors du post:', error);
      });
  };

  if(success == "s"){
    window.alert("INSERTION EFFECTUER AVEC SUCCÈS");
  }
  else if (success == "e"){
    window.alert("ERREUR LORS DE L'INSERTION")
  }

    
    return(
<>
    <Appbar/>
    <form onSubmit={handleSubmit}>
      <Paper elevation={3} style={{ padding: 20 }} sx={{backgroundColor: "lightgrey"}}>
        <Grid container spacing={3} paddingBottom={5}>
          
          <Grid item xs={12} md={6}>
          <InputLabel >Nom de la ville</InputLabel>
            <TextField value={nom} onChange={(e)=>setNom(e.target.value)} variant="outlined" fullWidth/>
            <InputLabel>Surnom de la ville</InputLabel>
            <TextField value={surnom} onChange={(e)=>setSurnom(e.target.value)} variant="outlined" fullWidth />
          </Grid>
        
          <Grid item xs={12} md={6}>
          <InputLabel>Continent</InputLabel>
            <Select  label="continent" value={continent} onChange={(e)=>setContinent(e.target.value)} fullWidth variant='outlined' placeholder='contienn'>
                <MenuItem value={conti[0]}>Amérique du nord</MenuItem>
                <MenuItem value={conti[1]}>Amérique du sud</MenuItem>
                <MenuItem value={conti[2]}>Europe</MenuItem>
                <MenuItem value={conti[3]}>Asie</MenuItem>
                <MenuItem value={conti[4]}>Afrique</MenuItem>
                <MenuItem value={conti[5]}>Océanie</MenuItem>
            </Select>
            <InputLabel>Climat</InputLabel>
            <TextField value={climat}  onChange={(e)=>setClimat(e.target.value)} variant="outlined" fullWidth />
          </Grid>

          <Grid item xs={12} md={6}>
          <InputLabel>Population</InputLabel>
            <TextField value={population} onChange={(e)=>setPopulation(parseInt(e.target.value))} type='number' variant='outlined' fullWidth />

            <InputLabel>Pays</InputLabel>
            <TextField value={pays} onChange={(e)=>setPays(e.target.value)} variant="outlined" fullWidth />
          </Grid>

          <Grid item xs={12} md={6}>
            <InputLabel>Élévation</InputLabel>
            <TextField value={elevation} onChange={(e)=>setElevation(parseInt(e.target.value))} type='number' variant='outlined' fullWidth />
            <InputLabel >Date</InputLabel>
            <TextField value={date} onChange={(e)=>setDate(e.target.value)} type='date' ></TextField>
          </Grid>

        </Grid>
        <Button variant="contained" color="success" type="submit">
          Submit
        </Button>
      </Paper>
    </form>
    <Link to={{pathname: "/"}}>        
        <IconButton>
            <Badge sx={{color: "white"}}><ArrowCircleLeftIcon color='success' fontSize='large' /> Retour acceuil</Badge>
        </IconButton>
    </Link>
</>
    );
}

