const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "botsatwork892@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://casinobot:123johniphone@cluster0.nfztvsi.mongodb.net/?retryWrites=true&w=majority";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/WHIZBOT1/WHIZBOTMD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VacWsSl3LdQOmWZrBj0l";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VacWsSl3LdQOmWZrBj0l";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/95ce6ad6559693eba92d2.jpg";
global.devs = "18763351213";
global.sudo = process.env.SUDO || "18763351213";
global.owner = process.env.OWNER_NUMBER || "18763351213";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "18763351214";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "Asta;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkFpbFNQb1NGODlxSlZERjIrLzFSKzBtN2tWVlBXMFBwV0s3aWdsV1NWOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSkRKWmtjcitIYWNKcUJ2aXM4UzQ3eFRvL0JDb2hvVXdhc0dLNlFISjRqWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZUGFTWHNJYWN2b1o3V2MzWVErNkxqdC9VTkFseXhHVVVLdzV3WDhuTjA0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHMWZqZ3FiQ3lKdzk0STlMNGRGT1Q0UkMwN0gwUG1rOUJvak8yQ25yZVhBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdBTHhlK3Zua2pwMVU0SEQ2SXN1enVTYnFzRjBPT3lhdnlaZS9NY2NOMkE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVScGtYQ0pIbTJnaWRhanBmeVJLU21CaU1CWE80UEgwTWJtakZQOGUwRGM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMExwbk4wek52U3FrM0cxUHRVamtUbkRTY1hVc2RLNjBoMXR3THp3dWpXVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibTk1d1NjVEVQNFhnSUZVS3FtNjZ6QnR3NjA3dmlEYkN6NTBaZi9ONWlnZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdzSkJGRUlWcnhCVWFSVFk5SEh6VFBHOENoVHFkT3RBMVdBK0hIYkIzbTRDbzBFMGlkY3FaYS91eW5RNnU5NnEvZkNuUEsvSmNDOFNUNk5zaDQvK0NnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NDQsImFkdlNlY3JldEtleSI6IlhMNTVEbUtFSlo2bENORTBxTUNiZ0F5Yis5Q0lpZ1JuOURTNk1CR3ZvcjA9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMTg3Njg5ODE1MTNAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQTRBQ0I0REYxNTc0Qjc3OTAxMkE3RENBRDhDN0EwNjEifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcxNzg4MTYyMX0seyJrZXkiOnsicmVtb3RlSmlkIjoiMTg3Njg5ODE1MTNAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMjcyNzRGRTBGQkU3Njk0Q0E5QTNFRjZFMjE0QTdFODIifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcxNzg4MTYyMX1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiS1NGZy16NVNSVTJvRXRrR0pjV3dYdyIsInBob25lSWQiOiI4ZmE5NWIyNC05MDg2LTQ5ODktOTZlNS01NTBmODNmNzcyNGMiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibGlqd2lmY0wrKzh0bCtSOUQzUHA3bUNzZ3MwPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9ON205d1JpMkRmY2VJVW1jM09kejVaNFVXdz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJTVjI0TjNKRiIsIm1lIjp7ImlkIjoiMTg3Njg5ODE1MTM6NEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLwn6agIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQYko0cXNIRUlTV2s3TUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJMNGJiUEk5cCthbGowWkl2aXVEZkJzOE1DeUFwSklGclNJRDRjYlNsRm5NPSIsImFjY291bnRTaWduYXR1cmUiOiJhdzlCY2ZUYVpxMjlJR0lQQk1XRVlQSEt6S0V4MlBiUkVCMURWdUpVVGJOamh2K0xTTytFWlY1UmFMOWl2aloxNlc3VUdsNk1IWDg5WGI2ajdKRkhCQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiWGRYQTRuc3VPVUNyaWd5djhrUzZzdy9lUUE1U2xPdFR2b0dLTVlyc2M3a3p5TGkrd2d6NUJMZmowbjFtTDQrVnVJa1kxcXArNExsY1o4WWlxL0VaQWc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIxODc2ODk4MTUxMzo0QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlMrRzJ6eVBhZm1wWTlHU0w0cmczd2JQREFzZ0tTU0JhMGlBK0hHMHBSWnoifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MTc4ODE2MTcsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTzVMIn0="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || "",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "©️ 𝛲𝛩𝑊𝛯𝑅𝐷 𝐵𝑌 𝑊𝛨𝛪𝛧𝐵𝛩𝑇-𝛭𝐷",
  author: process.env.PACK_AUTHER || "WHIZBOT-ᴍᴅ",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "WHIZBOT-MD",
  ownername: process.env.OWNER_NAME || "JAY BOTS",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "EyqbCCWYTc8b49cmWM0KT3BlbkFJ0NRSC7K1BiTJo3ikuriW",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "JAY").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
