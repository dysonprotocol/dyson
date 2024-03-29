import { txClient, queryClient, MissingWalletError , registry} from './module'

import { EventSend } from "./module/types/cosmos/nft/v1beta1/event"
import { EventMint } from "./module/types/cosmos/nft/v1beta1/event"
import { EventBurn } from "./module/types/cosmos/nft/v1beta1/event"
import { Entry } from "./module/types/cosmos/nft/v1beta1/genesis"
import { Class } from "./module/types/cosmos/nft/v1beta1/nft"
import { NFT } from "./module/types/cosmos/nft/v1beta1/nft"


export { EventSend, EventMint, EventBurn, Entry, Class, NFT };

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
				Balance: {},
				Owner: {},
				Supply: {},
				NFTs: {},
				NFT: {},
				Class: {},
				Classes: {},
				
				_Structure: {
						EventSend: getStructure(EventSend.fromPartial({})),
						EventMint: getStructure(EventMint.fromPartial({})),
						EventBurn: getStructure(EventBurn.fromPartial({})),
						Entry: getStructure(Entry.fromPartial({})),
						Class: getStructure(Class.fromPartial({})),
						NFT: getStructure(NFT.fromPartial({})),
						
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
				getBalance: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.Balance[JSON.stringify(params)] ?? {}
		},
				getOwner: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.Owner[JSON.stringify(params)] ?? {}
		},
				getSupply: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.Supply[JSON.stringify(params)] ?? {}
		},
				getNFTs: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.NFTs[JSON.stringify(params)] ?? {}
		},
				getNFT: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.NFT[JSON.stringify(params)] ?? {}
		},
				getClass: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.Class[JSON.stringify(params)] ?? {}
		},
				getClasses: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.Classes[JSON.stringify(params)] ?? {}
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
			console.log('Vuex module: cosmos.nft.v1beta1 initialized!')
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
		
		
		
		 		
		
		
		async QueryBalance({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryBalance( key.owner,  key.class_id)).data
				
					
				commit('QUERY', { query: 'Balance', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryBalance', payload: { options: { all }, params: {...key},query }})
				return getters['getBalance']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryBalance API Node Unavailable. Could not perform query: ' +  (e.error?.message || e.message))
			}
		},
		
		
		
		
		 		
		
		
		async QueryOwner({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryOwner( key.class_id,  key.id)).data
				
					
				commit('QUERY', { query: 'Owner', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryOwner', payload: { options: { all }, params: {...key},query }})
				return getters['getOwner']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryOwner API Node Unavailable. Could not perform query: ' +  (e.error?.message || e.message))
			}
		},
		
		
		
		
		 		
		
		
		async QuerySupply({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.querySupply( key.class_id)).data
				
					
				commit('QUERY', { query: 'Supply', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QuerySupply', payload: { options: { all }, params: {...key},query }})
				return getters['getSupply']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QuerySupply API Node Unavailable. Could not perform query: ' +  (e.error?.message || e.message))
			}
		},
		
		
		
		
		 		
		
		
		async QueryNFTs({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryNFTs(query)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await queryClient.queryNFTs({...query, 'pagination.key':(<any> value).pagination.next_key})).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'NFTs', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryNFTs', payload: { options: { all }, params: {...key},query }})
				return getters['getNFTs']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryNFTs API Node Unavailable. Could not perform query: ' +  (e.error?.message || e.message))
			}
		},
		
		
		
		
		 		
		
		
		async QueryNFT({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryNFT( key.class_id,  key.id)).data
				
					
				commit('QUERY', { query: 'NFT', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryNFT', payload: { options: { all }, params: {...key},query }})
				return getters['getNFT']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryNFT API Node Unavailable. Could not perform query: ' +  (e.error?.message || e.message))
			}
		},
		
		
		
		
		 		
		
		
		async QueryClass({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryClass( key.class_id)).data
				
					
				commit('QUERY', { query: 'Class', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryClass', payload: { options: { all }, params: {...key},query }})
				return getters['getClass']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryClass API Node Unavailable. Could not perform query: ' +  (e.error?.message || e.message))
			}
		},
		
		
		
		
		 		
		
		
		async QueryClasses({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryClasses(query)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await queryClient.queryClasses({...query, 'pagination.key':(<any> value).pagination.next_key})).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'Classes', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryClasses', payload: { options: { all }, params: {...key},query }})
				return getters['getClasses']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryClasses API Node Unavailable. Could not perform query: ' +  (e.error?.message || e.message))
			}
		},
		
		
		async sendMsgSend({ rootGetters }, { value, fee = [], memo = '', gas = "200000"  }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgSend(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: gas}, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgSend:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgSend:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		
		async MsgSend({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgSend(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgSend:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgSend:Create Could not create message: ' + e.message)
				}
			}
		},
		
	}
}
