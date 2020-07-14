import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <html>
        <Head>
          {/* Global site tag (gtag.js) - Google Analytics */}
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-169178598-1"
          >
          </script>
          <script
            dangerouslySetInnerHTML={{
              __html: `<!-- Global site tag (gtag.js) - Google Analytics -->
              <script async src="https://www.googletagmanager.com/gtag/js?id=UA-169178598-1"></script>
              <script>
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
              
                gtag('config', 'UA-169178598-1');
              </script>
              `
            }}
          >
          </script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );z
  }
}