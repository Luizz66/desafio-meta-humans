import { Grid, Typography } from "@mui/material";
import classes from "./styles";
export default function HeroCard({ id, name, fullName, urlImg, onClick }) {
  return (
    <Grid container sx={classes.card} onClick={onClick}>
      <Grid item sx={classes.imgContainer} xs={5}>
        <img src={urlImg} alt={name} style={classes.img}/>
      </Grid>
      <Grid item sx={classes.infoContainer} xs={7}>
        <Typography variant="h5">{name}</Typography >
        <Typography variant="body">{fullName}</Typography>
      </Grid>
    </Grid>
  );
}
