import { NavLink } from 'react-router-dom';
import './About.scss';

export function About() {
  return (
    <div className="about-background">
      <div className="about-container">
        <div className="about-inf">
          <NavLink to="/about">About</NavLink>
          <NavLink to="/">Back to Weather App</NavLink>
        </div>
        <div className="about">
          <ol>
            <li>
              Показ поточної погоди:{' '}
              <ul>
                <li>Показує детальну інформацію про теперішню погоду.</li>
                <li>
                  Можливість авторизації для доступу до додаткових функцій.
                </li>
              </ul>
            </li>
            <li>
              Прогноз погоди на 5 днів:{' '}
              <ul>
                <li>Доступний лише для авторизованих користувачів.</li>
                <li>Показує прогноз погоди на наступні 5 днів.</li>
                <li>
                  Включає такі дані, як температура, вологість, швидкість вітру
                  та інші показники.
                </li>
              </ul>
            </li>
            <li>
              Реєстрація користувача:{' '}
              <ul>
                <li>
                  Користувачі, які не мають облікового запису, можуть
                  зареєструватися.
                </li>
                <li>
                  Необхідні дані для реєстрації: електронна пошта та пароль.
                </li>
              </ul>
            </li>
            <li>
              Пошук погоди за містом:{' '}
              <ul>
                <li>
                  Додаток використовує GEO API для пошуку погодних умов в
                  певному місті.
                </li>
                <li>
                  Користувач може ввести назву міста в поле пошуку, і додаток
                  знайде погоду для цього місця.
                </li>
              </ul>
            </li>
            <li>
              Кабінет користувача:{' '}
              <ul>
                <li>
                  Опціональна можливість налаштування власних ключів для
                  використання API.
                </li>
              </ul>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}
