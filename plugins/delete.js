let handler = function (m) {
  if (!m.quoted) throw false
  let { chat, fromMe, id, isBaileys } = m.quoted
  if (!fromMe) throw false
  if (/Stikerin Broadcast/i.test(m.quoted.text)) throw 'Tidak bisa menghapus pesan broadcast!'
  if (!isBaileys) throw 'Pesan tersebut bukan dikirim oleh Arh Bot!'
  this.deleteMessage(chat, {
    fromMe,
    id,
    remoteJid: chat
  })
}
handler.help = ['delete']


handler.command = /^del(ete)?$/i

module.exports = handler
