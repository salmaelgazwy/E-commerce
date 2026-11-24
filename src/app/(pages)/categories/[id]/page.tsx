import CategoryDetails from "@/components/Home/CategoryDetails";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return <CategoryDetails id={id} />;
}