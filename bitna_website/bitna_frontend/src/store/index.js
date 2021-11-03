import { createStore } from 'vuex'

const store = createStore({
    state: {
        datasets: [], 
        factoryReset: true, 
        isLoading: false
    }, 
    mutations: {
        addDataset(state, dataset){
            state.datasets.push(dataset)
        }, 
        configureModel(state, confirmation){
            if(confirmation)
                state.factoryReset = false
        }, 
        modelReset(state){
            state.factoryReset = true
        }
    }, 
    actions: {}, 
    getters: {},
    modules: {}, 
})

export default store