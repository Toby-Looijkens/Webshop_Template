<script type="text/javascript">
</script>

<div id="main">
  <div id="banner"></div>
  <div id="content">
    <div id="product-component-1743801989918"></div>
  </div>
</div>

<style>
  #main {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(2, 1fr);
    min-height: 100vh;
  }

  #banner {
    grid-column: 1/ 13;
    grid-row: 1/ 2;
    background-image: url(../img/pexels-anete-lusina-4792079.jpg);
    background-size: cover;
  }

  #content {
    padding-top: 20px;
    padding-bottom: 20px;
    grid-column: 2/ 12;
    grid-row: 2/ 3;
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

  @media only screen and (min-width: 360px) and (max-width: 730px) {
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
