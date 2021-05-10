import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../shared/store/reduxStore';
import { setShowFooAsync } from '../redux';

interface FooProps {}

const Foo: React.FC<FooProps> = () => {
  const state = useSelector((state: RootState) => state.foo);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setShowFooAsync(true));
  }, [dispatch]);

  return <View>{<Text>Foo: {String(state.showFoo)}</Text>}</View>;
};

export default Foo;
