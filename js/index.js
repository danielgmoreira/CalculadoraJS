function Calculadora() {

    this.display = document.querySelector('.display');

    this.clickBtn = () => {
        document.addEventListener('click', (e) => {
            const el = e.target;

            if (el.classList.contains('btn-num')) {
                this.btnToDisplay(el.innerText)
            }

            if (el.classList.contains('btn-clear')) {
                this.btnClear();
            }

            if (el.classList.contains('btn-del')) {
                this.deleteOne();
            }

            if (el.classList.contains('btn-eq')) {
                this.equalTo();
            }
        })
    }

    this.inicia = () => {
        this.clickBtn();
        this.pressEnter();
    };

    this.pressEnter = () => {
        this.display.addEventListener('keyup', (e) => {
            if (e.keyCode === 13) {
                this.equalTo();
            }
        })
    }

    this.btnToDisplay = (text) => {
        this.display.value += text;
    }

    this.btnClear = () => {
        this.display.value = '';
    }

    this.deleteOne = () => {
        this.display.value = this.display.value.slice(0, -1);
    }

    this.equalTo = () => {
        let conta = this.display.value

        try {

            conta = eval(conta);

            if (conta === '' || Number.isNaN(conta) || typeof conta !== 'number') {
                alert('Conta inválida')
                return;
            }

            this.display.value = conta;

        } catch {
            alert('Conta inválida')
            return;
        }
    }

}

const calculadora = new Calculadora();

calculadora.inicia();