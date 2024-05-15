require('./settings')
const { WA_DEFAULT_EPHEMERAL, getAggregateVotesInPollMessage, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, downloadContentFromMessage, areJidsSameUser, getContentType } = require("@whiskeysockets/baileys")
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const os = require('os')
const axios = require('axios')
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./exif.js')
const fsx = require('fs-extra')
const crypto = require('crypto')
const ffmpeg = require('fluent-ffmpeg')
const anon = require('./lib/menfess')
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const { apikey } = require('./apikey.json')
const { color, bgcolor } = require('./lib/color')
const { premium } = require('./lib/premium')
const { uptotelegra } = require('./lib/upload')
const { generateProfilePicture } = require('./lib/myfunc')
const { mediafireDl } = require('./lib/mediafire.js')
const { Primbon } = require('scrape-primbon')
const { Client } = require('whatsapp-web.js');
const db_user = JSON.parse(fs.readFileSync('./database/user.json'))
const primbon = new Primbon()
const hxz = require('hxz-api')
const tanggal = moment.tz('Asia/Jakarta').format('DD/MM/YY')
const ytdl = require("ytdl-core")
const { getPrayerTimes } = require('./lib/times.js')
const absenData = {};
const { Configuration, OpenAIApi } = require('openai')
const { sfileSearch } = require('./lib/sfileS')
const { exec, spawn, execSync } = require("child_process")
const speed = require('performance-now')
const { smsg, getTime, isUrl, sleep, clockString, runtime, formatp, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, getGroupAdmins } = require('./lib/myfunc')
const { FajarNews, BBCNews, metroNews, CNNNews, iNews, KumparanNews, TribunNews, DailyNews, DetikNews, OkezoneNews, CNBCNews, KompasNews, SindoNews, TempoNews, IndozoneNews, AntaraNews, RepublikaNews, VivaNews, KontanNews, MerdekaNews, KomikuSearch, AniPlanetSearch, KomikFoxSearch, KomikStationSearch, MangakuSearch, KiryuuSearch, KissMangaSearch, KlikMangaSearch, PalingMurah, LayarKaca21, AminoApps, Mangatoon, WAModsSearch, Emojis, CoronaInfo, JalanTikusMeme,Cerpen, Quotes, Couples, Darkjokes } = require("dhn-api");
//Read Database ##

const more = String.fromCharCode(8206)
const thumb = fs.readFileSync ('akameBase/media/akame.jpg')
const dira = fs.readFileSync ('./akameBase/media/menu.mp4')
const owner = JSON.parse(fs.readFileSync('./owner.json'))
const antilink = JSON.parse(fs.readFileSync('./database/antilink.json'));
const antidel = JSON.parse(fs.readFileSync("./lib/antidel.json"))
const banned = JSON.parse(fs.readFileSync('./akameBase/db/banned.json'))
const pengguna = JSON.parse(fs.readFileSync('./database/user.json'))

module.exports = drags = async (drags, m, chatUpdate, store) => {
 try {
var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype === 'messageContextInfo') ? (m.text) : ''
const budy = (typeof m.text == 'string' ? m.text : '')
const prefix = /^[°zZ#$@+,.?=''():√%!¢£¥€π¤ΠΦ&><`™©®Δ^βα¦|/\\©^]/.test(body) ? body.match(/^[°zZ#$@+,.?=''():√%¢£¥€π¤ΠΦ&><!`™©®Δ^βα¦|/\\©^]/gi) : ''
const isCmd = body.startsWith(prefix)
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : ''
const args = body.trim().split(/ +/).slice(1)
const pushname = m.pushName || "No Name"
const text = q = args.join(" ")
const readmore = more.repeat(4001) 
const { addSaldo, minSaldo, cekSaldo } = require("./database/deposit");
let db_saldo = JSON.parse(fs.readFileSync("./database/saldo.json"));
const pler = JSON.parse(fs.readFileSync('./database/idgrup.json').toString())
const jangan = m.isGroup ? pler.includes(m.chat) : false
const { type, quotedMsg, mentioned, now, fromMe } = m
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const isMedia = /image|video|sticker|audio/.test(mime)
const from = mek.key.remoteJid
const botNumber = await drags.decodeJid(drags.user.id)
const isGroup = from.endsWith('@g.us')
const isCreator = [botNumber, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
const groupMetadata = m.isGroup ? await drags.groupMetadata(from).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const welcm = m.isGroup ? wlcm.includes(from) : false
const welcmm = m.isGroup ? wlcmm.includes(from) : false
const Antilink = m.isGroup ? antilink.includes(from) : false 
const autodelete = from && isCmd ? antidel.includes(from) : false 
const isBan = banned.includes(m.sender)
const isUser = pengguna.includes(m.sender)
const content = JSON.stringify(m.message)
const numberQuery = text.replace(new RegExp("[()+-/ +/]", "gi"), "") + "@s.whatsapp.net"
const mentionByTag = m.mtype == "extendedTextMessage" && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.mentionedJid : []
const Input = mentionByTag[0] ? mentionByTag[0] : q ? numberQuery : false
const time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
const salam = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const qtod = m.quoted? "true":"false"
const isForadmin = isGroup ? m.isAdmin : false
// cek database *2
const prem = JSON.parse(fs.readFileSync("./database/premium.json"))
const premm = JSON.parse(fs.readFileSync("./database/premiumm.json"))
const isPremium = prem.includes(sender)
const isPremiumm = premm.includes(sender)
const senderNumber = sender.split('@')[0]
const isBot = botNumber.includes(senderNumber)
const isOwner = owner.includes(senderNumber) || isBot
const qmsg = (quoted.msg || quoted)

if (autodelete) {
drags.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: true,
id: mek.key.id,
participant: mek.key.participant
}
})
}

if (m.message) {
console.log(chalk.black(chalk.bgWhite('[ MESSAGE ]')), chalk.white(chalk.bgHex('#800080').white(new Date)), chalk.black(chalk.bgWhite(budy || m.mtype)) + '\n' + chalk.white('→ Dari'), chalk.green(pushname), chalk.green(m.sender) + '\n' + chalk.white('→ Di'), chalk.green(m.isGroup ? pushname : 'Private Chat', from))
}
if (isCmd && !isUser) {
pengguna.push(sender)
fs.writeFileSync('./database/user.json', JSON.stringify(pengguna, null, 2))
}
        
// Respon Cmd with media
if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
let { text, mentionedJid } = hash
let messages = await generateWAMessage(from, { text: text, mentions: mentionedJid }, {
userJid: drags.user.id,
quoted : m.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, drags.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
...chatUpdate,
messages: [proto.WebMessageInfo.fromObject(messages)],
type: 'append'
}
drags.ev.emit('messages.upsert', msg)
}

// Public & Self
if (!drags.public) {
if (!m.key.fromMe && !isPremium && !isCreator) return
}
if (m.message) {
drags.readMessages([m.key])
}

const scp1 = require('./lib/scriper')
const scp2 = require('./lib/scraper')
//////Lib2
const { 
addResponList, 
delResponList, 
isAlreadyResponList, 
isAlreadyResponListGroup, 
sendResponList, 
updateResponList, 
getDataResponList 
} = require('./lib/list')
///

//setuser
let setUser = (satu, dua, tiga) => { 
Object.keys(db_user).forEach((i) => {
if (db_user[i].id == dua){
if (satu == "±id"){ db_user[i].id = tiga
fs.writeFileSync('./database/user.json', JSON.stringify(db_user))} 
if (satu == "±name"){ db_user[i].name = tiga 
fs.writeFileSync('./database/user.json', JSON.stringify(db_user))} 
if (satu == "±seri"){ db_user[i].seri = tiga 
fs.writeFileSync('./database/user.json', JSON.stringify(db_user))} 
if (satu == "±premium"){ db_user[i].premium = tiga 
fs.writeFileSync('./database/user.json', JSON.stringify(db_user))}
}})
}

switch(command) { 

case 'menu': {
let menu = `> *𝙷𝙰𝙻𝙻𝙾 𝙿𝙴𝚁𝙺𝙴𝙽𝙰𝙻𝙺𝙰𝙽 𝙰𝙺𝚄 𝙰𝙺𝙰𝙼𝙴*

*乂  I N F O - B O T*
> _*ɴᴀᴍᴇ ʙᴏᴛ*_ : ${global.botname}
> _*ᴍᴏᴅᴇ*_ : ${drags.public ? 'Public Usage' : 'Only Owner'},
> _*ᴘʀᴇꜰɪx*_ :
> _*ᴛᴏᴛᴀʟ ꜰɪᴛᴜʀᴇ*_ : Cek jelah sendiri
> _*ᴠᴇʀꜱɪᴏɴ*_ : 1.0

_Below are all the *menu/features* in Akame Bot, Please *dont spam* the bot_

*乂  L I S T M E N U*
*𝗢𝗪𝗡𝗘𝗥 𝗠𝗘𝗡𝗨*
> 々 ${prefix}self
> 々 ${prefix}public
> 々 ${prefix}ssweb
> 々 ${prefix}ddos

*𝗔𝗗𝗩𝗔𝗡𝗖𝗘*
> 々 =>
> 々 >
> 々 $

_This bot is still under development. If there are bugs, please report them to the owner. The way to report is type *.owner* and write a description_
`
drags.sendMessage(from, { video: dira, gifPlayback: true, caption: menu, contextInfo:{ externalAdReply: {
         title: 'A K A M E',
body: `© 𝙳𝚁𝙰𝙶𝚜 𝙿𝙴𝙳𝙸𝙰`,
thumbnail: thumb,
thumbnailUrl: "",
sourceUrl: `https://www.instagram.com/drags_pedia`,
mediaType: 1,
renderLargerThumbnail: true 
}}}, { quoted: m })
}
break
case "public": {
if (!isCreator) return
drags.public = false
m.reply(`*Change to Public Usage Mode*`)
}
break
case "self": {
if (!isCreator) return
drags.public = true
m.reply(`*Change to Only Owner Mode*`)
}
break
case 'payment': case 'nope': {
 drags.sendMessage(m.chat, { image: { url: `https://telegra.ph/file/2f4a2ee74dd89f1c480b5.jpg`}, caption:
`Ｂｅｒｉｋｕｔ Ｌｉｓｔ Ｐａｙｍｅｎｔ

❖ ᴅᴀɴᴀ : 083897814213
❖ ɢᴏᴘᴀʏ : 083897814213 ʙᴇʟᴜᴍ ᴘʀᴇᴍ
❖ ᴏᴠᴏ : 083897814213 ʙᴇʟᴜᴍ ᴘʀᴇᴍ

ᴊᴀɴɢᴀɴ ʟᴜᴘᴀ ss ʙᴜᴋᴛɪ ᴛғ ʏᴀ`}, {quoted: m})
}
break
case 'ssweb': case 'ss': {
if (!text) return m.reply(`Example ${prefix+command} link`)
m.reply('tunggu yaa')
let krt = await scp1.ssweb(q)
drags.sendMessage(from,{image:krt.result,caption:'success'}, {quoted: m})
}
break
case 'ddos': case 'mix': {
if (!isCreator) return
if (!q.includes(' ')) return m.reply(`Use Methode: ${command} <target> <time>\nExaple: ${command} example.my.id 60`)
const targetweb = q.substring(0, q.indexOf(' ') - 0)
const timeweb = q.substring(q.lastIndexOf(' ') + 1) 
m.reply(`*Sabar Ya Kak*
• *Target* -> [ ${targetweb} ]
• *Time Attack* -> [ ${timeweb} ]`)
exec(`node ddos.js ${targetweb} ${timeweb}`, { maxBuffer: 1024 * 1024 }, (error, stdout, stderr) => {
if (error) {
m.reply(`Error: ${error.message}`);
return;
}
if (stderr) {
m.reply(`Error: ${stderr}`);
return;
}
m.reply(`Success\n\n• Target: ${targetweb},\n• Time: ${timeweb}`);
});  
}
break

default:
function saveCharacters() {
fs.writeFileSync(SAVE_FILE_PATH, JSON.stringify(characters, null, 2));
}      
if (budy.startsWith('=>')) {
if (!isCreator) return
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)}
return m.reply(bang)}
try {
m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
 m.reply(String(e))}}
if (budy.startsWith('>')) {
if (!isCreator) return
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await m.reply(evaled)
} catch (err) {
await m.reply(String(err))}}
if (budy.startsWith('$')) {
if (!isCreator) return
exec(budy.slice(2), (err, stdout) => {
if(err) return m.reply(err)
if (stdout) return m.reply(stdout)})}

if (isCmd && budy.toLowerCase() != undefined) {
if (m.isBaileys) return
if (from.endsWith('broadcast')) return
let msgs = global.db.data.database
if (!(budy.toLowerCase() in msgs)) return
FalX.copyNForward(from, msgs[budy.toLowerCase()], true)}}
} catch (err) {
m.reply(util.format(err))}}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
