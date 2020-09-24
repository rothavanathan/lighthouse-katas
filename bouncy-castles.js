// Use the value below whenever you need the value of Pi
const PI = 3.14159 ;

const sphereVolume = function (radius) {
  // Code here!
  return (4 / 3 * Math.PI * radius**3)
}

console.log(4186 < sphereVolume(10) && sphereVolume(10) < 4189);

const coneVolume = function (radius, height) {
  // And here!
  return (Math.PI * radius**2 * height / 3)
}

console.log(45 < coneVolume(3, 5) && coneVolume(3, 5) < 49);

const prismVolume = function (height, width, depth) {
  // Probably here too!
  return (width * height * depth)
}

console.log(prismVolume(3, 4, 5) === 60);

const totalVolume = function (solids) {
  let volumeTally = 0;
  // Code here? Yup!
  solids.forEach(solid => {
    switch (solid.type) {
      case 'sphere':
        volumeTally += sphereVolume(solid.radius);
        break;
      case 'cone': 
        volumeTally += coneVolume(solid.radius, solid.height)
        break;
      case 'prism':
        volumeTally += prismVolume(solid.height, solid.width, solid.depth);
        break;
    }
  })
  return volumeTally;
}
  


const largeSphere = {
  type: 'sphere',
  radius: 40
}

const smallSphere = {
  type: 'sphere',
  radius: 10
}

const cone = {
  type: 'cone',
  radius: 3,
  height: 5
}

const duck = [
  largeSphere,
  smallSphere,
  cone
]

console.log(272000 < totalVolume(duck) && totalVolume(duck) < 275000);
