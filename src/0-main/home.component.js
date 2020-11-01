import React from 'react';
import { SafeAreaView } from 'react-native';
import { Button, Divider, Layout, TopNavigation } from '@ui-kitten/components';

export const HomeScreen = ({ navigation }) => {

  const navigateDetails = () => {
    navigation.navigate('ReactNativeOrigin');
  };
  const navigateGettingStart = () => {
    navigation.navigate('GettingStart');
  };
  const navigateBranding01 = () => {
    navigation.navigate('Branding01');
  };
  const navigateBranding02 = () => {
    navigation.navigate('Branding02');
  };
  const navigateBranding03 = () => {
    navigation.navigate('Branding03');
  };
  const navigateIconPack = () => {
    navigation.navigate('IconPack');
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation title='MyApp HomeScreen' alignment='center'/>
      <Divider/>
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button onPress={navigateDetails}>ReactNative Origin</Button>
      <Divider/>
      <Button onPress={navigateGettingStart}>01 Getting Start</Button>
      <Divider />
      <Button onPress={navigateBranding01}>02 Branding theme</Button>
      <Divider />
      <Button onPress={navigateBranding02}>02 Branding backgrounds</Button>
      <Divider />
      <Button onPress={navigateBranding03}>02 Branding Text and Icons</Button>
      <Divider />
      <Button onPress={navigateIconPack}>03 Icon Pack</Button>
      <Divider />
      </Layout>
    </SafeAreaView>
  );
};
