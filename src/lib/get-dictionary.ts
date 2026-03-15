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
      footer: "All rights reserved."
    },
    nav: {
      privacy: "Privacy",
      terms: "Terms"
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
      footer: "Tüm hakları saklıdır."
    },
    nav: {
      privacy: "Gizlilik",
      terms: "Koşullar"
    }
  }
};

export type Locale = keyof typeof dictionaries;

export const getDictionary = (locale: Locale) => dictionaries[locale] ?? dictionaries.en;
