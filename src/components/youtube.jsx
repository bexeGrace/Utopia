import React from 'react';
import YouTube from 'react-youtube';

function YoutubeVideo() {
  const videoId = 'vEd-LqBCONg';

  return (
    <div className="w-full xl:w-1/2 mt-8 xl:mt-0">
      <YouTube videoId={videoId} className="w-full rounded-lg" />
    </div>
  );
}

export default YoutubeVideo;
