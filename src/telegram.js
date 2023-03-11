const TelegramBot = require("node-telegram-bot-api");

const token = "6031530499:AAEHJr_sLMafic0-fMrRTRwccBbmqr9Q-6M";
const webAppUrl = "https://voluble-axolotl-47583e.netlify.app";

const bot = new TelegramBot(token, { polling: true });

bot.on("message", async (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;

  if (text === "/start") {
    await bot.sendMessage(
      chatId,
      "Button will appear bellow, pls fill the form",
      {
        reply_markup: {
          keyboard: [
            [{ text: "Fill the form", web_app: { url: webAppUrl + "/form" } }],
          ],
        },
      }
    );

    await bot.sendMessage(chatId, "Visit our website", {
      reply_markup: {
        inline_keyboard: [
          [{ text: "Make an order", web_app: { url: webAppUrl } }],
        ],
      },
    });
  }

  if (msg?.web_app_data?.data) {
    try {
      const data = JSON.parse(msg?.web_app_data?.data);
      await bot.sendMessage(chatId, "Thank you");
      await bot.sendMessage(chatId, `Сountry:${data.country}`);
      await bot.sendMessage(chatId, `Street:${data.street}`);

      setTimeout(async () => {
        await bot.sendMessage(`Full information is available on our website`);
      }, 3000);
    } catch (e) {}
  }

  bot.sendMessage(chatId, "Received your message");
});

module.exports = bot;
