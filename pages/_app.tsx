
import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { createTheme, ThemeProvider} from '@mui/material/styles';
import PageWrapper from '../components/PageWrapper';
import PlayBar from '../components/PlayBar';
import { Provider } from 'react-redux';
import {store} from '../app-state/app-store'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const theme = createTheme({
  palette: {
    primary:{
      main:'rgba(0,0,0,0.88)',
      light:'rgba(0,0,0,0.78)'
    },
    secondary:{
      main:'#e91e63',
      dark:'#c2185b',
      light:'#f06292',
    }
  },
  components: {
    /*MuiListItemButton: {
      styleOverrides:{
       root:{'fontWeight':'bold'}
      }
 }*/
}
});
const queryClient = new QueryClient()
function MyApp({ Component, pageProps }: AppProps) {
  const state=store.getState()
  return (
    <QueryClientProvider client={queryClient}>
    <Provider store={store}>
    <ThemeProvider theme={theme}>
      <PageWrapper>
      <PlayBar/>
    <Component {...pageProps} />
    </PageWrapper>
    </ThemeProvider>
    </Provider>
    </QueryClientProvider>
  )
}

export default MyApp
