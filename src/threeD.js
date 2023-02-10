import './index.css'
import * as THREE from 'three'

function init(){
  var scene = new THREE.Scene();
  var geometry = new THREE.SphereGeometry(3,32,32);
  var material = new THREE.MeshBasicMaterial({
    color:'#44aa88'
  });
  material.wireframe = true;
  var mesh = new THREE.Mesh(geometry,material);
  scene.add(mesh);
  var camera = new THREE.PerspectiveCamera(
    55,
    window.innerWidth/ window.innerHeight,
    1,
    1000
    )
    scene.add(camera)
    camera.position.setZ(10);
  const canvas = document.querySelector('#webgl')
  var renderer = new THREE.WebGLRenderer({canvas});
  renderer.setSize(window.innerWidth,window.innerHeight);
  renderer.setPixelRatio(devicePixelRatio);
  renderer.render(scene,camera)
  const time = new Date().getSeconds();
  function update(time){
    mesh.rotation.x = time/1000;
    mesh.rotation.y = time/1000;
    renderer.render(scene,camera);
    requestAnimationFrame(update);
  }
  requestAnimationFrame(update);
}

init();