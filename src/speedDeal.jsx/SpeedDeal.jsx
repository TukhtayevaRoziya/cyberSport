import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
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
  { icon: <Telegram />, href: "https://t.me/digitalcityuz", name: 'Telegram' },
  { icon: <YouTube />, href: "https://www.youtube.com/channel/UCDouP-Wfsl-ZMAiKIApIXWQ", name: 'YouTube' },
  { icon: <Instagram />, href: "https://www.instagram.com/digitalcityuz/", name: 'Instagram' },
  { icon: <Facebook />, href: "https://ru-ru.facebook.com/digitalcityuz/", name: 'Facebook' },
];

export default function OpenIconSpeedDial() {

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root + ' ' + styles.wrap}>
      <div className={styles.call_animation}>
        <SpeedDial
            ariaLabel="SpeedDial openIcon example"
            className={classes.speedDial}
            hidden={false}
            icon={<CallIcon className={styles.trin_trin}/>}
            onClose={handleClose}
            onOpen={handleOpen}
            open={open}
        >
          {actions.map((action) => (
              <SpeedDialAction
              key={action.name}
                icon={action.icon}
                tooltipTitle={action.name}
                onClick={handleClose}
                href={action.href}
              />
          ))}
        </SpeedDial>
      </div>

    </div>
  );
}