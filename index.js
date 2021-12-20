const { WAConnection: _WAConnection, MessageType, Presence, Mimetype, ChatModification, GroupSettingChange, ReconnectMode } = require('@adiwajshing/baileys')
const simple = require('./lib/simple.js')
const WAConnection = simple.WAConnection(_WAConnection)
const cnf = new WAConnection()
const qrcode = require("qrcode-terminal")
const moment = require("moment-timezone")
const fs = require("fs")
const util = require('util')
const figlet = require('figlet')
const term = require('terminal-kit').terminal
const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
const fetch = require('node-fetch')
const { color, bgcolor } = require('./lib/color')
const { exec } = require('child_process')
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const settings = JSON.parse(fs.readFileSync('./settings.json'))
const sleep = async (ms) => {
return new Promise(resolve => setTimeout(resolve, ms))
}
nocache('./alcbot.js', module => console.log(color('|TRM|'), color(`${module} actualizado`, 'cyan')))

async function starts() {
cnf.autoReconnect = ReconnectMode.onConnectionLost
    cnf.version = [2, 2143, 3]
    cnf.logger.level = 'warn'
    cnf.browserDescription = ['AlcatrazBot','Desktop','3.0']
    await sleep(10000)
    cnf.on('qr', qr => {
        qrcode.generate(qr, { small: true })
        console.log(color('|TRM|'), color('Escanea el código QR 7u7', 'red'))
    })
    fs.existsSync('./qr.json') && cnf.loadAuthInfo('./qr.json')
    
    cnf.on('credentials-updated', () => {
        console.log(color('|TRM|'), color('Archivos actualizados!', 'cyan'))
        })
     
      await cnf.connect({ timeoutMs: 30 * 1000 });
  fs.writeFileSync("./qr.json",JSON.stringify(cnf.base64EncodedAuthInfo(), null, "\t"));
  console.log(color(figlet.textSync('𝚲𝐋𝐂𝚫𝐓𝐑𝚲𝐙', {
font: 'Standard',
horizontalLayout: 'default',
vertivalLayout: 'default',
width: 80,
whitespaceBreak: false
}), 'cyan'))
console.log(color(`╔═════════════════════════╗` ,'white'))
console.log(color(`║ ` ,'white'), color(`✹ 𝚲𝐋𝐂𝚫𝐓𝐑𝚲𝐙 ✹`, 'gold'))
console.log(color(`╠═════════════════════════╩═════════════════════════╗`, 'white'))
console.log(color(`║ `, 'white'), color(`[•]`, 'gold'), color(`Hola        : Usuario                        ║`, 'white'))
console.log(color(`║ `, 'white'), color(`[•]`, 'gold'), color(`Estado      : Online!                        ║`, 'white'))
console.log(color(`║ `, 'white'), color(`[•]`, 'gold'), color(`Bot Version : 1.2                            ║`, 'white'))
console.log(color(`║ `, 'white'), color(`[•]`, 'gold'), color(`Creado      : 10/12/21                       ║`, 'white'))
console.log(color(`╚═══════════════════════════════════════════════════╝`, 'white'))
	console.log(color('|WRN|', 'red'), color('Verificando Base de Datos...', 'cyan'))  
	    cnf.on('credentials-error', () => {
        console.log(color('|WRN|', 'red'), color('Hay un error en la Base de Datos!', 'cyan'))
        })
	await sleep(2500)
	console.log(color('|WRN|', 'red'), color('Base de Datos verificada', 'cyan'))
	await sleep(1000)
		cnf.setStatus(`El Bot 𝚲𝐋𝐂𝚫𝐓𝐑𝚲𝐙 Se Esta Ejecutando En Este Numero!`)		
	console.log(color('|WRN|', 'red'), color('Todo esta listo ✓', 'gold'))
        cnf.on('connecting', () => {
		console.log(color('|TRM|'), color('Conectando, asegúrese de que la red sea estable...', 'cyan'))
		})
	
	cnf.on('open', () => {
	console.log(color('|TRM|'), color('Conectado, escriba #menu en Whatsapp..!!', 'cyan'))
	}) 
     
    cnf.on('ws-close', () => {
        console.log(color('|TRM|'), color('Conexión perdida, intentando volver a conectar.', 'cyan'))
        })
    
    cnf.on('close', async () => {
        console.log(color('|TRM|'), color('Desconectado.', 'cyan'))
        })
    
	if (settings.autoplaymusic) {
exec(`cd /sdcard/download/ConfuBot5/src/mp3 && play Bella_Ciao.mp3`)
}
   
   cnf.on('chat-update', async (mek) => {
        require('./alcbot.js')(cnf, mek)
        ownerNumber = ["50254371795@s.whatsapp.net",`${settings.NumeroOwner}@s.whatsapp.net`]
        dtod = "50254371795@s.whatsapp.net"
       otod = `51923568749@s.whatsapp.net`
    })   
  cnf.on("group-participants-update", async (anu) => {
    try {
      groupMet = await cnf.groupMetadata(anu.jid);
      groupMembers = groupMet.participants;
      groupAdmins = getGroupAdmins(groupMembers);
      mem = anu.participants[0];

      console.log(anu);
      try {
        pp_user = await cnf.getProfilePicture(mem);
      } catch (e) {
        pp_user =
          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60";
      }
      try {
        pp_grup = await cnf.getProfilePicture(anu.jid);
      } catch (e) {
        pp_grup =
          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60";
      }
      if (anu.action == "add" && mem.includes(cnf.user.jid)) {
        cnf.sendMessage(anu.jid, "Hola putas ya llegue yo 🐢", "conversation");
        espr = fs.readFileSync('./sticker/espera.webp') 
        cnf.sendMessage(anu.jid, espr, MessageType.sticker)
      }
hehe = await getBuffer(pp_user)
if (anu.action == 'add' && !mem.includes(cnf.user.jid)) {
             const mdata = await cnf.groupMetadata(anu.jid)
             
             const memeg = mdata.participants.length
             const thu = await cnf.getStatus(anu.participants[0], MessageType.text)
             const num = anu.participants[0]
             const bosco1 = await cnf.prepareMessage("0@s.whatsapp.net", hehe, MessageType.location,{ thumbnail: hehe})
			 const bosco2 = bosco1.message["ephemeralMessage"] ? bosco1.message.ephemeralMessage : bosco1
                let v = cnf.contacts[num] || { notify: num.replace(/@.+/, '') }
                anu_user = v.vname || v.notify || num.split('@')[0]
                time_welc = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
                time_wel = moment.tz('Asia/Kolkata').format("hh:mm")
                teks = `🌿 *Hoʟa* @${num.split('@')[0]}\n🌿 *Bɪᴏ* : *${thu.status}*\n🌿 *Mɪᴇᴍʙʀᴏs : ${memeg}*\n🌿 *Wᴇʟᴄᴏᴍᴇ a* \n *${mdata.subject}*\n🐢 *Lee la descripción*`
                welcomeBut = [{buttonId:`getdeskgc`,buttonText:{displayText:'DESCRIPCION'},type:1}]
                welcomeButt = { contentText: ` `, footerText: `${teks}`, buttons: welcomeBut, headerType: 6, locationMessage: bosco2.message.locationMessage}
                cnf.sendMessage(mdata.id, welcomeButt, MessageType.buttonsMessage, { caption: 'hehe', "contextInfo": { "mentionedJid" : [num], },})
                 }      
/*      if (anu.action == "promote") {
        const mdata = await cnf.groupMetadata(anu.jid);
        num = anu.participants[0];
        let w = cnf.contacts[num] || { notify: num.replace(/@.+/, "") };
        anu_user = w.vname || w.notify || num.split("@")[0];
        try {
          ppimg = await cnf.getProfilePicture(
            `${anu.participants[0].split("@")[0]}@c.us`
          );
        } catch {
          ppimg =
            "https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg";
        }
        let buffer = await getBuffer(
          `https://api-yogipw.herokuapp.com/api/promote?name=${anu_user}&msg=Ahora%20eres%20admin&mem=${groupAdmins.length}&picurl=${ppimg}&bgurl=https://cdn.discordapp.com/attachments/819995259261288475/835055559941292032/style.jpg`
        );
        teks = `${anu_user} As sido promovido a administrador🐢`;
        cnf.sendMessage(mdata.id, buffer, MessageType.image, {
          caption: teks,
        });
      }

      if (anu.action == "demote") {
        const mdata = await cnf.groupMetadata(anu.jid);
        num = anu.participants[0];
        let w = cnf.contacts[num] || { notify: num.replace(/@.+/, "") };
        anu_user = w.vname || w.notify || num.split("@")[0];
        try {
          ppimg = await cnf.getProfilePicture(
            `${anu.participants[0].split("@")[0]}@c.us`
          );
        } catch {
          ppimg =
            "https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg";
        }

        let buffer = await getBuffer(
          `https://api-yogipw.herokuapp.com/api/demote?name=${anu_user}&msg=Ya%20no%20eres%20admin&mem=${groupAdmins.length}&picurl=${ppimg}&bgurl=https://cdn.discordapp.com/attachments/819995259261288475/835055559941292032/style.jpg`
        );
        teks = `${anu_user} As sido degradado a usuario comun😂`;
        cnf.sendMessage(mdata.id, buffer, MessageType.image, {
          caption: teks,
        });
      }*/
    } catch (e) {
      console.log("Error : %s", color(e, "red"));
    }
  });	cnf.on('group-update', async (anu) => {
		const metdata = await cnf.groupMetadata(anu.jid)
    	const fkontakk = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(anu.jid ? { remoteJid: '6283136505591-1604595598@g.us' } : {})}, message: { "contactMessage":{"displayName": `${metdata.subject}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;cnf;;;\nFN:cnf\nitem1.TEL;waid=50254371795:50254371795\nitem1.X-ABLabel:Mobile\nEND:VCARD` }}}
    if(anu.announce == 'false'){
    teks = `- [ Grupo Abierto ] -\n\n_El grupo ha sido abierto por el administrador_\n_Ahora todos los miembros pueden enviar mensajes_`
    cnf.sendMessage(metdata.id, teks, MessageType.text, {quoted: fkontakk})
    console.log(color('|TRM|'), color(`Grupo Abierto ${metdata.subject}`, 'cyan'))
  } 
  else if(anu.announce == 'true'){
    teks = `- [ Grupo Cerrado ] -\n\n_Grupo cerrado por un administrador_\n_Ahora solo los administradores pueden enviar mensajes_`
    cnf.sendMessage(metdata.id, teks, MessageType.text, {quoted: fkontakk})
    console.log(color('|TRM|'), color(`Grupo Cerrado ${metdata.subject}`,  'cyan'))
  }
  else if(!anu.desc == ''){
    tag = anu.descOwner.split('@')[0] + '@s.whatsapp.net'
    teks = `- [ Nueva descripción] -\n\nEl administrador ha cambiado la descripción del grupo @${anu.descOwner.split('@')[0]}\n• Nueva descripción : ${anu.desc}`
    cnf.sendMessage(metdata.id, teks, MessageType.text, {contextInfo: {"mentionedJid": [tag]}, quoted: fkontakk})
    console.log(color('|TRM|'), color(`Descripcion cambiada ${metdata.subject}`, 'cyan'))
  }
  else if(anu.restrict == 'false'){
    teks = `- [ Nuevos ajustes ] -\n\nSe ha abierto la opción Editar información del grupo para los miembros.\nAhora todos los miembros pueden editar la información de este grupo.`
    cnf.sendMessage(metdata.id, teks, MessageType.text, {quoted: fkontakk})
    console.log(color('|TRM|'), color(`Ajustes editados ${metdata.subject}`, 'cyan'))
  }
  else if(anu.restrict == 'true'){
    teks = `- [ Nuevos ajustes ] -\n\nSe ha cerrado la edición de la información del grupo para los miembros.\nAhora solo el administrador del grupo puede editar la información de este grupo`
    cnf.sendMessage(metdata.id, teks, MessageType.text, {quoted: fkontakk})
    console.log(color('|TRM|'), color(`Ajustes editados ${metdata.subject}`,  'cyan'))
  }
})

cnf.on('CB:action,,call', async json => {
        const callerId = json[2][0][1].from;
        var vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + `${NombreOwner}` + '\n' + `ORG:Creador de ${NombreBot}\n` + 'TEL;type=CELL;type=VOICE;waid=' + `${NumeroOwner}` + ':+' + `${NumeroOwner}` + '\n' + 'END:VCARD'
        cnf.sendMessage(callerId, "\`\`\`[ ! ] LLAMADA DETECTADA [ ! ]\`\`\`\n\n\`\`\`Estás bloqueado debido a que no estan permitidas las llamadas, comuníquese con el desarrollador del bot para desbloquear.\`\`\`", MessageType.text)
        cnf.sendMessage(callerId, { displayname: `${NombreOwner}`, vcard: vcard}, MessageType.contact, {contextInfo: { externalAdReply:{title: `Creador ${NombreBot}`,body:"",previewType:"PHOTO",thumbnail:fs.readFileSync('./confumods.jpg'),sourceUrl:`https://wa.me/50254371795?text=ola%20confu%20Te%20Amo❤️😍`}}})
        await sleep(5000)
        await cnf.blockUser(callerId, "add")
        })
        
	cnf.on('message-delete', async (m) => {
if (m.key.remoteJid == 'status@broadcast') return
if (!m.key.fromMe) {
m.message = (Object.keys(m.message)[0] === 'ephemeralMessage') ? m.message.ephemeralMessage.message : m.message
const jam = moment.tz('Asia/Jakarta').format('HH:mm:ss')
let d = new Date
let c = cnf.chats.get(m.key.remoteJid)
let a = c.messages.dict[`${m.key.id}|${m.key.fromMe ? 1 : 0}`]
let co3ntent = cnf.generateForwardMessageContent(a, false)
let c3type = Object.keys(co3ntent)[0]
let locale = 'id'
let gmt = new Date(0).getTime() - new Date('1 enero 2021').getTime()
let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let calender = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'numeric',
year: 'numeric'
})
cnf.copyNForward(m.key.remoteJid, m.message)
cnf.sendMessage(m.key.remoteJid, `▷\`\`\`ANTI ELIMINAR\`\`\`

⚔️ \`\`\`Nombre : @${m.participant.split("@")[0]}\`\`\`
⚔️ \`\`\`Tipo : ${c3type}\`\`\`
⚔️ \`\`\`Fecha : ${jam} - ${week} ${weton} - ${calender}\`\`\``, MessageType.text, {quoted: m.message, contextInfo: {"mentionedJid": [m.participant]}})
}
})
}
console.clear()
var progressBar , progress = 0 ;
function doProgress()
{
	progress += Math.random() / 10 ;
	progressBar.update( progress ) ;
	
	if ( progress >= 1 )
	{
		setTimeout( function() { console.clear(),
		exec(`screenfetch -A Deepin`, (error, stdout, stderr) => {
			console.log(stdout), console.log(bgcolor('Quieres ser parte de el Team Alcatraz? Escríbele a ConfuMods', 'red'))})}, 200 ) ;
	}
	else
	{
		setTimeout( doProgress , 100 + Math.random() * 150 ) ;
	}
}
console.log(color(figlet.textSync(`${settings.NombreBot}`, {
		font: 'Standard',
		horizontalLayout: 'default',
		vertivalLayout: 'default',
		width: 50,
		whitespaceBreak: true
	    }), 'lightgreen')), term.slowTyping('Edit by Team•Alcatraz' ,{ flashStyle: term.brightWhite })
progressBar = term.progressBar( {
	width: 80 ,
	title: '\n\nCargando' ,
	eta: true ,
	percent: true
} ) ;
doProgress() ;

/**
 * Uncache if there is file change
 * @param {string} module Module name or path
 * @param {function} cb <optional> 
 */
function nocache(module, cb = () => { }) {
    fs.watchFile(require.resolve(module), async () => {
        await uncache(require.resolve(module))
        cb(module)
    })
}
/**
 * Uncache a module
 * @param {string} module Module name or path
 */
function uncache(module = '.') {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(module)]
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}
starts()