import React from 'react'
import styles from './Card.module.scss'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Card = (props) => {
    const [close, setClose] = useState(false)

    const {abv, name, description, image_url, tagline, ph, ingredients, first_brewed, id} = props.data


    return (
        <div className={styles.card} key={id}>
            
                    <h4>{name}</h4>
                    <img src={image_url} alt="" />
                    <h5>{tagline}</h5>
                    <p>{abv}, {ph}</p>
                    <button onClick={() => {setClose(true)}}>Click for Info!</button>
                    <Link to={`/beers/${id}`}><button>id information</button></Link>
                    

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

export default Card
