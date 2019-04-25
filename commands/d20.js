const roll = require('./roll')

module.exports = {
  name: 'D20',
  description: 'Roll D20.',
  aliases: ['d20', 'twenty', 'dtwenty'],
  usage: '',
  execute(message, args) {
    const concatargs = ['20'].concat(args)
    roll.execute(message, concatargs)
  },
}