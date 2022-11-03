import { Box, IconButton } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Close } from '@material-ui/icons';
import CodeIcon from '@material-ui/icons/Code';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Login from '../../features/Auth/components/Login';
import Register from '../../features/Auth/components/Register';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  Link: {
    color: '#fff',
    textDecoration: 'none',
  },
  closeButton: {
    position: 'absolute',
    top: theme.spacing(1),
    right: theme.spacing(1),
    color: theme.palette.grey[500],
    zIndex: 1,
  },
}));

const MODE = {
  LOGIN: 'login',
  REGISTER: 'register',
};

export default function Header() {
    const loggedInUser = useSelector(state => state.user.current);
    const isLoggedIn = !! loggedInUser.id;
    const [open, setOpen] = useState(false);
    const [mode, setMode] = useState(MODE.LOGIN);

    const handleClickOpen = () => {
        setOpen(true);
    };
 
    const handleClose = () => {
        setOpen(false);
    };
    const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <CodeIcon className={classes.menuButton} />
          <Typography variant="h6" className={classes.title}>
            <Link className={classes.Link} to="/">Full Text Search engine</Link>
          </Typography>
          {isLoggedIn && (
            <Button color="inherit" onClick={handleClickOpen}>Login</Button>
          )}
        </Toolbar>
      </AppBar>

      <Dialog disableEscapeKeyDown open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <IconButton className={classes.closeButton} onClick={handleClose}>
          <Close></Close>
        </IconButton>
        <DialogContent>
          {mode === MODE.REGISTER && (
            <>
            <Register closeDialog={handleClose}/>
            <Box textAlign="center">
              <Button color="primary" onClick={() => setMode(MODE.LOGIN)}>
                Already have an account. Login here 
              </Button>
            </Box>  
            </>
          )}

          {mode === MODE.LOGIN && (
            <>
            <Login closeDialog={handleClose}/>
            <Box textAlign="center">
              <Button color="primary" onClick={() => setMode(MODE.REGISTER)}>
                Dont have an account. Register here
              </Button>
            </Box>  
            </>
          )}
          
       
        </DialogContent>
      </Dialog>
    </div>
  );
}
