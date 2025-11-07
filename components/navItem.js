import html from "html-literal";

export default item => html`
  <li>
    <a href="${item.url}" ${item.target ? `target="${item.target}"` : `data-page="${item.page}"`}>
      ${item.text}
    </a>
  </li>
`;