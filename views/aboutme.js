import html from "html-literal";
import dogWithFlower from "url:../assets/img/dog-with-flower.jpg";

export default (state) => html`
<section id="bio">
    <h2>Never Gonna Give Up… Debugging</h2>
    <img src="${dogWithFlower}" alt="me">
    <p>Never gonna give you up</p>
<p>Never gonna let you down</p>
<p>Never gonna run around and desert you</p>
<p>Never gonna make you cry</p>
<p>Never gonna say goodbye</p>
<p>Never gonna tell a lie and hurt you</p>
</section>
`;