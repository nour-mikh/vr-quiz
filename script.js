AFRAME.registerComponent('move-ground', {
    schema: {
      speed: {type: 'number', default: 1}
    },
    tick: function (time, timeDelta) {
      var ground = document.querySelector('#ground');
      var speed = this.data.speed;
      var pos = ground.getAttribute('position');
      pos.z -= speed * timeDelta / 1000;
      ground.setAttribute('position', pos);
    }
  });

  var player = document.querySelector('#player');
  player.setAttribute('move-ground', {speed: -5});



  var geometries = ['box', 'sphere'];

    var numObstacles = 30;

    var xRange = [-10, 10];
    var yRange = [0, 2];
    var zRange = [-500, 500];

    for (var i = 0; i < numObstacles; i++) {
      var geometry = geometries[Math.floor(Math.random() * geometries.length)];

      var x = Math.random() * (xRange[1] - xRange[0]) + xRange[0];
      var y = Math.random() * (yRange[1] - yRange[0]) + yRange[0];
      var z = Math.random() * (zRange[1] - zRange[0]) + zRange[0];

      var obstacle = document.createElement('a-entity');
      obstacle.setAttribute('geometry', 'primitive: ' + geometry);
      obstacle.setAttribute('position', x + ' ' + y + ' ' + z);

      document.querySelector('a-plane').appendChild(obstacle);
    }

