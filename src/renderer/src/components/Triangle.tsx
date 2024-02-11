import React, { useState } from 'react';

interface PowerTriangleProps {
  initialPower: number;
}

const PowerTriangle: React.FC<PowerTriangleProps> = ({ initialPower }) => {
  const triangleSize = 150; // Taille du triangle

  const [referencePoint, setReferencePoint] = useState({ x: triangleSize / 2, y: triangleSize / 2 });
  const [isDragging, setIsDragging] = useState(false);
  const [powerA, setPowerA] = useState(100 / 3);
  const [powerB, setPowerB] = useState(100 / 3);
  const [powerC, setPowerC] = useState(100 / 3);

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (event: React.MouseEvent<SVGElement>) => {
    if (isDragging) {
      const { offsetX, offsetY } = event.nativeEvent;

      const barycentric = calculateBarycentricCoordinates(offsetX, offsetY);

      if (barycentric.x >= 0 && barycentric.y >= 0 && barycentric.z >= 0) {
        setReferencePoint({ x: offsetX, y: offsetY });

        const distanceA = calculateDistance(offsetX, offsetY, 0, 0);
        const distanceB = calculateDistance(offsetX, offsetY, triangleSize, 0);
        const distanceC = calculateDistance(offsetX, offsetY, triangleSize / 2, triangleSize);

        const totalDistance = distanceA + distanceB + distanceC;

        setPowerA((100 / totalDistance) * distanceB);
        setPowerB((100 / totalDistance) * distanceA);
        setPowerC((100 / totalDistance) * distanceC);
      }
    }
  };

  const calculateDistance = (x1: number, y1: number, x2: number, y2: number) => {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  };

  const calculateBarycentricCoordinates = (x: number, y: number) => {
    const denominator = (
      (triangleSize / 2) * triangleSize - 0 * triangleSize
    ) * ((triangleSize / 2) - triangleSize) - (triangleSize - 0) * ((triangleSize / 2) * triangleSize - 0 * (triangleSize / 2));
    
    const xBarycentric = ((x - 0) * ((triangleSize / 2) - triangleSize) - (triangleSize / 2 - 0) * (y - triangleSize)) / denominator;
    const yBarycentric = (((triangleSize / 2) * triangleSize - 0 * (triangleSize / 2)) * (y - triangleSize) - (triangleSize - 0) * (x - 0)) / denominator;
    const zBarycentric = 1 - xBarycentric - yBarycentric;

    return { x: xBarycentric, y: yBarycentric, z: zBarycentric };
  };

  return (
    <svg
      width={triangleSize}
      height={triangleSize}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <polygon points={`0,0 ${triangleSize},0 ${triangleSize / 2},${triangleSize}`} fill="#ccc" />
      <circle
        cx={referencePoint.x}
        cy={referencePoint.y}
        r={5}
        fill="red"
        onMouseDown={handleMouseDown}
        style={{ cursor: 'pointer' }}
      />
      <text x={referencePoint.x} y={referencePoint.y - 10} fontSize="12" fill="black" textAnchor="middle">
        Référence
      </text>
      <text x={5} y={15} fontSize="12" fill="black">
        Puissance A: {powerA.toFixed(2)}
      </text>
      <text x={triangleSize - 5} y={15} fontSize="12" fill="black" textAnchor="end">
        Puissance B: {powerB.toFixed(2)}
      </text>
      <text x={triangleSize / 2} y={triangleSize} fontSize="12" fill="black" textAnchor="middle">
        Puissance C: {powerC.toFixed(2)}
      </text>
    </svg>
  );
};

export default PowerTriangle;
