import { useLocation } from "@solidjs/router";
import { createSignal, For, Show } from "solid-js";
import Routes from "./routes.json";

export default function Nav() {
  const location = useLocation();
  const active = (path) =>
    path == location.pathname ? "nav-item active" : "nav-item";

  return (
    <nav>
      <div class={"nav-contain"}>
        <div class={"nav-title nav-section"}>
          <a href="/">Sakura Sedaia</a>
        </div>
        <div class={"router nav-section"}>
          <For each={Routes} fallback={<div class={"nav-item"}><a>Loading Nav...</a></div>}>
            {(nav, n) => (
              <Show when={nav.show == true}>
                <div class={`${active("/" + nav.path)}`}>
                  <a href={"/" + nav.path}>{nav.page}</a>
                </div>
              </Show>
            )}
          </For>
        </div>
      </div>

      <For
        each={Routes}
        fallback={
          <div class={"sub-nav"}>
            <div class={"sub-nav-item"}>
              <a>Loading Nav...</a>
            </div>
          </div>
        }
      >
        {(nav, n) => (
          <Show
            when={location.pathname.includes(
              "/" + nav.path.substring(0, nav.path.length - 1),
            )}
          >
            <Show when={nav.subnav == true}>
              <div class={"sub-nav"}>
                <For
                  each={nav.subpages}
                  fallback={
                    <div class={"sub-nav-item"}>
                      <a>Loading Nav...</a>
                    </div>
                  }
                >
                  {(subnav, s) => (
                    <Show when={subnav.show == true}>
                      <i> - </i>
                      <div class={`sub-${active("/" + subnav.path)}`}>
                        <a href={"/" + subnav.path}>{subnav.page}</a>
                      </div>
                    </Show>
                  )}
                </For>
                <div class={"nav-arrow"}> &#60; </div>
                <div class={`sub-nav-root`}>
                  <a href={"/" + nav.path}>{nav.page}</a>
                </div>
              </div>
            </Show>
          </Show>
        )}
      </For>
    </nav>
  );
}