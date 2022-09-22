import React from 'react';
import {View, TouchableOpacity, SafeAreaView} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  HomeIcon,
  BookmarkIcon,
  PlusIcon,
  SearchIcon,
  UsersIcon,
} from '../../../assets/svg';
import {Answers, Home, Users, Search, Bookmarks} from '../../screens';

import nav from '../constants';
import styles from './styles';
import colors from '../../../assets/styles/colors';

const Tab = createBottomTabNavigator();

const MyTabBar = ({state, descriptors, navigation}) => {
  const returnIcon = (route, isFocused) => {
    const iconColor = isFocused ? colors.screenBG : '#111';
    switch (route.name) {
      case nav.HOME:
        return <HomeIcon />;
      case nav.BOOKMARKS:
        return <BookmarkIcon />;
      case nav.ANSWERS:
        return <PlusIcon />;
      case nav.SEARCH:
        return <SearchIcon />;
      default:
        return <UsersIcon />;
    }
  };

  return (
    <View style={styles.menuWrapper}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const isFocused = state.index === index;
        const iconColor = isFocused ? colors.blueColor : colors.screenBG;
        const accessibilityState = isFocused ? {selected: true} : {};
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({name: route.name, merge: true});
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={Math.random()}
            accessibilityRole="button"
            accessibilityState={accessibilityState}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.fitContent}>
            <View style={styles.menuItem}>{returnIcon(route, isFocused)}</View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const MainTabs = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Tab.Navigator
        tabBar={props => <MyTabBar {...props} />}
        sceneContainerStyle={colors.screenBG}
        screenOptions={{headerShown: false}}>
        <Tab.Screen
          name={nav.HOME}
          component={Home}
          options={{title: 'Home'}}
        />
        <Tab.Screen
          name={nav.BOOKMARKS}
          component={Bookmarks}
          options={{title: 'Bookmarks'}}
        />

        <Tab.Screen
          name={nav.ANSWERS}
          component={Answers}
          options={{title: 'Answers'}}
        />
        <Tab.Screen
          name={nav.SEARCH}
          component={Search}
          options={{title: 'Search'}}
        />
        <Tab.Screen
          name={nav.USERS}
          component={Users}
          options={{title: 'Users'}}
        />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

export default MainTabs;
