const mathHelper = require('../../../app/helpers/math')

describe('Math helper tests', () => {
  test('addInteger returns expected result', () => {
    const expectedResult = 8
    const int1 = 6
    const int2 = 2

    expect(mathHelper.addInteger(int1, int2)).toEqual(expectedResult)
  })

  test('addInteger throw error for non numbers arguments', () => {
    const int1 = 6
    const int2 = '2'

    expect(() => {
      mathHelper.addInteger(int1, int2)
    }).toThrow(Error('Invalid type of arguments, only number is allowed here.'))
  })
})
