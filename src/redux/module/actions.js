export default class Actions{

    static USER = "user";
    static NAME = 'name';

    static setUser(){
        return {
            type: Actions.USER
        };
    }

    static setName(){

        return {
            type: Actions.NAME
        }

    }

}