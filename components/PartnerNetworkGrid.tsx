import Image from "next/image";
import { partnerNetwork } from "@/content/partnerNetwork";

export default function PartnerNetworkGrid() {
  return (
    <ul className="mt-6 grid grid-cols-2 gap-x-3 gap-y-5 sm:grid-cols-3 lg:grid-cols-5">
      {partnerNetwork.map((item) => (
        <li key={item.name}>
          <a href={item.website} target="_blank" rel="noopener" className="network-tile group block">
            <span className={`network-tile-logo ${item.darkTile ? "network-tile-logo-dark" : ""}`}>
              <Image src={item.logo} alt={`${item.name} logo`} width={160} height={96} sizes="160px" loading="lazy" decoding="async" className="h-auto max-h-full w-auto max-w-full object-contain" />
            </span>
            <span className="mt-2 block text-sm font-medium leading-snug text-ink">{item.name}</span>
            <span className="block text-xs text-mist mt-0.5">{item.country}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}
