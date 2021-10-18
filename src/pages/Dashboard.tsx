import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonItemDivider,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  IonTabs,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonIcon,
} from "@ionic/react";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, RouteComponentProps, Route } from "react-router-dom";
import { IonGrid, IonRow, IonCol } from "@ionic/react";
import { IonItem, IonLabel, IonAvatar } from "@ionic/react";

import TabPerfil from "./TabPerfil";
import PerfilPaciente from "./PerfilPaciente";
import Tab2 from "./TabNotificiaciones";
import Tab3 from "./Tab3";
import Details from "./Details";
import { apps, home, personCircle } from "ionicons/icons";

interface ResetProps
  extends RouteComponentProps<{
    id: string;
  }> {}

const Dashboard: React.FC<ResetProps> = ({ match }) => {
  const history = useHistory();
  /* const [users, setUsers] = useState<Array<any>>([
    { first_name: "Jose", last_name: "apellido", email: "jo@gmail.com" },
    { first_name: "Margarita", last_name: "Sanchez", email: "jo@gmail.com" },
  ]); */
  useEffect(() => {
    /* const api = axios.create({
      baseURL: `https://www.paibolivia.org/api`,
    });
    api
      .get("/usuario/" + match.params.id + "/pacientes")
      .then((res) => {
        setUsers(res.data.data);
      })
      .catch((error) => {
        console.log("Error fetching data");
      }); */
  }, []);
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route path="/dashboard/perfil" component={TabPerfil} exact={true} />
        <Route path="/dashboard/perfil/perfilPaciente" component={PerfilPaciente} />
        <Route path="/dashboard/notificaciones" component={Tab2} exact={true} />
        <Route path="/dashboard/notificaciones/details" component={Details} />
        <Route path="/dashboard/tab3" component={Tab3} />
      </IonRouterOutlet>
      <IonTabBar slot="bottom">
        <IonTabButton tab="perfil" href="/dashboard/perfil">
          <IonIcon icon={home} />
          <IonLabel>Inicio</IonLabel>
        </IonTabButton>
        <IonTabButton tab="notificaciones" href="/dashboard/notificaciones">
          <IonIcon icon={apps} />
          <IonLabel>Notificaciones</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab3" href="/dashboard/tab3">
          <IonIcon icon={personCircle} />
          <IonLabel>Perfil</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default Dashboard;
