import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <h1 className='text-center'>Trivia Quest</h1>
      <button onClick={() => navigate('/about')}>Ir a About</button>
    </div>
  );
}

export default Home;