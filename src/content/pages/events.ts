import type { Locale } from '../../i18n/routes.ts';

/**
 * Sollelio Events page copy. The "day to day" rows come from the product
 * discovery recorded with Do Luxo à Mesa (August–September 2026), written in
 * Sollelio's voice. V2 status follows docs/08 decision 4 exactly: in
 * conception and architecture, no functional implementation.
 */
export interface EventsCopy {
  meta: { title: string; description: string };
  hero: {
    statusChip: string;
    campaignChip: string;
    title: string;
    lead: string;
    segments: string;
    secondary: string;
  };
  bar: { label: string; items: { href: string; label: string }[] };
  reality: {
    eyebrow: string;
    title: string;
    scene: string;
    rowsTitle: string;
    rows: { title: string; body: string }[];
    note: string;
  };
  origin: {
    eyebrow: string;
    title: string;
    body: string[];
    markers: { title: string; body: string }[];
    caption: string;
    chip: string;
    figureAlt: string;
  };
  status: {
    eyebrow: string;
    title: string;
    items: {
      label: string;
      chip: string;
      tone: 'original' | 'exploring' | 'accent';
      body: string;
    }[];
    note: string;
  };
  programme: {
    eyebrow: string;
    title: string;
    body: string;
    terms: { value: string; label: string }[];
    cta: string;
    responder: string;
  };
  who: { eyebrow: string; title: string; segments: string[]; note: string };
  faq: { eyebrow: string; title: string; all: string };
  closing: { title: string; body: string };
}

export const events: Record<Locale, EventsCopy> = {
  'pt-PT': {
    meta: {
      title: 'Sollelio Events — Software de gestão para empresas de eventos',
      description:
        'Uma nova plataforma de operações para empresas de eventos em Portugal, em conceção com parceiros fundadores. Nasce do sistema que uma empresa de eventos usa todos os dias.',
    },
    hero: {
      statusChip: 'Em conceção',
      campaignChip: 'Parceiros Fundadores · candidaturas abertas',
      title: 'O evento acontece num dia. O trabalho começa muito antes.',
      lead: 'O Sollelio Events é a nova plataforma de operações para empresas de eventos em Portugal. Está em fase de conceção e arquitetura, e vai ser construída desde o início com um grupo de empresas que vivem este trabalho todos os dias.',
      segments:
        'Para organização de eventos, catering, decoração, espaços e quintas, aluguer de material e outros fornecedores do setor.',
      secondary: 'Ver em que ponto estamos',
    },
    bar: {
      label: 'Secções desta página',
      items: [
        { href: '#dia-a-dia', label: 'O dia a dia' },
        { href: '#origem', label: 'Origem' },
        { href: '#estado', label: 'Em que ponto estamos' },
        { href: '#design-partners', label: 'Programa' },
        { href: '#faq', label: 'Perguntas' },
      ],
    },
    reality: {
      eyebrow: 'O dia a dia',
      title: 'Entre o primeiro pedido e o dia do evento, a informação muda de mãos muitas vezes.',
      scene:
        'Uma informação está numa mensagem, outra num áudio, outra numa fotografia. A decisão mudou três semanas depois. E é preciso encontrar, depressa, a última versão confirmada.',
      rowsTitle: 'O que aprendemos dentro de uma empresa de eventos',
      rows: [
        {
          title: 'Um pedido raramente chega definido',
          body: 'Pode começar como um simples aluguer de material e acabar como um serviço de decoração completo, com mais convidados do que no início. Entre o primeiro contacto e a confirmação há propostas, opções e ajustes, e só o sinal confirma a data.',
        },
        {
          title: 'A conversa é também o arquivo',
          body: 'O WhatsApp é o canal de comunicação e, ao mesmo tempo, o sítio onde fica o histórico do evento. Nos eventos grandes, acompanhados durante meses, encontrar a última informação confirmada custa tempo e atenção.',
        },
        {
          title: 'Uma alteração puxa por todas as outras',
          body: 'Mais quinze convidados mudam a composição da mesa, o stock, o material a transportar, a equipa e os horários. Se a alteração não chega a todos, alguém prepara o evento com informação antiga.',
        },
      ],
      note: 'Observações registadas com a Do Luxo à Mesa durante a descoberta do produto, em agosto e setembro de 2026.',
    },
    origin: {
      eyebrow: 'Origem',
      title: 'Não é uma ideia no papel. Nasce de um sistema que funciona todos os dias.',
      body: [
        'Antes do Sollelio Events existe um sistema construído para a Do Luxo à Mesa, uma empresa de eventos em Lisboa. É usado diariamente para interessados, clientes, agenda, logística e equipa.',
        'O Sollelio Events V2 é um produto novo, separado desse sistema, e parte do que ele ensinou. Nenhuma capacidade do sistema original está, para já, disponível no V2.',
      ],
      markers: [
        {
          title: 'A jornada do evento',
          body: 'De interessado a evento confirmado, cada cliente numa fase visível.',
        },
        {
          title: 'O próximo passo, à vista',
          body: 'O sistema diz o que falta fazer. Aqui: registar o sinal, porque é ele que reserva a data.',
        },
        {
          title: 'O evento todo num sítio',
          body: 'Documentos, materiais, fotografias, pagamentos, tarefas, planos e notas, em separadores.',
        },
        {
          title: 'Orçamento, contrato e briefing',
          body: 'Gerados, enviados e aceites, com cada passo registado. Partilha em PDF ou WhatsApp.',
        },
      ],
      caption:
        'Página de um evento no sistema original da Do Luxo à Mesa, com a identidade visual dessa empresa. Dados de demonstração. É a origem do Sollelio Events, não a sua direção visual.',
      chip: 'Já funciona no sistema original',
      figureAlt:
        'Página de um evento no sistema original da Do Luxo à Mesa: a jornada do evento por fases, o próximo passo a registar, separadores com documentos, materiais, fotografias, pagamentos e tarefas, e a lista de documentos com orçamento, contrato e briefing.',
    },
    status: {
      eyebrow: 'Em que ponto estamos',
      title: 'Dizemos exatamente o que existe.',
      items: [
        {
          label: 'Sistema original',
          chip: 'Já funciona no sistema original',
          tone: 'original',
          body: 'Em utilização diária na Do Luxo à Mesa: interessados, clientes, agenda, logística e equipa.',
        },
        {
          label: 'Sollelio Events V2',
          chip: 'Em conceção',
          tone: 'exploring',
          body: 'Em conceção e arquitetura. Ainda não há implementação funcional, e nenhuma capacidade do sistema original está disponível no V2.',
        },
        {
          label: 'Com os parceiros fundadores',
          chip: 'A partir de agora',
          tone: 'accent',
          body: 'As prioridades definem-se com as empresas parceiras: conversas de descoberta, revisão de protótipos e testes quando existirem versões adequadas. A decisão final de produto é da Sollelio.',
        },
      ],
      note: 'Não anunciamos datas de lançamento, acessos nem um roteiro fixo de funcionalidades.',
    },
    programme: {
      eyebrow: 'Programa de Parceiros Fundadores',
      title: 'Construir o Sollelio Events com quem faz eventos acontecer.',
      body: 'Um Parceiro Fundador não é um cliente de testes. É uma empresa de eventos que nos dá acesso ao seu dia a dia real, desafia o que assumimos e, quando fizer sentido, experimenta o que construímos.',
      terms: [
        { value: '3 a 5', label: 'empresas na primeira ronda' },
        { value: '3 meses', label: 'prolongáveis por acordo mútuo' },
        { value: '1 a 2 h', label: 'por mês, com flexibilidade' },
        { value: 'Sem custos', label: 'e sem obrigação de compra' },
      ],
      cta: 'Ver o programa e candidatar-me',
      responder: 'Responde-lhe Hélio Gonçalves, fundador da Sollelio.',
    },
    who: {
      eyebrow: 'Para quem é',
      title: 'Empresas do setor dos eventos, em Portugal.',
      segments: [
        'Organização de eventos',
        'Catering',
        'Decoração',
        'Espaços e quintas',
        'Aluguer de material',
        'Outros fornecedores do setor',
      ],
      note: 'Sem dimensão mínima nem volume de negócios mínimo. A seleção depende do encaixe com o produto e do potencial de colaboração.',
    },
    faq: {
      eyebrow: 'Perguntas frequentes',
      title: 'O que nos perguntam antes de se candidatar.',
      all: 'Ver todas as perguntas',
    },
    closing: {
      title:
        'A sua forma de trabalhar pode ser diferente daquela que deu origem ao Sollelio Events.',
      body: 'É exatamente por isso que queremos conversar. Se tem uma empresa de eventos em Portugal e reconhece alguns destes desafios, gostávamos de perceber como o seu negócio funciona.',
    },
  },
  en: {
    meta: {
      title: 'Sollelio Events — Management software for events businesses',
      description:
        'A new operations platform for events businesses in Portugal, in conception with founding design partners. It grows out of the system an events business uses every day.',
    },
    hero: {
      statusChip: 'In conception',
      campaignChip: 'Founding Design Partners · applications open',
      title: 'The event happens in a day. The work starts long before.',
      lead: 'Sollelio Events is the new operations platform for events businesses in Portugal. It is in the conception and architecture phase, and it will be built from the start with a group of businesses that live this work every day.',
      segments:
        'For event organisers, caterers, decorators, venues and estates, equipment hire and other suppliers in the sector.',
      secondary: 'See where we stand',
    },
    bar: {
      label: 'Sections on this page',
      items: [
        { href: '#dia-a-dia', label: 'Day to day' },
        { href: '#origem', label: 'Origin' },
        { href: '#estado', label: 'Where we stand' },
        { href: '#design-partners', label: 'Programme' },
        { href: '#faq', label: 'Questions' },
      ],
    },
    reality: {
      eyebrow: 'Day to day',
      title:
        'Between the first enquiry and the day of the event, information changes hands many times.',
      scene:
        'One detail is in a message, another in a voice note, another in a photo. The decision changed three weeks later. And you need to find the last confirmed version, fast.',
      rowsTitle: 'What we learned inside an events business',
      rows: [
        {
          title: 'An enquiry rarely arrives defined',
          body: 'It can start as a simple equipment hire and end as a full decoration service, with more guests than at the start. Between first contact and confirmation there are proposals, options and adjustments, and only the deposit confirms the date.',
        },
        {
          title: 'The conversation is also the archive',
          body: 'WhatsApp is the communication channel and, at the same time, the place where the event’s history lives. On large events followed over months, finding the last confirmed detail costs time and attention.',
        },
        {
          title: 'One change pulls on all the others',
          body: 'Fifteen more guests change the table composition, the stock, the material to transport, the team and the timings. If the change does not reach everyone, someone prepares the event with old information.',
        },
      ],
      note: 'Observations recorded with Do Luxo à Mesa during product discovery, August–September 2026.',
    },
    origin: {
      eyebrow: 'Origin',
      title: 'Not an idea on paper. It grows out of a system that works every day.',
      body: [
        'Before Sollelio Events there is a system built for Do Luxo à Mesa, an events business in Lisbon. It is used daily for leads, clients, calendar, logistics and team.',
        'Sollelio Events V2 is a new product, separate from that system, and it starts from what the system taught. No capability of the original system is available in V2 yet.',
      ],
      markers: [
        {
          title: 'The event journey',
          body: 'From lead to confirmed event, every client in a visible stage.',
        },
        {
          title: 'The next step, in view',
          body: 'The system says what is left to do. Here: record the deposit, because the deposit reserves the date.',
        },
        {
          title: 'The whole event in one place',
          body: 'Documents, materials, photos, payments, tasks, plans and notes, in tabs.',
        },
        {
          title: 'Quote, contract and briefing',
          body: 'Generated, sent and accepted, with each step recorded. Shared as PDF or over WhatsApp.',
        },
      ],
      caption:
        'An event page in the original Do Luxo à Mesa system, in that company’s visual identity. Demonstration data. It is the origin of Sollelio Events, not its visual direction.',
      chip: 'Running in the original system',
      figureAlt:
        'An event page in the original Do Luxo à Mesa system: the event journey by stage, the next step to record, tabs with documents, materials, photos, payments and tasks, and the document list with quote, contract and briefing.',
    },
    status: {
      eyebrow: 'Where we stand',
      title: 'We say exactly what exists.',
      items: [
        {
          label: 'Original system',
          chip: 'Running in the original system',
          tone: 'original',
          body: 'In daily use at Do Luxo à Mesa: leads, clients, calendar, logistics and team.',
        },
        {
          label: 'Sollelio Events V2',
          chip: 'In conception',
          tone: 'exploring',
          body: 'In conception and architecture. There is no functional implementation yet, and no capability of the original system is available in V2.',
        },
        {
          label: 'With the founding partners',
          chip: 'From now on',
          tone: 'accent',
          body: 'Priorities are set with the partner businesses: discovery conversations, prototype reviews and tests when suitable versions exist. The final product decisions are Sollelio’s.',
        },
      ],
      note: 'We do not announce launch dates, access or a fixed feature roadmap.',
    },
    programme: {
      eyebrow: 'Founding Design Partners programme',
      title: 'Building Sollelio Events with the people who make events happen.',
      body: 'A Founding Design Partner is not a beta customer. It is an events business that gives us access to its real daily work, challenges what we assume and, when it makes sense, tries what we build.',
      terms: [
        { value: '3 to 5', label: 'businesses in the first round' },
        { value: '3 months', label: 'extendable by mutual agreement' },
        { value: '1 to 2 h', label: 'a month, flexibly' },
        { value: 'Free', label: 'and no obligation to buy' },
      ],
      cta: 'See the programme and apply',
      responder: 'You will hear back from Hélio Gonçalves, founder of Sollelio.',
    },
    who: {
      eyebrow: 'Who it is for',
      title: 'Businesses in the events sector, operating in Portugal.',
      segments: [
        'Event organisers',
        'Catering',
        'Decoration',
        'Venues and estates',
        'Equipment hire',
        'Other suppliers in the sector',
      ],
      note: 'No minimum size or turnover. Selection depends on product fit and the potential for collaboration.',
    },
    faq: {
      eyebrow: 'Frequently asked questions',
      title: 'What people ask before applying.',
      all: 'See all questions',
    },
    closing: {
      title: 'The way you work may differ from the business where Sollelio Events began.',
      body: 'That is exactly why we want to talk. If you run an events business in Portugal and recognise some of these challenges, we would like to understand how your business works.',
    },
  },
};
