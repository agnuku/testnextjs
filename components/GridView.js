
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import styles from "../styles/Cube.module.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 3,
    marginBottom: "2px",

  },
  paper: {
    padding: theme.spacing(3),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    alignContent: "spacing",
    alignContent: "center",
    height:"230px",
    display:"flex",
    flexDirection: "row",

  },
  Container :{
    marginBottom: "2px",

  }

}));

export default function GridView() {
  const classes = useStyles();

  return (
    <div className={classes.root} className={classes.container}>
      <Grid container stretch spacing={1}>
        <Grid item sm={6} >
          <Paper className={classes.paper}>
          Interact with this fully tailored BI solution. A customized end-to-end solution using a modern web technology stack:
          Angular, Node, Express and PostgreSQL.
          Interact with this fully tailored BI solution. A customized end-to-end solution using a modern web technology stack:
          Angular, Node, Express and PostgreSQL.
          Interact with this fully tailored BI solution. A customized end-to-end solution using a modern web technology stack:
          Angular, Node, Express and PostgreSQL.
              </Paper>
        </Grid>
        <Grid item sm={6}>
          <Paper className={classes.paper}>
          Interact with this fully tailored BI solution. A customized end-to-end solution using a modern web technology stack:
          Angular, Node, Express and PostgreSQL.

          Interact with this fully tailored BI solution. A customized end-to-end solution using a modern web technology stack:
          Angular, Node, Express and PostgreSQL.
          Interact with this fully tailored BI solution. A customized end-to-end solution using a modern web technology stack:
          Angular, Node, Express and PostgreSQL.
          </Paper>
        </Grid>

      </Grid>

      <Grid container spacing={1} className={styles.spacing}>
        <Grid item sm="8">
          <Paper className={classes.paper}>
          Interact with this fully tailored BI solution. A customized end-to-end solution using a modern web technology stack:
          Angular, Node, Express and PostgreSQL.
          Interact with this fully tailored BI solution. A customized end-to-end solution using a modern web technology stack:
          Angular, Node, Express and PostgreSQL.
          Interact with this fully tailored BI solution. A customized end-to-end solution using a modern web technology stack:
          Angular, Node, Express and PostgreSQL.
          Interact with this fully tailored BI solution. A customized end-to-end solution using a modern web technology stack:
          Angular, Node, Express and PostgreSQL.
          Angular, Node, Express and PostgreSQL.
          Interact with this fully tailored BI solution. A customized end-to-end solution using a modern web technology stack:
          Angular, Node, Express and PostgreSQL.
          </Paper>
        </Grid>

        <Grid item sm="4">
          <Paper className={classes.paper}>
          Interact with this fully tailored BI solution. A customized end-to-end solution using a modern web technology stack:
          Angular, Node, Express and PostgreSQL.
          Interact with this fully tailored BI solution. A customized end-to-end solution using a modern web technology stack:
          Angular, Node, Express and PostgreSQL.
          I
          </Paper>
        </Grid>
      </Grid>
      <Grid container spacing={1} className={styles.spacing}>
        <Grid item sm="5">
          <Paper className={classes.paper}>
          Interact with this fully tailored BI solution. A customized end-to-end solution using a modern web technology stack:
          Angular, Node, Express and PostgreSQL.
          Interact with this fully tailored BI solution. A customized end-to-end solution using a modern web technology stack:
          Interact with this fully tailored BI solution. A customized end-to-end solution using a modern web technology stack:
          Angular, Node, Express and PostgreSQL.
          </Paper>
        </Grid>

        <Grid item sm="7">
          <Paper className={classes.paper}>
          Interact with this fully tailored BI solution. A customized end-to-end solution using a modern web technology stack:
          Angular, Node, Express and PostgreSQL.
          Interact with this fully tailored BI solution. A customized end-to-end solution using a modern web technology stack:
          Angular, Node, Express and PostgreSQL.

          </Paper>
        </Grid>
      </Grid>
      <Grid item className={styles.spacing} sm={12}>
          <Paper className={classes.paper}>
          Angular, Node, Express and PostgreSQL.
          Interact with this fully tailored BI solution. A customized end-to-end solution using a modern web technology stack:
          Angular, Node, Express and PostgreSQL.
          Interact with this fully tailored BI solution. A customized end-to-end solution using a modern web technology stack:
          Angular, Node, Express and PostgreSQL.
          Angular, Node, Express and PostgreSQL.
          Interact with this fully tailored BI solution. A customized end-to-end solution using a modern web technology stack:
          Angular, Node, Express and PostgreSQL.
          Interact with this fully tailored BI solution. A customized end-to-end solution using a modern web technology stack:
          Angular, Node, Express and PostgreSQL.
          </Paper>
        </Grid>
        <Grid container spacing={1} className={styles.spacing}>
        <Grid item sm="5">
          <Paper className={classes.paper}>
          Interact with this fully tailored BI solution. A customized end-to-end solution using a modern web technology stack:
          Angular, Node, Express and PostgreSQL.
          Interact with this fully tailored BI solution. A customized end-to-end solution using a modern web technology stack:
          Angular, Node, Express and PostgreSQL.
          Interact with this fully tailored BI solution. A customized end-to-end solution using a modern web technology stack:

          </Paper>
        </Grid>

        <Grid item sm="7">
          <Paper className={classes.paper}>
          Interact with this fully tailored BI solution. A customized end-to-end solution using a modern web technology stack:
          Angular, Node, Express and PostgreSQL.
          Interact with this fully tailored BI solution. A customized end-to-end solution using a modern web technology stack:
          Angular, Node, Express and PostgreSQL.
          Interact with this fully tailored BI solution. A customized end-to-end solution using a modern web technology stack:
          Angular, Node, Express and PostgreSQL.
          Interact with this fully tailored BI solution. A customized end-to-end solution using a modern web technology stack:
          Angular, Node, Express and PostgreSQL.
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
