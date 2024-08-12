const ffmpeg = require('fluent-ffmpeg')

const targetMP4File = 'D:\\ojt\\ffmpeg\\node-server\\KakaoTalk_Audio_20230216_2201_54_438.m4a'  //영상 파일

ffmpeg(targetMP4File)
.videoCodec('libx264')
.on('error', (err) => {
    console.log(err)
})
.on('end', (data)=>{
    console.log(data)
    console.log("end")

})
.save(`sample2.avi`)