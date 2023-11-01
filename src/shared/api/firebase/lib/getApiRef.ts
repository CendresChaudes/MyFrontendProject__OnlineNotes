import { getFirestore } from 'firebase/firestore';
// eslint-disable-next-line @conarti/feature-sliced/layers-slices
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../const';

const app = initializeApp(firebaseConfig);

export const getApiRef = () => getFirestore(app);
