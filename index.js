require('./settings')
const { default: makeWASocket, useMultiFileAuthState, DisconnectReason, fetchLatestBaileysVersion, generateForwardMessageContent, prepareWAMessageMedia, generateWAMessageFromContent, generateMessageID, downloadContentFromMessage, makeInMemoryStore, jidDecode, getAggregateVotesInPollMessage, proto } = require("@whiskeysockets/baileys")
const fs = require('fs')
const pino = require('pino')
const os = require('os')
const express = require('express');
const app = express();
const path = require('path')
const CFonts = require('cfonts')
const readline = require("readline");
const axios = require('axios')
const FileType = require('file-type')
const yargs = require('yargs/yargs')
const chalk = require('chalk')
const _ = require('lodash')
const { Boom } = require('@hapi/boom')
const PhoneNumber = require('awesome-phonenumber')
const usePairingCode = true
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./exif.js')
const { smsg, isUrl, generateMessageTag, getBuffer, getSizeMedia, fetchJson, sleep, await, } = require('./lib/myfunc')
const question = (text) => {
  const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
  });
  return new Promise((resolve) => {
rl.question(text, resolve)
  })
};

var low
try {
low = require('lowdb')
} catch (e) {
low = require('./lib/lowdb')}

const { Low, JSONFile } = low
const mongoDB = require('./lib/mongoDB')

const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })

global.opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())
global.db = new Low(
/https?:\/\//.test(opts['db'] || '') ?
new cloudDBAdapter(opts['db']) : /mongodb/.test(opts['db']) ?
new mongoDB(opts['db']) :
new JSONFile(`./src/database.json`)
)
global.DATABASE = global.db // Backwards Compatibility
global.loadDatabase = async function loadDatabase() {
if (global.db.READ) return new Promise((resolve) => setInterval(function () { (!global.db.READ ? (clearInterval(this), resolve(global.db.data == null ? global.loadDatabase() : global.db.data)) : null) }, 1 * 1000))
if (global.db.data !== null) return
global.db.READ = true
await global.db.read()
global.db.READ = false
global.db.data = {
users: {},
chats: {},
game: {},
database: {},
settings: {},
setting: {},
others: {},
sticker: {},
...(global.db.data || {})}
  global.db.chain = _.chain(global.db.data)}
loadDatabase()

//Bagian Theme
console.clear()
CFonts.say("akameMD", {
    colors: ["magenta"],
   font: 'tiny',
  align: 'left',
});
console.log(chalk.white.bold(`▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

${chalk.white.bold('𝙰𝙺𝙰𝙼𝙴')}

${chalk.magenta.bold ('𝙷𝙰𝙻𝙻𝙾 𝙿𝙴𝚁𝙺𝙴𝙽𝙰𝙻𝙺𝙰𝙽 𝙰𝙺𝚄 𝙰𝙺𝙰𝙼𝙴')}

${chalk.white.bold('© Bot Made By @DRAGs PEDIA')}

▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬`));
// End Theme

async function connectToWhatsApp() {
const { state, saveCreds } = await useMultiFileAuthState(global.sessionName)
const drags = makeWASocket({
logger: pino({ level: "silent" }),
printQRInTerminal: !usePairingCode,
auth: state,
browser: [ "Ubuntu", "Chrome", "20.0.04" ]
});

if(usePairingCode && !drags.authState.creds.registered) {
		const phoneNumber = await question('[AKAME] Masukan Nomor Mu Kak:\n');
		const code = await drags.requestPairingCode(phoneNumber.trim())
		console.log(`[AKAME] Pairing code: ${code}`)

	}
	
drags.ev.on('messages.upsert', async chatUpdate => {
try {
mek = chatUpdate.messages[0]
if (!mek.message) return
mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
if (mek.key && mek.key.remoteJid === 'status@broadcast') return
if (!drags.public && !mek.key.fromMe && chatUpdate.type === 'notify') return
if (mek.key.id.startsWith('BAE5') && mek.key.id.length === 16) return
m = smsg(drags, mek, store)
require("./akame.js")(drags, m, chatUpdate, store)
} catch (err) {
console.log(err)
}
})

drags.decodeJid = (jid) => {
if (!jid) return jid
if (/:\d+@/gi.test(jid)) {
let decode = jidDecode(jid) || {}
return decode.user && decode.server && decode.user + '@' + decode.server || jid
} else return jid
}

drags.sendText = (jid, text, quoted = '', options) => drags.sendMessage(jid, { text: text, ...options }, { quoted })

store.bind(drags.ev)

drags.serializeM = (m) => smsg(drags, m, store)
drags.ev.on("connection.update", async (update) => {
const { connection, lastDisconnect } = update;
if (connection === "close") {
  let reason = new Boom(lastDisconnect?.error)?.output.statusCode;
  if (reason === DisconnectReason.badSession) {
console.log(`Bad Session File, Please Delete Session and Scan Again`);
process.exit();
  } else if (reason === DisconnectReason.connectionClosed) {
console.log("Connection closed, reconnecting....");
connectToWhatsApp();
  } else if (reason === DisconnectReason.connectionLost) {
console.log("Connection Lost from Server, reconnecting...");
connectToWhatsApp();
  } else if (reason === DisconnectReason.connectionReplaced) {
console.log("Connection Replaced, Another New Session Opened, Please Restart Bot");
process.exit();
  } else if (reason === DisconnectReason.loggedOut) {
console.log(`Device Logged Out, Please Delete Folder Session and Scan Again.`);
process.exit();
  } else if (reason === DisconnectReason.restartRequired) {
console.log("Restart Required, Restarting...");
connectToWhatsApp();
  } else if (reason === DisconnectReason.timedOut) {
console.log("Connection TimedOut, Reconnecting...");
connectToWhatsApp();
  } else {
console.log(`Unknown DisconnectReason: ${reason}|${connection}`);
connectToWhatsApp();
  }
} else if (connection === "open") {
    console.log(chalk.magenta.bold(`[AKAME] Succes Connected To You Whatsapp`))
}
})

drags.ev.on('contacts.update', update => {
for (let contact of update) {
let id = drags.decodeJid(contact.id)
if (store && store.contacts) store.contacts[id] = { id, name: contact.notify }}})

drags.public = true

drags.ev.on('creds.update', saveCreds)
return drags
}

connectToWhatsApp()
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
