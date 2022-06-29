import '../styles/globals.css'
import { AppProps } from 'next/app'

export default function _app({ Component, pageProps }) {
    return <Component {...pageProps} />
}

