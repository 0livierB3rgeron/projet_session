import {Toolbar, IconButton, Badge, Typography} from "@mui/material"
import AddBoxIcon from "@mui/icons-material/AddBox"
import { Link } from "react-router-dom"
import { AppBar } from '@mui/material';
import Face6Icon from '@mui/icons-material/Face6';
import { FormattedMessage } from "react-intl";
import { logout } from "../firebase";



export default function Appbar(){

    return(
    <AppBar position="fixed" sx={{backgroundColor: '#4caf50',}}>
        <Toolbar >
            <Link to={{pathname: "/formulaire"}}>              
                <IconButton color="error">
                    <Badge sx={{color:'white'}}><AddBoxIcon color="inherit" fontSize='large'/> Ajouter</Badge>
                </IconButton>
            </Link>
            <FormattedMessage id="app.titre">
                { txt=><Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>
                {txt}
                </Typography>}
            </FormattedMessage>

            <Link to={{pathname:"/connexion"}}>
                <IconButton color="error" onClick={logout}>
                    <Badge sx={{color:'white'}}><Face6Icon fontSize='large'/> Connexion/Deconnexion </Badge>
                </IconButton>
            </Link>
        </Toolbar>
    </AppBar>
    );

}
