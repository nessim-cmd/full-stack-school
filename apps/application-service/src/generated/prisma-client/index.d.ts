
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Application
 * 
 */
export type Application = $Result.DefaultSelection<Prisma.$ApplicationPayload>
/**
 * Model ApplicationDocument
 * 
 */
export type ApplicationDocument = $Result.DefaultSelection<Prisma.$ApplicationDocumentPayload>
/**
 * Model AdmissionCriteria
 * 
 */
export type AdmissionCriteria = $Result.DefaultSelection<Prisma.$AdmissionCriteriaPayload>
/**
 * Model EntranceExam
 * 
 */
export type EntranceExam = $Result.DefaultSelection<Prisma.$EntranceExamPayload>
/**
 * Model Interview
 * 
 */
export type Interview = $Result.DefaultSelection<Prisma.$InterviewPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const ApplicationStatus: {
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

export type ApplicationStatus = (typeof ApplicationStatus)[keyof typeof ApplicationStatus]


export const InterviewStatus: {
  SCHEDULED: 'SCHEDULED',
  COMPLETED: 'COMPLETED',
  CANCELLED: 'CANCELLED',
  NO_SHOW: 'NO_SHOW'
};

export type InterviewStatus = (typeof InterviewStatus)[keyof typeof InterviewStatus]

}

export type ApplicationStatus = $Enums.ApplicationStatus

export const ApplicationStatus: typeof $Enums.ApplicationStatus

export type InterviewStatus = $Enums.InterviewStatus

export const InterviewStatus: typeof $Enums.InterviewStatus

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Applications
 * const applications = await prisma.application.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Applications
   * const applications = await prisma.application.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.application`: Exposes CRUD operations for the **Application** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Applications
    * const applications = await prisma.application.findMany()
    * ```
    */
  get application(): Prisma.ApplicationDelegate<ExtArgs>;

  /**
   * `prisma.applicationDocument`: Exposes CRUD operations for the **ApplicationDocument** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ApplicationDocuments
    * const applicationDocuments = await prisma.applicationDocument.findMany()
    * ```
    */
  get applicationDocument(): Prisma.ApplicationDocumentDelegate<ExtArgs>;

  /**
   * `prisma.admissionCriteria`: Exposes CRUD operations for the **AdmissionCriteria** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AdmissionCriteria
    * const admissionCriteria = await prisma.admissionCriteria.findMany()
    * ```
    */
  get admissionCriteria(): Prisma.AdmissionCriteriaDelegate<ExtArgs>;

  /**
   * `prisma.entranceExam`: Exposes CRUD operations for the **EntranceExam** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EntranceExams
    * const entranceExams = await prisma.entranceExam.findMany()
    * ```
    */
  get entranceExam(): Prisma.EntranceExamDelegate<ExtArgs>;

  /**
   * `prisma.interview`: Exposes CRUD operations for the **Interview** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Interviews
    * const interviews = await prisma.interview.findMany()
    * ```
    */
  get interview(): Prisma.InterviewDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.19.1
   * Query Engine version: 69d742ee20b815d88e17e54db4a2a7a3b30324e3
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Application: 'Application',
    ApplicationDocument: 'ApplicationDocument',
    AdmissionCriteria: 'AdmissionCriteria',
    EntranceExam: 'EntranceExam',
    Interview: 'Interview'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "application" | "applicationDocument" | "admissionCriteria" | "entranceExam" | "interview"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Application: {
        payload: Prisma.$ApplicationPayload<ExtArgs>
        fields: Prisma.ApplicationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ApplicationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ApplicationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          findFirst: {
            args: Prisma.ApplicationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ApplicationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          findMany: {
            args: Prisma.ApplicationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>[]
          }
          create: {
            args: Prisma.ApplicationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          createMany: {
            args: Prisma.ApplicationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ApplicationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>[]
          }
          delete: {
            args: Prisma.ApplicationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          update: {
            args: Prisma.ApplicationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          deleteMany: {
            args: Prisma.ApplicationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ApplicationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ApplicationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          aggregate: {
            args: Prisma.ApplicationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateApplication>
          }
          groupBy: {
            args: Prisma.ApplicationGroupByArgs<ExtArgs>
            result: $Utils.Optional<ApplicationGroupByOutputType>[]
          }
          count: {
            args: Prisma.ApplicationCountArgs<ExtArgs>
            result: $Utils.Optional<ApplicationCountAggregateOutputType> | number
          }
        }
      }
      ApplicationDocument: {
        payload: Prisma.$ApplicationDocumentPayload<ExtArgs>
        fields: Prisma.ApplicationDocumentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ApplicationDocumentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationDocumentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ApplicationDocumentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationDocumentPayload>
          }
          findFirst: {
            args: Prisma.ApplicationDocumentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationDocumentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ApplicationDocumentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationDocumentPayload>
          }
          findMany: {
            args: Prisma.ApplicationDocumentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationDocumentPayload>[]
          }
          create: {
            args: Prisma.ApplicationDocumentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationDocumentPayload>
          }
          createMany: {
            args: Prisma.ApplicationDocumentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ApplicationDocumentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationDocumentPayload>[]
          }
          delete: {
            args: Prisma.ApplicationDocumentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationDocumentPayload>
          }
          update: {
            args: Prisma.ApplicationDocumentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationDocumentPayload>
          }
          deleteMany: {
            args: Prisma.ApplicationDocumentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ApplicationDocumentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ApplicationDocumentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationDocumentPayload>
          }
          aggregate: {
            args: Prisma.ApplicationDocumentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateApplicationDocument>
          }
          groupBy: {
            args: Prisma.ApplicationDocumentGroupByArgs<ExtArgs>
            result: $Utils.Optional<ApplicationDocumentGroupByOutputType>[]
          }
          count: {
            args: Prisma.ApplicationDocumentCountArgs<ExtArgs>
            result: $Utils.Optional<ApplicationDocumentCountAggregateOutputType> | number
          }
        }
      }
      AdmissionCriteria: {
        payload: Prisma.$AdmissionCriteriaPayload<ExtArgs>
        fields: Prisma.AdmissionCriteriaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdmissionCriteriaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdmissionCriteriaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdmissionCriteriaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdmissionCriteriaPayload>
          }
          findFirst: {
            args: Prisma.AdmissionCriteriaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdmissionCriteriaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdmissionCriteriaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdmissionCriteriaPayload>
          }
          findMany: {
            args: Prisma.AdmissionCriteriaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdmissionCriteriaPayload>[]
          }
          create: {
            args: Prisma.AdmissionCriteriaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdmissionCriteriaPayload>
          }
          createMany: {
            args: Prisma.AdmissionCriteriaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdmissionCriteriaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdmissionCriteriaPayload>[]
          }
          delete: {
            args: Prisma.AdmissionCriteriaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdmissionCriteriaPayload>
          }
          update: {
            args: Prisma.AdmissionCriteriaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdmissionCriteriaPayload>
          }
          deleteMany: {
            args: Prisma.AdmissionCriteriaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdmissionCriteriaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AdmissionCriteriaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdmissionCriteriaPayload>
          }
          aggregate: {
            args: Prisma.AdmissionCriteriaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdmissionCriteria>
          }
          groupBy: {
            args: Prisma.AdmissionCriteriaGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdmissionCriteriaGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdmissionCriteriaCountArgs<ExtArgs>
            result: $Utils.Optional<AdmissionCriteriaCountAggregateOutputType> | number
          }
        }
      }
      EntranceExam: {
        payload: Prisma.$EntranceExamPayload<ExtArgs>
        fields: Prisma.EntranceExamFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EntranceExamFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntranceExamPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EntranceExamFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntranceExamPayload>
          }
          findFirst: {
            args: Prisma.EntranceExamFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntranceExamPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EntranceExamFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntranceExamPayload>
          }
          findMany: {
            args: Prisma.EntranceExamFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntranceExamPayload>[]
          }
          create: {
            args: Prisma.EntranceExamCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntranceExamPayload>
          }
          createMany: {
            args: Prisma.EntranceExamCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EntranceExamCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntranceExamPayload>[]
          }
          delete: {
            args: Prisma.EntranceExamDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntranceExamPayload>
          }
          update: {
            args: Prisma.EntranceExamUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntranceExamPayload>
          }
          deleteMany: {
            args: Prisma.EntranceExamDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EntranceExamUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EntranceExamUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntranceExamPayload>
          }
          aggregate: {
            args: Prisma.EntranceExamAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEntranceExam>
          }
          groupBy: {
            args: Prisma.EntranceExamGroupByArgs<ExtArgs>
            result: $Utils.Optional<EntranceExamGroupByOutputType>[]
          }
          count: {
            args: Prisma.EntranceExamCountArgs<ExtArgs>
            result: $Utils.Optional<EntranceExamCountAggregateOutputType> | number
          }
        }
      }
      Interview: {
        payload: Prisma.$InterviewPayload<ExtArgs>
        fields: Prisma.InterviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InterviewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InterviewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewPayload>
          }
          findFirst: {
            args: Prisma.InterviewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InterviewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewPayload>
          }
          findMany: {
            args: Prisma.InterviewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewPayload>[]
          }
          create: {
            args: Prisma.InterviewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewPayload>
          }
          createMany: {
            args: Prisma.InterviewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InterviewCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewPayload>[]
          }
          delete: {
            args: Prisma.InterviewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewPayload>
          }
          update: {
            args: Prisma.InterviewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewPayload>
          }
          deleteMany: {
            args: Prisma.InterviewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InterviewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.InterviewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewPayload>
          }
          aggregate: {
            args: Prisma.InterviewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInterview>
          }
          groupBy: {
            args: Prisma.InterviewGroupByArgs<ExtArgs>
            result: $Utils.Optional<InterviewGroupByOutputType>[]
          }
          count: {
            args: Prisma.InterviewCountArgs<ExtArgs>
            result: $Utils.Optional<InterviewCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ApplicationCountOutputType
   */

  export type ApplicationCountOutputType = {
    documents: number
  }

  export type ApplicationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    documents?: boolean | ApplicationCountOutputTypeCountDocumentsArgs
  }

  // Custom InputTypes
  /**
   * ApplicationCountOutputType without action
   */
  export type ApplicationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationCountOutputType
     */
    select?: ApplicationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ApplicationCountOutputType without action
   */
  export type ApplicationCountOutputTypeCountDocumentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApplicationDocumentWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Application
   */

  export type AggregateApplication = {
    _count: ApplicationCountAggregateOutputType | null
    _avg: ApplicationAvgAggregateOutputType | null
    _sum: ApplicationSumAggregateOutputType | null
    _min: ApplicationMinAggregateOutputType | null
    _max: ApplicationMaxAggregateOutputType | null
  }

  export type ApplicationAvgAggregateOutputType = {
    gradeApplying: number | null
  }

  export type ApplicationSumAggregateOutputType = {
    gradeApplying: number | null
  }

  export type ApplicationMinAggregateOutputType = {
    id: string | null
    schoolId: string | null
    applicationNo: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    phone: string | null
    dateOfBirth: Date | null
    gender: string | null
    address: string | null
    city: string | null
    state: string | null
    country: string | null
    postalCode: string | null
    nationality: string | null
    previousSchool: string | null
    gradeApplying: number | null
    academicYear: string | null
    parentName: string | null
    parentEmail: string | null
    parentPhone: string | null
    parentRelation: string | null
    status: $Enums.ApplicationStatus | null
    reviewNotes: string | null
    reviewedBy: string | null
    reviewedAt: Date | null
    admissionDate: Date | null
    studentId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ApplicationMaxAggregateOutputType = {
    id: string | null
    schoolId: string | null
    applicationNo: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    phone: string | null
    dateOfBirth: Date | null
    gender: string | null
    address: string | null
    city: string | null
    state: string | null
    country: string | null
    postalCode: string | null
    nationality: string | null
    previousSchool: string | null
    gradeApplying: number | null
    academicYear: string | null
    parentName: string | null
    parentEmail: string | null
    parentPhone: string | null
    parentRelation: string | null
    status: $Enums.ApplicationStatus | null
    reviewNotes: string | null
    reviewedBy: string | null
    reviewedAt: Date | null
    admissionDate: Date | null
    studentId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ApplicationCountAggregateOutputType = {
    id: number
    schoolId: number
    applicationNo: number
    firstName: number
    lastName: number
    email: number
    phone: number
    dateOfBirth: number
    gender: number
    address: number
    city: number
    state: number
    country: number
    postalCode: number
    nationality: number
    previousSchool: number
    gradeApplying: number
    academicYear: number
    parentName: number
    parentEmail: number
    parentPhone: number
    parentRelation: number
    status: number
    reviewNotes: number
    reviewedBy: number
    reviewedAt: number
    admissionDate: number
    studentId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ApplicationAvgAggregateInputType = {
    gradeApplying?: true
  }

  export type ApplicationSumAggregateInputType = {
    gradeApplying?: true
  }

  export type ApplicationMinAggregateInputType = {
    id?: true
    schoolId?: true
    applicationNo?: true
    firstName?: true
    lastName?: true
    email?: true
    phone?: true
    dateOfBirth?: true
    gender?: true
    address?: true
    city?: true
    state?: true
    country?: true
    postalCode?: true
    nationality?: true
    previousSchool?: true
    gradeApplying?: true
    academicYear?: true
    parentName?: true
    parentEmail?: true
    parentPhone?: true
    parentRelation?: true
    status?: true
    reviewNotes?: true
    reviewedBy?: true
    reviewedAt?: true
    admissionDate?: true
    studentId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ApplicationMaxAggregateInputType = {
    id?: true
    schoolId?: true
    applicationNo?: true
    firstName?: true
    lastName?: true
    email?: true
    phone?: true
    dateOfBirth?: true
    gender?: true
    address?: true
    city?: true
    state?: true
    country?: true
    postalCode?: true
    nationality?: true
    previousSchool?: true
    gradeApplying?: true
    academicYear?: true
    parentName?: true
    parentEmail?: true
    parentPhone?: true
    parentRelation?: true
    status?: true
    reviewNotes?: true
    reviewedBy?: true
    reviewedAt?: true
    admissionDate?: true
    studentId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ApplicationCountAggregateInputType = {
    id?: true
    schoolId?: true
    applicationNo?: true
    firstName?: true
    lastName?: true
    email?: true
    phone?: true
    dateOfBirth?: true
    gender?: true
    address?: true
    city?: true
    state?: true
    country?: true
    postalCode?: true
    nationality?: true
    previousSchool?: true
    gradeApplying?: true
    academicYear?: true
    parentName?: true
    parentEmail?: true
    parentPhone?: true
    parentRelation?: true
    status?: true
    reviewNotes?: true
    reviewedBy?: true
    reviewedAt?: true
    admissionDate?: true
    studentId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ApplicationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Application to aggregate.
     */
    where?: ApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Applications to fetch.
     */
    orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Applications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Applications
    **/
    _count?: true | ApplicationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ApplicationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ApplicationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ApplicationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ApplicationMaxAggregateInputType
  }

  export type GetApplicationAggregateType<T extends ApplicationAggregateArgs> = {
        [P in keyof T & keyof AggregateApplication]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApplication[P]>
      : GetScalarType<T[P], AggregateApplication[P]>
  }




  export type ApplicationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApplicationWhereInput
    orderBy?: ApplicationOrderByWithAggregationInput | ApplicationOrderByWithAggregationInput[]
    by: ApplicationScalarFieldEnum[] | ApplicationScalarFieldEnum
    having?: ApplicationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ApplicationCountAggregateInputType | true
    _avg?: ApplicationAvgAggregateInputType
    _sum?: ApplicationSumAggregateInputType
    _min?: ApplicationMinAggregateInputType
    _max?: ApplicationMaxAggregateInputType
  }

  export type ApplicationGroupByOutputType = {
    id: string
    schoolId: string
    applicationNo: string
    firstName: string
    lastName: string
    email: string
    phone: string | null
    dateOfBirth: Date
    gender: string
    address: string | null
    city: string | null
    state: string | null
    country: string | null
    postalCode: string | null
    nationality: string | null
    previousSchool: string | null
    gradeApplying: number
    academicYear: string
    parentName: string
    parentEmail: string
    parentPhone: string
    parentRelation: string
    status: $Enums.ApplicationStatus
    reviewNotes: string | null
    reviewedBy: string | null
    reviewedAt: Date | null
    admissionDate: Date | null
    studentId: string | null
    createdAt: Date
    updatedAt: Date
    _count: ApplicationCountAggregateOutputType | null
    _avg: ApplicationAvgAggregateOutputType | null
    _sum: ApplicationSumAggregateOutputType | null
    _min: ApplicationMinAggregateOutputType | null
    _max: ApplicationMaxAggregateOutputType | null
  }

  type GetApplicationGroupByPayload<T extends ApplicationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ApplicationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ApplicationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApplicationGroupByOutputType[P]>
            : GetScalarType<T[P], ApplicationGroupByOutputType[P]>
        }
      >
    >


  export type ApplicationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    schoolId?: boolean
    applicationNo?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phone?: boolean
    dateOfBirth?: boolean
    gender?: boolean
    address?: boolean
    city?: boolean
    state?: boolean
    country?: boolean
    postalCode?: boolean
    nationality?: boolean
    previousSchool?: boolean
    gradeApplying?: boolean
    academicYear?: boolean
    parentName?: boolean
    parentEmail?: boolean
    parentPhone?: boolean
    parentRelation?: boolean
    status?: boolean
    reviewNotes?: boolean
    reviewedBy?: boolean
    reviewedAt?: boolean
    admissionDate?: boolean
    studentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    documents?: boolean | Application$documentsArgs<ExtArgs>
    _count?: boolean | ApplicationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["application"]>

  export type ApplicationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    schoolId?: boolean
    applicationNo?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phone?: boolean
    dateOfBirth?: boolean
    gender?: boolean
    address?: boolean
    city?: boolean
    state?: boolean
    country?: boolean
    postalCode?: boolean
    nationality?: boolean
    previousSchool?: boolean
    gradeApplying?: boolean
    academicYear?: boolean
    parentName?: boolean
    parentEmail?: boolean
    parentPhone?: boolean
    parentRelation?: boolean
    status?: boolean
    reviewNotes?: boolean
    reviewedBy?: boolean
    reviewedAt?: boolean
    admissionDate?: boolean
    studentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["application"]>

  export type ApplicationSelectScalar = {
    id?: boolean
    schoolId?: boolean
    applicationNo?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phone?: boolean
    dateOfBirth?: boolean
    gender?: boolean
    address?: boolean
    city?: boolean
    state?: boolean
    country?: boolean
    postalCode?: boolean
    nationality?: boolean
    previousSchool?: boolean
    gradeApplying?: boolean
    academicYear?: boolean
    parentName?: boolean
    parentEmail?: boolean
    parentPhone?: boolean
    parentRelation?: boolean
    status?: boolean
    reviewNotes?: boolean
    reviewedBy?: boolean
    reviewedAt?: boolean
    admissionDate?: boolean
    studentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ApplicationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    documents?: boolean | Application$documentsArgs<ExtArgs>
    _count?: boolean | ApplicationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ApplicationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ApplicationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Application"
    objects: {
      documents: Prisma.$ApplicationDocumentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      schoolId: string
      applicationNo: string
      firstName: string
      lastName: string
      email: string
      phone: string | null
      dateOfBirth: Date
      gender: string
      address: string | null
      city: string | null
      state: string | null
      country: string | null
      postalCode: string | null
      nationality: string | null
      previousSchool: string | null
      gradeApplying: number
      academicYear: string
      parentName: string
      parentEmail: string
      parentPhone: string
      parentRelation: string
      status: $Enums.ApplicationStatus
      reviewNotes: string | null
      reviewedBy: string | null
      reviewedAt: Date | null
      admissionDate: Date | null
      studentId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["application"]>
    composites: {}
  }

  type ApplicationGetPayload<S extends boolean | null | undefined | ApplicationDefaultArgs> = $Result.GetResult<Prisma.$ApplicationPayload, S>

  type ApplicationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ApplicationFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ApplicationCountAggregateInputType | true
    }

  export interface ApplicationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Application'], meta: { name: 'Application' } }
    /**
     * Find zero or one Application that matches the filter.
     * @param {ApplicationFindUniqueArgs} args - Arguments to find a Application
     * @example
     * // Get one Application
     * const application = await prisma.application.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ApplicationFindUniqueArgs>(args: SelectSubset<T, ApplicationFindUniqueArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Application that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ApplicationFindUniqueOrThrowArgs} args - Arguments to find a Application
     * @example
     * // Get one Application
     * const application = await prisma.application.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ApplicationFindUniqueOrThrowArgs>(args: SelectSubset<T, ApplicationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Application that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationFindFirstArgs} args - Arguments to find a Application
     * @example
     * // Get one Application
     * const application = await prisma.application.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ApplicationFindFirstArgs>(args?: SelectSubset<T, ApplicationFindFirstArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Application that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationFindFirstOrThrowArgs} args - Arguments to find a Application
     * @example
     * // Get one Application
     * const application = await prisma.application.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ApplicationFindFirstOrThrowArgs>(args?: SelectSubset<T, ApplicationFindFirstOrThrowArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Applications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Applications
     * const applications = await prisma.application.findMany()
     * 
     * // Get first 10 Applications
     * const applications = await prisma.application.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const applicationWithIdOnly = await prisma.application.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ApplicationFindManyArgs>(args?: SelectSubset<T, ApplicationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Application.
     * @param {ApplicationCreateArgs} args - Arguments to create a Application.
     * @example
     * // Create one Application
     * const Application = await prisma.application.create({
     *   data: {
     *     // ... data to create a Application
     *   }
     * })
     * 
     */
    create<T extends ApplicationCreateArgs>(args: SelectSubset<T, ApplicationCreateArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Applications.
     * @param {ApplicationCreateManyArgs} args - Arguments to create many Applications.
     * @example
     * // Create many Applications
     * const application = await prisma.application.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ApplicationCreateManyArgs>(args?: SelectSubset<T, ApplicationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Applications and returns the data saved in the database.
     * @param {ApplicationCreateManyAndReturnArgs} args - Arguments to create many Applications.
     * @example
     * // Create many Applications
     * const application = await prisma.application.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Applications and only return the `id`
     * const applicationWithIdOnly = await prisma.application.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ApplicationCreateManyAndReturnArgs>(args?: SelectSubset<T, ApplicationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Application.
     * @param {ApplicationDeleteArgs} args - Arguments to delete one Application.
     * @example
     * // Delete one Application
     * const Application = await prisma.application.delete({
     *   where: {
     *     // ... filter to delete one Application
     *   }
     * })
     * 
     */
    delete<T extends ApplicationDeleteArgs>(args: SelectSubset<T, ApplicationDeleteArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Application.
     * @param {ApplicationUpdateArgs} args - Arguments to update one Application.
     * @example
     * // Update one Application
     * const application = await prisma.application.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ApplicationUpdateArgs>(args: SelectSubset<T, ApplicationUpdateArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Applications.
     * @param {ApplicationDeleteManyArgs} args - Arguments to filter Applications to delete.
     * @example
     * // Delete a few Applications
     * const { count } = await prisma.application.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ApplicationDeleteManyArgs>(args?: SelectSubset<T, ApplicationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Applications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Applications
     * const application = await prisma.application.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ApplicationUpdateManyArgs>(args: SelectSubset<T, ApplicationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Application.
     * @param {ApplicationUpsertArgs} args - Arguments to update or create a Application.
     * @example
     * // Update or create a Application
     * const application = await prisma.application.upsert({
     *   create: {
     *     // ... data to create a Application
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Application we want to update
     *   }
     * })
     */
    upsert<T extends ApplicationUpsertArgs>(args: SelectSubset<T, ApplicationUpsertArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Applications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationCountArgs} args - Arguments to filter Applications to count.
     * @example
     * // Count the number of Applications
     * const count = await prisma.application.count({
     *   where: {
     *     // ... the filter for the Applications we want to count
     *   }
     * })
    **/
    count<T extends ApplicationCountArgs>(
      args?: Subset<T, ApplicationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApplicationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Application.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ApplicationAggregateArgs>(args: Subset<T, ApplicationAggregateArgs>): Prisma.PrismaPromise<GetApplicationAggregateType<T>>

    /**
     * Group by Application.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ApplicationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ApplicationGroupByArgs['orderBy'] }
        : { orderBy?: ApplicationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ApplicationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApplicationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Application model
   */
  readonly fields: ApplicationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Application.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ApplicationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    documents<T extends Application$documentsArgs<ExtArgs> = {}>(args?: Subset<T, Application$documentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationDocumentPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Application model
   */ 
  interface ApplicationFieldRefs {
    readonly id: FieldRef<"Application", 'String'>
    readonly schoolId: FieldRef<"Application", 'String'>
    readonly applicationNo: FieldRef<"Application", 'String'>
    readonly firstName: FieldRef<"Application", 'String'>
    readonly lastName: FieldRef<"Application", 'String'>
    readonly email: FieldRef<"Application", 'String'>
    readonly phone: FieldRef<"Application", 'String'>
    readonly dateOfBirth: FieldRef<"Application", 'DateTime'>
    readonly gender: FieldRef<"Application", 'String'>
    readonly address: FieldRef<"Application", 'String'>
    readonly city: FieldRef<"Application", 'String'>
    readonly state: FieldRef<"Application", 'String'>
    readonly country: FieldRef<"Application", 'String'>
    readonly postalCode: FieldRef<"Application", 'String'>
    readonly nationality: FieldRef<"Application", 'String'>
    readonly previousSchool: FieldRef<"Application", 'String'>
    readonly gradeApplying: FieldRef<"Application", 'Int'>
    readonly academicYear: FieldRef<"Application", 'String'>
    readonly parentName: FieldRef<"Application", 'String'>
    readonly parentEmail: FieldRef<"Application", 'String'>
    readonly parentPhone: FieldRef<"Application", 'String'>
    readonly parentRelation: FieldRef<"Application", 'String'>
    readonly status: FieldRef<"Application", 'ApplicationStatus'>
    readonly reviewNotes: FieldRef<"Application", 'String'>
    readonly reviewedBy: FieldRef<"Application", 'String'>
    readonly reviewedAt: FieldRef<"Application", 'DateTime'>
    readonly admissionDate: FieldRef<"Application", 'DateTime'>
    readonly studentId: FieldRef<"Application", 'String'>
    readonly createdAt: FieldRef<"Application", 'DateTime'>
    readonly updatedAt: FieldRef<"Application", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Application findUnique
   */
  export type ApplicationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * Filter, which Application to fetch.
     */
    where: ApplicationWhereUniqueInput
  }

  /**
   * Application findUniqueOrThrow
   */
  export type ApplicationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * Filter, which Application to fetch.
     */
    where: ApplicationWhereUniqueInput
  }

  /**
   * Application findFirst
   */
  export type ApplicationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * Filter, which Application to fetch.
     */
    where?: ApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Applications to fetch.
     */
    orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Applications.
     */
    cursor?: ApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Applications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Applications.
     */
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[]
  }

  /**
   * Application findFirstOrThrow
   */
  export type ApplicationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * Filter, which Application to fetch.
     */
    where?: ApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Applications to fetch.
     */
    orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Applications.
     */
    cursor?: ApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Applications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Applications.
     */
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[]
  }

  /**
   * Application findMany
   */
  export type ApplicationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * Filter, which Applications to fetch.
     */
    where?: ApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Applications to fetch.
     */
    orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Applications.
     */
    cursor?: ApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Applications.
     */
    skip?: number
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[]
  }

  /**
   * Application create
   */
  export type ApplicationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * The data needed to create a Application.
     */
    data: XOR<ApplicationCreateInput, ApplicationUncheckedCreateInput>
  }

  /**
   * Application createMany
   */
  export type ApplicationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Applications.
     */
    data: ApplicationCreateManyInput | ApplicationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Application createManyAndReturn
   */
  export type ApplicationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Applications.
     */
    data: ApplicationCreateManyInput | ApplicationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Application update
   */
  export type ApplicationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * The data needed to update a Application.
     */
    data: XOR<ApplicationUpdateInput, ApplicationUncheckedUpdateInput>
    /**
     * Choose, which Application to update.
     */
    where: ApplicationWhereUniqueInput
  }

  /**
   * Application updateMany
   */
  export type ApplicationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Applications.
     */
    data: XOR<ApplicationUpdateManyMutationInput, ApplicationUncheckedUpdateManyInput>
    /**
     * Filter which Applications to update
     */
    where?: ApplicationWhereInput
  }

  /**
   * Application upsert
   */
  export type ApplicationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * The filter to search for the Application to update in case it exists.
     */
    where: ApplicationWhereUniqueInput
    /**
     * In case the Application found by the `where` argument doesn't exist, create a new Application with this data.
     */
    create: XOR<ApplicationCreateInput, ApplicationUncheckedCreateInput>
    /**
     * In case the Application was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ApplicationUpdateInput, ApplicationUncheckedUpdateInput>
  }

  /**
   * Application delete
   */
  export type ApplicationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * Filter which Application to delete.
     */
    where: ApplicationWhereUniqueInput
  }

  /**
   * Application deleteMany
   */
  export type ApplicationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Applications to delete
     */
    where?: ApplicationWhereInput
  }

  /**
   * Application.documents
   */
  export type Application$documentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationDocument
     */
    select?: ApplicationDocumentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationDocumentInclude<ExtArgs> | null
    where?: ApplicationDocumentWhereInput
    orderBy?: ApplicationDocumentOrderByWithRelationInput | ApplicationDocumentOrderByWithRelationInput[]
    cursor?: ApplicationDocumentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApplicationDocumentScalarFieldEnum | ApplicationDocumentScalarFieldEnum[]
  }

  /**
   * Application without action
   */
  export type ApplicationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
  }


  /**
   * Model ApplicationDocument
   */

  export type AggregateApplicationDocument = {
    _count: ApplicationDocumentCountAggregateOutputType | null
    _min: ApplicationDocumentMinAggregateOutputType | null
    _max: ApplicationDocumentMaxAggregateOutputType | null
  }

  export type ApplicationDocumentMinAggregateOutputType = {
    id: string | null
    applicationId: string | null
    name: string | null
    type: string | null
    url: string | null
    uploadedAt: Date | null
  }

  export type ApplicationDocumentMaxAggregateOutputType = {
    id: string | null
    applicationId: string | null
    name: string | null
    type: string | null
    url: string | null
    uploadedAt: Date | null
  }

  export type ApplicationDocumentCountAggregateOutputType = {
    id: number
    applicationId: number
    name: number
    type: number
    url: number
    uploadedAt: number
    _all: number
  }


  export type ApplicationDocumentMinAggregateInputType = {
    id?: true
    applicationId?: true
    name?: true
    type?: true
    url?: true
    uploadedAt?: true
  }

  export type ApplicationDocumentMaxAggregateInputType = {
    id?: true
    applicationId?: true
    name?: true
    type?: true
    url?: true
    uploadedAt?: true
  }

  export type ApplicationDocumentCountAggregateInputType = {
    id?: true
    applicationId?: true
    name?: true
    type?: true
    url?: true
    uploadedAt?: true
    _all?: true
  }

  export type ApplicationDocumentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApplicationDocument to aggregate.
     */
    where?: ApplicationDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApplicationDocuments to fetch.
     */
    orderBy?: ApplicationDocumentOrderByWithRelationInput | ApplicationDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ApplicationDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApplicationDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApplicationDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ApplicationDocuments
    **/
    _count?: true | ApplicationDocumentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ApplicationDocumentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ApplicationDocumentMaxAggregateInputType
  }

  export type GetApplicationDocumentAggregateType<T extends ApplicationDocumentAggregateArgs> = {
        [P in keyof T & keyof AggregateApplicationDocument]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApplicationDocument[P]>
      : GetScalarType<T[P], AggregateApplicationDocument[P]>
  }




  export type ApplicationDocumentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApplicationDocumentWhereInput
    orderBy?: ApplicationDocumentOrderByWithAggregationInput | ApplicationDocumentOrderByWithAggregationInput[]
    by: ApplicationDocumentScalarFieldEnum[] | ApplicationDocumentScalarFieldEnum
    having?: ApplicationDocumentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ApplicationDocumentCountAggregateInputType | true
    _min?: ApplicationDocumentMinAggregateInputType
    _max?: ApplicationDocumentMaxAggregateInputType
  }

  export type ApplicationDocumentGroupByOutputType = {
    id: string
    applicationId: string
    name: string
    type: string
    url: string
    uploadedAt: Date
    _count: ApplicationDocumentCountAggregateOutputType | null
    _min: ApplicationDocumentMinAggregateOutputType | null
    _max: ApplicationDocumentMaxAggregateOutputType | null
  }

  type GetApplicationDocumentGroupByPayload<T extends ApplicationDocumentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ApplicationDocumentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ApplicationDocumentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApplicationDocumentGroupByOutputType[P]>
            : GetScalarType<T[P], ApplicationDocumentGroupByOutputType[P]>
        }
      >
    >


  export type ApplicationDocumentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    applicationId?: boolean
    name?: boolean
    type?: boolean
    url?: boolean
    uploadedAt?: boolean
    application?: boolean | ApplicationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["applicationDocument"]>

  export type ApplicationDocumentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    applicationId?: boolean
    name?: boolean
    type?: boolean
    url?: boolean
    uploadedAt?: boolean
    application?: boolean | ApplicationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["applicationDocument"]>

  export type ApplicationDocumentSelectScalar = {
    id?: boolean
    applicationId?: boolean
    name?: boolean
    type?: boolean
    url?: boolean
    uploadedAt?: boolean
  }

  export type ApplicationDocumentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    application?: boolean | ApplicationDefaultArgs<ExtArgs>
  }
  export type ApplicationDocumentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    application?: boolean | ApplicationDefaultArgs<ExtArgs>
  }

  export type $ApplicationDocumentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ApplicationDocument"
    objects: {
      application: Prisma.$ApplicationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      applicationId: string
      name: string
      type: string
      url: string
      uploadedAt: Date
    }, ExtArgs["result"]["applicationDocument"]>
    composites: {}
  }

  type ApplicationDocumentGetPayload<S extends boolean | null | undefined | ApplicationDocumentDefaultArgs> = $Result.GetResult<Prisma.$ApplicationDocumentPayload, S>

  type ApplicationDocumentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ApplicationDocumentFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ApplicationDocumentCountAggregateInputType | true
    }

  export interface ApplicationDocumentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ApplicationDocument'], meta: { name: 'ApplicationDocument' } }
    /**
     * Find zero or one ApplicationDocument that matches the filter.
     * @param {ApplicationDocumentFindUniqueArgs} args - Arguments to find a ApplicationDocument
     * @example
     * // Get one ApplicationDocument
     * const applicationDocument = await prisma.applicationDocument.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ApplicationDocumentFindUniqueArgs>(args: SelectSubset<T, ApplicationDocumentFindUniqueArgs<ExtArgs>>): Prisma__ApplicationDocumentClient<$Result.GetResult<Prisma.$ApplicationDocumentPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ApplicationDocument that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ApplicationDocumentFindUniqueOrThrowArgs} args - Arguments to find a ApplicationDocument
     * @example
     * // Get one ApplicationDocument
     * const applicationDocument = await prisma.applicationDocument.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ApplicationDocumentFindUniqueOrThrowArgs>(args: SelectSubset<T, ApplicationDocumentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ApplicationDocumentClient<$Result.GetResult<Prisma.$ApplicationDocumentPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ApplicationDocument that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationDocumentFindFirstArgs} args - Arguments to find a ApplicationDocument
     * @example
     * // Get one ApplicationDocument
     * const applicationDocument = await prisma.applicationDocument.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ApplicationDocumentFindFirstArgs>(args?: SelectSubset<T, ApplicationDocumentFindFirstArgs<ExtArgs>>): Prisma__ApplicationDocumentClient<$Result.GetResult<Prisma.$ApplicationDocumentPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ApplicationDocument that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationDocumentFindFirstOrThrowArgs} args - Arguments to find a ApplicationDocument
     * @example
     * // Get one ApplicationDocument
     * const applicationDocument = await prisma.applicationDocument.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ApplicationDocumentFindFirstOrThrowArgs>(args?: SelectSubset<T, ApplicationDocumentFindFirstOrThrowArgs<ExtArgs>>): Prisma__ApplicationDocumentClient<$Result.GetResult<Prisma.$ApplicationDocumentPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ApplicationDocuments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationDocumentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ApplicationDocuments
     * const applicationDocuments = await prisma.applicationDocument.findMany()
     * 
     * // Get first 10 ApplicationDocuments
     * const applicationDocuments = await prisma.applicationDocument.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const applicationDocumentWithIdOnly = await prisma.applicationDocument.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ApplicationDocumentFindManyArgs>(args?: SelectSubset<T, ApplicationDocumentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationDocumentPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ApplicationDocument.
     * @param {ApplicationDocumentCreateArgs} args - Arguments to create a ApplicationDocument.
     * @example
     * // Create one ApplicationDocument
     * const ApplicationDocument = await prisma.applicationDocument.create({
     *   data: {
     *     // ... data to create a ApplicationDocument
     *   }
     * })
     * 
     */
    create<T extends ApplicationDocumentCreateArgs>(args: SelectSubset<T, ApplicationDocumentCreateArgs<ExtArgs>>): Prisma__ApplicationDocumentClient<$Result.GetResult<Prisma.$ApplicationDocumentPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ApplicationDocuments.
     * @param {ApplicationDocumentCreateManyArgs} args - Arguments to create many ApplicationDocuments.
     * @example
     * // Create many ApplicationDocuments
     * const applicationDocument = await prisma.applicationDocument.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ApplicationDocumentCreateManyArgs>(args?: SelectSubset<T, ApplicationDocumentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ApplicationDocuments and returns the data saved in the database.
     * @param {ApplicationDocumentCreateManyAndReturnArgs} args - Arguments to create many ApplicationDocuments.
     * @example
     * // Create many ApplicationDocuments
     * const applicationDocument = await prisma.applicationDocument.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ApplicationDocuments and only return the `id`
     * const applicationDocumentWithIdOnly = await prisma.applicationDocument.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ApplicationDocumentCreateManyAndReturnArgs>(args?: SelectSubset<T, ApplicationDocumentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationDocumentPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ApplicationDocument.
     * @param {ApplicationDocumentDeleteArgs} args - Arguments to delete one ApplicationDocument.
     * @example
     * // Delete one ApplicationDocument
     * const ApplicationDocument = await prisma.applicationDocument.delete({
     *   where: {
     *     // ... filter to delete one ApplicationDocument
     *   }
     * })
     * 
     */
    delete<T extends ApplicationDocumentDeleteArgs>(args: SelectSubset<T, ApplicationDocumentDeleteArgs<ExtArgs>>): Prisma__ApplicationDocumentClient<$Result.GetResult<Prisma.$ApplicationDocumentPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ApplicationDocument.
     * @param {ApplicationDocumentUpdateArgs} args - Arguments to update one ApplicationDocument.
     * @example
     * // Update one ApplicationDocument
     * const applicationDocument = await prisma.applicationDocument.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ApplicationDocumentUpdateArgs>(args: SelectSubset<T, ApplicationDocumentUpdateArgs<ExtArgs>>): Prisma__ApplicationDocumentClient<$Result.GetResult<Prisma.$ApplicationDocumentPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ApplicationDocuments.
     * @param {ApplicationDocumentDeleteManyArgs} args - Arguments to filter ApplicationDocuments to delete.
     * @example
     * // Delete a few ApplicationDocuments
     * const { count } = await prisma.applicationDocument.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ApplicationDocumentDeleteManyArgs>(args?: SelectSubset<T, ApplicationDocumentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ApplicationDocuments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationDocumentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ApplicationDocuments
     * const applicationDocument = await prisma.applicationDocument.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ApplicationDocumentUpdateManyArgs>(args: SelectSubset<T, ApplicationDocumentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ApplicationDocument.
     * @param {ApplicationDocumentUpsertArgs} args - Arguments to update or create a ApplicationDocument.
     * @example
     * // Update or create a ApplicationDocument
     * const applicationDocument = await prisma.applicationDocument.upsert({
     *   create: {
     *     // ... data to create a ApplicationDocument
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ApplicationDocument we want to update
     *   }
     * })
     */
    upsert<T extends ApplicationDocumentUpsertArgs>(args: SelectSubset<T, ApplicationDocumentUpsertArgs<ExtArgs>>): Prisma__ApplicationDocumentClient<$Result.GetResult<Prisma.$ApplicationDocumentPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ApplicationDocuments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationDocumentCountArgs} args - Arguments to filter ApplicationDocuments to count.
     * @example
     * // Count the number of ApplicationDocuments
     * const count = await prisma.applicationDocument.count({
     *   where: {
     *     // ... the filter for the ApplicationDocuments we want to count
     *   }
     * })
    **/
    count<T extends ApplicationDocumentCountArgs>(
      args?: Subset<T, ApplicationDocumentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApplicationDocumentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ApplicationDocument.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationDocumentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ApplicationDocumentAggregateArgs>(args: Subset<T, ApplicationDocumentAggregateArgs>): Prisma.PrismaPromise<GetApplicationDocumentAggregateType<T>>

    /**
     * Group by ApplicationDocument.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationDocumentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ApplicationDocumentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ApplicationDocumentGroupByArgs['orderBy'] }
        : { orderBy?: ApplicationDocumentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ApplicationDocumentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApplicationDocumentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ApplicationDocument model
   */
  readonly fields: ApplicationDocumentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ApplicationDocument.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ApplicationDocumentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    application<T extends ApplicationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ApplicationDefaultArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ApplicationDocument model
   */ 
  interface ApplicationDocumentFieldRefs {
    readonly id: FieldRef<"ApplicationDocument", 'String'>
    readonly applicationId: FieldRef<"ApplicationDocument", 'String'>
    readonly name: FieldRef<"ApplicationDocument", 'String'>
    readonly type: FieldRef<"ApplicationDocument", 'String'>
    readonly url: FieldRef<"ApplicationDocument", 'String'>
    readonly uploadedAt: FieldRef<"ApplicationDocument", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ApplicationDocument findUnique
   */
  export type ApplicationDocumentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationDocument
     */
    select?: ApplicationDocumentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationDocumentInclude<ExtArgs> | null
    /**
     * Filter, which ApplicationDocument to fetch.
     */
    where: ApplicationDocumentWhereUniqueInput
  }

  /**
   * ApplicationDocument findUniqueOrThrow
   */
  export type ApplicationDocumentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationDocument
     */
    select?: ApplicationDocumentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationDocumentInclude<ExtArgs> | null
    /**
     * Filter, which ApplicationDocument to fetch.
     */
    where: ApplicationDocumentWhereUniqueInput
  }

  /**
   * ApplicationDocument findFirst
   */
  export type ApplicationDocumentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationDocument
     */
    select?: ApplicationDocumentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationDocumentInclude<ExtArgs> | null
    /**
     * Filter, which ApplicationDocument to fetch.
     */
    where?: ApplicationDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApplicationDocuments to fetch.
     */
    orderBy?: ApplicationDocumentOrderByWithRelationInput | ApplicationDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApplicationDocuments.
     */
    cursor?: ApplicationDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApplicationDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApplicationDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApplicationDocuments.
     */
    distinct?: ApplicationDocumentScalarFieldEnum | ApplicationDocumentScalarFieldEnum[]
  }

  /**
   * ApplicationDocument findFirstOrThrow
   */
  export type ApplicationDocumentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationDocument
     */
    select?: ApplicationDocumentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationDocumentInclude<ExtArgs> | null
    /**
     * Filter, which ApplicationDocument to fetch.
     */
    where?: ApplicationDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApplicationDocuments to fetch.
     */
    orderBy?: ApplicationDocumentOrderByWithRelationInput | ApplicationDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApplicationDocuments.
     */
    cursor?: ApplicationDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApplicationDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApplicationDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApplicationDocuments.
     */
    distinct?: ApplicationDocumentScalarFieldEnum | ApplicationDocumentScalarFieldEnum[]
  }

  /**
   * ApplicationDocument findMany
   */
  export type ApplicationDocumentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationDocument
     */
    select?: ApplicationDocumentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationDocumentInclude<ExtArgs> | null
    /**
     * Filter, which ApplicationDocuments to fetch.
     */
    where?: ApplicationDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApplicationDocuments to fetch.
     */
    orderBy?: ApplicationDocumentOrderByWithRelationInput | ApplicationDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ApplicationDocuments.
     */
    cursor?: ApplicationDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApplicationDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApplicationDocuments.
     */
    skip?: number
    distinct?: ApplicationDocumentScalarFieldEnum | ApplicationDocumentScalarFieldEnum[]
  }

  /**
   * ApplicationDocument create
   */
  export type ApplicationDocumentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationDocument
     */
    select?: ApplicationDocumentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationDocumentInclude<ExtArgs> | null
    /**
     * The data needed to create a ApplicationDocument.
     */
    data: XOR<ApplicationDocumentCreateInput, ApplicationDocumentUncheckedCreateInput>
  }

  /**
   * ApplicationDocument createMany
   */
  export type ApplicationDocumentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ApplicationDocuments.
     */
    data: ApplicationDocumentCreateManyInput | ApplicationDocumentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ApplicationDocument createManyAndReturn
   */
  export type ApplicationDocumentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationDocument
     */
    select?: ApplicationDocumentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ApplicationDocuments.
     */
    data: ApplicationDocumentCreateManyInput | ApplicationDocumentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationDocumentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ApplicationDocument update
   */
  export type ApplicationDocumentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationDocument
     */
    select?: ApplicationDocumentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationDocumentInclude<ExtArgs> | null
    /**
     * The data needed to update a ApplicationDocument.
     */
    data: XOR<ApplicationDocumentUpdateInput, ApplicationDocumentUncheckedUpdateInput>
    /**
     * Choose, which ApplicationDocument to update.
     */
    where: ApplicationDocumentWhereUniqueInput
  }

  /**
   * ApplicationDocument updateMany
   */
  export type ApplicationDocumentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ApplicationDocuments.
     */
    data: XOR<ApplicationDocumentUpdateManyMutationInput, ApplicationDocumentUncheckedUpdateManyInput>
    /**
     * Filter which ApplicationDocuments to update
     */
    where?: ApplicationDocumentWhereInput
  }

  /**
   * ApplicationDocument upsert
   */
  export type ApplicationDocumentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationDocument
     */
    select?: ApplicationDocumentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationDocumentInclude<ExtArgs> | null
    /**
     * The filter to search for the ApplicationDocument to update in case it exists.
     */
    where: ApplicationDocumentWhereUniqueInput
    /**
     * In case the ApplicationDocument found by the `where` argument doesn't exist, create a new ApplicationDocument with this data.
     */
    create: XOR<ApplicationDocumentCreateInput, ApplicationDocumentUncheckedCreateInput>
    /**
     * In case the ApplicationDocument was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ApplicationDocumentUpdateInput, ApplicationDocumentUncheckedUpdateInput>
  }

  /**
   * ApplicationDocument delete
   */
  export type ApplicationDocumentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationDocument
     */
    select?: ApplicationDocumentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationDocumentInclude<ExtArgs> | null
    /**
     * Filter which ApplicationDocument to delete.
     */
    where: ApplicationDocumentWhereUniqueInput
  }

  /**
   * ApplicationDocument deleteMany
   */
  export type ApplicationDocumentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApplicationDocuments to delete
     */
    where?: ApplicationDocumentWhereInput
  }

  /**
   * ApplicationDocument without action
   */
  export type ApplicationDocumentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationDocument
     */
    select?: ApplicationDocumentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationDocumentInclude<ExtArgs> | null
  }


  /**
   * Model AdmissionCriteria
   */

  export type AggregateAdmissionCriteria = {
    _count: AdmissionCriteriaCountAggregateOutputType | null
    _avg: AdmissionCriteriaAvgAggregateOutputType | null
    _sum: AdmissionCriteriaSumAggregateOutputType | null
    _min: AdmissionCriteriaMinAggregateOutputType | null
    _max: AdmissionCriteriaMaxAggregateOutputType | null
  }

  export type AdmissionCriteriaAvgAggregateOutputType = {
    gradeId: number | null
    minAge: number | null
    maxAge: number | null
    maxStudents: number | null
  }

  export type AdmissionCriteriaSumAggregateOutputType = {
    gradeId: number | null
    minAge: number | null
    maxAge: number | null
    maxStudents: number | null
  }

  export type AdmissionCriteriaMinAggregateOutputType = {
    id: string | null
    schoolId: string | null
    gradeId: number | null
    minAge: number | null
    maxAge: number | null
    entranceExam: boolean | null
    interview: boolean | null
    maxStudents: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdmissionCriteriaMaxAggregateOutputType = {
    id: string | null
    schoolId: string | null
    gradeId: number | null
    minAge: number | null
    maxAge: number | null
    entranceExam: boolean | null
    interview: boolean | null
    maxStudents: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdmissionCriteriaCountAggregateOutputType = {
    id: number
    schoolId: number
    gradeId: number
    minAge: number
    maxAge: number
    requiredDocs: number
    entranceExam: number
    interview: number
    maxStudents: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AdmissionCriteriaAvgAggregateInputType = {
    gradeId?: true
    minAge?: true
    maxAge?: true
    maxStudents?: true
  }

  export type AdmissionCriteriaSumAggregateInputType = {
    gradeId?: true
    minAge?: true
    maxAge?: true
    maxStudents?: true
  }

  export type AdmissionCriteriaMinAggregateInputType = {
    id?: true
    schoolId?: true
    gradeId?: true
    minAge?: true
    maxAge?: true
    entranceExam?: true
    interview?: true
    maxStudents?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdmissionCriteriaMaxAggregateInputType = {
    id?: true
    schoolId?: true
    gradeId?: true
    minAge?: true
    maxAge?: true
    entranceExam?: true
    interview?: true
    maxStudents?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdmissionCriteriaCountAggregateInputType = {
    id?: true
    schoolId?: true
    gradeId?: true
    minAge?: true
    maxAge?: true
    requiredDocs?: true
    entranceExam?: true
    interview?: true
    maxStudents?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AdmissionCriteriaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdmissionCriteria to aggregate.
     */
    where?: AdmissionCriteriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdmissionCriteria to fetch.
     */
    orderBy?: AdmissionCriteriaOrderByWithRelationInput | AdmissionCriteriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdmissionCriteriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdmissionCriteria from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdmissionCriteria.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AdmissionCriteria
    **/
    _count?: true | AdmissionCriteriaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdmissionCriteriaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdmissionCriteriaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdmissionCriteriaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdmissionCriteriaMaxAggregateInputType
  }

  export type GetAdmissionCriteriaAggregateType<T extends AdmissionCriteriaAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmissionCriteria]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmissionCriteria[P]>
      : GetScalarType<T[P], AggregateAdmissionCriteria[P]>
  }




  export type AdmissionCriteriaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdmissionCriteriaWhereInput
    orderBy?: AdmissionCriteriaOrderByWithAggregationInput | AdmissionCriteriaOrderByWithAggregationInput[]
    by: AdmissionCriteriaScalarFieldEnum[] | AdmissionCriteriaScalarFieldEnum
    having?: AdmissionCriteriaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdmissionCriteriaCountAggregateInputType | true
    _avg?: AdmissionCriteriaAvgAggregateInputType
    _sum?: AdmissionCriteriaSumAggregateInputType
    _min?: AdmissionCriteriaMinAggregateInputType
    _max?: AdmissionCriteriaMaxAggregateInputType
  }

  export type AdmissionCriteriaGroupByOutputType = {
    id: string
    schoolId: string
    gradeId: number | null
    minAge: number | null
    maxAge: number | null
    requiredDocs: string[]
    entranceExam: boolean
    interview: boolean
    maxStudents: number | null
    createdAt: Date
    updatedAt: Date
    _count: AdmissionCriteriaCountAggregateOutputType | null
    _avg: AdmissionCriteriaAvgAggregateOutputType | null
    _sum: AdmissionCriteriaSumAggregateOutputType | null
    _min: AdmissionCriteriaMinAggregateOutputType | null
    _max: AdmissionCriteriaMaxAggregateOutputType | null
  }

  type GetAdmissionCriteriaGroupByPayload<T extends AdmissionCriteriaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdmissionCriteriaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdmissionCriteriaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdmissionCriteriaGroupByOutputType[P]>
            : GetScalarType<T[P], AdmissionCriteriaGroupByOutputType[P]>
        }
      >
    >


  export type AdmissionCriteriaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    schoolId?: boolean
    gradeId?: boolean
    minAge?: boolean
    maxAge?: boolean
    requiredDocs?: boolean
    entranceExam?: boolean
    interview?: boolean
    maxStudents?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["admissionCriteria"]>

  export type AdmissionCriteriaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    schoolId?: boolean
    gradeId?: boolean
    minAge?: boolean
    maxAge?: boolean
    requiredDocs?: boolean
    entranceExam?: boolean
    interview?: boolean
    maxStudents?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["admissionCriteria"]>

  export type AdmissionCriteriaSelectScalar = {
    id?: boolean
    schoolId?: boolean
    gradeId?: boolean
    minAge?: boolean
    maxAge?: boolean
    requiredDocs?: boolean
    entranceExam?: boolean
    interview?: boolean
    maxStudents?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $AdmissionCriteriaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AdmissionCriteria"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      schoolId: string
      gradeId: number | null
      minAge: number | null
      maxAge: number | null
      requiredDocs: string[]
      entranceExam: boolean
      interview: boolean
      maxStudents: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["admissionCriteria"]>
    composites: {}
  }

  type AdmissionCriteriaGetPayload<S extends boolean | null | undefined | AdmissionCriteriaDefaultArgs> = $Result.GetResult<Prisma.$AdmissionCriteriaPayload, S>

  type AdmissionCriteriaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AdmissionCriteriaFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AdmissionCriteriaCountAggregateInputType | true
    }

  export interface AdmissionCriteriaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AdmissionCriteria'], meta: { name: 'AdmissionCriteria' } }
    /**
     * Find zero or one AdmissionCriteria that matches the filter.
     * @param {AdmissionCriteriaFindUniqueArgs} args - Arguments to find a AdmissionCriteria
     * @example
     * // Get one AdmissionCriteria
     * const admissionCriteria = await prisma.admissionCriteria.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdmissionCriteriaFindUniqueArgs>(args: SelectSubset<T, AdmissionCriteriaFindUniqueArgs<ExtArgs>>): Prisma__AdmissionCriteriaClient<$Result.GetResult<Prisma.$AdmissionCriteriaPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one AdmissionCriteria that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AdmissionCriteriaFindUniqueOrThrowArgs} args - Arguments to find a AdmissionCriteria
     * @example
     * // Get one AdmissionCriteria
     * const admissionCriteria = await prisma.admissionCriteria.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdmissionCriteriaFindUniqueOrThrowArgs>(args: SelectSubset<T, AdmissionCriteriaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdmissionCriteriaClient<$Result.GetResult<Prisma.$AdmissionCriteriaPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first AdmissionCriteria that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdmissionCriteriaFindFirstArgs} args - Arguments to find a AdmissionCriteria
     * @example
     * // Get one AdmissionCriteria
     * const admissionCriteria = await prisma.admissionCriteria.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdmissionCriteriaFindFirstArgs>(args?: SelectSubset<T, AdmissionCriteriaFindFirstArgs<ExtArgs>>): Prisma__AdmissionCriteriaClient<$Result.GetResult<Prisma.$AdmissionCriteriaPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first AdmissionCriteria that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdmissionCriteriaFindFirstOrThrowArgs} args - Arguments to find a AdmissionCriteria
     * @example
     * // Get one AdmissionCriteria
     * const admissionCriteria = await prisma.admissionCriteria.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdmissionCriteriaFindFirstOrThrowArgs>(args?: SelectSubset<T, AdmissionCriteriaFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdmissionCriteriaClient<$Result.GetResult<Prisma.$AdmissionCriteriaPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more AdmissionCriteria that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdmissionCriteriaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AdmissionCriteria
     * const admissionCriteria = await prisma.admissionCriteria.findMany()
     * 
     * // Get first 10 AdmissionCriteria
     * const admissionCriteria = await prisma.admissionCriteria.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const admissionCriteriaWithIdOnly = await prisma.admissionCriteria.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdmissionCriteriaFindManyArgs>(args?: SelectSubset<T, AdmissionCriteriaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdmissionCriteriaPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a AdmissionCriteria.
     * @param {AdmissionCriteriaCreateArgs} args - Arguments to create a AdmissionCriteria.
     * @example
     * // Create one AdmissionCriteria
     * const AdmissionCriteria = await prisma.admissionCriteria.create({
     *   data: {
     *     // ... data to create a AdmissionCriteria
     *   }
     * })
     * 
     */
    create<T extends AdmissionCriteriaCreateArgs>(args: SelectSubset<T, AdmissionCriteriaCreateArgs<ExtArgs>>): Prisma__AdmissionCriteriaClient<$Result.GetResult<Prisma.$AdmissionCriteriaPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many AdmissionCriteria.
     * @param {AdmissionCriteriaCreateManyArgs} args - Arguments to create many AdmissionCriteria.
     * @example
     * // Create many AdmissionCriteria
     * const admissionCriteria = await prisma.admissionCriteria.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdmissionCriteriaCreateManyArgs>(args?: SelectSubset<T, AdmissionCriteriaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AdmissionCriteria and returns the data saved in the database.
     * @param {AdmissionCriteriaCreateManyAndReturnArgs} args - Arguments to create many AdmissionCriteria.
     * @example
     * // Create many AdmissionCriteria
     * const admissionCriteria = await prisma.admissionCriteria.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AdmissionCriteria and only return the `id`
     * const admissionCriteriaWithIdOnly = await prisma.admissionCriteria.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdmissionCriteriaCreateManyAndReturnArgs>(args?: SelectSubset<T, AdmissionCriteriaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdmissionCriteriaPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a AdmissionCriteria.
     * @param {AdmissionCriteriaDeleteArgs} args - Arguments to delete one AdmissionCriteria.
     * @example
     * // Delete one AdmissionCriteria
     * const AdmissionCriteria = await prisma.admissionCriteria.delete({
     *   where: {
     *     // ... filter to delete one AdmissionCriteria
     *   }
     * })
     * 
     */
    delete<T extends AdmissionCriteriaDeleteArgs>(args: SelectSubset<T, AdmissionCriteriaDeleteArgs<ExtArgs>>): Prisma__AdmissionCriteriaClient<$Result.GetResult<Prisma.$AdmissionCriteriaPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one AdmissionCriteria.
     * @param {AdmissionCriteriaUpdateArgs} args - Arguments to update one AdmissionCriteria.
     * @example
     * // Update one AdmissionCriteria
     * const admissionCriteria = await prisma.admissionCriteria.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdmissionCriteriaUpdateArgs>(args: SelectSubset<T, AdmissionCriteriaUpdateArgs<ExtArgs>>): Prisma__AdmissionCriteriaClient<$Result.GetResult<Prisma.$AdmissionCriteriaPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more AdmissionCriteria.
     * @param {AdmissionCriteriaDeleteManyArgs} args - Arguments to filter AdmissionCriteria to delete.
     * @example
     * // Delete a few AdmissionCriteria
     * const { count } = await prisma.admissionCriteria.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdmissionCriteriaDeleteManyArgs>(args?: SelectSubset<T, AdmissionCriteriaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AdmissionCriteria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdmissionCriteriaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AdmissionCriteria
     * const admissionCriteria = await prisma.admissionCriteria.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdmissionCriteriaUpdateManyArgs>(args: SelectSubset<T, AdmissionCriteriaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AdmissionCriteria.
     * @param {AdmissionCriteriaUpsertArgs} args - Arguments to update or create a AdmissionCriteria.
     * @example
     * // Update or create a AdmissionCriteria
     * const admissionCriteria = await prisma.admissionCriteria.upsert({
     *   create: {
     *     // ... data to create a AdmissionCriteria
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AdmissionCriteria we want to update
     *   }
     * })
     */
    upsert<T extends AdmissionCriteriaUpsertArgs>(args: SelectSubset<T, AdmissionCriteriaUpsertArgs<ExtArgs>>): Prisma__AdmissionCriteriaClient<$Result.GetResult<Prisma.$AdmissionCriteriaPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of AdmissionCriteria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdmissionCriteriaCountArgs} args - Arguments to filter AdmissionCriteria to count.
     * @example
     * // Count the number of AdmissionCriteria
     * const count = await prisma.admissionCriteria.count({
     *   where: {
     *     // ... the filter for the AdmissionCriteria we want to count
     *   }
     * })
    **/
    count<T extends AdmissionCriteriaCountArgs>(
      args?: Subset<T, AdmissionCriteriaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdmissionCriteriaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AdmissionCriteria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdmissionCriteriaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AdmissionCriteriaAggregateArgs>(args: Subset<T, AdmissionCriteriaAggregateArgs>): Prisma.PrismaPromise<GetAdmissionCriteriaAggregateType<T>>

    /**
     * Group by AdmissionCriteria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdmissionCriteriaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AdmissionCriteriaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdmissionCriteriaGroupByArgs['orderBy'] }
        : { orderBy?: AdmissionCriteriaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AdmissionCriteriaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdmissionCriteriaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AdmissionCriteria model
   */
  readonly fields: AdmissionCriteriaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AdmissionCriteria.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdmissionCriteriaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AdmissionCriteria model
   */ 
  interface AdmissionCriteriaFieldRefs {
    readonly id: FieldRef<"AdmissionCriteria", 'String'>
    readonly schoolId: FieldRef<"AdmissionCriteria", 'String'>
    readonly gradeId: FieldRef<"AdmissionCriteria", 'Int'>
    readonly minAge: FieldRef<"AdmissionCriteria", 'Int'>
    readonly maxAge: FieldRef<"AdmissionCriteria", 'Int'>
    readonly requiredDocs: FieldRef<"AdmissionCriteria", 'String[]'>
    readonly entranceExam: FieldRef<"AdmissionCriteria", 'Boolean'>
    readonly interview: FieldRef<"AdmissionCriteria", 'Boolean'>
    readonly maxStudents: FieldRef<"AdmissionCriteria", 'Int'>
    readonly createdAt: FieldRef<"AdmissionCriteria", 'DateTime'>
    readonly updatedAt: FieldRef<"AdmissionCriteria", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AdmissionCriteria findUnique
   */
  export type AdmissionCriteriaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdmissionCriteria
     */
    select?: AdmissionCriteriaSelect<ExtArgs> | null
    /**
     * Filter, which AdmissionCriteria to fetch.
     */
    where: AdmissionCriteriaWhereUniqueInput
  }

  /**
   * AdmissionCriteria findUniqueOrThrow
   */
  export type AdmissionCriteriaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdmissionCriteria
     */
    select?: AdmissionCriteriaSelect<ExtArgs> | null
    /**
     * Filter, which AdmissionCriteria to fetch.
     */
    where: AdmissionCriteriaWhereUniqueInput
  }

  /**
   * AdmissionCriteria findFirst
   */
  export type AdmissionCriteriaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdmissionCriteria
     */
    select?: AdmissionCriteriaSelect<ExtArgs> | null
    /**
     * Filter, which AdmissionCriteria to fetch.
     */
    where?: AdmissionCriteriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdmissionCriteria to fetch.
     */
    orderBy?: AdmissionCriteriaOrderByWithRelationInput | AdmissionCriteriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdmissionCriteria.
     */
    cursor?: AdmissionCriteriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdmissionCriteria from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdmissionCriteria.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdmissionCriteria.
     */
    distinct?: AdmissionCriteriaScalarFieldEnum | AdmissionCriteriaScalarFieldEnum[]
  }

  /**
   * AdmissionCriteria findFirstOrThrow
   */
  export type AdmissionCriteriaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdmissionCriteria
     */
    select?: AdmissionCriteriaSelect<ExtArgs> | null
    /**
     * Filter, which AdmissionCriteria to fetch.
     */
    where?: AdmissionCriteriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdmissionCriteria to fetch.
     */
    orderBy?: AdmissionCriteriaOrderByWithRelationInput | AdmissionCriteriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdmissionCriteria.
     */
    cursor?: AdmissionCriteriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdmissionCriteria from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdmissionCriteria.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdmissionCriteria.
     */
    distinct?: AdmissionCriteriaScalarFieldEnum | AdmissionCriteriaScalarFieldEnum[]
  }

  /**
   * AdmissionCriteria findMany
   */
  export type AdmissionCriteriaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdmissionCriteria
     */
    select?: AdmissionCriteriaSelect<ExtArgs> | null
    /**
     * Filter, which AdmissionCriteria to fetch.
     */
    where?: AdmissionCriteriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdmissionCriteria to fetch.
     */
    orderBy?: AdmissionCriteriaOrderByWithRelationInput | AdmissionCriteriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AdmissionCriteria.
     */
    cursor?: AdmissionCriteriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdmissionCriteria from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdmissionCriteria.
     */
    skip?: number
    distinct?: AdmissionCriteriaScalarFieldEnum | AdmissionCriteriaScalarFieldEnum[]
  }

  /**
   * AdmissionCriteria create
   */
  export type AdmissionCriteriaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdmissionCriteria
     */
    select?: AdmissionCriteriaSelect<ExtArgs> | null
    /**
     * The data needed to create a AdmissionCriteria.
     */
    data: XOR<AdmissionCriteriaCreateInput, AdmissionCriteriaUncheckedCreateInput>
  }

  /**
   * AdmissionCriteria createMany
   */
  export type AdmissionCriteriaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AdmissionCriteria.
     */
    data: AdmissionCriteriaCreateManyInput | AdmissionCriteriaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AdmissionCriteria createManyAndReturn
   */
  export type AdmissionCriteriaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdmissionCriteria
     */
    select?: AdmissionCriteriaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many AdmissionCriteria.
     */
    data: AdmissionCriteriaCreateManyInput | AdmissionCriteriaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AdmissionCriteria update
   */
  export type AdmissionCriteriaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdmissionCriteria
     */
    select?: AdmissionCriteriaSelect<ExtArgs> | null
    /**
     * The data needed to update a AdmissionCriteria.
     */
    data: XOR<AdmissionCriteriaUpdateInput, AdmissionCriteriaUncheckedUpdateInput>
    /**
     * Choose, which AdmissionCriteria to update.
     */
    where: AdmissionCriteriaWhereUniqueInput
  }

  /**
   * AdmissionCriteria updateMany
   */
  export type AdmissionCriteriaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AdmissionCriteria.
     */
    data: XOR<AdmissionCriteriaUpdateManyMutationInput, AdmissionCriteriaUncheckedUpdateManyInput>
    /**
     * Filter which AdmissionCriteria to update
     */
    where?: AdmissionCriteriaWhereInput
  }

  /**
   * AdmissionCriteria upsert
   */
  export type AdmissionCriteriaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdmissionCriteria
     */
    select?: AdmissionCriteriaSelect<ExtArgs> | null
    /**
     * The filter to search for the AdmissionCriteria to update in case it exists.
     */
    where: AdmissionCriteriaWhereUniqueInput
    /**
     * In case the AdmissionCriteria found by the `where` argument doesn't exist, create a new AdmissionCriteria with this data.
     */
    create: XOR<AdmissionCriteriaCreateInput, AdmissionCriteriaUncheckedCreateInput>
    /**
     * In case the AdmissionCriteria was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdmissionCriteriaUpdateInput, AdmissionCriteriaUncheckedUpdateInput>
  }

  /**
   * AdmissionCriteria delete
   */
  export type AdmissionCriteriaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdmissionCriteria
     */
    select?: AdmissionCriteriaSelect<ExtArgs> | null
    /**
     * Filter which AdmissionCriteria to delete.
     */
    where: AdmissionCriteriaWhereUniqueInput
  }

  /**
   * AdmissionCriteria deleteMany
   */
  export type AdmissionCriteriaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdmissionCriteria to delete
     */
    where?: AdmissionCriteriaWhereInput
  }

  /**
   * AdmissionCriteria without action
   */
  export type AdmissionCriteriaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdmissionCriteria
     */
    select?: AdmissionCriteriaSelect<ExtArgs> | null
  }


  /**
   * Model EntranceExam
   */

  export type AggregateEntranceExam = {
    _count: EntranceExamCountAggregateOutputType | null
    _avg: EntranceExamAvgAggregateOutputType | null
    _sum: EntranceExamSumAggregateOutputType | null
    _min: EntranceExamMinAggregateOutputType | null
    _max: EntranceExamMaxAggregateOutputType | null
  }

  export type EntranceExamAvgAggregateOutputType = {
    score: number | null
    maxScore: number | null
  }

  export type EntranceExamSumAggregateOutputType = {
    score: number | null
    maxScore: number | null
  }

  export type EntranceExamMinAggregateOutputType = {
    id: string | null
    schoolId: string | null
    applicationId: string | null
    examDate: Date | null
    examType: string | null
    score: number | null
    maxScore: number | null
    passed: boolean | null
    remarks: string | null
    conductedBy: string | null
    conductedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EntranceExamMaxAggregateOutputType = {
    id: string | null
    schoolId: string | null
    applicationId: string | null
    examDate: Date | null
    examType: string | null
    score: number | null
    maxScore: number | null
    passed: boolean | null
    remarks: string | null
    conductedBy: string | null
    conductedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EntranceExamCountAggregateOutputType = {
    id: number
    schoolId: number
    applicationId: number
    examDate: number
    examType: number
    subjects: number
    score: number
    maxScore: number
    passed: number
    remarks: number
    conductedBy: number
    conductedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EntranceExamAvgAggregateInputType = {
    score?: true
    maxScore?: true
  }

  export type EntranceExamSumAggregateInputType = {
    score?: true
    maxScore?: true
  }

  export type EntranceExamMinAggregateInputType = {
    id?: true
    schoolId?: true
    applicationId?: true
    examDate?: true
    examType?: true
    score?: true
    maxScore?: true
    passed?: true
    remarks?: true
    conductedBy?: true
    conductedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EntranceExamMaxAggregateInputType = {
    id?: true
    schoolId?: true
    applicationId?: true
    examDate?: true
    examType?: true
    score?: true
    maxScore?: true
    passed?: true
    remarks?: true
    conductedBy?: true
    conductedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EntranceExamCountAggregateInputType = {
    id?: true
    schoolId?: true
    applicationId?: true
    examDate?: true
    examType?: true
    subjects?: true
    score?: true
    maxScore?: true
    passed?: true
    remarks?: true
    conductedBy?: true
    conductedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EntranceExamAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EntranceExam to aggregate.
     */
    where?: EntranceExamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EntranceExams to fetch.
     */
    orderBy?: EntranceExamOrderByWithRelationInput | EntranceExamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EntranceExamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EntranceExams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EntranceExams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EntranceExams
    **/
    _count?: true | EntranceExamCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EntranceExamAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EntranceExamSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EntranceExamMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EntranceExamMaxAggregateInputType
  }

  export type GetEntranceExamAggregateType<T extends EntranceExamAggregateArgs> = {
        [P in keyof T & keyof AggregateEntranceExam]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEntranceExam[P]>
      : GetScalarType<T[P], AggregateEntranceExam[P]>
  }




  export type EntranceExamGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EntranceExamWhereInput
    orderBy?: EntranceExamOrderByWithAggregationInput | EntranceExamOrderByWithAggregationInput[]
    by: EntranceExamScalarFieldEnum[] | EntranceExamScalarFieldEnum
    having?: EntranceExamScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EntranceExamCountAggregateInputType | true
    _avg?: EntranceExamAvgAggregateInputType
    _sum?: EntranceExamSumAggregateInputType
    _min?: EntranceExamMinAggregateInputType
    _max?: EntranceExamMaxAggregateInputType
  }

  export type EntranceExamGroupByOutputType = {
    id: string
    schoolId: string
    applicationId: string
    examDate: Date
    examType: string
    subjects: string[]
    score: number | null
    maxScore: number
    passed: boolean | null
    remarks: string | null
    conductedBy: string | null
    conductedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: EntranceExamCountAggregateOutputType | null
    _avg: EntranceExamAvgAggregateOutputType | null
    _sum: EntranceExamSumAggregateOutputType | null
    _min: EntranceExamMinAggregateOutputType | null
    _max: EntranceExamMaxAggregateOutputType | null
  }

  type GetEntranceExamGroupByPayload<T extends EntranceExamGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EntranceExamGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EntranceExamGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EntranceExamGroupByOutputType[P]>
            : GetScalarType<T[P], EntranceExamGroupByOutputType[P]>
        }
      >
    >


  export type EntranceExamSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    schoolId?: boolean
    applicationId?: boolean
    examDate?: boolean
    examType?: boolean
    subjects?: boolean
    score?: boolean
    maxScore?: boolean
    passed?: boolean
    remarks?: boolean
    conductedBy?: boolean
    conductedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["entranceExam"]>

  export type EntranceExamSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    schoolId?: boolean
    applicationId?: boolean
    examDate?: boolean
    examType?: boolean
    subjects?: boolean
    score?: boolean
    maxScore?: boolean
    passed?: boolean
    remarks?: boolean
    conductedBy?: boolean
    conductedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["entranceExam"]>

  export type EntranceExamSelectScalar = {
    id?: boolean
    schoolId?: boolean
    applicationId?: boolean
    examDate?: boolean
    examType?: boolean
    subjects?: boolean
    score?: boolean
    maxScore?: boolean
    passed?: boolean
    remarks?: boolean
    conductedBy?: boolean
    conductedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $EntranceExamPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EntranceExam"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      schoolId: string
      applicationId: string
      examDate: Date
      examType: string
      subjects: string[]
      score: number | null
      maxScore: number
      passed: boolean | null
      remarks: string | null
      conductedBy: string | null
      conductedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["entranceExam"]>
    composites: {}
  }

  type EntranceExamGetPayload<S extends boolean | null | undefined | EntranceExamDefaultArgs> = $Result.GetResult<Prisma.$EntranceExamPayload, S>

  type EntranceExamCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<EntranceExamFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: EntranceExamCountAggregateInputType | true
    }

  export interface EntranceExamDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EntranceExam'], meta: { name: 'EntranceExam' } }
    /**
     * Find zero or one EntranceExam that matches the filter.
     * @param {EntranceExamFindUniqueArgs} args - Arguments to find a EntranceExam
     * @example
     * // Get one EntranceExam
     * const entranceExam = await prisma.entranceExam.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EntranceExamFindUniqueArgs>(args: SelectSubset<T, EntranceExamFindUniqueArgs<ExtArgs>>): Prisma__EntranceExamClient<$Result.GetResult<Prisma.$EntranceExamPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one EntranceExam that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {EntranceExamFindUniqueOrThrowArgs} args - Arguments to find a EntranceExam
     * @example
     * // Get one EntranceExam
     * const entranceExam = await prisma.entranceExam.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EntranceExamFindUniqueOrThrowArgs>(args: SelectSubset<T, EntranceExamFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EntranceExamClient<$Result.GetResult<Prisma.$EntranceExamPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first EntranceExam that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntranceExamFindFirstArgs} args - Arguments to find a EntranceExam
     * @example
     * // Get one EntranceExam
     * const entranceExam = await prisma.entranceExam.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EntranceExamFindFirstArgs>(args?: SelectSubset<T, EntranceExamFindFirstArgs<ExtArgs>>): Prisma__EntranceExamClient<$Result.GetResult<Prisma.$EntranceExamPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first EntranceExam that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntranceExamFindFirstOrThrowArgs} args - Arguments to find a EntranceExam
     * @example
     * // Get one EntranceExam
     * const entranceExam = await prisma.entranceExam.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EntranceExamFindFirstOrThrowArgs>(args?: SelectSubset<T, EntranceExamFindFirstOrThrowArgs<ExtArgs>>): Prisma__EntranceExamClient<$Result.GetResult<Prisma.$EntranceExamPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more EntranceExams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntranceExamFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EntranceExams
     * const entranceExams = await prisma.entranceExam.findMany()
     * 
     * // Get first 10 EntranceExams
     * const entranceExams = await prisma.entranceExam.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const entranceExamWithIdOnly = await prisma.entranceExam.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EntranceExamFindManyArgs>(args?: SelectSubset<T, EntranceExamFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EntranceExamPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a EntranceExam.
     * @param {EntranceExamCreateArgs} args - Arguments to create a EntranceExam.
     * @example
     * // Create one EntranceExam
     * const EntranceExam = await prisma.entranceExam.create({
     *   data: {
     *     // ... data to create a EntranceExam
     *   }
     * })
     * 
     */
    create<T extends EntranceExamCreateArgs>(args: SelectSubset<T, EntranceExamCreateArgs<ExtArgs>>): Prisma__EntranceExamClient<$Result.GetResult<Prisma.$EntranceExamPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many EntranceExams.
     * @param {EntranceExamCreateManyArgs} args - Arguments to create many EntranceExams.
     * @example
     * // Create many EntranceExams
     * const entranceExam = await prisma.entranceExam.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EntranceExamCreateManyArgs>(args?: SelectSubset<T, EntranceExamCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EntranceExams and returns the data saved in the database.
     * @param {EntranceExamCreateManyAndReturnArgs} args - Arguments to create many EntranceExams.
     * @example
     * // Create many EntranceExams
     * const entranceExam = await prisma.entranceExam.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EntranceExams and only return the `id`
     * const entranceExamWithIdOnly = await prisma.entranceExam.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EntranceExamCreateManyAndReturnArgs>(args?: SelectSubset<T, EntranceExamCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EntranceExamPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a EntranceExam.
     * @param {EntranceExamDeleteArgs} args - Arguments to delete one EntranceExam.
     * @example
     * // Delete one EntranceExam
     * const EntranceExam = await prisma.entranceExam.delete({
     *   where: {
     *     // ... filter to delete one EntranceExam
     *   }
     * })
     * 
     */
    delete<T extends EntranceExamDeleteArgs>(args: SelectSubset<T, EntranceExamDeleteArgs<ExtArgs>>): Prisma__EntranceExamClient<$Result.GetResult<Prisma.$EntranceExamPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one EntranceExam.
     * @param {EntranceExamUpdateArgs} args - Arguments to update one EntranceExam.
     * @example
     * // Update one EntranceExam
     * const entranceExam = await prisma.entranceExam.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EntranceExamUpdateArgs>(args: SelectSubset<T, EntranceExamUpdateArgs<ExtArgs>>): Prisma__EntranceExamClient<$Result.GetResult<Prisma.$EntranceExamPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more EntranceExams.
     * @param {EntranceExamDeleteManyArgs} args - Arguments to filter EntranceExams to delete.
     * @example
     * // Delete a few EntranceExams
     * const { count } = await prisma.entranceExam.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EntranceExamDeleteManyArgs>(args?: SelectSubset<T, EntranceExamDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EntranceExams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntranceExamUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EntranceExams
     * const entranceExam = await prisma.entranceExam.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EntranceExamUpdateManyArgs>(args: SelectSubset<T, EntranceExamUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one EntranceExam.
     * @param {EntranceExamUpsertArgs} args - Arguments to update or create a EntranceExam.
     * @example
     * // Update or create a EntranceExam
     * const entranceExam = await prisma.entranceExam.upsert({
     *   create: {
     *     // ... data to create a EntranceExam
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EntranceExam we want to update
     *   }
     * })
     */
    upsert<T extends EntranceExamUpsertArgs>(args: SelectSubset<T, EntranceExamUpsertArgs<ExtArgs>>): Prisma__EntranceExamClient<$Result.GetResult<Prisma.$EntranceExamPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of EntranceExams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntranceExamCountArgs} args - Arguments to filter EntranceExams to count.
     * @example
     * // Count the number of EntranceExams
     * const count = await prisma.entranceExam.count({
     *   where: {
     *     // ... the filter for the EntranceExams we want to count
     *   }
     * })
    **/
    count<T extends EntranceExamCountArgs>(
      args?: Subset<T, EntranceExamCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EntranceExamCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EntranceExam.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntranceExamAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EntranceExamAggregateArgs>(args: Subset<T, EntranceExamAggregateArgs>): Prisma.PrismaPromise<GetEntranceExamAggregateType<T>>

    /**
     * Group by EntranceExam.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntranceExamGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EntranceExamGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EntranceExamGroupByArgs['orderBy'] }
        : { orderBy?: EntranceExamGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EntranceExamGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEntranceExamGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EntranceExam model
   */
  readonly fields: EntranceExamFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EntranceExam.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EntranceExamClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the EntranceExam model
   */ 
  interface EntranceExamFieldRefs {
    readonly id: FieldRef<"EntranceExam", 'String'>
    readonly schoolId: FieldRef<"EntranceExam", 'String'>
    readonly applicationId: FieldRef<"EntranceExam", 'String'>
    readonly examDate: FieldRef<"EntranceExam", 'DateTime'>
    readonly examType: FieldRef<"EntranceExam", 'String'>
    readonly subjects: FieldRef<"EntranceExam", 'String[]'>
    readonly score: FieldRef<"EntranceExam", 'Float'>
    readonly maxScore: FieldRef<"EntranceExam", 'Float'>
    readonly passed: FieldRef<"EntranceExam", 'Boolean'>
    readonly remarks: FieldRef<"EntranceExam", 'String'>
    readonly conductedBy: FieldRef<"EntranceExam", 'String'>
    readonly conductedAt: FieldRef<"EntranceExam", 'DateTime'>
    readonly createdAt: FieldRef<"EntranceExam", 'DateTime'>
    readonly updatedAt: FieldRef<"EntranceExam", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * EntranceExam findUnique
   */
  export type EntranceExamFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EntranceExam
     */
    select?: EntranceExamSelect<ExtArgs> | null
    /**
     * Filter, which EntranceExam to fetch.
     */
    where: EntranceExamWhereUniqueInput
  }

  /**
   * EntranceExam findUniqueOrThrow
   */
  export type EntranceExamFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EntranceExam
     */
    select?: EntranceExamSelect<ExtArgs> | null
    /**
     * Filter, which EntranceExam to fetch.
     */
    where: EntranceExamWhereUniqueInput
  }

  /**
   * EntranceExam findFirst
   */
  export type EntranceExamFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EntranceExam
     */
    select?: EntranceExamSelect<ExtArgs> | null
    /**
     * Filter, which EntranceExam to fetch.
     */
    where?: EntranceExamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EntranceExams to fetch.
     */
    orderBy?: EntranceExamOrderByWithRelationInput | EntranceExamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EntranceExams.
     */
    cursor?: EntranceExamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EntranceExams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EntranceExams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EntranceExams.
     */
    distinct?: EntranceExamScalarFieldEnum | EntranceExamScalarFieldEnum[]
  }

  /**
   * EntranceExam findFirstOrThrow
   */
  export type EntranceExamFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EntranceExam
     */
    select?: EntranceExamSelect<ExtArgs> | null
    /**
     * Filter, which EntranceExam to fetch.
     */
    where?: EntranceExamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EntranceExams to fetch.
     */
    orderBy?: EntranceExamOrderByWithRelationInput | EntranceExamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EntranceExams.
     */
    cursor?: EntranceExamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EntranceExams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EntranceExams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EntranceExams.
     */
    distinct?: EntranceExamScalarFieldEnum | EntranceExamScalarFieldEnum[]
  }

  /**
   * EntranceExam findMany
   */
  export type EntranceExamFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EntranceExam
     */
    select?: EntranceExamSelect<ExtArgs> | null
    /**
     * Filter, which EntranceExams to fetch.
     */
    where?: EntranceExamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EntranceExams to fetch.
     */
    orderBy?: EntranceExamOrderByWithRelationInput | EntranceExamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EntranceExams.
     */
    cursor?: EntranceExamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EntranceExams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EntranceExams.
     */
    skip?: number
    distinct?: EntranceExamScalarFieldEnum | EntranceExamScalarFieldEnum[]
  }

  /**
   * EntranceExam create
   */
  export type EntranceExamCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EntranceExam
     */
    select?: EntranceExamSelect<ExtArgs> | null
    /**
     * The data needed to create a EntranceExam.
     */
    data: XOR<EntranceExamCreateInput, EntranceExamUncheckedCreateInput>
  }

  /**
   * EntranceExam createMany
   */
  export type EntranceExamCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EntranceExams.
     */
    data: EntranceExamCreateManyInput | EntranceExamCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EntranceExam createManyAndReturn
   */
  export type EntranceExamCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EntranceExam
     */
    select?: EntranceExamSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many EntranceExams.
     */
    data: EntranceExamCreateManyInput | EntranceExamCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EntranceExam update
   */
  export type EntranceExamUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EntranceExam
     */
    select?: EntranceExamSelect<ExtArgs> | null
    /**
     * The data needed to update a EntranceExam.
     */
    data: XOR<EntranceExamUpdateInput, EntranceExamUncheckedUpdateInput>
    /**
     * Choose, which EntranceExam to update.
     */
    where: EntranceExamWhereUniqueInput
  }

  /**
   * EntranceExam updateMany
   */
  export type EntranceExamUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EntranceExams.
     */
    data: XOR<EntranceExamUpdateManyMutationInput, EntranceExamUncheckedUpdateManyInput>
    /**
     * Filter which EntranceExams to update
     */
    where?: EntranceExamWhereInput
  }

  /**
   * EntranceExam upsert
   */
  export type EntranceExamUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EntranceExam
     */
    select?: EntranceExamSelect<ExtArgs> | null
    /**
     * The filter to search for the EntranceExam to update in case it exists.
     */
    where: EntranceExamWhereUniqueInput
    /**
     * In case the EntranceExam found by the `where` argument doesn't exist, create a new EntranceExam with this data.
     */
    create: XOR<EntranceExamCreateInput, EntranceExamUncheckedCreateInput>
    /**
     * In case the EntranceExam was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EntranceExamUpdateInput, EntranceExamUncheckedUpdateInput>
  }

  /**
   * EntranceExam delete
   */
  export type EntranceExamDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EntranceExam
     */
    select?: EntranceExamSelect<ExtArgs> | null
    /**
     * Filter which EntranceExam to delete.
     */
    where: EntranceExamWhereUniqueInput
  }

  /**
   * EntranceExam deleteMany
   */
  export type EntranceExamDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EntranceExams to delete
     */
    where?: EntranceExamWhereInput
  }

  /**
   * EntranceExam without action
   */
  export type EntranceExamDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EntranceExam
     */
    select?: EntranceExamSelect<ExtArgs> | null
  }


  /**
   * Model Interview
   */

  export type AggregateInterview = {
    _count: InterviewCountAggregateOutputType | null
    _avg: InterviewAvgAggregateOutputType | null
    _sum: InterviewSumAggregateOutputType | null
    _min: InterviewMinAggregateOutputType | null
    _max: InterviewMaxAggregateOutputType | null
  }

  export type InterviewAvgAggregateOutputType = {
    rating: number | null
  }

  export type InterviewSumAggregateOutputType = {
    rating: number | null
  }

  export type InterviewMinAggregateOutputType = {
    id: string | null
    schoolId: string | null
    applicationId: string | null
    scheduledDate: Date | null
    status: $Enums.InterviewStatus | null
    rating: number | null
    feedback: string | null
    conductedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InterviewMaxAggregateOutputType = {
    id: string | null
    schoolId: string | null
    applicationId: string | null
    scheduledDate: Date | null
    status: $Enums.InterviewStatus | null
    rating: number | null
    feedback: string | null
    conductedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InterviewCountAggregateOutputType = {
    id: number
    schoolId: number
    applicationId: number
    scheduledDate: number
    interviewers: number
    status: number
    rating: number
    feedback: number
    conductedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type InterviewAvgAggregateInputType = {
    rating?: true
  }

  export type InterviewSumAggregateInputType = {
    rating?: true
  }

  export type InterviewMinAggregateInputType = {
    id?: true
    schoolId?: true
    applicationId?: true
    scheduledDate?: true
    status?: true
    rating?: true
    feedback?: true
    conductedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InterviewMaxAggregateInputType = {
    id?: true
    schoolId?: true
    applicationId?: true
    scheduledDate?: true
    status?: true
    rating?: true
    feedback?: true
    conductedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InterviewCountAggregateInputType = {
    id?: true
    schoolId?: true
    applicationId?: true
    scheduledDate?: true
    interviewers?: true
    status?: true
    rating?: true
    feedback?: true
    conductedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type InterviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Interview to aggregate.
     */
    where?: InterviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Interviews to fetch.
     */
    orderBy?: InterviewOrderByWithRelationInput | InterviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InterviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Interviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Interviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Interviews
    **/
    _count?: true | InterviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InterviewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InterviewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InterviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InterviewMaxAggregateInputType
  }

  export type GetInterviewAggregateType<T extends InterviewAggregateArgs> = {
        [P in keyof T & keyof AggregateInterview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInterview[P]>
      : GetScalarType<T[P], AggregateInterview[P]>
  }




  export type InterviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InterviewWhereInput
    orderBy?: InterviewOrderByWithAggregationInput | InterviewOrderByWithAggregationInput[]
    by: InterviewScalarFieldEnum[] | InterviewScalarFieldEnum
    having?: InterviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InterviewCountAggregateInputType | true
    _avg?: InterviewAvgAggregateInputType
    _sum?: InterviewSumAggregateInputType
    _min?: InterviewMinAggregateInputType
    _max?: InterviewMaxAggregateInputType
  }

  export type InterviewGroupByOutputType = {
    id: string
    schoolId: string
    applicationId: string
    scheduledDate: Date
    interviewers: string[]
    status: $Enums.InterviewStatus
    rating: number | null
    feedback: string | null
    conductedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: InterviewCountAggregateOutputType | null
    _avg: InterviewAvgAggregateOutputType | null
    _sum: InterviewSumAggregateOutputType | null
    _min: InterviewMinAggregateOutputType | null
    _max: InterviewMaxAggregateOutputType | null
  }

  type GetInterviewGroupByPayload<T extends InterviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InterviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InterviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InterviewGroupByOutputType[P]>
            : GetScalarType<T[P], InterviewGroupByOutputType[P]>
        }
      >
    >


  export type InterviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    schoolId?: boolean
    applicationId?: boolean
    scheduledDate?: boolean
    interviewers?: boolean
    status?: boolean
    rating?: boolean
    feedback?: boolean
    conductedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["interview"]>

  export type InterviewSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    schoolId?: boolean
    applicationId?: boolean
    scheduledDate?: boolean
    interviewers?: boolean
    status?: boolean
    rating?: boolean
    feedback?: boolean
    conductedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["interview"]>

  export type InterviewSelectScalar = {
    id?: boolean
    schoolId?: boolean
    applicationId?: boolean
    scheduledDate?: boolean
    interviewers?: boolean
    status?: boolean
    rating?: boolean
    feedback?: boolean
    conductedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $InterviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Interview"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      schoolId: string
      applicationId: string
      scheduledDate: Date
      interviewers: string[]
      status: $Enums.InterviewStatus
      rating: number | null
      feedback: string | null
      conductedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["interview"]>
    composites: {}
  }

  type InterviewGetPayload<S extends boolean | null | undefined | InterviewDefaultArgs> = $Result.GetResult<Prisma.$InterviewPayload, S>

  type InterviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<InterviewFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: InterviewCountAggregateInputType | true
    }

  export interface InterviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Interview'], meta: { name: 'Interview' } }
    /**
     * Find zero or one Interview that matches the filter.
     * @param {InterviewFindUniqueArgs} args - Arguments to find a Interview
     * @example
     * // Get one Interview
     * const interview = await prisma.interview.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InterviewFindUniqueArgs>(args: SelectSubset<T, InterviewFindUniqueArgs<ExtArgs>>): Prisma__InterviewClient<$Result.GetResult<Prisma.$InterviewPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Interview that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {InterviewFindUniqueOrThrowArgs} args - Arguments to find a Interview
     * @example
     * // Get one Interview
     * const interview = await prisma.interview.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InterviewFindUniqueOrThrowArgs>(args: SelectSubset<T, InterviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InterviewClient<$Result.GetResult<Prisma.$InterviewPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Interview that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterviewFindFirstArgs} args - Arguments to find a Interview
     * @example
     * // Get one Interview
     * const interview = await prisma.interview.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InterviewFindFirstArgs>(args?: SelectSubset<T, InterviewFindFirstArgs<ExtArgs>>): Prisma__InterviewClient<$Result.GetResult<Prisma.$InterviewPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Interview that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterviewFindFirstOrThrowArgs} args - Arguments to find a Interview
     * @example
     * // Get one Interview
     * const interview = await prisma.interview.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InterviewFindFirstOrThrowArgs>(args?: SelectSubset<T, InterviewFindFirstOrThrowArgs<ExtArgs>>): Prisma__InterviewClient<$Result.GetResult<Prisma.$InterviewPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Interviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Interviews
     * const interviews = await prisma.interview.findMany()
     * 
     * // Get first 10 Interviews
     * const interviews = await prisma.interview.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const interviewWithIdOnly = await prisma.interview.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InterviewFindManyArgs>(args?: SelectSubset<T, InterviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InterviewPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Interview.
     * @param {InterviewCreateArgs} args - Arguments to create a Interview.
     * @example
     * // Create one Interview
     * const Interview = await prisma.interview.create({
     *   data: {
     *     // ... data to create a Interview
     *   }
     * })
     * 
     */
    create<T extends InterviewCreateArgs>(args: SelectSubset<T, InterviewCreateArgs<ExtArgs>>): Prisma__InterviewClient<$Result.GetResult<Prisma.$InterviewPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Interviews.
     * @param {InterviewCreateManyArgs} args - Arguments to create many Interviews.
     * @example
     * // Create many Interviews
     * const interview = await prisma.interview.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InterviewCreateManyArgs>(args?: SelectSubset<T, InterviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Interviews and returns the data saved in the database.
     * @param {InterviewCreateManyAndReturnArgs} args - Arguments to create many Interviews.
     * @example
     * // Create many Interviews
     * const interview = await prisma.interview.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Interviews and only return the `id`
     * const interviewWithIdOnly = await prisma.interview.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InterviewCreateManyAndReturnArgs>(args?: SelectSubset<T, InterviewCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InterviewPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Interview.
     * @param {InterviewDeleteArgs} args - Arguments to delete one Interview.
     * @example
     * // Delete one Interview
     * const Interview = await prisma.interview.delete({
     *   where: {
     *     // ... filter to delete one Interview
     *   }
     * })
     * 
     */
    delete<T extends InterviewDeleteArgs>(args: SelectSubset<T, InterviewDeleteArgs<ExtArgs>>): Prisma__InterviewClient<$Result.GetResult<Prisma.$InterviewPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Interview.
     * @param {InterviewUpdateArgs} args - Arguments to update one Interview.
     * @example
     * // Update one Interview
     * const interview = await prisma.interview.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InterviewUpdateArgs>(args: SelectSubset<T, InterviewUpdateArgs<ExtArgs>>): Prisma__InterviewClient<$Result.GetResult<Prisma.$InterviewPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Interviews.
     * @param {InterviewDeleteManyArgs} args - Arguments to filter Interviews to delete.
     * @example
     * // Delete a few Interviews
     * const { count } = await prisma.interview.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InterviewDeleteManyArgs>(args?: SelectSubset<T, InterviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Interviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Interviews
     * const interview = await prisma.interview.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InterviewUpdateManyArgs>(args: SelectSubset<T, InterviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Interview.
     * @param {InterviewUpsertArgs} args - Arguments to update or create a Interview.
     * @example
     * // Update or create a Interview
     * const interview = await prisma.interview.upsert({
     *   create: {
     *     // ... data to create a Interview
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Interview we want to update
     *   }
     * })
     */
    upsert<T extends InterviewUpsertArgs>(args: SelectSubset<T, InterviewUpsertArgs<ExtArgs>>): Prisma__InterviewClient<$Result.GetResult<Prisma.$InterviewPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Interviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterviewCountArgs} args - Arguments to filter Interviews to count.
     * @example
     * // Count the number of Interviews
     * const count = await prisma.interview.count({
     *   where: {
     *     // ... the filter for the Interviews we want to count
     *   }
     * })
    **/
    count<T extends InterviewCountArgs>(
      args?: Subset<T, InterviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InterviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Interview.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InterviewAggregateArgs>(args: Subset<T, InterviewAggregateArgs>): Prisma.PrismaPromise<GetInterviewAggregateType<T>>

    /**
     * Group by Interview.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterviewGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InterviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InterviewGroupByArgs['orderBy'] }
        : { orderBy?: InterviewGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InterviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInterviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Interview model
   */
  readonly fields: InterviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Interview.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InterviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Interview model
   */ 
  interface InterviewFieldRefs {
    readonly id: FieldRef<"Interview", 'String'>
    readonly schoolId: FieldRef<"Interview", 'String'>
    readonly applicationId: FieldRef<"Interview", 'String'>
    readonly scheduledDate: FieldRef<"Interview", 'DateTime'>
    readonly interviewers: FieldRef<"Interview", 'String[]'>
    readonly status: FieldRef<"Interview", 'InterviewStatus'>
    readonly rating: FieldRef<"Interview", 'Int'>
    readonly feedback: FieldRef<"Interview", 'String'>
    readonly conductedAt: FieldRef<"Interview", 'DateTime'>
    readonly createdAt: FieldRef<"Interview", 'DateTime'>
    readonly updatedAt: FieldRef<"Interview", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Interview findUnique
   */
  export type InterviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interview
     */
    select?: InterviewSelect<ExtArgs> | null
    /**
     * Filter, which Interview to fetch.
     */
    where: InterviewWhereUniqueInput
  }

  /**
   * Interview findUniqueOrThrow
   */
  export type InterviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interview
     */
    select?: InterviewSelect<ExtArgs> | null
    /**
     * Filter, which Interview to fetch.
     */
    where: InterviewWhereUniqueInput
  }

  /**
   * Interview findFirst
   */
  export type InterviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interview
     */
    select?: InterviewSelect<ExtArgs> | null
    /**
     * Filter, which Interview to fetch.
     */
    where?: InterviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Interviews to fetch.
     */
    orderBy?: InterviewOrderByWithRelationInput | InterviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Interviews.
     */
    cursor?: InterviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Interviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Interviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Interviews.
     */
    distinct?: InterviewScalarFieldEnum | InterviewScalarFieldEnum[]
  }

  /**
   * Interview findFirstOrThrow
   */
  export type InterviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interview
     */
    select?: InterviewSelect<ExtArgs> | null
    /**
     * Filter, which Interview to fetch.
     */
    where?: InterviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Interviews to fetch.
     */
    orderBy?: InterviewOrderByWithRelationInput | InterviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Interviews.
     */
    cursor?: InterviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Interviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Interviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Interviews.
     */
    distinct?: InterviewScalarFieldEnum | InterviewScalarFieldEnum[]
  }

  /**
   * Interview findMany
   */
  export type InterviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interview
     */
    select?: InterviewSelect<ExtArgs> | null
    /**
     * Filter, which Interviews to fetch.
     */
    where?: InterviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Interviews to fetch.
     */
    orderBy?: InterviewOrderByWithRelationInput | InterviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Interviews.
     */
    cursor?: InterviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Interviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Interviews.
     */
    skip?: number
    distinct?: InterviewScalarFieldEnum | InterviewScalarFieldEnum[]
  }

  /**
   * Interview create
   */
  export type InterviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interview
     */
    select?: InterviewSelect<ExtArgs> | null
    /**
     * The data needed to create a Interview.
     */
    data: XOR<InterviewCreateInput, InterviewUncheckedCreateInput>
  }

  /**
   * Interview createMany
   */
  export type InterviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Interviews.
     */
    data: InterviewCreateManyInput | InterviewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Interview createManyAndReturn
   */
  export type InterviewCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interview
     */
    select?: InterviewSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Interviews.
     */
    data: InterviewCreateManyInput | InterviewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Interview update
   */
  export type InterviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interview
     */
    select?: InterviewSelect<ExtArgs> | null
    /**
     * The data needed to update a Interview.
     */
    data: XOR<InterviewUpdateInput, InterviewUncheckedUpdateInput>
    /**
     * Choose, which Interview to update.
     */
    where: InterviewWhereUniqueInput
  }

  /**
   * Interview updateMany
   */
  export type InterviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Interviews.
     */
    data: XOR<InterviewUpdateManyMutationInput, InterviewUncheckedUpdateManyInput>
    /**
     * Filter which Interviews to update
     */
    where?: InterviewWhereInput
  }

  /**
   * Interview upsert
   */
  export type InterviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interview
     */
    select?: InterviewSelect<ExtArgs> | null
    /**
     * The filter to search for the Interview to update in case it exists.
     */
    where: InterviewWhereUniqueInput
    /**
     * In case the Interview found by the `where` argument doesn't exist, create a new Interview with this data.
     */
    create: XOR<InterviewCreateInput, InterviewUncheckedCreateInput>
    /**
     * In case the Interview was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InterviewUpdateInput, InterviewUncheckedUpdateInput>
  }

  /**
   * Interview delete
   */
  export type InterviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interview
     */
    select?: InterviewSelect<ExtArgs> | null
    /**
     * Filter which Interview to delete.
     */
    where: InterviewWhereUniqueInput
  }

  /**
   * Interview deleteMany
   */
  export type InterviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Interviews to delete
     */
    where?: InterviewWhereInput
  }

  /**
   * Interview without action
   */
  export type InterviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interview
     */
    select?: InterviewSelect<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ApplicationScalarFieldEnum: {
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

  export type ApplicationScalarFieldEnum = (typeof ApplicationScalarFieldEnum)[keyof typeof ApplicationScalarFieldEnum]


  export const ApplicationDocumentScalarFieldEnum: {
    id: 'id',
    applicationId: 'applicationId',
    name: 'name',
    type: 'type',
    url: 'url',
    uploadedAt: 'uploadedAt'
  };

  export type ApplicationDocumentScalarFieldEnum = (typeof ApplicationDocumentScalarFieldEnum)[keyof typeof ApplicationDocumentScalarFieldEnum]


  export const AdmissionCriteriaScalarFieldEnum: {
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

  export type AdmissionCriteriaScalarFieldEnum = (typeof AdmissionCriteriaScalarFieldEnum)[keyof typeof AdmissionCriteriaScalarFieldEnum]


  export const EntranceExamScalarFieldEnum: {
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

  export type EntranceExamScalarFieldEnum = (typeof EntranceExamScalarFieldEnum)[keyof typeof EntranceExamScalarFieldEnum]


  export const InterviewScalarFieldEnum: {
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

  export type InterviewScalarFieldEnum = (typeof InterviewScalarFieldEnum)[keyof typeof InterviewScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'ApplicationStatus'
   */
  export type EnumApplicationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ApplicationStatus'>
    


  /**
   * Reference to a field of type 'ApplicationStatus[]'
   */
  export type ListEnumApplicationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ApplicationStatus[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'InterviewStatus'
   */
  export type EnumInterviewStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InterviewStatus'>
    


  /**
   * Reference to a field of type 'InterviewStatus[]'
   */
  export type ListEnumInterviewStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InterviewStatus[]'>
    
  /**
   * Deep Input Types
   */


  export type ApplicationWhereInput = {
    AND?: ApplicationWhereInput | ApplicationWhereInput[]
    OR?: ApplicationWhereInput[]
    NOT?: ApplicationWhereInput | ApplicationWhereInput[]
    id?: StringFilter<"Application"> | string
    schoolId?: StringFilter<"Application"> | string
    applicationNo?: StringFilter<"Application"> | string
    firstName?: StringFilter<"Application"> | string
    lastName?: StringFilter<"Application"> | string
    email?: StringFilter<"Application"> | string
    phone?: StringNullableFilter<"Application"> | string | null
    dateOfBirth?: DateTimeFilter<"Application"> | Date | string
    gender?: StringFilter<"Application"> | string
    address?: StringNullableFilter<"Application"> | string | null
    city?: StringNullableFilter<"Application"> | string | null
    state?: StringNullableFilter<"Application"> | string | null
    country?: StringNullableFilter<"Application"> | string | null
    postalCode?: StringNullableFilter<"Application"> | string | null
    nationality?: StringNullableFilter<"Application"> | string | null
    previousSchool?: StringNullableFilter<"Application"> | string | null
    gradeApplying?: IntFilter<"Application"> | number
    academicYear?: StringFilter<"Application"> | string
    parentName?: StringFilter<"Application"> | string
    parentEmail?: StringFilter<"Application"> | string
    parentPhone?: StringFilter<"Application"> | string
    parentRelation?: StringFilter<"Application"> | string
    status?: EnumApplicationStatusFilter<"Application"> | $Enums.ApplicationStatus
    reviewNotes?: StringNullableFilter<"Application"> | string | null
    reviewedBy?: StringNullableFilter<"Application"> | string | null
    reviewedAt?: DateTimeNullableFilter<"Application"> | Date | string | null
    admissionDate?: DateTimeNullableFilter<"Application"> | Date | string | null
    studentId?: StringNullableFilter<"Application"> | string | null
    createdAt?: DateTimeFilter<"Application"> | Date | string
    updatedAt?: DateTimeFilter<"Application"> | Date | string
    documents?: ApplicationDocumentListRelationFilter
  }

  export type ApplicationOrderByWithRelationInput = {
    id?: SortOrder
    schoolId?: SortOrder
    applicationNo?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    dateOfBirth?: SortOrder
    gender?: SortOrder
    address?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    state?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    postalCode?: SortOrderInput | SortOrder
    nationality?: SortOrderInput | SortOrder
    previousSchool?: SortOrderInput | SortOrder
    gradeApplying?: SortOrder
    academicYear?: SortOrder
    parentName?: SortOrder
    parentEmail?: SortOrder
    parentPhone?: SortOrder
    parentRelation?: SortOrder
    status?: SortOrder
    reviewNotes?: SortOrderInput | SortOrder
    reviewedBy?: SortOrderInput | SortOrder
    reviewedAt?: SortOrderInput | SortOrder
    admissionDate?: SortOrderInput | SortOrder
    studentId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    documents?: ApplicationDocumentOrderByRelationAggregateInput
  }

  export type ApplicationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    applicationNo?: string
    AND?: ApplicationWhereInput | ApplicationWhereInput[]
    OR?: ApplicationWhereInput[]
    NOT?: ApplicationWhereInput | ApplicationWhereInput[]
    schoolId?: StringFilter<"Application"> | string
    firstName?: StringFilter<"Application"> | string
    lastName?: StringFilter<"Application"> | string
    email?: StringFilter<"Application"> | string
    phone?: StringNullableFilter<"Application"> | string | null
    dateOfBirth?: DateTimeFilter<"Application"> | Date | string
    gender?: StringFilter<"Application"> | string
    address?: StringNullableFilter<"Application"> | string | null
    city?: StringNullableFilter<"Application"> | string | null
    state?: StringNullableFilter<"Application"> | string | null
    country?: StringNullableFilter<"Application"> | string | null
    postalCode?: StringNullableFilter<"Application"> | string | null
    nationality?: StringNullableFilter<"Application"> | string | null
    previousSchool?: StringNullableFilter<"Application"> | string | null
    gradeApplying?: IntFilter<"Application"> | number
    academicYear?: StringFilter<"Application"> | string
    parentName?: StringFilter<"Application"> | string
    parentEmail?: StringFilter<"Application"> | string
    parentPhone?: StringFilter<"Application"> | string
    parentRelation?: StringFilter<"Application"> | string
    status?: EnumApplicationStatusFilter<"Application"> | $Enums.ApplicationStatus
    reviewNotes?: StringNullableFilter<"Application"> | string | null
    reviewedBy?: StringNullableFilter<"Application"> | string | null
    reviewedAt?: DateTimeNullableFilter<"Application"> | Date | string | null
    admissionDate?: DateTimeNullableFilter<"Application"> | Date | string | null
    studentId?: StringNullableFilter<"Application"> | string | null
    createdAt?: DateTimeFilter<"Application"> | Date | string
    updatedAt?: DateTimeFilter<"Application"> | Date | string
    documents?: ApplicationDocumentListRelationFilter
  }, "id" | "applicationNo">

  export type ApplicationOrderByWithAggregationInput = {
    id?: SortOrder
    schoolId?: SortOrder
    applicationNo?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    dateOfBirth?: SortOrder
    gender?: SortOrder
    address?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    state?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    postalCode?: SortOrderInput | SortOrder
    nationality?: SortOrderInput | SortOrder
    previousSchool?: SortOrderInput | SortOrder
    gradeApplying?: SortOrder
    academicYear?: SortOrder
    parentName?: SortOrder
    parentEmail?: SortOrder
    parentPhone?: SortOrder
    parentRelation?: SortOrder
    status?: SortOrder
    reviewNotes?: SortOrderInput | SortOrder
    reviewedBy?: SortOrderInput | SortOrder
    reviewedAt?: SortOrderInput | SortOrder
    admissionDate?: SortOrderInput | SortOrder
    studentId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ApplicationCountOrderByAggregateInput
    _avg?: ApplicationAvgOrderByAggregateInput
    _max?: ApplicationMaxOrderByAggregateInput
    _min?: ApplicationMinOrderByAggregateInput
    _sum?: ApplicationSumOrderByAggregateInput
  }

  export type ApplicationScalarWhereWithAggregatesInput = {
    AND?: ApplicationScalarWhereWithAggregatesInput | ApplicationScalarWhereWithAggregatesInput[]
    OR?: ApplicationScalarWhereWithAggregatesInput[]
    NOT?: ApplicationScalarWhereWithAggregatesInput | ApplicationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Application"> | string
    schoolId?: StringWithAggregatesFilter<"Application"> | string
    applicationNo?: StringWithAggregatesFilter<"Application"> | string
    firstName?: StringWithAggregatesFilter<"Application"> | string
    lastName?: StringWithAggregatesFilter<"Application"> | string
    email?: StringWithAggregatesFilter<"Application"> | string
    phone?: StringNullableWithAggregatesFilter<"Application"> | string | null
    dateOfBirth?: DateTimeWithAggregatesFilter<"Application"> | Date | string
    gender?: StringWithAggregatesFilter<"Application"> | string
    address?: StringNullableWithAggregatesFilter<"Application"> | string | null
    city?: StringNullableWithAggregatesFilter<"Application"> | string | null
    state?: StringNullableWithAggregatesFilter<"Application"> | string | null
    country?: StringNullableWithAggregatesFilter<"Application"> | string | null
    postalCode?: StringNullableWithAggregatesFilter<"Application"> | string | null
    nationality?: StringNullableWithAggregatesFilter<"Application"> | string | null
    previousSchool?: StringNullableWithAggregatesFilter<"Application"> | string | null
    gradeApplying?: IntWithAggregatesFilter<"Application"> | number
    academicYear?: StringWithAggregatesFilter<"Application"> | string
    parentName?: StringWithAggregatesFilter<"Application"> | string
    parentEmail?: StringWithAggregatesFilter<"Application"> | string
    parentPhone?: StringWithAggregatesFilter<"Application"> | string
    parentRelation?: StringWithAggregatesFilter<"Application"> | string
    status?: EnumApplicationStatusWithAggregatesFilter<"Application"> | $Enums.ApplicationStatus
    reviewNotes?: StringNullableWithAggregatesFilter<"Application"> | string | null
    reviewedBy?: StringNullableWithAggregatesFilter<"Application"> | string | null
    reviewedAt?: DateTimeNullableWithAggregatesFilter<"Application"> | Date | string | null
    admissionDate?: DateTimeNullableWithAggregatesFilter<"Application"> | Date | string | null
    studentId?: StringNullableWithAggregatesFilter<"Application"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Application"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Application"> | Date | string
  }

  export type ApplicationDocumentWhereInput = {
    AND?: ApplicationDocumentWhereInput | ApplicationDocumentWhereInput[]
    OR?: ApplicationDocumentWhereInput[]
    NOT?: ApplicationDocumentWhereInput | ApplicationDocumentWhereInput[]
    id?: StringFilter<"ApplicationDocument"> | string
    applicationId?: StringFilter<"ApplicationDocument"> | string
    name?: StringFilter<"ApplicationDocument"> | string
    type?: StringFilter<"ApplicationDocument"> | string
    url?: StringFilter<"ApplicationDocument"> | string
    uploadedAt?: DateTimeFilter<"ApplicationDocument"> | Date | string
    application?: XOR<ApplicationRelationFilter, ApplicationWhereInput>
  }

  export type ApplicationDocumentOrderByWithRelationInput = {
    id?: SortOrder
    applicationId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    url?: SortOrder
    uploadedAt?: SortOrder
    application?: ApplicationOrderByWithRelationInput
  }

  export type ApplicationDocumentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ApplicationDocumentWhereInput | ApplicationDocumentWhereInput[]
    OR?: ApplicationDocumentWhereInput[]
    NOT?: ApplicationDocumentWhereInput | ApplicationDocumentWhereInput[]
    applicationId?: StringFilter<"ApplicationDocument"> | string
    name?: StringFilter<"ApplicationDocument"> | string
    type?: StringFilter<"ApplicationDocument"> | string
    url?: StringFilter<"ApplicationDocument"> | string
    uploadedAt?: DateTimeFilter<"ApplicationDocument"> | Date | string
    application?: XOR<ApplicationRelationFilter, ApplicationWhereInput>
  }, "id">

  export type ApplicationDocumentOrderByWithAggregationInput = {
    id?: SortOrder
    applicationId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    url?: SortOrder
    uploadedAt?: SortOrder
    _count?: ApplicationDocumentCountOrderByAggregateInput
    _max?: ApplicationDocumentMaxOrderByAggregateInput
    _min?: ApplicationDocumentMinOrderByAggregateInput
  }

  export type ApplicationDocumentScalarWhereWithAggregatesInput = {
    AND?: ApplicationDocumentScalarWhereWithAggregatesInput | ApplicationDocumentScalarWhereWithAggregatesInput[]
    OR?: ApplicationDocumentScalarWhereWithAggregatesInput[]
    NOT?: ApplicationDocumentScalarWhereWithAggregatesInput | ApplicationDocumentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ApplicationDocument"> | string
    applicationId?: StringWithAggregatesFilter<"ApplicationDocument"> | string
    name?: StringWithAggregatesFilter<"ApplicationDocument"> | string
    type?: StringWithAggregatesFilter<"ApplicationDocument"> | string
    url?: StringWithAggregatesFilter<"ApplicationDocument"> | string
    uploadedAt?: DateTimeWithAggregatesFilter<"ApplicationDocument"> | Date | string
  }

  export type AdmissionCriteriaWhereInput = {
    AND?: AdmissionCriteriaWhereInput | AdmissionCriteriaWhereInput[]
    OR?: AdmissionCriteriaWhereInput[]
    NOT?: AdmissionCriteriaWhereInput | AdmissionCriteriaWhereInput[]
    id?: StringFilter<"AdmissionCriteria"> | string
    schoolId?: StringFilter<"AdmissionCriteria"> | string
    gradeId?: IntNullableFilter<"AdmissionCriteria"> | number | null
    minAge?: IntNullableFilter<"AdmissionCriteria"> | number | null
    maxAge?: IntNullableFilter<"AdmissionCriteria"> | number | null
    requiredDocs?: StringNullableListFilter<"AdmissionCriteria">
    entranceExam?: BoolFilter<"AdmissionCriteria"> | boolean
    interview?: BoolFilter<"AdmissionCriteria"> | boolean
    maxStudents?: IntNullableFilter<"AdmissionCriteria"> | number | null
    createdAt?: DateTimeFilter<"AdmissionCriteria"> | Date | string
    updatedAt?: DateTimeFilter<"AdmissionCriteria"> | Date | string
  }

  export type AdmissionCriteriaOrderByWithRelationInput = {
    id?: SortOrder
    schoolId?: SortOrder
    gradeId?: SortOrderInput | SortOrder
    minAge?: SortOrderInput | SortOrder
    maxAge?: SortOrderInput | SortOrder
    requiredDocs?: SortOrder
    entranceExam?: SortOrder
    interview?: SortOrder
    maxStudents?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdmissionCriteriaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    schoolId?: string
    AND?: AdmissionCriteriaWhereInput | AdmissionCriteriaWhereInput[]
    OR?: AdmissionCriteriaWhereInput[]
    NOT?: AdmissionCriteriaWhereInput | AdmissionCriteriaWhereInput[]
    gradeId?: IntNullableFilter<"AdmissionCriteria"> | number | null
    minAge?: IntNullableFilter<"AdmissionCriteria"> | number | null
    maxAge?: IntNullableFilter<"AdmissionCriteria"> | number | null
    requiredDocs?: StringNullableListFilter<"AdmissionCriteria">
    entranceExam?: BoolFilter<"AdmissionCriteria"> | boolean
    interview?: BoolFilter<"AdmissionCriteria"> | boolean
    maxStudents?: IntNullableFilter<"AdmissionCriteria"> | number | null
    createdAt?: DateTimeFilter<"AdmissionCriteria"> | Date | string
    updatedAt?: DateTimeFilter<"AdmissionCriteria"> | Date | string
  }, "id" | "schoolId">

  export type AdmissionCriteriaOrderByWithAggregationInput = {
    id?: SortOrder
    schoolId?: SortOrder
    gradeId?: SortOrderInput | SortOrder
    minAge?: SortOrderInput | SortOrder
    maxAge?: SortOrderInput | SortOrder
    requiredDocs?: SortOrder
    entranceExam?: SortOrder
    interview?: SortOrder
    maxStudents?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AdmissionCriteriaCountOrderByAggregateInput
    _avg?: AdmissionCriteriaAvgOrderByAggregateInput
    _max?: AdmissionCriteriaMaxOrderByAggregateInput
    _min?: AdmissionCriteriaMinOrderByAggregateInput
    _sum?: AdmissionCriteriaSumOrderByAggregateInput
  }

  export type AdmissionCriteriaScalarWhereWithAggregatesInput = {
    AND?: AdmissionCriteriaScalarWhereWithAggregatesInput | AdmissionCriteriaScalarWhereWithAggregatesInput[]
    OR?: AdmissionCriteriaScalarWhereWithAggregatesInput[]
    NOT?: AdmissionCriteriaScalarWhereWithAggregatesInput | AdmissionCriteriaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AdmissionCriteria"> | string
    schoolId?: StringWithAggregatesFilter<"AdmissionCriteria"> | string
    gradeId?: IntNullableWithAggregatesFilter<"AdmissionCriteria"> | number | null
    minAge?: IntNullableWithAggregatesFilter<"AdmissionCriteria"> | number | null
    maxAge?: IntNullableWithAggregatesFilter<"AdmissionCriteria"> | number | null
    requiredDocs?: StringNullableListFilter<"AdmissionCriteria">
    entranceExam?: BoolWithAggregatesFilter<"AdmissionCriteria"> | boolean
    interview?: BoolWithAggregatesFilter<"AdmissionCriteria"> | boolean
    maxStudents?: IntNullableWithAggregatesFilter<"AdmissionCriteria"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"AdmissionCriteria"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AdmissionCriteria"> | Date | string
  }

  export type EntranceExamWhereInput = {
    AND?: EntranceExamWhereInput | EntranceExamWhereInput[]
    OR?: EntranceExamWhereInput[]
    NOT?: EntranceExamWhereInput | EntranceExamWhereInput[]
    id?: StringFilter<"EntranceExam"> | string
    schoolId?: StringFilter<"EntranceExam"> | string
    applicationId?: StringFilter<"EntranceExam"> | string
    examDate?: DateTimeFilter<"EntranceExam"> | Date | string
    examType?: StringFilter<"EntranceExam"> | string
    subjects?: StringNullableListFilter<"EntranceExam">
    score?: FloatNullableFilter<"EntranceExam"> | number | null
    maxScore?: FloatFilter<"EntranceExam"> | number
    passed?: BoolNullableFilter<"EntranceExam"> | boolean | null
    remarks?: StringNullableFilter<"EntranceExam"> | string | null
    conductedBy?: StringNullableFilter<"EntranceExam"> | string | null
    conductedAt?: DateTimeNullableFilter<"EntranceExam"> | Date | string | null
    createdAt?: DateTimeFilter<"EntranceExam"> | Date | string
    updatedAt?: DateTimeFilter<"EntranceExam"> | Date | string
  }

  export type EntranceExamOrderByWithRelationInput = {
    id?: SortOrder
    schoolId?: SortOrder
    applicationId?: SortOrder
    examDate?: SortOrder
    examType?: SortOrder
    subjects?: SortOrder
    score?: SortOrderInput | SortOrder
    maxScore?: SortOrder
    passed?: SortOrderInput | SortOrder
    remarks?: SortOrderInput | SortOrder
    conductedBy?: SortOrderInput | SortOrder
    conductedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EntranceExamWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EntranceExamWhereInput | EntranceExamWhereInput[]
    OR?: EntranceExamWhereInput[]
    NOT?: EntranceExamWhereInput | EntranceExamWhereInput[]
    schoolId?: StringFilter<"EntranceExam"> | string
    applicationId?: StringFilter<"EntranceExam"> | string
    examDate?: DateTimeFilter<"EntranceExam"> | Date | string
    examType?: StringFilter<"EntranceExam"> | string
    subjects?: StringNullableListFilter<"EntranceExam">
    score?: FloatNullableFilter<"EntranceExam"> | number | null
    maxScore?: FloatFilter<"EntranceExam"> | number
    passed?: BoolNullableFilter<"EntranceExam"> | boolean | null
    remarks?: StringNullableFilter<"EntranceExam"> | string | null
    conductedBy?: StringNullableFilter<"EntranceExam"> | string | null
    conductedAt?: DateTimeNullableFilter<"EntranceExam"> | Date | string | null
    createdAt?: DateTimeFilter<"EntranceExam"> | Date | string
    updatedAt?: DateTimeFilter<"EntranceExam"> | Date | string
  }, "id">

  export type EntranceExamOrderByWithAggregationInput = {
    id?: SortOrder
    schoolId?: SortOrder
    applicationId?: SortOrder
    examDate?: SortOrder
    examType?: SortOrder
    subjects?: SortOrder
    score?: SortOrderInput | SortOrder
    maxScore?: SortOrder
    passed?: SortOrderInput | SortOrder
    remarks?: SortOrderInput | SortOrder
    conductedBy?: SortOrderInput | SortOrder
    conductedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EntranceExamCountOrderByAggregateInput
    _avg?: EntranceExamAvgOrderByAggregateInput
    _max?: EntranceExamMaxOrderByAggregateInput
    _min?: EntranceExamMinOrderByAggregateInput
    _sum?: EntranceExamSumOrderByAggregateInput
  }

  export type EntranceExamScalarWhereWithAggregatesInput = {
    AND?: EntranceExamScalarWhereWithAggregatesInput | EntranceExamScalarWhereWithAggregatesInput[]
    OR?: EntranceExamScalarWhereWithAggregatesInput[]
    NOT?: EntranceExamScalarWhereWithAggregatesInput | EntranceExamScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EntranceExam"> | string
    schoolId?: StringWithAggregatesFilter<"EntranceExam"> | string
    applicationId?: StringWithAggregatesFilter<"EntranceExam"> | string
    examDate?: DateTimeWithAggregatesFilter<"EntranceExam"> | Date | string
    examType?: StringWithAggregatesFilter<"EntranceExam"> | string
    subjects?: StringNullableListFilter<"EntranceExam">
    score?: FloatNullableWithAggregatesFilter<"EntranceExam"> | number | null
    maxScore?: FloatWithAggregatesFilter<"EntranceExam"> | number
    passed?: BoolNullableWithAggregatesFilter<"EntranceExam"> | boolean | null
    remarks?: StringNullableWithAggregatesFilter<"EntranceExam"> | string | null
    conductedBy?: StringNullableWithAggregatesFilter<"EntranceExam"> | string | null
    conductedAt?: DateTimeNullableWithAggregatesFilter<"EntranceExam"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"EntranceExam"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"EntranceExam"> | Date | string
  }

  export type InterviewWhereInput = {
    AND?: InterviewWhereInput | InterviewWhereInput[]
    OR?: InterviewWhereInput[]
    NOT?: InterviewWhereInput | InterviewWhereInput[]
    id?: StringFilter<"Interview"> | string
    schoolId?: StringFilter<"Interview"> | string
    applicationId?: StringFilter<"Interview"> | string
    scheduledDate?: DateTimeFilter<"Interview"> | Date | string
    interviewers?: StringNullableListFilter<"Interview">
    status?: EnumInterviewStatusFilter<"Interview"> | $Enums.InterviewStatus
    rating?: IntNullableFilter<"Interview"> | number | null
    feedback?: StringNullableFilter<"Interview"> | string | null
    conductedAt?: DateTimeNullableFilter<"Interview"> | Date | string | null
    createdAt?: DateTimeFilter<"Interview"> | Date | string
    updatedAt?: DateTimeFilter<"Interview"> | Date | string
  }

  export type InterviewOrderByWithRelationInput = {
    id?: SortOrder
    schoolId?: SortOrder
    applicationId?: SortOrder
    scheduledDate?: SortOrder
    interviewers?: SortOrder
    status?: SortOrder
    rating?: SortOrderInput | SortOrder
    feedback?: SortOrderInput | SortOrder
    conductedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InterviewWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: InterviewWhereInput | InterviewWhereInput[]
    OR?: InterviewWhereInput[]
    NOT?: InterviewWhereInput | InterviewWhereInput[]
    schoolId?: StringFilter<"Interview"> | string
    applicationId?: StringFilter<"Interview"> | string
    scheduledDate?: DateTimeFilter<"Interview"> | Date | string
    interviewers?: StringNullableListFilter<"Interview">
    status?: EnumInterviewStatusFilter<"Interview"> | $Enums.InterviewStatus
    rating?: IntNullableFilter<"Interview"> | number | null
    feedback?: StringNullableFilter<"Interview"> | string | null
    conductedAt?: DateTimeNullableFilter<"Interview"> | Date | string | null
    createdAt?: DateTimeFilter<"Interview"> | Date | string
    updatedAt?: DateTimeFilter<"Interview"> | Date | string
  }, "id">

  export type InterviewOrderByWithAggregationInput = {
    id?: SortOrder
    schoolId?: SortOrder
    applicationId?: SortOrder
    scheduledDate?: SortOrder
    interviewers?: SortOrder
    status?: SortOrder
    rating?: SortOrderInput | SortOrder
    feedback?: SortOrderInput | SortOrder
    conductedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: InterviewCountOrderByAggregateInput
    _avg?: InterviewAvgOrderByAggregateInput
    _max?: InterviewMaxOrderByAggregateInput
    _min?: InterviewMinOrderByAggregateInput
    _sum?: InterviewSumOrderByAggregateInput
  }

  export type InterviewScalarWhereWithAggregatesInput = {
    AND?: InterviewScalarWhereWithAggregatesInput | InterviewScalarWhereWithAggregatesInput[]
    OR?: InterviewScalarWhereWithAggregatesInput[]
    NOT?: InterviewScalarWhereWithAggregatesInput | InterviewScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Interview"> | string
    schoolId?: StringWithAggregatesFilter<"Interview"> | string
    applicationId?: StringWithAggregatesFilter<"Interview"> | string
    scheduledDate?: DateTimeWithAggregatesFilter<"Interview"> | Date | string
    interviewers?: StringNullableListFilter<"Interview">
    status?: EnumInterviewStatusWithAggregatesFilter<"Interview"> | $Enums.InterviewStatus
    rating?: IntNullableWithAggregatesFilter<"Interview"> | number | null
    feedback?: StringNullableWithAggregatesFilter<"Interview"> | string | null
    conductedAt?: DateTimeNullableWithAggregatesFilter<"Interview"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Interview"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Interview"> | Date | string
  }

  export type ApplicationCreateInput = {
    id?: string
    schoolId: string
    applicationNo: string
    firstName: string
    lastName: string
    email: string
    phone?: string | null
    dateOfBirth: Date | string
    gender: string
    address?: string | null
    city?: string | null
    state?: string | null
    country?: string | null
    postalCode?: string | null
    nationality?: string | null
    previousSchool?: string | null
    gradeApplying: number
    academicYear: string
    parentName: string
    parentEmail: string
    parentPhone: string
    parentRelation: string
    status?: $Enums.ApplicationStatus
    reviewNotes?: string | null
    reviewedBy?: string | null
    reviewedAt?: Date | string | null
    admissionDate?: Date | string | null
    studentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    documents?: ApplicationDocumentCreateNestedManyWithoutApplicationInput
  }

  export type ApplicationUncheckedCreateInput = {
    id?: string
    schoolId: string
    applicationNo: string
    firstName: string
    lastName: string
    email: string
    phone?: string | null
    dateOfBirth: Date | string
    gender: string
    address?: string | null
    city?: string | null
    state?: string | null
    country?: string | null
    postalCode?: string | null
    nationality?: string | null
    previousSchool?: string | null
    gradeApplying: number
    academicYear: string
    parentName: string
    parentEmail: string
    parentPhone: string
    parentRelation: string
    status?: $Enums.ApplicationStatus
    reviewNotes?: string | null
    reviewedBy?: string | null
    reviewedAt?: Date | string | null
    admissionDate?: Date | string | null
    studentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    documents?: ApplicationDocumentUncheckedCreateNestedManyWithoutApplicationInput
  }

  export type ApplicationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    schoolId?: StringFieldUpdateOperationsInput | string
    applicationNo?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    previousSchool?: NullableStringFieldUpdateOperationsInput | string | null
    gradeApplying?: IntFieldUpdateOperationsInput | number
    academicYear?: StringFieldUpdateOperationsInput | string
    parentName?: StringFieldUpdateOperationsInput | string
    parentEmail?: StringFieldUpdateOperationsInput | string
    parentPhone?: StringFieldUpdateOperationsInput | string
    parentRelation?: StringFieldUpdateOperationsInput | string
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    reviewNotes?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedBy?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    admissionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    studentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: ApplicationDocumentUpdateManyWithoutApplicationNestedInput
  }

  export type ApplicationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    schoolId?: StringFieldUpdateOperationsInput | string
    applicationNo?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    previousSchool?: NullableStringFieldUpdateOperationsInput | string | null
    gradeApplying?: IntFieldUpdateOperationsInput | number
    academicYear?: StringFieldUpdateOperationsInput | string
    parentName?: StringFieldUpdateOperationsInput | string
    parentEmail?: StringFieldUpdateOperationsInput | string
    parentPhone?: StringFieldUpdateOperationsInput | string
    parentRelation?: StringFieldUpdateOperationsInput | string
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    reviewNotes?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedBy?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    admissionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    studentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: ApplicationDocumentUncheckedUpdateManyWithoutApplicationNestedInput
  }

  export type ApplicationCreateManyInput = {
    id?: string
    schoolId: string
    applicationNo: string
    firstName: string
    lastName: string
    email: string
    phone?: string | null
    dateOfBirth: Date | string
    gender: string
    address?: string | null
    city?: string | null
    state?: string | null
    country?: string | null
    postalCode?: string | null
    nationality?: string | null
    previousSchool?: string | null
    gradeApplying: number
    academicYear: string
    parentName: string
    parentEmail: string
    parentPhone: string
    parentRelation: string
    status?: $Enums.ApplicationStatus
    reviewNotes?: string | null
    reviewedBy?: string | null
    reviewedAt?: Date | string | null
    admissionDate?: Date | string | null
    studentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ApplicationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    schoolId?: StringFieldUpdateOperationsInput | string
    applicationNo?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    previousSchool?: NullableStringFieldUpdateOperationsInput | string | null
    gradeApplying?: IntFieldUpdateOperationsInput | number
    academicYear?: StringFieldUpdateOperationsInput | string
    parentName?: StringFieldUpdateOperationsInput | string
    parentEmail?: StringFieldUpdateOperationsInput | string
    parentPhone?: StringFieldUpdateOperationsInput | string
    parentRelation?: StringFieldUpdateOperationsInput | string
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    reviewNotes?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedBy?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    admissionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    studentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    schoolId?: StringFieldUpdateOperationsInput | string
    applicationNo?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    previousSchool?: NullableStringFieldUpdateOperationsInput | string | null
    gradeApplying?: IntFieldUpdateOperationsInput | number
    academicYear?: StringFieldUpdateOperationsInput | string
    parentName?: StringFieldUpdateOperationsInput | string
    parentEmail?: StringFieldUpdateOperationsInput | string
    parentPhone?: StringFieldUpdateOperationsInput | string
    parentRelation?: StringFieldUpdateOperationsInput | string
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    reviewNotes?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedBy?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    admissionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    studentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationDocumentCreateInput = {
    id?: string
    name: string
    type: string
    url: string
    uploadedAt?: Date | string
    application: ApplicationCreateNestedOneWithoutDocumentsInput
  }

  export type ApplicationDocumentUncheckedCreateInput = {
    id?: string
    applicationId: string
    name: string
    type: string
    url: string
    uploadedAt?: Date | string
  }

  export type ApplicationDocumentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    application?: ApplicationUpdateOneRequiredWithoutDocumentsNestedInput
  }

  export type ApplicationDocumentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    applicationId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationDocumentCreateManyInput = {
    id?: string
    applicationId: string
    name: string
    type: string
    url: string
    uploadedAt?: Date | string
  }

  export type ApplicationDocumentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationDocumentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    applicationId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdmissionCriteriaCreateInput = {
    id?: string
    schoolId: string
    gradeId?: number | null
    minAge?: number | null
    maxAge?: number | null
    requiredDocs?: AdmissionCriteriaCreaterequiredDocsInput | string[]
    entranceExam?: boolean
    interview?: boolean
    maxStudents?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdmissionCriteriaUncheckedCreateInput = {
    id?: string
    schoolId: string
    gradeId?: number | null
    minAge?: number | null
    maxAge?: number | null
    requiredDocs?: AdmissionCriteriaCreaterequiredDocsInput | string[]
    entranceExam?: boolean
    interview?: boolean
    maxStudents?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdmissionCriteriaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    schoolId?: StringFieldUpdateOperationsInput | string
    gradeId?: NullableIntFieldUpdateOperationsInput | number | null
    minAge?: NullableIntFieldUpdateOperationsInput | number | null
    maxAge?: NullableIntFieldUpdateOperationsInput | number | null
    requiredDocs?: AdmissionCriteriaUpdaterequiredDocsInput | string[]
    entranceExam?: BoolFieldUpdateOperationsInput | boolean
    interview?: BoolFieldUpdateOperationsInput | boolean
    maxStudents?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdmissionCriteriaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    schoolId?: StringFieldUpdateOperationsInput | string
    gradeId?: NullableIntFieldUpdateOperationsInput | number | null
    minAge?: NullableIntFieldUpdateOperationsInput | number | null
    maxAge?: NullableIntFieldUpdateOperationsInput | number | null
    requiredDocs?: AdmissionCriteriaUpdaterequiredDocsInput | string[]
    entranceExam?: BoolFieldUpdateOperationsInput | boolean
    interview?: BoolFieldUpdateOperationsInput | boolean
    maxStudents?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdmissionCriteriaCreateManyInput = {
    id?: string
    schoolId: string
    gradeId?: number | null
    minAge?: number | null
    maxAge?: number | null
    requiredDocs?: AdmissionCriteriaCreaterequiredDocsInput | string[]
    entranceExam?: boolean
    interview?: boolean
    maxStudents?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdmissionCriteriaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    schoolId?: StringFieldUpdateOperationsInput | string
    gradeId?: NullableIntFieldUpdateOperationsInput | number | null
    minAge?: NullableIntFieldUpdateOperationsInput | number | null
    maxAge?: NullableIntFieldUpdateOperationsInput | number | null
    requiredDocs?: AdmissionCriteriaUpdaterequiredDocsInput | string[]
    entranceExam?: BoolFieldUpdateOperationsInput | boolean
    interview?: BoolFieldUpdateOperationsInput | boolean
    maxStudents?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdmissionCriteriaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    schoolId?: StringFieldUpdateOperationsInput | string
    gradeId?: NullableIntFieldUpdateOperationsInput | number | null
    minAge?: NullableIntFieldUpdateOperationsInput | number | null
    maxAge?: NullableIntFieldUpdateOperationsInput | number | null
    requiredDocs?: AdmissionCriteriaUpdaterequiredDocsInput | string[]
    entranceExam?: BoolFieldUpdateOperationsInput | boolean
    interview?: BoolFieldUpdateOperationsInput | boolean
    maxStudents?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EntranceExamCreateInput = {
    id?: string
    schoolId: string
    applicationId: string
    examDate: Date | string
    examType: string
    subjects?: EntranceExamCreatesubjectsInput | string[]
    score?: number | null
    maxScore?: number
    passed?: boolean | null
    remarks?: string | null
    conductedBy?: string | null
    conductedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EntranceExamUncheckedCreateInput = {
    id?: string
    schoolId: string
    applicationId: string
    examDate: Date | string
    examType: string
    subjects?: EntranceExamCreatesubjectsInput | string[]
    score?: number | null
    maxScore?: number
    passed?: boolean | null
    remarks?: string | null
    conductedBy?: string | null
    conductedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EntranceExamUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    schoolId?: StringFieldUpdateOperationsInput | string
    applicationId?: StringFieldUpdateOperationsInput | string
    examDate?: DateTimeFieldUpdateOperationsInput | Date | string
    examType?: StringFieldUpdateOperationsInput | string
    subjects?: EntranceExamUpdatesubjectsInput | string[]
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    maxScore?: FloatFieldUpdateOperationsInput | number
    passed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    conductedBy?: NullableStringFieldUpdateOperationsInput | string | null
    conductedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EntranceExamUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    schoolId?: StringFieldUpdateOperationsInput | string
    applicationId?: StringFieldUpdateOperationsInput | string
    examDate?: DateTimeFieldUpdateOperationsInput | Date | string
    examType?: StringFieldUpdateOperationsInput | string
    subjects?: EntranceExamUpdatesubjectsInput | string[]
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    maxScore?: FloatFieldUpdateOperationsInput | number
    passed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    conductedBy?: NullableStringFieldUpdateOperationsInput | string | null
    conductedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EntranceExamCreateManyInput = {
    id?: string
    schoolId: string
    applicationId: string
    examDate: Date | string
    examType: string
    subjects?: EntranceExamCreatesubjectsInput | string[]
    score?: number | null
    maxScore?: number
    passed?: boolean | null
    remarks?: string | null
    conductedBy?: string | null
    conductedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EntranceExamUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    schoolId?: StringFieldUpdateOperationsInput | string
    applicationId?: StringFieldUpdateOperationsInput | string
    examDate?: DateTimeFieldUpdateOperationsInput | Date | string
    examType?: StringFieldUpdateOperationsInput | string
    subjects?: EntranceExamUpdatesubjectsInput | string[]
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    maxScore?: FloatFieldUpdateOperationsInput | number
    passed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    conductedBy?: NullableStringFieldUpdateOperationsInput | string | null
    conductedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EntranceExamUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    schoolId?: StringFieldUpdateOperationsInput | string
    applicationId?: StringFieldUpdateOperationsInput | string
    examDate?: DateTimeFieldUpdateOperationsInput | Date | string
    examType?: StringFieldUpdateOperationsInput | string
    subjects?: EntranceExamUpdatesubjectsInput | string[]
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    maxScore?: FloatFieldUpdateOperationsInput | number
    passed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    conductedBy?: NullableStringFieldUpdateOperationsInput | string | null
    conductedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InterviewCreateInput = {
    id?: string
    schoolId: string
    applicationId: string
    scheduledDate: Date | string
    interviewers?: InterviewCreateinterviewersInput | string[]
    status?: $Enums.InterviewStatus
    rating?: number | null
    feedback?: string | null
    conductedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InterviewUncheckedCreateInput = {
    id?: string
    schoolId: string
    applicationId: string
    scheduledDate: Date | string
    interviewers?: InterviewCreateinterviewersInput | string[]
    status?: $Enums.InterviewStatus
    rating?: number | null
    feedback?: string | null
    conductedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InterviewUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    schoolId?: StringFieldUpdateOperationsInput | string
    applicationId?: StringFieldUpdateOperationsInput | string
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    interviewers?: InterviewUpdateinterviewersInput | string[]
    status?: EnumInterviewStatusFieldUpdateOperationsInput | $Enums.InterviewStatus
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    conductedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InterviewUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    schoolId?: StringFieldUpdateOperationsInput | string
    applicationId?: StringFieldUpdateOperationsInput | string
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    interviewers?: InterviewUpdateinterviewersInput | string[]
    status?: EnumInterviewStatusFieldUpdateOperationsInput | $Enums.InterviewStatus
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    conductedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InterviewCreateManyInput = {
    id?: string
    schoolId: string
    applicationId: string
    scheduledDate: Date | string
    interviewers?: InterviewCreateinterviewersInput | string[]
    status?: $Enums.InterviewStatus
    rating?: number | null
    feedback?: string | null
    conductedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InterviewUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    schoolId?: StringFieldUpdateOperationsInput | string
    applicationId?: StringFieldUpdateOperationsInput | string
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    interviewers?: InterviewUpdateinterviewersInput | string[]
    status?: EnumInterviewStatusFieldUpdateOperationsInput | $Enums.InterviewStatus
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    conductedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InterviewUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    schoolId?: StringFieldUpdateOperationsInput | string
    applicationId?: StringFieldUpdateOperationsInput | string
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    interviewers?: InterviewUpdateinterviewersInput | string[]
    status?: EnumInterviewStatusFieldUpdateOperationsInput | $Enums.InterviewStatus
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    conductedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EnumApplicationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ApplicationStatus | EnumApplicationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumApplicationStatusFilter<$PrismaModel> | $Enums.ApplicationStatus
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type ApplicationDocumentListRelationFilter = {
    every?: ApplicationDocumentWhereInput
    some?: ApplicationDocumentWhereInput
    none?: ApplicationDocumentWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ApplicationDocumentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ApplicationCountOrderByAggregateInput = {
    id?: SortOrder
    schoolId?: SortOrder
    applicationNo?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    dateOfBirth?: SortOrder
    gender?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    country?: SortOrder
    postalCode?: SortOrder
    nationality?: SortOrder
    previousSchool?: SortOrder
    gradeApplying?: SortOrder
    academicYear?: SortOrder
    parentName?: SortOrder
    parentEmail?: SortOrder
    parentPhone?: SortOrder
    parentRelation?: SortOrder
    status?: SortOrder
    reviewNotes?: SortOrder
    reviewedBy?: SortOrder
    reviewedAt?: SortOrder
    admissionDate?: SortOrder
    studentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ApplicationAvgOrderByAggregateInput = {
    gradeApplying?: SortOrder
  }

  export type ApplicationMaxOrderByAggregateInput = {
    id?: SortOrder
    schoolId?: SortOrder
    applicationNo?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    dateOfBirth?: SortOrder
    gender?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    country?: SortOrder
    postalCode?: SortOrder
    nationality?: SortOrder
    previousSchool?: SortOrder
    gradeApplying?: SortOrder
    academicYear?: SortOrder
    parentName?: SortOrder
    parentEmail?: SortOrder
    parentPhone?: SortOrder
    parentRelation?: SortOrder
    status?: SortOrder
    reviewNotes?: SortOrder
    reviewedBy?: SortOrder
    reviewedAt?: SortOrder
    admissionDate?: SortOrder
    studentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ApplicationMinOrderByAggregateInput = {
    id?: SortOrder
    schoolId?: SortOrder
    applicationNo?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    dateOfBirth?: SortOrder
    gender?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    country?: SortOrder
    postalCode?: SortOrder
    nationality?: SortOrder
    previousSchool?: SortOrder
    gradeApplying?: SortOrder
    academicYear?: SortOrder
    parentName?: SortOrder
    parentEmail?: SortOrder
    parentPhone?: SortOrder
    parentRelation?: SortOrder
    status?: SortOrder
    reviewNotes?: SortOrder
    reviewedBy?: SortOrder
    reviewedAt?: SortOrder
    admissionDate?: SortOrder
    studentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ApplicationSumOrderByAggregateInput = {
    gradeApplying?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumApplicationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ApplicationStatus | EnumApplicationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumApplicationStatusWithAggregatesFilter<$PrismaModel> | $Enums.ApplicationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumApplicationStatusFilter<$PrismaModel>
    _max?: NestedEnumApplicationStatusFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type ApplicationRelationFilter = {
    is?: ApplicationWhereInput
    isNot?: ApplicationWhereInput
  }

  export type ApplicationDocumentCountOrderByAggregateInput = {
    id?: SortOrder
    applicationId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    url?: SortOrder
    uploadedAt?: SortOrder
  }

  export type ApplicationDocumentMaxOrderByAggregateInput = {
    id?: SortOrder
    applicationId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    url?: SortOrder
    uploadedAt?: SortOrder
  }

  export type ApplicationDocumentMinOrderByAggregateInput = {
    id?: SortOrder
    applicationId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    url?: SortOrder
    uploadedAt?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type AdmissionCriteriaCountOrderByAggregateInput = {
    id?: SortOrder
    schoolId?: SortOrder
    gradeId?: SortOrder
    minAge?: SortOrder
    maxAge?: SortOrder
    requiredDocs?: SortOrder
    entranceExam?: SortOrder
    interview?: SortOrder
    maxStudents?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdmissionCriteriaAvgOrderByAggregateInput = {
    gradeId?: SortOrder
    minAge?: SortOrder
    maxAge?: SortOrder
    maxStudents?: SortOrder
  }

  export type AdmissionCriteriaMaxOrderByAggregateInput = {
    id?: SortOrder
    schoolId?: SortOrder
    gradeId?: SortOrder
    minAge?: SortOrder
    maxAge?: SortOrder
    entranceExam?: SortOrder
    interview?: SortOrder
    maxStudents?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdmissionCriteriaMinOrderByAggregateInput = {
    id?: SortOrder
    schoolId?: SortOrder
    gradeId?: SortOrder
    minAge?: SortOrder
    maxAge?: SortOrder
    entranceExam?: SortOrder
    interview?: SortOrder
    maxStudents?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdmissionCriteriaSumOrderByAggregateInput = {
    gradeId?: SortOrder
    minAge?: SortOrder
    maxAge?: SortOrder
    maxStudents?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type EntranceExamCountOrderByAggregateInput = {
    id?: SortOrder
    schoolId?: SortOrder
    applicationId?: SortOrder
    examDate?: SortOrder
    examType?: SortOrder
    subjects?: SortOrder
    score?: SortOrder
    maxScore?: SortOrder
    passed?: SortOrder
    remarks?: SortOrder
    conductedBy?: SortOrder
    conductedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EntranceExamAvgOrderByAggregateInput = {
    score?: SortOrder
    maxScore?: SortOrder
  }

  export type EntranceExamMaxOrderByAggregateInput = {
    id?: SortOrder
    schoolId?: SortOrder
    applicationId?: SortOrder
    examDate?: SortOrder
    examType?: SortOrder
    score?: SortOrder
    maxScore?: SortOrder
    passed?: SortOrder
    remarks?: SortOrder
    conductedBy?: SortOrder
    conductedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EntranceExamMinOrderByAggregateInput = {
    id?: SortOrder
    schoolId?: SortOrder
    applicationId?: SortOrder
    examDate?: SortOrder
    examType?: SortOrder
    score?: SortOrder
    maxScore?: SortOrder
    passed?: SortOrder
    remarks?: SortOrder
    conductedBy?: SortOrder
    conductedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EntranceExamSumOrderByAggregateInput = {
    score?: SortOrder
    maxScore?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type EnumInterviewStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.InterviewStatus | EnumInterviewStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InterviewStatus[] | ListEnumInterviewStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.InterviewStatus[] | ListEnumInterviewStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumInterviewStatusFilter<$PrismaModel> | $Enums.InterviewStatus
  }

  export type InterviewCountOrderByAggregateInput = {
    id?: SortOrder
    schoolId?: SortOrder
    applicationId?: SortOrder
    scheduledDate?: SortOrder
    interviewers?: SortOrder
    status?: SortOrder
    rating?: SortOrder
    feedback?: SortOrder
    conductedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InterviewAvgOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type InterviewMaxOrderByAggregateInput = {
    id?: SortOrder
    schoolId?: SortOrder
    applicationId?: SortOrder
    scheduledDate?: SortOrder
    status?: SortOrder
    rating?: SortOrder
    feedback?: SortOrder
    conductedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InterviewMinOrderByAggregateInput = {
    id?: SortOrder
    schoolId?: SortOrder
    applicationId?: SortOrder
    scheduledDate?: SortOrder
    status?: SortOrder
    rating?: SortOrder
    feedback?: SortOrder
    conductedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InterviewSumOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type EnumInterviewStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InterviewStatus | EnumInterviewStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InterviewStatus[] | ListEnumInterviewStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.InterviewStatus[] | ListEnumInterviewStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumInterviewStatusWithAggregatesFilter<$PrismaModel> | $Enums.InterviewStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInterviewStatusFilter<$PrismaModel>
    _max?: NestedEnumInterviewStatusFilter<$PrismaModel>
  }

  export type ApplicationDocumentCreateNestedManyWithoutApplicationInput = {
    create?: XOR<ApplicationDocumentCreateWithoutApplicationInput, ApplicationDocumentUncheckedCreateWithoutApplicationInput> | ApplicationDocumentCreateWithoutApplicationInput[] | ApplicationDocumentUncheckedCreateWithoutApplicationInput[]
    connectOrCreate?: ApplicationDocumentCreateOrConnectWithoutApplicationInput | ApplicationDocumentCreateOrConnectWithoutApplicationInput[]
    createMany?: ApplicationDocumentCreateManyApplicationInputEnvelope
    connect?: ApplicationDocumentWhereUniqueInput | ApplicationDocumentWhereUniqueInput[]
  }

  export type ApplicationDocumentUncheckedCreateNestedManyWithoutApplicationInput = {
    create?: XOR<ApplicationDocumentCreateWithoutApplicationInput, ApplicationDocumentUncheckedCreateWithoutApplicationInput> | ApplicationDocumentCreateWithoutApplicationInput[] | ApplicationDocumentUncheckedCreateWithoutApplicationInput[]
    connectOrCreate?: ApplicationDocumentCreateOrConnectWithoutApplicationInput | ApplicationDocumentCreateOrConnectWithoutApplicationInput[]
    createMany?: ApplicationDocumentCreateManyApplicationInputEnvelope
    connect?: ApplicationDocumentWhereUniqueInput | ApplicationDocumentWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumApplicationStatusFieldUpdateOperationsInput = {
    set?: $Enums.ApplicationStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type ApplicationDocumentUpdateManyWithoutApplicationNestedInput = {
    create?: XOR<ApplicationDocumentCreateWithoutApplicationInput, ApplicationDocumentUncheckedCreateWithoutApplicationInput> | ApplicationDocumentCreateWithoutApplicationInput[] | ApplicationDocumentUncheckedCreateWithoutApplicationInput[]
    connectOrCreate?: ApplicationDocumentCreateOrConnectWithoutApplicationInput | ApplicationDocumentCreateOrConnectWithoutApplicationInput[]
    upsert?: ApplicationDocumentUpsertWithWhereUniqueWithoutApplicationInput | ApplicationDocumentUpsertWithWhereUniqueWithoutApplicationInput[]
    createMany?: ApplicationDocumentCreateManyApplicationInputEnvelope
    set?: ApplicationDocumentWhereUniqueInput | ApplicationDocumentWhereUniqueInput[]
    disconnect?: ApplicationDocumentWhereUniqueInput | ApplicationDocumentWhereUniqueInput[]
    delete?: ApplicationDocumentWhereUniqueInput | ApplicationDocumentWhereUniqueInput[]
    connect?: ApplicationDocumentWhereUniqueInput | ApplicationDocumentWhereUniqueInput[]
    update?: ApplicationDocumentUpdateWithWhereUniqueWithoutApplicationInput | ApplicationDocumentUpdateWithWhereUniqueWithoutApplicationInput[]
    updateMany?: ApplicationDocumentUpdateManyWithWhereWithoutApplicationInput | ApplicationDocumentUpdateManyWithWhereWithoutApplicationInput[]
    deleteMany?: ApplicationDocumentScalarWhereInput | ApplicationDocumentScalarWhereInput[]
  }

  export type ApplicationDocumentUncheckedUpdateManyWithoutApplicationNestedInput = {
    create?: XOR<ApplicationDocumentCreateWithoutApplicationInput, ApplicationDocumentUncheckedCreateWithoutApplicationInput> | ApplicationDocumentCreateWithoutApplicationInput[] | ApplicationDocumentUncheckedCreateWithoutApplicationInput[]
    connectOrCreate?: ApplicationDocumentCreateOrConnectWithoutApplicationInput | ApplicationDocumentCreateOrConnectWithoutApplicationInput[]
    upsert?: ApplicationDocumentUpsertWithWhereUniqueWithoutApplicationInput | ApplicationDocumentUpsertWithWhereUniqueWithoutApplicationInput[]
    createMany?: ApplicationDocumentCreateManyApplicationInputEnvelope
    set?: ApplicationDocumentWhereUniqueInput | ApplicationDocumentWhereUniqueInput[]
    disconnect?: ApplicationDocumentWhereUniqueInput | ApplicationDocumentWhereUniqueInput[]
    delete?: ApplicationDocumentWhereUniqueInput | ApplicationDocumentWhereUniqueInput[]
    connect?: ApplicationDocumentWhereUniqueInput | ApplicationDocumentWhereUniqueInput[]
    update?: ApplicationDocumentUpdateWithWhereUniqueWithoutApplicationInput | ApplicationDocumentUpdateWithWhereUniqueWithoutApplicationInput[]
    updateMany?: ApplicationDocumentUpdateManyWithWhereWithoutApplicationInput | ApplicationDocumentUpdateManyWithWhereWithoutApplicationInput[]
    deleteMany?: ApplicationDocumentScalarWhereInput | ApplicationDocumentScalarWhereInput[]
  }

  export type ApplicationCreateNestedOneWithoutDocumentsInput = {
    create?: XOR<ApplicationCreateWithoutDocumentsInput, ApplicationUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: ApplicationCreateOrConnectWithoutDocumentsInput
    connect?: ApplicationWhereUniqueInput
  }

  export type ApplicationUpdateOneRequiredWithoutDocumentsNestedInput = {
    create?: XOR<ApplicationCreateWithoutDocumentsInput, ApplicationUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: ApplicationCreateOrConnectWithoutDocumentsInput
    upsert?: ApplicationUpsertWithoutDocumentsInput
    connect?: ApplicationWhereUniqueInput
    update?: XOR<XOR<ApplicationUpdateToOneWithWhereWithoutDocumentsInput, ApplicationUpdateWithoutDocumentsInput>, ApplicationUncheckedUpdateWithoutDocumentsInput>
  }

  export type AdmissionCriteriaCreaterequiredDocsInput = {
    set: string[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AdmissionCriteriaUpdaterequiredDocsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EntranceExamCreatesubjectsInput = {
    set: string[]
  }

  export type EntranceExamUpdatesubjectsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type InterviewCreateinterviewersInput = {
    set: string[]
  }

  export type InterviewUpdateinterviewersInput = {
    set?: string[]
    push?: string | string[]
  }

  export type EnumInterviewStatusFieldUpdateOperationsInput = {
    set?: $Enums.InterviewStatus
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumApplicationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ApplicationStatus | EnumApplicationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumApplicationStatusFilter<$PrismaModel> | $Enums.ApplicationStatus
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumApplicationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ApplicationStatus | EnumApplicationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumApplicationStatusWithAggregatesFilter<$PrismaModel> | $Enums.ApplicationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumApplicationStatusFilter<$PrismaModel>
    _max?: NestedEnumApplicationStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedEnumInterviewStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.InterviewStatus | EnumInterviewStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InterviewStatus[] | ListEnumInterviewStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.InterviewStatus[] | ListEnumInterviewStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumInterviewStatusFilter<$PrismaModel> | $Enums.InterviewStatus
  }

  export type NestedEnumInterviewStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InterviewStatus | EnumInterviewStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InterviewStatus[] | ListEnumInterviewStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.InterviewStatus[] | ListEnumInterviewStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumInterviewStatusWithAggregatesFilter<$PrismaModel> | $Enums.InterviewStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInterviewStatusFilter<$PrismaModel>
    _max?: NestedEnumInterviewStatusFilter<$PrismaModel>
  }

  export type ApplicationDocumentCreateWithoutApplicationInput = {
    id?: string
    name: string
    type: string
    url: string
    uploadedAt?: Date | string
  }

  export type ApplicationDocumentUncheckedCreateWithoutApplicationInput = {
    id?: string
    name: string
    type: string
    url: string
    uploadedAt?: Date | string
  }

  export type ApplicationDocumentCreateOrConnectWithoutApplicationInput = {
    where: ApplicationDocumentWhereUniqueInput
    create: XOR<ApplicationDocumentCreateWithoutApplicationInput, ApplicationDocumentUncheckedCreateWithoutApplicationInput>
  }

  export type ApplicationDocumentCreateManyApplicationInputEnvelope = {
    data: ApplicationDocumentCreateManyApplicationInput | ApplicationDocumentCreateManyApplicationInput[]
    skipDuplicates?: boolean
  }

  export type ApplicationDocumentUpsertWithWhereUniqueWithoutApplicationInput = {
    where: ApplicationDocumentWhereUniqueInput
    update: XOR<ApplicationDocumentUpdateWithoutApplicationInput, ApplicationDocumentUncheckedUpdateWithoutApplicationInput>
    create: XOR<ApplicationDocumentCreateWithoutApplicationInput, ApplicationDocumentUncheckedCreateWithoutApplicationInput>
  }

  export type ApplicationDocumentUpdateWithWhereUniqueWithoutApplicationInput = {
    where: ApplicationDocumentWhereUniqueInput
    data: XOR<ApplicationDocumentUpdateWithoutApplicationInput, ApplicationDocumentUncheckedUpdateWithoutApplicationInput>
  }

  export type ApplicationDocumentUpdateManyWithWhereWithoutApplicationInput = {
    where: ApplicationDocumentScalarWhereInput
    data: XOR<ApplicationDocumentUpdateManyMutationInput, ApplicationDocumentUncheckedUpdateManyWithoutApplicationInput>
  }

  export type ApplicationDocumentScalarWhereInput = {
    AND?: ApplicationDocumentScalarWhereInput | ApplicationDocumentScalarWhereInput[]
    OR?: ApplicationDocumentScalarWhereInput[]
    NOT?: ApplicationDocumentScalarWhereInput | ApplicationDocumentScalarWhereInput[]
    id?: StringFilter<"ApplicationDocument"> | string
    applicationId?: StringFilter<"ApplicationDocument"> | string
    name?: StringFilter<"ApplicationDocument"> | string
    type?: StringFilter<"ApplicationDocument"> | string
    url?: StringFilter<"ApplicationDocument"> | string
    uploadedAt?: DateTimeFilter<"ApplicationDocument"> | Date | string
  }

  export type ApplicationCreateWithoutDocumentsInput = {
    id?: string
    schoolId: string
    applicationNo: string
    firstName: string
    lastName: string
    email: string
    phone?: string | null
    dateOfBirth: Date | string
    gender: string
    address?: string | null
    city?: string | null
    state?: string | null
    country?: string | null
    postalCode?: string | null
    nationality?: string | null
    previousSchool?: string | null
    gradeApplying: number
    academicYear: string
    parentName: string
    parentEmail: string
    parentPhone: string
    parentRelation: string
    status?: $Enums.ApplicationStatus
    reviewNotes?: string | null
    reviewedBy?: string | null
    reviewedAt?: Date | string | null
    admissionDate?: Date | string | null
    studentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ApplicationUncheckedCreateWithoutDocumentsInput = {
    id?: string
    schoolId: string
    applicationNo: string
    firstName: string
    lastName: string
    email: string
    phone?: string | null
    dateOfBirth: Date | string
    gender: string
    address?: string | null
    city?: string | null
    state?: string | null
    country?: string | null
    postalCode?: string | null
    nationality?: string | null
    previousSchool?: string | null
    gradeApplying: number
    academicYear: string
    parentName: string
    parentEmail: string
    parentPhone: string
    parentRelation: string
    status?: $Enums.ApplicationStatus
    reviewNotes?: string | null
    reviewedBy?: string | null
    reviewedAt?: Date | string | null
    admissionDate?: Date | string | null
    studentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ApplicationCreateOrConnectWithoutDocumentsInput = {
    where: ApplicationWhereUniqueInput
    create: XOR<ApplicationCreateWithoutDocumentsInput, ApplicationUncheckedCreateWithoutDocumentsInput>
  }

  export type ApplicationUpsertWithoutDocumentsInput = {
    update: XOR<ApplicationUpdateWithoutDocumentsInput, ApplicationUncheckedUpdateWithoutDocumentsInput>
    create: XOR<ApplicationCreateWithoutDocumentsInput, ApplicationUncheckedCreateWithoutDocumentsInput>
    where?: ApplicationWhereInput
  }

  export type ApplicationUpdateToOneWithWhereWithoutDocumentsInput = {
    where?: ApplicationWhereInput
    data: XOR<ApplicationUpdateWithoutDocumentsInput, ApplicationUncheckedUpdateWithoutDocumentsInput>
  }

  export type ApplicationUpdateWithoutDocumentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    schoolId?: StringFieldUpdateOperationsInput | string
    applicationNo?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    previousSchool?: NullableStringFieldUpdateOperationsInput | string | null
    gradeApplying?: IntFieldUpdateOperationsInput | number
    academicYear?: StringFieldUpdateOperationsInput | string
    parentName?: StringFieldUpdateOperationsInput | string
    parentEmail?: StringFieldUpdateOperationsInput | string
    parentPhone?: StringFieldUpdateOperationsInput | string
    parentRelation?: StringFieldUpdateOperationsInput | string
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    reviewNotes?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedBy?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    admissionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    studentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationUncheckedUpdateWithoutDocumentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    schoolId?: StringFieldUpdateOperationsInput | string
    applicationNo?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    previousSchool?: NullableStringFieldUpdateOperationsInput | string | null
    gradeApplying?: IntFieldUpdateOperationsInput | number
    academicYear?: StringFieldUpdateOperationsInput | string
    parentName?: StringFieldUpdateOperationsInput | string
    parentEmail?: StringFieldUpdateOperationsInput | string
    parentPhone?: StringFieldUpdateOperationsInput | string
    parentRelation?: StringFieldUpdateOperationsInput | string
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    reviewNotes?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedBy?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    admissionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    studentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationDocumentCreateManyApplicationInput = {
    id?: string
    name: string
    type: string
    url: string
    uploadedAt?: Date | string
  }

  export type ApplicationDocumentUpdateWithoutApplicationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationDocumentUncheckedUpdateWithoutApplicationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationDocumentUncheckedUpdateManyWithoutApplicationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use ApplicationCountOutputTypeDefaultArgs instead
     */
    export type ApplicationCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ApplicationCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ApplicationDefaultArgs instead
     */
    export type ApplicationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ApplicationDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ApplicationDocumentDefaultArgs instead
     */
    export type ApplicationDocumentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ApplicationDocumentDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AdmissionCriteriaDefaultArgs instead
     */
    export type AdmissionCriteriaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AdmissionCriteriaDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EntranceExamDefaultArgs instead
     */
    export type EntranceExamArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EntranceExamDefaultArgs<ExtArgs>
    /**
     * @deprecated Use InterviewDefaultArgs instead
     */
    export type InterviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = InterviewDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}