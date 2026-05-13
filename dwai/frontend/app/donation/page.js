import DonationSection from '../../components/sections/DonationSection';
import ImpactSection from '../../components/sections/ImpactSection';

export const metadata = {
  title: 'Donate | DWAI - Sexual & Reproductive Health Rights',
  description:
    'Support DWAI in advancing Sexual and Reproductive Health Rights (SRHR) for Deaf women and girls in Nigeria.',
};

export default function Donate() {
  return (
    <main>
      <DonationSection />
      <ImpactSection />
    </main>
  );
}
