import React from 'react';
import { SafeAreaView } from 'react-native';
import { Divider, Icon, Layout, Text, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import GettingStart from '../05-component/01-social/feed-1/index';

const BackIcon = (props) => (
  <Icon {...props} name='arrow-back' />
);

export const SocialScreen = ({ navigation }) => {

  const navigateBack = () => {
    navigation.goBack();
  };

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack}/>
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation title='MyApp SocialScreen' alignment='center' accessoryLeft={BackAction}/>
      <Divider/>
      <GettingStart />
    </SafeAreaView>
  );
};