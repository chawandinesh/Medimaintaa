import React from 'react';
import {View, Text} from 'react-native';
const MediMaintaaContext = React.createContext(null);
const initialState = [];
export default function context() {
  const [state, setState] = React.useState(initialState);
  return (
    <MediMaintaaContext.Provider value={{state, setState}}>
      <Text></Text>
    </MediMaintaaContext.Provider>
  );
}
