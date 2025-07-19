<script lang="ts">
  import { Product } from "$lib/models/Product";
  export let product: Product;
</script>

<div id="card">
  <div id="image"></div>
  <h2>{product.name}</h2>
  <div id="buy-info">
    <h3>
      € {parseFloat(
        ((product.price / 100) * (100 - product.discount)).toFixed(2),
      )}
    </h3>
    <button id="go-to-page">details</button>
  </div>
</div>

<style>
  #card {
    min-width: 150px;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    border: solid 1px grey;
    background-position: center;
    aspect-ratio: 1 / 1;
    overflow-x: hidden;
    cursor: pointer;
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 60% 20% 20%;
    justify-self: center;
  }

  #card:hover {
    box-shadow: 0 2px 5px #aeaeae;
  }

  #image {
    position: relative;
    justify-self: center;
    width: 95%;
    margin-top: 5px;
    background-image: url(../img/pexels-anete-lusina-4792079.jpg);
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
  }

  h2 {
    text-align: center;
    align-self: center;
    margin: 0;
    font-size: 100%;
  }

  h3 {
    font-size: 120%;
    margin: 0;
    text-align: left;
    align-self: center;
  }

  #buy-info {
    width: 95%;
    justify-self: center;
    display: grid;
    grid-template-columns: 60% 40%;
  }

  button {
    width: 100%;
    height: 80%;
    border-radius: 5px;
    justify-self: center;
    align-self: center;
    background-color: #f7c8eb;
    border: none;
  }

  button:hover {
    background-color: #ee99f2;
  }
</style>
