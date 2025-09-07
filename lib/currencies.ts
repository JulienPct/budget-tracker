export const currencies = [
  {
    value: "EUR",
    label: "€ Euro",
    locale: "fr-FR",
  },
  {
    value: "USD",
    label: "$ Dollar",
    locale: "en-US",
  },
  {
    value: "JPY",
    label: "¥ Yen",
    locale: "ja-JP",
  },

  {
    value: "GBP",
    label: "£ Pound",
    locale: "en-GB",
  },
];

export type TCurrency = (typeof currencies)[0];
