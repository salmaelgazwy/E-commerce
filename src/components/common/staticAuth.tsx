import Image from "next/image";
import { Clock3, ShieldCheck, Truck } from "lucide-react";
import authImage from "@/asstets/image.jpg";

const benefits = [
  { label: "Free Delivery", icon: Truck },
  { label: "Secure Payment", icon: ShieldCheck },
  { label: "24/7 Support", icon: Clock3 },
];

export default function StaticAuth() {
  return (
    <section className="mx-auto flex w-full max-w-3xl flex-col items-center gap-5 px-4 py-8 text-center sm:py-12">
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-card shadow-lg ring-1 ring-border/50">
        <Image
          src={authImage}
          alt="A shopping cart filled with fresh vegetables"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 768px"
          className="object-cover"
        />
      </div>

      <div className="space-y-3">
        <h1 className="font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          FreshCart - Your One-Stop Shop for Fresh Products
        </h1>
        <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
          Join thousands of happy customers who trust FreshCart for their daily
          grocery needs
        </p>
      </div>

      <ul className="flex flex-wrap items-center justify-center gap-x-7 gap-y-3">
        {benefits.map(({ label, icon: Icon }) => (
          <li
            key={label}
            className="flex items-center gap-2 text-sm text-muted-foreground"
          >
            <Icon aria-hidden="true" className="size-4 text-primary" />
            <span>{label}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
