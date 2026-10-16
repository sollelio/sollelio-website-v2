import type { Locale } from '../../i18n/routes.ts';

/**
 * Privacy policy, PROVISIONAL. Facts come from docs/08 decision 6; every
 * item still to be decided is a visible [CONFIRMAR] placeholder, which the
 * go-live gate (`npm run check:placeholders`) refuses. Nothing here may be
 * published before legal review.
 */
export interface PrivacyCopy {
  meta: { title: string; description: string };
  eyebrow: string;
  title: string;
  notice: string;
  sections: { title: string; paragraphs: string[]; list?: string[] }[];
  updated: string;
}

export const privacy: Record<Locale, PrivacyCopy> = {
  'pt-PT': {
    meta: {
      title: 'Política de privacidade — Sollelio',
      description:
        'Como a Sollelio trata os dados recolhidos neste website: candidaturas ao programa de Parceiros Fundadores e pedidos de informação sobre o Beauty OS.',
    },
    eyebrow: 'Privacidade',
    title: 'Política de privacidade',
    notice:
      'Versão provisória, em revisão jurídica. Esta página só é publicada depois de concluída a revisão e de confirmados os contactos legais.',
    sections: [
      {
        title: 'Quem é responsável',
        paragraphs: [
          'A Sollelio é, neste momento, uma marca e um projeto sem entidade constituída separadamente. O responsável pelo tratamento dos dados recolhidos neste website é Hélio Gonçalves, pessoa singular, que determina as finalidades e os meios do tratamento.',
          'Contacto para questões de privacidade: [CONFIRMAR: endereço de contacto para privacidade].',
        ],
      },
      {
        title: 'Que dados recolhemos e porquê',
        paragraphs: [
          'Candidatura ao programa de Parceiros Fundadores do Sollelio Events: nome, empresa, função, email, telemóvel (opcional), forma de contacto preferida, tipo de negócio, número aproximado de eventos por ano, distrito ou região (opcional), como gere os eventos hoje (opcional) e a sua maior dificuldade (opcional). Finalidade: avaliar a candidatura e contactá-lo sobre o programa.',
          'Pedido de informação sobre o Beauty OS: nome, salão ou negócio, email, telemóvel (opcional) e mensagem (opcional). Finalidade: responder ao seu pedido.',
          'Registamos também a origem da visita que levou ao envio do formulário (por exemplo, a campanha ou o site de onde veio), sem dados pessoais.',
          'Não usamos estes dados para marketing nem o inscrevemos em listas de envio. Só pedimos o que é necessário para responder e preparar uma conversa.',
        ],
      },
      {
        title: 'Fundamento jurídico',
        paragraphs: [
          'Tratamos estes dados para dar seguimento a um pedido seu antes de qualquer contrato (diligências pré-contratuais) e com base no nosso interesse legítimo em responder a quem nos contacta. [CONFIRMAR: fundamento por finalidade, em revisão jurídica.]',
        ],
      },
      {
        title: 'Durante quanto tempo',
        paragraphs: [
          'Candidaturas não selecionadas: no máximo seis meses após o fecho do processo de seleção a que respeitam, e apenas enquanto a conservação se justificar.',
          'Parceiros selecionados: [CONFIRMAR: prazo de conservação e fundamento a definir antes da abertura do programa].',
          'Pedidos de informação sobre o Beauty OS: [CONFIRMAR: prazo de conservação].',
        ],
      },
      {
        title: 'Quem trata os dados por nós',
        paragraphs: [
          'Os formulários e o alojamento deste website são fornecidos pela Netlify, Inc., uma empresa dos Estados Unidos da América. Esta é uma escolha provisória, sujeita à verificação do acordo de tratamento de dados, dos subcontratantes e das garantias de transferência internacional.',
          'As notificações de novos formulários chegam a uma caixa de email: [CONFIRMAR: caixa a escolher e testar].',
          'Medição de audiência: [CONFIRMAR: ferramenta sem cookies, a confirmar após verificação de privacidade e segurança].',
        ],
      },
      {
        title: 'Os seus direitos',
        paragraphs: ['Pode pedir, a qualquer momento, pelo contacto acima:'],
        list: [
          'acesso aos seus dados e uma cópia;',
          'retificação de dados incorretos;',
          'apagamento;',
          'limitação do tratamento;',
          'oposição ao tratamento;',
          'portabilidade dos dados que nos forneceu.',
        ],
      },
      {
        title: 'Reclamações',
        paragraphs: [
          'Tem o direito de apresentar reclamação à autoridade de controlo portuguesa, a Comissão Nacional de Proteção de Dados (CNPD).',
        ],
      },
      {
        title: 'Cookies',
        paragraphs: [
          'Este website não usa cookies de publicidade nem de seguimento. A sua preferência de tema (claro ou escuro) fica guardada apenas no seu navegador e nunca nos é enviada.',
        ],
      },
    ],
    updated: 'Versão provisória · outubro de 2026',
  },
  en: {
    meta: {
      title: 'Privacy policy — Sollelio',
      description:
        'How Sollelio handles the data collected on this website: applications to the Founding Design Partners programme and information requests about Beauty OS.',
    },
    eyebrow: 'Privacy',
    title: 'Privacy policy',
    notice:
      'Provisional version, under legal review. This page is published only after the review is complete and the legal contact details are confirmed.',
    sections: [
      {
        title: 'Who is responsible',
        paragraphs: [
          'Sollelio is currently a brand and a project without a separately incorporated entity. The controller of the data collected on this website is Hélio Gonçalves, a natural person, who determines the purposes and means of processing.',
          'Contact for privacy matters: [CONFIRM: privacy contact address].',
        ],
      },
      {
        title: 'What we collect and why',
        paragraphs: [
          'Application to the Sollelio Events Founding Design Partners programme: name, business, role, email, mobile (optional), preferred contact method, type of business, approximate number of events per year, district or region (optional), how you manage events today (optional) and your biggest difficulty (optional). Purpose: to assess the application and contact you about the programme.',
          'Information request about Beauty OS: name, salon or business, email, mobile (optional) and message (optional). Purpose: to answer your request.',
          'We also record the origin of the visit that led to the form being sent (for example the campaign or site you came from), without personal data.',
          'We do not use this data for marketing and we do not add you to mailing lists. We only ask for what is needed to reply and prepare a conversation.',
        ],
      },
      {
        title: 'Legal basis',
        paragraphs: [
          'We process this data to follow up a request you made before any contract (pre-contractual steps) and on the basis of our legitimate interest in replying to people who contact us. [CONFIRM: legal basis per purpose, under legal review.]',
        ],
      },
      {
        title: 'For how long',
        paragraphs: [
          'Unsuccessful applications: at most six months after the relevant selection process closes, and only where retention remains justified.',
          'Selected partners: [CONFIRM: retention period and legal basis, to be defined before the programme opens].',
          'Beauty OS information requests: [CONFIRM: retention period].',
        ],
      },
      {
        title: 'Who processes data for us',
        paragraphs: [
          'The forms and hosting of this website are provided by Netlify, Inc., a company based in the United States of America. This is a provisional choice, subject to verification of the data processing agreement, sub-processors and international transfer safeguards.',
          'Notifications of new form submissions arrive in an email inbox: [CONFIRM: inbox to be chosen and tested].',
          'Audience measurement: [CONFIRM: cookieless tool, to be confirmed after privacy and security checks].',
        ],
      },
      {
        title: 'Your rights',
        paragraphs: ['At any time, using the contact above, you may ask for:'],
        list: [
          'access to your data and a copy of it;',
          'rectification of inaccurate data;',
          'erasure;',
          'restriction of processing;',
          'objection to processing;',
          'portability of the data you provided.',
        ],
      },
      {
        title: 'Complaints',
        paragraphs: [
          'You have the right to lodge a complaint with the Portuguese supervisory authority, the Comissão Nacional de Proteção de Dados (CNPD).',
        ],
      },
      {
        title: 'Cookies',
        paragraphs: [
          'This website uses no advertising or tracking cookies. Your theme preference (light or dark) is stored only in your browser and is never sent to us.',
        ],
      },
    ],
    updated: 'Provisional version · October 2026',
  },
};
