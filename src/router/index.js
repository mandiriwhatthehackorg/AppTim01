
import { createSwitchNavigator } from "react-navigation";

import SignedInNavigator from "./SignedInNavigator";
import SignedOutNavigator from "./SignedOutNavigator";

export default rootNavigator = (signedIn = false) => {
  return createSwitchNavigator(
    {
      SignedIn: {
        screen: SignedInNavigator,
      },
      SignedOut: {
        screen: SignedOutNavigator,
      }
    }, {
      initialRouteName: signedIn ? 'SignedIn' : 'SignedOut'
    }
  )
}