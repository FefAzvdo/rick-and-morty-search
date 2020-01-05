import { call, put } from "redux-saga/effects";
import axios from "axios"

//Base URL
import api from "../../services/api";

//Actions
import { Creators as CharactersActions } from "../ducks/characters";


//Função saga
export function* addCharacter(action) {
  try {
    //  const response = yield api.get(`/character/?name=${action.payload.character}`)
    const { data } = yield call(api.get, `/character/?name=${action.payload.params.name}&status=${action.payload.params.status}&gender=${action.payload.params.gender}&species=${action.payload.params.species}`);

    const { results } = data

    const resultsArray = results.map(result => ({
      image: result.image,
      name: result.name,
      id: result.id,
      status: result.status,
      species: result.species,
      type: result.type,
      gender: result.gender,
      origin: result.origin.name,
      location: result.location.name,
    }))


    yield put(CharactersActions.addCharacterSuccess(resultsArray, data.info.prev, data.info.next));

  } catch (err) {
    yield put(CharactersActions.addCharacterFailure("Not found"))
  }
}

export function* showNextPage(action) {
  const { data } = yield call(axios.get, action.payload.url)
  const results = data.results;

  const resultsArray = results.map(result => ({
    image: result.image,
    name: result.name,
    id: result.id,
    status: result.status,
    species: result.species,
    type: result.type,
    gender: result.gender,
    origin: result.origin.name,
    location: result.location.name,
  }))

  console.log("resultsArray =>", resultsArray)

  yield put(CharactersActions.addCharacterSuccess(resultsArray, data.info.prev, data.info.next));
}

export function* showPrevPage(action) {
  const { data } = yield call(axios.get, action.payload.url)
  const results = data.results;

  const resultsArray = results.map(result => ({
    image: result.image,
    name: result.name,
    id: result.id,
    status: result.status,
    species: result.species,
    type: result.type,
    gender: result.gender,
    origin: result.origin.name,
    location: result.location.name,
  }))

  console.log("resultsArray =>", resultsArray)

  yield put(CharactersActions.addCharacterSuccess(resultsArray, data.info.prev, data.info.next));
}

