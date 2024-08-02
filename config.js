const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://Vladimir:Vladimir3@cluster0.0wnizex.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "237698947449";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '4'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "true"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_16_08_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDY3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDExMCxcbiAgICAgICAgODksXG4gICAgICAgIDkxLFxuICAgICAgICAyNCxcbiAgICAgICAgNTIsXG4gICAgICAgIDM0LFxuICAgICAgICA4MixcbiAgICAgICAgMjIsXG4gICAgICAgIDQ1LFxuICAgICAgICAxODIsXG4gICAgICAgIDYyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDgxLFxuICAgICAgICAxODYsXG4gICAgICAgIDg2LFxuICAgICAgICA3LFxuICAgICAgICAxNyxcbiAgICAgICAgMTQyLFxuICAgICAgICA2MixcbiAgICAgICAgMTYwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDExOSxcbiAgICAgICAgOTMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNzVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ1LFxuICAgICAgICA5NCxcbiAgICAgICAgMTExLFxuICAgICAgICAxMDUsXG4gICAgICAgIDM0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDk2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTU1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNDYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjIsXG4gICAgICAgIDUzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDk5LFxuICAgICAgICAxOTksXG4gICAgICAgIDQ0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDQxLFxuICAgICAgICAxMTIsXG4gICAgICAgIDExNyxcbiAgICAgICAgOSxcbiAgICAgICAgMTQsXG4gICAgICAgIDc3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDc0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMixcbiAgICAgICAgMTE0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDk5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDczLFxuICAgICAgICAxNTMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTgzLFxuICAgICAgICA0NyxcbiAgICAgICAgNyxcbiAgICAgICAgMzYsXG4gICAgICAgIDIwNixcbiAgICAgICAgNjAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTk0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjExLFxuICAgICAgICAxMjMsXG4gICAgICAgIDMyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjQ4LFxuICAgICAgICA0NyxcbiAgICAgICAgMTEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjExLFxuICAgICAgICA3NyxcbiAgICAgICAgODMsXG4gICAgICAgIDExOSxcbiAgICAgICAgNzAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxODcsXG4gICAgICAgIDgzLFxuICAgICAgICAzMyxcbiAgICAgICAgMTU0LFxuICAgICAgICA2MyxcbiAgICAgICAgMjA5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDcyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgOTIsXG4gICAgICAgIDg2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgODQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNDgsXG4gICAgICAgIDEwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDI4LFxuICAgICAgICAwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMjQsXG4gICAgICAgIDY0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDg4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDc1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjExLFxuICAgICAgICAyNSxcbiAgICAgICAgMTAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE5NixcbiAgICAgICAgNDEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNDYsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTIyLFxuICAgICAgICA3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMjBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTMsXG4gICAgICAgIDY1LFxuICAgICAgICAyNixcbiAgICAgICAgMjQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjI2LFxuICAgICAgICAzMSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDY0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjIwLFxuICAgICAgICA4MCxcbiAgICAgICAgMTAwLFxuICAgICAgICA1MCxcbiAgICAgICAgNTYsXG4gICAgICAgIDEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNTMsXG4gICAgICAgIDI1LFxuICAgICAgICA3MCxcbiAgICAgICAgNTksXG4gICAgICAgIDEyMyxcbiAgICAgICAgMCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMTgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxMjJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxMTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNTksXG4gICAgICAgIDE2NixcbiAgICAgICAgNzMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgOTEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNjcsXG4gICAgICAgIDkyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDY4LFxuICAgICAgICA4NSxcbiAgICAgICAgMTM5LFxuICAgICAgICA2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDcyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjMxLFxuICAgICAgICAxNDYsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAzNyxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNixcbiAgICAgICAgMTUxLFxuICAgICAgICAyNixcbiAgICAgICAgNCxcbiAgICAgICAgMTk5LFxuICAgICAgICAzOCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTcxLFxuICAgICAgICA5MyxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDU4LFxuICAgICAgICAxODAsXG4gICAgICAgIDc1LFxuICAgICAgICAxNSxcbiAgICAgICAgMTA1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjI2LFxuICAgICAgICA2MyxcbiAgICAgICAgMjMwLFxuICAgICAgICAzNCxcbiAgICAgICAgMTQzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDQ0LFxuICAgICAgICA1MixcbiAgICAgICAgMTMxXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMTUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiMmRCV3VEMVRMVnlWZ1Q0cEZsVHhKK2dadTEwOXA0TTJEMG11QUZhdG1pZz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzc2OTg5NDc0NDlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjNBRUY5MDE3ODQzQTY2MDY4OTNGXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMjYwNDU4M1xuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJuc1BKVExsVlJyR0ZaeVl1VlUzNk93XCIsXG4gIFwicGhvbmVJZFwiOiBcIjI3OGE0ZGE3LTdmN2QtNDJjNS05ZTRjLTdjNmUwYTc1NmNhNFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA2OSxcbiAgICAgIDI0MyxcbiAgICAgIDM0LFxuICAgICAgODcsXG4gICAgICAxNTQsXG4gICAgICA1OCxcbiAgICAgIDIyNixcbiAgICAgIDI1MyxcbiAgICAgIDI3LFxuICAgICAgODAsXG4gICAgICAyMjUsXG4gICAgICAxOTksXG4gICAgICAyMzIsXG4gICAgICAyMDAsXG4gICAgICAyMTEsXG4gICAgICAxNDYsXG4gICAgICA5NCxcbiAgICAgIDI0MCxcbiAgICAgIDE1LFxuICAgICAgNjBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE1OSxcbiAgICAgIDE2MSxcbiAgICAgIDI2LFxuICAgICAgMjUyLFxuICAgICAgOTYsXG4gICAgICAyMjUsXG4gICAgICAxNTAsXG4gICAgICAyMTMsXG4gICAgICAyMjcsXG4gICAgICAyNDEsXG4gICAgICAyMTAsXG4gICAgICAxMTAsXG4gICAgICAyMzQsXG4gICAgICAyMzYsXG4gICAgICAyMCxcbiAgICAgIDE5MixcbiAgICAgIDExOCxcbiAgICAgIDE5MCxcbiAgICAgIDE0NCxcbiAgICAgIDIyOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0pHWG0vRUdFSjI0czdVR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiMU4rdUI4VTNIcGN1MVd1T2IyaHg4UUs2Z1NmemExQjNKQ0JqeWM2VHBGRT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIxaHRINitiY3pKcWVnUEtNR0dwSTkvTDc5QlpPNHh6TUpwTzByWVZwVVVtclFvd2orK1FxZ3lRS0F2a1dNa3FveVRNRlJ1bzBTV1c5SDZpcWhNSXdpZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJsNHFINHI4Sk8vWFBjS0hidDBOR3FkVzhqNjdaeDJVdWZsY09LUkNBVXpUWDBNMHpQOG9Ib3JORWNoL2xnWDZ5WE9iV1hQcjhySGQyRllNbnRUazVpQT09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNzY5ODk0NzQ0OToyOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjQ2MzcyMjc2MTMzOTY4OjI4QGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM3Njk4OTQ3NDQ5OjI4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDgxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJpcGhvbmVcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjYwNDU3NixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUtCalwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBS0JqLmpzb24iOiAie1wia2V5RGF0YVwiOlwiY1JiY21KMk5wNXZYYy92amZTZ3BvMkpjZFIxOHpWNlZ3NEgzV2JBVjFaST1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxODQ4MDM2MjQxLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjI2MDQ1ODA1MjFcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "😒",
  packname: process.env.PACK_NAME || "🙄",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "FdfKwJUyvARXavM5sxgDz66N",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "41963f99e4fbe82860a549db2b3957aa";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
