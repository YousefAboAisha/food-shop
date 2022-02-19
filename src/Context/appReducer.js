const AppReducer = (state, action) => {
  switch (action.type) {
    case "ADD_PRODUCT_TO_WISH_LIST":
      return {
        ...state,
        favProducts: [...state.favProducts, action.payload],
      };

    case "REMOVE_PRODUCT_FORM_WISH_LIST":
      return {
        ...state,
        favProducts: state.favProducts.filter(
          (product) => product.id !== action.payload
        ),
      };

    case "SET_PRODUCT_ID":
      return {
        ...state,
        id: action.payload,
      };

    case "SET_USER_TOKEN":
      return {
        ...state,
        token: action.payload,
      };

    default:
      return state;
  }
};

export default AppReducer;