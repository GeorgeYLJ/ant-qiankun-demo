function emptyAction() {
    //设置一个actions实例
    // 提示当前使用的是空 Action
    console.warn("Current execute action is empty!");
}

// 我们首先设置一个用于通信的Actions类
class Actions {
    // 默认值为空 Action
    actions = {
        onGlobalStateChange: emptyAction,
        setGlobalState: emptyAction
    }

    /*    constructor() {

        }*/

    // 设置actions
    setActions(actions) {
        this.actions = actions
    }

    // 映射
    onGlobalStateChange(...args) {
        return this.actions.onGlobalStateChange(...args)
    }

    // 映射
    setGlobalState(...args) {
        return this.actions.setGlobalState(...args)
    }
}

const actions = new Actions()
export default actions
