import { createStore } from 'state-pool';
import { getDeviceTypeInfo } from '../helpers/utilities';

const store = createStore();

store.setState('deviceInfo', getDeviceTypeInfo());

export default store;