import ReactPlayer from 'react-player'

function VideoPlayer(props) {
    const { videoId } = props
    return (
        <ReactPlayer 
        url={'https://www.youtube.com/watch?v=' + videoId} 
        controls={true}  
        width={"100%"}
        height={"100%"}
        />
    );
}


export default VideoPlayer