const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(
        75, // Camera frustum vertical field of view
        window.innerWidth / window.innerHeight, // Camera frustum aspect ratio
        0.1, // Camera frustum near plane
        1000 // Camera frustum far plane
    )

const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

renderer.render(scene, camera)