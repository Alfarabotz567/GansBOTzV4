const fetch = require('node-fetch')
let handler = async(m, { conn, text, usedPrefix, command }) => {
let pp = await conn.profilePictureUrl(m.chat).catch(_ => null)

let str = `*https://youtu.be/CZYNydJe0II* (Wajib Subs Kalau Ga subs Gw Doain Error Mampus lu)

Pengen base script bot ini?\nNih ada santai bro...\nhttps://github.com/ImYanXiao/Elaina-MultiDevice

Pengen yang udah di recode owner?\nScript bot ini dijual bila kalian mau  bisa chat owner`
let wibu = `https://api-reysekha.herokuapp.com/api/random/cosplay?apikey=apirey` 
let thumb = await(await fetch(wibu)).buffer()
conn.sendButtonDoc(m.chat, str, wm,'O W N E R','.owner', m, { contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: "https://Instagram.com/_ctzhid",
    mediaType: "VIDEO",
    description: "https://www.instagram.com/p/CevoCg5hG-p/?utm_source=ig_web_copy_link", 
    title: 'Alfarabotz MD',
    body: wm,
    thumbnail: thumb,
    sourceUrl: urlnya
  }
  } }) 
          }
handler.help = ['source code']
handler.tags = ['info']
handler.command =  /^(script|sc)$/i

module.exports = handler
