import { Html, useProgress } from '@react-three/drei';

// TODO:make into circle loader instead
const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html>
      <span className='canvas-load'></span>
      <p style={{
        fontSize: 14,
        color: '#fff',
        fontWeight: 800,
        marginTop: 40,
      }}>
        {progress.toFixed(2)}%
      </p>
    </Html>
  )
}

export default Loader