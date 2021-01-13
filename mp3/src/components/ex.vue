<template>
<div class="container" id = "13">
  </div>
</template>

<script>
// import * as PIXI from 'pixi.js'
import * as THREE from '../../js/three/build/three.js';
// import GLTFLoader from '../../js/three/build/GLTFLoader';
//import * as THREE from "https://threejs.org/build/three.module.js";
import { GLTFLoader } from "../../js/three/build/GLTFLoader";

			var scene = new THREE.Scene();
			scene.background = new THREE.Color( 0x000000 );

			var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
			camera.position.set( 0, 10, 10 );

			var renderer = new THREE.WebGLRenderer( { antialias: true } );
			renderer.setPixelRatio( window.devicePixelRatio );
			renderer.setSize( window.innerWidth, window.innerHeight );
			document.body.appendChild( renderer.domElement );

			var ambientLight = new THREE.AmbientLight( 0xdddddd, 0.4 );
			scene.add( ambientLight );

			var directionalLight = new THREE.DirectionalLight( 0xdddddd, 0.8 );
			directionalLight.position.set( 0, 100, 100 );
			scene.add( directionalLight );

			var loader = new GLTFLoader();

			loader.load( 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/39255/ladybug.gltf', function ( gltf ) {

				scene.add( gltf.scene );
				renderer.render( scene, camera );

			}, undefined, function ( error ) {

				console.error( error );

			} );

export default {
  name:"B"
}
</script>

<style>

</style>