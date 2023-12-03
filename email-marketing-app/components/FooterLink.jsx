import Link from 'next/link'

const FooterLink = () => {
  const footerLinks = [
    {
      id: 1,
      title: 'MailBlink',
      links: [
        { id: 1, link: 'Get a demo', href: '#'},
        { id: 2, link: 'Download', href: '#'},
      ]
    },
    {
      id: 2,
      title: 'Products',
      links: [
        { id: 1, link: 'Newsletter', href: '#'},
        { id: 2, link: 'Email Marketing', href: '#'},
        { id: 3, link: 'Automation', href: '#'},
        { id: 4, link: 'Automation', href: '#'},
        { id: 5, link: 'Templates', href: '#'},
      ]
    },
    {
      id: 3,
      title: 'Resources',
      links: [
        { id: 1, link: 'Blog', href: '#'},
        { id: 2, link: 'Webiner', href: '#'},
        { id: 3, link: 'Marketing Guides', href: '#'},
        { id: 4, link: 'Prices', href: '#'},
        { id: 5, link: 'Contact us', href: '#'},
      ]
    },
  ]
  return (
    <div className='grid grid-cols-3'>
        {footerLinks.map((item) =>(
            <div className="col-span-1" key={item.id}>
                <h3 className="text-primaryBlack2 text-base md:text-lg font-semibold font-Roboto mb-6">{item.title}</h3>
                {item.links.map(({ id, href, link }) => (
                <div className="py-2" key={id}>
                    <Link href={href} className='text-primaryBlack font-medium text-xs md:text-sm hover:text-navyBlue'>{link}</Link>
                </div>
                ))}
            </div>
        ))}
    </div>
  )
}

export default FooterLink