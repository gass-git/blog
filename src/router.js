import { render } from "blazed-past-us";
import { postExists } from "blazed-past-us";
import home from "./views/home";
import post from "./views/post";
import notFound from "./views/notFound";

export default async function router(root, postsMetaData) {
  const pathname = unbasePath(window.location.pathname);
  const urlParams = new URLSearchParams(window.location.search);
  const views = { home, post, notFound };

  console.log("pathname: " + pathname);

  if (pathname === "" || pathname === "home") {
    render("home", root, views, postsMetaData, urlParams.get("tag"));
    return;
  }

  console.log(`postsMetaData: ${postsMetaData}`);
  console.log(`postSlug: ${pathname}`);

  if (postExists(postsMetaData, pathname)) {
    console.log("post exists!");

    render("post", root, views, postsMetaData, undefined, pathname);
    return;
  }

  render("404", root, views, postsMetaData);
}

// Removes the BASE_URL from the pathname if present.
function unbasePath(pathname) {
  console.log(pathname.split("/"));
  console.log(import.meta.env.BASE_URL);

  return pathname
    .split("/")
    .filter((name) => !import.meta.env.BASE_URL.split("/").includes(name))
    .join("");
}
