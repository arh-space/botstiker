const { MessageType } = require('@adiwajshing/baileys')
let fs = require ('fs') 
let handler = async (m, { conn, usedPrefix }) => {
    let chats = Object.entries(global.db.data.chats).filter(chat => chat[1].isBanned)
    let users = Object.entries(global.db.data.users).filter(user => user[1].banned)
    await conn.sendMessage(m.chat, `🕒 Tunggu sebentar yaa _${conn.getName(m.sender)}_\n\nHaihai! Sambil menunggu mohon support nya yaa, hanya dengan membuka link dibawah ini:\nhttps://semawur.com/ARHBOT\nTerima kasih banyak :)\n\n© ARHBOT`, MessageType.text, { quoted: { key: { remoteJid: 'status@broadcast', participant: '0@s.whatsapp.net', fromMe: false }, message: { "imageMessage": { "mimetype": "image/jpeg", "caption": 'Verified Bot Account', "jpegThumbnail": fs.readFileSync(`./src/arh.jpg`)} } } })
    m.reply(`
┏ 「  Daftar Chat Terbanned  」
┊ » Total : ${chats.length} Chat${chats ? '\n' + chats.map(([jid], i) => `
┊ » ${i + 1}. ${conn.getName(jid) == undefined ? 'Unknown' : conn.getName(jid)}
┊ » ${jid}
`.trim()).join('\n') : ''}
┗

┏ 「  Daftar User Terbanned  」
┊ »Total : ${users.length} User${users ? '\n' + users.map(([jid], i) => `
┊ »${i + 1}. ${conn.getName(jid) == undefined ? 'Unknown' : conn.getName(jid)}
┊ »${jid}
`.trim()).join('\n') : ''}
┗\n\n
© ARHBOT
`.trim())
}
handler.help = ['bannedlist']
handler.tags = ['info']
handler.command = /^listban(ned)?|ban(ned)?list|daftarban(ned)?$/i
handler.register = true
module.exports = handler
