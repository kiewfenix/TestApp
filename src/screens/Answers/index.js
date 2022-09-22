import React from 'react';
import {ScrollView, View, Text} from 'react-native';
import {Accordion, Header} from '../../components';
import {answers} from '../../constants/answers';
import common from '../../../assets/styles/common';
import fonts from '../../../assets/styles/fonts';
import styles from './styles';

const Answers = () => {
  const answersCount = answers.length;

  return (
    <ScrollView style={(common.paddingHorizontal17, common.container)}>
      <Header />
      <View style={[common.center, common.marginBottom20]}>
        <View style={[styles.countContainer, common.center]}>
          <Text
            style={[
              fonts.headerText,
              styles.countText,
            ]}>{`Total: ${answersCount}`}</Text>
        </View>
        {answers?.map(item => (
          <View style={styles.answerContainer} key={item.number}>
            <Accordion data={item} />
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default Answers;
