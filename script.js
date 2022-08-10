var res=fetch("https://restcountries.com/v3.1/all");
res.then((data)=>data.json()).then((data1)=>foo(data1));
function foo(res){
        for(var i=0;i<res.length;i++){
        var div=document.createElement('div');
        div.innerHTML=`<div class="container mt-5">
        <img src="${res[i].flags.svg}" style='width: 100%' alt="..."></div>
        <div class="row">
            <div class="col-sm-4">
                <h5 class="card-title">${res[i].name.common}</h5>
                <p class='card-text'>Region: ${res[i].region}</p>
            <p class='card-text'>Capital: ${res[i].capital}</p>
            <p class='card-text'>Latitude: ${res[i].latlng[0]}</p>
            <p class='card-text'>Longitude: ${res[i].latlng[1]}</p>
            <p class='card-text'>Country Code: ${res[i].cca3}</p>
            <button>Click for weather</button>
    </div>
  </div>
</div>`;
        document.body.append(div);
}
}