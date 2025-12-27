import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import Nav from "~/components/Nav";
import "./app.scss";

export default function App() {
  const BaseRoute = "/Portfolio-Testing";
  return (
    <Router
      root={(props) => (
        <>
          <Nav />
          <Suspense>{props.children}</Suspense>
        </>
      )}
      base={BaseRoute}
    >
      <FileRoutes />
    </Router>
  );
}
