function arrayLocations(data, sede, number) {
  var keys = Object.keys(data);
  for (var i = 0;i < keys.length;i++) {
    if (keys[i] === sede) {
      var dataSede = data[sede];
      var year = Object.keys(dataSede);
  
      for (var j = 0;j < year.length;j++) {
        if (year[j] === number) {
          var yearSelectioned = data[sede][number];
          var elementsOfEachYear = Object.keys(yearSelectioned);
            
          for (var x = 0;x < elementsOfEachYear.length;x++) {
            var propertiesOfYear = data[sede][number];
            var studentsRatings = Object.keys(propertiesOfYear);
            console.log(studentsRatings);
          }
        }
      }
    }
  }
  return keys;
}
/*
    foto de la usuaria || nombre de la usuaria
    hr
    add student
    hr
    remove student
    hr
    add sprint
    hr
    */ 
arrayLocations(data, 'LIM', '2016-2');
  
var inputStudents = document.getElementById('students');
inputStudents.addEventListener('click', function() {
  // document.body.innerHTML = data['LIM']['2016-2']['students']['photo'];
  // var img = data['LIM']['2016-2']['students'][0]['photo'];
  // document.body.innerHTML = data['LIM']['2016-2']['students'][0]['photo'];
  var info = Object.keys(data['LIM']['2016-2']['students']).length;
  for (var i = 0; i < info; i++) {
    // document.body.innerHTML = data['LIM']['2016-2']['students'][i]['photo'];
    var img = document.createElement('img');
    var students = data['LIM']['2016-2']['students'][i];
    var photoStudents = students['photo'];
    var nameStudents = students['name'];
    var activeStudents = students['active'];
    var sprintsStudents = students['sprints'];
    // document.body.textContent = data['LIM']['2016-2']['students'][i]['name'];
    // var text = (document.body.textContent = data['LIM']['2016-2']['students'][i]['name']);
    
    img.setAttribute('src', photoStudents);
    var div = document.createElement('div');
    div.appendChild(img);
     

    div.classList.add('box-div');
    img.classList.add('img-div');
    document.body.appendChild(div);
    // var allSections = document.getElementById('sections');
    // document.body.removeChild('sections');
    
    
    // document.body.appendChild(div);
    // document.body.appendChild(div);
  }
});

// intento de sacar el porcentaje de satisfaccion en Arequipa
// 2016-2
var keysAqp = Object.keys(data['AQP']['2016-2']['ratings']).length;
var dataAqp = data['AQP']['2016-2']['ratings'];
var contadorAqp = 0;

for (var i = 0;i < keysAqp;i++) {
  var satisfactionAqp = dataAqp[i]['nps']['promoters'];
  contadorAqp += satisfactionAqp;
  var totalAqp = contadorAqp / 4 + '%';
}
var p1 = document.createElement('p');
p1.textContent = 'Porcentaje de satisfacción en Arequipa 2016-2 es de ' + totalAqp;
document.body.appendChild(p1);
// console.log(totalAqp);


// intento de sacar el porcentaje de satisfaccion en Arequipa
// 2017-1
var keysAqp2 = Object.keys(data['AQP']['2017-1']['ratings']).length;
var dataAqp2 = data['AQP']['2017-1']['ratings'];
var contadorAqp2 = 0;

for (var i = 0;i < keysAqp2;i++) {
  var satisfactionAqp2 = dataAqp2[i]['nps']['promoters'];
  contadorAqp2 += satisfactionAqp2;
  var totalAqp2 = contadorAqp2 / 3 + '%';
}
var p2 = document.createElement('p');
p2.textContent = 'Porcentaje de satisfacción en Arequipa 2017-1 es de ' + totalAqp2;
document.body.appendChild(p2);

// intento de sacar el porcentaje de satisfaccion en México
// 2017-1

var keysCdmx1 = Object.keys(data['CDMX']['2017-1']['ratings']).length;
var dataCdmx1 = data['CDMX']['2017-1']['ratings'];
var contadorCdmx1 = 0;

for (var i = 0;i < keysCdmx1;i++) {
  var satisfactionCdmx1 = dataCdmx1[i]['nps']['promoters'];
  contadorCdmx1 += satisfactionCdmx1;
  var totalCdmx1 = contadorCdmx1 / 3 + '%';
}
var p3 = document.createElement('p');
p3.textContent = 'Porcentaje de satisfacción en Mexico 2017-1 es de ' + totalCdmx1;
document.body.appendChild(p3);

// intento de sacar el porcentaje de satisfaccion en México
// 2017-2

var keysCdmx2 = Object.keys(data['CDMX']['2017-2']['ratings']).length;
var dataCdmx2 = data['CDMX']['2017-2']['ratings'];
var contadorCdmx2 = 0;

for (var i = 0;i < keysCdmx2;i++) {
  var satisfactionCdmx2 = dataCdmx2[i]['nps']['promoters'];
  contadorCdmx2 += satisfactionCdmx2;
  var totalCdmx2 = contadorCdmx2 / 2 + '%';
}
var p4 = document.createElement('p');
p4.textContent = 'Porcentaje de satisfacción en Mexico 2017-2 es de ' + totalCdmx2;
document.body.appendChild(p4);

// intento de sacar el porcentaje de satisfaccion en Lima
// 2016-2

var keysLim1 = Object.keys(data['LIM']['2016-2']['ratings']).length;
var dataLim1 = data['LIM']['2016-2']['ratings'];
var contadorLim1 = 0;

for (var i = 0;i < keysLim1 ;i++) {
  var satisfactionLim1 = dataLim1 [i]['nps']['promoters'];
  contadorLim1 += satisfactionLim1;
  var totalLim1 = contadorLim1 / 2 + '%';
}
var p5 = document.createElement('p');
p5.textContent = 'Porcentaje de satisfacción en Lima 2016-2 es de ' + totalLim1;
document.body.appendChild(p5);

// intento de sacar el porcentaje de satisfaccion en Lima
// 2017-1

var keysLim2 = Object.keys(data['LIM']['2017-1']['ratings']).length;
var dataLim2 = data['LIM']['2017-1']['ratings'];
var contadorLim2 = 0;

for (var i = 0;i < keysLim2 ;i++) {
  var satisfactionLim2 = dataLim2 [i]['nps']['promoters'];
  contadorLim2 += satisfactionLim2;
  var totalLim2 = contadorLim2 / 4 + '%';
}
var p6 = document.createElement('p');
p6.textContent = 'Porcentaje de satisfacción en Lima 2017-1 es de ' + totalLim2;
document.body.appendChild(p6);

// intento de sacar el porcentaje de satisfaccion en Lima
// 2017-2

var keysLim3 = Object.keys(data['LIM']['2017-2']['ratings']).length;
var dataLim3 = data['LIM']['2017-2']['ratings'];
var contadorLim3 = 0;

for (var i = 0;i < keysLim3 ;i++) {
  var satisfactionLim3 = dataLim3 [i]['nps']['promoters'];
  contadorLim3 += satisfactionLim3;
  var totalLim3 = contadorLim3 / 2 + '%';
}
var p7 = document.createElement('p');
p7.textContent = 'Porcentaje de satisfacción en Lima 2017-2 es de ' + totalLim3;
document.body.appendChild(p7);

// intento de sacar el porcentaje de satisfaccion en Chile
// 2016-2

var keysScl1 = Object.keys(data['SCL']['2016-2']['ratings']).length;
var dataScl1 = data['SCL']['2016-2']['ratings'];
var contadorScl1 = 0;

for (var i = 0;i < keysScl1 ;i++) {
  var satisfactionScl1 = dataScl1 [i]['nps']['promoters'];
  contadorScl1 += satisfactionScl1;
  var totalScl1 = contadorScl1 / 4 + '%';
}
var p8 = document.createElement('p');
p8.textContent = 'Porcentaje de satisfacción en Chile 2016-2 es de ' + totalScl1;
document.body.appendChild(p8);

// intento de sacar el porcentaje de satisfaccion en Chile
// 2017-1

var keysScl2 = Object.keys(data['SCL']['2017-1']['ratings']).length;
var dataScl2 = data['SCL']['2017-1']['ratings'];
var contadorScl2 = 0;

for (var i = 0;i < keysScl2 ;i++) {
  var satisfactionScl2 = dataScl2 [i]['nps']['promoters'];
  contadorScl2 += satisfactionScl2;
  var totalScl2 = contadorScl2 / 3 + '%';
}
var p9 = document.createElement('p');
p9.textContent = 'Porcentaje de satisfacción en Chile 2017-1 es de ' + totalScl2;
document.body.appendChild(p9);

// intento de sacar el porcentaje de satisfaccion en Chile
// 2017-2

var keysScl3 = Object.keys(data['SCL']['2016-2']['ratings']).length;
var dataScl3 = data['SCL']['2016-2']['ratings'];
var contadorScl3 = 0;

for (var i = 0;i < keysScl3 ;i++) {
  var satisfactionScl3 = dataScl3 [i]['nps']['promoters'];
  contadorScl3 += satisfactionScl3;
  var totalScl3 = contadorScl3 / 100 + '%';
}
var p10 = document.createElement('p');
p10.textContent = 'Porcentaje de satisfacción en Chile 2016-2 es de ' + totalScl3;
document.body.appendChild(p10);
/*
  var iconHumburger = document.getElementById('icon-hamburger');
  iconHumburger.addEventListener('click', function() {
    var creatingDiv = document.createElement('div');
    var creatingP = document.createElement('p');
    var text = document.createTextNode('hey');
    creatingP.appendChild(text);
    creatingDiv.appendChild(creatingP);
    iconHumburger.appendChild(creatingDiv);
  });*/
  
  
// Puedes hacer uso de la base de datos a través de la variable `data`
console.log(data);
