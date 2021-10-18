import React from "react";
import { IonBackButton, IonButtons, IonHeader, IonToolbar, IonTitle, IonContent } from "@ionic/react";

const Details: React.FunctionComponent = () => {
  return (
    <React.Fragment>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/dashboard/notificaciones" />
          </IonButtons>
          <IonTitle>Notificaciones</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <p>Details</p>
      </IonContent>
    </React.Fragment>
  );
};

export default Details;
