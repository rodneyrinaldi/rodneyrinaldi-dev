import Head from 'next/head'

export default function Landing() {

  function widthScreen() {
    return (screen.width)
  }

  function isMobile() {
    if (navigator.userAgent.match(/Android/i)
      || navigator.userAgent.match(/webOS/i)
      || navigator.userAgent.match(/iPhone/i)
      || navigator.userAgent.match(/iPad/i)
      || navigator.userAgent.match(/iPod/i)
      || navigator.userAgent.match(/BlackBerry/i)
      || navigator.userAgent.match(/Windows Phone/i)
    ) {
      return ("true")
    }
    else {
      return ("false")
    }
  }

  return (
    <>
      <header>
        header
      </header>

      <nav>
        nav
      </nav>

      <main>
        main
        <h1>
          A dead simple, responsive boilerplate: <a href="/landing">go</a>
        </h1>
      </main>

      <aside>
        aside
      </aside>

      <footer>
        footer
        {/* {'  '} {widthScreen()}
        {'  '} {isMobile()} */}
      </footer>

    </>
  )
}