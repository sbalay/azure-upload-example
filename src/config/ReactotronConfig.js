import Immutable from 'seamless-immutable';
import Reactotron, { trackGlobalErrors } from 'reactotron-react-native';
import apisaucePlugin from 'reactotron-apisauce';
import { reactotronRedux } from 'reactotron-redux';

if (__DEV__) {
  Reactotron.configure({ name: 'azureupload' })
    .use(trackGlobalErrors())
    .use(apisaucePlugin())
    .use(reactotronRedux({ onRestore: state => Immutable(state) }))
    .connect();
}
