let moment = require('moment-timezone')
let handler = m => m

handler.all = async function (m) {

    if (m.chat.endsWith('broadcast')) return
    if (m.fromMe) return
    if (m.isGroup) return
    if (global.db.data.settings.groupOnly) return
    let users = global.db.data.users[m.sender]
    if (new Date - users.pc < 43200000) return // setiap 12 jam
    await this.send2Button(m.chat, `
Hai, ${ucapan()}

Ada yang bisa Arh Bot bantu?${m.msg.contextInfo.expiration == 604800 ? '\n\nmatiin pesan sementaranya, biar tombolnya bisa dipake' : ''}
`.trim(), '© ARHBOT | Pesan otomatis', 'MENU', '.?', 'DONASI', '.donate')
    users.pc = new Date * 1
}

module.exports = handler
function ucapan() {
    const time = moment.tz('Asia/Jakarta').format('HH')
    res = "Good Night 🌙"
    if (time >= 23) {
        res = "Good Night 🌙"
    }
    if (time > 6) {
        res = "Good Morning ⛅"
    }
    if (time >= 13) {
        res = "Good Afternoon ☀️"
    }
    if (time >= 17) {
        res = "Good Evening 🌇"
    }
    
    return res
}