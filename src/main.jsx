import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ConfigProvider, theme } from 'antd'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <ConfigProvider
    theme={{
      // 1. Use dark algorithm
      // algorithm: theme.darkAlgorithm,

      // 2. Combine dark algorithm and compact algorithm
      algorithm: [theme.darkAlgorithm, theme.compactAlgorithm],
    }}
  >
    <App />
    </ConfigProvider>
  </StrictMode>,
)
