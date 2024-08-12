const ffmpeg = require('fluent-ffmpeg')

const targetMP4File = 'D:\\ojt\\ffmpeg\\node-server\\KakaoTalk_Audio_20230216_2201_54_438.m4a'  //영상 파일
const to_img_file = './img/.jpg'

ffmpeg.ffprobe(targetMP4File, function(err, metadata) {
    if(err) console.log('Error: ' + err);
    console.dir(metadata);
});