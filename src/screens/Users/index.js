import React from 'react';
import {Text, View} from 'react-native';
import common from '../../../assets/styles/common';
import fonts from '../../../assets/styles/fonts';

const Users = () => {
  return (
    <View style={[common.container, common.center]}>
      <Text style={fonts.emptyScreenFont}>
        {'Users screen will be here soon!'}
      </Text>
    </View>
  );
};

export default Users;
