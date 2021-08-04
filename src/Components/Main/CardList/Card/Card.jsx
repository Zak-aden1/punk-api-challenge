import React from 'react'
import styles from './Card.module.scss'
import { useState } from 'react'
import { Link } from 'react-router-dom'

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

const useStyles = makeStyles({
    btn: {
        display: 'block',
        marginTop: 10,
        width: '100%'
    }
})

const Cards = (props) => {
    const classes = useStyles()

    const [close, setClose] = useState(false)

    const {abv, name, description, image_url, tagline, ph, ingredients, first_brewed, id} = props.data


    return (
        <div>
        <Card className={styles.card} key={id} elevation={9}>
            <CardHeader 
             action={
            <IconButton>
            <FavoriteBorderOutlinedIcon />
            </IconButton>
             }
            title={name}
            subheader={tagline}
            />
            <CardMedia
            className={styles.image}
            style = {{ height: 300, paddingTop: '56.25%', width: 'auto', margin: '0px auto', backgroundSize: 'contain'}}
            
            image={image_url}
            // src={image_url}
            title="Paella dish"
            />
            <CardContent>
                <Typography variant='p'>
                    ABV: {abv}
                </Typography>
                <Typography variant='p'>
                    PH: {ph}
                </Typography>
                <Button onClick={() => {setClose(true)}} 
                    className={classes.btn}
                    variant='contained' 
                    type='submit'
                    color='secondary'
                    endIcon={<InfoOutlinedIcon/>}
                    >Click for Info!</Button>
                
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
