const uuid = require('uuid')

module.exports = [
    {
        id: uuid.v4(),
        title: 'Array',
        status: 'Private',
        language: 'HTML'
      },
      {
        id: uuid.v4(),
        title: 'Object',
        status: 'Public',
        language: 'JavaScript'
      }
  ]
