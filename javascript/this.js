function func () {
  console.log(this)
  return {
    firstName: 'Ali',
    normalFunc: function () {
      console.log(this)
    },
    arrowFunc: () => {
      console.log(this)
    }
  }
}

const obj = { firstName: 'Qoli' }

const result = func.call(obj)
// const result = func()

// result.normalFunc()

// result.arrowFunc()

const newObj = {
  firstName: 'Naqi',
  normalFunc: result.normalFunc,
  arrowFunc: result.arrowFunc
}

newObj.normalFunc()
newObj.arrowFunc()

// const obj = {
//     firstName: 'Ali',
//     func () {
//       console.log(this)
//     }
//   }

//   const obj2 = {
//     firstName: 'Qoli',
//     func: obj.func
//   }

//   obj2.func()
