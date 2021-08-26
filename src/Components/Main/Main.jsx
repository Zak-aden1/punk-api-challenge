import React from "react";
import styles from "./Main.module.scss";
import CardList from "./CardList";
import { useState, useEffect } from "react";
import { firestore } from "../../firebase";

const Main = () => {
  const [data, setData] = useState([]);

  const getFavs = () => {
    return firestore
      .collection("favourites")
      .get()
      .then((snapshot) => {
        const postData = [];
        return snapshot.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        });
      });
  };

  useEffect(() => {
    fetch("https://api.punkapi.com/v2/beers")
      .then((res) => res.json())
      .then(async (data) => {
        let beers = data.map((beer) => ({ ...beer, favIcon: false }));
        const favs = await getFavs();

        beers = beers.map((b) => {
          b.favIcon = favs.filter((f) => f.name == b.name).length > 0;
          return b;
        });

        setData(beers);
      });
  }, []);

  return <>{data && data.length > 0 ? <CardList data={data} /> : null}</>;
};

export default Main;
