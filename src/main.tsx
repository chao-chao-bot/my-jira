import ReactDOM from 'react-dom/client'
import App from './App'
import { AppProviders } from './context'
import 'antd/dist/antd.less'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <AppProviders>
      <App />
    </AppProviders>
  </BrowserRouter>
)
