const template = html`
  <li class="root" part="root">
    <div class="content" part="content" tabindex="-1">
      <slot name="content"></slot>
    </div>
    <div class="controls" part="controls" tabindex="-1">
      <slot name="controls"></slot>
    </div>
  </li>
  <style>
    * {
      box-sizing: border-box;
    }

    .root {
      display: flex;
      width: 100%;
      overflow: auto;
      scroll-snap-type: x mandatory;
      scrollbar-width: none;
    }

    .root::-webkit-scrollbar {
      display: none;
    }

    .content {
      flex: 1 0 100%;
      scroll-snap-align: start;
      padding: 0.5rem;
    }

    .controls {
      scroll-snap-align: end;
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
    }

    @media screen and (min-width: 48em) {
      .content {
        flex: 1 1 100%;
      }
    }
  </style>
`;

export default class ListItem extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" }).appendChild(
      template.content.cloneNode(true)
    );
  }
}

export { ListItem };

customElements.define("afix-list-item", ListItem);

/**
 * makeTemplate is a template tag used to construct a <template>.
 * @param {TemplateStringsArray} htmlString
 */
function html(htmlString) {
  const template = document.createElement("template");
  template.innerHTML = String.raw(htmlString);
  return template;
}
