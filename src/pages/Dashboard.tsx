import {
  IonTabs,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonIcon,
} from "@ionic/react";
import React, { useEffect } from "react";
import { useHistory, RouteComponentProps, Route } from "react-router-dom";
import { IonLabel } from "@ionic/react";

import TabPerfil from "./TabPerfil";
import PerfilPaciente from "./PerfilPaciente";
import TabVacunas from "./TabVacunas";
import TabConfiguracion from "./TabConfiguracion";
import Details from "./Details";
import { apps, home, personCircle } from "ionicons/icons";

interface ResetProps
  extends RouteComponentProps<{
    id: string;
  }> {}

const Dashboard: React.FC<ResetProps> = ({ match }) => {
  const history = useHistory();

  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route path="/dashboard/perfil" component={TabPerfil} />
        <Route path="/dashboard/perfil/perfilPaciente/:id" component={PerfilPaciente} />
        <Route path="/dashboard/vacunas" component={TabVacunas} exact={true} />
        <Route path="/dashboard/vacunas/details" component={Details} />
        <Route path="/dashboard/configuracion" component={TabConfiguracion} />
      </IonRouterOutlet>
      <IonTabBar slot="bottom">
        <IonTabButton tab="perfil" href="/dashboard/perfil">
          <IonIcon icon={home} />
          <IonLabel>Inicio</IonLabel>
        </IonTabButton>
        <IonTabButton tab="vacunas" href="/dashboard/vacunas">
          <IonIcon icon={apps} />
          <IonLabel>Vacunas PAI</IonLabel>
        </IonTabButton>
        <IonTabButton tab="configuraciones" href="/dashboard/configuracion">
          <IonIcon icon={personCircle} />
          <IonLabel>Perfil</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default Dashboard;
