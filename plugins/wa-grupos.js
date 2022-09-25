let media = '.../logo.jpg'
let handler = async (m, { conn, command }) => conn.sendButton(m.chat, `
Holi amigo o amiga te invito a mis grupos ofc
╭━━━━━━━━━━━━━━━━━━━━━━━━❐
┃ Grupos oficiales de NekosmicBot-MD
╰━━━━━━━━━━━━━━━━━━━━━━━━━❐
╭━━━━━━━━━━━━━━━━━━━━━━━━━━━❐
│1️⃣https://chat.whatsapp.com/KwAVjLAkgCIBEzTdY3RwIg
│
│2️⃣https://chat.whatsapp.com/KkLE1VmVvP5L29k7qVaZ4t
╰━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━❐
╭━━━━━━━━━━━━━━━━━━━━━━━━❐
┃ GRUPOS DE APOYO PARA USUARIOS
╰━━━━━━━━━━━━━━━━━━━━━━━━━━━❐
╭━━━━━━━━━━━━━━━━━━━━━━━━━━━━❐
┃ NO HAY A UN 
╰━━━━━━━━━━━━━━━━━━━━━━━━━━━━━❐
`.trim(), wm, media, [['Menu del bot ', '.menu']], m)
handler.command = /^wagrupos$/i
export default handler
	
