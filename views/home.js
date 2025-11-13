import html from "html-literal";

export default state => html`
  <section id="jumbotron">
    <h2>Freshest Pizza on the freaking planet</h2>
    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">"Order now"</a>
  </section>
    <h3>
    The weather in ${state.weather.city} is ${state.weather.description}. Temperature is ${state.weather.temp}F, and it feels like ${state.weather.feelsLike}F.
    </h3>
    <h3>Perfect weather for PIZZA LUNCHABLES</h3>
`;