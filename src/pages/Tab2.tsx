import React from "react";
import { useHistory } from "react-router";
import {
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonTitle,
  IonToolbar,
  IonPage
} from "@ionic/react";

const Tab2 = () => {
  const history = useHistory();
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab Two</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem
            onClick={() => {
              history.push("tab2/details");
            }}
          >
            <IonLabel>
              <h2>Go to detail</h2>
            </IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
