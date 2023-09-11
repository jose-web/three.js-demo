let scene, camera, renderer, cube

window.addEventListener("load", onload)

function onload(){
    scene = new THREE.Scene()
    renderer = new THREE.WebGLRenderer()
    document.body.appendChild(renderer.domElement)
    
    createCube()
    animate()
}

function createCube(){
    const geometry = new THREE.BoxGeometry()
    const material = new THREE.MeshBasicMaterial({color: 0x0000ff}) // color blue
    cube = new THREE.Mesh(geometry, material)
    scene.add(cube)
}

function animate(){
    requestAnimationFrame(animate)
    resize()

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
}