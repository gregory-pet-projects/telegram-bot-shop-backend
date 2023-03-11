const purchase = async (req, res) => {
  const { quryId, products, totalPrice } = req;

  try {
    await bot.answerWebAppQuery(queryId, {
      type: "articel",
      id: quryId,
      title: "Successful purchase",
      input_message_content: {
        message_text: `Сongratulations on your purchase, you have purchased a product worth ${totalPrice} $`,
      },
    });
    return res.status(200).json({});
  } catch (e) {
    await bot.answerWebAppQuery(queryId, {
      type: "articel",
      id: quryId,
      title: "Error purchase",
      input_message_content: {
        message_text: `Sorry something went wrong`,
      },
    });
    return res.status(500).json({});
  }
};

module.exports = { purchase };
