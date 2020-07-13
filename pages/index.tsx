import App from '../components/App';
import Header from '../components/Header';
import Main from '../components/Main';
import Button from '../components/Button';
import Title from '../components/Title';
import Text from '../components/Text';
import Spacer from '../components/Spacer';
import { useState, useEffect } from 'react';
import Features from '../components/List/Feature';
import Divider from '../components/Divider';

const Home = () => {
  const [downloadUrl, setDownloadUrl] = useState(null);
  const [appVersion, setAppVersion] = useState(null);

  useEffect(() => {
    fetch(
      'https://api.github.com/repos/stephane-r/Youtube-Audio-Player/releases'
    )
      .then((request) => request.json())
      .then(([repo]) => {
        setAppVersion(repo.tag_name);

        if (repo.assets.length === 1) {
          setDownloadUrl(repo.assets[0].browser_download_url);
        }
      });
  });

  return (
    <App>
      <Header />
      <Main>
        <section
          style={{
            width: '100%',
            minWidth: 700,
            maxWidth: 800,
            flex: 1,
            paddingRight: 100,
            paddingLeft: 65,
          }}
        >
          <Title headingLevel="h1" color="white">
            Youtube Audio <br /> Player
          </Title>
          <Spacer height={40} />
          <Text color="white">
            Youtube Audio Player est une application Android qui permet
            d'écouter les sources Youtube en passant par les instances open
            source de Invidious.
          </Text>
          <Spacer height={40} />
          <Button href={downloadUrl}>
            <img src="/android.svg" alt="" width={30} />
            <span>
              &nbsp; Télécharger sur <strong>Android</strong>
              {''}
              {appVersion && <small>&nbsp;({appVersion})</small>}
            </span>
          </Button>
        </section>
        <aside style={{ flex: 1 }}>
          <div
            style={{
              transform: 'rotate(20deg)',
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'center',
              paddingRight: 80,
            }}
          >
            <div style={{ padding: '0 10px' }}>
              <img src="/mokup.png" alt="" width="250" />
            </div>
            <div style={{ padding: '0 10px' }}>
              <img src="/mokup.png" alt="" width="350" />
            </div>
            <div style={{ padding: '0 10px' }}>
              <img src="/mokup.png" alt="" width="250" />
            </div>
          </div>
        </aside>
      </Main>
      <Divider
        style={{
          marginTop: -250,
        }}
      />
      <div style={{ background: 'white' }}>
        <Spacer height={100} />
        <section
          style={{
            maxWidth: 1400,
            flex: 1,
            margin: 'auto',
          }}
        >
          <div
            style={{
              maxWidth: 820,
              textAlign: 'center',
              margin: 'auto',
            }}
          >
            <Title headingLevel="h2">Features</Title>
            <Spacer height={40} />
            <Text>
              YouTube, le moteur de recherche de musique le plus puissant du
              monde, est à votre service. Des tubes massifs aux gemmes rares en
              passant par les classiques cultes, tout y est. Avec plus de
              contenu ajouté chaque minute, c'est plus de musique que ce que
              vous pourriez écouter dans une vie.
            </Text>
          </div>
          <Spacer height={60} />
          <Features
            items={[
              {
                title: 'Recherche par vidéo et playlist',
                text: 'TODO',
              },
              {
                title: 'Créez vos playlists',
                text:
                  'Créer, éditer ou supprimer un nombre illimité de playlists',
              },
              {
                title: 'Mettez en favoris favoris',
                text: 'Un écran dédié à vos musiques favorites',
              },
              {
                title: 'Background mode',
                text:
                  'Continuez à naviguer sur votre mobile en écoutant vos musiques préférées',
              },
              {
                title: 'Offline',
                text:
                  'Le dernier son écouté reste en cache, partez dans le métro tranquille',
              },
              {
                title: 'Compatible Android Auto',
                text: 'Ecoutez vos musiques favorites, même en conduisant',
              },
              {
                title: 'Respet de votre vie privée',
                text: 'TODO',
              },
              {
                title: 'Open Source',
                text:
                  "To ensure security and stability, a big part of Headset's source is kept open",
              },
              {
                title: 'Cloud Syncing',
                text:
                  "Déjà utilisateur de l'une des instances Invidious ? Rajouter votre token et synchroniser vos sons préférés sur votre mobile",
              },
            ]}
          />
        </section>
        <Spacer height={40} />
      </div>
      <Divider
        style={{
          transform: 'scaleX(-1) scaleY(-1)',
        }}
      />
      <section
        style={{
          maxWidth: 1400,
          flex: 1,
          margin: 'auto',
        }}
      >
        <div
          style={{
            maxWidth: 820,
            textAlign: 'center',
            margin: 'auto',
          }}
        >
          <Title headingLevel="h2" color="white">
            Screenshots
          </Title>
          <Spacer height={40} />
          <Text color="white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
            beatae, suscipit quos voluptatibus eaque repudiandae magni doloribus
            quae, harum vel voluptate reprehenderit excepturi! Asperiores quasi,
            illo cum deleniti ratione doloremque.
          </Text>
        </div>
        <Spacer height={70} />
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <img
            src="https://raw.githubusercontent.com/stephane-r/Youtube-Audio-Player/develop/docs/dashboard.jpg"
            alt=""
          />
          <img
            src="https://raw.githubusercontent.com/stephane-r/Youtube-Audio-Player/develop/docs/player.jpg"
            alt=""
          />
          <img
            src="https://raw.githubusercontent.com/stephane-r/Youtube-Audio-Player/develop/docs/playlists.jpg"
            alt=""
          />
          <img
            src="https://raw.githubusercontent.com/stephane-r/Youtube-Audio-Player/develop/docs/favoris.jpg"
            alt=""
          />
        </div>
        <Spacer height={100} />
      </section>
      <Divider />
      <div style={{ background: 'white' }}>
        <Spacer height={50} />
      </div>
    </App>
  );
};

export default Home;
