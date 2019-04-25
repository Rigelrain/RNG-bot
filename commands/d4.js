const roll = require('./roll')

module.exports = {
  name: 'D4',
  description: 'Roll D4.',
  aliases: ['d4', 'four', 'dfour'],
  usage: '[number of dice]',
  execute(message, args) {
    const concatargs = ['4'].concat(args)
    roll.execute(message, concatargs)
  },
}