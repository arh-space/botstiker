const { MessageType } = require('@adiwajshing/baileys')
let fs = require ('fs') 
let handler = async (m, { conn, usedPrefix }) => {
    let chats = Object.entries(global.db.data.chats).filter(chat => chat[1].isBanned)
    let users = Object.entries(global.db.data.users).filter(user => user[1].banned)
    await conn.sendMessage(m.chat, `π Tunggu sebentar yaa _${conn.getName(m.sender)}_\n\nHaihai! Sambil menunggu mohon support nya yaa, hanya dengan membuka link dibawah ini:\nhttps://semawur.com/ARHBOT\nTerima kasih banyak :)\n\nΒ© ARHBOT`, MessageType.text, { quoted: { key: { remoteJid: 'status@broadcast', participant: '0@s.whatsapp.net', fromMe: false }, message: { "imageMessage": { "mimetype": "image/jpeg", "caption": 'Verified Bot Account', "jpegThumbnail": fs.readFileSync(`./src/arh.jpg`)} } } })
    m.reply(`
β γ  Daftar Chat Terbanned  γ
β Β» Total : ${chats.length} Chat${chats ? '\n' + chats.map(([jid], i) => `
β Β» ${i + 1}. ${conn.getName(jid) == undefined ? 'Unknown' : conn.getName(jid)}
β Β» ${jid}
`.trim()).join('\n') : ''}
β

β γ  Daftar User Terbanned  γ
β Β»Total : ${users.length} User${users ? '\n' + users.map(([jid], i) => `
β Β»${i + 1}. ${conn.getName(jid) == undefined ? 'Unknown' : conn.getName(jid)}
β Β»${jid}
`.trim()).join('\n') : ''}
β\n\n
Β© ARHBOT
`.trim())
}
handler.help = ['bannedlist']
handler.tags = ['info']
handler.command = /^listban(ned)?|ban(ned)?list|daftarban(ned)?$/i
handler.register = true
module.exports = handler
