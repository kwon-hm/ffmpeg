const ffmpeg = require('ffmpeg')
const fs = require('fs')

const video = async () => {
    try {
        const process = new ffmpeg(`D:\\ojt\\ffmpeg\\node-server\\KakaoTalk_Audio_20230216_2201_54_438.m4a`);
        const video = await process
        if(!video) console.log('Error: ' + err);
        // Video metadata
        console.log(video.metadata);
        // FFmpeg configuration
        console.log(video.info_configuration);

        const file_info = fs.statSync(`D:\\ojt\\ffmpeg\\node-server\\KakaoTalk_Audio_20230216_2201_54_438.m4a`)
        console.log()
    } catch (e) {
        console.log(e.code);
        console.log(e.msg);
    }
}

video()