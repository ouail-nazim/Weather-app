// interact with the Api
const key='682500PcukwQUtq1UDd6XimUfAmBA5HL';
//get the city
const getCity=async(city)=>{
    const base ='http://dataservice.accuweather.com/locations/v1/cities/search';
    const query=`?apikey=${key}&q=${city}`;

    const response=await fetch(base+query);
    const data=await response.json();
    return data[0]; 
}
//get the weather
const getWeather=async(id)=>{
    const base ='http://dataservice.accuweather.com/currentconditions/v1/';
    const query=`${id}?apikey=${key}`;
    const response=await fetch(base+query);
    const data=await response.json();
    return data[0];
}


    // getCity(cityName)
    // .then(data=>getWeather(data.Key))
    // .then(data=>{console.log(data)})
    // .catch(err=>{console.log(err.message)});

