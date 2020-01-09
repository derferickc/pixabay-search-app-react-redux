import { SAVE_IMAGE, REMOVE_IMAGE, FETCH_SAVED } from './types';

export function saveImage(id, largeImageURL) {
  return ({
    type: SAVE_IMAGE,
    payload: {
      id,
      largeImageURL
    }
  });
}

export function removeImage(id) {
  return ({
    type: REMOVE_IMAGE,
    payload: {
      id
    }
  });
}

export function fetchSaved() {
  return ({
    type: FETCH_SAVED
  });
}