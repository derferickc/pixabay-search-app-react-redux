import { SAVE_IMAGE, REMOVE_IMAGE } from './types';

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