// https://github.com/react-community/react-navigation/issues/458
// once that issue is resolved, the initial loading screen is no longer needed and should be removed
//  in favour of setting the initialRoute as a prop of the navigator

import { StackNavigator } from 'react-navigation';

import Home from './screens/home';

export default StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: () => ({
      title: 'Home'
    })
  }
});
