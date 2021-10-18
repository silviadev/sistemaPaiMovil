import React from "react";
import { IonApp, IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Redirect, Route } from "react-router-dom";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

/* Theme variables */
import "./theme/variables.css";

import Tab1 from "./pages/TabPerfil";
import Tab2 from "./pages/TabNotificiaciones";
import Tab3 from "./pages/Tab3";
import Details from "./pages/Details";
import { apps, home, personCircle } from "ionicons/icons";

import AuthContext from "./context/my-context";
const App: React.FC = () => {
  const { authValues } = React.useContext(AuthContext);
  console.log(authValues);
  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route path="/" exact={true}>
            <Login />
          </Route>
          <Route path="/dashboard/:tab" component={Dashboard} exact={true} />
          <Route path="/dashboard/:tab/:details" component={Dashboard} exact={true} />
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
