import base from './index'

let axios = base.axios
let baseUrl = base.baseUrl
let chatToken = process.env.VUE_APP_CHAT_KEY || "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"

// 获取好友
export const getFriend = params => {
    return axios({
        method: 'post',
        baseURL: `${baseUrl}/friend/friendList`,
        data: params
    }).then(res => res.data)
}

// 获取聊天信息
export const getChatMsg = params => {
    return axios({
        method: 'post',
        baseURL: `${baseUrl}/friend/chatMsg`,
        data: params
    }).then(res => res.data)
}

// 获取聊天信息
export const chatgpt = params => {
    return axios({
        method: 'post',
        url: `https://api.openai.com/v1/completions`,
        data: params,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${chatToken}`,
        }
    }).then(res => res.data)
}
