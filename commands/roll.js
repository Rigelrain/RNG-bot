module.exports = {
  name: 'roll',
  description: 'Roll a dice given as parameter.',
  aliases: ['roll', 'dice'],
  usage: '[die, ex. d20]',
  execute(message, args) {
    let die = args.shift()

    let rollnumber = parseInt(die)

    if(!rollnumber) {
      // check if the parameter is in format 'D20'
      // --> take out the 'D' and get the number
      die = die.substring(1)
      rollnumber = parseInt(die)
      if(!rollnumber) {
        // if it still doesn't match, give up
        return message.reply('You got to give me a die')
      }
    }

    // random = 0..1 -> multiply+floor = integer 0..19 -> +1 gets integer 1..20
    const result = Math.floor(Math.random() * rollnumber) + 1

    return message.reply(`Rollin D${rollnumber}! ... Got: ${result}`)    
  },
}