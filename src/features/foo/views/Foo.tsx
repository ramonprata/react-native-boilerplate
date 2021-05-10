import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../shared/store/reduxStore';
import { updateShowFoo } from '../redux';

interface FooProps {}

const Foo: React.FC<FooProps> = () => {
  const fooState = useSelector((state: RootState) => state.foo);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateShowFoo.operation(true));
  }, [dispatch]);

  return (
    <View>
      <Text>
        Foo:
        {String(fooState.showFoo)}
      </Text>
      <Text>
        Loading:
        {String(fooState.loading)}
      </Text>
    </View>
  );
};

export default Foo;
