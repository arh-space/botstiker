const { MessageType, WAMessageProto } = require('@adiwajshing/baileys')
let moment = require('moment-timezone')
let handler = async (m, { conn, text }) => {
	let user = global.db.data.users[m.sender]
	let ava = './src/arh.jpg'
	let fs = require ('fs') 
    if (!text) throw 'Umm.. missing text π'
    if (text.length > 50) throw 'Max 50! π '
    const laporan = `${text}`
	m.reply()
    
/* FAKE VERIF */    await conn.sendMessage(m.chat, text, MessageType.text, { quoted: { key: { remoteJid: 'status@broadcast', participant: '0@s.whatsapp.net', fromMe: false }, message: { "imageMessage": { "mimetype": "image/jpeg", "caption": 'Whatsapp Verified Account', "jpegThumbnail": fs.readFileSync(`./src/arh.jpg`)} } } })

/* FAKE BUTTON */   await conn.send2ButtonImg(m.chat, `Hi _${conn.getName(m.sender)}_, ${ucapan()} 
I'm ${conn.getName(conn.user.jid)}. Currently trying to learn many things as I can and watch Anime every now and then (γ_γ)π`, 'https://i.ibb.co/fd309b1/arh.jpg', 'Β© γ ππ₯π γβββ', 'π± Instagram', '.sosmed', 'π Website', '.website') 

 
/* IMG CHANGE */  	/* conn.sendFile(m.chat, ava,'' ,'Β©ARH', m, false, { thumbnail : fs.readFileSync('./src/ss.jpg')} ) */
} 

handler.help = ['v'].map(v => v + '[Text]')
handler.command = /^v/i

module.exports = handler

function ucapan() {
    const time = moment.tz('Asia/Jakarta').format('HH')
    res = "Good Night π"
    if (time >= 4) {
        res = "Good Night π"
    }
    if (time > 10) {
        res = "Good Morning β"
    }
    if (time >= 13) {
        res = "Good Afternoon βοΈ"
    }
    if (time >= 17) {
        res = "Good Evening π"
    }
    return res
}