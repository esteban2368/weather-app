import { modalVisbleActionType } from "@/types/reducers/modalVisibleReducer";

const modalVisibleReducer = (modalVisible: boolean, action: modalVisbleActionType  ) => {
    switch (action.type) {
        case 'change_modal_visible': {
            return action.visible
        }
        default: {
            throw new Error(`Unknow error ${action.type}`)
        }
    }
}

export default modalVisibleReducer