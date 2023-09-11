

window.addEventListener("load", onload)

function onload(){
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
        75, // Camera frustum vertical field of view
        window.innerWidth / window.innerHeight, // Camera frustum aspect ratio
        0.1, // Camera frustum near plane
        1000 // Camera frustum far plane
    )
    camera.position.z = 5 // turn the camera back
    
    const renderer = new THREE.WebGLRenderer()
    renderer.setSize(window.innerWidth, window.innerHeight)
    document.body.appendChild(renderer.domElement)
    
    createCube(scene)
    
    renderer.render(scene, camera)
}

function createCube(scene){
    const geometry = new THREE.BoxGeometry()
    const material = new THREE.MeshBasicMaterial({color: 0x0000ff}) // color blue
    const cube = new THREE.Mesh(geometry, material)
    scene.add(cube)
}