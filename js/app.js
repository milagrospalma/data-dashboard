window.addEventListener('load',function(){
  //realizando el evento click para el button estudiantes Arequipa 2016-2
  var students = document.getElementById('students');
  var studentsBtn = document.getElementById('students-btn')

  studentsBtn.addEventListener('click', function(){
    var div = document.createElement('div');
    students.appendChild(div);
    //jalamos las estudiantes de Arequipa 2016-2, mediante la data
    var studentsAqp = data.AQP['2016-2'].students
    for (var i = 0; i < studentsAqp.length; i++){
      var studentsAqp2016a = studentsAqp[i];
      var photoStudentsAqp2016a = studentsAqp2016a.photo;
      var nameStudentsAqp2016a = studentsAqp2016a.name;
      var sprintsStudentsAqp2016atech1 = studentsAqp2016a.sprints[0].score.tech;
      var sprintsStudentsAqp2016atech2 = studentsAqp2016a.sprints[1].score.tech;
      var sprintsStudentsAqp2016atech3 = studentsAqp2016a.sprints[2].score.tech;
      var sprintsStudentsAqp2016atech4 = studentsAqp2016a.sprints[3].score.tech;
      var sprintsStudentsAqp2016ahse1 = studentsAqp2016a.sprints[0].score.hse;
      var sprintsStudentsAqp2016ahse2 = studentsAqp2016a.sprints[1].score.hse;
      var sprintsStudentsAqp2016ahse3 = studentsAqp2016a.sprints[2].score.hse;
      var sprintsStudentsAqp2016ahse4 = studentsAqp2016a.sprints[3].score.hse;
      //creando los elementos
        var img = document.createElement('img');
        var pName = document.createElement('p');
        var divTech1 = document.createElement('div');
        var divTech2 = document.createElement('div');
        var divTech3 = document.createElement('div');
        var divTech4 = document.createElement('div');
        var divHse1 = document.createElement('div');
        var divHse2 = document.createElement('div');
        var divHse3 = document.createElement('div');
        var divHse4 = document.createElement('div');
        //añadiendo el contenido a los elementos creados
        divTech1.innerHTML ='Puntaje TECH 1° sprint' + ':' + ' ' + sprintsStudentsAqp2016atech1;
        divTech2.innerHTML ='Puntaje TECH 2° sprint' + ':' + ' ' + sprintsStudentsAqp2016atech2;
        divTech3.innerHTML ='Puntaje TECH 3° sprint' + ':' + ' ' + sprintsStudentsAqp2016atech3;
        divTech4.innerHTML ='Puntaje TECH 4° sprint' + ':' + ' ' + sprintsStudentsAqp2016atech4;
        divHse1.innerHTML ='Puntaje HSE 1° sprint' + ':' + ' ' + sprintsStudentsAqp2016ahse1;
        divHse2.innerHTML ='Puntaje HSE 2° sprint' + ':' + ' ' + sprintsStudentsAqp2016ahse2;
        divHse3.innerHTML ='Puntaje HSE 3° sprint' + ':' + ' ' + sprintsStudentsAqp2016ahse3;
        divHse4.innerHTML ='Puntaje HSE 4° sprint' + ':' + ' ' + sprintsStudentsAqp2016ahse4;
        pName.textContent = nameStudentsAqp2016a;
        //añadiendo los nodos
        div.appendChild(pName)
        div.appendChild(img)
        div.appendChild(divTech1)
        div.appendChild(divTech2)
        div.appendChild(divTech3)
        div.appendChild(divTech4)
        div.appendChild(divHse1)
        div.appendChild(divHse2)
        div.appendChild(divHse3)
        div.appendChild(divHse4)
        //agregando los atributos
        div.setAttribute('class', 'students')
        img.setAttribute('src',photoStudentsAqp2016a)
        img.setAttribute('class','photoStudentsAqp2016a')
        pName.setAttribute('class','studentsAqp2016a')
        divTech1.setAttribute('class','studentsAqp2016TECH')
        divTech2.setAttribute('class','studentsAqp2016TECH')
        divTech3.setAttribute('class','studentsAqp2016TECH')
        divTech4.setAttribute('class','studentsAqp2016TECH')
        divHse1.setAttribute('class','studentsAqp2016HSE')
        divHse2.setAttribute('class','studentsAqp2016HSE')
        divHse3.setAttribute('class','studentsAqp2016HSE')
        divHse4.setAttribute('class','studentsAqp2016HSE')
      }
  })

  //realizando el evento click para el button general Arequipa 2016-2

  var overview = document.getElementById('overview');
  var overviewBtn = document.getElementById('overview-btn')

  overviewBtn.addEventListener('click', function(){
    var div2 = document.createElement('div');
    overview.appendChild(div2);
    //for para el NPS
    var intento2 = data.AQP['2016-2'].ratings
    for (var i = 0; i < intento2.length; i++){

      var x2 = intento2[i];
      var y2 = x2.nps.promoters;
      var z2 = x2.nps.passive;
      var w2 = x2.nps.detractors;
      var sumXZW = (y2 + z2 + w2)
      var promoters = y2/sumXZW*100
      var detractors = w2/sumXZW*100
      var nps = promoters - detractors
      var p3 = document.createElement('p')
      p3.textContent = 'NPS' + ':' + nps;
      div2.appendChild(p3)
    /*  [Promoters] = [Respuestas 9 o 10] / [Total respuestas] * 100
  [Passive] = [Respuestas 7 u 8] / [Total respuestas] * 100
  [Detractors] = [Respuestas entre 1 y 6] / [Total respuestas] * 100
  [NPS] = [Promoters] - [Detractors] */
    }

    //for para La puntuación promedio de l@s profesores.
    for (var i = 0; i < intento2.length; i++){

      var x3 = intento2[i];
      var y3 = x3.teacher;
      var p4 = document.createElement('p')
      p4.textContent = 'PUNTACIÓN PROMEDIO PROFESORES' + ':' + y3
      div2.appendChild(p4)
    }
    //for para La puntuación promedio de l@s jedi.
    for (var i = 0; i < intento2.length; i++){

      var x4 = intento2[i];
      var y4 = x4.jedi;
      var p5 = document.createElement('p')
      p5.textContent = 'PUNTACIÓN PROMEDIO JEDI' + ':' + y4
      div2.appendChild(p5)
    }
    });
});
console.log (data)
