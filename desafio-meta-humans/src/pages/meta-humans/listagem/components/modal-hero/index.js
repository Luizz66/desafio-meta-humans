import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Typography,
  Box,
} from "@mui/material";
import classes from "./styles";

export default function ModalHero({ open, setOpen, title, hero, ...props }) {
  return (
    <Dialog open={open} maxWidth="xl" fullWidth {...props}>
      <Grid>
        <Grid>
          <DialogTitle sx={{ fontSize: "2rem" }}>{title}</DialogTitle>
        </Grid>
        <Grid>
          <DialogContent>
            <Grid container columnGap={3}>
              <Grid item xs={12} sm="auto">
                <img src={hero.images.md} alt={hero.name} style={classes.img} />
              </Grid>
              <Grid container item xs={12} sm columnGap={3}>
                <Grid
                  sx={{
                    ...classes.itemInfo(hero.name.length),
                    ...{ paddingLeft: 0 },
                  }}
                  xs="auto"
                >
                  <Typography variant="caption" sx={classes.itemLabel}>
                    Name:
                  </Typography>
                  <Typography variant="h4" sx={classes.itemValue}>
                    {hero.name}
                  </Typography>
                </Grid>
                <Grid sx={{
                    ...classes.itemInfo(hero.name.length),
                    ...{ paddingLeft: 0 },
                  }} xs="auto">
                  <Typography variant="caption" sx={classes.itemLabel}>
                    Slug:
                  </Typography>
                  <Typography variant="h4" sx={classes.itemValue}>
                    {hero.slug}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h3" sx={classes.categoryLabel}>
                    Power Stats
                  </Typography>
                </Grid>
                <Grid sx={classes.itemInfo(3)} xs="auto">
                  <Typography variant="caption" sx={classes.itemLabel}>
                    Intelligence:
                  </Typography>
                  <Typography variant="h4" sx={classes.itemValue}>
                    {hero.powerstats.intelligence}
                  </Typography>
                </Grid>
                <Grid sx={classes.itemInfo(3)} xs="auto">
                  <Typography variant="caption" sx={classes.itemLabel}>
                    Strength:
                  </Typography>
                  <Typography variant="h4" sx={classes.itemValue}>
                    {hero.powerstats.strength}
                  </Typography>
                </Grid>
                <Grid sx={classes.itemInfo(3)} xs="auto">
                  <Typography variant="caption" sx={classes.itemLabel}>
                    Speed:
                  </Typography>
                  <Typography variant="h4" sx={classes.itemValue}>
                    {hero.powerstats.speed}
                  </Typography>
                </Grid>
                <Grid sx={classes.itemInfo(3)} xs="auto">
                  <Typography variant="caption" sx={classes.itemLabel}>
                    Durability:
                  </Typography>
                  <Typography variant="h4" sx={classes.itemValue}>
                    {hero.powerstats.durability}
                  </Typography>
                </Grid>
                <Grid sx={classes.itemInfo(3)} xs="auto">
                  <Typography variant="caption" sx={classes.itemLabel}>
                    Power:
                  </Typography>
                  <Typography variant="h4" sx={classes.itemValue}>
                    {hero.powerstats.power}
                  </Typography>
                </Grid>
                <Grid sx={classes.itemInfo(3)} xs="auto">
                  <Typography variant="caption" sx={classes.itemLabel}>
                    Combat:
                  </Typography>
                  <Typography variant="h4" sx={classes.itemValue}>
                    {hero.powerstats.combat}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h3" sx={classes.categoryLabel}>
                    Appearance
                  </Typography>
                </Grid>
                <Grid
                  sx={classes.itemInfo(hero.appearance.gender.length)}
                  xs="auto"
                >
                  <Typography variant="caption" sx={classes.itemLabel}>
                    Gender:
                  </Typography>
                  <Typography variant="h4" sx={classes.itemValue}>
                    {hero.appearance.gender}
                  </Typography>
                </Grid>
                <Grid
                  sx={classes.itemInfo(hero.appearance.race?.length ?? 0)}
                  xs="auto"
                >
                  <Typography variant="caption" sx={classes.itemLabel}>
                    Race:
                  </Typography>
                  <Typography variant="h4" sx={classes.itemValue}>
                    {hero.appearance.race}
                  </Typography>
                </Grid>
                <Grid
                  sx={classes.itemInfo(hero.appearance.height[1].length)}
                  xs="auto"
                >
                  <Typography variant="caption" sx={classes.itemLabel}>
                    Height:
                  </Typography>
                  <Typography variant="h4" sx={classes.itemValue}>
                    {hero.appearance.height[1]}
                  </Typography>
                </Grid>
                <Grid
                  sx={classes.itemInfo(hero.appearance.weight[1].length)}
                  xs="auto"
                >
                  <Typography variant="caption" sx={classes.itemLabel}>
                    Weight:
                  </Typography>
                  <Typography variant="h4" sx={classes.itemValue}>
                    {hero.appearance.weight[1]}
                  </Typography>
                </Grid>
                <Grid
                  sx={classes.itemInfo(hero.appearance.eyeColor.length)}
                  xs="auto"
                >
                  <Typography variant="caption" sx={classes.itemLabel}>
                    Eye Color:
                  </Typography>
                  <Typography variant="h4" sx={classes.itemValue}>
                    {hero.appearance.eyeColor}
                  </Typography>
                </Grid>
                <Grid
                  sx={classes.itemInfo(hero.appearance.hairColor.length)}
                  xs="auto"
                >
                  <Typography variant="caption" sx={classes.itemLabel}>
                    Hair Color:
                  </Typography>
                  <Typography variant="h4" sx={classes.itemValue}>
                    {hero.appearance.hairColor}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h3" sx={classes.categoryLabel}>
                    Biography
                  </Typography>
                </Grid>
                <Grid
                  sx={classes.itemInfo(hero.biography.fullName.length)}
                  xs="auto"
                >
                  <Typography variant="caption" sx={classes.itemLabel}>
                    Full Name:
                  </Typography>
                  <Typography variant="h4" sx={classes.itemValue}>
                    {hero.biography.fullName}
                  </Typography>
                </Grid>
                <Grid
                  sx={classes.itemInfo(hero.biography.alterEgos.length)}
                  xs="auto"
                >
                  <Typography variant="caption" sx={classes.itemLabel}>
                    Alter Egos:
                  </Typography>
                  <Typography variant="h4" sx={classes.itemValue}>
                    {hero.biography.alterEgos}
                  </Typography>
                </Grid>
                <Grid
                  sx={classes.itemInfo(
                    hero.biography.aliases.join(", ").length
                  )}
                  xs="auto"
                >
                  <Typography variant="caption" sx={classes.itemLabel}>
                    Aliases:
                  </Typography>
                  <Typography variant="h4" sx={classes.itemValue}>
                    {hero.biography.aliases.join(", ")}
                  </Typography>
                </Grid>
                <Grid
                  sx={classes.itemInfo(hero.biography.placeOfBirth.length)}
                  xs="auto"
                >
                  <Typography variant="caption" sx={classes.itemLabel}>
                    Place Of Birth:
                  </Typography>
                  <Typography variant="h4" sx={classes.itemValue}>
                    {hero.biography.placeOfBirth}
                  </Typography>
                </Grid>
                <Grid
                  sx={classes.itemInfo(hero.biography.publisher.length)}
                  xs="auto"
                >
                  <Typography variant="caption" sx={classes.itemLabel}>
                    Publisher:
                  </Typography>
                  <Typography variant="h4" sx={classes.itemValue}>
                    {hero.biography.publisher}
                  </Typography>
                </Grid>
                <Grid
                  sx={classes.itemInfo(hero.biography.alignment.length)}
                  xs="auto"
                >
                  <Typography variant="caption" sx={classes.itemLabel}>
                    Alignment:
                  </Typography>
                  <Typography variant="h4" sx={classes.itemValue}>
                    {hero.biography.alignment}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h3" sx={classes.categoryLabel}>
                    Work
                  </Typography>
                </Grid>
                <Grid
                  sx={classes.itemInfo(hero.work.occupation.length)}
                  xs="auto"
                >
                  <Typography variant="caption" sx={classes.itemLabel}>
                    Occupation:
                  </Typography>
                  <Typography variant="h4" sx={classes.itemValue}>
                    {hero.work.occupation}
                  </Typography>
                </Grid>
                <Grid sx={classes.itemInfo(hero.work.base.length)} xs="auto">
                  <Typography variant="caption" sx={classes.itemLabel}>
                    Base:
                  </Typography>
                  <Typography variant="h4" sx={classes.itemValue}>
                    {hero.work.base}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h3" sx={classes.categoryLabel}>
                    Connections
                  </Typography>
                </Grid>
                <Grid
                  sx={classes.itemInfo(
                    hero.connections.groupAffiliation.length
                  )}
                  xs="auto"
                >
                  <Typography variant="caption" sx={classes.itemLabel}>
                    Group Affiliation:
                  </Typography>
                  <Typography variant="h4" sx={classes.itemValue}>
                    {hero.connections.groupAffiliation}
                  </Typography>
                </Grid>
                <Grid
                  sx={classes.itemInfo(hero.connections.relatives.length)}
                  xs="auto"
                >
                  <Typography variant="caption" sx={classes.itemLabel}>
                    Relatives:
                  </Typography>
                  <Typography variant="h4" sx={classes.itemValue}>
                    {hero.connections.relatives}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </DialogContent>
        </Grid>
        <Grid>
          <DialogActions>
            <Button onClick={() => setOpen(false)}>Fechar</Button>
          </DialogActions>
        </Grid>
      </Grid>
    </Dialog>
  );
}
