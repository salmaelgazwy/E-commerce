



export  async function GetAllProducts() {
  const baseurl = process.env.NEXT_PUBLIC_BASE_URL;
  const response = await fetch(`${baseurl}/api/v1/products`);
  const data = await response.json();
  console.log("Products Data:", data);

  return data;
}
export  async function getProductDetails(productid:string) 
{
  const baseurl = process.env.NEXT_PUBLIC_BASE_URL;
  const response=await fetch(`${baseurl}/api/v1/products/${productid}`);
  const data=await response.json();
    console.log("Products Data:", data);
    return data;
}