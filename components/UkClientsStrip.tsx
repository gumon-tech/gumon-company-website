import Image from "next/image";
import type { Locale } from "@/lib/i18n";
import { ukClients, ukClientsCopyByLocale } from "@/content/locales/ukClients";

export default function UkClientsStrip({ locale }: { locale: Locale }) {
  const copy = ukClientsCopyByLocale[locale] ?? ukClientsCopyByLocale.en;

  return (
    <div className="mt-6 rounded-xl border border-line/35 px-4 py-4 md:px-5">
      <p className="text-[10px] tracking-[0.18em] uppercase text-mist">{copy.heading}</p>
      <ul className="mt-4 grid grid-cols-2 gap-x-3 gap-y-5 md:flex md:flex-wrap md:gap-x-5">
        {ukClients.map((client) => {
          const role = client.role === "website" ? copy.roleWebsite : client.role === "academy" ? copy.roleAcademy : null;
          return (
            <li key={client.name} className="md:w-44">
              <a
                href={client.website}
                target="_blank"
                rel="noopener"
                aria-label={role ? `${client.name} — ${role}` : client.name}
                className="group block"
              >
                <span className="flex h-24 items-center justify-center rounded-xl border border-slate-300/95 bg-white p-2.5 transition-transform duration-200 group-hover:-translate-y-0.5">
                  <Image
                    src={client.logo}
                    alt=""
                    width={client.width}
                    height={client.height}
                    sizes="160px"
                    loading="lazy"
                    decoding="async"
                    className="h-auto max-h-full w-auto max-w-full object-contain"
                  />
                </span>
                <span className="mt-2 block text-xs font-medium leading-snug text-ink">{client.name}</span>
                {role ? <span className="block text-xs leading-snug text-mist">{role}</span> : null}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
