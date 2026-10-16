import type { Locale } from '../../i18n/routes.ts';

/**
 * Sollelio Beauty OS page copy. Capabilities are limited to what the
 * first-run reference package (beauty-os repository, branch dev @ 6fca0d6,
 * 15 Oct 2026) records as implemented. Positioning, CTA and boundary
 * follow docs/08 decisions 12–14.
 */
export interface BeautyCopy {
  meta: { title: string; description: string };
  hero: {
    statusChip: string;
    title: string;
    lead: string;
    note: string;
    secondary: string;
    screenAlt: string;
  };
  how: { eyebrow: string; title: string; lead: string; items: { title: string; body: string }[] };
  screens: {
    eyebrow: string;
    title: string;
    caption: string;
    items: { alt: string; label: string }[];
  };
  boundary: { eyebrow: string; title: string; body: string };
  partner: { eyebrow: string; title: string; body: string; logoAlt: string };
  availability: { title: string; body: string };
  form: {
    eyebrow: string;
    title: string;
    lead: string;
    fields: {
      name: string;
      salon: string;
      email: string;
      phone: string;
      message: string;
      messagePlaceholder: string;
      consent: string;
      consentLink: string;
    };
    privacy: string;
    submit: string;
    successTitle: string;
    successBody: string;
  };
  faq: { eyebrow: string; title: string };
}

export const beauty: Record<Locale, BeautyCopy> = {
  'pt-PT': {
    meta: {
      title: 'Sollelio Beauty OS — Gestão para salões de beleza e cabeleireiros',
      description:
        'Gestão operacional e financeira do salão num telemóvel partilhado pela equipa: serviços, adiantamentos, despesas, stock, fecho do período e saúde do negócio. Em adoção inicial com o Salão Agradável.',
    },
    hero: {
      statusChip: 'Em adoção inicial',
      title: 'O seu salão é muito mais do que os serviços que realiza.',
      lead: 'O Beauty OS regista, num telemóvel partilhado pela equipa, o que acontece todos os dias no salão: serviços, adiantamentos, despesas e compras, stock. E fecha o período com a informação de que precisa para decidir.',
      note: 'Em utilização com o Salão Agradável, o primeiro salão parceiro. Ainda não está disponível comercialmente.',
      secondary: 'Ver como funciona',
      screenAlt:
        'Ecrã "Hoje" do Beauty OS num telemóvel: botão "Registar serviço", atalhos para adiantamento, despesa ou compra e stock, um aviso de três produtos marcados a comprar e a área privada com PIN.',
    },
    how: {
      eyebrow: 'Como funciona',
      title: 'Pensado para um telemóvel que passa de mão em mão.',
      lead: 'Um salão não tem um computador por pessoa. Tem um telemóvel partilhado, entre clientes. O Beauty OS foi desenhado para isso: registar em segundos, sem contas pessoais nem logins repetidos. É uma aplicação web pensada primeiro para o telemóvel (uma Progressive Web App): instala-se a partir do navegador no telemóvel que o salão já tem, sem loja de aplicações, e está sempre na versão mais recente.',
      items: [
        {
          title: 'Registar serviço',
          body: 'Quem fez, que serviço, valor e forma de pagamento, em três passos. Numerário, transferência ou misto.',
        },
        {
          title: 'Adiantamentos à equipa',
          body: 'Dinheiro entregue a uma pessoa da equipa por conta do que vai receber, registado no momento e separado das despesas do salão.',
        },
        {
          title: 'Despesas e compras',
          body: 'Cada saída de dinheiro registada no próprio dia, para o fecho bater certo.',
        },
        {
          title: 'Stock com atenção',
          body: 'Estado aproximado marcado pela equipa: o que está a acabar, o que é urgente comprar e a lista de compra já preparada.',
        },
        {
          title: 'Área privada com PIN',
          body: 'Equipa, situação de cada profissional, fecho do período e saúde do negócio ficam atrás de um PIN. Nos ecrãs partilhados ninguém vê ganhos nem saldos.',
        },
        {
          title: 'Continua sem ligação',
          body: 'Os registos do dia ficam no telemóvel quando a ligação falha e seguem quando ela volta. Algumas ações, como a área privada, precisam de ligação.',
        },
      ],
    },
    screens: {
      eyebrow: 'O produto, tal como é',
      title: 'Ecrãs reais, dados de demonstração.',
      caption:
        'Capturas do Beauty OS em outubro de 2026, com uma organização de demonstração. Nenhum ecrã foi desenhado para esta página.',
      items: [
        {
          alt: 'Ecrã "Hoje" do Beauty OS com o botão "Registar serviço", atalhos e a área privada.',
          label: 'Hoje · o ponto de partida do dia',
        },
        {
          alt: 'Ecrã "Stock" do Beauty OS: produtos marcados como vazio, quase vazio e baixo, com o botão "Preparar compra · 3 produtos".',
          label: 'Stock · estado marcado pela equipa',
        },
        {
          alt: 'Área privada do Beauty OS, secção "Equipa": lista de quatro pessoas com as suas áreas e o acesso ao fecho do período.',
          label: 'Área privada · equipa e fecho',
        },
      ],
    },
    boundary: {
      eyebrow: 'Com clareza',
      title: 'O Beauty OS não emite faturas.',
      body: 'O Beauty OS regista operações e valores: serviços, pagamentos, adiantamentos, despesas e fecho do período. Não emite faturas nem documentos para o cliente. A faturação continua a ser feita no seu software de faturação certificado.',
    },
    partner: {
      eyebrow: 'O primeiro salão',
      title: 'Construído com o Salão Agradável.',
      body: 'O Beauty OS está em adoção inicial no Salão Agradável, o primeiro salão a usá-lo. É com este salão que estamos a afinar o produto antes de o abrir a outros.',
      logoAlt: 'Salão Agradável',
    },
    availability: {
      title: 'Ainda não está disponível comercialmente.',
      body: 'Não há preços, subscrições nem períodos de experiência publicados. Se tem um salão de beleza ou um cabeleireiro e quer perceber se o Beauty OS faz sentido para si, fale connosco.',
    },
    form: {
      eyebrow: 'Falar com a Sollelio',
      title: 'Conte-nos sobre o seu salão.',
      lead: 'Responde-lhe Hélio Gonçalves, fundador da Sollelio.',
      fields: {
        name: 'Nome',
        salon: 'Salão ou negócio',
        email: 'Email',
        phone: 'Telemóvel ou WhatsApp',
        message: 'O que gostaria de perceber?',
        messagePlaceholder:
          'Por exemplo: como funciona o fecho do período, ou se serve para um salão com duas pessoas.',
        consent: 'Li o aviso de privacidade e percebo como os meus dados são tratados.',
        consentLink: 'Ler o aviso de privacidade',
      },
      privacy:
        'Os seus dados servem apenas para responder ao seu pedido. Não os partilhamos nem os usamos para marketing. Pode pedir-nos para os apagar quando quiser.',
      submit: 'Enviar mensagem',
      successTitle: 'Mensagem recebida. Obrigado.',
      successBody: 'Respondemos pessoalmente, normalmente em poucos dias úteis.',
    },
    faq: { eyebrow: 'Perguntas frequentes', title: 'O que nos perguntam sobre o Beauty OS.' },
  },
  en: {
    meta: {
      title: 'Sollelio Beauty OS — Management for beauty and hair salons',
      description:
        'Operational and financial management for the salon on one phone shared by the team: services, advances, expenses, stock, period close and business health. In early adoption with Salão Agradável.',
    },
    hero: {
      statusChip: 'In early adoption',
      title: 'Your salon is much more than the services it performs.',
      lead: 'Beauty OS records, on one phone shared by the team, what happens in the salon every day: services, advances, expenses and purchases, stock. And it closes the period with the information you need to decide.',
      note: 'In use with Salão Agradável, the first partner salon. Not yet commercially available.',
      secondary: 'See how it works',
      screenAlt:
        'The Beauty OS "Today" screen on a phone: a "Record service" button, shortcuts for advance, expense or purchase and stock, a notice of three products marked to buy, and the PIN-protected private area.',
    },
    how: {
      eyebrow: 'How it works',
      title: 'Designed for a phone that passes from hand to hand.',
      lead: 'A salon does not have a computer per person. It has one shared phone, used between clients. Beauty OS was designed for that: record in seconds, with no personal accounts and no repeated logins. It is a web app designed for the phone first (a Progressive Web App): it installs from the browser on the phone the salon already has, with no app store, and is always on the latest version.',
      items: [
        {
          title: 'Record a service',
          body: 'Who did it, which service, amount and payment method, in three steps. Cash, transfer or mixed.',
        },
        {
          title: 'Advances to the team',
          body: 'Money handed to a team member against what they will earn, recorded on the spot and kept separate from the salon’s expenses.',
        },
        {
          title: 'Expenses and purchases',
          body: 'Every outgoing recorded on the day, so the close adds up.',
        },
        {
          title: 'Stock with attention',
          body: 'An approximate status marked by the team: what is running out, what is urgent to buy, and the shopping list already prepared.',
        },
        {
          title: 'A private area with PIN',
          body: 'Team, each professional’s situation, the period close and business health sit behind a PIN. On shared screens nobody sees earnings or balances.',
        },
        {
          title: 'Keeps going offline',
          body: 'The day’s records stay on the phone when the connection drops and follow when it returns. Some actions, such as the private area, need a connection.',
        },
      ],
    },
    screens: {
      eyebrow: 'The product as it is',
      title: 'Real screens, demonstration data.',
      caption:
        'Beauty OS captures from October 2026, with a demonstration organisation. No screen was drawn for this page.',
      items: [
        {
          alt: 'The Beauty OS "Today" screen with the "Record service" button, shortcuts and the private area.',
          label: 'Today · the day’s starting point',
        },
        {
          alt: 'The Beauty OS "Stock" screen: products marked empty, nearly empty and low, with the button "Prepare purchase · 3 products".',
          label: 'Stock · status marked by the team',
        },
        {
          alt: 'The Beauty OS private area, "Team" section: a list of four people with their areas and access to the period close.',
          label: 'Private area · team and close',
        },
      ],
    },
    boundary: {
      eyebrow: 'To be clear',
      title: 'Beauty OS does not issue invoices.',
      body: 'Beauty OS records operations and amounts: services, payments, advances, expenses and the period close. It does not issue invoices or customer-facing documents. Invoicing stays in your certified invoicing software.',
    },
    partner: {
      eyebrow: 'The first salon',
      title: 'Built with Salão Agradável.',
      body: 'Beauty OS is in early adoption at Salão Agradável, the first salon to use it. It is with this salon that we are refining the product before opening it to others.',
      logoAlt: 'Salão Agradável',
    },
    availability: {
      title: 'Not yet commercially available.',
      body: 'There are no published prices, subscriptions or trial periods. If you run a beauty salon or a hairdresser’s and want to find out whether Beauty OS makes sense for you, talk to us.',
    },
    form: {
      eyebrow: 'Talk to Sollelio',
      title: 'Tell us about your salon.',
      lead: 'You will hear back from Hélio Gonçalves, founder of Sollelio.',
      fields: {
        name: 'Name',
        salon: 'Salon or business',
        email: 'Email',
        phone: 'Mobile or WhatsApp',
        message: 'What would you like to find out?',
        messagePlaceholder:
          'For example: how the period close works, or whether it suits a two-person salon.',
        consent: 'I have read the privacy notice and understand how my data is handled.',
        consentLink: 'Read the privacy notice',
      },
      privacy:
        'Your details are used only to answer your request. We do not share them or use them for marketing. You can ask us to delete them at any time.',
      submit: 'Send message',
      successTitle: 'Message received. Thank you.',
      successBody: 'We reply personally, usually within a few business days.',
    },
    faq: { eyebrow: 'Frequently asked questions', title: 'What people ask about Beauty OS.' },
  },
};
