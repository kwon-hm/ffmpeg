const ffmpeg = require('fluent-ffmpeg')
const path = require('path')

// const targetMP4File = 'D:\\git\\Project\\DigitalArchive\\be\\upload_folder\\0_20230222113525.webm'  //영상 파일  250초 10개 1920x1080, 103초 10개 210x120
const targetMP4File = 'D:\\git\\Project\\DigitalArchive\\transcoder\\proxy_upload\\2023\\2\\27\\80-VIDEO-93-20230225-133557251\\VIDEO-93-20230227111221.mp4'  //영상 파일  22초 10개 1920x1080
const to_img_file = 'D:\\ojt\\ffmpeg\\node-server\\png\\thumbnail-img%03d-seconds.png'

const cmd = `select=gt(scene,${0.04})`

const start = new Date()
ffmpeg(path.normalize(targetMP4File))
/**
 * count?: number | undefined;
 * folder?: string | undefined;
 * filename?: string | undefined;
 * timemarks?: number[] | string[] | undefined;
 * timestamps?: number[] | string[] | undefined;
 * fastSeek?: boolean | undefined;
 * size?: string | undefined;
 */
// .screenshot({
//     // Count 4 will take screens at 20%, 40%, 60% and 80% of the video
//     count: 10,
//     // timestamps: [30.5, '50%', '01:10.123'],
//     folder: to_img_file,
//     // fastSeek
//     filename: "thumbnail-%s-seconds.png",
//     size: "1920x1080" // 210x120 1920x1080
    // timemarks


    // const cmd1 = 'ffmpeg -i ' + targetMP4File + '  -filter:v "select=\'gt(scene,' + 0.04 + ')\',showinfo"  -f null  - 2> data.txt';
.addOptions([
    // "-vf `select=gt(scene\,0.04), metadata=print:file=time.txt`",
    // "-filter_complex 'select=gt(scene\\,0.04), metadata=print:file=png/time.txt'",
    '-filter_complex',
    'select=\'gt(scene\,0.04)\'',
    '-vsync',
    'vfr',
    // "- 2>",
    // "-vsync vfr",
    // "-s 210x120",
])
// .complexFilter(
//     "'select=gt(scene\\,0.03)'"
// )
// .output('png/thumbnail-%s-seconds.png', {end: true})
.output(to_img_file)
.on("end", () => {
    const end = new Date()
    console.log((end - start) / 1000)
})
.on('start', function (commandLine) {
    console.log('Spawned Ffmpeg with command: ' + commandLine);
})
.on('error', function (err, stdout, stderr) {
    console.log('An error occurred: ' + err.message, err, stderr);
})
.on('progress', function (progress) {
    console.log('Processing: ' + progress.percent + '% done')
})
// .on('end', function (err, stdout, stderr) {
//     console.log('Finished processing!' /*, err, stdout, stderr*/)
// })
// .save('./png/thumbnail-%s-seconds.png')
.run()