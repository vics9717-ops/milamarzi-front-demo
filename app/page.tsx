"use client";
import { useEffect, useState } from "react";

export default function TestShopify() {
  const [products, setProducts] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function testFetch() {
      try {
        const res = await fetch("/api/shopify-test"); // Usaremos un endpoint simple
        const data = await res.json();
        if (data.errors) setError(JSON.stringify(data.errors));
        else setProducts(data);
      } catch (err) {
        setError("Error de conexión");
      }
    }
    testFetch();
  }, []);

  return (
    <div style={{ background: 'black', color: 'white', padding: '50px' }}>
      <h1>Prueba de Conexión Mila x Shopify</h1>
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      {products.length === 0 && !error && <p>Cargando productos...</p>}
      <ul>
        {products.map((p: any) => (
          <li key={p.id}>{p.title} - {p.variants?.edges[0]?.node?.price?.amount}</li>
        ))}
      </ul>
    </div>
  );
}