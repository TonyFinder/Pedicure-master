import React from 'react';
import YouTube, { YouTubeProps } from 'react-youtube';

export const YouTubeFrame = () => {
    const onPlayerReady: YouTubeProps['onReady'] = (event) => {
        event.target.pauseVideo();
    }

    const opts: YouTubeProps['opts'] = {
        height: '100%',
        width: '100%',
        playerVars: {
            autoplay: 0,
        },
    };

    return <YouTube videoId="ifGVhvkwb-c" style={{height: '390px', width: '640px'}} opts={opts} onReady={onPlayerReady} />;
}