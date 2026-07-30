/**
 * Conteúdo: site legado (linea.eng.br) + Linea Brochure 2024 + materiais de marca.
 */

const galleryFiles = import.meta.glob('../assets/images/gallery/*.webp', {
  eager: true,
  import: 'default',
})

function galleryUrl(filename) {
  const webpName = filename.replace(/\.(jpe?g|png)$/i, '.webp')
  const key = `../assets/images/gallery/${webpName}`
  return galleryFiles[key] || ''
}

function images(list) {
  return list.map(({ file, title }) => ({
    title,
    src: galleryUrl(file),
  }))
}

export const site = {
  name: 'Linea',
  legalName: 'Linea Engenharia e Arquitetura Ltda',
  url: 'https://www.linea.eng.br',
  tagline: 'Soluções inovadoras em engenharia e arquitetura, com precisão técnica e atendimento excepcional.',
  founded: 2010,
  slogan: 'Quando a solução for simples. A resposta vem de Deus!!',
  stats: [
    { value: '+800 mil', label: 'm² de projetos executados' },
    { value: '+19', label: 'Anos de experiência' },
    { value: '+500', label: 'Projetos aprovados' },
  ],
}

export const navigation = [
  { to: '/', label: 'Apresentação' },
  { to: '/projetos', label: 'Projetos Arquitetônicos' },
  { to: '/complementares', label: 'Projetos Complementares' },
  { to: '/#clientes', label: 'Clientes e Parceiros', hash: '#clientes' },
  { to: '/#contato', label: 'Contatos', hash: '#contato' },
]

export const about = {
  title: 'Apresentação',
  intro:
    'Com quase duas décadas dedicadas à excelência em arquitetura e engenharia, a Linea se destaca pelo profissionalismo, moldando o futuro com soluções inovadoras, atendimento personalizado e a garantia de obras totalmente regularizadas.',
  experience:
    'Ao longo de 19 anos, construímos uma base sólida atuando em projetos desafiadores e diversos. Nosso compromisso é atender qualquer demanda com profundo domínio das normas vigentes. A combinação entre conhecimento técnico e rigor normativo nos coloca à frente — transformamos conceitos em realidade, oferecendo desde Projetos de Arquitetura e Projetos Complementares até a Regularização completa de empreendimentos residenciais, comerciais e de infraestrutura.',
  focus:
    'Desenvolvemos soluções técnicas para o bom funcionamento da edificação: do conceito à aprovação, com projetos em BIM, instalações seguras e regularização completa. Assim, cada edificação ganha desempenho, previsibilidade e conformidade no uso cotidiano.',
  closing: 'Na Linea, unimos precisão, eficiência e responsabilidade em cada etapa. Conheça a Linea Engenharia.',
  projectTypes: [
    'Edifícios Residenciais',
    'Edifícios Comerciais',
    'Residências Unifamiliares',
    'Hotéis',
    'Indústrias',
    'Escolas',
    'Igrejas',
  ],
  services: [
    'Projetos Arquitetônicos (BIM)',
    'Projeto de Prevenção e Combate a Incêndios (BIM)',
    'Projetos Hidrossanitários (BIM)',
    'Projetos Elétricos de Baixa Tensão (BIM)',
    'Projeto de Gás GLP (BIM)',
    'Parcelamento / subdivisão de terreno',
    'Regularização de obra (CVCO)',
    'Aprovação Meio Ambiente',
    'Aprovação Vigilância Sanitária',
    'Sinalização Setran',
    'Projeto de Drenagem (BIM)',
  ],
}

export const architecturalProjects = [
  {
    slug: "residencia-carmen",
    title: "Residência Carmen Maria",
    client: "CARMEN MARIA",
    work: "Residencial",
    area: "400 m²",
    location: "Almirante Tamandaré – PR",
    description: "Projeto desenvolvido para uma cliente exigente, que sonhava com um lar capaz de transmitir harmonia e leveza. Em um amplo lote estilo chácara, a proposta buscou unir conforto, acolhimento e a possibilidade de receber amigos e familiares com charme e funcionalidade.\n\nA residência foi planejada para oferecer espaços amplos e bem integrados, criando ambientes perfeitos para viver, descansar e aproveitar momentos especiais. Cada detalhe foi pensado para garantir conforto, beleza e a sensação de estar em um refúgio particular.",
    cover: galleryUrl("residencia-carmen_03_img-9371.jpg"),
    gallery: images([
      { file: "residencia-carmen_00_img-9368.jpg", title: "Imagem 01" },
      { file: "residencia-carmen_01_img-9369.jpg", title: "Imagem 02" },
      { file: "residencia-carmen_02_img-9370.jpg", title: "Imagem 03" },
      { file: "residencia-carmen_03_img-9371.jpg", title: "Imagem 04" },
      { file: "residencia-carmen_04_img-9372.jpg", title: "Imagem 05" },
      { file: "residencia-carmen_05_img-9373.jpg", title: "Imagem 06" },
      { file: "residencia-carmen_06_img-9374.jpg", title: "Imagem 07" },
      { file: "residencia-carmen_07_img-9375.jpg", title: "Imagem 08" },
      { file: "residencia-carmen_08_img-9376.jpg", title: "Imagem 09" },
    ]),
  },
  {
    slug: "gmax",
    title: "GMAX — Complexo Industrial Multissetorial",
    client: "ALPHATRON EMPREENDIMENTOS E AGRONEGÓCIOS",
    work: "Industrial",
    area: "9.283,49 m²",
    location: "Rua Jorge Tieto Iwasa, 608 | Ciar | Araucária – PR",
    description: "Projeto Arquitetônico para Complexo Industrial Multissetorial\n\nDesenvolvimento de um projeto arquitetônico pensado para uma indústria dinâmica, capaz de atender a diferentes tipos de operações e locações. O empreendimento apresenta uma arquitetura moderna, com amplo galpão industrial.\n\nO conjunto foi planejado de forma estratégica, integrando setores industriais, administrativos e de serviços, além de guarita, pátio de manobras, áreas de carga e descarga, estacionamento e circulação segura para pedestres. Cada espaço foi concebido para garantir eficiência operacional, flexibilidade de uso e total conformidade com as exigências técnicas e funcionais de atividades industriais.",
    cover: galleryUrl("gmax_00_dji-0096.jpg"),
    gallery: images([
      { file: "gmax_00_dji-0096.jpg", title: "Imagem 01" },
      { file: "gmax_01_dji-0097.jpg", title: "Imagem 02" },
      { file: "gmax_02_dji-0098.jpg", title: "Imagem 03" },
      { file: "gmax_03_dji-0099.jpg", title: "Imagem 04" },
      { file: "gmax_04_img-6276.jpg", title: "Imagem 05" },
      { file: "gmax_05_img-6277.jpg", title: "Imagem 06" },
      { file: "gmax_06_img-6278.jpg", title: "Imagem 07" },
      { file: "gmax_07_img-6279.jpg", title: "Imagem 08" },
      { file: "gmax_08_img-6280.jpg", title: "Imagem 09" },
    ]),
  },
  {
    slug: "escola-solos",
    title: "Escola Solos",
    client: "Escola Solos",
    work: "Educação Infantil e Ensino Fundamental",
    area: "9.660,47 m²",
    location: "Rua Acelino Grande, 855 – Santa Felicidade | Curitiba – PR",
    description: "Um projeto institucional de grande porte no qual dei continuidade ao trabalho da arquiteta Claudia Guerios, assumindo a coordenação dos projetos complementares e a condução dos trâmites para a aprovação do alvará.\n\nA obra foi executada com extrema dedicação e carinho pelos proprietários, resultado de um cuidado que se reflete até hoje: a escola permanece impecável, unindo a excelência do seu projeto pedagógico à preservação da sua estrutura arquitetônica.",
    cover: galleryUrl("escola-solos_01_img-1262.jpg"),
    gallery: images([
     
      { file: "escola-solos_01_img-1262.jpg", title: "Imagem 01" },
       { file: "escola-solos_00_img-1260.jpg", title: "Imagem 02" },
      { file: "escola-solos_02_img-1263.jpg", title: "Imagem 03" },
      { file: "escola-solos_03_img-1264.jpg", title: "Imagem 04" },
      { file: "escola-solos_04_img-1267.jpg", title: "Imagem 05" },
      { file: "escola-solos_05_img-1268.jpg", title: "Imagem 06" },
      { file: "escola-solos_06_img-1272.jpg", title: "Imagem 07" },
      { file: "escola-solos_07_img-1291.jpg", title: "Imagem 08" },
      { file: "escola-solos_08_img-1292.jpg", title: "Imagem 09" },
      { file: "escola-solos_09_img-1302.jpg", title: "Imagem 10" },
      { file: "escola-solos_10_img-1312.jpg", title: "Imagem 11" },
      { file: "escola-solos_11_img-1314.jpg", title: "Imagem 12" },
      { file: "escola-solos_12_img-1315.jpg", title: "Imagem 13" },
    ]),
  },
  {
    slug: "colegio-senhora-fatima",
    title: "Colégio Senhora de Fátima",
    client: "Colégio Senhora de Fátima",
    work: "Educação Infantil, Ensino Fundamental e Médio",
    area: "17.229 m²",
    location: "Rua Gabriel Frecceiro de Miranda, 1118 | Xaxim | Curitiba – PR",
    description: "Trata-se de uma instituição com mais de 40 anos de história, que já existia quando fui contratada. Desde então, venho desenvolvendo diversos projetos de ampliação, acompanhando o crescimento contínuo da escola e criando novas áreas para atender à demanda crescente.\n\nAo longo dos mais de 15 anos em que atuo no colégio, sou responsável pelas ampliações, pela regularização dos projetos junto à Anvisa e pela elaboração dos projetos de prevenção de incêndio. Meu trabalho garante que a escola permaneça sempre segura, atualizada e em conformidade com todas as exigências de infraestrutura.",
    cover: galleryUrl("colegio-senhora-fatima_03_img-5485.jpg"),
    gallery: images([
      { file: "colegio-senhora-fatima_00_img-1362.jpg", title: "Imagem 01" },
      { file: "colegio-senhora-fatima_01_img-1368.jpg", title: "Imagem 02" },
      { file: "colegio-senhora-fatima_02_img-1370.jpg", title: "Imagem 03" },
      { file: "colegio-senhora-fatima_03_img-5485.jpg", title: "Imagem 04" },
      { file: "colegio-senhora-fatima_04_img-5487.jpg", title: "Imagem 05" },
      { file: "colegio-senhora-fatima_05_photo-2025-10-07-17-21-06-10.jpg", title: "Imagem 06" },
      { file: "colegio-senhora-fatima_06_photo-2025-10-07-17-21-06-6.jpg", title: "Imagem 07" },
      { file: "colegio-senhora-fatima_07_photo-2025-10-07-17-21-06-7.jpg", title: "Imagem 08" },
      { file: "colegio-senhora-fatima_08_photo-2025-10-07-17-21-06-8.jpg", title: "Imagem 09" },
    ]),
  },
  {
    slug: "terracota",
    title: "Terracota — Centro de Eventos",
    client: "Elisabete Caldeira",
    work: "Centro de Eventos",
    area: "1.500,00 m²",
    location: "Estrada do Ganchinho, 7386 – Umbará, Curitiba/PR",
    description:
      "O Terracota é um complexo de eventos que integra, de forma harmoniosa, a celebração e a natureza. Localizado em uma área privilegiada, onde o ambiente natural se encontra com a dinâmica urbana de Curitiba, o espaço foi concebido para receber diferentes tipos de festas — das mais elegantes às mais descontraídas, incluindo eventos sociais, corporativos e atividades de grupos voltados à natureza.\n\nA proximidade com a cidade, aliada ao clima acolhedor dos espaços, torna o Terracota um local versátil, preparado para atender públicos diversos. O conjunto arquitetônico foi planejado para oferecer funcionalidade, conforto e beleza, valorizando a experiência dos visitantes — com salão de festas, capela integrada ao paisagismo, jardins, casa da noiva, churrasqueira e áreas ao ar livre.",
    cover: galleryUrl("terracota_00_terracota-salao-01.jpg"),
    gallery: images([
      { file: "terracota_00_terracota-salao-01.jpg", title: "Salão de festas" },
      { file: "terracota_01_capela-01.jpg", title: "Capela 01" },
      { file: "terracota_02_capela-02.jpg", title: "Capela 02" },
      { file: "terracota_03_casa-da-noiva-01.jpg", title: "Casa da noiva 01" },
      { file: "terracota_04_casa-da-noiva-02.jpg", title: "Casa da noiva 02" },
      { file: "terracota_05_casa-da-noiva-03.jpg", title: "Casa da noiva 03" },
      { file: "terracota_06_01.jpg", title: "Vista 01" },
      { file: "terracota_07_02.jpg", title: "Vista 02" },
      { file: "terracota_08_03.jpg", title: "Vista 03" },
      { file: "terracota_09_04.jpg", title: "Vista 04" },
      { file: "terracota_10_05.jpg", title: "Vista 05" },
    ]),
  },
]

export const complementaryProjects = [
  {
    slug: "ince-aeroflex",
    title: "Aeroflex — Prevenção contra Incêndio",
    shortTitle: "Prevenção contra Incêndio",
    category: "Prevenção contra Incêndio",
    client: "AEROFLEX INDÚSTRIA DE AEROSOL LTDA.",
    work: "Industrial",
    area: "11.318,88 m²",
    location: "Rua Paul Garfunkel, 1335 – CIC – Curitiba – Paraná",
    description: "Projeto de prevenção e combate a incêndio para edificação de risco elevado, com sistema completo de segurança, contemplando hidrantes, alarmes, extintores, iluminação de emergência, sinalização, saídas de emergência e controle de materiais de acabamento. A edificação está adequada às normas vigentes de segurança contra incêndio e conta com parede corta-fogo, garantindo maior proteção aos colaboradores e visitantes.",
    definition: "Projeto de prevenção e combate a incêndio para edificação de risco elevado, com sistema completo de segurança, contemplando hidrantes, alarmes, extintores, iluminação de emergência, sinalização, saídas de emergência e controle de materiais de acabamento. A edificação está adequada às normas vigentes de segurança contra incêndio e conta com parede corta-fogo, garantindo maior proteção aos colaboradores e visitantes.",
    composition: [],
    cover: galleryUrl("ince-aeroflex_00_det-casa-de-bombas.png"),
    gallery: images([
      { file: "ince-aeroflex_00_det-casa-de-bombas.png", title: "Imagem 01" },
      { file: "ince-aeroflex_01_extintores.jpg", title: "Imagem 02" },
      { file: "ince-aeroflex_02_hidrante.jpg", title: "Imagem 03" },
      { file: "ince-aeroflex_03_isometrico.png", title: "Imagem 04" },
      { file: "ince-aeroflex_04_planta-baixa-ince.png", title: "Imagem 05" },
    ]),
  },
  {
    slug: "ince-simone-modas",
    title: "Simone Modas — Prevenção contra Incêndio",
    shortTitle: "Prevenção contra Incêndio",
    category: "Prevenção contra Incêndio",
    client: "Simone Modas",
    work: "Comercial",
    area: "3.532,28 m²",
    location: "Av. Winston Churchill, 2258 – Capão Raso – Curitiba – Paraná",
    description: "Projeto de prevenção contra incêndio com sistema completo de segurança, contemplando hidrantes, alarmes, extintores, iluminação de emergência, sinalização, saídas de emergência e controle de acabamento. A edificação será adequada às normas vigentes de segurança contra incêndio.",
    definition: "Projeto de prevenção contra incêndio com sistema completo de segurança, contemplando hidrantes, alarmes, extintores, iluminação de emergência, sinalização, saídas de emergência e controle de acabamento. A edificação será adequada às normas vigentes de segurança contra incêndio.",
    composition: [],
    cover: galleryUrl("ince-simone-modas_00_det-bomba.jpg"),
    gallery: images([
      { file: "ince-simone-modas_00_det-bomba.jpg", title: "Imagem 01" },
      { file: "ince-simone-modas_01_isometrico.png", title: "Imagem 02" },
    ]),
  },
  {
    slug: "hidro-diego",
    title: "Residência Diego",
    shortTitle: "Projeto Hidráulico",
    category: "Projeto Hidráulico",
    client: "Diego",
    work: "Residencial",
    area: "393,25 m²",
    location: "Granja das Acácias, Centro — Quatro Barras — Paraná",
    description: "O projeto hidráulico residencial da Residência Diego contempla todos os pontos de consumo da edificação, incluindo o dimensionamento do consumo de água potável e do sistema de reaproveitamento de água da chuva. A proposta prevê sistemas independentes para água fria, água quente, água fria pressurizada, abastecimento dos vasos sanitários e torneiras de jardim, garantindo melhor organização, eficiência e controle no uso da água.",
    definition: "O projeto hidráulico residencial da Residência Diego contempla todos os pontos de consumo da edificação, incluindo o dimensionamento do consumo de água potável e do sistema de reaproveitamento de água da chuva. A proposta prevê sistemas independentes para água fria, água quente, água fria pressurizada, abastecimento dos vasos sanitários e torneiras de jardim, garantindo melhor organização, eficiência e controle no uso da água.",
    composition: [],
    cover: galleryUrl("hidro-diego_00_det-banheiro.jpg"),
    gallery: images([
      { file: "hidro-diego_00_det-banheiro.jpg", title: "Imagem 01" },
      { file: "hidro-diego_01_det-reservat-rio.jpg", title: "Imagem 02" },
      { file: "hidro-diego_02_iso-esgoto-e-aguas-pluviais.jpg", title: "Imagem 03" },
      { file: "hidro-diego_03_isometrico-af.jpg", title: "Imagem 04" },
    ]),
  },
  {
    slug: "ele-solary",
    title: "SOLARY VILLE CURITIBA",
    shortTitle: "Projeto Elétrico",
    category: "Projeto Elétrico",
    client: "SOLARY VILLE CURITIBA",
    work: "Serviço de hospedagem",
    area: "1.452 m²",
    location: "Avenida Fredolin Wolf, 3.290 - Santa Felicidade | Curitiba – PR",
    description: "Reforma de uma área destinada ao uso como instituição de longa permanência, contemplando o projeto completo das instalações elétricas. O dimensionamento foi desenvolvido para atender todos os ambientes da edificação, incluindo quartos, áreas de serviço, setores administrativos e espaços de lazer, garantindo o fornecimento adequado de energia para o pleno funcionamento da obra.",
    definition: "Reforma de uma área destinada ao uso como instituição de longa permanência, contemplando o projeto completo das instalações elétricas. O dimensionamento foi desenvolvido para atender todos os ambientes da edificação, incluindo quartos, áreas de serviço, setores administrativos e espaços de lazer, garantindo o fornecimento adequado de energia para o pleno funcionamento da obra.",
    composition: [],
    cover: galleryUrl("ele-solary_00_diagrama.png"),
    gallery: images([
      { file: "ele-solary_00_diagrama.png", title: "Imagem 01" },
      { file: "ele-solary_01_planta-baixa.jpg", title: "Imagem 02" },
    ]),
  },
  {
    slug: "ele-maria-merencia",
    title: "Residência Maria Merencia",
    shortTitle: "Projeto Elétrico",
    category: "Projeto Elétrico",
    client: "Maria Merencia",
    work: "Residencial",
    area: "580 m²",
    location: "Rua das Acácias – Campo Cumprido | Curitiba – PR",
    description: "Obra residencial de alto padrão, contratada para o desenvolvimento do projeto complementar elétrico. O projeto é essencial para garantir o dimensionamento adequado das instalações, em conformidade com as normas técnicas e os requisitos da concessionária Copel.",
    definition: "Obra residencial de alto padrão, contratada para o desenvolvimento do projeto complementar elétrico. O projeto é essencial para garantir o dimensionamento adequado das instalações, em conformidade com as normas técnicas e os requisitos da concessionária Copel.",
    composition: [],
    cover: galleryUrl("ele-maria-merencia_00_entrada-padrao.jpg"),
    gallery: images([
      { file: "ele-maria-merencia_00_entrada-padrao.jpg", title: "Imagem 01" },
      { file: "ele-maria-merencia_01_planta.png", title: "Imagem 02" },
    ]),
  },
  {
    slug: "vig-aeroflex",
    title: "Vigilância — Aeroflex",
    shortTitle: "Vigilância",
    category: "Vigilância",
    client: "AEROFLEX INDÚSTRIA DE AEROSOL LTDA.",
    work: "Vigilância / Segurança eletrônica",
    area: null,
    location: "Rua Paul Garfunkel, 1335 – CIC – Curitiba – Paraná",
    description: "Projeto de vigilância e segurança eletrônica para a edificação industrial Aeroflex, contemplando planta baixa e isométrico do sistema.",
    definition: "Projeto de vigilância e segurança eletrônica para a edificação industrial Aeroflex, contemplando planta baixa e isométrico do sistema.",
    composition: [],
    cover: galleryUrl("vig-aeroflex_00_isometrico.png"),
    gallery: images([
      { file: "vig-aeroflex_00_isometrico.png", title: "Imagem 01" },
      { file: "vig-aeroflex_01_planta-baixa-vig.png", title: "Imagem 02" },
    ]),
  },
]

export const clients = [
  {
    name: 'Ramo',
    logo: new URL('../assets/images/logos/clients/ramo.webp', import.meta.url).href,
  },
  {
    name: 'HAVAN',
    logo: new URL('../assets/images/logos/clients/havan.webp', import.meta.url).href,
  },
  {
    name: 'Braspress',
    logo: new URL('../assets/images/logos/clients/braspress.webp', import.meta.url).href,
  },
  {
    name: 'Cerâmica Andorinhas',
    logo: new URL('../assets/images/logos/clients/ceramica-andorinhas.webp', import.meta.url).href,
  },
  {
    name: 'Simec',
    logo: new URL('../assets/images/logos/clients/simec.webp', import.meta.url).href,
  },
  {
    name: 'Lyx',
    logo: new URL('../assets/images/logos/clients/lyx.webp', import.meta.url).href,
  },
  {
    name: 'Colégio Senhora de Fátima',
    logo: new URL('../assets/images/logos/clients/colegio-senhora-fatima.webp', import.meta.url)
      .href,
  },
  {
    name: 'Anaconda',
    logo: new URL('../assets/images/logos/clients/anaconda.webp', import.meta.url).href,
  },
  {
    name: 'Obra 3',
    logo: new URL('../assets/images/logos/clients/obra-3.webp', import.meta.url).href,
  },
  {
    name: 'Aeroflex',
    logo: new URL('../assets/images/logos/clients/aeroflex.webp', import.meta.url).href,
  },
  {
    name: 'Escola Solos',
    logo: new URL('../assets/images/logos/clients/escola-solos.webp', import.meta.url).href,
  },
  {
    name: 'JLP',
    logo: new URL('../assets/images/logos/clients/jlp.webp', import.meta.url).href,
  },
  {
    name: 'Terra Rica Calcário',
    logo: new URL('../assets/images/logos/clients/terra-rica.webp', import.meta.url).href,
  },
]

export const partners = [
  {
    name: 'DJA',
    logo: new URL('../assets/images/logos/partners/dja-engenharia.webp', import.meta.url).href,
  },
  {
    name: 'Flexcon',
    logo: new URL('../assets/images/logos/partners/flexcon.webp', import.meta.url).href,
  },
  {
    name: 'Regulare',
    logo: new URL('../assets/images/logos/partners/regulare.webp', import.meta.url).href,
  },
  {
    name: 'Obra 3',
    logo: new URL('../assets/images/logos/clients/obra-3.webp', import.meta.url).href,
  },
  {
    name: 'DuARCO Engenharia e Projetos',
    logo: new URL('../assets/images/logos/partners/duarco.webp', import.meta.url).href,
  },
]

export const testimonials = [
  {
    id: 'escola-solos',
    topic: 'Parceria de longo prazo',
    hook: 'Quem escolhe a Linea encontra atendimento próximo, escuta ativa e projetos que respeitam cada detalhe — do primeiro briefing à aprovação.',
    quote:
      'Gostaria de agradecer a cordialidade e competência da profissional arquiteta Jaqueline Pires, pela perfeita elaboração de mais um projeto. Desta vez a confecção da planta da minha casa, onde atendeu a todos os pormenores que a mesma exigia, sempre prestativa e muito aberta em entender as minhas expectativas como cliente. É sempre uma satisfação trabalhar com essa profissional, atenciosa e rápida nas aprovações junto aos órgãos competentes. Parabéns, Jaqueline, por mais este projeto de sucesso. Nossa trajetória junta já ultrapassa 10 anos de bons trabalhos e companheirismo.',
    author: 'Carmen Taques',
    context: 'Escola Solos',
  },
  {
    id: 'nilso-guerini',
    topic: 'Regularização com confiança',
    hook: 'Cumprimos o combinado: técnica, agilidade nos órgãos competentes e transparência do início ao CVCO — mesmo quando o processo público é lento.',
    quote:
      'Cheguei até a arquiteta Jaqueline através de um amigo e, mesmo sem conhecê-la pessoalmente, contratei seu trabalho para regularização de uma obra de um prédio de 5 andares. Gostaria de destacar que tudo que foi pactuado entre nós foi cumprido, sem estresse ou justificativas incabíveis. Mesmo diante da morosidade decorrente dos serviços públicos, ela conseguiu regularizar e obtive meu CVCO, conforme contratado.',
    author: 'Nilso Guerini',
    context: 'Cliente',
  },
]

export const contacts = {
  person: {
    name: 'Jaqueline de Lourdes Pires',
    roles: [
      'Arquiteta e Urbanista',
      'CAUPR A-52093-4',
      'Engenheira Técnica em Segurança do Trabalho',
    ],
    photo: new URL('../assets/images/team/jaqueline.webp', import.meta.url).href,
  },
  offices: [
    {
      title: 'Curitiba — PR',
      phones: [
        // {
        //   number: '(41) 99631-9034',
        //   whatsapp: true,
        //   note: 'Jaqueline de Lourdes Pires',
        //   href: 'https://wa.me/5541996319034',
        // },
        {
          number: '(41) 99646-3034',
          whatsapp: true,
          href: 'https://wa.me/5541996463034',
        },
      ],
      emails: ['jaqueline@linea.eng.br'],
      hours: 'Segunda a sexta, das 9h às 17h',
      address: [
        'Rua José Clementino Bettega, 120',
        'T01 — 18º Andar — Edifício Life',
        'CEP: 81130-020',
        'Capão Raso — Curitiba — Paraná',
      ],
    },
  ],
}

export function findArchitectural(slug) {
  return architecturalProjects.find((p) => p.slug === slug)
}

export function findComplementary(slug) {
  return complementaryProjects.find((p) => p.slug === slug)
}
