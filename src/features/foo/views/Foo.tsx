import React from 'react';
import { View, Text } from 'react-native';

interface FooProps {}

const Foo: React.FC<FooProps> = () => (
  <View testID="foo">
    <Text>Foo</Text>
  </View>
);

export default Foo;
