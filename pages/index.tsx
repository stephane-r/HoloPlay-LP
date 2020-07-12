import App from "../components/App";
import Header from "../components/Header";
import Main from "../components/Main";
import Button from "../components/Button";
import Title from "../components/Title";
import Text from "../components/Text";
import Spacer from "../components/Spacer";

const Home = () => (
  <App>
    <Header />
    <Main>
      <section style={{ paddingRight: 100 }}>
        <Title>
          Youtube Audio <br /> Player
        </Title>
        <Spacer height={40} />
        <Text>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi sint
          in officiis a placeat beatae ea atque et odit, tenetur libero aliquam.
          Nemo officiis odit repellendus assumenda quidem. Facere, corporis.
        </Text>
        <Spacer height={40} />
        <Button>Download</Button>
      </section>
      <aside>
        <img src="/mokup.png" alt="" width="350" />
      </aside>
    </Main>
  </App>
);

export default Home;
