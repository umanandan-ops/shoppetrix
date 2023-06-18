async function myapi() {
  var apidata = await fetch('./amazon_products.json');
  apidata = await apidata.json();
  console.log(apidata);
  const productList = document.getElementById('root') as HTMLDivElement; // Get the root container

  apidata.forEach((item: any) => {
    virtual(item.heading, item.imgAddress, item.price, item.link, productList);
  });
}

myapi();

function virtual(
  heading: string,
  imgAddress: string,
  price: string,
  link: string,
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

  var button = document.createElement('a');
  button.className = 'but';
  button.href = link;
  button.innerHTML = '<img src="./images/cart-logo.png"> Go to site';
  var p=document.createElement('p');
  p.className="price";
  p.innerHTML=price;
  productContainer.appendChild(h3);
  productContainer.appendChild(img);
  productContainer.appendChild(p);
  productContainer.appendChild(button);
  container.appendChild(productContainer);
}
