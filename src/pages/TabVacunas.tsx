import React,{useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { RouteComponentProps } from "react-router";
import { IonBadge, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonItem, IonLabel, IonList, IonTitle, IonToolbar } from "@ionic/react";

import AuthContext from "../context/my-context";
import axios from "axios";

const TabVacunas: React.FunctionComponent<RouteComponentProps> = () => {
  const { authValues } = React.useContext(AuthContext);
  const [vacunas, setVacunas] = useState<Array<any>>([]);
  const history = useHistory();

  useEffect(() => {
    console.log(authValues);
    const api = axios.create({
      baseURL: `http://localhost/sistemaPai/api`,
    });
    api
      .get("/vacunas")
      .then((res) => {
        console.log(res.data);
        setVacunas(res.data);
      })
      .catch((error) => {
        console.log("Error fetching data");
      });
  }, []);

  return (
    <React.Fragment>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Vacunas</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {vacunas.map((vac, i) => {
          
          return (
            <IonCard key={i} color="success">
              <IonCardHeader>
                <IonCardTitle>{vac["nombre"]}</IonCardTitle>
                <IonCardSubtitle>{"Enfermedad que previene"}</IonCardSubtitle>
              </IonCardHeader>

              <IonCardContent>
                <p> {vac["descripcion"]}
                </p>
              </IonCardContent>
            </IonCard>
          )
        })}

      </IonContent>
    </React.Fragment>
  );
};

export default TabVacunas;
