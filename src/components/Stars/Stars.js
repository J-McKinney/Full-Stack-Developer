import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import STARLITE from "../../img/star.png";
import Style from "./Stars.module.css";

let scene, camera, renderer, stars, starGeo;

const Stars = () => {
  let starRef = useRef();

  useEffect(() => {
    function init() {
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(
        100,
        // window.innerWidth / window.innerHeight, // This is For Full Screen Shot
        400 / 400, // This is For Small Screen Shot
        0.1,
        1000
      );
      camera.position.z = 1;
      camera.position.x = Math.PI / 2;
      renderer = new THREE.WebGLRenderer();
      // renderer.setSize(window.innerWidth, window.innerHeight); // This is For Full Screen Shot
      renderer.setSize(400, 400); // This is For Small Screen Shot
      document.body.appendChild(renderer.domElement);
      starGeo = new THREE.Geometry();
      for (let i = 0; i < 6000; i++) {
        let star = new THREE.Vector3(
          Math.random() * 600 - 300,
          Math.random() * 600 - 300,
          Math.random() * 600 - 300
        );
        star.velocity = 0;
        star.acceleration = 0.02;
        starGeo.vertices.push(star);
      }
      let sprite = new THREE.TextureLoader().load(STARLITE);
      let starMaterial = new THREE.PointsMaterial({
        color: 0xaaaaaa,
        size: 0.7,
        map: sprite,
      });
      stars = new THREE.Points(starGeo, starMaterial);
      scene.add(stars);
      window.addEventListener("resize", onWindowResize, false);
      animate();
    }

    function onWindowResize() {
      // camera.aspect = window.innerWidth / window.innerHeight; // This is For Full Screen Shot
      camera.aspect = 400 / 400; // This is For Small Screen Shot
      camera.updateProjectionMatrix();
      // renderer.setSize(window.innerWidth, window.innerHeight); // This is For Full Screen Shot
      renderer.setSize(400, 400); // This is For Small Screen Shot
    }

    function animate() {
      starGeo.vertices.forEach((p) => {
        p.velocity += p.acceleration;
        p.y -= p.velocity;
        if (p.y < -300) {
          // -200
          p.y = 150; // 200
          p.velocity = 0;
        }
      });
      starGeo.verticesNeedUpdate = true;
      stars.rotation.y += 0.001; // 0.002 0.004
      stars.rotation.x = -8; // -1
      stars.rotation.z = -44; // -25, -38, -44
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    }

    init();
  }, []);

  return (
    <>
      <div className={Style.starWrapper}>
        <div ref={starRef}>
          <div className={Style.textBox}>
            <div className={Style.heading}>Infinite Stars</div>
            <br />
            <div className={Style.heading}>Three.JS</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Stars;
