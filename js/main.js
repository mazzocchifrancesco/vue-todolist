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
};

createApp(object).mount('#app')

