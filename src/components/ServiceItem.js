export default function ServiceItem({ title, description, image }) {
  return (
    <div className='p-8 ps-20'>
      {image}
      <h4 className='text-xl font-bold'>{title}</h4>
      <p className='text-gray-400'>{description}</p>
    </div>
  );
}
