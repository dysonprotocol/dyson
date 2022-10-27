import { txClient, queryClient, MissingWalletError , registry} from './module'

import { Expirations } from "./module/types/names/expirations"
import { Name } from "./module/types/names/name"
import { Params } from "./module/types/names/params"


export { Expirations, Name, Params };

async function initTxClient(vuexGetters) {
	return await txClient(vuexGetters['common/wallet/signer'], {
		addr: vuexGetters['common/env/apiTendermint']
	})
}

async function initQueryClient(vuexGetters) {
	return await queryClient({
		addr: vuexGetters['common/env/apiCosmos']
	})
}

function mergeResults(value, next_values) {
	for (let prop of Object.keys(next_values)) {
		if (Array.isArray(next_values[prop])) {
			value[prop]=[...value[prop], ...next_values[prop]]
		}else{
			value[prop]=next_values[prop]
		}
	}
	return value
}

function getStructure(template) {
	let structure = { fields: [] }
	for (const [key, value] of Object.entries(template)) {
		let field: any = {}
		field.name = key
		field.type = typeof value
		structure.fields.push(field)
	}
	return structure
}

const getDefaultState = () => {
	return {
				Params: {},
				Name: {},
				NameAll: {},
				Resolve: {},
				GenerateCommit: {},
				Expirations: {},
				ExpirationsAll: {},
				
				_Structure: {
						Expirations: getStructure(Expirations.fromPartial({})),
						Name: getStructure(Name.fromPartial({})),
						Params: getStructure(Params.fromPartial({})),
						
		},
		_Registry: registry,
		_Subscriptions: new Set(),
	}
}

// initial state
const state = getDefaultState()

export default {
	namespaced: true,
	state,
	mutations: {
		RESET_STATE(state) {
			Object.assign(state, getDefaultState())
		},
		QUERY(state, { query, key, value }) {
			state[query][JSON.stringify(key)] = value
		},
		SUBSCRIBE(state, subscription) {
			state._Subscriptions.add(JSON.stringify(subscription))
		},
		UNSUBSCRIBE(state, subscription) {
			state._Subscriptions.delete(JSON.stringify(subscription))
		}
	},
	getters: {
				getParams: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.Params[JSON.stringify(params)] ?? {}
		},
				getName: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.Name[JSON.stringify(params)] ?? {}
		},
				getNameAll: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.NameAll[JSON.stringify(params)] ?? {}
		},
				getResolve: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.Resolve[JSON.stringify(params)] ?? {}
		},
				getGenerateCommit: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.GenerateCommit[JSON.stringify(params)] ?? {}
		},
				getExpirations: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.Expirations[JSON.stringify(params)] ?? {}
		},
				getExpirationsAll: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.ExpirationsAll[JSON.stringify(params)] ?? {}
		},
				
		getTypeStructure: (state) => (type) => {
			return state._Structure[type].fields
		},
		getRegistry: (state) => {
			return state._Registry
		}
	},
	actions: {
		init({ dispatch, rootGetters }) {
			console.log('Vuex module: names initialized!')
			if (rootGetters['common/env/client']) {
				rootGetters['common/env/client'].on('newblock', () => {
					dispatch('StoreUpdate')
				})
			}
		},
		resetState({ commit }) {
			commit('RESET_STATE')
		},
		unsubscribe({ commit }, subscription) {
			commit('UNSUBSCRIBE', subscription)
		},
		async StoreUpdate({ state, dispatch }) {
			state._Subscriptions.forEach(async (subscription) => {
				try {
					const sub=JSON.parse(subscription)
					await dispatch(sub.action, sub.payload)
				}catch(e) {
					throw new Error('Subscriptions: ' + e.message)
				}
			})
		},
		
		
		
		 		
		
		
		async QueryParams({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryParams()).data
				
					
				commit('QUERY', { query: 'Params', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryParams', payload: { options: { all }, params: {...key},query }})
				return getters['getParams']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryParams API Node Unavailable. Could not perform query: ' + e.error.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryName({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryName(query)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await queryClient.queryName({...query, 'pagination.key':(<any> value).pagination.next_key})).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'Name', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryName', payload: { options: { all }, params: {...key},query }})
				return getters['getName']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryName API Node Unavailable. Could not perform query: ' + e.error.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryNameAll({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryNameAll(query)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await queryClient.queryNameAll({...query, 'pagination.key':(<any> value).pagination.next_key})).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'NameAll', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryNameAll', payload: { options: { all }, params: {...key},query }})
				return getters['getNameAll']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryNameAll API Node Unavailable. Could not perform query: ' + e.error.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryResolve({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryResolve(query)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await queryClient.queryResolve({...query, 'pagination.key':(<any> value).pagination.next_key})).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'Resolve', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryResolve', payload: { options: { all }, params: {...key},query }})
				return getters['getResolve']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryResolve API Node Unavailable. Could not perform query: ' + e.error.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryGenerateCommit({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryGenerateCommit(query)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await queryClient.queryGenerateCommit({...query, 'pagination.key':(<any> value).pagination.next_key})).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'GenerateCommit', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryGenerateCommit', payload: { options: { all }, params: {...key},query }})
				return getters['getGenerateCommit']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryGenerateCommit API Node Unavailable. Could not perform query: ' + e.error.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryExpirations({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryExpirations( key.blockHeight)).data
				
					
				commit('QUERY', { query: 'Expirations', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryExpirations', payload: { options: { all }, params: {...key},query }})
				return getters['getExpirations']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryExpirations API Node Unavailable. Could not perform query: ' + e.error.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryExpirationsAll({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryExpirationsAll(query)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await queryClient.queryExpirationsAll({...query, 'pagination.key':(<any> value).pagination.next_key})).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'ExpirationsAll', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryExpirationsAll', payload: { options: { all }, params: {...key},query }})
				return getters['getExpirationsAll']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryExpirationsAll API Node Unavailable. Could not perform query: ' + e.error.message)
				
			}
		},
		
		
		async sendMsgSetPriceAndExtend({ rootGetters }, { value, fee = [], memo = '', gas = "200000"  }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgSetPriceAndExtend(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: gas}, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgSetPriceAndExtend:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgSetPriceAndExtend:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgBurnCoins({ rootGetters }, { value, fee = [], memo = '', gas = "200000"  }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgBurnCoins(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: gas}, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgBurnCoins:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgBurnCoins:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgMintCoins({ rootGetters }, { value, fee = [], memo = '', gas = "200000"  }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgMintCoins(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: gas}, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgMintCoins:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgMintCoins:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgUpdateName({ rootGetters }, { value, fee = [], memo = '', gas = "200000"  }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgUpdateName(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: gas}, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgUpdateName:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgUpdateName:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgBuy({ rootGetters }, { value, fee = [], memo = '', gas = "200000"  }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgBuy(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: gas}, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgBuy:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgBuy:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgDeleteName({ rootGetters }, { value, fee = [], memo = '', gas = "200000"  }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgDeleteName(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: gas}, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgDeleteName:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgDeleteName:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgRegister({ rootGetters }, { value, fee = [], memo = '', gas = "200000"  }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgRegister(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: gas}, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgRegister:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgRegister:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgReveal({ rootGetters }, { value, fee = [], memo = '', gas = "200000"  }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgReveal(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: gas}, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgReveal:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgReveal:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgAccept({ rootGetters }, { value, fee = [], memo = '', gas = "200000"  }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgAccept(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: gas}, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgAccept:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgAccept:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgOfferTo({ rootGetters }, { value, fee = [], memo = '', gas = "200000"  }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgOfferTo(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: gas}, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgOfferTo:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgOfferTo:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		
		async MsgSetPriceAndExtend({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgSetPriceAndExtend(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgSetPriceAndExtend:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgSetPriceAndExtend:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgBurnCoins({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgBurnCoins(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgBurnCoins:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgBurnCoins:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgMintCoins({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgMintCoins(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgMintCoins:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgMintCoins:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgUpdateName({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgUpdateName(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgUpdateName:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgUpdateName:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgBuy({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgBuy(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgBuy:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgBuy:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgDeleteName({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgDeleteName(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgDeleteName:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgDeleteName:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgRegister({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgRegister(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgRegister:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgRegister:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgReveal({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgReveal(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgReveal:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgReveal:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgAccept({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgAccept(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgAccept:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgAccept:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgOfferTo({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgOfferTo(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgOfferTo:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgOfferTo:Create Could not create message: ' + e.message)
				}
			}
		},
		
	}
}
