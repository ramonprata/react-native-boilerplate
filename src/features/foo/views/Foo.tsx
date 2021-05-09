import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../shared/store/reduxStore';
import { asyncActionDispatchParam } from '../redux';

interface FooProps {}

const Foo: React.FC<FooProps> = () => {
  const state = useSelector((state: RootState) => state.foo);
  const dispatch = useDispatch();
  // console.log('disptch :>> ', disptch);
  // console.log('store.dispatch :>> ', store.dispatch);
  // console.log('store.dispatch :>> ', disptch === store.dispatch);
  // console.log('state :>> ', state);

  useEffect(() => {
    // dispatch(asyncActionThunk(true)); // using thunk
    // asyncActionStoreDispatch(true); // without store.dispatch
    asyncActionDispatchParam(true, dispatch);
  }, [dispatch]);

  return <View>{<Text>Foo: {String(state.showFoo)}</Text>}</View>;
};

export default Foo;
