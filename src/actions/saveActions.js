import { SAVE_IMAGE, REMOVE_IMAGE, FETCH_SAVED } from './types';

export function saveImage() {
  return ({
    type: SAVE_IMAGE
  });
}

export function removeImage() {
  return ({
    type: REMOVE_IMAGE
  });
}

export function fetchSaved() {
  console.log('action save')
  return ({
    type: FETCH_SAVED
  });
}