import '@/styles/globals.css'
import NavBar from '../Components/NavBar/NavBar'
import { QuestProvider } from '@/Context/Quest'




export default function App({ Component, pageProps }) {
  return (
  
  <QuestProvider>
  <NavBar/>
  <Component {...pageProps} />
  </QuestProvider>
  
  )
}
