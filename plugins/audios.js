import db from '../lib/database.js'
import * as fs from 'fs'
import not from '../lib/modokuaker.js'

let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = '../multimedia/sonidos/onichan.mp3'
conn.sendPresenceUpdate('recording', m.chat)  
conn.sendMessage(m.chat, { audio: { url: vn }, contextInfo: { "externalAdReply": { "title": `Kaway >~<`, "body": `Matt_Mdz`, "previewType": "PHOTO", "thumbnailUrl": null,"thumbnail": imagen1, "sourceUrl": `https://vm.tiktok.com/ZMLjAbySN/`, "showAdAttribution": true}}, seconds: '4556', ptt: true, mimetype: 'audio/mpeg', fileName: `error.mp3` }, { quoted: m })}
handler.customPrefix = /Kaway/
handler.command = /^(Kaway?$)/
export default handler
}
let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = '../multimedia/sonidos/baka.mp3'
conn.sendPresenceUpdate('recording', m.chat)  
conn.sendMessage(m.chat, { audio: { url: vn }, contextInfo: { "externalAdReply": { "title": `Baka >~<`, "body": `Yesenia UwU`, "previewType": "PHOTO", "thumbnailUrl": null,"thumbnail": imagen1, "sourceUrl": `https://fb.watch/b7pj-i5ejP/`, "showAdAttribution": true}}, seconds: '4556', ptt: true, mimetype: 'audio/mpeg', fileName: `error.mp3` }, { quoted: m })}
handler.customPrefix = /Baka|baka|bak/
handler.command = /^(Baka|baka|bak?$)/
export default handler
}
let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = '../multimedia/sonidos/onich.mp3'
conn.sendPresenceUpdate('recording', m.chat)  
conn.sendMessage(m.chat, { audio: { url: vn }, contextInfo: { "externalAdReply": { "title": `onichan >~<`, "body": `Matt_Mdz UwU`, "previewType": "PHOTO", "thumbnailUrl": null,"thumbnail": imagen1, "sourceUrl": `https://youtube.com/channel/UC_Pp8pT9vbT15k5_-i6oseA`, "showAdAttribution": true}}, seconds: '4556', ptt: true, mimetype: 'audio/mpeg', fileName: `error.mp3` }, { quoted: m })}
handler.customPrefix = /onichan|Onichan/
handler.command = /^(onichan|Onichan?$)/
export default handler
}
let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = '../multimedia/sonidos/yamete.mp3'
conn.sendPresenceUpdate('recording', m.chat)  
conn.sendMessage(m.chat, { audio: { url: vn }, contextInfo: { "externalAdReply": { "title": `kudasai! >~<`, "body": `Yesenia UwU`, "previewType": "PHOTO", "thumbnailUrl": null,"thumbnail": imagen1, "sourceUrl": `https://fb.watch/b7pj-i5ejP/`, "showAdAttribution": true}}, seconds: '4556', ptt: true, mimetype: 'audio/mpeg', fileName: `error.mp3` }, { quoted: m })}
handler.customPrefix = /kudasai/
handler.command = /^(kuadasi?$)/
export default handler
}
let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = '../multimedia/sonidos/yutki.m4a'
conn.sendPresenceUpdate('recording', m.chat)  
conn.sendMessage(m.chat, { audio: { url: vn }, contextInfo: { "externalAdReply": { "title": `yutki >~<`, "body": `Matt_Mdz`, "previewType": "PHOTO", "thumbnailUrl": null,"thumbnail": imagen1, "sourceUrl": `https://vm.tiktok.com/ZMLjAbySN/`, "showAdAttribution": true}}, seconds: '4556', ptt: true, mimetype: 'audio/mpeg', fileName: `error.mp3` }, { quoted: m })}
handler.customPrefix = /Yutki/
handler.command = /^(Yutki?$)/
export default handler
}
let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = '../multimedia/sonidos/yokese.m4a'
conn.sendPresenceUpdate('recording', m.chat)  
conn.sendMessage(m.chat, { audio: { url: vn }, contextInfo: { "externalAdReply": { "title": `Yo que se >~<`, "body": `Yesenia u.u`, "previewType": "PHOTO", "thumbnailUrl": null,"thumbnail": imagen1, "sourceUrl": `https://youtube.com/channel/UC_Pp8pT9vbT15k5_-i6oseA`, "showAdAttribution": true}}, seconds: '4556', ptt: true, mimetype: 'audio/mpeg', fileName: `error.mp3` }, { quoted: m })}
handler.customPrefix = /Yoquese/
handler.command = /^(Yoquese?$)/
export default handler
}
let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = '../multimedia/sonidos/yajaro.m4a'
conn.sendPresenceUpdate('recording', m.chat)  
conn.sendMessage(m.chat, { audio: { url: vn }, contextInfo: { "externalAdReply": { "title": `Yajaro!!  >~<`, "body": `Matt_Mdz`, "previewType": "PHOTO", "thumbnailUrl": null,"thumbnail": imagen1, "sourceUrl": `https://youtube.com/channel/UC_Pp8pT9vbT15k5_-i6oseA`, "showAdAttribution": true}}, seconds: '4556', ptt: true, mimetype: 'audio/mpeg', fileName: `error.mp3` }, { quoted: m })}
handler.customPrefix = /Yajaro/
handler.command = /^(Yajaro?$)/
export default handler
}
let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = '../multimedia/sonidos/woau.m4a'
conn.sendPresenceUpdate('recording', m.chat)  
conn.sendMessage(m.chat, { audio: { url: vn }, contextInfo: { "externalAdReply": { "title": `Kawaii 0.0`, "body": `BrunoSobrino`, "previewType": "PHOTO", "thumbnailUrl": null,"thumbnail": imagen1, "sourceUrl": `https://youtube.com/channel/UC_Pp8pT9vbT15k5_-i6oseA`, "showAdAttribution": true}}, seconds: '4556', ptt: true, mimetype: 'audio/mpeg', fileName: `error.mp3` }, { quoted: m })}
handler.customPrefix = /woau/
handler.command = /^(woau?$)/
export default handler
}
let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = '../multimedia/sonidos/unga.m4a'
conn.sendPresenceUpdate('recording', m.chat)  
conn.sendMessage(m.chat, { audio: { url: vn }, contextInfo: { "externalAdReply": { "title": `Ungaaa >~<`, "body": `BrunoSobrino`, "previewType": "PHOTO", "thumbnailUrl": null,"thumbnail": imagen1, "sourceUrl": `https://youtube.com/channel/UC_Pp8pT9vbT15k5_-i6oseA`, "showAdAttribution": true}}, seconds: '4556', ptt: true, mimetype: 'audio/mpeg', fileName: `error.mp3` }, { quoted: m })}
handler.customPrefix = /Unga/
handler.command = /^(Unga?$)/
export default handler
}
let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = '../multimedia/sonidos/uma.m4a'
conn.sendPresenceUpdate('recording', m.chat)  
conn.sendMessage(m.chat, { audio: { url: vn }, contextInfo: { "externalAdReply": { "title": `imaaa >~<`, "body": `Matt_Mdz`, "previewType": "PHOTO", "thumbnailUrl": null,"thumbnail": imagen1, "sourceUrl": `https://youtube.com/channel/UC_Pp8pT9vbT15k5_-i6oseA`, "showAdAttribution": true}}, seconds: '4556', ptt: true, mimetype: 'audio/mpeg', fileName: `error.mp3` }, { quoted: m })}
handler.customPrefix = /uma/
handler.command = /^(Uma?$)/
export default handler
}
let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = '../multimedia/sonidos/umai.m4a'
conn.sendPresenceUpdate('recording', m.chat)  
conn.sendMessage(m.chat, { audio: { url: vn }, contextInfo: { "externalAdReply": { "title": `umaii...! >~<`, "body": `Matt_Mdz`, "previewType": "PHOTO", "thumbnailUrl": null,"thumbnail": imagen1, "sourceUrl": `https://youtube.com/channel/UC_Pp8pT9vbT15k5_-i6oseA`, "showAdAttribution": true}}, seconds: '4556', ptt: true, mimetype: 'audio/mpeg', fileName: `error.mp3` }, { quoted: m })}
handler.customPrefix = /umai/
handler.command = /^(umai?$)/
export default handler
}
let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = '../multimedia/sonidos/uchinchi.m4a'
conn.sendPresenceUpdate('recording', m.chat)  
conn.sendMessage(m.chat, { audio: { url: vn }, contextInfo: { "externalAdReply": { "title": `uchinchi >~<`, "body": `Yesenia >⁠.⁠<`, "previewType": "PHOTO", "thumbnailUrl": null,"thumbnail": imagen1, "sourceUrl": `https://youtube.com/channel/UC_Pp8pT9vbT15k5_-i6oseA`, "showAdAttribution": true}}, seconds: '4556', ptt: true, mimetype: 'audio/mpeg', fileName: `error.mp3` }, { quoted: m })}
handler.customPrefix = /uchinchi/
handler.command = /^(uchinchi?$)/
export default handler
}
let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = '../multimedia/sonidos/tuturu.m4a'
conn.sendPresenceUpdate('recording', m.chat)  
conn.sendMessage(m.chat, { audio: { url: vn }, contextInfo: { "externalAdReply": { "title": `tuturu >~<`, "body": `Yesenia`, "previewType": "PHOTO", "thumbnailUrl": null,"thumbnail": imagen1, "sourceUrl": `https://youtube.com/channel/UC_Pp8pT9vbT15k5_-i6oseA`, "showAdAttribution": true}}, seconds: '4556', ptt: true, mimetype: 'audio/mpeg', fileName: `error.mp3` }, { quoted: m })}
handler.customPrefix = /tuturu/
handler.command = /^(tuturu?$)/
export default handler
}
let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = '../multimedia/sonidos/talcho.m4a'
conn.sendPresenceUpdate('recording', m.chat)  
conn.sendMessage(m.chat, { audio: { url: vn }, contextInfo: { "externalAdReply": { "title": `talcho >~<`, "body": `Yesenia`, "previewType": "PHOTO", "thumbnailUrl": null,"thumbnail": imagen1, "sourceUrl": `https://youtube.com/channel/UC_Pp8pT9vbT15k5_-i6oseA`, "showAdAttribution": true}}, seconds: '4556', ptt: true, mimetype: 'audio/mpeg', fileName: `error.mp3` }, { quoted: m })}
handler.customPrefix = /talcho/
handler.command = /^(talcho?$)/
export default handler
}
let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = '../multimedia/sonidos/sss.m4a'
conn.sendPresenceUpdate('recording', m.chat)  
conn.sendMessage(m.chat, { audio: { url: vn }, contextInfo: { "externalAdReply": { "title": `Suprise!! >~<`, "body": `Yesenia ☺️`, "previewType": "PHOTO", "thumbnailUrl": null,"thumbnail": imagen1, "sourceUrl": `https://youtube.com/channel/UC_Pp8pT9vbT15k5_-i6oseA`, "showAdAttribution": true}}, seconds: '4556', ptt: true, mimetype: 'audio/mpeg', fileName: `error.mp3` }, { quoted: m })}
handler.customPrefix = /sss/
handler.command = /^(sss?$)/
export default handler
}
let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = '../multimedia/sonidos/ohayo.m4a'
conn.sendPresenceUpdate('recording', m.chat)  
conn.sendMessage(m.chat, { audio: { url: vn }, contextInfo: { "externalAdReply": { "title": `ohayo >~<`, "body": `Matt_Mdz`, "previewType": "PHOTO", "thumbnailUrl": null,"thumbnail": imagen1, "sourceUrl": `https://youtube.com/channel/UC_Pp8pT9vbT15k5_-i6oseA`, "showAdAttribution": true}}, seconds: '4556', ptt: true, mimetype: 'audio/mpeg', fileName: `error.mp3` }, { quoted: m })}
handler.customPrefix = /hoayou/
handler.command = /^(hoayou?$)/
export default handler
}
let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = '../multimedia/sonidos/sempai.m4a'
conn.sendPresenceUpdate('recording', m.chat)  
conn.sendMessage(m.chat, { audio: { url: vn }, contextInfo: { "externalAdReply": { "title": `Eres mi sempaii >~<`, "body": `BrunoSobrino`, "previewType": "PHOTO", "thumbnailUrl": null,"thumbnail": imagen1, "sourceUrl": `https://fb.watch/b7pj-i5ejP/`, "showAdAttribution": true}}, seconds: '4556', ptt: true, mimetype: 'audio/mpeg', fileName: `error.mp3` }, { quoted: m })}
handler.customPrefix = /sempai/
handler.command = /^(sempai?$)/
export default handler
}
let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = '../multimedia/sonidos/pupu.m4a'
conn.sendPresenceUpdate('recording', m.chat)  
conn.sendMessage(m.chat, { audio: { url: vn }, contextInfo: { "externalAdReply": { "title": `pupuu >~<`, "body": `Yesenia 😍`, "previewType": "PHOTO", "thumbnailUrl": null,"thumbnail": imagen1, "sourceUrl": `https://vm.tiktok.com/ZMLjAbySN/`, "showAdAttribution": true}}, seconds: '4556', ptt: true, mimetype: 'audio/mpeg', fileName: `error.mp3` }, { quoted: m })}
handler.customPrefix = /pupu|pouuu/
handler.command = /^(pupu|pouuu?$)/
export default handler
}
let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = '../multimedia/sonidos/pikachu.m4a'
conn.sendPresenceUpdate('recording', m.chat)  
conn.sendMessage(m.chat, { audio: { url: vn }, contextInfo: { "externalAdReply": { "title": `Pikachu ⚡`, "body": `🇷🇺🇷𝑼𝑺𝑰𝑨🇷🇺𝑴∆®𝑳𝑶𝑵`, "previewType": "PHOTO", "thumbnailUrl": null,"thumbnail": imagen1, "sourceUrl": `https://youtube.com/channel/UC_Pp8pT9vbT15k5_-i6oseA`, "showAdAttribution": true}}, seconds: '4556', ptt: true, mimetype: 'audio/mpeg', fileName: `error.mp3` }, { quoted: m })}
handler.customPrefix = /pikaa|pica|pikachu/
handler.command = /^(pikaa|pica|pikachu?$)/
export default handler
}
let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = '../multimedia/sonidos/ooaa.m4a'
conn.sendPresenceUpdate('recording', m.chat)  
conn.sendMessage(m.chat, { audio: { url: vn }, contextInfo: { "externalAdReply": { "title": `Ooaa >_<`, "body": `Nekosmic`, "previewType": "PHOTO", "thumbnailUrl": null,"thumbnail": imagen1, "sourceUrl": `https://vm.tiktok.com/ZMLjAbySN/`, "showAdAttribution": true}}, seconds: '4556', ptt: true, mimetype: 'audio/mpeg', fileName: `error.mp3` }, { quoted: m })}
handler.customPrefix = /ooaa/
handler.command = /^(ooaa?$)/
export default handler
}
let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = '../multimedia/sonidos/omg.m4a'
conn.sendPresenceUpdate('recording', m.chat)  
conn.sendMessage(m.chat, { audio: { url: vn }, contextInfo: { "externalAdReply": { "title": `OMG >~<`, "body": `Nekosmic`, "previewType": "PHOTO", "thumbnailUrl": null,"thumbnail": imagen1, "sourceUrl": `https://youtube.com/channel/UC_Pp8pT9vbT15k5_-i6oseA`, "showAdAttribution": true}}, seconds: '4556', ptt: true, mimetype: 'audio/mpeg', fileName: `error.mp3` }, { quoted: m })}
handler.customPrefix = /OMG|omg/
handler.command = /^(Omg|omg?$)/
export default handler
}
let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = '../multimedia/sonidos/omaiwa.m4a'
conn.sendPresenceUpdate('recording', m.chat)  
conn.sendMessage(m.chat, { audio: { url: vn }, contextInfo: { "externalAdReply": { "title": `Omaiwaaa >~<`, "body": `Nekosmic`, "previewType": "PHOTO", "thumbnailUrl": null,"thumbnail": imagen1, "sourceUrl": `https://youtube.com/channel/UC_Pp8pT9vbT15k5_-i6oseA`, "showAdAttribution": true}}, seconds: '4556', ptt: true, mimetype: 'audio/mpeg', fileName: `error.mp3` }, { quoted: m })}
handler.customPrefix = /omaiwa/
handler.command = /^(omaiwa?$)/
export default handler
}
let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = '../multimedia/sonidos/omaiga.m4a'
conn.sendPresenceUpdate('recording', m.chat)  
conn.sendMessage(m.chat, { audio: { url: vn }, contextInfo: { "externalAdReply": { "title": `Omaiga >~<`, "body": `Nekosmic`, "previewType": "PHOTO", "thumbnailUrl": null,"thumbnail": imagen1, "sourceUrl": `https://youtube.com/channel/UC_Pp8pT9vbT15k5_-i6oseA`, "showAdAttribution": true}}, seconds: '4556', ptt: true, mimetype: 'audio/mpeg', fileName: `error.mp3` }, { quoted: m })}
handler.customPrefix = /omaiga/
handler.command = /^(omaiga?$)/
export default handler
}
let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = '../multimedia/sonidos/ñañañi.m4a'
conn.sendPresenceUpdate('recording', m.chat)  
conn.sendMessage(m.chat, { audio: { url: vn }, contextInfo: { "externalAdReply": { "title": `ñañañi >~<`, "body": `🇷🇺🇷𝑼𝑺𝑰𝑨🇷🇺𝑴∆®𝑳𝑶𝑵`, "previewType": "PHOTO", "thumbnailUrl": null,"thumbnail": imagen1, "sourceUrl": `https://youtube.com/channel/UC_Pp8pT9vbT15k5_-i6oseA`, "showAdAttribution": true}}, seconds: '4556', ptt: true, mimetype: 'audio/mpeg', fileName: `error.mp3` }, { quoted: m })}
handler.customPrefix = /ñañañi/
handler.command = /^(ñañañi?$)/
export default handler
}
let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = '../multimedia/sonidos/ñaña.m4a'
conn.sendPresenceUpdate('recording', m.chat)  
conn.sendMessage(m.chat, { audio: { url: vn }, contextInfo: { "externalAdReply": { "title": `Ñaña ^⁠_⁠^`, "body": `Nekosmic`, "previewType": "PHOTO", "thumbnailUrl": null,"thumbnail": imagen1, "sourceUrl": `https://fb.watch/b7pj-i5ejP/`, "showAdAttribution": true}}, seconds: '4556', ptt: true, mimetype: 'audio/mpeg', fileName: `error.mp3` }, { quoted: m })}
handler.customPrefix = /ñaña/
handler.command = /^(ñaña?$)/
export default handler
}
let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = '../multimedia/sonidos/nya.m4a'
conn.sendPresenceUpdate('recording', m.chat)  
conn.sendMessage(m.chat, { audio: { url: vn }, contextInfo: { "externalAdReply": { "title": `Nya >~<`, "body": `Matt_Mdz`, "previewType": "PHOTO", "thumbnailUrl": null,"thumbnail": imagen1, "sourceUrl": `https://youtube.com/channel/UC_Pp8pT9vbT15k5_-i6oseA`, "showAdAttribution": true}}, seconds: '4556', ptt: true, mimetype: 'audio/mpeg', fileName: `error.mp3` }, { quoted: m })}
handler.customPrefix = /nya/
handler.command = /^(nya?$)/
export default handler
}
let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = '../multimedia/sonidos/niconico.m4a'
conn.sendPresenceUpdate('recording', m.chat)  
conn.sendMessage(m.chat, { audio: { url: vn }, contextInfo: { "externalAdReply": { "title": `NicoNico >~<`, "body": `Nekosmic`, "previewType": "PHOTO", "thumbnailUrl": null,"thumbnail": imagen1, "sourceUrl": `https://youtube.com/channel/UC_Pp8pT9vbT15k5_-i6oseA`, "showAdAttribution": true}}, seconds: '4556', ptt: true, mimetype: 'audio/mpeg', fileName: `error.mp3` }, { quoted: m })}
handler.customPrefix = /niconico/
handler.command = /^(Omg|omg?$)/
export default handler
}
let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = '../multimedia/sonidos/nani.m4a'
conn.sendPresenceUpdate('recording', m.chat)  
conn.sendMessage(m.chat, { audio: { url: vn }, contextInfo: { "externalAdReply": { "title": `Nanii >~<`, "body": `Yesenia ⚡☺️`, "previewType": "PHOTO", "thumbnailUrl": null,"thumbnail": imagen1, "sourceUrl": `https://youtube.com/channel/UC_Pp8pT9vbT15k5_-i6oseA`, "showAdAttribution": true}}, seconds: '4556', ptt: true, mimetype: 'audio/mpeg', fileName: `error.mp3` }, { quoted: m })}
handler.customPrefix = /nani/
handler.command = /^(nani?$)/
export default handler
}
let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = '../multimedia/sonidos/motomoto.m4a'
conn.sendPresenceUpdate('recording', m.chat)  
conn.sendMessage(m.chat, { audio: { url: vn }, contextInfo: { "externalAdReply": { "title": `Motomoto >~<`, "body": `Anegelito🧐`, "previewType": "PHOTO", "thumbnailUrl": null,"thumbnail": imagen1, "sourceUrl": `https://youtube.com/channel/UC_Pp8pT9vbT15k5_-i6oseA`, "showAdAttribution": true}}, seconds: '4556', ptt: true, mimetype: 'audio/mpeg', fileName: `error.mp3` }, { quoted: m })}
handler.customPrefix = /motomoto/
handler.command = /^(motomoto?$)/
export default handler
}
let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = '../multimedia/sonidos/mma.m4a'
conn.sendPresenceUpdate('recording', m.chat)  
conn.sendMessage(m.chat, { audio: { url: vn }, contextInfo: { "externalAdReply": { "title": `Mmma >~<`, "body": `Eclipse⚡`, "previewType": "PHOTO", "thumbnailUrl": null,"thumbnail": imagen1, "sourceUrl": `https://youtube.com/channel/UC_Pp8pT9vbT15k5_-i6oseA`, "showAdAttribution": true}}, seconds: '4556', ptt: true, mimetype: 'audio/mpeg', fileName: `error.mp3` }, { quoted: m })}
handler.customPrefix = /mma/
handler.command = /^(mma?$)/
export default handler
}
let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = '../multimedia/sonidos/mitamita.m4a'
conn.sendPresenceUpdate('recording', m.chat)  
conn.sendMessage(m.chat, { audio: { url: vn }, contextInfo: { "externalAdReply": { "title": `MitaMita >~<`, "body": `Meliodas⚡`, "previewType": "PHOTO", "thumbnailUrl": null,"thumbnail": imagen1, "sourceUrl": `https://youtube.com/channel/UC_Pp8pT9vbT15k5_-i6oseA`, "showAdAttribution": true}}, seconds: '4556', ptt: true, mimetype: 'audio/mpeg', fileName: `error.mp3` }, { quoted: m })}
handler.customPrefix = /mitamita/
handler.command = /^(mitamita?$)/
export default handler
}
let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = '../multimedia/sonidos/kobarashi.m4a'
conn.sendPresenceUpdate('recording', m.chat)  
conn.sendMessage(m.chat, { audio: { url: vn }, contextInfo: { "externalAdReply": { "title": `Kobarashi >~<`, "body": `Quantum-Bot`, "previewType": "PHOTO", "thumbnailUrl": null,"thumbnail": imagen1, "sourceUrl": `https://youtube.com/channel/UC_Pp8pT9vbT15k5_-i6oseA`, "showAdAttribution": true}}, seconds: '4556', ptt: true, mimetype: 'audio/mpeg', fileName: `error.mp3` }, { quoted: m })}
handler.customPrefix = /kobarashi/
handler.command = /^(kobarashi?$)/
export default handler
}
let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = '../multimedia/sonidos/kataka.m4a'
conn.sendPresenceUpdate('recording', m.chat)  
conn.sendMessage(m.chat, { audio: { url: vn }, contextInfo: { "externalAdReply": { "title": `Kataka >~<`, "body": `Eres lindo UwU`, "previewType": "PHOTO", "thumbnailUrl": null,"thumbnail": imagen1, "sourceUrl": `https://youtube.com/channel/UC_Pp8pT9vbT15k5_-i6oseA`, "showAdAttribution": true}}, seconds: '4556', ptt: true, mimetype: 'audio/mpeg', fileName: `error.mp3` }, { quoted: m })}
handler.customPrefix = /kataka/
handler.command = /^(kataka?$)/
export default handler
}
let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = '../multimedia/sonidos/jai.m4a'
conn.sendPresenceUpdate('recording', m.chat)  
conn.sendMessage(m.chat, { audio: { url: vn }, contextInfo: { "externalAdReply": { "title": `Jai Masta >~<`, "body": `Nekosmic`, "previewType": "PHOTO", "thumbnailUrl": null,"thumbnail": imagen1, "sourceUrl": `https://youtube.com/channel/UC_Pp8pT9vbT15k5_-i6oseA`, "showAdAttribution": true}}, seconds: '4556', ptt: true, mimetype: 'audio/mpeg', fileName: `error.mp3` }, { quoted: m })}
handler.customPrefix = /jai/
handler.command = /^(jai?$)/
export default handler
}
let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = '../multimedia/sonidos/hentai.m4a'
conn.sendPresenceUpdate('recording', m.chat)  
conn.sendMessage(m.chat, { audio: { url: vn }, contextInfo: { "externalAdReply": { "title": `jentai >~<`, "body": `Eres precios@😍`, "previewType": "PHOTO", "thumbnailUrl": null,"thumbnail": imagen1, "sourceUrl": `https://youtube.com/channel/UC_Pp8pT9vbT15k5_-i6oseA`, "showAdAttribution": true}}, seconds: '4556', ptt: true, mimetype: 'audio/mpeg', fileName: `error.mp3` }, { quoted: m })}
handler.customPrefix = /jentai/
handler.command = /^(jentai?$)/
export default handler
}
let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = '../multimedia/sonidos/asen.m4a'
conn.sendPresenceUpdate('recording', m.chat)  
conn.sendMessage(m.chat, { audio: { url: vn }, contextInfo: { "externalAdReply": { "title": `Asenn >~<`, "body": `BrunoSobrino ☺️`, "previewType": "PHOTO", "thumbnailUrl": null,"thumbnail": imagen1, "sourceUrl": `https://youtube.com/channel/UC_Pp8pT9vbT15k5_-i6oseA`, "showAdAttribution": true}}, seconds: '4556', ptt: true, mimetype: 'audio/mpeg', fileName: `error.mp3` }, { quoted: m })}
handler.customPrefix = /asennn/
handler.command = /^(asennn?$)/
export default handler
}
let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = '../multimedia/sonidos/anana.m4a'
conn.sendPresenceUpdate('recording', m.chat)  
conn.sendMessage(m.chat, { audio: { url: vn }, contextInfo: { "externalAdReply": { "title": `Anana >~<`, "body": `Hola sempai`, "previewType": "PHOTO", "thumbnailUrl": null,"thumbnail": imagen1, "sourceUrl": `https://youtube.com/channel/UC_Pp8pT9vbT15k5_-i6oseA`, "showAdAttribution": true}}, seconds: '4556', ptt: true, mimetype: 'audio/mpeg', fileName: `error.mp3` }, { quoted: m })}
handler.customPrefix = /anana/
handler.command = /^(anana?$)/
export default handler
}
let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = '../multimedia/sonidos/papus.m4a'
conn.sendPresenceUpdate('recording', m.chat)  
conn.sendMessage(m.chat, { audio: { url: vn }, contextInfo: { "externalAdReply": { "title": `Papus >~<`, "body": `Hola papu`, "previewType": "PHOTO", "thumbnailUrl": null,"thumbnail": imagen1, "sourceUrl": `https://youtube.com/channel/UC_Pp8pT9vbT15k5_-i6oseA`, "showAdAttribution": true}}, seconds: '4556', ptt: true, mimetype: 'audio/mpeg', fileName: `error.mp3` }, { quoted: m })}
handler.customPrefix = /papus/
handler.command = /^(papus?$)/
export default handler
}
let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = '../multimedia/sonidos/aaa.m4a'
conn.sendPresenceUpdate('recording', m.chat)  
conn.sendMessage(m.chat, { audio: { url: vn }, contextInfo: { "externalAdReply": { "title": `ª >~<`, "body": `Nekosmic`, "previewType": "PHOTO", "thumbnailUrl": null,"thumbnail": imagen1, "sourceUrl": `https://youtube.com/channel/UC_Pp8pT9vbT15k5_-i6oseA`, "showAdAttribution": true}}, seconds: '4556', ptt: true, mimetype: 'audio/mpeg', fileName: `error.mp3` }, { quoted: m })}
handler.customPrefix = /ª/
handler.command = /^(ª?$)/
export default handler
}
let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = '../multimedia/sonidos/araara.mp3'
conn.sendPresenceUpdate('recording', m.chat)  
conn.sendMessage(m.chat, { audio: { url: vn }, contextInfo: { "externalAdReply": { "title": `Ara Ara >~<`, "body": `Buenas ☺️`, "previewType": "PHOTO", "thumbnailUrl": null,"thumbnail": imagen1, "sourceUrl": `https://youtube.com/channel/UC_Pp8pT9vbT15k5_-i6oseA`, "showAdAttribution": true}}, seconds: '4556', ptt: true, mimetype: 'audio/mpeg', fileName: `error.mp3` }, { quoted: m })}
handler.customPrefix = /ara ara/
handler.command = /^(ara ara?$)/
export default handler
}
let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = '../multimedia/sonidos/ya.mp3'
conn.sendPresenceUpdate('recording', m.chat)  
conn.sendMessage(m.chat, { audio: { url: vn }, contextInfo: { "externalAdReply": { "title": `Ya yamete kudaii!! >~<`, "body": `Gracias por usar mi bot u.u`, "previewType": "PHOTO", "thumbnailUrl": null,"thumbnail": imagen1, "sourceUrl": `https://youtube.com/channel/UC_Pp8pT9vbT15k5_-i6oseA`, "showAdAttribution": true}}, seconds: '4556', ptt: true, mimetype: 'audio/mpeg', fileName: `error.mp3` }, { quoted: m })}
handler.customPrefix = /yamete/
handler.command = /^(yamete?$)/
export default handler
}
let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = '../multimedia/sonidos/Bdia.m4a'
conn.sendPresenceUpdate('recording', m.chat)  
conn.sendMessage(m.chat, { audio: { url: vn }, contextInfo: { "externalAdReply": { "title": `Buen dia >~<`, "body": `Nekosmic`, "previewType": "PHOTO", "thumbnailUrl": null,"thumbnail": imagen1, "sourceUrl": `https://youtube.com/channel/UC_Pp8pT9vbT15k5_-i6oseA`, "showAdAttribution": true}}, seconds: '4556', ptt: true, mimetype: 'audio/mpeg', fileName: `error.mp3` }, { quoted: m })}
handler.customPrefix = /buenos dias/
handler.command = /^(buenos dias?$)/
export default handler
}
let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = '../multimedia/sonidos/si_sp.m4a'
conn.sendPresenceUpdate('recording', m.chat)  
conn.sendMessage(m.chat, { audio: { url: vn }, contextInfo: { "externalAdReply": { "title": `si 😎👍`, "body": `BrunoSobrimo`, "previewType": "PHOTO", "thumbnailUrl": null,"thumbnail": imagen1, "sourceUrl": `https://youtube.com/channel/UC_Pp8pT9vbT15k5_-i6oseA`, "showAdAttribution": true}}, seconds: '4556', ptt: true, mimetype: 'audio/mpeg', fileName: `error.mp3` }, { quoted: m })}
handler.customPrefix = /si 👍|si/
handler.command = /^(si 👍|si?$)/
export default handler
}
let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = '../multimedia/sonidos/turrbio.m4a'
conn.sendPresenceUpdate('recording', m.chat)  
conn.sendMessage(m.chat, { audio: { url: vn }, contextInfo: { "externalAdReply": { "title": `No returbio >~<`, "body": `Oreki Houtarou`, "previewType": "PHOTO", "thumbnailUrl": null,"thumbnail": imagen1, "sourceUrl": `https://youtube.com/channel/UC_Pp8pT9vbT15k5_-i6oseA`, "showAdAttribution": true}}, seconds: '4556', ptt: true, mimetype: 'audio/mpeg', fileName: `error.mp3` }, { quoted: m })}
handler.customPrefix = /no returbio/
handler.command = /^(no returbio?$)/
export default handler
}
let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = '../multimedia/sonidos/ohhh_xd.m4a'
conn.sendPresenceUpdate('recording', m.chat)  
conn.sendMessage(m.chat, { audio: { url: vn }, contextInfo: { "externalAdReply": { "title": `hoo mevengoo 🥵`, "body": `Faraon love shady`, "previewType": "PHOTO", "thumbnailUrl": null,"thumbnail": imagen1, "sourceUrl": `https://youtube.com/channel/UC_Pp8pT9vbT15k5_-i6oseA`, "showAdAttribution": true}}, seconds: '4556', ptt: true, mimetype: 'audio/mpeg', fileName: `error.mp3` }, { quoted: m })}
handler.customPrefix = /oh me vengo/
handler.command = /^(oh me vengo?$)/
export default handler
}
let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = '../multimedia/sonidos/con_flores.m4a'
conn.sendPresenceUpdate('recording', m.chat)  
conn.sendMessage(m.chat, { audio: { url: vn }, contextInfo: { "externalAdReply": { "title": `con flores 🌹🌺`, "body": `Nekosmic`, "previewType": "PHOTO", "thumbnailUrl": null,"thumbnail": imagen1, "sourceUrl": `https://youtube.com/channel/UC_Pp8pT9vbT15k5_-i6oseA`, "showAdAttribution": true}}, seconds: '4556', ptt: true, mimetype: 'audio/mpeg', fileName: `error.mp3` }, { quoted: m })}
handler.customPrefix = /con flores/
handler.command = /^(con flores?$)/
export default handler
}
let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = '../multimedia/sonidos/no_papu.m4a'
conn.sendPresenceUpdate('recording', m.chat)  
conn.sendMessage(m.chat, { audio: { url: vn }, contextInfo: { "externalAdReply": { "title": `no digas eso papu 😭`, "body": `Papu eres hermoso`, "previewType": "PHOTO", "thumbnailUrl": null,"thumbnail": imagen1, "sourceUrl": `https://youtube.com/channel/UC_Pp8pT9vbT15k5_-i6oseA`, "showAdAttribution": true}}, seconds: '4556', ptt: true, mimetype: 'audio/mpeg', fileName: `error.mp3` }, { quoted: m })}
handler.customPrefix = /no digas eso papu/
handler.command = /^(no digas eso papu?$)/
export default handler
}
let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = '../multimedia/sonidos/no-chupala.m4a'
conn.sendPresenceUpdate('recording', m.chat)  
conn.sendMessage(m.chat, { audio: { url: vn }, contextInfo: { "externalAdReply": { "title": `no chupala 🥵`, "body": `BrunoSobrino`, "previewType": "PHOTO", "thumbnailUrl": null,"thumbnail": imagen1, "sourceUrl": `https://youtube.com/channel/UC_Pp8pT9vbT15k5_-i6oseA`, "showAdAttribution": true}}, seconds: '4556', ptt: true, mimetype: 'audio/mpeg', fileName: `error.mp3` }, { quoted: m })}
handler.customPrefix = /no chupala/
handler.command = /^(no chupala?$)/
export default handler
}
let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = '../multimedia/sonidos/nyanpasu.m4a'
conn.sendPresenceUpdate('recording', m.chat)  
conn.sendMessage(m.chat, { audio: { url: vn }, contextInfo: { "externalAdReply": { "title": `Nyanpasu >~<`, "body": `Kaneki`, "previewType": "PHOTO", "thumbnailUrl": null,"thumbnail": imagen1, "sourceUrl": `https://youtube.com/channel/UC_Pp8pT9vbT15k5_-i6oseA`, "showAdAttribution": true}}, seconds: '4556', ptt: true, mimetype: 'audio/mpeg', fileName: `error.mp3` }, { quoted: m })}
handler.customPrefix = /nyanpasu/
handler.command = /^(nyanpasu?$)/
export default handler
}
