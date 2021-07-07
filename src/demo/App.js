import React from 'react';
import { VectorMap } from '../lib';

function App() {
  const handleClick = (event, code) => {
    console.log(`You have click ${code}`);
  };

  return (
    <div style={{ width: 500, height: 500 }}>
      <VectorMap
        map={'world_mill'}
        backgroundColor="#3b96ce"
        containerStyle={{
          width: '100%',
          height: '100%',
        }}
        onRegionClick={handleClick}
        containerClassName="map"
      />
    </div>
  );
}

export default App;
