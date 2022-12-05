import ReactDOM from 'react-dom/client'
import App from './App'
import { AppProviders } from './context'
import 'antd/dist/antd.less'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <AppProviders>
    <App />
  </AppProviders>
)
