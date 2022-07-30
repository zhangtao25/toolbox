import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import './assets/css/index.css'
import 'antd/dist/antd.min.css'
import { BrowserRouter } from 'react-router-dom'
import { ConfigProvider } from 'antd'
import enUS from 'antd/lib/locale/en_US'

async function bootstrap() {
  const d: any = document.getElementById('root')
  ReactDOM.createRoot(d).render(
    <ConfigProvider locale={enUS}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ConfigProvider>,
  )
}
bootstrap()
