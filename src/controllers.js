const bot = require("./telegram");

const purchase = async (req, res) => {
  const { queryId, products, totalPrice } = req;

  try {
    await bot.answerWebAppQuery(queryId, {
      type: "articel",
      id: queryId,
      title: "Successful purchase",
      input_message_content: {
        message_text: `Сongratulations on your purchase, you have purchased a product worth ${totalPrice} $`,
      },
    });
    return res.status(200);
  } catch (e) {
    await bot.answerWebAppQuery(queryId, {
      type: "articel",
      id: queryId,
      title: "Error purchase",
      input_message_content: {
        message_text: `Sorry something went wrong`,
      },
    });
    return res.status(500).json({});
  }
};

module.exports = { purchase };
