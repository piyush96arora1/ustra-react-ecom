    
import { Categ } from "../model/model";
import { Product } from "../model/model";
interface Action {
  type: string;
  payload?: any;
}
export interface DefaultState {
  categories: Categ[];
  selectedCategory: string;
  products: Product[];
  viewMoreClicked: boolean;
  selectedTab: string;
  fetched:boolean;
  hasError:boolean
}
const intialState: DefaultState = {
  categories: [],
  selectedCategory: "",
  products: [],
  viewMoreClicked: false,
  selectedTab: "197",
  fetched:false,
  hasError:false
};

export const RootReducer = (state = intialState, action: Action) => {
  let newState = { ...state };
  switch (action.type) {
    case "FETCH_DATA": {
      newState = {
        ...newState,
        categories: action.payload.categories.category_list,
        selectedCategory:
          action.payload.categories.category_list[0].category_name,
        products: action.payload.categories.product_list.products,
        fetched:true
      };
      break;
    }

    case "FETCH_PRODUCT": {
      let products = action.payload.products;
      newState = {
        ...newState,
        products: products,
        viewMoreClicked: false,
        selectedTab: action.payload.id,
        fetched:true
      };
      break;
    }

    case "VIEW_MORE_CLICKED": {
      let current = !newState.viewMoreClicked;
      newState = { ...newState, viewMoreClicked: current };
      break;
    }

    case "ERROR_ERR":{
      newState={...newState,hasError:true}
      break;
    }

  }
  return newState;
};