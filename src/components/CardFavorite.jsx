import casaCard from "../assets/casaCard.png";

export default function CardFavorite({ property, onRemove, onContact }) {
  return (
    <div className="flex border border-gray-300 rounded-2xl p-4 gap-5 bg-white shadow-sm">
      <img
        src={property.image || casaCard}
        alt="Imagem do imóvel"
        className="h-[200px] w-[250px] object-cover rounded-xl"
      />

      <div className="flex flex-col justify-between flex-1">
        <div>
          <h2 className="text-xl font-semibold text-gray-800">{property.title}</h2>
          <p className="text-sm text-gray-500">{property.address}</p>
          <p className="mt-2 text-gray-600">{property.descriptionLine1}</p>
          <p className="text-gray-500">{property.descriptionLine2}</p>
          <div className="flex gap-4 text-sm text-gray-600 mt-2">
            <span>{property.size}m²</span>
            <span>{property.bedrooms} Quartos</span>
            <span>{property.garage} Garagem</span>
          </div>
        </div>

        <div className="flex items-center justify-between mt-4">
          <p className="text-lg font-bold text-[#E04300]">
            R$ {property.price.toLocaleString("pt-BR")}
          </p>
          <div className="flex gap-2">
            <button
              onClick={onRemove}
              className="bg-red-100 text-red-600 px-3 py-1 rounded hover:bg-red-200 text-sm"
            >
              Remover
            </button>
            <button
              onClick={onContact}
              className="bg-[#E04300] text-white px-4 py-1 rounded hover:bg-[#c73700] text-sm"
            >
              Contatar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
