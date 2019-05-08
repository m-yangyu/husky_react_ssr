import Test from 'PAGES/Test';
import Test1 from 'PAGES/Test1';
import { Hello } from 'PAGES/Test2';
// import loadable from '@loadable/component';

export default {

    '/ssr' :{
        component: Test,
        name: 'test',
    },
    '/test1':{
        component: Test1,
        name: 'test1'
    },
    '/test2':{
        component: Hello,
        name:'test2',
    }

}