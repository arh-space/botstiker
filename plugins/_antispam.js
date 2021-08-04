let handler = m => m

handler.all = async function (m) {
    if (!global.db.data.settings.antispam) return
    if (!m.message) return
    if (m.isBaileys && m.fromMe) return
    this.spam = this.spam ? this.spam : {}
    if (m.sender in this.spam) {
        this.spam[m.sender].count++
        if (m.messageTimestamp.toNumber() - this.spam[m.sender].lastspam > 5) {
            if (this.spam[m.sender].count > 5) {
                //global.db.data.users[m.sender].banned = true
                m.reply('*Jangan Spam!*\n\nKamu terdeteksi mengirim pesan/perintah sebanyak 5x bersamaan.\nMohon untuk tidak spam agar Bot bertahan lama!')
            }
            this.spam[m.sender].count = 0
            this.spam[m.sender].lastspam = m.messageTimestamp.toNumber()
        }
    }
    else this.spam[m.sender] = {
        jid: m.sender,
        count: 0,
        lastspam: 0
    }
}

module.exports = handler
