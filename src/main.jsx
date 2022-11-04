import { Provider } from 'react-redux'
import { store } from './store'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { PokemonApp } from './PokemonApp'
import { TodoApp } from './TodoApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    {/* <App /> */}
    {/* <PokemonApp /> */}
    <TodoApp />
  </Provider>
)
