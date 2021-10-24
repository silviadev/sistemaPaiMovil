import React, { useState, useEffect } from "react";
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useHistory } from "react-router-dom";
import { book, build, colorFill, grid } from "ionicons/icons";
//import "./Tab1.css";
import AuthContext from "../context/my-context";
import axios from "axios";


const TabPerfil: React.FunctionComponent = () => {
  const { authValues } = React.useContext(AuthContext);
  const [users, setUsers] = useState<Array<any>>([]);
  const history = useHistory();

  useEffect(() => {
    console.log(authValues);
    const api = axios.create({
      baseURL: `http://localhost/sistemaPAI/api`,
    });
    api
      .get("/usuario/" + authValues.user.idUsuario + "/pacientes")
      .then((res) => {
        console.log(res);
        setUsers(res.data.pacientes);
      })
      .catch((error) => {
        console.log("Error fetching data");
      });
  }, []);
  return (
    <React.Fragment>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Perfiles</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {users.map((user, i) => {
          console.log("user: ",user);
          return (
            <IonCard key={i} onClick={(e) => {
              e.preventDefault();
              history.push('/dashboard/perfil/perfilPaciente/'+user.idPaciente)}} >
              <IonCardHeader>
                <IonCardTitle>{user.nombre + " " + user.primerApellido+ " " + user.segundoApellido}</IonCardTitle>
                <IonCardSubtitle><h5>{user.codigo}</h5></IonCardSubtitle>
              </IonCardHeader>

              <IonCardContent>Fecha de Nacimiento: {user.fechaNacimiento}</IonCardContent>
            </IonCard>
          );
        })}
      </IonContent>
    </React.Fragment>
  );
};

export default TabPerfil;
