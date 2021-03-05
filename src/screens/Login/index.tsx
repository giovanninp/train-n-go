import React from "react";

import {connect} from 'react-redux';
import { View, Text, ImageBackground } from "react-native";
import {NavigationScreenProp} from 'react-navigation';

import Frame from "../../components/Frame";
import Button from '../../components/common/Button';
import AuthSections from './AuthSections';

import {get} from '../../store/redux/reducers/auth';

import styles from "./styles";

interface ILogin {
  navigation: NavigationScreenProp<any,any>;
  [key: string]: any;
};

class Login extends React.Component<ILogin> {

  handleLogin = () => {
    const {navigation} = this.props;
    navigation.navigate('Home')

  }

  render() {
    return (
      <ImageBackground source={require('../../assets/images/login-bg.png')} style={{height: '100%', width: '100%'}} >
        <Frame>
          <View style={styles.container}>
            <View style={styles.header} />
            <AuthSections onLogin={this.handleLogin} />
          </View>
        </Frame>
      </ImageBackground>
    );
  }
}

const mapStateToProps = (state: any) => ({
  ...get.all(state),
})

export default connect(mapStateToProps)(Login);
