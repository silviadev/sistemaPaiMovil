import React, { useState } from "react";
import {
  IonContent,
  IonPage,
  IonGrid,
  IonRow,
  IonCol,
  IonInput,
  IonButton,
  IonItem,
  IonIcon,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonLabel,
  IonText,
} from "@ionic/react";


import { useHistory } from "react-router-dom";

import { personCircle } from "ionicons/icons";
import AuthContext from "../context/my-context";

const Login = () => {
  const { login } = React.useContext(AuthContext);
  const history = useHistory();
  const [usuario, setUsuario] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [errorLogin, setErrorLogin] = useState("");

  const handleLogin = async () => {
    try {
      let result = await login({ user: usuario, password: contrasena });
      if (result.mensajeError) 
      {
        setErrorLogin(result.mensajeError.message);
      }
      if (result.status) {
        history.push("/dashboard/perfil");
      }
    } catch (error) {
      console.log("try error!!!!!!!");
      console.log(error);
    }

  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Iniciar Session Pai</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding ion-text-center">
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonIcon style={{ fontSize: "70px", color: "#0040ff" }} icon={personCircle} />
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="floating">Nombre usuario</IonLabel>
                <IonInput value={usuario} onIonChange={(e) => setUsuario(e.detail.value!)}></IonInput>
              </IonItem>
              <IonItem>
                <IonLabel position="floating">Contraseña</IonLabel>
                <IonInput
                  type="password"
                  value={contrasena}
                  onIonChange={(e) => setContrasena(e.detail.value!)}
                ></IonInput>
              </IonItem>
              <IonText color="danger"><sub>{errorLogin}</sub></IonText>
              
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonButton color="primary" expand="block" onClick={(e) => handleLogin()}>
                Iniciar Session
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Login;
