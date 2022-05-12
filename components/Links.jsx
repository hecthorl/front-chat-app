import useUserAuth from 'hooks/useUserAuth'
import Link from 'next/link'

const enlaces = [
   {
      title: 'Cómo funciona',
      href: '/como_funciona'
   },
   {
      title: 'Planes y precios',
      href: '/'
   },
   {
      title: 'Resumen',
      href: '/resumen'
   }
]

const CustomLink = ({ title, href }) => (
   <Link href={href}>
      <a className="hidden md:block">{title}</a>
   </Link>
)

const Links = () => {
   const { isUser } = useUserAuth()
   if (isUser) return null
   return enlaces.map(({ title, href }, i) => (
      <CustomLink key={i} title={title} href={href} />
   ))
}

export default Links
