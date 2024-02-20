var models=[
    {
        name:"BMW 520d",
        image:"img/BMW 5 Series.jpg",
        link:"https://www.bmw.com.tr/tr/all-models/5-series/sedan/bmw-5-serisi-sedan-genel-bakis.html"
    },
    {
        name:"Ford Mondeo",
        image:"img/Ford Mondeo.jpg",
        link:"https://media.ford.com/content/fordmedia/feu/en/products/cars/mondeo/mondeo.html"
    },
    {
        name:"Honda Civic",
        image:"img/Honda Civic.jpg",
        link:"https://www.honda.com.tr/otomobil/modeller/honda-civic-sedan"
    },
    {
        name:"Skoda Superb",
        image:"img/Skoda Superb.jpg",
        link:"https://www.skoda.com.tr/modeller/superb"
    },
    {
        name:"Volvo S90",
        image:"img/Volvo S90.jpg",
        link:"https://www.volvocars.com/tr/cars/s90/"
    },
]
var index=0;
var settings={
    duration:'1000',
    random:false
};
var interval;


init(settings);

document.querySelector(".fa-arrow-left").addEventListener('click',function(){
    index--;
    display(index);
});

document.querySelector(".fa-arrow-right").addEventListener('click',function(){
    index++;
    display(index);
});

document.querySelectorAll('.arrow').forEach(function(item){
    item.addEventListener('mouseenter',function(){
        clearInterval(interval);
    })
})

document.querySelectorAll('.arrow').forEach(function(item){
    item.addEventListener('mouseleave',function(){
        init(settings);
    })
})

function init(settings){
    // setTimeout // Bir fonksiyonun ne kadar zaman sonra başlayacağını belirtiriz. Fonksiyon bir kere başlar ve durur tekra çalışmaz.
    // setInterval // clearInterval ile durdurulmadığı sürece sürekli tekrar eder.
    var prev;

    interval=setInterval(function(){
        if(settings.random){
            //random indeks
            do{
                index=Math.floor(Math.random()*models.length);
            }while(index==prev)
            prev==index;
            index=Math.floor(Math.random()*models.length);
        }
        else{
            //artan indeks
            if(models.length==index){
                index=0;
            }
            display(index);
            index++;
        }
        console.log(index);
        display(index);
    },settings.duration)
}

function display(i) {
    index=i;
    if(i<0){
        index=models.length-1;
    }
    if(i>models.length-1){
        index=0;
    }
document.querySelector('.card-img-top').setAttribute('src',models[index].image);
document.querySelector('.card-title').textContent=models[index].name;
document.querySelector('.card-link').setAttribute('href',models[index].link);
};