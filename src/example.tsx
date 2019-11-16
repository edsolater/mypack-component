import * as React from 'react'
import * as ReactDOM from 'react-dom'

import './example.css'
import { Popover } from './components'
import { GetWidgetHandler } from 'helper/type_helper'
import { toCase } from 'mypack-utilities'

const App: React.FC = () => {
  const popoverHandler = { musk: undefined } as GetWidgetHandler<typeof Popover>
  return (
    <Popover widgetHandler={popoverHandler}>
      <button className="hello">world</button>
    </Popover>
  )
}
ReactDOM.render(<App />, document.getElementById('root'))
console.log(toCase('bar', { formatType: 'PascalCase' }))
