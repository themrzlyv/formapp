import { Grid } from '@material-ui/core'
import React from 'react'
import Main from '../../components/Main/Main'
import SideBar from '../../components/SideBar/SideBar'

const Home = () => {
    return (
        <Grid container wrap="wrap" >
            <Grid item={true} lg={3} md={2} sm={12} xs={12}>
                <SideBar />
            </Grid>
            <Grid item={true} lg={9} md={10} sm={12} xs={12}>
                <Main />
            </Grid>
        </Grid>
    )
}

export default Home


