// DiCong-ed By @mrclfd
 
const Asena = require('../events');
const { MessageType, Mimetype, } = require('@adiwajshing/baileys');
const con = require('../config');

// Deskripsi
const IDF = "Pesan gaje, buat yang gaje aja ( F || X || Y || đż ).```\nâ¨ď¸ *Contoh:* ```.F đ"

        Asena.addCommand({ pattern: 'F ?(.*)$', fromMe: true, desc: IDF }, async (message, match) => {

            const fsay = match[1]

            if (match[1] === '') return await message.client.sendMessage(message.jid, 'FFFFFFFF\nFFFFFFFF\nFF\nFF\nFF\nFFFFFF\nFFFFFF\nFF\nFF\nFF\nFF\nFF', MessageType.text);

            var str = "FFFFFFFF\nFFFFFFFF\nFF\nFF\nFF\nFFFFFF\nFFFFFF\nFF\nFF\nFF\nFF\nFF";
  
            var fres = str.replace(/F/g, `${fsay}`);
        
            return await message.client.sendMessage(message.jid, fres, MessageType.text);

        });

        Asena.addCommand({ pattern: 'X ?(.*)$', fromMe: true, dontAddCommandList: true }, async (message, match) => {

            const xsay = match[1]

            if (match[1] === '') return await message.client.sendMessage(message.jid, 'X               X\n  X           X\n    X       X\n      X   X\n         X\n      X   X\n    X       X\n  X           X\nX               X', MessageType.text);

            var str = "X               X\n  X           X\n    X       X\n      X   X\n         X\n      X   X\n    X       X\n  X           X\nX               X";
  
            var fres = str.replace(/X/g, `${xsay}`);
        
            return await message.client.sendMessage(message.jid, fres, MessageType.text);

        });
        
        Asena.addCommand({ pattern: 'Y ?(.*)$', fromMe: true, dontAddCommandList: true }, async (message, match) => {

            const xsay = match[1]

            if (match[1] === '') return await message.client.sendMessage(message.jid, 'Y                   Y\n    Y           Y    \n        Y   Y        \n            Y             \n            Y             \n            Y             \n            Y             ', MessageType.text);

            var str = "Y                   Y\n    Y           Y    \n        Y   Y        \n            Y             \n            Y             \n            Y             \n            Y             ";
  
            var fres = str.replace(/Y/g, `${xsay}`);
        
            return await message.client.sendMessage(message.jid, fres, MessageType.text);

        });

 Asena.addCommand({ pattern: 'đż ?(.*)$', fromMe: true, dontAddCommandList: true }, async (message, match) => {

            const xsay = match[1]

            if (match[1] === '') return await message.client.sendMessage(message.jid, 'đđżđđżđđżđđżđđżđđżđđżđđżđđżđđżđđż\nđđżđđžđđžđđžđđžđđžđđžđđžđđžđđžđđż\nđđżđđžđđ˝đđ˝đđ˝đđ˝đđ˝đđ˝đđ˝đđžđđż\nđđżđđžđđ˝đđźđđźđđźđđźđđźđđ˝đđžđđż\nđđżđđžđđ˝đđźđđťđđťđđťđđźđđ˝đđžđđż\nđđżđđžđđ˝đđźđđťđżđđťđđźđđ˝đđžđđż\nđđżđđžđđ˝đđźđđťđđťđđťđđźđđ˝đđžđđż\nđđżđđžđđ˝đđźđđźđđźđđźđđźđđ˝đđžđđż\nđđżđđžđđ˝đđ˝đđ˝đđ˝đđ˝đđ˝đđ˝đđžđđż\nđđżđđžđđžđđžđđžđđžđđžđđžđđžđđžđđż\nđđżđđżđđżđđżđđżđđżđđżđđżđđżđđżđđż', MessageType.text);

            var str = "đđżđđżđđżđđżđđżđđżđđżđđżđđżđđżđđż\nđđżđđžđđžđđžđđžđđžđđžđđžđđžđđžđđż\nđđżđđžđđ˝đđ˝đđ˝đđ˝đđ˝đđ˝đđ˝đđžđđż\nđđżđđžđđ˝đđźđđźđđźđđźđđźđđ˝đđžđđż\nđđżđđžđđ˝đđźđđťđđťđđťđđźđđ˝đđžđđż\nđđżđđžđđ˝đđźđđťđżđđťđđźđđ˝đđžđđż\nđđżđđžđđ˝đđźđđťđđťđđťđđźđđ˝đđžđđż\nđđżđđžđđ˝đđźđđźđđźđđźđđźđđ˝đđžđđż\nđđżđđžđđ˝đđ˝đđ˝đđ˝đđ˝đđ˝đđ˝đđžđđż\nđđżđđžđđžđđžđđžđđžđđžđđžđđžđđžđđż\nđđżđđżđđżđđżđđżđđżđđżđđżđđżđđżđđż";
  
            var fres = str.replace(/đż/g, `${xsay}`);
        
            return await message.client.sendMessage(message.jid, fres, MessageType.text);

       });
 
