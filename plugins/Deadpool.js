coded by shahid-devil
LUTTAPI
copy അടിക്കുമ്പോൾ പേര് മാറ്റരുത് ഒരുപാട് ദിവസത്തെ കഷ്ടപ്പാട് ആണ്
Contact us :
https://wa.me//916282185054
*

const Asena = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Config = require('../config');
const ll ="എന്തെങ്കിലും type ആക് 🙇‍♂️"
const Ln = "▷🤖some textmakers◁ "
const code = "╭────────────────╮\n   ❏ TEXT MAKER ❏ \n╰────────────────╯\nCommands\n╭────────────────\n│ 🌺 love\n│ 🌺 magma\n│ 🌺 butterfly\n│ 🌺 love\n│ 🌺 grassmsg\n│ 🌺 lovemsg\n│ 🌺 google\n│ 🌺 shadow\n│ 🌺 retrolol\n│ 🌺 harrypotter\n│ 🌺 battlefield\n│ 🌺 wanted\n│ 🌺 snake\n│ 🌺 cobra\n│ 🌺 pikachu\n│ 🌺 eagle\n│ 🌺 shark\n│ 🌺 panther\n│ 🌺 wolf\n│ 🌺 2pubg\n│ 🌺 pirates\n│ 🌺 reaper\n│ 🌺 purple\n│ 🌺 retro\n│ 🌺 3dstyle\n│ 🌺 leaf\n│ 🌺 messi\n│ 🌺 3dtext\n│ 🌺 cr7\n│ 🌺 noel\n│ 🌺 papper\n│ 🌺 comic\n│ 🌺 2comic\n│ 🌺 3comic\n│ 🌺 4comic\n│ 🌺 metal\n│ 🌺 starmetal\n│ 🌺 3druby\n│ 🌺 gflare\n│ 🌺 heated\n│ 🌺 gplay\n│ 🌺 splay\n│ 🌺 cat\n╰────────────────\nExample\n╭───────────────╮\n🍁 .cat luttapi\n🍁 .heated luttapi;bot\n╰───────────────╯"

if (Config.WORKTYPE == 'public') {
    
      Asena.addCommand({pattern: 'shazz', fromMe: false, desc: Ln,}, (async (message, match) => {

    await message.client.sendMessage(
  
      message.jid,code, MessageType.text, {quoted: message.data});
  
  }));

Asena.addCommand({ pattern: 'wanted ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://photooxy.com/manga-and-anime/make-one-piece-wanted-poster-online-129.html`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {quoted: message.data , mimetype: Mimetype.jpg, caption: Config.AFN})

    }));

Asena.addCommand({ pattern: 'google ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://zenzapi.xyz/api/photooxy/googlesuges?text=ZENZ&text2=API&text3=ZENZAPI&apikey=b91fbfa191`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {quoted: message.data , mimetype: Mimetype.jpg, caption: Config.AFN})

    }));

Asena.addCommand({ pattern: 'battlefield ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://zenzapi.xyz/api/photooxy/battlefield?text=ZENZ&text2=API&apikey=b91fbfa191`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {quoted: message.data , mimetype: Mimetype.jpg, caption: Config.AFN})

    }));

Asena.addCommand({ pattern: 'harrypotter ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://zenzapi.xyz/api/photooxy/harrypotter?text=ZENZAPI&apikey=b91fbfa191`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {quoted: message.data , mimetype: Mimetype.jpg, caption: Config.AFN}) 

    }));

Asena.addCommand({ pattern: 'retrolol ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://zenzapi.xyz/api/photooxy/retrolol?text=ZENZAPI&apikey=b91fbfa191`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {quoted: message.data , mimetype: Mimetype.jpg, caption: Config.AFN})

    }));

Asena.addCommand({ pattern: 'shadow ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://zenzapi.xyz/api/photooxy/shadow?text=ZENZAPI&apikey=b91fbfa191`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {quoted: message.data , mimetype: Mimetype.jpg, caption: Config.AFN})

    }));

Asena.addCommand({ pattern: 'lovemsg ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://zenzapi.xyz/api/photooxy/lovemsg?text=ZENZAPI&apikey=b91fbfa191`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {quoted: message.data , mimetype: Mimetype.jpg, caption: Config.AFN})

    }));

Asena.addCommand({ pattern: 'grassmsg ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://zenzapi.xyz/api/photooxy/grassmsg?text=ZENZAPI&apikey=b91fbfa191`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {quoted: message.data , mimetype: Mimetype.jpg, caption: Config.AFN})

    }));

Asena.addCommand({ pattern: 'love ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://zenzapi.xyz/api/photooxy/lovetext?text=ZENZAPI&apikey=b91fbfa191`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {quoted: message.data , mimetype: Mimetype.jpg, caption: Config.AFN})

    }));

Asena.addCommand({ pattern: 'butterfly ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://zenzapi.xyz/api/photooxy/butterfly?text=ZENZAPI&apikey=b91fbfa191`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {quoted: message.data , mimetype: Mimetype.jpg, caption: Config.AFN})

    }));
    
Asena.addCommand({ pattern: 'magma ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://zenzapi.xyz/api/textpro/magma?text=zenzApi&apikey=b91fbfa191`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.AFN})

    }));

Asena.addCommand({ pattern: 'snake ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://en.ephoto360.com/snake-text-effect-276.html`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {quoted: message.data , mimetype: Mimetype.jpg, caption: Config.AFN})

    }));

Asena.addCommand({ pattern: 'messi ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://en.ephoto360.com/create-football-shirt-messi-barca-online-268.html`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {quoted: message.data , mimetype: Mimetype.jpg, caption: Config.AFN}) 

    }));

Asena.addCommand({ pattern: '3dtext ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://en.ephoto360.com/create-3d-gradient-text-effect-online-600.html`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {quoted: message.data , mimetype: Mimetype.jpg, caption: Config.AFN})

    }));

Asena.addCommand({ pattern: 'cr7 ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://en.ephoto360.com/create-juventus-shirt-effect-536.html`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {quoted: message.data , mimetype: Mimetype.jpg, caption: Config.AFN})

    }));

Asena.addCommand({ pattern: 'noel ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://en.ephoto360.com/noel-text-effect-online-99.html`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {quoted: message.data , mimetype: Mimetype.jpg, caption: Config.AFN})

    }));

Asena.addCommand({ pattern: 'papper ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://en.ephoto360.com/free-online-art-paper-cut-text-effects-695.html`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {quoted: message.data , mimetype: Mimetype.jpg, caption: Config.AFN})

    }));

Asena.addCommand({ pattern: 'comic ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://en.ephoto360.com/boom-text-comic-style-text-effect-675.html`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {quoted: message.data , mimetype: Mimetype.jpg, caption: Config.AFN})

    }));

Asena.addCommand({ pattern: '2comic ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://en.ephoto360.com/boom-text-comic-style-text-effect-675.html`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {quoted: message.data , mimetype: Mimetype.jpg, caption: Config.AFN})

    }));
    
Asena.addCommand({ pattern: '3comic ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://en.ephoto360.com/boom-text-comic-style-text-effect-675.html`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.AFN})

    }));
   
Asena.addCommand({ pattern: '4comic ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://en.ephoto360.com/boom-text-comic-style-text-effect-675.html`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.AFN})

    }));
  
Asena.addCommand({ pattern: 'metal ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://en.ephoto360.com/create-metal-border-294.html`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.AFN})

    }));
   
Asena.addCommand({ pattern: '3druby ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://en.ephoto360.com/3d-ruby-stone-text-281.html`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.AFN})

    }));

Asena.addCommand({ pattern: 'gflare ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://en.ephoto360.com/create-word-green-flares-140.html`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.AFN})

    }));
   
Asena.addCommand({ pattern: 'heated ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://en.ephoto360.com/heated-steel-lettering-effect-65.html`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.AFN})

    }));
  
Asena.addCommand({ pattern: 'cat ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://en.ephoto360.com/handwritten-text-on-foggy-glass-online-680.html`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.AFN})

    }));
   
Asena.addCommand({ pattern: 'gplay ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://en.ephoto360.com/create-silver-button-gold-button-social-network-online-450.html`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.AFN})

    }));
   
Asena.addCommand({ pattern: 'splay ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://en.ephoto360.com/create-silver-button-gold-button-social-network-online-450.html`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.AFN})

    }));
   
Asena.addCommand({ pattern: 'gaming ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://en.ephoto360.com/free-gaming-logo-maker-for-fps-game-team-546.html`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.AFN})

    }));
  
Asena.addCommand({ pattern: '3dstyle ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://en.ephoto360.com/galaxy-text-effect-116.html`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.AFN})

    }));
   
Asena.addCommand({ pattern: 'starmetal ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(ll);

        var ttinullimage = await axios.get(``https://en.ephoto360.com/metal-star-text-online-109.html, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.AFN})

    }));

Asena.addCommand({ pattern: 'retro ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://en.ephoto360.com/retro-text-effect-67.html`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.AFN})

    }));
   
Asena.addCommand({ pattern: 'purple ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://en.ephoto360.com/purple-text-effect-online-100.html`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.AFN})

    }));
  
Asena.addCommand({ pattern: 'leaf ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(ll);
        
        var ttinullimage = await axios.get(`https://en.ephoto360.com/typography-texture-online-nature-theme-342.html`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.AFN})

    }));

Asena.addCommand({ pattern: 'shark ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://en.ephoto360.com/make-team-logo-online-free-432.html`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {quoted: message.data , mimetype: Mimetype.jpg, caption: Config.AFN})

    }));
    
Asena.addCommand({ pattern: 'msarrow ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://en.ephoto360.com/create-multicolored-signature-attachment-arrow-effect-714.html`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.AFN})

    }));
   
Asena.addCommand({ pattern: 'panther ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://en.ephoto360.com/make-team-logo-online-free-432.html`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.AFN})

    }));
  
Asena.addCommand({ pattern: '2pubg ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://en.ephoto360.com/make-team-logo-online-free-432.html`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.AFN})

    }));
   
Asena.addCommand({ pattern: 'wolf ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://en.ephoto360.com/make-team-logo-online-free-432.html`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.AFN})

    }));

Asena.addCommand({ pattern: 'cat1 ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(ll);

        var ttinullimage = await axios.get(``, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.AFN})

    }));
   
Asena.addCommand({ pattern: 'cobra ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://en.ephoto360.com/make-team-logo-online-free-432.html`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.AFN})

    }));
  
Asena.addCommand({ pattern: 'pikachu ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://en.ephoto360.com/make-team-logo-online-free-432.html`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.AFN})

    }));
   
Asena.addCommand({ pattern: 'eagle ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://en.ephoto360.com/make-team-logo-online-free-432.html`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.AFN})

    }));
   
Asena.addCommand({ pattern: 'pirates ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://en.ephoto360.com/create-a-black-and-white-mascot-logo-371.html`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.AFN})

    }));
   
Asena.addCommand({ pattern: 'reaper ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://en.ephoto360.com/create-a-black-and-white-mascot-logo-371.html`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.AFN})

    }));
  
}
