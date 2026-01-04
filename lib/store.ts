import { create } from 'zustand';

interface CartState {
    isOpen: boolean;
    items: string[]; // Store product IDs
    toggleCart: () => void;
    addItem: (id: string) => void;
    removeItem: (id: string) => void;
}

export const useStore = create<CartState>((set) => ({
    isOpen: false,
    items: [],
    toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),
    addItem: (id) => set((state) => ({ items: [...state.items, id] })),
    removeItem: (id) => set((state) => ({ items: state.items.filter((item) => item !== id) })),
}));

interface UIState {
    cursorVariant: 'default' | 'link' | 'text' | 'view';
    setCursorVariant: (variant: 'default' | 'link' | 'text' | 'view') => void;
}

export const useUIStore = create<UIState>((set) => ({
    cursorVariant: 'default',
    setCursorVariant: (variant) => set({ cursorVariant: variant }),
}));
