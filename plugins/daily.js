const { MessageType } = require('@adiwajshing/baileys')
const free = 800
const prem = 5000
let fs = require ('fs') 
let handler = async (m, { conn, isPrems }) => {
  await conn.sendMessage(m.chat, `🕒 Tunggu sebentar yaa _${conn.getName(m.sender)}_\n\nHaihai! Sambil menunggu mohon support nya yaa, hanya dengan membuka link dibawah ini:\nhttps://semawur.com/ARHBOT\nTerima kasih banyak :)\n\n© ARHBOT`, MessageType.text, { quoted: { key: { remoteJid: 'status@broadcast', participant: '0@s.whatsapp.net', fromMe: false }, message: { "imageMessage": { "mimetype": "image/jpeg", "caption": 'Verified Bot Account', "jpegThumbnail": fs.readFileSync(`./src/arh.jpg`)} } } })
  let time = global.db.data.users[m.sender].lastclaim + 86400000
  if (new Date - global.db.data.users[m.sender].lastclaim < 86400000) throw `Maaf, Kamu sudah mengklaim XP harian hari ini\nsilahkan tunggu selama ${msToTime(time - new Date())} lagi`
  global.db.data.users[m.sender].exp += isPrems ? prem : free
  m.reply(`*DAILY XP BERHASIL DI CLAIM!*\n\nKamu mendapatkan XP tambahan:\n+${isPrems ? prem : free} XP`)
  global.db.data.users[m.sender].lastclaim = new Date * 1
}
handler.help = ['dailyxp']
handler.tags = ['SHOP']
handler.command = /^(dailyxp|claim)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false
handler.register = true
handler.fail = null
handler.exp = 0

module.exports = handler

function msToTime(duration) {
  var milliseconds = parseInt((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

  hours = (hours < 10) ? "0" + hours : hours
  minutes = (minutes < 10) ? "0" + minutes : minutes
  seconds = (seconds < 10) ? "0" + seconds : seconds

  return hours + " jam " + minutes + " menit"
}