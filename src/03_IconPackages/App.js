import React from 'react';
import * as eva from '@eva-design/eva';
import { IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { ApplicationProvider, Layout, Button, Icon } from '@ui-kitten/components';


export const FacebookIcon = (props) => (
  <Icon name='facebook' {...props} />
);

export const LoginButton = () => (
  <Button accessoryLeft={FacebookIcon}>Login with Facebook</Button>
);


const HomeScreen = () => (
  <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <LoginButton />
  </Layout>
);

export default () => (
  <>
    <IconRegistry icons={EvaIconsPack}/>
    <ApplicationProvider {...eva} theme={eva.light}>
      <HomeScreen />
    </ApplicationProvider>
  </>
  );
