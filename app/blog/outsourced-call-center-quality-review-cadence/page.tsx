import type { Metadata } from 'next';
import { getAug19Metadata, renderAug19Article } from '../../aug19-content';
export const metadata: Metadata = getAug19Metadata('blog','outsourced-call-center-quality-review-cadence');
export default function Page(){return renderAug19Article('blog','outsourced-call-center-quality-review-cadence')}
