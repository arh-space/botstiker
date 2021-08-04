const { MessageType } = require('@adiwajshing/baileys')
let fs = require ('fs') 
const crypto = require('crypto')

const xp_first_time = 2500
const xp_link_creator = 15000
const xp_bonus = {
    5: 40000,
   10: 100000,
   20: 250000,
   50: 1000000,
  100: 10000000,
}

let handler = async (m, { conn, usedPrefix, text }) => {
  await conn.sendMessage(m.chat, `🕒 Tunggu sebentar yaa _${conn.getName(m.sender)}_\n\nHaihai! Sambil menunggu mohon support nya yaa, hanya dengan membuka link dibawah ini:\nhttps://semawur.com/ARHBOT\nTerima kasih banyak :)\n\n© ARHBOT`, MessageType.text, { quoted: { key: { remoteJid: 'status@broadcast', participant: '0@s.whatsapp.net', fromMe: false }, message: { "imageMessage": { "mimetype": "image/jpeg", "caption": 'Verified Bot Account', "jpegThumbnail": fs.readFileSync(`./src/arh.jpg`)} } } })

  let users = global.db.data.users
  if (text) {
    if ('ref_count' in users[m.sender]) throw 'Tidak bisa menggunakan kode referal/kode referal telah digunakan!'
    let link_creator = (Object.entries(users).find(([, { ref_code }]) => ref_code === text.trim()) || [])[0]
    if (!link_creator) throw 'Kode referal tidak valid'
    let count = users[link_creator].ref_count++
    let extra = xp_bonus[count] || 0
    users[link_creator].exp += xp_link_creator + extra
    users[m.sender].exp += xp_first_time
    users[m.sender].ref_count = 0
    m.reply(`
Selamat! Kamu mendapatkan bonus +${xp_first_time} XP dari kode referal yang kamu gunakan.
Share juga kode referal kamu untuk mendapatkan lebih banyak XP.
`.trim())
    m.reply(`
Hai ${conn.getName(conn.user.jid)}!\nSelamat! Seseorang telah menggunakan kode referal kamu.\n
Kamu mendatkan bonus +${xp_link_creator + extra} XP
`.trim(), link_creator)
  } else {
    let code = users[m.sender].ref_code = users[m.sender].ref_code || new Array(11).fill().map(() => [...'0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'][crypto.randomInt(62)]).join('')
    users[m.sender].ref_count = users[m.sender].ref_count ? users[m.sender].ref_count : 0
    let command_text = `${usedPrefix}ref ${code}`
    let command_link = `wa.me/${conn.user.jid.split('@')[0]}?text=${encodeURIComponent(command_text)}`
    let share_text = `
Haii sahabat Arh Bot~
Ayoo gunakan kode Referral aku yaa untuk dapatin Bonus ${xp_first_time} XP bagi yang menggunakan link/kode referal dibawah ini

Referal Code: *${code}*

${command_link}
`.trim()
    m.reply(`
Dapatkan ${xp_link_creator} XP untuk setiap pengguna baru yang menggunakan kode referal kamu.

Kode referal kamu: *${code}*
*${users[m.sender].ref_count}* orang telah menggunakan kode referal kamu

Bagikan link kepada teman: ${command_link}

atau kirim pesan kepada teman wa.me/?text=${encodeURIComponent(share_text)}

${Object.entries(xp_bonus).map(([count, xp]) => `${count} Orang = Bonus ${xp} XP`).join('\n')}
`.trim())
  }
}
handler.help = ['ref']
handler.tags = ['info','SHOP']

handler.command = ['ref']

handler.register = true

module.exports = handler