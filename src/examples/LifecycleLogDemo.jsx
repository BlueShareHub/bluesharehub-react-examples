import React, { useEffect, useState } from 'react';

function LifecycleLogDemo() {
  const [count, setCount] = useState(0);

  // componentDidMount / componentWillUnmount
  useEffect(() => {
    console.log('mounted');
    return () => console.log('unmounted');
  }, []);

  // componentDidUpdate(count)
  useEffect(() => {
    console.log('updated: count =', count);
  }, [count]);

  return (
    <section style={{border:'1px solid #ddd', padding:12, borderRadius:8}}>
      <h4>LifecycleLogDemo 예제</h4>
      <p>카운트 값: {count}</p>
      <div>
        <button onClick={() => setCount(c => c + 1)}>+1</button>
      </div>
      <hr/>
      <pre style={{background:'#f6f8fa', padding:8}}>
        {JSON.stringify({ count }, null, 2)}
      </pre>
    </section>
  );
}

export default LifecycleLogDemo;
