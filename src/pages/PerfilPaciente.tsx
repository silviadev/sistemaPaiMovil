import React from "react";
import { IonBackButton, IonButtons, IonHeader, IonToolbar, IonTitle, IonContent } from "@ionic/react";

const PerfilPaciente: React.FunctionComponent = () => {
  return (
    <React.Fragment>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/dashboard/perfil" />
          </IonButtons>
          <IonTitle>Perfiles</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <p>Detalle perfil paciente</p>
      </IonContent>
    </React.Fragment>
  );
};

export default PerfilPaciente;
