module.exports = {
  name: 'D20',
  description: 'Roll D20.',
  aliases: ['d20', 'twenty', 'dtwenty'],
  usage: '',
  execute(message) {
    // random = 0..1 -> multiply+floor = integer 0..19 -> +1 gets integer 1..20
    const result = Math.floor(Math.random() * 20) + 1

    return message.reply(`Rollin! ... Got: ${result}`)
  },
}