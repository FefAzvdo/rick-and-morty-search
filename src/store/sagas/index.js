import { all, takeLatest } from "redux-saga/effects";

import { Types as CharacterTypes } from "../ducks/characters";

//Funções sagas:
import { addCharacter, showNextPage, showPrevPage } from "./characters";

export default function* rootSaga() {
  yield all([
    takeLatest(CharacterTypes.ADD_REQUEST, addCharacter),
    takeLatest(CharacterTypes.SHOW_NEXT_PAGE, showNextPage),
    takeLatest(CharacterTypes.SHOW_PREV_PAGE, showPrevPage),
  ])
}