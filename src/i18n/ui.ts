import type { Locale } from './routes.ts';

/**
 * Interface strings. Portuguese is the source; the English object must have
 * exactly the same keys, which `astro check` enforces through the type below.
 */
const pt = {
  'site.name': 'Sollelio',
  'site.line': 'Software que nasce dos desafios reais dos negócios.',
  'a11y.skip': 'Saltar para o conteúdo',
  'nav.label': 'Navegação principal',
  'nav.home': 'Início',
  'nav.events': 'Events',
  'nav.beauty': 'Beauty OS',
  'nav.partners': 'Parceiros Fundadores',
  'nav.menu': 'Menu',
  'nav.close': 'Fechar',
  'cta.apply': 'Candidatar-me',
  'cta.applyLong': 'Candidatar-me a Parceiro Fundador',
  'cta.toForm': 'Ir para a candidatura',
  'cta.talk': 'Falar com a Sollelio',
  'cta.events': 'Conhecer o Sollelio Events',
  'cta.beauty': 'Conhecer o Beauty OS',
  'cta.programme': 'Ver o programa',
  'cta.email': 'Prefere email?',
  'lang.label': 'Idioma',
  'lang.current': 'Português',
  'lang.switchTo': 'English',
  'theme.label': 'Tema',
  'theme.system': 'Sistema',
  'theme.light': 'Claro',
  'theme.dark': 'Escuro',
  'footer.rights': 'Todos os direitos reservados.',
  'footer.products': 'Produtos',
  'footer.programme': 'Programa',
  'footer.company': 'Empresa',
  'footer.contact': 'Contacto',
  'footer.privacy': 'Privacidade',
  'footer.faq': 'Perguntas frequentes',
  'footer.country': 'Portugal',
  'status.original': 'Já funciona no sistema original',
  'status.v2': 'Já funciona no V2',
  'status.development': 'Em desenvolvimento',
  'status.exploring': 'Em estudo',
  'status.conception': 'Em conceção',
  'status.adoption': 'Em adoção inicial',
  'status.open': 'Candidaturas abertas',
  'form.required': 'Campo obrigatório.',
  'form.email': 'Introduza um email válido.',
  'form.group': 'Escolha pelo menos uma opção.',
  'form.sending': 'A enviar…',
  'form.error':
    'Não foi possível enviar. Os seus dados continuam preenchidos; tente de novo ou escreva-nos por email.',
  'form.demo.title': 'Modo de demonstração',
  'form.demo.body':
    'Este formulário ainda não envia dados. Serve para rever o percurso de candidatura antes da publicação.',
  'form.optional': 'opcional',
  'faq.title': 'Perguntas frequentes',
  'notfound.title': 'Página não encontrada',
  'notfound.body': 'O endereço que abriu não existe ou mudou de sítio.',
  'notfound.back': 'Voltar ao início',
} as const;

export type UiKey = keyof typeof pt;

const en: Record<UiKey, string> = {
  'site.name': 'Sollelio',
  'site.line': 'Software born from the real challenges of businesses.',
  'a11y.skip': 'Skip to content',
  'nav.label': 'Main navigation',
  'nav.home': 'Home',
  'nav.events': 'Events',
  'nav.beauty': 'Beauty OS',
  'nav.partners': 'Founding Design Partners',
  'nav.menu': 'Menu',
  'nav.close': 'Close',
  'cta.apply': 'Apply',
  'cta.applyLong': 'Apply as a Founding Design Partner',
  'cta.toForm': 'Go to the application',
  'cta.talk': 'Talk to Sollelio',
  'cta.events': 'Discover Sollelio Events',
  'cta.beauty': 'Discover Beauty OS',
  'cta.programme': 'See the programme',
  'cta.email': 'Prefer email?',
  'lang.label': 'Language',
  'lang.current': 'English',
  'lang.switchTo': 'Português',
  'theme.label': 'Theme',
  'theme.system': 'System',
  'theme.light': 'Light',
  'theme.dark': 'Dark',
  'footer.rights': 'All rights reserved.',
  'footer.products': 'Products',
  'footer.programme': 'Programme',
  'footer.company': 'Company',
  'footer.contact': 'Contact',
  'footer.privacy': 'Privacy',
  'footer.faq': 'Frequently asked questions',
  'footer.country': 'Portugal',
  'status.original': 'Running in the original system',
  'status.v2': 'Working in V2',
  'status.development': 'In development',
  'status.exploring': 'Being explored',
  'status.conception': 'In conception',
  'status.adoption': 'In early adoption',
  'status.open': 'Applications open',
  'form.required': 'This field is required.',
  'form.email': 'Enter a valid email address.',
  'form.group': 'Choose at least one option.',
  'form.sending': 'Sending…',
  'form.error':
    'We could not send your message. Your answers are still here; try again or write to us by email.',
  'form.demo.title': 'Demonstration mode',
  'form.demo.body':
    'This form does not send data yet. It exists to review the application journey before publication.',
  'form.optional': 'optional',
  'faq.title': 'Frequently asked questions',
  'notfound.title': 'Page not found',
  'notfound.body': 'The address you opened does not exist or has moved.',
  'notfound.back': 'Back to the homepage',
};

const strings: Record<Locale, Record<UiKey, string>> = { 'pt-PT': pt, en };

export function useTranslations(locale: Locale) {
  return (key: UiKey): string => strings[locale][key];
}

export const htmlLang: Record<Locale, string> = { 'pt-PT': 'pt-PT', en: 'en' };
export const ogLocale: Record<Locale, string> = { 'pt-PT': 'pt_PT', en: 'en_GB' };
