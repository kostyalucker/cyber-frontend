import { createStore } from 'redux'
import { wrapStore } from 'webext-redux'
import rootReducer from './reducers'

const store = createStore(rootReducer, {})
/*eslint-disable*/
const eventSource = new EventSource('http://localhost:8080/sse')

eventSource.onopen = function(e) {
  console.log(`Соединение открыто`)
  console.log(e)
}

eventSource.onerror = function(e) {
  console.log(e)
  eventSource.close()
}

eventSource.onmessage = function(e) {
  // console.log(e.data);
}

eventSource.addEventListener('matches', function(e) {
  try {
    const jsonData = JSON.parse(e.data)
    console.log(jsonData.value)
    store.dispatch({
      type: 'SET_MATCHES',
      payload: jsonData.value
    })
    // console.log(store.getState())
  } catch (e) {
    console.log(`Ошибка ${e}`)
  }
})

wrapStore(store)
