import fetch from 'node-fetch'
import fs from 'fs'
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)

  
 const ini = await conn.sendContactArray(m.chat, [
    [`${nomorown3}`, `${await conn.getName(nomorown3+'@s.whatsapp.net')}`, `ð Developer Bot `, `ð« Don't call me ð¥º`, `â¨ziro-md_offcl@gmail.com`, `ð®ð© Indonesia`, `ð https://youtube.com/@Ziro-MD_Official`, `Ziro-MD Nih Boss`],
    [`${conn.user.jid.split('@')[0]}`, `${await conn.getName(conn.user.jid)}`, `ð¥ Bot WhatsApp ð£`, `ðµ Don't spam/call me ð¢`, `Nothing`, `ð®ð© Indonesia`, `ð https://youtube.com/@Ziro-MD_Official`, `ð¤ Dont Forget To Donate!`]
  ], fkontak)
  await conn.send2ButtonDoc(m.chat, `Halo kak @${m.sender.split(`@`)[0]} itu nomor owner ku, jangan call/spam yah kakð`, wm, 'Menu', '.menu', 'Donasi', '.donasi', ini, { contextInfo: { forwardingScore: fsizedoc, externalAdReply: { body: 'Tes', containsAutoReply: true, mediaType: 1, mediaUrl: hwaifu.getRandom(),  renderLargerThumbnail: true, showAdAttribution: true, sourceId: 'Tes', sourceType: 'PDF', previewType: 'PDF', sourceUrl: sgc, thumbnail: fs.readFileSync('./thumbnail.jpg'), thumbnailUrl: sgc, title: wm}}})
  }
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(pengembang)$/i

export default handler
