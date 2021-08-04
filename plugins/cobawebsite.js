let moment = require('moment-timezone')
let handler = async (m, { conn, text }) => {
let ava = './src/web.jpg'
let fs = require ('fs')
m.reply()
    
await  conn.sendFile(m.chat, ava, 'ava.jpg', `Hi _${conn.getName(m.sender)}_ ! ${ucapan()}\nPlease visit my website yaa (•◡•)\n\n» https://orangsultan.com\n» https://pixlid.com`, { key: { remoteJid: 'status@broadcast', participant: '0@s.whatsapp.net', fromMe: false }, message: { "imageMessage": { "mimetype": "image/jpeg", "caption": 'WhatsApp Verified Account', "jpegThumbnail": fs.readFileSync('./src/arh.jpg')} } }, m)
} 

handler.customPrefix = /^(.website)$/i
handler.command = new RegExp
module.exports = handler

function ucapan() {
    const time = moment.tz('Asia/Jakarta').format('HH')
    res = "Good Night 🌙"
    if (time >= 4) {
        res = "Good Night 🌙"
    }
    if (time > 10) {
        res = "Good Morning ⛅"
    }
    if (time >= 13) {
        res = "Good Afternoon ☀️"
    }
    if (time >= 17) {
        res = "Good Evening 🌇"
    }
    return res
}