import React from 'react'
import styles from './Card.module.scss'
import { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'

import { Button } from '@material-ui/core'
import { Container } from '@material-ui/core'
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import { makeStyles } from '@material-ui/core'
import { Card } from '@material-ui/core'
import { CardHeader } from '@material-ui/core'
import { CardContent } from '@material-ui/core'
import { CardMedia } from '@material-ui/core'
import { IconButton } from '@material-ui/core'
import { Typography } from '@material-ui/core'
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { firestore } from '../../../../firebase'
import { useContext } from 'react'
import { theCrudContext } from '../../../../context/CrudContext'
import { UserContext } from '../../../../context/UserContex'

const useStyles = makeStyles({
    btn: {
        display: 'block',
        marginTop: 10,
        width: '100%',
        flexGrow: 2
    },
    cardHeader: {
        // height: '5px'
    },
    card: {
        backgroundColor: 'lightBlue',
        width: 300
    }
})

const Cards = (props,) => {
    const classes = useStyles()
    const history = useHistory()

    const [close, setClose] = useState(false)
    
    const {abv, name, description, image_url, tagline, ph, ingredients, first_brewed, favIcon, id} = props.data
    const [fav, setFav] =useState(props.data.favIcon)

    const shortenName = name.length < 15 ? name : name.substring(0, 15) + "...";
    const shortenTagLine = name.length < 27 ? name : name.substring(0, 27) + "...";

    const crudContext = useContext(theCrudContext);
    const { toggleFavs } = crudContext;

    const userContext = useContext(UserContext);
    const { user, } = userContext;

    let favouriteIcon; 
    if (!fav) {
        favouriteIcon = <FavoriteBorderOutlinedIcon className={styles.fav}  />
        console.log("Outline icon for: " + name)
    } else {
        favouriteIcon = <FavoriteIcon className={styles.fav} />
        console.log("SOLID icon for: " + name)
    }

    const handleFirebase = (beer) => {
        if(user) {
            beer.favIcon = !beer.favIcon
            toggleFavs(beer, beer.favIcon)
            setFav(props.data.favIcon)
            console.log(name + " beer favourite status is " + props.data.favIcon)
        } else {
            alert("Sign in to start liking beers")
        }
    }


    return (
        <div>
        <Card className={classes.card} key={id} elevation={8}>
            <CardHeader 
            className={styles.cardHeader}
            action={
            <IconButton onClick={() => (handleFirebase(props.data))}>
            {favouriteIcon}
            </IconButton>
            }
            title={shortenName}
            subheader={shortenTagLine}
            />
            
            <CardMedia
            style = {{ height: 300, paddingTop: '56.25%', width: 'auto', margin: '0px auto', backgroundSize: 'contain'}}
            image={image_url}
            title="Paella dish"
            />
            <CardContent className={styles.abv}>
                <div className={styles.abvPh}>
                <Typography variant='p'>
                    ABV: {abv}
                </Typography>
                <Typography className={styles.ph} variant='p'>
                    PH: {ph}
                </Typography>
                </div>
                <Button onClick={() => {history.push(`/beers/${id}`)}} 
                    className={classes.btn}
                    // variant='outlined' 
                    type='submit'
                    color='secondary'
                    endIcon={<InfoOutlinedIcon/>}
                    >
                    Click for Info!</Button>
                
            </CardContent>

        </Card>
            
                    {/* <h4>{name}</h4> */}
                    {/* <img src={image_url} alt="" /> */}
                    {/* <h5>{tagline}</h5>
                    <p> ABV: {abv}</p>
                    <p> PH: {ph}</p> */}
                    {/* <button onClick={() => {setClose(true)}}>Click for Info!</button> */}
                    {/* <Button onClick={() => {setClose(true)}} 
                    className={classes.btn}
                    variant='contained' 
                    type='submit'
                    color='secondary'
                    endIcon={<InfoOutlinedIcon/>}
                    >Click for Info!</Button> */}
                    {/* <Link to={`/beers/${id}`}><button>id information</button></Link> */}
                    

                    { close && <div className={styles.popupWrapper}>
                        <div className={styles.popup}>
                                <div onClick={() => {setClose(false)}} className={styles.popupClose}>x</div>
                                <div className={styles.popupContent}>
                                    <img src={image_url} alt="" />
                                    <p>{description}</p>
                                    <p>Ingredients: {ingredients.yeast}</p>
                                    <p>first brewed: {first_brewed}</p>
                                </div>
                        </div>
                    </div> }
        
        </div>
    )
}

export default Cards
