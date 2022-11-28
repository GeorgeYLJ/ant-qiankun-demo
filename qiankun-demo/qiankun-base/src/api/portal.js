import {request} from '@/api/request'

export function getData(data) {
    return request({
        url: 'https://www.fastmock.site/mock/058e5ddf01c434cbc9c294162c673f6c/workspace/data',
        method: 'post',
        data,
    })
}
