<script>
  import { nonpassive } from "svelte/legacy";

  let isOpen = false;
  export function OpenSlidingMenu() {
    var container = document.getElementById("container");
    var menu = document.getElementById("menu");
    var nonMenu = document.getElementById("nonMenu");

    if (isOpen) {
      container.style.visibility = "hidden";
      menu.style.left = "-300px";
      isOpen = false;
    } else {
      container.style.visibility = "visible";
      menu.style.left = "0px";
      isOpen = true;
    }
  }
</script>

<div id="container">
  <div id="menu">
    <div id="top-bar">
      <div id="brand">
        <a id="brand-name">Webshop</a>
      </div>
      <div id="close-button" onclick={OpenSlidingMenu}></div>
    </div>
    <div id="nav-menu-links">
      <a id="home" class="nav-link" href="/">Home</a>
      <!--<a class="nav-link" href="/Products">Products</a>-->
      <a class="nav-link" href="/Contact">Contact</a>
      <a class="nav-link" href="/AboutUs">About us</a>
    </div>
  </div>
  <div id="non-menu" onclick={OpenSlidingMenu}></div>
</div>

<style>
  #container {
    visibility: hidden;
    overflow: hidden;
    position: fixed;
    top: 0px;
    width: 100%;
    height: 100%;
    z-index: 1;
  }

  #menu {
    position: fixed;
    top: 0px;
    left: -300px;
    transition: left 0.3s ease-in-out;
    z-index: 3;
    width: 300px;
    height: 100vh;
    background-color: rgb(250, 250, 250);
    border-right: 5px solid #59c29f;
  }

  #non-menu {
    position: fixed;
    top: 0px;
    z-index: 2;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
  }

  #nav-menu-links {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    align-items: center;
  }

  .nav-link {
  }

  a {
    margin: 2% 10%;
    text-align: left;
    font-family: "Inter", sans-serif;
    font-optical-sizing: auto;
    font-size: 28px;
    font-weight: 500;
    font-style: normal;
    color: #171717;
    text-decoration: none;
    cursor: pointer;
  }

  a:hover {
    font-weight: 700;
    border-bottom: 2px solid #59c29f;
  }

  #top-bar {
    display: grid;
    grid-template-columns: 80% 20%;
    border-bottom: 2px solid #aeaeae;
  }

  #brand {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    visibility: visible;
    justify-content: center;
    align-items: center;
  }

  #brand-name {
    visibility: visible;
    padding: 0px;
    margin: 2% 10%;
    text-align: left;
    border: none;
    font-size: 36px;
  }

  #brand-name:hover {
    font-weight: 500;
  }

  #close-button {
    width: 30px;
    height: 30px;
    margin: auto;
    background-image: url(../img/cross-svgrepo-com.svg);
    background-size: cover;
  }

  #close-button {
    cursor: pointer;
  }
</style>
