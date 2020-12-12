
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import styles from "../styles/Cube.module.css";

//import customImg from './images/custom.png';
//import dashboardImg from './images/dashboard.png';
import LaunchOutlinedIcon from '@material-ui/icons/LaunchOutlined';



const useStyles = makeStyles((theme) => ({
  root: {

    maxWidth: 300,
    padding: theme.spacing(2),
    margin: theme.spacing(1)
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    // backgroundColor: red[500],
  },
}));

export default function SimplePaper() {
  const classes = useStyles();



  return (
    <div>
      <Grid container spacing={1} className={styles.space_btms .styles}  >




      </Grid>
    </div>
  );
}
