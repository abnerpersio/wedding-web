import backgroundBlur from '~/assets/background-blur.png';
import backgroundRound from '~/assets/background-round.png';
import { generateCalendarURL } from '~/utils/calendar';

import { Wrapper } from './styles';

export function SaveTheDate() {
  const date = '2023-09-07T16:30';
  const duration = 5 * 60;

  const calendarURL = generateCalendarURL(
    date,
    duration,
    'Casamento Abner & Mayara',
    'O casamento do ano :)',
  );

  return (
    <Wrapper>
      <img src={backgroundBlur} alt="" className="background-decoration blur" />
      <img src={backgroundRound} alt="" className="background-decoration round" />

      <div className="content">
        <h2>Save the Date</h2>
        <h3>nosso casamento</h3>
        <h1>Abner & Mayara</h1>
        <h4>07 . 09 . 2023</h4>
        <h4>16 : 30</h4>

        <a href={calendarURL} target="_blank" download="casamento-abner-mayara.ics">
          Salvar no calendário
        </a>
      </div>
    </Wrapper>
  );
}
