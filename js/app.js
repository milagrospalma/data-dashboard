window.addEventListener('load',function(){
  //realizando el evento click para el button general Arequipa 2016-2
  var overview = document.getElementById('overview');
  var overviewBtn = document.getElementById('overview-btn')

  overviewBtn.addEventListener('click', function(){
    var div2 = document.createElement('div');
    overview.appendChild(div2);
    //for para el NPS
    //jalamos los ratings de Arequipa 2016-2, mediante la data
    var overviewAqp = data.AQP['2016-2'].ratings
    for (var i = 0; i < overviewAqp.length; i++){
      var overviewAqp2016a = overviewAqp[i];
      var promotersOverviewAqp2016a = overviewAqp2016a.nps.promoters;
      var passiveOverviewAqp2016a = overviewAqp2016a.nps.passive;
      var detractorsOverviewAqp2016a = overviewAqp2016a.nps.detractors;
      var sum = (promotersOverviewAqp2016a + passiveOverviewAqp2016a + detractorsOverviewAqp2016a)
      var promoters = promotersOverviewAqp2016a/sum*100
      var detractors = detractorsOverviewAqp2016a/sum*100
      var nps = promoters - detractors
      //creando los elementos
      var pNPS = document.createElement('p');
      //añadiendo el contenido a los elementos creados
      pNPS.textContent = 'NPS' + ':' + ' ' + nps;
      //añadiendo los nodos
      div2.appendChild(pNPS);
      //agregando los atributos
      pNPS.setAttribute('class','overviewNPS');
    }
    //for para La puntuación promedio de l@s profesores.
    for (var i = 0; i < overviewAqp.length; i++){
      var overviewAqp2016a = overviewAqp[i];
      var teacheroverviewAqp2016a = overviewAqp2016a.teacher;
      //creando los elementos
      var pPuntsTeacher = document.createElement('p')
      //añadiendo el contenido a los elementos creados
      pPuntsTeacher.textContent = 'PUNTACIÓN PROMEDIO PROFESORES' + ':' + ' ' + teacheroverviewAqp2016a;
      //añadiendo los nodos
      div2.appendChild(pPuntsTeacher)
      //agregando los atributos
      pPuntsTeacher.setAttribute('class','overviewTEACHER')
    }
    //for para La puntuación promedio de l@s jedi.
    for (var i = 0; i < overviewAqp.length; i++){
      var overviewAqp2016a = overviewAqp[i];
      var jedioverviewAqp2016a = overviewAqp2016a.jedi;
      //creando los elementos
      var pPuntsJedi = document.createElement('p')
      //añadiendo el contenido a los elementos creados
      pPuntsJedi.textContent = 'PUNTACIÓN PROMEDIO JEDI' + ':' + ' ' + jedioverviewAqp2016a
      //añadiendo los nodos
      div2.appendChild(pPuntsJedi)
      //agregando los atributos
      pPuntsJedi.setAttribute('class','overviewJEDI')
    }
    //for para el total de estudiantes presentes
    var overviewAqp2 = data.AQP['2016-2'].students
    var contador = 0;
    for (var i = 0; i < overviewAqp2.length; i++){
      var overviewAqp2a = overviewAqp2[i];
      var activeOverviewAqp2a = overviewAqp2a.active
      if (activeOverviewAqp2a == true){
        contador++
      }
    }
    //creando los elementos
    var pTrue = document.createElement('p');
    //añadiendo contenido a los elementos creados
    pTrue.textContent = 'total de estudiantes presentes' + ':' + ' ' + contador
    //añadiendo los nodos
    div2.appendChild(pTrue)
    //agregando los atributos
    pTrue.setAttribute('class','overviewTRUE')
    //for para el % de deserción de estudiantes
  });
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
});
console.log (data)
