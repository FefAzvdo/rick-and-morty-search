//Types
export const Types = {
  ADD_REQUEST: "characters/ADD_REQUEST",
  ADD_SUCCESS: "characters/ADD_SUCCESS",
  ADD_FAILURE: "characters/ADD_FAILURE",
  SHOW_NEXT_PAGE: "characters/SHOW_NEXT_PAGE",
}



//Actions
//REQUEST -> SAGA -> CHAMADA API -> SUCCESS
export const Creators = {
  addCharacterRequest: (params) => ({
    type: Types.ADD_REQUEST,
    payload: { params }
  }),

  addCharacterSuccess: (data, prev, next) => ({
    type: Types.ADD_SUCCESS,
    payload: { data, prev, next }
  }),

  addCharacterFailure: (error) => ({
    type: Types.ADD_FAILURE,
    payload: { error }
  }),

  showNextPage: (url) => ({
    type: Types.SHOW_NEXT_PAGE,
    payload: { url }
  }),
}




//Reducer

//Irá ser as PROPS do meu COMPONENTE
//Acessar via: this.props.characters
//characters poder ser qualquer nome que dermos no mapStateToProps
const INITIAL_STATE = {
  loading: false,
  data: [],
  error: null,
  prev: "",
  next: "",
}

export default function favorites(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_REQUEST:
      return {
        ...state,
        loading: true
      }
    case Types.ADD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        data: action.payload.data,
        prev: action.payload.prev,
        next: action.payload.next,
      }
    case Types.ADD_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      }
    default:
      return { ...state }
  }
}


