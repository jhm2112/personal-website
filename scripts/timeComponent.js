let now = new Date();
class CurrentTime extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode:'open'});
        setInterval(() =>this.updateTime(),1000);
    }
    connectedCallback() {
        this.addTime();
    }
    updateTime() {
        const date = new Date();
        const mins = date.getMinutes();
        if(parseInt(mins) <=9) {
            mins = '0' + mins.toString();
        }
        const timeString = `${date.getHours()}:${mins}`;
        this.shadowRoot.getElementById('currentTime').textContent = timeString;
    }
    addTime() {
        const time = document.createElement('output');
        time.innerHTML = 'Current time is <span id="currentTime"></span>';
        this.shadowRoot.appendChild(time);
    }
}
customElements.define('current-time', CurrentTime);
