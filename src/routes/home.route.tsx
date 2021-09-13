import React from "react";
import { Text, StyleSheet } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import TarefaStack from "./tarefa.route";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../styles/colors";
import { Camera, Map, File } from "../pages";

const Drawer = createDrawerNavigator();

export default function HomeRoute() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: { backgroundColor: colors.purple },
        headerTintColor: colors.purpleLight,
        headerTitle: () => <Text style={styles.title}>Tarefas</Text>,
        drawerStyle: {
          backgroundColor: colors.purple,
        },
        drawerInactiveTintColor: colors.purpleLight,
        drawerActiveTintColor: colors.purpleLight,
      }}
    >
      <Drawer.Screen
        name="TarefasStack"
        component={TarefaStack}
        options={{
          drawerLabel: "Tarefas",
          drawerIcon: () => (
            <MaterialCommunityIcons name="avaliacao" size={24} color={colors.purpleLight} />
          ),
        }}
      />
      <Drawer.Screen name="Camera" component={Camera} />
      <Drawer.Screen name="File" component={File} />
      <Drawer.Screen name="Map" component={Map} />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
    title: {
      color: colors.purpleLight,
      fontWeight: "bold",
      fontSize: 18,
    },
  });