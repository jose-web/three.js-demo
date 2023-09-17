import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader"

const rendered = new THREE.WebGLRenderer({antialias: true})
rendered.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(rendered.domElement)

rendered.setClearColor(0xA3A3A3)

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 10000)

const orbit = new OrbitControls(camera, rendered.domElement)
camera.position.set(-4000,700,100)
orbit.update()

// const grid = new THREE.GridHelper(30,30)
// scene.add(grid)

const gltfLoader = new GLTFLoader()
const rgbeLoader = new RGBELoader()

rendered.toneMapping = THREE.ACESFilmicToneMapping
rendered.toneMappingExposure = 4

rgbeLoader.load('./assets/hdr/MR_INT-005_WhiteNeons_NAD.hdr',texture=>{
    texture.mapping = THREE.EquirectangularReflectionMapping
    scene.environment=texture

    gltfLoader.load("./assets/dae_villages__ancient_egyptian_scroll_maker/scene.gltf", gltf=>{
        scene.add(gltf.scene)
    })
})


function render(){
    rendered.render(scene, camera)
}

rendered.setAnimationLoop(render)

function resize(){
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    rendered.setSize(window.innerWidth, window.innerHeight)
}

window.addEventListener("resize", resize)