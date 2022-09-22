import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import fonts from '../../../assets/styles/fonts';
import {
  ArrowIcon,
  FirstAvatarSmall,
  NotificationIcon,
} from '../../../assets/svg';
import styles from './styles';

const Header = ({headerName = 'Our Answers'}) => {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity style={styles.arrowContainer}>
        <ArrowIcon />
      </TouchableOpacity>
      <View style={styles.textContainer}>
        <Text style={fonts.headerText}>{headerName}</Text>
      </View>

      <View style={styles.rightButtonsContainer}>
        <TouchableOpacity>
          <NotificationIcon />
        </TouchableOpacity>
        <TouchableOpacity>
          <FirstAvatarSmall />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
