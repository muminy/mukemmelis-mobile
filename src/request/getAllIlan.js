import {Api} from '../constant/Api';

export function getIlan() {
  return fetch(`${Api}/ilan/get`).then((responseJson) => responseJson.json());
}

export function getTipIlan(tip = '') {
  return fetch(`${Api}/ilan/search`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      is_tip: tip,
      is_baslik: '',
      is_deneyim: '',
      is_sehir: '',
    }),
  }).then((responseJson) => responseJson.json());
}


export function getDetail(id) {
  return fetch(`${Api}/ilan/id`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      id: id,
    }),
  }).then((responseJson) => responseJson.json());
}
