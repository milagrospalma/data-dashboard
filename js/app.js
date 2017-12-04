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
    for(var elemento1 in data){
          var obj =  data[elemento1]
          var arr = Object.keys(obj);
          var studentsAqp = data[elemento1][arr[0]].students;
          console.log(studentsAqp);

    for (var i = 0; i < studentsAqp.length; i++){
      var studentsAqp2016a = studentsAqp[i];
      console.log (studentsAqp2016a)
      var photoStudentsAqp2016a = studentsAqp2016a.photo;
      var nameStudentsAqp2016a = studentsAqp2016a.name;
      var sprintsStudents = studentsAqp2016a.sprints;
      var img = document.createElement('img');
      var pName = document.createElement('p');
      div.appendChild(pName)
      div.appendChild(img)
      for (var j = 0; j < sprintsStudents.length; j++) {
      var sprints = sprintsStudents[j];
      var sprintsTech = sprints.score.tech;
      var sprintsHse = sprints.score.hse;
      div.setAttribute('class', 'students')
      img.setAttribute('src',photoStudentsAqp2016a)
      img.setAttribute('class','photoStudentsAqp2016a')
      pName.setAttribute('class','studentsAqp2016a')
      console.log (sprintsTech);
      console.log (sprintsHse);
      //creando los elementos
        var divTech1 = document.createElement('div');
        var divHse1 = document.createElement('div');
        //añadiendo el contenido a los elementos creados
        divTech1.innerHTML ='Puntaje TECH sprint' + ' '  + ':' + ' ' + sprintsTech;
        divHse1.innerHTML ='Puntaje HSE sprint' + ' '  + ':' + ' ' + sprintsHse;
        pName.textContent = nameStudentsAqp2016a;
        //añadiendo los nodos
        div.appendChild(divTech1)
        div.appendChild(divHse1)
        //agregando los atributos
        divTech1.setAttribute('class','studentsAqp2016TECH')
        divHse1.setAttribute('class','studentsAqp2016HSE')
      }
      }
    }
  })
});

console.log (data)
