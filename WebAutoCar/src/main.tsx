import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { SnackbarProvider } from 'notistack'
import {Provider} from 'react-redux'
// import Swiper styles
import App from './App.tsx'
import { store } from './store/store.ts'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <SnackbarProvider maxSnack={3} anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}>
        <App />
      </SnackbarProvider>
    </Provider>
  </StrictMode>,
)  
