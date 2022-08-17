const { createSlice } = require('@reduxjs/toolkit');

// 1. createSlice를 불러온다
// 2. createSlice parameter안에 3가지가 들어간다
// name, initialState, reducers

const initialState = {
  productList: [],
  selectedItem: null,
};

const productSlice = createSlice({
  name: 'counter',
  initialState: initialState,
  reducers: {
    // 3. reducer's'라고 s를 붙여야 된ㄷ ㅏ
    // 4. 옛날 리덕스 생각해서 return {...state, productList: payload.data} 안해도 된다
    // createSlice가 알아서 해준다
    getAllProducts(state, action) {
      state.productList = action.payload.data1;
      console.log(state.productList);
    },
    getSingleProduct(state, action) {
      state.selectedItem = action.payload.data2;
      console.log(state.selectedItem);
    },
  },
});

console.log(productSlice);

// 5. 두가지를 export 해준다
// productSlice.reducer -> index.js에 configureStore에 넣어준다
// productSlice.actions -> 우리가 정의한 함수를 컴포넌트에서도 사용할수 있게 해준다

export const productReducer = productSlice.reducer;

// 7. 우리가 만든 함수 사용하기
//
// redux toolkit: productSlice.actions로 함수들을 가져올 수 있다

console.log(productSlice.actions);
export const productActions = productSlice.actions;
// 하면 개 꿀이다
