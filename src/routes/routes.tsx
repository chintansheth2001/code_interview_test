import { Layout } from "@/Layout";
import { Main } from "@/Main";
import { RouteObject } from "react-router-dom";

export default [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        element: <Main />,
        children: [],
      },
    ],
  },
] as RouteObject[];
