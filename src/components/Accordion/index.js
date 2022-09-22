import React, {useState} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import Answer from '../Answer';

import {
  FirstAnswerIcon,
  SecondAnswerIcon,
  ThirdAnswerIcon,
  EyeActive,
  EyeDisabled,
} from '../../../assets/svg';

import styles from './styles';
import colors from '../../../assets/styles/colors';
import common from '../../../assets/styles/common';
import fonts from '../../../assets/styles/fonts';

const getImage = type => {
  switch (type) {
    case 3:
      return <FirstAnswerIcon />;
    case 2:
      return <SecondAnswerIcon />;
    case 1:
      return <ThirdAnswerIcon />;
    default:
      return <FirstAnswerIcon />;
  }
};

const Accordion = ({data}) => {
  const [open, setOpen] = useState(false);
  return (
    <LinearGradient
      style={[styles.accordionContainer]}
      start={{x: 0, y: 0.3}}
      end={{x: 0, y: 1}}
      colors={
        open ? [colors.gradient1, colors.gradient2] : [colors.grey, colors.grey]
      }>
      <View style={styles.headerContainer}>
        <View style={styles.leftSideContainer}>
          {getImage(data?.type)}
          <Text style={styles.countTextContainer}>{`#${data?.number}`}</Text>
        </View>
        <View style={styles.borderContainer} />
        <Text style={styles.textContainer}>{data?.question}</Text>

        <View style={styles.rightSideContainer}>
          {open && (
            <>
              {data?.data?.map((item, index) => (
                <View
                  style={[
                    styles.imageContainer,
                    index === 0 && common.marginLeft0,
                  ]}
                  key={item.avatar.uri}>
                  <Image
                    source={item.avatar}
                    resizeMode="cover"
                    style={styles.imageWrapper}
                  />
                </View>
              ))}
            </>
          )}
        </View>
      </View>
      {open && (
        <>
          {data?.data?.map((item, index) => (
            <Answer
              data={item}
              position={data?.data?.length - index}
              key={item.avatar.uri}
            />
          ))}
        </>
      )}

      <TouchableOpacity
        style={[styles.showButtonContainer, open && common.marginTop0]}
        onPress={() => {
          setOpen(!open);
        }}>
        <View style={styles.showImageContainer}>
          {open ? <EyeDisabled /> : <EyeActive />}
        </View>
        <Text style={[fonts.mainText, styles.showTextContainer]}>
          {open ? 'hide answers' : 'show answers'}
        </Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default Accordion;
