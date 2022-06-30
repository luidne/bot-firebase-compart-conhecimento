const functions = require("firebase-functions");
const { Telegraf } = require('telegraf');

let TOKEN_BOT = "5339666273:AAGgq20Pz2W3oFWHuFkThTJD1JZbTWZgptU";

const bot = new Telegraf(TOKEN_BOT);

bot.start((ctx) => {
  ctx.reply(`Olá, ${ctx.from.first_name}!`);
});

bot.on('message', (ctx, next) => {
  ctx.reply(`Você digitou ${ctx.message.text}`);
  next();
});

bot.command('sobre', (ctx) => {
  return ctx.replyWithHTML('Eu sou um Bot do <i>Telegram</i>');
});

bot.launch();

exports.helloWorld = functions.https.onRequest((req, res) => {
  bot.handleUpdate(req.body, res);
});

// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Compartilhando conhecimento!");
// });
