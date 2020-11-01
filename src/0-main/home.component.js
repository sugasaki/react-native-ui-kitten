import React from 'react';
import { SafeAreaView } from 'react-native';
import { StyleSheet } from 'react-native';
import { Button, Divider, Layout, TopNavigation, Card, Text } from '@ui-kitten/components';

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

      <Layout style={styles.topContainer} level='1'>

      <Card style={styles.card} status='success'>
        <Text style={styles.text} category='h3'>ReactNative初期画面</Text>
        <Text>ReactNativeの初期画面</Text>
        <Button onPress={navigateDetails}>ReactNative Origin</Button>
      </Card>
      <Divider />

      <Card style={styles.card} status='success'>
        <Text style={styles.text} category='h3'>01 Getting Start </Text>
        <Text>Getting Startで説明された画面</Text>
        <Button onPress={navigateGettingStart}>Getting Start</Button>
      </Card>
      <Divider />


      <Card style={styles.card} status='success'>
        <Text style={styles.text} category='h3'>02 Branding </Text>
        <Text>UI Kittenは、Eva DesignSystemが提供する2つのビジュアルテーマをサポートしています</Text>
        <Button onPress={navigateBranding01}>theme</Button>
        <Divider />
        <Button onPress={navigateBranding02}>backgrounds</Button>
        <Divider />
        <Button onPress={navigateBranding03}>Text and Icons</Button>
      </Card>
      <Divider />
      
      <Card style={styles.card} status='success'>
        <Text style={styles.text} category='h3'>03 アイコンパッケージ </Text>
        <Text>Eva Iconsは、一般的なアクションやアイテム用に美しく細工されたオープンソースアイコンのパックです。</Text>
        <Button onPress={navigateIconPack}>Icon Pack</Button>
      </Card>

      </Layout>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  card: {
    margin: 2,
  },
});
