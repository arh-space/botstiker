const { MessageType } = require('@adiwajshing/baileys')
let fs = require('fs')
let moment = require('moment-timezone')
let handler = async (m, { conn, command, text}) => { 
await conn.sendMessage(m.chat, `${pickRandom([`P? Merasa terpanggil!!`, `Oiikk apa ${conn.getName(m.sender)}?`, `Yuhuu aku disini, kamu manggil aku ${conn.getName(m.sender)}?`, `Yaaa apa ${conn.getName(m.sender)}??`,`Ada apa ${conn.getName(m.sender)}?`,`${conn.getName(m.sender)} Kamu memanggil ku?`,'Apakah aku dipanggil?','Hai hai hai?',`P!P!P! Apaaan ${conn.getName(m.sender)}?? `])}`, MessageType.text, { quoted: { key: { remoteJid: 'status@broadcast', participant: '0@s.whatsapp.net', fromMe: false }, message: { "imageMessage": { "mimetype": "image/jpeg", "caption": 'Whatsapp Verified Account', "jpegThumbnail": fs.readFileSync(`./src/arh.jpg`)} } } })	
await conn.sendButton(m.chat, `${ucapan()} 
Hai Aku ${conn.getName(conn.user.jid)}. Terima kasih banyak telah menggunakan ${conn.getName(conn.user.jid)}. Bot ini hanya untuk membuat sticker, semoga bermanfaat yaa dan mohon support nya selalu ≧'◡'≦ 👌`,  '© 𝗔𝗥𝗛BOT‏‏‏ | Pesan Otomatis ', 'MENU', '.menu') 
} 
handler.customPrefix = /^(.|oi|oii|njir|anjing|h|a|b|c|d|e|f|g|h|i|j|k|l|m|n|o|q|r|s|t|u|v|w|x|y|z|#|p|pp|p!|woi|halo|hai|kak|kirim|sticker|stiker|ajg|asw|lol|tolol|bgo|bego|cepatan|we|pppp|kk|mau stiker|y|g)$/i
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

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}