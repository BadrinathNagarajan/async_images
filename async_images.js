
async function getdata(){

    let res = await fetch('https://parallelum.com.br/fipe/api/v1/carros/marcas/59/modelos/5940/anos',{
        method:'GET',
        'Content-Type':'application/json'      
    })
    let data = await res.json(); 
    console.log(data)      
    constructtabledata(data)
}

getdata();


async function constructtabledata(data){
    for(let i=0;i<data.length;i++){
        let tab= document.getElementById('table')
        let row = document.createElement('tr')
        row.setAttribute('class','trow')
        row.innerHTML=`<tr>
        <td scope="row">${i+1}</td>
        <td>${data[i].codigo}</td>
        <td>${data[i].nome}</td>      
        </tr>`
      tab.appendChild(row)
    }
}