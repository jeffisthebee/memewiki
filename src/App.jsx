import './App.css';
import memesData from './data/memes.json'; // ⬅️ 냉장고에서 밈 데이터를 꺼내오는 코드!

function App() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', fontFamily: 'sans-serif' }}>
      <h1 style={{ textAlign: 'center', fontSize: '3rem', marginBottom: '30px' }}>
        🔥 실전 밈 위키
      </h1>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {memesData.map((meme) => (
          <div key={meme.id} style={{ border: '2px solid #eaeaea', borderRadius: '12px', padding: '20px', backgroundColor: '#fdfdfd' }}>
            <h2>
              {meme.title} 
              <span style={{ fontSize: '1rem', color: '#888', marginLeft: '10px' }}>
                [{meme.country === 'KR' ? '한국' : '해외'}]
              </span>
            </h2>
            
            <ul style={{ listStyleType: 'none', padding: 0, lineHeight: '1.6' }}>
              <li style={{ marginBottom: '10px' }}>
                <strong>📖 개요:</strong> {meme.description}
              </li>
              <li style={{ marginBottom: '10px' }}>
                <strong>🔍 배경:</strong> {meme.background}
              </li>
              <li style={{ marginBottom: '10px' }}>
                <strong>💡 용도:</strong> {meme.usage}
              </li>
              <li style={{ color: '#d93025' }}>
                <strong>⚠️ 주의:</strong> {meme.warning}
              </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;