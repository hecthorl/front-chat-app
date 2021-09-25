import { useSession } from "next-auth/client";
import Link from "next/link";

const enlaces = [
   {
      title: "Cómo funciona",
      href: "/como_funciona",
   },
   {
      title: "Planes y precios",
      href: "/",
   },
   {
      title: "Resumen",
      href: "/",
   },
];

const CustomLink = ({ title, href }) => (
   <Link href={href}>
      <a className="hidden md:block">{title}</a>
   </Link>
);

const Links = () => {
   const [session] = useSession();
   if (session) return null;
   return enlaces.map(({ title, href }, i) => (
      <CustomLink key={i} title={title} href={href} />
   ));
};

export default Links;
