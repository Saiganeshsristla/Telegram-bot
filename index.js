const { Telegraf } = require("telegraf");
const key = require("./key.js");

const bot = new Telegraf(key);

bot.start((ctx) => {
  ctx.reply(
    "Welcome I am a bot and my name is Om Sawant type /help for command references"
  );
});

bot.command("help", (ctx) => {
  ctx.reply(`Below are the commands that i support
       1. /whomadethis = To know who made this bot
       2. /age = to know my age
       3. /bestfriend = to know my best friend
       4. /aboutOmSawant 
       If you send me a sticker I will reply with heart emoji
    `);
});

bot.command("whomadethis", (ctx) => {
  ctx.reply("Abhay Shinde");
});

bot.command("aboutOmSawant", (ctx) => {
  ctx.reply("om sawant is zand");
});

bot.command("bestfriend", (ctx) => {
  ctx.reply("vivek sharma is my best friend");
});

bot.command("age", (ctx) => {
  ctx.reply("age 18 hai lekin abhi bhi bachhe jaisa hu");
});

bot.launch();
