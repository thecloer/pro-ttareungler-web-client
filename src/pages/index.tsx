import { useEffect, useState } from 'react';
import { Map } from 'react-kakao-maps-sdk';
import { UOS_POSITION } from '@/config/default';
import useWatchPosition from '@/hooks/useWatchPosition';
import CurrentLocation from '@/components/CurrentLocation';

export default function Home() {
  const currentPosition = useWatchPosition();
  const [currentLocation, setCurrentLocation] = useState({ coords: UOS_POSITION, radius: 6 });

  useEffect(() => {
    if (currentPosition.loaded) {
      setCurrentLocation((prevLoc) => ({ ...prevLoc, coords: currentPosition.coords }));
    }
  }, [currentPosition]);

  const onMapZoomChanged = (target: kakao.maps.Map) =>
    setCurrentLocation((prevLoc) => ({ ...prevLoc, radius: Math.max(1, target.getLevel() - 1) * 3 }));

  return (
    <main className='w-full mx-auto grow'>
      <Map center={currentLocation.coords} onZoomChanged={onMapZoomChanged} className='w-full h-full'>
        <CurrentLocation center={currentLocation.coords} radius={currentLocation.radius} />
      </Map>
    </main>
  );
}
