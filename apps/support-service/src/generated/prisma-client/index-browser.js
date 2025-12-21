
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.19.1
 * Query Engine version: 69d742ee20b815d88e17e54db4a2a7a3b30324e3
 */
Prisma.prismaVersion = {
  client: "5.19.1",
  engine: "69d742ee20b815d88e17e54db4a2a7a3b30324e3"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`NotFoundError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.SupportTicketScalarFieldEnum = {
  id: 'id',
  ticketNo: 'ticketNo',
  schoolId: 'schoolId',
  userId: 'userId',
  userType: 'userType',
  userName: 'userName',
  userEmail: 'userEmail',
  subject: 'subject',
  description: 'description',
  category: 'category',
  priority: 'priority',
  status: 'status',
  assignedTo: 'assignedTo',
  assignedAt: 'assignedAt',
  resolvedAt: 'resolvedAt',
  resolution: 'resolution',
  rating: 'rating',
  feedback: 'feedback',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.TicketMessageScalarFieldEnum = {
  id: 'id',
  ticketId: 'ticketId',
  senderId: 'senderId',
  senderType: 'senderType',
  senderName: 'senderName',
  message: 'message',
  isInternal: 'isInternal',
  createdAt: 'createdAt'
};

exports.Prisma.TicketAttachmentScalarFieldEnum = {
  id: 'id',
  ticketId: 'ticketId',
  name: 'name',
  url: 'url',
  mimeType: 'mimeType',
  size: 'size',
  uploadedBy: 'uploadedBy',
  uploadedAt: 'uploadedAt'
};

exports.Prisma.KnowledgeBaseScalarFieldEnum = {
  id: 'id',
  title: 'title',
  slug: 'slug',
  content: 'content',
  excerpt: 'excerpt',
  category: 'category',
  tags: 'tags',
  isPublished: 'isPublished',
  viewCount: 'viewCount',
  helpfulCount: 'helpfulCount',
  authorId: 'authorId',
  authorName: 'authorName',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.FAQScalarFieldEnum = {
  id: 'id',
  question: 'question',
  answer: 'answer',
  category: 'category',
  sortOrder: 'sortOrder',
  isPublished: 'isPublished',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.TicketCategory = exports.$Enums.TicketCategory = {
  GENERAL: 'GENERAL',
  BILLING: 'BILLING',
  TECHNICAL: 'TECHNICAL',
  FEATURE_REQUEST: 'FEATURE_REQUEST',
  BUG_REPORT: 'BUG_REPORT',
  ACCOUNT: 'ACCOUNT',
  INTEGRATION: 'INTEGRATION',
  OTHER: 'OTHER'
};

exports.TicketPriority = exports.$Enums.TicketPriority = {
  LOW: 'LOW',
  MEDIUM: 'MEDIUM',
  HIGH: 'HIGH',
  URGENT: 'URGENT'
};

exports.TicketStatus = exports.$Enums.TicketStatus = {
  OPEN: 'OPEN',
  IN_PROGRESS: 'IN_PROGRESS',
  WAITING_FOR_CUSTOMER: 'WAITING_FOR_CUSTOMER',
  WAITING_FOR_THIRD_PARTY: 'WAITING_FOR_THIRD_PARTY',
  RESOLVED: 'RESOLVED',
  CLOSED: 'CLOSED'
};

exports.Prisma.ModelName = {
  SupportTicket: 'SupportTicket',
  TicketMessage: 'TicketMessage',
  TicketAttachment: 'TicketAttachment',
  KnowledgeBase: 'KnowledgeBase',
  FAQ: 'FAQ'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
