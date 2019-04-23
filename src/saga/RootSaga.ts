import { put, takeEvery, delay, all, call } from "redux-saga/effects"
import {Categories} from '../model/model'
import {UstraService} from '../service/UstraService'
export function* fetchCategoriesAsync() {
    yield takeEvery("FETCH_DATA_ASYNC", fetchCategories);
  }

  export function* fetchProductAync() {
    yield takeEvery("FETCH_PRODUCT_ASYNC", fetchProduct);
  }
  
  export function* fetchCategories() {
    try{
    const {data}= yield call(UstraService.getCategories);
   
    yield put({
      type: "FETCH_DATA",
      payload: { categories:data }
    });
  }
  catch(error)
  {
    yield put({type:"ERROR_ERR"})
  }
  }

  export function* fetchProduct(payload:any) {
    try{
    const {data}= yield call(UstraService.getProduct,payload);
    yield put({
      type: "FETCH_PRODUCT",
      payload: { products:data.products }
    });
  }
  catch(error)
  {
    yield put({type:"ERROR_ERR"})
  }
  }


  
export default function* rootSaga() {
    yield all([fetchCategoriesAsync(),fetchProductAync()]);
  }
  