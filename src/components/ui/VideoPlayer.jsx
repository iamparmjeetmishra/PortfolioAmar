'use client'
import { MediaPlayer, MediaProvider } from '@vidstack/react';
import { defaultLayoutIcons, DefaultVideoLayout } from '@vidstack/react/player/layouts/default';

import '@vidstack/react/player/styles/default/theme.css';
import '@vidstack/react/player/styles/default/layouts/video.css';

export default function VideoPlayer({ytSrc, thumb, title}) {

  return (
    <>
      <MediaPlayer playsinline muted autoplay controlsDelay={false} title={title} src={ytSrc} >
        <MediaProvider />
        <DefaultVideoLayout thumbnails={thumb} icons={defaultLayoutIcons} />
      </MediaPlayer>
    </>
  )
}