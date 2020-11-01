import React from 'react';
import { SafeAreaView } from 'react-native';
import { Divider, Icon, Layout, Text, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import GettingStart from '../00-react-native-origin/App';

const BackIcon = (props) => (
  <Icon {...props} name='arrow-back' />
);

export const ReactNativeOriginScreen = ({ navigation }) => {

  const navigateBack = () => {
    navigation.goBack();
  };

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack}/>
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation title='MyApp DetailsScreen' alignment='center' accessoryLeft={BackAction}/>
      <Divider/>
      <GettingStart />
    </SafeAreaView>
  );
};