import HeroCard from "./components/hero-card";
import { useEffect, useState } from "react";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import classes from "./styles";
import ModalHero from "./components/modal-hero";

export default function Listagem() {
  const [heroesList, setHeroesList] = useState([]);
  const [heroesListFiltered, setHeroesListFiltered] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [modalOpened, setModalOpened] = useState(false);
  const [selectedHero, setSelectedHero] = useState(null);

  useEffect(() => {
    fetchHeroes();
  }, []);

  useEffect(() => {
    filterHeroes();
  }, [searchText]);

  const filterHeroes = () => {
    setHeroesListFiltered(
      heroesList.filter(
        (hero) =>
          hero.name.toLowerCase().includes(searchText.toLowerCase()) ||
          hero.biography.fullName
            .toLowerCase()
            .includes(searchText.toLowerCase())
      )
    );
  };

  const fetchHeroes = async () => {
    const response = await fetch(
      "https://homologacao3.azapfy.com.br/api/ps/metahumans"
    );
    const data = await response.json();
    setHeroesList(data);
    setHeroesListFiltered(data);
  };

  const battle = () => {
    const sumStats = (hero) =>
      hero.powerstats.intelligence +
      hero.powerstats.strength +
      hero.powerstats.speed +
      hero.powerstats.durability +
      hero.powerstats.power +
      hero.powerstats.combat;

    const winner = heroesList.find(
      (hero) => sumStats(hero) === Math.max(...heroesList.map(sumStats))
    );
    setSelectedHero(winner);
    setModalOpened(true);
  };

  return (
    <Box sx={classes.container}>
      <Box sx={classes.titleContainer}>
        <Typography
          variant="h2"
          sx={{
            color: "#102357",
            fontWeight: "bold",
            padding: "20px 0 20px 15px",
          }}
        >
          Listagem de Meta-Humans
        </Typography>
      </Box>
      <Grid container sx={classes.actionsContainer}>
        <Grid item xs={12} md={4}>
          <TextField
            sx={{ backgroundColor: "white" }}
            fullWidth
            placeholder="Pesquisar..."
            onChange={(e) => setSearchText(e.target.value)}
            value={searchText}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <Button onClick={battle} variant="contained">Batalhar</Button>
        </Grid>
      </Grid>
      <Grid container rowGap={1} columnGap={0} sx={classes.listContainer}>
        {heroesListFiltered.map((hero) => (
          <Grid key={hero.id} item xs={12} md={6} lg="auto">
            <HeroCard
              onClick={() => {
                setSelectedHero(hero);
                setModalOpened(true);
              }}
              key={hero.id}
              id={hero.id}
              name={hero.name}
              fullName={hero.biography.fullName}
              urlImg={hero.images.md}
            />
          </Grid>
        ))}
      </Grid>
      {modalOpened && selectedHero !== null && (
        <ModalHero
          open={modalOpened}
          setOpen={setModalOpened}
          title="Info"
          hero={selectedHero}
        />
      )}
    </Box>
  );
}
