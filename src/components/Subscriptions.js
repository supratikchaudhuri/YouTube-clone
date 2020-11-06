import React from 'react'
import "../styles/Subscriptions.css"
import Subscribed from "./Subscribed"
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

function Subscriptions() {
    return (
        <div className="subscriptions">
            <h5>SUBSCRIPTIONS</h5>
            <Subscribed text={"Logan Paul"}
            avatar={"https://yt3.ggpht.com/a/AATXAJxQI31czfaPC9p4wjmtIFt5fA-ateB0RQW57l56=s900-c-k-c0xffffffff-no-rj-mo"} />

            <Subscribed text={"JJ Olatunji"}
            avatar={"https://i.redd.it/fx6cmgliofy41.png"} />

            <Subscribed text={"Marques Brownlee"}
            avatar={"https://vignette.wikia.nocookie.net/youtube/images/7/72/MKBHD.jpg/revision/latest?cb=20200402003714"} />

            <Subscribed text={"Marshmellow"}
            avatar={"https://yt3.ggpht.com/a/AATXAJyYwdrvyu-OxhtiG3Ju3Wocuy07xT64dW22NGTH4Q=s900-c-k-c0xffffffff-no-rj-mo"} />

            <Subscribed text={"FreeCodeCamp.org"}
            avatar={"https://pbs.twimg.com/profile_images/1276770212927410176/qTgTIejk_400x400.jpg"} />

            <Subscribed text={"Russell Peters"}
            avatar={"https://in.bmscdn.com/iedb/artist/images/website/poster/large/russell-peters-21951-22-06-2017-11-16-49.jpg"} />

            <Subscribed text={"PowerFull JRE"}
            avatar={"https://yt3.ggpht.com/a/AATXAJwVJeeimAaxFQxL7vMQWzc7_ElVpT_Vhjnxwi9X=s900-c-k-c0xffffffff-no-rj-mo"} />


        </div>

        
        
        
    )
}

export default Subscriptions
