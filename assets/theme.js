document
  .getElementById("header-cart-icon")
  .addEventListener("click", (event) => {
    event.preventDefault();
    document.getElementById("drawer").open();
  });

class SidebarDrawer extends HTMLElement {
  connectedCallback() {
    this.overlay = this.querySelector(".drawer-overlay");

    this.overlay?.addEventListener("click", () => this.close());

    document.addEventListener("keydown", this.handleKeydown);
  }

  disconnectedCallback() {
    document.removeEventListener("keydown", this.handleKeydown);
  }

  handleKeydown = (event) => {
    if (event.key === "Escape") {
      this.close();
    }
  };

  open() {
    this.setAttribute("open", "");
    document.body.style.overflow = "hidden";
  }

  close() {
    this.removeAttribute("open");
    document.body.style.overflow = "";
  }

  toggle() {
    this.hasAttribute("open") ? this.close() : this.open();
  }
}

customElements.define("sidebar-drawer", SidebarDrawer);
