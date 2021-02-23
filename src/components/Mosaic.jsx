import React, {Component} from "react";
import music from '../land.mp3'

import Sound from 'react-sound'


class Mosaic  extends Component{


        render() {
            return (
                <Sound
                    url={music}
                    volume={50}
                    playStatus={Sound.status.PLAYING}
                    playFromPosition={300 /* in milliseconds */}
                    // onLoading={this.handleSongLoading}
                    // onPlaying={this.handleSongPlaying}
                    // onFinishedPlaying={this.handleSongFinishedPlaying}
                />
            ); // Check props in next section
        }


}
export default Mosaic;
