import Actions from './actions';

export default class MiddleWare{

    static testMiddleWare(){

        return dispatch => {
    
            dispatch( Actions.setName() );
    
        }
    
    }

}