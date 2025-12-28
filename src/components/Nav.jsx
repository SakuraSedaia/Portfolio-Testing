import { useLocation } from "@solidjs/router";
import { createSignal, For, Show } from "solid-js";
import Routes from "./routes.json";

export default function Nav(props) {
  const location = useLocation();
  const active = (path) => (path == location.pathname ? "active" : "");

  return (
    <nav>
      {/* TODO: Create a new media query to swap from a Navigation Bar to a Navigation Menu for Mobile Users */}
      <nav-container>
        <nav-title class={"nav-section"}>
          <a href="/">{props.title}</a>
        </nav-title>
        <nav-router class={"nav-section"}>
          <For
            each={Routes}
            fallback={
              <div class={"nav-item"}>
                <a>Loading Nav...</a>
              </div>
            }
          >
            {(nav, n) => (
              <Show when={nav.show == true}>
                <nav-item class={`${active("/" + nav.path)}`}>
                  <a href={"/" + nav.path}>{nav.page}</a>
                </nav-item>
              </Show>
            )}
          </For>
        </nav-router>
      </nav-container>
      {/* First, check each route for if Subnav is enabled. If there are any, create a secondary navbar for them and populate it */}
      <For
        each={Routes}
        fallback={
          <sub-navigation>
            <nav-item class={"nav-item"}>
              <a>Loading Nav...</a>
            </nav-item>
          </sub-navigation>
        }
      >
        {(nav, n) => (
          <Show
            when={location.pathname.includes(
              "/" + nav.path.substring(0, nav.path.length - 1),
            )}
          >
            <Show when={nav.subnav == true}>
              <sub-navigation>
                <For
                  each={nav.subpages}
                  fallback={
                    <nav-item class={"sub-nav-item"}>
                      <a>Loading Nav...</a>
                    </nav-item>
                  }
                >
                  {(subnav, s) => (
                    <Show when={subnav.show == true}>
                      <i>-</i>
                      <nav-item class={`${active("/" + subnav.path)}`}>
                        <a href={"/" + subnav.path}>{subnav.page}</a>
                      </nav-item>
                    </Show>
                  )}
                </For>
                <nav-arrow> &lt; </nav-arrow>
                <nav-item class={`${active("/" + nav.path)}`}>
                  <a href={"/" + nav.path}>{nav.page}</a>
                </nav-item>
              </sub-navigation>
            </Show>
          </Show>
        )}
      </For>
    </nav>
  );
}
