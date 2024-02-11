import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MainRoutesParamList } from "./types.ts";
import { HomeController } from "../screens/home/HomeController.tsx";
import { AboutController } from "../screens/about/AboutController.tsx";
import { CustomTabBar } from "./components/CustomTabBar/CustomTabBar.tsx";

const Tab = createBottomTabNavigator<MainRoutesParamList>();

export const MainRoutes = () => {
    return (
        <Tab.Navigator
            initialRouteName={"Home"}
            screenOptions={{ headerShown: false }}
            tabBar={CustomTabBar}>
            <Tab.Screen name={"Home"} component={HomeController} />
            <Tab.Screen name={"About"} component={AboutController} />
        </Tab.Navigator>
    );
};
