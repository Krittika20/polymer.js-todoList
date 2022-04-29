import {LitElement, html} from '@polymer/lit-element';
import {repeat} from 'lit-html/directives/repeat.js';
import './todo-items';
class ListItems extends LitElement {
    static get properties(){
        return {
            todoList: Array
        }
    }
    constructor() {
        super();
        this.todoList = [{}];

    }
    isJsonObject(strData) {
        try {
            JSON.parse(strData);
        } catch (e) {
            return false;
        }
        return true;
    }
    render(){
         console.log(this.todoList);
        
        // if(this.isJsonObject(this.todoList)){
        //      console.log(typeof(this.todoList));
        //     // console.log((this.todoList));
        //     this.todoList = JSON.parse(this.todoList);
        //     // console.log((this.todoList));
        //      console.log(typeof(this.todoList));
        // }
        // else{
        //     this.todoList = JSON.stringify(this.todoList);
        //     console.log((this.todoList));
        // }
         //console.log("list-item:"+this.todoList);
    //     for (var property in this.todoList) {
    //         console.log(property +":"+this.todoList[property].item);
    //   }
        this.todoList = JSON.parse(this.todoList);
        console.log(this.todoList);
        return html `
        <style>
    .lists {
        padding-left:350px;
        margin:0 auto;
        max-width:500px;
    }
    .list {
        transform-origin:center bottom;
        transition:200ms all linear;
    }
    .list .title {
        color:#B8D4FF;
        font-size:1.5rem;
        letter-spacing:5px;
        text-transform: uppercase;
        text-align: center;
        margin:3.5rem 0 3.5rem 0;
        line-height: 1;
    }
    .list .list-wrapper  {
        list-style: none;
        margin:0 0.5rem;
        padding:0;
    }
    @media (max-width: 576px) and (orientation:portrait) {
        .lists {
            padding:0 1rem;
            margin-bottom:5rem;
        }
        .list .title {
            margin:1.5rem 1rem;
            font-size:1.5rem;
        }
    }
</style>
        <div class="lists">
            <div class="list">
                <h2 class="title">Today's To Do Lists</h2>
                <div class="list-wrapper">
               <!-- ${JSON.stringify(this.todoList)}-->
                    <!--<ul>${this.todoList.map((todo) => html`<li>${JSON.stringify(todo.item)}</li>`)}</ul>-->
                    ${this.todoList.map((todo) => html`<todo-item todoItem=${JSON.stringify(todo)}></todo-item>`)}
                  <!-- ${repeat(this.todoList, (todo) => html`<todo-item todoItem=${JSON.stringify(todo)}></todo-item>`)}-->
                </div>
            </div>
        </div>
        `;
        
    }
}

customElements.define('list-items', ListItems);