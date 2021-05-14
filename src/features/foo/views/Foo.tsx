import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text } from 'react-native';
import { RootState } from '../../../shared/store/reduxStore';
import { updateShowFoo } from '../redux';
import { ComponentNameOne } from './FooStyledComponents';

interface FooProps {}

const Foo: React.FC<FooProps> = () => {
  const fooState = useSelector((state: RootState) => state.foo);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateShowFoo.operation(true));
  }, [dispatch]);

  return (
    <View testID="fooScreen">
      <Text>
        Foo:
        {String(fooState.showFoo)}
      </Text>
      <Text>
        Loading:
        {String(fooState.loading)}
      </Text>
      <ComponentNameOne />
    </View>
  );
};

export default Foo;
