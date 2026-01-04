'use client'

import React, { useRef } from 'react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'
import * as THREE from 'three'
import { TextureLoader } from 'three' // Import THREE Loader

export default function HeroScene({ imagePath }: { imagePath: string }) {
    return (
        <div className="w-full h-full">
            <Canvas className="w-full h-full">
                <PerspectiveCamera makeDefault position={[0, 0, 5]} />
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} />
                <InteractiveShoe imagePath={imagePath} />
            </Canvas>
        </div>
    )
}

function InteractiveShoe({ imagePath }: { imagePath: string }) {
    const meshRef = useRef<THREE.Mesh>(null)
    const texture = useLoader(TextureLoader, imagePath)

    // Use state.pointer for interactive rotation
    useFrame((state) => {
        if (!meshRef.current) return
        meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, -state.pointer.y * 0.5, 0.1)
        meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, state.pointer.x * 0.5, 0.1)

        // Gentle bobbing animation
        meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1
    })

    return (
        <mesh ref={meshRef} scale={[3, 3, 1]}> {/* Adjust scale based on image aspect ratio */}
            <planeGeometry args={[1, 1]} />
            <meshStandardMaterial
                map={texture}
                transparent
                side={THREE.DoubleSide}
                metalness={0.2}
                roughness={0.8}
            />
        </mesh>
    )
}
