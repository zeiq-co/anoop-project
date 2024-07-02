export default function ServiceItem({ title, description, image }) {
  return (
    <div>
      {image}
      <h4 className="text-xl font-bold p-2">{title}</h4>
      <p style={{color:'#a3a3a3'}}>{description}</p>
    </div>
  );
}
