import React, {createContext, useState} from 'react'
import { firestore } from '../firebase'
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import FavoriteIcon from '@material-ui/icons/Favorite';
import styles from '../Components/Main/CardList/Card/Card.module.scss'

export const theCrudContext = createContext({})

const CrudContext = (props) => {


    const removeFromFavourites = (beer) => {
        firestore.collection("favourites").doc(beer.name).delete()
        .then(() => {
            alert("Beer successfully removed!");
        }).catch((error) => {
            alert("Error removing Beer: ", error);
        });
    };

    const addToFirebase = (beer) => {
        firestore
            .collection("favourites")
            .doc(beer.name)
            .set({
                ...beer, 
                id: beer.id
            })
            .then(() => {
                alert("Added to Favourites!");
            }).catch((error) => {
                alert("Error Adding to Favourites: ", error);
});}

    const toggleFavs = (beer, favIcon) => {
        !favIcon ? addToFirebase(beer): removeFromFavourites(beer)
    }

    // const handleFirebase = (beer) => {
    //     toggleFavs(beer)
    //     setFavIcon(!favIcon)
    // }

//    const favouriteIcon = !favIcon ? <FavoriteBorderOutlinedIcon className={styles.fav}  />: <FavoriteIcon className={styles.fav} />
    
    return (
        <theCrudContext.Provider value={{ toggleFavs }}>
            {props.children}
        </theCrudContext.Provider>
    )
}

export default CrudContext
