window.addEventListener('load', function() {
  var selectHeadquarters = document.getElementById('headquarters');
  var selectGeneration = document.getElementById('generation');
  var overview = document.getElementById('overview');
  var overviewBtn = document.getElementById('overview-btn');
  var students = document.getElementById('students');
  var studentsBtn = document.getElementById('students-btn');
  // Cargando data al selector de Sedes
  var headquarters = Object.keys(data);
  // Creando un Array vacío para almacenar las sedes
  var arrOptionnHeadquarter = [];
  // Creando un Array vacío para almacenar las generaciones de una sede
  var arrOptionGeneration = [];
  for (var i = 0; i < headquarters.length ; i++) {
    var option = document.createElement('option');
    if (headquarters[i] === 'AQP') {
      option.textContent = 'Arequipa';
      option.setAttribute('value', 'arequipa');
      arrOptionnHeadquarter.push(i);
    }
    if (headquarters[i] === 'CDMX') {
      option.textContent = 'México';
      option.setAttribute('value', 'mexico');
      arrOptionnHeadquarter.push(i);
    }
    if (headquarters[i] === 'LIM') {
      option.textContent = 'Lima';
      option.setAttribute('value', 'lima');
      arrOptionnHeadquarter.push(i);
    }
    if (headquarters[i] === 'SCL') {
      option.textContent = 'Chile';
      option.setAttribute('value', 'chile');
      arrOptionnHeadquarter.push(i);
    }
    selectHeadquarters.appendChild(option);
  }
  console.log(arrOptionnHeadquarter); // [0, 1, 2, 3]

  // Evento para cargar selector de Generaciones
  selectHeadquarters.addEventListener('change', function() {
    // Función para agregar opciones en selector Generación
    function addOptions(headquarter) {
      var objHeadquarters = data[headquarter];
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
    // Creando variable que almacena el índice de la opción seleccionada
    var selectedHeadquarter = selectHeadquarters.selectedIndex;
    if (selectedHeadquarter != 0) {
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
      overviewBtn.removeAttribute('disabled');
      studentsBtn.removeAttribute('disabled');
    } else {
      // elimino las generaciones del select y muestra el texto "generación"
      selectGeneration.options.length = 1;
      // Retorna el select con el texto Generación
      selectGeneration.options[0].text = 'generación';
      overviewBtn.setAttribute('disabled', true);
      studentsBtn.setAttribute('disabled', true);
    }
  });
  var greet = document.createElement('p');
  greet.textContent = 'Aquí debe mostrarse una imagen de fondo';
  overview.appendChild(greet);

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

    students.style.display = 'none';
    overview.style.display = 'block';
  });
  // Evento click para el botón estudiantes
  studentsBtn.addEventListener('click', function() {
    greet.textContent = 'Esta es la vista estudiantes';
    students.appendChild(greet);

    overview.style.display = 'none';
    students.style.display = 'block';
  });
});
// Puedes hacer uso de la base de datos a través de la variable `data`
console.log(data);
