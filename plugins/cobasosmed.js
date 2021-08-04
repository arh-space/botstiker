const { MessageType, WAMessageProto } = require('@adiwajshing/baileys')
let moment = require('moment-timezone') 
let handler = async (m, { conn, text }) => {
let ava = './src/ig.jpg'
let fs = require ('fs') 

m.reply()

await  conn.sendFile(m.chat, ava, 'ava.jpg', `Hi _${conn.getName(m.sender)}_ ! ${ucapan()}\nFollow my Instagram  (͠≖ ͜ʖ͠≖)👌\n\nhttps://www.instagram.com/arifrahmanulhakim/`, { key: { remoteJid: 'status@broadcast', participant: '0@s.whatsapp.net', fromMe: false }, message: { "imageMessage": { "mimetype": "image/jpeg", "caption": 'WhatsApp Verified Account', "jpegThumbnail": fs.readFileSync('./src/arh.jpg')} } }, m)


/* FAKE BUTTON    await conn.sendButtonImg(m.chat, `Hi _${conn.getName(m.sender)}_ ! 
Follow my Instagram  (͠≖ ͜ʖ͠≖)👌`, 'https://i.ibb.co/nw0ZXMQ/ig.jpg', '© 「 𝗔𝗥𝗛 」‏‏‏', 'Instagram', 'https://www.instagram.com/arifrahmanulhakim/')

 
/* IMG CHANGE */  	/* conn.sendFile(m.chat, ava,'' ,'©ARH', m, false, { thumbnail : fs.readFileSync('./src/ss.jpg')} ) */
} 

handler.customPrefix = /^(.sosmed)$/i
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