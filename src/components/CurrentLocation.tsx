import type { Position } from '@/types/geo.type';
import { Circle } from 'react-kakao-maps-sdk';

type Props = {
  center: Position;
  radius: number;
};
export default function CurrentLocation({ center, radius }: Props) {
  return <Circle center={center} radius={radius} strokeOpacity={0} fillColor='#268FFF' fillOpacity={0.7} />;
}
