import React from 'react'
import "../styles/VideoItem.css"

function VideoItem({video}) {
  if(!video){
    return <div>Loading...</div>
  }
  else{
    return (
      <div className="video-item">
        <div className="thumbnail">
          <img src={video.snippet.thumbnails.medium.url} alt="thumbnail"/>
        </div>
        <div className="details">
            <h4>{video.snippet.title.substring(0, 50)}</h4>
            <p>{video.snippet.channelTitle}</p>        
            <p>views  •  {video.snippet.publishedAt.substring(0, 10)}</p>        
        </div>
      </div>
    )
  }
}
  

export default VideoItem




// import React from "react";
// import { Grid, Paper, Typography } from "@material-ui/core";

// export default ({ video, onVideoSelect }) => {
//   return (
//     <Grid item xs={12}>
//       <Paper style={{ display: "flex", alignItems: "center", cursor: "pointer" }} onClick={() => onVideoSelect(video)} >
//         <img style={{ marginRight: "20px" }} alt="thumbnail" src={video.snippet.thumbnails.medium.url} />
//         <Typography variant="subtitle1">
//           <b>{video.snippet.title}</b>
//         </Typography>
//       </Paper>
//     </Grid>
//   );
// } 