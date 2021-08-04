const { createHash } = require('crypto')
const { MessageType } = require('@adiwajshing/baileys')
let fs = require ('fs') 
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { text, usedPrefix }) {
  await conn.sendMessage(m.chat, `🕒 Tunggu sebentar yaa _${conn.getName(m.sender)}_\n\nHaihai! Sambil menunggu mohon support nya yaa, hanya dengan membuka link dibawah ini:\nhttps://semawur.com/ARHBOT\nTerima kasih banyak :)\n\n© ARHBOT`, MessageType.text, { quoted: { key: { remoteJid: 'status@broadcast', participant: '0@s.whatsapp.net', fromMe: false }, message: { "imageMessage": { "mimetype": "image/jpeg", "caption": 'Verified Bot Account', "jpegThumbnail": fs.readFileSync(`./src/arh.jpg`)} } } })

  let user = global.db.data.users[m.sender]
  if (user.registered === true) throw `Kamu sudah terdaftar sebagai user Arh Bot\nMau daftar ulang? ${usedPrefix}unreg <SERIAL NUMBER>`
  if (!Reg.test(text)) throw `「  PENDAFTARAN AKUN ARH BOT  」'\n\nHai! Terima kasih telah menggunakan Arh Bot.\nUntuk melakukan pendaftaran silahkan ketik sesuai format berikut agar akun kamu dapat di verifikasi untuk menggunakan fitur Arh Bot.\n\nContoh penggunaan: ${usedPrefix}daftar Arif.20\n*${usedPrefix}daftar nama.umur*`
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw 'Oops! Nama tidak boleh kosong (Alphanumeric)'
  if (!age) throw 'Oops! Umur tidak boleh kosong (Angka)'
  age = parseInt(age)
  if (age > 70) throw 'Oops! Maaf Umur kamu terlalu tua untuk menggunakan Arh Bot\nChat owner untuk info selanjutnya'
  if (age < 3) throw 'Oops! Maaf Umur kamu terlalu muda untuk menggunakan Arh Bot\nChat owner untuk info selanjutnya'
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')
  m.reply(`
「  ARH BOT  」

Selamat! Kamu telah berhasil mendaftar dan terverifikasi sebagai user Arh Bot.

┏ 〔 Info Akun〕
┊
┊ » Nama: ${name}
┊ » Umur: ${age} tahun
┊ » SERIAL NUMBER: ${sn}
┊
┊ *PENTING!* HARAP SIMPAN/STAR INFO INI!
┗
`.trim())
}
handler.help = ['register'].map(v => v + '')
handler.tags = ['info']

handler.command = /^(daftar|reg(ister)?)$/i

module.exports = handler

