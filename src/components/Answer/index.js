import React from 'react';
import {Text, View, Image} from 'react-native';
import fonts from '../../../assets/styles/fonts';
import styles from './styles';

const Answer = ({data, position}) => {
  const border = position > 1 ? true : false;
  return (
    <>
      <View style={styles.answerContainer}>
        <View style={styles.avatarContainer}>
          <Image
            source={data?.avatar}
            resizeMode="cover"
            style={styles.imageWrapper}
          />
        </View>
        <View style={styles.answerTextContainer}>
          <Text style={[fonts.mainText, styles.answerTextWrapper]}>
            {data?.answer}
          </Text>
        </View>
      </View>
      {border && <View style={styles.answerBorderContainer} />}
    </>
  );
};

export default Answer;
