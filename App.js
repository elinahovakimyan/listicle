import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import Signin from './src/screens/auth/Signin';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

const WEB_CLIENT_ID = '356032109327-0eka9phlma63uoi7sgenobcgpum7i77n.apps.googleusercontent.com'
const IOS_CLIENT_ID = '356032109327-91jiecs7rjmuuupojnjkqspfbcfpq9c9.apps.googleusercontent.com'

const App = () => {
  useEffect(() => {
    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
      webClientId: WEB_CLIENT_ID, // client ID of type WEB for your server (needed to verify user ID and offline access)
      offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
      iosClientId: IOS_CLIENT_ID, // [iOS] if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
    });
  }, [])

  return (
    <SafeAreaView>
      <Signin />
    </SafeAreaView>
  );
};

export default App;
