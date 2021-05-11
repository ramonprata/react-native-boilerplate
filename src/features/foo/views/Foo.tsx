import React from 'react';
import { View, Text } from 'react-native';

interface FooProps {}

const Foo: React.FC<FooProps> = () => (
  <View>
    <Text>Foo</Text>
  </View>
);

export default Foo;
