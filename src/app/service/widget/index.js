import KsDialog from 'KS/components/KsDialog/index.js'
import KsNoticeCenter from 'KS/components/KsNoticeCenter/index.js'


export default {
    KsDialog:KsDialog.install(Vue),
    KsMessage:KsNoticeCenter.install(Vue)
}