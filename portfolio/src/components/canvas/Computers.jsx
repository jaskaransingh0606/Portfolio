import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload,useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

 

const Computers=(isMobile)=>{
  const computer=useGLTF("./desktop_pc/scene.gltf");
  return(
    <mesh>          
      <hemisphereLight intensity={0.15} groundColor="black"/> 
      <pointLight intensity={1}/>  
      <spotLight
      position={[-20,50,10]}                //light shining position
      angle={0.12}                          //
      penumbra={1}                          //softness of the light
      intensity={1}                         
      castShadow
      shadow-mapSize={1024}

      />  
      <primitive 
      object={computer.scene}
      scale={ isMobile? 0.7 : 0.75}
      position={isMobile?[0,-3,-1]:[0,-3.75,-1.5]}
      rotation={[-0.01,-0.2,-0.1]}
      />
    </mesh>
  )
}
const ComputersCanvas = () => {
  const [isMobile,setIsMobile]=useState(false);

  useEffect(()=>{

    // Add a media query change listener for changes to screenSize
    const mediaQuery=window.matchMedia("(max-width:500px)");

    // Set the initial value of isMobile to the state Variable

    setIsMobile(mediaQuery.matches);

    //Define a callback function to handle the media query change listener
    const handleMediaQueryChange=(event)=>{
      setIsMobile(event.matches);
    }

    //Add the callback function as a listener to the media query change listener
    mediaQuery.addEventListener("change",handleMediaQueryChange);

    return()=>{
      mediaQuery.removeEventListener("change",handleMediaQueryChange);
    }
  },[])
  return(
    <Canvas                
    frameLoop="demand"
    shadows
    camera={{position:[20,3,5],fov:25}}
    gl={{preserveDrawingBuffer:true}}
    >
      <Suspense fallback={<CanvasLoader/>}>
        <OrbitControls 
        enableZoom={false}
        maxPolarAngle={Math.PI/2}
        minPolarAngle={Math.PI/2}
        />
        <Computers isMobile={isMobile}/>
      </Suspense>
      <Preload all/>
    </Canvas>       
  )
}
export default ComputersCanvas;
