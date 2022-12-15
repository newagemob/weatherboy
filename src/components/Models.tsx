// This component will hold the 3D models for the weather environment

import React, { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Sky } from '@react-three/drei'
import { Mesh } from 'three'


// Island Model
export const Island: React.FC = () => {
  // Use a ref to store the cube mesh
  const islandRef: any = useRef<Mesh>()

  useFrame(() => {
    // Get the current cube mesh from the ref
    const island = islandRef.current

    // lay the island on its side
    island.rotation.x = Math.PI / 2
    island.rotation.y = Math.PI / 2
  })

  // Return the Three.js cube mesh
  return (
    <mesh ref={islandRef} position={[0, -0.5, 0]}>
      <boxGeometry attach="geometry" args={[0.33, 3.66, 3.66]} />
      <meshStandardMaterial attach="material" color="#003366" />
    </mesh>
  )
}

// Tree Model
export const Tree: React.FC = () => {
  // Use a ref to store the cube mesh
  const treeRef: any = useRef<Mesh>()

  useFrame(() => {
    // Get the current cube mesh from the ref
    const tree = treeRef.current
    // manipulate the top of the cube to make it look like liquid
    tree.rotation.y += 0.01
  })

  // Return the Three.js cube mesh
  return (
    <mesh ref={treeRef} position={[0, 0, 0]}>
      <boxGeometry attach="geometry" args={[0.33, 3.66, 3.66]} />
      <meshStandardMaterial attach="material" color="#003366" />
    </mesh>
  )
}

// Sun Model
export const Sun: React.FC = () => {
  // Use a ref to store the cube mesh
  const sunRef: any = useRef<Mesh>()

  useFrame(() => {
    // Get the current cube mesh from the ref
    const sun = sunRef.current
    // manipulate the top of the cube to make it look like liquid
    sun.rotation.y += 0.01
  })

  // Return the Three.js cube mesh
  return (
    <mesh ref={sunRef} position={[0, 0, 0]}>
      <boxGeometry attach="geometry" args={[0.33, 3.66, 3.66]} />
      <meshStandardMaterial attach="material" color="#003366" />
    </mesh>
  )
}

// Cloud Model
export const Cloud: React.FC = () => {
  // Use a ref to store the cube mesh
  const cloudRef: any = useRef<Mesh>()

  useFrame(() => {
    // Get the current cube mesh from the ref
    const cloud = cloudRef.current
    // manipulate the top of the cube to make it look like liquid
    cloud.rotation.y += 0.01
  })

  // Return the Three.js cube mesh
  return (
    <mesh ref={cloudRef} position={[0, 0, 0]}>
      <boxGeometry attach="geometry" args={[0.33, 3.66, 3.66]} />
      <meshStandardMaterial attach="material" color="#003366" />
    </mesh>
  )
}

// Rain Model
export const Rain: React.FC = () => {
  // Use a ref to store the cube mesh
  const rainRef: any = useRef<Mesh>()

  useFrame(() => {
    // Get the current cube mesh from the ref
    const rain = rainRef.current
    // manipulate the top of the cube to make it look like liquid
    rain.rotation.y += 0.01
  })

  // Return the Three.js cube mesh
  return (
    <mesh ref={rainRef} position={[0, 0, 0]}>
      <boxGeometry attach="geometry" args={[0.33, 3.66, 3.66]} />
      <meshStandardMaterial attach="material" color="#003366" />
    </mesh>
  )
}

// Snow Model
export const Snow: React.FC = () => {
  // Use a ref to store the cube mesh
  const snowRef: any = useRef<Mesh>()

  useFrame(() => {
    // Get the current cube mesh from the ref
    const snow = snowRef.current
    // manipulate the top of the cube to make it look like liquid
    snow.rotation.y += 0.01
  })

  // Return the Three.js cube mesh
  return (
    <mesh ref={snowRef} position={[0, 0, 0]}>
      <boxGeometry attach="geometry" args={[0.33, 3.66, 3.66]} />
      <meshStandardMaterial attach="material" color="#003366" />
    </mesh>
  )
}

// Fog Model
export const Fog: React.FC = () => {
  // Use a ref to store the cube mesh
  const fogRef: any = useRef<Mesh>()

  useFrame(() => {
    // Get the current cube mesh from the ref
    const fog = fogRef.current
    // manipulate the top of the cube to make it look like liquid
    fog.rotation.y += 0.01
  })

  // Return the Three.js cube mesh
  return (
    <mesh ref={fogRef} position={[0, 0, 0]}>
      <boxGeometry attach="geometry" args={[0.33, 3.66, 3.66]} />
      <meshStandardMaterial attach="material" color="#003366" />
    </mesh>
  )
}
