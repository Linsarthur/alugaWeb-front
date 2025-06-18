// src/components/CardFavorite.jsx
import React from 'react'
import { FaBed, FaCar } from 'react-icons/fa'
import { FiTrash2 } from 'react-icons/fi'

export default function CardFavorite({ property, onContact, onRemove }) {
  return (
    <div className="w-80 h-[436px] bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden flex flex-col">
      {/* Imagem */}
      <img
        src={property.image}
        alt={property.title}
        className="w-full h-[160px] object-cover"
      />

      {/* Conteúdo */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        {/* Header com título, endereço e botão de remoção */}
        <div className="flex justify-between items-start">
          <div>
            <h2 className="font-semibold text-lg text-gray-900">
              {property.title}
            </h2>
            <p className="text-sm text-gray-600">{property.address}</p>
          </div>
          <button
            onClick={onRemove}
            className="p-2 bg-rose-100 rounded-lg hover:bg-rose-200"
            title="Remover dos favoritos"
          >
            <FiTrash2 size={20} className="text-rose-600" />
          </button>
        </div>

        {/* Descrição */}
        <div className="mt-4">
          <p className="text-sm text-gray-600">
            {property.descriptionLine1}
          </p>
          <p className="text-sm text-gray-500">
            {property.descriptionLine2}
          </p>
        </div>

        {/* Detalhes: área, quartos e garagem com rótulo */}
        <div className="mt-4 flex items-center text-gray-600 text-sm space-x-6">
          <span>{property.size}m²</span>

          <span className="flex items-center">
            <FaBed className="mr-1" /> {property.bedrooms} Quartos
          </span>

          <span className="flex items-center">
            <FaCar className="mr-1" /> {property.garage} Garagem
          </span>
        </div>

        {/* Preço e botão Contatar */}
        <div className="mt-4 flex items-center justify-between">
          <span className="text-2xl font-bold text-orange-600">
            R$ {property.price.toLocaleString('pt-BR')}
          </span>
          <button
            onClick={onContact}
            className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg"
          >
            Contatar
          </button>
        </div>
      </div>
    </div>
  )
}
