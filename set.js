
// change only what you are ask to change else bit won't work thanks for your understanding 
const fs = require('fs'), 
      dotenv = fs.existsSync('config.env') ? require('dotenv').config({ path: '/.env' }) : undefined,
      convertToBool = (text, fault = 'true') => text === fault;


global.sessionServer = "https://sessions-r8cn.onrender.com";
global.session = "https://session-id-8pge.onrender.com"; 
 
 
module.exports = {
SESSION_ID: process.env.SESSION_ID || "PRINCE-MD~H4sIAAAAAAAAA61U22rrRhT9lTKvMie6XwyBjiVfZCW2ZFmOldKHsTSWx9bNo5Ed5eC3QvtQSkqhb3nrB+YTipzknHDanqZQgUCa2ey91t5r7Y8gL0iFHdyA7kdQUnJADLefrCkx6IJevV5jCjogRgyBLgjhPO2h6oLfZzOeHPmSQ+HA4AvX1ridtVCtxeI6nGUw39mX4NQBZb1KSfSVhOIudJuJvS0wL11M0GjOxqzySd8qeGebbaYxcm63pTQKF8ElOLUZEaEkT/rlBmeYotTBjYsIfR98blod5wHncB5dsO0ugHUmMJdsZfXiwHPQcXjPCa78cZEG74OvSPYy08PB3h0soRL6ddoLpL6ujDw4Vejtvhza0+maKffD3TP8iiQ5ju0Y54yw5t19b8xG4/lIc7aNNtBnUY+fuvigwpoEIw1hPVztbtzVYXkYHd8HfLkPljOkeM2dlClcWVS1URwjJat18X55uO8tAsczzH2/PIZvgbv0VSu7/9J3x+QyUm9uj57q2eHNiuXDHB6uhxOoLm5JsxkOxzf5apP4Gf8++JV8k0rlZmnSO3lpIVglixybw63hlYuxeDWx3ayfpRmsd2/gI1bTr6Hc2yS1Ki4ZTer1EhXRmHMlbjLw6WSElehOjmrI7ZwllcpYNnpXDerF8GY+jkNRHfFjyzn64iyoG9zjXDJbBUIdhFECL8+MdrixY9AVTh1AcUIqRhEjRd6e6XoHoPjg44hidu4uSHsrd6QradPjq43l3BEf3S249DYTY8FXo1ypDDiPvUkdRJegA0paRLiqcDwiFStoc42rCiW4At3vzoNqOVOcFQyPSdyqljcUReNVkde/rT4cN4hVqCw/5JiBDljTIrvGoMtojTvgHC+ovD4Qrb4oSlZPVge6oSqCZfV7omYMDFNpCWbPNeckwxVDWQm6gqbIPK9IBn/q/C8wVLUvGIKi6lBQdEORBhbkBxLPa4Yha5YB/wWGePq+A3J8x55F3LZeEjpgTWjFgrwu0wLFrwp/vURRVNQ585s8MtsPTEH3zTFmjORJ1RKrc0SjDTlgs+UBumuUVvjTtDHF8SuXlw1mFnErQnNyLUBLc0CLvU30ZWu6gvzX7uSoDQZPv//x29Pjw89Pjw+/fvP0+PDj0+PDLy8H7fvT0+PDD20Q6ID0nFgUZV1WJV1VDM0Q5TZ5e3H6xKmFEGOGSFq16BwKdXk36NujC6p7wyG0E2gmEHzuwauxnpU7E+A8Evx1qsz7O00w6/sUbkVKZok50NiQN6SUV4PAirdn5X6ZBHSBpEmFditfOYLHaUlqNgvmpMUA9znfUsOwwEVzVSYz5KoDTb7g1lOjjKEoIH95Pyij4WY3H0c364T2i8PwvoqCteXvTO+yrRbjA4nw22I2Ne7mMeKOulbrCcRSLe/dygyGqLzIYZ9sHCH1xOBm7BrBfj9bqkxaeGqjSn0Z7+SlufdjhU+vb4cmWkFdUxf+PEmSZ8ufV076surJixvJ+XdN8Hlzvozx36b9jLvVJH/qvEnxsor/YZ31gtjrS5MgV3BwN54aHq0Uzzb28i6EG6zNmBsr8TQdQCmUwKk1R5kiti5o1i7YbIVAB9CibhVu5+viK5XMnm3DF9Ypqhj87Jq/MaKuPke5tChHqNqALsgzqbdqHdDAsvQZYq8eBLB93IKA05+By5T0qwgAAA==", // Add sess Id here espwcially when deploying on panels else use app.json and .env file...
SUDO_NUMBERS: process.env.SUDO_NUMBERS || "50955706208", //Add multiple Numbers with Country Codes without (+) Separated by Comma...
ANTI_DELETE: process.env.ANTI_DELETE || "inboxonly", // can be set to inboxonly/allchats/true/false
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
AUTO_LIKE_STATUS: process.env.AUTO_LIKE_STATUS || "true",
AUTO_LIKE_EMOJIS: process.env.AUTO_LIKE_EMOJIS || "💛,❤️,💜,🤍,💙", //Input Yours Custom...Can be one Emoji or Multiple Emojis Separated by Commas
AUTO_REPLY_STATUS: process.env.AUTO_REPLY_STATUS || "false",
STATUS_REPLY_MSG: process.env.STATUS_REPLY_MSG || "✅️ Status Viewed by prince-mdx", // // Input Yours custom...
MODE: process.env.MODE || "privat", // Put private or public or inbox or groups
OWNER_NUMBER: process.env.OWNER_NUMBER || "237677224245", // Only 1 owner Number Here, others Add to sudo numbers...
OWNER_NAME: process.env.OWNER_NAME || "𖤓𝐌𝐑 𝐇𝐎𝐌𝐌𝐈𝐄𖤓", // Input Yours custom...(Maintain font for Flow)
PACK_AUTHOR: process.env.PACK_AUTHOR || "𝐏𝐑𝐈𝐍𝐂𝐄 𝐓𝐄𝐂𝐇", // Added // Input Yours custom...
PACK_NAME: process.env.PACK_NAME || "𓆩𖠜𝐌𝐑_𝐇𝐎𝐌𝐌𝐈𝐄 𖠜💙", // Added // Input Yours custom...
PREFIX: process.env.PREFIX || ".",
VERSION: process.env.VERSION || "3.0.0",
ANTILINK: process.env.ANTILINK || "true", //  Enter true to kick automatically or delete to delete without kicking or warn to warn before kicking
ANTICALL: process.env.ANTICALL || "false",
ANTIBAD: process.env.ANTIBAD || "false",
BAD_WORDS: process.env.BAD_WORDS || "fuck, pussy, anus, idiot", // Add Yours Separated by Comma(will be deleted if ANTIBAD is set to true)
ANTICALL_MSG: process.env.ANTICALL_MSG || "*_📞 📵 No Calls Allowed!_*",
AUTO_REACT: process.env.AUTO_REACT || "false",
BOT_NAME: process.env.BOT_NAME || "𖤓𝐌𝐑 𝐇𝐎𝐌𝐌𝐈𝐄𖤓", //  don't change 
BOT_PIC: process.env.BOT_PIC || "https://raw.githubusercontent.com/Mayelprince/url/main/menun.jpg", //  don't change 
AUTO_AUDIO: process.env.AUTO_AUDIO || "false",
AUTO_BIO: process.env.AUTO_BIO || "false",
AUTO_BIO_QUOTE: process.env.AUTO_BIO_QUOTE || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴘʀɪɴᴄᴇ ᴍᴅx ",
CHAT_BOT: process.env.CHAT_BOT || "false", // Put value to true to enablle for all chats only or inbox to ebanle in pm chats only or groups to enable in groups only else false
WELCOME: process.env.WELCOME || "false",
GOODBYE: process.env.GOODBYE || "false",    
AUTO_READ_MESSAGES: process.env.AUTO_READ_MESSAGES || "false", // Enter value to true for blueticking all messages, or commands for blueticking only commands else false
AUTO_BLOCK: process.env.AUTO_BLOCK || "333,799", // Add Multiple Country Codes Separated by Comma...
PRESENCE: process.env.PRESENCE || "online", // Choose one: typing, recording, online, null
TIME_ZONE: process.env.TIME_ZONE || "Africa/Douala", // Enter yours else leave blank if not sure
};

let file = require.resolve(__filename); 
fs.watchFile(file, () => { fs.unwatchFile(file); console.log(`Update '${__filename}'`); delete require.cache[file]; require(file); });
// That's All...
