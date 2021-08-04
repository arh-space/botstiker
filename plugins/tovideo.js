const { MessageType } = require('@adiwajshing/baileys')
let { webp2mp4 } = require('../lib/webp2mp4')
let { ffmpeg } = require('../lib/converter')
let fs = require ('fs') 
let handler = async (m, { conn, usedPrefix, command }) => {
    if (!m.quoted) throw `*Perintah ini untuk merubah stiker gerak menjadi video*\n\nBalas stiker yang ingin diubah menjadi video dengan perintah ${usedPrefix + command}`
    let mime = m.quoted.mimetype || ''
    if (!/webp|audio/.test(mime)) throw `*Perintah ini untuk merubah stiker gerak menjadi video*\n\nBalas stiker yang ingin diubah menjadi video dengan perintah ${usedPrefix + command}`
    await conn.sendMessage(m.chat, `🕒 Tunggu sebentar yaa _${conn.getName(m.sender)}_\n\nHaihai! Sambil menunggu mohon support nya yaa, hanya dengan membuka link dibawah ini:\nhttps://semawur.com/ARHBOT\nTerima kasih banyak :)\n\n© ARHBOT`, MessageType.text, { quoted: { key: { remoteJid: 'status@broadcast', participant: '0@s.whatsapp.net', fromMe: false }, message: { "imageMessage": { "mimetype": "image/jpeg", "caption": 'Verified Bot Account', "jpegThumbnail": fs.readFileSync(`./src/arh.jpg`)} } } })

    let media = await m.quoted.download()
    let out = Buffer.alloc(0)
    if (/webp/.test(mime)) {
        out = await webp2mp4(media)
    } else if (/audio/.test(mime)) {
        out = await ffmpeg(media, [
            '-filter_complex', 'color',
            '-pix_fmt', 'yuv420p',
            '-crf', '51',
            '-c:a', 'copy',
            '-shortest'
        ], 'mp3', 'mp4')
    }
    await conn.sendFile(m.chat, out, 'out.mp4', '*© ARHBOT*', null, m, 0, { thumbnail: out })
}
handler.help = ['tovideo']
handler.tags = ['sticker']
handler.register = true
handler.limit = true
handler.command = ['tovideo']

module.exports = handler
