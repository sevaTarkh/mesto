export class Section{
    constructor({renderer}, container){
        this._renderer = renderer,
        this._container = document.querySelector(container);
    }
    addItem(element){
        this._container.prepend(element)
    }
    renderItems = (items) =>{
        items.forEach(this._renderer);
    };
}
