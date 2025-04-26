<script lang="ts">
  import ProductCard from "$lib/product_card.svelte";
  import { Product } from "$lib/models/Product";
  import {Color} from "$lib/models/Color";

  const products = [
    new Product("1", "Bikini", "Test2", 15.99, 10, new Color(1, "Purple", "#840089")), 
    new Product("2", "Bag", "Test3", 145.99, 15, new Color(1, "Purple", "#840089")),
    new Product("3", "Dressssssssssssssss ssssssssssss", "Test5", 35.99, 15, new Color(1, "Purple", "#840089")),
    new Product("4", "Bikini", "Test2", 15.99, 10, new Color(1, "Purple", "#840089")),
    new Product("5", "Bikini", "Test2", 15.99, 10, new Color(1, "Purple", "#840089")),
    new Product("6", "Bikini", "Test2", 15.99, 10, new Color(1, "Purple", "#840089")),
    new Product("7", "Bikini", "Test2", 15.99, 10, new Color(1, "Purple", "#840089")),
    new Product("8", "Bikini", "Test2", 15.99, 10, new Color(1, "Purple", "#840089")),
    new Product("9", "Bikini", "Test2", 15.99, 10, new Color(1, "Purple", "#840089")),
    new Product("10", "Bikini", "Test2", 15.99, 10, new Color(1, "Purple", "#840089")),
    new Product("11", "Bikini", "Test2", 15.99, 10, new Color(1, "Purple", "#840089")),
    new Product("12", "Bikini", "Test2", 15.99, 10, new Color(1, "Purple", "#840089")),     
  ]
</script>

<div id="main">
  <div id="content">
    {#each products as product (product.id)}
        <ProductCard product={product}></ProductCard>
    {/each}
    </div>
  </div>

<style>
  #main {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    min-height: 100vh;
  }

  #content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 10px;
    padding: 5px;
    padding-top: 20px;
    padding-bottom: 20px;
    grid-column: 2/ 12;
    grid-auto-rows: max-content;
  }

  #product-image {
    position: relative;
    grid-column: 2/ 8;
    grid-row: 2/ 4;
    background-color: red;
    min-height: 500px;
  }

  #product-details {
    grid-column: 9/ 12;
    grid-row: 2/ 4;
  }

  #reviews {
    position: relative;
    grid-column: 1/ 13;
    grid-row: 4/ 6;
    min-height: 400px;
    margin-top: 5%;
    border: 5px solid #171717;
  }

  h1 {
    text-align: center;
    grid-column: 2/ 12;
    font-size: 50px;
    padding: 5%;
    margin: 0px;
  }

  @media only screen and (max-width: 730px) {
    #content {
      padding-top: 20px;
      padding-bottom: 20px;
      grid-column: 1/ 13;
    }

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
    #content {
      padding-top: 20px;
      padding-bottom: 20px;
      grid-column: 2/ 12;
    }
  }
</style>
