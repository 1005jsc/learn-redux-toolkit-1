import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { productActions } from '../modules/counter';

export const Yoyo = () => {
  // 8. 이제 store를 쓸 수 있다
  // state를 사용하려면 useSelector를 쓴다
  // useSelector에 쓰이는 callback함수의 return값은 index.js의 configureStore안의
  // reducer에 등록 되어있는 객체를 보면서 아예 똑같은 꼴로 정의해주면 된다

  // 9. 함수를 사용하려면 useDispatch로 dispatch에 함수를 넣으면된다
  // 그럼 action.payload는 어떻게 다루느냐??
  // 리듀서 함수 (아래 예로는 getAllProducts)의 파라메터에 넣어주면 된다

  const {
    provider: { productList, selectedItem },
  } = useSelector((state) => {
    console.log(state);
    return {
      provider: state.provider,
    };
  });
  //   console.log(productList);
  //   console.log(selectedItem);

  const dispatch = useDispatch();
  const { getAllProducts, getSingleProduct } = productActions;

  useEffect(() => {
    dispatch(getAllProducts({ data1: 'yoyoyo' }));
    dispatch(getSingleProduct({ data2: 'zozozo' }));
  }, []);

  return <></>;
};

// 이정도로 기초는 끝~
