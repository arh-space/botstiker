// Thanks to TOXIC-DEVIL
// https://github.com/TOXIC-DEVIL
const { MessageType } = require('@adiwajshing/baileys')
let fs = require ('fs') 
let handler = async (m, { conn, args }) => {
    await conn.sendMessage(m.chat, `š Tunggu sebentar yaa _${conn.getName(m.sender)}_\n\nHaihai! Sambil menunggu mohon support nya yaa, hanya dengan membuka link dibawah ini:\nhttps://semawur.com/ARHBOT\nTerima kasih banyak :)\n\nĀ© ARHBOT`, MessageType.text, { quoted: { key: { remoteJid: 'status@broadcast', participant: '0@s.whatsapp.net', fromMe: false }, message: { "imageMessage": { "mimetype": "image/jpeg", "caption": 'Verified Bot Account', "jpegThumbnail": fs.readFileSync(`./src/arh.jpg`)} } } })

    if (!args || !args[0] || args.length === 0) throw 'Masukkan nomor untuk dipindai!'
    if (args[0].startsWith('0')) throw 'Gunakan code Negara! Contoh #scan 6285156840054'
    let user = await conn.isOnWhatsApp(args[0])
    let exists = user && user.exists ? true : false
    if (exists) {
        let sameGroup = [], isInDatabase = false
        let chat = conn.chats.all().filter(v => v.jid.endsWith('g.us') && !v.read_only)
        for (let gc of chat) {
            let participants = gc && gc.metadata && gc.metadata.participants ? gc.metadata.participants : []
            if (participants.some(v => v.jid === user.jid)) sameGroup.push(gc.jid)
        }
        if (user.jid in global.db.data.users) isInDatabase = true
        let str = ` 
ā ć  SCAN  ć
ā Ā» *Nama:* ${conn.getName(user.jid)}
ā Ā» *Nomor:* ${splitM(user.jid)}
ā Ā» *Mention:* ${toM(user.jid)}
ā Ā» *Api:* wa.me/${splitM(user.jid)}
ā Ā» *Jid:* ${user.jid}
ā Ā» *Whatsapp Bussines:* ${user.isBusiness ? 'Yes' : 'No'}
ā Ā» *In Database Arh Bot:* ${isInDatabase ? 'Yes' : 'No'}
ā Ā» *Group Yang Sama Dengan BOT:* ${sameGroup.length} *Group*
ā
`.trim()
        m.reply(str, m.chat, { 
            contextInfo: { 
                mentionedJid: conn.parseMention(str)
            }
        })
    } else throw 'User Tidak Ditemukan!!'
}
    
handler.help = ['scan'].map(v => v + '')
handler.tags = ['info']
handler.command = /^scan$/i
handler.register = true
module.exports = handler

function splitM(jid) {
    return jid.split('@')[0]
}

function toM(jid) {
    return '@' + splitM(jid)
}