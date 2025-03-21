
import React, { useCallback, useRef } from 'react';
import { SceneSetup } from './scene/SceneSetup';
import { InteractiveObjects } from './scene/InteractiveObjects';
import { SceneObjects } from './scene/types';

export const InteractiveScene: React.FC<{ className?: string }> = ({ className = "" }) => {
  const cleanupFns = useRef<(() => void)[]>([]);
  
  const handleSceneCreated = useCallback((objects: SceneObjects) => {
    const addCleanup = (fn: () => void) => {
      cleanupFns.current.push(fn);
    };
    
    return (
      <InteractiveObjects
        {...objects}
        onCleanup={addCleanup}
      />
    );
  }, []);
  
  return (
    <SceneSetup
      className={className}
      onSceneCreated={handleSceneCreated}
    />
  );
};
