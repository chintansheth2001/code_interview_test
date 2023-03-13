import { useRoutes } from "react-router-dom";
import routes from "./routes/routes";

const App = () => {
  const element = useRoutes(routes);

  return <>{element}hi</>;
};

export default App;
