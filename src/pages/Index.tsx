import { HeadlessIndex } from '@/components/headless/HeadlessIndex';
import { IndexUI } from '@/pages/ui/IndexUI';
import { OrganizationStructuredData } from '@/components/StructuredData';

/**
 * ROUTE COMPONENT - Index
 * 
 * Este componente solo conecta HeadlessIndex con IndexUI.
 * Toda la lógica está en HeadlessIndex y la presentación en IndexUI.
 */

const Index = () => {
  return (
    <>
      <OrganizationStructuredData />
      <HeadlessIndex>
        {(logic) => <IndexUI logic={logic} />}
      </HeadlessIndex>
    </>
  );
};

export default Index;