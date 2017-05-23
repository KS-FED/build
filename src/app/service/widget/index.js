import KsDialog from '../../../ks/components/KsDialog/index.js'
import KsNoticeCenter from '../../../ks/components/KsNoticeCenter/index.js'


export default {
    KsDialog:KsDialog.install(Vue),
    KsMessage:KsNoticeCenter.install(Vue)
}