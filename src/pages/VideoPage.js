import React from "react";
import {Grid} from "@material-ui/core";
import youtube from "../api/youtube";

function VideoPage() {
    return (
        <Grid justify="center" container spacing={16}>
        <h1>hello</h1>
            <Grid item xs={12}>
                <Grid container spacing={16}>
                    <Grid item xs={12}>
                        {/* search bar */}
                    </Grid>
                    <Grid item xs={8}>
                        {/* vid details */}
                    </Grid>
                    <Grid item xs={4}>
                        {/* vid list */}
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default VideoPage
