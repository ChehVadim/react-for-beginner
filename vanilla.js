/*ДИНАМИЧЕСКАЯ ПЕРЕМЕННАЯ*/
const cars = [
    {name: 'BMW M2 Coupe', price: '20000', img: 'https://mochamanstyle.com/wp-content/uploads/2015/10/2016-BMW-M2-Coupe.jpg'},
    {name: 'Audi TT', price: '15000', img: 'https://article.images.consumerreports.org/w_598,h_436/prod/content/dam/cro/news_articles/cars/2016-Audi-TT-pr-1-2016-598'},
    {name: 'Mercedes amg coupe', price: '18000', img: 'https://auto.ndtvimg.com/car-images/big/mercedes-amg/gle-coupe/mercedes-amg-gle-coupe.jpg?v=2'}
];


/*КОМПОНЕНТ*/
function createCar(car) {    /*ФУНКЦИЯ createCar ПОЛУЧАЕТ ОБЬЕКТ car*/
    return `
    <div class="card">    /*ШАБЛОН КОМПОНЕНТА C ДИНАМИЧЕСКИМИ ДАННЫМИ*/
        <div class="card-img">
            <img
                src="${car.img}"
                alt="${car.name}">
        </div>
        <h3>${car.name}</h3>
        <p>${car.price} $</p>
    </div>
    `
}