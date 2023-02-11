function parseDate(inputDate: Date) {
  const input = new Date(inputDate);
  const offset = input.getTimezoneOffset();
  input.setMinutes(input.getMinutes() - offset);

  const [date, hoursWithTZ] = input.toISOString().split('T');
  const [hours] = hoursWithTZ.split('.');
  const replacedDate = date.replace(/-/g, '');
  const replacedHours = hours.replace(/:/g, '');
  return `${replacedDate}T${replacedHours}`;
}

export function generateCalendarURL(
  date: string | Date | number,
  duration: number,
  summary: string,
  description: string,
) {
  const startDate = new Date(date);
  const endDate = new Date(date);
  endDate.setMinutes(endDate.getMinutes() + duration);

  const eventInfos =
    'BEGIN:VCALENDAR\n' +
    'PRODID:-//Google Inc//Google Calendar 70.9054//EN\n' +
    'VERSION:2.0\n' +
    'CALSCALE:GREGORIAN\n' +
    'METHOD:PUBLISH\n' +
    'BEGIN:VTIMEZONE\n' +
    'TZID:America/Sao_Paulo\n' +
    'X-LIC-LOCATION:America/Sao_Paulo\n' +
    'BEGIN:STANDARD\n' +
    'TZOFFSETFROM:-0300\n' +
    'TZOFFSETTO:-0300\n' +
    'TZNAME:-03\n' +
    'DTSTART:19700101T000000\n' +
    'END:STANDARD\n' +
    'END:VTIMEZONE\n' +
    'BEGIN:VEVENT\n' +
    'UID:test-1\n' +
    'DTSTART;TZID=America/Sao_Paulo:' +
    parseDate(startDate) +
    '\n' +
    'DTEND;TZID=America/Sao_Paulo:' +
    parseDate(endDate) +
    '\n' +
    'SUMMARY:' +
    summary +
    '\n' +
    'DESCRIPTION:' +
    description +
    '\n' +
    'END:VEVENT\n' +
    'END:VCALENDAR';

  const file = new File([eventInfos], 'wedding.ics', { type: 'text/plain' });
  return window.URL.createObjectURL(file);
}
