'use client'

import React, { useRef, useState } from 'react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { PerspectiveCamera, useTexture } from '@react-three/drei' // Removed useTexture import
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

    // State for mouse position
    const [mouse, setMouse] = useState({ x: 0, y: 0 })

    useFrame((state) => {
        if (!meshRef.current) return

        // Smooth rotation based on mouse position
        // Damping the rotation for smoothness
        meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, mouse.y * 0.5, 0.1)
        meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, mouse.x * 0.5, 0.1)

        // Gentle bobbing animation (Defy Gravity)
        meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1
    })

    const handlePointerMove = (e: any) => {
        // Normalize coordinates to -1 to 1
        const x = (e.clientX / window.innerWidth) * 2 - 1
        const y = -(e.clientY / window.innerHeight) * 2 + 1
        setMouse({ x, y })
    }

    // Add event listener to window, or cleaner to use useThree hook for pointer but this works for basic
    // For R3F, we can use onPointerMove on the mesh or canvas parent, let's use global for better feel
    // Actually, let's use the state.pointer from useFrame for correctness in R3F
    useFrame((state) => {
        if (!meshRef.current) return
        meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, -state.pointer.y * 0.5, 0.1)
        meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, state.pointer.x * 0.5, 0.1)
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
