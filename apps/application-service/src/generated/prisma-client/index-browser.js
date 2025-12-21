
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

exports.Prisma.ApplicationScalarFieldEnum = {
  id: 'id',
  schoolId: 'schoolId',
  applicationNo: 'applicationNo',
  firstName: 'firstName',
  lastName: 'lastName',
  email: 'email',
  phone: 'phone',
  dateOfBirth: 'dateOfBirth',
  gender: 'gender',
  address: 'address',
  city: 'city',
  state: 'state',
  country: 'country',
  postalCode: 'postalCode',
  nationality: 'nationality',
  previousSchool: 'previousSchool',
  gradeApplying: 'gradeApplying',
  academicYear: 'academicYear',
  parentName: 'parentName',
  parentEmail: 'parentEmail',
  parentPhone: 'parentPhone',
  parentRelation: 'parentRelation',
  status: 'status',
  reviewNotes: 'reviewNotes',
  reviewedBy: 'reviewedBy',
  reviewedAt: 'reviewedAt',
  admissionDate: 'admissionDate',
  studentId: 'studentId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.ApplicationDocumentScalarFieldEnum = {
  id: 'id',
  applicationId: 'applicationId',
  name: 'name',
  type: 'type',
  url: 'url',
  uploadedAt: 'uploadedAt'
};

exports.Prisma.AdmissionCriteriaScalarFieldEnum = {
  id: 'id',
  schoolId: 'schoolId',
  gradeId: 'gradeId',
  minAge: 'minAge',
  maxAge: 'maxAge',
  requiredDocs: 'requiredDocs',
  entranceExam: 'entranceExam',
  interview: 'interview',
  maxStudents: 'maxStudents',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.EntranceExamScalarFieldEnum = {
  id: 'id',
  schoolId: 'schoolId',
  applicationId: 'applicationId',
  examDate: 'examDate',
  examType: 'examType',
  subjects: 'subjects',
  score: 'score',
  maxScore: 'maxScore',
  passed: 'passed',
  remarks: 'remarks',
  conductedBy: 'conductedBy',
  conductedAt: 'conductedAt',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.InterviewScalarFieldEnum = {
  id: 'id',
  schoolId: 'schoolId',
  applicationId: 'applicationId',
  scheduledDate: 'scheduledDate',
  interviewers: 'interviewers',
  status: 'status',
  rating: 'rating',
  feedback: 'feedback',
  conductedAt: 'conductedAt',
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
exports.ApplicationStatus = exports.$Enums.ApplicationStatus = {
  PENDING: 'PENDING',
  UNDER_REVIEW: 'UNDER_REVIEW',
  DOCUMENTS_REQUIRED: 'DOCUMENTS_REQUIRED',
  EXAM_SCHEDULED: 'EXAM_SCHEDULED',
  INTERVIEW_SCHEDULED: 'INTERVIEW_SCHEDULED',
  APPROVED: 'APPROVED',
  REJECTED: 'REJECTED',
  WAITLISTED: 'WAITLISTED',
  ADMITTED: 'ADMITTED',
  WITHDRAWN: 'WITHDRAWN'
};

exports.InterviewStatus = exports.$Enums.InterviewStatus = {
  SCHEDULED: 'SCHEDULED',
  COMPLETED: 'COMPLETED',
  CANCELLED: 'CANCELLED',
  NO_SHOW: 'NO_SHOW'
};

exports.Prisma.ModelName = {
  Application: 'Application',
  ApplicationDocument: 'ApplicationDocument',
  AdmissionCriteria: 'AdmissionCriteria',
  EntranceExam: 'EntranceExam',
  Interview: 'Interview'
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
