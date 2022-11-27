import { createStore, combineReducers } from "redux";
import modelReducer from "./modelReducer";
import stateReducer from "./stateReducer";

export default createStore(
  combineReducers({
    modelData: modelReducer,
    stateData: stateReducer,
  })
);

// Action creators are also exported so that all of the data store's functionality can be accesses through
// a single import statement anywhere in the application.
export {
  saveProduct,
  saveSupplier,
  deleteProduct,
  deleteSupplier,
} from "./modelActionCreators";
