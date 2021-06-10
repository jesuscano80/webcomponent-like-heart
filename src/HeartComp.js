import { html, css, LitElement } from 'lit-element';

export class HeartComp extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 5px;
        color: var(--heart-comp-text-color, #000);
      }
      h2{
        display:none;
        animation-name: corazon;
        animation-duration: 2s;
        animation-fill-mode: forwards;
      }
      @keyframes corazon {
 from{
   transform:translateY(0);

 }
 to{
  transform:translateY(-40px);
 }
}
      h4{
        border-radius:45px;
        background-color: var(--heart-comp-text-back,rgb(1,1,1,0.1));
        width: fit-content;
        color: white;
        padding:5px;
      }
      .flex{
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
    `;
  }

  static get properties() {
    return {
      visibility: { type: Boolean}
    };
  }

  constructor() {
    super();
  }
  __toogle() {
    if (this.visibility==false){
      this.shadowRoot.querySelector("h2").style.visibility="hidden"
      this.shadowRoot.querySelector("h4").textContent="Like?"
      this.shadowRoot.querySelector("h2").style.display="block";
      this.shadowRoot.querySelector("h4").style.backgroundColor= "var(--heart-comp-text-back,rgb(1,1,1,0.1))";

      this.visibility=true;
    }
    else{
      this.shadowRoot.querySelector("h2").style.display="block";
      this.shadowRoot.querySelector("h2").style.visibility="visible";
      this.shadowRoot.querySelector("h4").textContent="Like!"
      this.shadowRoot.querySelector("h4").style.backgroundColor="var(--heart-comp-like-back,#B22222)";
      
      this.visibility=false;

    }
  }

  render() {
    return html`
    <div class="flex">
      <h4 @click=${this.__toogle}>Like?</h4>
      <h2 @click=${this.__toogle}>❤️</h2>
    </div> 
    `;
  }
}
