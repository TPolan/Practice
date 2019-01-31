class Field {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    render() {
        this.element = document.createElement('div');
        this.element.className = 'field';

        console.log('render works field');
        return this.element
    }
    mount(parent) {
        parent.appendChild(this.render());
        this.update();
        console.log('mount works field');
    }
    update() {
        this.element.style.height = `${this.height * GRID_SIZE}px`;
        this.element.style.width = `${this.width* GRID_SIZE}px`;
        console.log('update works field');
    }
}