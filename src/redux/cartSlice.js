import { createSlice } from "@reduxjs/toolkit"


export const cartSlice = createSlice({
    name: "cart", //key       
    initialState: {
        products: [
            {id:1, name:'burger 1', amount:1, price:123,description: "Lorem ipsum lorem ipsum ipsum", image: 324},
            {id:2, name:'burger 2', amount:1, price:123,description: "Lorem ipsum lorem ipsum ipsum", image: 324},
            {id:3, name:'burger 3', amount:1, price:123,description: "Lorem ipsum lorem ipsum ipsum", image: 324}
        ],
    },
    reducers: {  // update etmek için. 
        increment: (state, action) => {
            const { id } = action.payload;
            const product = state.products.find(product => product.id === id);
            if (product) {
                product.amount += 1;
            }
        },
        decrement: (state, action) => {
            const { id } = action.payload;
            const product = state.products.find(product => product.id === id);
            if (product) {
                if (product.amount > 1) {
                    product.amount -= 1;
                } else if (product.amount === 1) {
                    const removeAction = removeProduct({ id: product.id }); 
                    cartSlice.caseReducers.removeProduct(state, removeAction); 

                }

            }
        },
        removeProduct: (state, action) => {
            const { id } = action.payload;
           /*  const removedProduct = state.products.find(product => product.id === id);
            state.products = state.products.filter(product => product.id !== id); */
        },
    }
})
export const { increment, decrement, removeProduct } = cartSlice.actions      // fonksiyonları dışarı aktarır
export default cartSlice.reducer