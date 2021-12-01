import React from "react";
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { book, build, logOut } from "ionicons/icons";
import AuthContext from "../context/my-context";

const TabConfiguracionPage: React.FunctionComponent = () => {
  const { logout, authValues } = React.useContext(AuthContext);

  const onClick = ()=> {
    logout();
    window.location.href = "/";
  }

  return (
    <React.Fragment>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Configuracion</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonLabel>{authValues.user.nombre + " " + authValues.user.primerApellido + " "+  authValues.user.segundoApellido}
        </IonLabel>

        <IonList lines="none">
          <IonListHeader>
            <IonLabel>Perfil</IonLabel>
          </IonListHeader>
          <IonItem href="https://ionicframework.com/docs/" target="_blank">
            <IonIcon slot="start" color="medium" icon={book} />
            <IonLabel>Cambiar datos personales</IonLabel>
          </IonItem>
          <IonItem href="https://ionicframework.com/docs/building/scaffolding" target="_blank">
            <IonIcon slot="start" color="medium" icon={build} />
            <IonLabel>Cambiar contraseña</IonLabel>
          </IonItem>
          <IonItem onClick={onClick} >
            <IonIcon slot="start" color="medium" icon={logOut} />
            <IonLabel>Cerrar session</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </React.Fragment>
  );
};

export default TabConfiguracionPage;
