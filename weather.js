// src="https://maps.google.com/maps?q=jhansi&t=&z=13&ie=UTF8&iwloc=&output=embed" 


function getdata(){
    let city=document.getElementById('city').value;

    const url=
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7923d24bc861c7d1b2f18d549d5e6e8d`
    // passing the data with url in above line
    //here ${}==object leteral
    fetch(url).then(function(res){
        return res.json();
    }).then(function(res){
        append(res);
        console.log(res)
    }).catch(function (err){
        console.log(err)
    });

    
    function append(data){
        let container=document.getElementById('container');
        let map =document.getElementById('gmap_canvas');
        container.innerHTML=null;

        let city=document.createElement('p');
        city.innerText= `city: ${data.name}`;

        let min=document.createElement('p');
        min.innerText= `min temp: ${Math.floor(data.main.temp_min - 273)+'\u00B0'+'C'}`;
        
        let max=document.createElement('p');
        max.innerText= `max temp ${Math.floor(data.main.temp_max -273)+'\u00B0'+'C'}`;

        let current=document.createElement('p');
        current.innerText= `current temp ${Math.floor(data.main.temp -273)+'\u00B0'+'C'}`;

        let humidity=document.createElement('p');
        humidity.innerText= `humidity ${data.main.humidity}`;

        container.append(city,min,max,current,humidity);
        map.src=`https://maps.google.com/maps?q=${data.name}&t=&z=13&ie=UTF8&iwloc=&output=embed` ;
    }
    

}