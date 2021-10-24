import React, { useEffect, useState } from "react";
import { IonBackButton, IonButtons, IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonLabel, IonButton, IonList, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent } from "@ionic/react";
import { useParams } from "react-router";
import axios from "axios";

const PerfilPaciente: React.FunctionComponent = ({ match }: any) => {
  const { params: { id } } = match;
  const [vacunas, setVacunas] = useState([]);

  useEffect(() => {
    const api = axios.create({
      baseURL: `http://localhost/sistemaPAI/api`,
    });
    api
      .get("/cliente/" + id)
      .then((res) => {
        setVacunas(res.data);
        console.log("res get :", res.data);
      })
      .catch((error) => {
        console.log("Error fetching data");
      });
  }, []);

  console.log(vacunas);

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
        {vacunas.map((vac, i) => {
          const color = (vac["idPacienteVacuna"]) ? "success" : "light";
          return (
            <IonCard key={i} color={color} >
              <IonCardHeader>
                <IonCardSubtitle>{vac["rangoMesInicial"]} Meses</IonCardSubtitle>
                <IonCardTitle>{vac["nombrevacuna"]}</IonCardTitle>
              </IonCardHeader>

              <IonCardContent>
                <p> {vac["dosis"]} Via {vac["nombrevia"]}
                </p>
                {vac["fechaVacuna"] && <p>Fecha vacuna: {vac["fechaVacuna"]}</p>}
              </IonCardContent>
            </IonCard>
          )


        })}


      </IonContent>
    </React.Fragment>
  );
};

export default PerfilPaciente;

