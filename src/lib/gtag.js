export const GA_MEASUREMENT_ID = 'G-RB3Q1DXSDP';

// Fonction pour envoyer un événement page_view
export const pageview = (url) => {
  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: url,
  });
};
