import { NextResponse } from 'next/server';

export async function GET() {
  const domain = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN;
  const key = process.env.NEXT_PUBLIC_SHOPIFY_CLIENT_ID;

  const query = `{ products(first: 5) { edges { node { id title variants(first: 1) { edges { node { price { amount } } } } } } } }`;

  const res = await fetch(`https://${domain}/api/2024-01/graphql.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Storefront-Access-Token': key!,
    },
    body: JSON.stringify({ query }),
  });

  const json = await res.json();
  return NextResponse.json(json.data?.products?.edges.map((e: any) => e.node) || []);
}