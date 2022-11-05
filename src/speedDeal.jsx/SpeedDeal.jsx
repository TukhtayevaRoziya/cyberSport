import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import FileCopyIcon from '@material-ui/icons/FileCopyOutlined';
import SaveIcon from '@material-ui/icons/Save';
import PrintIcon from '@material-ui/icons/Print';
import ShareIcon from '@material-ui/icons/Share';
import FavoriteIcon from '@material-ui/icons/Favorite';
import EditIcon from '@material-ui/icons/Edit';
import CallIcon from '@material-ui/icons/Call';
import styles from './SpeedDeal.module.css'
import { Facebook, Instagram, Telegram, YouTube } from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({
  root: {
    transform: 'translateZ(0px)',
    flexGrow: 1,
  },
  speedDial: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

const actions = [
  { icon: <Telegram />, href:"",  name: 'Telegram' },
  { icon: <YouTube />, name: 'YouTube' },
  { icon: <Instagram />, name: 'Instagram' },
  { icon: <Facebook />, href:"https://ru-ru.facebook.com/digitalcityuz/" ,name: 'Facebook' },
];

export default function OpenIconSpeedDial() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [hidden, setHidden] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root + ' ' + styles.wrap}>
      <div class={styles.call_animation}>
        <SpeedDial0
          ariaLabel="SpeedDial openIcon example"
          className={classes.speedDial}
          hidden={hidden}
          icon={<CallIcon className={styles.trin_trin} />}
          onClose={handleClose}
          onOpen={handleOpen}
          open={open}
        >
          {actions.map((action) => (
            <a target="_blank" key={action.name} href={action.href} rel="noreferrer">
              <SpeedDialAction
                
                icon={action.icon}
                tooltipTitle={action.name}
                onClick={handleClose}
              />
            </a>

          ))}
        </SpeedDial0>
      </div>

    </div>
  );
}