import React from 'react'
import { AppBar, ThemeProvider } from '@material-ui/core'
import { Toolbar } from '@material-ui/core'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import { Avatar } from '@material-ui/core'
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import HomeIcon from '@material-ui/icons/Home';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import useFetch from '../../useFetch'
import { useHistory } from 'react-router'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'
import { blue } from '@material-ui/core/colors'
import { Button, Modal } from '@material-ui/core'
import Card from '../Main/CardList/Card'
import RefreshIcon from '@material-ui/icons/Refresh';
import Random from '../Random/Random'
import CancelIcon from '@material-ui/icons/Cancel';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 ;
  const left = 50 ;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

    const useStyles = makeStyles((theme) => {
        return {
       toolbar: theme.mixins.toolbar,
       logo: {
            flexGrow: 1,
       },
       avatar: {
            marginLeft: theme.spacing(2)
       },
       title: {
            flexGrow: 1,
            alignSelf: 'flex-end',
            display: 'flex'
        },
        active: {
            backgroundColor: blue[700],
            
        },
        button: {
            marginRight: 80
        },
        popupIcons: {
            display: 'flex',
            justifyContent: 'space-between'
        },
        paper: {
            position: 'absolute',
            width: 400,
            backgroundColor: theme.palette.background.paper,
            border: '2px solid #000',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
        },
        refresh: {
            cursor: 'pointer'
        }
        
}
    })

const TheMenu = () => {
    const classes = useStyles({})
    const history = useHistory()
    const location = useLocation()
    const [idRandom, setIdRandom] =useState(Math.round(Math.random() * 25))

    // modal
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
    setOpen(true);
    
  };
//   let idRandom = Math.round(Math.random() * 25);
console.log(Math.round(Math.random() * 25));

  const handleClose = () => {
    setOpen(false);
  };
    const body = (
    <div style={modalStyle} className={classes.paper}>
        <div className={classes.popupIcons}>
        <RefreshIcon onClick={() =>{setIdRandom(Math.round(Math.random() * 25))}} className={classes.refresh}  />
        <CancelIcon className={classes.refresh} onClick={() => {setOpen(false)}} />
        </div>
        
        <Random idRandom={idRandom} />
    </div>
  );


    const menu = [
        {
            text: 'Home',
            icon: <HomeIcon color='secondary'/>,
            path: '/'
        },
        {
            text: 'Your Favorites',
            icon: <FavoriteBorderIcon color='secondary'/>,
            path: '/favs'
        },
    ]

    return (
        <div>
            
            <div>
                <AppBar className={classes.root}>
                    <Toolbar >
                        <Typography className={classes.logo}>
                            DUI Brewers
                        </Typography>

                        <Button type="button" onClick={handleOpen} className={classes.button} color="secondary">Random Beer</Button>
                        {/* pop up modal */}
                            {/* <button type="button" onClick={handleOpen}>
                                Open Modal
                            </button> */}
                            <Modal
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="simple-modal-title"
                                aria-describedby="simple-modal-description"
                            >
                                {body}
                            </Modal>

                        <List className={classes.title}  variant="h5" noWrap>
                        {menu.map(menu => (
                            <ListItem 
                            button 
                            key={menu.text}
                            onClick={() => {history.push(menu.path)}}
                            className={location.pathname == menu.path ? classes.active: null}
                            >
                                <ListItemIcon>{menu.icon}</ListItemIcon>
                                <ListItemText primary={menu.text} />
                            </ListItem>
                        ))}
                        
                    </List>

                        <Typography>
                            User
                        </Typography>
                        <Avatar className={classes.avatar}/>
                    </Toolbar>
                </AppBar>
                <div className={classes.toolbar}></div>
                <div className={classes.toolbar}></div>
            </div>
        </div>
    )
}

export default TheMenu
