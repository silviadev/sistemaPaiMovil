import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItemDivider } from '@ionic/react';
import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useHistory, RouteComponentProps } from "react-router-dom";
import { IonGrid, IonRow, IonCol, IonIcon } from '@ionic/react';
import { IonItem, IonLabel, IonAvatar } from '@ionic/react';
import { personCircle } from "ionicons/icons";

import Menu from '../components/Menu';

interface ResetProps
  extends RouteComponentProps<{
    id: string;
  }> { }

const Dashboard: React.FC<ResetProps> = ({ match }) => {
  const history = useHistory();
  const [user, setUser] = useState<any>({});
  const [users, setUsers] = useState<Array<any>>([]);
  
  useEffect(() => {
    const api = axios.create({
      baseURL: `http://localhost/sistemaPai/api`
    })
    api.get("/usuario/" + match.params.id)
      .then(res => {
        console.log(res.data);
        setUser(res.data);
        setUsers(res.data.pacientes);
      })
      .catch(error => {
        console.log("Error fetching data")
      })
  }, [])
  return (
    <IonPage>
      <Menu />
      <IonHeader>
        <IonToolbar className="primary">
          <IonTitle>Sistema PAI</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding ion-text-center">
        <IonGrid>
          <IonRow>
            <IonCol>
              <h4>{user.nombre + " "+ user.primerApellido + " " + user.segundoApellido}</h4>
              <IonItemDivider></IonItemDivider>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              {users.map((user, i) => {
                return (
                  <IonItem key={i}>
                    <IonAvatar>
                      <IonIcon
                        style={{ fontSize: "70px", color: "#0040ff" }}
                        icon={personCircle}
                      />
                    </IonAvatar>
                    <IonLabel>
                      <h2 style={{ paddingLeft: "10px" }}>{user.nombre + " " + user.primerApellido + " " + user.segundoApellido} </h2>
                      <p style={{ paddingLeft: "10px" }}>{user.edad}</p>
                    </IonLabel>
                  </IonItem>
                );
              })}
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Dashboard;
