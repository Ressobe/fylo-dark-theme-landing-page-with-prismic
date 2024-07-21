import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";
import Link from "next/link";
import { Logo } from "./logo";
import { Bounded } from "./bounded";

export default async function Header() {
  const client = createClient();
  const settings = await client.getSingle("settings");

  return (
    <Bounded>
      <div className="flex gap-5 items-center justify-between flex-col sm:flex-row ">
        <Link href="/" className="hover:underline">
          <Logo />
        </Link>
        <nav>
          <ul className="flex gap-8">
            {settings.data.navigation.map(({ link, label }) => {
              return (
                <li
                  key={label}
                  className="hover:underline p-1.5 text-2xl text-slate-300"
                >
                  <PrismicNextLink field={link}>{label}</PrismicNextLink>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </Bounded>
  );
}
