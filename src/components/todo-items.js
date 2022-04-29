import {LitElement, html} from '@polymer/lit-element';

class TodoItem extends LitElement{
    static get properties(){
        return {
            todoItem: String
        }
    }
    constructor(){
        super();
        this.todoItem = "";
    }
    onRemove(id) {
        console.log("Id to remove: ", id);
        this.dispatchEvent(new CustomEvent('removeItem',
        {
          bubbles: true,
          composed: true,
          detail: {
            itemID: id
          }
        }));
        
    }
    onDone(id) {

        this.dispatchEvent(new CustomEvent('doneItem',
        {
          bubbles: true,
          composed: true,
          detail: {
            itemID: id
          }
        }));
        console.log("in todo"+this.todoItem.item);
        //this.requestRender();
      }
      render() {
        console.log("in todo: "+(JSON.parse(this.todoItem).item));
          return html `
          <style>
          .list-item {
              cursor:pointer;
              display:flex;
              align-items:center;
              background:#fff;
              border-radius:4px;
              margin-bottom:0.5rem;
              line-height: 1.5;
              transition: all 200ms linear;
              position: relative;
              overflow: hidden;
          }
          input[type="checkbox"] {
              margin-left:1rem
          }
          input[type="checkbox"]:checked + .item {
              text-decoration: line-through;
              color:#aaa;
          }
          .list-item .item {
              margin-right:auto;
              padding:0.625rem 1rem;
          }
          .list-item .delete {
              padding:0.625rem 1rem;
              border-radius:0 0.5rem 0.5rem 0;
              color:rgba(0,0,0,0.25);
              transition: 100ms all linear;
              border:none;
              background:transparent;
              cursor:pointer;
              -webkit-appearance:button;
              margin-left:auto;
              opacity:0;
              pointer-events: none;
          }
          .list-item:hover .delete {
              opacity:1;
              pointer-events: auto;
          }
          .list-item .delete:hover {
              color:red;
          }
          .list-item .delete:focus {
              outline:none;
          }
          @media (max-width: 576px) and (orientation:portrait) {
              .list-item .delete {
                  opacity:1;
                  pointer-events: auto;
              }
          }
          @media (max-width: 992px) and (orientation:landscape) {
              .list-item .delete {
                  opacity:1;
                  pointer-events: auto;
              }
          }
      </style>
            <div class="list-item">
                <input type="checkbox" checked="${this.todoItem.done}" @click=${()=>this.onDone(JSON.parse(this.todoItem).id)}"/>
                <div class="item">${JSON.parse(this.todoItem).item}</div>
                <button class="delete" @click="${() => this.onRemove(JSON.parse(this.todoItem).id)}">
                    <strong>X</strong>
                </button>
            </div>
            `;
       }
    }
customElements.define('todo-item', TodoItem);