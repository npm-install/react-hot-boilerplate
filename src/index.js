import React from 'react'
import { render } from 'react-dom'

import data from './data'
import Countries from './components/countries'
import UserList from './components/user'
import Forex from './components/forex'

render(<Countries countries={data} />, document.getElementById('countries'))

render(<UserList />, document.getElementById('users'))

render(<Forex />, document.getElementById('forex'))
