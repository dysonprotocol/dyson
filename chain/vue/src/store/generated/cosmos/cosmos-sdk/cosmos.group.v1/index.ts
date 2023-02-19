import { txClient, queryClient, MissingWalletError , registry} from './module'

import { EventCreateGroup } from "./module/types/cosmos/group/v1/events"
import { EventUpdateGroup } from "./module/types/cosmos/group/v1/events"
import { EventCreateGroupPolicy } from "./module/types/cosmos/group/v1/events"
import { EventUpdateGroupPolicy } from "./module/types/cosmos/group/v1/events"
import { EventSubmitProposal } from "./module/types/cosmos/group/v1/events"
import { EventWithdrawProposal } from "./module/types/cosmos/group/v1/events"
import { EventVote } from "./module/types/cosmos/group/v1/events"
import { EventExec } from "./module/types/cosmos/group/v1/events"
import { EventLeaveGroup } from "./module/types/cosmos/group/v1/events"
import { Member } from "./module/types/cosmos/group/v1/types"
import { MemberRequest } from "./module/types/cosmos/group/v1/types"
import { ThresholdDecisionPolicy } from "./module/types/cosmos/group/v1/types"
import { PercentageDecisionPolicy } from "./module/types/cosmos/group/v1/types"
import { DecisionPolicyWindows } from "./module/types/cosmos/group/v1/types"
import { GroupInfo } from "./module/types/cosmos/group/v1/types"
import { GroupMember } from "./module/types/cosmos/group/v1/types"
import { GroupPolicyInfo } from "./module/types/cosmos/group/v1/types"
import { Proposal } from "./module/types/cosmos/group/v1/types"
import { TallyResult } from "./module/types/cosmos/group/v1/types"
import { Vote } from "./module/types/cosmos/group/v1/types"


export { EventCreateGroup, EventUpdateGroup, EventCreateGroupPolicy, EventUpdateGroupPolicy, EventSubmitProposal, EventWithdrawProposal, EventVote, EventExec, EventLeaveGroup, Member, MemberRequest, ThresholdDecisionPolicy, PercentageDecisionPolicy, DecisionPolicyWindows, GroupInfo, GroupMember, GroupPolicyInfo, Proposal, TallyResult, Vote };

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
				GroupInfo: {},
				GroupPolicyInfo: {},
				GroupMembers: {},
				GroupsByAdmin: {},
				GroupPoliciesByGroup: {},
				GroupPoliciesByAdmin: {},
				Proposal: {},
				ProposalsByGroupPolicy: {},
				VoteByProposalVoter: {},
				VotesByProposal: {},
				VotesByVoter: {},
				GroupsByMember: {},
				TallyResult: {},
				
				_Structure: {
						EventCreateGroup: getStructure(EventCreateGroup.fromPartial({})),
						EventUpdateGroup: getStructure(EventUpdateGroup.fromPartial({})),
						EventCreateGroupPolicy: getStructure(EventCreateGroupPolicy.fromPartial({})),
						EventUpdateGroupPolicy: getStructure(EventUpdateGroupPolicy.fromPartial({})),
						EventSubmitProposal: getStructure(EventSubmitProposal.fromPartial({})),
						EventWithdrawProposal: getStructure(EventWithdrawProposal.fromPartial({})),
						EventVote: getStructure(EventVote.fromPartial({})),
						EventExec: getStructure(EventExec.fromPartial({})),
						EventLeaveGroup: getStructure(EventLeaveGroup.fromPartial({})),
						Member: getStructure(Member.fromPartial({})),
						MemberRequest: getStructure(MemberRequest.fromPartial({})),
						ThresholdDecisionPolicy: getStructure(ThresholdDecisionPolicy.fromPartial({})),
						PercentageDecisionPolicy: getStructure(PercentageDecisionPolicy.fromPartial({})),
						DecisionPolicyWindows: getStructure(DecisionPolicyWindows.fromPartial({})),
						GroupInfo: getStructure(GroupInfo.fromPartial({})),
						GroupMember: getStructure(GroupMember.fromPartial({})),
						GroupPolicyInfo: getStructure(GroupPolicyInfo.fromPartial({})),
						Proposal: getStructure(Proposal.fromPartial({})),
						TallyResult: getStructure(TallyResult.fromPartial({})),
						Vote: getStructure(Vote.fromPartial({})),
						
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
				getGroupInfo: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.GroupInfo[JSON.stringify(params)] ?? {}
		},
				getGroupPolicyInfo: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.GroupPolicyInfo[JSON.stringify(params)] ?? {}
		},
				getGroupMembers: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.GroupMembers[JSON.stringify(params)] ?? {}
		},
				getGroupsByAdmin: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.GroupsByAdmin[JSON.stringify(params)] ?? {}
		},
				getGroupPoliciesByGroup: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.GroupPoliciesByGroup[JSON.stringify(params)] ?? {}
		},
				getGroupPoliciesByAdmin: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.GroupPoliciesByAdmin[JSON.stringify(params)] ?? {}
		},
				getProposal: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.Proposal[JSON.stringify(params)] ?? {}
		},
				getProposalsByGroupPolicy: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.ProposalsByGroupPolicy[JSON.stringify(params)] ?? {}
		},
				getVoteByProposalVoter: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.VoteByProposalVoter[JSON.stringify(params)] ?? {}
		},
				getVotesByProposal: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.VotesByProposal[JSON.stringify(params)] ?? {}
		},
				getVotesByVoter: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.VotesByVoter[JSON.stringify(params)] ?? {}
		},
				getGroupsByMember: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.GroupsByMember[JSON.stringify(params)] ?? {}
		},
				getTallyResult: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.TallyResult[JSON.stringify(params)] ?? {}
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
			console.log('Vuex module: cosmos.group.v1 initialized!')
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
		
		
		
		 		
		
		
		async QueryGroupInfo({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryGroupInfo( key.group_id)).data
				
					
				commit('QUERY', { query: 'GroupInfo', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryGroupInfo', payload: { options: { all }, params: {...key},query }})
				return getters['getGroupInfo']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryGroupInfo API Node Unavailable. Could not perform query: ' + e.error.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryGroupPolicyInfo({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryGroupPolicyInfo( key.address)).data
				
					
				commit('QUERY', { query: 'GroupPolicyInfo', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryGroupPolicyInfo', payload: { options: { all }, params: {...key},query }})
				return getters['getGroupPolicyInfo']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryGroupPolicyInfo API Node Unavailable. Could not perform query: ' + e.error.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryGroupMembers({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryGroupMembers( key.group_id, query)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await queryClient.queryGroupMembers( key.group_id, {...query, 'pagination.key':(<any> value).pagination.next_key})).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'GroupMembers', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryGroupMembers', payload: { options: { all }, params: {...key},query }})
				return getters['getGroupMembers']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryGroupMembers API Node Unavailable. Could not perform query: ' + e.error.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryGroupsByAdmin({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryGroupsByAdmin( key.admin, query)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await queryClient.queryGroupsByAdmin( key.admin, {...query, 'pagination.key':(<any> value).pagination.next_key})).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'GroupsByAdmin', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryGroupsByAdmin', payload: { options: { all }, params: {...key},query }})
				return getters['getGroupsByAdmin']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryGroupsByAdmin API Node Unavailable. Could not perform query: ' + e.error.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryGroupPoliciesByGroup({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryGroupPoliciesByGroup( key.group_id, query)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await queryClient.queryGroupPoliciesByGroup( key.group_id, {...query, 'pagination.key':(<any> value).pagination.next_key})).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'GroupPoliciesByGroup', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryGroupPoliciesByGroup', payload: { options: { all }, params: {...key},query }})
				return getters['getGroupPoliciesByGroup']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryGroupPoliciesByGroup API Node Unavailable. Could not perform query: ' + e.error.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryGroupPoliciesByAdmin({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryGroupPoliciesByAdmin( key.admin, query)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await queryClient.queryGroupPoliciesByAdmin( key.admin, {...query, 'pagination.key':(<any> value).pagination.next_key})).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'GroupPoliciesByAdmin', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryGroupPoliciesByAdmin', payload: { options: { all }, params: {...key},query }})
				return getters['getGroupPoliciesByAdmin']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryGroupPoliciesByAdmin API Node Unavailable. Could not perform query: ' + e.error.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryProposal({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryProposal( key.proposal_id)).data
				
					
				commit('QUERY', { query: 'Proposal', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryProposal', payload: { options: { all }, params: {...key},query }})
				return getters['getProposal']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryProposal API Node Unavailable. Could not perform query: ' + e.error.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryProposalsByGroupPolicy({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryProposalsByGroupPolicy( key.address, query)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await queryClient.queryProposalsByGroupPolicy( key.address, {...query, 'pagination.key':(<any> value).pagination.next_key})).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'ProposalsByGroupPolicy', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryProposalsByGroupPolicy', payload: { options: { all }, params: {...key},query }})
				return getters['getProposalsByGroupPolicy']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryProposalsByGroupPolicy API Node Unavailable. Could not perform query: ' + e.error.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryVoteByProposalVoter({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryVoteByProposalVoter( key.proposal_id,  key.voter)).data
				
					
				commit('QUERY', { query: 'VoteByProposalVoter', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryVoteByProposalVoter', payload: { options: { all }, params: {...key},query }})
				return getters['getVoteByProposalVoter']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryVoteByProposalVoter API Node Unavailable. Could not perform query: ' + e.error.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryVotesByProposal({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryVotesByProposal( key.proposal_id, query)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await queryClient.queryVotesByProposal( key.proposal_id, {...query, 'pagination.key':(<any> value).pagination.next_key})).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'VotesByProposal', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryVotesByProposal', payload: { options: { all }, params: {...key},query }})
				return getters['getVotesByProposal']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryVotesByProposal API Node Unavailable. Could not perform query: ' + e.error.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryVotesByVoter({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryVotesByVoter( key.voter, query)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await queryClient.queryVotesByVoter( key.voter, {...query, 'pagination.key':(<any> value).pagination.next_key})).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'VotesByVoter', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryVotesByVoter', payload: { options: { all }, params: {...key},query }})
				return getters['getVotesByVoter']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryVotesByVoter API Node Unavailable. Could not perform query: ' + e.error.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryGroupsByMember({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryGroupsByMember( key.address, query)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await queryClient.queryGroupsByMember( key.address, {...query, 'pagination.key':(<any> value).pagination.next_key})).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'GroupsByMember', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryGroupsByMember', payload: { options: { all }, params: {...key},query }})
				return getters['getGroupsByMember']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryGroupsByMember API Node Unavailable. Could not perform query: ' + e.error.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryTallyResult({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryTallyResult( key.proposal_id)).data
				
					
				commit('QUERY', { query: 'TallyResult', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryTallyResult', payload: { options: { all }, params: {...key},query }})
				return getters['getTallyResult']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryTallyResult API Node Unavailable. Could not perform query: ' + e.error.message)
				
			}
		},
		
		
		async sendMsgCreateGroupWithPolicy({ rootGetters }, { value, fee = [], memo = '', gas = "200000"  }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgCreateGroupWithPolicy(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: gas}, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgCreateGroupWithPolicy:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgCreateGroupWithPolicy:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgUpdateGroupMembers({ rootGetters }, { value, fee = [], memo = '', gas = "200000"  }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgUpdateGroupMembers(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: gas}, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgUpdateGroupMembers:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgUpdateGroupMembers:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgUpdateGroupAdmin({ rootGetters }, { value, fee = [], memo = '', gas = "200000"  }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgUpdateGroupAdmin(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: gas}, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgUpdateGroupAdmin:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgUpdateGroupAdmin:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgUpdateGroupPolicyDecisionPolicy({ rootGetters }, { value, fee = [], memo = '', gas = "200000"  }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgUpdateGroupPolicyDecisionPolicy(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: gas}, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgUpdateGroupPolicyDecisionPolicy:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgUpdateGroupPolicyDecisionPolicy:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgUpdateGroupMetadata({ rootGetters }, { value, fee = [], memo = '', gas = "200000"  }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgUpdateGroupMetadata(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: gas}, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgUpdateGroupMetadata:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgUpdateGroupMetadata:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgUpdateGroupPolicyMetadata({ rootGetters }, { value, fee = [], memo = '', gas = "200000"  }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgUpdateGroupPolicyMetadata(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: gas}, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgUpdateGroupPolicyMetadata:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgUpdateGroupPolicyMetadata:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgVote({ rootGetters }, { value, fee = [], memo = '', gas = "200000"  }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgVote(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: gas}, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgVote:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgVote:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgSubmitProposal({ rootGetters }, { value, fee = [], memo = '', gas = "200000"  }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgSubmitProposal(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: gas}, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgSubmitProposal:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgSubmitProposal:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgLeaveGroup({ rootGetters }, { value, fee = [], memo = '', gas = "200000"  }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgLeaveGroup(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: gas}, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgLeaveGroup:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgLeaveGroup:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgCreateGroup({ rootGetters }, { value, fee = [], memo = '', gas = "200000"  }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgCreateGroup(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: gas}, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgCreateGroup:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgCreateGroup:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgCreateGroupPolicy({ rootGetters }, { value, fee = [], memo = '', gas = "200000"  }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgCreateGroupPolicy(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: gas}, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgCreateGroupPolicy:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgCreateGroupPolicy:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgUpdateGroupPolicyAdmin({ rootGetters }, { value, fee = [], memo = '', gas = "200000"  }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgUpdateGroupPolicyAdmin(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: gas}, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgUpdateGroupPolicyAdmin:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgUpdateGroupPolicyAdmin:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgExec({ rootGetters }, { value, fee = [], memo = '', gas = "200000"  }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgExec(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: gas}, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgExec:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgExec:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgWithdrawProposal({ rootGetters }, { value, fee = [], memo = '', gas = "200000"  }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgWithdrawProposal(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: gas}, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgWithdrawProposal:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgWithdrawProposal:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		
		async MsgCreateGroupWithPolicy({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgCreateGroupWithPolicy(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgCreateGroupWithPolicy:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgCreateGroupWithPolicy:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgUpdateGroupMembers({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgUpdateGroupMembers(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgUpdateGroupMembers:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgUpdateGroupMembers:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgUpdateGroupAdmin({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgUpdateGroupAdmin(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgUpdateGroupAdmin:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgUpdateGroupAdmin:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgUpdateGroupPolicyDecisionPolicy({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgUpdateGroupPolicyDecisionPolicy(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgUpdateGroupPolicyDecisionPolicy:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgUpdateGroupPolicyDecisionPolicy:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgUpdateGroupMetadata({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgUpdateGroupMetadata(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgUpdateGroupMetadata:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgUpdateGroupMetadata:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgUpdateGroupPolicyMetadata({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgUpdateGroupPolicyMetadata(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgUpdateGroupPolicyMetadata:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgUpdateGroupPolicyMetadata:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgVote({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgVote(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgVote:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgVote:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgSubmitProposal({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgSubmitProposal(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgSubmitProposal:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgSubmitProposal:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgLeaveGroup({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgLeaveGroup(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgLeaveGroup:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgLeaveGroup:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgCreateGroup({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgCreateGroup(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgCreateGroup:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgCreateGroup:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgCreateGroupPolicy({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgCreateGroupPolicy(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgCreateGroupPolicy:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgCreateGroupPolicy:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgUpdateGroupPolicyAdmin({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgUpdateGroupPolicyAdmin(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgUpdateGroupPolicyAdmin:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgUpdateGroupPolicyAdmin:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgExec({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgExec(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgExec:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgExec:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgWithdrawProposal({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgWithdrawProposal(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgWithdrawProposal:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgWithdrawProposal:Create Could not create message: ' + e.message)
				}
			}
		},
		
	}
}
