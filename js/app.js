window.addEventListener('load', function() {
  var selectHeadquarters = document.getElementById('headquarters');
  var selectGeneration = document.getElementById('generation');
  var backgroundDefault = document.getElementById('background-default');
  var overview = document.getElementById('overview');
  var overviewBtn = document.getElementById('overview-btn');
  var students = document.getElementById('students');
  var studentsBtn = document.getElementById('students-btn');
  // Cargando data al selector de Sedes
  var arrHeadquarter = Object.keys(data);
  // Creando un Array vacío para almacenar las sedes
  var arrOptionHeadquarter = [];
  // Creando un Array vacío para almacenar las generaciones de una sede
  var arrOptionGeneration = [];

  for (var i = 0; i < arrHeadquarter.length ; i++) {
    var option = document.createElement('option');
    if (arrHeadquarter[i] === 'AQP') {
      option.textContent = 'Arequipa';
      option.setAttribute('value', 'arequipa');
      arrOptionHeadquarter.push(i);
    }
    if (arrHeadquarter[i] === 'CDMX') {
      option.textContent = 'México';
      option.setAttribute('value', 'mexico');
      arrOptionHeadquarter.push(i);
    }
    if (arrHeadquarter[i] === 'LIM') {
      option.textContent = 'Lima';
      option.setAttribute('value', 'lima');
      arrOptionHeadquarter.push(i);
    }
    if (arrHeadquarter[i] === 'SCL') {
      option.textContent = 'Chile';
      option.setAttribute('value', 'chile');
      arrOptionHeadquarter.push(i);
    }
    selectHeadquarters.appendChild(option);
  }
  console.log(arrOptionHeadquarter); // [0, 1, 2, 3]
  // Eliminar después de prueba
  var greet = document.createElement('p');

  // Evento para cargar selector de Generaciones
  selectHeadquarters.addEventListener('change', function() {
    // Función para agregar opciones en selector Generación
    function addOptions(arrHeadquarter) {
      var objHeadquarters = data[arrHeadquarter];
      var arrGeneration = Object.keys(objHeadquarters);
      for (var i = arrGeneration.length - 1; i >= 0 ; i--) {
        var option = document.createElement('option');
        var textOption = arrGeneration[i];
        option.textContent = textOption;
        option.setAttribute('value', textOption);
        selectGeneration.appendChild(option);
        arrOptionGeneration.push(i);
      }
      // console.log(arrOptionGeneration); // [1, 0]
    }
    // Creando función para agregar overview por defecto
    function addOverviewDefault() {

    }
    // Creando variable que almacena el índice de la opción seleccionada
    var selectedHeadquarter = selectHeadquarters.selectedIndex;
    if (selectedHeadquarter != 0) {
      backgroundDefault.style.display = 'none';
      overviewBtn.removeAttribute('disabled');
      studentsBtn.removeAttribute('disabled');
      switch (true) {
      case selectedHeadquarter === 1:
        // Desaparece el texto "Generación" del select y muestra una generación
        selectGeneration.options.length = 0;
        addOptions('AQP');
        greet.textContent = 'Aquí debe mostrarse la info general porque una vez seleccionada la sede, se selecciona una generacion por defecto';
        overview.appendChild(greet);
        break;
      case selectedHeadquarter === 2:
        selectGeneration.options.length = 0;
        addOptions('CDMX');
        break;
      case selectedHeadquarter === 3:
        selectGeneration.options.length = 0;
        addOptions('LIM');
        break;
      case selectedHeadquarter === 4:
        selectGeneration.options.length = 0;
        addOptions('SCL');
        break;
      }
    } else {
      students.style.display = 'none';
      overview.style.display = 'none';
      backgroundDefault.style.display = 'block';
      // elimino las generaciones del select y muestra el texto "generación"
      selectGeneration.options.length = 1;
      // Retorna el select con el texto Generación
      selectGeneration.options[0].text = 'generación';
      overviewBtn.setAttribute('disabled', true);
      studentsBtn.setAttribute('disabled', true);
    }
  });

  // Evento para cargar data al seleccionar una generación
  selectGeneration.addEventListener('change', function() {
    greet.textContent = 'Aquí debe mostrarse la info general porque se seleccionó una generación';
    overview.appendChild(greet);

    // for (var i = 0; i < arrOptionGeneration.length; i++) {
    //   var selectedGeneration = arrOptionGeneration[i];
    // }
    // console.log('Index de la opción: ' + selectedGeneration);
  });
  // Evento para el boton general
  overviewBtn.addEventListener('click', function() {
    greet.textContent = 'Esta es la vista general';
    overview.appendChild(greet);
    overview.style.display = 'block';
    // backgroundDefault.style.display = 'none';
    // students.style.display = 'none';
    // overview.style.display = 'block';
  });
  // Evento click para el botón estudiantes
  studentsBtn.addEventListener('click', function() {
    greet.textContent = 'Esta es la vista estudiantes';
    students.appendChild(greet);
    students.style.display = 'block';
    // // backgroundDefault.style.display = 'none';
    // overview.style.display = 'none';
    // students.style.display = 'block';
  });
});
// Puedes hacer uso de la base de datos a través de la variable `data`
console.log(data);
