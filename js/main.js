const { createApp } = Vue;

const object = {
    data: function () {
        return {
            toDoList: [
                {
                    testo: 'fare la spesa',
                    done: true
                },
                {
                    testo: 'aggiustare pollaio',
                    done: false
                },
                {
                    testo: 'portare fuori il cane',
                    done: true
                }
            ],

        }
    },
    
    methods: {
        canc(index) {
            this.toDoList.splice(index, 1);
            console.log("cliccato");
        },
        aggiungi() {
            const element={
                testo:document.getElementById("input").value,
                done:false
            };
            this.toDoList.push(element);
            document.getElementById("input").value='';
        }
    }
};

createApp(object).mount('#app')

