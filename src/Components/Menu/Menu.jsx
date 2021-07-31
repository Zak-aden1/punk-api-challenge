import React from 'react'
import { AppBar, ThemeProvider } from '@material-ui/core'
import { Toolbar } from '@material-ui/core'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import { Avatar } from '@material-ui/core'
import useFetch from '../../useFetch'

    const useStyles = makeStyles((theme) => {
        return {
       toolbar: theme.mixins.toolbar,
       logo: {
           flexGrow: 1,
       },
       avatar: {
           marginLeft: theme.spacing(2)
       }
}
    })

const TheMenu = () => {
    const classes = useStyles({})
    

    return (
        <div>
            
            <div>
                <AppBar className={classes.root}>
                    <Toolbar >
                        <Typography className={classes.logo}>
                            DUI Brewers
                        </Typography>
                        <Typography>
                            User
                        </Typography>
                        <Avatar className={classes.avatar}/>
                    </Toolbar>
                </AppBar>
                <div className={classes.toolbar}></div>
            </div>
        </div>
    )
}

export default TheMenu
