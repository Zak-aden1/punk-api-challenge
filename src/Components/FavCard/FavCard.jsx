import React from 'react'
import styles from './FavCard.module.scss'
import { Card, CardHeader } from '@material-ui/core'
import { IconButton } from '@material-ui/core'
import { CardMedia } from '@material-ui/core'
import { Typography } from '@material-ui/core'
import { CardContent } from '@material-ui/core'
import FavoriteIcon from '@material-ui/icons/Favorite';
import { makeStyles } from '@material-ui/styles'
import { theCrudContext } from '../../context/CrudContext'
import { useContext } from 'react'

const useStyles = makeStyles({
    btn: {
        display: 'block',
        marginTop: 10,
        width: '100%',
        flexGrow: 2
    },
    cardHeader: {
        // height: '5px'
    }
})

const FavCard = (props) => {
    const classes = useStyles()

    const crudContext = useContext(theCrudContext);
    const { favouriteIcon, toggleFavs } = crudContext;

    // const handleFirebase = (beer) => {
    //     toggleFavs(beer)
    //     setFavIcon(!favIcon)
    // }

    const {abv, name, description, image_url, tagline, ph, ingredients, first_brewed, id} = props.data

    // const useContext = useContext(CrudContext)
    // const {favouriteIcon} = useContext
    return (
        <div>
            <Card className={styles.card} key={id} elevation={8}>
                <CardHeader 
                    className={styles.cardHeader}
                    // onClick={handleFirebase}
                    action={
                <IconButton>
                    {favouriteIcon}
            </IconButton>
             }
                title={name}
                subheader={tagline}
                />
                <CardMedia
                    style = {{ height: 300, paddingTop: '56.25%', width: 'auto', margin: '0px auto', backgroundSize: 'contain'}}
                    image={image_url}
                    title="Paella dish"
                />
                <CardContent className={styles.abv}>
                <Typography variant='p'>
                    ABV: {abv}
                </Typography>
                <Typography variant='p'>
                    PH: {ph}
                </Typography>
                
            </CardContent>
            </Card>
        </div>
    )
}

export default FavCard
