export default function ServiceItem({ title, description, image }) {
  return (
    <div>
      {image}
      <h4 className="text-lg font-bold">{title}</h4>
      <p style={{color:'#a3a3a3'}}>{description}</p>
    </div>
  );
}
