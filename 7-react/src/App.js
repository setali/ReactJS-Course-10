import React from 'react'
// import Counter from './1-Counter'
// import LifeCycle from './2-LifeCycle'
// import ForceUpdate from './3-ForceUpdate'
// import LegacyLifeCycle from './4-LegacyLifeCycle'
// import UnMounting from './5-UnMounting'
// import ErrorBoundaries from './6-ErrorBoundaries'
// import DefaultProps from './7-DefaultProps'
// import ListKeys from './8-ListKeys'
// import Fragment from './9-Fragment'
// import Portal from './10-Portal'
// import Form from './11-Form'
// import AdvanceSetState from './12-AdvanceSetState'
// import CreateRef from './13-CreateRef'
// import PureComponent from './14-PureComponent'
import HOC from './15-HOC/App'

class App extends React.Component {
  render () {
    return (
      <div>
        <HOC />
        {/* <PureComponent /> */}
        {/* <CreateRef /> */}
        {/* <AdvanceSetState /> */}
        {/* <Form /> */}
        {/* <Portal /> */}
        {/* <Fragment /> */}
        {/* <ListKeys /> */}
        {/* <DefaultProps name='Ali' color='green' />
        <DefaultProps />
        <DefaultProps name='Eli' />
        <DefaultProps color='blue' /> */}
        {/* <ErrorBoundaries /> */}
        {/* <UnMounting /> */}
        {/* <LegacyLifeCycle /> */}
        {/* <ForceUpdate /> */}
        {/* <LifeCycle /> */}
        {/* <Counter defaultCounter={5} />
        <Counter defaultCounter={0} />
        <Counter defaultCounter={10} />
        <Counter />
        <Counter>{7}</Counter> */}
      </div>
    )
  }
}

export default App
