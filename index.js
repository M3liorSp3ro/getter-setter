const person = Object.create(
    {
        calculateAge() {
            console.log('Age: ', new Date().getFullYear() - this.birthYear) 
        }
    },
    {
        name: {
            value: 'Danila',
            enumerable: true,// разрешает показывать это значение, по дефолту стоит false
            writable: true, // разрешет изменять значение поля name, по дефолту стоит false
            configurable: true, // разрешает удалять какой либо ключ из объекта, по дефолту стоит false
        },
        birthYear: {
            value: 2001,
            enumerable: false,
            writable: false,
            configurable: false
        },
        age: {
            get() {
                return new Date().getFullYear() - this.birthYear
            },
            set(value) {
                document.body.style.background = 'red'
                console.log('Set age', value)
            }
        }
    }
)

// person.name = 'Maxim'

for (let key in person) {
    if(person.hasOwnProperty(key)) {
        console.log('Key: ', key, person[key])
    }
   
}