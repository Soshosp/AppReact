import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Perfil from "../../views/Perfil/Perfil";
import Sobre from "../../views/Colecao/Colecao";
import Item from "../../views/Item/Item";
import RotasPrincipalStack from "../rotasStack/RotasPrincipalStack";

const Drawer = createDrawerNavigator();

const RotasDrawer = () => {
  return (
    <Drawer.Navigator initialRouteName="Inicial">
      <Drawer.Screen name="Inicial" component={RotasPrincipalStack} />
      <Drawer.Screen name="Colecao" component={Sobre} />
      <Drawer.Screen name="Perfil" component={Perfil} />
    </Drawer.Navigator>
  );
};

export default RotasDrawer;