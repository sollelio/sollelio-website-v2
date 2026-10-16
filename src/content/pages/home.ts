import type { Locale } from '../../i18n/routes.ts';

/**
 * Homepage copy. Portuguese is the source (pt-PT, AO90); English is a
 * localisation, not a word-for-word translation. Every factual claim here
 * traces to docs/08 or to the verified sources listed in docs/01.
 */
export interface HomeCopy {
  meta: { title: string; description: string };
  hero: {
    eyebrow: string;
    title: string;
    lead: string;
    ledgerTitle: string;
    events: { name: string; status: string; campaign: string; body: string };
    beauty: { name: string; status: string; body: string };
  };
  strip: { eyebrow: string; body: string };
  products: {
    eyebrow: string;
    title: string;
    lead: string;
    events: { status: string; title: string; body: string; segments: string };
    beauty: { status: string; title: string; body: string; segments: string };
  };
  method: { eyebrow: string; title: string; rows: { title: string; body: string }[] };
  origin: { eyebrow: string; title: string; body: string[]; caption: string; chip: string };
  founder: { eyebrow: string; note: string };
  closing: { title: string; body: string; partners: string; beauty: string };
}

export const home: Record<Locale, HomeCopy> = {
  'pt-PT': {
    meta: {
      title: 'Sollelio — Software que nasce dos desafios reais dos negócios',
      description:
        'A Sollelio cria software de operações a partir do dia a dia das empresas: Sollelio Events, para empresas de eventos, e Sollelio Beauty OS, para salões de beleza e cabeleireiros.',
    },
    hero: {
      eyebrow: 'Sollelio · software de operações',
      title: 'Software que nasce dos desafios reais dos negócios.',
      lead: 'Desenhamos software útil a partir de perceber, por dentro, os desafios operacionais do dia a dia de uma empresa. Cada produto começa num negócio real e cresce com as empresas que o usam.',
      ledgerTitle: 'Onde está cada produto',
      events: {
        name: 'Sollelio Events',
        status: 'Em conceção',
        campaign: 'Parceiros Fundadores · candidaturas abertas',
        body: 'A nova plataforma de operações para empresas de eventos. Nasce do sistema que uma empresa de eventos usa todos os dias.',
      },
      beauty: {
        name: 'Sollelio Beauty OS',
        status: 'Em adoção inicial',
        body: 'Gestão operacional e financeira para salões de beleza e cabeleireiros. Em utilização com o primeiro salão parceiro.',
      },
    },
    strip: {
      eyebrow: 'Programa de Parceiros Fundadores · Sollelio Events',
      body: 'Procuramos 3 a 5 empresas de eventos em Portugal para construir o Sollelio Events V2 desde a conceção. Três meses, uma a duas horas por mês, sem custos nem obrigação de compra.',
    },
    products: {
      eyebrow: 'O que construímos',
      title: 'Dois produtos. Um método.',
      lead: 'Cada produto nasce dentro de um negócio real, é construído com quem o usa e diz, sem rodeios, em que ponto está.',
      events: {
        status: 'Em conceção',
        title: 'O evento acontece num dia. O trabalho começa muito antes.',
        body: 'Uma plataforma de operações para empresas de eventos em Portugal: pedidos, propostas, sinais, equipa do dia e documentos. Em conceção, com parceiros fundadores desde o início.',
        segments: 'Organização de eventos · catering · decoração · espaços · aluguer de material',
      },
      beauty: {
        status: 'Em adoção inicial',
        title: 'O seu salão é muito mais do que os serviços que realiza.',
        body: 'Registo de serviços, equipa, despesas, stock e fecho do período, num telemóvel partilhado pelo salão. Em utilização com o Salão Agradável, o primeiro salão parceiro.',
        segments: 'Salões de beleza · cabeleireiros · barbearias',
      },
    },
    method: {
      eyebrow: 'Como trabalhamos',
      title: 'Software que começa onde o trabalho acontece.',
      rows: [
        {
          title: 'Começa dentro de um negócio real',
          body: 'O primeiro sistema foi construído para a Do Luxo à Mesa, uma empresa de eventos, a partir de dentro da operação. O Beauty OS nasceu da mesma forma, com o Salão Agradável.',
        },
        {
          title: 'É construído com quem o vai usar',
          body: 'Os parceiros fundadores partilham o seu dia a dia, revêem protótipos e testam versões quando fazem sentido. Influenciam as prioridades; a decisão final de produto é da Sollelio.',
        },
        {
          title: 'Dizemos em que ponto está',
          body: 'Cada produto tem um estado visível: o que já funciona, o que está em adoção, o que está em conceção. Nada é apresentado como pronto antes de o estar.',
        },
      ],
    },
    origin: {
      eyebrow: 'Onde começou',
      title: 'Começou com os problemas reais de uma empresa de eventos.',
      body: [
        'Antes de existir a Sollelio, havia um sistema construído para a Do Luxo à Mesa, uma empresa de eventos: interessados, orçamentos, sinais, agenda, logística e equipa numa só ferramenta, que hoje faz parte do processo normal de organização dos seus eventos.',
        'Trabalhar tão perto da operação mostrou problemas e oportunidades comuns a outros negócios. Foi dessa experiência que nasceu a Sollelio.',
      ],
      caption:
        'Página de um evento no sistema original da Do Luxo à Mesa, com a identidade visual dessa empresa. Dados de demonstração.',
      chip: 'Já funciona no sistema original',
    },
    founder: {
      eyebrow: 'Fundador',
      note: 'Sou programador. Construí o primeiro sistema para uma empresa de eventos a partir de dentro, dia após dia, a ver onde o trabalho falhava. Com um salão, voltei a fazê-lo. A Sollelio nasceu dessa forma de trabalhar: perceber primeiro como as pessoas trabalham e só depois escrever software. Leio e respondo pessoalmente a cada candidatura.',
    },
    closing: {
      title: 'Tem uma empresa de eventos, um salão ou um cabeleireiro em Portugal?',
      body: 'Gostávamos de perceber como trabalha e o que lhe tira mais tempo. Escolha a porta certa ou escreva-nos diretamente.',
      partners: 'Parceiros Fundadores · Events',
      beauty: 'Falar sobre o Beauty OS',
    },
  },
  en: {
    meta: {
      title: 'Sollelio — Software born from the real challenges of businesses',
      description:
        'Sollelio builds operations software from the daily work of real businesses: Sollelio Events, for events businesses, and Sollelio Beauty OS, for beauty and hair salons.',
    },
    hero: {
      eyebrow: 'Sollelio · operations software',
      title: 'Software born from the real challenges of businesses.',
      lead: 'We design useful software by understanding, from the inside, the operational challenges a business faces every day. Each product starts in a real business and grows with the businesses that use it.',
      ledgerTitle: 'Where each product stands',
      events: {
        name: 'Sollelio Events',
        status: 'In conception',
        campaign: 'Founding Design Partners · applications open',
        body: 'The new operations platform for events businesses. It grows out of the system an events business uses every day.',
      },
      beauty: {
        name: 'Sollelio Beauty OS',
        status: 'In early adoption',
        body: 'Operational and financial management for beauty and hair salons. In use with the first partner salon.',
      },
    },
    strip: {
      eyebrow: 'Founding Design Partners programme · Sollelio Events',
      body: 'We are looking for 3 to 5 events businesses operating in Portugal to build Sollelio Events V2 with us from conception. Three months, one to two hours a month, free and with no obligation to buy.',
    },
    products: {
      eyebrow: 'What we build',
      title: 'Two products. One method.',
      lead: 'Each product is born inside a real business, built with the people who use it, and says plainly where it stands.',
      events: {
        status: 'In conception',
        title: 'The event happens in a day. The work starts long before.',
        body: 'An operations platform for events businesses in Portugal: enquiries, proposals, deposits, the team for the day and documents. In conception, with founding partners from the start.',
        segments: 'Event organisers · catering · decoration · venues · equipment hire',
      },
      beauty: {
        status: 'In early adoption',
        title: 'Your salon is much more than the services it performs.',
        body: 'Services, team, expenses, stock and the period close, on one phone shared by the salon. In use with Salão Agradável, the first partner salon.',
        segments: 'Beauty salons · hairdressers · barbershops',
      },
    },
    method: {
      eyebrow: 'How we work',
      title: 'Software that starts where the work happens.',
      rows: [
        {
          title: 'It starts inside a real business',
          body: 'The first system was built for Do Luxo à Mesa, an events business, from inside its operation. Beauty OS was born the same way, with Salão Agradável.',
        },
        {
          title: 'It is built with the people who will use it',
          body: 'Founding partners share their daily work, review prototypes and test versions when it makes sense. They shape priorities; the final product decisions are Sollelio’s.',
        },
        {
          title: 'We say where it stands',
          body: 'Every product carries a visible status: what already works, what is in adoption, what is in conception. Nothing is presented as ready before it is.',
        },
      ],
    },
    origin: {
      eyebrow: 'Where it began',
      title: 'It began with the real problems of an events business.',
      body: [
        'Before Sollelio existed, there was a system built for Do Luxo à Mesa, an events business: leads, quotes, deposits, calendar, logistics and team in one tool, which is now part of how the business organises its events every day.',
        'Working that close to the operation revealed problems and opportunities shared by other businesses. Sollelio was born from that experience.',
      ],
      caption:
        'An event page in the original Do Luxo à Mesa system, in that company’s visual identity. Demonstration data.',
      chip: 'Running in the original system',
    },
    founder: {
      eyebrow: 'Founder',
      note: 'I am a programmer. I built the first system for an events business from the inside, day after day, watching where the work broke down. With a salon, I did it again. Sollelio was born from that way of working: understand how people work first, and only then write software. I read and answer every application personally.',
    },
    closing: {
      title: 'Do you run an events business, a salon or a hairdresser’s in Portugal?',
      body: 'We would like to understand how you work and what takes most of your time. Choose the right door, or write to us directly.',
      partners: 'Founding Design Partners · Events',
      beauty: 'Talk about Beauty OS',
    },
  },
};
