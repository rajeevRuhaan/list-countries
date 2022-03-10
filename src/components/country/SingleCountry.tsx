import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchCountry } from '../../redux/country/action';
import { InitialState } from '../../redux/store';
import { addFavorite, removeFavorite } from "../../redux/favorite/action";
import Loading from '../Loading';
import Error from '../Error';

import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardMedia  from '@mui/material/CardMedia';
import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from "@mui/icons-material/Favorite";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const SingleCountry = () => {
    const name = useParams().country;
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {country, loading, error} = useSelector((state: InitialState) => state.country);
    const favorite = useSelector((state: InitialState) => state.favorite.favorite)

    useEffect(()=> {
        dispatch(fetchCountry(name as string))
    }, [dispatch, name])

   
    const handleFavorite = (favoriteCountry: string) => {
        if (favorite.includes(favoriteCountry)) {
          dispatch(removeFavorite(favoriteCountry));
        } else {
          dispatch(addFavorite(favoriteCountry));
        }
      };

    if (loading) {
        return <Loading />;
      } else if (error) {
        return <Error err={error} />;
      }
    return (
        <Paper >
            {country.length > 0 && (
                <Container maxWidth="sm" >
                    <Card sx={{maxWidth: 550}}>
                        <CardMedia  
                        component = "img" 
                        height="150"
                        image = {country[0].flags.png} 
                        alt = "country flag"/>
                    <Grid sx={{display: "flex", justifyContent: "space-between" }}>
                        <Grid><Typography variant="h5" >{country[0].name.common}</Typography></Grid>
                        <Grid>  
                            <IconButton
                            onClick={() => handleFavorite(country[0].name.common)}
                            >
                                <FavoriteIcon
                                    style={{
                                    color: favorite.includes(country[0].name.common)
                                        ? "red"
                                        : "black",
                                    }}
                                />
                            </IconButton> 
                        </Grid>
                    </Grid>
                    <Accordion>
                        <AccordionSummary  expandIcon={<ExpandMoreIcon />}>
                            <Typography>Capital</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>{country[0].capital}</Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography>NativeName</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>{Object.values(country[0].name.nativeName)[0].common}</Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography>Currencies</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>{country[0].currencies !== undefined &&
                            Object.values(country[0].currencies)[0].name}</Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography>Languages</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>{country[0].languages !== undefined &&
                                Object.values(country[0].languages).map((language) => {
                                    return <div key={language}>{language}</div>;
                                })}</Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography>Borders</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>{country[0].borders !== undefined &&
                            country[0].borders.map((border) => (
                                <div key={border}>{border}</div>
                            ))}</Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography>Time Zones</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>{country[0].timezones.map((timezone) => (
                            <span key={timezone}>{timezone} </span>
                            ))}</Typography>
                        </AccordionDetails>
                    </Accordion>
                    <CardActions sx={{ justifyContent: "center" }}>
                        <Button variant="contained"
                            size="small"
                            onClick={() => {
                            navigate("/");
                            }}
                        >
                            Back Button
                        </Button>
                    </CardActions>
                    </Card>
                </Container>
            )}      
        </Paper>
    );
};

export default SingleCountry;