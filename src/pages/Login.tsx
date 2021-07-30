import React, { useState } from "react";
import { IonContent, IonPage, IonGrid, IonRow, IonCol, IonInput, IonButton, IonItem, IonIcon, IonHeader, IonToolbar, IonTitle, IonLabel } from '@ionic/react';
import axios from "axios";
import { useHistory } from "react-router-dom";

import { personCircle } from "ionicons/icons";

const Login = () => {
  const history = useHistory();
  const [usuario, setUsuario] = useState("");
  const [contrasena, setContrasena] = useState("");
  const handleLogin = () => {
    const loginData = {
      "nombreUsuario": usuario,
      "contrasena": contrasena
    }
    const api = axios.create({
      baseURL: `http://localhost/sistemaPAI/index.php/api`
    })

    api.post("/login", loginData)
      .then(res => {
        console.log(res);
        console.log("login!!! successfully!!!");
        history.push("/dashboard/" + res.data.idUsuario);
      })
      .catch(error => {
        console.log("error!!!!");
        //setMessage("Auth failure! Please create an account");
        //setIserror(true)
      })
  };


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Iniciar Session</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding ion-text-center">
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonIcon
                style={{ fontSize: "70px", color: "#0040ff" }}
                icon={personCircle}
              />
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="floating">Nombre usuario</IonLabel>
                <IonInput value={usuario} onIonChange={e => setUsuario(e.detail.value!)}></IonInput>
              </IonItem>
              <IonItem>
                <IonLabel position="floating">Contraseña</IonLabel>
                <IonInput type="password" value={contrasena} onIonChange={e => setContrasena(e.detail.value!)}></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonButton color="light" expand="block" onClick={e => handleLogin()}>Iniciar Session</IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  )
}

export default Login;
