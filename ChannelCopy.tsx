import React from 'react';
import { Avatar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    height: '100%'
  },
  top: {
    flex: 0.8,
    display: 'flex',
    justifyContent: 'center',
    margin: '1rem'
  },
  bottom: {
    flex: 0.2,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    margin: '1rem'
  },
  texts: {
    color: 'white',
    backgroudColor: 'white'
  },
  bottomTexts: {
    textAlign: 'center',
    fontWeight: 'bold',
    marginRight: '3vw'
  }
});

const ChannelCopy = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.top}>
        <Typography variant="h4" className={classes.texts}>
          Trucos JS
        </Typography>
      </div>
      <div className={classes.bottom}>
        <div>
          <Typography
            variant="body1"
            className={[classes.bottomTexts, classes.texts]}
          >
            FlokyJS
          </Typography>
          <Typography
            variant="caption"
            className={[classes.bottomTexts, classes.texts]}
          >
            Subscríbete
          </Typography>
        </div>
        <Avatar
          alt="Remy Sharp"
          src="https://yt3.ggpht.com/Z-bIUybNgC6vO3rk3oPScqMRNN3VIAZr72yRRy22sLKC2KrewpZTDKZgtjb-iypGSeMnNTcHYg=s108-c-k-c0x00ffffff-no-rj"
        />
      </div>
    </div>
  );
};

export default ChannelCopy;
