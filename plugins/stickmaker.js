//made by Anshul
const uploadImage = require('../lib/uploadImage')
const { sticker } = require('../lib/sticker')
const { MessageType } = require('@adiwajshing/baileys')
const effects = ['jail', 'gay', 'glass', 'wasted', 'triggered']
let fs = require ('fs') 
let handler = async (m, { conn, usedPrefix, text, command }) => {
  let effect = text.trim().toLowerCase()
  if (!effects.includes(effect)) throw `
*Perintah ini untuk membuat gambar menjadi stiker dengan berbagai efek*

*Usage:* ${usedPrefix + command} <efek>
*Example:* ${usedPrefix + command} jail

┌─〔 Daftar Efek 〕
${effects.map(effect => `├ ${effect}`).join('\n')}
└────
`.trim()
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw 'Balas gambarnya!'
  if (!/image\/(jpe?g|png)/.test(mime)) throw `Mime ${mime} tidak didukung`
  await conn.sendMessage(m.chat, `🕒 Tunggu sebentar yaa _${conn.getName(m.sender)}_\n\nHaihai! Sambil menunggu mohon support nya yaa, hanya dengan membuka link dibawah ini:\nhttps://semawur.com/ARHBOT\nTerima kasih banyak :)\n\n© ARHBOT`, MessageType.text, { quoted: { key: { remoteJid: 'status@broadcast', participant: '0@s.whatsapp.net', fromMe: false }, message: { "imageMessage": { "mimetype": "image/jpeg", "caption": 'Verified Bot Account', "jpegThumbnail": fs.readFileSync(`./src/arh.jpg`)} } } })

  let img = await q.download()
  let url = await uploadImage(img)
  let apiUrl = global.API('https://some-random-api.ml/canvas/', encodeURIComponent(effect), {
    avatar: url
  })
  try {
    let stiker = await sticker(null, apiUrl, global.packname, global.author)
    await conn.sendMessage(m.chat, stiker, MessageType.sticker, {
      quoted: m
    })
  } catch (e) {
    await conn.sendFile(m.chat, apiUrl, 'image.png', null, m, 0, { thumbnail: await (await fetch(apiUrl)).buffer() })
  }
    await conn.sendButton(m.chat, ` 
Okee udah ${conn.getName(m.sender)} (ㆆ_ㆆ)👌`,  '© 𝗔𝗥𝗛BOT‏‏‏', 'MENU', '.menu') 
}

handler.help = ['stikermaker']
handler.tags = ['sticker']
handler.command = /^(s(tic?ker)?maker)$/i
handler.register = true
handler.limit = true
module.exports = handler