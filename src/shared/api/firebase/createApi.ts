import { getFirestore } from 'firebase/firestore';
// eslint-disable-next-line @conarti/feature-sliced/layers-slices
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './const';

export const createApi = () => getFirestore(initializeApp(firebaseConfig));
