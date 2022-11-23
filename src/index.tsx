import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/index.css'

import { Auth0ProviderWithConfig } from './components/auth/Auth0ProviderWithConfig'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
  <React.StrictMode>
    <Auth0ProviderWithConfig>
      <App/>
    </Auth0ProviderWithConfig>
  </React.StrictMode>
)