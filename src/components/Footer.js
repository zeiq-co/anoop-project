import { Instagram, Twitter,Facebook,Youtube } from "lucide-react";
import Nav from '../components/Nav';

export default function Footer() {

  return (
    <div
      className="flex flex-row p-6 justify-between"
      style={{backgroundColor:'#f5f5f5'}}>
      <div className="space-y-3">
        <h4>My Website</h4>
        <Nav />
        <p>© 2024 My Website. All rights reserved.</p>
      </div>
      <div className="flex flex-row space-x-3">
        <Instagram />
        <Twitter />
        <Facebook />
        <Youtube />
      </div>
    </div>
  );
}