import * as THREE from "./three/three.module.js"
import { OrbitControls } from "./three/OrbitControls.js"

let scene, camera, renderer, cube

window.addEventListener("load", onload)
window.addEventListener('resize', resize);

function onload(){
    scene = new THREE.Scene()
    // scene.background = new THREE.Color(0x333333)
    renderer = new THREE.WebGLRenderer({alpha: true})
    renderer.shadowMap.enabled = true

    document.body.appendChild(renderer.domElement)

    createCube()
    // createGrid()
    createLight()
    createPlane()
    resize()

    animate()
}

function createCube(){
    const geometry = new THREE.BoxGeometry(1,1,1)
    const material = new THREE.MeshStandardMaterial({color: 0x0000ff}) // color blue
    cube = new THREE.Mesh(geometry, material)
    cube.position.set(0,0,1)
    cube.castShadow = true
    scene.add(cube)
}
function createLight(){
    const light = new THREE.DirectionalLight(0xffffff, 1, 10)
    light.position.set(1,1,1)
    light.castShadow = true
    scene.add(light)
}

function createPlane(){
    const geometry = new THREE.PlaneGeometry(20,20,32,32)
    const material = new THREE.MeshStandardMaterial({color: 0x55ff00}) // color blue
    const plane = new THREE.Mesh(geometry, material)
    plane.receiveShadow = true
    plane.position.set(0,0,0)
    scene.add(plane)
}

function createGrid(){
    const grid = new THREE.GridHelper(100, 100)
    scene.add(grid)
}

function animate(){
    requestAnimationFrame(animate)

    cube.rotation.x += 0.01
    cube.rotation.y += 0.01
    renderer.render(scene, camera)
}

function resize(){
    camera = new THREE.PerspectiveCamera(
        75, // Camera frustum vertical field of view
        window.innerWidth / window.innerHeight, // Camera frustum aspect ratio
        0.1, // Camera frustum near plane
        1000 // Camera frustum far plane
    )
    renderer.setSize(window.innerWidth, window.innerHeight)
    camera.position.z = 5
    camera.position.y = -10
    camera.rotation.x = 1

    new OrbitControls(camera, renderer.domElement)
}