import React from 'react';
import { View, Text } from 'react-native';
import { ComponentNameOne } from './FooStyledComponents';

interface FooProps {}

const Foo: React.FC<FooProps> = () => (
  <View testID="fooScreen">
    <Text>Foo</Text>
    <ComponentNameOne />
  </View>
);

export default Foo;
