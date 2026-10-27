function Footer() {
  const sections = [
    {
      title: "Comprar e Saber Mais",
      links: [
        "iPhone 17 Pro",
        "iPhone 17 Pro Max",
        "Comparar modelos",
        "Acessórios",
      ],
    },
    {
      title: "Especificações",
      links: ["Características técnicas", "Câmera", "Bateria", "Display"],
    },
    {
      title: "Suporte",
      links: ["Suporte ao iPhone", "AppleCare+", "iOS 19", "Contato"],
    },
    {
      title: "Apple",
      links: ["Sobre a Apple", "Newsroom", "Privacidade", "Carreiras"],
    },
  ];

  return (
    <footer className="bg-gray-900 border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-4 gap-8 mb-8">
          {sections.map((section, index) => (
            <div key={index}>
              <h4 className="font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a className="hover:text-white cursor-pointer" href="">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
