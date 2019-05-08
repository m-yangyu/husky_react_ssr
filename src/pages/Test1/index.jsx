import React , { Component } from 'react';
// import Styles from './sass/index.scss';
import Action from 'REDUX/module/actions';
import { connect } from 'react-redux';
import MiddleWare from 'REDUX/module/middleWare';
//antd 按需引入
import Button from 'antd/lib/button';
import 'antd/lib/button/style'
//antd 全部引入
// import { Button } from 'antd';
// import Main from 'CONTAINERS/Main';
const mapStateToProps = ( root ) => ({
    user: root.root.user,
    name: root.root.name,
})

const mapDispthToProps = ( dispatch )=>({

    setUser: () => {
        dispatch( Action.setUser() )
    },
    setName: () => {
        dispatch( MiddleWare.testMiddleWare() );
    }

})

class Test1 extends Component{

    constructor( props ){

        super( props );
        this.state = {

        };
        console.log(props);
    }

    handleClick = () => {

        this.props.setUser();
        this.props.setName();

    }

    MainCallBack( arr ){

        console.log( arr , 'MainCallBack');
        arr[0]();

    }

    render(){

        return (

            <div>
                <button onClick={this.handleClick}>test1的测试</button>
                <p>{ this.props.data }</p>
                <p>{ this.props.user }</p>
                <p>{ this.props.name }</p>
                {/* <Main cb={ this.MainCallBack }></Main> */}
                <Button>测试antd和test1</Button>
            </div>

        )

    }

}

export default connect(
    mapStateToProps,
    mapDispthToProps
)(Test1);