import App from './App.js';
import calcDate from './calcDate.js';


export default class CheckAndShowValues extends App {
    constructor(form,[selectEl, inputEl]) {
        super(form,[selectEl, inputEl])

        // nie za bardzo rozumiem na czym to wszystko polega(Nie wiem czym jest "this" w bind'dzie). Znalazlem to rozwiazanie na grupach JS. 

        this.showDateValue = this.showDateValue.bind(this)
        this.showInputValue = this.showInputValue.bind(this)
        this.checkValue = this.checkValue.bind(this)
        
    }
    showDateValue(e) {
        //jak można "ładniej" pobrać te wartości?
        this.year = e.target.options[e.target.selectedIndex].dataset.year;
        this.interest = e.target.options[e.target.selectedIndex].dataset.interest;
        const endTimeEl = this.form.querySelector('.deb-endTime');
        endTimeEl.innerText = calcDate(this.year)
        
    }

    showInputValue(e) {
        this.debenturesQuantity = e.target.value;
        const costEl = this.form.querySelector('.deb-cost');
        costEl.innerText = this.debenturesQuantity * 100
    }

    checkValue(e) {
        e.preventDefault()
        //można ładnie tutaj sprawdzić te elementy?
        if(!(this.year) || !(this.debenturesQuantity)) {
            alert('Proszę wybrać ofertę obligacji i liczbę obligacji')
            return
        }

    }
}




