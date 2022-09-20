const { sum, sumString: mySumString } = require('./sum')

const sumString = jest.fn(mySumString)

beforeAll(() => {
  console.log('Execute before all tests')
})

afterAll(() => {
  console.log('Execute after all tests')
})

beforeEach(() => {
  console.log('Execute before each test')
})

afterEach(() => {
  console.log('Execute after each test')
})

describe('Sum tests', () => {
  test('sum function', () => {
    expect(sum(5, 2)).toBe(7)
    expect(sum(5, '10')).toBe(15)
    expect(sum('ali', 2)).toBeNaN()
    expect(sum(NaN, 2)).toBeNaN()
    expect(sum()).toBe(0)
  })

  it('Sum string function', () => {
    expect(sumString(2, 3)).toBe('Sum is 5')
    expect(sumString(2, NaN)).toBe('Sum is NaN')
    expect(sumString(2, '20')).toBe('Sum is 22')
    expect(sumString(2, 'ali')).toBe('Sum is NaN')
    expect(sumString).toBeCalledTimes(4)
    expect(sumString).toBeCalledWith(2, 3)
    expect(sumString).toBeCalledWith(2, NaN)
    expect(sumString).toBeCalledWith(2, '20')
    expect(sumString).toBeCalledWith(2, 'ali')
  })
})

// if (sum(5, 2) !== 7) {
//   throw 'Test failed'
// }

// if (sum(5, '10') !== 15) {
//   throw 'Test failed'
// }

// if (!Number.isNaN(sum('ali', 5))) {
//   throw 'Test failed'
// }

// if (sum() !== 0) {
//   throw 'Test failed'
// }
