import ImageBanner from '@/components/ImageBanner';
import Products from '@/components/Products';

export const dynamic = 'force-dynamic';

export async function getProducts() {
  const baseURL = process.env.NEXT_PUBLIC_BASE_URL;
  // const response = await fetch(baseURL + '/api/products');
  // const products = await response.json();
  // return products;
  try {
    const response = await fetch(baseURL + '/api/products', {
      cache: 'no-store',
    });
    if (!response.ok) throw new Error('Failed to fetch products');
    return await response.json();
  } catch (err) {
    console.error('Fetch error: ', err);
    return [];
  }
}

export default async function Home() {
  const products = await getProducts();
  console.log('Products: ', products);

  let planner = null;
  let stickers = [];
  let templates = [];
  let icons = [];

  for (let product of products) {
    if (product.name === 'Medieval Dragon Month Planner') {
      planner = product;
    } else if (product.name.includes('Template')) {
      templates.push(product);
    } else if (product.name.includes('Icon')) {
      icons.push(product);
    } else {
      stickers.push(product);
    }
  }

  return (
    <>
      <ImageBanner />
      <section>
        <Products
          planner={planner}
          stickers={stickers}
          templates={templates}
          icons={icons}
        />
      </section>
    </>
  );
}
