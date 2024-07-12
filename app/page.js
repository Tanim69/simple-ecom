import Image from "next/image";
import Products from "./components/Products";

export default function Home() {
  return (
    <div className="p-10 font-bold text-[50px]">
      <Products></Products>
    </div>
  );
}
