//interct with the page DOM

const form=document.querySelector('form');
const card=document.querySelector('.card');
const details=document.querySelector('.details');
const img=card.querySelector('img.time');
const icon=card.querySelector('.icon img');
const out=document.querySelector('.out');


const upDateUI=data=>{
    // const cityData=data.cityData;
    // const weather=data.weather;
    const {cityData,weather}=data;
   
    // image day or night
    //hadi ta3e if moukhtasra
    // const resualt =(condition)? value og if : value of else
    const imgSRc= (weather.IsDayTime)?'images/img/day.svg' :'images/img/night.svg';
    img.setAttribute('src',imgSRc);
    // set the icons
    icon.setAttribute('src',`images/img/icons/${weather.WeatherIcon}.svg`);
    details.innerHTML=`
            <h5 class="my-3">${cityData.EnglishName}</h5> 
            <h6 class=my-2>(${cityData.Country.EnglishName})</h6>
            <div class="my-3">${weather.WeatherText}</div> 
            <div class="display-4 my-4">
                <span class="temp">${weather.Temperature.Metric.Value}</span>
                <span>&deg;C</span>
            </div>
    `;
    // remove display none for the class 
    if (card.classList.contains('d-none')) {
        card.classList.remove('d-none');
    }
    
};
const upDateCity=async(cityName)=>{
    const cityData=await getCity(cityName);
    const weather=await getWeather(cityData.Key);
    return {
        cityData:cityData,
        weather:weather
    };
};
form.addEventListener('submit',e=>{
    e.preventDefault();
    const cityName=form.city.value.trim();
    form.reset();
    upDateCity(cityName)
        .then(data=>upDateUI(data))
        .catch(err=>{
            document.querySelector('.errors ').classList.remove('d-none');
            document.querySelector('.errors span').textContent=err.message;
        });
});
out.addEventListener('click',()=>{
    document.querySelector('.errors ').classList.add('d-none');
});