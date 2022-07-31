const root = $('#root')

const counter = $('<span>0</span>')

const increase = $('<button>+</button>')
  .css('margin', '5px')
  .click(() => counter.text(+counter.text() + 1))

const decrease = $('<button>-</button>').click(() =>
  counter.text(+counter.text() - 1)
)

root.append(counter)
root.append(increase)
root.append(decrease)
