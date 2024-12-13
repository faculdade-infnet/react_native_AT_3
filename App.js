import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthScreen from './screens/AuthScreen';
import UserScreen from './screens/UserScreen';
import RepositoriesScreen from './screens/RepositoriesScreen';
import RepositoryDetailsScreen from './screens/RepositoryDetailsScreen';
import IssuesScreen from './screens/IssuesScreen';
import IssueDetailsScreen from './screens/IssueDetailsScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="AuthScreen">
        <Stack.Screen name="AuthScreen" component={AuthScreen} />
        <Stack.Screen name="UserScreen" component={UserScreen} />
        <Stack.Screen name="RepositoriesScreen" component={RepositoriesScreen} />
        <Stack.Screen name="RepositoryDetailsScreen" component={RepositoryDetailsScreen} />
        <Stack.Screen name="IssuesScreen" component={IssuesScreen} />
        <Stack.Screen name="IssueDetailsScreen" component={IssueDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
