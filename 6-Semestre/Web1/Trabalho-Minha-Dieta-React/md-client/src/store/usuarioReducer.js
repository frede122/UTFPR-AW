const INITIAL_STATE = {
    usuarioEmail: '',
    usuarioLogado: 0,
    usuarioTipo: 1,
    usuarioId: '',
};

function usuarioReducer(state = INITIAL_STATE, action) {
    switch(action.type) {
        case 'LOGIN':
            return {...state, usuarioLogado:1, usuarioTipo: action.usuarioTipo, usuarioEmail: action.usuarioEmail, usuarioId: action.usuarioId }
        case 'LOGOUT' :
            return {...state, usuarioLogado:0, usuarioTipo: null, usuarioEmail:  null }
        default:
            return state;
    }
}

export default usuarioReducer;