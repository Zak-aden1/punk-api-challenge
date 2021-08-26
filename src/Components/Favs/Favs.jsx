import { Container, Grid, Paper } from "@material-ui/core";
import React from "react";
import { useEffect, useState } from "react";
import { firestore } from "../../firebase";
import FavCard from "../FavCard";
import Card from "../Main/CardList/Card";

const Favs = () => {
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    return firestore.collection("favourites").onSnapshot((snapshot) => {
      const postData = [];
      snapshot.forEach((doc) => postData.push({ ...doc.data(), id: doc.id }));
      setFavourites(postData);
    });
  }, []);

  const likingIntro = favourites.length ? (
    favourites &&
    favourites.map((d) => (
      // if()
      <Grid item key={d.id} xs={10} md={6} lg={3}>
        {/* <Cards data={d}/> */}
        <Card data={d} />
      </Grid>
    ))
  ) : (
    <h1>Start By Liking Some Beers!!</h1>
  );

  return (
    <Container>
      <Grid container spacing={3}>
        {likingIntro}
      </Grid>
    </Container>
  );
};

export default Favs;
