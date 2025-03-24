
import * as THREE from 'three';

export interface SceneObjects {
  scene: THREE.Scene;
  camera: THREE.PerspectiveCamera;
  renderer: THREE.WebGLRenderer;
  container: HTMLDivElement;
}

export interface SceneProps {
  onSceneCreated?: (objects: SceneObjects) => React.ReactNode;
  className?: string;
}

export interface InteractiveObjectsProps extends SceneObjects {
  onCleanup: (cleanupFn: () => void) => void;
}
