import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../shared/store/reduxStore';
import { updateShowFoo, updateShowFooAsync, setShowFoo } from '../redux';

interface FooProps {}

const Foo: React.FC<FooProps> = () => {
  const state = useSelector((state: RootState) => state.foo);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateShowFoo.operation(true));
  }, [dispatch]);

  return (
    <View>
      <Text>
        Foo:
        {String(state.showFoo)}
      </Text>
      <Text>
        Loading:
        {String(state.loading)}
      </Text>
    </View>
  );
};

export default Foo;
