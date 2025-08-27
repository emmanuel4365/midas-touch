import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  window.scrollTo(0, 0);
  const error = useRouteError();
  return <div>{error}</div>;
};
export default ErrorPage;
