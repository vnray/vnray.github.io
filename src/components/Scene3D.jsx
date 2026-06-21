import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Text } from '@react-three/drei'
import * as THREE from 'three'

const symbols = [
  { text: '</>', pos: [-3, 2, -2], color: '#FF6B35', size: 0.7, speed: 1.2 },
  { text: '{}', pos: [3.5, -1.5, -3], color: '#06B6D4', size: 0.6, speed: 1.5 },
  { text: '=>', pos: [-2, -2, -4], color: '#FF6B35', size: 0.5, speed: 1.8 },
  { text: '//', pos: [2.5, 2.5, -3.5], color: '#06B6D4', size: 0.6, speed: 1.3 },
  { text: '...', pos: [4, 0.5, -2], color: '#FF6B35', size: 0.5, speed: 1.6 },
  { text: '()', pos: [-3.5, -1, -4.5], color: '#06B6D4', size: 0.6, speed: 1.4 },
  { text: 'const', pos: [0, 3, -5], color: '#FF6B35', size: 0.4, speed: 1 },
  { text: '<App />', pos: [0, -3, -5.5], color: '#06B6D4', size: 0.4, speed: 1.1 },
]

function CodeScene() {
  const groupRef = useRef()
  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.05
    }
  })
  return (
    <group ref={groupRef}>
      {symbols.map((s, i) => (
        <Float key={i} speed={s.speed} rotationIntensity={0.3} floatIntensity={0.4}>
          <Text
            position={s.pos}
            fontSize={s.size}
            color={s.color}
            anchorX="center"
            anchorY="middle"
            transparent
            opacity={0.25}
            depthWrite={false}
          >
            {s.text}
          </Text>
        </Float>
      ))}
    </group>
  )
}

function DataParticles() {
  const count = 200
  const positions = new Float32Array(count * 3)
  for (let i = 0; i < count * 3; i++) positions[i] = (Math.random() - 0.5) * 30
  const ref = useRef()
  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.y = clock.getElapsedTime() * 0.015
      ref.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.008) * 0.05
    }
  })
  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.04} color="#FF6B35" transparent opacity={0.3} sizeAttenuation />
    </points>
  )
}

export default function Scene3D() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 7], fov: 50 }}>
        <ambientLight intensity={0.2} />
        <directionalLight position={[5, 5, 5]} intensity={0.6} color="#FF6B35" />
        <directionalLight position={[-5, -5, -5]} intensity={0.4} color="#06B6D4" />
        <CodeScene />
        <DataParticles />
      </Canvas>
    </div>
  )
}
