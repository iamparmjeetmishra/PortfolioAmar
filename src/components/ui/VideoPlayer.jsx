'use client'
import { MediaPlayer, MediaProvider } from '@vidstack/react';
import { defaultLayoutIcons, DefaultVideoLayout } from '@vidstack/react/player/layouts/default';


import { Poster } from '@vidstack/react';
import '@vidstack/react/player/styles/default/theme.css';
import '@vidstack/react/player/styles/default/layouts/video.css';

export default function VideoPlayer({ ytSrc, thumb, title, loop, autoplay }) {

  return (
    <>
      <MediaPlayer playsinline muted autoplay={autoplay} loop={loop} controlsDelay={false} title={title} src={ytSrc}  >
        <MediaProvider>
          <Poster
            className="vds-poster"
            src={thumb}
            alt={title}
          />
        </MediaProvider>
        <DefaultVideoLayout icons={defaultLayoutIcons} />
      </MediaPlayer>
    </>
  )
}