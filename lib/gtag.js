// log specific events happening.
export const event = ({ action, category, lable }) => {
  window.gtag("event", action, {
    event_category: category,
    event_lable: lable,
  });
};
