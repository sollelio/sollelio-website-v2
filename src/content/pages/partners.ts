import type { Locale } from '../../i18n/routes.ts';

/**
 * Programme page and confirmation page copy. Terms are the approved ones
 * (docs/08 decision 3); the form follows decisions 6, 19, 20 and 21.
 */
interface Option {
  value: string;
  label: string;
}
export interface PartnersCopy {
  meta: { title: string; description: string };
  hero: {
    eyebrow: string;
    title: string;
    lead: string;
    geography: string;
    facts: { value: string; label: string }[];
    secondary: string;
    responder: string;
  };
  who: { eyebrow: string; title: string; segments: string[]; note: string };
  exchange: {
    eyebrow: string;
    title: string;
    give: { title: string; items: { title: string; body: string }[] };
    ask: { title: string; items: { title: string; body: string }[] };
    note: string;
  };
  steps: { eyebrow: string; title: string; items: { title: string; body: string }[]; note: string };
  form: {
    eyebrow: string;
    title: string;
    lead: string;
    fields: {
      name: string;
      company: string;
      role: string;
      roleOptions: Option[];
      email: string;
      phone: string;
      phoneHint: string;
      contact: string;
      contactOptions: Option[];
      type: string;
      typeOptions: Option[];
      volume: string;
      volumeOptions: Option[];
      region: string;
      regionOptions: Option[];
      tools: string;
      toolsOptions: Option[];
      pain: string;
      painPlaceholder: string;
      consent: string;
      consentLink: string;
    };
    privacy: string;
    submit: string;
    emailAlt: string;
  };
  faq: { eyebrow: string; title: string };
  thanks: {
    meta: { title: string; description: string };
    eyebrow: string;
    title: string;
    lead: string;
    nextTitle: string;
    next: string[];
    meanwhileTitle: string;
    events: string;
    beauty: string;
    change: string;
  };
}

const regions: Option[] = [
  'Aveiro',
  'Beja',
  'Braga',
  'Bragança',
  'Castelo Branco',
  'Coimbra',
  'Évora',
  'Faro',
  'Guarda',
  'Leiria',
  'Lisboa',
  'Portalegre',
  'Porto',
  'Santarém',
  'Setúbal',
  'Viana do Castelo',
  'Vila Real',
  'Viseu',
  'Açores',
  'Madeira',
].map((r) => ({ value: r.toLowerCase().replace(/\s+/g, '-'), label: r }));

export const partners: Record<Locale, PartnersCopy> = {
  'pt-PT': {
    meta: {
      title: 'Programa de Parceiros Fundadores — Sollelio Events',
      description:
        'Candidate a sua empresa de eventos ao programa de Parceiros Fundadores do Sollelio Events: 3 a 5 empresas, 3 meses, 1 a 2 horas por mês, sem custos nem obrigação de compra.',
    },
    hero: {
      eyebrow: 'Programa de Parceiros Fundadores · Sollelio Events',
      title: 'Ajude a construir o Sollelio Events desde a primeira decisão.',
      lead: 'Estamos a conceber uma nova plataforma de operações para empresas de eventos em Portugal. Procuramos 3 a 5 empresas que vivam este trabalho todos os dias para a construir connosco, desde a conceção.',
      geography: 'O programa destina-se a empresas que operam em Portugal.',
      facts: [
        { value: '3 a 5', label: 'empresas' },
        { value: '3 meses', label: 'prolongáveis por acordo mútuo' },
        { value: '1 a 2 h', label: 'por mês, com flexibilidade' },
        { value: 'Sem custos', label: 'nem obrigação de compra' },
      ],
      secondary: 'Ler as perguntas frequentes',
      responder: 'Responde-lhe Hélio Gonçalves, fundador da Sollelio.',
    },
    who: {
      eyebrow: 'Para quem é',
      title: 'Empresas que fazem eventos acontecer, em Portugal.',
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
    exchange: {
      eyebrow: 'O acordo',
      title: 'O que recebe e o que pedimos, sem letras pequenas.',
      give: {
        title: 'O que recebe',
        items: [
          {
            title: 'Acesso à conceção',
            body: 'Vê e discute o produto enquanto está a ser desenhado, antes de existir.',
          },
          {
            title: 'Influência nas prioridades',
            body: 'Os seus problemas reais orientam o que construímos primeiro. A decisão final de produto é da Sollelio.',
          },
          { title: 'Contacto direto', body: 'Fala com quem está a construir, sem intermediários.' },
          {
            title: 'Condições a considerar no fim',
            body: 'A Sollelio tenciona considerar condições preferenciais para os parceiros depois do programa. Não garantimos preços, descontos, acesso gratuito permanente ou qualquer benefício comercial.',
          },
        ],
      },
      ask: {
        title: 'O que pedimos',
        items: [
          {
            title: 'Conversas de descoberta',
            body: 'Sobre como o seu negócio funciona, onde o trabalho se perde e o que merece ser melhorado.',
          },
          {
            title: 'Revisão de protótipos e fluxos',
            body: 'Reações curtas a propostas de ecrãs e percursos, no seu contexto.',
          },
          {
            title: 'Testes quando fizer sentido',
            body: 'Só quando existirem versões adequadas para isso.',
          },
          {
            title: 'Cerca de 1 a 2 horas por mês',
            body: 'Com flexibilidade, durante 3 meses prolongáveis por acordo mútuo. Qualquer uma das partes pode sair a qualquer momento, sem penalização, bastando comunicar a decisão.',
          },
        ],
      },
      note: 'A participação não confere participação no capital, propriedade ou direitos de decisão na empresa.',
    },
    steps: {
      eyebrow: 'Como funciona',
      title: 'Quatro passos, sem documentos.',
      items: [
        {
          title: 'Candidatura curta',
          body: 'Cerca de cinco minutos, no telemóvel ou no computador.',
        },
        {
          title: 'Análise',
          body: 'Resposta inicial no prazo de 5 dias úteis após a receção da candidatura.',
        },
        {
          title: 'Conversa inicial',
          body: 'Se for convidado, uma conversa de 20 a 30 minutos para nos conhecermos.',
        },
        {
          title: 'Convite e confirmação',
          body: 'Se houver encaixe, confirmamos a participação e combinamos o arranque.',
        },
      ],
      note: 'A candidatura não garante admissão.',
    },
    form: {
      eyebrow: 'Candidatura',
      title: 'Conte-nos como trabalha.',
      lead: 'Responde-lhe Hélio Gonçalves, fundador da Sollelio.',
      fields: {
        name: 'Nome',
        company: 'Empresa',
        role: 'Função',
        roleOptions: [
          { value: 'proprietario', label: 'Proprietário/a' },
          { value: 'gestor', label: 'Gestor/a' },
          { value: 'coordenacao', label: 'Coordenação' },
          { value: 'outra', label: 'Outra' },
        ],
        email: 'Email',
        phone: 'Telemóvel ou WhatsApp',
        phoneHint: 'Só se preferir que o contactemos por telefone ou WhatsApp.',
        contact: 'Como prefere que o contactemos?',
        contactOptions: [
          { value: 'email', label: 'Email' },
          { value: 'telefone', label: 'Telefone' },
          { value: 'whatsapp', label: 'WhatsApp' },
        ],
        type: 'Tipo de negócio',
        typeOptions: [
          { value: 'organizacao', label: 'Organização de eventos' },
          { value: 'catering', label: 'Catering' },
          { value: 'decoracao', label: 'Decoração' },
          { value: 'espaco', label: 'Espaço ou quinta' },
          { value: 'aluguer', label: 'Aluguer de material' },
          { value: 'outro', label: 'Outro fornecedor' },
        ],
        volume: 'Eventos por ano',
        volumeOptions: [
          { value: 'ate-10', label: 'Até 10' },
          { value: '10-30', label: '10 a 30' },
          { value: '30-80', label: '30 a 80' },
          { value: 'mais-80', label: 'Mais de 80' },
        ],
        region: 'Distrito ou região',
        regionOptions: regions,
        tools: 'Como gere os eventos hoje?',
        toolsOptions: [
          { value: 'whatsapp', label: 'WhatsApp' },
          { value: 'folhas', label: 'Excel ou folhas de cálculo' },
          { value: 'papel', label: 'Papel ou caderno' },
          { value: 'software', label: 'Software' },
        ],
        pain: 'O que lhe tira mais tempo ou lhe falha mais vezes?',
        painPlaceholder: 'Duas ou três frases chegam.',
        consent: 'Li o aviso de privacidade e percebo como os meus dados são tratados.',
        consentLink: 'Ler o aviso de privacidade',
      },
      privacy:
        'Ao enviar, os seus dados são tratados por Hélio Gonçalves (Sollelio) para analisar a candidatura e contactá-lo, como passo prévio a uma eventual colaboração. Não os usamos para marketing. Guardamo-los até 6 meses após o fecho da seleção, ou durante a colaboração se for selecionado. Pode pedir acesso, correção ou apagamento em sollelio.it@gmail.com.',
      submit: 'Enviar candidatura',
      emailAlt: 'Prefere email?',
    },
    faq: {
      eyebrow: 'Perguntas frequentes',
      title: 'O que nos perguntam antes de se candidatar.',
    },
    thanks: {
      meta: {
        title: 'Candidatura recebida — Sollelio Events',
        description:
          'A sua candidatura ao programa de Parceiros Fundadores do Sollelio Events foi recebida.',
      },
      eyebrow: 'Parceiros Fundadores · Sollelio Events',
      title: 'Candidatura recebida. Obrigado.',
      lead: 'A sua candidatura ao programa de Parceiros Fundadores do Sollelio Events chegou-nos.',
      nextTitle: 'O que acontece a seguir',
      next: [
        'Recebe uma resposta inicial no prazo de 5 dias úteis.',
        'Se for convidado, propomos uma conversa de 20 a 30 minutos para nos conhecermos.',
        'A candidatura não garante seleção. Respondemos a todas.',
      ],
      meanwhileTitle: 'Entretanto',
      events: 'Ver em que ponto está o Sollelio Events',
      beauty: 'Conhecer o Beauty OS',
      change: 'Se algo mudar, escreva-nos:',
    },
  },
  en: {
    meta: {
      title: 'Founding Design Partners programme — Sollelio Events',
      description:
        'Apply with your events business to the Sollelio Events Founding Design Partners programme: 3 to 5 businesses, 3 months, 1 to 2 hours a month, free and with no obligation to buy.',
    },
    hero: {
      eyebrow: 'Founding Design Partners programme · Sollelio Events',
      title: 'Help build Sollelio Events from the very first decision.',
      lead: 'We are designing a new operations platform for events businesses in Portugal. We are looking for 3 to 5 businesses that live this work every day to build it with us, from conception.',
      geography: 'The programme is for businesses operating in Portugal.',
      facts: [
        { value: '3 to 5', label: 'businesses' },
        { value: '3 months', label: 'extendable by mutual agreement' },
        { value: '1 to 2 h', label: 'a month, flexibly' },
        { value: 'Free', label: 'and no obligation to buy' },
      ],
      secondary: 'Read the frequently asked questions',
      responder: 'You will hear back from Hélio Gonçalves, founder of Sollelio.',
    },
    who: {
      eyebrow: 'Who it is for',
      title: 'Businesses that make events happen, in Portugal.',
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
    exchange: {
      eyebrow: 'The agreement',
      title: 'What you get and what we ask, with no small print.',
      give: {
        title: 'What you get',
        items: [
          {
            title: 'Access to conception',
            body: 'You see and discuss the product while it is being designed, before it exists.',
          },
          {
            title: 'Influence on priorities',
            body: 'Your real problems guide what we build first. The final product decisions are Sollelio’s.',
          },
          {
            title: 'Direct contact',
            body: 'You talk to the person building it, with no intermediaries.',
          },
          {
            title: 'Terms to be considered at the end',
            body: 'Sollelio intends to consider preferential terms for partners after the programme. We do not guarantee prices, discounts, permanent free access or any commercial benefit.',
          },
        ],
      },
      ask: {
        title: 'What we ask',
        items: [
          {
            title: 'Discovery conversations',
            body: 'About how your business works, where the work gets lost and what deserves to be improved.',
          },
          {
            title: 'Prototype and workflow reviews',
            body: 'Short reactions to proposed screens and journeys, in your context.',
          },
          { title: 'Tests when it makes sense', body: 'Only when suitable versions exist.' },
          {
            title: 'About 1 to 2 hours a month',
            body: 'Flexibly, over 3 months extendable by mutual agreement. Either party may leave at any time, without penalty, by communicating the decision.',
          },
        ],
      },
      note: 'Participation does not grant equity, company ownership or corporate decision-making rights.',
    },
    steps: {
      eyebrow: 'How it works',
      title: 'Four steps, no paperwork.',
      items: [
        { title: 'Short application', body: 'About five minutes, on your phone or computer.' },
        {
          title: 'Review',
          body: 'An initial response within 5 business days of receiving your application.',
        },
        {
          title: 'Initial conversation',
          body: 'If invited, a 20 to 30-minute conversation to get to know each other.',
        },
        {
          title: 'Invitation and confirmation',
          body: 'If there is a fit, we confirm your participation and agree the start.',
        },
      ],
      note: 'An application does not guarantee admission.',
    },
    form: {
      eyebrow: 'Application',
      title: 'Tell us how you work.',
      lead: 'You will hear back from Hélio Gonçalves, founder of Sollelio.',
      fields: {
        name: 'Name',
        company: 'Business',
        role: 'Role',
        roleOptions: [
          { value: 'proprietario', label: 'Owner' },
          { value: 'gestor', label: 'Manager' },
          { value: 'coordenacao', label: 'Coordination' },
          { value: 'outra', label: 'Other' },
        ],
        email: 'Email',
        phone: 'Mobile or WhatsApp',
        phoneHint: 'Only if you prefer to be contacted by phone or WhatsApp.',
        contact: 'How would you like us to contact you?',
        contactOptions: [
          { value: 'email', label: 'Email' },
          { value: 'telefone', label: 'Phone' },
          { value: 'whatsapp', label: 'WhatsApp' },
        ],
        type: 'Type of business',
        typeOptions: [
          { value: 'organizacao', label: 'Event organisation' },
          { value: 'catering', label: 'Catering' },
          { value: 'decoracao', label: 'Decoration' },
          { value: 'espaco', label: 'Venue or estate' },
          { value: 'aluguer', label: 'Equipment hire' },
          { value: 'outro', label: 'Other supplier' },
        ],
        volume: 'Events per year',
        volumeOptions: [
          { value: 'ate-10', label: 'Up to 10' },
          { value: '10-30', label: '10 to 30' },
          { value: '30-80', label: '30 to 80' },
          { value: 'mais-80', label: 'More than 80' },
        ],
        region: 'District or region',
        regionOptions: regions,
        tools: 'How do you manage events today?',
        toolsOptions: [
          { value: 'whatsapp', label: 'WhatsApp' },
          { value: 'folhas', label: 'Excel or spreadsheets' },
          { value: 'papel', label: 'Paper or notebook' },
          { value: 'software', label: 'Software' },
        ],
        pain: 'What takes most of your time, or fails most often?',
        painPlaceholder: 'Two or three sentences are enough.',
        consent: 'I have read the privacy notice and understand how my data is handled.',
        consentLink: 'Read the privacy notice',
      },
      privacy:
        'When you send this form, your details are processed by Hélio Gonçalves (Sollelio) to assess the application and contact you, as a step prior to a possible collaboration. We do not use them for marketing. We keep them for up to 6 months after the selection closes, or for the duration of the collaboration if you are selected. You can ask for access, correction or deletion at sollelio.it@gmail.com.',
      submit: 'Send application',
      emailAlt: 'Prefer email?',
    },
    faq: {
      eyebrow: 'Frequently asked questions',
      title: 'What people ask before applying.',
    },
    thanks: {
      meta: {
        title: 'Application received — Sollelio Events',
        description:
          'Your application to the Sollelio Events Founding Design Partners programme has been received.',
      },
      eyebrow: 'Founding Design Partners · Sollelio Events',
      title: 'Application received. Thank you.',
      lead: 'Your application to the Sollelio Events Founding Design Partners programme has reached us.',
      nextTitle: 'What happens next',
      next: [
        'You will receive an initial response within 5 business days.',
        'If invited, we will propose a 20 to 30-minute conversation to get to know each other.',
        'An application does not guarantee selection. We answer every one.',
      ],
      meanwhileTitle: 'In the meantime',
      events: 'See where Sollelio Events stands',
      beauty: 'Discover Beauty OS',
      change: 'If anything changes, write to us:',
    },
  },
};
