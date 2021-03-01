import React from 'react'
import { useRouter } from '../../hooks/useRouter';
import { Button, createStyles, Grid, makeStyles, Theme } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';


const useStyles = makeStyles((theme:Theme) =>
    createStyles({
        
    })
)



const Navigation = () => {

    const classes = useStyles()

    const router = useRouter()
    const handleClick = () => {
        router.history.goBack()
    }
    
    return (
        <>
            {
                router.pathname === "/" ? null :
                (
                    <Grid container={true}>
                        <Grid item={true} container>
                            <Button 
                            color="secondary"
                            onClick={handleClick}>
                                <ArrowBackIcon fontSize="small"/>
                                Back
                            </Button>
                            <Button
                            disabled={true}
                            color="secondary">
                                {
                                    router.pathname.replace(/^[A-Za-z]+$/, '*')
                                }
                            </Button>
                        </Grid>
                    </Grid>
                )
            }
        </>
    )
}

export default Navigation
