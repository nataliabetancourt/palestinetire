import TireConnectLocator from "@/components/tires/TireConnect/TireConnectLocator";

export const metadata = {
  title: "Shop Tires Online | Palestine Tire Center",
  description:
    "Browse and buy tires online at Palestine Tire Center. Get instant pricing and schedule professional installation in Palestine, Texas.",
  keywords:
    "shop tires online, buy tires Palestine TX, tire shop Palestine, tire installation, Palestine Tire Center",
  openGraph: {
    title: "Shop Tires Online | Palestine Tire Center",
    description:
      "Find the perfect tires for your vehicle and book installation with Palestine Tire Center.",
    url: "https://www.palestinetire.com/shop-tires",
    siteName: "Palestine Tire Center",
  },
  alternates: {
    canonical: "https://www.palestinetire.com/shop-tires",
  },
};

export default function ShopTiresPage() {
  return (
    <div>
      <TireConnectLocator />
    </div>
  );
}
