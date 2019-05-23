module.exports = {
  name: 'roll',
  description: 'Roll a dice given as parameter.',
  aliases: ['roll', 'dice'],
  usage: '[die, ex. d20] [optional: number of times to roll, ex x3] [modifier, ex +2 (the plus sign is important!)]',
  args: true,
  execute(message, args) {
    // first arg = the die to roll
    let die = args.shift()

    if(!die) {
      return message.reply('You got to give me a die')
    }
    
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

    // second arg is the number of times to roll or the modifier
    const times = args.shift()
    let timestoroll = 1
    let result = 0
    let modifier = 0

    if(times) {
      let usertimestoroll = parseInt(times)
      if(!usertimestoroll) { // check for 'x' or '+'
        if(times.substring(0,1) == '+') { // this is a modifier
          modifier = parseInt(times.substring(1))
        }
        else { // it is a multiplier of dice
          usertimestoroll = parseInt(times.substring(1))
          if(usertimestoroll) {
            timestoroll = usertimestoroll
          }
        }
      }
      else {
        timestoroll = usertimestoroll
      }
    }

    // random = 0..1 -> multiply+floor = integer 0..19 -> +1 gets integer 1..20
    while(timestoroll > 0) {
      result += Math.floor(Math.random() * rollnumber) + 1
      timestoroll--
    }

    // third is the modifier, unless gotten previously
    if(!modifier || modifier > 0) { // modifier is already handled
      // do nothing
    }
    else {
      modifier = args.shift()
      let usermodifier = parseInt(modifier)
      if(!usermodifier) {
        // check for '+'
        usermodifier = parseInt(modifier.substring(1))
        if(usermodifier) {
          modifier = usermodifier
        }
        else {
          modifier = 0
        }
      }
    }

    result += modifier

    return message.reply(`Rollin D${rollnumber}! ... And with modifier ${modifier} you got: ${result}`)
  },
}