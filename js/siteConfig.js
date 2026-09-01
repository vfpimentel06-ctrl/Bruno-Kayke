/**
 * siteConfig.js
 * Configurações e dados centralizados do site Bruno Kayke Tattoo.
 * Sincronizado com a estrutura do HTML e assets de produção.
 */

const siteConfig = {
  // Informações da Marca e Especialidade
  brand: {
    name: "Bruno Kayke Tattoo",
    tagline: "Arte que marca. Identidade que fica.",
    specialty: "Tatuador Especialista em Realismo Preto e Cinza",
    location: "Avenida Anápolis, 100, Vila Pouso Alegre, Barueri — SP",
    completedProjects: "+1000",
    satisfiedClients: "+1000 Clientes Satisfeitos",
    awardsNote: "Premiado em Convenções",
    bio: "Desde sempre, a arte me encontrou. E foi na tatuagem que descobri meu propósito: transformar ideias, memórias e sentimentos em marcas eternas na pele. Cada traço é feito com técnica apurada, estudo anatômico e respeito absoluto pela sua individualidade."
  },

  // Canais de Atendimento e Redes Sociais
  contact: {
    whatsappNumber: "5511974824443",
    whatsappDisplay: "(11) 97482-4443",
    whatsappDefaultMessage: "Olá, Bruno! Vi seu site e gostaria de solicitar um orçamento para uma tatuagem.",
    whatsappUrl: "https://wa.me/5511974824443?text=Ol%C3%A1%2C%20Bruno!%20Vi%20seu%20site%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20uma%20tatuagem.",
    instagramHandle: "@brunokayketattoo",
    instagramUrl: "https://www.instagram.com/brunokayketattoo/",
    googleMapsUrl: "https://www.google.com/maps/place/Bruno+Kayke+Tatuador/@-23.531582,-46.8832373,17z/data=!4m8!3m7!1s0x94cf01493e40151f:0x515a74ba7f38cb5b!8m2!3d-23.531582!4d-46.8832373!9m1!1b1!16s%2Fg%2F11jcz3vwtj?entry=ttu&g_ep=EgoyMDI2MDgyNi4wIKXMDSoASAFQAw%3D%3D",
    address: {
      street: "Avenida Anápolis, 100",
      neighborhood: "Vila Pouso Alegre",
      city: "Barueri",
      formatted: "Avenida Anápolis, 100, Vila Pouso Alegre, Barueri SP, 06404-250, Brasil"
    },
      sunday: "Domingo: Fechado"
    }
  },

  // Estatísticas Reais
  stats: [
    { number: "+6 ANOS", label: "DE EXPERIÊNCIA", desc: "Aperfeiçoamento constante e dedicação à arte." },
    { number: "+1000", label: "CLIENTES SATISFEITOS", desc: "Histórias eternizadas na pele de cada um." },
    { number: "PREMIADO", label: "EM CONVENÇÕES", desc: "Reconhecimento por técnica, originalidade e arte." }
  ],

  // Pilares de Excelência
  differentials: [
    {
      number: "01",
      title: "REALISMO PRETO E CINZA",
      description: "Técnica apurada de luz, sombra e volumetria para criar tatuagens com profundidade e fidelidade incomparáveis."
    },
    {
      number: "02",
      title: "BIOSSEGURANÇA TOTAL",
      description: "Ambiente higienizado com rigor, materiais 100% esterilizados e descartáveis conforme normas da ANVISA."
    },
    {
      number: "03",
      title: "PROJETO EXCLUSIVO",
      description: "Cada arte é desenhada sob medida para encaixar com perfeição na sua anatomia e representar sua história."
    },
    {
      number: "04",
      title: "ATENDIMENTO INDIVIDUAL",
      description: "Sessões privativas e acolhedoras com foco total na sua experiência, conforto e resultado final."
    }
  ],

  // Itens do Portfólio com Assets Reais
  portfolio: [
    {
      id: "esculturas-classicas",
      title: "Esculturas Clássicas",
      category: "realismo",
      categoryLabel: "Realismo / Esculturas",
      image: "assets/images/portfolio/01-realismo-esculturas.webp",
      imageFallback: "assets/images/portfolio/01-realismo-esculturas.png.png",
      description: "Sombreamento anatômico e volumetria de mármore em preto e cinza."
    },
    {
      id: "mascara-oni",
      title: "Máscara Oni Tradicional",
      category: "projetos-grandes",
      categoryLabel: "Projetos Grandes",
      image: "assets/images/portfolio/02-pretp-cinza-oni.webp",
      imageFallback: "assets/images/portfolio/02-pretp-cinza-oni.png",
      description: "Fechamento de alto impacto visual e contraste refinado."
    },
    {
      id: "guerreira-chicana",
      title: "Guerreira Chicana & Índia",
      category: "retratos",
      categoryLabel: "Retratos / Chicano",
      image: "assets/images/portfolio/03-realismo-chicano.webp",
      imageFallback: "assets/images/portfolio/03-realismo-chicano.png",
      description: "Retrato feminino de alta sensibilidade, penas e adornos detalhados."
    },
    {
      id: "retrato-realista",
      title: "Retrato Realista",
      category: "retratos",
      categoryLabel: "Retratos",
      image: "assets/images/portfolio/04-realismo-retrato.webp",
      imageFallback: "assets/images/portfolio/04-realismo-retrato.png",
      description: "Precisão nos traços e fidelidade fotográfica na transição de tons."
    },
    {
      id: "realismo-conceitual",
      title: "Realismo Conceitual",
      category: "preto-cinza",
      categoryLabel: "Preto e Cinza",
      image: "assets/images/portfolio/05-realismo.webp",
      imageFallback: "assets/images/portfolio/05-realismo.png",
      description: "Degradês límpidos e sombras aveludadas com encaixe anatômico perfeito."
    },
    {
      id: "arte-autoral",
      title: "Arte Autoral",
      category: "realismo",
      categoryLabel: "Realismo",
      image: "assets/images/portfolio/07-realismo.webp",
      imageFallback: "assets/images/portfolio/07-realismo.png",
      description: "Tridimensionalidade e precisão milimétrica que valorizam o corpo."
    }
  ],

  // Etapas do Processo de Orçamento & Sessão
  processSteps: [
    {
      step: "01",
      title: "ENVIE SUA IDEIA",
      description: "Compartilhe sua referência, local do corpo e dimensões desejadas pelo WhatsApp."
    },
    {
      step: "02",
      title: "RECEBA SUA PROPOSTA",
      description: "Analisamos a viabilidade técnica e anatômica para apresentar um orçamento claro e sem surpresas."
    },
    {
      step: "03",
      title: "RESERVE SUA DATA",
      description: "Escolha a melhor data na agenda para a sua sessão privativa no estúdio."
    },
    {
      step: "04",
      title: "VIVA A EXPERIÊNCIA",
      description: "Sua obra de arte ganha vida com máximo conforto, biossegurança e precisão cirúrgica."
    }
  ],

  // Avaliações Reais do Google
  googleReviews: {
    rating: 5.0,
    totalText: "Avaliações no Google",
    satisfactionText: "100% de satisfação dos clientes",
    reviews: [
      {
        name: "Lucas Ribeiro",
        badge: "Local Guide",
        initial: "L",
        color: "#2C3E50",
        rating: 5,
        text: "Trabalho surreal! O Bruno é um verdadeiro mestre no realismo preto e cinza. Fechei o braço com ele e superou todas as expectativas. O estúdio é impecável, limpo e super confortável. Nota 10!"
      },
      {
        name: "Guilherme Santos",
        badge: "Cliente Verificado",
        initial: "G",
        color: "#1E824C",
        rating: 5,
        text: "Melhor tatuador de Barueri e região sem dúvidas. Traço fino, sombreamento suave e muita paciência para criar o projeto exclusivo. Cicatrização foi perfeita!"
      },
      {
        name: "Matheus Oliveira",
        badge: "Local Guide",
        initial: "M",
        color: "#8E44AD",
        rating: 5,
        text: "Atendimento diferenciado desde o primeiro contato pelo WhatsApp até a finalização da sessão. Ambiente privativo, seguro e higiênico. Recomendo de olhos fechados!"
      },
      {
        name: "Felipe Almeida",
        badge: "Cliente Verificado",
        initial: "F",
        color: "#D35400",
        rating: 5,
        text: "Fiz um retrato realista e o nível de detalhes é impressionante, parece uma fotografia na pele. Profissionalismo e dedicação fora do comum."
      }
    ]
  },

  // Fotos do Instagram
  instagramFeed: [
    { image: "assets/images/instagram/insta-01.webp", fallback: "assets/images/instagram/insta-01.jpg", alt: "Tatuagem realista de leão @brunokayketattoo" },
    { image: "assets/images/instagram/insta-02.webp", fallback: "assets/images/instagram/insta-02.jpg", alt: "Tatuagem feminina realista @brunokayketattoo" },
    { image: "assets/images/instagram/insta-03.webp", fallback: "assets/images/instagram/insta-03.jpg", alt: "Tatuagem de rosa e relógio @brunokayketattoo" },
    { image: "assets/images/instagram/insta-04.webp", fallback: "assets/images/instagram/insta-04.jpg", alt: "Tatuagem realista no braço @brunokayketattoo" },
    { image: "assets/images/instagram/insta-05.webp", fallback: "assets/images/instagram/insta-05.jpg", alt: "Tatuagem escultura clássica @brunokayketattoo" },
    { image: "assets/images/instagram/insta-06.webp", fallback: "assets/images/instagram/insta-06.jpg", alt: "Tatuagem realista sombreada @brunokayketattoo" }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = siteConfig;
}

