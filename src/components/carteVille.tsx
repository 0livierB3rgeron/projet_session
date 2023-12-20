import { Badge, Card, IconButton } from '@mui/material';
import { CardActions } from '@mui/material';
import { CardContent } from '@mui/material';
import { CardMedia } from '@mui/material';
import { Typography } from '@mui/material';
import { IVille } from '../models/villes'; 
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';

interface ICarteVille{
    ville : IVille
    favoris: boolean
}


export default function CarteVille(props: ICarteVille){

  const handleDelete = () => {
    axios.delete('https://astounding-souffle-adaeb1.netlify.app/Villes/delete/'+ props.ville._id)
    .then(response => {
      window.location.reload();
      console.log("Suppression effectuer avec succès" + response)
      
    })
    .catch(error => {
        console.error(error)
    });
  };

    return(
        <Card sx={{ width: 300,  height: 550,  padding: 5}}>
        <CardMedia
          component="img"
          sx={{ objectFit: 'contain' }}
          image={props.ville.image}
        />
        <CardContent style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography gutterBottom variant="h6" component="div">
            Nom : {props.ville.nom}
          </Typography>
          <Typography variant="h6" component="div">
            Surnoms : {props.ville.surnoms[0]}; {props.ville.surnoms[1]}
          </Typography>
          <Typography variant="body1" color="text.primary">
            Pays : {props.ville.pays}
          </Typography>
          <Typography variant="body1" color="text.primary">
            Contient : {props.ville.continent}
          </Typography>
          <Typography variant="body1" color="text.primary">
            Coordonnées: {props.ville.longitude} {props.ville.lattitude}
          </Typography>
          <Typography variant="body1" color="text.primary">
            Fondation: {props.ville.anneeFondation}
          </Typography>
          <Typography variant="body1" color="text.primary">
            Population: {props.ville.population}
          </Typography>
          <Typography variant="body1" color="text.primary">
            Climat: {props.ville.climat}
          </Typography>
          <Typography variant="body1" color="text.primary">
            Élévation: {props.ville.elevation}
          </Typography>
          <CardActions>
                <IconButton size="large"color="success" onClick={handleDelete}>
                    <Badge><DeleteIcon fontSize='large'/></Badge>
                </IconButton>
           </CardActions>
        </CardContent>
      </Card>
    );
}