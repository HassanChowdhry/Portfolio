import { Html, useProgress } from '@react-three/drei';

const CanvasLoader = () => {
  const { progress } = useProgress();
  return (
    <Html>
      <div className='loader'></div>
      <p style={{
        fontSize: 14,
        color: '#fff',
        fontWeight: 800,
        marginTop: 25
      }}>
        {progress.toFixed(2)}%
      </p>
    </Html>
  )
}

export default CanvasLoader