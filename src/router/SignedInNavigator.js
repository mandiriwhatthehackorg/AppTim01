import React from "react";

import {
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";
import FontAwesome from "react-native-vector-icons/FontAwesome";

import HomeScreen from "../screens/HomeScreen";
import HistoryScreen from "../screens/HistoryScreen";
import BankingScreen from "../screens/BankingScreen";
import CustomerScreen from "../screens/CustomerScreen";
import ProfileScreen from "../screens/ProfileScreen";
import MapScreen from "../screens/MapScreen";
import NewAccountScreen from "../screens/NewAccountScreen";
import CameraScreen from "../screens/CameraScreen";
import SuccessScreen from "../screens/SuccessScreen";

const Home = createStackNavigator({
  School: {
    screen: HomeScreen,
    navigationOptions: {
      header: null
    }
  },
  Map: {
    screen: MapScreen,
    navigationOptions: {
      header: null
    }
  },
  Camera: {
    screen: CameraScreen,
    navigationOptions: {
      header: null
    }
  },
  Success: {
    screen: SuccessScreen,
    navigationOptions: {
      header: null,
    }
  }
});

const Banking = createStackNavigator({
  Banking: {
    screen: BankingScreen,
    navigationOptions: {
      header: null
    }
  },
  NewAccount: {
    screen: NewAccountScreen,
    navigationOptions: {
      header: null
    }
  }
});

const SignedInNavigator = createBottomTabNavigator(
  {
    Home: Home,
    History: HistoryScreen,
    Banking: Banking,
    Customer: CustomerScreen,
    Profile: ProfileScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = FontAwesome;

        let iconName;
        if (routeName === "Home") {
          iconName = "home";
        } else if (routeName === "History") {
          iconName = "history";
        } else if (routeName === "Banking") {
          iconName = "bank";
        } else if (routeName === "Customer") {
          iconName = "users";
        } else if (routeName === "Profile") {
          iconName = "user";
        }

        return <IconComponent name={iconName} size={20} color={tintColor} />;
      }
    }),
    tabBarOptions: {
      activeTintColor: "#1C5DD9",
      inactiveTintColor: "gray"
    }
  }
);

export default SignedInNavigator;
