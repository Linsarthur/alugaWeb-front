// src/pages/Favoritos.jsx
import React from 'react'
import Navbar from '../components/Navbar'
import CardFavorite from '../components/CardFavorite'
import Footer from '../components/Footer'
import casasFavorito from '../assets/casas-favorito.png'

export default function Favoritos() {
  // 1️⃣ Declaração de favorites dentro do componente
  const favorites = Array.from({ length: 6 }, (_, i) => ({
    id: i + 1,
    image: casasFavorito,
    title: 'Rua Eduardo Bezerra, 1182',
    address: 'São João do Tauape, Fortaleza/CE',
    descriptionLine1: 'Casa para alugar, 500m²',
    descriptionLine2: 'Excelente Casa à venda ou Locação',
    size: 500,
    bedrooms: 3,
    garage: 5,
    price: 5000,
  }))

  const handleRemove = (id) => console.log(`Remover favorito #${id}`)
  const handleContact = (id) => console.log(`Contatar favorito #${id}`)

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />

      <main className="flex-1 p-8 flex justify-center">
        <div className="grid grid-cols-3 gap-6">
          {/* 2️⃣ Uso de favorites.map */}
          {favorites.map((prop) => (
            <CardFavorite
              key={prop.id}
              property={prop}
              onRemove={() => handleRemove(prop.id)}
              onContact={() => handleContact(prop.id)}
            />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  )
}
