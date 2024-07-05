export default function ServiceItem({ title, description, image }) {
  return (
    <div className="p-8 ps-20">
      {image}
      <h4 className="text-xl font-bold">{title}</h4>
      <p style={{color:'#a3a3a3'}}>{description}</p>
    </div>
  );
}
