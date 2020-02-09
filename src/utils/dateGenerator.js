const options = {
  weekday: 'short',
  day: '2-digit',
  year: '2-digit',
  timeZone: 'America/New_York',
  hour12: true,
  hour: 'numeric',
  minute: 'numeric'
};

const dateTimeNow = () => new Date().toLocaleDateString('en-US', options);

const formatDateTime = dateString =>
  new Date(dateString).toLocaleDateString('en-US', options);

export { dateTimeNow, formatDateTime };
