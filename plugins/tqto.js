/**
* jangan dihapus/diganti ya kontol
* lu itu cuma make jadi jangan diapa apain ya bangsat
* mending lu tambahin deh nama lu jangan hapus kreditnya
**/
let levelling = require('../lib/levelling')
let fs = require('fs')
let path = require('path')
let fetch = require('node-fetch')
let moment = require('moment-timezone')

let handler = async (m, { conn, usedPrefix }) => {
let { exp, limit, age, money, level, role, registered } = global.db.data.users[m.sender]
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    let umur = `*${age == '-1' ? 'Belum Daftar*' : age + '* Thn'}`
	let name = registered ? global.db.data.users[m.sender].name : conn.getName(m.sender)

//TIME
let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })

ftroli = { key: { remoteJid: 'status@broadcast', participant: '0@s.whatsapp.net' }, message: { orderMessage: { itemCount: 2022, status: 1, surface: 1, message: `Hallo ${name} ${global.ucapan}`, orderTitle: wm, sellerJid: '0@s.whatsapp.net' } } }

    let tqto = `*BIG THANKS TO*

Nurutomo: 
https://github.com/Nurutomo
Istikmal: 
https://github.com/BochilGaming
Ariffb: 
https://github.com/Ariffb25
Aguz Familia:
https://github.com/FokusDotId
Amelia Lisa:
https://github.com/Ameliascrf
Aniq12
https://github.com/aniq12
Ilman: 
https://github.com/ilmanhdyt
Amirul: 
https://github.com/amiruldev20
Irwan:
https://github.com/irwanx
Rasel:
https://github.com/raselcomel
Mursid:
https://github.com/Botwa021
Elaina
https://github.com/ImYanXiao
Jarot:
https://github.com/Alpiii22
Irfaan Official
https://youtube.com/channel/UCaFh82MyrVgcgIvJxvTA39w
ArieTube
https://m.youtube.com/channel/UC0rPHvwr0sJtaccF8Mm1Xng
GansBOTz
https://youtube.com/channel/UCmEQy5B3GhmfNVSrHEzv-uA

`
    conn.sendButtonDoc(m.chat, tqto, wm,'M??E??N??U??','.menu', ftroli, { gifPlayback: true, contextInfo: { externalAdReply: {title: namabot, body: date, sourceUrl: linkyt, thumbnail: fs.readFileSync('./thumbnail.jpg') }}})
}
handler.help = ['tqto']
handler.tags = ['info']
handler.command = /^(credits?|thanks?to|tqto|ttq)$/i

module.exports = handler
