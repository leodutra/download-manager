const { DownloadManager } = require('.')
// const { utils } = require('rapid-downloader')

const downloadManager = new DownloadManager({ showProgress: true })

let download = downloadManager.download(
    'http://speedtest.tokyo2.linode.com/100MB-tokyo2.bin',
    'test_temp_downloads/100MB-tokyo2.zip',
    { maxConnections: 8 }
)
download.on('error', e => {
    console.log('\nThis error should not occur.')
    console.error(e)
})
download.on('ready', () => {
    download.on('start', () => console.log('started'))
    download.on('stop', () => console.log('Download was stopped'))
    download.on('finishing', () => console.log('Finishing event should not be fired.'))
    download.on('end', () => console.log('End event should not be fired.'))
    setTimeout(() => downloadManager.stop(download), 2000)
})

download = downloadManager.download(
    'http://speedtest.tokyo2.linode.com/100MB-tokyo2.bin',
    'test_temp_downloads/100MB-tokyo2.zip',
    { maxConnections: 8 }
)
download.on('error', e => {
    console.log('\nThis error should not occur.')
    console.error(e)
})
download.on('ready', () => {
    download.on('start', () => console.log('started'))
    // download.on('progress', (progress) => {
    //     const speed = utils.dynamicSpeedUnitDisplay(progress.bytesPerSecond, 2)
    //     console.log(`${progress.completedPercent}% - ${speed}`)
    // })
    download.on('finishing', () => console.log('Download is finishing'))
    download.on('end', () => console.log('Download is done'))
    // download.start()
})