const {execSync} = require('child_process');
const fs = require('fs')

// const targetMP4File = 'D:\\git\\Project\\DigitalArchive\\transcoder\\proxy_upload\\video\\122-VIDEO-141-20230310184556.mp4'  //영상 파일  22초 10개 1920x1080
const targetMP4File = 'D:\\ojt\\ffmpeg\\node-server\\1__20230213143113.webm'  //영상 파일  22초 10개 1920x1080
const to_img_file = 'D:\\ojt\\ffmpeg\\data.txt'

const cmd1 = 'ffmpeg -i ' + targetMP4File + '  -filter:v "select=\'gt(scene,' + 0.01 + ')\',showinfo"  -f null  - 2> ' + to_img_file;
// const cmd2 = `grep showinfo 'png/data.txt' | grep pts_time:[0-9.]* -o | grep [0-9.]* -o > timestamps.txt`
const cmd2 = `type data.txt | findstr /r "pts_time" >> a.txt`
const cmd3 = `for /f "tokens=4 delims=:" %a in ('type data.txt ^| findstr /r "pts_time"') do @echo %a >> b.txt`

function start(){
    const data1 = execSync(cmd1)
    const data2 = execSync(cmd2).toString()
    
    const a_txt = fs.readFileSync("a.txt").toString()
    const data3 = execSync(cmd3).toString()
    const b_txt = fs.readFileSync("b.txt").toString().split("\r\n")

    console.log(data)
    console.log(data.split("D:\\ojt\\ffmpeg\\data.txt:"))
    console.log(data.toString())

}

start()