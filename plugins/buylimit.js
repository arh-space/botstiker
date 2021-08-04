const { MessageType } = require('@adiwajshing/baileys')
const xpperlimit = 500
let fs = require ('fs') 
let handler = async (m, { conn, command, args }) => {
  let count = command.replace(/^buy/i, '')

  
  count = count ? /all/i.test(count) ? Math.floor(global.db.data.users[m.sender].exp / xpperlimit) : parseInt(count) : args[0] ? parseInt(args[0]) : 1
  count = Math.max(1, count)
  if (isNaN(count)) throw `hanya angka! contoh: .buy 5`
  await conn.sendMessage(m.chat, `🕒 Tunggu sebentar yaa _${conn.getName(m.sender)}_\n\nHaihai! Sambil menunggu mohon support nya yaa, hanya dengan membuka link dibawah ini:\nhttps://semawur.com/ARHBOT\nTerima kasih banyak :)\n\n© ARHBOT`, MessageType.text, { quoted: { key: { remoteJid: 'status@broadcast', participant: '0@s.whatsapp.net', fromMe: false }, message: { "imageMessage": { "mimetype": "image/jpeg", "caption": 'Verified Bot Account', "jpegThumbnail": fs.readFileSync(`./src/arh.jpg`)} } } })
  if (global.db.data.users[m.sender].exp >= xpperlimit * count) {
    global.db.data.users[m.sender].exp -= xpperlimit * count
    global.db.data.users[m.sender].limit += count
    conn.reply(m.chat, `*PEMBELIAN LIMIT BERHASIL!*\n\nXP Kamu: -${xpperlimit * count} XP\nLimit: + ${count} Limit`, m)
  } else conn.reply(m.chat, `Maaf XP Kamu tidak mencukupi untuk membeli ${count} limit`, m)
}
handler.help = ['buy <jumlah limit>', 'buyall']
handler.tags = ['SHOP']
handler.command = /^buy([0-9]+)|buy|buyall$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = true
handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0

module.exports = handler

