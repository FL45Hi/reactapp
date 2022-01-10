import Loadable from "react-loadable";
import Loading from "./Loading";

const SettingsPage = Loadable({
  loader: () => import("./SettingsPages"),
  loading: Loading
});

// const AsyncSettingsPage = Loadable({
//   loader: () => import("./SettingsPage" /* webpackChunkName: "settings" */),
//   loading: Loading
// });

// const ItemListTables = Loadable({
//   loader: () => import("./index").then(m => m.ItemListTable),
//   loading: Loading
// });
// export {SettingsPage, AsycSettingsPage, ItemListTables}

// For the naming chunks use comments synatax and chunk multiple together 


export { SettingsPage };