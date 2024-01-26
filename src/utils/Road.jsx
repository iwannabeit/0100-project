import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Road(props){
  const Roadblock = useGLTF('/assets/models/Straight_road.glb')

  return <>
    <primitive object={Roadblock.scene} scale={0.5} position={props.position} castShadow/>
  </>
  
}