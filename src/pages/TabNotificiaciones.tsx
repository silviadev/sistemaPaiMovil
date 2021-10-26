import React from "react";
import { RouteComponentProps } from "react-router";
import { IonContent, IonHeader, IonItem, IonLabel, IonList, IonTitle, IonToolbar } from "@ionic/react";

const Tab2: React.FunctionComponent<RouteComponentProps> = ({ history }) => {
  return (
    <React.Fragment>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Notificaciones</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem href="/dashboard/notificaciones/details">
            <IonLabel>
              <h2>Ir al detalle</h2>
            </IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </React.Fragment>
  );
};

export default Tab2;
