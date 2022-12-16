import { txClient, queryClient, MissingWalletError , registry} from './module'

import { Cron } from "./module/types/dyson/cron"
import { ScheduledRun } from "./module/types/dyson/scheduled_run"
import { Script } from "./module/types/dyson/script"
import { Storage } from "./module/types/dyson/storage"
import { MsgUpdateScheduledRunResponse } from "./module/types/dyson/tx"
import { MsgDeleteScheduledRunResponse } from "./module/types/dyson/tx"


export { Cron, ScheduledRun, Script, Storage, MsgUpdateScheduledRunResponse, MsgDeleteScheduledRunResponse };

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
				ScheduledRun: {},
				ScheduledRunAll: {},
				Storage: {},
				StorageAll: {},
				Script: {},
				Schema: {},
				Wsgi: {},
				QueryScript: {},
				ScriptAll: {},
				PrefixStorage: {},
				ScheduledGasPriceAndFeeAtBlock: {},
				Cron: {},
				CronAll: {},
				
				_Structure: {
						Cron: getStructure(Cron.fromPartial({})),
						ScheduledRun: getStructure(ScheduledRun.fromPartial({})),
						Script: getStructure(Script.fromPartial({})),
						Storage: getStructure(Storage.fromPartial({})),
						MsgUpdateScheduledRunResponse: getStructure(MsgUpdateScheduledRunResponse.fromPartial({})),
						MsgDeleteScheduledRunResponse: getStructure(MsgDeleteScheduledRunResponse.fromPartial({})),
						
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
				getScheduledRun: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.ScheduledRun[JSON.stringify(params)] ?? {}
		},
				getScheduledRunAll: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.ScheduledRunAll[JSON.stringify(params)] ?? {}
		},
				getStorage: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.Storage[JSON.stringify(params)] ?? {}
		},
				getStorageAll: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.StorageAll[JSON.stringify(params)] ?? {}
		},
				getScript: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.Script[JSON.stringify(params)] ?? {}
		},
				getSchema: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.Schema[JSON.stringify(params)] ?? {}
		},
				getWsgi: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.Wsgi[JSON.stringify(params)] ?? {}
		},
				getQueryScript: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.QueryScript[JSON.stringify(params)] ?? {}
		},
				getScriptAll: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.ScriptAll[JSON.stringify(params)] ?? {}
		},
				getPrefixStorage: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.PrefixStorage[JSON.stringify(params)] ?? {}
		},
				getScheduledGasPriceAndFeeAtBlock: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.ScheduledGasPriceAndFeeAtBlock[JSON.stringify(params)] ?? {}
		},
				getCron: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.Cron[JSON.stringify(params)] ?? {}
		},
				getCronAll: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.CronAll[JSON.stringify(params)] ?? {}
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
			console.log('Vuex module: dyson initialized!')
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
		
		
		
		 		
		
		
		async QueryScheduledRun({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryScheduledRun(query)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await queryClient.queryScheduledRun({...query, 'pagination.key':(<any> value).pagination.next_key})).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'ScheduledRun', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryScheduledRun', payload: { options: { all }, params: {...key},query }})
				return getters['getScheduledRun']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryScheduledRun API Node Unavailable. Could not perform query: ' + e.error.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryScheduledRunAll({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryScheduledRunAll(query)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await queryClient.queryScheduledRunAll({...query, 'pagination.key':(<any> value).pagination.next_key})).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'ScheduledRunAll', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryScheduledRunAll', payload: { options: { all }, params: {...key},query }})
				return getters['getScheduledRunAll']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryScheduledRunAll API Node Unavailable. Could not perform query: ' + e.error.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryStorage({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryStorage(query)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await queryClient.queryStorage({...query, 'pagination.key':(<any> value).pagination.next_key})).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'Storage', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryStorage', payload: { options: { all }, params: {...key},query }})
				return getters['getStorage']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryStorage API Node Unavailable. Could not perform query: ' + e.error.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryStorageAll({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryStorageAll(query)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await queryClient.queryStorageAll({...query, 'pagination.key':(<any> value).pagination.next_key})).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'StorageAll', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryStorageAll', payload: { options: { all }, params: {...key},query }})
				return getters['getStorageAll']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryStorageAll API Node Unavailable. Could not perform query: ' + e.error.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryScript({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryScript(query)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await queryClient.queryScript({...query, 'pagination.key':(<any> value).pagination.next_key})).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'Script', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryScript', payload: { options: { all }, params: {...key},query }})
				return getters['getScript']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryScript API Node Unavailable. Could not perform query: ' + e.error.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QuerySchema({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.querySchema(query)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await queryClient.querySchema({...query, 'pagination.key':(<any> value).pagination.next_key})).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'Schema', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QuerySchema', payload: { options: { all }, params: {...key},query }})
				return getters['getSchema']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QuerySchema API Node Unavailable. Could not perform query: ' + e.error.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryWsgi({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryWsgi(query)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await queryClient.queryWsgi({...query, 'pagination.key':(<any> value).pagination.next_key})).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'Wsgi', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryWsgi', payload: { options: { all }, params: {...key},query }})
				return getters['getWsgi']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryWsgi API Node Unavailable. Could not perform query: ' + e.error.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryQueryScript({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryQueryScript(query)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await queryClient.queryQueryScript({...query, 'pagination.key':(<any> value).pagination.next_key})).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'QueryScript', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryQueryScript', payload: { options: { all }, params: {...key},query }})
				return getters['getQueryScript']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryQueryScript API Node Unavailable. Could not perform query: ' + e.error.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryScriptAll({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryScriptAll(query)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await queryClient.queryScriptAll({...query, 'pagination.key':(<any> value).pagination.next_key})).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'ScriptAll', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryScriptAll', payload: { options: { all }, params: {...key},query }})
				return getters['getScriptAll']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryScriptAll API Node Unavailable. Could not perform query: ' + e.error.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryPrefixStorage({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryPrefixStorage(query)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await queryClient.queryPrefixStorage({...query, 'pagination.key':(<any> value).pagination.next_key})).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'PrefixStorage', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryPrefixStorage', payload: { options: { all }, params: {...key},query }})
				return getters['getPrefixStorage']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryPrefixStorage API Node Unavailable. Could not perform query: ' + e.error.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryScheduledGasPriceAndFeeAtBlock({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryScheduledGasPriceAndFeeAtBlock(query)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await queryClient.queryScheduledGasPriceAndFeeAtBlock({...query, 'pagination.key':(<any> value).pagination.next_key})).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'ScheduledGasPriceAndFeeAtBlock', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryScheduledGasPriceAndFeeAtBlock', payload: { options: { all }, params: {...key},query }})
				return getters['getScheduledGasPriceAndFeeAtBlock']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryScheduledGasPriceAndFeeAtBlock API Node Unavailable. Could not perform query: ' + e.error.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryCron({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryCron(query)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await queryClient.queryCron({...query, 'pagination.key':(<any> value).pagination.next_key})).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'Cron', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryCron', payload: { options: { all }, params: {...key},query }})
				return getters['getCron']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryCron API Node Unavailable. Could not perform query: ' + e.error.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryCronAll({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryCronAll(query)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await queryClient.queryCronAll({...query, 'pagination.key':(<any> value).pagination.next_key})).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'CronAll', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryCronAll', payload: { options: { all }, params: {...key},query }})
				return getters['getCronAll']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryCronAll API Node Unavailable. Could not perform query: ' + e.error.message)
				
			}
		},
		
		
		async sendMsgBetterSubmitProposal({ rootGetters }, { value, fee = [], memo = '', gas = "200000"  }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgBetterSubmitProposal(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: gas}, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgBetterSubmitProposal:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgBetterSubmitProposal:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgUpdateScheduledRun({ rootGetters }, { value, fee = [], memo = '', gas = "200000"  }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgUpdateScheduledRun(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: gas}, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgUpdateScheduledRun:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgUpdateScheduledRun:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgCreateStorage({ rootGetters }, { value, fee = [], memo = '', gas = "200000"  }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgCreateStorage(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: gas}, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgCreateStorage:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgCreateStorage:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgUpdateStorage({ rootGetters }, { value, fee = [], memo = '', gas = "200000"  }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgUpdateStorage(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: gas}, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgUpdateStorage:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgUpdateStorage:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgDeleteScript({ rootGetters }, { value, fee = [], memo = '', gas = "200000"  }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgDeleteScript(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: gas}, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgDeleteScript:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgDeleteScript:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgDeleteStorage({ rootGetters }, { value, fee = [], memo = '', gas = "200000"  }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgDeleteStorage(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: gas}, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgDeleteStorage:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgDeleteStorage:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgCreateScript({ rootGetters }, { value, fee = [], memo = '', gas = "200000"  }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgCreateScript(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: gas}, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgCreateScript:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgCreateScript:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgCreateScheduledRun({ rootGetters }, { value, fee = [], memo = '', gas = "200000"  }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgCreateScheduledRun(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: gas}, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgCreateScheduledRun:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgCreateScheduledRun:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgUpdateScript({ rootGetters }, { value, fee = [], memo = '', gas = "200000"  }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgUpdateScript(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: gas}, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgUpdateScript:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgUpdateScript:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgRun({ rootGetters }, { value, fee = [], memo = '', gas = "200000"  }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgRun(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: gas}, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgRun:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgRun:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgDeleteScheduledRun({ rootGetters }, { value, fee = [], memo = '', gas = "200000"  }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgDeleteScheduledRun(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: gas}, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgDeleteScheduledRun:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgDeleteScheduledRun:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		
		async MsgBetterSubmitProposal({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgBetterSubmitProposal(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgBetterSubmitProposal:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgBetterSubmitProposal:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgUpdateScheduledRun({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgUpdateScheduledRun(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgUpdateScheduledRun:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgUpdateScheduledRun:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgCreateStorage({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgCreateStorage(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgCreateStorage:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgCreateStorage:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgUpdateStorage({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgUpdateStorage(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgUpdateStorage:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgUpdateStorage:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgDeleteScript({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgDeleteScript(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgDeleteScript:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgDeleteScript:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgDeleteStorage({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgDeleteStorage(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgDeleteStorage:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgDeleteStorage:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgCreateScript({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgCreateScript(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgCreateScript:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgCreateScript:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgCreateScheduledRun({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgCreateScheduledRun(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgCreateScheduledRun:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgCreateScheduledRun:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgUpdateScript({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgUpdateScript(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgUpdateScript:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgUpdateScript:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgRun({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgRun(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgRun:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgRun:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgDeleteScheduledRun({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgDeleteScheduledRun(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgDeleteScheduledRun:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgDeleteScheduledRun:Create Could not create message: ' + e.message)
				}
			}
		},
		
	}
}
