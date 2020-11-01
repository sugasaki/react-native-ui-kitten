import React from 'react';
import { SafeAreaView } from 'react-native';
import { StyleSheet } from 'react-native';
import { Button, Divider, Layout, TopNavigation, Card, Icon, Text, Spinner } from '@ui-kitten/components';

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

  const StarIcon = (props) => (
    <Icon {...props} name='star'/>
  );


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation title='MyApp HomeScreen' alignment='center'/>

      <Layout style={styles.topContainer} level='1'>

        <Card style={styles.card} status='success'>
          <Text style={styles.text} category='h3'>ReactNative初期画面</Text>
          <Text>ReactNativeの初期画面</Text>
          <Button onPress={navigateDetails} style={styles.button} appearance='outline' status='primary'>
            ReactNative Origin
          </Button>

        </Card>
        <Divider />

        <Card style={styles.card} status='success'>
          <Text style={styles.text} category='h3'>01 Getting Start </Text>
          <Text>Getting Startで説明された画面</Text>
          <Divider style={styles.divider} />
          <Button onPress={navigateGettingStart} style={styles.button} appearance='outline' status='success'>
          Getting Start
          </Button>
        </Card>
        <Divider />


        <Card style={styles.card} status='success'>
          <Text style={styles.text} category='h3'>02 Branding </Text>
          <Text>UI Kittenは、Eva DesignSystemが提供する2つのビジュアルテーマをサポートしています</Text>

          <Button onPress={navigateBranding01} style={styles.button} appearance='ghost' status='success'>
          theme
          </Button>
          <Button onPress={navigateBranding02} style={styles.button} appearance='ghost' status='warning'>
          backgrounds
          </Button>
          <Button onPress={navigateBranding03} style={styles.button} appearance='outline' status='danger'>
          Text and Icons
          </Button>
        </Card>
        <Divider />
        
        <Card style={styles.card} status='success'>
          <Text style={styles.text} category='h3'>03 アイコンパッケージ </Text>
          <Text>Eva Iconsは、一般的なアクションやアイテム用に美しく細工されたオープンソースアイコンのパックです。</Text>
          <Divider style={styles.divider} />
          <Button onPress={navigateIconPack} style={styles.button} status='success' accessoryRight={StarIcon}>
            Icon Pack
          </Button>
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
  divider: {
    marginBottom: 10,
  },
});
