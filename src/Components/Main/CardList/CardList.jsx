import React from "react";
import styles from "./CardList.module.scss";
import Card from "./Card";
import { useContext, useEffect, useState } from "react";
import { SearchContext } from "../../../App";
import { AcidFilter } from "../../../App";
import { abvFilter } from "../../../App";
import { Grid } from "@material-ui/core";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => {
  return {
    cards: {
      padding: theme.spacing(3),
    },
  };
});

const CardList = ({ data }) => {
  const classes = useStyles();
  // const [filteredSearch, setFilteredSearch] = useState([])

  const search = useContext(SearchContext);
  const acid = useContext(AcidFilter);
  const abv = useContext(abvFilter);
  console.log(acid);

  let filteredSearch = data.filter((beer) => {
    if (acid.acidity) {
      return beer.ph <= 4;
    }
    if (abv.abvCheck) {
      return beer.abv > 6;
    }
    if (!beer.name) {
      return false;
    }
    return beer.name
      .toLowerCase()
      .includes(search.searchText.toLowerCase().trim());
  });

  return (
    <Container className={classes.page}>
      <Grid container spacing={3}>
        {filteredSearch &&
          filteredSearch.map((d) => (
            // if()
            <Grid item key={d.id} xs={10} md={6} lg={4}>
              <Card isfilled={false} data={d} />
            </Grid>
          ))}
      </Grid>
    </Container>
  );
};

export default CardList;
