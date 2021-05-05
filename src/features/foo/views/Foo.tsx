import React from 'react';
import { View, Text } from 'react-native';

interface FooProps {}

const Foo: React.FC<FooProps> = () => {
  return (
    <View>
      <Text>Foo</Text>
    </View>
  );
};

export default Foo;
