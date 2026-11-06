import "./style.css";
import * as THREE from 'three';

//scene
const scene = new THREE.Scene();
//camera  (FOV, aspect ratio, near clipping plane, far clipping plane)
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);
camera.position.z = 3; //camera ko position
//object
const geometry = new THREE.BoxGeometry(1, 1, 1);    // dhancha
const material = new THREE.MeshBasicMaterial({ color: "red" }); //kapda
const mesh = new THREE.Mesh(geometry, material);
//add in scene
scene.add(mesh);

//renderer
const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#canvas'),
    antialias: true  //smooth edges
})
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); //for high resolution devices

