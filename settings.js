const fs = require('fs')
const chalk = require('chalk')
// Sosial Media 
global.gr = 'https://www.drags.io' // gausah di ubah :v
global.wagc = "https://whatsapp.com/" // yg ini silahkan ubah
global.ig = 'https://www.instagram/drags_pedia' // ubah aja
global.email = 'drags@gmail.com' //serah
global.region = 'indonesia' // serah
global.ownername = 'DRAGs PEDIA' //ubah jadi nama mu, note tanda ' gausah di hapus!
global.owner = ['6285888739162'] // ubah aja pake nomor lu
global.wanumber = ['6285888739162'] // ketika ketik .owner
global.botname = 'AKAME - MD' //ubah jadi nama bot mu, note tanda ' gausah di hapus!
global.larangannya = 'Rules'
global.textsc = '' // tambahin

//openai//
global.keyopenai = '' // 2 apikey free

//====================[ BY DRAGs ]=============================//

global.packname = 'DRAGs PACKAGE' 
global.author = 'A K A M E - MD' 
global.prefa = ['!','.',',','🐤','🗿']
global.sessionName = 'Session'
global.sp = '⭔' 
global.wlcm = []
global.wlcmm = []
global.anticall = false // true 

global.limitawal = {
    premium: "Infinity",
    free: 10
}
// GLOBAL MESS //
global.mess = {
    success: 'success',
    admin: 'fitur Khusus Admin Group!',
    botAdmin: 'bot bukan admin kak',
    owner: 'khusus owner kak',
    group: 'harus di dalam grub kak',
    private: 'fitur Khusus Private Chat!',
    bot: 'fitur Khusus bot',
    wait: 'tunggu',
    premium: 'khusus premium kak',
}

//Read Thumbnail 
global.thum = fs.readFileSync("./akameBase/media/akame.jpg") 
global.dira = fs.readFileSync('./akameBase/media/menu.mp4')


const options = {
    database: 'mongo',
    // Tambahan opsi lainnya
};

module.exports = { options };

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})