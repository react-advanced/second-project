import Posts from "../Components/Posts/Posts";
import Products from "../Components/Products/Products";
import Users from "../Components/Users/Users";

export const TABS = [
  { id: 1, name: "users", title: "Users", tabPanel: <Users /> },
  { id: 2, name: "posts", title: "Posts", tabPanel: <Posts /> },
  // {
  //   id: 3,
  //   name: "products",
  //   title: "Products",
  //   tabPanel: <Products />,
  // },
];
