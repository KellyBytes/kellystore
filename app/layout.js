import './globals.css';
import './fanta.css';
import Head from './head';
import Link from 'next/link';
import Cart from '@/components/Cart';
import EmailInput from '@/components/EmailInput';
import ProductsProvider from '@/context/ProductContent';
import ScrollToTopButton from '@/components/ScrollToTopButton';

export const metadata = {
  title: 'KellyStore',
  description: 'Tiny templates. Big productivity.',
};

export default function RootLayout({ children }) {
  return (
    <ProductsProvider>
      <html lang="en">
        <Head />
        <body>
          <div id="portal"></div>
          <div id="app">
            <header>
              <div className="header-content">
                <Link href={'/'}>
                  <h2>KellyStore</h2>
                </Link>
                <h6 className="mid-text">
                  Boost your productivity, beautifully
                </h6>
                <Cart />
              </div>
            </header>

            <main>{children}</main>

            <div className="hr" />

            <footer>
              <div className="email-container">
                <h5>
                  Get a sneak peak at new additions to the store, special
                  offers, and so much more.
                </h5>
                <EmailInput />
              </div>
              <div className="links-container">
                <div>
                  <h3>KellyBytes</h3>
                  <Link href={'https://kellybytes.netlify.app'} target="_blank">
                    Portfolio
                  </Link>
                  <Link
                    href={'https://github.com/KellyBytes/kellystore'}
                    target="_blank"
                  >
                    GitHub
                  </Link>
                </div>
                <div>
                  <h3>Store</h3>
                  <Link href={'/'}>Home</Link>
                  <Link href={'/cart'}>Cart</Link>
                </div>
                <div>
                  <h3>Support</h3>
                  <Link href={'/contact'}>Contact (UC)</Link>
                  <Link href={'/faq'}>FAQs (UC)</Link>
                </div>
              </div>
              <div className="socials">
                <p>
                  ©{' '}
                  <a href="https://kellybytes.netlify.app" target="_blank">
                    KellyBytes
                  </a>{' '}
                  2025
                  <br />
                  Built with Next.js &{' '}
                  <a href="https://www.fantacss.smoljames.com" target="_blank">
                    FantaCSS
                  </a>{' '}
                  🔥
                </p>
                <div className="social-links">
                  <Link href={'https://github.com/KellyBytes'} target="_blank">
                    <i className="fa-brands fa-github"></i>
                  </Link>
                  <Link
                    href={'https://www.linkedin.com/in/erikoiwashita/'}
                    target="_blank"
                  >
                    <i className="fa-brands fa-linkedin"></i>
                  </Link>
                  <Link href={'https://codepen.io/KellyBytes'} target="_blank">
                    <i className="fa-brands fa-codepen"></i>
                  </Link>
                </div>
              </div>
            </footer>
          </div>
          <ScrollToTopButton />
        </body>
      </html>
    </ProductsProvider>
  );
}
