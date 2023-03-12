class QLDButton extends HTMLButtonElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    const classes = this.getAttribute("class");

    /** how do we standardise this approach for all possible attributes */
    for (const attribute of this.attributes) {
      if (attribute.name !== "class" && attribute.name !== "style") {
        this.setAttribute(attribute.name, attribute.value);
      }
    }

    /** how do we include GA/GTM 
    this.addEventListener("click", () => {
      console.log(`Web component passing default behaviour unless overridden in jquery: ${behavior}`);
    }); 
    */
  }

  connectedCallback() {
    console.log('connectedCallback called!');
    this.setAttribute("role", "button");
    this.setAttribute("tabindex", "0");
  }
  
}

customElements.define("qld-button", QLDButton, { extends: "button" });
