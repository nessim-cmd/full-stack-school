
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
 * Model SupportTicket
 * 
 */
export type SupportTicket = $Result.DefaultSelection<Prisma.$SupportTicketPayload>
/**
 * Model TicketMessage
 * 
 */
export type TicketMessage = $Result.DefaultSelection<Prisma.$TicketMessagePayload>
/**
 * Model TicketAttachment
 * 
 */
export type TicketAttachment = $Result.DefaultSelection<Prisma.$TicketAttachmentPayload>
/**
 * Model KnowledgeBase
 * 
 */
export type KnowledgeBase = $Result.DefaultSelection<Prisma.$KnowledgeBasePayload>
/**
 * Model FAQ
 * 
 */
export type FAQ = $Result.DefaultSelection<Prisma.$FAQPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const TicketCategory: {
  GENERAL: 'GENERAL',
  BILLING: 'BILLING',
  TECHNICAL: 'TECHNICAL',
  FEATURE_REQUEST: 'FEATURE_REQUEST',
  BUG_REPORT: 'BUG_REPORT',
  ACCOUNT: 'ACCOUNT',
  INTEGRATION: 'INTEGRATION',
  OTHER: 'OTHER'
};

export type TicketCategory = (typeof TicketCategory)[keyof typeof TicketCategory]


export const TicketPriority: {
  LOW: 'LOW',
  MEDIUM: 'MEDIUM',
  HIGH: 'HIGH',
  URGENT: 'URGENT'
};

export type TicketPriority = (typeof TicketPriority)[keyof typeof TicketPriority]


export const TicketStatus: {
  OPEN: 'OPEN',
  IN_PROGRESS: 'IN_PROGRESS',
  WAITING_FOR_CUSTOMER: 'WAITING_FOR_CUSTOMER',
  WAITING_FOR_THIRD_PARTY: 'WAITING_FOR_THIRD_PARTY',
  RESOLVED: 'RESOLVED',
  CLOSED: 'CLOSED'
};

export type TicketStatus = (typeof TicketStatus)[keyof typeof TicketStatus]

}

export type TicketCategory = $Enums.TicketCategory

export const TicketCategory: typeof $Enums.TicketCategory

export type TicketPriority = $Enums.TicketPriority

export const TicketPriority: typeof $Enums.TicketPriority

export type TicketStatus = $Enums.TicketStatus

export const TicketStatus: typeof $Enums.TicketStatus

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more SupportTickets
 * const supportTickets = await prisma.supportTicket.findMany()
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
   * // Fetch zero or more SupportTickets
   * const supportTickets = await prisma.supportTicket.findMany()
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
   * `prisma.supportTicket`: Exposes CRUD operations for the **SupportTicket** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SupportTickets
    * const supportTickets = await prisma.supportTicket.findMany()
    * ```
    */
  get supportTicket(): Prisma.SupportTicketDelegate<ExtArgs>;

  /**
   * `prisma.ticketMessage`: Exposes CRUD operations for the **TicketMessage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TicketMessages
    * const ticketMessages = await prisma.ticketMessage.findMany()
    * ```
    */
  get ticketMessage(): Prisma.TicketMessageDelegate<ExtArgs>;

  /**
   * `prisma.ticketAttachment`: Exposes CRUD operations for the **TicketAttachment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TicketAttachments
    * const ticketAttachments = await prisma.ticketAttachment.findMany()
    * ```
    */
  get ticketAttachment(): Prisma.TicketAttachmentDelegate<ExtArgs>;

  /**
   * `prisma.knowledgeBase`: Exposes CRUD operations for the **KnowledgeBase** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more KnowledgeBases
    * const knowledgeBases = await prisma.knowledgeBase.findMany()
    * ```
    */
  get knowledgeBase(): Prisma.KnowledgeBaseDelegate<ExtArgs>;

  /**
   * `prisma.fAQ`: Exposes CRUD operations for the **FAQ** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FAQS
    * const fAQS = await prisma.fAQ.findMany()
    * ```
    */
  get fAQ(): Prisma.FAQDelegate<ExtArgs>;
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
    SupportTicket: 'SupportTicket',
    TicketMessage: 'TicketMessage',
    TicketAttachment: 'TicketAttachment',
    KnowledgeBase: 'KnowledgeBase',
    FAQ: 'FAQ'
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
      modelProps: "supportTicket" | "ticketMessage" | "ticketAttachment" | "knowledgeBase" | "fAQ"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      SupportTicket: {
        payload: Prisma.$SupportTicketPayload<ExtArgs>
        fields: Prisma.SupportTicketFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SupportTicketFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupportTicketPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SupportTicketFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupportTicketPayload>
          }
          findFirst: {
            args: Prisma.SupportTicketFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupportTicketPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SupportTicketFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupportTicketPayload>
          }
          findMany: {
            args: Prisma.SupportTicketFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupportTicketPayload>[]
          }
          create: {
            args: Prisma.SupportTicketCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupportTicketPayload>
          }
          createMany: {
            args: Prisma.SupportTicketCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SupportTicketCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupportTicketPayload>[]
          }
          delete: {
            args: Prisma.SupportTicketDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupportTicketPayload>
          }
          update: {
            args: Prisma.SupportTicketUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupportTicketPayload>
          }
          deleteMany: {
            args: Prisma.SupportTicketDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SupportTicketUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SupportTicketUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupportTicketPayload>
          }
          aggregate: {
            args: Prisma.SupportTicketAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSupportTicket>
          }
          groupBy: {
            args: Prisma.SupportTicketGroupByArgs<ExtArgs>
            result: $Utils.Optional<SupportTicketGroupByOutputType>[]
          }
          count: {
            args: Prisma.SupportTicketCountArgs<ExtArgs>
            result: $Utils.Optional<SupportTicketCountAggregateOutputType> | number
          }
        }
      }
      TicketMessage: {
        payload: Prisma.$TicketMessagePayload<ExtArgs>
        fields: Prisma.TicketMessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TicketMessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketMessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TicketMessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketMessagePayload>
          }
          findFirst: {
            args: Prisma.TicketMessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketMessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TicketMessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketMessagePayload>
          }
          findMany: {
            args: Prisma.TicketMessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketMessagePayload>[]
          }
          create: {
            args: Prisma.TicketMessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketMessagePayload>
          }
          createMany: {
            args: Prisma.TicketMessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TicketMessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketMessagePayload>[]
          }
          delete: {
            args: Prisma.TicketMessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketMessagePayload>
          }
          update: {
            args: Prisma.TicketMessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketMessagePayload>
          }
          deleteMany: {
            args: Prisma.TicketMessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TicketMessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TicketMessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketMessagePayload>
          }
          aggregate: {
            args: Prisma.TicketMessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTicketMessage>
          }
          groupBy: {
            args: Prisma.TicketMessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<TicketMessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.TicketMessageCountArgs<ExtArgs>
            result: $Utils.Optional<TicketMessageCountAggregateOutputType> | number
          }
        }
      }
      TicketAttachment: {
        payload: Prisma.$TicketAttachmentPayload<ExtArgs>
        fields: Prisma.TicketAttachmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TicketAttachmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketAttachmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TicketAttachmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketAttachmentPayload>
          }
          findFirst: {
            args: Prisma.TicketAttachmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketAttachmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TicketAttachmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketAttachmentPayload>
          }
          findMany: {
            args: Prisma.TicketAttachmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketAttachmentPayload>[]
          }
          create: {
            args: Prisma.TicketAttachmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketAttachmentPayload>
          }
          createMany: {
            args: Prisma.TicketAttachmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TicketAttachmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketAttachmentPayload>[]
          }
          delete: {
            args: Prisma.TicketAttachmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketAttachmentPayload>
          }
          update: {
            args: Prisma.TicketAttachmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketAttachmentPayload>
          }
          deleteMany: {
            args: Prisma.TicketAttachmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TicketAttachmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TicketAttachmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketAttachmentPayload>
          }
          aggregate: {
            args: Prisma.TicketAttachmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTicketAttachment>
          }
          groupBy: {
            args: Prisma.TicketAttachmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<TicketAttachmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.TicketAttachmentCountArgs<ExtArgs>
            result: $Utils.Optional<TicketAttachmentCountAggregateOutputType> | number
          }
        }
      }
      KnowledgeBase: {
        payload: Prisma.$KnowledgeBasePayload<ExtArgs>
        fields: Prisma.KnowledgeBaseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.KnowledgeBaseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KnowledgeBasePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.KnowledgeBaseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KnowledgeBasePayload>
          }
          findFirst: {
            args: Prisma.KnowledgeBaseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KnowledgeBasePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.KnowledgeBaseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KnowledgeBasePayload>
          }
          findMany: {
            args: Prisma.KnowledgeBaseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KnowledgeBasePayload>[]
          }
          create: {
            args: Prisma.KnowledgeBaseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KnowledgeBasePayload>
          }
          createMany: {
            args: Prisma.KnowledgeBaseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.KnowledgeBaseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KnowledgeBasePayload>[]
          }
          delete: {
            args: Prisma.KnowledgeBaseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KnowledgeBasePayload>
          }
          update: {
            args: Prisma.KnowledgeBaseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KnowledgeBasePayload>
          }
          deleteMany: {
            args: Prisma.KnowledgeBaseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.KnowledgeBaseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.KnowledgeBaseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KnowledgeBasePayload>
          }
          aggregate: {
            args: Prisma.KnowledgeBaseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateKnowledgeBase>
          }
          groupBy: {
            args: Prisma.KnowledgeBaseGroupByArgs<ExtArgs>
            result: $Utils.Optional<KnowledgeBaseGroupByOutputType>[]
          }
          count: {
            args: Prisma.KnowledgeBaseCountArgs<ExtArgs>
            result: $Utils.Optional<KnowledgeBaseCountAggregateOutputType> | number
          }
        }
      }
      FAQ: {
        payload: Prisma.$FAQPayload<ExtArgs>
        fields: Prisma.FAQFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FAQFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FAQPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FAQFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FAQPayload>
          }
          findFirst: {
            args: Prisma.FAQFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FAQPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FAQFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FAQPayload>
          }
          findMany: {
            args: Prisma.FAQFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FAQPayload>[]
          }
          create: {
            args: Prisma.FAQCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FAQPayload>
          }
          createMany: {
            args: Prisma.FAQCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FAQCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FAQPayload>[]
          }
          delete: {
            args: Prisma.FAQDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FAQPayload>
          }
          update: {
            args: Prisma.FAQUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FAQPayload>
          }
          deleteMany: {
            args: Prisma.FAQDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FAQUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FAQUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FAQPayload>
          }
          aggregate: {
            args: Prisma.FAQAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFAQ>
          }
          groupBy: {
            args: Prisma.FAQGroupByArgs<ExtArgs>
            result: $Utils.Optional<FAQGroupByOutputType>[]
          }
          count: {
            args: Prisma.FAQCountArgs<ExtArgs>
            result: $Utils.Optional<FAQCountAggregateOutputType> | number
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
   * Count Type SupportTicketCountOutputType
   */

  export type SupportTicketCountOutputType = {
    messages: number
    attachments: number
  }

  export type SupportTicketCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messages?: boolean | SupportTicketCountOutputTypeCountMessagesArgs
    attachments?: boolean | SupportTicketCountOutputTypeCountAttachmentsArgs
  }

  // Custom InputTypes
  /**
   * SupportTicketCountOutputType without action
   */
  export type SupportTicketCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportTicketCountOutputType
     */
    select?: SupportTicketCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SupportTicketCountOutputType without action
   */
  export type SupportTicketCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketMessageWhereInput
  }

  /**
   * SupportTicketCountOutputType without action
   */
  export type SupportTicketCountOutputTypeCountAttachmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketAttachmentWhereInput
  }


  /**
   * Models
   */

  /**
   * Model SupportTicket
   */

  export type AggregateSupportTicket = {
    _count: SupportTicketCountAggregateOutputType | null
    _avg: SupportTicketAvgAggregateOutputType | null
    _sum: SupportTicketSumAggregateOutputType | null
    _min: SupportTicketMinAggregateOutputType | null
    _max: SupportTicketMaxAggregateOutputType | null
  }

  export type SupportTicketAvgAggregateOutputType = {
    rating: number | null
  }

  export type SupportTicketSumAggregateOutputType = {
    rating: number | null
  }

  export type SupportTicketMinAggregateOutputType = {
    id: string | null
    ticketNo: string | null
    schoolId: string | null
    userId: string | null
    userType: string | null
    userName: string | null
    userEmail: string | null
    subject: string | null
    description: string | null
    category: $Enums.TicketCategory | null
    priority: $Enums.TicketPriority | null
    status: $Enums.TicketStatus | null
    assignedTo: string | null
    assignedAt: Date | null
    resolvedAt: Date | null
    resolution: string | null
    rating: number | null
    feedback: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SupportTicketMaxAggregateOutputType = {
    id: string | null
    ticketNo: string | null
    schoolId: string | null
    userId: string | null
    userType: string | null
    userName: string | null
    userEmail: string | null
    subject: string | null
    description: string | null
    category: $Enums.TicketCategory | null
    priority: $Enums.TicketPriority | null
    status: $Enums.TicketStatus | null
    assignedTo: string | null
    assignedAt: Date | null
    resolvedAt: Date | null
    resolution: string | null
    rating: number | null
    feedback: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SupportTicketCountAggregateOutputType = {
    id: number
    ticketNo: number
    schoolId: number
    userId: number
    userType: number
    userName: number
    userEmail: number
    subject: number
    description: number
    category: number
    priority: number
    status: number
    assignedTo: number
    assignedAt: number
    resolvedAt: number
    resolution: number
    rating: number
    feedback: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SupportTicketAvgAggregateInputType = {
    rating?: true
  }

  export type SupportTicketSumAggregateInputType = {
    rating?: true
  }

  export type SupportTicketMinAggregateInputType = {
    id?: true
    ticketNo?: true
    schoolId?: true
    userId?: true
    userType?: true
    userName?: true
    userEmail?: true
    subject?: true
    description?: true
    category?: true
    priority?: true
    status?: true
    assignedTo?: true
    assignedAt?: true
    resolvedAt?: true
    resolution?: true
    rating?: true
    feedback?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SupportTicketMaxAggregateInputType = {
    id?: true
    ticketNo?: true
    schoolId?: true
    userId?: true
    userType?: true
    userName?: true
    userEmail?: true
    subject?: true
    description?: true
    category?: true
    priority?: true
    status?: true
    assignedTo?: true
    assignedAt?: true
    resolvedAt?: true
    resolution?: true
    rating?: true
    feedback?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SupportTicketCountAggregateInputType = {
    id?: true
    ticketNo?: true
    schoolId?: true
    userId?: true
    userType?: true
    userName?: true
    userEmail?: true
    subject?: true
    description?: true
    category?: true
    priority?: true
    status?: true
    assignedTo?: true
    assignedAt?: true
    resolvedAt?: true
    resolution?: true
    rating?: true
    feedback?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SupportTicketAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SupportTicket to aggregate.
     */
    where?: SupportTicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SupportTickets to fetch.
     */
    orderBy?: SupportTicketOrderByWithRelationInput | SupportTicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SupportTicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SupportTickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SupportTickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SupportTickets
    **/
    _count?: true | SupportTicketCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SupportTicketAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SupportTicketSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SupportTicketMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SupportTicketMaxAggregateInputType
  }

  export type GetSupportTicketAggregateType<T extends SupportTicketAggregateArgs> = {
        [P in keyof T & keyof AggregateSupportTicket]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSupportTicket[P]>
      : GetScalarType<T[P], AggregateSupportTicket[P]>
  }




  export type SupportTicketGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SupportTicketWhereInput
    orderBy?: SupportTicketOrderByWithAggregationInput | SupportTicketOrderByWithAggregationInput[]
    by: SupportTicketScalarFieldEnum[] | SupportTicketScalarFieldEnum
    having?: SupportTicketScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SupportTicketCountAggregateInputType | true
    _avg?: SupportTicketAvgAggregateInputType
    _sum?: SupportTicketSumAggregateInputType
    _min?: SupportTicketMinAggregateInputType
    _max?: SupportTicketMaxAggregateInputType
  }

  export type SupportTicketGroupByOutputType = {
    id: string
    ticketNo: string
    schoolId: string | null
    userId: string
    userType: string
    userName: string
    userEmail: string
    subject: string
    description: string
    category: $Enums.TicketCategory
    priority: $Enums.TicketPriority
    status: $Enums.TicketStatus
    assignedTo: string | null
    assignedAt: Date | null
    resolvedAt: Date | null
    resolution: string | null
    rating: number | null
    feedback: string | null
    createdAt: Date
    updatedAt: Date
    _count: SupportTicketCountAggregateOutputType | null
    _avg: SupportTicketAvgAggregateOutputType | null
    _sum: SupportTicketSumAggregateOutputType | null
    _min: SupportTicketMinAggregateOutputType | null
    _max: SupportTicketMaxAggregateOutputType | null
  }

  type GetSupportTicketGroupByPayload<T extends SupportTicketGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SupportTicketGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SupportTicketGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SupportTicketGroupByOutputType[P]>
            : GetScalarType<T[P], SupportTicketGroupByOutputType[P]>
        }
      >
    >


  export type SupportTicketSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ticketNo?: boolean
    schoolId?: boolean
    userId?: boolean
    userType?: boolean
    userName?: boolean
    userEmail?: boolean
    subject?: boolean
    description?: boolean
    category?: boolean
    priority?: boolean
    status?: boolean
    assignedTo?: boolean
    assignedAt?: boolean
    resolvedAt?: boolean
    resolution?: boolean
    rating?: boolean
    feedback?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    messages?: boolean | SupportTicket$messagesArgs<ExtArgs>
    attachments?: boolean | SupportTicket$attachmentsArgs<ExtArgs>
    _count?: boolean | SupportTicketCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["supportTicket"]>

  export type SupportTicketSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ticketNo?: boolean
    schoolId?: boolean
    userId?: boolean
    userType?: boolean
    userName?: boolean
    userEmail?: boolean
    subject?: boolean
    description?: boolean
    category?: boolean
    priority?: boolean
    status?: boolean
    assignedTo?: boolean
    assignedAt?: boolean
    resolvedAt?: boolean
    resolution?: boolean
    rating?: boolean
    feedback?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["supportTicket"]>

  export type SupportTicketSelectScalar = {
    id?: boolean
    ticketNo?: boolean
    schoolId?: boolean
    userId?: boolean
    userType?: boolean
    userName?: boolean
    userEmail?: boolean
    subject?: boolean
    description?: boolean
    category?: boolean
    priority?: boolean
    status?: boolean
    assignedTo?: boolean
    assignedAt?: boolean
    resolvedAt?: boolean
    resolution?: boolean
    rating?: boolean
    feedback?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SupportTicketInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messages?: boolean | SupportTicket$messagesArgs<ExtArgs>
    attachments?: boolean | SupportTicket$attachmentsArgs<ExtArgs>
    _count?: boolean | SupportTicketCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SupportTicketIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SupportTicketPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SupportTicket"
    objects: {
      messages: Prisma.$TicketMessagePayload<ExtArgs>[]
      attachments: Prisma.$TicketAttachmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      ticketNo: string
      schoolId: string | null
      userId: string
      userType: string
      userName: string
      userEmail: string
      subject: string
      description: string
      category: $Enums.TicketCategory
      priority: $Enums.TicketPriority
      status: $Enums.TicketStatus
      assignedTo: string | null
      assignedAt: Date | null
      resolvedAt: Date | null
      resolution: string | null
      rating: number | null
      feedback: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["supportTicket"]>
    composites: {}
  }

  type SupportTicketGetPayload<S extends boolean | null | undefined | SupportTicketDefaultArgs> = $Result.GetResult<Prisma.$SupportTicketPayload, S>

  type SupportTicketCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SupportTicketFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SupportTicketCountAggregateInputType | true
    }

  export interface SupportTicketDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SupportTicket'], meta: { name: 'SupportTicket' } }
    /**
     * Find zero or one SupportTicket that matches the filter.
     * @param {SupportTicketFindUniqueArgs} args - Arguments to find a SupportTicket
     * @example
     * // Get one SupportTicket
     * const supportTicket = await prisma.supportTicket.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SupportTicketFindUniqueArgs>(args: SelectSubset<T, SupportTicketFindUniqueArgs<ExtArgs>>): Prisma__SupportTicketClient<$Result.GetResult<Prisma.$SupportTicketPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one SupportTicket that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SupportTicketFindUniqueOrThrowArgs} args - Arguments to find a SupportTicket
     * @example
     * // Get one SupportTicket
     * const supportTicket = await prisma.supportTicket.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SupportTicketFindUniqueOrThrowArgs>(args: SelectSubset<T, SupportTicketFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SupportTicketClient<$Result.GetResult<Prisma.$SupportTicketPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first SupportTicket that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupportTicketFindFirstArgs} args - Arguments to find a SupportTicket
     * @example
     * // Get one SupportTicket
     * const supportTicket = await prisma.supportTicket.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SupportTicketFindFirstArgs>(args?: SelectSubset<T, SupportTicketFindFirstArgs<ExtArgs>>): Prisma__SupportTicketClient<$Result.GetResult<Prisma.$SupportTicketPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first SupportTicket that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupportTicketFindFirstOrThrowArgs} args - Arguments to find a SupportTicket
     * @example
     * // Get one SupportTicket
     * const supportTicket = await prisma.supportTicket.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SupportTicketFindFirstOrThrowArgs>(args?: SelectSubset<T, SupportTicketFindFirstOrThrowArgs<ExtArgs>>): Prisma__SupportTicketClient<$Result.GetResult<Prisma.$SupportTicketPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more SupportTickets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupportTicketFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SupportTickets
     * const supportTickets = await prisma.supportTicket.findMany()
     * 
     * // Get first 10 SupportTickets
     * const supportTickets = await prisma.supportTicket.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const supportTicketWithIdOnly = await prisma.supportTicket.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SupportTicketFindManyArgs>(args?: SelectSubset<T, SupportTicketFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupportTicketPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a SupportTicket.
     * @param {SupportTicketCreateArgs} args - Arguments to create a SupportTicket.
     * @example
     * // Create one SupportTicket
     * const SupportTicket = await prisma.supportTicket.create({
     *   data: {
     *     // ... data to create a SupportTicket
     *   }
     * })
     * 
     */
    create<T extends SupportTicketCreateArgs>(args: SelectSubset<T, SupportTicketCreateArgs<ExtArgs>>): Prisma__SupportTicketClient<$Result.GetResult<Prisma.$SupportTicketPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many SupportTickets.
     * @param {SupportTicketCreateManyArgs} args - Arguments to create many SupportTickets.
     * @example
     * // Create many SupportTickets
     * const supportTicket = await prisma.supportTicket.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SupportTicketCreateManyArgs>(args?: SelectSubset<T, SupportTicketCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SupportTickets and returns the data saved in the database.
     * @param {SupportTicketCreateManyAndReturnArgs} args - Arguments to create many SupportTickets.
     * @example
     * // Create many SupportTickets
     * const supportTicket = await prisma.supportTicket.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SupportTickets and only return the `id`
     * const supportTicketWithIdOnly = await prisma.supportTicket.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SupportTicketCreateManyAndReturnArgs>(args?: SelectSubset<T, SupportTicketCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupportTicketPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a SupportTicket.
     * @param {SupportTicketDeleteArgs} args - Arguments to delete one SupportTicket.
     * @example
     * // Delete one SupportTicket
     * const SupportTicket = await prisma.supportTicket.delete({
     *   where: {
     *     // ... filter to delete one SupportTicket
     *   }
     * })
     * 
     */
    delete<T extends SupportTicketDeleteArgs>(args: SelectSubset<T, SupportTicketDeleteArgs<ExtArgs>>): Prisma__SupportTicketClient<$Result.GetResult<Prisma.$SupportTicketPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one SupportTicket.
     * @param {SupportTicketUpdateArgs} args - Arguments to update one SupportTicket.
     * @example
     * // Update one SupportTicket
     * const supportTicket = await prisma.supportTicket.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SupportTicketUpdateArgs>(args: SelectSubset<T, SupportTicketUpdateArgs<ExtArgs>>): Prisma__SupportTicketClient<$Result.GetResult<Prisma.$SupportTicketPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more SupportTickets.
     * @param {SupportTicketDeleteManyArgs} args - Arguments to filter SupportTickets to delete.
     * @example
     * // Delete a few SupportTickets
     * const { count } = await prisma.supportTicket.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SupportTicketDeleteManyArgs>(args?: SelectSubset<T, SupportTicketDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SupportTickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupportTicketUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SupportTickets
     * const supportTicket = await prisma.supportTicket.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SupportTicketUpdateManyArgs>(args: SelectSubset<T, SupportTicketUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SupportTicket.
     * @param {SupportTicketUpsertArgs} args - Arguments to update or create a SupportTicket.
     * @example
     * // Update or create a SupportTicket
     * const supportTicket = await prisma.supportTicket.upsert({
     *   create: {
     *     // ... data to create a SupportTicket
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SupportTicket we want to update
     *   }
     * })
     */
    upsert<T extends SupportTicketUpsertArgs>(args: SelectSubset<T, SupportTicketUpsertArgs<ExtArgs>>): Prisma__SupportTicketClient<$Result.GetResult<Prisma.$SupportTicketPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of SupportTickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupportTicketCountArgs} args - Arguments to filter SupportTickets to count.
     * @example
     * // Count the number of SupportTickets
     * const count = await prisma.supportTicket.count({
     *   where: {
     *     // ... the filter for the SupportTickets we want to count
     *   }
     * })
    **/
    count<T extends SupportTicketCountArgs>(
      args?: Subset<T, SupportTicketCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SupportTicketCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SupportTicket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupportTicketAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SupportTicketAggregateArgs>(args: Subset<T, SupportTicketAggregateArgs>): Prisma.PrismaPromise<GetSupportTicketAggregateType<T>>

    /**
     * Group by SupportTicket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupportTicketGroupByArgs} args - Group by arguments.
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
      T extends SupportTicketGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SupportTicketGroupByArgs['orderBy'] }
        : { orderBy?: SupportTicketGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SupportTicketGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSupportTicketGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SupportTicket model
   */
  readonly fields: SupportTicketFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SupportTicket.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SupportTicketClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    messages<T extends SupportTicket$messagesArgs<ExtArgs> = {}>(args?: Subset<T, SupportTicket$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketMessagePayload<ExtArgs>, T, "findMany"> | Null>
    attachments<T extends SupportTicket$attachmentsArgs<ExtArgs> = {}>(args?: Subset<T, SupportTicket$attachmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketAttachmentPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the SupportTicket model
   */ 
  interface SupportTicketFieldRefs {
    readonly id: FieldRef<"SupportTicket", 'String'>
    readonly ticketNo: FieldRef<"SupportTicket", 'String'>
    readonly schoolId: FieldRef<"SupportTicket", 'String'>
    readonly userId: FieldRef<"SupportTicket", 'String'>
    readonly userType: FieldRef<"SupportTicket", 'String'>
    readonly userName: FieldRef<"SupportTicket", 'String'>
    readonly userEmail: FieldRef<"SupportTicket", 'String'>
    readonly subject: FieldRef<"SupportTicket", 'String'>
    readonly description: FieldRef<"SupportTicket", 'String'>
    readonly category: FieldRef<"SupportTicket", 'TicketCategory'>
    readonly priority: FieldRef<"SupportTicket", 'TicketPriority'>
    readonly status: FieldRef<"SupportTicket", 'TicketStatus'>
    readonly assignedTo: FieldRef<"SupportTicket", 'String'>
    readonly assignedAt: FieldRef<"SupportTicket", 'DateTime'>
    readonly resolvedAt: FieldRef<"SupportTicket", 'DateTime'>
    readonly resolution: FieldRef<"SupportTicket", 'String'>
    readonly rating: FieldRef<"SupportTicket", 'Int'>
    readonly feedback: FieldRef<"SupportTicket", 'String'>
    readonly createdAt: FieldRef<"SupportTicket", 'DateTime'>
    readonly updatedAt: FieldRef<"SupportTicket", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SupportTicket findUnique
   */
  export type SupportTicketFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportTicket
     */
    select?: SupportTicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupportTicketInclude<ExtArgs> | null
    /**
     * Filter, which SupportTicket to fetch.
     */
    where: SupportTicketWhereUniqueInput
  }

  /**
   * SupportTicket findUniqueOrThrow
   */
  export type SupportTicketFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportTicket
     */
    select?: SupportTicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupportTicketInclude<ExtArgs> | null
    /**
     * Filter, which SupportTicket to fetch.
     */
    where: SupportTicketWhereUniqueInput
  }

  /**
   * SupportTicket findFirst
   */
  export type SupportTicketFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportTicket
     */
    select?: SupportTicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupportTicketInclude<ExtArgs> | null
    /**
     * Filter, which SupportTicket to fetch.
     */
    where?: SupportTicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SupportTickets to fetch.
     */
    orderBy?: SupportTicketOrderByWithRelationInput | SupportTicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SupportTickets.
     */
    cursor?: SupportTicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SupportTickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SupportTickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SupportTickets.
     */
    distinct?: SupportTicketScalarFieldEnum | SupportTicketScalarFieldEnum[]
  }

  /**
   * SupportTicket findFirstOrThrow
   */
  export type SupportTicketFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportTicket
     */
    select?: SupportTicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupportTicketInclude<ExtArgs> | null
    /**
     * Filter, which SupportTicket to fetch.
     */
    where?: SupportTicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SupportTickets to fetch.
     */
    orderBy?: SupportTicketOrderByWithRelationInput | SupportTicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SupportTickets.
     */
    cursor?: SupportTicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SupportTickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SupportTickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SupportTickets.
     */
    distinct?: SupportTicketScalarFieldEnum | SupportTicketScalarFieldEnum[]
  }

  /**
   * SupportTicket findMany
   */
  export type SupportTicketFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportTicket
     */
    select?: SupportTicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupportTicketInclude<ExtArgs> | null
    /**
     * Filter, which SupportTickets to fetch.
     */
    where?: SupportTicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SupportTickets to fetch.
     */
    orderBy?: SupportTicketOrderByWithRelationInput | SupportTicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SupportTickets.
     */
    cursor?: SupportTicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SupportTickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SupportTickets.
     */
    skip?: number
    distinct?: SupportTicketScalarFieldEnum | SupportTicketScalarFieldEnum[]
  }

  /**
   * SupportTicket create
   */
  export type SupportTicketCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportTicket
     */
    select?: SupportTicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupportTicketInclude<ExtArgs> | null
    /**
     * The data needed to create a SupportTicket.
     */
    data: XOR<SupportTicketCreateInput, SupportTicketUncheckedCreateInput>
  }

  /**
   * SupportTicket createMany
   */
  export type SupportTicketCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SupportTickets.
     */
    data: SupportTicketCreateManyInput | SupportTicketCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SupportTicket createManyAndReturn
   */
  export type SupportTicketCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportTicket
     */
    select?: SupportTicketSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many SupportTickets.
     */
    data: SupportTicketCreateManyInput | SupportTicketCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SupportTicket update
   */
  export type SupportTicketUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportTicket
     */
    select?: SupportTicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupportTicketInclude<ExtArgs> | null
    /**
     * The data needed to update a SupportTicket.
     */
    data: XOR<SupportTicketUpdateInput, SupportTicketUncheckedUpdateInput>
    /**
     * Choose, which SupportTicket to update.
     */
    where: SupportTicketWhereUniqueInput
  }

  /**
   * SupportTicket updateMany
   */
  export type SupportTicketUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SupportTickets.
     */
    data: XOR<SupportTicketUpdateManyMutationInput, SupportTicketUncheckedUpdateManyInput>
    /**
     * Filter which SupportTickets to update
     */
    where?: SupportTicketWhereInput
  }

  /**
   * SupportTicket upsert
   */
  export type SupportTicketUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportTicket
     */
    select?: SupportTicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupportTicketInclude<ExtArgs> | null
    /**
     * The filter to search for the SupportTicket to update in case it exists.
     */
    where: SupportTicketWhereUniqueInput
    /**
     * In case the SupportTicket found by the `where` argument doesn't exist, create a new SupportTicket with this data.
     */
    create: XOR<SupportTicketCreateInput, SupportTicketUncheckedCreateInput>
    /**
     * In case the SupportTicket was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SupportTicketUpdateInput, SupportTicketUncheckedUpdateInput>
  }

  /**
   * SupportTicket delete
   */
  export type SupportTicketDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportTicket
     */
    select?: SupportTicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupportTicketInclude<ExtArgs> | null
    /**
     * Filter which SupportTicket to delete.
     */
    where: SupportTicketWhereUniqueInput
  }

  /**
   * SupportTicket deleteMany
   */
  export type SupportTicketDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SupportTickets to delete
     */
    where?: SupportTicketWhereInput
  }

  /**
   * SupportTicket.messages
   */
  export type SupportTicket$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketMessage
     */
    select?: TicketMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketMessageInclude<ExtArgs> | null
    where?: TicketMessageWhereInput
    orderBy?: TicketMessageOrderByWithRelationInput | TicketMessageOrderByWithRelationInput[]
    cursor?: TicketMessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketMessageScalarFieldEnum | TicketMessageScalarFieldEnum[]
  }

  /**
   * SupportTicket.attachments
   */
  export type SupportTicket$attachmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketAttachment
     */
    select?: TicketAttachmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketAttachmentInclude<ExtArgs> | null
    where?: TicketAttachmentWhereInput
    orderBy?: TicketAttachmentOrderByWithRelationInput | TicketAttachmentOrderByWithRelationInput[]
    cursor?: TicketAttachmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketAttachmentScalarFieldEnum | TicketAttachmentScalarFieldEnum[]
  }

  /**
   * SupportTicket without action
   */
  export type SupportTicketDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportTicket
     */
    select?: SupportTicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupportTicketInclude<ExtArgs> | null
  }


  /**
   * Model TicketMessage
   */

  export type AggregateTicketMessage = {
    _count: TicketMessageCountAggregateOutputType | null
    _min: TicketMessageMinAggregateOutputType | null
    _max: TicketMessageMaxAggregateOutputType | null
  }

  export type TicketMessageMinAggregateOutputType = {
    id: string | null
    ticketId: string | null
    senderId: string | null
    senderType: string | null
    senderName: string | null
    message: string | null
    isInternal: boolean | null
    createdAt: Date | null
  }

  export type TicketMessageMaxAggregateOutputType = {
    id: string | null
    ticketId: string | null
    senderId: string | null
    senderType: string | null
    senderName: string | null
    message: string | null
    isInternal: boolean | null
    createdAt: Date | null
  }

  export type TicketMessageCountAggregateOutputType = {
    id: number
    ticketId: number
    senderId: number
    senderType: number
    senderName: number
    message: number
    isInternal: number
    createdAt: number
    _all: number
  }


  export type TicketMessageMinAggregateInputType = {
    id?: true
    ticketId?: true
    senderId?: true
    senderType?: true
    senderName?: true
    message?: true
    isInternal?: true
    createdAt?: true
  }

  export type TicketMessageMaxAggregateInputType = {
    id?: true
    ticketId?: true
    senderId?: true
    senderType?: true
    senderName?: true
    message?: true
    isInternal?: true
    createdAt?: true
  }

  export type TicketMessageCountAggregateInputType = {
    id?: true
    ticketId?: true
    senderId?: true
    senderType?: true
    senderName?: true
    message?: true
    isInternal?: true
    createdAt?: true
    _all?: true
  }

  export type TicketMessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TicketMessage to aggregate.
     */
    where?: TicketMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketMessages to fetch.
     */
    orderBy?: TicketMessageOrderByWithRelationInput | TicketMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TicketMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TicketMessages
    **/
    _count?: true | TicketMessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TicketMessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TicketMessageMaxAggregateInputType
  }

  export type GetTicketMessageAggregateType<T extends TicketMessageAggregateArgs> = {
        [P in keyof T & keyof AggregateTicketMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTicketMessage[P]>
      : GetScalarType<T[P], AggregateTicketMessage[P]>
  }




  export type TicketMessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketMessageWhereInput
    orderBy?: TicketMessageOrderByWithAggregationInput | TicketMessageOrderByWithAggregationInput[]
    by: TicketMessageScalarFieldEnum[] | TicketMessageScalarFieldEnum
    having?: TicketMessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TicketMessageCountAggregateInputType | true
    _min?: TicketMessageMinAggregateInputType
    _max?: TicketMessageMaxAggregateInputType
  }

  export type TicketMessageGroupByOutputType = {
    id: string
    ticketId: string
    senderId: string
    senderType: string
    senderName: string
    message: string
    isInternal: boolean
    createdAt: Date
    _count: TicketMessageCountAggregateOutputType | null
    _min: TicketMessageMinAggregateOutputType | null
    _max: TicketMessageMaxAggregateOutputType | null
  }

  type GetTicketMessageGroupByPayload<T extends TicketMessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TicketMessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TicketMessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TicketMessageGroupByOutputType[P]>
            : GetScalarType<T[P], TicketMessageGroupByOutputType[P]>
        }
      >
    >


  export type TicketMessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ticketId?: boolean
    senderId?: boolean
    senderType?: boolean
    senderName?: boolean
    message?: boolean
    isInternal?: boolean
    createdAt?: boolean
    ticket?: boolean | SupportTicketDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticketMessage"]>

  export type TicketMessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ticketId?: boolean
    senderId?: boolean
    senderType?: boolean
    senderName?: boolean
    message?: boolean
    isInternal?: boolean
    createdAt?: boolean
    ticket?: boolean | SupportTicketDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticketMessage"]>

  export type TicketMessageSelectScalar = {
    id?: boolean
    ticketId?: boolean
    senderId?: boolean
    senderType?: boolean
    senderName?: boolean
    message?: boolean
    isInternal?: boolean
    createdAt?: boolean
  }

  export type TicketMessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ticket?: boolean | SupportTicketDefaultArgs<ExtArgs>
  }
  export type TicketMessageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ticket?: boolean | SupportTicketDefaultArgs<ExtArgs>
  }

  export type $TicketMessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TicketMessage"
    objects: {
      ticket: Prisma.$SupportTicketPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      ticketId: string
      senderId: string
      senderType: string
      senderName: string
      message: string
      isInternal: boolean
      createdAt: Date
    }, ExtArgs["result"]["ticketMessage"]>
    composites: {}
  }

  type TicketMessageGetPayload<S extends boolean | null | undefined | TicketMessageDefaultArgs> = $Result.GetResult<Prisma.$TicketMessagePayload, S>

  type TicketMessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TicketMessageFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TicketMessageCountAggregateInputType | true
    }

  export interface TicketMessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TicketMessage'], meta: { name: 'TicketMessage' } }
    /**
     * Find zero or one TicketMessage that matches the filter.
     * @param {TicketMessageFindUniqueArgs} args - Arguments to find a TicketMessage
     * @example
     * // Get one TicketMessage
     * const ticketMessage = await prisma.ticketMessage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TicketMessageFindUniqueArgs>(args: SelectSubset<T, TicketMessageFindUniqueArgs<ExtArgs>>): Prisma__TicketMessageClient<$Result.GetResult<Prisma.$TicketMessagePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one TicketMessage that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TicketMessageFindUniqueOrThrowArgs} args - Arguments to find a TicketMessage
     * @example
     * // Get one TicketMessage
     * const ticketMessage = await prisma.ticketMessage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TicketMessageFindUniqueOrThrowArgs>(args: SelectSubset<T, TicketMessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TicketMessageClient<$Result.GetResult<Prisma.$TicketMessagePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first TicketMessage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketMessageFindFirstArgs} args - Arguments to find a TicketMessage
     * @example
     * // Get one TicketMessage
     * const ticketMessage = await prisma.ticketMessage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TicketMessageFindFirstArgs>(args?: SelectSubset<T, TicketMessageFindFirstArgs<ExtArgs>>): Prisma__TicketMessageClient<$Result.GetResult<Prisma.$TicketMessagePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first TicketMessage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketMessageFindFirstOrThrowArgs} args - Arguments to find a TicketMessage
     * @example
     * // Get one TicketMessage
     * const ticketMessage = await prisma.ticketMessage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TicketMessageFindFirstOrThrowArgs>(args?: SelectSubset<T, TicketMessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__TicketMessageClient<$Result.GetResult<Prisma.$TicketMessagePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more TicketMessages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketMessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TicketMessages
     * const ticketMessages = await prisma.ticketMessage.findMany()
     * 
     * // Get first 10 TicketMessages
     * const ticketMessages = await prisma.ticketMessage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ticketMessageWithIdOnly = await prisma.ticketMessage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TicketMessageFindManyArgs>(args?: SelectSubset<T, TicketMessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketMessagePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a TicketMessage.
     * @param {TicketMessageCreateArgs} args - Arguments to create a TicketMessage.
     * @example
     * // Create one TicketMessage
     * const TicketMessage = await prisma.ticketMessage.create({
     *   data: {
     *     // ... data to create a TicketMessage
     *   }
     * })
     * 
     */
    create<T extends TicketMessageCreateArgs>(args: SelectSubset<T, TicketMessageCreateArgs<ExtArgs>>): Prisma__TicketMessageClient<$Result.GetResult<Prisma.$TicketMessagePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many TicketMessages.
     * @param {TicketMessageCreateManyArgs} args - Arguments to create many TicketMessages.
     * @example
     * // Create many TicketMessages
     * const ticketMessage = await prisma.ticketMessage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TicketMessageCreateManyArgs>(args?: SelectSubset<T, TicketMessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TicketMessages and returns the data saved in the database.
     * @param {TicketMessageCreateManyAndReturnArgs} args - Arguments to create many TicketMessages.
     * @example
     * // Create many TicketMessages
     * const ticketMessage = await prisma.ticketMessage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TicketMessages and only return the `id`
     * const ticketMessageWithIdOnly = await prisma.ticketMessage.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TicketMessageCreateManyAndReturnArgs>(args?: SelectSubset<T, TicketMessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketMessagePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a TicketMessage.
     * @param {TicketMessageDeleteArgs} args - Arguments to delete one TicketMessage.
     * @example
     * // Delete one TicketMessage
     * const TicketMessage = await prisma.ticketMessage.delete({
     *   where: {
     *     // ... filter to delete one TicketMessage
     *   }
     * })
     * 
     */
    delete<T extends TicketMessageDeleteArgs>(args: SelectSubset<T, TicketMessageDeleteArgs<ExtArgs>>): Prisma__TicketMessageClient<$Result.GetResult<Prisma.$TicketMessagePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one TicketMessage.
     * @param {TicketMessageUpdateArgs} args - Arguments to update one TicketMessage.
     * @example
     * // Update one TicketMessage
     * const ticketMessage = await prisma.ticketMessage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TicketMessageUpdateArgs>(args: SelectSubset<T, TicketMessageUpdateArgs<ExtArgs>>): Prisma__TicketMessageClient<$Result.GetResult<Prisma.$TicketMessagePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more TicketMessages.
     * @param {TicketMessageDeleteManyArgs} args - Arguments to filter TicketMessages to delete.
     * @example
     * // Delete a few TicketMessages
     * const { count } = await prisma.ticketMessage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TicketMessageDeleteManyArgs>(args?: SelectSubset<T, TicketMessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TicketMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketMessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TicketMessages
     * const ticketMessage = await prisma.ticketMessage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TicketMessageUpdateManyArgs>(args: SelectSubset<T, TicketMessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TicketMessage.
     * @param {TicketMessageUpsertArgs} args - Arguments to update or create a TicketMessage.
     * @example
     * // Update or create a TicketMessage
     * const ticketMessage = await prisma.ticketMessage.upsert({
     *   create: {
     *     // ... data to create a TicketMessage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TicketMessage we want to update
     *   }
     * })
     */
    upsert<T extends TicketMessageUpsertArgs>(args: SelectSubset<T, TicketMessageUpsertArgs<ExtArgs>>): Prisma__TicketMessageClient<$Result.GetResult<Prisma.$TicketMessagePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of TicketMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketMessageCountArgs} args - Arguments to filter TicketMessages to count.
     * @example
     * // Count the number of TicketMessages
     * const count = await prisma.ticketMessage.count({
     *   where: {
     *     // ... the filter for the TicketMessages we want to count
     *   }
     * })
    **/
    count<T extends TicketMessageCountArgs>(
      args?: Subset<T, TicketMessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TicketMessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TicketMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketMessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TicketMessageAggregateArgs>(args: Subset<T, TicketMessageAggregateArgs>): Prisma.PrismaPromise<GetTicketMessageAggregateType<T>>

    /**
     * Group by TicketMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketMessageGroupByArgs} args - Group by arguments.
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
      T extends TicketMessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TicketMessageGroupByArgs['orderBy'] }
        : { orderBy?: TicketMessageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TicketMessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTicketMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TicketMessage model
   */
  readonly fields: TicketMessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TicketMessage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TicketMessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ticket<T extends SupportTicketDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SupportTicketDefaultArgs<ExtArgs>>): Prisma__SupportTicketClient<$Result.GetResult<Prisma.$SupportTicketPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the TicketMessage model
   */ 
  interface TicketMessageFieldRefs {
    readonly id: FieldRef<"TicketMessage", 'String'>
    readonly ticketId: FieldRef<"TicketMessage", 'String'>
    readonly senderId: FieldRef<"TicketMessage", 'String'>
    readonly senderType: FieldRef<"TicketMessage", 'String'>
    readonly senderName: FieldRef<"TicketMessage", 'String'>
    readonly message: FieldRef<"TicketMessage", 'String'>
    readonly isInternal: FieldRef<"TicketMessage", 'Boolean'>
    readonly createdAt: FieldRef<"TicketMessage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TicketMessage findUnique
   */
  export type TicketMessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketMessage
     */
    select?: TicketMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketMessageInclude<ExtArgs> | null
    /**
     * Filter, which TicketMessage to fetch.
     */
    where: TicketMessageWhereUniqueInput
  }

  /**
   * TicketMessage findUniqueOrThrow
   */
  export type TicketMessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketMessage
     */
    select?: TicketMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketMessageInclude<ExtArgs> | null
    /**
     * Filter, which TicketMessage to fetch.
     */
    where: TicketMessageWhereUniqueInput
  }

  /**
   * TicketMessage findFirst
   */
  export type TicketMessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketMessage
     */
    select?: TicketMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketMessageInclude<ExtArgs> | null
    /**
     * Filter, which TicketMessage to fetch.
     */
    where?: TicketMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketMessages to fetch.
     */
    orderBy?: TicketMessageOrderByWithRelationInput | TicketMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TicketMessages.
     */
    cursor?: TicketMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TicketMessages.
     */
    distinct?: TicketMessageScalarFieldEnum | TicketMessageScalarFieldEnum[]
  }

  /**
   * TicketMessage findFirstOrThrow
   */
  export type TicketMessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketMessage
     */
    select?: TicketMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketMessageInclude<ExtArgs> | null
    /**
     * Filter, which TicketMessage to fetch.
     */
    where?: TicketMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketMessages to fetch.
     */
    orderBy?: TicketMessageOrderByWithRelationInput | TicketMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TicketMessages.
     */
    cursor?: TicketMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TicketMessages.
     */
    distinct?: TicketMessageScalarFieldEnum | TicketMessageScalarFieldEnum[]
  }

  /**
   * TicketMessage findMany
   */
  export type TicketMessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketMessage
     */
    select?: TicketMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketMessageInclude<ExtArgs> | null
    /**
     * Filter, which TicketMessages to fetch.
     */
    where?: TicketMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketMessages to fetch.
     */
    orderBy?: TicketMessageOrderByWithRelationInput | TicketMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TicketMessages.
     */
    cursor?: TicketMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketMessages.
     */
    skip?: number
    distinct?: TicketMessageScalarFieldEnum | TicketMessageScalarFieldEnum[]
  }

  /**
   * TicketMessage create
   */
  export type TicketMessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketMessage
     */
    select?: TicketMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketMessageInclude<ExtArgs> | null
    /**
     * The data needed to create a TicketMessage.
     */
    data: XOR<TicketMessageCreateInput, TicketMessageUncheckedCreateInput>
  }

  /**
   * TicketMessage createMany
   */
  export type TicketMessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TicketMessages.
     */
    data: TicketMessageCreateManyInput | TicketMessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TicketMessage createManyAndReturn
   */
  export type TicketMessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketMessage
     */
    select?: TicketMessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many TicketMessages.
     */
    data: TicketMessageCreateManyInput | TicketMessageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketMessageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TicketMessage update
   */
  export type TicketMessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketMessage
     */
    select?: TicketMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketMessageInclude<ExtArgs> | null
    /**
     * The data needed to update a TicketMessage.
     */
    data: XOR<TicketMessageUpdateInput, TicketMessageUncheckedUpdateInput>
    /**
     * Choose, which TicketMessage to update.
     */
    where: TicketMessageWhereUniqueInput
  }

  /**
   * TicketMessage updateMany
   */
  export type TicketMessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TicketMessages.
     */
    data: XOR<TicketMessageUpdateManyMutationInput, TicketMessageUncheckedUpdateManyInput>
    /**
     * Filter which TicketMessages to update
     */
    where?: TicketMessageWhereInput
  }

  /**
   * TicketMessage upsert
   */
  export type TicketMessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketMessage
     */
    select?: TicketMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketMessageInclude<ExtArgs> | null
    /**
     * The filter to search for the TicketMessage to update in case it exists.
     */
    where: TicketMessageWhereUniqueInput
    /**
     * In case the TicketMessage found by the `where` argument doesn't exist, create a new TicketMessage with this data.
     */
    create: XOR<TicketMessageCreateInput, TicketMessageUncheckedCreateInput>
    /**
     * In case the TicketMessage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TicketMessageUpdateInput, TicketMessageUncheckedUpdateInput>
  }

  /**
   * TicketMessage delete
   */
  export type TicketMessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketMessage
     */
    select?: TicketMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketMessageInclude<ExtArgs> | null
    /**
     * Filter which TicketMessage to delete.
     */
    where: TicketMessageWhereUniqueInput
  }

  /**
   * TicketMessage deleteMany
   */
  export type TicketMessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TicketMessages to delete
     */
    where?: TicketMessageWhereInput
  }

  /**
   * TicketMessage without action
   */
  export type TicketMessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketMessage
     */
    select?: TicketMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketMessageInclude<ExtArgs> | null
  }


  /**
   * Model TicketAttachment
   */

  export type AggregateTicketAttachment = {
    _count: TicketAttachmentCountAggregateOutputType | null
    _avg: TicketAttachmentAvgAggregateOutputType | null
    _sum: TicketAttachmentSumAggregateOutputType | null
    _min: TicketAttachmentMinAggregateOutputType | null
    _max: TicketAttachmentMaxAggregateOutputType | null
  }

  export type TicketAttachmentAvgAggregateOutputType = {
    size: number | null
  }

  export type TicketAttachmentSumAggregateOutputType = {
    size: number | null
  }

  export type TicketAttachmentMinAggregateOutputType = {
    id: string | null
    ticketId: string | null
    name: string | null
    url: string | null
    mimeType: string | null
    size: number | null
    uploadedBy: string | null
    uploadedAt: Date | null
  }

  export type TicketAttachmentMaxAggregateOutputType = {
    id: string | null
    ticketId: string | null
    name: string | null
    url: string | null
    mimeType: string | null
    size: number | null
    uploadedBy: string | null
    uploadedAt: Date | null
  }

  export type TicketAttachmentCountAggregateOutputType = {
    id: number
    ticketId: number
    name: number
    url: number
    mimeType: number
    size: number
    uploadedBy: number
    uploadedAt: number
    _all: number
  }


  export type TicketAttachmentAvgAggregateInputType = {
    size?: true
  }

  export type TicketAttachmentSumAggregateInputType = {
    size?: true
  }

  export type TicketAttachmentMinAggregateInputType = {
    id?: true
    ticketId?: true
    name?: true
    url?: true
    mimeType?: true
    size?: true
    uploadedBy?: true
    uploadedAt?: true
  }

  export type TicketAttachmentMaxAggregateInputType = {
    id?: true
    ticketId?: true
    name?: true
    url?: true
    mimeType?: true
    size?: true
    uploadedBy?: true
    uploadedAt?: true
  }

  export type TicketAttachmentCountAggregateInputType = {
    id?: true
    ticketId?: true
    name?: true
    url?: true
    mimeType?: true
    size?: true
    uploadedBy?: true
    uploadedAt?: true
    _all?: true
  }

  export type TicketAttachmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TicketAttachment to aggregate.
     */
    where?: TicketAttachmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketAttachments to fetch.
     */
    orderBy?: TicketAttachmentOrderByWithRelationInput | TicketAttachmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TicketAttachmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketAttachments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketAttachments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TicketAttachments
    **/
    _count?: true | TicketAttachmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TicketAttachmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TicketAttachmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TicketAttachmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TicketAttachmentMaxAggregateInputType
  }

  export type GetTicketAttachmentAggregateType<T extends TicketAttachmentAggregateArgs> = {
        [P in keyof T & keyof AggregateTicketAttachment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTicketAttachment[P]>
      : GetScalarType<T[P], AggregateTicketAttachment[P]>
  }




  export type TicketAttachmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketAttachmentWhereInput
    orderBy?: TicketAttachmentOrderByWithAggregationInput | TicketAttachmentOrderByWithAggregationInput[]
    by: TicketAttachmentScalarFieldEnum[] | TicketAttachmentScalarFieldEnum
    having?: TicketAttachmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TicketAttachmentCountAggregateInputType | true
    _avg?: TicketAttachmentAvgAggregateInputType
    _sum?: TicketAttachmentSumAggregateInputType
    _min?: TicketAttachmentMinAggregateInputType
    _max?: TicketAttachmentMaxAggregateInputType
  }

  export type TicketAttachmentGroupByOutputType = {
    id: string
    ticketId: string
    name: string
    url: string
    mimeType: string | null
    size: number | null
    uploadedBy: string
    uploadedAt: Date
    _count: TicketAttachmentCountAggregateOutputType | null
    _avg: TicketAttachmentAvgAggregateOutputType | null
    _sum: TicketAttachmentSumAggregateOutputType | null
    _min: TicketAttachmentMinAggregateOutputType | null
    _max: TicketAttachmentMaxAggregateOutputType | null
  }

  type GetTicketAttachmentGroupByPayload<T extends TicketAttachmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TicketAttachmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TicketAttachmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TicketAttachmentGroupByOutputType[P]>
            : GetScalarType<T[P], TicketAttachmentGroupByOutputType[P]>
        }
      >
    >


  export type TicketAttachmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ticketId?: boolean
    name?: boolean
    url?: boolean
    mimeType?: boolean
    size?: boolean
    uploadedBy?: boolean
    uploadedAt?: boolean
    ticket?: boolean | SupportTicketDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticketAttachment"]>

  export type TicketAttachmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ticketId?: boolean
    name?: boolean
    url?: boolean
    mimeType?: boolean
    size?: boolean
    uploadedBy?: boolean
    uploadedAt?: boolean
    ticket?: boolean | SupportTicketDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticketAttachment"]>

  export type TicketAttachmentSelectScalar = {
    id?: boolean
    ticketId?: boolean
    name?: boolean
    url?: boolean
    mimeType?: boolean
    size?: boolean
    uploadedBy?: boolean
    uploadedAt?: boolean
  }

  export type TicketAttachmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ticket?: boolean | SupportTicketDefaultArgs<ExtArgs>
  }
  export type TicketAttachmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ticket?: boolean | SupportTicketDefaultArgs<ExtArgs>
  }

  export type $TicketAttachmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TicketAttachment"
    objects: {
      ticket: Prisma.$SupportTicketPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      ticketId: string
      name: string
      url: string
      mimeType: string | null
      size: number | null
      uploadedBy: string
      uploadedAt: Date
    }, ExtArgs["result"]["ticketAttachment"]>
    composites: {}
  }

  type TicketAttachmentGetPayload<S extends boolean | null | undefined | TicketAttachmentDefaultArgs> = $Result.GetResult<Prisma.$TicketAttachmentPayload, S>

  type TicketAttachmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TicketAttachmentFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TicketAttachmentCountAggregateInputType | true
    }

  export interface TicketAttachmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TicketAttachment'], meta: { name: 'TicketAttachment' } }
    /**
     * Find zero or one TicketAttachment that matches the filter.
     * @param {TicketAttachmentFindUniqueArgs} args - Arguments to find a TicketAttachment
     * @example
     * // Get one TicketAttachment
     * const ticketAttachment = await prisma.ticketAttachment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TicketAttachmentFindUniqueArgs>(args: SelectSubset<T, TicketAttachmentFindUniqueArgs<ExtArgs>>): Prisma__TicketAttachmentClient<$Result.GetResult<Prisma.$TicketAttachmentPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one TicketAttachment that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TicketAttachmentFindUniqueOrThrowArgs} args - Arguments to find a TicketAttachment
     * @example
     * // Get one TicketAttachment
     * const ticketAttachment = await prisma.ticketAttachment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TicketAttachmentFindUniqueOrThrowArgs>(args: SelectSubset<T, TicketAttachmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TicketAttachmentClient<$Result.GetResult<Prisma.$TicketAttachmentPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first TicketAttachment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketAttachmentFindFirstArgs} args - Arguments to find a TicketAttachment
     * @example
     * // Get one TicketAttachment
     * const ticketAttachment = await prisma.ticketAttachment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TicketAttachmentFindFirstArgs>(args?: SelectSubset<T, TicketAttachmentFindFirstArgs<ExtArgs>>): Prisma__TicketAttachmentClient<$Result.GetResult<Prisma.$TicketAttachmentPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first TicketAttachment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketAttachmentFindFirstOrThrowArgs} args - Arguments to find a TicketAttachment
     * @example
     * // Get one TicketAttachment
     * const ticketAttachment = await prisma.ticketAttachment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TicketAttachmentFindFirstOrThrowArgs>(args?: SelectSubset<T, TicketAttachmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__TicketAttachmentClient<$Result.GetResult<Prisma.$TicketAttachmentPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more TicketAttachments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketAttachmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TicketAttachments
     * const ticketAttachments = await prisma.ticketAttachment.findMany()
     * 
     * // Get first 10 TicketAttachments
     * const ticketAttachments = await prisma.ticketAttachment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ticketAttachmentWithIdOnly = await prisma.ticketAttachment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TicketAttachmentFindManyArgs>(args?: SelectSubset<T, TicketAttachmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketAttachmentPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a TicketAttachment.
     * @param {TicketAttachmentCreateArgs} args - Arguments to create a TicketAttachment.
     * @example
     * // Create one TicketAttachment
     * const TicketAttachment = await prisma.ticketAttachment.create({
     *   data: {
     *     // ... data to create a TicketAttachment
     *   }
     * })
     * 
     */
    create<T extends TicketAttachmentCreateArgs>(args: SelectSubset<T, TicketAttachmentCreateArgs<ExtArgs>>): Prisma__TicketAttachmentClient<$Result.GetResult<Prisma.$TicketAttachmentPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many TicketAttachments.
     * @param {TicketAttachmentCreateManyArgs} args - Arguments to create many TicketAttachments.
     * @example
     * // Create many TicketAttachments
     * const ticketAttachment = await prisma.ticketAttachment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TicketAttachmentCreateManyArgs>(args?: SelectSubset<T, TicketAttachmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TicketAttachments and returns the data saved in the database.
     * @param {TicketAttachmentCreateManyAndReturnArgs} args - Arguments to create many TicketAttachments.
     * @example
     * // Create many TicketAttachments
     * const ticketAttachment = await prisma.ticketAttachment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TicketAttachments and only return the `id`
     * const ticketAttachmentWithIdOnly = await prisma.ticketAttachment.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TicketAttachmentCreateManyAndReturnArgs>(args?: SelectSubset<T, TicketAttachmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketAttachmentPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a TicketAttachment.
     * @param {TicketAttachmentDeleteArgs} args - Arguments to delete one TicketAttachment.
     * @example
     * // Delete one TicketAttachment
     * const TicketAttachment = await prisma.ticketAttachment.delete({
     *   where: {
     *     // ... filter to delete one TicketAttachment
     *   }
     * })
     * 
     */
    delete<T extends TicketAttachmentDeleteArgs>(args: SelectSubset<T, TicketAttachmentDeleteArgs<ExtArgs>>): Prisma__TicketAttachmentClient<$Result.GetResult<Prisma.$TicketAttachmentPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one TicketAttachment.
     * @param {TicketAttachmentUpdateArgs} args - Arguments to update one TicketAttachment.
     * @example
     * // Update one TicketAttachment
     * const ticketAttachment = await prisma.ticketAttachment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TicketAttachmentUpdateArgs>(args: SelectSubset<T, TicketAttachmentUpdateArgs<ExtArgs>>): Prisma__TicketAttachmentClient<$Result.GetResult<Prisma.$TicketAttachmentPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more TicketAttachments.
     * @param {TicketAttachmentDeleteManyArgs} args - Arguments to filter TicketAttachments to delete.
     * @example
     * // Delete a few TicketAttachments
     * const { count } = await prisma.ticketAttachment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TicketAttachmentDeleteManyArgs>(args?: SelectSubset<T, TicketAttachmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TicketAttachments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketAttachmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TicketAttachments
     * const ticketAttachment = await prisma.ticketAttachment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TicketAttachmentUpdateManyArgs>(args: SelectSubset<T, TicketAttachmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TicketAttachment.
     * @param {TicketAttachmentUpsertArgs} args - Arguments to update or create a TicketAttachment.
     * @example
     * // Update or create a TicketAttachment
     * const ticketAttachment = await prisma.ticketAttachment.upsert({
     *   create: {
     *     // ... data to create a TicketAttachment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TicketAttachment we want to update
     *   }
     * })
     */
    upsert<T extends TicketAttachmentUpsertArgs>(args: SelectSubset<T, TicketAttachmentUpsertArgs<ExtArgs>>): Prisma__TicketAttachmentClient<$Result.GetResult<Prisma.$TicketAttachmentPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of TicketAttachments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketAttachmentCountArgs} args - Arguments to filter TicketAttachments to count.
     * @example
     * // Count the number of TicketAttachments
     * const count = await prisma.ticketAttachment.count({
     *   where: {
     *     // ... the filter for the TicketAttachments we want to count
     *   }
     * })
    **/
    count<T extends TicketAttachmentCountArgs>(
      args?: Subset<T, TicketAttachmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TicketAttachmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TicketAttachment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketAttachmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TicketAttachmentAggregateArgs>(args: Subset<T, TicketAttachmentAggregateArgs>): Prisma.PrismaPromise<GetTicketAttachmentAggregateType<T>>

    /**
     * Group by TicketAttachment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketAttachmentGroupByArgs} args - Group by arguments.
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
      T extends TicketAttachmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TicketAttachmentGroupByArgs['orderBy'] }
        : { orderBy?: TicketAttachmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TicketAttachmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTicketAttachmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TicketAttachment model
   */
  readonly fields: TicketAttachmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TicketAttachment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TicketAttachmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ticket<T extends SupportTicketDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SupportTicketDefaultArgs<ExtArgs>>): Prisma__SupportTicketClient<$Result.GetResult<Prisma.$SupportTicketPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the TicketAttachment model
   */ 
  interface TicketAttachmentFieldRefs {
    readonly id: FieldRef<"TicketAttachment", 'String'>
    readonly ticketId: FieldRef<"TicketAttachment", 'String'>
    readonly name: FieldRef<"TicketAttachment", 'String'>
    readonly url: FieldRef<"TicketAttachment", 'String'>
    readonly mimeType: FieldRef<"TicketAttachment", 'String'>
    readonly size: FieldRef<"TicketAttachment", 'Int'>
    readonly uploadedBy: FieldRef<"TicketAttachment", 'String'>
    readonly uploadedAt: FieldRef<"TicketAttachment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TicketAttachment findUnique
   */
  export type TicketAttachmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketAttachment
     */
    select?: TicketAttachmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketAttachmentInclude<ExtArgs> | null
    /**
     * Filter, which TicketAttachment to fetch.
     */
    where: TicketAttachmentWhereUniqueInput
  }

  /**
   * TicketAttachment findUniqueOrThrow
   */
  export type TicketAttachmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketAttachment
     */
    select?: TicketAttachmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketAttachmentInclude<ExtArgs> | null
    /**
     * Filter, which TicketAttachment to fetch.
     */
    where: TicketAttachmentWhereUniqueInput
  }

  /**
   * TicketAttachment findFirst
   */
  export type TicketAttachmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketAttachment
     */
    select?: TicketAttachmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketAttachmentInclude<ExtArgs> | null
    /**
     * Filter, which TicketAttachment to fetch.
     */
    where?: TicketAttachmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketAttachments to fetch.
     */
    orderBy?: TicketAttachmentOrderByWithRelationInput | TicketAttachmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TicketAttachments.
     */
    cursor?: TicketAttachmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketAttachments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketAttachments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TicketAttachments.
     */
    distinct?: TicketAttachmentScalarFieldEnum | TicketAttachmentScalarFieldEnum[]
  }

  /**
   * TicketAttachment findFirstOrThrow
   */
  export type TicketAttachmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketAttachment
     */
    select?: TicketAttachmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketAttachmentInclude<ExtArgs> | null
    /**
     * Filter, which TicketAttachment to fetch.
     */
    where?: TicketAttachmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketAttachments to fetch.
     */
    orderBy?: TicketAttachmentOrderByWithRelationInput | TicketAttachmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TicketAttachments.
     */
    cursor?: TicketAttachmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketAttachments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketAttachments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TicketAttachments.
     */
    distinct?: TicketAttachmentScalarFieldEnum | TicketAttachmentScalarFieldEnum[]
  }

  /**
   * TicketAttachment findMany
   */
  export type TicketAttachmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketAttachment
     */
    select?: TicketAttachmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketAttachmentInclude<ExtArgs> | null
    /**
     * Filter, which TicketAttachments to fetch.
     */
    where?: TicketAttachmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketAttachments to fetch.
     */
    orderBy?: TicketAttachmentOrderByWithRelationInput | TicketAttachmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TicketAttachments.
     */
    cursor?: TicketAttachmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketAttachments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketAttachments.
     */
    skip?: number
    distinct?: TicketAttachmentScalarFieldEnum | TicketAttachmentScalarFieldEnum[]
  }

  /**
   * TicketAttachment create
   */
  export type TicketAttachmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketAttachment
     */
    select?: TicketAttachmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketAttachmentInclude<ExtArgs> | null
    /**
     * The data needed to create a TicketAttachment.
     */
    data: XOR<TicketAttachmentCreateInput, TicketAttachmentUncheckedCreateInput>
  }

  /**
   * TicketAttachment createMany
   */
  export type TicketAttachmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TicketAttachments.
     */
    data: TicketAttachmentCreateManyInput | TicketAttachmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TicketAttachment createManyAndReturn
   */
  export type TicketAttachmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketAttachment
     */
    select?: TicketAttachmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many TicketAttachments.
     */
    data: TicketAttachmentCreateManyInput | TicketAttachmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketAttachmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TicketAttachment update
   */
  export type TicketAttachmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketAttachment
     */
    select?: TicketAttachmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketAttachmentInclude<ExtArgs> | null
    /**
     * The data needed to update a TicketAttachment.
     */
    data: XOR<TicketAttachmentUpdateInput, TicketAttachmentUncheckedUpdateInput>
    /**
     * Choose, which TicketAttachment to update.
     */
    where: TicketAttachmentWhereUniqueInput
  }

  /**
   * TicketAttachment updateMany
   */
  export type TicketAttachmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TicketAttachments.
     */
    data: XOR<TicketAttachmentUpdateManyMutationInput, TicketAttachmentUncheckedUpdateManyInput>
    /**
     * Filter which TicketAttachments to update
     */
    where?: TicketAttachmentWhereInput
  }

  /**
   * TicketAttachment upsert
   */
  export type TicketAttachmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketAttachment
     */
    select?: TicketAttachmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketAttachmentInclude<ExtArgs> | null
    /**
     * The filter to search for the TicketAttachment to update in case it exists.
     */
    where: TicketAttachmentWhereUniqueInput
    /**
     * In case the TicketAttachment found by the `where` argument doesn't exist, create a new TicketAttachment with this data.
     */
    create: XOR<TicketAttachmentCreateInput, TicketAttachmentUncheckedCreateInput>
    /**
     * In case the TicketAttachment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TicketAttachmentUpdateInput, TicketAttachmentUncheckedUpdateInput>
  }

  /**
   * TicketAttachment delete
   */
  export type TicketAttachmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketAttachment
     */
    select?: TicketAttachmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketAttachmentInclude<ExtArgs> | null
    /**
     * Filter which TicketAttachment to delete.
     */
    where: TicketAttachmentWhereUniqueInput
  }

  /**
   * TicketAttachment deleteMany
   */
  export type TicketAttachmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TicketAttachments to delete
     */
    where?: TicketAttachmentWhereInput
  }

  /**
   * TicketAttachment without action
   */
  export type TicketAttachmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketAttachment
     */
    select?: TicketAttachmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketAttachmentInclude<ExtArgs> | null
  }


  /**
   * Model KnowledgeBase
   */

  export type AggregateKnowledgeBase = {
    _count: KnowledgeBaseCountAggregateOutputType | null
    _avg: KnowledgeBaseAvgAggregateOutputType | null
    _sum: KnowledgeBaseSumAggregateOutputType | null
    _min: KnowledgeBaseMinAggregateOutputType | null
    _max: KnowledgeBaseMaxAggregateOutputType | null
  }

  export type KnowledgeBaseAvgAggregateOutputType = {
    viewCount: number | null
    helpfulCount: number | null
  }

  export type KnowledgeBaseSumAggregateOutputType = {
    viewCount: number | null
    helpfulCount: number | null
  }

  export type KnowledgeBaseMinAggregateOutputType = {
    id: string | null
    title: string | null
    slug: string | null
    content: string | null
    excerpt: string | null
    category: string | null
    isPublished: boolean | null
    viewCount: number | null
    helpfulCount: number | null
    authorId: string | null
    authorName: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type KnowledgeBaseMaxAggregateOutputType = {
    id: string | null
    title: string | null
    slug: string | null
    content: string | null
    excerpt: string | null
    category: string | null
    isPublished: boolean | null
    viewCount: number | null
    helpfulCount: number | null
    authorId: string | null
    authorName: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type KnowledgeBaseCountAggregateOutputType = {
    id: number
    title: number
    slug: number
    content: number
    excerpt: number
    category: number
    tags: number
    isPublished: number
    viewCount: number
    helpfulCount: number
    authorId: number
    authorName: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type KnowledgeBaseAvgAggregateInputType = {
    viewCount?: true
    helpfulCount?: true
  }

  export type KnowledgeBaseSumAggregateInputType = {
    viewCount?: true
    helpfulCount?: true
  }

  export type KnowledgeBaseMinAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    content?: true
    excerpt?: true
    category?: true
    isPublished?: true
    viewCount?: true
    helpfulCount?: true
    authorId?: true
    authorName?: true
    createdAt?: true
    updatedAt?: true
  }

  export type KnowledgeBaseMaxAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    content?: true
    excerpt?: true
    category?: true
    isPublished?: true
    viewCount?: true
    helpfulCount?: true
    authorId?: true
    authorName?: true
    createdAt?: true
    updatedAt?: true
  }

  export type KnowledgeBaseCountAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    content?: true
    excerpt?: true
    category?: true
    tags?: true
    isPublished?: true
    viewCount?: true
    helpfulCount?: true
    authorId?: true
    authorName?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type KnowledgeBaseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which KnowledgeBase to aggregate.
     */
    where?: KnowledgeBaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KnowledgeBases to fetch.
     */
    orderBy?: KnowledgeBaseOrderByWithRelationInput | KnowledgeBaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: KnowledgeBaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KnowledgeBases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KnowledgeBases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned KnowledgeBases
    **/
    _count?: true | KnowledgeBaseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: KnowledgeBaseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: KnowledgeBaseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: KnowledgeBaseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: KnowledgeBaseMaxAggregateInputType
  }

  export type GetKnowledgeBaseAggregateType<T extends KnowledgeBaseAggregateArgs> = {
        [P in keyof T & keyof AggregateKnowledgeBase]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateKnowledgeBase[P]>
      : GetScalarType<T[P], AggregateKnowledgeBase[P]>
  }




  export type KnowledgeBaseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KnowledgeBaseWhereInput
    orderBy?: KnowledgeBaseOrderByWithAggregationInput | KnowledgeBaseOrderByWithAggregationInput[]
    by: KnowledgeBaseScalarFieldEnum[] | KnowledgeBaseScalarFieldEnum
    having?: KnowledgeBaseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: KnowledgeBaseCountAggregateInputType | true
    _avg?: KnowledgeBaseAvgAggregateInputType
    _sum?: KnowledgeBaseSumAggregateInputType
    _min?: KnowledgeBaseMinAggregateInputType
    _max?: KnowledgeBaseMaxAggregateInputType
  }

  export type KnowledgeBaseGroupByOutputType = {
    id: string
    title: string
    slug: string
    content: string
    excerpt: string | null
    category: string
    tags: string[]
    isPublished: boolean
    viewCount: number
    helpfulCount: number
    authorId: string
    authorName: string
    createdAt: Date
    updatedAt: Date
    _count: KnowledgeBaseCountAggregateOutputType | null
    _avg: KnowledgeBaseAvgAggregateOutputType | null
    _sum: KnowledgeBaseSumAggregateOutputType | null
    _min: KnowledgeBaseMinAggregateOutputType | null
    _max: KnowledgeBaseMaxAggregateOutputType | null
  }

  type GetKnowledgeBaseGroupByPayload<T extends KnowledgeBaseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<KnowledgeBaseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof KnowledgeBaseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], KnowledgeBaseGroupByOutputType[P]>
            : GetScalarType<T[P], KnowledgeBaseGroupByOutputType[P]>
        }
      >
    >


  export type KnowledgeBaseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    content?: boolean
    excerpt?: boolean
    category?: boolean
    tags?: boolean
    isPublished?: boolean
    viewCount?: boolean
    helpfulCount?: boolean
    authorId?: boolean
    authorName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["knowledgeBase"]>

  export type KnowledgeBaseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    content?: boolean
    excerpt?: boolean
    category?: boolean
    tags?: boolean
    isPublished?: boolean
    viewCount?: boolean
    helpfulCount?: boolean
    authorId?: boolean
    authorName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["knowledgeBase"]>

  export type KnowledgeBaseSelectScalar = {
    id?: boolean
    title?: boolean
    slug?: boolean
    content?: boolean
    excerpt?: boolean
    category?: boolean
    tags?: boolean
    isPublished?: boolean
    viewCount?: boolean
    helpfulCount?: boolean
    authorId?: boolean
    authorName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $KnowledgeBasePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "KnowledgeBase"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      slug: string
      content: string
      excerpt: string | null
      category: string
      tags: string[]
      isPublished: boolean
      viewCount: number
      helpfulCount: number
      authorId: string
      authorName: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["knowledgeBase"]>
    composites: {}
  }

  type KnowledgeBaseGetPayload<S extends boolean | null | undefined | KnowledgeBaseDefaultArgs> = $Result.GetResult<Prisma.$KnowledgeBasePayload, S>

  type KnowledgeBaseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<KnowledgeBaseFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: KnowledgeBaseCountAggregateInputType | true
    }

  export interface KnowledgeBaseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['KnowledgeBase'], meta: { name: 'KnowledgeBase' } }
    /**
     * Find zero or one KnowledgeBase that matches the filter.
     * @param {KnowledgeBaseFindUniqueArgs} args - Arguments to find a KnowledgeBase
     * @example
     * // Get one KnowledgeBase
     * const knowledgeBase = await prisma.knowledgeBase.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends KnowledgeBaseFindUniqueArgs>(args: SelectSubset<T, KnowledgeBaseFindUniqueArgs<ExtArgs>>): Prisma__KnowledgeBaseClient<$Result.GetResult<Prisma.$KnowledgeBasePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one KnowledgeBase that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {KnowledgeBaseFindUniqueOrThrowArgs} args - Arguments to find a KnowledgeBase
     * @example
     * // Get one KnowledgeBase
     * const knowledgeBase = await prisma.knowledgeBase.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends KnowledgeBaseFindUniqueOrThrowArgs>(args: SelectSubset<T, KnowledgeBaseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__KnowledgeBaseClient<$Result.GetResult<Prisma.$KnowledgeBasePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first KnowledgeBase that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KnowledgeBaseFindFirstArgs} args - Arguments to find a KnowledgeBase
     * @example
     * // Get one KnowledgeBase
     * const knowledgeBase = await prisma.knowledgeBase.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends KnowledgeBaseFindFirstArgs>(args?: SelectSubset<T, KnowledgeBaseFindFirstArgs<ExtArgs>>): Prisma__KnowledgeBaseClient<$Result.GetResult<Prisma.$KnowledgeBasePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first KnowledgeBase that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KnowledgeBaseFindFirstOrThrowArgs} args - Arguments to find a KnowledgeBase
     * @example
     * // Get one KnowledgeBase
     * const knowledgeBase = await prisma.knowledgeBase.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends KnowledgeBaseFindFirstOrThrowArgs>(args?: SelectSubset<T, KnowledgeBaseFindFirstOrThrowArgs<ExtArgs>>): Prisma__KnowledgeBaseClient<$Result.GetResult<Prisma.$KnowledgeBasePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more KnowledgeBases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KnowledgeBaseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all KnowledgeBases
     * const knowledgeBases = await prisma.knowledgeBase.findMany()
     * 
     * // Get first 10 KnowledgeBases
     * const knowledgeBases = await prisma.knowledgeBase.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const knowledgeBaseWithIdOnly = await prisma.knowledgeBase.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends KnowledgeBaseFindManyArgs>(args?: SelectSubset<T, KnowledgeBaseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KnowledgeBasePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a KnowledgeBase.
     * @param {KnowledgeBaseCreateArgs} args - Arguments to create a KnowledgeBase.
     * @example
     * // Create one KnowledgeBase
     * const KnowledgeBase = await prisma.knowledgeBase.create({
     *   data: {
     *     // ... data to create a KnowledgeBase
     *   }
     * })
     * 
     */
    create<T extends KnowledgeBaseCreateArgs>(args: SelectSubset<T, KnowledgeBaseCreateArgs<ExtArgs>>): Prisma__KnowledgeBaseClient<$Result.GetResult<Prisma.$KnowledgeBasePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many KnowledgeBases.
     * @param {KnowledgeBaseCreateManyArgs} args - Arguments to create many KnowledgeBases.
     * @example
     * // Create many KnowledgeBases
     * const knowledgeBase = await prisma.knowledgeBase.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends KnowledgeBaseCreateManyArgs>(args?: SelectSubset<T, KnowledgeBaseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many KnowledgeBases and returns the data saved in the database.
     * @param {KnowledgeBaseCreateManyAndReturnArgs} args - Arguments to create many KnowledgeBases.
     * @example
     * // Create many KnowledgeBases
     * const knowledgeBase = await prisma.knowledgeBase.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many KnowledgeBases and only return the `id`
     * const knowledgeBaseWithIdOnly = await prisma.knowledgeBase.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends KnowledgeBaseCreateManyAndReturnArgs>(args?: SelectSubset<T, KnowledgeBaseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KnowledgeBasePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a KnowledgeBase.
     * @param {KnowledgeBaseDeleteArgs} args - Arguments to delete one KnowledgeBase.
     * @example
     * // Delete one KnowledgeBase
     * const KnowledgeBase = await prisma.knowledgeBase.delete({
     *   where: {
     *     // ... filter to delete one KnowledgeBase
     *   }
     * })
     * 
     */
    delete<T extends KnowledgeBaseDeleteArgs>(args: SelectSubset<T, KnowledgeBaseDeleteArgs<ExtArgs>>): Prisma__KnowledgeBaseClient<$Result.GetResult<Prisma.$KnowledgeBasePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one KnowledgeBase.
     * @param {KnowledgeBaseUpdateArgs} args - Arguments to update one KnowledgeBase.
     * @example
     * // Update one KnowledgeBase
     * const knowledgeBase = await prisma.knowledgeBase.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends KnowledgeBaseUpdateArgs>(args: SelectSubset<T, KnowledgeBaseUpdateArgs<ExtArgs>>): Prisma__KnowledgeBaseClient<$Result.GetResult<Prisma.$KnowledgeBasePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more KnowledgeBases.
     * @param {KnowledgeBaseDeleteManyArgs} args - Arguments to filter KnowledgeBases to delete.
     * @example
     * // Delete a few KnowledgeBases
     * const { count } = await prisma.knowledgeBase.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends KnowledgeBaseDeleteManyArgs>(args?: SelectSubset<T, KnowledgeBaseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more KnowledgeBases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KnowledgeBaseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many KnowledgeBases
     * const knowledgeBase = await prisma.knowledgeBase.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends KnowledgeBaseUpdateManyArgs>(args: SelectSubset<T, KnowledgeBaseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one KnowledgeBase.
     * @param {KnowledgeBaseUpsertArgs} args - Arguments to update or create a KnowledgeBase.
     * @example
     * // Update or create a KnowledgeBase
     * const knowledgeBase = await prisma.knowledgeBase.upsert({
     *   create: {
     *     // ... data to create a KnowledgeBase
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the KnowledgeBase we want to update
     *   }
     * })
     */
    upsert<T extends KnowledgeBaseUpsertArgs>(args: SelectSubset<T, KnowledgeBaseUpsertArgs<ExtArgs>>): Prisma__KnowledgeBaseClient<$Result.GetResult<Prisma.$KnowledgeBasePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of KnowledgeBases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KnowledgeBaseCountArgs} args - Arguments to filter KnowledgeBases to count.
     * @example
     * // Count the number of KnowledgeBases
     * const count = await prisma.knowledgeBase.count({
     *   where: {
     *     // ... the filter for the KnowledgeBases we want to count
     *   }
     * })
    **/
    count<T extends KnowledgeBaseCountArgs>(
      args?: Subset<T, KnowledgeBaseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], KnowledgeBaseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a KnowledgeBase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KnowledgeBaseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends KnowledgeBaseAggregateArgs>(args: Subset<T, KnowledgeBaseAggregateArgs>): Prisma.PrismaPromise<GetKnowledgeBaseAggregateType<T>>

    /**
     * Group by KnowledgeBase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KnowledgeBaseGroupByArgs} args - Group by arguments.
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
      T extends KnowledgeBaseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: KnowledgeBaseGroupByArgs['orderBy'] }
        : { orderBy?: KnowledgeBaseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, KnowledgeBaseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKnowledgeBaseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the KnowledgeBase model
   */
  readonly fields: KnowledgeBaseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for KnowledgeBase.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__KnowledgeBaseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the KnowledgeBase model
   */ 
  interface KnowledgeBaseFieldRefs {
    readonly id: FieldRef<"KnowledgeBase", 'String'>
    readonly title: FieldRef<"KnowledgeBase", 'String'>
    readonly slug: FieldRef<"KnowledgeBase", 'String'>
    readonly content: FieldRef<"KnowledgeBase", 'String'>
    readonly excerpt: FieldRef<"KnowledgeBase", 'String'>
    readonly category: FieldRef<"KnowledgeBase", 'String'>
    readonly tags: FieldRef<"KnowledgeBase", 'String[]'>
    readonly isPublished: FieldRef<"KnowledgeBase", 'Boolean'>
    readonly viewCount: FieldRef<"KnowledgeBase", 'Int'>
    readonly helpfulCount: FieldRef<"KnowledgeBase", 'Int'>
    readonly authorId: FieldRef<"KnowledgeBase", 'String'>
    readonly authorName: FieldRef<"KnowledgeBase", 'String'>
    readonly createdAt: FieldRef<"KnowledgeBase", 'DateTime'>
    readonly updatedAt: FieldRef<"KnowledgeBase", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * KnowledgeBase findUnique
   */
  export type KnowledgeBaseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KnowledgeBase
     */
    select?: KnowledgeBaseSelect<ExtArgs> | null
    /**
     * Filter, which KnowledgeBase to fetch.
     */
    where: KnowledgeBaseWhereUniqueInput
  }

  /**
   * KnowledgeBase findUniqueOrThrow
   */
  export type KnowledgeBaseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KnowledgeBase
     */
    select?: KnowledgeBaseSelect<ExtArgs> | null
    /**
     * Filter, which KnowledgeBase to fetch.
     */
    where: KnowledgeBaseWhereUniqueInput
  }

  /**
   * KnowledgeBase findFirst
   */
  export type KnowledgeBaseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KnowledgeBase
     */
    select?: KnowledgeBaseSelect<ExtArgs> | null
    /**
     * Filter, which KnowledgeBase to fetch.
     */
    where?: KnowledgeBaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KnowledgeBases to fetch.
     */
    orderBy?: KnowledgeBaseOrderByWithRelationInput | KnowledgeBaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for KnowledgeBases.
     */
    cursor?: KnowledgeBaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KnowledgeBases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KnowledgeBases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of KnowledgeBases.
     */
    distinct?: KnowledgeBaseScalarFieldEnum | KnowledgeBaseScalarFieldEnum[]
  }

  /**
   * KnowledgeBase findFirstOrThrow
   */
  export type KnowledgeBaseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KnowledgeBase
     */
    select?: KnowledgeBaseSelect<ExtArgs> | null
    /**
     * Filter, which KnowledgeBase to fetch.
     */
    where?: KnowledgeBaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KnowledgeBases to fetch.
     */
    orderBy?: KnowledgeBaseOrderByWithRelationInput | KnowledgeBaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for KnowledgeBases.
     */
    cursor?: KnowledgeBaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KnowledgeBases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KnowledgeBases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of KnowledgeBases.
     */
    distinct?: KnowledgeBaseScalarFieldEnum | KnowledgeBaseScalarFieldEnum[]
  }

  /**
   * KnowledgeBase findMany
   */
  export type KnowledgeBaseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KnowledgeBase
     */
    select?: KnowledgeBaseSelect<ExtArgs> | null
    /**
     * Filter, which KnowledgeBases to fetch.
     */
    where?: KnowledgeBaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KnowledgeBases to fetch.
     */
    orderBy?: KnowledgeBaseOrderByWithRelationInput | KnowledgeBaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing KnowledgeBases.
     */
    cursor?: KnowledgeBaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KnowledgeBases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KnowledgeBases.
     */
    skip?: number
    distinct?: KnowledgeBaseScalarFieldEnum | KnowledgeBaseScalarFieldEnum[]
  }

  /**
   * KnowledgeBase create
   */
  export type KnowledgeBaseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KnowledgeBase
     */
    select?: KnowledgeBaseSelect<ExtArgs> | null
    /**
     * The data needed to create a KnowledgeBase.
     */
    data: XOR<KnowledgeBaseCreateInput, KnowledgeBaseUncheckedCreateInput>
  }

  /**
   * KnowledgeBase createMany
   */
  export type KnowledgeBaseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many KnowledgeBases.
     */
    data: KnowledgeBaseCreateManyInput | KnowledgeBaseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * KnowledgeBase createManyAndReturn
   */
  export type KnowledgeBaseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KnowledgeBase
     */
    select?: KnowledgeBaseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many KnowledgeBases.
     */
    data: KnowledgeBaseCreateManyInput | KnowledgeBaseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * KnowledgeBase update
   */
  export type KnowledgeBaseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KnowledgeBase
     */
    select?: KnowledgeBaseSelect<ExtArgs> | null
    /**
     * The data needed to update a KnowledgeBase.
     */
    data: XOR<KnowledgeBaseUpdateInput, KnowledgeBaseUncheckedUpdateInput>
    /**
     * Choose, which KnowledgeBase to update.
     */
    where: KnowledgeBaseWhereUniqueInput
  }

  /**
   * KnowledgeBase updateMany
   */
  export type KnowledgeBaseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update KnowledgeBases.
     */
    data: XOR<KnowledgeBaseUpdateManyMutationInput, KnowledgeBaseUncheckedUpdateManyInput>
    /**
     * Filter which KnowledgeBases to update
     */
    where?: KnowledgeBaseWhereInput
  }

  /**
   * KnowledgeBase upsert
   */
  export type KnowledgeBaseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KnowledgeBase
     */
    select?: KnowledgeBaseSelect<ExtArgs> | null
    /**
     * The filter to search for the KnowledgeBase to update in case it exists.
     */
    where: KnowledgeBaseWhereUniqueInput
    /**
     * In case the KnowledgeBase found by the `where` argument doesn't exist, create a new KnowledgeBase with this data.
     */
    create: XOR<KnowledgeBaseCreateInput, KnowledgeBaseUncheckedCreateInput>
    /**
     * In case the KnowledgeBase was found with the provided `where` argument, update it with this data.
     */
    update: XOR<KnowledgeBaseUpdateInput, KnowledgeBaseUncheckedUpdateInput>
  }

  /**
   * KnowledgeBase delete
   */
  export type KnowledgeBaseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KnowledgeBase
     */
    select?: KnowledgeBaseSelect<ExtArgs> | null
    /**
     * Filter which KnowledgeBase to delete.
     */
    where: KnowledgeBaseWhereUniqueInput
  }

  /**
   * KnowledgeBase deleteMany
   */
  export type KnowledgeBaseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which KnowledgeBases to delete
     */
    where?: KnowledgeBaseWhereInput
  }

  /**
   * KnowledgeBase without action
   */
  export type KnowledgeBaseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KnowledgeBase
     */
    select?: KnowledgeBaseSelect<ExtArgs> | null
  }


  /**
   * Model FAQ
   */

  export type AggregateFAQ = {
    _count: FAQCountAggregateOutputType | null
    _avg: FAQAvgAggregateOutputType | null
    _sum: FAQSumAggregateOutputType | null
    _min: FAQMinAggregateOutputType | null
    _max: FAQMaxAggregateOutputType | null
  }

  export type FAQAvgAggregateOutputType = {
    sortOrder: number | null
  }

  export type FAQSumAggregateOutputType = {
    sortOrder: number | null
  }

  export type FAQMinAggregateOutputType = {
    id: string | null
    question: string | null
    answer: string | null
    category: string | null
    sortOrder: number | null
    isPublished: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FAQMaxAggregateOutputType = {
    id: string | null
    question: string | null
    answer: string | null
    category: string | null
    sortOrder: number | null
    isPublished: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FAQCountAggregateOutputType = {
    id: number
    question: number
    answer: number
    category: number
    sortOrder: number
    isPublished: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FAQAvgAggregateInputType = {
    sortOrder?: true
  }

  export type FAQSumAggregateInputType = {
    sortOrder?: true
  }

  export type FAQMinAggregateInputType = {
    id?: true
    question?: true
    answer?: true
    category?: true
    sortOrder?: true
    isPublished?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FAQMaxAggregateInputType = {
    id?: true
    question?: true
    answer?: true
    category?: true
    sortOrder?: true
    isPublished?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FAQCountAggregateInputType = {
    id?: true
    question?: true
    answer?: true
    category?: true
    sortOrder?: true
    isPublished?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FAQAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FAQ to aggregate.
     */
    where?: FAQWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FAQS to fetch.
     */
    orderBy?: FAQOrderByWithRelationInput | FAQOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FAQWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FAQS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FAQS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FAQS
    **/
    _count?: true | FAQCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FAQAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FAQSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FAQMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FAQMaxAggregateInputType
  }

  export type GetFAQAggregateType<T extends FAQAggregateArgs> = {
        [P in keyof T & keyof AggregateFAQ]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFAQ[P]>
      : GetScalarType<T[P], AggregateFAQ[P]>
  }




  export type FAQGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FAQWhereInput
    orderBy?: FAQOrderByWithAggregationInput | FAQOrderByWithAggregationInput[]
    by: FAQScalarFieldEnum[] | FAQScalarFieldEnum
    having?: FAQScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FAQCountAggregateInputType | true
    _avg?: FAQAvgAggregateInputType
    _sum?: FAQSumAggregateInputType
    _min?: FAQMinAggregateInputType
    _max?: FAQMaxAggregateInputType
  }

  export type FAQGroupByOutputType = {
    id: string
    question: string
    answer: string
    category: string
    sortOrder: number
    isPublished: boolean
    createdAt: Date
    updatedAt: Date
    _count: FAQCountAggregateOutputType | null
    _avg: FAQAvgAggregateOutputType | null
    _sum: FAQSumAggregateOutputType | null
    _min: FAQMinAggregateOutputType | null
    _max: FAQMaxAggregateOutputType | null
  }

  type GetFAQGroupByPayload<T extends FAQGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FAQGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FAQGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FAQGroupByOutputType[P]>
            : GetScalarType<T[P], FAQGroupByOutputType[P]>
        }
      >
    >


  export type FAQSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    question?: boolean
    answer?: boolean
    category?: boolean
    sortOrder?: boolean
    isPublished?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["fAQ"]>

  export type FAQSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    question?: boolean
    answer?: boolean
    category?: boolean
    sortOrder?: boolean
    isPublished?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["fAQ"]>

  export type FAQSelectScalar = {
    id?: boolean
    question?: boolean
    answer?: boolean
    category?: boolean
    sortOrder?: boolean
    isPublished?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $FAQPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FAQ"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      question: string
      answer: string
      category: string
      sortOrder: number
      isPublished: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["fAQ"]>
    composites: {}
  }

  type FAQGetPayload<S extends boolean | null | undefined | FAQDefaultArgs> = $Result.GetResult<Prisma.$FAQPayload, S>

  type FAQCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<FAQFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: FAQCountAggregateInputType | true
    }

  export interface FAQDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FAQ'], meta: { name: 'FAQ' } }
    /**
     * Find zero or one FAQ that matches the filter.
     * @param {FAQFindUniqueArgs} args - Arguments to find a FAQ
     * @example
     * // Get one FAQ
     * const fAQ = await prisma.fAQ.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FAQFindUniqueArgs>(args: SelectSubset<T, FAQFindUniqueArgs<ExtArgs>>): Prisma__FAQClient<$Result.GetResult<Prisma.$FAQPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one FAQ that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {FAQFindUniqueOrThrowArgs} args - Arguments to find a FAQ
     * @example
     * // Get one FAQ
     * const fAQ = await prisma.fAQ.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FAQFindUniqueOrThrowArgs>(args: SelectSubset<T, FAQFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FAQClient<$Result.GetResult<Prisma.$FAQPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first FAQ that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FAQFindFirstArgs} args - Arguments to find a FAQ
     * @example
     * // Get one FAQ
     * const fAQ = await prisma.fAQ.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FAQFindFirstArgs>(args?: SelectSubset<T, FAQFindFirstArgs<ExtArgs>>): Prisma__FAQClient<$Result.GetResult<Prisma.$FAQPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first FAQ that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FAQFindFirstOrThrowArgs} args - Arguments to find a FAQ
     * @example
     * // Get one FAQ
     * const fAQ = await prisma.fAQ.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FAQFindFirstOrThrowArgs>(args?: SelectSubset<T, FAQFindFirstOrThrowArgs<ExtArgs>>): Prisma__FAQClient<$Result.GetResult<Prisma.$FAQPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more FAQS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FAQFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FAQS
     * const fAQS = await prisma.fAQ.findMany()
     * 
     * // Get first 10 FAQS
     * const fAQS = await prisma.fAQ.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fAQWithIdOnly = await prisma.fAQ.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FAQFindManyArgs>(args?: SelectSubset<T, FAQFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FAQPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a FAQ.
     * @param {FAQCreateArgs} args - Arguments to create a FAQ.
     * @example
     * // Create one FAQ
     * const FAQ = await prisma.fAQ.create({
     *   data: {
     *     // ... data to create a FAQ
     *   }
     * })
     * 
     */
    create<T extends FAQCreateArgs>(args: SelectSubset<T, FAQCreateArgs<ExtArgs>>): Prisma__FAQClient<$Result.GetResult<Prisma.$FAQPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many FAQS.
     * @param {FAQCreateManyArgs} args - Arguments to create many FAQS.
     * @example
     * // Create many FAQS
     * const fAQ = await prisma.fAQ.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FAQCreateManyArgs>(args?: SelectSubset<T, FAQCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FAQS and returns the data saved in the database.
     * @param {FAQCreateManyAndReturnArgs} args - Arguments to create many FAQS.
     * @example
     * // Create many FAQS
     * const fAQ = await prisma.fAQ.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FAQS and only return the `id`
     * const fAQWithIdOnly = await prisma.fAQ.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FAQCreateManyAndReturnArgs>(args?: SelectSubset<T, FAQCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FAQPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a FAQ.
     * @param {FAQDeleteArgs} args - Arguments to delete one FAQ.
     * @example
     * // Delete one FAQ
     * const FAQ = await prisma.fAQ.delete({
     *   where: {
     *     // ... filter to delete one FAQ
     *   }
     * })
     * 
     */
    delete<T extends FAQDeleteArgs>(args: SelectSubset<T, FAQDeleteArgs<ExtArgs>>): Prisma__FAQClient<$Result.GetResult<Prisma.$FAQPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one FAQ.
     * @param {FAQUpdateArgs} args - Arguments to update one FAQ.
     * @example
     * // Update one FAQ
     * const fAQ = await prisma.fAQ.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FAQUpdateArgs>(args: SelectSubset<T, FAQUpdateArgs<ExtArgs>>): Prisma__FAQClient<$Result.GetResult<Prisma.$FAQPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more FAQS.
     * @param {FAQDeleteManyArgs} args - Arguments to filter FAQS to delete.
     * @example
     * // Delete a few FAQS
     * const { count } = await prisma.fAQ.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FAQDeleteManyArgs>(args?: SelectSubset<T, FAQDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FAQS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FAQUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FAQS
     * const fAQ = await prisma.fAQ.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FAQUpdateManyArgs>(args: SelectSubset<T, FAQUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FAQ.
     * @param {FAQUpsertArgs} args - Arguments to update or create a FAQ.
     * @example
     * // Update or create a FAQ
     * const fAQ = await prisma.fAQ.upsert({
     *   create: {
     *     // ... data to create a FAQ
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FAQ we want to update
     *   }
     * })
     */
    upsert<T extends FAQUpsertArgs>(args: SelectSubset<T, FAQUpsertArgs<ExtArgs>>): Prisma__FAQClient<$Result.GetResult<Prisma.$FAQPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of FAQS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FAQCountArgs} args - Arguments to filter FAQS to count.
     * @example
     * // Count the number of FAQS
     * const count = await prisma.fAQ.count({
     *   where: {
     *     // ... the filter for the FAQS we want to count
     *   }
     * })
    **/
    count<T extends FAQCountArgs>(
      args?: Subset<T, FAQCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FAQCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FAQ.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FAQAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FAQAggregateArgs>(args: Subset<T, FAQAggregateArgs>): Prisma.PrismaPromise<GetFAQAggregateType<T>>

    /**
     * Group by FAQ.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FAQGroupByArgs} args - Group by arguments.
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
      T extends FAQGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FAQGroupByArgs['orderBy'] }
        : { orderBy?: FAQGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FAQGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFAQGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FAQ model
   */
  readonly fields: FAQFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FAQ.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FAQClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the FAQ model
   */ 
  interface FAQFieldRefs {
    readonly id: FieldRef<"FAQ", 'String'>
    readonly question: FieldRef<"FAQ", 'String'>
    readonly answer: FieldRef<"FAQ", 'String'>
    readonly category: FieldRef<"FAQ", 'String'>
    readonly sortOrder: FieldRef<"FAQ", 'Int'>
    readonly isPublished: FieldRef<"FAQ", 'Boolean'>
    readonly createdAt: FieldRef<"FAQ", 'DateTime'>
    readonly updatedAt: FieldRef<"FAQ", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FAQ findUnique
   */
  export type FAQFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FAQ
     */
    select?: FAQSelect<ExtArgs> | null
    /**
     * Filter, which FAQ to fetch.
     */
    where: FAQWhereUniqueInput
  }

  /**
   * FAQ findUniqueOrThrow
   */
  export type FAQFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FAQ
     */
    select?: FAQSelect<ExtArgs> | null
    /**
     * Filter, which FAQ to fetch.
     */
    where: FAQWhereUniqueInput
  }

  /**
   * FAQ findFirst
   */
  export type FAQFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FAQ
     */
    select?: FAQSelect<ExtArgs> | null
    /**
     * Filter, which FAQ to fetch.
     */
    where?: FAQWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FAQS to fetch.
     */
    orderBy?: FAQOrderByWithRelationInput | FAQOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FAQS.
     */
    cursor?: FAQWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FAQS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FAQS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FAQS.
     */
    distinct?: FAQScalarFieldEnum | FAQScalarFieldEnum[]
  }

  /**
   * FAQ findFirstOrThrow
   */
  export type FAQFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FAQ
     */
    select?: FAQSelect<ExtArgs> | null
    /**
     * Filter, which FAQ to fetch.
     */
    where?: FAQWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FAQS to fetch.
     */
    orderBy?: FAQOrderByWithRelationInput | FAQOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FAQS.
     */
    cursor?: FAQWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FAQS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FAQS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FAQS.
     */
    distinct?: FAQScalarFieldEnum | FAQScalarFieldEnum[]
  }

  /**
   * FAQ findMany
   */
  export type FAQFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FAQ
     */
    select?: FAQSelect<ExtArgs> | null
    /**
     * Filter, which FAQS to fetch.
     */
    where?: FAQWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FAQS to fetch.
     */
    orderBy?: FAQOrderByWithRelationInput | FAQOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FAQS.
     */
    cursor?: FAQWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FAQS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FAQS.
     */
    skip?: number
    distinct?: FAQScalarFieldEnum | FAQScalarFieldEnum[]
  }

  /**
   * FAQ create
   */
  export type FAQCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FAQ
     */
    select?: FAQSelect<ExtArgs> | null
    /**
     * The data needed to create a FAQ.
     */
    data: XOR<FAQCreateInput, FAQUncheckedCreateInput>
  }

  /**
   * FAQ createMany
   */
  export type FAQCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FAQS.
     */
    data: FAQCreateManyInput | FAQCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FAQ createManyAndReturn
   */
  export type FAQCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FAQ
     */
    select?: FAQSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many FAQS.
     */
    data: FAQCreateManyInput | FAQCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FAQ update
   */
  export type FAQUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FAQ
     */
    select?: FAQSelect<ExtArgs> | null
    /**
     * The data needed to update a FAQ.
     */
    data: XOR<FAQUpdateInput, FAQUncheckedUpdateInput>
    /**
     * Choose, which FAQ to update.
     */
    where: FAQWhereUniqueInput
  }

  /**
   * FAQ updateMany
   */
  export type FAQUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FAQS.
     */
    data: XOR<FAQUpdateManyMutationInput, FAQUncheckedUpdateManyInput>
    /**
     * Filter which FAQS to update
     */
    where?: FAQWhereInput
  }

  /**
   * FAQ upsert
   */
  export type FAQUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FAQ
     */
    select?: FAQSelect<ExtArgs> | null
    /**
     * The filter to search for the FAQ to update in case it exists.
     */
    where: FAQWhereUniqueInput
    /**
     * In case the FAQ found by the `where` argument doesn't exist, create a new FAQ with this data.
     */
    create: XOR<FAQCreateInput, FAQUncheckedCreateInput>
    /**
     * In case the FAQ was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FAQUpdateInput, FAQUncheckedUpdateInput>
  }

  /**
   * FAQ delete
   */
  export type FAQDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FAQ
     */
    select?: FAQSelect<ExtArgs> | null
    /**
     * Filter which FAQ to delete.
     */
    where: FAQWhereUniqueInput
  }

  /**
   * FAQ deleteMany
   */
  export type FAQDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FAQS to delete
     */
    where?: FAQWhereInput
  }

  /**
   * FAQ without action
   */
  export type FAQDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FAQ
     */
    select?: FAQSelect<ExtArgs> | null
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


  export const SupportTicketScalarFieldEnum: {
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

  export type SupportTicketScalarFieldEnum = (typeof SupportTicketScalarFieldEnum)[keyof typeof SupportTicketScalarFieldEnum]


  export const TicketMessageScalarFieldEnum: {
    id: 'id',
    ticketId: 'ticketId',
    senderId: 'senderId',
    senderType: 'senderType',
    senderName: 'senderName',
    message: 'message',
    isInternal: 'isInternal',
    createdAt: 'createdAt'
  };

  export type TicketMessageScalarFieldEnum = (typeof TicketMessageScalarFieldEnum)[keyof typeof TicketMessageScalarFieldEnum]


  export const TicketAttachmentScalarFieldEnum: {
    id: 'id',
    ticketId: 'ticketId',
    name: 'name',
    url: 'url',
    mimeType: 'mimeType',
    size: 'size',
    uploadedBy: 'uploadedBy',
    uploadedAt: 'uploadedAt'
  };

  export type TicketAttachmentScalarFieldEnum = (typeof TicketAttachmentScalarFieldEnum)[keyof typeof TicketAttachmentScalarFieldEnum]


  export const KnowledgeBaseScalarFieldEnum: {
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

  export type KnowledgeBaseScalarFieldEnum = (typeof KnowledgeBaseScalarFieldEnum)[keyof typeof KnowledgeBaseScalarFieldEnum]


  export const FAQScalarFieldEnum: {
    id: 'id',
    question: 'question',
    answer: 'answer',
    category: 'category',
    sortOrder: 'sortOrder',
    isPublished: 'isPublished',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FAQScalarFieldEnum = (typeof FAQScalarFieldEnum)[keyof typeof FAQScalarFieldEnum]


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
   * Reference to a field of type 'TicketCategory'
   */
  export type EnumTicketCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TicketCategory'>
    


  /**
   * Reference to a field of type 'TicketCategory[]'
   */
  export type ListEnumTicketCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TicketCategory[]'>
    


  /**
   * Reference to a field of type 'TicketPriority'
   */
  export type EnumTicketPriorityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TicketPriority'>
    


  /**
   * Reference to a field of type 'TicketPriority[]'
   */
  export type ListEnumTicketPriorityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TicketPriority[]'>
    


  /**
   * Reference to a field of type 'TicketStatus'
   */
  export type EnumTicketStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TicketStatus'>
    


  /**
   * Reference to a field of type 'TicketStatus[]'
   */
  export type ListEnumTicketStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TicketStatus[]'>
    


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


  export type SupportTicketWhereInput = {
    AND?: SupportTicketWhereInput | SupportTicketWhereInput[]
    OR?: SupportTicketWhereInput[]
    NOT?: SupportTicketWhereInput | SupportTicketWhereInput[]
    id?: StringFilter<"SupportTicket"> | string
    ticketNo?: StringFilter<"SupportTicket"> | string
    schoolId?: StringNullableFilter<"SupportTicket"> | string | null
    userId?: StringFilter<"SupportTicket"> | string
    userType?: StringFilter<"SupportTicket"> | string
    userName?: StringFilter<"SupportTicket"> | string
    userEmail?: StringFilter<"SupportTicket"> | string
    subject?: StringFilter<"SupportTicket"> | string
    description?: StringFilter<"SupportTicket"> | string
    category?: EnumTicketCategoryFilter<"SupportTicket"> | $Enums.TicketCategory
    priority?: EnumTicketPriorityFilter<"SupportTicket"> | $Enums.TicketPriority
    status?: EnumTicketStatusFilter<"SupportTicket"> | $Enums.TicketStatus
    assignedTo?: StringNullableFilter<"SupportTicket"> | string | null
    assignedAt?: DateTimeNullableFilter<"SupportTicket"> | Date | string | null
    resolvedAt?: DateTimeNullableFilter<"SupportTicket"> | Date | string | null
    resolution?: StringNullableFilter<"SupportTicket"> | string | null
    rating?: IntNullableFilter<"SupportTicket"> | number | null
    feedback?: StringNullableFilter<"SupportTicket"> | string | null
    createdAt?: DateTimeFilter<"SupportTicket"> | Date | string
    updatedAt?: DateTimeFilter<"SupportTicket"> | Date | string
    messages?: TicketMessageListRelationFilter
    attachments?: TicketAttachmentListRelationFilter
  }

  export type SupportTicketOrderByWithRelationInput = {
    id?: SortOrder
    ticketNo?: SortOrder
    schoolId?: SortOrderInput | SortOrder
    userId?: SortOrder
    userType?: SortOrder
    userName?: SortOrder
    userEmail?: SortOrder
    subject?: SortOrder
    description?: SortOrder
    category?: SortOrder
    priority?: SortOrder
    status?: SortOrder
    assignedTo?: SortOrderInput | SortOrder
    assignedAt?: SortOrderInput | SortOrder
    resolvedAt?: SortOrderInput | SortOrder
    resolution?: SortOrderInput | SortOrder
    rating?: SortOrderInput | SortOrder
    feedback?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    messages?: TicketMessageOrderByRelationAggregateInput
    attachments?: TicketAttachmentOrderByRelationAggregateInput
  }

  export type SupportTicketWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    ticketNo?: string
    AND?: SupportTicketWhereInput | SupportTicketWhereInput[]
    OR?: SupportTicketWhereInput[]
    NOT?: SupportTicketWhereInput | SupportTicketWhereInput[]
    schoolId?: StringNullableFilter<"SupportTicket"> | string | null
    userId?: StringFilter<"SupportTicket"> | string
    userType?: StringFilter<"SupportTicket"> | string
    userName?: StringFilter<"SupportTicket"> | string
    userEmail?: StringFilter<"SupportTicket"> | string
    subject?: StringFilter<"SupportTicket"> | string
    description?: StringFilter<"SupportTicket"> | string
    category?: EnumTicketCategoryFilter<"SupportTicket"> | $Enums.TicketCategory
    priority?: EnumTicketPriorityFilter<"SupportTicket"> | $Enums.TicketPriority
    status?: EnumTicketStatusFilter<"SupportTicket"> | $Enums.TicketStatus
    assignedTo?: StringNullableFilter<"SupportTicket"> | string | null
    assignedAt?: DateTimeNullableFilter<"SupportTicket"> | Date | string | null
    resolvedAt?: DateTimeNullableFilter<"SupportTicket"> | Date | string | null
    resolution?: StringNullableFilter<"SupportTicket"> | string | null
    rating?: IntNullableFilter<"SupportTicket"> | number | null
    feedback?: StringNullableFilter<"SupportTicket"> | string | null
    createdAt?: DateTimeFilter<"SupportTicket"> | Date | string
    updatedAt?: DateTimeFilter<"SupportTicket"> | Date | string
    messages?: TicketMessageListRelationFilter
    attachments?: TicketAttachmentListRelationFilter
  }, "id" | "ticketNo">

  export type SupportTicketOrderByWithAggregationInput = {
    id?: SortOrder
    ticketNo?: SortOrder
    schoolId?: SortOrderInput | SortOrder
    userId?: SortOrder
    userType?: SortOrder
    userName?: SortOrder
    userEmail?: SortOrder
    subject?: SortOrder
    description?: SortOrder
    category?: SortOrder
    priority?: SortOrder
    status?: SortOrder
    assignedTo?: SortOrderInput | SortOrder
    assignedAt?: SortOrderInput | SortOrder
    resolvedAt?: SortOrderInput | SortOrder
    resolution?: SortOrderInput | SortOrder
    rating?: SortOrderInput | SortOrder
    feedback?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SupportTicketCountOrderByAggregateInput
    _avg?: SupportTicketAvgOrderByAggregateInput
    _max?: SupportTicketMaxOrderByAggregateInput
    _min?: SupportTicketMinOrderByAggregateInput
    _sum?: SupportTicketSumOrderByAggregateInput
  }

  export type SupportTicketScalarWhereWithAggregatesInput = {
    AND?: SupportTicketScalarWhereWithAggregatesInput | SupportTicketScalarWhereWithAggregatesInput[]
    OR?: SupportTicketScalarWhereWithAggregatesInput[]
    NOT?: SupportTicketScalarWhereWithAggregatesInput | SupportTicketScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SupportTicket"> | string
    ticketNo?: StringWithAggregatesFilter<"SupportTicket"> | string
    schoolId?: StringNullableWithAggregatesFilter<"SupportTicket"> | string | null
    userId?: StringWithAggregatesFilter<"SupportTicket"> | string
    userType?: StringWithAggregatesFilter<"SupportTicket"> | string
    userName?: StringWithAggregatesFilter<"SupportTicket"> | string
    userEmail?: StringWithAggregatesFilter<"SupportTicket"> | string
    subject?: StringWithAggregatesFilter<"SupportTicket"> | string
    description?: StringWithAggregatesFilter<"SupportTicket"> | string
    category?: EnumTicketCategoryWithAggregatesFilter<"SupportTicket"> | $Enums.TicketCategory
    priority?: EnumTicketPriorityWithAggregatesFilter<"SupportTicket"> | $Enums.TicketPriority
    status?: EnumTicketStatusWithAggregatesFilter<"SupportTicket"> | $Enums.TicketStatus
    assignedTo?: StringNullableWithAggregatesFilter<"SupportTicket"> | string | null
    assignedAt?: DateTimeNullableWithAggregatesFilter<"SupportTicket"> | Date | string | null
    resolvedAt?: DateTimeNullableWithAggregatesFilter<"SupportTicket"> | Date | string | null
    resolution?: StringNullableWithAggregatesFilter<"SupportTicket"> | string | null
    rating?: IntNullableWithAggregatesFilter<"SupportTicket"> | number | null
    feedback?: StringNullableWithAggregatesFilter<"SupportTicket"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"SupportTicket"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SupportTicket"> | Date | string
  }

  export type TicketMessageWhereInput = {
    AND?: TicketMessageWhereInput | TicketMessageWhereInput[]
    OR?: TicketMessageWhereInput[]
    NOT?: TicketMessageWhereInput | TicketMessageWhereInput[]
    id?: StringFilter<"TicketMessage"> | string
    ticketId?: StringFilter<"TicketMessage"> | string
    senderId?: StringFilter<"TicketMessage"> | string
    senderType?: StringFilter<"TicketMessage"> | string
    senderName?: StringFilter<"TicketMessage"> | string
    message?: StringFilter<"TicketMessage"> | string
    isInternal?: BoolFilter<"TicketMessage"> | boolean
    createdAt?: DateTimeFilter<"TicketMessage"> | Date | string
    ticket?: XOR<SupportTicketRelationFilter, SupportTicketWhereInput>
  }

  export type TicketMessageOrderByWithRelationInput = {
    id?: SortOrder
    ticketId?: SortOrder
    senderId?: SortOrder
    senderType?: SortOrder
    senderName?: SortOrder
    message?: SortOrder
    isInternal?: SortOrder
    createdAt?: SortOrder
    ticket?: SupportTicketOrderByWithRelationInput
  }

  export type TicketMessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TicketMessageWhereInput | TicketMessageWhereInput[]
    OR?: TicketMessageWhereInput[]
    NOT?: TicketMessageWhereInput | TicketMessageWhereInput[]
    ticketId?: StringFilter<"TicketMessage"> | string
    senderId?: StringFilter<"TicketMessage"> | string
    senderType?: StringFilter<"TicketMessage"> | string
    senderName?: StringFilter<"TicketMessage"> | string
    message?: StringFilter<"TicketMessage"> | string
    isInternal?: BoolFilter<"TicketMessage"> | boolean
    createdAt?: DateTimeFilter<"TicketMessage"> | Date | string
    ticket?: XOR<SupportTicketRelationFilter, SupportTicketWhereInput>
  }, "id">

  export type TicketMessageOrderByWithAggregationInput = {
    id?: SortOrder
    ticketId?: SortOrder
    senderId?: SortOrder
    senderType?: SortOrder
    senderName?: SortOrder
    message?: SortOrder
    isInternal?: SortOrder
    createdAt?: SortOrder
    _count?: TicketMessageCountOrderByAggregateInput
    _max?: TicketMessageMaxOrderByAggregateInput
    _min?: TicketMessageMinOrderByAggregateInput
  }

  export type TicketMessageScalarWhereWithAggregatesInput = {
    AND?: TicketMessageScalarWhereWithAggregatesInput | TicketMessageScalarWhereWithAggregatesInput[]
    OR?: TicketMessageScalarWhereWithAggregatesInput[]
    NOT?: TicketMessageScalarWhereWithAggregatesInput | TicketMessageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TicketMessage"> | string
    ticketId?: StringWithAggregatesFilter<"TicketMessage"> | string
    senderId?: StringWithAggregatesFilter<"TicketMessage"> | string
    senderType?: StringWithAggregatesFilter<"TicketMessage"> | string
    senderName?: StringWithAggregatesFilter<"TicketMessage"> | string
    message?: StringWithAggregatesFilter<"TicketMessage"> | string
    isInternal?: BoolWithAggregatesFilter<"TicketMessage"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"TicketMessage"> | Date | string
  }

  export type TicketAttachmentWhereInput = {
    AND?: TicketAttachmentWhereInput | TicketAttachmentWhereInput[]
    OR?: TicketAttachmentWhereInput[]
    NOT?: TicketAttachmentWhereInput | TicketAttachmentWhereInput[]
    id?: StringFilter<"TicketAttachment"> | string
    ticketId?: StringFilter<"TicketAttachment"> | string
    name?: StringFilter<"TicketAttachment"> | string
    url?: StringFilter<"TicketAttachment"> | string
    mimeType?: StringNullableFilter<"TicketAttachment"> | string | null
    size?: IntNullableFilter<"TicketAttachment"> | number | null
    uploadedBy?: StringFilter<"TicketAttachment"> | string
    uploadedAt?: DateTimeFilter<"TicketAttachment"> | Date | string
    ticket?: XOR<SupportTicketRelationFilter, SupportTicketWhereInput>
  }

  export type TicketAttachmentOrderByWithRelationInput = {
    id?: SortOrder
    ticketId?: SortOrder
    name?: SortOrder
    url?: SortOrder
    mimeType?: SortOrderInput | SortOrder
    size?: SortOrderInput | SortOrder
    uploadedBy?: SortOrder
    uploadedAt?: SortOrder
    ticket?: SupportTicketOrderByWithRelationInput
  }

  export type TicketAttachmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TicketAttachmentWhereInput | TicketAttachmentWhereInput[]
    OR?: TicketAttachmentWhereInput[]
    NOT?: TicketAttachmentWhereInput | TicketAttachmentWhereInput[]
    ticketId?: StringFilter<"TicketAttachment"> | string
    name?: StringFilter<"TicketAttachment"> | string
    url?: StringFilter<"TicketAttachment"> | string
    mimeType?: StringNullableFilter<"TicketAttachment"> | string | null
    size?: IntNullableFilter<"TicketAttachment"> | number | null
    uploadedBy?: StringFilter<"TicketAttachment"> | string
    uploadedAt?: DateTimeFilter<"TicketAttachment"> | Date | string
    ticket?: XOR<SupportTicketRelationFilter, SupportTicketWhereInput>
  }, "id">

  export type TicketAttachmentOrderByWithAggregationInput = {
    id?: SortOrder
    ticketId?: SortOrder
    name?: SortOrder
    url?: SortOrder
    mimeType?: SortOrderInput | SortOrder
    size?: SortOrderInput | SortOrder
    uploadedBy?: SortOrder
    uploadedAt?: SortOrder
    _count?: TicketAttachmentCountOrderByAggregateInput
    _avg?: TicketAttachmentAvgOrderByAggregateInput
    _max?: TicketAttachmentMaxOrderByAggregateInput
    _min?: TicketAttachmentMinOrderByAggregateInput
    _sum?: TicketAttachmentSumOrderByAggregateInput
  }

  export type TicketAttachmentScalarWhereWithAggregatesInput = {
    AND?: TicketAttachmentScalarWhereWithAggregatesInput | TicketAttachmentScalarWhereWithAggregatesInput[]
    OR?: TicketAttachmentScalarWhereWithAggregatesInput[]
    NOT?: TicketAttachmentScalarWhereWithAggregatesInput | TicketAttachmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TicketAttachment"> | string
    ticketId?: StringWithAggregatesFilter<"TicketAttachment"> | string
    name?: StringWithAggregatesFilter<"TicketAttachment"> | string
    url?: StringWithAggregatesFilter<"TicketAttachment"> | string
    mimeType?: StringNullableWithAggregatesFilter<"TicketAttachment"> | string | null
    size?: IntNullableWithAggregatesFilter<"TicketAttachment"> | number | null
    uploadedBy?: StringWithAggregatesFilter<"TicketAttachment"> | string
    uploadedAt?: DateTimeWithAggregatesFilter<"TicketAttachment"> | Date | string
  }

  export type KnowledgeBaseWhereInput = {
    AND?: KnowledgeBaseWhereInput | KnowledgeBaseWhereInput[]
    OR?: KnowledgeBaseWhereInput[]
    NOT?: KnowledgeBaseWhereInput | KnowledgeBaseWhereInput[]
    id?: StringFilter<"KnowledgeBase"> | string
    title?: StringFilter<"KnowledgeBase"> | string
    slug?: StringFilter<"KnowledgeBase"> | string
    content?: StringFilter<"KnowledgeBase"> | string
    excerpt?: StringNullableFilter<"KnowledgeBase"> | string | null
    category?: StringFilter<"KnowledgeBase"> | string
    tags?: StringNullableListFilter<"KnowledgeBase">
    isPublished?: BoolFilter<"KnowledgeBase"> | boolean
    viewCount?: IntFilter<"KnowledgeBase"> | number
    helpfulCount?: IntFilter<"KnowledgeBase"> | number
    authorId?: StringFilter<"KnowledgeBase"> | string
    authorName?: StringFilter<"KnowledgeBase"> | string
    createdAt?: DateTimeFilter<"KnowledgeBase"> | Date | string
    updatedAt?: DateTimeFilter<"KnowledgeBase"> | Date | string
  }

  export type KnowledgeBaseOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    content?: SortOrder
    excerpt?: SortOrderInput | SortOrder
    category?: SortOrder
    tags?: SortOrder
    isPublished?: SortOrder
    viewCount?: SortOrder
    helpfulCount?: SortOrder
    authorId?: SortOrder
    authorName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type KnowledgeBaseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: KnowledgeBaseWhereInput | KnowledgeBaseWhereInput[]
    OR?: KnowledgeBaseWhereInput[]
    NOT?: KnowledgeBaseWhereInput | KnowledgeBaseWhereInput[]
    title?: StringFilter<"KnowledgeBase"> | string
    content?: StringFilter<"KnowledgeBase"> | string
    excerpt?: StringNullableFilter<"KnowledgeBase"> | string | null
    category?: StringFilter<"KnowledgeBase"> | string
    tags?: StringNullableListFilter<"KnowledgeBase">
    isPublished?: BoolFilter<"KnowledgeBase"> | boolean
    viewCount?: IntFilter<"KnowledgeBase"> | number
    helpfulCount?: IntFilter<"KnowledgeBase"> | number
    authorId?: StringFilter<"KnowledgeBase"> | string
    authorName?: StringFilter<"KnowledgeBase"> | string
    createdAt?: DateTimeFilter<"KnowledgeBase"> | Date | string
    updatedAt?: DateTimeFilter<"KnowledgeBase"> | Date | string
  }, "id" | "slug">

  export type KnowledgeBaseOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    content?: SortOrder
    excerpt?: SortOrderInput | SortOrder
    category?: SortOrder
    tags?: SortOrder
    isPublished?: SortOrder
    viewCount?: SortOrder
    helpfulCount?: SortOrder
    authorId?: SortOrder
    authorName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: KnowledgeBaseCountOrderByAggregateInput
    _avg?: KnowledgeBaseAvgOrderByAggregateInput
    _max?: KnowledgeBaseMaxOrderByAggregateInput
    _min?: KnowledgeBaseMinOrderByAggregateInput
    _sum?: KnowledgeBaseSumOrderByAggregateInput
  }

  export type KnowledgeBaseScalarWhereWithAggregatesInput = {
    AND?: KnowledgeBaseScalarWhereWithAggregatesInput | KnowledgeBaseScalarWhereWithAggregatesInput[]
    OR?: KnowledgeBaseScalarWhereWithAggregatesInput[]
    NOT?: KnowledgeBaseScalarWhereWithAggregatesInput | KnowledgeBaseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"KnowledgeBase"> | string
    title?: StringWithAggregatesFilter<"KnowledgeBase"> | string
    slug?: StringWithAggregatesFilter<"KnowledgeBase"> | string
    content?: StringWithAggregatesFilter<"KnowledgeBase"> | string
    excerpt?: StringNullableWithAggregatesFilter<"KnowledgeBase"> | string | null
    category?: StringWithAggregatesFilter<"KnowledgeBase"> | string
    tags?: StringNullableListFilter<"KnowledgeBase">
    isPublished?: BoolWithAggregatesFilter<"KnowledgeBase"> | boolean
    viewCount?: IntWithAggregatesFilter<"KnowledgeBase"> | number
    helpfulCount?: IntWithAggregatesFilter<"KnowledgeBase"> | number
    authorId?: StringWithAggregatesFilter<"KnowledgeBase"> | string
    authorName?: StringWithAggregatesFilter<"KnowledgeBase"> | string
    createdAt?: DateTimeWithAggregatesFilter<"KnowledgeBase"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"KnowledgeBase"> | Date | string
  }

  export type FAQWhereInput = {
    AND?: FAQWhereInput | FAQWhereInput[]
    OR?: FAQWhereInput[]
    NOT?: FAQWhereInput | FAQWhereInput[]
    id?: StringFilter<"FAQ"> | string
    question?: StringFilter<"FAQ"> | string
    answer?: StringFilter<"FAQ"> | string
    category?: StringFilter<"FAQ"> | string
    sortOrder?: IntFilter<"FAQ"> | number
    isPublished?: BoolFilter<"FAQ"> | boolean
    createdAt?: DateTimeFilter<"FAQ"> | Date | string
    updatedAt?: DateTimeFilter<"FAQ"> | Date | string
  }

  export type FAQOrderByWithRelationInput = {
    id?: SortOrder
    question?: SortOrder
    answer?: SortOrder
    category?: SortOrder
    sortOrder?: SortOrder
    isPublished?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FAQWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FAQWhereInput | FAQWhereInput[]
    OR?: FAQWhereInput[]
    NOT?: FAQWhereInput | FAQWhereInput[]
    question?: StringFilter<"FAQ"> | string
    answer?: StringFilter<"FAQ"> | string
    category?: StringFilter<"FAQ"> | string
    sortOrder?: IntFilter<"FAQ"> | number
    isPublished?: BoolFilter<"FAQ"> | boolean
    createdAt?: DateTimeFilter<"FAQ"> | Date | string
    updatedAt?: DateTimeFilter<"FAQ"> | Date | string
  }, "id">

  export type FAQOrderByWithAggregationInput = {
    id?: SortOrder
    question?: SortOrder
    answer?: SortOrder
    category?: SortOrder
    sortOrder?: SortOrder
    isPublished?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FAQCountOrderByAggregateInput
    _avg?: FAQAvgOrderByAggregateInput
    _max?: FAQMaxOrderByAggregateInput
    _min?: FAQMinOrderByAggregateInput
    _sum?: FAQSumOrderByAggregateInput
  }

  export type FAQScalarWhereWithAggregatesInput = {
    AND?: FAQScalarWhereWithAggregatesInput | FAQScalarWhereWithAggregatesInput[]
    OR?: FAQScalarWhereWithAggregatesInput[]
    NOT?: FAQScalarWhereWithAggregatesInput | FAQScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FAQ"> | string
    question?: StringWithAggregatesFilter<"FAQ"> | string
    answer?: StringWithAggregatesFilter<"FAQ"> | string
    category?: StringWithAggregatesFilter<"FAQ"> | string
    sortOrder?: IntWithAggregatesFilter<"FAQ"> | number
    isPublished?: BoolWithAggregatesFilter<"FAQ"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"FAQ"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"FAQ"> | Date | string
  }

  export type SupportTicketCreateInput = {
    id?: string
    ticketNo: string
    schoolId?: string | null
    userId: string
    userType: string
    userName: string
    userEmail: string
    subject: string
    description: string
    category?: $Enums.TicketCategory
    priority?: $Enums.TicketPriority
    status?: $Enums.TicketStatus
    assignedTo?: string | null
    assignedAt?: Date | string | null
    resolvedAt?: Date | string | null
    resolution?: string | null
    rating?: number | null
    feedback?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: TicketMessageCreateNestedManyWithoutTicketInput
    attachments?: TicketAttachmentCreateNestedManyWithoutTicketInput
  }

  export type SupportTicketUncheckedCreateInput = {
    id?: string
    ticketNo: string
    schoolId?: string | null
    userId: string
    userType: string
    userName: string
    userEmail: string
    subject: string
    description: string
    category?: $Enums.TicketCategory
    priority?: $Enums.TicketPriority
    status?: $Enums.TicketStatus
    assignedTo?: string | null
    assignedAt?: Date | string | null
    resolvedAt?: Date | string | null
    resolution?: string | null
    rating?: number | null
    feedback?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: TicketMessageUncheckedCreateNestedManyWithoutTicketInput
    attachments?: TicketAttachmentUncheckedCreateNestedManyWithoutTicketInput
  }

  export type SupportTicketUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticketNo?: StringFieldUpdateOperationsInput | string
    schoolId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    userType?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    userEmail?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: EnumTicketCategoryFieldUpdateOperationsInput | $Enums.TicketCategory
    priority?: EnumTicketPriorityFieldUpdateOperationsInput | $Enums.TicketPriority
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    assignedTo?: NullableStringFieldUpdateOperationsInput | string | null
    assignedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolution?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: TicketMessageUpdateManyWithoutTicketNestedInput
    attachments?: TicketAttachmentUpdateManyWithoutTicketNestedInput
  }

  export type SupportTicketUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticketNo?: StringFieldUpdateOperationsInput | string
    schoolId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    userType?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    userEmail?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: EnumTicketCategoryFieldUpdateOperationsInput | $Enums.TicketCategory
    priority?: EnumTicketPriorityFieldUpdateOperationsInput | $Enums.TicketPriority
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    assignedTo?: NullableStringFieldUpdateOperationsInput | string | null
    assignedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolution?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: TicketMessageUncheckedUpdateManyWithoutTicketNestedInput
    attachments?: TicketAttachmentUncheckedUpdateManyWithoutTicketNestedInput
  }

  export type SupportTicketCreateManyInput = {
    id?: string
    ticketNo: string
    schoolId?: string | null
    userId: string
    userType: string
    userName: string
    userEmail: string
    subject: string
    description: string
    category?: $Enums.TicketCategory
    priority?: $Enums.TicketPriority
    status?: $Enums.TicketStatus
    assignedTo?: string | null
    assignedAt?: Date | string | null
    resolvedAt?: Date | string | null
    resolution?: string | null
    rating?: number | null
    feedback?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SupportTicketUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticketNo?: StringFieldUpdateOperationsInput | string
    schoolId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    userType?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    userEmail?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: EnumTicketCategoryFieldUpdateOperationsInput | $Enums.TicketCategory
    priority?: EnumTicketPriorityFieldUpdateOperationsInput | $Enums.TicketPriority
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    assignedTo?: NullableStringFieldUpdateOperationsInput | string | null
    assignedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolution?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupportTicketUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticketNo?: StringFieldUpdateOperationsInput | string
    schoolId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    userType?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    userEmail?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: EnumTicketCategoryFieldUpdateOperationsInput | $Enums.TicketCategory
    priority?: EnumTicketPriorityFieldUpdateOperationsInput | $Enums.TicketPriority
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    assignedTo?: NullableStringFieldUpdateOperationsInput | string | null
    assignedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolution?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketMessageCreateInput = {
    id?: string
    senderId: string
    senderType: string
    senderName: string
    message: string
    isInternal?: boolean
    createdAt?: Date | string
    ticket: SupportTicketCreateNestedOneWithoutMessagesInput
  }

  export type TicketMessageUncheckedCreateInput = {
    id?: string
    ticketId: string
    senderId: string
    senderType: string
    senderName: string
    message: string
    isInternal?: boolean
    createdAt?: Date | string
  }

  export type TicketMessageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    senderType?: StringFieldUpdateOperationsInput | string
    senderName?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isInternal?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ticket?: SupportTicketUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type TicketMessageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticketId?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    senderType?: StringFieldUpdateOperationsInput | string
    senderName?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isInternal?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketMessageCreateManyInput = {
    id?: string
    ticketId: string
    senderId: string
    senderType: string
    senderName: string
    message: string
    isInternal?: boolean
    createdAt?: Date | string
  }

  export type TicketMessageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    senderType?: StringFieldUpdateOperationsInput | string
    senderName?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isInternal?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketMessageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticketId?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    senderType?: StringFieldUpdateOperationsInput | string
    senderName?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isInternal?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketAttachmentCreateInput = {
    id?: string
    name: string
    url: string
    mimeType?: string | null
    size?: number | null
    uploadedBy: string
    uploadedAt?: Date | string
    ticket: SupportTicketCreateNestedOneWithoutAttachmentsInput
  }

  export type TicketAttachmentUncheckedCreateInput = {
    id?: string
    ticketId: string
    name: string
    url: string
    mimeType?: string | null
    size?: number | null
    uploadedBy: string
    uploadedAt?: Date | string
  }

  export type TicketAttachmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableIntFieldUpdateOperationsInput | number | null
    uploadedBy?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ticket?: SupportTicketUpdateOneRequiredWithoutAttachmentsNestedInput
  }

  export type TicketAttachmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticketId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableIntFieldUpdateOperationsInput | number | null
    uploadedBy?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketAttachmentCreateManyInput = {
    id?: string
    ticketId: string
    name: string
    url: string
    mimeType?: string | null
    size?: number | null
    uploadedBy: string
    uploadedAt?: Date | string
  }

  export type TicketAttachmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableIntFieldUpdateOperationsInput | number | null
    uploadedBy?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketAttachmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticketId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableIntFieldUpdateOperationsInput | number | null
    uploadedBy?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KnowledgeBaseCreateInput = {
    id?: string
    title: string
    slug: string
    content: string
    excerpt?: string | null
    category: string
    tags?: KnowledgeBaseCreatetagsInput | string[]
    isPublished?: boolean
    viewCount?: number
    helpfulCount?: number
    authorId: string
    authorName: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type KnowledgeBaseUncheckedCreateInput = {
    id?: string
    title: string
    slug: string
    content: string
    excerpt?: string | null
    category: string
    tags?: KnowledgeBaseCreatetagsInput | string[]
    isPublished?: boolean
    viewCount?: number
    helpfulCount?: number
    authorId: string
    authorName: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type KnowledgeBaseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    tags?: KnowledgeBaseUpdatetagsInput | string[]
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    viewCount?: IntFieldUpdateOperationsInput | number
    helpfulCount?: IntFieldUpdateOperationsInput | number
    authorId?: StringFieldUpdateOperationsInput | string
    authorName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KnowledgeBaseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    tags?: KnowledgeBaseUpdatetagsInput | string[]
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    viewCount?: IntFieldUpdateOperationsInput | number
    helpfulCount?: IntFieldUpdateOperationsInput | number
    authorId?: StringFieldUpdateOperationsInput | string
    authorName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KnowledgeBaseCreateManyInput = {
    id?: string
    title: string
    slug: string
    content: string
    excerpt?: string | null
    category: string
    tags?: KnowledgeBaseCreatetagsInput | string[]
    isPublished?: boolean
    viewCount?: number
    helpfulCount?: number
    authorId: string
    authorName: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type KnowledgeBaseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    tags?: KnowledgeBaseUpdatetagsInput | string[]
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    viewCount?: IntFieldUpdateOperationsInput | number
    helpfulCount?: IntFieldUpdateOperationsInput | number
    authorId?: StringFieldUpdateOperationsInput | string
    authorName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KnowledgeBaseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    tags?: KnowledgeBaseUpdatetagsInput | string[]
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    viewCount?: IntFieldUpdateOperationsInput | number
    helpfulCount?: IntFieldUpdateOperationsInput | number
    authorId?: StringFieldUpdateOperationsInput | string
    authorName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FAQCreateInput = {
    id?: string
    question: string
    answer: string
    category: string
    sortOrder?: number
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FAQUncheckedCreateInput = {
    id?: string
    question: string
    answer: string
    category: string
    sortOrder?: number
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FAQUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FAQUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FAQCreateManyInput = {
    id?: string
    question: string
    answer: string
    category: string
    sortOrder?: number
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FAQUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FAQUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    isPublished?: BoolFieldUpdateOperationsInput | boolean
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

  export type EnumTicketCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketCategory | EnumTicketCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.TicketCategory[] | ListEnumTicketCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.TicketCategory[] | ListEnumTicketCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumTicketCategoryFilter<$PrismaModel> | $Enums.TicketCategory
  }

  export type EnumTicketPriorityFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketPriority | EnumTicketPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.TicketPriority[] | ListEnumTicketPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.TicketPriority[] | ListEnumTicketPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumTicketPriorityFilter<$PrismaModel> | $Enums.TicketPriority
  }

  export type EnumTicketStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketStatus | EnumTicketStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TicketStatus[] | ListEnumTicketStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TicketStatus[] | ListEnumTicketStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTicketStatusFilter<$PrismaModel> | $Enums.TicketStatus
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

  export type TicketMessageListRelationFilter = {
    every?: TicketMessageWhereInput
    some?: TicketMessageWhereInput
    none?: TicketMessageWhereInput
  }

  export type TicketAttachmentListRelationFilter = {
    every?: TicketAttachmentWhereInput
    some?: TicketAttachmentWhereInput
    none?: TicketAttachmentWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TicketMessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TicketAttachmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SupportTicketCountOrderByAggregateInput = {
    id?: SortOrder
    ticketNo?: SortOrder
    schoolId?: SortOrder
    userId?: SortOrder
    userType?: SortOrder
    userName?: SortOrder
    userEmail?: SortOrder
    subject?: SortOrder
    description?: SortOrder
    category?: SortOrder
    priority?: SortOrder
    status?: SortOrder
    assignedTo?: SortOrder
    assignedAt?: SortOrder
    resolvedAt?: SortOrder
    resolution?: SortOrder
    rating?: SortOrder
    feedback?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SupportTicketAvgOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type SupportTicketMaxOrderByAggregateInput = {
    id?: SortOrder
    ticketNo?: SortOrder
    schoolId?: SortOrder
    userId?: SortOrder
    userType?: SortOrder
    userName?: SortOrder
    userEmail?: SortOrder
    subject?: SortOrder
    description?: SortOrder
    category?: SortOrder
    priority?: SortOrder
    status?: SortOrder
    assignedTo?: SortOrder
    assignedAt?: SortOrder
    resolvedAt?: SortOrder
    resolution?: SortOrder
    rating?: SortOrder
    feedback?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SupportTicketMinOrderByAggregateInput = {
    id?: SortOrder
    ticketNo?: SortOrder
    schoolId?: SortOrder
    userId?: SortOrder
    userType?: SortOrder
    userName?: SortOrder
    userEmail?: SortOrder
    subject?: SortOrder
    description?: SortOrder
    category?: SortOrder
    priority?: SortOrder
    status?: SortOrder
    assignedTo?: SortOrder
    assignedAt?: SortOrder
    resolvedAt?: SortOrder
    resolution?: SortOrder
    rating?: SortOrder
    feedback?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SupportTicketSumOrderByAggregateInput = {
    rating?: SortOrder
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

  export type EnumTicketCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketCategory | EnumTicketCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.TicketCategory[] | ListEnumTicketCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.TicketCategory[] | ListEnumTicketCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumTicketCategoryWithAggregatesFilter<$PrismaModel> | $Enums.TicketCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTicketCategoryFilter<$PrismaModel>
    _max?: NestedEnumTicketCategoryFilter<$PrismaModel>
  }

  export type EnumTicketPriorityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketPriority | EnumTicketPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.TicketPriority[] | ListEnumTicketPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.TicketPriority[] | ListEnumTicketPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumTicketPriorityWithAggregatesFilter<$PrismaModel> | $Enums.TicketPriority
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTicketPriorityFilter<$PrismaModel>
    _max?: NestedEnumTicketPriorityFilter<$PrismaModel>
  }

  export type EnumTicketStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketStatus | EnumTicketStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TicketStatus[] | ListEnumTicketStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TicketStatus[] | ListEnumTicketStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTicketStatusWithAggregatesFilter<$PrismaModel> | $Enums.TicketStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTicketStatusFilter<$PrismaModel>
    _max?: NestedEnumTicketStatusFilter<$PrismaModel>
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

  export type SupportTicketRelationFilter = {
    is?: SupportTicketWhereInput
    isNot?: SupportTicketWhereInput
  }

  export type TicketMessageCountOrderByAggregateInput = {
    id?: SortOrder
    ticketId?: SortOrder
    senderId?: SortOrder
    senderType?: SortOrder
    senderName?: SortOrder
    message?: SortOrder
    isInternal?: SortOrder
    createdAt?: SortOrder
  }

  export type TicketMessageMaxOrderByAggregateInput = {
    id?: SortOrder
    ticketId?: SortOrder
    senderId?: SortOrder
    senderType?: SortOrder
    senderName?: SortOrder
    message?: SortOrder
    isInternal?: SortOrder
    createdAt?: SortOrder
  }

  export type TicketMessageMinOrderByAggregateInput = {
    id?: SortOrder
    ticketId?: SortOrder
    senderId?: SortOrder
    senderType?: SortOrder
    senderName?: SortOrder
    message?: SortOrder
    isInternal?: SortOrder
    createdAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type TicketAttachmentCountOrderByAggregateInput = {
    id?: SortOrder
    ticketId?: SortOrder
    name?: SortOrder
    url?: SortOrder
    mimeType?: SortOrder
    size?: SortOrder
    uploadedBy?: SortOrder
    uploadedAt?: SortOrder
  }

  export type TicketAttachmentAvgOrderByAggregateInput = {
    size?: SortOrder
  }

  export type TicketAttachmentMaxOrderByAggregateInput = {
    id?: SortOrder
    ticketId?: SortOrder
    name?: SortOrder
    url?: SortOrder
    mimeType?: SortOrder
    size?: SortOrder
    uploadedBy?: SortOrder
    uploadedAt?: SortOrder
  }

  export type TicketAttachmentMinOrderByAggregateInput = {
    id?: SortOrder
    ticketId?: SortOrder
    name?: SortOrder
    url?: SortOrder
    mimeType?: SortOrder
    size?: SortOrder
    uploadedBy?: SortOrder
    uploadedAt?: SortOrder
  }

  export type TicketAttachmentSumOrderByAggregateInput = {
    size?: SortOrder
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
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

  export type KnowledgeBaseCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    content?: SortOrder
    excerpt?: SortOrder
    category?: SortOrder
    tags?: SortOrder
    isPublished?: SortOrder
    viewCount?: SortOrder
    helpfulCount?: SortOrder
    authorId?: SortOrder
    authorName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type KnowledgeBaseAvgOrderByAggregateInput = {
    viewCount?: SortOrder
    helpfulCount?: SortOrder
  }

  export type KnowledgeBaseMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    content?: SortOrder
    excerpt?: SortOrder
    category?: SortOrder
    isPublished?: SortOrder
    viewCount?: SortOrder
    helpfulCount?: SortOrder
    authorId?: SortOrder
    authorName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type KnowledgeBaseMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    content?: SortOrder
    excerpt?: SortOrder
    category?: SortOrder
    isPublished?: SortOrder
    viewCount?: SortOrder
    helpfulCount?: SortOrder
    authorId?: SortOrder
    authorName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type KnowledgeBaseSumOrderByAggregateInput = {
    viewCount?: SortOrder
    helpfulCount?: SortOrder
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

  export type FAQCountOrderByAggregateInput = {
    id?: SortOrder
    question?: SortOrder
    answer?: SortOrder
    category?: SortOrder
    sortOrder?: SortOrder
    isPublished?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FAQAvgOrderByAggregateInput = {
    sortOrder?: SortOrder
  }

  export type FAQMaxOrderByAggregateInput = {
    id?: SortOrder
    question?: SortOrder
    answer?: SortOrder
    category?: SortOrder
    sortOrder?: SortOrder
    isPublished?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FAQMinOrderByAggregateInput = {
    id?: SortOrder
    question?: SortOrder
    answer?: SortOrder
    category?: SortOrder
    sortOrder?: SortOrder
    isPublished?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FAQSumOrderByAggregateInput = {
    sortOrder?: SortOrder
  }

  export type TicketMessageCreateNestedManyWithoutTicketInput = {
    create?: XOR<TicketMessageCreateWithoutTicketInput, TicketMessageUncheckedCreateWithoutTicketInput> | TicketMessageCreateWithoutTicketInput[] | TicketMessageUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: TicketMessageCreateOrConnectWithoutTicketInput | TicketMessageCreateOrConnectWithoutTicketInput[]
    createMany?: TicketMessageCreateManyTicketInputEnvelope
    connect?: TicketMessageWhereUniqueInput | TicketMessageWhereUniqueInput[]
  }

  export type TicketAttachmentCreateNestedManyWithoutTicketInput = {
    create?: XOR<TicketAttachmentCreateWithoutTicketInput, TicketAttachmentUncheckedCreateWithoutTicketInput> | TicketAttachmentCreateWithoutTicketInput[] | TicketAttachmentUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: TicketAttachmentCreateOrConnectWithoutTicketInput | TicketAttachmentCreateOrConnectWithoutTicketInput[]
    createMany?: TicketAttachmentCreateManyTicketInputEnvelope
    connect?: TicketAttachmentWhereUniqueInput | TicketAttachmentWhereUniqueInput[]
  }

  export type TicketMessageUncheckedCreateNestedManyWithoutTicketInput = {
    create?: XOR<TicketMessageCreateWithoutTicketInput, TicketMessageUncheckedCreateWithoutTicketInput> | TicketMessageCreateWithoutTicketInput[] | TicketMessageUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: TicketMessageCreateOrConnectWithoutTicketInput | TicketMessageCreateOrConnectWithoutTicketInput[]
    createMany?: TicketMessageCreateManyTicketInputEnvelope
    connect?: TicketMessageWhereUniqueInput | TicketMessageWhereUniqueInput[]
  }

  export type TicketAttachmentUncheckedCreateNestedManyWithoutTicketInput = {
    create?: XOR<TicketAttachmentCreateWithoutTicketInput, TicketAttachmentUncheckedCreateWithoutTicketInput> | TicketAttachmentCreateWithoutTicketInput[] | TicketAttachmentUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: TicketAttachmentCreateOrConnectWithoutTicketInput | TicketAttachmentCreateOrConnectWithoutTicketInput[]
    createMany?: TicketAttachmentCreateManyTicketInputEnvelope
    connect?: TicketAttachmentWhereUniqueInput | TicketAttachmentWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumTicketCategoryFieldUpdateOperationsInput = {
    set?: $Enums.TicketCategory
  }

  export type EnumTicketPriorityFieldUpdateOperationsInput = {
    set?: $Enums.TicketPriority
  }

  export type EnumTicketStatusFieldUpdateOperationsInput = {
    set?: $Enums.TicketStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type TicketMessageUpdateManyWithoutTicketNestedInput = {
    create?: XOR<TicketMessageCreateWithoutTicketInput, TicketMessageUncheckedCreateWithoutTicketInput> | TicketMessageCreateWithoutTicketInput[] | TicketMessageUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: TicketMessageCreateOrConnectWithoutTicketInput | TicketMessageCreateOrConnectWithoutTicketInput[]
    upsert?: TicketMessageUpsertWithWhereUniqueWithoutTicketInput | TicketMessageUpsertWithWhereUniqueWithoutTicketInput[]
    createMany?: TicketMessageCreateManyTicketInputEnvelope
    set?: TicketMessageWhereUniqueInput | TicketMessageWhereUniqueInput[]
    disconnect?: TicketMessageWhereUniqueInput | TicketMessageWhereUniqueInput[]
    delete?: TicketMessageWhereUniqueInput | TicketMessageWhereUniqueInput[]
    connect?: TicketMessageWhereUniqueInput | TicketMessageWhereUniqueInput[]
    update?: TicketMessageUpdateWithWhereUniqueWithoutTicketInput | TicketMessageUpdateWithWhereUniqueWithoutTicketInput[]
    updateMany?: TicketMessageUpdateManyWithWhereWithoutTicketInput | TicketMessageUpdateManyWithWhereWithoutTicketInput[]
    deleteMany?: TicketMessageScalarWhereInput | TicketMessageScalarWhereInput[]
  }

  export type TicketAttachmentUpdateManyWithoutTicketNestedInput = {
    create?: XOR<TicketAttachmentCreateWithoutTicketInput, TicketAttachmentUncheckedCreateWithoutTicketInput> | TicketAttachmentCreateWithoutTicketInput[] | TicketAttachmentUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: TicketAttachmentCreateOrConnectWithoutTicketInput | TicketAttachmentCreateOrConnectWithoutTicketInput[]
    upsert?: TicketAttachmentUpsertWithWhereUniqueWithoutTicketInput | TicketAttachmentUpsertWithWhereUniqueWithoutTicketInput[]
    createMany?: TicketAttachmentCreateManyTicketInputEnvelope
    set?: TicketAttachmentWhereUniqueInput | TicketAttachmentWhereUniqueInput[]
    disconnect?: TicketAttachmentWhereUniqueInput | TicketAttachmentWhereUniqueInput[]
    delete?: TicketAttachmentWhereUniqueInput | TicketAttachmentWhereUniqueInput[]
    connect?: TicketAttachmentWhereUniqueInput | TicketAttachmentWhereUniqueInput[]
    update?: TicketAttachmentUpdateWithWhereUniqueWithoutTicketInput | TicketAttachmentUpdateWithWhereUniqueWithoutTicketInput[]
    updateMany?: TicketAttachmentUpdateManyWithWhereWithoutTicketInput | TicketAttachmentUpdateManyWithWhereWithoutTicketInput[]
    deleteMany?: TicketAttachmentScalarWhereInput | TicketAttachmentScalarWhereInput[]
  }

  export type TicketMessageUncheckedUpdateManyWithoutTicketNestedInput = {
    create?: XOR<TicketMessageCreateWithoutTicketInput, TicketMessageUncheckedCreateWithoutTicketInput> | TicketMessageCreateWithoutTicketInput[] | TicketMessageUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: TicketMessageCreateOrConnectWithoutTicketInput | TicketMessageCreateOrConnectWithoutTicketInput[]
    upsert?: TicketMessageUpsertWithWhereUniqueWithoutTicketInput | TicketMessageUpsertWithWhereUniqueWithoutTicketInput[]
    createMany?: TicketMessageCreateManyTicketInputEnvelope
    set?: TicketMessageWhereUniqueInput | TicketMessageWhereUniqueInput[]
    disconnect?: TicketMessageWhereUniqueInput | TicketMessageWhereUniqueInput[]
    delete?: TicketMessageWhereUniqueInput | TicketMessageWhereUniqueInput[]
    connect?: TicketMessageWhereUniqueInput | TicketMessageWhereUniqueInput[]
    update?: TicketMessageUpdateWithWhereUniqueWithoutTicketInput | TicketMessageUpdateWithWhereUniqueWithoutTicketInput[]
    updateMany?: TicketMessageUpdateManyWithWhereWithoutTicketInput | TicketMessageUpdateManyWithWhereWithoutTicketInput[]
    deleteMany?: TicketMessageScalarWhereInput | TicketMessageScalarWhereInput[]
  }

  export type TicketAttachmentUncheckedUpdateManyWithoutTicketNestedInput = {
    create?: XOR<TicketAttachmentCreateWithoutTicketInput, TicketAttachmentUncheckedCreateWithoutTicketInput> | TicketAttachmentCreateWithoutTicketInput[] | TicketAttachmentUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: TicketAttachmentCreateOrConnectWithoutTicketInput | TicketAttachmentCreateOrConnectWithoutTicketInput[]
    upsert?: TicketAttachmentUpsertWithWhereUniqueWithoutTicketInput | TicketAttachmentUpsertWithWhereUniqueWithoutTicketInput[]
    createMany?: TicketAttachmentCreateManyTicketInputEnvelope
    set?: TicketAttachmentWhereUniqueInput | TicketAttachmentWhereUniqueInput[]
    disconnect?: TicketAttachmentWhereUniqueInput | TicketAttachmentWhereUniqueInput[]
    delete?: TicketAttachmentWhereUniqueInput | TicketAttachmentWhereUniqueInput[]
    connect?: TicketAttachmentWhereUniqueInput | TicketAttachmentWhereUniqueInput[]
    update?: TicketAttachmentUpdateWithWhereUniqueWithoutTicketInput | TicketAttachmentUpdateWithWhereUniqueWithoutTicketInput[]
    updateMany?: TicketAttachmentUpdateManyWithWhereWithoutTicketInput | TicketAttachmentUpdateManyWithWhereWithoutTicketInput[]
    deleteMany?: TicketAttachmentScalarWhereInput | TicketAttachmentScalarWhereInput[]
  }

  export type SupportTicketCreateNestedOneWithoutMessagesInput = {
    create?: XOR<SupportTicketCreateWithoutMessagesInput, SupportTicketUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: SupportTicketCreateOrConnectWithoutMessagesInput
    connect?: SupportTicketWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type SupportTicketUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<SupportTicketCreateWithoutMessagesInput, SupportTicketUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: SupportTicketCreateOrConnectWithoutMessagesInput
    upsert?: SupportTicketUpsertWithoutMessagesInput
    connect?: SupportTicketWhereUniqueInput
    update?: XOR<XOR<SupportTicketUpdateToOneWithWhereWithoutMessagesInput, SupportTicketUpdateWithoutMessagesInput>, SupportTicketUncheckedUpdateWithoutMessagesInput>
  }

  export type SupportTicketCreateNestedOneWithoutAttachmentsInput = {
    create?: XOR<SupportTicketCreateWithoutAttachmentsInput, SupportTicketUncheckedCreateWithoutAttachmentsInput>
    connectOrCreate?: SupportTicketCreateOrConnectWithoutAttachmentsInput
    connect?: SupportTicketWhereUniqueInput
  }

  export type SupportTicketUpdateOneRequiredWithoutAttachmentsNestedInput = {
    create?: XOR<SupportTicketCreateWithoutAttachmentsInput, SupportTicketUncheckedCreateWithoutAttachmentsInput>
    connectOrCreate?: SupportTicketCreateOrConnectWithoutAttachmentsInput
    upsert?: SupportTicketUpsertWithoutAttachmentsInput
    connect?: SupportTicketWhereUniqueInput
    update?: XOR<XOR<SupportTicketUpdateToOneWithWhereWithoutAttachmentsInput, SupportTicketUpdateWithoutAttachmentsInput>, SupportTicketUncheckedUpdateWithoutAttachmentsInput>
  }

  export type KnowledgeBaseCreatetagsInput = {
    set: string[]
  }

  export type KnowledgeBaseUpdatetagsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
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

  export type NestedEnumTicketCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketCategory | EnumTicketCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.TicketCategory[] | ListEnumTicketCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.TicketCategory[] | ListEnumTicketCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumTicketCategoryFilter<$PrismaModel> | $Enums.TicketCategory
  }

  export type NestedEnumTicketPriorityFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketPriority | EnumTicketPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.TicketPriority[] | ListEnumTicketPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.TicketPriority[] | ListEnumTicketPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumTicketPriorityFilter<$PrismaModel> | $Enums.TicketPriority
  }

  export type NestedEnumTicketStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketStatus | EnumTicketStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TicketStatus[] | ListEnumTicketStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TicketStatus[] | ListEnumTicketStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTicketStatusFilter<$PrismaModel> | $Enums.TicketStatus
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

  export type NestedEnumTicketCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketCategory | EnumTicketCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.TicketCategory[] | ListEnumTicketCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.TicketCategory[] | ListEnumTicketCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumTicketCategoryWithAggregatesFilter<$PrismaModel> | $Enums.TicketCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTicketCategoryFilter<$PrismaModel>
    _max?: NestedEnumTicketCategoryFilter<$PrismaModel>
  }

  export type NestedEnumTicketPriorityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketPriority | EnumTicketPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.TicketPriority[] | ListEnumTicketPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.TicketPriority[] | ListEnumTicketPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumTicketPriorityWithAggregatesFilter<$PrismaModel> | $Enums.TicketPriority
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTicketPriorityFilter<$PrismaModel>
    _max?: NestedEnumTicketPriorityFilter<$PrismaModel>
  }

  export type NestedEnumTicketStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketStatus | EnumTicketStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TicketStatus[] | ListEnumTicketStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TicketStatus[] | ListEnumTicketStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTicketStatusWithAggregatesFilter<$PrismaModel> | $Enums.TicketStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTicketStatusFilter<$PrismaModel>
    _max?: NestedEnumTicketStatusFilter<$PrismaModel>
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

  export type TicketMessageCreateWithoutTicketInput = {
    id?: string
    senderId: string
    senderType: string
    senderName: string
    message: string
    isInternal?: boolean
    createdAt?: Date | string
  }

  export type TicketMessageUncheckedCreateWithoutTicketInput = {
    id?: string
    senderId: string
    senderType: string
    senderName: string
    message: string
    isInternal?: boolean
    createdAt?: Date | string
  }

  export type TicketMessageCreateOrConnectWithoutTicketInput = {
    where: TicketMessageWhereUniqueInput
    create: XOR<TicketMessageCreateWithoutTicketInput, TicketMessageUncheckedCreateWithoutTicketInput>
  }

  export type TicketMessageCreateManyTicketInputEnvelope = {
    data: TicketMessageCreateManyTicketInput | TicketMessageCreateManyTicketInput[]
    skipDuplicates?: boolean
  }

  export type TicketAttachmentCreateWithoutTicketInput = {
    id?: string
    name: string
    url: string
    mimeType?: string | null
    size?: number | null
    uploadedBy: string
    uploadedAt?: Date | string
  }

  export type TicketAttachmentUncheckedCreateWithoutTicketInput = {
    id?: string
    name: string
    url: string
    mimeType?: string | null
    size?: number | null
    uploadedBy: string
    uploadedAt?: Date | string
  }

  export type TicketAttachmentCreateOrConnectWithoutTicketInput = {
    where: TicketAttachmentWhereUniqueInput
    create: XOR<TicketAttachmentCreateWithoutTicketInput, TicketAttachmentUncheckedCreateWithoutTicketInput>
  }

  export type TicketAttachmentCreateManyTicketInputEnvelope = {
    data: TicketAttachmentCreateManyTicketInput | TicketAttachmentCreateManyTicketInput[]
    skipDuplicates?: boolean
  }

  export type TicketMessageUpsertWithWhereUniqueWithoutTicketInput = {
    where: TicketMessageWhereUniqueInput
    update: XOR<TicketMessageUpdateWithoutTicketInput, TicketMessageUncheckedUpdateWithoutTicketInput>
    create: XOR<TicketMessageCreateWithoutTicketInput, TicketMessageUncheckedCreateWithoutTicketInput>
  }

  export type TicketMessageUpdateWithWhereUniqueWithoutTicketInput = {
    where: TicketMessageWhereUniqueInput
    data: XOR<TicketMessageUpdateWithoutTicketInput, TicketMessageUncheckedUpdateWithoutTicketInput>
  }

  export type TicketMessageUpdateManyWithWhereWithoutTicketInput = {
    where: TicketMessageScalarWhereInput
    data: XOR<TicketMessageUpdateManyMutationInput, TicketMessageUncheckedUpdateManyWithoutTicketInput>
  }

  export type TicketMessageScalarWhereInput = {
    AND?: TicketMessageScalarWhereInput | TicketMessageScalarWhereInput[]
    OR?: TicketMessageScalarWhereInput[]
    NOT?: TicketMessageScalarWhereInput | TicketMessageScalarWhereInput[]
    id?: StringFilter<"TicketMessage"> | string
    ticketId?: StringFilter<"TicketMessage"> | string
    senderId?: StringFilter<"TicketMessage"> | string
    senderType?: StringFilter<"TicketMessage"> | string
    senderName?: StringFilter<"TicketMessage"> | string
    message?: StringFilter<"TicketMessage"> | string
    isInternal?: BoolFilter<"TicketMessage"> | boolean
    createdAt?: DateTimeFilter<"TicketMessage"> | Date | string
  }

  export type TicketAttachmentUpsertWithWhereUniqueWithoutTicketInput = {
    where: TicketAttachmentWhereUniqueInput
    update: XOR<TicketAttachmentUpdateWithoutTicketInput, TicketAttachmentUncheckedUpdateWithoutTicketInput>
    create: XOR<TicketAttachmentCreateWithoutTicketInput, TicketAttachmentUncheckedCreateWithoutTicketInput>
  }

  export type TicketAttachmentUpdateWithWhereUniqueWithoutTicketInput = {
    where: TicketAttachmentWhereUniqueInput
    data: XOR<TicketAttachmentUpdateWithoutTicketInput, TicketAttachmentUncheckedUpdateWithoutTicketInput>
  }

  export type TicketAttachmentUpdateManyWithWhereWithoutTicketInput = {
    where: TicketAttachmentScalarWhereInput
    data: XOR<TicketAttachmentUpdateManyMutationInput, TicketAttachmentUncheckedUpdateManyWithoutTicketInput>
  }

  export type TicketAttachmentScalarWhereInput = {
    AND?: TicketAttachmentScalarWhereInput | TicketAttachmentScalarWhereInput[]
    OR?: TicketAttachmentScalarWhereInput[]
    NOT?: TicketAttachmentScalarWhereInput | TicketAttachmentScalarWhereInput[]
    id?: StringFilter<"TicketAttachment"> | string
    ticketId?: StringFilter<"TicketAttachment"> | string
    name?: StringFilter<"TicketAttachment"> | string
    url?: StringFilter<"TicketAttachment"> | string
    mimeType?: StringNullableFilter<"TicketAttachment"> | string | null
    size?: IntNullableFilter<"TicketAttachment"> | number | null
    uploadedBy?: StringFilter<"TicketAttachment"> | string
    uploadedAt?: DateTimeFilter<"TicketAttachment"> | Date | string
  }

  export type SupportTicketCreateWithoutMessagesInput = {
    id?: string
    ticketNo: string
    schoolId?: string | null
    userId: string
    userType: string
    userName: string
    userEmail: string
    subject: string
    description: string
    category?: $Enums.TicketCategory
    priority?: $Enums.TicketPriority
    status?: $Enums.TicketStatus
    assignedTo?: string | null
    assignedAt?: Date | string | null
    resolvedAt?: Date | string | null
    resolution?: string | null
    rating?: number | null
    feedback?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    attachments?: TicketAttachmentCreateNestedManyWithoutTicketInput
  }

  export type SupportTicketUncheckedCreateWithoutMessagesInput = {
    id?: string
    ticketNo: string
    schoolId?: string | null
    userId: string
    userType: string
    userName: string
    userEmail: string
    subject: string
    description: string
    category?: $Enums.TicketCategory
    priority?: $Enums.TicketPriority
    status?: $Enums.TicketStatus
    assignedTo?: string | null
    assignedAt?: Date | string | null
    resolvedAt?: Date | string | null
    resolution?: string | null
    rating?: number | null
    feedback?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    attachments?: TicketAttachmentUncheckedCreateNestedManyWithoutTicketInput
  }

  export type SupportTicketCreateOrConnectWithoutMessagesInput = {
    where: SupportTicketWhereUniqueInput
    create: XOR<SupportTicketCreateWithoutMessagesInput, SupportTicketUncheckedCreateWithoutMessagesInput>
  }

  export type SupportTicketUpsertWithoutMessagesInput = {
    update: XOR<SupportTicketUpdateWithoutMessagesInput, SupportTicketUncheckedUpdateWithoutMessagesInput>
    create: XOR<SupportTicketCreateWithoutMessagesInput, SupportTicketUncheckedCreateWithoutMessagesInput>
    where?: SupportTicketWhereInput
  }

  export type SupportTicketUpdateToOneWithWhereWithoutMessagesInput = {
    where?: SupportTicketWhereInput
    data: XOR<SupportTicketUpdateWithoutMessagesInput, SupportTicketUncheckedUpdateWithoutMessagesInput>
  }

  export type SupportTicketUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticketNo?: StringFieldUpdateOperationsInput | string
    schoolId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    userType?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    userEmail?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: EnumTicketCategoryFieldUpdateOperationsInput | $Enums.TicketCategory
    priority?: EnumTicketPriorityFieldUpdateOperationsInput | $Enums.TicketPriority
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    assignedTo?: NullableStringFieldUpdateOperationsInput | string | null
    assignedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolution?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attachments?: TicketAttachmentUpdateManyWithoutTicketNestedInput
  }

  export type SupportTicketUncheckedUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticketNo?: StringFieldUpdateOperationsInput | string
    schoolId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    userType?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    userEmail?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: EnumTicketCategoryFieldUpdateOperationsInput | $Enums.TicketCategory
    priority?: EnumTicketPriorityFieldUpdateOperationsInput | $Enums.TicketPriority
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    assignedTo?: NullableStringFieldUpdateOperationsInput | string | null
    assignedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolution?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attachments?: TicketAttachmentUncheckedUpdateManyWithoutTicketNestedInput
  }

  export type SupportTicketCreateWithoutAttachmentsInput = {
    id?: string
    ticketNo: string
    schoolId?: string | null
    userId: string
    userType: string
    userName: string
    userEmail: string
    subject: string
    description: string
    category?: $Enums.TicketCategory
    priority?: $Enums.TicketPriority
    status?: $Enums.TicketStatus
    assignedTo?: string | null
    assignedAt?: Date | string | null
    resolvedAt?: Date | string | null
    resolution?: string | null
    rating?: number | null
    feedback?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: TicketMessageCreateNestedManyWithoutTicketInput
  }

  export type SupportTicketUncheckedCreateWithoutAttachmentsInput = {
    id?: string
    ticketNo: string
    schoolId?: string | null
    userId: string
    userType: string
    userName: string
    userEmail: string
    subject: string
    description: string
    category?: $Enums.TicketCategory
    priority?: $Enums.TicketPriority
    status?: $Enums.TicketStatus
    assignedTo?: string | null
    assignedAt?: Date | string | null
    resolvedAt?: Date | string | null
    resolution?: string | null
    rating?: number | null
    feedback?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: TicketMessageUncheckedCreateNestedManyWithoutTicketInput
  }

  export type SupportTicketCreateOrConnectWithoutAttachmentsInput = {
    where: SupportTicketWhereUniqueInput
    create: XOR<SupportTicketCreateWithoutAttachmentsInput, SupportTicketUncheckedCreateWithoutAttachmentsInput>
  }

  export type SupportTicketUpsertWithoutAttachmentsInput = {
    update: XOR<SupportTicketUpdateWithoutAttachmentsInput, SupportTicketUncheckedUpdateWithoutAttachmentsInput>
    create: XOR<SupportTicketCreateWithoutAttachmentsInput, SupportTicketUncheckedCreateWithoutAttachmentsInput>
    where?: SupportTicketWhereInput
  }

  export type SupportTicketUpdateToOneWithWhereWithoutAttachmentsInput = {
    where?: SupportTicketWhereInput
    data: XOR<SupportTicketUpdateWithoutAttachmentsInput, SupportTicketUncheckedUpdateWithoutAttachmentsInput>
  }

  export type SupportTicketUpdateWithoutAttachmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticketNo?: StringFieldUpdateOperationsInput | string
    schoolId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    userType?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    userEmail?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: EnumTicketCategoryFieldUpdateOperationsInput | $Enums.TicketCategory
    priority?: EnumTicketPriorityFieldUpdateOperationsInput | $Enums.TicketPriority
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    assignedTo?: NullableStringFieldUpdateOperationsInput | string | null
    assignedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolution?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: TicketMessageUpdateManyWithoutTicketNestedInput
  }

  export type SupportTicketUncheckedUpdateWithoutAttachmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticketNo?: StringFieldUpdateOperationsInput | string
    schoolId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    userType?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    userEmail?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: EnumTicketCategoryFieldUpdateOperationsInput | $Enums.TicketCategory
    priority?: EnumTicketPriorityFieldUpdateOperationsInput | $Enums.TicketPriority
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    assignedTo?: NullableStringFieldUpdateOperationsInput | string | null
    assignedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolution?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: TicketMessageUncheckedUpdateManyWithoutTicketNestedInput
  }

  export type TicketMessageCreateManyTicketInput = {
    id?: string
    senderId: string
    senderType: string
    senderName: string
    message: string
    isInternal?: boolean
    createdAt?: Date | string
  }

  export type TicketAttachmentCreateManyTicketInput = {
    id?: string
    name: string
    url: string
    mimeType?: string | null
    size?: number | null
    uploadedBy: string
    uploadedAt?: Date | string
  }

  export type TicketMessageUpdateWithoutTicketInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    senderType?: StringFieldUpdateOperationsInput | string
    senderName?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isInternal?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketMessageUncheckedUpdateWithoutTicketInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    senderType?: StringFieldUpdateOperationsInput | string
    senderName?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isInternal?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketMessageUncheckedUpdateManyWithoutTicketInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    senderType?: StringFieldUpdateOperationsInput | string
    senderName?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isInternal?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketAttachmentUpdateWithoutTicketInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableIntFieldUpdateOperationsInput | number | null
    uploadedBy?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketAttachmentUncheckedUpdateWithoutTicketInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableIntFieldUpdateOperationsInput | number | null
    uploadedBy?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketAttachmentUncheckedUpdateManyWithoutTicketInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableIntFieldUpdateOperationsInput | number | null
    uploadedBy?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use SupportTicketCountOutputTypeDefaultArgs instead
     */
    export type SupportTicketCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SupportTicketCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SupportTicketDefaultArgs instead
     */
    export type SupportTicketArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SupportTicketDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TicketMessageDefaultArgs instead
     */
    export type TicketMessageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TicketMessageDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TicketAttachmentDefaultArgs instead
     */
    export type TicketAttachmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TicketAttachmentDefaultArgs<ExtArgs>
    /**
     * @deprecated Use KnowledgeBaseDefaultArgs instead
     */
    export type KnowledgeBaseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = KnowledgeBaseDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FAQDefaultArgs instead
     */
    export type FAQArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FAQDefaultArgs<ExtArgs>

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