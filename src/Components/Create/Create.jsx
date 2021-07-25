import React from 'react'
import styles from './Create.module.scss'
import { useState } from 'react'
import { useHistory } from 'react-router'

const Create = () => {
    const [title, setTitle] =useState('')
    const [abv, setAbv] =useState('')
    const [tagline, setTagline] =useState('')
    const [brewersTip, setBrewersTip] =useState('')
    const [image_url, setImage_url] =useState(undefined)

    const handleForm = (e) => {
        e.preventDefault()
        const beer = {title, abv, tagline, brewersTip}
        console.log(beer);

        fetch('https://api.punkapi.com/v2/beers', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(beer)
        })
    }
    return (
        <div className={styles.create}>
            <h2>Add Your Favorite Beer!</h2>
            <form onSubmit={handleForm}>
            <p>(required)</p>
            <label>Add an Image</label>
            <input type="file" value={image_url} on  />
            <label> Add a Title</label>
            <input required type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
            <label> Add a ABV</label>
            <input required type="text" value={abv} onChange={(e) => setAbv(e.target.value)}/>
            <label> Add a TagLine</label>
            <input required type="text" value={tagline} onChange={(e) => setTagline(e.target.value)}/>
            <p>(optional)</p>
            <label> Add a Brewers Tip</label>
            <input type="text" value={brewersTip} onChange={(e) => setBrewersTip(e.target.value)}/>
            <button>Submit</button>
            </form>
        </div>
    )
}

export default Create
