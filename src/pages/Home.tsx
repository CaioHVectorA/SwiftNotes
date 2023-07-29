import {
  IonContent,
  IonPage} from '@ionic/react';
import Header from '../components/Header';
import { ColumnContainer } from '../components/styled/Containers';
import FrontPage from '../components/FrontPage';
const Home: React.FC = () => {
  return (
    <IonPage id="home-page">
      <Header initial>SwiftNotes</Header>
      <IonContent fullscreen>
        <FrontPage />
      </IonContent>
    </IonPage>
  );
};

export default Home;
