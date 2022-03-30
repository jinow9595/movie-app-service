import NavBar from '../components/NavBar';
import '../styles/globals.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
      <style jsx global>{`
        a {
          color: black;
          text-decoration: none;
        }

        .active {
          color: red;
        }
      `}</style>
    </>
  );
}