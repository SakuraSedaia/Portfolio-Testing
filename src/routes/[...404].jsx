import { A, useLocation } from "@solidjs/router";

export default function NotFound() {
  const location = useLocation();
  return (
    <error-404>
      <h1>404: "{location.pathname}" was not found</h1>
      <p>
        I'm sorry, the page you requested could not be found. Please navigate to another page using a link below.
      </p>
      <p>
        <A href="/" class="link">
          Home
        </A>
      </p>
    </error-404>
  );
}
