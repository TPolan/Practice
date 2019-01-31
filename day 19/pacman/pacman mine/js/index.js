const GRID_SIZE = 85;
const Pac1 = new Pacman('Tomas',0,0);
const Pac2 = new Pacman(4,4);
const Field1 = new Field(5,5);

const containerEl = document.querySelector('.container')
document.addEventListener('DOMContentLoaded', () => {
  Field1.mount(containerEl);
  const fieldEl = document.querySelector('.field');
  Pac1.mount(fieldEl);
  // gender
  document.querySelector('.boy').addEventListener('change', (e)=> {
    Pac1.setGender(e.target.value);
  })
  document.querySelector('.girl').addEventListener('change', (e)=> {
    Pac1.setGender(e.target.value);
  })
  // skin colors
  document.querySelector('.light').addEventListener('change', (e)=> {
    Pac1.setColor(e.target.value);
  })
  document.querySelector('.medium').addEventListener('change', (e)=> {
    Pac1.setColor(e.target.value);
  })
  document.querySelector('.dark').addEventListener('change', (e)=> {
    Pac1.setColor(e.target.value);
  })
});