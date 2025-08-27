import { useEffect } from "react";
// import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  let path = window.location.pathname;
  let pathname = path.slice(1);
  console.log(pathname);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
}
