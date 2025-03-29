import { configureStore } from "@reduxjs/toolkit";
import Querysuggestions from "./query/querysuggestions";
import Queryyhistory from "./query/queryhistory";
import Sidebarslice from "./interactions/sidebar";
import queryinputSlice from "./interactions/queryinput";
import resultSlice from "./interactions/showresults";

export const store = configureStore({
    reducer: {
        querysuggestions: Querysuggestions,
        queryhistory: Queryyhistory,
        sidebar: Sidebarslice,
        queryinput:queryinputSlice,
        resultindicator:resultSlice
    },
  })