import Head from "next/head";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import App from "../components/App";
import Header from "../components/Header";
import Button from "../components/Button";
import Title from "../components/Title";
import Text from "../components/Text";
import Spacer from "../components/Spacer";
import { useState, useEffect } from "react";
import FeatureList from "../components/List/Feature";
import Divider from "../components/Divider";
import fetchYapRelease from "../utils/fetchYapRelease";
import SectionHead from "../components/SectionHead";
import Section from "../components/Section";
import Navigation from "../components/Navigation";
import { SCREENSHOTS } from "../data";
import Icon from "../components/Icon";
import { Icons } from "../enum/Icon";

const Home: React.FC = () => (
  <App>
    <Head>
      <title>HoloPlay</title>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicon/app.webmanifest" />
      <link
        rel="mask-icon"
        href="/favicon/safari-pinned-tab.svg"
        color="#ffffff"
      />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#ffffff" />
    </Head>
    <Header />
    <main>
      <Yap />
      <Divider hasDesktopException />
      <Features />
      <Divider
        style={{
          transform: "scaleX(-1) scaleY(-1)",
        }}
      />
      <ScreenShots />
      <Divider />
    </main>
    <Footer />
    <style jsx>{`
      .container {
        display: flex;
        align-items: center;
        min-height: calc(100vh - 200px);
        margin: auto;
        padding: 0 40px;
      }
      .section {
        width: 100%;
        min-width: 700px;
        max-width: 800px;
        flex: 1;
        padding-right: 100px;
        padding-left: 65px;
      }
      .app-screens {
        transform: rotate(20deg);
        display: flex;
        justify-content: flex-end;
        align-items: center;
        padding-right: 80px;
      }
      .aside {
        flex: 1;
      }
      .screen {
        padding: 0 10px;
      }
    `}</style>
  </App>
);

const Yap = () => {
  const [downloadUrl, setDownloadUrl] = useState(null);
  const [appVersion, setAppVersion] = useState(null);

  useEffect(() => {
    try {
      fetchYapRelease().then(({ tagName, browserDownloadUrl }) => {
        setAppVersion(tagName);
        setDownloadUrl(browserDownloadUrl);
      });
    } catch (error) {
      console.log(error);
    }
  });

  return (
    <>
      <Spacer height={20} xHeight={1} />
      <div id="app" className="container">
        <section className="section">
          <SectionHead
            title="HoloPlay"
            text="HoloPlay is an Android application which allows
            listen to Youtube sources through open instances source of Invidious."
            headingLevel="h1"
            color="white"
            style={{ textAlign: "left" }}
          />
          <Spacer height={40} />
          <div className="button-container">
            <Button href={downloadUrl}>
              <span className="show-for-medium">
                <Icon name={Icons.Github} color="white" width={30} />
              </span>
              <span>
                &nbsp; Download for <strong>Android</strong>
                {""}
                {appVersion && <small>&nbsp;({appVersion})</small>}
              </span>
            </Button>
          </div>
        </section>
        <aside className="aside">
          <div className="app-screens">
            <ParallaxProvider>
              <div className="screen">
                <Parallax y={[-27, 20]} tagOuter="figure">
                  <img src="/app/dashboard.png" alt="" width="250" />
                </Parallax>
              </div>
              <div className="screen">
                <Parallax y={[10, -10]} tagOuter="figure">
                  <img src="/app/player.png" alt="" width="360" />
                </Parallax>
              </div>
              <div className="screen">
                <Parallax y={[30, -40]} tagOuter="figure">
                  <img src="/app/playlists.png" alt="" width="250" />
                </Parallax>
              </div>
            </ParallaxProvider>
          </div>
        </aside>
      </div>
      <style jsx>{`
        .container {
          min-height: calc(100vh - 240px);
          margin: auto;
        }
        .section {
          width: 100%;
          max-width: 800px;
          flex: 1;
        }
        .app-screens {
          transform: rotate(20deg);
          display: flex;
          justify-content: flex-end;
          align-items: center;
          padding-right: 80px;
        }
        .aside {
          flex: 1;
        }
        .screen {
          padding: 0 10px;
        }
        .show-for-medium {
          display: none;
        }

        @media screen and (min-width: 768px) {
          .container {
            display: flex;
            align-items: center;
            height: calc(100vh - 200px);
          }
          .section {
            min-width: 700px;
            padding-right: 100px;
            padding-left: 65px;
          }
          .show-for-medium {
            display: block;
          }
        }

        @media screen and (max-width: 1024px) {
          .aside {
            display: none;
          }
        }

        @media screen and (max-width: 768px) {
          .button-container {
            padding: 0 20px;
          }
        }
      `}</style>
    </>
  );
};

const Features = () => (
  <>
    <div id="features" className="container">
      <Section>
        <Spacer height={40} xHeight={70} />
        <SectionHead
          title="Features"
          text="Youtube is probably the richest audio platform in the world. Thanks to the magnificent work of the open source project Invidious, HoloPlay allows access without tracking, without advertising and listening in the background without interruption."
          color="black"
        />
        <Spacer height={60} />
        <FeatureList />
        <Spacer height={40} />
      </Section>
    </div>
    <style jsx>{`
      .container {
        background: white;
      }
    `}</style>
  </>
);

const ScreenShots = () => (
  <>
    <Section id="screenshots">
      <SectionHead
        title="Screenshots"
        text="HoloPlay has a simple design and only has 5 screens. For now, the app is not optimized for tablet use, but maybe for later ?"
      />
      <Spacer height={50} xHeight={100} />
      <div className="container">
        <ul className="list">
          {SCREENSHOTS.map(({ src, title }) => (
            <li key={src} className="item">
              <img src={src} className="screenshot" alt={title} title={title} />
            </li>
          ))}
        </ul>
      </div>
      <Spacer height={50} xHeight={60} />
    </Section>
    <style jsx>{`
      .container {
        overflowx: auto;
      }
      .list {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        width: 100%;
        text-align: center;
        list-style: none;
        margin: 0;
        padding: 0;
      }
      .item {
        flex: 1;
        text-align: center;
        margin-bottom: 20px;
      }
      .screenshot {
        max-width: 100%;
        border-radius: 8px;
        box-shadow: 0 0.4375rem 1.875rem rgba(0, 0, 0, 0.2);
      }

      @media screen and (max-width: 640px) {
        .list {
          flex-wrap: no-wrap;
          width: 2000px;
        }
      }

      @media screen and (max-width: 1400px) {
        .item {
          padding: 0 20px;
        }
      }

      @media screen and (min-width: 641px) and (max-width: 768px) {
        .item {
          flex: 0 0 50%;
        }
      }

      @media screen and (min-width: 769px) {
        .item {
          flex: 0 0 25%;
          margin-bottom: 40px;
        }
      }
    `}</style>
  </>
);

const Footer = () => (
  <>
    <footer id="footer" className="footer">
      <Navigation linkColor="black" linkSpacer={5} />
      <div className="spacer" />
      <a
        href="https://github.com/stephane-r"
        target="_blank"
        className="link"
        title="Github"
      >
        <Icon name={Icons.Github} width={22} color="black" />
      </a>
      <a
        href="https://fr.linkedin.com/in/stéphane-richin-63b44710a"
        target="_blank"
        className="link"
        title="LinkedIn"
      >
        <Icon name={Icons.LinkedIn} width={22} />
      </a>
      <a
        href="https://twitter.com/ILeG3nDz"
        target="_blank"
        className="link"
        title="Twitter"
      >
        <Icon name={Icons.Twitter} width={22} />
      </a>
      <a
        href="mailto:contact@stephane-richin.fr"
        className="link"
        title="Email me"
      >
        <Icon name={Icons.Email} width={22} />
      </a>
    </footer>
    <style jsx>{`
      .footer {
        display: flex;
        justify-content: center;
        background: white;
      }
      .spacer {
        display: none;
        width: 30px;
      }
      .link {
        padding: 20px 10px;
      }
      .logo {
        display: block;
        transition: 0.2s;
      }
      .logo:hover {
        transform: translate3d(0, -5px, 0);
      }
      @media screen and (min-width: 768px) {
        .spacer {
          display: block;
        }
      }
    `}</style>
  </>
);

export default Home;
