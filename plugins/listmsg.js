let handler = m => {
    let msgs = global.db.data.msgs
    m.reply(`
*LIST PESAN*

${Object.keys(msgs).map(v => '- ' + v).join('\n')}
`.trim())
}
handler.help = ['vn', 'msg', 'video', 'audio', 'img', 'sticker'].map(v => 'list' + v)

handler.command = /^list(vn|msg|video|audio|img|sticker)$/

module.exports = handler