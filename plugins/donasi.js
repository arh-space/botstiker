const { MessageType } = require('@adiwajshing/baileys')
let fs = require ('fs') 
let handler = async (m, { conn, usedPrefix, command }) => {
await conn.sendMessage(m.chat, `๐ Tunggu sebentar yaa _${conn.getName(m.sender)}_\n\nHaihai! Sambil menunggu mohon support nya yaa, hanya dengan membuka link dibawah ini:\nhttps://semawur.com/ARHBOT\nTerima kasih banyak :)\n\nยฉ ARHBOT`, MessageType.text, { quoted: { key: { remoteJid: 'status@broadcast', participant: '0@s.whatsapp.net', fromMe: false }, message: { "imageMessage": { "mimetype": "image/jpeg", "caption": 'Verified Bot Account', "jpegThumbnail": fs.readFileSync(`./src/arh.jpg`)} } } })

 m.reply(`
โ ใ  Donasi โข E-money  ใ' 
โ ยป OVO, DANA [082285855034]
โ ยป BNI, PAYPAL hubungi @${global.owner[0]}
โ

Haihai! Mohon Support nya yaa biar bisa ON hanya dengan membuka link dibawah ini:\n
https://semawur.com/ARHBOT\n\nTerima Kasih :)
`.trim())
 }
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
