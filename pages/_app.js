// LAYOUTS
import { Layout } from "../components/layouts";
// UTILS CONTEXTS
// import CartProvider from '../utils/contexts/CartContext'
// STYLES
import "../styles/globals.css";
import { CartProvider } from "../utils/contexts";

function App({ Component, pageProps }) {
  return (
    <CartProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CartProvider>
  );
}

export default App;
