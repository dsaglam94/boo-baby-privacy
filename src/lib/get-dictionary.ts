export const dictionaries = {
  en: {
    title: "Boo Baby - Privacy & Terms",
    description: "Privacy Policy and Terms of Use for Boo Baby App.",
    home: {
      welcome: "Welcome to",
      subtitle: "Clear, transparent, and easy to understand policies for our users. Your privacy is our top priority.",
      privacyTitle: "Privacy Policy",
      privacyDesc: "Learn how we protect and handle your personal data.",
      termsTitle: "Terms of Use",
      termsDesc: "Understand the rules for using Boo Baby services.",
      readMore: "Read More",
      supportTitle: "Support",
      supportDesc: "Need help? Contact our support team.",
      footer: "All rights reserved."
    },
    nav: {
      privacy: "Privacy",
      terms: "Terms",
      support: "Support"
    }
  },
  tr: {
    title: "Boo Baby - Gizlilik ve Koşullar",
    description: "Boo Baby Uygulaması için Gizlilik Politikası ve Kullanım Koşulları.",
    home: {
      welcome: "Hoş Geldiniz:",
      subtitle: "Kullanıcılarımız için açık, şeffaf ve anlaşılması kolay politikalar. Gizliliğiniz bizim önceliğimizdir.",
      privacyTitle: "Gizlilik Politikası",
      privacyDesc: "Kişisel verilerinizi nasıl koruduğumuzu ve işlediğimizi öğrenin.",
      termsTitle: "Kullanım Koşulları",
      termsDesc: "Boo Baby hizmetlerini kullanma kurallarını anlayın.",
      readMore: "Devamını Oku",
      supportTitle: "Destek",
      supportDesc: "Yardıma mı ihtiyacınız var? Destek ekibimizle iletişime geçin.",
      footer: "Tüm hakları saklıdır."
    },
    nav: {
      privacy: "Gizlilik",
      terms: "Koşullar",
      support: "Destek"
    }
  },
  fr: {
    title: "Boo Baby - Confidentialité et Conditions",
    description: "Politique de confidentialité et conditions d'utilisation de l'application Boo Baby.",
    home: {
      welcome: "Bienvenue sur",
      subtitle: "Des politiques claires, transparentes et faciles à comprendre pour nos utilisateurs. Votre vie privée est notre priorité absolue.",
      privacyTitle: "Politique de Confidentialité",
      privacyDesc: "Découvrez comment nous protégeons et traitons vos données personnelles.",
      termsTitle: "Conditions d'Utilisation",
      termsDesc: "Comprenez les règles d'utilisation des services Boo Baby.",
      readMore: "En savoir plus",
      supportTitle: "Support",
      supportDesc: "Besoin d'aide ? Contactez notre équipe d'assistance.",
      footer: "Tous droits réservés."
    },
    nav: {
      privacy: "Confidentialité",
      terms: "Conditions",
      support: "Support"
    }
  },
  de: {
    title: "Boo Baby - Datenschutz & Bedingungen",
    description: "Datenschutzerklärung und Nutzungsbedingungen für die Boo Baby App.",
    home: {
      welcome: "Willkommen bei",
      subtitle: "Klare, transparente und leicht verständliche Richtlinien für unsere Nutzer. Ihre Privatsphäre hat für uns oberste Priorität.",
      privacyTitle: "Datenschutzerklärung",
      privacyDesc: "Erfahren Sie, wie wir Ihre persönlichen Daten schützen und handhaben.",
      termsTitle: "Nutzungsbedingungen",
      termsDesc: "Verstehen Sie die Regeln für die Nutzung der Boo Baby Dienste.",
      readMore: "Mehr lesen",
      supportTitle: "Support",
      supportDesc: "Benötigen Sie Hilfe? Kontaktieren Sie unser Support-Team.",
      footer: "Alle Rechte vorbehalten."
    },
    nav: {
      privacy: "Datenschutz",
      terms: "Bedingungen",
      support: "Support"
    }
  }
};

export type Locale = keyof typeof dictionaries;

export const getDictionary = (locale: Locale) => dictionaries[locale] ?? dictionaries.en;
