async function myapi() {
    var apidata = await fetch('https://fakestoreapi.com/products');
    apidata = await apidata.json();
    console.log(apidata);
    const productList = document.getElementById('root') as HTMLDivElement; // Get the root container
  
    apidata.forEach((item: any) => {
      virtual(item.title, item.image, item.description, productList);
    });
  }
  
  myapi();
  
  function virtual(
    heading: string,
    imgAddress: string,
    paragraph: string,
    container: HTMLDivElement
  ) {
    var productContainer = document.createElement('div');
    productContainer.className = 'product';
  
    var h3 = document.createElement('h3');
    h3.innerHTML = heading;
  
    var img = document.createElement('img');
    img.height = 200;
    img.width = 180;
    img.src = imgAddress;
    var logo = document.createElement('img');
    logo.height=30;
    logo.width=30;

    logo.src = './images/cart-logo.png';
    logo.alt = 'Logo';
    logo.className = 'logo';
    var button = document.createElement('button');
    button.className='but';
    button.innerHTML ='<img src="./images/cart-logo.png">'+'Go to site';
    productContainer.appendChild(h3);
    productContainer.appendChild(img);
    productContainer.appendChild(button);
    container.appendChild(productContainer);
  }
  