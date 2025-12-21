
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
 * Model School
 * 
 */
export type School = $Result.DefaultSelection<Prisma.$SchoolPayload>
/**
 * Model SchoolManager
 * 
 */
export type SchoolManager = $Result.DefaultSelection<Prisma.$SchoolManagerPayload>
/**
 * Model SchoolMembership
 * 
 */
export type SchoolMembership = $Result.DefaultSelection<Prisma.$SchoolMembershipPayload>
/**
 * Model SiteSettings
 * 
 */
export type SiteSettings = $Result.DefaultSelection<Prisma.$SiteSettingsPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const PlanType: {
  FREE: 'FREE',
  MONTHLY: 'MONTHLY',
  YEARLY: 'YEARLY'
};

export type PlanType = (typeof PlanType)[keyof typeof PlanType]


export const SubscriptionStatus: {
  TRIAL: 'TRIAL',
  ACTIVE: 'ACTIVE',
  PAST_DUE: 'PAST_DUE',
  CANCELED: 'CANCELED'
};

export type SubscriptionStatus = (typeof SubscriptionStatus)[keyof typeof SubscriptionStatus]

}

export type PlanType = $Enums.PlanType

export const PlanType: typeof $Enums.PlanType

export type SubscriptionStatus = $Enums.SubscriptionStatus

export const SubscriptionStatus: typeof $Enums.SubscriptionStatus

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Schools
 * const schools = await prisma.school.findMany()
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
   * // Fetch zero or more Schools
   * const schools = await prisma.school.findMany()
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
   * `prisma.school`: Exposes CRUD operations for the **School** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Schools
    * const schools = await prisma.school.findMany()
    * ```
    */
  get school(): Prisma.SchoolDelegate<ExtArgs>;

  /**
   * `prisma.schoolManager`: Exposes CRUD operations for the **SchoolManager** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SchoolManagers
    * const schoolManagers = await prisma.schoolManager.findMany()
    * ```
    */
  get schoolManager(): Prisma.SchoolManagerDelegate<ExtArgs>;

  /**
   * `prisma.schoolMembership`: Exposes CRUD operations for the **SchoolMembership** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SchoolMemberships
    * const schoolMemberships = await prisma.schoolMembership.findMany()
    * ```
    */
  get schoolMembership(): Prisma.SchoolMembershipDelegate<ExtArgs>;

  /**
   * `prisma.siteSettings`: Exposes CRUD operations for the **SiteSettings** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SiteSettings
    * const siteSettings = await prisma.siteSettings.findMany()
    * ```
    */
  get siteSettings(): Prisma.SiteSettingsDelegate<ExtArgs>;
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
    School: 'School',
    SchoolManager: 'SchoolManager',
    SchoolMembership: 'SchoolMembership',
    SiteSettings: 'SiteSettings'
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
      modelProps: "school" | "schoolManager" | "schoolMembership" | "siteSettings"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      School: {
        payload: Prisma.$SchoolPayload<ExtArgs>
        fields: Prisma.SchoolFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SchoolFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SchoolFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>
          }
          findFirst: {
            args: Prisma.SchoolFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SchoolFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>
          }
          findMany: {
            args: Prisma.SchoolFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>[]
          }
          create: {
            args: Prisma.SchoolCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>
          }
          createMany: {
            args: Prisma.SchoolCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SchoolCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>[]
          }
          delete: {
            args: Prisma.SchoolDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>
          }
          update: {
            args: Prisma.SchoolUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>
          }
          deleteMany: {
            args: Prisma.SchoolDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SchoolUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SchoolUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>
          }
          aggregate: {
            args: Prisma.SchoolAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSchool>
          }
          groupBy: {
            args: Prisma.SchoolGroupByArgs<ExtArgs>
            result: $Utils.Optional<SchoolGroupByOutputType>[]
          }
          count: {
            args: Prisma.SchoolCountArgs<ExtArgs>
            result: $Utils.Optional<SchoolCountAggregateOutputType> | number
          }
        }
      }
      SchoolManager: {
        payload: Prisma.$SchoolManagerPayload<ExtArgs>
        fields: Prisma.SchoolManagerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SchoolManagerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolManagerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SchoolManagerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolManagerPayload>
          }
          findFirst: {
            args: Prisma.SchoolManagerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolManagerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SchoolManagerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolManagerPayload>
          }
          findMany: {
            args: Prisma.SchoolManagerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolManagerPayload>[]
          }
          create: {
            args: Prisma.SchoolManagerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolManagerPayload>
          }
          createMany: {
            args: Prisma.SchoolManagerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SchoolManagerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolManagerPayload>[]
          }
          delete: {
            args: Prisma.SchoolManagerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolManagerPayload>
          }
          update: {
            args: Prisma.SchoolManagerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolManagerPayload>
          }
          deleteMany: {
            args: Prisma.SchoolManagerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SchoolManagerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SchoolManagerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolManagerPayload>
          }
          aggregate: {
            args: Prisma.SchoolManagerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSchoolManager>
          }
          groupBy: {
            args: Prisma.SchoolManagerGroupByArgs<ExtArgs>
            result: $Utils.Optional<SchoolManagerGroupByOutputType>[]
          }
          count: {
            args: Prisma.SchoolManagerCountArgs<ExtArgs>
            result: $Utils.Optional<SchoolManagerCountAggregateOutputType> | number
          }
        }
      }
      SchoolMembership: {
        payload: Prisma.$SchoolMembershipPayload<ExtArgs>
        fields: Prisma.SchoolMembershipFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SchoolMembershipFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolMembershipPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SchoolMembershipFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolMembershipPayload>
          }
          findFirst: {
            args: Prisma.SchoolMembershipFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolMembershipPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SchoolMembershipFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolMembershipPayload>
          }
          findMany: {
            args: Prisma.SchoolMembershipFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolMembershipPayload>[]
          }
          create: {
            args: Prisma.SchoolMembershipCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolMembershipPayload>
          }
          createMany: {
            args: Prisma.SchoolMembershipCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SchoolMembershipCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolMembershipPayload>[]
          }
          delete: {
            args: Prisma.SchoolMembershipDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolMembershipPayload>
          }
          update: {
            args: Prisma.SchoolMembershipUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolMembershipPayload>
          }
          deleteMany: {
            args: Prisma.SchoolMembershipDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SchoolMembershipUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SchoolMembershipUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolMembershipPayload>
          }
          aggregate: {
            args: Prisma.SchoolMembershipAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSchoolMembership>
          }
          groupBy: {
            args: Prisma.SchoolMembershipGroupByArgs<ExtArgs>
            result: $Utils.Optional<SchoolMembershipGroupByOutputType>[]
          }
          count: {
            args: Prisma.SchoolMembershipCountArgs<ExtArgs>
            result: $Utils.Optional<SchoolMembershipCountAggregateOutputType> | number
          }
        }
      }
      SiteSettings: {
        payload: Prisma.$SiteSettingsPayload<ExtArgs>
        fields: Prisma.SiteSettingsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SiteSettingsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteSettingsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SiteSettingsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteSettingsPayload>
          }
          findFirst: {
            args: Prisma.SiteSettingsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteSettingsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SiteSettingsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteSettingsPayload>
          }
          findMany: {
            args: Prisma.SiteSettingsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteSettingsPayload>[]
          }
          create: {
            args: Prisma.SiteSettingsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteSettingsPayload>
          }
          createMany: {
            args: Prisma.SiteSettingsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SiteSettingsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteSettingsPayload>[]
          }
          delete: {
            args: Prisma.SiteSettingsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteSettingsPayload>
          }
          update: {
            args: Prisma.SiteSettingsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteSettingsPayload>
          }
          deleteMany: {
            args: Prisma.SiteSettingsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SiteSettingsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SiteSettingsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteSettingsPayload>
          }
          aggregate: {
            args: Prisma.SiteSettingsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSiteSettings>
          }
          groupBy: {
            args: Prisma.SiteSettingsGroupByArgs<ExtArgs>
            result: $Utils.Optional<SiteSettingsGroupByOutputType>[]
          }
          count: {
            args: Prisma.SiteSettingsCountArgs<ExtArgs>
            result: $Utils.Optional<SiteSettingsCountAggregateOutputType> | number
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
   * Count Type SchoolCountOutputType
   */

  export type SchoolCountOutputType = {
    memberships: number
  }

  export type SchoolCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    memberships?: boolean | SchoolCountOutputTypeCountMembershipsArgs
  }

  // Custom InputTypes
  /**
   * SchoolCountOutputType without action
   */
  export type SchoolCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolCountOutputType
     */
    select?: SchoolCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SchoolCountOutputType without action
   */
  export type SchoolCountOutputTypeCountMembershipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SchoolMembershipWhereInput
  }


  /**
   * Count Type SchoolManagerCountOutputType
   */

  export type SchoolManagerCountOutputType = {
    schools: number
  }

  export type SchoolManagerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    schools?: boolean | SchoolManagerCountOutputTypeCountSchoolsArgs
  }

  // Custom InputTypes
  /**
   * SchoolManagerCountOutputType without action
   */
  export type SchoolManagerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolManagerCountOutputType
     */
    select?: SchoolManagerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SchoolManagerCountOutputType without action
   */
  export type SchoolManagerCountOutputTypeCountSchoolsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SchoolMembershipWhereInput
  }


  /**
   * Models
   */

  /**
   * Model School
   */

  export type AggregateSchool = {
    _count: SchoolCountAggregateOutputType | null
    _min: SchoolMinAggregateOutputType | null
    _max: SchoolMaxAggregateOutputType | null
  }

  export type SchoolMinAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    domain: string | null
    createdAt: Date | null
    updatedAt: Date | null
    plan: $Enums.PlanType | null
    subscriptionStatus: $Enums.SubscriptionStatus | null
    trialEndsAt: Date | null
    subscriptionEndsAt: Date | null
    enabledServices: string | null
  }

  export type SchoolMaxAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    domain: string | null
    createdAt: Date | null
    updatedAt: Date | null
    plan: $Enums.PlanType | null
    subscriptionStatus: $Enums.SubscriptionStatus | null
    trialEndsAt: Date | null
    subscriptionEndsAt: Date | null
    enabledServices: string | null
  }

  export type SchoolCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    domain: number
    createdAt: number
    updatedAt: number
    plan: number
    subscriptionStatus: number
    trialEndsAt: number
    subscriptionEndsAt: number
    enabledServices: number
    _all: number
  }


  export type SchoolMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    domain?: true
    createdAt?: true
    updatedAt?: true
    plan?: true
    subscriptionStatus?: true
    trialEndsAt?: true
    subscriptionEndsAt?: true
    enabledServices?: true
  }

  export type SchoolMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    domain?: true
    createdAt?: true
    updatedAt?: true
    plan?: true
    subscriptionStatus?: true
    trialEndsAt?: true
    subscriptionEndsAt?: true
    enabledServices?: true
  }

  export type SchoolCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    domain?: true
    createdAt?: true
    updatedAt?: true
    plan?: true
    subscriptionStatus?: true
    trialEndsAt?: true
    subscriptionEndsAt?: true
    enabledServices?: true
    _all?: true
  }

  export type SchoolAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which School to aggregate.
     */
    where?: SchoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schools to fetch.
     */
    orderBy?: SchoolOrderByWithRelationInput | SchoolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SchoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Schools
    **/
    _count?: true | SchoolCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SchoolMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SchoolMaxAggregateInputType
  }

  export type GetSchoolAggregateType<T extends SchoolAggregateArgs> = {
        [P in keyof T & keyof AggregateSchool]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSchool[P]>
      : GetScalarType<T[P], AggregateSchool[P]>
  }




  export type SchoolGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SchoolWhereInput
    orderBy?: SchoolOrderByWithAggregationInput | SchoolOrderByWithAggregationInput[]
    by: SchoolScalarFieldEnum[] | SchoolScalarFieldEnum
    having?: SchoolScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SchoolCountAggregateInputType | true
    _min?: SchoolMinAggregateInputType
    _max?: SchoolMaxAggregateInputType
  }

  export type SchoolGroupByOutputType = {
    id: string
    name: string
    slug: string
    domain: string | null
    createdAt: Date
    updatedAt: Date
    plan: $Enums.PlanType
    subscriptionStatus: $Enums.SubscriptionStatus
    trialEndsAt: Date
    subscriptionEndsAt: Date | null
    enabledServices: string
    _count: SchoolCountAggregateOutputType | null
    _min: SchoolMinAggregateOutputType | null
    _max: SchoolMaxAggregateOutputType | null
  }

  type GetSchoolGroupByPayload<T extends SchoolGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SchoolGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SchoolGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SchoolGroupByOutputType[P]>
            : GetScalarType<T[P], SchoolGroupByOutputType[P]>
        }
      >
    >


  export type SchoolSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    domain?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    plan?: boolean
    subscriptionStatus?: boolean
    trialEndsAt?: boolean
    subscriptionEndsAt?: boolean
    enabledServices?: boolean
    settings?: boolean | School$settingsArgs<ExtArgs>
    memberships?: boolean | School$membershipsArgs<ExtArgs>
    _count?: boolean | SchoolCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["school"]>

  export type SchoolSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    domain?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    plan?: boolean
    subscriptionStatus?: boolean
    trialEndsAt?: boolean
    subscriptionEndsAt?: boolean
    enabledServices?: boolean
  }, ExtArgs["result"]["school"]>

  export type SchoolSelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    domain?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    plan?: boolean
    subscriptionStatus?: boolean
    trialEndsAt?: boolean
    subscriptionEndsAt?: boolean
    enabledServices?: boolean
  }

  export type SchoolInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    settings?: boolean | School$settingsArgs<ExtArgs>
    memberships?: boolean | School$membershipsArgs<ExtArgs>
    _count?: boolean | SchoolCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SchoolIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SchoolPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "School"
    objects: {
      settings: Prisma.$SiteSettingsPayload<ExtArgs> | null
      memberships: Prisma.$SchoolMembershipPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      slug: string
      domain: string | null
      createdAt: Date
      updatedAt: Date
      plan: $Enums.PlanType
      subscriptionStatus: $Enums.SubscriptionStatus
      trialEndsAt: Date
      subscriptionEndsAt: Date | null
      enabledServices: string
    }, ExtArgs["result"]["school"]>
    composites: {}
  }

  type SchoolGetPayload<S extends boolean | null | undefined | SchoolDefaultArgs> = $Result.GetResult<Prisma.$SchoolPayload, S>

  type SchoolCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SchoolFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SchoolCountAggregateInputType | true
    }

  export interface SchoolDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['School'], meta: { name: 'School' } }
    /**
     * Find zero or one School that matches the filter.
     * @param {SchoolFindUniqueArgs} args - Arguments to find a School
     * @example
     * // Get one School
     * const school = await prisma.school.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SchoolFindUniqueArgs>(args: SelectSubset<T, SchoolFindUniqueArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one School that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SchoolFindUniqueOrThrowArgs} args - Arguments to find a School
     * @example
     * // Get one School
     * const school = await prisma.school.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SchoolFindUniqueOrThrowArgs>(args: SelectSubset<T, SchoolFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first School that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolFindFirstArgs} args - Arguments to find a School
     * @example
     * // Get one School
     * const school = await prisma.school.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SchoolFindFirstArgs>(args?: SelectSubset<T, SchoolFindFirstArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first School that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolFindFirstOrThrowArgs} args - Arguments to find a School
     * @example
     * // Get one School
     * const school = await prisma.school.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SchoolFindFirstOrThrowArgs>(args?: SelectSubset<T, SchoolFindFirstOrThrowArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Schools that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Schools
     * const schools = await prisma.school.findMany()
     * 
     * // Get first 10 Schools
     * const schools = await prisma.school.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const schoolWithIdOnly = await prisma.school.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SchoolFindManyArgs>(args?: SelectSubset<T, SchoolFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a School.
     * @param {SchoolCreateArgs} args - Arguments to create a School.
     * @example
     * // Create one School
     * const School = await prisma.school.create({
     *   data: {
     *     // ... data to create a School
     *   }
     * })
     * 
     */
    create<T extends SchoolCreateArgs>(args: SelectSubset<T, SchoolCreateArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Schools.
     * @param {SchoolCreateManyArgs} args - Arguments to create many Schools.
     * @example
     * // Create many Schools
     * const school = await prisma.school.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SchoolCreateManyArgs>(args?: SelectSubset<T, SchoolCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Schools and returns the data saved in the database.
     * @param {SchoolCreateManyAndReturnArgs} args - Arguments to create many Schools.
     * @example
     * // Create many Schools
     * const school = await prisma.school.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Schools and only return the `id`
     * const schoolWithIdOnly = await prisma.school.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SchoolCreateManyAndReturnArgs>(args?: SelectSubset<T, SchoolCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a School.
     * @param {SchoolDeleteArgs} args - Arguments to delete one School.
     * @example
     * // Delete one School
     * const School = await prisma.school.delete({
     *   where: {
     *     // ... filter to delete one School
     *   }
     * })
     * 
     */
    delete<T extends SchoolDeleteArgs>(args: SelectSubset<T, SchoolDeleteArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one School.
     * @param {SchoolUpdateArgs} args - Arguments to update one School.
     * @example
     * // Update one School
     * const school = await prisma.school.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SchoolUpdateArgs>(args: SelectSubset<T, SchoolUpdateArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Schools.
     * @param {SchoolDeleteManyArgs} args - Arguments to filter Schools to delete.
     * @example
     * // Delete a few Schools
     * const { count } = await prisma.school.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SchoolDeleteManyArgs>(args?: SelectSubset<T, SchoolDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Schools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Schools
     * const school = await prisma.school.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SchoolUpdateManyArgs>(args: SelectSubset<T, SchoolUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one School.
     * @param {SchoolUpsertArgs} args - Arguments to update or create a School.
     * @example
     * // Update or create a School
     * const school = await prisma.school.upsert({
     *   create: {
     *     // ... data to create a School
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the School we want to update
     *   }
     * })
     */
    upsert<T extends SchoolUpsertArgs>(args: SelectSubset<T, SchoolUpsertArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Schools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolCountArgs} args - Arguments to filter Schools to count.
     * @example
     * // Count the number of Schools
     * const count = await prisma.school.count({
     *   where: {
     *     // ... the filter for the Schools we want to count
     *   }
     * })
    **/
    count<T extends SchoolCountArgs>(
      args?: Subset<T, SchoolCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SchoolCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a School.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SchoolAggregateArgs>(args: Subset<T, SchoolAggregateArgs>): Prisma.PrismaPromise<GetSchoolAggregateType<T>>

    /**
     * Group by School.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolGroupByArgs} args - Group by arguments.
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
      T extends SchoolGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SchoolGroupByArgs['orderBy'] }
        : { orderBy?: SchoolGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SchoolGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSchoolGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the School model
   */
  readonly fields: SchoolFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for School.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SchoolClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    settings<T extends School$settingsArgs<ExtArgs> = {}>(args?: Subset<T, School$settingsArgs<ExtArgs>>): Prisma__SiteSettingsClient<$Result.GetResult<Prisma.$SiteSettingsPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    memberships<T extends School$membershipsArgs<ExtArgs> = {}>(args?: Subset<T, School$membershipsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchoolMembershipPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the School model
   */ 
  interface SchoolFieldRefs {
    readonly id: FieldRef<"School", 'String'>
    readonly name: FieldRef<"School", 'String'>
    readonly slug: FieldRef<"School", 'String'>
    readonly domain: FieldRef<"School", 'String'>
    readonly createdAt: FieldRef<"School", 'DateTime'>
    readonly updatedAt: FieldRef<"School", 'DateTime'>
    readonly plan: FieldRef<"School", 'PlanType'>
    readonly subscriptionStatus: FieldRef<"School", 'SubscriptionStatus'>
    readonly trialEndsAt: FieldRef<"School", 'DateTime'>
    readonly subscriptionEndsAt: FieldRef<"School", 'DateTime'>
    readonly enabledServices: FieldRef<"School", 'String'>
  }
    

  // Custom InputTypes
  /**
   * School findUnique
   */
  export type SchoolFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * Filter, which School to fetch.
     */
    where: SchoolWhereUniqueInput
  }

  /**
   * School findUniqueOrThrow
   */
  export type SchoolFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * Filter, which School to fetch.
     */
    where: SchoolWhereUniqueInput
  }

  /**
   * School findFirst
   */
  export type SchoolFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * Filter, which School to fetch.
     */
    where?: SchoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schools to fetch.
     */
    orderBy?: SchoolOrderByWithRelationInput | SchoolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Schools.
     */
    cursor?: SchoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Schools.
     */
    distinct?: SchoolScalarFieldEnum | SchoolScalarFieldEnum[]
  }

  /**
   * School findFirstOrThrow
   */
  export type SchoolFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * Filter, which School to fetch.
     */
    where?: SchoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schools to fetch.
     */
    orderBy?: SchoolOrderByWithRelationInput | SchoolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Schools.
     */
    cursor?: SchoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Schools.
     */
    distinct?: SchoolScalarFieldEnum | SchoolScalarFieldEnum[]
  }

  /**
   * School findMany
   */
  export type SchoolFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * Filter, which Schools to fetch.
     */
    where?: SchoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schools to fetch.
     */
    orderBy?: SchoolOrderByWithRelationInput | SchoolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Schools.
     */
    cursor?: SchoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schools.
     */
    skip?: number
    distinct?: SchoolScalarFieldEnum | SchoolScalarFieldEnum[]
  }

  /**
   * School create
   */
  export type SchoolCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * The data needed to create a School.
     */
    data: XOR<SchoolCreateInput, SchoolUncheckedCreateInput>
  }

  /**
   * School createMany
   */
  export type SchoolCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Schools.
     */
    data: SchoolCreateManyInput | SchoolCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * School createManyAndReturn
   */
  export type SchoolCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Schools.
     */
    data: SchoolCreateManyInput | SchoolCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * School update
   */
  export type SchoolUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * The data needed to update a School.
     */
    data: XOR<SchoolUpdateInput, SchoolUncheckedUpdateInput>
    /**
     * Choose, which School to update.
     */
    where: SchoolWhereUniqueInput
  }

  /**
   * School updateMany
   */
  export type SchoolUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Schools.
     */
    data: XOR<SchoolUpdateManyMutationInput, SchoolUncheckedUpdateManyInput>
    /**
     * Filter which Schools to update
     */
    where?: SchoolWhereInput
  }

  /**
   * School upsert
   */
  export type SchoolUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * The filter to search for the School to update in case it exists.
     */
    where: SchoolWhereUniqueInput
    /**
     * In case the School found by the `where` argument doesn't exist, create a new School with this data.
     */
    create: XOR<SchoolCreateInput, SchoolUncheckedCreateInput>
    /**
     * In case the School was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SchoolUpdateInput, SchoolUncheckedUpdateInput>
  }

  /**
   * School delete
   */
  export type SchoolDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * Filter which School to delete.
     */
    where: SchoolWhereUniqueInput
  }

  /**
   * School deleteMany
   */
  export type SchoolDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Schools to delete
     */
    where?: SchoolWhereInput
  }

  /**
   * School.settings
   */
  export type School$settingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteSettings
     */
    select?: SiteSettingsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteSettingsInclude<ExtArgs> | null
    where?: SiteSettingsWhereInput
  }

  /**
   * School.memberships
   */
  export type School$membershipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolMembership
     */
    select?: SchoolMembershipSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolMembershipInclude<ExtArgs> | null
    where?: SchoolMembershipWhereInput
    orderBy?: SchoolMembershipOrderByWithRelationInput | SchoolMembershipOrderByWithRelationInput[]
    cursor?: SchoolMembershipWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SchoolMembershipScalarFieldEnum | SchoolMembershipScalarFieldEnum[]
  }

  /**
   * School without action
   */
  export type SchoolDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
  }


  /**
   * Model SchoolManager
   */

  export type AggregateSchoolManager = {
    _count: SchoolManagerCountAggregateOutputType | null
    _min: SchoolManagerMinAggregateOutputType | null
    _max: SchoolManagerMaxAggregateOutputType | null
  }

  export type SchoolManagerMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SchoolManagerMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SchoolManagerCountAggregateOutputType = {
    id: number
    email: number
    password: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SchoolManagerMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SchoolManagerMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SchoolManagerCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SchoolManagerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SchoolManager to aggregate.
     */
    where?: SchoolManagerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SchoolManagers to fetch.
     */
    orderBy?: SchoolManagerOrderByWithRelationInput | SchoolManagerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SchoolManagerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SchoolManagers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SchoolManagers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SchoolManagers
    **/
    _count?: true | SchoolManagerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SchoolManagerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SchoolManagerMaxAggregateInputType
  }

  export type GetSchoolManagerAggregateType<T extends SchoolManagerAggregateArgs> = {
        [P in keyof T & keyof AggregateSchoolManager]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSchoolManager[P]>
      : GetScalarType<T[P], AggregateSchoolManager[P]>
  }




  export type SchoolManagerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SchoolManagerWhereInput
    orderBy?: SchoolManagerOrderByWithAggregationInput | SchoolManagerOrderByWithAggregationInput[]
    by: SchoolManagerScalarFieldEnum[] | SchoolManagerScalarFieldEnum
    having?: SchoolManagerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SchoolManagerCountAggregateInputType | true
    _min?: SchoolManagerMinAggregateInputType
    _max?: SchoolManagerMaxAggregateInputType
  }

  export type SchoolManagerGroupByOutputType = {
    id: string
    email: string
    password: string
    name: string
    createdAt: Date
    updatedAt: Date
    _count: SchoolManagerCountAggregateOutputType | null
    _min: SchoolManagerMinAggregateOutputType | null
    _max: SchoolManagerMaxAggregateOutputType | null
  }

  type GetSchoolManagerGroupByPayload<T extends SchoolManagerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SchoolManagerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SchoolManagerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SchoolManagerGroupByOutputType[P]>
            : GetScalarType<T[P], SchoolManagerGroupByOutputType[P]>
        }
      >
    >


  export type SchoolManagerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    schools?: boolean | SchoolManager$schoolsArgs<ExtArgs>
    _count?: boolean | SchoolManagerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["schoolManager"]>

  export type SchoolManagerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["schoolManager"]>

  export type SchoolManagerSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SchoolManagerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    schools?: boolean | SchoolManager$schoolsArgs<ExtArgs>
    _count?: boolean | SchoolManagerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SchoolManagerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SchoolManagerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SchoolManager"
    objects: {
      schools: Prisma.$SchoolMembershipPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      name: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["schoolManager"]>
    composites: {}
  }

  type SchoolManagerGetPayload<S extends boolean | null | undefined | SchoolManagerDefaultArgs> = $Result.GetResult<Prisma.$SchoolManagerPayload, S>

  type SchoolManagerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SchoolManagerFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SchoolManagerCountAggregateInputType | true
    }

  export interface SchoolManagerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SchoolManager'], meta: { name: 'SchoolManager' } }
    /**
     * Find zero or one SchoolManager that matches the filter.
     * @param {SchoolManagerFindUniqueArgs} args - Arguments to find a SchoolManager
     * @example
     * // Get one SchoolManager
     * const schoolManager = await prisma.schoolManager.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SchoolManagerFindUniqueArgs>(args: SelectSubset<T, SchoolManagerFindUniqueArgs<ExtArgs>>): Prisma__SchoolManagerClient<$Result.GetResult<Prisma.$SchoolManagerPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one SchoolManager that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SchoolManagerFindUniqueOrThrowArgs} args - Arguments to find a SchoolManager
     * @example
     * // Get one SchoolManager
     * const schoolManager = await prisma.schoolManager.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SchoolManagerFindUniqueOrThrowArgs>(args: SelectSubset<T, SchoolManagerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SchoolManagerClient<$Result.GetResult<Prisma.$SchoolManagerPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first SchoolManager that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolManagerFindFirstArgs} args - Arguments to find a SchoolManager
     * @example
     * // Get one SchoolManager
     * const schoolManager = await prisma.schoolManager.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SchoolManagerFindFirstArgs>(args?: SelectSubset<T, SchoolManagerFindFirstArgs<ExtArgs>>): Prisma__SchoolManagerClient<$Result.GetResult<Prisma.$SchoolManagerPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first SchoolManager that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolManagerFindFirstOrThrowArgs} args - Arguments to find a SchoolManager
     * @example
     * // Get one SchoolManager
     * const schoolManager = await prisma.schoolManager.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SchoolManagerFindFirstOrThrowArgs>(args?: SelectSubset<T, SchoolManagerFindFirstOrThrowArgs<ExtArgs>>): Prisma__SchoolManagerClient<$Result.GetResult<Prisma.$SchoolManagerPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more SchoolManagers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolManagerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SchoolManagers
     * const schoolManagers = await prisma.schoolManager.findMany()
     * 
     * // Get first 10 SchoolManagers
     * const schoolManagers = await prisma.schoolManager.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const schoolManagerWithIdOnly = await prisma.schoolManager.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SchoolManagerFindManyArgs>(args?: SelectSubset<T, SchoolManagerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchoolManagerPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a SchoolManager.
     * @param {SchoolManagerCreateArgs} args - Arguments to create a SchoolManager.
     * @example
     * // Create one SchoolManager
     * const SchoolManager = await prisma.schoolManager.create({
     *   data: {
     *     // ... data to create a SchoolManager
     *   }
     * })
     * 
     */
    create<T extends SchoolManagerCreateArgs>(args: SelectSubset<T, SchoolManagerCreateArgs<ExtArgs>>): Prisma__SchoolManagerClient<$Result.GetResult<Prisma.$SchoolManagerPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many SchoolManagers.
     * @param {SchoolManagerCreateManyArgs} args - Arguments to create many SchoolManagers.
     * @example
     * // Create many SchoolManagers
     * const schoolManager = await prisma.schoolManager.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SchoolManagerCreateManyArgs>(args?: SelectSubset<T, SchoolManagerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SchoolManagers and returns the data saved in the database.
     * @param {SchoolManagerCreateManyAndReturnArgs} args - Arguments to create many SchoolManagers.
     * @example
     * // Create many SchoolManagers
     * const schoolManager = await prisma.schoolManager.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SchoolManagers and only return the `id`
     * const schoolManagerWithIdOnly = await prisma.schoolManager.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SchoolManagerCreateManyAndReturnArgs>(args?: SelectSubset<T, SchoolManagerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchoolManagerPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a SchoolManager.
     * @param {SchoolManagerDeleteArgs} args - Arguments to delete one SchoolManager.
     * @example
     * // Delete one SchoolManager
     * const SchoolManager = await prisma.schoolManager.delete({
     *   where: {
     *     // ... filter to delete one SchoolManager
     *   }
     * })
     * 
     */
    delete<T extends SchoolManagerDeleteArgs>(args: SelectSubset<T, SchoolManagerDeleteArgs<ExtArgs>>): Prisma__SchoolManagerClient<$Result.GetResult<Prisma.$SchoolManagerPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one SchoolManager.
     * @param {SchoolManagerUpdateArgs} args - Arguments to update one SchoolManager.
     * @example
     * // Update one SchoolManager
     * const schoolManager = await prisma.schoolManager.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SchoolManagerUpdateArgs>(args: SelectSubset<T, SchoolManagerUpdateArgs<ExtArgs>>): Prisma__SchoolManagerClient<$Result.GetResult<Prisma.$SchoolManagerPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more SchoolManagers.
     * @param {SchoolManagerDeleteManyArgs} args - Arguments to filter SchoolManagers to delete.
     * @example
     * // Delete a few SchoolManagers
     * const { count } = await prisma.schoolManager.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SchoolManagerDeleteManyArgs>(args?: SelectSubset<T, SchoolManagerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SchoolManagers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolManagerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SchoolManagers
     * const schoolManager = await prisma.schoolManager.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SchoolManagerUpdateManyArgs>(args: SelectSubset<T, SchoolManagerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SchoolManager.
     * @param {SchoolManagerUpsertArgs} args - Arguments to update or create a SchoolManager.
     * @example
     * // Update or create a SchoolManager
     * const schoolManager = await prisma.schoolManager.upsert({
     *   create: {
     *     // ... data to create a SchoolManager
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SchoolManager we want to update
     *   }
     * })
     */
    upsert<T extends SchoolManagerUpsertArgs>(args: SelectSubset<T, SchoolManagerUpsertArgs<ExtArgs>>): Prisma__SchoolManagerClient<$Result.GetResult<Prisma.$SchoolManagerPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of SchoolManagers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolManagerCountArgs} args - Arguments to filter SchoolManagers to count.
     * @example
     * // Count the number of SchoolManagers
     * const count = await prisma.schoolManager.count({
     *   where: {
     *     // ... the filter for the SchoolManagers we want to count
     *   }
     * })
    **/
    count<T extends SchoolManagerCountArgs>(
      args?: Subset<T, SchoolManagerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SchoolManagerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SchoolManager.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolManagerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SchoolManagerAggregateArgs>(args: Subset<T, SchoolManagerAggregateArgs>): Prisma.PrismaPromise<GetSchoolManagerAggregateType<T>>

    /**
     * Group by SchoolManager.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolManagerGroupByArgs} args - Group by arguments.
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
      T extends SchoolManagerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SchoolManagerGroupByArgs['orderBy'] }
        : { orderBy?: SchoolManagerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SchoolManagerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSchoolManagerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SchoolManager model
   */
  readonly fields: SchoolManagerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SchoolManager.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SchoolManagerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    schools<T extends SchoolManager$schoolsArgs<ExtArgs> = {}>(args?: Subset<T, SchoolManager$schoolsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchoolMembershipPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the SchoolManager model
   */ 
  interface SchoolManagerFieldRefs {
    readonly id: FieldRef<"SchoolManager", 'String'>
    readonly email: FieldRef<"SchoolManager", 'String'>
    readonly password: FieldRef<"SchoolManager", 'String'>
    readonly name: FieldRef<"SchoolManager", 'String'>
    readonly createdAt: FieldRef<"SchoolManager", 'DateTime'>
    readonly updatedAt: FieldRef<"SchoolManager", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SchoolManager findUnique
   */
  export type SchoolManagerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolManager
     */
    select?: SchoolManagerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolManagerInclude<ExtArgs> | null
    /**
     * Filter, which SchoolManager to fetch.
     */
    where: SchoolManagerWhereUniqueInput
  }

  /**
   * SchoolManager findUniqueOrThrow
   */
  export type SchoolManagerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolManager
     */
    select?: SchoolManagerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolManagerInclude<ExtArgs> | null
    /**
     * Filter, which SchoolManager to fetch.
     */
    where: SchoolManagerWhereUniqueInput
  }

  /**
   * SchoolManager findFirst
   */
  export type SchoolManagerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolManager
     */
    select?: SchoolManagerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolManagerInclude<ExtArgs> | null
    /**
     * Filter, which SchoolManager to fetch.
     */
    where?: SchoolManagerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SchoolManagers to fetch.
     */
    orderBy?: SchoolManagerOrderByWithRelationInput | SchoolManagerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SchoolManagers.
     */
    cursor?: SchoolManagerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SchoolManagers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SchoolManagers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SchoolManagers.
     */
    distinct?: SchoolManagerScalarFieldEnum | SchoolManagerScalarFieldEnum[]
  }

  /**
   * SchoolManager findFirstOrThrow
   */
  export type SchoolManagerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolManager
     */
    select?: SchoolManagerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolManagerInclude<ExtArgs> | null
    /**
     * Filter, which SchoolManager to fetch.
     */
    where?: SchoolManagerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SchoolManagers to fetch.
     */
    orderBy?: SchoolManagerOrderByWithRelationInput | SchoolManagerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SchoolManagers.
     */
    cursor?: SchoolManagerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SchoolManagers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SchoolManagers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SchoolManagers.
     */
    distinct?: SchoolManagerScalarFieldEnum | SchoolManagerScalarFieldEnum[]
  }

  /**
   * SchoolManager findMany
   */
  export type SchoolManagerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolManager
     */
    select?: SchoolManagerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolManagerInclude<ExtArgs> | null
    /**
     * Filter, which SchoolManagers to fetch.
     */
    where?: SchoolManagerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SchoolManagers to fetch.
     */
    orderBy?: SchoolManagerOrderByWithRelationInput | SchoolManagerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SchoolManagers.
     */
    cursor?: SchoolManagerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SchoolManagers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SchoolManagers.
     */
    skip?: number
    distinct?: SchoolManagerScalarFieldEnum | SchoolManagerScalarFieldEnum[]
  }

  /**
   * SchoolManager create
   */
  export type SchoolManagerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolManager
     */
    select?: SchoolManagerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolManagerInclude<ExtArgs> | null
    /**
     * The data needed to create a SchoolManager.
     */
    data: XOR<SchoolManagerCreateInput, SchoolManagerUncheckedCreateInput>
  }

  /**
   * SchoolManager createMany
   */
  export type SchoolManagerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SchoolManagers.
     */
    data: SchoolManagerCreateManyInput | SchoolManagerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SchoolManager createManyAndReturn
   */
  export type SchoolManagerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolManager
     */
    select?: SchoolManagerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many SchoolManagers.
     */
    data: SchoolManagerCreateManyInput | SchoolManagerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SchoolManager update
   */
  export type SchoolManagerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolManager
     */
    select?: SchoolManagerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolManagerInclude<ExtArgs> | null
    /**
     * The data needed to update a SchoolManager.
     */
    data: XOR<SchoolManagerUpdateInput, SchoolManagerUncheckedUpdateInput>
    /**
     * Choose, which SchoolManager to update.
     */
    where: SchoolManagerWhereUniqueInput
  }

  /**
   * SchoolManager updateMany
   */
  export type SchoolManagerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SchoolManagers.
     */
    data: XOR<SchoolManagerUpdateManyMutationInput, SchoolManagerUncheckedUpdateManyInput>
    /**
     * Filter which SchoolManagers to update
     */
    where?: SchoolManagerWhereInput
  }

  /**
   * SchoolManager upsert
   */
  export type SchoolManagerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolManager
     */
    select?: SchoolManagerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolManagerInclude<ExtArgs> | null
    /**
     * The filter to search for the SchoolManager to update in case it exists.
     */
    where: SchoolManagerWhereUniqueInput
    /**
     * In case the SchoolManager found by the `where` argument doesn't exist, create a new SchoolManager with this data.
     */
    create: XOR<SchoolManagerCreateInput, SchoolManagerUncheckedCreateInput>
    /**
     * In case the SchoolManager was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SchoolManagerUpdateInput, SchoolManagerUncheckedUpdateInput>
  }

  /**
   * SchoolManager delete
   */
  export type SchoolManagerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolManager
     */
    select?: SchoolManagerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolManagerInclude<ExtArgs> | null
    /**
     * Filter which SchoolManager to delete.
     */
    where: SchoolManagerWhereUniqueInput
  }

  /**
   * SchoolManager deleteMany
   */
  export type SchoolManagerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SchoolManagers to delete
     */
    where?: SchoolManagerWhereInput
  }

  /**
   * SchoolManager.schools
   */
  export type SchoolManager$schoolsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolMembership
     */
    select?: SchoolMembershipSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolMembershipInclude<ExtArgs> | null
    where?: SchoolMembershipWhereInput
    orderBy?: SchoolMembershipOrderByWithRelationInput | SchoolMembershipOrderByWithRelationInput[]
    cursor?: SchoolMembershipWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SchoolMembershipScalarFieldEnum | SchoolMembershipScalarFieldEnum[]
  }

  /**
   * SchoolManager without action
   */
  export type SchoolManagerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolManager
     */
    select?: SchoolManagerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolManagerInclude<ExtArgs> | null
  }


  /**
   * Model SchoolMembership
   */

  export type AggregateSchoolMembership = {
    _count: SchoolMembershipCountAggregateOutputType | null
    _min: SchoolMembershipMinAggregateOutputType | null
    _max: SchoolMembershipMaxAggregateOutputType | null
  }

  export type SchoolMembershipMinAggregateOutputType = {
    id: string | null
    managerId: string | null
    schoolId: string | null
    role: string | null
    createdAt: Date | null
  }

  export type SchoolMembershipMaxAggregateOutputType = {
    id: string | null
    managerId: string | null
    schoolId: string | null
    role: string | null
    createdAt: Date | null
  }

  export type SchoolMembershipCountAggregateOutputType = {
    id: number
    managerId: number
    schoolId: number
    role: number
    createdAt: number
    _all: number
  }


  export type SchoolMembershipMinAggregateInputType = {
    id?: true
    managerId?: true
    schoolId?: true
    role?: true
    createdAt?: true
  }

  export type SchoolMembershipMaxAggregateInputType = {
    id?: true
    managerId?: true
    schoolId?: true
    role?: true
    createdAt?: true
  }

  export type SchoolMembershipCountAggregateInputType = {
    id?: true
    managerId?: true
    schoolId?: true
    role?: true
    createdAt?: true
    _all?: true
  }

  export type SchoolMembershipAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SchoolMembership to aggregate.
     */
    where?: SchoolMembershipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SchoolMemberships to fetch.
     */
    orderBy?: SchoolMembershipOrderByWithRelationInput | SchoolMembershipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SchoolMembershipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SchoolMemberships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SchoolMemberships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SchoolMemberships
    **/
    _count?: true | SchoolMembershipCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SchoolMembershipMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SchoolMembershipMaxAggregateInputType
  }

  export type GetSchoolMembershipAggregateType<T extends SchoolMembershipAggregateArgs> = {
        [P in keyof T & keyof AggregateSchoolMembership]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSchoolMembership[P]>
      : GetScalarType<T[P], AggregateSchoolMembership[P]>
  }




  export type SchoolMembershipGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SchoolMembershipWhereInput
    orderBy?: SchoolMembershipOrderByWithAggregationInput | SchoolMembershipOrderByWithAggregationInput[]
    by: SchoolMembershipScalarFieldEnum[] | SchoolMembershipScalarFieldEnum
    having?: SchoolMembershipScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SchoolMembershipCountAggregateInputType | true
    _min?: SchoolMembershipMinAggregateInputType
    _max?: SchoolMembershipMaxAggregateInputType
  }

  export type SchoolMembershipGroupByOutputType = {
    id: string
    managerId: string
    schoolId: string
    role: string
    createdAt: Date
    _count: SchoolMembershipCountAggregateOutputType | null
    _min: SchoolMembershipMinAggregateOutputType | null
    _max: SchoolMembershipMaxAggregateOutputType | null
  }

  type GetSchoolMembershipGroupByPayload<T extends SchoolMembershipGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SchoolMembershipGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SchoolMembershipGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SchoolMembershipGroupByOutputType[P]>
            : GetScalarType<T[P], SchoolMembershipGroupByOutputType[P]>
        }
      >
    >


  export type SchoolMembershipSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    managerId?: boolean
    schoolId?: boolean
    role?: boolean
    createdAt?: boolean
    manager?: boolean | SchoolManagerDefaultArgs<ExtArgs>
    school?: boolean | SchoolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["schoolMembership"]>

  export type SchoolMembershipSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    managerId?: boolean
    schoolId?: boolean
    role?: boolean
    createdAt?: boolean
    manager?: boolean | SchoolManagerDefaultArgs<ExtArgs>
    school?: boolean | SchoolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["schoolMembership"]>

  export type SchoolMembershipSelectScalar = {
    id?: boolean
    managerId?: boolean
    schoolId?: boolean
    role?: boolean
    createdAt?: boolean
  }

  export type SchoolMembershipInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    manager?: boolean | SchoolManagerDefaultArgs<ExtArgs>
    school?: boolean | SchoolDefaultArgs<ExtArgs>
  }
  export type SchoolMembershipIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    manager?: boolean | SchoolManagerDefaultArgs<ExtArgs>
    school?: boolean | SchoolDefaultArgs<ExtArgs>
  }

  export type $SchoolMembershipPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SchoolMembership"
    objects: {
      manager: Prisma.$SchoolManagerPayload<ExtArgs>
      school: Prisma.$SchoolPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      managerId: string
      schoolId: string
      role: string
      createdAt: Date
    }, ExtArgs["result"]["schoolMembership"]>
    composites: {}
  }

  type SchoolMembershipGetPayload<S extends boolean | null | undefined | SchoolMembershipDefaultArgs> = $Result.GetResult<Prisma.$SchoolMembershipPayload, S>

  type SchoolMembershipCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SchoolMembershipFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SchoolMembershipCountAggregateInputType | true
    }

  export interface SchoolMembershipDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SchoolMembership'], meta: { name: 'SchoolMembership' } }
    /**
     * Find zero or one SchoolMembership that matches the filter.
     * @param {SchoolMembershipFindUniqueArgs} args - Arguments to find a SchoolMembership
     * @example
     * // Get one SchoolMembership
     * const schoolMembership = await prisma.schoolMembership.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SchoolMembershipFindUniqueArgs>(args: SelectSubset<T, SchoolMembershipFindUniqueArgs<ExtArgs>>): Prisma__SchoolMembershipClient<$Result.GetResult<Prisma.$SchoolMembershipPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one SchoolMembership that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SchoolMembershipFindUniqueOrThrowArgs} args - Arguments to find a SchoolMembership
     * @example
     * // Get one SchoolMembership
     * const schoolMembership = await prisma.schoolMembership.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SchoolMembershipFindUniqueOrThrowArgs>(args: SelectSubset<T, SchoolMembershipFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SchoolMembershipClient<$Result.GetResult<Prisma.$SchoolMembershipPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first SchoolMembership that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolMembershipFindFirstArgs} args - Arguments to find a SchoolMembership
     * @example
     * // Get one SchoolMembership
     * const schoolMembership = await prisma.schoolMembership.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SchoolMembershipFindFirstArgs>(args?: SelectSubset<T, SchoolMembershipFindFirstArgs<ExtArgs>>): Prisma__SchoolMembershipClient<$Result.GetResult<Prisma.$SchoolMembershipPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first SchoolMembership that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolMembershipFindFirstOrThrowArgs} args - Arguments to find a SchoolMembership
     * @example
     * // Get one SchoolMembership
     * const schoolMembership = await prisma.schoolMembership.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SchoolMembershipFindFirstOrThrowArgs>(args?: SelectSubset<T, SchoolMembershipFindFirstOrThrowArgs<ExtArgs>>): Prisma__SchoolMembershipClient<$Result.GetResult<Prisma.$SchoolMembershipPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more SchoolMemberships that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolMembershipFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SchoolMemberships
     * const schoolMemberships = await prisma.schoolMembership.findMany()
     * 
     * // Get first 10 SchoolMemberships
     * const schoolMemberships = await prisma.schoolMembership.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const schoolMembershipWithIdOnly = await prisma.schoolMembership.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SchoolMembershipFindManyArgs>(args?: SelectSubset<T, SchoolMembershipFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchoolMembershipPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a SchoolMembership.
     * @param {SchoolMembershipCreateArgs} args - Arguments to create a SchoolMembership.
     * @example
     * // Create one SchoolMembership
     * const SchoolMembership = await prisma.schoolMembership.create({
     *   data: {
     *     // ... data to create a SchoolMembership
     *   }
     * })
     * 
     */
    create<T extends SchoolMembershipCreateArgs>(args: SelectSubset<T, SchoolMembershipCreateArgs<ExtArgs>>): Prisma__SchoolMembershipClient<$Result.GetResult<Prisma.$SchoolMembershipPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many SchoolMemberships.
     * @param {SchoolMembershipCreateManyArgs} args - Arguments to create many SchoolMemberships.
     * @example
     * // Create many SchoolMemberships
     * const schoolMembership = await prisma.schoolMembership.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SchoolMembershipCreateManyArgs>(args?: SelectSubset<T, SchoolMembershipCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SchoolMemberships and returns the data saved in the database.
     * @param {SchoolMembershipCreateManyAndReturnArgs} args - Arguments to create many SchoolMemberships.
     * @example
     * // Create many SchoolMemberships
     * const schoolMembership = await prisma.schoolMembership.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SchoolMemberships and only return the `id`
     * const schoolMembershipWithIdOnly = await prisma.schoolMembership.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SchoolMembershipCreateManyAndReturnArgs>(args?: SelectSubset<T, SchoolMembershipCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchoolMembershipPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a SchoolMembership.
     * @param {SchoolMembershipDeleteArgs} args - Arguments to delete one SchoolMembership.
     * @example
     * // Delete one SchoolMembership
     * const SchoolMembership = await prisma.schoolMembership.delete({
     *   where: {
     *     // ... filter to delete one SchoolMembership
     *   }
     * })
     * 
     */
    delete<T extends SchoolMembershipDeleteArgs>(args: SelectSubset<T, SchoolMembershipDeleteArgs<ExtArgs>>): Prisma__SchoolMembershipClient<$Result.GetResult<Prisma.$SchoolMembershipPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one SchoolMembership.
     * @param {SchoolMembershipUpdateArgs} args - Arguments to update one SchoolMembership.
     * @example
     * // Update one SchoolMembership
     * const schoolMembership = await prisma.schoolMembership.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SchoolMembershipUpdateArgs>(args: SelectSubset<T, SchoolMembershipUpdateArgs<ExtArgs>>): Prisma__SchoolMembershipClient<$Result.GetResult<Prisma.$SchoolMembershipPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more SchoolMemberships.
     * @param {SchoolMembershipDeleteManyArgs} args - Arguments to filter SchoolMemberships to delete.
     * @example
     * // Delete a few SchoolMemberships
     * const { count } = await prisma.schoolMembership.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SchoolMembershipDeleteManyArgs>(args?: SelectSubset<T, SchoolMembershipDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SchoolMemberships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolMembershipUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SchoolMemberships
     * const schoolMembership = await prisma.schoolMembership.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SchoolMembershipUpdateManyArgs>(args: SelectSubset<T, SchoolMembershipUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SchoolMembership.
     * @param {SchoolMembershipUpsertArgs} args - Arguments to update or create a SchoolMembership.
     * @example
     * // Update or create a SchoolMembership
     * const schoolMembership = await prisma.schoolMembership.upsert({
     *   create: {
     *     // ... data to create a SchoolMembership
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SchoolMembership we want to update
     *   }
     * })
     */
    upsert<T extends SchoolMembershipUpsertArgs>(args: SelectSubset<T, SchoolMembershipUpsertArgs<ExtArgs>>): Prisma__SchoolMembershipClient<$Result.GetResult<Prisma.$SchoolMembershipPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of SchoolMemberships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolMembershipCountArgs} args - Arguments to filter SchoolMemberships to count.
     * @example
     * // Count the number of SchoolMemberships
     * const count = await prisma.schoolMembership.count({
     *   where: {
     *     // ... the filter for the SchoolMemberships we want to count
     *   }
     * })
    **/
    count<T extends SchoolMembershipCountArgs>(
      args?: Subset<T, SchoolMembershipCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SchoolMembershipCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SchoolMembership.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolMembershipAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SchoolMembershipAggregateArgs>(args: Subset<T, SchoolMembershipAggregateArgs>): Prisma.PrismaPromise<GetSchoolMembershipAggregateType<T>>

    /**
     * Group by SchoolMembership.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolMembershipGroupByArgs} args - Group by arguments.
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
      T extends SchoolMembershipGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SchoolMembershipGroupByArgs['orderBy'] }
        : { orderBy?: SchoolMembershipGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SchoolMembershipGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSchoolMembershipGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SchoolMembership model
   */
  readonly fields: SchoolMembershipFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SchoolMembership.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SchoolMembershipClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    manager<T extends SchoolManagerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SchoolManagerDefaultArgs<ExtArgs>>): Prisma__SchoolManagerClient<$Result.GetResult<Prisma.$SchoolManagerPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    school<T extends SchoolDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SchoolDefaultArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the SchoolMembership model
   */ 
  interface SchoolMembershipFieldRefs {
    readonly id: FieldRef<"SchoolMembership", 'String'>
    readonly managerId: FieldRef<"SchoolMembership", 'String'>
    readonly schoolId: FieldRef<"SchoolMembership", 'String'>
    readonly role: FieldRef<"SchoolMembership", 'String'>
    readonly createdAt: FieldRef<"SchoolMembership", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SchoolMembership findUnique
   */
  export type SchoolMembershipFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolMembership
     */
    select?: SchoolMembershipSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolMembershipInclude<ExtArgs> | null
    /**
     * Filter, which SchoolMembership to fetch.
     */
    where: SchoolMembershipWhereUniqueInput
  }

  /**
   * SchoolMembership findUniqueOrThrow
   */
  export type SchoolMembershipFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolMembership
     */
    select?: SchoolMembershipSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolMembershipInclude<ExtArgs> | null
    /**
     * Filter, which SchoolMembership to fetch.
     */
    where: SchoolMembershipWhereUniqueInput
  }

  /**
   * SchoolMembership findFirst
   */
  export type SchoolMembershipFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolMembership
     */
    select?: SchoolMembershipSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolMembershipInclude<ExtArgs> | null
    /**
     * Filter, which SchoolMembership to fetch.
     */
    where?: SchoolMembershipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SchoolMemberships to fetch.
     */
    orderBy?: SchoolMembershipOrderByWithRelationInput | SchoolMembershipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SchoolMemberships.
     */
    cursor?: SchoolMembershipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SchoolMemberships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SchoolMemberships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SchoolMemberships.
     */
    distinct?: SchoolMembershipScalarFieldEnum | SchoolMembershipScalarFieldEnum[]
  }

  /**
   * SchoolMembership findFirstOrThrow
   */
  export type SchoolMembershipFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolMembership
     */
    select?: SchoolMembershipSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolMembershipInclude<ExtArgs> | null
    /**
     * Filter, which SchoolMembership to fetch.
     */
    where?: SchoolMembershipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SchoolMemberships to fetch.
     */
    orderBy?: SchoolMembershipOrderByWithRelationInput | SchoolMembershipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SchoolMemberships.
     */
    cursor?: SchoolMembershipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SchoolMemberships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SchoolMemberships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SchoolMemberships.
     */
    distinct?: SchoolMembershipScalarFieldEnum | SchoolMembershipScalarFieldEnum[]
  }

  /**
   * SchoolMembership findMany
   */
  export type SchoolMembershipFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolMembership
     */
    select?: SchoolMembershipSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolMembershipInclude<ExtArgs> | null
    /**
     * Filter, which SchoolMemberships to fetch.
     */
    where?: SchoolMembershipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SchoolMemberships to fetch.
     */
    orderBy?: SchoolMembershipOrderByWithRelationInput | SchoolMembershipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SchoolMemberships.
     */
    cursor?: SchoolMembershipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SchoolMemberships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SchoolMemberships.
     */
    skip?: number
    distinct?: SchoolMembershipScalarFieldEnum | SchoolMembershipScalarFieldEnum[]
  }

  /**
   * SchoolMembership create
   */
  export type SchoolMembershipCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolMembership
     */
    select?: SchoolMembershipSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolMembershipInclude<ExtArgs> | null
    /**
     * The data needed to create a SchoolMembership.
     */
    data: XOR<SchoolMembershipCreateInput, SchoolMembershipUncheckedCreateInput>
  }

  /**
   * SchoolMembership createMany
   */
  export type SchoolMembershipCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SchoolMemberships.
     */
    data: SchoolMembershipCreateManyInput | SchoolMembershipCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SchoolMembership createManyAndReturn
   */
  export type SchoolMembershipCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolMembership
     */
    select?: SchoolMembershipSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many SchoolMemberships.
     */
    data: SchoolMembershipCreateManyInput | SchoolMembershipCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolMembershipIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SchoolMembership update
   */
  export type SchoolMembershipUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolMembership
     */
    select?: SchoolMembershipSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolMembershipInclude<ExtArgs> | null
    /**
     * The data needed to update a SchoolMembership.
     */
    data: XOR<SchoolMembershipUpdateInput, SchoolMembershipUncheckedUpdateInput>
    /**
     * Choose, which SchoolMembership to update.
     */
    where: SchoolMembershipWhereUniqueInput
  }

  /**
   * SchoolMembership updateMany
   */
  export type SchoolMembershipUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SchoolMemberships.
     */
    data: XOR<SchoolMembershipUpdateManyMutationInput, SchoolMembershipUncheckedUpdateManyInput>
    /**
     * Filter which SchoolMemberships to update
     */
    where?: SchoolMembershipWhereInput
  }

  /**
   * SchoolMembership upsert
   */
  export type SchoolMembershipUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolMembership
     */
    select?: SchoolMembershipSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolMembershipInclude<ExtArgs> | null
    /**
     * The filter to search for the SchoolMembership to update in case it exists.
     */
    where: SchoolMembershipWhereUniqueInput
    /**
     * In case the SchoolMembership found by the `where` argument doesn't exist, create a new SchoolMembership with this data.
     */
    create: XOR<SchoolMembershipCreateInput, SchoolMembershipUncheckedCreateInput>
    /**
     * In case the SchoolMembership was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SchoolMembershipUpdateInput, SchoolMembershipUncheckedUpdateInput>
  }

  /**
   * SchoolMembership delete
   */
  export type SchoolMembershipDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolMembership
     */
    select?: SchoolMembershipSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolMembershipInclude<ExtArgs> | null
    /**
     * Filter which SchoolMembership to delete.
     */
    where: SchoolMembershipWhereUniqueInput
  }

  /**
   * SchoolMembership deleteMany
   */
  export type SchoolMembershipDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SchoolMemberships to delete
     */
    where?: SchoolMembershipWhereInput
  }

  /**
   * SchoolMembership without action
   */
  export type SchoolMembershipDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolMembership
     */
    select?: SchoolMembershipSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolMembershipInclude<ExtArgs> | null
  }


  /**
   * Model SiteSettings
   */

  export type AggregateSiteSettings = {
    _count: SiteSettingsCountAggregateOutputType | null
    _min: SiteSettingsMinAggregateOutputType | null
    _max: SiteSettingsMaxAggregateOutputType | null
  }

  export type SiteSettingsMinAggregateOutputType = {
    id: string | null
    schoolId: string | null
    primaryColor: string | null
    secondaryColor: string | null
    logo: string | null
    favicon: string | null
    email: string | null
    phone: string | null
    address: string | null
    website: string | null
    academicYearStart: Date | null
    academicYearEnd: Date | null
    timezone: string | null
    dateFormat: string | null
    timeFormat: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SiteSettingsMaxAggregateOutputType = {
    id: string | null
    schoolId: string | null
    primaryColor: string | null
    secondaryColor: string | null
    logo: string | null
    favicon: string | null
    email: string | null
    phone: string | null
    address: string | null
    website: string | null
    academicYearStart: Date | null
    academicYearEnd: Date | null
    timezone: string | null
    dateFormat: string | null
    timeFormat: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SiteSettingsCountAggregateOutputType = {
    id: number
    schoolId: number
    primaryColor: number
    secondaryColor: number
    logo: number
    favicon: number
    email: number
    phone: number
    address: number
    website: number
    academicYearStart: number
    academicYearEnd: number
    timezone: number
    dateFormat: number
    timeFormat: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SiteSettingsMinAggregateInputType = {
    id?: true
    schoolId?: true
    primaryColor?: true
    secondaryColor?: true
    logo?: true
    favicon?: true
    email?: true
    phone?: true
    address?: true
    website?: true
    academicYearStart?: true
    academicYearEnd?: true
    timezone?: true
    dateFormat?: true
    timeFormat?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SiteSettingsMaxAggregateInputType = {
    id?: true
    schoolId?: true
    primaryColor?: true
    secondaryColor?: true
    logo?: true
    favicon?: true
    email?: true
    phone?: true
    address?: true
    website?: true
    academicYearStart?: true
    academicYearEnd?: true
    timezone?: true
    dateFormat?: true
    timeFormat?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SiteSettingsCountAggregateInputType = {
    id?: true
    schoolId?: true
    primaryColor?: true
    secondaryColor?: true
    logo?: true
    favicon?: true
    email?: true
    phone?: true
    address?: true
    website?: true
    academicYearStart?: true
    academicYearEnd?: true
    timezone?: true
    dateFormat?: true
    timeFormat?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SiteSettingsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SiteSettings to aggregate.
     */
    where?: SiteSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SiteSettings to fetch.
     */
    orderBy?: SiteSettingsOrderByWithRelationInput | SiteSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SiteSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SiteSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SiteSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SiteSettings
    **/
    _count?: true | SiteSettingsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SiteSettingsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SiteSettingsMaxAggregateInputType
  }

  export type GetSiteSettingsAggregateType<T extends SiteSettingsAggregateArgs> = {
        [P in keyof T & keyof AggregateSiteSettings]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSiteSettings[P]>
      : GetScalarType<T[P], AggregateSiteSettings[P]>
  }




  export type SiteSettingsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SiteSettingsWhereInput
    orderBy?: SiteSettingsOrderByWithAggregationInput | SiteSettingsOrderByWithAggregationInput[]
    by: SiteSettingsScalarFieldEnum[] | SiteSettingsScalarFieldEnum
    having?: SiteSettingsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SiteSettingsCountAggregateInputType | true
    _min?: SiteSettingsMinAggregateInputType
    _max?: SiteSettingsMaxAggregateInputType
  }

  export type SiteSettingsGroupByOutputType = {
    id: string
    schoolId: string
    primaryColor: string | null
    secondaryColor: string | null
    logo: string | null
    favicon: string | null
    email: string | null
    phone: string | null
    address: string | null
    website: string | null
    academicYearStart: Date | null
    academicYearEnd: Date | null
    timezone: string | null
    dateFormat: string | null
    timeFormat: string | null
    createdAt: Date
    updatedAt: Date
    _count: SiteSettingsCountAggregateOutputType | null
    _min: SiteSettingsMinAggregateOutputType | null
    _max: SiteSettingsMaxAggregateOutputType | null
  }

  type GetSiteSettingsGroupByPayload<T extends SiteSettingsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SiteSettingsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SiteSettingsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SiteSettingsGroupByOutputType[P]>
            : GetScalarType<T[P], SiteSettingsGroupByOutputType[P]>
        }
      >
    >


  export type SiteSettingsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    schoolId?: boolean
    primaryColor?: boolean
    secondaryColor?: boolean
    logo?: boolean
    favicon?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    website?: boolean
    academicYearStart?: boolean
    academicYearEnd?: boolean
    timezone?: boolean
    dateFormat?: boolean
    timeFormat?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    school?: boolean | SchoolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["siteSettings"]>

  export type SiteSettingsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    schoolId?: boolean
    primaryColor?: boolean
    secondaryColor?: boolean
    logo?: boolean
    favicon?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    website?: boolean
    academicYearStart?: boolean
    academicYearEnd?: boolean
    timezone?: boolean
    dateFormat?: boolean
    timeFormat?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    school?: boolean | SchoolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["siteSettings"]>

  export type SiteSettingsSelectScalar = {
    id?: boolean
    schoolId?: boolean
    primaryColor?: boolean
    secondaryColor?: boolean
    logo?: boolean
    favicon?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    website?: boolean
    academicYearStart?: boolean
    academicYearEnd?: boolean
    timezone?: boolean
    dateFormat?: boolean
    timeFormat?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SiteSettingsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    school?: boolean | SchoolDefaultArgs<ExtArgs>
  }
  export type SiteSettingsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    school?: boolean | SchoolDefaultArgs<ExtArgs>
  }

  export type $SiteSettingsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SiteSettings"
    objects: {
      school: Prisma.$SchoolPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      schoolId: string
      primaryColor: string | null
      secondaryColor: string | null
      logo: string | null
      favicon: string | null
      email: string | null
      phone: string | null
      address: string | null
      website: string | null
      academicYearStart: Date | null
      academicYearEnd: Date | null
      timezone: string | null
      dateFormat: string | null
      timeFormat: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["siteSettings"]>
    composites: {}
  }

  type SiteSettingsGetPayload<S extends boolean | null | undefined | SiteSettingsDefaultArgs> = $Result.GetResult<Prisma.$SiteSettingsPayload, S>

  type SiteSettingsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SiteSettingsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SiteSettingsCountAggregateInputType | true
    }

  export interface SiteSettingsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SiteSettings'], meta: { name: 'SiteSettings' } }
    /**
     * Find zero or one SiteSettings that matches the filter.
     * @param {SiteSettingsFindUniqueArgs} args - Arguments to find a SiteSettings
     * @example
     * // Get one SiteSettings
     * const siteSettings = await prisma.siteSettings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SiteSettingsFindUniqueArgs>(args: SelectSubset<T, SiteSettingsFindUniqueArgs<ExtArgs>>): Prisma__SiteSettingsClient<$Result.GetResult<Prisma.$SiteSettingsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one SiteSettings that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SiteSettingsFindUniqueOrThrowArgs} args - Arguments to find a SiteSettings
     * @example
     * // Get one SiteSettings
     * const siteSettings = await prisma.siteSettings.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SiteSettingsFindUniqueOrThrowArgs>(args: SelectSubset<T, SiteSettingsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SiteSettingsClient<$Result.GetResult<Prisma.$SiteSettingsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first SiteSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteSettingsFindFirstArgs} args - Arguments to find a SiteSettings
     * @example
     * // Get one SiteSettings
     * const siteSettings = await prisma.siteSettings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SiteSettingsFindFirstArgs>(args?: SelectSubset<T, SiteSettingsFindFirstArgs<ExtArgs>>): Prisma__SiteSettingsClient<$Result.GetResult<Prisma.$SiteSettingsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first SiteSettings that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteSettingsFindFirstOrThrowArgs} args - Arguments to find a SiteSettings
     * @example
     * // Get one SiteSettings
     * const siteSettings = await prisma.siteSettings.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SiteSettingsFindFirstOrThrowArgs>(args?: SelectSubset<T, SiteSettingsFindFirstOrThrowArgs<ExtArgs>>): Prisma__SiteSettingsClient<$Result.GetResult<Prisma.$SiteSettingsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more SiteSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteSettingsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SiteSettings
     * const siteSettings = await prisma.siteSettings.findMany()
     * 
     * // Get first 10 SiteSettings
     * const siteSettings = await prisma.siteSettings.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const siteSettingsWithIdOnly = await prisma.siteSettings.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SiteSettingsFindManyArgs>(args?: SelectSubset<T, SiteSettingsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SiteSettingsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a SiteSettings.
     * @param {SiteSettingsCreateArgs} args - Arguments to create a SiteSettings.
     * @example
     * // Create one SiteSettings
     * const SiteSettings = await prisma.siteSettings.create({
     *   data: {
     *     // ... data to create a SiteSettings
     *   }
     * })
     * 
     */
    create<T extends SiteSettingsCreateArgs>(args: SelectSubset<T, SiteSettingsCreateArgs<ExtArgs>>): Prisma__SiteSettingsClient<$Result.GetResult<Prisma.$SiteSettingsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many SiteSettings.
     * @param {SiteSettingsCreateManyArgs} args - Arguments to create many SiteSettings.
     * @example
     * // Create many SiteSettings
     * const siteSettings = await prisma.siteSettings.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SiteSettingsCreateManyArgs>(args?: SelectSubset<T, SiteSettingsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SiteSettings and returns the data saved in the database.
     * @param {SiteSettingsCreateManyAndReturnArgs} args - Arguments to create many SiteSettings.
     * @example
     * // Create many SiteSettings
     * const siteSettings = await prisma.siteSettings.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SiteSettings and only return the `id`
     * const siteSettingsWithIdOnly = await prisma.siteSettings.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SiteSettingsCreateManyAndReturnArgs>(args?: SelectSubset<T, SiteSettingsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SiteSettingsPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a SiteSettings.
     * @param {SiteSettingsDeleteArgs} args - Arguments to delete one SiteSettings.
     * @example
     * // Delete one SiteSettings
     * const SiteSettings = await prisma.siteSettings.delete({
     *   where: {
     *     // ... filter to delete one SiteSettings
     *   }
     * })
     * 
     */
    delete<T extends SiteSettingsDeleteArgs>(args: SelectSubset<T, SiteSettingsDeleteArgs<ExtArgs>>): Prisma__SiteSettingsClient<$Result.GetResult<Prisma.$SiteSettingsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one SiteSettings.
     * @param {SiteSettingsUpdateArgs} args - Arguments to update one SiteSettings.
     * @example
     * // Update one SiteSettings
     * const siteSettings = await prisma.siteSettings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SiteSettingsUpdateArgs>(args: SelectSubset<T, SiteSettingsUpdateArgs<ExtArgs>>): Prisma__SiteSettingsClient<$Result.GetResult<Prisma.$SiteSettingsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more SiteSettings.
     * @param {SiteSettingsDeleteManyArgs} args - Arguments to filter SiteSettings to delete.
     * @example
     * // Delete a few SiteSettings
     * const { count } = await prisma.siteSettings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SiteSettingsDeleteManyArgs>(args?: SelectSubset<T, SiteSettingsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SiteSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteSettingsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SiteSettings
     * const siteSettings = await prisma.siteSettings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SiteSettingsUpdateManyArgs>(args: SelectSubset<T, SiteSettingsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SiteSettings.
     * @param {SiteSettingsUpsertArgs} args - Arguments to update or create a SiteSettings.
     * @example
     * // Update or create a SiteSettings
     * const siteSettings = await prisma.siteSettings.upsert({
     *   create: {
     *     // ... data to create a SiteSettings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SiteSettings we want to update
     *   }
     * })
     */
    upsert<T extends SiteSettingsUpsertArgs>(args: SelectSubset<T, SiteSettingsUpsertArgs<ExtArgs>>): Prisma__SiteSettingsClient<$Result.GetResult<Prisma.$SiteSettingsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of SiteSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteSettingsCountArgs} args - Arguments to filter SiteSettings to count.
     * @example
     * // Count the number of SiteSettings
     * const count = await prisma.siteSettings.count({
     *   where: {
     *     // ... the filter for the SiteSettings we want to count
     *   }
     * })
    **/
    count<T extends SiteSettingsCountArgs>(
      args?: Subset<T, SiteSettingsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SiteSettingsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SiteSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteSettingsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SiteSettingsAggregateArgs>(args: Subset<T, SiteSettingsAggregateArgs>): Prisma.PrismaPromise<GetSiteSettingsAggregateType<T>>

    /**
     * Group by SiteSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteSettingsGroupByArgs} args - Group by arguments.
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
      T extends SiteSettingsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SiteSettingsGroupByArgs['orderBy'] }
        : { orderBy?: SiteSettingsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SiteSettingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSiteSettingsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SiteSettings model
   */
  readonly fields: SiteSettingsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SiteSettings.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SiteSettingsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    school<T extends SchoolDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SchoolDefaultArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the SiteSettings model
   */ 
  interface SiteSettingsFieldRefs {
    readonly id: FieldRef<"SiteSettings", 'String'>
    readonly schoolId: FieldRef<"SiteSettings", 'String'>
    readonly primaryColor: FieldRef<"SiteSettings", 'String'>
    readonly secondaryColor: FieldRef<"SiteSettings", 'String'>
    readonly logo: FieldRef<"SiteSettings", 'String'>
    readonly favicon: FieldRef<"SiteSettings", 'String'>
    readonly email: FieldRef<"SiteSettings", 'String'>
    readonly phone: FieldRef<"SiteSettings", 'String'>
    readonly address: FieldRef<"SiteSettings", 'String'>
    readonly website: FieldRef<"SiteSettings", 'String'>
    readonly academicYearStart: FieldRef<"SiteSettings", 'DateTime'>
    readonly academicYearEnd: FieldRef<"SiteSettings", 'DateTime'>
    readonly timezone: FieldRef<"SiteSettings", 'String'>
    readonly dateFormat: FieldRef<"SiteSettings", 'String'>
    readonly timeFormat: FieldRef<"SiteSettings", 'String'>
    readonly createdAt: FieldRef<"SiteSettings", 'DateTime'>
    readonly updatedAt: FieldRef<"SiteSettings", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SiteSettings findUnique
   */
  export type SiteSettingsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteSettings
     */
    select?: SiteSettingsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteSettingsInclude<ExtArgs> | null
    /**
     * Filter, which SiteSettings to fetch.
     */
    where: SiteSettingsWhereUniqueInput
  }

  /**
   * SiteSettings findUniqueOrThrow
   */
  export type SiteSettingsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteSettings
     */
    select?: SiteSettingsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteSettingsInclude<ExtArgs> | null
    /**
     * Filter, which SiteSettings to fetch.
     */
    where: SiteSettingsWhereUniqueInput
  }

  /**
   * SiteSettings findFirst
   */
  export type SiteSettingsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteSettings
     */
    select?: SiteSettingsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteSettingsInclude<ExtArgs> | null
    /**
     * Filter, which SiteSettings to fetch.
     */
    where?: SiteSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SiteSettings to fetch.
     */
    orderBy?: SiteSettingsOrderByWithRelationInput | SiteSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SiteSettings.
     */
    cursor?: SiteSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SiteSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SiteSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SiteSettings.
     */
    distinct?: SiteSettingsScalarFieldEnum | SiteSettingsScalarFieldEnum[]
  }

  /**
   * SiteSettings findFirstOrThrow
   */
  export type SiteSettingsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteSettings
     */
    select?: SiteSettingsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteSettingsInclude<ExtArgs> | null
    /**
     * Filter, which SiteSettings to fetch.
     */
    where?: SiteSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SiteSettings to fetch.
     */
    orderBy?: SiteSettingsOrderByWithRelationInput | SiteSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SiteSettings.
     */
    cursor?: SiteSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SiteSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SiteSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SiteSettings.
     */
    distinct?: SiteSettingsScalarFieldEnum | SiteSettingsScalarFieldEnum[]
  }

  /**
   * SiteSettings findMany
   */
  export type SiteSettingsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteSettings
     */
    select?: SiteSettingsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteSettingsInclude<ExtArgs> | null
    /**
     * Filter, which SiteSettings to fetch.
     */
    where?: SiteSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SiteSettings to fetch.
     */
    orderBy?: SiteSettingsOrderByWithRelationInput | SiteSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SiteSettings.
     */
    cursor?: SiteSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SiteSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SiteSettings.
     */
    skip?: number
    distinct?: SiteSettingsScalarFieldEnum | SiteSettingsScalarFieldEnum[]
  }

  /**
   * SiteSettings create
   */
  export type SiteSettingsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteSettings
     */
    select?: SiteSettingsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteSettingsInclude<ExtArgs> | null
    /**
     * The data needed to create a SiteSettings.
     */
    data: XOR<SiteSettingsCreateInput, SiteSettingsUncheckedCreateInput>
  }

  /**
   * SiteSettings createMany
   */
  export type SiteSettingsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SiteSettings.
     */
    data: SiteSettingsCreateManyInput | SiteSettingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SiteSettings createManyAndReturn
   */
  export type SiteSettingsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteSettings
     */
    select?: SiteSettingsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many SiteSettings.
     */
    data: SiteSettingsCreateManyInput | SiteSettingsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteSettingsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SiteSettings update
   */
  export type SiteSettingsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteSettings
     */
    select?: SiteSettingsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteSettingsInclude<ExtArgs> | null
    /**
     * The data needed to update a SiteSettings.
     */
    data: XOR<SiteSettingsUpdateInput, SiteSettingsUncheckedUpdateInput>
    /**
     * Choose, which SiteSettings to update.
     */
    where: SiteSettingsWhereUniqueInput
  }

  /**
   * SiteSettings updateMany
   */
  export type SiteSettingsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SiteSettings.
     */
    data: XOR<SiteSettingsUpdateManyMutationInput, SiteSettingsUncheckedUpdateManyInput>
    /**
     * Filter which SiteSettings to update
     */
    where?: SiteSettingsWhereInput
  }

  /**
   * SiteSettings upsert
   */
  export type SiteSettingsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteSettings
     */
    select?: SiteSettingsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteSettingsInclude<ExtArgs> | null
    /**
     * The filter to search for the SiteSettings to update in case it exists.
     */
    where: SiteSettingsWhereUniqueInput
    /**
     * In case the SiteSettings found by the `where` argument doesn't exist, create a new SiteSettings with this data.
     */
    create: XOR<SiteSettingsCreateInput, SiteSettingsUncheckedCreateInput>
    /**
     * In case the SiteSettings was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SiteSettingsUpdateInput, SiteSettingsUncheckedUpdateInput>
  }

  /**
   * SiteSettings delete
   */
  export type SiteSettingsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteSettings
     */
    select?: SiteSettingsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteSettingsInclude<ExtArgs> | null
    /**
     * Filter which SiteSettings to delete.
     */
    where: SiteSettingsWhereUniqueInput
  }

  /**
   * SiteSettings deleteMany
   */
  export type SiteSettingsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SiteSettings to delete
     */
    where?: SiteSettingsWhereInput
  }

  /**
   * SiteSettings without action
   */
  export type SiteSettingsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteSettings
     */
    select?: SiteSettingsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteSettingsInclude<ExtArgs> | null
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


  export const SchoolScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    domain: 'domain',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    plan: 'plan',
    subscriptionStatus: 'subscriptionStatus',
    trialEndsAt: 'trialEndsAt',
    subscriptionEndsAt: 'subscriptionEndsAt',
    enabledServices: 'enabledServices'
  };

  export type SchoolScalarFieldEnum = (typeof SchoolScalarFieldEnum)[keyof typeof SchoolScalarFieldEnum]


  export const SchoolManagerScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SchoolManagerScalarFieldEnum = (typeof SchoolManagerScalarFieldEnum)[keyof typeof SchoolManagerScalarFieldEnum]


  export const SchoolMembershipScalarFieldEnum: {
    id: 'id',
    managerId: 'managerId',
    schoolId: 'schoolId',
    role: 'role',
    createdAt: 'createdAt'
  };

  export type SchoolMembershipScalarFieldEnum = (typeof SchoolMembershipScalarFieldEnum)[keyof typeof SchoolMembershipScalarFieldEnum]


  export const SiteSettingsScalarFieldEnum: {
    id: 'id',
    schoolId: 'schoolId',
    primaryColor: 'primaryColor',
    secondaryColor: 'secondaryColor',
    logo: 'logo',
    favicon: 'favicon',
    email: 'email',
    phone: 'phone',
    address: 'address',
    website: 'website',
    academicYearStart: 'academicYearStart',
    academicYearEnd: 'academicYearEnd',
    timezone: 'timezone',
    dateFormat: 'dateFormat',
    timeFormat: 'timeFormat',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SiteSettingsScalarFieldEnum = (typeof SiteSettingsScalarFieldEnum)[keyof typeof SiteSettingsScalarFieldEnum]


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
   * Reference to a field of type 'PlanType'
   */
  export type EnumPlanTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PlanType'>
    


  /**
   * Reference to a field of type 'PlanType[]'
   */
  export type ListEnumPlanTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PlanType[]'>
    


  /**
   * Reference to a field of type 'SubscriptionStatus'
   */
  export type EnumSubscriptionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubscriptionStatus'>
    


  /**
   * Reference to a field of type 'SubscriptionStatus[]'
   */
  export type ListEnumSubscriptionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubscriptionStatus[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type SchoolWhereInput = {
    AND?: SchoolWhereInput | SchoolWhereInput[]
    OR?: SchoolWhereInput[]
    NOT?: SchoolWhereInput | SchoolWhereInput[]
    id?: StringFilter<"School"> | string
    name?: StringFilter<"School"> | string
    slug?: StringFilter<"School"> | string
    domain?: StringNullableFilter<"School"> | string | null
    createdAt?: DateTimeFilter<"School"> | Date | string
    updatedAt?: DateTimeFilter<"School"> | Date | string
    plan?: EnumPlanTypeFilter<"School"> | $Enums.PlanType
    subscriptionStatus?: EnumSubscriptionStatusFilter<"School"> | $Enums.SubscriptionStatus
    trialEndsAt?: DateTimeFilter<"School"> | Date | string
    subscriptionEndsAt?: DateTimeNullableFilter<"School"> | Date | string | null
    enabledServices?: StringFilter<"School"> | string
    settings?: XOR<SiteSettingsNullableRelationFilter, SiteSettingsWhereInput> | null
    memberships?: SchoolMembershipListRelationFilter
  }

  export type SchoolOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    domain?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    plan?: SortOrder
    subscriptionStatus?: SortOrder
    trialEndsAt?: SortOrder
    subscriptionEndsAt?: SortOrderInput | SortOrder
    enabledServices?: SortOrder
    settings?: SiteSettingsOrderByWithRelationInput
    memberships?: SchoolMembershipOrderByRelationAggregateInput
  }

  export type SchoolWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    domain?: string
    AND?: SchoolWhereInput | SchoolWhereInput[]
    OR?: SchoolWhereInput[]
    NOT?: SchoolWhereInput | SchoolWhereInput[]
    name?: StringFilter<"School"> | string
    createdAt?: DateTimeFilter<"School"> | Date | string
    updatedAt?: DateTimeFilter<"School"> | Date | string
    plan?: EnumPlanTypeFilter<"School"> | $Enums.PlanType
    subscriptionStatus?: EnumSubscriptionStatusFilter<"School"> | $Enums.SubscriptionStatus
    trialEndsAt?: DateTimeFilter<"School"> | Date | string
    subscriptionEndsAt?: DateTimeNullableFilter<"School"> | Date | string | null
    enabledServices?: StringFilter<"School"> | string
    settings?: XOR<SiteSettingsNullableRelationFilter, SiteSettingsWhereInput> | null
    memberships?: SchoolMembershipListRelationFilter
  }, "id" | "slug" | "domain">

  export type SchoolOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    domain?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    plan?: SortOrder
    subscriptionStatus?: SortOrder
    trialEndsAt?: SortOrder
    subscriptionEndsAt?: SortOrderInput | SortOrder
    enabledServices?: SortOrder
    _count?: SchoolCountOrderByAggregateInput
    _max?: SchoolMaxOrderByAggregateInput
    _min?: SchoolMinOrderByAggregateInput
  }

  export type SchoolScalarWhereWithAggregatesInput = {
    AND?: SchoolScalarWhereWithAggregatesInput | SchoolScalarWhereWithAggregatesInput[]
    OR?: SchoolScalarWhereWithAggregatesInput[]
    NOT?: SchoolScalarWhereWithAggregatesInput | SchoolScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"School"> | string
    name?: StringWithAggregatesFilter<"School"> | string
    slug?: StringWithAggregatesFilter<"School"> | string
    domain?: StringNullableWithAggregatesFilter<"School"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"School"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"School"> | Date | string
    plan?: EnumPlanTypeWithAggregatesFilter<"School"> | $Enums.PlanType
    subscriptionStatus?: EnumSubscriptionStatusWithAggregatesFilter<"School"> | $Enums.SubscriptionStatus
    trialEndsAt?: DateTimeWithAggregatesFilter<"School"> | Date | string
    subscriptionEndsAt?: DateTimeNullableWithAggregatesFilter<"School"> | Date | string | null
    enabledServices?: StringWithAggregatesFilter<"School"> | string
  }

  export type SchoolManagerWhereInput = {
    AND?: SchoolManagerWhereInput | SchoolManagerWhereInput[]
    OR?: SchoolManagerWhereInput[]
    NOT?: SchoolManagerWhereInput | SchoolManagerWhereInput[]
    id?: StringFilter<"SchoolManager"> | string
    email?: StringFilter<"SchoolManager"> | string
    password?: StringFilter<"SchoolManager"> | string
    name?: StringFilter<"SchoolManager"> | string
    createdAt?: DateTimeFilter<"SchoolManager"> | Date | string
    updatedAt?: DateTimeFilter<"SchoolManager"> | Date | string
    schools?: SchoolMembershipListRelationFilter
  }

  export type SchoolManagerOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    schools?: SchoolMembershipOrderByRelationAggregateInput
  }

  export type SchoolManagerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: SchoolManagerWhereInput | SchoolManagerWhereInput[]
    OR?: SchoolManagerWhereInput[]
    NOT?: SchoolManagerWhereInput | SchoolManagerWhereInput[]
    password?: StringFilter<"SchoolManager"> | string
    name?: StringFilter<"SchoolManager"> | string
    createdAt?: DateTimeFilter<"SchoolManager"> | Date | string
    updatedAt?: DateTimeFilter<"SchoolManager"> | Date | string
    schools?: SchoolMembershipListRelationFilter
  }, "id" | "email">

  export type SchoolManagerOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SchoolManagerCountOrderByAggregateInput
    _max?: SchoolManagerMaxOrderByAggregateInput
    _min?: SchoolManagerMinOrderByAggregateInput
  }

  export type SchoolManagerScalarWhereWithAggregatesInput = {
    AND?: SchoolManagerScalarWhereWithAggregatesInput | SchoolManagerScalarWhereWithAggregatesInput[]
    OR?: SchoolManagerScalarWhereWithAggregatesInput[]
    NOT?: SchoolManagerScalarWhereWithAggregatesInput | SchoolManagerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SchoolManager"> | string
    email?: StringWithAggregatesFilter<"SchoolManager"> | string
    password?: StringWithAggregatesFilter<"SchoolManager"> | string
    name?: StringWithAggregatesFilter<"SchoolManager"> | string
    createdAt?: DateTimeWithAggregatesFilter<"SchoolManager"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SchoolManager"> | Date | string
  }

  export type SchoolMembershipWhereInput = {
    AND?: SchoolMembershipWhereInput | SchoolMembershipWhereInput[]
    OR?: SchoolMembershipWhereInput[]
    NOT?: SchoolMembershipWhereInput | SchoolMembershipWhereInput[]
    id?: StringFilter<"SchoolMembership"> | string
    managerId?: StringFilter<"SchoolMembership"> | string
    schoolId?: StringFilter<"SchoolMembership"> | string
    role?: StringFilter<"SchoolMembership"> | string
    createdAt?: DateTimeFilter<"SchoolMembership"> | Date | string
    manager?: XOR<SchoolManagerRelationFilter, SchoolManagerWhereInput>
    school?: XOR<SchoolRelationFilter, SchoolWhereInput>
  }

  export type SchoolMembershipOrderByWithRelationInput = {
    id?: SortOrder
    managerId?: SortOrder
    schoolId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    manager?: SchoolManagerOrderByWithRelationInput
    school?: SchoolOrderByWithRelationInput
  }

  export type SchoolMembershipWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    managerId_schoolId?: SchoolMembershipManagerIdSchoolIdCompoundUniqueInput
    AND?: SchoolMembershipWhereInput | SchoolMembershipWhereInput[]
    OR?: SchoolMembershipWhereInput[]
    NOT?: SchoolMembershipWhereInput | SchoolMembershipWhereInput[]
    managerId?: StringFilter<"SchoolMembership"> | string
    schoolId?: StringFilter<"SchoolMembership"> | string
    role?: StringFilter<"SchoolMembership"> | string
    createdAt?: DateTimeFilter<"SchoolMembership"> | Date | string
    manager?: XOR<SchoolManagerRelationFilter, SchoolManagerWhereInput>
    school?: XOR<SchoolRelationFilter, SchoolWhereInput>
  }, "id" | "managerId_schoolId">

  export type SchoolMembershipOrderByWithAggregationInput = {
    id?: SortOrder
    managerId?: SortOrder
    schoolId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    _count?: SchoolMembershipCountOrderByAggregateInput
    _max?: SchoolMembershipMaxOrderByAggregateInput
    _min?: SchoolMembershipMinOrderByAggregateInput
  }

  export type SchoolMembershipScalarWhereWithAggregatesInput = {
    AND?: SchoolMembershipScalarWhereWithAggregatesInput | SchoolMembershipScalarWhereWithAggregatesInput[]
    OR?: SchoolMembershipScalarWhereWithAggregatesInput[]
    NOT?: SchoolMembershipScalarWhereWithAggregatesInput | SchoolMembershipScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SchoolMembership"> | string
    managerId?: StringWithAggregatesFilter<"SchoolMembership"> | string
    schoolId?: StringWithAggregatesFilter<"SchoolMembership"> | string
    role?: StringWithAggregatesFilter<"SchoolMembership"> | string
    createdAt?: DateTimeWithAggregatesFilter<"SchoolMembership"> | Date | string
  }

  export type SiteSettingsWhereInput = {
    AND?: SiteSettingsWhereInput | SiteSettingsWhereInput[]
    OR?: SiteSettingsWhereInput[]
    NOT?: SiteSettingsWhereInput | SiteSettingsWhereInput[]
    id?: StringFilter<"SiteSettings"> | string
    schoolId?: StringFilter<"SiteSettings"> | string
    primaryColor?: StringNullableFilter<"SiteSettings"> | string | null
    secondaryColor?: StringNullableFilter<"SiteSettings"> | string | null
    logo?: StringNullableFilter<"SiteSettings"> | string | null
    favicon?: StringNullableFilter<"SiteSettings"> | string | null
    email?: StringNullableFilter<"SiteSettings"> | string | null
    phone?: StringNullableFilter<"SiteSettings"> | string | null
    address?: StringNullableFilter<"SiteSettings"> | string | null
    website?: StringNullableFilter<"SiteSettings"> | string | null
    academicYearStart?: DateTimeNullableFilter<"SiteSettings"> | Date | string | null
    academicYearEnd?: DateTimeNullableFilter<"SiteSettings"> | Date | string | null
    timezone?: StringNullableFilter<"SiteSettings"> | string | null
    dateFormat?: StringNullableFilter<"SiteSettings"> | string | null
    timeFormat?: StringNullableFilter<"SiteSettings"> | string | null
    createdAt?: DateTimeFilter<"SiteSettings"> | Date | string
    updatedAt?: DateTimeFilter<"SiteSettings"> | Date | string
    school?: XOR<SchoolRelationFilter, SchoolWhereInput>
  }

  export type SiteSettingsOrderByWithRelationInput = {
    id?: SortOrder
    schoolId?: SortOrder
    primaryColor?: SortOrderInput | SortOrder
    secondaryColor?: SortOrderInput | SortOrder
    logo?: SortOrderInput | SortOrder
    favicon?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    website?: SortOrderInput | SortOrder
    academicYearStart?: SortOrderInput | SortOrder
    academicYearEnd?: SortOrderInput | SortOrder
    timezone?: SortOrderInput | SortOrder
    dateFormat?: SortOrderInput | SortOrder
    timeFormat?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    school?: SchoolOrderByWithRelationInput
  }

  export type SiteSettingsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    schoolId?: string
    AND?: SiteSettingsWhereInput | SiteSettingsWhereInput[]
    OR?: SiteSettingsWhereInput[]
    NOT?: SiteSettingsWhereInput | SiteSettingsWhereInput[]
    primaryColor?: StringNullableFilter<"SiteSettings"> | string | null
    secondaryColor?: StringNullableFilter<"SiteSettings"> | string | null
    logo?: StringNullableFilter<"SiteSettings"> | string | null
    favicon?: StringNullableFilter<"SiteSettings"> | string | null
    email?: StringNullableFilter<"SiteSettings"> | string | null
    phone?: StringNullableFilter<"SiteSettings"> | string | null
    address?: StringNullableFilter<"SiteSettings"> | string | null
    website?: StringNullableFilter<"SiteSettings"> | string | null
    academicYearStart?: DateTimeNullableFilter<"SiteSettings"> | Date | string | null
    academicYearEnd?: DateTimeNullableFilter<"SiteSettings"> | Date | string | null
    timezone?: StringNullableFilter<"SiteSettings"> | string | null
    dateFormat?: StringNullableFilter<"SiteSettings"> | string | null
    timeFormat?: StringNullableFilter<"SiteSettings"> | string | null
    createdAt?: DateTimeFilter<"SiteSettings"> | Date | string
    updatedAt?: DateTimeFilter<"SiteSettings"> | Date | string
    school?: XOR<SchoolRelationFilter, SchoolWhereInput>
  }, "id" | "schoolId">

  export type SiteSettingsOrderByWithAggregationInput = {
    id?: SortOrder
    schoolId?: SortOrder
    primaryColor?: SortOrderInput | SortOrder
    secondaryColor?: SortOrderInput | SortOrder
    logo?: SortOrderInput | SortOrder
    favicon?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    website?: SortOrderInput | SortOrder
    academicYearStart?: SortOrderInput | SortOrder
    academicYearEnd?: SortOrderInput | SortOrder
    timezone?: SortOrderInput | SortOrder
    dateFormat?: SortOrderInput | SortOrder
    timeFormat?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SiteSettingsCountOrderByAggregateInput
    _max?: SiteSettingsMaxOrderByAggregateInput
    _min?: SiteSettingsMinOrderByAggregateInput
  }

  export type SiteSettingsScalarWhereWithAggregatesInput = {
    AND?: SiteSettingsScalarWhereWithAggregatesInput | SiteSettingsScalarWhereWithAggregatesInput[]
    OR?: SiteSettingsScalarWhereWithAggregatesInput[]
    NOT?: SiteSettingsScalarWhereWithAggregatesInput | SiteSettingsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SiteSettings"> | string
    schoolId?: StringWithAggregatesFilter<"SiteSettings"> | string
    primaryColor?: StringNullableWithAggregatesFilter<"SiteSettings"> | string | null
    secondaryColor?: StringNullableWithAggregatesFilter<"SiteSettings"> | string | null
    logo?: StringNullableWithAggregatesFilter<"SiteSettings"> | string | null
    favicon?: StringNullableWithAggregatesFilter<"SiteSettings"> | string | null
    email?: StringNullableWithAggregatesFilter<"SiteSettings"> | string | null
    phone?: StringNullableWithAggregatesFilter<"SiteSettings"> | string | null
    address?: StringNullableWithAggregatesFilter<"SiteSettings"> | string | null
    website?: StringNullableWithAggregatesFilter<"SiteSettings"> | string | null
    academicYearStart?: DateTimeNullableWithAggregatesFilter<"SiteSettings"> | Date | string | null
    academicYearEnd?: DateTimeNullableWithAggregatesFilter<"SiteSettings"> | Date | string | null
    timezone?: StringNullableWithAggregatesFilter<"SiteSettings"> | string | null
    dateFormat?: StringNullableWithAggregatesFilter<"SiteSettings"> | string | null
    timeFormat?: StringNullableWithAggregatesFilter<"SiteSettings"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"SiteSettings"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SiteSettings"> | Date | string
  }

  export type SchoolCreateInput = {
    id?: string
    name: string
    slug: string
    domain?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    plan?: $Enums.PlanType
    subscriptionStatus?: $Enums.SubscriptionStatus
    trialEndsAt: Date | string
    subscriptionEndsAt?: Date | string | null
    enabledServices?: string
    settings?: SiteSettingsCreateNestedOneWithoutSchoolInput
    memberships?: SchoolMembershipCreateNestedManyWithoutSchoolInput
  }

  export type SchoolUncheckedCreateInput = {
    id?: string
    name: string
    slug: string
    domain?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    plan?: $Enums.PlanType
    subscriptionStatus?: $Enums.SubscriptionStatus
    trialEndsAt: Date | string
    subscriptionEndsAt?: Date | string | null
    enabledServices?: string
    settings?: SiteSettingsUncheckedCreateNestedOneWithoutSchoolInput
    memberships?: SchoolMembershipUncheckedCreateNestedManyWithoutSchoolInput
  }

  export type SchoolUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    domain?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plan?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    subscriptionStatus?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    trialEndsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscriptionEndsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    enabledServices?: StringFieldUpdateOperationsInput | string
    settings?: SiteSettingsUpdateOneWithoutSchoolNestedInput
    memberships?: SchoolMembershipUpdateManyWithoutSchoolNestedInput
  }

  export type SchoolUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    domain?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plan?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    subscriptionStatus?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    trialEndsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscriptionEndsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    enabledServices?: StringFieldUpdateOperationsInput | string
    settings?: SiteSettingsUncheckedUpdateOneWithoutSchoolNestedInput
    memberships?: SchoolMembershipUncheckedUpdateManyWithoutSchoolNestedInput
  }

  export type SchoolCreateManyInput = {
    id?: string
    name: string
    slug: string
    domain?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    plan?: $Enums.PlanType
    subscriptionStatus?: $Enums.SubscriptionStatus
    trialEndsAt: Date | string
    subscriptionEndsAt?: Date | string | null
    enabledServices?: string
  }

  export type SchoolUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    domain?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plan?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    subscriptionStatus?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    trialEndsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscriptionEndsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    enabledServices?: StringFieldUpdateOperationsInput | string
  }

  export type SchoolUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    domain?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plan?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    subscriptionStatus?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    trialEndsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscriptionEndsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    enabledServices?: StringFieldUpdateOperationsInput | string
  }

  export type SchoolManagerCreateInput = {
    id?: string
    email: string
    password: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    schools?: SchoolMembershipCreateNestedManyWithoutManagerInput
  }

  export type SchoolManagerUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    schools?: SchoolMembershipUncheckedCreateNestedManyWithoutManagerInput
  }

  export type SchoolManagerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    schools?: SchoolMembershipUpdateManyWithoutManagerNestedInput
  }

  export type SchoolManagerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    schools?: SchoolMembershipUncheckedUpdateManyWithoutManagerNestedInput
  }

  export type SchoolManagerCreateManyInput = {
    id?: string
    email: string
    password: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SchoolManagerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SchoolManagerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SchoolMembershipCreateInput = {
    id?: string
    role?: string
    createdAt?: Date | string
    manager: SchoolManagerCreateNestedOneWithoutSchoolsInput
    school: SchoolCreateNestedOneWithoutMembershipsInput
  }

  export type SchoolMembershipUncheckedCreateInput = {
    id?: string
    managerId: string
    schoolId: string
    role?: string
    createdAt?: Date | string
  }

  export type SchoolMembershipUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    manager?: SchoolManagerUpdateOneRequiredWithoutSchoolsNestedInput
    school?: SchoolUpdateOneRequiredWithoutMembershipsNestedInput
  }

  export type SchoolMembershipUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    managerId?: StringFieldUpdateOperationsInput | string
    schoolId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SchoolMembershipCreateManyInput = {
    id?: string
    managerId: string
    schoolId: string
    role?: string
    createdAt?: Date | string
  }

  export type SchoolMembershipUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SchoolMembershipUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    managerId?: StringFieldUpdateOperationsInput | string
    schoolId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SiteSettingsCreateInput = {
    id?: string
    primaryColor?: string | null
    secondaryColor?: string | null
    logo?: string | null
    favicon?: string | null
    email?: string | null
    phone?: string | null
    address?: string | null
    website?: string | null
    academicYearStart?: Date | string | null
    academicYearEnd?: Date | string | null
    timezone?: string | null
    dateFormat?: string | null
    timeFormat?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    school: SchoolCreateNestedOneWithoutSettingsInput
  }

  export type SiteSettingsUncheckedCreateInput = {
    id?: string
    schoolId: string
    primaryColor?: string | null
    secondaryColor?: string | null
    logo?: string | null
    favicon?: string | null
    email?: string | null
    phone?: string | null
    address?: string | null
    website?: string | null
    academicYearStart?: Date | string | null
    academicYearEnd?: Date | string | null
    timezone?: string | null
    dateFormat?: string | null
    timeFormat?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SiteSettingsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    primaryColor?: NullableStringFieldUpdateOperationsInput | string | null
    secondaryColor?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    favicon?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    academicYearStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    academicYearEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    dateFormat?: NullableStringFieldUpdateOperationsInput | string | null
    timeFormat?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    school?: SchoolUpdateOneRequiredWithoutSettingsNestedInput
  }

  export type SiteSettingsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    schoolId?: StringFieldUpdateOperationsInput | string
    primaryColor?: NullableStringFieldUpdateOperationsInput | string | null
    secondaryColor?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    favicon?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    academicYearStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    academicYearEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    dateFormat?: NullableStringFieldUpdateOperationsInput | string | null
    timeFormat?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SiteSettingsCreateManyInput = {
    id?: string
    schoolId: string
    primaryColor?: string | null
    secondaryColor?: string | null
    logo?: string | null
    favicon?: string | null
    email?: string | null
    phone?: string | null
    address?: string | null
    website?: string | null
    academicYearStart?: Date | string | null
    academicYearEnd?: Date | string | null
    timezone?: string | null
    dateFormat?: string | null
    timeFormat?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SiteSettingsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    primaryColor?: NullableStringFieldUpdateOperationsInput | string | null
    secondaryColor?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    favicon?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    academicYearStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    academicYearEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    dateFormat?: NullableStringFieldUpdateOperationsInput | string | null
    timeFormat?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SiteSettingsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    schoolId?: StringFieldUpdateOperationsInput | string
    primaryColor?: NullableStringFieldUpdateOperationsInput | string | null
    secondaryColor?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    favicon?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    academicYearStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    academicYearEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    dateFormat?: NullableStringFieldUpdateOperationsInput | string | null
    timeFormat?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type EnumPlanTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PlanType | EnumPlanTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PlanType[] | ListEnumPlanTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PlanType[] | ListEnumPlanTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPlanTypeFilter<$PrismaModel> | $Enums.PlanType
  }

  export type EnumSubscriptionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionStatus | EnumSubscriptionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionStatusFilter<$PrismaModel> | $Enums.SubscriptionStatus
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

  export type SiteSettingsNullableRelationFilter = {
    is?: SiteSettingsWhereInput | null
    isNot?: SiteSettingsWhereInput | null
  }

  export type SchoolMembershipListRelationFilter = {
    every?: SchoolMembershipWhereInput
    some?: SchoolMembershipWhereInput
    none?: SchoolMembershipWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SchoolMembershipOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SchoolCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    domain?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    plan?: SortOrder
    subscriptionStatus?: SortOrder
    trialEndsAt?: SortOrder
    subscriptionEndsAt?: SortOrder
    enabledServices?: SortOrder
  }

  export type SchoolMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    domain?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    plan?: SortOrder
    subscriptionStatus?: SortOrder
    trialEndsAt?: SortOrder
    subscriptionEndsAt?: SortOrder
    enabledServices?: SortOrder
  }

  export type SchoolMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    domain?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    plan?: SortOrder
    subscriptionStatus?: SortOrder
    trialEndsAt?: SortOrder
    subscriptionEndsAt?: SortOrder
    enabledServices?: SortOrder
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

  export type EnumPlanTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PlanType | EnumPlanTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PlanType[] | ListEnumPlanTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PlanType[] | ListEnumPlanTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPlanTypeWithAggregatesFilter<$PrismaModel> | $Enums.PlanType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPlanTypeFilter<$PrismaModel>
    _max?: NestedEnumPlanTypeFilter<$PrismaModel>
  }

  export type EnumSubscriptionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionStatus | EnumSubscriptionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionStatusWithAggregatesFilter<$PrismaModel> | $Enums.SubscriptionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubscriptionStatusFilter<$PrismaModel>
    _max?: NestedEnumSubscriptionStatusFilter<$PrismaModel>
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

  export type SchoolManagerCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SchoolManagerMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SchoolManagerMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SchoolManagerRelationFilter = {
    is?: SchoolManagerWhereInput
    isNot?: SchoolManagerWhereInput
  }

  export type SchoolRelationFilter = {
    is?: SchoolWhereInput
    isNot?: SchoolWhereInput
  }

  export type SchoolMembershipManagerIdSchoolIdCompoundUniqueInput = {
    managerId: string
    schoolId: string
  }

  export type SchoolMembershipCountOrderByAggregateInput = {
    id?: SortOrder
    managerId?: SortOrder
    schoolId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type SchoolMembershipMaxOrderByAggregateInput = {
    id?: SortOrder
    managerId?: SortOrder
    schoolId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type SchoolMembershipMinOrderByAggregateInput = {
    id?: SortOrder
    managerId?: SortOrder
    schoolId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type SiteSettingsCountOrderByAggregateInput = {
    id?: SortOrder
    schoolId?: SortOrder
    primaryColor?: SortOrder
    secondaryColor?: SortOrder
    logo?: SortOrder
    favicon?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    website?: SortOrder
    academicYearStart?: SortOrder
    academicYearEnd?: SortOrder
    timezone?: SortOrder
    dateFormat?: SortOrder
    timeFormat?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SiteSettingsMaxOrderByAggregateInput = {
    id?: SortOrder
    schoolId?: SortOrder
    primaryColor?: SortOrder
    secondaryColor?: SortOrder
    logo?: SortOrder
    favicon?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    website?: SortOrder
    academicYearStart?: SortOrder
    academicYearEnd?: SortOrder
    timezone?: SortOrder
    dateFormat?: SortOrder
    timeFormat?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SiteSettingsMinOrderByAggregateInput = {
    id?: SortOrder
    schoolId?: SortOrder
    primaryColor?: SortOrder
    secondaryColor?: SortOrder
    logo?: SortOrder
    favicon?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    website?: SortOrder
    academicYearStart?: SortOrder
    academicYearEnd?: SortOrder
    timezone?: SortOrder
    dateFormat?: SortOrder
    timeFormat?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SiteSettingsCreateNestedOneWithoutSchoolInput = {
    create?: XOR<SiteSettingsCreateWithoutSchoolInput, SiteSettingsUncheckedCreateWithoutSchoolInput>
    connectOrCreate?: SiteSettingsCreateOrConnectWithoutSchoolInput
    connect?: SiteSettingsWhereUniqueInput
  }

  export type SchoolMembershipCreateNestedManyWithoutSchoolInput = {
    create?: XOR<SchoolMembershipCreateWithoutSchoolInput, SchoolMembershipUncheckedCreateWithoutSchoolInput> | SchoolMembershipCreateWithoutSchoolInput[] | SchoolMembershipUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: SchoolMembershipCreateOrConnectWithoutSchoolInput | SchoolMembershipCreateOrConnectWithoutSchoolInput[]
    createMany?: SchoolMembershipCreateManySchoolInputEnvelope
    connect?: SchoolMembershipWhereUniqueInput | SchoolMembershipWhereUniqueInput[]
  }

  export type SiteSettingsUncheckedCreateNestedOneWithoutSchoolInput = {
    create?: XOR<SiteSettingsCreateWithoutSchoolInput, SiteSettingsUncheckedCreateWithoutSchoolInput>
    connectOrCreate?: SiteSettingsCreateOrConnectWithoutSchoolInput
    connect?: SiteSettingsWhereUniqueInput
  }

  export type SchoolMembershipUncheckedCreateNestedManyWithoutSchoolInput = {
    create?: XOR<SchoolMembershipCreateWithoutSchoolInput, SchoolMembershipUncheckedCreateWithoutSchoolInput> | SchoolMembershipCreateWithoutSchoolInput[] | SchoolMembershipUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: SchoolMembershipCreateOrConnectWithoutSchoolInput | SchoolMembershipCreateOrConnectWithoutSchoolInput[]
    createMany?: SchoolMembershipCreateManySchoolInputEnvelope
    connect?: SchoolMembershipWhereUniqueInput | SchoolMembershipWhereUniqueInput[]
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

  export type EnumPlanTypeFieldUpdateOperationsInput = {
    set?: $Enums.PlanType
  }

  export type EnumSubscriptionStatusFieldUpdateOperationsInput = {
    set?: $Enums.SubscriptionStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type SiteSettingsUpdateOneWithoutSchoolNestedInput = {
    create?: XOR<SiteSettingsCreateWithoutSchoolInput, SiteSettingsUncheckedCreateWithoutSchoolInput>
    connectOrCreate?: SiteSettingsCreateOrConnectWithoutSchoolInput
    upsert?: SiteSettingsUpsertWithoutSchoolInput
    disconnect?: SiteSettingsWhereInput | boolean
    delete?: SiteSettingsWhereInput | boolean
    connect?: SiteSettingsWhereUniqueInput
    update?: XOR<XOR<SiteSettingsUpdateToOneWithWhereWithoutSchoolInput, SiteSettingsUpdateWithoutSchoolInput>, SiteSettingsUncheckedUpdateWithoutSchoolInput>
  }

  export type SchoolMembershipUpdateManyWithoutSchoolNestedInput = {
    create?: XOR<SchoolMembershipCreateWithoutSchoolInput, SchoolMembershipUncheckedCreateWithoutSchoolInput> | SchoolMembershipCreateWithoutSchoolInput[] | SchoolMembershipUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: SchoolMembershipCreateOrConnectWithoutSchoolInput | SchoolMembershipCreateOrConnectWithoutSchoolInput[]
    upsert?: SchoolMembershipUpsertWithWhereUniqueWithoutSchoolInput | SchoolMembershipUpsertWithWhereUniqueWithoutSchoolInput[]
    createMany?: SchoolMembershipCreateManySchoolInputEnvelope
    set?: SchoolMembershipWhereUniqueInput | SchoolMembershipWhereUniqueInput[]
    disconnect?: SchoolMembershipWhereUniqueInput | SchoolMembershipWhereUniqueInput[]
    delete?: SchoolMembershipWhereUniqueInput | SchoolMembershipWhereUniqueInput[]
    connect?: SchoolMembershipWhereUniqueInput | SchoolMembershipWhereUniqueInput[]
    update?: SchoolMembershipUpdateWithWhereUniqueWithoutSchoolInput | SchoolMembershipUpdateWithWhereUniqueWithoutSchoolInput[]
    updateMany?: SchoolMembershipUpdateManyWithWhereWithoutSchoolInput | SchoolMembershipUpdateManyWithWhereWithoutSchoolInput[]
    deleteMany?: SchoolMembershipScalarWhereInput | SchoolMembershipScalarWhereInput[]
  }

  export type SiteSettingsUncheckedUpdateOneWithoutSchoolNestedInput = {
    create?: XOR<SiteSettingsCreateWithoutSchoolInput, SiteSettingsUncheckedCreateWithoutSchoolInput>
    connectOrCreate?: SiteSettingsCreateOrConnectWithoutSchoolInput
    upsert?: SiteSettingsUpsertWithoutSchoolInput
    disconnect?: SiteSettingsWhereInput | boolean
    delete?: SiteSettingsWhereInput | boolean
    connect?: SiteSettingsWhereUniqueInput
    update?: XOR<XOR<SiteSettingsUpdateToOneWithWhereWithoutSchoolInput, SiteSettingsUpdateWithoutSchoolInput>, SiteSettingsUncheckedUpdateWithoutSchoolInput>
  }

  export type SchoolMembershipUncheckedUpdateManyWithoutSchoolNestedInput = {
    create?: XOR<SchoolMembershipCreateWithoutSchoolInput, SchoolMembershipUncheckedCreateWithoutSchoolInput> | SchoolMembershipCreateWithoutSchoolInput[] | SchoolMembershipUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: SchoolMembershipCreateOrConnectWithoutSchoolInput | SchoolMembershipCreateOrConnectWithoutSchoolInput[]
    upsert?: SchoolMembershipUpsertWithWhereUniqueWithoutSchoolInput | SchoolMembershipUpsertWithWhereUniqueWithoutSchoolInput[]
    createMany?: SchoolMembershipCreateManySchoolInputEnvelope
    set?: SchoolMembershipWhereUniqueInput | SchoolMembershipWhereUniqueInput[]
    disconnect?: SchoolMembershipWhereUniqueInput | SchoolMembershipWhereUniqueInput[]
    delete?: SchoolMembershipWhereUniqueInput | SchoolMembershipWhereUniqueInput[]
    connect?: SchoolMembershipWhereUniqueInput | SchoolMembershipWhereUniqueInput[]
    update?: SchoolMembershipUpdateWithWhereUniqueWithoutSchoolInput | SchoolMembershipUpdateWithWhereUniqueWithoutSchoolInput[]
    updateMany?: SchoolMembershipUpdateManyWithWhereWithoutSchoolInput | SchoolMembershipUpdateManyWithWhereWithoutSchoolInput[]
    deleteMany?: SchoolMembershipScalarWhereInput | SchoolMembershipScalarWhereInput[]
  }

  export type SchoolMembershipCreateNestedManyWithoutManagerInput = {
    create?: XOR<SchoolMembershipCreateWithoutManagerInput, SchoolMembershipUncheckedCreateWithoutManagerInput> | SchoolMembershipCreateWithoutManagerInput[] | SchoolMembershipUncheckedCreateWithoutManagerInput[]
    connectOrCreate?: SchoolMembershipCreateOrConnectWithoutManagerInput | SchoolMembershipCreateOrConnectWithoutManagerInput[]
    createMany?: SchoolMembershipCreateManyManagerInputEnvelope
    connect?: SchoolMembershipWhereUniqueInput | SchoolMembershipWhereUniqueInput[]
  }

  export type SchoolMembershipUncheckedCreateNestedManyWithoutManagerInput = {
    create?: XOR<SchoolMembershipCreateWithoutManagerInput, SchoolMembershipUncheckedCreateWithoutManagerInput> | SchoolMembershipCreateWithoutManagerInput[] | SchoolMembershipUncheckedCreateWithoutManagerInput[]
    connectOrCreate?: SchoolMembershipCreateOrConnectWithoutManagerInput | SchoolMembershipCreateOrConnectWithoutManagerInput[]
    createMany?: SchoolMembershipCreateManyManagerInputEnvelope
    connect?: SchoolMembershipWhereUniqueInput | SchoolMembershipWhereUniqueInput[]
  }

  export type SchoolMembershipUpdateManyWithoutManagerNestedInput = {
    create?: XOR<SchoolMembershipCreateWithoutManagerInput, SchoolMembershipUncheckedCreateWithoutManagerInput> | SchoolMembershipCreateWithoutManagerInput[] | SchoolMembershipUncheckedCreateWithoutManagerInput[]
    connectOrCreate?: SchoolMembershipCreateOrConnectWithoutManagerInput | SchoolMembershipCreateOrConnectWithoutManagerInput[]
    upsert?: SchoolMembershipUpsertWithWhereUniqueWithoutManagerInput | SchoolMembershipUpsertWithWhereUniqueWithoutManagerInput[]
    createMany?: SchoolMembershipCreateManyManagerInputEnvelope
    set?: SchoolMembershipWhereUniqueInput | SchoolMembershipWhereUniqueInput[]
    disconnect?: SchoolMembershipWhereUniqueInput | SchoolMembershipWhereUniqueInput[]
    delete?: SchoolMembershipWhereUniqueInput | SchoolMembershipWhereUniqueInput[]
    connect?: SchoolMembershipWhereUniqueInput | SchoolMembershipWhereUniqueInput[]
    update?: SchoolMembershipUpdateWithWhereUniqueWithoutManagerInput | SchoolMembershipUpdateWithWhereUniqueWithoutManagerInput[]
    updateMany?: SchoolMembershipUpdateManyWithWhereWithoutManagerInput | SchoolMembershipUpdateManyWithWhereWithoutManagerInput[]
    deleteMany?: SchoolMembershipScalarWhereInput | SchoolMembershipScalarWhereInput[]
  }

  export type SchoolMembershipUncheckedUpdateManyWithoutManagerNestedInput = {
    create?: XOR<SchoolMembershipCreateWithoutManagerInput, SchoolMembershipUncheckedCreateWithoutManagerInput> | SchoolMembershipCreateWithoutManagerInput[] | SchoolMembershipUncheckedCreateWithoutManagerInput[]
    connectOrCreate?: SchoolMembershipCreateOrConnectWithoutManagerInput | SchoolMembershipCreateOrConnectWithoutManagerInput[]
    upsert?: SchoolMembershipUpsertWithWhereUniqueWithoutManagerInput | SchoolMembershipUpsertWithWhereUniqueWithoutManagerInput[]
    createMany?: SchoolMembershipCreateManyManagerInputEnvelope
    set?: SchoolMembershipWhereUniqueInput | SchoolMembershipWhereUniqueInput[]
    disconnect?: SchoolMembershipWhereUniqueInput | SchoolMembershipWhereUniqueInput[]
    delete?: SchoolMembershipWhereUniqueInput | SchoolMembershipWhereUniqueInput[]
    connect?: SchoolMembershipWhereUniqueInput | SchoolMembershipWhereUniqueInput[]
    update?: SchoolMembershipUpdateWithWhereUniqueWithoutManagerInput | SchoolMembershipUpdateWithWhereUniqueWithoutManagerInput[]
    updateMany?: SchoolMembershipUpdateManyWithWhereWithoutManagerInput | SchoolMembershipUpdateManyWithWhereWithoutManagerInput[]
    deleteMany?: SchoolMembershipScalarWhereInput | SchoolMembershipScalarWhereInput[]
  }

  export type SchoolManagerCreateNestedOneWithoutSchoolsInput = {
    create?: XOR<SchoolManagerCreateWithoutSchoolsInput, SchoolManagerUncheckedCreateWithoutSchoolsInput>
    connectOrCreate?: SchoolManagerCreateOrConnectWithoutSchoolsInput
    connect?: SchoolManagerWhereUniqueInput
  }

  export type SchoolCreateNestedOneWithoutMembershipsInput = {
    create?: XOR<SchoolCreateWithoutMembershipsInput, SchoolUncheckedCreateWithoutMembershipsInput>
    connectOrCreate?: SchoolCreateOrConnectWithoutMembershipsInput
    connect?: SchoolWhereUniqueInput
  }

  export type SchoolManagerUpdateOneRequiredWithoutSchoolsNestedInput = {
    create?: XOR<SchoolManagerCreateWithoutSchoolsInput, SchoolManagerUncheckedCreateWithoutSchoolsInput>
    connectOrCreate?: SchoolManagerCreateOrConnectWithoutSchoolsInput
    upsert?: SchoolManagerUpsertWithoutSchoolsInput
    connect?: SchoolManagerWhereUniqueInput
    update?: XOR<XOR<SchoolManagerUpdateToOneWithWhereWithoutSchoolsInput, SchoolManagerUpdateWithoutSchoolsInput>, SchoolManagerUncheckedUpdateWithoutSchoolsInput>
  }

  export type SchoolUpdateOneRequiredWithoutMembershipsNestedInput = {
    create?: XOR<SchoolCreateWithoutMembershipsInput, SchoolUncheckedCreateWithoutMembershipsInput>
    connectOrCreate?: SchoolCreateOrConnectWithoutMembershipsInput
    upsert?: SchoolUpsertWithoutMembershipsInput
    connect?: SchoolWhereUniqueInput
    update?: XOR<XOR<SchoolUpdateToOneWithWhereWithoutMembershipsInput, SchoolUpdateWithoutMembershipsInput>, SchoolUncheckedUpdateWithoutMembershipsInput>
  }

  export type SchoolCreateNestedOneWithoutSettingsInput = {
    create?: XOR<SchoolCreateWithoutSettingsInput, SchoolUncheckedCreateWithoutSettingsInput>
    connectOrCreate?: SchoolCreateOrConnectWithoutSettingsInput
    connect?: SchoolWhereUniqueInput
  }

  export type SchoolUpdateOneRequiredWithoutSettingsNestedInput = {
    create?: XOR<SchoolCreateWithoutSettingsInput, SchoolUncheckedCreateWithoutSettingsInput>
    connectOrCreate?: SchoolCreateOrConnectWithoutSettingsInput
    upsert?: SchoolUpsertWithoutSettingsInput
    connect?: SchoolWhereUniqueInput
    update?: XOR<XOR<SchoolUpdateToOneWithWhereWithoutSettingsInput, SchoolUpdateWithoutSettingsInput>, SchoolUncheckedUpdateWithoutSettingsInput>
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

  export type NestedEnumPlanTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PlanType | EnumPlanTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PlanType[] | ListEnumPlanTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PlanType[] | ListEnumPlanTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPlanTypeFilter<$PrismaModel> | $Enums.PlanType
  }

  export type NestedEnumSubscriptionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionStatus | EnumSubscriptionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionStatusFilter<$PrismaModel> | $Enums.SubscriptionStatus
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

  export type NestedEnumPlanTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PlanType | EnumPlanTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PlanType[] | ListEnumPlanTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PlanType[] | ListEnumPlanTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPlanTypeWithAggregatesFilter<$PrismaModel> | $Enums.PlanType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPlanTypeFilter<$PrismaModel>
    _max?: NestedEnumPlanTypeFilter<$PrismaModel>
  }

  export type NestedEnumSubscriptionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionStatus | EnumSubscriptionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionStatusWithAggregatesFilter<$PrismaModel> | $Enums.SubscriptionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubscriptionStatusFilter<$PrismaModel>
    _max?: NestedEnumSubscriptionStatusFilter<$PrismaModel>
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

  export type SiteSettingsCreateWithoutSchoolInput = {
    id?: string
    primaryColor?: string | null
    secondaryColor?: string | null
    logo?: string | null
    favicon?: string | null
    email?: string | null
    phone?: string | null
    address?: string | null
    website?: string | null
    academicYearStart?: Date | string | null
    academicYearEnd?: Date | string | null
    timezone?: string | null
    dateFormat?: string | null
    timeFormat?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SiteSettingsUncheckedCreateWithoutSchoolInput = {
    id?: string
    primaryColor?: string | null
    secondaryColor?: string | null
    logo?: string | null
    favicon?: string | null
    email?: string | null
    phone?: string | null
    address?: string | null
    website?: string | null
    academicYearStart?: Date | string | null
    academicYearEnd?: Date | string | null
    timezone?: string | null
    dateFormat?: string | null
    timeFormat?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SiteSettingsCreateOrConnectWithoutSchoolInput = {
    where: SiteSettingsWhereUniqueInput
    create: XOR<SiteSettingsCreateWithoutSchoolInput, SiteSettingsUncheckedCreateWithoutSchoolInput>
  }

  export type SchoolMembershipCreateWithoutSchoolInput = {
    id?: string
    role?: string
    createdAt?: Date | string
    manager: SchoolManagerCreateNestedOneWithoutSchoolsInput
  }

  export type SchoolMembershipUncheckedCreateWithoutSchoolInput = {
    id?: string
    managerId: string
    role?: string
    createdAt?: Date | string
  }

  export type SchoolMembershipCreateOrConnectWithoutSchoolInput = {
    where: SchoolMembershipWhereUniqueInput
    create: XOR<SchoolMembershipCreateWithoutSchoolInput, SchoolMembershipUncheckedCreateWithoutSchoolInput>
  }

  export type SchoolMembershipCreateManySchoolInputEnvelope = {
    data: SchoolMembershipCreateManySchoolInput | SchoolMembershipCreateManySchoolInput[]
    skipDuplicates?: boolean
  }

  export type SiteSettingsUpsertWithoutSchoolInput = {
    update: XOR<SiteSettingsUpdateWithoutSchoolInput, SiteSettingsUncheckedUpdateWithoutSchoolInput>
    create: XOR<SiteSettingsCreateWithoutSchoolInput, SiteSettingsUncheckedCreateWithoutSchoolInput>
    where?: SiteSettingsWhereInput
  }

  export type SiteSettingsUpdateToOneWithWhereWithoutSchoolInput = {
    where?: SiteSettingsWhereInput
    data: XOR<SiteSettingsUpdateWithoutSchoolInput, SiteSettingsUncheckedUpdateWithoutSchoolInput>
  }

  export type SiteSettingsUpdateWithoutSchoolInput = {
    id?: StringFieldUpdateOperationsInput | string
    primaryColor?: NullableStringFieldUpdateOperationsInput | string | null
    secondaryColor?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    favicon?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    academicYearStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    academicYearEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    dateFormat?: NullableStringFieldUpdateOperationsInput | string | null
    timeFormat?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SiteSettingsUncheckedUpdateWithoutSchoolInput = {
    id?: StringFieldUpdateOperationsInput | string
    primaryColor?: NullableStringFieldUpdateOperationsInput | string | null
    secondaryColor?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    favicon?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    academicYearStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    academicYearEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    dateFormat?: NullableStringFieldUpdateOperationsInput | string | null
    timeFormat?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SchoolMembershipUpsertWithWhereUniqueWithoutSchoolInput = {
    where: SchoolMembershipWhereUniqueInput
    update: XOR<SchoolMembershipUpdateWithoutSchoolInput, SchoolMembershipUncheckedUpdateWithoutSchoolInput>
    create: XOR<SchoolMembershipCreateWithoutSchoolInput, SchoolMembershipUncheckedCreateWithoutSchoolInput>
  }

  export type SchoolMembershipUpdateWithWhereUniqueWithoutSchoolInput = {
    where: SchoolMembershipWhereUniqueInput
    data: XOR<SchoolMembershipUpdateWithoutSchoolInput, SchoolMembershipUncheckedUpdateWithoutSchoolInput>
  }

  export type SchoolMembershipUpdateManyWithWhereWithoutSchoolInput = {
    where: SchoolMembershipScalarWhereInput
    data: XOR<SchoolMembershipUpdateManyMutationInput, SchoolMembershipUncheckedUpdateManyWithoutSchoolInput>
  }

  export type SchoolMembershipScalarWhereInput = {
    AND?: SchoolMembershipScalarWhereInput | SchoolMembershipScalarWhereInput[]
    OR?: SchoolMembershipScalarWhereInput[]
    NOT?: SchoolMembershipScalarWhereInput | SchoolMembershipScalarWhereInput[]
    id?: StringFilter<"SchoolMembership"> | string
    managerId?: StringFilter<"SchoolMembership"> | string
    schoolId?: StringFilter<"SchoolMembership"> | string
    role?: StringFilter<"SchoolMembership"> | string
    createdAt?: DateTimeFilter<"SchoolMembership"> | Date | string
  }

  export type SchoolMembershipCreateWithoutManagerInput = {
    id?: string
    role?: string
    createdAt?: Date | string
    school: SchoolCreateNestedOneWithoutMembershipsInput
  }

  export type SchoolMembershipUncheckedCreateWithoutManagerInput = {
    id?: string
    schoolId: string
    role?: string
    createdAt?: Date | string
  }

  export type SchoolMembershipCreateOrConnectWithoutManagerInput = {
    where: SchoolMembershipWhereUniqueInput
    create: XOR<SchoolMembershipCreateWithoutManagerInput, SchoolMembershipUncheckedCreateWithoutManagerInput>
  }

  export type SchoolMembershipCreateManyManagerInputEnvelope = {
    data: SchoolMembershipCreateManyManagerInput | SchoolMembershipCreateManyManagerInput[]
    skipDuplicates?: boolean
  }

  export type SchoolMembershipUpsertWithWhereUniqueWithoutManagerInput = {
    where: SchoolMembershipWhereUniqueInput
    update: XOR<SchoolMembershipUpdateWithoutManagerInput, SchoolMembershipUncheckedUpdateWithoutManagerInput>
    create: XOR<SchoolMembershipCreateWithoutManagerInput, SchoolMembershipUncheckedCreateWithoutManagerInput>
  }

  export type SchoolMembershipUpdateWithWhereUniqueWithoutManagerInput = {
    where: SchoolMembershipWhereUniqueInput
    data: XOR<SchoolMembershipUpdateWithoutManagerInput, SchoolMembershipUncheckedUpdateWithoutManagerInput>
  }

  export type SchoolMembershipUpdateManyWithWhereWithoutManagerInput = {
    where: SchoolMembershipScalarWhereInput
    data: XOR<SchoolMembershipUpdateManyMutationInput, SchoolMembershipUncheckedUpdateManyWithoutManagerInput>
  }

  export type SchoolManagerCreateWithoutSchoolsInput = {
    id?: string
    email: string
    password: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SchoolManagerUncheckedCreateWithoutSchoolsInput = {
    id?: string
    email: string
    password: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SchoolManagerCreateOrConnectWithoutSchoolsInput = {
    where: SchoolManagerWhereUniqueInput
    create: XOR<SchoolManagerCreateWithoutSchoolsInput, SchoolManagerUncheckedCreateWithoutSchoolsInput>
  }

  export type SchoolCreateWithoutMembershipsInput = {
    id?: string
    name: string
    slug: string
    domain?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    plan?: $Enums.PlanType
    subscriptionStatus?: $Enums.SubscriptionStatus
    trialEndsAt: Date | string
    subscriptionEndsAt?: Date | string | null
    enabledServices?: string
    settings?: SiteSettingsCreateNestedOneWithoutSchoolInput
  }

  export type SchoolUncheckedCreateWithoutMembershipsInput = {
    id?: string
    name: string
    slug: string
    domain?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    plan?: $Enums.PlanType
    subscriptionStatus?: $Enums.SubscriptionStatus
    trialEndsAt: Date | string
    subscriptionEndsAt?: Date | string | null
    enabledServices?: string
    settings?: SiteSettingsUncheckedCreateNestedOneWithoutSchoolInput
  }

  export type SchoolCreateOrConnectWithoutMembershipsInput = {
    where: SchoolWhereUniqueInput
    create: XOR<SchoolCreateWithoutMembershipsInput, SchoolUncheckedCreateWithoutMembershipsInput>
  }

  export type SchoolManagerUpsertWithoutSchoolsInput = {
    update: XOR<SchoolManagerUpdateWithoutSchoolsInput, SchoolManagerUncheckedUpdateWithoutSchoolsInput>
    create: XOR<SchoolManagerCreateWithoutSchoolsInput, SchoolManagerUncheckedCreateWithoutSchoolsInput>
    where?: SchoolManagerWhereInput
  }

  export type SchoolManagerUpdateToOneWithWhereWithoutSchoolsInput = {
    where?: SchoolManagerWhereInput
    data: XOR<SchoolManagerUpdateWithoutSchoolsInput, SchoolManagerUncheckedUpdateWithoutSchoolsInput>
  }

  export type SchoolManagerUpdateWithoutSchoolsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SchoolManagerUncheckedUpdateWithoutSchoolsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SchoolUpsertWithoutMembershipsInput = {
    update: XOR<SchoolUpdateWithoutMembershipsInput, SchoolUncheckedUpdateWithoutMembershipsInput>
    create: XOR<SchoolCreateWithoutMembershipsInput, SchoolUncheckedCreateWithoutMembershipsInput>
    where?: SchoolWhereInput
  }

  export type SchoolUpdateToOneWithWhereWithoutMembershipsInput = {
    where?: SchoolWhereInput
    data: XOR<SchoolUpdateWithoutMembershipsInput, SchoolUncheckedUpdateWithoutMembershipsInput>
  }

  export type SchoolUpdateWithoutMembershipsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    domain?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plan?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    subscriptionStatus?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    trialEndsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscriptionEndsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    enabledServices?: StringFieldUpdateOperationsInput | string
    settings?: SiteSettingsUpdateOneWithoutSchoolNestedInput
  }

  export type SchoolUncheckedUpdateWithoutMembershipsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    domain?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plan?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    subscriptionStatus?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    trialEndsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscriptionEndsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    enabledServices?: StringFieldUpdateOperationsInput | string
    settings?: SiteSettingsUncheckedUpdateOneWithoutSchoolNestedInput
  }

  export type SchoolCreateWithoutSettingsInput = {
    id?: string
    name: string
    slug: string
    domain?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    plan?: $Enums.PlanType
    subscriptionStatus?: $Enums.SubscriptionStatus
    trialEndsAt: Date | string
    subscriptionEndsAt?: Date | string | null
    enabledServices?: string
    memberships?: SchoolMembershipCreateNestedManyWithoutSchoolInput
  }

  export type SchoolUncheckedCreateWithoutSettingsInput = {
    id?: string
    name: string
    slug: string
    domain?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    plan?: $Enums.PlanType
    subscriptionStatus?: $Enums.SubscriptionStatus
    trialEndsAt: Date | string
    subscriptionEndsAt?: Date | string | null
    enabledServices?: string
    memberships?: SchoolMembershipUncheckedCreateNestedManyWithoutSchoolInput
  }

  export type SchoolCreateOrConnectWithoutSettingsInput = {
    where: SchoolWhereUniqueInput
    create: XOR<SchoolCreateWithoutSettingsInput, SchoolUncheckedCreateWithoutSettingsInput>
  }

  export type SchoolUpsertWithoutSettingsInput = {
    update: XOR<SchoolUpdateWithoutSettingsInput, SchoolUncheckedUpdateWithoutSettingsInput>
    create: XOR<SchoolCreateWithoutSettingsInput, SchoolUncheckedCreateWithoutSettingsInput>
    where?: SchoolWhereInput
  }

  export type SchoolUpdateToOneWithWhereWithoutSettingsInput = {
    where?: SchoolWhereInput
    data: XOR<SchoolUpdateWithoutSettingsInput, SchoolUncheckedUpdateWithoutSettingsInput>
  }

  export type SchoolUpdateWithoutSettingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    domain?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plan?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    subscriptionStatus?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    trialEndsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscriptionEndsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    enabledServices?: StringFieldUpdateOperationsInput | string
    memberships?: SchoolMembershipUpdateManyWithoutSchoolNestedInput
  }

  export type SchoolUncheckedUpdateWithoutSettingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    domain?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plan?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    subscriptionStatus?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    trialEndsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscriptionEndsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    enabledServices?: StringFieldUpdateOperationsInput | string
    memberships?: SchoolMembershipUncheckedUpdateManyWithoutSchoolNestedInput
  }

  export type SchoolMembershipCreateManySchoolInput = {
    id?: string
    managerId: string
    role?: string
    createdAt?: Date | string
  }

  export type SchoolMembershipUpdateWithoutSchoolInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    manager?: SchoolManagerUpdateOneRequiredWithoutSchoolsNestedInput
  }

  export type SchoolMembershipUncheckedUpdateWithoutSchoolInput = {
    id?: StringFieldUpdateOperationsInput | string
    managerId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SchoolMembershipUncheckedUpdateManyWithoutSchoolInput = {
    id?: StringFieldUpdateOperationsInput | string
    managerId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SchoolMembershipCreateManyManagerInput = {
    id?: string
    schoolId: string
    role?: string
    createdAt?: Date | string
  }

  export type SchoolMembershipUpdateWithoutManagerInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    school?: SchoolUpdateOneRequiredWithoutMembershipsNestedInput
  }

  export type SchoolMembershipUncheckedUpdateWithoutManagerInput = {
    id?: StringFieldUpdateOperationsInput | string
    schoolId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SchoolMembershipUncheckedUpdateManyWithoutManagerInput = {
    id?: StringFieldUpdateOperationsInput | string
    schoolId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use SchoolCountOutputTypeDefaultArgs instead
     */
    export type SchoolCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SchoolCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SchoolManagerCountOutputTypeDefaultArgs instead
     */
    export type SchoolManagerCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SchoolManagerCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SchoolDefaultArgs instead
     */
    export type SchoolArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SchoolDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SchoolManagerDefaultArgs instead
     */
    export type SchoolManagerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SchoolManagerDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SchoolMembershipDefaultArgs instead
     */
    export type SchoolMembershipArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SchoolMembershipDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SiteSettingsDefaultArgs instead
     */
    export type SiteSettingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SiteSettingsDefaultArgs<ExtArgs>

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