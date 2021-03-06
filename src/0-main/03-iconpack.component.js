import React from 'react';
import { SafeAreaView } from 'react-native';
import { Divider, Icon, Layout, Text, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import GettingStart from '../03_IconPackages/App';

const BackIcon = (props) => (
  <Icon {...props} name='arrow-back' />
);

export const IconPackScreen = ({ navigation }) => {

  const navigateBack = () => {
    navigation.goBack();
  };

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack}/>
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation title='MyApp Branding 03' alignment='center' accessoryLeft={BackAction}/>
      <Divider/>
      <GettingStart />
    </SafeAreaView>
  );
};