import { Canvas } from "@react-three/fiber";
import { Ground } from "./Ground";
import { Physics, Debug } from "@react-three/cannon";
import Car from "./Car";
// import DummyBall from "./dummy/DummyBall";
// import DummyBox from "./dummy/DummyBox";
// import DummyWall from "./dummy/DummyWall";
import { StraightRoad } from "./utils/StraightRoad"
import { CurvedRoad } from "./utils/CurvedRoad"
import { OrbitControls } from '@react-three/drei'



function Scene() {
  const timer = setTimeout(()=>{
    
  })
  

  return (
    <>
      <Canvas camera={{ fov:45, position:[1.5, 2, 4]}}>
        <OrbitControls makeDefault />
        <ambientLight/>
        <directionalLight position={[0, 5, 5]} />
        <Physics gravity={[0, -2.6, 0]}>
          <Debug>
            <Car/>
            <Ground rotation={[-Math.PI/2,0,0]}/>
            {/*x축 + */}
            <StraightRoad scale={0.3} position={[0, -0.5, 0]}/>
            <StraightRoad scale={0.3} position={[5, -0.5, 0]}/>
            <StraightRoad scale={0.3} position={[10, -0.5, 0]}/>
            <StraightRoad scale={0.3} position={[15, -0.5, 0]}/>
            <StraightRoad scale={0.3} position={[20, -0.5, 0]}/>

            <CurvedRoad scale={0.31} position={[25, -0.5, 0.43]}/>
            {/* x축 - */}
            <StraightRoad scale={0.3} position={[-5, -0.5, 0]}/>
            <StraightRoad scale={0.3} position={[-10, -0.5, 0]}/>
            <StraightRoad scale={0.3} position={[-15, -0.5, 0]}/>
            <StraightRoad scale={0.3} position={[-20, -0.5, 0]}/>
            <StraightRoad scale={0.3} position={[-25, -0.5, 0]}/>
            <StraightRoad scale={0.3} position={[-30, -0.5, 0]}/>
            <StraightRoad scale={0.3} position={[-35, -0.5, 0]}/>
            <StraightRoad scale={0.3} position={[-40, -0.5, 0]}/>
            <StraightRoad scale={0.3} position={[-45, -0.5, 0]}/>
            <StraightRoad scale={0.3} position={[-50, -0.5, 0]}/>
            <StraightRoad scale={0.3} position={[-55, -0.5, 0]}/>
            <StraightRoad scale={0.3} position={[-60, -0.5, 0]}/>
            <StraightRoad scale={0.3} position={[-65, -0.5, 0]}/>
            <StraightRoad scale={0.3} position={[-70, -0.5, 0]}/>
            <StraightRoad scale={0.3} position={[-75, -0.5, 0]}/>

            <CurvedRoad scale={0.31} position={[-80, -0.5, 0.43]} rotation={[0, Math.PI/2, 0]}/>


            <StraightRoad scale={0.3} position={[0, -0.5, 40]}/>
            <StraightRoad scale={0.3} position={[5, -0.5, 40]}/>
            <StraightRoad scale={0.3} position={[10, -0.5, 40]}/>
            <StraightRoad scale={0.3} position={[15, -0.5, 40]}/>
            <StraightRoad scale={0.3} position={[20, -0.5, 40]}/>
            <CurvedRoad scale={0.31} position={[-80, -0.5, 39.5]} rotation={[0, Math.PI, 0]}/>
            

            <StraightRoad scale={0.3} position={[-5, -0.5, 40]}/>
            <StraightRoad scale={0.3} position={[-10, -0.5, 40]}/>
            <StraightRoad scale={0.3} position={[-15, -0.5, 40]}/>
            <StraightRoad scale={0.3} position={[-20, -0.5, 40]}/>
            <StraightRoad scale={0.3} position={[-25, -0.5, 40]}/>
            <StraightRoad scale={0.3} position={[-30, -0.5, 40]}/>
            <StraightRoad scale={0.3} position={[-35, -0.5, 40]}/>
            <StraightRoad scale={0.3} position={[-40, -0.5, 40]}/>
            <StraightRoad scale={0.3} position={[-45, -0.5, 40]}/>
            <StraightRoad scale={0.3} position={[-50, -0.5, 40]}/>
            <StraightRoad scale={0.3} position={[-55, -0.5, 40]}/>
            <StraightRoad scale={0.3} position={[-60, -0.5, 40]}/>
            <StraightRoad scale={0.3} position={[-65, -0.5, 40]}/>
            <StraightRoad scale={0.3} position={[-70, -0.5, 40]}/>
            <StraightRoad scale={0.3} position={[-75, -0.5, 40]}/>
            <CurvedRoad scale={0.31} position={[25, -0.5, 39.5]} rotation={[0, Math.PI+1.55, 0]}/>

            <StraightRoad scale={0.3} position={[25.5, -0.5, 5.9]} rotation={[0, Math.PI/2, 0]}/>
            <StraightRoad scale={0.3} position={[25.5, -0.5, 10]} rotation={[0, Math.PI/2, 0]}/>
            <StraightRoad scale={0.3} position={[25.5, -0.5, 15]} rotation={[0, Math.PI/2, 0]}/>
            <StraightRoad scale={0.3} position={[25.5, -0.5, 20]} rotation={[0, Math.PI/2, 0]}/>
            <StraightRoad scale={0.3} position={[25.5, -0.5, 25]} rotation={[0, Math.PI/2, 0]}/>
            <StraightRoad scale={0.3} position={[25.5, -0.5, 30]} rotation={[0, Math.PI/2, 0]}/>
            <StraightRoad scale={0.3} position={[25.5, -0.5, 35]} rotation={[0, Math.PI/2, 0]}/>

            <StraightRoad scale={0.3} position={[-80.5, -0.5, 5.8]} rotation={[0, Math.PI/2, 0]}/>
            <StraightRoad scale={0.3} position={[-80.5, -0.5, 10]} rotation={[0, Math.PI/2, 0]}/>
            <StraightRoad scale={0.3} position={[-80.5, -0.5, 15]} rotation={[0, Math.PI/2, 0]}/>
            <StraightRoad scale={0.3} position={[-80.5, -0.5, 20]} rotation={[0, Math.PI/2, 0]}/>
            <StraightRoad scale={0.3} position={[-80.5, -0.5, 25]} rotation={[0, Math.PI/2, 0]}/>
            <StraightRoad scale={0.3} position={[-80.5, -0.5, 30]} rotation={[0, Math.PI/2, 0]}/>
            <StraightRoad scale={0.3} position={[-80.5, -0.5, 35]} rotation={[0, Math.PI/2, 0]}/>
          </Debug>
        </Physics>
      </Canvas>
    </>
  );
}

export default Scene;
