<script>
</script>

<div id="main">
  <div id="content">
    <h1 id="product-name">Product name</h1>
    <div id="product-image"></div>
    <div id="product-details">
      <h3>Product name</h3>
      <h3>price</h3>
      <button id="add-to-cart">Add to Cart</button>
      <button id="buy-now">Buy Now</button>
    </div>
    <div id="reviews"></div>
  </div>
</div>

<style>
  #main {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    min-height: 100vh;
  }

  #content {
    grid-column: 2/ 12;
    grid-row: 1/ 2;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(5);
    overflow: hidden;
    grid-auto-rows: min-content;
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

  @media only screen and (min-width: 360px) and (max-width: 720px) {
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

  @media only screen and (min-width: 720px) {
  }
</style>
