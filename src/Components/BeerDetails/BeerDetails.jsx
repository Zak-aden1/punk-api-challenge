import React from 'react'
import { useParams } from 'react-router'
import useFetch from '../../useFetch'

const BeerDetails = () => {
    const {id} = useParams()
    const {ispending, error, data: beer} = useFetch('https://api.punkapi.com/v2/beers/' + id)
    // console.log(beer[0].description);


    return (
        <div>
            {ispending && <div>loading....</div>}
            {error && <div>{error}</div>}

            { beer && <div>
                <img src={beer[0].image_url} alt="" />
                <p>{beer[0].description}</p>
                {/* <p>Ingredients: {beer.ingredients.yeast}</p> */}
                <p>first brewed: {beer[0].first_brewed}</p>
            </div>} 
        </div>
    )
}

export default BeerDetails
