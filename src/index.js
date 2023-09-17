import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js"

const rendered = new THREE.WebGLRenderer({antialias: true})
rendered.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(rendered.domElement)

rendered.setClearColor(0xA3A3A3)

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000)

const orbit = new OrbitControls(camera, rendered.domElement)
camera.position.set(5,5,5)
orbit.update()

const grid = new THREE.GridHelper(30,30)
scene.add(grid)


function render(){
    rendered.render(scene, camera)
}

rendered.setAnimationLoop(render)