import type { Locale } from '../../i18n/routes.ts';

/**
 * Privacy policy (GDPR art. 13). Facts verified on 20 October 2026 against:
 * the two forms as implemented (fields, honeypot, attribution values), the
 * Netlify Forms documentation (US storage, Akismet filtering, notifications
 * from formresponses@netlify.com), Netlify's Data Processing Agreement of
 * 9 June 2026 (forms part of the Self-Serve Subscription Agreement; EU-US
 * DPF with SCCs as fallback), Netlify's subprocessor list, and Google's
 * privacy policy and transfer-frameworks page. Retention periods are the
 * founder-approved provisional rules, pending legal validation; they must
 * not be changed here without a new decision.
 */
export interface PrivacyCopy {
  meta: { title: string; description: string };
  eyebrow: string;
  title: string;
  lead: string;
  notice?: string;
  sections: { title: string; paragraphs: string[]; list?: string[] }[];
  updated: string;
}

export const privacy: Record<Locale, PrivacyCopy> = {
  'pt-PT': {
    meta: {
      title: 'Política de privacidade — Sollelio',
      description:
        'Como a Sollelio trata os dados pessoais recolhidos em sollelio.com: candidaturas ao programa de Parceiros Fundadores, pedidos de informação sobre o Beauty OS, email, alojamento e segurança.',
    },
    eyebrow: 'Privacidade',
    title: 'Política de privacidade',
    lead: 'Esta página explica, com o detalhe que a lei exige e a clareza que gostamos de ter, o que acontece aos dados que nos envia através de sollelio.com e dos contactos que se seguem.',
    sections: [
      {
        title: 'Quem é responsável pelo tratamento',
        paragraphs: [
          'A Sollelio é, neste momento, uma marca e um projeto de software, sem sociedade constituída. O responsável pelo tratamento dos dados pessoais recolhidos neste website é Hélio Gonçalves, pessoa singular, que decide as finalidades e os meios do tratamento e que responde pessoalmente aos contactos.',
          'Para qualquer questão sobre privacidade ou para exercer os seus direitos, escreva para sollelio.it@gmail.com.',
        ],
      },
      {
        title: 'Em resumo',
        paragraphs: ['O essencial, antes do detalhe:'],
        list: [
          'Só recolhemos dados quando nos envia um dos dois formulários do website ou nos escreve.',
          'Usamo-los apenas para responder, analisar a sua candidatura ou pedido e preparar uma conversa. Nunca para marketing, nem para listas de envio.',
          'Guardamo-los por prazos definidos (abaixo) e depois apagamo-los.',
          'O website não usa cookies nem ferramentas de medição de audiência.',
          'Os dados passam por dois prestadores: a Netlify (alojamento e formulários) e a Google (a nossa caixa de correio, uma conta Gmail). Ambos podem tratar dados nos Estados Unidos; cada um declara participar no Quadro de Privacidade de Dados UE-EUA (ver «Transferências» abaixo).',
        ],
      },
      {
        title: 'Candidatura ao programa de Parceiros Fundadores (Sollelio Events)',
        paragraphs: [
          'Dados recolhidos: nome, empresa, função, email, forma de contacto preferida, tipo de negócio e número aproximado de eventos por ano (obrigatórios); telemóvel ou WhatsApp, distrito ou região, como gere os eventos hoje e a sua maior dificuldade (opcionais). O formulário pede ainda a confirmação de que leu este aviso.',
          'Finalidade: analisar a candidatura, contactá-lo pela via que indicou, realizar a conversa inicial e, havendo encaixe, confirmar a participação no programa e acompanhá-la.',
          'Fundamento jurídico: a execução de diligências pré-contratuais a seu pedido, isto é, os passos necessários para avaliar e, eventualmente, iniciar a colaboração que solicitou (artigo 6.º, n.º 1, alínea b), do RGPD). O envio do formulário não é um consentimento: é um pedido seu, ao qual respondemos.',
          'Os campos obrigatórios são os mínimos para analisar e responder a uma candidatura; sem eles não a conseguimos tratar. Os campos opcionais ajudam a preparar a conversa e pode deixá-los em branco.',
        ],
      },
      {
        title: 'Pedido de informação sobre o Beauty OS',
        paragraphs: [
          'Dados recolhidos: nome, salão ou negócio e email (obrigatórios); telemóvel ou WhatsApp e mensagem (opcionais). O formulário pede ainda a confirmação de que leu este aviso.',
          'Finalidade: responder ao seu pedido e, se quiser prosseguir, perceber se o Beauty OS faz sentido para o seu salão.',
          'Fundamento jurídico: diligências pré-contratuais a seu pedido (artigo 6.º, n.º 1, alínea b), do RGPD) e, quando o contacto não visa uma contratação, o nosso interesse legítimo em responder a quem nos escreve (artigo 6.º, n.º 1, alínea f)).',
        ],
      },
      {
        title: 'Comunicações por email',
        paragraphs: [
          'Depois de receber um formulário, a conversa continua por email ou pela via que indicou. As mensagens trocadas e as notas que tomarmos para preparar a conversa fazem parte do mesmo tratamento e seguem os mesmos prazos de conservação.',
          'Cada submissão chega-nos também por email, enviado pela Netlify a partir de formresponses@netlify.com, com o conteúdo do formulário.',
        ],
      },
      {
        title: 'Dados técnicos, segurança e proteção contra spam',
        paragraphs: [
          'Com cada formulário são enviados, sem intervenção sua, a língua da página e o contexto com que entrou no website nesta visita: a página por onde entrou, o domínio do site de onde veio (se existir) e eventuais etiquetas de campanha do endereço (utm_source, utm_medium e utm_campaign). Estes elementos ficam no armazenamento de sessão do seu navegador enquanto o separador estiver aberto, para não se perderem quando navega entre páginas antes de preencher o formulário; não são enviados a ninguém até submeter um formulário e desaparecem quando fecha o separador. Servem apenas para percebermos de onde chegam as candidaturas. Em regra não contêm dados pessoais: guardamos só o domínio do site de origem, não o endereço completo, e ignoramos etiquetas que pareçam conter um email ou um endereço de internet. Se, mesmo assim, incluírem informação sobre si, tratamo-la com a mesma finalidade e pelos mesmos prazos da submissão.',
          'Cada formulário tem um campo oculto de deteção de robôs e todas as submissões passam pelo filtro de spam Akismet, operado pela Automattic, Inc. para a Netlify. Fundamento jurídico: o nosso interesse legítimo em manter o website seguro e os formulários utilizáveis (artigo 6.º, n.º 1, alínea f)).',
          'Para entregar e proteger o website, a Netlify trata dados técnicos de ligação, como o endereço IP e os registos de pedidos, de acordo com a sua declaração de privacidade. Não consultamos esses registos nem os usamos para o identificar.',
        ],
      },
      {
        title: 'Durante quanto tempo guardamos os dados',
        paragraphs: ['Prazos definidos por tipo de contacto:'],
        list: [
          'Candidaturas ao programa que não resultem em seleção: até 6 meses após o fecho do processo de seleção a que respeitam, e apenas enquanto a conservação se justificar.',
          'Parceiros fundadores selecionados: durante a colaboração e até 12 meses após o seu fim, quando necessário e justificado. A conservação de registos específicos por mais tempo exige uma justificação própria e válida.',
          'Pedidos de informação sobre o Beauty OS: até 6 meses após o último contacto relevante.',
          'Submissões marcadas como spam pelos filtros: apagadas regularmente, sem análise.',
        ],
      },
      {
        title: 'Quem trata os dados por nós',
        paragraphs: [
          'Netlify, Inc. (São Francisco, Estados Unidos) aloja o website e recebe, guarda e filtra as submissões dos formulários. As submissões ficam armazenadas nos Estados Unidos até as apagarmos; a Netlify recorre a subcontratantes, entre os quais a Amazon Web Services e a Google Cloud Platform (infraestrutura), a Automattic (filtro Akismet) e a SendGrid (envio das notificações por email), todos nos Estados Unidos. A Netlify atua como subcontratante, ao abrigo do seu Acordo de Tratamento de Dados, que faz parte do contrato de utilização do serviço.',
          'Google. A nossa caixa de correio, sollelio.it@gmail.com, é uma conta Gmail de utilizador (não uma conta Google Workspace), prestada pela Google Ireland Limited (Dublin) a utilizadores no Espaço Económico Europeu nos termos de serviço e da política de privacidade da Google, sem um acordo de tratamento de dados específico com a Sollelio. As notificações dos formulários e a correspondência consigo ficam guardadas nessa caixa, cujo conteúdo pode ser tratado em servidores da Google fora do seu país.',
          'Não vendemos, alugamos nem cedemos os seus dados a mais ninguém. Só os partilharíamos se a lei o exigisse.',
        ],
      },
      {
        title: 'Transferências para fora do Espaço Económico Europeu',
        paragraphs: [
          'A Netlify guarda as submissões nos Estados Unidos e a Google pode tratar o conteúdo da caixa de correio fora do Espaço Económico Europeu, incluindo nos Estados Unidos. A Netlify declara, no seu Acordo de Tratamento de Dados, participar no Quadro de Privacidade de Dados UE-EUA (EU-U.S. Data Privacy Framework), e prevê as cláusulas contratuais-tipo da Comissão Europeia como mecanismo alternativo. A Google declara igualmente a sua certificação no mesmo Quadro e o recurso a cláusulas contratuais-tipo quando necessário.',
          'Apoiamo-nos nessas declarações e na decisão de adequação da Comissão Europeia relativa a esse Quadro, enquanto estiver em vigor, e, na sua falta, nas cláusulas contratuais-tipo previstas pelos prestadores. Pode consultar as declarações dos prestadores nas respetivas páginas de privacidade.',
        ],
      },
      {
        title: 'Os seus direitos',
        paragraphs: [
          'Pode pedir, a qualquer momento e sem custos, através de sollelio.it@gmail.com:',
        ],
        list: [
          'acesso aos seus dados e uma cópia deles;',
          'retificação de dados incorretos ou incompletos;',
          'apagamento;',
          'limitação do tratamento;',
          'oposição ao tratamento baseado no nosso interesse legítimo;',
          'portabilidade dos dados que nos forneceu, num formato de uso corrente.',
        ],
      },
      {
        title: 'Como respondemos',
        paragraphs: [
          'Respondemos no prazo de um mês. Para proteger os seus dados, podemos pedir-lhe que confirme a identidade antes de agir sobre o pedido. Não tomamos decisões automatizadas nem fazemos definição de perfis com os seus dados.',
          'Tem ainda o direito de apresentar reclamação a uma autoridade de controlo, nomeadamente à Comissão Nacional de Proteção de Dados (CNPD), em Portugal, em cnpd.pt.',
        ],
      },
      {
        title: 'Cookies e armazenamento no navegador',
        paragraphs: [
          'Este website não usa cookies, nem de publicidade, nem de medição de audiência, nem de qualquer outro tipo, e não inclui ferramentas de análise de tráfego. As fontes e todos os recursos são servidos a partir do próprio website.',
          'A sua preferência de tema (claro ou escuro) fica guardada apenas no armazenamento local do seu navegador, nunca nos é enviada e pode ser apagada a qualquer momento nas definições do navegador. O contexto de entrada descrito acima (página de entrada, domínio de origem e etiquetas de campanha) fica no armazenamento de sessão do navegador apenas durante a visita e só nos chega se submeter um formulário.',
        ],
      },
      {
        title: 'Alterações a esta política',
        paragraphs: [
          'Quando alterarmos a forma como tratamos dados, por exemplo se adotarmos uma ferramenta de medição de audiência ou mudarmos de prestador, atualizamos esta página e a data abaixo antes de a alteração produzir efeitos.',
        ],
      },
    ],
    updated: 'Versão de 20 de outubro de 2026',
  },
  en: {
    meta: {
      title: 'Privacy policy — Sollelio',
      description:
        'How Sollelio handles the personal data collected on sollelio.com: Founding Design Partners applications, Beauty OS enquiries, email, hosting and security.',
    },
    eyebrow: 'Privacy',
    title: 'Privacy policy',
    lead: 'This page explains, with the detail the law requires and the clarity we like to keep, what happens to the data you send us through sollelio.com and in the contacts that follow.',
    sections: [
      {
        title: 'Who is responsible for processing',
        paragraphs: [
          'Sollelio is currently a brand and a software project, without an incorporated company. The controller of the personal data collected on this website is Hélio Gonçalves, a natural person, who decides the purposes and means of processing and who answers every contact personally.',
          'For any question about privacy, or to exercise your rights, write to sollelio.it@gmail.com.',
        ],
      },
      {
        title: 'In short',
        paragraphs: ['The essentials, before the detail:'],
        list: [
          'We only collect data when you send one of the two forms on the website or write to us.',
          'We use it only to reply, assess your application or request and prepare a conversation. Never for marketing or mailing lists.',
          'We keep it for defined periods (below) and then delete it.',
          'The website uses no cookies and no audience-measurement tools.',
          'The data passes through two providers: Netlify (hosting and forms) and Google (our mailbox, a Gmail account). Both may process data in the United States; each states that it participates in the EU-US Data Privacy Framework (see “Transfers” below).',
        ],
      },
      {
        title: 'Founding Design Partners application (Sollelio Events)',
        paragraphs: [
          'Data collected: name, business, role, email, preferred contact method, type of business and approximate number of events per year (required); mobile or WhatsApp, district or region, how you manage events today and your biggest difficulty (optional). The form also asks you to confirm that you have read this notice.',
          'Purpose: to assess the application, contact you through the channel you chose, hold the initial conversation and, if there is a fit, confirm your participation in the programme and follow it.',
          'Legal basis: steps taken at your request prior to entering into a contract, that is, what is needed to assess and possibly start the collaboration you asked for (Article 6(1)(b) GDPR). Sending the form is not consent: it is a request from you, which we answer.',
          'The required fields are the minimum needed to assess and answer an application; without them we cannot process it. The optional fields help us prepare the conversation and may be left blank.',
        ],
      },
      {
        title: 'Beauty OS enquiry',
        paragraphs: [
          'Data collected: name, salon or business and email (required); mobile or WhatsApp and message (optional). The form also asks you to confirm that you have read this notice.',
          'Purpose: to answer your enquiry and, if you want to go further, to find out whether Beauty OS makes sense for your salon.',
          'Legal basis: steps taken at your request prior to a contract (Article 6(1)(b) GDPR) and, where the contact does not aim at a contract, our legitimate interest in replying to people who write to us (Article 6(1)(f)).',
        ],
      },
      {
        title: 'Email communications',
        paragraphs: [
          'After we receive a form, the conversation continues by email or through the channel you chose. The messages exchanged and the notes we take to prepare the conversation are part of the same processing and follow the same retention periods.',
          'Each submission also reaches us by email, sent by Netlify from formresponses@netlify.com, with the content of the form.',
        ],
      },
      {
        title: 'Technical data, security and spam protection',
        paragraphs: [
          'Each form also sends, without any action on your part, the page language and the context in which you entered the website on this visit: the page you arrived on, the domain of the site you came from (if any) and any campaign tags in the address (utm_source, utm_medium and utm_campaign). These are kept in your browser’s session storage while the tab is open, so they are not lost when you move between pages before filling in the form; they are sent to no one until you submit a form and disappear when you close the tab. They serve only to tell us where applications come from. As a rule they contain no personal data: we keep only the domain of the referring site, not the full address, and ignore tags that look like an email or a web address. If they nonetheless include information about you, we handle it for the same purpose and for the same periods as the submission.',
          'Each form has a hidden bot-detection field, and every submission goes through the Akismet spam filter, operated by Automattic, Inc. for Netlify. Legal basis: our legitimate interest in keeping the website secure and the forms usable (Article 6(1)(f)).',
          'To deliver and protect the website, Netlify processes technical connection data such as IP addresses and request logs under its own privacy statement. We do not consult those logs or use them to identify you.',
        ],
      },
      {
        title: 'How long we keep data',
        paragraphs: ['Periods defined by type of contact:'],
        list: [
          'Programme applications that do not lead to selection: up to 6 months after the relevant selection process closes, and only where retention remains justified.',
          'Selected founding partners: during the collaboration and up to 12 months after it ends, where necessary and justified. Keeping specific records for longer requires its own valid justification.',
          'Beauty OS enquiries: up to 6 months after the last relevant contact.',
          'Submissions flagged as spam by the filters: deleted regularly, without review.',
        ],
      },
      {
        title: 'Who processes data for us',
        paragraphs: [
          'Netlify, Inc. (San Francisco, United States) hosts the website and receives, stores and filters the form submissions. Submissions are stored in the United States until we delete them; Netlify uses sub-processors including Amazon Web Services and Google Cloud Platform (infrastructure), Automattic (Akismet filter) and SendGrid (delivery of email notifications), all in the United States. Netlify acts as a processor under its Data Processing Agreement, which forms part of the service agreement.',
          'Google. Our mailbox, sollelio.it@gmail.com, is a consumer Gmail account (not a Google Workspace account), provided by Google Ireland Limited (Dublin) to users in the European Economic Area under Google’s terms of service and privacy policy, without a specific data processing agreement with Sollelio. Form notifications and our correspondence with you are kept in that mailbox, whose content may be processed on Google servers outside your country.',
          'We do not sell, rent or pass on your data to anyone else. We would share it only if the law required it.',
        ],
      },
      {
        title: 'Transfers outside the European Economic Area',
        paragraphs: [
          'Netlify stores submissions in the United States, and Google may process the mailbox content outside the European Economic Area, including in the United States. Netlify states in its Data Processing Agreement that it participates in the EU-US Data Privacy Framework and provides for the European Commission’s standard contractual clauses as the fallback mechanism. Google likewise states its certification under the same Framework and its use of standard contractual clauses where required.',
          'We rely on those statements and on the European Commission’s adequacy decision for that Framework, for as long as it remains in force, and otherwise on the standard contractual clauses the providers provide for. You can read the providers’ statements on their respective privacy pages.',
        ],
      },
      {
        title: 'Your rights',
        paragraphs: [
          'At any time and free of charge, through sollelio.it@gmail.com, you may ask for:',
        ],
        list: [
          'access to your data and a copy of it;',
          'rectification of inaccurate or incomplete data;',
          'erasure;',
          'restriction of processing;',
          'objection to processing based on our legitimate interest;',
          'portability of the data you provided, in a commonly used format.',
        ],
      },
      {
        title: 'How we respond',
        paragraphs: [
          'We reply within one month. To protect your data, we may ask you to confirm your identity before acting on a request. We make no automated decisions and do no profiling with your data.',
          'You also have the right to lodge a complaint with a supervisory authority, in particular the Comissão Nacional de Proteção de Dados (CNPD) in Portugal, at cnpd.pt.',
        ],
      },
      {
        title: 'Cookies and browser storage',
        paragraphs: [
          'This website uses no cookies of any kind, whether for advertising, audience measurement or anything else, and includes no traffic-analysis tools. Fonts and all other resources are served from the website itself.',
          'Your theme preference (light or dark) is stored only in your browser’s local storage, is never sent to us and can be cleared at any time in your browser settings. The entry context described above (landing page, referring domain and campaign tags) stays in the browser’s session storage for the visit only and reaches us only if you submit a form.',
        ],
      },
      {
        title: 'Changes to this policy',
        paragraphs: [
          'When we change how we process data, for example if we adopt an audience-measurement tool or change provider, we update this page and the date below before the change takes effect.',
        ],
      },
    ],
    updated: 'Version of 20 October 2026',
  },
};
