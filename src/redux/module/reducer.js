import Action from './actions.js';

const INITSTATE = {

    user : 'mqx',
    name : 'x',

}

const root = ( state = INITSTATE , action ) => {
    console.log( state , 'initstate' );
    switch( action.type ){

        case Action.USER: 
            return {
                ...state,
                user: 'mqxshuai'
            };
        case Action.NAME:
            return {
                ...state,
                name: '就不告诉你'
            }
        default :
            return {
                ...state
            }
    }

}

export default root;