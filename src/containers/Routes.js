import routes from '../constants/routes';
import Transactions from './Transactions';
import PayConfig from './PayConfig';
import PayStatus from './PayStatus';
import Bulk from './Bulk';
import Single from './Single';
import CreateBank from './CreateBank';
import ListBanks from './ListBanks';
import CreateMerchant from './CreateMerchant';
import ListMerchants from './ListMerchants';
import CreateBranch from './CreateBranch';
import ListBranches from './ListBranches';
import Businesses from './Businesses';
import CreateUser from './CreateUser';
import ListUsers from './ListUsers';
import Notifications from './Notifications';
import Report from './Report';
import Logs from './Logs';
import Profile from './Profile';
import DashboardScreen from './DashboardScreen';
import TransactionsDetail from './TransactionsDetail';
import ImportedBulk from './ImportedBulk';
import BranchBulk from './BranchBulk';
import Refunds from './Refunds';
import Documentation from './Documentation';
import VisaMasterCard from './VisaMasterCard';
import RequestRefund from './RequestRefund';
// eslint-disable-next-line import/prefer-default-export
export const dashboardRoutes = [
  {
    path: routes.DASHBOARD,
    component: DashboardScreen,
    protected: false,
    key: 'DashboardScreen',
  },
  {
    path: routes.TRANSACTIONS,
    component: Transactions,
    protected: false,
    key: 'Transactions',
  },
  {
    path: routes.PAY_CONFIG,
    component: PayConfig,
    protected: false,
    key: 'PayConfig',
  },
  {
    path: routes.PAY_STATUS,
    component: PayStatus,
    protected: false,
    key: 'PayStatus',
  },
  {
    path: routes.BULK,
    component: Bulk,
    protected: false,
    key: 'Bulk',
  },
  {
    path: routes.SINGLE,
    component: Single,
    protected: false,
    key: 'Single',
  },
  {
    path: routes.CREATE_BANK,
    component: CreateBank,
    protected: false,
    key: 'CreateBank',
  },
  {
    path: routes.LIST_BANKS,
    component: ListBanks,
    protected: false,
    key: 'ListBanks',
  },
  {
    path: routes.CREATE_MERCHANT,
    component: CreateMerchant,
    protected: false,
    key: 'CreateMerchant',
  },
  {
    path: routes.LIST_MERCHANTS,
    component: ListMerchants,
    protected: false,
    key: 'ListMerchants',
  },
  {
    path: routes.BUSINESSES,
    component: Businesses,
    protected: false,
    key: 'Businesses',
  },
  {
    path: routes.CREATE_USRE,
    component: CreateUser,
    protected: false,
    key: 'CreateUser',
  },
  {
    path: routes.LIST_USRES,
    component: ListUsers,
    protected: false,
    key: 'ListUsers',
  },
  {
    path: routes.NOTIFICATIONS,
    component: Notifications,
    protected: false,
    key: 'Notifications',
  },
  {
    path: routes.REPORT,
    component: Report,
    protected: false,
    key: 'Report',
  },
  {
    path: routes.LOGS,
    component: Logs,
    protected: false,
    key: 'Logs',
  },
  {
    path: routes.PROFILE,
    component: Profile,
    protected: false,
    key: 'Profile',
  },
  {
    path: routes.TRANSACTIONS_DETAIL,
    component: TransactionsDetail,
    protected: false,
    key: 'TransactionsDetail',
  },
  {
    path: routes.IMPORTED_BULK,
    component: ImportedBulk,
    protected: false,
    key: 'ImportedBulk',
  },
  {
    path: routes.CREATE_BRANCH,
    component: CreateBranch,
    protected: false,
    key: 'CreateBranch',
  },
  {
    path: routes.LIST_BRANCHES,
    component: ListBranches,
    protected: false,
    key: 'ListBranches',
  },
  {
    path: routes.BRANCH_BULK,
    component: BranchBulk,
    protected: false,
    key: 'BranchBulk',
  },
  {
    path: routes.REFUNDS,
    component: Refunds,
    protected: false,
    key: 'Refunds',
  },
  {
    path: routes.DOCUMENTATION,
    component: Documentation,
    protected: false,
    key: 'Refunds',
  },
  {
    path: routes.VISA_MASTERCARD,
    component: VisaMasterCard,
    protected: false,
    key: 'VisaMasterCard',
  },
  {
    path: routes.REQUEST_REFUND,
    component: RequestRefund,
    protected: false,
    key: 'RequestRefund',
  },
];
