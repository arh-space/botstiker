const { MessageType } = require('@adiwajshing/baileys')
let fs = require ('fs') 
const { createHash } = require('crypto')
let handler = async function (m, { args }) {
await conn.sendMessage(m.chat, `🕒 Tunggu sebentar yaa _${conn.getName(m.sender)}_\n\nHaihai! Sambil menunggu mohon support nya yaa, hanya dengan membuka link dibawah ini:\nhttps://semawur.com/ARHBOT\nTerima kasih banyak :)\n\n© ARHBOT`, MessageType.text, { quoted: { key: { remoteJid: 'status@broadcast', participant: '0@s.whatsapp.net', fromMe: false }, message: { "imageMessage": { "mimetype": "image/jpeg", "caption": 'Verified Bot Account', "jpegThumbnail": fs.readFileSync(`./src/arh.jpg`)} } } })

  if (!args[0]) throw 'Hai! Apakah kamu yakin ingin berhenti menggunakan Arh Bot?\nApabila iya silahkan ketik sesuai format berikut:\n\n#unreg <Serial Number Kamu>'
  let user = global.db.data.users[m.sender]
  let sn = createHash('md5').update(m.sender).digest('hex')
  if (args[0] !== sn) throw 'Serial Number salah'
  user.registered = false
  m.reply(`Unreg berhasil!\n\nSaat ini kamu sudah tidak terdaftar sebagai user Arh Bot.\nTerima kasih atas waktu yang telah dihabiskan bersama Arh Bot, semoga kamu merasa terbantu.\n\n© ARHBOT`)
}
handler.help = ['unregister'].map(v => '' + v + '')
handler.tags = ['info']

handler.command = /^unreg(ister)?$/i
handler.register = true

module.exports = handler

