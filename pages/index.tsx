import App from "../components/App";
import Header from "../components/Header";
import Main from "../components/Main";
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

const Home = () => (
  <App>
    <Header />
    <main>
      <Yap />
      <Divider
        style={{
          marginTop: -250,
        }}
      />
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
      <div className="container">
        <section className="section">
          <SectionHead
            title="Youtube Audio Player"
            text="Youtube Audio Player est une application Android qui permet
            d'écouter les sources Youtube en passant par les instances open
            source de Invidious."
            headingLevel="h1"
            color="white"
            style={{ textAlign: "left" }}
          />
          <Spacer height={40} />
          <Button href={downloadUrl}>
            <img src="/android.svg" alt="Android icon" width={30} />
            <span>
              &nbsp; Télécharger sur <strong>Android</strong>
              {""}
              {appVersion && <small>&nbsp;({appVersion})</small>}
            </span>
          </Button>
        </section>
        <aside className="aside">
          <div className="app-screens">
            <div className="screen">
              <img src="/mokup.png" alt="" width="250" />
            </div>
            <div className="screen">
              <img src="/mokup.png" alt="" width="350" />
            </div>
            <div className="screen">
              <img src="/mokup.png" alt="" width="250" />
            </div>
          </div>
        </aside>
      </div>
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
    </>
  );
};

const Features = () => (
  <>
    <div className="container">
      <Section>
        <Spacer height={100} />
        <SectionHead
          title="Features"
          text="YouTube, le moteur de recherche de musique le plus puissant du
          monde, est à votre service. Des tubes massifs aux gemmes rares en
          passant par les classiques cultes, tout y est. Avec plus de contenu
          ajouté chaque minute, c'est plus de musique que ce que vous pourriez
          écouter dans une vie."
          color="black"
        />
        <Spacer height={60} />
        <FeatureList items={FEATURES_ITEMS} />
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
    <Section>
      <SectionHead
        title="Screenshots"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam beatae,
          suscipit quos voluptatibus eaque repudiandae magni doloribus quae,
          harum vel voluptate reprehenderit excepturi! Asperiores quasi, illo
          cum deleniti ratione doloremque."
      />
      <Spacer height={70} />
      <ul className="list">
        {SCREENSHOTS.map(({ src, title }) => (
          <li>
            <img src={src} className="screenshot" alt={title} title={title} />
          </li>
        ))}
      </ul>
      <Spacer height={100} />
    </Section>
    <style jsx>{`
      .list {
        display: flex;
        justify-content: space-between;
        list-style: none;
        margin: 0;
        padding: 0;
      }
      .screenshot {
        border-radius: 8px;
        box-shadow: 0 0.4375rem 1.875rem rgba(0, 0, 0, 0.2);
      }
    `}</style>
  </>
);

const Footer = () => (
  <>
    <footer className="footer">
      <Spacer height={50} />
    </footer>
    <style jsx>{`
      .footer {
        background: white;
      }
    `}</style>
  </>
);

const FEATURES_ITEMS = [
  {
    title: "Recherche par vidéo et playlist",
    text: "TODO",
  },
  {
    title: "Créez vos playlists",
    text: "Créer, éditer ou supprimer un nombre illimité de playlists",
  },
  {
    title: "Mettez en favoris favoris",
    text: "Un écran dédié à vos musiques favorites",
  },
  {
    title: "Background mode",
    text:
      "Continuez à naviguer sur votre mobile en écoutant vos musiques préférées",
  },
  {
    title: "Offline",
    text:
      "Le dernier son écouté reste en cache, partez dans le métro tranquille",
  },
  {
    title: "Compatible Android Auto",
    text: "Ecoutez vos musiques favorites, même en conduisant",
  },
  {
    title: "Respet de votre vie privée",
    text: "TODO",
  },
  {
    title: "Open Source",
    text:
      "To ensure security and stability, a big part of Headset's source is kept open",
  },
  {
    title: "Cloud Syncing",
    text:
      "Déjà utilisateur de l'une des instances Invidious ? Rajouter votre token et synchroniser vos sons préférés sur votre mobile",
  },
];

const SCREENSHOTS = [
  {
    src:
      "https://raw.githubusercontent.com/stephane-r/Youtube-Audio-Player/develop/docs/dashboard.jpg",
    title: "Dashboard",
  },
  {
    src:
      "https://raw.githubusercontent.com/stephane-r/Youtube-Audio-Player/develop/docs/player.jpg",
    title: "Player",
  },
  {
    src:
      "https://raw.githubusercontent.com/stephane-r/Youtube-Audio-Player/develop/docs/playlists.jpg",
    title: "Playlists",
  },
  {
    src:
      "https://raw.githubusercontent.com/stephane-r/Youtube-Audio-Player/develop/docs/favoris.jpg",
    title: "Favoris",
  },
];

export default Home;
