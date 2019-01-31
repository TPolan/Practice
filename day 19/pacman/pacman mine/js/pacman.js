class Pacman {
    constructor(name,xPos,yPos) {
        this.mouth = "open";
        this.name = name;
        this.xPos = xPos;
        this.yPos = yPos;
        this.gender = 'boy';
        this.skinTone = 'light';
        
    }
    setGender(newGender) {
        this.gender = newGender;
        this.update()
    }
    setColor(newColor){
        this.skinTone = newColor;
        this.update()
    }
    setMouth() {
        if (this.mouth === 'open') {
            this.mouth = 'close';
        } else {
            this.mouth = 'open';
        }
    }
    move(dir) {
            this.setMouth();
            
            switch(dir) {
                case 39:    //right arrow
                    this.xPos++;
                    this.face = '400%';
                    break;
                case 37:    //left arrow
                    this.xPos--;
                    this.face = '300%';
                    break;
                case 38:    //up arrow
                    this.yPos--;
                    this.face = '100%';
                    break;
                case 40:    //down arrow
                    this.yPos++;
                    this.face = '200%';
                    break;
            }           
            this.update()
        }
    checkArea() {
        this.element.style.left.value < 
        this.element.style.top.value
    }
    update() {
        // position update:
        this.element.style.left = this.xPos * GRID_SIZE + 'px';
        this.element.style.top = this.yPos * GRID_SIZE + 'px';
//      open/close update:
        if (this.mouth === 'open') {
            this.element.style.backgroundPositionX = '0px';
        } else {
            this.element.style.backgroundPositionX = "right";
        }
//      direction update:
        this.element.style.backgroundPositionY = `${this.face}`;
        
        // gender and skin update:
        this.element.className = `pac ${this.gender}-active-${this.skinTone}`;

    }
    render() {
        this.element = document.createElement('div');
        this.element.className = `pac ${this.gender}-active-${this.skinTone}`;
        this.element.innerHTML = `${this.name}: 0`;

        document.addEventListener('keydown', (e) => {
            this.move(e.keyCode);
            e.preventDefault();
        })
        console.log('render works pac');
        return this.element
    }
    mount(parent) {
        parent.appendChild(this.render());
        this.update();
        console.log('mount works pac');
    }
}