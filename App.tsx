/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template for TV
 * https://github.com/react-native-tvos/react-native-template-typescript-tv
 *
 * @format
 */

import React, { useEffect } from 'react';
import {
  NativeAppEventEmitter,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  useTVEventHandler,
} from 'react-native';
import { Colors, Header } from 'react-native/Libraries/NewAppScreen';
import 'react-native/tvos-types.d';

declare const global: { HermesInternal: null | {} };

const App = () => {
  useTVEventHandler((tvEvent) => console.log({ tvEvent }));

  useEffect(() => {
    const subscription = NativeAppEventEmitter.addListener(
      'onHWKeyEvent',
      (onHWKeyEvent) => console.log({ onHWKeyEvent }),
    );
    return () => subscription.remove();
  }, []);

  return (
    <>
      <SafeAreaView>
        <ScrollView style={styles.scrollView}>
          <Header />
        </ScrollView>
        {/* <View style={styles.scrollView}>
          <Header />
        </View> */}
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
