<script context="module">
  import SlidingMenu from "$lib/sliding_menu.svelte";
  import { page } from "$app/state";

  let menu;
</script>

<nav>
  <div id="nav-menu" on:click={menu.OpenSlidingMenu}></div>
  <div id="nav-items">
    <div id="nav-links">
      <a id="home" class="nav-link" href="/">Home</a>
      <a class="nav-link" href="/">Products</a>
      <a class="nav-link" href="/Contact">Contact</a>
      <a class="nav-link" href="/">About us</a>
    </div>
  </div>
  <div id="brand">
    <a id="brand-name">Webshop</a>
  </div>
  <div id="utilities">
    <div id="search"></div>
    <div id="login"></div>
    <div id="shopping-cart"></div>
  </div>
</nav>
<div id="navigation"></div>
<SlidingMenu bind:this={menu}>
</SlidingMenu>


<style>
  @import url("https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Tinos:ital,wght@0,400;0,700;1,400;1,700&display=swap");

  nav {
    display: flex;
    min-width: 320px;
    width: 100%;
    height: 70px;
    background-color: rgb(250, 250, 250);
    border-bottom: 2px solid #aeaeae;
  }

  #nav-items {
    display: flex;
    width: 33%;
    padding-left: 5%;
  }

  #nav-menu {
    visibility: hidden;
    width: 32px;
    height: 32px;
    margin-top: 19px;
    margin-bottom: 19px;
    margin-left: 5%;
    background-size: cover;
    background-image: url(../img/menu-svgrepo-com.svg);
  }

  #nav-links {
    display: flex;
    width: 100%;
    align-items: center;
  }

  .nav-link {
    padding-left: 7px;
    padding-right: 7px;
  }

  a {
    padding-left: 5px;
    padding-right: 5px;
    text-align: center;
    font-family: "Inter", sans-serif;
    font-optical-sizing: auto;
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

  #brand {
    display: flex;
    visibility: visible;
    height: 100%;
    justify-content: center;
    align-items: center;
    width: 33%;
  }

  #brand-name {
    visibility: visible;
    padding: 0px;
    margin: 0px;
    text-align: center;
    border: none;
    font-size: 32px;
  }

  #brand-name:hover {
    font-weight: 500;
  }

  #utilities {
    display: flex;
    justify-content: right;
    width: 34%;
    margin-right: 5%;
  }

  #search {
    margin-left: 10px;
    margin-right: 10px;
    margin-left: 5px;
    margin-right: 5px;
    background-image: url(../img/search-svgrepo-com.svg);
    width: 32px;
    height: 32px;
    margin-top: 19px;
    margin-bottom: 19px;
    background-size: cover;
  }

  #search:hover {
    border-bottom: 2px solid #59c29f;
    cursor: pointer;
  }

  #login {
    margin-left: 10px;
    margin-right: 10px;
    background-image: url(../img/person-male-svgrepo-com.svg);
    width: 32px;
    height: 32px;
    margin-top: 19px;
    margin-bottom: 19px;
    background-size: cover;
  }

  #login:hover {
    border-bottom: 2px solid #59c29f;
    cursor: pointer;
  }

  #shopping-cart {
    background-image: url(../img/cart-svgrepo-com.svg);
    width: 32px;
    height: 32px;
    margin-right: 5%;
    margin-left: 5px;
    margin-top: 19px;
    margin-bottom: 19px;
    background-size: cover;
  }

  #shopping-cart:hover {
    border-bottom: 2px solid #59c29f;
    cursor: pointer;
  }

  @media only screen and (min-width: 360px) and (max-width: 720px) {
    #nav-menu {
      visibility: visible;
    }

    #nav-items {
      visibility: hidden;
      margin: 0px;
      padding: 0px;
    }

    #sliding-menu {
    visibility: visible;
    }
  }

  @media only screen and (min-width: 720px) {
    #nav-menu {
      visibility: hidden;
      position: fixed;
      margin-top: 70px;
    }

    nav {
      display: flex;
      min-width: 360px;
      width: 100%;
      height: 70px;
    }

    #sliding-menu {
    visibility: hidden;
    }
  }
</style>
