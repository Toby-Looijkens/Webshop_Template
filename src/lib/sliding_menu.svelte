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
    } 
    else 
    {
      container.style.visibility = "visible";
      menu.style.left ="0px";
      isOpen = true;
    }
  }

</script>
<div id="container" >
  <div id="menu">

  </div>
  <div id ="non-menu" onclick={OpenSlidingMenu}>

  </div>
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
</style>