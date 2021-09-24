import React from 'react';
import { NativeRouter, Route } from 'react-router-native';
import List from './src/components/List';
import CountryDetails from './src/components/CountryDetails';

export default function App() {
  return (
    <NativeRouter>
      <Route exact path="/" component={List} />
      <Route exact path="/countries/:name" component={CountryDetails} />
    </NativeRouter>
  );
}