import { useCallback, useState } from 'react';
import { wasteTypes } from '@/constants';
import type { WasteType } from '@/types';

export function useWasteTypesViewModel() {
  const [activeId, setActiveId] = useState<WasteType['id']>(wasteTypes[0].id);
  const activeIndex = Math.max(
    0,
    wasteTypes.findIndex((t) => t.id === activeId),
  );
  const active = wasteTypes[activeIndex];

  const setActive = useCallback((id: WasteType['id']) => setActiveId(id), []);

  return {
    types: wasteTypes,
    active,
    activeIndex,
    setActive,
  };
}
