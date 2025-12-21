
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
 * Model NotificationJob
 * 
 */
export type NotificationJob = $Result.DefaultSelection<Prisma.$NotificationJobPayload>
/**
 * Model NotificationTemplate
 * 
 */
export type NotificationTemplate = $Result.DefaultSelection<Prisma.$NotificationTemplatePayload>
/**
 * Model EmailLog
 * 
 */
export type EmailLog = $Result.DefaultSelection<Prisma.$EmailLogPayload>
/**
 * Model PushLog
 * 
 */
export type PushLog = $Result.DefaultSelection<Prisma.$PushLogPayload>
/**
 * Model SmsLog
 * 
 */
export type SmsLog = $Result.DefaultSelection<Prisma.$SmsLogPayload>
/**
 * Model DeviceToken
 * 
 */
export type DeviceToken = $Result.DefaultSelection<Prisma.$DeviceTokenPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const NotificationType: {
  ANNOUNCEMENT: 'ANNOUNCEMENT',
  MESSAGE: 'MESSAGE',
  ALERT: 'ALERT',
  REMINDER: 'REMINDER',
  SYSTEM: 'SYSTEM',
  MARKETING: 'MARKETING'
};

export type NotificationType = (typeof NotificationType)[keyof typeof NotificationType]


export const JobStatus: {
  PENDING: 'PENDING',
  PROCESSING: 'PROCESSING',
  COMPLETED: 'COMPLETED',
  FAILED: 'FAILED',
  CANCELLED: 'CANCELLED'
};

export type JobStatus = (typeof JobStatus)[keyof typeof JobStatus]

}

export type NotificationType = $Enums.NotificationType

export const NotificationType: typeof $Enums.NotificationType

export type JobStatus = $Enums.JobStatus

export const JobStatus: typeof $Enums.JobStatus

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more NotificationJobs
 * const notificationJobs = await prisma.notificationJob.findMany()
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
   * // Fetch zero or more NotificationJobs
   * const notificationJobs = await prisma.notificationJob.findMany()
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
   * `prisma.notificationJob`: Exposes CRUD operations for the **NotificationJob** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NotificationJobs
    * const notificationJobs = await prisma.notificationJob.findMany()
    * ```
    */
  get notificationJob(): Prisma.NotificationJobDelegate<ExtArgs>;

  /**
   * `prisma.notificationTemplate`: Exposes CRUD operations for the **NotificationTemplate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NotificationTemplates
    * const notificationTemplates = await prisma.notificationTemplate.findMany()
    * ```
    */
  get notificationTemplate(): Prisma.NotificationTemplateDelegate<ExtArgs>;

  /**
   * `prisma.emailLog`: Exposes CRUD operations for the **EmailLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EmailLogs
    * const emailLogs = await prisma.emailLog.findMany()
    * ```
    */
  get emailLog(): Prisma.EmailLogDelegate<ExtArgs>;

  /**
   * `prisma.pushLog`: Exposes CRUD operations for the **PushLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PushLogs
    * const pushLogs = await prisma.pushLog.findMany()
    * ```
    */
  get pushLog(): Prisma.PushLogDelegate<ExtArgs>;

  /**
   * `prisma.smsLog`: Exposes CRUD operations for the **SmsLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SmsLogs
    * const smsLogs = await prisma.smsLog.findMany()
    * ```
    */
  get smsLog(): Prisma.SmsLogDelegate<ExtArgs>;

  /**
   * `prisma.deviceToken`: Exposes CRUD operations for the **DeviceToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DeviceTokens
    * const deviceTokens = await prisma.deviceToken.findMany()
    * ```
    */
  get deviceToken(): Prisma.DeviceTokenDelegate<ExtArgs>;
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
    NotificationJob: 'NotificationJob',
    NotificationTemplate: 'NotificationTemplate',
    EmailLog: 'EmailLog',
    PushLog: 'PushLog',
    SmsLog: 'SmsLog',
    DeviceToken: 'DeviceToken'
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
      modelProps: "notificationJob" | "notificationTemplate" | "emailLog" | "pushLog" | "smsLog" | "deviceToken"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      NotificationJob: {
        payload: Prisma.$NotificationJobPayload<ExtArgs>
        fields: Prisma.NotificationJobFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationJobFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationJobPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationJobFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationJobPayload>
          }
          findFirst: {
            args: Prisma.NotificationJobFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationJobPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationJobFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationJobPayload>
          }
          findMany: {
            args: Prisma.NotificationJobFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationJobPayload>[]
          }
          create: {
            args: Prisma.NotificationJobCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationJobPayload>
          }
          createMany: {
            args: Prisma.NotificationJobCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NotificationJobCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationJobPayload>[]
          }
          delete: {
            args: Prisma.NotificationJobDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationJobPayload>
          }
          update: {
            args: Prisma.NotificationJobUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationJobPayload>
          }
          deleteMany: {
            args: Prisma.NotificationJobDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationJobUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.NotificationJobUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationJobPayload>
          }
          aggregate: {
            args: Prisma.NotificationJobAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotificationJob>
          }
          groupBy: {
            args: Prisma.NotificationJobGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationJobGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationJobCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationJobCountAggregateOutputType> | number
          }
        }
      }
      NotificationTemplate: {
        payload: Prisma.$NotificationTemplatePayload<ExtArgs>
        fields: Prisma.NotificationTemplateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationTemplateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationTemplatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationTemplateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationTemplatePayload>
          }
          findFirst: {
            args: Prisma.NotificationTemplateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationTemplatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationTemplateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationTemplatePayload>
          }
          findMany: {
            args: Prisma.NotificationTemplateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationTemplatePayload>[]
          }
          create: {
            args: Prisma.NotificationTemplateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationTemplatePayload>
          }
          createMany: {
            args: Prisma.NotificationTemplateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NotificationTemplateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationTemplatePayload>[]
          }
          delete: {
            args: Prisma.NotificationTemplateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationTemplatePayload>
          }
          update: {
            args: Prisma.NotificationTemplateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationTemplatePayload>
          }
          deleteMany: {
            args: Prisma.NotificationTemplateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationTemplateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.NotificationTemplateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationTemplatePayload>
          }
          aggregate: {
            args: Prisma.NotificationTemplateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotificationTemplate>
          }
          groupBy: {
            args: Prisma.NotificationTemplateGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationTemplateGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationTemplateCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationTemplateCountAggregateOutputType> | number
          }
        }
      }
      EmailLog: {
        payload: Prisma.$EmailLogPayload<ExtArgs>
        fields: Prisma.EmailLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmailLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmailLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailLogPayload>
          }
          findFirst: {
            args: Prisma.EmailLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmailLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailLogPayload>
          }
          findMany: {
            args: Prisma.EmailLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailLogPayload>[]
          }
          create: {
            args: Prisma.EmailLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailLogPayload>
          }
          createMany: {
            args: Prisma.EmailLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmailLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailLogPayload>[]
          }
          delete: {
            args: Prisma.EmailLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailLogPayload>
          }
          update: {
            args: Prisma.EmailLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailLogPayload>
          }
          deleteMany: {
            args: Prisma.EmailLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmailLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EmailLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailLogPayload>
          }
          aggregate: {
            args: Prisma.EmailLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmailLog>
          }
          groupBy: {
            args: Prisma.EmailLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmailLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmailLogCountArgs<ExtArgs>
            result: $Utils.Optional<EmailLogCountAggregateOutputType> | number
          }
        }
      }
      PushLog: {
        payload: Prisma.$PushLogPayload<ExtArgs>
        fields: Prisma.PushLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PushLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PushLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PushLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PushLogPayload>
          }
          findFirst: {
            args: Prisma.PushLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PushLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PushLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PushLogPayload>
          }
          findMany: {
            args: Prisma.PushLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PushLogPayload>[]
          }
          create: {
            args: Prisma.PushLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PushLogPayload>
          }
          createMany: {
            args: Prisma.PushLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PushLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PushLogPayload>[]
          }
          delete: {
            args: Prisma.PushLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PushLogPayload>
          }
          update: {
            args: Prisma.PushLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PushLogPayload>
          }
          deleteMany: {
            args: Prisma.PushLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PushLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PushLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PushLogPayload>
          }
          aggregate: {
            args: Prisma.PushLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePushLog>
          }
          groupBy: {
            args: Prisma.PushLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<PushLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.PushLogCountArgs<ExtArgs>
            result: $Utils.Optional<PushLogCountAggregateOutputType> | number
          }
        }
      }
      SmsLog: {
        payload: Prisma.$SmsLogPayload<ExtArgs>
        fields: Prisma.SmsLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SmsLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SmsLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SmsLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SmsLogPayload>
          }
          findFirst: {
            args: Prisma.SmsLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SmsLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SmsLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SmsLogPayload>
          }
          findMany: {
            args: Prisma.SmsLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SmsLogPayload>[]
          }
          create: {
            args: Prisma.SmsLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SmsLogPayload>
          }
          createMany: {
            args: Prisma.SmsLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SmsLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SmsLogPayload>[]
          }
          delete: {
            args: Prisma.SmsLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SmsLogPayload>
          }
          update: {
            args: Prisma.SmsLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SmsLogPayload>
          }
          deleteMany: {
            args: Prisma.SmsLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SmsLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SmsLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SmsLogPayload>
          }
          aggregate: {
            args: Prisma.SmsLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSmsLog>
          }
          groupBy: {
            args: Prisma.SmsLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<SmsLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.SmsLogCountArgs<ExtArgs>
            result: $Utils.Optional<SmsLogCountAggregateOutputType> | number
          }
        }
      }
      DeviceToken: {
        payload: Prisma.$DeviceTokenPayload<ExtArgs>
        fields: Prisma.DeviceTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DeviceTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DeviceTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceTokenPayload>
          }
          findFirst: {
            args: Prisma.DeviceTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DeviceTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceTokenPayload>
          }
          findMany: {
            args: Prisma.DeviceTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceTokenPayload>[]
          }
          create: {
            args: Prisma.DeviceTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceTokenPayload>
          }
          createMany: {
            args: Prisma.DeviceTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DeviceTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceTokenPayload>[]
          }
          delete: {
            args: Prisma.DeviceTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceTokenPayload>
          }
          update: {
            args: Prisma.DeviceTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceTokenPayload>
          }
          deleteMany: {
            args: Prisma.DeviceTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DeviceTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DeviceTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceTokenPayload>
          }
          aggregate: {
            args: Prisma.DeviceTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDeviceToken>
          }
          groupBy: {
            args: Prisma.DeviceTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<DeviceTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.DeviceTokenCountArgs<ExtArgs>
            result: $Utils.Optional<DeviceTokenCountAggregateOutputType> | number
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
   * Models
   */

  /**
   * Model NotificationJob
   */

  export type AggregateNotificationJob = {
    _count: NotificationJobCountAggregateOutputType | null
    _avg: NotificationJobAvgAggregateOutputType | null
    _sum: NotificationJobSumAggregateOutputType | null
    _min: NotificationJobMinAggregateOutputType | null
    _max: NotificationJobMaxAggregateOutputType | null
  }

  export type NotificationJobAvgAggregateOutputType = {
    attempts: number | null
    maxAttempts: number | null
    priority: number | null
  }

  export type NotificationJobSumAggregateOutputType = {
    attempts: number | null
    maxAttempts: number | null
    priority: number | null
  }

  export type NotificationJobMinAggregateOutputType = {
    id: string | null
    type: $Enums.NotificationType | null
    status: $Enums.JobStatus | null
    schoolId: string | null
    userId: string | null
    userEmail: string | null
    userPhone: string | null
    subject: string | null
    title: string | null
    body: string | null
    scheduledFor: Date | null
    processedAt: Date | null
    attempts: number | null
    maxAttempts: number | null
    lastError: string | null
    nextRetryAt: Date | null
    priority: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NotificationJobMaxAggregateOutputType = {
    id: string | null
    type: $Enums.NotificationType | null
    status: $Enums.JobStatus | null
    schoolId: string | null
    userId: string | null
    userEmail: string | null
    userPhone: string | null
    subject: string | null
    title: string | null
    body: string | null
    scheduledFor: Date | null
    processedAt: Date | null
    attempts: number | null
    maxAttempts: number | null
    lastError: string | null
    nextRetryAt: Date | null
    priority: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NotificationJobCountAggregateOutputType = {
    id: number
    type: number
    status: number
    schoolId: number
    userId: number
    userEmail: number
    userPhone: number
    subject: number
    title: number
    body: number
    data: number
    channels: number
    scheduledFor: number
    processedAt: number
    attempts: number
    maxAttempts: number
    lastError: number
    nextRetryAt: number
    priority: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type NotificationJobAvgAggregateInputType = {
    attempts?: true
    maxAttempts?: true
    priority?: true
  }

  export type NotificationJobSumAggregateInputType = {
    attempts?: true
    maxAttempts?: true
    priority?: true
  }

  export type NotificationJobMinAggregateInputType = {
    id?: true
    type?: true
    status?: true
    schoolId?: true
    userId?: true
    userEmail?: true
    userPhone?: true
    subject?: true
    title?: true
    body?: true
    scheduledFor?: true
    processedAt?: true
    attempts?: true
    maxAttempts?: true
    lastError?: true
    nextRetryAt?: true
    priority?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NotificationJobMaxAggregateInputType = {
    id?: true
    type?: true
    status?: true
    schoolId?: true
    userId?: true
    userEmail?: true
    userPhone?: true
    subject?: true
    title?: true
    body?: true
    scheduledFor?: true
    processedAt?: true
    attempts?: true
    maxAttempts?: true
    lastError?: true
    nextRetryAt?: true
    priority?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NotificationJobCountAggregateInputType = {
    id?: true
    type?: true
    status?: true
    schoolId?: true
    userId?: true
    userEmail?: true
    userPhone?: true
    subject?: true
    title?: true
    body?: true
    data?: true
    channels?: true
    scheduledFor?: true
    processedAt?: true
    attempts?: true
    maxAttempts?: true
    lastError?: true
    nextRetryAt?: true
    priority?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type NotificationJobAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NotificationJob to aggregate.
     */
    where?: NotificationJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotificationJobs to fetch.
     */
    orderBy?: NotificationJobOrderByWithRelationInput | NotificationJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotificationJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotificationJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NotificationJobs
    **/
    _count?: true | NotificationJobCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NotificationJobAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NotificationJobSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationJobMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationJobMaxAggregateInputType
  }

  export type GetNotificationJobAggregateType<T extends NotificationJobAggregateArgs> = {
        [P in keyof T & keyof AggregateNotificationJob]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotificationJob[P]>
      : GetScalarType<T[P], AggregateNotificationJob[P]>
  }




  export type NotificationJobGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationJobWhereInput
    orderBy?: NotificationJobOrderByWithAggregationInput | NotificationJobOrderByWithAggregationInput[]
    by: NotificationJobScalarFieldEnum[] | NotificationJobScalarFieldEnum
    having?: NotificationJobScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationJobCountAggregateInputType | true
    _avg?: NotificationJobAvgAggregateInputType
    _sum?: NotificationJobSumAggregateInputType
    _min?: NotificationJobMinAggregateInputType
    _max?: NotificationJobMaxAggregateInputType
  }

  export type NotificationJobGroupByOutputType = {
    id: string
    type: $Enums.NotificationType
    status: $Enums.JobStatus
    schoolId: string | null
    userId: string | null
    userEmail: string | null
    userPhone: string | null
    subject: string | null
    title: string
    body: string
    data: JsonValue | null
    channels: string[]
    scheduledFor: Date | null
    processedAt: Date | null
    attempts: number
    maxAttempts: number
    lastError: string | null
    nextRetryAt: Date | null
    priority: number
    createdAt: Date
    updatedAt: Date
    _count: NotificationJobCountAggregateOutputType | null
    _avg: NotificationJobAvgAggregateOutputType | null
    _sum: NotificationJobSumAggregateOutputType | null
    _min: NotificationJobMinAggregateOutputType | null
    _max: NotificationJobMaxAggregateOutputType | null
  }

  type GetNotificationJobGroupByPayload<T extends NotificationJobGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationJobGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationJobGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationJobGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationJobGroupByOutputType[P]>
        }
      >
    >


  export type NotificationJobSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    status?: boolean
    schoolId?: boolean
    userId?: boolean
    userEmail?: boolean
    userPhone?: boolean
    subject?: boolean
    title?: boolean
    body?: boolean
    data?: boolean
    channels?: boolean
    scheduledFor?: boolean
    processedAt?: boolean
    attempts?: boolean
    maxAttempts?: boolean
    lastError?: boolean
    nextRetryAt?: boolean
    priority?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["notificationJob"]>

  export type NotificationJobSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    status?: boolean
    schoolId?: boolean
    userId?: boolean
    userEmail?: boolean
    userPhone?: boolean
    subject?: boolean
    title?: boolean
    body?: boolean
    data?: boolean
    channels?: boolean
    scheduledFor?: boolean
    processedAt?: boolean
    attempts?: boolean
    maxAttempts?: boolean
    lastError?: boolean
    nextRetryAt?: boolean
    priority?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["notificationJob"]>

  export type NotificationJobSelectScalar = {
    id?: boolean
    type?: boolean
    status?: boolean
    schoolId?: boolean
    userId?: boolean
    userEmail?: boolean
    userPhone?: boolean
    subject?: boolean
    title?: boolean
    body?: boolean
    data?: boolean
    channels?: boolean
    scheduledFor?: boolean
    processedAt?: boolean
    attempts?: boolean
    maxAttempts?: boolean
    lastError?: boolean
    nextRetryAt?: boolean
    priority?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $NotificationJobPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NotificationJob"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      type: $Enums.NotificationType
      status: $Enums.JobStatus
      schoolId: string | null
      userId: string | null
      userEmail: string | null
      userPhone: string | null
      subject: string | null
      title: string
      body: string
      data: Prisma.JsonValue | null
      channels: string[]
      scheduledFor: Date | null
      processedAt: Date | null
      attempts: number
      maxAttempts: number
      lastError: string | null
      nextRetryAt: Date | null
      priority: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["notificationJob"]>
    composites: {}
  }

  type NotificationJobGetPayload<S extends boolean | null | undefined | NotificationJobDefaultArgs> = $Result.GetResult<Prisma.$NotificationJobPayload, S>

  type NotificationJobCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<NotificationJobFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: NotificationJobCountAggregateInputType | true
    }

  export interface NotificationJobDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NotificationJob'], meta: { name: 'NotificationJob' } }
    /**
     * Find zero or one NotificationJob that matches the filter.
     * @param {NotificationJobFindUniqueArgs} args - Arguments to find a NotificationJob
     * @example
     * // Get one NotificationJob
     * const notificationJob = await prisma.notificationJob.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationJobFindUniqueArgs>(args: SelectSubset<T, NotificationJobFindUniqueArgs<ExtArgs>>): Prisma__NotificationJobClient<$Result.GetResult<Prisma.$NotificationJobPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one NotificationJob that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {NotificationJobFindUniqueOrThrowArgs} args - Arguments to find a NotificationJob
     * @example
     * // Get one NotificationJob
     * const notificationJob = await prisma.notificationJob.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationJobFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationJobFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationJobClient<$Result.GetResult<Prisma.$NotificationJobPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first NotificationJob that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationJobFindFirstArgs} args - Arguments to find a NotificationJob
     * @example
     * // Get one NotificationJob
     * const notificationJob = await prisma.notificationJob.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationJobFindFirstArgs>(args?: SelectSubset<T, NotificationJobFindFirstArgs<ExtArgs>>): Prisma__NotificationJobClient<$Result.GetResult<Prisma.$NotificationJobPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first NotificationJob that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationJobFindFirstOrThrowArgs} args - Arguments to find a NotificationJob
     * @example
     * // Get one NotificationJob
     * const notificationJob = await prisma.notificationJob.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationJobFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationJobFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationJobClient<$Result.GetResult<Prisma.$NotificationJobPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more NotificationJobs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationJobFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NotificationJobs
     * const notificationJobs = await prisma.notificationJob.findMany()
     * 
     * // Get first 10 NotificationJobs
     * const notificationJobs = await prisma.notificationJob.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationJobWithIdOnly = await prisma.notificationJob.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificationJobFindManyArgs>(args?: SelectSubset<T, NotificationJobFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationJobPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a NotificationJob.
     * @param {NotificationJobCreateArgs} args - Arguments to create a NotificationJob.
     * @example
     * // Create one NotificationJob
     * const NotificationJob = await prisma.notificationJob.create({
     *   data: {
     *     // ... data to create a NotificationJob
     *   }
     * })
     * 
     */
    create<T extends NotificationJobCreateArgs>(args: SelectSubset<T, NotificationJobCreateArgs<ExtArgs>>): Prisma__NotificationJobClient<$Result.GetResult<Prisma.$NotificationJobPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many NotificationJobs.
     * @param {NotificationJobCreateManyArgs} args - Arguments to create many NotificationJobs.
     * @example
     * // Create many NotificationJobs
     * const notificationJob = await prisma.notificationJob.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationJobCreateManyArgs>(args?: SelectSubset<T, NotificationJobCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many NotificationJobs and returns the data saved in the database.
     * @param {NotificationJobCreateManyAndReturnArgs} args - Arguments to create many NotificationJobs.
     * @example
     * // Create many NotificationJobs
     * const notificationJob = await prisma.notificationJob.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many NotificationJobs and only return the `id`
     * const notificationJobWithIdOnly = await prisma.notificationJob.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NotificationJobCreateManyAndReturnArgs>(args?: SelectSubset<T, NotificationJobCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationJobPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a NotificationJob.
     * @param {NotificationJobDeleteArgs} args - Arguments to delete one NotificationJob.
     * @example
     * // Delete one NotificationJob
     * const NotificationJob = await prisma.notificationJob.delete({
     *   where: {
     *     // ... filter to delete one NotificationJob
     *   }
     * })
     * 
     */
    delete<T extends NotificationJobDeleteArgs>(args: SelectSubset<T, NotificationJobDeleteArgs<ExtArgs>>): Prisma__NotificationJobClient<$Result.GetResult<Prisma.$NotificationJobPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one NotificationJob.
     * @param {NotificationJobUpdateArgs} args - Arguments to update one NotificationJob.
     * @example
     * // Update one NotificationJob
     * const notificationJob = await prisma.notificationJob.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationJobUpdateArgs>(args: SelectSubset<T, NotificationJobUpdateArgs<ExtArgs>>): Prisma__NotificationJobClient<$Result.GetResult<Prisma.$NotificationJobPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more NotificationJobs.
     * @param {NotificationJobDeleteManyArgs} args - Arguments to filter NotificationJobs to delete.
     * @example
     * // Delete a few NotificationJobs
     * const { count } = await prisma.notificationJob.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationJobDeleteManyArgs>(args?: SelectSubset<T, NotificationJobDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NotificationJobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationJobUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NotificationJobs
     * const notificationJob = await prisma.notificationJob.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationJobUpdateManyArgs>(args: SelectSubset<T, NotificationJobUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one NotificationJob.
     * @param {NotificationJobUpsertArgs} args - Arguments to update or create a NotificationJob.
     * @example
     * // Update or create a NotificationJob
     * const notificationJob = await prisma.notificationJob.upsert({
     *   create: {
     *     // ... data to create a NotificationJob
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NotificationJob we want to update
     *   }
     * })
     */
    upsert<T extends NotificationJobUpsertArgs>(args: SelectSubset<T, NotificationJobUpsertArgs<ExtArgs>>): Prisma__NotificationJobClient<$Result.GetResult<Prisma.$NotificationJobPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of NotificationJobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationJobCountArgs} args - Arguments to filter NotificationJobs to count.
     * @example
     * // Count the number of NotificationJobs
     * const count = await prisma.notificationJob.count({
     *   where: {
     *     // ... the filter for the NotificationJobs we want to count
     *   }
     * })
    **/
    count<T extends NotificationJobCountArgs>(
      args?: Subset<T, NotificationJobCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationJobCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NotificationJob.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationJobAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NotificationJobAggregateArgs>(args: Subset<T, NotificationJobAggregateArgs>): Prisma.PrismaPromise<GetNotificationJobAggregateType<T>>

    /**
     * Group by NotificationJob.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationJobGroupByArgs} args - Group by arguments.
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
      T extends NotificationJobGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationJobGroupByArgs['orderBy'] }
        : { orderBy?: NotificationJobGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NotificationJobGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationJobGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NotificationJob model
   */
  readonly fields: NotificationJobFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NotificationJob.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationJobClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the NotificationJob model
   */ 
  interface NotificationJobFieldRefs {
    readonly id: FieldRef<"NotificationJob", 'String'>
    readonly type: FieldRef<"NotificationJob", 'NotificationType'>
    readonly status: FieldRef<"NotificationJob", 'JobStatus'>
    readonly schoolId: FieldRef<"NotificationJob", 'String'>
    readonly userId: FieldRef<"NotificationJob", 'String'>
    readonly userEmail: FieldRef<"NotificationJob", 'String'>
    readonly userPhone: FieldRef<"NotificationJob", 'String'>
    readonly subject: FieldRef<"NotificationJob", 'String'>
    readonly title: FieldRef<"NotificationJob", 'String'>
    readonly body: FieldRef<"NotificationJob", 'String'>
    readonly data: FieldRef<"NotificationJob", 'Json'>
    readonly channels: FieldRef<"NotificationJob", 'String[]'>
    readonly scheduledFor: FieldRef<"NotificationJob", 'DateTime'>
    readonly processedAt: FieldRef<"NotificationJob", 'DateTime'>
    readonly attempts: FieldRef<"NotificationJob", 'Int'>
    readonly maxAttempts: FieldRef<"NotificationJob", 'Int'>
    readonly lastError: FieldRef<"NotificationJob", 'String'>
    readonly nextRetryAt: FieldRef<"NotificationJob", 'DateTime'>
    readonly priority: FieldRef<"NotificationJob", 'Int'>
    readonly createdAt: FieldRef<"NotificationJob", 'DateTime'>
    readonly updatedAt: FieldRef<"NotificationJob", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * NotificationJob findUnique
   */
  export type NotificationJobFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationJob
     */
    select?: NotificationJobSelect<ExtArgs> | null
    /**
     * Filter, which NotificationJob to fetch.
     */
    where: NotificationJobWhereUniqueInput
  }

  /**
   * NotificationJob findUniqueOrThrow
   */
  export type NotificationJobFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationJob
     */
    select?: NotificationJobSelect<ExtArgs> | null
    /**
     * Filter, which NotificationJob to fetch.
     */
    where: NotificationJobWhereUniqueInput
  }

  /**
   * NotificationJob findFirst
   */
  export type NotificationJobFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationJob
     */
    select?: NotificationJobSelect<ExtArgs> | null
    /**
     * Filter, which NotificationJob to fetch.
     */
    where?: NotificationJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotificationJobs to fetch.
     */
    orderBy?: NotificationJobOrderByWithRelationInput | NotificationJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NotificationJobs.
     */
    cursor?: NotificationJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotificationJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotificationJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NotificationJobs.
     */
    distinct?: NotificationJobScalarFieldEnum | NotificationJobScalarFieldEnum[]
  }

  /**
   * NotificationJob findFirstOrThrow
   */
  export type NotificationJobFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationJob
     */
    select?: NotificationJobSelect<ExtArgs> | null
    /**
     * Filter, which NotificationJob to fetch.
     */
    where?: NotificationJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotificationJobs to fetch.
     */
    orderBy?: NotificationJobOrderByWithRelationInput | NotificationJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NotificationJobs.
     */
    cursor?: NotificationJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotificationJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotificationJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NotificationJobs.
     */
    distinct?: NotificationJobScalarFieldEnum | NotificationJobScalarFieldEnum[]
  }

  /**
   * NotificationJob findMany
   */
  export type NotificationJobFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationJob
     */
    select?: NotificationJobSelect<ExtArgs> | null
    /**
     * Filter, which NotificationJobs to fetch.
     */
    where?: NotificationJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotificationJobs to fetch.
     */
    orderBy?: NotificationJobOrderByWithRelationInput | NotificationJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NotificationJobs.
     */
    cursor?: NotificationJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotificationJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotificationJobs.
     */
    skip?: number
    distinct?: NotificationJobScalarFieldEnum | NotificationJobScalarFieldEnum[]
  }

  /**
   * NotificationJob create
   */
  export type NotificationJobCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationJob
     */
    select?: NotificationJobSelect<ExtArgs> | null
    /**
     * The data needed to create a NotificationJob.
     */
    data: XOR<NotificationJobCreateInput, NotificationJobUncheckedCreateInput>
  }

  /**
   * NotificationJob createMany
   */
  export type NotificationJobCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NotificationJobs.
     */
    data: NotificationJobCreateManyInput | NotificationJobCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NotificationJob createManyAndReturn
   */
  export type NotificationJobCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationJob
     */
    select?: NotificationJobSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many NotificationJobs.
     */
    data: NotificationJobCreateManyInput | NotificationJobCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NotificationJob update
   */
  export type NotificationJobUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationJob
     */
    select?: NotificationJobSelect<ExtArgs> | null
    /**
     * The data needed to update a NotificationJob.
     */
    data: XOR<NotificationJobUpdateInput, NotificationJobUncheckedUpdateInput>
    /**
     * Choose, which NotificationJob to update.
     */
    where: NotificationJobWhereUniqueInput
  }

  /**
   * NotificationJob updateMany
   */
  export type NotificationJobUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NotificationJobs.
     */
    data: XOR<NotificationJobUpdateManyMutationInput, NotificationJobUncheckedUpdateManyInput>
    /**
     * Filter which NotificationJobs to update
     */
    where?: NotificationJobWhereInput
  }

  /**
   * NotificationJob upsert
   */
  export type NotificationJobUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationJob
     */
    select?: NotificationJobSelect<ExtArgs> | null
    /**
     * The filter to search for the NotificationJob to update in case it exists.
     */
    where: NotificationJobWhereUniqueInput
    /**
     * In case the NotificationJob found by the `where` argument doesn't exist, create a new NotificationJob with this data.
     */
    create: XOR<NotificationJobCreateInput, NotificationJobUncheckedCreateInput>
    /**
     * In case the NotificationJob was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationJobUpdateInput, NotificationJobUncheckedUpdateInput>
  }

  /**
   * NotificationJob delete
   */
  export type NotificationJobDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationJob
     */
    select?: NotificationJobSelect<ExtArgs> | null
    /**
     * Filter which NotificationJob to delete.
     */
    where: NotificationJobWhereUniqueInput
  }

  /**
   * NotificationJob deleteMany
   */
  export type NotificationJobDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NotificationJobs to delete
     */
    where?: NotificationJobWhereInput
  }

  /**
   * NotificationJob without action
   */
  export type NotificationJobDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationJob
     */
    select?: NotificationJobSelect<ExtArgs> | null
  }


  /**
   * Model NotificationTemplate
   */

  export type AggregateNotificationTemplate = {
    _count: NotificationTemplateCountAggregateOutputType | null
    _min: NotificationTemplateMinAggregateOutputType | null
    _max: NotificationTemplateMaxAggregateOutputType | null
  }

  export type NotificationTemplateMinAggregateOutputType = {
    id: string | null
    name: string | null
    type: string | null
    subject: string | null
    title: string | null
    body: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NotificationTemplateMaxAggregateOutputType = {
    id: string | null
    name: string | null
    type: string | null
    subject: string | null
    title: string | null
    body: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NotificationTemplateCountAggregateOutputType = {
    id: number
    name: number
    type: number
    subject: number
    title: number
    body: number
    variables: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type NotificationTemplateMinAggregateInputType = {
    id?: true
    name?: true
    type?: true
    subject?: true
    title?: true
    body?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NotificationTemplateMaxAggregateInputType = {
    id?: true
    name?: true
    type?: true
    subject?: true
    title?: true
    body?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NotificationTemplateCountAggregateInputType = {
    id?: true
    name?: true
    type?: true
    subject?: true
    title?: true
    body?: true
    variables?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type NotificationTemplateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NotificationTemplate to aggregate.
     */
    where?: NotificationTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotificationTemplates to fetch.
     */
    orderBy?: NotificationTemplateOrderByWithRelationInput | NotificationTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotificationTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotificationTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NotificationTemplates
    **/
    _count?: true | NotificationTemplateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationTemplateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationTemplateMaxAggregateInputType
  }

  export type GetNotificationTemplateAggregateType<T extends NotificationTemplateAggregateArgs> = {
        [P in keyof T & keyof AggregateNotificationTemplate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotificationTemplate[P]>
      : GetScalarType<T[P], AggregateNotificationTemplate[P]>
  }




  export type NotificationTemplateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationTemplateWhereInput
    orderBy?: NotificationTemplateOrderByWithAggregationInput | NotificationTemplateOrderByWithAggregationInput[]
    by: NotificationTemplateScalarFieldEnum[] | NotificationTemplateScalarFieldEnum
    having?: NotificationTemplateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationTemplateCountAggregateInputType | true
    _min?: NotificationTemplateMinAggregateInputType
    _max?: NotificationTemplateMaxAggregateInputType
  }

  export type NotificationTemplateGroupByOutputType = {
    id: string
    name: string
    type: string
    subject: string | null
    title: string | null
    body: string
    variables: string[]
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: NotificationTemplateCountAggregateOutputType | null
    _min: NotificationTemplateMinAggregateOutputType | null
    _max: NotificationTemplateMaxAggregateOutputType | null
  }

  type GetNotificationTemplateGroupByPayload<T extends NotificationTemplateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationTemplateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationTemplateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationTemplateGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationTemplateGroupByOutputType[P]>
        }
      >
    >


  export type NotificationTemplateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    subject?: boolean
    title?: boolean
    body?: boolean
    variables?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["notificationTemplate"]>

  export type NotificationTemplateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    subject?: boolean
    title?: boolean
    body?: boolean
    variables?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["notificationTemplate"]>

  export type NotificationTemplateSelectScalar = {
    id?: boolean
    name?: boolean
    type?: boolean
    subject?: boolean
    title?: boolean
    body?: boolean
    variables?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $NotificationTemplatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NotificationTemplate"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      type: string
      subject: string | null
      title: string | null
      body: string
      variables: string[]
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["notificationTemplate"]>
    composites: {}
  }

  type NotificationTemplateGetPayload<S extends boolean | null | undefined | NotificationTemplateDefaultArgs> = $Result.GetResult<Prisma.$NotificationTemplatePayload, S>

  type NotificationTemplateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<NotificationTemplateFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: NotificationTemplateCountAggregateInputType | true
    }

  export interface NotificationTemplateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NotificationTemplate'], meta: { name: 'NotificationTemplate' } }
    /**
     * Find zero or one NotificationTemplate that matches the filter.
     * @param {NotificationTemplateFindUniqueArgs} args - Arguments to find a NotificationTemplate
     * @example
     * // Get one NotificationTemplate
     * const notificationTemplate = await prisma.notificationTemplate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationTemplateFindUniqueArgs>(args: SelectSubset<T, NotificationTemplateFindUniqueArgs<ExtArgs>>): Prisma__NotificationTemplateClient<$Result.GetResult<Prisma.$NotificationTemplatePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one NotificationTemplate that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {NotificationTemplateFindUniqueOrThrowArgs} args - Arguments to find a NotificationTemplate
     * @example
     * // Get one NotificationTemplate
     * const notificationTemplate = await prisma.notificationTemplate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationTemplateFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationTemplateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationTemplateClient<$Result.GetResult<Prisma.$NotificationTemplatePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first NotificationTemplate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationTemplateFindFirstArgs} args - Arguments to find a NotificationTemplate
     * @example
     * // Get one NotificationTemplate
     * const notificationTemplate = await prisma.notificationTemplate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationTemplateFindFirstArgs>(args?: SelectSubset<T, NotificationTemplateFindFirstArgs<ExtArgs>>): Prisma__NotificationTemplateClient<$Result.GetResult<Prisma.$NotificationTemplatePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first NotificationTemplate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationTemplateFindFirstOrThrowArgs} args - Arguments to find a NotificationTemplate
     * @example
     * // Get one NotificationTemplate
     * const notificationTemplate = await prisma.notificationTemplate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationTemplateFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationTemplateFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationTemplateClient<$Result.GetResult<Prisma.$NotificationTemplatePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more NotificationTemplates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationTemplateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NotificationTemplates
     * const notificationTemplates = await prisma.notificationTemplate.findMany()
     * 
     * // Get first 10 NotificationTemplates
     * const notificationTemplates = await prisma.notificationTemplate.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationTemplateWithIdOnly = await prisma.notificationTemplate.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificationTemplateFindManyArgs>(args?: SelectSubset<T, NotificationTemplateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationTemplatePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a NotificationTemplate.
     * @param {NotificationTemplateCreateArgs} args - Arguments to create a NotificationTemplate.
     * @example
     * // Create one NotificationTemplate
     * const NotificationTemplate = await prisma.notificationTemplate.create({
     *   data: {
     *     // ... data to create a NotificationTemplate
     *   }
     * })
     * 
     */
    create<T extends NotificationTemplateCreateArgs>(args: SelectSubset<T, NotificationTemplateCreateArgs<ExtArgs>>): Prisma__NotificationTemplateClient<$Result.GetResult<Prisma.$NotificationTemplatePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many NotificationTemplates.
     * @param {NotificationTemplateCreateManyArgs} args - Arguments to create many NotificationTemplates.
     * @example
     * // Create many NotificationTemplates
     * const notificationTemplate = await prisma.notificationTemplate.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationTemplateCreateManyArgs>(args?: SelectSubset<T, NotificationTemplateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many NotificationTemplates and returns the data saved in the database.
     * @param {NotificationTemplateCreateManyAndReturnArgs} args - Arguments to create many NotificationTemplates.
     * @example
     * // Create many NotificationTemplates
     * const notificationTemplate = await prisma.notificationTemplate.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many NotificationTemplates and only return the `id`
     * const notificationTemplateWithIdOnly = await prisma.notificationTemplate.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NotificationTemplateCreateManyAndReturnArgs>(args?: SelectSubset<T, NotificationTemplateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationTemplatePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a NotificationTemplate.
     * @param {NotificationTemplateDeleteArgs} args - Arguments to delete one NotificationTemplate.
     * @example
     * // Delete one NotificationTemplate
     * const NotificationTemplate = await prisma.notificationTemplate.delete({
     *   where: {
     *     // ... filter to delete one NotificationTemplate
     *   }
     * })
     * 
     */
    delete<T extends NotificationTemplateDeleteArgs>(args: SelectSubset<T, NotificationTemplateDeleteArgs<ExtArgs>>): Prisma__NotificationTemplateClient<$Result.GetResult<Prisma.$NotificationTemplatePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one NotificationTemplate.
     * @param {NotificationTemplateUpdateArgs} args - Arguments to update one NotificationTemplate.
     * @example
     * // Update one NotificationTemplate
     * const notificationTemplate = await prisma.notificationTemplate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationTemplateUpdateArgs>(args: SelectSubset<T, NotificationTemplateUpdateArgs<ExtArgs>>): Prisma__NotificationTemplateClient<$Result.GetResult<Prisma.$NotificationTemplatePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more NotificationTemplates.
     * @param {NotificationTemplateDeleteManyArgs} args - Arguments to filter NotificationTemplates to delete.
     * @example
     * // Delete a few NotificationTemplates
     * const { count } = await prisma.notificationTemplate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationTemplateDeleteManyArgs>(args?: SelectSubset<T, NotificationTemplateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NotificationTemplates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationTemplateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NotificationTemplates
     * const notificationTemplate = await prisma.notificationTemplate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationTemplateUpdateManyArgs>(args: SelectSubset<T, NotificationTemplateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one NotificationTemplate.
     * @param {NotificationTemplateUpsertArgs} args - Arguments to update or create a NotificationTemplate.
     * @example
     * // Update or create a NotificationTemplate
     * const notificationTemplate = await prisma.notificationTemplate.upsert({
     *   create: {
     *     // ... data to create a NotificationTemplate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NotificationTemplate we want to update
     *   }
     * })
     */
    upsert<T extends NotificationTemplateUpsertArgs>(args: SelectSubset<T, NotificationTemplateUpsertArgs<ExtArgs>>): Prisma__NotificationTemplateClient<$Result.GetResult<Prisma.$NotificationTemplatePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of NotificationTemplates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationTemplateCountArgs} args - Arguments to filter NotificationTemplates to count.
     * @example
     * // Count the number of NotificationTemplates
     * const count = await prisma.notificationTemplate.count({
     *   where: {
     *     // ... the filter for the NotificationTemplates we want to count
     *   }
     * })
    **/
    count<T extends NotificationTemplateCountArgs>(
      args?: Subset<T, NotificationTemplateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationTemplateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NotificationTemplate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationTemplateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NotificationTemplateAggregateArgs>(args: Subset<T, NotificationTemplateAggregateArgs>): Prisma.PrismaPromise<GetNotificationTemplateAggregateType<T>>

    /**
     * Group by NotificationTemplate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationTemplateGroupByArgs} args - Group by arguments.
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
      T extends NotificationTemplateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationTemplateGroupByArgs['orderBy'] }
        : { orderBy?: NotificationTemplateGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NotificationTemplateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationTemplateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NotificationTemplate model
   */
  readonly fields: NotificationTemplateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NotificationTemplate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationTemplateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the NotificationTemplate model
   */ 
  interface NotificationTemplateFieldRefs {
    readonly id: FieldRef<"NotificationTemplate", 'String'>
    readonly name: FieldRef<"NotificationTemplate", 'String'>
    readonly type: FieldRef<"NotificationTemplate", 'String'>
    readonly subject: FieldRef<"NotificationTemplate", 'String'>
    readonly title: FieldRef<"NotificationTemplate", 'String'>
    readonly body: FieldRef<"NotificationTemplate", 'String'>
    readonly variables: FieldRef<"NotificationTemplate", 'String[]'>
    readonly isActive: FieldRef<"NotificationTemplate", 'Boolean'>
    readonly createdAt: FieldRef<"NotificationTemplate", 'DateTime'>
    readonly updatedAt: FieldRef<"NotificationTemplate", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * NotificationTemplate findUnique
   */
  export type NotificationTemplateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationTemplate
     */
    select?: NotificationTemplateSelect<ExtArgs> | null
    /**
     * Filter, which NotificationTemplate to fetch.
     */
    where: NotificationTemplateWhereUniqueInput
  }

  /**
   * NotificationTemplate findUniqueOrThrow
   */
  export type NotificationTemplateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationTemplate
     */
    select?: NotificationTemplateSelect<ExtArgs> | null
    /**
     * Filter, which NotificationTemplate to fetch.
     */
    where: NotificationTemplateWhereUniqueInput
  }

  /**
   * NotificationTemplate findFirst
   */
  export type NotificationTemplateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationTemplate
     */
    select?: NotificationTemplateSelect<ExtArgs> | null
    /**
     * Filter, which NotificationTemplate to fetch.
     */
    where?: NotificationTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotificationTemplates to fetch.
     */
    orderBy?: NotificationTemplateOrderByWithRelationInput | NotificationTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NotificationTemplates.
     */
    cursor?: NotificationTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotificationTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotificationTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NotificationTemplates.
     */
    distinct?: NotificationTemplateScalarFieldEnum | NotificationTemplateScalarFieldEnum[]
  }

  /**
   * NotificationTemplate findFirstOrThrow
   */
  export type NotificationTemplateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationTemplate
     */
    select?: NotificationTemplateSelect<ExtArgs> | null
    /**
     * Filter, which NotificationTemplate to fetch.
     */
    where?: NotificationTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotificationTemplates to fetch.
     */
    orderBy?: NotificationTemplateOrderByWithRelationInput | NotificationTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NotificationTemplates.
     */
    cursor?: NotificationTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotificationTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotificationTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NotificationTemplates.
     */
    distinct?: NotificationTemplateScalarFieldEnum | NotificationTemplateScalarFieldEnum[]
  }

  /**
   * NotificationTemplate findMany
   */
  export type NotificationTemplateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationTemplate
     */
    select?: NotificationTemplateSelect<ExtArgs> | null
    /**
     * Filter, which NotificationTemplates to fetch.
     */
    where?: NotificationTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotificationTemplates to fetch.
     */
    orderBy?: NotificationTemplateOrderByWithRelationInput | NotificationTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NotificationTemplates.
     */
    cursor?: NotificationTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotificationTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotificationTemplates.
     */
    skip?: number
    distinct?: NotificationTemplateScalarFieldEnum | NotificationTemplateScalarFieldEnum[]
  }

  /**
   * NotificationTemplate create
   */
  export type NotificationTemplateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationTemplate
     */
    select?: NotificationTemplateSelect<ExtArgs> | null
    /**
     * The data needed to create a NotificationTemplate.
     */
    data: XOR<NotificationTemplateCreateInput, NotificationTemplateUncheckedCreateInput>
  }

  /**
   * NotificationTemplate createMany
   */
  export type NotificationTemplateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NotificationTemplates.
     */
    data: NotificationTemplateCreateManyInput | NotificationTemplateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NotificationTemplate createManyAndReturn
   */
  export type NotificationTemplateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationTemplate
     */
    select?: NotificationTemplateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many NotificationTemplates.
     */
    data: NotificationTemplateCreateManyInput | NotificationTemplateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NotificationTemplate update
   */
  export type NotificationTemplateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationTemplate
     */
    select?: NotificationTemplateSelect<ExtArgs> | null
    /**
     * The data needed to update a NotificationTemplate.
     */
    data: XOR<NotificationTemplateUpdateInput, NotificationTemplateUncheckedUpdateInput>
    /**
     * Choose, which NotificationTemplate to update.
     */
    where: NotificationTemplateWhereUniqueInput
  }

  /**
   * NotificationTemplate updateMany
   */
  export type NotificationTemplateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NotificationTemplates.
     */
    data: XOR<NotificationTemplateUpdateManyMutationInput, NotificationTemplateUncheckedUpdateManyInput>
    /**
     * Filter which NotificationTemplates to update
     */
    where?: NotificationTemplateWhereInput
  }

  /**
   * NotificationTemplate upsert
   */
  export type NotificationTemplateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationTemplate
     */
    select?: NotificationTemplateSelect<ExtArgs> | null
    /**
     * The filter to search for the NotificationTemplate to update in case it exists.
     */
    where: NotificationTemplateWhereUniqueInput
    /**
     * In case the NotificationTemplate found by the `where` argument doesn't exist, create a new NotificationTemplate with this data.
     */
    create: XOR<NotificationTemplateCreateInput, NotificationTemplateUncheckedCreateInput>
    /**
     * In case the NotificationTemplate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationTemplateUpdateInput, NotificationTemplateUncheckedUpdateInput>
  }

  /**
   * NotificationTemplate delete
   */
  export type NotificationTemplateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationTemplate
     */
    select?: NotificationTemplateSelect<ExtArgs> | null
    /**
     * Filter which NotificationTemplate to delete.
     */
    where: NotificationTemplateWhereUniqueInput
  }

  /**
   * NotificationTemplate deleteMany
   */
  export type NotificationTemplateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NotificationTemplates to delete
     */
    where?: NotificationTemplateWhereInput
  }

  /**
   * NotificationTemplate without action
   */
  export type NotificationTemplateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationTemplate
     */
    select?: NotificationTemplateSelect<ExtArgs> | null
  }


  /**
   * Model EmailLog
   */

  export type AggregateEmailLog = {
    _count: EmailLogCountAggregateOutputType | null
    _min: EmailLogMinAggregateOutputType | null
    _max: EmailLogMaxAggregateOutputType | null
  }

  export type EmailLogMinAggregateOutputType = {
    id: string | null
    jobId: string | null
    to: string | null
    from: string | null
    subject: string | null
    body: string | null
    status: string | null
    provider: string | null
    sentAt: Date | null
    error: string | null
    createdAt: Date | null
  }

  export type EmailLogMaxAggregateOutputType = {
    id: string | null
    jobId: string | null
    to: string | null
    from: string | null
    subject: string | null
    body: string | null
    status: string | null
    provider: string | null
    sentAt: Date | null
    error: string | null
    createdAt: Date | null
  }

  export type EmailLogCountAggregateOutputType = {
    id: number
    jobId: number
    to: number
    from: number
    subject: number
    body: number
    status: number
    provider: number
    sentAt: number
    error: number
    createdAt: number
    _all: number
  }


  export type EmailLogMinAggregateInputType = {
    id?: true
    jobId?: true
    to?: true
    from?: true
    subject?: true
    body?: true
    status?: true
    provider?: true
    sentAt?: true
    error?: true
    createdAt?: true
  }

  export type EmailLogMaxAggregateInputType = {
    id?: true
    jobId?: true
    to?: true
    from?: true
    subject?: true
    body?: true
    status?: true
    provider?: true
    sentAt?: true
    error?: true
    createdAt?: true
  }

  export type EmailLogCountAggregateInputType = {
    id?: true
    jobId?: true
    to?: true
    from?: true
    subject?: true
    body?: true
    status?: true
    provider?: true
    sentAt?: true
    error?: true
    createdAt?: true
    _all?: true
  }

  export type EmailLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmailLog to aggregate.
     */
    where?: EmailLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailLogs to fetch.
     */
    orderBy?: EmailLogOrderByWithRelationInput | EmailLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmailLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EmailLogs
    **/
    _count?: true | EmailLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmailLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmailLogMaxAggregateInputType
  }

  export type GetEmailLogAggregateType<T extends EmailLogAggregateArgs> = {
        [P in keyof T & keyof AggregateEmailLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmailLog[P]>
      : GetScalarType<T[P], AggregateEmailLog[P]>
  }




  export type EmailLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmailLogWhereInput
    orderBy?: EmailLogOrderByWithAggregationInput | EmailLogOrderByWithAggregationInput[]
    by: EmailLogScalarFieldEnum[] | EmailLogScalarFieldEnum
    having?: EmailLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmailLogCountAggregateInputType | true
    _min?: EmailLogMinAggregateInputType
    _max?: EmailLogMaxAggregateInputType
  }

  export type EmailLogGroupByOutputType = {
    id: string
    jobId: string | null
    to: string
    from: string
    subject: string
    body: string
    status: string
    provider: string | null
    sentAt: Date | null
    error: string | null
    createdAt: Date
    _count: EmailLogCountAggregateOutputType | null
    _min: EmailLogMinAggregateOutputType | null
    _max: EmailLogMaxAggregateOutputType | null
  }

  type GetEmailLogGroupByPayload<T extends EmailLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmailLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmailLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmailLogGroupByOutputType[P]>
            : GetScalarType<T[P], EmailLogGroupByOutputType[P]>
        }
      >
    >


  export type EmailLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jobId?: boolean
    to?: boolean
    from?: boolean
    subject?: boolean
    body?: boolean
    status?: boolean
    provider?: boolean
    sentAt?: boolean
    error?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["emailLog"]>

  export type EmailLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jobId?: boolean
    to?: boolean
    from?: boolean
    subject?: boolean
    body?: boolean
    status?: boolean
    provider?: boolean
    sentAt?: boolean
    error?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["emailLog"]>

  export type EmailLogSelectScalar = {
    id?: boolean
    jobId?: boolean
    to?: boolean
    from?: boolean
    subject?: boolean
    body?: boolean
    status?: boolean
    provider?: boolean
    sentAt?: boolean
    error?: boolean
    createdAt?: boolean
  }


  export type $EmailLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EmailLog"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      jobId: string | null
      to: string
      from: string
      subject: string
      body: string
      status: string
      provider: string | null
      sentAt: Date | null
      error: string | null
      createdAt: Date
    }, ExtArgs["result"]["emailLog"]>
    composites: {}
  }

  type EmailLogGetPayload<S extends boolean | null | undefined | EmailLogDefaultArgs> = $Result.GetResult<Prisma.$EmailLogPayload, S>

  type EmailLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<EmailLogFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: EmailLogCountAggregateInputType | true
    }

  export interface EmailLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EmailLog'], meta: { name: 'EmailLog' } }
    /**
     * Find zero or one EmailLog that matches the filter.
     * @param {EmailLogFindUniqueArgs} args - Arguments to find a EmailLog
     * @example
     * // Get one EmailLog
     * const emailLog = await prisma.emailLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmailLogFindUniqueArgs>(args: SelectSubset<T, EmailLogFindUniqueArgs<ExtArgs>>): Prisma__EmailLogClient<$Result.GetResult<Prisma.$EmailLogPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one EmailLog that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {EmailLogFindUniqueOrThrowArgs} args - Arguments to find a EmailLog
     * @example
     * // Get one EmailLog
     * const emailLog = await prisma.emailLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmailLogFindUniqueOrThrowArgs>(args: SelectSubset<T, EmailLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmailLogClient<$Result.GetResult<Prisma.$EmailLogPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first EmailLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailLogFindFirstArgs} args - Arguments to find a EmailLog
     * @example
     * // Get one EmailLog
     * const emailLog = await prisma.emailLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmailLogFindFirstArgs>(args?: SelectSubset<T, EmailLogFindFirstArgs<ExtArgs>>): Prisma__EmailLogClient<$Result.GetResult<Prisma.$EmailLogPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first EmailLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailLogFindFirstOrThrowArgs} args - Arguments to find a EmailLog
     * @example
     * // Get one EmailLog
     * const emailLog = await prisma.emailLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmailLogFindFirstOrThrowArgs>(args?: SelectSubset<T, EmailLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmailLogClient<$Result.GetResult<Prisma.$EmailLogPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more EmailLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EmailLogs
     * const emailLogs = await prisma.emailLog.findMany()
     * 
     * // Get first 10 EmailLogs
     * const emailLogs = await prisma.emailLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const emailLogWithIdOnly = await prisma.emailLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmailLogFindManyArgs>(args?: SelectSubset<T, EmailLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailLogPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a EmailLog.
     * @param {EmailLogCreateArgs} args - Arguments to create a EmailLog.
     * @example
     * // Create one EmailLog
     * const EmailLog = await prisma.emailLog.create({
     *   data: {
     *     // ... data to create a EmailLog
     *   }
     * })
     * 
     */
    create<T extends EmailLogCreateArgs>(args: SelectSubset<T, EmailLogCreateArgs<ExtArgs>>): Prisma__EmailLogClient<$Result.GetResult<Prisma.$EmailLogPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many EmailLogs.
     * @param {EmailLogCreateManyArgs} args - Arguments to create many EmailLogs.
     * @example
     * // Create many EmailLogs
     * const emailLog = await prisma.emailLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmailLogCreateManyArgs>(args?: SelectSubset<T, EmailLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EmailLogs and returns the data saved in the database.
     * @param {EmailLogCreateManyAndReturnArgs} args - Arguments to create many EmailLogs.
     * @example
     * // Create many EmailLogs
     * const emailLog = await prisma.emailLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EmailLogs and only return the `id`
     * const emailLogWithIdOnly = await prisma.emailLog.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmailLogCreateManyAndReturnArgs>(args?: SelectSubset<T, EmailLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailLogPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a EmailLog.
     * @param {EmailLogDeleteArgs} args - Arguments to delete one EmailLog.
     * @example
     * // Delete one EmailLog
     * const EmailLog = await prisma.emailLog.delete({
     *   where: {
     *     // ... filter to delete one EmailLog
     *   }
     * })
     * 
     */
    delete<T extends EmailLogDeleteArgs>(args: SelectSubset<T, EmailLogDeleteArgs<ExtArgs>>): Prisma__EmailLogClient<$Result.GetResult<Prisma.$EmailLogPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one EmailLog.
     * @param {EmailLogUpdateArgs} args - Arguments to update one EmailLog.
     * @example
     * // Update one EmailLog
     * const emailLog = await prisma.emailLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmailLogUpdateArgs>(args: SelectSubset<T, EmailLogUpdateArgs<ExtArgs>>): Prisma__EmailLogClient<$Result.GetResult<Prisma.$EmailLogPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more EmailLogs.
     * @param {EmailLogDeleteManyArgs} args - Arguments to filter EmailLogs to delete.
     * @example
     * // Delete a few EmailLogs
     * const { count } = await prisma.emailLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmailLogDeleteManyArgs>(args?: SelectSubset<T, EmailLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmailLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EmailLogs
     * const emailLog = await prisma.emailLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmailLogUpdateManyArgs>(args: SelectSubset<T, EmailLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one EmailLog.
     * @param {EmailLogUpsertArgs} args - Arguments to update or create a EmailLog.
     * @example
     * // Update or create a EmailLog
     * const emailLog = await prisma.emailLog.upsert({
     *   create: {
     *     // ... data to create a EmailLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EmailLog we want to update
     *   }
     * })
     */
    upsert<T extends EmailLogUpsertArgs>(args: SelectSubset<T, EmailLogUpsertArgs<ExtArgs>>): Prisma__EmailLogClient<$Result.GetResult<Prisma.$EmailLogPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of EmailLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailLogCountArgs} args - Arguments to filter EmailLogs to count.
     * @example
     * // Count the number of EmailLogs
     * const count = await prisma.emailLog.count({
     *   where: {
     *     // ... the filter for the EmailLogs we want to count
     *   }
     * })
    **/
    count<T extends EmailLogCountArgs>(
      args?: Subset<T, EmailLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmailLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EmailLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EmailLogAggregateArgs>(args: Subset<T, EmailLogAggregateArgs>): Prisma.PrismaPromise<GetEmailLogAggregateType<T>>

    /**
     * Group by EmailLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailLogGroupByArgs} args - Group by arguments.
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
      T extends EmailLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmailLogGroupByArgs['orderBy'] }
        : { orderBy?: EmailLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EmailLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmailLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EmailLog model
   */
  readonly fields: EmailLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EmailLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmailLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the EmailLog model
   */ 
  interface EmailLogFieldRefs {
    readonly id: FieldRef<"EmailLog", 'String'>
    readonly jobId: FieldRef<"EmailLog", 'String'>
    readonly to: FieldRef<"EmailLog", 'String'>
    readonly from: FieldRef<"EmailLog", 'String'>
    readonly subject: FieldRef<"EmailLog", 'String'>
    readonly body: FieldRef<"EmailLog", 'String'>
    readonly status: FieldRef<"EmailLog", 'String'>
    readonly provider: FieldRef<"EmailLog", 'String'>
    readonly sentAt: FieldRef<"EmailLog", 'DateTime'>
    readonly error: FieldRef<"EmailLog", 'String'>
    readonly createdAt: FieldRef<"EmailLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * EmailLog findUnique
   */
  export type EmailLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailLog
     */
    select?: EmailLogSelect<ExtArgs> | null
    /**
     * Filter, which EmailLog to fetch.
     */
    where: EmailLogWhereUniqueInput
  }

  /**
   * EmailLog findUniqueOrThrow
   */
  export type EmailLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailLog
     */
    select?: EmailLogSelect<ExtArgs> | null
    /**
     * Filter, which EmailLog to fetch.
     */
    where: EmailLogWhereUniqueInput
  }

  /**
   * EmailLog findFirst
   */
  export type EmailLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailLog
     */
    select?: EmailLogSelect<ExtArgs> | null
    /**
     * Filter, which EmailLog to fetch.
     */
    where?: EmailLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailLogs to fetch.
     */
    orderBy?: EmailLogOrderByWithRelationInput | EmailLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmailLogs.
     */
    cursor?: EmailLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmailLogs.
     */
    distinct?: EmailLogScalarFieldEnum | EmailLogScalarFieldEnum[]
  }

  /**
   * EmailLog findFirstOrThrow
   */
  export type EmailLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailLog
     */
    select?: EmailLogSelect<ExtArgs> | null
    /**
     * Filter, which EmailLog to fetch.
     */
    where?: EmailLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailLogs to fetch.
     */
    orderBy?: EmailLogOrderByWithRelationInput | EmailLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmailLogs.
     */
    cursor?: EmailLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmailLogs.
     */
    distinct?: EmailLogScalarFieldEnum | EmailLogScalarFieldEnum[]
  }

  /**
   * EmailLog findMany
   */
  export type EmailLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailLog
     */
    select?: EmailLogSelect<ExtArgs> | null
    /**
     * Filter, which EmailLogs to fetch.
     */
    where?: EmailLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailLogs to fetch.
     */
    orderBy?: EmailLogOrderByWithRelationInput | EmailLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EmailLogs.
     */
    cursor?: EmailLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailLogs.
     */
    skip?: number
    distinct?: EmailLogScalarFieldEnum | EmailLogScalarFieldEnum[]
  }

  /**
   * EmailLog create
   */
  export type EmailLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailLog
     */
    select?: EmailLogSelect<ExtArgs> | null
    /**
     * The data needed to create a EmailLog.
     */
    data: XOR<EmailLogCreateInput, EmailLogUncheckedCreateInput>
  }

  /**
   * EmailLog createMany
   */
  export type EmailLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EmailLogs.
     */
    data: EmailLogCreateManyInput | EmailLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EmailLog createManyAndReturn
   */
  export type EmailLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailLog
     */
    select?: EmailLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many EmailLogs.
     */
    data: EmailLogCreateManyInput | EmailLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EmailLog update
   */
  export type EmailLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailLog
     */
    select?: EmailLogSelect<ExtArgs> | null
    /**
     * The data needed to update a EmailLog.
     */
    data: XOR<EmailLogUpdateInput, EmailLogUncheckedUpdateInput>
    /**
     * Choose, which EmailLog to update.
     */
    where: EmailLogWhereUniqueInput
  }

  /**
   * EmailLog updateMany
   */
  export type EmailLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EmailLogs.
     */
    data: XOR<EmailLogUpdateManyMutationInput, EmailLogUncheckedUpdateManyInput>
    /**
     * Filter which EmailLogs to update
     */
    where?: EmailLogWhereInput
  }

  /**
   * EmailLog upsert
   */
  export type EmailLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailLog
     */
    select?: EmailLogSelect<ExtArgs> | null
    /**
     * The filter to search for the EmailLog to update in case it exists.
     */
    where: EmailLogWhereUniqueInput
    /**
     * In case the EmailLog found by the `where` argument doesn't exist, create a new EmailLog with this data.
     */
    create: XOR<EmailLogCreateInput, EmailLogUncheckedCreateInput>
    /**
     * In case the EmailLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmailLogUpdateInput, EmailLogUncheckedUpdateInput>
  }

  /**
   * EmailLog delete
   */
  export type EmailLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailLog
     */
    select?: EmailLogSelect<ExtArgs> | null
    /**
     * Filter which EmailLog to delete.
     */
    where: EmailLogWhereUniqueInput
  }

  /**
   * EmailLog deleteMany
   */
  export type EmailLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmailLogs to delete
     */
    where?: EmailLogWhereInput
  }

  /**
   * EmailLog without action
   */
  export type EmailLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailLog
     */
    select?: EmailLogSelect<ExtArgs> | null
  }


  /**
   * Model PushLog
   */

  export type AggregatePushLog = {
    _count: PushLogCountAggregateOutputType | null
    _min: PushLogMinAggregateOutputType | null
    _max: PushLogMaxAggregateOutputType | null
  }

  export type PushLogMinAggregateOutputType = {
    id: string | null
    jobId: string | null
    userId: string | null
    token: string | null
    title: string | null
    body: string | null
    status: string | null
    sentAt: Date | null
    error: string | null
    createdAt: Date | null
  }

  export type PushLogMaxAggregateOutputType = {
    id: string | null
    jobId: string | null
    userId: string | null
    token: string | null
    title: string | null
    body: string | null
    status: string | null
    sentAt: Date | null
    error: string | null
    createdAt: Date | null
  }

  export type PushLogCountAggregateOutputType = {
    id: number
    jobId: number
    userId: number
    token: number
    title: number
    body: number
    data: number
    status: number
    sentAt: number
    error: number
    createdAt: number
    _all: number
  }


  export type PushLogMinAggregateInputType = {
    id?: true
    jobId?: true
    userId?: true
    token?: true
    title?: true
    body?: true
    status?: true
    sentAt?: true
    error?: true
    createdAt?: true
  }

  export type PushLogMaxAggregateInputType = {
    id?: true
    jobId?: true
    userId?: true
    token?: true
    title?: true
    body?: true
    status?: true
    sentAt?: true
    error?: true
    createdAt?: true
  }

  export type PushLogCountAggregateInputType = {
    id?: true
    jobId?: true
    userId?: true
    token?: true
    title?: true
    body?: true
    data?: true
    status?: true
    sentAt?: true
    error?: true
    createdAt?: true
    _all?: true
  }

  export type PushLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PushLog to aggregate.
     */
    where?: PushLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PushLogs to fetch.
     */
    orderBy?: PushLogOrderByWithRelationInput | PushLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PushLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PushLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PushLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PushLogs
    **/
    _count?: true | PushLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PushLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PushLogMaxAggregateInputType
  }

  export type GetPushLogAggregateType<T extends PushLogAggregateArgs> = {
        [P in keyof T & keyof AggregatePushLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePushLog[P]>
      : GetScalarType<T[P], AggregatePushLog[P]>
  }




  export type PushLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PushLogWhereInput
    orderBy?: PushLogOrderByWithAggregationInput | PushLogOrderByWithAggregationInput[]
    by: PushLogScalarFieldEnum[] | PushLogScalarFieldEnum
    having?: PushLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PushLogCountAggregateInputType | true
    _min?: PushLogMinAggregateInputType
    _max?: PushLogMaxAggregateInputType
  }

  export type PushLogGroupByOutputType = {
    id: string
    jobId: string | null
    userId: string
    token: string | null
    title: string
    body: string
    data: JsonValue | null
    status: string
    sentAt: Date | null
    error: string | null
    createdAt: Date
    _count: PushLogCountAggregateOutputType | null
    _min: PushLogMinAggregateOutputType | null
    _max: PushLogMaxAggregateOutputType | null
  }

  type GetPushLogGroupByPayload<T extends PushLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PushLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PushLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PushLogGroupByOutputType[P]>
            : GetScalarType<T[P], PushLogGroupByOutputType[P]>
        }
      >
    >


  export type PushLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jobId?: boolean
    userId?: boolean
    token?: boolean
    title?: boolean
    body?: boolean
    data?: boolean
    status?: boolean
    sentAt?: boolean
    error?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["pushLog"]>

  export type PushLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jobId?: boolean
    userId?: boolean
    token?: boolean
    title?: boolean
    body?: boolean
    data?: boolean
    status?: boolean
    sentAt?: boolean
    error?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["pushLog"]>

  export type PushLogSelectScalar = {
    id?: boolean
    jobId?: boolean
    userId?: boolean
    token?: boolean
    title?: boolean
    body?: boolean
    data?: boolean
    status?: boolean
    sentAt?: boolean
    error?: boolean
    createdAt?: boolean
  }


  export type $PushLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PushLog"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      jobId: string | null
      userId: string
      token: string | null
      title: string
      body: string
      data: Prisma.JsonValue | null
      status: string
      sentAt: Date | null
      error: string | null
      createdAt: Date
    }, ExtArgs["result"]["pushLog"]>
    composites: {}
  }

  type PushLogGetPayload<S extends boolean | null | undefined | PushLogDefaultArgs> = $Result.GetResult<Prisma.$PushLogPayload, S>

  type PushLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PushLogFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PushLogCountAggregateInputType | true
    }

  export interface PushLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PushLog'], meta: { name: 'PushLog' } }
    /**
     * Find zero or one PushLog that matches the filter.
     * @param {PushLogFindUniqueArgs} args - Arguments to find a PushLog
     * @example
     * // Get one PushLog
     * const pushLog = await prisma.pushLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PushLogFindUniqueArgs>(args: SelectSubset<T, PushLogFindUniqueArgs<ExtArgs>>): Prisma__PushLogClient<$Result.GetResult<Prisma.$PushLogPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one PushLog that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PushLogFindUniqueOrThrowArgs} args - Arguments to find a PushLog
     * @example
     * // Get one PushLog
     * const pushLog = await prisma.pushLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PushLogFindUniqueOrThrowArgs>(args: SelectSubset<T, PushLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PushLogClient<$Result.GetResult<Prisma.$PushLogPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first PushLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PushLogFindFirstArgs} args - Arguments to find a PushLog
     * @example
     * // Get one PushLog
     * const pushLog = await prisma.pushLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PushLogFindFirstArgs>(args?: SelectSubset<T, PushLogFindFirstArgs<ExtArgs>>): Prisma__PushLogClient<$Result.GetResult<Prisma.$PushLogPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first PushLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PushLogFindFirstOrThrowArgs} args - Arguments to find a PushLog
     * @example
     * // Get one PushLog
     * const pushLog = await prisma.pushLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PushLogFindFirstOrThrowArgs>(args?: SelectSubset<T, PushLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__PushLogClient<$Result.GetResult<Prisma.$PushLogPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more PushLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PushLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PushLogs
     * const pushLogs = await prisma.pushLog.findMany()
     * 
     * // Get first 10 PushLogs
     * const pushLogs = await prisma.pushLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pushLogWithIdOnly = await prisma.pushLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PushLogFindManyArgs>(args?: SelectSubset<T, PushLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PushLogPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a PushLog.
     * @param {PushLogCreateArgs} args - Arguments to create a PushLog.
     * @example
     * // Create one PushLog
     * const PushLog = await prisma.pushLog.create({
     *   data: {
     *     // ... data to create a PushLog
     *   }
     * })
     * 
     */
    create<T extends PushLogCreateArgs>(args: SelectSubset<T, PushLogCreateArgs<ExtArgs>>): Prisma__PushLogClient<$Result.GetResult<Prisma.$PushLogPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many PushLogs.
     * @param {PushLogCreateManyArgs} args - Arguments to create many PushLogs.
     * @example
     * // Create many PushLogs
     * const pushLog = await prisma.pushLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PushLogCreateManyArgs>(args?: SelectSubset<T, PushLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PushLogs and returns the data saved in the database.
     * @param {PushLogCreateManyAndReturnArgs} args - Arguments to create many PushLogs.
     * @example
     * // Create many PushLogs
     * const pushLog = await prisma.pushLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PushLogs and only return the `id`
     * const pushLogWithIdOnly = await prisma.pushLog.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PushLogCreateManyAndReturnArgs>(args?: SelectSubset<T, PushLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PushLogPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a PushLog.
     * @param {PushLogDeleteArgs} args - Arguments to delete one PushLog.
     * @example
     * // Delete one PushLog
     * const PushLog = await prisma.pushLog.delete({
     *   where: {
     *     // ... filter to delete one PushLog
     *   }
     * })
     * 
     */
    delete<T extends PushLogDeleteArgs>(args: SelectSubset<T, PushLogDeleteArgs<ExtArgs>>): Prisma__PushLogClient<$Result.GetResult<Prisma.$PushLogPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one PushLog.
     * @param {PushLogUpdateArgs} args - Arguments to update one PushLog.
     * @example
     * // Update one PushLog
     * const pushLog = await prisma.pushLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PushLogUpdateArgs>(args: SelectSubset<T, PushLogUpdateArgs<ExtArgs>>): Prisma__PushLogClient<$Result.GetResult<Prisma.$PushLogPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more PushLogs.
     * @param {PushLogDeleteManyArgs} args - Arguments to filter PushLogs to delete.
     * @example
     * // Delete a few PushLogs
     * const { count } = await prisma.pushLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PushLogDeleteManyArgs>(args?: SelectSubset<T, PushLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PushLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PushLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PushLogs
     * const pushLog = await prisma.pushLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PushLogUpdateManyArgs>(args: SelectSubset<T, PushLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PushLog.
     * @param {PushLogUpsertArgs} args - Arguments to update or create a PushLog.
     * @example
     * // Update or create a PushLog
     * const pushLog = await prisma.pushLog.upsert({
     *   create: {
     *     // ... data to create a PushLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PushLog we want to update
     *   }
     * })
     */
    upsert<T extends PushLogUpsertArgs>(args: SelectSubset<T, PushLogUpsertArgs<ExtArgs>>): Prisma__PushLogClient<$Result.GetResult<Prisma.$PushLogPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of PushLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PushLogCountArgs} args - Arguments to filter PushLogs to count.
     * @example
     * // Count the number of PushLogs
     * const count = await prisma.pushLog.count({
     *   where: {
     *     // ... the filter for the PushLogs we want to count
     *   }
     * })
    **/
    count<T extends PushLogCountArgs>(
      args?: Subset<T, PushLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PushLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PushLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PushLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PushLogAggregateArgs>(args: Subset<T, PushLogAggregateArgs>): Prisma.PrismaPromise<GetPushLogAggregateType<T>>

    /**
     * Group by PushLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PushLogGroupByArgs} args - Group by arguments.
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
      T extends PushLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PushLogGroupByArgs['orderBy'] }
        : { orderBy?: PushLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PushLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPushLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PushLog model
   */
  readonly fields: PushLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PushLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PushLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the PushLog model
   */ 
  interface PushLogFieldRefs {
    readonly id: FieldRef<"PushLog", 'String'>
    readonly jobId: FieldRef<"PushLog", 'String'>
    readonly userId: FieldRef<"PushLog", 'String'>
    readonly token: FieldRef<"PushLog", 'String'>
    readonly title: FieldRef<"PushLog", 'String'>
    readonly body: FieldRef<"PushLog", 'String'>
    readonly data: FieldRef<"PushLog", 'Json'>
    readonly status: FieldRef<"PushLog", 'String'>
    readonly sentAt: FieldRef<"PushLog", 'DateTime'>
    readonly error: FieldRef<"PushLog", 'String'>
    readonly createdAt: FieldRef<"PushLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PushLog findUnique
   */
  export type PushLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PushLog
     */
    select?: PushLogSelect<ExtArgs> | null
    /**
     * Filter, which PushLog to fetch.
     */
    where: PushLogWhereUniqueInput
  }

  /**
   * PushLog findUniqueOrThrow
   */
  export type PushLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PushLog
     */
    select?: PushLogSelect<ExtArgs> | null
    /**
     * Filter, which PushLog to fetch.
     */
    where: PushLogWhereUniqueInput
  }

  /**
   * PushLog findFirst
   */
  export type PushLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PushLog
     */
    select?: PushLogSelect<ExtArgs> | null
    /**
     * Filter, which PushLog to fetch.
     */
    where?: PushLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PushLogs to fetch.
     */
    orderBy?: PushLogOrderByWithRelationInput | PushLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PushLogs.
     */
    cursor?: PushLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PushLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PushLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PushLogs.
     */
    distinct?: PushLogScalarFieldEnum | PushLogScalarFieldEnum[]
  }

  /**
   * PushLog findFirstOrThrow
   */
  export type PushLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PushLog
     */
    select?: PushLogSelect<ExtArgs> | null
    /**
     * Filter, which PushLog to fetch.
     */
    where?: PushLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PushLogs to fetch.
     */
    orderBy?: PushLogOrderByWithRelationInput | PushLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PushLogs.
     */
    cursor?: PushLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PushLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PushLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PushLogs.
     */
    distinct?: PushLogScalarFieldEnum | PushLogScalarFieldEnum[]
  }

  /**
   * PushLog findMany
   */
  export type PushLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PushLog
     */
    select?: PushLogSelect<ExtArgs> | null
    /**
     * Filter, which PushLogs to fetch.
     */
    where?: PushLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PushLogs to fetch.
     */
    orderBy?: PushLogOrderByWithRelationInput | PushLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PushLogs.
     */
    cursor?: PushLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PushLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PushLogs.
     */
    skip?: number
    distinct?: PushLogScalarFieldEnum | PushLogScalarFieldEnum[]
  }

  /**
   * PushLog create
   */
  export type PushLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PushLog
     */
    select?: PushLogSelect<ExtArgs> | null
    /**
     * The data needed to create a PushLog.
     */
    data: XOR<PushLogCreateInput, PushLogUncheckedCreateInput>
  }

  /**
   * PushLog createMany
   */
  export type PushLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PushLogs.
     */
    data: PushLogCreateManyInput | PushLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PushLog createManyAndReturn
   */
  export type PushLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PushLog
     */
    select?: PushLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many PushLogs.
     */
    data: PushLogCreateManyInput | PushLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PushLog update
   */
  export type PushLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PushLog
     */
    select?: PushLogSelect<ExtArgs> | null
    /**
     * The data needed to update a PushLog.
     */
    data: XOR<PushLogUpdateInput, PushLogUncheckedUpdateInput>
    /**
     * Choose, which PushLog to update.
     */
    where: PushLogWhereUniqueInput
  }

  /**
   * PushLog updateMany
   */
  export type PushLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PushLogs.
     */
    data: XOR<PushLogUpdateManyMutationInput, PushLogUncheckedUpdateManyInput>
    /**
     * Filter which PushLogs to update
     */
    where?: PushLogWhereInput
  }

  /**
   * PushLog upsert
   */
  export type PushLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PushLog
     */
    select?: PushLogSelect<ExtArgs> | null
    /**
     * The filter to search for the PushLog to update in case it exists.
     */
    where: PushLogWhereUniqueInput
    /**
     * In case the PushLog found by the `where` argument doesn't exist, create a new PushLog with this data.
     */
    create: XOR<PushLogCreateInput, PushLogUncheckedCreateInput>
    /**
     * In case the PushLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PushLogUpdateInput, PushLogUncheckedUpdateInput>
  }

  /**
   * PushLog delete
   */
  export type PushLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PushLog
     */
    select?: PushLogSelect<ExtArgs> | null
    /**
     * Filter which PushLog to delete.
     */
    where: PushLogWhereUniqueInput
  }

  /**
   * PushLog deleteMany
   */
  export type PushLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PushLogs to delete
     */
    where?: PushLogWhereInput
  }

  /**
   * PushLog without action
   */
  export type PushLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PushLog
     */
    select?: PushLogSelect<ExtArgs> | null
  }


  /**
   * Model SmsLog
   */

  export type AggregateSmsLog = {
    _count: SmsLogCountAggregateOutputType | null
    _min: SmsLogMinAggregateOutputType | null
    _max: SmsLogMaxAggregateOutputType | null
  }

  export type SmsLogMinAggregateOutputType = {
    id: string | null
    jobId: string | null
    to: string | null
    from: string | null
    body: string | null
    status: string | null
    provider: string | null
    sentAt: Date | null
    error: string | null
    createdAt: Date | null
  }

  export type SmsLogMaxAggregateOutputType = {
    id: string | null
    jobId: string | null
    to: string | null
    from: string | null
    body: string | null
    status: string | null
    provider: string | null
    sentAt: Date | null
    error: string | null
    createdAt: Date | null
  }

  export type SmsLogCountAggregateOutputType = {
    id: number
    jobId: number
    to: number
    from: number
    body: number
    status: number
    provider: number
    sentAt: number
    error: number
    createdAt: number
    _all: number
  }


  export type SmsLogMinAggregateInputType = {
    id?: true
    jobId?: true
    to?: true
    from?: true
    body?: true
    status?: true
    provider?: true
    sentAt?: true
    error?: true
    createdAt?: true
  }

  export type SmsLogMaxAggregateInputType = {
    id?: true
    jobId?: true
    to?: true
    from?: true
    body?: true
    status?: true
    provider?: true
    sentAt?: true
    error?: true
    createdAt?: true
  }

  export type SmsLogCountAggregateInputType = {
    id?: true
    jobId?: true
    to?: true
    from?: true
    body?: true
    status?: true
    provider?: true
    sentAt?: true
    error?: true
    createdAt?: true
    _all?: true
  }

  export type SmsLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SmsLog to aggregate.
     */
    where?: SmsLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SmsLogs to fetch.
     */
    orderBy?: SmsLogOrderByWithRelationInput | SmsLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SmsLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SmsLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SmsLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SmsLogs
    **/
    _count?: true | SmsLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SmsLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SmsLogMaxAggregateInputType
  }

  export type GetSmsLogAggregateType<T extends SmsLogAggregateArgs> = {
        [P in keyof T & keyof AggregateSmsLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSmsLog[P]>
      : GetScalarType<T[P], AggregateSmsLog[P]>
  }




  export type SmsLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SmsLogWhereInput
    orderBy?: SmsLogOrderByWithAggregationInput | SmsLogOrderByWithAggregationInput[]
    by: SmsLogScalarFieldEnum[] | SmsLogScalarFieldEnum
    having?: SmsLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SmsLogCountAggregateInputType | true
    _min?: SmsLogMinAggregateInputType
    _max?: SmsLogMaxAggregateInputType
  }

  export type SmsLogGroupByOutputType = {
    id: string
    jobId: string | null
    to: string
    from: string | null
    body: string
    status: string
    provider: string | null
    sentAt: Date | null
    error: string | null
    createdAt: Date
    _count: SmsLogCountAggregateOutputType | null
    _min: SmsLogMinAggregateOutputType | null
    _max: SmsLogMaxAggregateOutputType | null
  }

  type GetSmsLogGroupByPayload<T extends SmsLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SmsLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SmsLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SmsLogGroupByOutputType[P]>
            : GetScalarType<T[P], SmsLogGroupByOutputType[P]>
        }
      >
    >


  export type SmsLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jobId?: boolean
    to?: boolean
    from?: boolean
    body?: boolean
    status?: boolean
    provider?: boolean
    sentAt?: boolean
    error?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["smsLog"]>

  export type SmsLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jobId?: boolean
    to?: boolean
    from?: boolean
    body?: boolean
    status?: boolean
    provider?: boolean
    sentAt?: boolean
    error?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["smsLog"]>

  export type SmsLogSelectScalar = {
    id?: boolean
    jobId?: boolean
    to?: boolean
    from?: boolean
    body?: boolean
    status?: boolean
    provider?: boolean
    sentAt?: boolean
    error?: boolean
    createdAt?: boolean
  }


  export type $SmsLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SmsLog"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      jobId: string | null
      to: string
      from: string | null
      body: string
      status: string
      provider: string | null
      sentAt: Date | null
      error: string | null
      createdAt: Date
    }, ExtArgs["result"]["smsLog"]>
    composites: {}
  }

  type SmsLogGetPayload<S extends boolean | null | undefined | SmsLogDefaultArgs> = $Result.GetResult<Prisma.$SmsLogPayload, S>

  type SmsLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SmsLogFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SmsLogCountAggregateInputType | true
    }

  export interface SmsLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SmsLog'], meta: { name: 'SmsLog' } }
    /**
     * Find zero or one SmsLog that matches the filter.
     * @param {SmsLogFindUniqueArgs} args - Arguments to find a SmsLog
     * @example
     * // Get one SmsLog
     * const smsLog = await prisma.smsLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SmsLogFindUniqueArgs>(args: SelectSubset<T, SmsLogFindUniqueArgs<ExtArgs>>): Prisma__SmsLogClient<$Result.GetResult<Prisma.$SmsLogPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one SmsLog that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SmsLogFindUniqueOrThrowArgs} args - Arguments to find a SmsLog
     * @example
     * // Get one SmsLog
     * const smsLog = await prisma.smsLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SmsLogFindUniqueOrThrowArgs>(args: SelectSubset<T, SmsLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SmsLogClient<$Result.GetResult<Prisma.$SmsLogPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first SmsLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SmsLogFindFirstArgs} args - Arguments to find a SmsLog
     * @example
     * // Get one SmsLog
     * const smsLog = await prisma.smsLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SmsLogFindFirstArgs>(args?: SelectSubset<T, SmsLogFindFirstArgs<ExtArgs>>): Prisma__SmsLogClient<$Result.GetResult<Prisma.$SmsLogPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first SmsLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SmsLogFindFirstOrThrowArgs} args - Arguments to find a SmsLog
     * @example
     * // Get one SmsLog
     * const smsLog = await prisma.smsLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SmsLogFindFirstOrThrowArgs>(args?: SelectSubset<T, SmsLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__SmsLogClient<$Result.GetResult<Prisma.$SmsLogPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more SmsLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SmsLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SmsLogs
     * const smsLogs = await prisma.smsLog.findMany()
     * 
     * // Get first 10 SmsLogs
     * const smsLogs = await prisma.smsLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const smsLogWithIdOnly = await prisma.smsLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SmsLogFindManyArgs>(args?: SelectSubset<T, SmsLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SmsLogPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a SmsLog.
     * @param {SmsLogCreateArgs} args - Arguments to create a SmsLog.
     * @example
     * // Create one SmsLog
     * const SmsLog = await prisma.smsLog.create({
     *   data: {
     *     // ... data to create a SmsLog
     *   }
     * })
     * 
     */
    create<T extends SmsLogCreateArgs>(args: SelectSubset<T, SmsLogCreateArgs<ExtArgs>>): Prisma__SmsLogClient<$Result.GetResult<Prisma.$SmsLogPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many SmsLogs.
     * @param {SmsLogCreateManyArgs} args - Arguments to create many SmsLogs.
     * @example
     * // Create many SmsLogs
     * const smsLog = await prisma.smsLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SmsLogCreateManyArgs>(args?: SelectSubset<T, SmsLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SmsLogs and returns the data saved in the database.
     * @param {SmsLogCreateManyAndReturnArgs} args - Arguments to create many SmsLogs.
     * @example
     * // Create many SmsLogs
     * const smsLog = await prisma.smsLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SmsLogs and only return the `id`
     * const smsLogWithIdOnly = await prisma.smsLog.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SmsLogCreateManyAndReturnArgs>(args?: SelectSubset<T, SmsLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SmsLogPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a SmsLog.
     * @param {SmsLogDeleteArgs} args - Arguments to delete one SmsLog.
     * @example
     * // Delete one SmsLog
     * const SmsLog = await prisma.smsLog.delete({
     *   where: {
     *     // ... filter to delete one SmsLog
     *   }
     * })
     * 
     */
    delete<T extends SmsLogDeleteArgs>(args: SelectSubset<T, SmsLogDeleteArgs<ExtArgs>>): Prisma__SmsLogClient<$Result.GetResult<Prisma.$SmsLogPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one SmsLog.
     * @param {SmsLogUpdateArgs} args - Arguments to update one SmsLog.
     * @example
     * // Update one SmsLog
     * const smsLog = await prisma.smsLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SmsLogUpdateArgs>(args: SelectSubset<T, SmsLogUpdateArgs<ExtArgs>>): Prisma__SmsLogClient<$Result.GetResult<Prisma.$SmsLogPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more SmsLogs.
     * @param {SmsLogDeleteManyArgs} args - Arguments to filter SmsLogs to delete.
     * @example
     * // Delete a few SmsLogs
     * const { count } = await prisma.smsLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SmsLogDeleteManyArgs>(args?: SelectSubset<T, SmsLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SmsLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SmsLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SmsLogs
     * const smsLog = await prisma.smsLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SmsLogUpdateManyArgs>(args: SelectSubset<T, SmsLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SmsLog.
     * @param {SmsLogUpsertArgs} args - Arguments to update or create a SmsLog.
     * @example
     * // Update or create a SmsLog
     * const smsLog = await prisma.smsLog.upsert({
     *   create: {
     *     // ... data to create a SmsLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SmsLog we want to update
     *   }
     * })
     */
    upsert<T extends SmsLogUpsertArgs>(args: SelectSubset<T, SmsLogUpsertArgs<ExtArgs>>): Prisma__SmsLogClient<$Result.GetResult<Prisma.$SmsLogPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of SmsLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SmsLogCountArgs} args - Arguments to filter SmsLogs to count.
     * @example
     * // Count the number of SmsLogs
     * const count = await prisma.smsLog.count({
     *   where: {
     *     // ... the filter for the SmsLogs we want to count
     *   }
     * })
    **/
    count<T extends SmsLogCountArgs>(
      args?: Subset<T, SmsLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SmsLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SmsLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SmsLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SmsLogAggregateArgs>(args: Subset<T, SmsLogAggregateArgs>): Prisma.PrismaPromise<GetSmsLogAggregateType<T>>

    /**
     * Group by SmsLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SmsLogGroupByArgs} args - Group by arguments.
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
      T extends SmsLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SmsLogGroupByArgs['orderBy'] }
        : { orderBy?: SmsLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SmsLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSmsLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SmsLog model
   */
  readonly fields: SmsLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SmsLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SmsLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the SmsLog model
   */ 
  interface SmsLogFieldRefs {
    readonly id: FieldRef<"SmsLog", 'String'>
    readonly jobId: FieldRef<"SmsLog", 'String'>
    readonly to: FieldRef<"SmsLog", 'String'>
    readonly from: FieldRef<"SmsLog", 'String'>
    readonly body: FieldRef<"SmsLog", 'String'>
    readonly status: FieldRef<"SmsLog", 'String'>
    readonly provider: FieldRef<"SmsLog", 'String'>
    readonly sentAt: FieldRef<"SmsLog", 'DateTime'>
    readonly error: FieldRef<"SmsLog", 'String'>
    readonly createdAt: FieldRef<"SmsLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SmsLog findUnique
   */
  export type SmsLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SmsLog
     */
    select?: SmsLogSelect<ExtArgs> | null
    /**
     * Filter, which SmsLog to fetch.
     */
    where: SmsLogWhereUniqueInput
  }

  /**
   * SmsLog findUniqueOrThrow
   */
  export type SmsLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SmsLog
     */
    select?: SmsLogSelect<ExtArgs> | null
    /**
     * Filter, which SmsLog to fetch.
     */
    where: SmsLogWhereUniqueInput
  }

  /**
   * SmsLog findFirst
   */
  export type SmsLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SmsLog
     */
    select?: SmsLogSelect<ExtArgs> | null
    /**
     * Filter, which SmsLog to fetch.
     */
    where?: SmsLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SmsLogs to fetch.
     */
    orderBy?: SmsLogOrderByWithRelationInput | SmsLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SmsLogs.
     */
    cursor?: SmsLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SmsLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SmsLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SmsLogs.
     */
    distinct?: SmsLogScalarFieldEnum | SmsLogScalarFieldEnum[]
  }

  /**
   * SmsLog findFirstOrThrow
   */
  export type SmsLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SmsLog
     */
    select?: SmsLogSelect<ExtArgs> | null
    /**
     * Filter, which SmsLog to fetch.
     */
    where?: SmsLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SmsLogs to fetch.
     */
    orderBy?: SmsLogOrderByWithRelationInput | SmsLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SmsLogs.
     */
    cursor?: SmsLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SmsLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SmsLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SmsLogs.
     */
    distinct?: SmsLogScalarFieldEnum | SmsLogScalarFieldEnum[]
  }

  /**
   * SmsLog findMany
   */
  export type SmsLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SmsLog
     */
    select?: SmsLogSelect<ExtArgs> | null
    /**
     * Filter, which SmsLogs to fetch.
     */
    where?: SmsLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SmsLogs to fetch.
     */
    orderBy?: SmsLogOrderByWithRelationInput | SmsLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SmsLogs.
     */
    cursor?: SmsLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SmsLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SmsLogs.
     */
    skip?: number
    distinct?: SmsLogScalarFieldEnum | SmsLogScalarFieldEnum[]
  }

  /**
   * SmsLog create
   */
  export type SmsLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SmsLog
     */
    select?: SmsLogSelect<ExtArgs> | null
    /**
     * The data needed to create a SmsLog.
     */
    data: XOR<SmsLogCreateInput, SmsLogUncheckedCreateInput>
  }

  /**
   * SmsLog createMany
   */
  export type SmsLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SmsLogs.
     */
    data: SmsLogCreateManyInput | SmsLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SmsLog createManyAndReturn
   */
  export type SmsLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SmsLog
     */
    select?: SmsLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many SmsLogs.
     */
    data: SmsLogCreateManyInput | SmsLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SmsLog update
   */
  export type SmsLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SmsLog
     */
    select?: SmsLogSelect<ExtArgs> | null
    /**
     * The data needed to update a SmsLog.
     */
    data: XOR<SmsLogUpdateInput, SmsLogUncheckedUpdateInput>
    /**
     * Choose, which SmsLog to update.
     */
    where: SmsLogWhereUniqueInput
  }

  /**
   * SmsLog updateMany
   */
  export type SmsLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SmsLogs.
     */
    data: XOR<SmsLogUpdateManyMutationInput, SmsLogUncheckedUpdateManyInput>
    /**
     * Filter which SmsLogs to update
     */
    where?: SmsLogWhereInput
  }

  /**
   * SmsLog upsert
   */
  export type SmsLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SmsLog
     */
    select?: SmsLogSelect<ExtArgs> | null
    /**
     * The filter to search for the SmsLog to update in case it exists.
     */
    where: SmsLogWhereUniqueInput
    /**
     * In case the SmsLog found by the `where` argument doesn't exist, create a new SmsLog with this data.
     */
    create: XOR<SmsLogCreateInput, SmsLogUncheckedCreateInput>
    /**
     * In case the SmsLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SmsLogUpdateInput, SmsLogUncheckedUpdateInput>
  }

  /**
   * SmsLog delete
   */
  export type SmsLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SmsLog
     */
    select?: SmsLogSelect<ExtArgs> | null
    /**
     * Filter which SmsLog to delete.
     */
    where: SmsLogWhereUniqueInput
  }

  /**
   * SmsLog deleteMany
   */
  export type SmsLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SmsLogs to delete
     */
    where?: SmsLogWhereInput
  }

  /**
   * SmsLog without action
   */
  export type SmsLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SmsLog
     */
    select?: SmsLogSelect<ExtArgs> | null
  }


  /**
   * Model DeviceToken
   */

  export type AggregateDeviceToken = {
    _count: DeviceTokenCountAggregateOutputType | null
    _min: DeviceTokenMinAggregateOutputType | null
    _max: DeviceTokenMaxAggregateOutputType | null
  }

  export type DeviceTokenMinAggregateOutputType = {
    id: string | null
    userId: string | null
    token: string | null
    platform: string | null
    isActive: boolean | null
    lastUsed: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DeviceTokenMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    token: string | null
    platform: string | null
    isActive: boolean | null
    lastUsed: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DeviceTokenCountAggregateOutputType = {
    id: number
    userId: number
    token: number
    platform: number
    isActive: number
    lastUsed: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DeviceTokenMinAggregateInputType = {
    id?: true
    userId?: true
    token?: true
    platform?: true
    isActive?: true
    lastUsed?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DeviceTokenMaxAggregateInputType = {
    id?: true
    userId?: true
    token?: true
    platform?: true
    isActive?: true
    lastUsed?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DeviceTokenCountAggregateInputType = {
    id?: true
    userId?: true
    token?: true
    platform?: true
    isActive?: true
    lastUsed?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DeviceTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DeviceToken to aggregate.
     */
    where?: DeviceTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeviceTokens to fetch.
     */
    orderBy?: DeviceTokenOrderByWithRelationInput | DeviceTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DeviceTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeviceTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeviceTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DeviceTokens
    **/
    _count?: true | DeviceTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DeviceTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DeviceTokenMaxAggregateInputType
  }

  export type GetDeviceTokenAggregateType<T extends DeviceTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateDeviceToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDeviceToken[P]>
      : GetScalarType<T[P], AggregateDeviceToken[P]>
  }




  export type DeviceTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeviceTokenWhereInput
    orderBy?: DeviceTokenOrderByWithAggregationInput | DeviceTokenOrderByWithAggregationInput[]
    by: DeviceTokenScalarFieldEnum[] | DeviceTokenScalarFieldEnum
    having?: DeviceTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DeviceTokenCountAggregateInputType | true
    _min?: DeviceTokenMinAggregateInputType
    _max?: DeviceTokenMaxAggregateInputType
  }

  export type DeviceTokenGroupByOutputType = {
    id: string
    userId: string
    token: string
    platform: string
    isActive: boolean
    lastUsed: Date
    createdAt: Date
    updatedAt: Date
    _count: DeviceTokenCountAggregateOutputType | null
    _min: DeviceTokenMinAggregateOutputType | null
    _max: DeviceTokenMaxAggregateOutputType | null
  }

  type GetDeviceTokenGroupByPayload<T extends DeviceTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DeviceTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DeviceTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DeviceTokenGroupByOutputType[P]>
            : GetScalarType<T[P], DeviceTokenGroupByOutputType[P]>
        }
      >
    >


  export type DeviceTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    token?: boolean
    platform?: boolean
    isActive?: boolean
    lastUsed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["deviceToken"]>

  export type DeviceTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    token?: boolean
    platform?: boolean
    isActive?: boolean
    lastUsed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["deviceToken"]>

  export type DeviceTokenSelectScalar = {
    id?: boolean
    userId?: boolean
    token?: boolean
    platform?: boolean
    isActive?: boolean
    lastUsed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $DeviceTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DeviceToken"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      token: string
      platform: string
      isActive: boolean
      lastUsed: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["deviceToken"]>
    composites: {}
  }

  type DeviceTokenGetPayload<S extends boolean | null | undefined | DeviceTokenDefaultArgs> = $Result.GetResult<Prisma.$DeviceTokenPayload, S>

  type DeviceTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DeviceTokenFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DeviceTokenCountAggregateInputType | true
    }

  export interface DeviceTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DeviceToken'], meta: { name: 'DeviceToken' } }
    /**
     * Find zero or one DeviceToken that matches the filter.
     * @param {DeviceTokenFindUniqueArgs} args - Arguments to find a DeviceToken
     * @example
     * // Get one DeviceToken
     * const deviceToken = await prisma.deviceToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DeviceTokenFindUniqueArgs>(args: SelectSubset<T, DeviceTokenFindUniqueArgs<ExtArgs>>): Prisma__DeviceTokenClient<$Result.GetResult<Prisma.$DeviceTokenPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one DeviceToken that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {DeviceTokenFindUniqueOrThrowArgs} args - Arguments to find a DeviceToken
     * @example
     * // Get one DeviceToken
     * const deviceToken = await prisma.deviceToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DeviceTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, DeviceTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DeviceTokenClient<$Result.GetResult<Prisma.$DeviceTokenPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first DeviceToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceTokenFindFirstArgs} args - Arguments to find a DeviceToken
     * @example
     * // Get one DeviceToken
     * const deviceToken = await prisma.deviceToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DeviceTokenFindFirstArgs>(args?: SelectSubset<T, DeviceTokenFindFirstArgs<ExtArgs>>): Prisma__DeviceTokenClient<$Result.GetResult<Prisma.$DeviceTokenPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first DeviceToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceTokenFindFirstOrThrowArgs} args - Arguments to find a DeviceToken
     * @example
     * // Get one DeviceToken
     * const deviceToken = await prisma.deviceToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DeviceTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, DeviceTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__DeviceTokenClient<$Result.GetResult<Prisma.$DeviceTokenPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more DeviceTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DeviceTokens
     * const deviceTokens = await prisma.deviceToken.findMany()
     * 
     * // Get first 10 DeviceTokens
     * const deviceTokens = await prisma.deviceToken.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const deviceTokenWithIdOnly = await prisma.deviceToken.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DeviceTokenFindManyArgs>(args?: SelectSubset<T, DeviceTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeviceTokenPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a DeviceToken.
     * @param {DeviceTokenCreateArgs} args - Arguments to create a DeviceToken.
     * @example
     * // Create one DeviceToken
     * const DeviceToken = await prisma.deviceToken.create({
     *   data: {
     *     // ... data to create a DeviceToken
     *   }
     * })
     * 
     */
    create<T extends DeviceTokenCreateArgs>(args: SelectSubset<T, DeviceTokenCreateArgs<ExtArgs>>): Prisma__DeviceTokenClient<$Result.GetResult<Prisma.$DeviceTokenPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many DeviceTokens.
     * @param {DeviceTokenCreateManyArgs} args - Arguments to create many DeviceTokens.
     * @example
     * // Create many DeviceTokens
     * const deviceToken = await prisma.deviceToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DeviceTokenCreateManyArgs>(args?: SelectSubset<T, DeviceTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DeviceTokens and returns the data saved in the database.
     * @param {DeviceTokenCreateManyAndReturnArgs} args - Arguments to create many DeviceTokens.
     * @example
     * // Create many DeviceTokens
     * const deviceToken = await prisma.deviceToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DeviceTokens and only return the `id`
     * const deviceTokenWithIdOnly = await prisma.deviceToken.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DeviceTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, DeviceTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeviceTokenPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a DeviceToken.
     * @param {DeviceTokenDeleteArgs} args - Arguments to delete one DeviceToken.
     * @example
     * // Delete one DeviceToken
     * const DeviceToken = await prisma.deviceToken.delete({
     *   where: {
     *     // ... filter to delete one DeviceToken
     *   }
     * })
     * 
     */
    delete<T extends DeviceTokenDeleteArgs>(args: SelectSubset<T, DeviceTokenDeleteArgs<ExtArgs>>): Prisma__DeviceTokenClient<$Result.GetResult<Prisma.$DeviceTokenPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one DeviceToken.
     * @param {DeviceTokenUpdateArgs} args - Arguments to update one DeviceToken.
     * @example
     * // Update one DeviceToken
     * const deviceToken = await prisma.deviceToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DeviceTokenUpdateArgs>(args: SelectSubset<T, DeviceTokenUpdateArgs<ExtArgs>>): Prisma__DeviceTokenClient<$Result.GetResult<Prisma.$DeviceTokenPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more DeviceTokens.
     * @param {DeviceTokenDeleteManyArgs} args - Arguments to filter DeviceTokens to delete.
     * @example
     * // Delete a few DeviceTokens
     * const { count } = await prisma.deviceToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DeviceTokenDeleteManyArgs>(args?: SelectSubset<T, DeviceTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DeviceTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DeviceTokens
     * const deviceToken = await prisma.deviceToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DeviceTokenUpdateManyArgs>(args: SelectSubset<T, DeviceTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DeviceToken.
     * @param {DeviceTokenUpsertArgs} args - Arguments to update or create a DeviceToken.
     * @example
     * // Update or create a DeviceToken
     * const deviceToken = await prisma.deviceToken.upsert({
     *   create: {
     *     // ... data to create a DeviceToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DeviceToken we want to update
     *   }
     * })
     */
    upsert<T extends DeviceTokenUpsertArgs>(args: SelectSubset<T, DeviceTokenUpsertArgs<ExtArgs>>): Prisma__DeviceTokenClient<$Result.GetResult<Prisma.$DeviceTokenPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of DeviceTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceTokenCountArgs} args - Arguments to filter DeviceTokens to count.
     * @example
     * // Count the number of DeviceTokens
     * const count = await prisma.deviceToken.count({
     *   where: {
     *     // ... the filter for the DeviceTokens we want to count
     *   }
     * })
    **/
    count<T extends DeviceTokenCountArgs>(
      args?: Subset<T, DeviceTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DeviceTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DeviceToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DeviceTokenAggregateArgs>(args: Subset<T, DeviceTokenAggregateArgs>): Prisma.PrismaPromise<GetDeviceTokenAggregateType<T>>

    /**
     * Group by DeviceToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceTokenGroupByArgs} args - Group by arguments.
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
      T extends DeviceTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DeviceTokenGroupByArgs['orderBy'] }
        : { orderBy?: DeviceTokenGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DeviceTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDeviceTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DeviceToken model
   */
  readonly fields: DeviceTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DeviceToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DeviceTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the DeviceToken model
   */ 
  interface DeviceTokenFieldRefs {
    readonly id: FieldRef<"DeviceToken", 'String'>
    readonly userId: FieldRef<"DeviceToken", 'String'>
    readonly token: FieldRef<"DeviceToken", 'String'>
    readonly platform: FieldRef<"DeviceToken", 'String'>
    readonly isActive: FieldRef<"DeviceToken", 'Boolean'>
    readonly lastUsed: FieldRef<"DeviceToken", 'DateTime'>
    readonly createdAt: FieldRef<"DeviceToken", 'DateTime'>
    readonly updatedAt: FieldRef<"DeviceToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DeviceToken findUnique
   */
  export type DeviceTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceToken
     */
    select?: DeviceTokenSelect<ExtArgs> | null
    /**
     * Filter, which DeviceToken to fetch.
     */
    where: DeviceTokenWhereUniqueInput
  }

  /**
   * DeviceToken findUniqueOrThrow
   */
  export type DeviceTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceToken
     */
    select?: DeviceTokenSelect<ExtArgs> | null
    /**
     * Filter, which DeviceToken to fetch.
     */
    where: DeviceTokenWhereUniqueInput
  }

  /**
   * DeviceToken findFirst
   */
  export type DeviceTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceToken
     */
    select?: DeviceTokenSelect<ExtArgs> | null
    /**
     * Filter, which DeviceToken to fetch.
     */
    where?: DeviceTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeviceTokens to fetch.
     */
    orderBy?: DeviceTokenOrderByWithRelationInput | DeviceTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DeviceTokens.
     */
    cursor?: DeviceTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeviceTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeviceTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DeviceTokens.
     */
    distinct?: DeviceTokenScalarFieldEnum | DeviceTokenScalarFieldEnum[]
  }

  /**
   * DeviceToken findFirstOrThrow
   */
  export type DeviceTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceToken
     */
    select?: DeviceTokenSelect<ExtArgs> | null
    /**
     * Filter, which DeviceToken to fetch.
     */
    where?: DeviceTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeviceTokens to fetch.
     */
    orderBy?: DeviceTokenOrderByWithRelationInput | DeviceTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DeviceTokens.
     */
    cursor?: DeviceTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeviceTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeviceTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DeviceTokens.
     */
    distinct?: DeviceTokenScalarFieldEnum | DeviceTokenScalarFieldEnum[]
  }

  /**
   * DeviceToken findMany
   */
  export type DeviceTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceToken
     */
    select?: DeviceTokenSelect<ExtArgs> | null
    /**
     * Filter, which DeviceTokens to fetch.
     */
    where?: DeviceTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeviceTokens to fetch.
     */
    orderBy?: DeviceTokenOrderByWithRelationInput | DeviceTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DeviceTokens.
     */
    cursor?: DeviceTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeviceTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeviceTokens.
     */
    skip?: number
    distinct?: DeviceTokenScalarFieldEnum | DeviceTokenScalarFieldEnum[]
  }

  /**
   * DeviceToken create
   */
  export type DeviceTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceToken
     */
    select?: DeviceTokenSelect<ExtArgs> | null
    /**
     * The data needed to create a DeviceToken.
     */
    data: XOR<DeviceTokenCreateInput, DeviceTokenUncheckedCreateInput>
  }

  /**
   * DeviceToken createMany
   */
  export type DeviceTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DeviceTokens.
     */
    data: DeviceTokenCreateManyInput | DeviceTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DeviceToken createManyAndReturn
   */
  export type DeviceTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceToken
     */
    select?: DeviceTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many DeviceTokens.
     */
    data: DeviceTokenCreateManyInput | DeviceTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DeviceToken update
   */
  export type DeviceTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceToken
     */
    select?: DeviceTokenSelect<ExtArgs> | null
    /**
     * The data needed to update a DeviceToken.
     */
    data: XOR<DeviceTokenUpdateInput, DeviceTokenUncheckedUpdateInput>
    /**
     * Choose, which DeviceToken to update.
     */
    where: DeviceTokenWhereUniqueInput
  }

  /**
   * DeviceToken updateMany
   */
  export type DeviceTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DeviceTokens.
     */
    data: XOR<DeviceTokenUpdateManyMutationInput, DeviceTokenUncheckedUpdateManyInput>
    /**
     * Filter which DeviceTokens to update
     */
    where?: DeviceTokenWhereInput
  }

  /**
   * DeviceToken upsert
   */
  export type DeviceTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceToken
     */
    select?: DeviceTokenSelect<ExtArgs> | null
    /**
     * The filter to search for the DeviceToken to update in case it exists.
     */
    where: DeviceTokenWhereUniqueInput
    /**
     * In case the DeviceToken found by the `where` argument doesn't exist, create a new DeviceToken with this data.
     */
    create: XOR<DeviceTokenCreateInput, DeviceTokenUncheckedCreateInput>
    /**
     * In case the DeviceToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DeviceTokenUpdateInput, DeviceTokenUncheckedUpdateInput>
  }

  /**
   * DeviceToken delete
   */
  export type DeviceTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceToken
     */
    select?: DeviceTokenSelect<ExtArgs> | null
    /**
     * Filter which DeviceToken to delete.
     */
    where: DeviceTokenWhereUniqueInput
  }

  /**
   * DeviceToken deleteMany
   */
  export type DeviceTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DeviceTokens to delete
     */
    where?: DeviceTokenWhereInput
  }

  /**
   * DeviceToken without action
   */
  export type DeviceTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceToken
     */
    select?: DeviceTokenSelect<ExtArgs> | null
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


  export const NotificationJobScalarFieldEnum: {
    id: 'id',
    type: 'type',
    status: 'status',
    schoolId: 'schoolId',
    userId: 'userId',
    userEmail: 'userEmail',
    userPhone: 'userPhone',
    subject: 'subject',
    title: 'title',
    body: 'body',
    data: 'data',
    channels: 'channels',
    scheduledFor: 'scheduledFor',
    processedAt: 'processedAt',
    attempts: 'attempts',
    maxAttempts: 'maxAttempts',
    lastError: 'lastError',
    nextRetryAt: 'nextRetryAt',
    priority: 'priority',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type NotificationJobScalarFieldEnum = (typeof NotificationJobScalarFieldEnum)[keyof typeof NotificationJobScalarFieldEnum]


  export const NotificationTemplateScalarFieldEnum: {
    id: 'id',
    name: 'name',
    type: 'type',
    subject: 'subject',
    title: 'title',
    body: 'body',
    variables: 'variables',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type NotificationTemplateScalarFieldEnum = (typeof NotificationTemplateScalarFieldEnum)[keyof typeof NotificationTemplateScalarFieldEnum]


  export const EmailLogScalarFieldEnum: {
    id: 'id',
    jobId: 'jobId',
    to: 'to',
    from: 'from',
    subject: 'subject',
    body: 'body',
    status: 'status',
    provider: 'provider',
    sentAt: 'sentAt',
    error: 'error',
    createdAt: 'createdAt'
  };

  export type EmailLogScalarFieldEnum = (typeof EmailLogScalarFieldEnum)[keyof typeof EmailLogScalarFieldEnum]


  export const PushLogScalarFieldEnum: {
    id: 'id',
    jobId: 'jobId',
    userId: 'userId',
    token: 'token',
    title: 'title',
    body: 'body',
    data: 'data',
    status: 'status',
    sentAt: 'sentAt',
    error: 'error',
    createdAt: 'createdAt'
  };

  export type PushLogScalarFieldEnum = (typeof PushLogScalarFieldEnum)[keyof typeof PushLogScalarFieldEnum]


  export const SmsLogScalarFieldEnum: {
    id: 'id',
    jobId: 'jobId',
    to: 'to',
    from: 'from',
    body: 'body',
    status: 'status',
    provider: 'provider',
    sentAt: 'sentAt',
    error: 'error',
    createdAt: 'createdAt'
  };

  export type SmsLogScalarFieldEnum = (typeof SmsLogScalarFieldEnum)[keyof typeof SmsLogScalarFieldEnum]


  export const DeviceTokenScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    token: 'token',
    platform: 'platform',
    isActive: 'isActive',
    lastUsed: 'lastUsed',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DeviceTokenScalarFieldEnum = (typeof DeviceTokenScalarFieldEnum)[keyof typeof DeviceTokenScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


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
   * Reference to a field of type 'NotificationType'
   */
  export type EnumNotificationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NotificationType'>
    


  /**
   * Reference to a field of type 'NotificationType[]'
   */
  export type ListEnumNotificationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NotificationType[]'>
    


  /**
   * Reference to a field of type 'JobStatus'
   */
  export type EnumJobStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'JobStatus'>
    


  /**
   * Reference to a field of type 'JobStatus[]'
   */
  export type ListEnumJobStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'JobStatus[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


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
   * Deep Input Types
   */


  export type NotificationJobWhereInput = {
    AND?: NotificationJobWhereInput | NotificationJobWhereInput[]
    OR?: NotificationJobWhereInput[]
    NOT?: NotificationJobWhereInput | NotificationJobWhereInput[]
    id?: StringFilter<"NotificationJob"> | string
    type?: EnumNotificationTypeFilter<"NotificationJob"> | $Enums.NotificationType
    status?: EnumJobStatusFilter<"NotificationJob"> | $Enums.JobStatus
    schoolId?: StringNullableFilter<"NotificationJob"> | string | null
    userId?: StringNullableFilter<"NotificationJob"> | string | null
    userEmail?: StringNullableFilter<"NotificationJob"> | string | null
    userPhone?: StringNullableFilter<"NotificationJob"> | string | null
    subject?: StringNullableFilter<"NotificationJob"> | string | null
    title?: StringFilter<"NotificationJob"> | string
    body?: StringFilter<"NotificationJob"> | string
    data?: JsonNullableFilter<"NotificationJob">
    channels?: StringNullableListFilter<"NotificationJob">
    scheduledFor?: DateTimeNullableFilter<"NotificationJob"> | Date | string | null
    processedAt?: DateTimeNullableFilter<"NotificationJob"> | Date | string | null
    attempts?: IntFilter<"NotificationJob"> | number
    maxAttempts?: IntFilter<"NotificationJob"> | number
    lastError?: StringNullableFilter<"NotificationJob"> | string | null
    nextRetryAt?: DateTimeNullableFilter<"NotificationJob"> | Date | string | null
    priority?: IntFilter<"NotificationJob"> | number
    createdAt?: DateTimeFilter<"NotificationJob"> | Date | string
    updatedAt?: DateTimeFilter<"NotificationJob"> | Date | string
  }

  export type NotificationJobOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    status?: SortOrder
    schoolId?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    userEmail?: SortOrderInput | SortOrder
    userPhone?: SortOrderInput | SortOrder
    subject?: SortOrderInput | SortOrder
    title?: SortOrder
    body?: SortOrder
    data?: SortOrderInput | SortOrder
    channels?: SortOrder
    scheduledFor?: SortOrderInput | SortOrder
    processedAt?: SortOrderInput | SortOrder
    attempts?: SortOrder
    maxAttempts?: SortOrder
    lastError?: SortOrderInput | SortOrder
    nextRetryAt?: SortOrderInput | SortOrder
    priority?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NotificationJobWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NotificationJobWhereInput | NotificationJobWhereInput[]
    OR?: NotificationJobWhereInput[]
    NOT?: NotificationJobWhereInput | NotificationJobWhereInput[]
    type?: EnumNotificationTypeFilter<"NotificationJob"> | $Enums.NotificationType
    status?: EnumJobStatusFilter<"NotificationJob"> | $Enums.JobStatus
    schoolId?: StringNullableFilter<"NotificationJob"> | string | null
    userId?: StringNullableFilter<"NotificationJob"> | string | null
    userEmail?: StringNullableFilter<"NotificationJob"> | string | null
    userPhone?: StringNullableFilter<"NotificationJob"> | string | null
    subject?: StringNullableFilter<"NotificationJob"> | string | null
    title?: StringFilter<"NotificationJob"> | string
    body?: StringFilter<"NotificationJob"> | string
    data?: JsonNullableFilter<"NotificationJob">
    channels?: StringNullableListFilter<"NotificationJob">
    scheduledFor?: DateTimeNullableFilter<"NotificationJob"> | Date | string | null
    processedAt?: DateTimeNullableFilter<"NotificationJob"> | Date | string | null
    attempts?: IntFilter<"NotificationJob"> | number
    maxAttempts?: IntFilter<"NotificationJob"> | number
    lastError?: StringNullableFilter<"NotificationJob"> | string | null
    nextRetryAt?: DateTimeNullableFilter<"NotificationJob"> | Date | string | null
    priority?: IntFilter<"NotificationJob"> | number
    createdAt?: DateTimeFilter<"NotificationJob"> | Date | string
    updatedAt?: DateTimeFilter<"NotificationJob"> | Date | string
  }, "id">

  export type NotificationJobOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    status?: SortOrder
    schoolId?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    userEmail?: SortOrderInput | SortOrder
    userPhone?: SortOrderInput | SortOrder
    subject?: SortOrderInput | SortOrder
    title?: SortOrder
    body?: SortOrder
    data?: SortOrderInput | SortOrder
    channels?: SortOrder
    scheduledFor?: SortOrderInput | SortOrder
    processedAt?: SortOrderInput | SortOrder
    attempts?: SortOrder
    maxAttempts?: SortOrder
    lastError?: SortOrderInput | SortOrder
    nextRetryAt?: SortOrderInput | SortOrder
    priority?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: NotificationJobCountOrderByAggregateInput
    _avg?: NotificationJobAvgOrderByAggregateInput
    _max?: NotificationJobMaxOrderByAggregateInput
    _min?: NotificationJobMinOrderByAggregateInput
    _sum?: NotificationJobSumOrderByAggregateInput
  }

  export type NotificationJobScalarWhereWithAggregatesInput = {
    AND?: NotificationJobScalarWhereWithAggregatesInput | NotificationJobScalarWhereWithAggregatesInput[]
    OR?: NotificationJobScalarWhereWithAggregatesInput[]
    NOT?: NotificationJobScalarWhereWithAggregatesInput | NotificationJobScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"NotificationJob"> | string
    type?: EnumNotificationTypeWithAggregatesFilter<"NotificationJob"> | $Enums.NotificationType
    status?: EnumJobStatusWithAggregatesFilter<"NotificationJob"> | $Enums.JobStatus
    schoolId?: StringNullableWithAggregatesFilter<"NotificationJob"> | string | null
    userId?: StringNullableWithAggregatesFilter<"NotificationJob"> | string | null
    userEmail?: StringNullableWithAggregatesFilter<"NotificationJob"> | string | null
    userPhone?: StringNullableWithAggregatesFilter<"NotificationJob"> | string | null
    subject?: StringNullableWithAggregatesFilter<"NotificationJob"> | string | null
    title?: StringWithAggregatesFilter<"NotificationJob"> | string
    body?: StringWithAggregatesFilter<"NotificationJob"> | string
    data?: JsonNullableWithAggregatesFilter<"NotificationJob">
    channels?: StringNullableListFilter<"NotificationJob">
    scheduledFor?: DateTimeNullableWithAggregatesFilter<"NotificationJob"> | Date | string | null
    processedAt?: DateTimeNullableWithAggregatesFilter<"NotificationJob"> | Date | string | null
    attempts?: IntWithAggregatesFilter<"NotificationJob"> | number
    maxAttempts?: IntWithAggregatesFilter<"NotificationJob"> | number
    lastError?: StringNullableWithAggregatesFilter<"NotificationJob"> | string | null
    nextRetryAt?: DateTimeNullableWithAggregatesFilter<"NotificationJob"> | Date | string | null
    priority?: IntWithAggregatesFilter<"NotificationJob"> | number
    createdAt?: DateTimeWithAggregatesFilter<"NotificationJob"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"NotificationJob"> | Date | string
  }

  export type NotificationTemplateWhereInput = {
    AND?: NotificationTemplateWhereInput | NotificationTemplateWhereInput[]
    OR?: NotificationTemplateWhereInput[]
    NOT?: NotificationTemplateWhereInput | NotificationTemplateWhereInput[]
    id?: StringFilter<"NotificationTemplate"> | string
    name?: StringFilter<"NotificationTemplate"> | string
    type?: StringFilter<"NotificationTemplate"> | string
    subject?: StringNullableFilter<"NotificationTemplate"> | string | null
    title?: StringNullableFilter<"NotificationTemplate"> | string | null
    body?: StringFilter<"NotificationTemplate"> | string
    variables?: StringNullableListFilter<"NotificationTemplate">
    isActive?: BoolFilter<"NotificationTemplate"> | boolean
    createdAt?: DateTimeFilter<"NotificationTemplate"> | Date | string
    updatedAt?: DateTimeFilter<"NotificationTemplate"> | Date | string
  }

  export type NotificationTemplateOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    subject?: SortOrderInput | SortOrder
    title?: SortOrderInput | SortOrder
    body?: SortOrder
    variables?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NotificationTemplateWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: NotificationTemplateWhereInput | NotificationTemplateWhereInput[]
    OR?: NotificationTemplateWhereInput[]
    NOT?: NotificationTemplateWhereInput | NotificationTemplateWhereInput[]
    type?: StringFilter<"NotificationTemplate"> | string
    subject?: StringNullableFilter<"NotificationTemplate"> | string | null
    title?: StringNullableFilter<"NotificationTemplate"> | string | null
    body?: StringFilter<"NotificationTemplate"> | string
    variables?: StringNullableListFilter<"NotificationTemplate">
    isActive?: BoolFilter<"NotificationTemplate"> | boolean
    createdAt?: DateTimeFilter<"NotificationTemplate"> | Date | string
    updatedAt?: DateTimeFilter<"NotificationTemplate"> | Date | string
  }, "id" | "name">

  export type NotificationTemplateOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    subject?: SortOrderInput | SortOrder
    title?: SortOrderInput | SortOrder
    body?: SortOrder
    variables?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: NotificationTemplateCountOrderByAggregateInput
    _max?: NotificationTemplateMaxOrderByAggregateInput
    _min?: NotificationTemplateMinOrderByAggregateInput
  }

  export type NotificationTemplateScalarWhereWithAggregatesInput = {
    AND?: NotificationTemplateScalarWhereWithAggregatesInput | NotificationTemplateScalarWhereWithAggregatesInput[]
    OR?: NotificationTemplateScalarWhereWithAggregatesInput[]
    NOT?: NotificationTemplateScalarWhereWithAggregatesInput | NotificationTemplateScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"NotificationTemplate"> | string
    name?: StringWithAggregatesFilter<"NotificationTemplate"> | string
    type?: StringWithAggregatesFilter<"NotificationTemplate"> | string
    subject?: StringNullableWithAggregatesFilter<"NotificationTemplate"> | string | null
    title?: StringNullableWithAggregatesFilter<"NotificationTemplate"> | string | null
    body?: StringWithAggregatesFilter<"NotificationTemplate"> | string
    variables?: StringNullableListFilter<"NotificationTemplate">
    isActive?: BoolWithAggregatesFilter<"NotificationTemplate"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"NotificationTemplate"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"NotificationTemplate"> | Date | string
  }

  export type EmailLogWhereInput = {
    AND?: EmailLogWhereInput | EmailLogWhereInput[]
    OR?: EmailLogWhereInput[]
    NOT?: EmailLogWhereInput | EmailLogWhereInput[]
    id?: StringFilter<"EmailLog"> | string
    jobId?: StringNullableFilter<"EmailLog"> | string | null
    to?: StringFilter<"EmailLog"> | string
    from?: StringFilter<"EmailLog"> | string
    subject?: StringFilter<"EmailLog"> | string
    body?: StringFilter<"EmailLog"> | string
    status?: StringFilter<"EmailLog"> | string
    provider?: StringNullableFilter<"EmailLog"> | string | null
    sentAt?: DateTimeNullableFilter<"EmailLog"> | Date | string | null
    error?: StringNullableFilter<"EmailLog"> | string | null
    createdAt?: DateTimeFilter<"EmailLog"> | Date | string
  }

  export type EmailLogOrderByWithRelationInput = {
    id?: SortOrder
    jobId?: SortOrderInput | SortOrder
    to?: SortOrder
    from?: SortOrder
    subject?: SortOrder
    body?: SortOrder
    status?: SortOrder
    provider?: SortOrderInput | SortOrder
    sentAt?: SortOrderInput | SortOrder
    error?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type EmailLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EmailLogWhereInput | EmailLogWhereInput[]
    OR?: EmailLogWhereInput[]
    NOT?: EmailLogWhereInput | EmailLogWhereInput[]
    jobId?: StringNullableFilter<"EmailLog"> | string | null
    to?: StringFilter<"EmailLog"> | string
    from?: StringFilter<"EmailLog"> | string
    subject?: StringFilter<"EmailLog"> | string
    body?: StringFilter<"EmailLog"> | string
    status?: StringFilter<"EmailLog"> | string
    provider?: StringNullableFilter<"EmailLog"> | string | null
    sentAt?: DateTimeNullableFilter<"EmailLog"> | Date | string | null
    error?: StringNullableFilter<"EmailLog"> | string | null
    createdAt?: DateTimeFilter<"EmailLog"> | Date | string
  }, "id">

  export type EmailLogOrderByWithAggregationInput = {
    id?: SortOrder
    jobId?: SortOrderInput | SortOrder
    to?: SortOrder
    from?: SortOrder
    subject?: SortOrder
    body?: SortOrder
    status?: SortOrder
    provider?: SortOrderInput | SortOrder
    sentAt?: SortOrderInput | SortOrder
    error?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: EmailLogCountOrderByAggregateInput
    _max?: EmailLogMaxOrderByAggregateInput
    _min?: EmailLogMinOrderByAggregateInput
  }

  export type EmailLogScalarWhereWithAggregatesInput = {
    AND?: EmailLogScalarWhereWithAggregatesInput | EmailLogScalarWhereWithAggregatesInput[]
    OR?: EmailLogScalarWhereWithAggregatesInput[]
    NOT?: EmailLogScalarWhereWithAggregatesInput | EmailLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EmailLog"> | string
    jobId?: StringNullableWithAggregatesFilter<"EmailLog"> | string | null
    to?: StringWithAggregatesFilter<"EmailLog"> | string
    from?: StringWithAggregatesFilter<"EmailLog"> | string
    subject?: StringWithAggregatesFilter<"EmailLog"> | string
    body?: StringWithAggregatesFilter<"EmailLog"> | string
    status?: StringWithAggregatesFilter<"EmailLog"> | string
    provider?: StringNullableWithAggregatesFilter<"EmailLog"> | string | null
    sentAt?: DateTimeNullableWithAggregatesFilter<"EmailLog"> | Date | string | null
    error?: StringNullableWithAggregatesFilter<"EmailLog"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"EmailLog"> | Date | string
  }

  export type PushLogWhereInput = {
    AND?: PushLogWhereInput | PushLogWhereInput[]
    OR?: PushLogWhereInput[]
    NOT?: PushLogWhereInput | PushLogWhereInput[]
    id?: StringFilter<"PushLog"> | string
    jobId?: StringNullableFilter<"PushLog"> | string | null
    userId?: StringFilter<"PushLog"> | string
    token?: StringNullableFilter<"PushLog"> | string | null
    title?: StringFilter<"PushLog"> | string
    body?: StringFilter<"PushLog"> | string
    data?: JsonNullableFilter<"PushLog">
    status?: StringFilter<"PushLog"> | string
    sentAt?: DateTimeNullableFilter<"PushLog"> | Date | string | null
    error?: StringNullableFilter<"PushLog"> | string | null
    createdAt?: DateTimeFilter<"PushLog"> | Date | string
  }

  export type PushLogOrderByWithRelationInput = {
    id?: SortOrder
    jobId?: SortOrderInput | SortOrder
    userId?: SortOrder
    token?: SortOrderInput | SortOrder
    title?: SortOrder
    body?: SortOrder
    data?: SortOrderInput | SortOrder
    status?: SortOrder
    sentAt?: SortOrderInput | SortOrder
    error?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type PushLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PushLogWhereInput | PushLogWhereInput[]
    OR?: PushLogWhereInput[]
    NOT?: PushLogWhereInput | PushLogWhereInput[]
    jobId?: StringNullableFilter<"PushLog"> | string | null
    userId?: StringFilter<"PushLog"> | string
    token?: StringNullableFilter<"PushLog"> | string | null
    title?: StringFilter<"PushLog"> | string
    body?: StringFilter<"PushLog"> | string
    data?: JsonNullableFilter<"PushLog">
    status?: StringFilter<"PushLog"> | string
    sentAt?: DateTimeNullableFilter<"PushLog"> | Date | string | null
    error?: StringNullableFilter<"PushLog"> | string | null
    createdAt?: DateTimeFilter<"PushLog"> | Date | string
  }, "id">

  export type PushLogOrderByWithAggregationInput = {
    id?: SortOrder
    jobId?: SortOrderInput | SortOrder
    userId?: SortOrder
    token?: SortOrderInput | SortOrder
    title?: SortOrder
    body?: SortOrder
    data?: SortOrderInput | SortOrder
    status?: SortOrder
    sentAt?: SortOrderInput | SortOrder
    error?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: PushLogCountOrderByAggregateInput
    _max?: PushLogMaxOrderByAggregateInput
    _min?: PushLogMinOrderByAggregateInput
  }

  export type PushLogScalarWhereWithAggregatesInput = {
    AND?: PushLogScalarWhereWithAggregatesInput | PushLogScalarWhereWithAggregatesInput[]
    OR?: PushLogScalarWhereWithAggregatesInput[]
    NOT?: PushLogScalarWhereWithAggregatesInput | PushLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PushLog"> | string
    jobId?: StringNullableWithAggregatesFilter<"PushLog"> | string | null
    userId?: StringWithAggregatesFilter<"PushLog"> | string
    token?: StringNullableWithAggregatesFilter<"PushLog"> | string | null
    title?: StringWithAggregatesFilter<"PushLog"> | string
    body?: StringWithAggregatesFilter<"PushLog"> | string
    data?: JsonNullableWithAggregatesFilter<"PushLog">
    status?: StringWithAggregatesFilter<"PushLog"> | string
    sentAt?: DateTimeNullableWithAggregatesFilter<"PushLog"> | Date | string | null
    error?: StringNullableWithAggregatesFilter<"PushLog"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"PushLog"> | Date | string
  }

  export type SmsLogWhereInput = {
    AND?: SmsLogWhereInput | SmsLogWhereInput[]
    OR?: SmsLogWhereInput[]
    NOT?: SmsLogWhereInput | SmsLogWhereInput[]
    id?: StringFilter<"SmsLog"> | string
    jobId?: StringNullableFilter<"SmsLog"> | string | null
    to?: StringFilter<"SmsLog"> | string
    from?: StringNullableFilter<"SmsLog"> | string | null
    body?: StringFilter<"SmsLog"> | string
    status?: StringFilter<"SmsLog"> | string
    provider?: StringNullableFilter<"SmsLog"> | string | null
    sentAt?: DateTimeNullableFilter<"SmsLog"> | Date | string | null
    error?: StringNullableFilter<"SmsLog"> | string | null
    createdAt?: DateTimeFilter<"SmsLog"> | Date | string
  }

  export type SmsLogOrderByWithRelationInput = {
    id?: SortOrder
    jobId?: SortOrderInput | SortOrder
    to?: SortOrder
    from?: SortOrderInput | SortOrder
    body?: SortOrder
    status?: SortOrder
    provider?: SortOrderInput | SortOrder
    sentAt?: SortOrderInput | SortOrder
    error?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type SmsLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SmsLogWhereInput | SmsLogWhereInput[]
    OR?: SmsLogWhereInput[]
    NOT?: SmsLogWhereInput | SmsLogWhereInput[]
    jobId?: StringNullableFilter<"SmsLog"> | string | null
    to?: StringFilter<"SmsLog"> | string
    from?: StringNullableFilter<"SmsLog"> | string | null
    body?: StringFilter<"SmsLog"> | string
    status?: StringFilter<"SmsLog"> | string
    provider?: StringNullableFilter<"SmsLog"> | string | null
    sentAt?: DateTimeNullableFilter<"SmsLog"> | Date | string | null
    error?: StringNullableFilter<"SmsLog"> | string | null
    createdAt?: DateTimeFilter<"SmsLog"> | Date | string
  }, "id">

  export type SmsLogOrderByWithAggregationInput = {
    id?: SortOrder
    jobId?: SortOrderInput | SortOrder
    to?: SortOrder
    from?: SortOrderInput | SortOrder
    body?: SortOrder
    status?: SortOrder
    provider?: SortOrderInput | SortOrder
    sentAt?: SortOrderInput | SortOrder
    error?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: SmsLogCountOrderByAggregateInput
    _max?: SmsLogMaxOrderByAggregateInput
    _min?: SmsLogMinOrderByAggregateInput
  }

  export type SmsLogScalarWhereWithAggregatesInput = {
    AND?: SmsLogScalarWhereWithAggregatesInput | SmsLogScalarWhereWithAggregatesInput[]
    OR?: SmsLogScalarWhereWithAggregatesInput[]
    NOT?: SmsLogScalarWhereWithAggregatesInput | SmsLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SmsLog"> | string
    jobId?: StringNullableWithAggregatesFilter<"SmsLog"> | string | null
    to?: StringWithAggregatesFilter<"SmsLog"> | string
    from?: StringNullableWithAggregatesFilter<"SmsLog"> | string | null
    body?: StringWithAggregatesFilter<"SmsLog"> | string
    status?: StringWithAggregatesFilter<"SmsLog"> | string
    provider?: StringNullableWithAggregatesFilter<"SmsLog"> | string | null
    sentAt?: DateTimeNullableWithAggregatesFilter<"SmsLog"> | Date | string | null
    error?: StringNullableWithAggregatesFilter<"SmsLog"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"SmsLog"> | Date | string
  }

  export type DeviceTokenWhereInput = {
    AND?: DeviceTokenWhereInput | DeviceTokenWhereInput[]
    OR?: DeviceTokenWhereInput[]
    NOT?: DeviceTokenWhereInput | DeviceTokenWhereInput[]
    id?: StringFilter<"DeviceToken"> | string
    userId?: StringFilter<"DeviceToken"> | string
    token?: StringFilter<"DeviceToken"> | string
    platform?: StringFilter<"DeviceToken"> | string
    isActive?: BoolFilter<"DeviceToken"> | boolean
    lastUsed?: DateTimeFilter<"DeviceToken"> | Date | string
    createdAt?: DateTimeFilter<"DeviceToken"> | Date | string
    updatedAt?: DateTimeFilter<"DeviceToken"> | Date | string
  }

  export type DeviceTokenOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    platform?: SortOrder
    isActive?: SortOrder
    lastUsed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DeviceTokenWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    AND?: DeviceTokenWhereInput | DeviceTokenWhereInput[]
    OR?: DeviceTokenWhereInput[]
    NOT?: DeviceTokenWhereInput | DeviceTokenWhereInput[]
    userId?: StringFilter<"DeviceToken"> | string
    platform?: StringFilter<"DeviceToken"> | string
    isActive?: BoolFilter<"DeviceToken"> | boolean
    lastUsed?: DateTimeFilter<"DeviceToken"> | Date | string
    createdAt?: DateTimeFilter<"DeviceToken"> | Date | string
    updatedAt?: DateTimeFilter<"DeviceToken"> | Date | string
  }, "id" | "token">

  export type DeviceTokenOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    platform?: SortOrder
    isActive?: SortOrder
    lastUsed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DeviceTokenCountOrderByAggregateInput
    _max?: DeviceTokenMaxOrderByAggregateInput
    _min?: DeviceTokenMinOrderByAggregateInput
  }

  export type DeviceTokenScalarWhereWithAggregatesInput = {
    AND?: DeviceTokenScalarWhereWithAggregatesInput | DeviceTokenScalarWhereWithAggregatesInput[]
    OR?: DeviceTokenScalarWhereWithAggregatesInput[]
    NOT?: DeviceTokenScalarWhereWithAggregatesInput | DeviceTokenScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DeviceToken"> | string
    userId?: StringWithAggregatesFilter<"DeviceToken"> | string
    token?: StringWithAggregatesFilter<"DeviceToken"> | string
    platform?: StringWithAggregatesFilter<"DeviceToken"> | string
    isActive?: BoolWithAggregatesFilter<"DeviceToken"> | boolean
    lastUsed?: DateTimeWithAggregatesFilter<"DeviceToken"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"DeviceToken"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"DeviceToken"> | Date | string
  }

  export type NotificationJobCreateInput = {
    id?: string
    type: $Enums.NotificationType
    status?: $Enums.JobStatus
    schoolId?: string | null
    userId?: string | null
    userEmail?: string | null
    userPhone?: string | null
    subject?: string | null
    title: string
    body: string
    data?: NullableJsonNullValueInput | InputJsonValue
    channels?: NotificationJobCreatechannelsInput | string[]
    scheduledFor?: Date | string | null
    processedAt?: Date | string | null
    attempts?: number
    maxAttempts?: number
    lastError?: string | null
    nextRetryAt?: Date | string | null
    priority?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationJobUncheckedCreateInput = {
    id?: string
    type: $Enums.NotificationType
    status?: $Enums.JobStatus
    schoolId?: string | null
    userId?: string | null
    userEmail?: string | null
    userPhone?: string | null
    subject?: string | null
    title: string
    body: string
    data?: NullableJsonNullValueInput | InputJsonValue
    channels?: NotificationJobCreatechannelsInput | string[]
    scheduledFor?: Date | string | null
    processedAt?: Date | string | null
    attempts?: number
    maxAttempts?: number
    lastError?: string | null
    nextRetryAt?: Date | string | null
    priority?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationJobUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    schoolId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    userEmail?: NullableStringFieldUpdateOperationsInput | string | null
    userPhone?: NullableStringFieldUpdateOperationsInput | string | null
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    data?: NullableJsonNullValueInput | InputJsonValue
    channels?: NotificationJobUpdatechannelsInput | string[]
    scheduledFor?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attempts?: IntFieldUpdateOperationsInput | number
    maxAttempts?: IntFieldUpdateOperationsInput | number
    lastError?: NullableStringFieldUpdateOperationsInput | string | null
    nextRetryAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    priority?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationJobUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    schoolId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    userEmail?: NullableStringFieldUpdateOperationsInput | string | null
    userPhone?: NullableStringFieldUpdateOperationsInput | string | null
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    data?: NullableJsonNullValueInput | InputJsonValue
    channels?: NotificationJobUpdatechannelsInput | string[]
    scheduledFor?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attempts?: IntFieldUpdateOperationsInput | number
    maxAttempts?: IntFieldUpdateOperationsInput | number
    lastError?: NullableStringFieldUpdateOperationsInput | string | null
    nextRetryAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    priority?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationJobCreateManyInput = {
    id?: string
    type: $Enums.NotificationType
    status?: $Enums.JobStatus
    schoolId?: string | null
    userId?: string | null
    userEmail?: string | null
    userPhone?: string | null
    subject?: string | null
    title: string
    body: string
    data?: NullableJsonNullValueInput | InputJsonValue
    channels?: NotificationJobCreatechannelsInput | string[]
    scheduledFor?: Date | string | null
    processedAt?: Date | string | null
    attempts?: number
    maxAttempts?: number
    lastError?: string | null
    nextRetryAt?: Date | string | null
    priority?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationJobUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    schoolId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    userEmail?: NullableStringFieldUpdateOperationsInput | string | null
    userPhone?: NullableStringFieldUpdateOperationsInput | string | null
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    data?: NullableJsonNullValueInput | InputJsonValue
    channels?: NotificationJobUpdatechannelsInput | string[]
    scheduledFor?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attempts?: IntFieldUpdateOperationsInput | number
    maxAttempts?: IntFieldUpdateOperationsInput | number
    lastError?: NullableStringFieldUpdateOperationsInput | string | null
    nextRetryAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    priority?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationJobUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    schoolId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    userEmail?: NullableStringFieldUpdateOperationsInput | string | null
    userPhone?: NullableStringFieldUpdateOperationsInput | string | null
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    data?: NullableJsonNullValueInput | InputJsonValue
    channels?: NotificationJobUpdatechannelsInput | string[]
    scheduledFor?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attempts?: IntFieldUpdateOperationsInput | number
    maxAttempts?: IntFieldUpdateOperationsInput | number
    lastError?: NullableStringFieldUpdateOperationsInput | string | null
    nextRetryAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    priority?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationTemplateCreateInput = {
    id?: string
    name: string
    type: string
    subject?: string | null
    title?: string | null
    body: string
    variables?: NotificationTemplateCreatevariablesInput | string[]
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationTemplateUncheckedCreateInput = {
    id?: string
    name: string
    type: string
    subject?: string | null
    title?: string | null
    body: string
    variables?: NotificationTemplateCreatevariablesInput | string[]
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationTemplateUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    body?: StringFieldUpdateOperationsInput | string
    variables?: NotificationTemplateUpdatevariablesInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationTemplateUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    body?: StringFieldUpdateOperationsInput | string
    variables?: NotificationTemplateUpdatevariablesInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationTemplateCreateManyInput = {
    id?: string
    name: string
    type: string
    subject?: string | null
    title?: string | null
    body: string
    variables?: NotificationTemplateCreatevariablesInput | string[]
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationTemplateUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    body?: StringFieldUpdateOperationsInput | string
    variables?: NotificationTemplateUpdatevariablesInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationTemplateUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    body?: StringFieldUpdateOperationsInput | string
    variables?: NotificationTemplateUpdatevariablesInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailLogCreateInput = {
    id?: string
    jobId?: string | null
    to: string
    from: string
    subject: string
    body: string
    status: string
    provider?: string | null
    sentAt?: Date | string | null
    error?: string | null
    createdAt?: Date | string
  }

  export type EmailLogUncheckedCreateInput = {
    id?: string
    jobId?: string | null
    to: string
    from: string
    subject: string
    body: string
    status: string
    provider?: string | null
    sentAt?: Date | string | null
    error?: string | null
    createdAt?: Date | string
  }

  export type EmailLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    jobId?: NullableStringFieldUpdateOperationsInput | string | null
    to?: StringFieldUpdateOperationsInput | string
    from?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    error?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    jobId?: NullableStringFieldUpdateOperationsInput | string | null
    to?: StringFieldUpdateOperationsInput | string
    from?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    error?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailLogCreateManyInput = {
    id?: string
    jobId?: string | null
    to: string
    from: string
    subject: string
    body: string
    status: string
    provider?: string | null
    sentAt?: Date | string | null
    error?: string | null
    createdAt?: Date | string
  }

  export type EmailLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    jobId?: NullableStringFieldUpdateOperationsInput | string | null
    to?: StringFieldUpdateOperationsInput | string
    from?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    error?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    jobId?: NullableStringFieldUpdateOperationsInput | string | null
    to?: StringFieldUpdateOperationsInput | string
    from?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    error?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PushLogCreateInput = {
    id?: string
    jobId?: string | null
    userId: string
    token?: string | null
    title: string
    body: string
    data?: NullableJsonNullValueInput | InputJsonValue
    status: string
    sentAt?: Date | string | null
    error?: string | null
    createdAt?: Date | string
  }

  export type PushLogUncheckedCreateInput = {
    id?: string
    jobId?: string | null
    userId: string
    token?: string | null
    title: string
    body: string
    data?: NullableJsonNullValueInput | InputJsonValue
    status: string
    sentAt?: Date | string | null
    error?: string | null
    createdAt?: Date | string
  }

  export type PushLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    jobId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    token?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    data?: NullableJsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    error?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PushLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    jobId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    token?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    data?: NullableJsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    error?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PushLogCreateManyInput = {
    id?: string
    jobId?: string | null
    userId: string
    token?: string | null
    title: string
    body: string
    data?: NullableJsonNullValueInput | InputJsonValue
    status: string
    sentAt?: Date | string | null
    error?: string | null
    createdAt?: Date | string
  }

  export type PushLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    jobId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    token?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    data?: NullableJsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    error?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PushLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    jobId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    token?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    data?: NullableJsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    error?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SmsLogCreateInput = {
    id?: string
    jobId?: string | null
    to: string
    from?: string | null
    body: string
    status: string
    provider?: string | null
    sentAt?: Date | string | null
    error?: string | null
    createdAt?: Date | string
  }

  export type SmsLogUncheckedCreateInput = {
    id?: string
    jobId?: string | null
    to: string
    from?: string | null
    body: string
    status: string
    provider?: string | null
    sentAt?: Date | string | null
    error?: string | null
    createdAt?: Date | string
  }

  export type SmsLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    jobId?: NullableStringFieldUpdateOperationsInput | string | null
    to?: StringFieldUpdateOperationsInput | string
    from?: NullableStringFieldUpdateOperationsInput | string | null
    body?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    error?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SmsLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    jobId?: NullableStringFieldUpdateOperationsInput | string | null
    to?: StringFieldUpdateOperationsInput | string
    from?: NullableStringFieldUpdateOperationsInput | string | null
    body?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    error?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SmsLogCreateManyInput = {
    id?: string
    jobId?: string | null
    to: string
    from?: string | null
    body: string
    status: string
    provider?: string | null
    sentAt?: Date | string | null
    error?: string | null
    createdAt?: Date | string
  }

  export type SmsLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    jobId?: NullableStringFieldUpdateOperationsInput | string | null
    to?: StringFieldUpdateOperationsInput | string
    from?: NullableStringFieldUpdateOperationsInput | string | null
    body?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    error?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SmsLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    jobId?: NullableStringFieldUpdateOperationsInput | string | null
    to?: StringFieldUpdateOperationsInput | string
    from?: NullableStringFieldUpdateOperationsInput | string | null
    body?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    error?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeviceTokenCreateInput = {
    id?: string
    userId: string
    token: string
    platform: string
    isActive?: boolean
    lastUsed?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DeviceTokenUncheckedCreateInput = {
    id?: string
    userId: string
    token: string
    platform: string
    isActive?: boolean
    lastUsed?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DeviceTokenUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastUsed?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeviceTokenUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastUsed?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeviceTokenCreateManyInput = {
    id?: string
    userId: string
    token: string
    platform: string
    isActive?: boolean
    lastUsed?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DeviceTokenUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastUsed?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeviceTokenUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastUsed?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type EnumNotificationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationTypeFilter<$PrismaModel> | $Enums.NotificationType
  }

  export type EnumJobStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.JobStatus | EnumJobStatusFieldRefInput<$PrismaModel>
    in?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumJobStatusFilter<$PrismaModel> | $Enums.JobStatus
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
  export type JsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type NotificationJobCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    status?: SortOrder
    schoolId?: SortOrder
    userId?: SortOrder
    userEmail?: SortOrder
    userPhone?: SortOrder
    subject?: SortOrder
    title?: SortOrder
    body?: SortOrder
    data?: SortOrder
    channels?: SortOrder
    scheduledFor?: SortOrder
    processedAt?: SortOrder
    attempts?: SortOrder
    maxAttempts?: SortOrder
    lastError?: SortOrder
    nextRetryAt?: SortOrder
    priority?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NotificationJobAvgOrderByAggregateInput = {
    attempts?: SortOrder
    maxAttempts?: SortOrder
    priority?: SortOrder
  }

  export type NotificationJobMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    status?: SortOrder
    schoolId?: SortOrder
    userId?: SortOrder
    userEmail?: SortOrder
    userPhone?: SortOrder
    subject?: SortOrder
    title?: SortOrder
    body?: SortOrder
    scheduledFor?: SortOrder
    processedAt?: SortOrder
    attempts?: SortOrder
    maxAttempts?: SortOrder
    lastError?: SortOrder
    nextRetryAt?: SortOrder
    priority?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NotificationJobMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    status?: SortOrder
    schoolId?: SortOrder
    userId?: SortOrder
    userEmail?: SortOrder
    userPhone?: SortOrder
    subject?: SortOrder
    title?: SortOrder
    body?: SortOrder
    scheduledFor?: SortOrder
    processedAt?: SortOrder
    attempts?: SortOrder
    maxAttempts?: SortOrder
    lastError?: SortOrder
    nextRetryAt?: SortOrder
    priority?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NotificationJobSumOrderByAggregateInput = {
    attempts?: SortOrder
    maxAttempts?: SortOrder
    priority?: SortOrder
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

  export type EnumNotificationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationTypeWithAggregatesFilter<$PrismaModel> | $Enums.NotificationType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNotificationTypeFilter<$PrismaModel>
    _max?: NestedEnumNotificationTypeFilter<$PrismaModel>
  }

  export type EnumJobStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.JobStatus | EnumJobStatusFieldRefInput<$PrismaModel>
    in?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumJobStatusWithAggregatesFilter<$PrismaModel> | $Enums.JobStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumJobStatusFilter<$PrismaModel>
    _max?: NestedEnumJobStatusFilter<$PrismaModel>
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
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NotificationTemplateCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    subject?: SortOrder
    title?: SortOrder
    body?: SortOrder
    variables?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NotificationTemplateMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    subject?: SortOrder
    title?: SortOrder
    body?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NotificationTemplateMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    subject?: SortOrder
    title?: SortOrder
    body?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EmailLogCountOrderByAggregateInput = {
    id?: SortOrder
    jobId?: SortOrder
    to?: SortOrder
    from?: SortOrder
    subject?: SortOrder
    body?: SortOrder
    status?: SortOrder
    provider?: SortOrder
    sentAt?: SortOrder
    error?: SortOrder
    createdAt?: SortOrder
  }

  export type EmailLogMaxOrderByAggregateInput = {
    id?: SortOrder
    jobId?: SortOrder
    to?: SortOrder
    from?: SortOrder
    subject?: SortOrder
    body?: SortOrder
    status?: SortOrder
    provider?: SortOrder
    sentAt?: SortOrder
    error?: SortOrder
    createdAt?: SortOrder
  }

  export type EmailLogMinOrderByAggregateInput = {
    id?: SortOrder
    jobId?: SortOrder
    to?: SortOrder
    from?: SortOrder
    subject?: SortOrder
    body?: SortOrder
    status?: SortOrder
    provider?: SortOrder
    sentAt?: SortOrder
    error?: SortOrder
    createdAt?: SortOrder
  }

  export type PushLogCountOrderByAggregateInput = {
    id?: SortOrder
    jobId?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    title?: SortOrder
    body?: SortOrder
    data?: SortOrder
    status?: SortOrder
    sentAt?: SortOrder
    error?: SortOrder
    createdAt?: SortOrder
  }

  export type PushLogMaxOrderByAggregateInput = {
    id?: SortOrder
    jobId?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    title?: SortOrder
    body?: SortOrder
    status?: SortOrder
    sentAt?: SortOrder
    error?: SortOrder
    createdAt?: SortOrder
  }

  export type PushLogMinOrderByAggregateInput = {
    id?: SortOrder
    jobId?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    title?: SortOrder
    body?: SortOrder
    status?: SortOrder
    sentAt?: SortOrder
    error?: SortOrder
    createdAt?: SortOrder
  }

  export type SmsLogCountOrderByAggregateInput = {
    id?: SortOrder
    jobId?: SortOrder
    to?: SortOrder
    from?: SortOrder
    body?: SortOrder
    status?: SortOrder
    provider?: SortOrder
    sentAt?: SortOrder
    error?: SortOrder
    createdAt?: SortOrder
  }

  export type SmsLogMaxOrderByAggregateInput = {
    id?: SortOrder
    jobId?: SortOrder
    to?: SortOrder
    from?: SortOrder
    body?: SortOrder
    status?: SortOrder
    provider?: SortOrder
    sentAt?: SortOrder
    error?: SortOrder
    createdAt?: SortOrder
  }

  export type SmsLogMinOrderByAggregateInput = {
    id?: SortOrder
    jobId?: SortOrder
    to?: SortOrder
    from?: SortOrder
    body?: SortOrder
    status?: SortOrder
    provider?: SortOrder
    sentAt?: SortOrder
    error?: SortOrder
    createdAt?: SortOrder
  }

  export type DeviceTokenCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    platform?: SortOrder
    isActive?: SortOrder
    lastUsed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DeviceTokenMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    platform?: SortOrder
    isActive?: SortOrder
    lastUsed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DeviceTokenMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    platform?: SortOrder
    isActive?: SortOrder
    lastUsed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NotificationJobCreatechannelsInput = {
    set: string[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumNotificationTypeFieldUpdateOperationsInput = {
    set?: $Enums.NotificationType
  }

  export type EnumJobStatusFieldUpdateOperationsInput = {
    set?: $Enums.JobStatus
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NotificationJobUpdatechannelsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NotificationTemplateCreatevariablesInput = {
    set: string[]
  }

  export type NotificationTemplateUpdatevariablesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
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

  export type NestedEnumNotificationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationTypeFilter<$PrismaModel> | $Enums.NotificationType
  }

  export type NestedEnumJobStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.JobStatus | EnumJobStatusFieldRefInput<$PrismaModel>
    in?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumJobStatusFilter<$PrismaModel> | $Enums.JobStatus
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

  export type NestedEnumNotificationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationTypeWithAggregatesFilter<$PrismaModel> | $Enums.NotificationType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNotificationTypeFilter<$PrismaModel>
    _max?: NestedEnumNotificationTypeFilter<$PrismaModel>
  }

  export type NestedEnumJobStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.JobStatus | EnumJobStatusFieldRefInput<$PrismaModel>
    in?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumJobStatusWithAggregatesFilter<$PrismaModel> | $Enums.JobStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumJobStatusFilter<$PrismaModel>
    _max?: NestedEnumJobStatusFilter<$PrismaModel>
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
  export type NestedJsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use NotificationJobDefaultArgs instead
     */
    export type NotificationJobArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = NotificationJobDefaultArgs<ExtArgs>
    /**
     * @deprecated Use NotificationTemplateDefaultArgs instead
     */
    export type NotificationTemplateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = NotificationTemplateDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EmailLogDefaultArgs instead
     */
    export type EmailLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EmailLogDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PushLogDefaultArgs instead
     */
    export type PushLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PushLogDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SmsLogDefaultArgs instead
     */
    export type SmsLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SmsLogDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DeviceTokenDefaultArgs instead
     */
    export type DeviceTokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DeviceTokenDefaultArgs<ExtArgs>

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