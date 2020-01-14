export default class App {
    constructor(form,[selectEl,inputEl]){
        this.form = form
        this.selectEl = selectEl
        this.inputEl = inputEl
        // this.showDateValue = this.showDateValue
        // this.showInputValue = this.showInputValue
        // this.checkValue = this.checkValue
    }
    events(){
        this.selectEl.addEventListener('change', this.showDateValue);
        this.inputEl.addEventListener('change',this.showInputValue);
        this.form.addEventListener('submit',this.checkValue);
    }
    
}