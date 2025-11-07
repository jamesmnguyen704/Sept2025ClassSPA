import html from "html-literal";
import dogWithFlower from "url:../assets/img/dog-with-flower.jpg";

export default (state) => html`
<section id="bio">
    <h2>Now Debugging My Love Life</h2>
    <img src="${dogWithFlower}" alt="me">
    <p>Just a regular human with 99 problems and at least 3 of them are semicolons. Looking for someone who laughs at console.logs.</p>
</section>
`;