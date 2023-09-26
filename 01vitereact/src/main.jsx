import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Coffee from './coffee.jsx'

// const anotheruser = "rahul432"

// const reactElement = React.createElement(
//   'a',
//   {href: 'https://google.com',target: '_blank' },
//   'Go to google',
//   anotheruser
// )

ReactDOM.createRoot(document.getElementById('root')).render(
  <>            
    <App />
    <Coffee />
  </>
    // reactElement
)
