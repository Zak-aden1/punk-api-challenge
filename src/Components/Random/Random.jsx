import React from 'react'
import { useState } from 'react'
import useFetch from '../../useFetch'
import styles from './Random.module.scss'

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

const Random = ({idRandom}) => {

        

    const {ispending, error, data: beer} = useFetch('https://api.punkapi.com/v2/beers/' + idRandom)
    console.log(beer, "hello man");
    return (
        <div>
             {ispending && <div>loading....</div>}
            {error && <div>{error}</div>}
            
            {beer && <Card className={styles.card} key={beer.id} elevation={8}>
            <CardHeader 
            className={styles.cardHeader}
             action={
            <IconButton>
            <FavoriteBorderOutlinedIcon />
            </IconButton>
             }
            title={beer[0].name}
            subheader={beer[0].tagline}
            />
            
            <CardMedia
            style = {{ height: 300, paddingTop: '56.25%', width: 'auto', margin: '0px auto', backgroundSize: 'contain'}}
            image={beer[0].image_url}
            title="Paella dish"
            />
            <CardContent>
                <Typography variant='p'>
                    ABV: {beer[0].abv}
                </Typography>
                <Typography variant='p'>
                    PH: {beer[0].ph}
                </Typography>
                {/* <Button onClick={() => {history.push(`/beers/${id}`)}} 
                    className={classes.btn}
                    // variant='outlined' 
                    type='submit'
                    color='secondary'
                    endIcon={<InfoOutlinedIcon/>}
                    >Click for Info!</Button> */}
                
            </CardContent>

        </Card> }
        </div>
    )
}

export default Random
