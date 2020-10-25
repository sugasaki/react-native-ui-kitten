import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Button } from '@ui-kitten/components';
import { default as theme } from './theme.json'; // <-- Import app theme
import { Radio, Toggle, CheckBox, Datepicker, Calendar, Text } from '@ui-kitten/components';
import { StyleSheet } from 'react-native';

export default () => (
  <ApplicationProvider {...eva} theme={{ ...eva.dark, ...theme }}>
    <Layout style={styles.container}>
      <Layout style={styles.layout} level='1'>
        <Text>hello! </Text>
      </Layout>
      <Layout style={styles.layout} level='1'>
        <Button>Button</Button>
      </Layout>
      <Layout style={styles.layout} level='2'>
        <Radio checked>Radio</Radio>
      </Layout>
      <Layout style={styles.layout} level='4'>
        <CheckBox checked>CheckBox</CheckBox>
      </Layout>
    </Layout>
    <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Toggle checked>Toggle</Toggle>
      <Datepicker />
      <Calendar/>
    </Layout>
  </ApplicationProvider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  layout: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});