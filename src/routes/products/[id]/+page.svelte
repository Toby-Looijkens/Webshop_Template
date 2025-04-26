<script lang="ts">
  import { Product } from "$lib/models/Product";
  import {Color} from "$lib/models/Color";
  
  export let product:Product;
</script>

<div id="main">
  <div id="content">
    <div id="image-gallery">
      <div id="main-image">
        <div id="left-arrow" class="clicker"></div>
        <div id="right-arrow" class="clicker"></div>
      </div>
      <div id="image-slide">
        <div id="left-arrow-slide" class="clicker"></div>
        <div id="right-arrow-slide" class="clicker"></div>
      </div>
    </div>
    <div id="product-details">
      <h1></h1>
    </div>
  </div>
</div>
<style>
  #main {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    min-height: 100vh;
  }

  #content {
    margin-top: 2%;
    margin-bottom: 2%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    grid-column: 2/ 12;
    gap: 10px;
  }

  #image-gallery {
    min-height: 400px;
    display: grid;
    gap: 10px;
    grid-template-rows: 80% 20%;
  }

  #main-image {
    display: grid;
    grid-template-columns: 1fr 1fr;
    background-color: green;
  }

  #product-details {
    background-color: black;
    height: 100%;
  }

  #left-arrow {
    justify-self: left;
    align-self: center;
    width: 5%;
    height: 10%;
    border-radius: 0px 15px 15px 0px;
    background-image: url(../../../img/left-arrow-backup-2-svgrepo-com.svg);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: 50%;
  }

  #right-arrow {
    align-self: center;
    justify-self: right;
    width: 5%;
    height: 10%;
    border-radius: 15px 0px 0px 15px;
    background-image: url(../../../img/right-arrow-backup-2-svgrepo-com.svg);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: 50%;
  }

  #image-slide {
    background-color: gray;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  #left-arrow-slide {
    justify-self: left;
    align-self: center;
    width: 10%;
    height: 80%;
    border-radius: 0px 15px 15px 0px;
    background-image: url(../../../img/left-arrow-backup-2-svgrepo-com.svg);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: 50%;
  }

  #right-arrow-slide {
    align-self: center;
    justify-self: right;
    width: 10%;
    height: 80%;
    border-radius: 15px 0px 0px 15px;
    background-image: url(../../../img/right-arrow-backup-2-svgrepo-com.svg);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: 50%;
  }

  .clicker {
    opacity: 30%;
    background-color: #f1f1f1;
    cursor: pointer;
    display: flex;
    min-width: 30px;
  }

  .clicker:hover {
    opacity: 50%;
  }

  h1 {
    width: 100%;
    text-align: center;
    align-self: center;
    font-size: 150%;
  }

  @media only screen and (max-width: 730px) {
    #product-image {
      position: relative;
      grid-column: 1/ 13;
      grid-row: 2/ 4;
      background-color: red;
      min-height: 500px;
      padding-left: 5%;
      padding-right: 5%;
    }

    #product-details {
      grid-column: 2/ 12;
      grid-row: 4/ 6;
    }
  }

  @media only screen and (min-width: 731px) {
  }
</style>
