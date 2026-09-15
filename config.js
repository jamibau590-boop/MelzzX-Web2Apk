module.exports = {
  BOT_NAME: "𝙱𝚘𝚝 𝙱𝚞𝚒𝚕𝚍 𝙼𝚎𝚕𝚣𝚣𝚇",
  BOT_VERSION: "1.0",
  BOT_TOKEN: process.env.BOT_TOKEN || "8666709934:AAEyxI6RdHrvm7WX2FB7Z3KdUm90z5jnRug",
  ADMIN_IDS: (process.env.ADMIN_IDS || "8339352761").split(",").map(Number).filter(Boolean),

  
  CHANNEL_USERNAME: process.env.CHANNEL_USERNAME || "@melzzinfo1",
CHANNEL_USERNAME2: process.env.CHANNEL_USERNAME2 || "@maklojeleeK",
CHANNEL_USERNAME3: process.env.CHANNEL_USERNAME3 || "@aboutmelz",
  
  OWNER_ID: parseInt(process.env.OWNER_ID || "8339352761"),

  WELCOME_PHOTO: process.env.WELCOME_PHOTO || "https://files.catbox.moe/9apxze.png",
  NEW_USER: process.env.NEW_USER || "https://files.catbox.moe/dgeg8y.png",
  TMP_DIR: "./tmp",

  BUILD_TIMEOUT_MS: 30 * 60 * 10000,
  POLL_INTERVAL_MS: 7000,       
  WEB2APK_MAINTENANCE: false,
};
