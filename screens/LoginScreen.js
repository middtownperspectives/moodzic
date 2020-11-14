import React, {useEffect, useState} from 'react';
import { View, Text } from 'react-native';

import spotifyAuthHandler from "../data/spotifyAuth";

const LoginScreen = () => {
  const [tokenAccess, setTokenAccess] = useState(false);


  useEffect(() => {
    const someFunction = async () => {
      const tokenExpirationTime = await getUserData('expirationTime');
      if (!tokenExpirationTime || new Date().getTime() > tokenExpirationTime) {
        await refreshTokens();
      } else {
        setTokenAccess({ accessTokenAvailable: true });
      }
    }
    someFunction();
  });

  if (tokenAccess) {
    return (
      <View >
        <Text>This is the Log In Screen</Text>
      </View>
    );
  } else {
    return (
      <View >
        <Text>Something is Not Right </Text>
      </View>
    );
  }

}

export default LoginScreen;
