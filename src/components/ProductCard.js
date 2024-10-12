export default function ProductCard({ product }) {
  return (
    <div className='m-2 p-2 w-64 bg-white rounded-lg shadow-md'>
      <div className='flex flex-col'>
        <img
          src={product.image}
          alt={product.name}
          className='h-48 w-full object-cover rounded-lg'
        />
        <div className='flex flex-col p-2'>
          <h2 className='text-lg font-bold'>{product.name}</h2>
          <p className='text-sm text-gray-500'>{product.description}</p>
          <p className='text-sm font-bold mt-2'>${product.price}</p>
        </div>
      </div>
    </div>
  );
}