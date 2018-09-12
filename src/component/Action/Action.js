let nextItem = 0;

export const addItem = text => ({
    type: 'ADD_ITEM',
    id: nextItem++,
    text
});

export const removeItem = id => ({
    type: 'REMOVE_ITEM',
    id
});

export const show = () => ({
    type: 'SHOW',
    display: '',
});

export const hide = () => ({
    type: 'HIDE',
    display: 'none',
});