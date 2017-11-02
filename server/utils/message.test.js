var expect = require('expect')
var {generateMessage} = require('./message')

describe('generate<essage', () => {
  it('should generate correct message object', () => {
    var from = 'Jen'
    var text = 'Some message'
    var message = generateMessage(from, text)

    expect(message.createdAt).toBeA('number')
    expect(message).toInclude({
      from: from,
      text: text
    })
  })
})
