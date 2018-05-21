const Command = require("../../base/Command.js");
const texts = require("../../locales/en_GB");

class Roll extends Command {
    constructor(client) {
      super(client, {
        name: "roll",
        description: "Rolls a regular six-sided dice.",
        category: "Fun",
        usage: "roll",
        aliases: ["dice"]
      });
    }

    async run(message, args, level) { // eslint-disable-line no-unused-vars
        const numbers = [
            ":one:",
            ":two:",
            ":three:",
            ":four:",
            ":five:",
            ":six:"
        ];
        try {
            const roll = numbers.random();
            const msg = await message.channel.send("Rolling... 🎲");
            msg.edit(`You rolled a ${roll}!`);
        } catch (error) {
            return message.channel.send(texts.error.replace(/{{err}}/g, error.message));
        }
    }
}

module.exports = Roll;
