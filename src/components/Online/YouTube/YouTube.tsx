import React from 'react';
import YouTube, { YouTubeProps } from 'react-youtube';
import styles from './YouTube.module.scss'

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

    return <YouTube videoId="ifGVhvkwb-c" className={styles.mainBlock} opts={opts} onReady={onPlayerReady} />;
}