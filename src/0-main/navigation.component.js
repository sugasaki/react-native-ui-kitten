import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { HomeScreen } from './home.component';

import { ReactNativeOriginScreen } from './react-native-origin.component';
import { GettingStartScreen } from './01-getting-started.component';
import { Branding01Screen } from './02-branding01.component';
import { Branding02Screen } from './02-branding02.component';
import { Branding03Screen } from './02-branding03.component';
import { IconPackScreen } from './03-iconpack.component';


const { Navigator, Screen } = createStackNavigator();

const HomeNavigator = () => (
  <Navigator headerMode='none'>
    <Screen name='Home' component={HomeScreen}/>
    <Screen name='ReactNativeOrigin' component={ReactNativeOriginScreen}/>
    <Screen name='GettingStart' component={GettingStartScreen}/>
    <Screen name='Branding01' component={Branding01Screen}/>
    <Screen name='Branding02' component={Branding02Screen}/>
    <Screen name='Branding03' component={Branding03Screen}/>
    <Screen name='IconPack' component={IconPackScreen}/>
  </Navigator>
);

export const AppNavigator = () => (
  <NavigationContainer>
    <HomeNavigator/>
  </NavigationContainer>
);
