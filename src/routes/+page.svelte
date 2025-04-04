<script type="text/javascript">
/*<![CDATA[*/
(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: '0ikezg-kq.myshopify.com',
      storefrontAccessToken: '4941c3e39f975099aed50e531840595c',
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: '9967774761303',
        node: document.getElementById('product-component-1743801989918'),
        moneyFormat: '%E2%82%AC%7B%7Bamount_with_comma_separator%7D%7D',
        options: {
  "product": {
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0",
          "margin-bottom": "50px"
        },
        "text-align": "left"
      },
      "title": {
        "font-size": "26px"
      },
      "button": {
        ":hover": {
          "background-color": "#50af8f"
        },
        "background-color": "#59c29f",
        ":focus": {
          "background-color": "#50af8f"
        }
      },
      "price": {
        "font-size": "18px"
      },
      "compareAt": {
        "font-size": "15.299999999999999px"
      },
      "unitPrice": {
        "font-size": "15.299999999999999px"
      }
    },
    "layout": "horizontal",
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "description": true
    },
    "width": "100%",
    "text": {
      "button": "Add to cart"
    }
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "button": false,
      "buttonWithQuantity": true
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        ":hover": {
          "background-color": "#50af8f"
        },
        "background-color": "#59c29f",
        ":focus": {
          "background-color": "#50af8f"
        }
      },
      "title": {
        "font-family": "Helvetica Neue, sans-serif",
        "font-weight": "bold",
        "font-size": "26px",
        "color": "#4c4c4c"
      },
      "price": {
        "font-family": "Helvetica Neue, sans-serif",
        "font-weight": "normal",
        "font-size": "18px",
        "color": "#4c4c4c"
      },
      "compareAt": {
        "font-family": "Helvetica Neue, sans-serif",
        "font-weight": "normal",
        "font-size": "15.299999999999999px",
        "color": "#4c4c4c"
      },
      "unitPrice": {
        "font-family": "Helvetica Neue, sans-serif",
        "font-weight": "normal",
        "font-size": "15.299999999999999px",
        "color": "#4c4c4c"
      }
    },
    "text": {
      "button": "Add to cart"
    }
  },
  "option": {},
  "cart": {
    "styles": {
      "button": {
        ":hover": {
          "background-color": "#50af8f"
        },
        "background-color": "#59c29f",
        ":focus": {
          "background-color": "#50af8f"
        }
      }
    },
    "text": {
      "total": "Subtotal",
      "button": "Checkout"
    }
  },
  "toggle": {
    "styles": {
      "toggle": {
        "background-color": "#59c29f",
        ":hover": {
          "background-color": "#50af8f"
        },
        ":focus": {
          "background-color": "#50af8f"
        }
      }
    }
  }
},
      });
    });
  }
})();
/*]]>*/
</script>

<div id="main">
  <div id="content">
    <div id='product-component-1743801989918'></div>
    </div>
  </div>

<style>
  #main {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    min-height: 100vh;
  }

  #content {
    padding-top: 20px;
    padding-bottom: 20px;
    grid-column: 2/ 12;
    grid-row: 1/ 2;
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
