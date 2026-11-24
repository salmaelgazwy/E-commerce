export const dynamic = "force-dynamic";
import BrandClient from "@/components/brands/BrandClient";
import { Getallbrands } from "@/services/brands.services";


export default async function Brands() {

  const response = await Getallbrands();

  return (
    <div>
      <BrandClient brands={response.data} />
    </div>
  );
}