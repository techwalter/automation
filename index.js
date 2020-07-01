const chokidar = require('chokidar');
const DownloadDir = `${process.env.HOME}/Downloads`;
const Software = `${process.env.HOME}/Software/`;
const Videos = `${process.env.HOME}/Videos/`;
const Images = `${process.env.HOME}/Images/`;
const Html = `${process.env.HOME}/Html/`;
const Songs = `${process.env.HOME}/Songs/`;
const moveFile = require('move-file');
const basename = require('path').basename;
const extname = require('path').extname;

const watcher = chokidar.watch(DownloadDir, { ignored: /^\./, persistent: true });

watcher
    .on('add', async function (path) {
        const fileExtension = extname(path);
        const fileName = basename(path, fileExtension);
        switch (fileExtension) {
            case '.mp4':
                await moveFile(path, Videos + fileName + '_' + getFormattedTime() + fileExtension);
                break;
            case '.mp3':
                await moveFile(path, Songs + fileName + '_' + getFormattedTime() + fileExtension);
                break;
            case '.deb':
                await moveFile(path, Software + fileName + '_' + getFormattedTime() + fileExtension);
                break;
            case '.html':
                await moveFile(path, Html + fileName + '_' + getFormattedTime() + fileExtension);
                break;
            case '.jpeg':
            case '.png':
            case '.jpg':
            case '.JPG':
                await moveFile(path, Images + fileName + '_' + getFormattedTime() + fileExtension);
                break;
        }
    })
    .on('error', function (error) { console.error('Error happened', error); })

function getFormattedTime() {
    var today = new Date();
    var y = today.getFullYear();
    // JavaScript months are 0-based.
    var m = today.getMonth() + 1;
    var d = today.getDate();
    var h = today.getHours();
    var mi = today.getMinutes();
    var s = today.getSeconds();
    return y + "-" + m + "-" + d + "-" + h + "-" + mi + "-" + s;
}