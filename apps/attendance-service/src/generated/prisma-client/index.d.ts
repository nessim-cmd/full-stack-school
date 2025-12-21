
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
 * Model Attendance
 * 
 */
export type Attendance = $Result.DefaultSelection<Prisma.$AttendancePayload>
/**
 * Model AttendanceSummary
 * 
 */
export type AttendanceSummary = $Result.DefaultSelection<Prisma.$AttendanceSummaryPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Attendances
 * const attendances = await prisma.attendance.findMany()
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
   * // Fetch zero or more Attendances
   * const attendances = await prisma.attendance.findMany()
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
   * `prisma.attendance`: Exposes CRUD operations for the **Attendance** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Attendances
    * const attendances = await prisma.attendance.findMany()
    * ```
    */
  get attendance(): Prisma.AttendanceDelegate<ExtArgs>;

  /**
   * `prisma.attendanceSummary`: Exposes CRUD operations for the **AttendanceSummary** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AttendanceSummaries
    * const attendanceSummaries = await prisma.attendanceSummary.findMany()
    * ```
    */
  get attendanceSummary(): Prisma.AttendanceSummaryDelegate<ExtArgs>;
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
    Attendance: 'Attendance',
    AttendanceSummary: 'AttendanceSummary'
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
      modelProps: "attendance" | "attendanceSummary"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Attendance: {
        payload: Prisma.$AttendancePayload<ExtArgs>
        fields: Prisma.AttendanceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AttendanceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AttendanceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          findFirst: {
            args: Prisma.AttendanceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AttendanceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          findMany: {
            args: Prisma.AttendanceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>[]
          }
          create: {
            args: Prisma.AttendanceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          createMany: {
            args: Prisma.AttendanceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AttendanceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>[]
          }
          delete: {
            args: Prisma.AttendanceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          update: {
            args: Prisma.AttendanceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          deleteMany: {
            args: Prisma.AttendanceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AttendanceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AttendanceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          aggregate: {
            args: Prisma.AttendanceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAttendance>
          }
          groupBy: {
            args: Prisma.AttendanceGroupByArgs<ExtArgs>
            result: $Utils.Optional<AttendanceGroupByOutputType>[]
          }
          count: {
            args: Prisma.AttendanceCountArgs<ExtArgs>
            result: $Utils.Optional<AttendanceCountAggregateOutputType> | number
          }
        }
      }
      AttendanceSummary: {
        payload: Prisma.$AttendanceSummaryPayload<ExtArgs>
        fields: Prisma.AttendanceSummaryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AttendanceSummaryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceSummaryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AttendanceSummaryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceSummaryPayload>
          }
          findFirst: {
            args: Prisma.AttendanceSummaryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceSummaryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AttendanceSummaryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceSummaryPayload>
          }
          findMany: {
            args: Prisma.AttendanceSummaryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceSummaryPayload>[]
          }
          create: {
            args: Prisma.AttendanceSummaryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceSummaryPayload>
          }
          createMany: {
            args: Prisma.AttendanceSummaryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AttendanceSummaryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceSummaryPayload>[]
          }
          delete: {
            args: Prisma.AttendanceSummaryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceSummaryPayload>
          }
          update: {
            args: Prisma.AttendanceSummaryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceSummaryPayload>
          }
          deleteMany: {
            args: Prisma.AttendanceSummaryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AttendanceSummaryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AttendanceSummaryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceSummaryPayload>
          }
          aggregate: {
            args: Prisma.AttendanceSummaryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAttendanceSummary>
          }
          groupBy: {
            args: Prisma.AttendanceSummaryGroupByArgs<ExtArgs>
            result: $Utils.Optional<AttendanceSummaryGroupByOutputType>[]
          }
          count: {
            args: Prisma.AttendanceSummaryCountArgs<ExtArgs>
            result: $Utils.Optional<AttendanceSummaryCountAggregateOutputType> | number
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
   * Model Attendance
   */

  export type AggregateAttendance = {
    _count: AttendanceCountAggregateOutputType | null
    _avg: AttendanceAvgAggregateOutputType | null
    _sum: AttendanceSumAggregateOutputType | null
    _min: AttendanceMinAggregateOutputType | null
    _max: AttendanceMaxAggregateOutputType | null
  }

  export type AttendanceAvgAggregateOutputType = {
    id: number | null
    lessonId: number | null
  }

  export type AttendanceSumAggregateOutputType = {
    id: number | null
    lessonId: number | null
  }

  export type AttendanceMinAggregateOutputType = {
    id: number | null
    date: Date | null
    present: boolean | null
    studentId: string | null
    lessonId: number | null
    schoolId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AttendanceMaxAggregateOutputType = {
    id: number | null
    date: Date | null
    present: boolean | null
    studentId: string | null
    lessonId: number | null
    schoolId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AttendanceCountAggregateOutputType = {
    id: number
    date: number
    present: number
    studentId: number
    lessonId: number
    schoolId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AttendanceAvgAggregateInputType = {
    id?: true
    lessonId?: true
  }

  export type AttendanceSumAggregateInputType = {
    id?: true
    lessonId?: true
  }

  export type AttendanceMinAggregateInputType = {
    id?: true
    date?: true
    present?: true
    studentId?: true
    lessonId?: true
    schoolId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AttendanceMaxAggregateInputType = {
    id?: true
    date?: true
    present?: true
    studentId?: true
    lessonId?: true
    schoolId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AttendanceCountAggregateInputType = {
    id?: true
    date?: true
    present?: true
    studentId?: true
    lessonId?: true
    schoolId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AttendanceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attendance to aggregate.
     */
    where?: AttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendances to fetch.
     */
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Attendances
    **/
    _count?: true | AttendanceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AttendanceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AttendanceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AttendanceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AttendanceMaxAggregateInputType
  }

  export type GetAttendanceAggregateType<T extends AttendanceAggregateArgs> = {
        [P in keyof T & keyof AggregateAttendance]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAttendance[P]>
      : GetScalarType<T[P], AggregateAttendance[P]>
  }




  export type AttendanceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttendanceWhereInput
    orderBy?: AttendanceOrderByWithAggregationInput | AttendanceOrderByWithAggregationInput[]
    by: AttendanceScalarFieldEnum[] | AttendanceScalarFieldEnum
    having?: AttendanceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AttendanceCountAggregateInputType | true
    _avg?: AttendanceAvgAggregateInputType
    _sum?: AttendanceSumAggregateInputType
    _min?: AttendanceMinAggregateInputType
    _max?: AttendanceMaxAggregateInputType
  }

  export type AttendanceGroupByOutputType = {
    id: number
    date: Date
    present: boolean
    studentId: string
    lessonId: number
    schoolId: string
    createdAt: Date
    updatedAt: Date
    _count: AttendanceCountAggregateOutputType | null
    _avg: AttendanceAvgAggregateOutputType | null
    _sum: AttendanceSumAggregateOutputType | null
    _min: AttendanceMinAggregateOutputType | null
    _max: AttendanceMaxAggregateOutputType | null
  }

  type GetAttendanceGroupByPayload<T extends AttendanceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AttendanceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AttendanceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AttendanceGroupByOutputType[P]>
            : GetScalarType<T[P], AttendanceGroupByOutputType[P]>
        }
      >
    >


  export type AttendanceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    present?: boolean
    studentId?: boolean
    lessonId?: boolean
    schoolId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["attendance"]>

  export type AttendanceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    present?: boolean
    studentId?: boolean
    lessonId?: boolean
    schoolId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["attendance"]>

  export type AttendanceSelectScalar = {
    id?: boolean
    date?: boolean
    present?: boolean
    studentId?: boolean
    lessonId?: boolean
    schoolId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $AttendancePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Attendance"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      date: Date
      present: boolean
      studentId: string
      lessonId: number
      schoolId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["attendance"]>
    composites: {}
  }

  type AttendanceGetPayload<S extends boolean | null | undefined | AttendanceDefaultArgs> = $Result.GetResult<Prisma.$AttendancePayload, S>

  type AttendanceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AttendanceFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AttendanceCountAggregateInputType | true
    }

  export interface AttendanceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Attendance'], meta: { name: 'Attendance' } }
    /**
     * Find zero or one Attendance that matches the filter.
     * @param {AttendanceFindUniqueArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AttendanceFindUniqueArgs>(args: SelectSubset<T, AttendanceFindUniqueArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Attendance that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AttendanceFindUniqueOrThrowArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AttendanceFindUniqueOrThrowArgs>(args: SelectSubset<T, AttendanceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Attendance that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceFindFirstArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AttendanceFindFirstArgs>(args?: SelectSubset<T, AttendanceFindFirstArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Attendance that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceFindFirstOrThrowArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AttendanceFindFirstOrThrowArgs>(args?: SelectSubset<T, AttendanceFindFirstOrThrowArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Attendances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Attendances
     * const attendances = await prisma.attendance.findMany()
     * 
     * // Get first 10 Attendances
     * const attendances = await prisma.attendance.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const attendanceWithIdOnly = await prisma.attendance.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AttendanceFindManyArgs>(args?: SelectSubset<T, AttendanceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Attendance.
     * @param {AttendanceCreateArgs} args - Arguments to create a Attendance.
     * @example
     * // Create one Attendance
     * const Attendance = await prisma.attendance.create({
     *   data: {
     *     // ... data to create a Attendance
     *   }
     * })
     * 
     */
    create<T extends AttendanceCreateArgs>(args: SelectSubset<T, AttendanceCreateArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Attendances.
     * @param {AttendanceCreateManyArgs} args - Arguments to create many Attendances.
     * @example
     * // Create many Attendances
     * const attendance = await prisma.attendance.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AttendanceCreateManyArgs>(args?: SelectSubset<T, AttendanceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Attendances and returns the data saved in the database.
     * @param {AttendanceCreateManyAndReturnArgs} args - Arguments to create many Attendances.
     * @example
     * // Create many Attendances
     * const attendance = await prisma.attendance.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Attendances and only return the `id`
     * const attendanceWithIdOnly = await prisma.attendance.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AttendanceCreateManyAndReturnArgs>(args?: SelectSubset<T, AttendanceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Attendance.
     * @param {AttendanceDeleteArgs} args - Arguments to delete one Attendance.
     * @example
     * // Delete one Attendance
     * const Attendance = await prisma.attendance.delete({
     *   where: {
     *     // ... filter to delete one Attendance
     *   }
     * })
     * 
     */
    delete<T extends AttendanceDeleteArgs>(args: SelectSubset<T, AttendanceDeleteArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Attendance.
     * @param {AttendanceUpdateArgs} args - Arguments to update one Attendance.
     * @example
     * // Update one Attendance
     * const attendance = await prisma.attendance.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AttendanceUpdateArgs>(args: SelectSubset<T, AttendanceUpdateArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Attendances.
     * @param {AttendanceDeleteManyArgs} args - Arguments to filter Attendances to delete.
     * @example
     * // Delete a few Attendances
     * const { count } = await prisma.attendance.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AttendanceDeleteManyArgs>(args?: SelectSubset<T, AttendanceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Attendances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Attendances
     * const attendance = await prisma.attendance.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AttendanceUpdateManyArgs>(args: SelectSubset<T, AttendanceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Attendance.
     * @param {AttendanceUpsertArgs} args - Arguments to update or create a Attendance.
     * @example
     * // Update or create a Attendance
     * const attendance = await prisma.attendance.upsert({
     *   create: {
     *     // ... data to create a Attendance
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Attendance we want to update
     *   }
     * })
     */
    upsert<T extends AttendanceUpsertArgs>(args: SelectSubset<T, AttendanceUpsertArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Attendances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceCountArgs} args - Arguments to filter Attendances to count.
     * @example
     * // Count the number of Attendances
     * const count = await prisma.attendance.count({
     *   where: {
     *     // ... the filter for the Attendances we want to count
     *   }
     * })
    **/
    count<T extends AttendanceCountArgs>(
      args?: Subset<T, AttendanceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AttendanceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Attendance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AttendanceAggregateArgs>(args: Subset<T, AttendanceAggregateArgs>): Prisma.PrismaPromise<GetAttendanceAggregateType<T>>

    /**
     * Group by Attendance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceGroupByArgs} args - Group by arguments.
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
      T extends AttendanceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AttendanceGroupByArgs['orderBy'] }
        : { orderBy?: AttendanceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AttendanceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAttendanceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Attendance model
   */
  readonly fields: AttendanceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Attendance.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AttendanceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Attendance model
   */ 
  interface AttendanceFieldRefs {
    readonly id: FieldRef<"Attendance", 'Int'>
    readonly date: FieldRef<"Attendance", 'DateTime'>
    readonly present: FieldRef<"Attendance", 'Boolean'>
    readonly studentId: FieldRef<"Attendance", 'String'>
    readonly lessonId: FieldRef<"Attendance", 'Int'>
    readonly schoolId: FieldRef<"Attendance", 'String'>
    readonly createdAt: FieldRef<"Attendance", 'DateTime'>
    readonly updatedAt: FieldRef<"Attendance", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Attendance findUnique
   */
  export type AttendanceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Filter, which Attendance to fetch.
     */
    where: AttendanceWhereUniqueInput
  }

  /**
   * Attendance findUniqueOrThrow
   */
  export type AttendanceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Filter, which Attendance to fetch.
     */
    where: AttendanceWhereUniqueInput
  }

  /**
   * Attendance findFirst
   */
  export type AttendanceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Filter, which Attendance to fetch.
     */
    where?: AttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendances to fetch.
     */
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attendances.
     */
    cursor?: AttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attendances.
     */
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * Attendance findFirstOrThrow
   */
  export type AttendanceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Filter, which Attendance to fetch.
     */
    where?: AttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendances to fetch.
     */
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attendances.
     */
    cursor?: AttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attendances.
     */
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * Attendance findMany
   */
  export type AttendanceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Filter, which Attendances to fetch.
     */
    where?: AttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendances to fetch.
     */
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Attendances.
     */
    cursor?: AttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendances.
     */
    skip?: number
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * Attendance create
   */
  export type AttendanceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * The data needed to create a Attendance.
     */
    data: XOR<AttendanceCreateInput, AttendanceUncheckedCreateInput>
  }

  /**
   * Attendance createMany
   */
  export type AttendanceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Attendances.
     */
    data: AttendanceCreateManyInput | AttendanceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Attendance createManyAndReturn
   */
  export type AttendanceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Attendances.
     */
    data: AttendanceCreateManyInput | AttendanceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Attendance update
   */
  export type AttendanceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * The data needed to update a Attendance.
     */
    data: XOR<AttendanceUpdateInput, AttendanceUncheckedUpdateInput>
    /**
     * Choose, which Attendance to update.
     */
    where: AttendanceWhereUniqueInput
  }

  /**
   * Attendance updateMany
   */
  export type AttendanceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Attendances.
     */
    data: XOR<AttendanceUpdateManyMutationInput, AttendanceUncheckedUpdateManyInput>
    /**
     * Filter which Attendances to update
     */
    where?: AttendanceWhereInput
  }

  /**
   * Attendance upsert
   */
  export type AttendanceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * The filter to search for the Attendance to update in case it exists.
     */
    where: AttendanceWhereUniqueInput
    /**
     * In case the Attendance found by the `where` argument doesn't exist, create a new Attendance with this data.
     */
    create: XOR<AttendanceCreateInput, AttendanceUncheckedCreateInput>
    /**
     * In case the Attendance was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AttendanceUpdateInput, AttendanceUncheckedUpdateInput>
  }

  /**
   * Attendance delete
   */
  export type AttendanceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Filter which Attendance to delete.
     */
    where: AttendanceWhereUniqueInput
  }

  /**
   * Attendance deleteMany
   */
  export type AttendanceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attendances to delete
     */
    where?: AttendanceWhereInput
  }

  /**
   * Attendance without action
   */
  export type AttendanceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
  }


  /**
   * Model AttendanceSummary
   */

  export type AggregateAttendanceSummary = {
    _count: AttendanceSummaryCountAggregateOutputType | null
    _avg: AttendanceSummaryAvgAggregateOutputType | null
    _sum: AttendanceSummarySumAggregateOutputType | null
    _min: AttendanceSummaryMinAggregateOutputType | null
    _max: AttendanceSummaryMaxAggregateOutputType | null
  }

  export type AttendanceSummaryAvgAggregateOutputType = {
    id: number | null
    month: number | null
    year: number | null
    totalDays: number | null
    presentDays: number | null
    absentDays: number | null
    percentage: number | null
  }

  export type AttendanceSummarySumAggregateOutputType = {
    id: number | null
    month: number | null
    year: number | null
    totalDays: number | null
    presentDays: number | null
    absentDays: number | null
    percentage: number | null
  }

  export type AttendanceSummaryMinAggregateOutputType = {
    id: number | null
    studentId: string | null
    schoolId: string | null
    month: number | null
    year: number | null
    totalDays: number | null
    presentDays: number | null
    absentDays: number | null
    percentage: number | null
    updatedAt: Date | null
  }

  export type AttendanceSummaryMaxAggregateOutputType = {
    id: number | null
    studentId: string | null
    schoolId: string | null
    month: number | null
    year: number | null
    totalDays: number | null
    presentDays: number | null
    absentDays: number | null
    percentage: number | null
    updatedAt: Date | null
  }

  export type AttendanceSummaryCountAggregateOutputType = {
    id: number
    studentId: number
    schoolId: number
    month: number
    year: number
    totalDays: number
    presentDays: number
    absentDays: number
    percentage: number
    updatedAt: number
    _all: number
  }


  export type AttendanceSummaryAvgAggregateInputType = {
    id?: true
    month?: true
    year?: true
    totalDays?: true
    presentDays?: true
    absentDays?: true
    percentage?: true
  }

  export type AttendanceSummarySumAggregateInputType = {
    id?: true
    month?: true
    year?: true
    totalDays?: true
    presentDays?: true
    absentDays?: true
    percentage?: true
  }

  export type AttendanceSummaryMinAggregateInputType = {
    id?: true
    studentId?: true
    schoolId?: true
    month?: true
    year?: true
    totalDays?: true
    presentDays?: true
    absentDays?: true
    percentage?: true
    updatedAt?: true
  }

  export type AttendanceSummaryMaxAggregateInputType = {
    id?: true
    studentId?: true
    schoolId?: true
    month?: true
    year?: true
    totalDays?: true
    presentDays?: true
    absentDays?: true
    percentage?: true
    updatedAt?: true
  }

  export type AttendanceSummaryCountAggregateInputType = {
    id?: true
    studentId?: true
    schoolId?: true
    month?: true
    year?: true
    totalDays?: true
    presentDays?: true
    absentDays?: true
    percentage?: true
    updatedAt?: true
    _all?: true
  }

  export type AttendanceSummaryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AttendanceSummary to aggregate.
     */
    where?: AttendanceSummaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AttendanceSummaries to fetch.
     */
    orderBy?: AttendanceSummaryOrderByWithRelationInput | AttendanceSummaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AttendanceSummaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AttendanceSummaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AttendanceSummaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AttendanceSummaries
    **/
    _count?: true | AttendanceSummaryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AttendanceSummaryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AttendanceSummarySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AttendanceSummaryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AttendanceSummaryMaxAggregateInputType
  }

  export type GetAttendanceSummaryAggregateType<T extends AttendanceSummaryAggregateArgs> = {
        [P in keyof T & keyof AggregateAttendanceSummary]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAttendanceSummary[P]>
      : GetScalarType<T[P], AggregateAttendanceSummary[P]>
  }




  export type AttendanceSummaryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttendanceSummaryWhereInput
    orderBy?: AttendanceSummaryOrderByWithAggregationInput | AttendanceSummaryOrderByWithAggregationInput[]
    by: AttendanceSummaryScalarFieldEnum[] | AttendanceSummaryScalarFieldEnum
    having?: AttendanceSummaryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AttendanceSummaryCountAggregateInputType | true
    _avg?: AttendanceSummaryAvgAggregateInputType
    _sum?: AttendanceSummarySumAggregateInputType
    _min?: AttendanceSummaryMinAggregateInputType
    _max?: AttendanceSummaryMaxAggregateInputType
  }

  export type AttendanceSummaryGroupByOutputType = {
    id: number
    studentId: string
    schoolId: string
    month: number
    year: number
    totalDays: number
    presentDays: number
    absentDays: number
    percentage: number
    updatedAt: Date
    _count: AttendanceSummaryCountAggregateOutputType | null
    _avg: AttendanceSummaryAvgAggregateOutputType | null
    _sum: AttendanceSummarySumAggregateOutputType | null
    _min: AttendanceSummaryMinAggregateOutputType | null
    _max: AttendanceSummaryMaxAggregateOutputType | null
  }

  type GetAttendanceSummaryGroupByPayload<T extends AttendanceSummaryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AttendanceSummaryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AttendanceSummaryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AttendanceSummaryGroupByOutputType[P]>
            : GetScalarType<T[P], AttendanceSummaryGroupByOutputType[P]>
        }
      >
    >


  export type AttendanceSummarySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    schoolId?: boolean
    month?: boolean
    year?: boolean
    totalDays?: boolean
    presentDays?: boolean
    absentDays?: boolean
    percentage?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["attendanceSummary"]>

  export type AttendanceSummarySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    schoolId?: boolean
    month?: boolean
    year?: boolean
    totalDays?: boolean
    presentDays?: boolean
    absentDays?: boolean
    percentage?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["attendanceSummary"]>

  export type AttendanceSummarySelectScalar = {
    id?: boolean
    studentId?: boolean
    schoolId?: boolean
    month?: boolean
    year?: boolean
    totalDays?: boolean
    presentDays?: boolean
    absentDays?: boolean
    percentage?: boolean
    updatedAt?: boolean
  }


  export type $AttendanceSummaryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AttendanceSummary"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      studentId: string
      schoolId: string
      month: number
      year: number
      totalDays: number
      presentDays: number
      absentDays: number
      percentage: number
      updatedAt: Date
    }, ExtArgs["result"]["attendanceSummary"]>
    composites: {}
  }

  type AttendanceSummaryGetPayload<S extends boolean | null | undefined | AttendanceSummaryDefaultArgs> = $Result.GetResult<Prisma.$AttendanceSummaryPayload, S>

  type AttendanceSummaryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AttendanceSummaryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AttendanceSummaryCountAggregateInputType | true
    }

  export interface AttendanceSummaryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AttendanceSummary'], meta: { name: 'AttendanceSummary' } }
    /**
     * Find zero or one AttendanceSummary that matches the filter.
     * @param {AttendanceSummaryFindUniqueArgs} args - Arguments to find a AttendanceSummary
     * @example
     * // Get one AttendanceSummary
     * const attendanceSummary = await prisma.attendanceSummary.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AttendanceSummaryFindUniqueArgs>(args: SelectSubset<T, AttendanceSummaryFindUniqueArgs<ExtArgs>>): Prisma__AttendanceSummaryClient<$Result.GetResult<Prisma.$AttendanceSummaryPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one AttendanceSummary that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AttendanceSummaryFindUniqueOrThrowArgs} args - Arguments to find a AttendanceSummary
     * @example
     * // Get one AttendanceSummary
     * const attendanceSummary = await prisma.attendanceSummary.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AttendanceSummaryFindUniqueOrThrowArgs>(args: SelectSubset<T, AttendanceSummaryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AttendanceSummaryClient<$Result.GetResult<Prisma.$AttendanceSummaryPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first AttendanceSummary that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceSummaryFindFirstArgs} args - Arguments to find a AttendanceSummary
     * @example
     * // Get one AttendanceSummary
     * const attendanceSummary = await prisma.attendanceSummary.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AttendanceSummaryFindFirstArgs>(args?: SelectSubset<T, AttendanceSummaryFindFirstArgs<ExtArgs>>): Prisma__AttendanceSummaryClient<$Result.GetResult<Prisma.$AttendanceSummaryPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first AttendanceSummary that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceSummaryFindFirstOrThrowArgs} args - Arguments to find a AttendanceSummary
     * @example
     * // Get one AttendanceSummary
     * const attendanceSummary = await prisma.attendanceSummary.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AttendanceSummaryFindFirstOrThrowArgs>(args?: SelectSubset<T, AttendanceSummaryFindFirstOrThrowArgs<ExtArgs>>): Prisma__AttendanceSummaryClient<$Result.GetResult<Prisma.$AttendanceSummaryPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more AttendanceSummaries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceSummaryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AttendanceSummaries
     * const attendanceSummaries = await prisma.attendanceSummary.findMany()
     * 
     * // Get first 10 AttendanceSummaries
     * const attendanceSummaries = await prisma.attendanceSummary.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const attendanceSummaryWithIdOnly = await prisma.attendanceSummary.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AttendanceSummaryFindManyArgs>(args?: SelectSubset<T, AttendanceSummaryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendanceSummaryPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a AttendanceSummary.
     * @param {AttendanceSummaryCreateArgs} args - Arguments to create a AttendanceSummary.
     * @example
     * // Create one AttendanceSummary
     * const AttendanceSummary = await prisma.attendanceSummary.create({
     *   data: {
     *     // ... data to create a AttendanceSummary
     *   }
     * })
     * 
     */
    create<T extends AttendanceSummaryCreateArgs>(args: SelectSubset<T, AttendanceSummaryCreateArgs<ExtArgs>>): Prisma__AttendanceSummaryClient<$Result.GetResult<Prisma.$AttendanceSummaryPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many AttendanceSummaries.
     * @param {AttendanceSummaryCreateManyArgs} args - Arguments to create many AttendanceSummaries.
     * @example
     * // Create many AttendanceSummaries
     * const attendanceSummary = await prisma.attendanceSummary.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AttendanceSummaryCreateManyArgs>(args?: SelectSubset<T, AttendanceSummaryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AttendanceSummaries and returns the data saved in the database.
     * @param {AttendanceSummaryCreateManyAndReturnArgs} args - Arguments to create many AttendanceSummaries.
     * @example
     * // Create many AttendanceSummaries
     * const attendanceSummary = await prisma.attendanceSummary.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AttendanceSummaries and only return the `id`
     * const attendanceSummaryWithIdOnly = await prisma.attendanceSummary.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AttendanceSummaryCreateManyAndReturnArgs>(args?: SelectSubset<T, AttendanceSummaryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendanceSummaryPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a AttendanceSummary.
     * @param {AttendanceSummaryDeleteArgs} args - Arguments to delete one AttendanceSummary.
     * @example
     * // Delete one AttendanceSummary
     * const AttendanceSummary = await prisma.attendanceSummary.delete({
     *   where: {
     *     // ... filter to delete one AttendanceSummary
     *   }
     * })
     * 
     */
    delete<T extends AttendanceSummaryDeleteArgs>(args: SelectSubset<T, AttendanceSummaryDeleteArgs<ExtArgs>>): Prisma__AttendanceSummaryClient<$Result.GetResult<Prisma.$AttendanceSummaryPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one AttendanceSummary.
     * @param {AttendanceSummaryUpdateArgs} args - Arguments to update one AttendanceSummary.
     * @example
     * // Update one AttendanceSummary
     * const attendanceSummary = await prisma.attendanceSummary.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AttendanceSummaryUpdateArgs>(args: SelectSubset<T, AttendanceSummaryUpdateArgs<ExtArgs>>): Prisma__AttendanceSummaryClient<$Result.GetResult<Prisma.$AttendanceSummaryPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more AttendanceSummaries.
     * @param {AttendanceSummaryDeleteManyArgs} args - Arguments to filter AttendanceSummaries to delete.
     * @example
     * // Delete a few AttendanceSummaries
     * const { count } = await prisma.attendanceSummary.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AttendanceSummaryDeleteManyArgs>(args?: SelectSubset<T, AttendanceSummaryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AttendanceSummaries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceSummaryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AttendanceSummaries
     * const attendanceSummary = await prisma.attendanceSummary.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AttendanceSummaryUpdateManyArgs>(args: SelectSubset<T, AttendanceSummaryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AttendanceSummary.
     * @param {AttendanceSummaryUpsertArgs} args - Arguments to update or create a AttendanceSummary.
     * @example
     * // Update or create a AttendanceSummary
     * const attendanceSummary = await prisma.attendanceSummary.upsert({
     *   create: {
     *     // ... data to create a AttendanceSummary
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AttendanceSummary we want to update
     *   }
     * })
     */
    upsert<T extends AttendanceSummaryUpsertArgs>(args: SelectSubset<T, AttendanceSummaryUpsertArgs<ExtArgs>>): Prisma__AttendanceSummaryClient<$Result.GetResult<Prisma.$AttendanceSummaryPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of AttendanceSummaries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceSummaryCountArgs} args - Arguments to filter AttendanceSummaries to count.
     * @example
     * // Count the number of AttendanceSummaries
     * const count = await prisma.attendanceSummary.count({
     *   where: {
     *     // ... the filter for the AttendanceSummaries we want to count
     *   }
     * })
    **/
    count<T extends AttendanceSummaryCountArgs>(
      args?: Subset<T, AttendanceSummaryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AttendanceSummaryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AttendanceSummary.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceSummaryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AttendanceSummaryAggregateArgs>(args: Subset<T, AttendanceSummaryAggregateArgs>): Prisma.PrismaPromise<GetAttendanceSummaryAggregateType<T>>

    /**
     * Group by AttendanceSummary.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceSummaryGroupByArgs} args - Group by arguments.
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
      T extends AttendanceSummaryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AttendanceSummaryGroupByArgs['orderBy'] }
        : { orderBy?: AttendanceSummaryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AttendanceSummaryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAttendanceSummaryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AttendanceSummary model
   */
  readonly fields: AttendanceSummaryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AttendanceSummary.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AttendanceSummaryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the AttendanceSummary model
   */ 
  interface AttendanceSummaryFieldRefs {
    readonly id: FieldRef<"AttendanceSummary", 'Int'>
    readonly studentId: FieldRef<"AttendanceSummary", 'String'>
    readonly schoolId: FieldRef<"AttendanceSummary", 'String'>
    readonly month: FieldRef<"AttendanceSummary", 'Int'>
    readonly year: FieldRef<"AttendanceSummary", 'Int'>
    readonly totalDays: FieldRef<"AttendanceSummary", 'Int'>
    readonly presentDays: FieldRef<"AttendanceSummary", 'Int'>
    readonly absentDays: FieldRef<"AttendanceSummary", 'Int'>
    readonly percentage: FieldRef<"AttendanceSummary", 'Float'>
    readonly updatedAt: FieldRef<"AttendanceSummary", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AttendanceSummary findUnique
   */
  export type AttendanceSummaryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceSummary
     */
    select?: AttendanceSummarySelect<ExtArgs> | null
    /**
     * Filter, which AttendanceSummary to fetch.
     */
    where: AttendanceSummaryWhereUniqueInput
  }

  /**
   * AttendanceSummary findUniqueOrThrow
   */
  export type AttendanceSummaryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceSummary
     */
    select?: AttendanceSummarySelect<ExtArgs> | null
    /**
     * Filter, which AttendanceSummary to fetch.
     */
    where: AttendanceSummaryWhereUniqueInput
  }

  /**
   * AttendanceSummary findFirst
   */
  export type AttendanceSummaryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceSummary
     */
    select?: AttendanceSummarySelect<ExtArgs> | null
    /**
     * Filter, which AttendanceSummary to fetch.
     */
    where?: AttendanceSummaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AttendanceSummaries to fetch.
     */
    orderBy?: AttendanceSummaryOrderByWithRelationInput | AttendanceSummaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AttendanceSummaries.
     */
    cursor?: AttendanceSummaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AttendanceSummaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AttendanceSummaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AttendanceSummaries.
     */
    distinct?: AttendanceSummaryScalarFieldEnum | AttendanceSummaryScalarFieldEnum[]
  }

  /**
   * AttendanceSummary findFirstOrThrow
   */
  export type AttendanceSummaryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceSummary
     */
    select?: AttendanceSummarySelect<ExtArgs> | null
    /**
     * Filter, which AttendanceSummary to fetch.
     */
    where?: AttendanceSummaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AttendanceSummaries to fetch.
     */
    orderBy?: AttendanceSummaryOrderByWithRelationInput | AttendanceSummaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AttendanceSummaries.
     */
    cursor?: AttendanceSummaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AttendanceSummaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AttendanceSummaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AttendanceSummaries.
     */
    distinct?: AttendanceSummaryScalarFieldEnum | AttendanceSummaryScalarFieldEnum[]
  }

  /**
   * AttendanceSummary findMany
   */
  export type AttendanceSummaryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceSummary
     */
    select?: AttendanceSummarySelect<ExtArgs> | null
    /**
     * Filter, which AttendanceSummaries to fetch.
     */
    where?: AttendanceSummaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AttendanceSummaries to fetch.
     */
    orderBy?: AttendanceSummaryOrderByWithRelationInput | AttendanceSummaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AttendanceSummaries.
     */
    cursor?: AttendanceSummaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AttendanceSummaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AttendanceSummaries.
     */
    skip?: number
    distinct?: AttendanceSummaryScalarFieldEnum | AttendanceSummaryScalarFieldEnum[]
  }

  /**
   * AttendanceSummary create
   */
  export type AttendanceSummaryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceSummary
     */
    select?: AttendanceSummarySelect<ExtArgs> | null
    /**
     * The data needed to create a AttendanceSummary.
     */
    data: XOR<AttendanceSummaryCreateInput, AttendanceSummaryUncheckedCreateInput>
  }

  /**
   * AttendanceSummary createMany
   */
  export type AttendanceSummaryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AttendanceSummaries.
     */
    data: AttendanceSummaryCreateManyInput | AttendanceSummaryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AttendanceSummary createManyAndReturn
   */
  export type AttendanceSummaryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceSummary
     */
    select?: AttendanceSummarySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many AttendanceSummaries.
     */
    data: AttendanceSummaryCreateManyInput | AttendanceSummaryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AttendanceSummary update
   */
  export type AttendanceSummaryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceSummary
     */
    select?: AttendanceSummarySelect<ExtArgs> | null
    /**
     * The data needed to update a AttendanceSummary.
     */
    data: XOR<AttendanceSummaryUpdateInput, AttendanceSummaryUncheckedUpdateInput>
    /**
     * Choose, which AttendanceSummary to update.
     */
    where: AttendanceSummaryWhereUniqueInput
  }

  /**
   * AttendanceSummary updateMany
   */
  export type AttendanceSummaryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AttendanceSummaries.
     */
    data: XOR<AttendanceSummaryUpdateManyMutationInput, AttendanceSummaryUncheckedUpdateManyInput>
    /**
     * Filter which AttendanceSummaries to update
     */
    where?: AttendanceSummaryWhereInput
  }

  /**
   * AttendanceSummary upsert
   */
  export type AttendanceSummaryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceSummary
     */
    select?: AttendanceSummarySelect<ExtArgs> | null
    /**
     * The filter to search for the AttendanceSummary to update in case it exists.
     */
    where: AttendanceSummaryWhereUniqueInput
    /**
     * In case the AttendanceSummary found by the `where` argument doesn't exist, create a new AttendanceSummary with this data.
     */
    create: XOR<AttendanceSummaryCreateInput, AttendanceSummaryUncheckedCreateInput>
    /**
     * In case the AttendanceSummary was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AttendanceSummaryUpdateInput, AttendanceSummaryUncheckedUpdateInput>
  }

  /**
   * AttendanceSummary delete
   */
  export type AttendanceSummaryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceSummary
     */
    select?: AttendanceSummarySelect<ExtArgs> | null
    /**
     * Filter which AttendanceSummary to delete.
     */
    where: AttendanceSummaryWhereUniqueInput
  }

  /**
   * AttendanceSummary deleteMany
   */
  export type AttendanceSummaryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AttendanceSummaries to delete
     */
    where?: AttendanceSummaryWhereInput
  }

  /**
   * AttendanceSummary without action
   */
  export type AttendanceSummaryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceSummary
     */
    select?: AttendanceSummarySelect<ExtArgs> | null
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


  export const AttendanceScalarFieldEnum: {
    id: 'id',
    date: 'date',
    present: 'present',
    studentId: 'studentId',
    lessonId: 'lessonId',
    schoolId: 'schoolId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AttendanceScalarFieldEnum = (typeof AttendanceScalarFieldEnum)[keyof typeof AttendanceScalarFieldEnum]


  export const AttendanceSummaryScalarFieldEnum: {
    id: 'id',
    studentId: 'studentId',
    schoolId: 'schoolId',
    month: 'month',
    year: 'year',
    totalDays: 'totalDays',
    presentDays: 'presentDays',
    absentDays: 'absentDays',
    percentage: 'percentage',
    updatedAt: 'updatedAt'
  };

  export type AttendanceSummaryScalarFieldEnum = (typeof AttendanceSummaryScalarFieldEnum)[keyof typeof AttendanceSummaryScalarFieldEnum]


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


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


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


  export type AttendanceWhereInput = {
    AND?: AttendanceWhereInput | AttendanceWhereInput[]
    OR?: AttendanceWhereInput[]
    NOT?: AttendanceWhereInput | AttendanceWhereInput[]
    id?: IntFilter<"Attendance"> | number
    date?: DateTimeFilter<"Attendance"> | Date | string
    present?: BoolFilter<"Attendance"> | boolean
    studentId?: StringFilter<"Attendance"> | string
    lessonId?: IntFilter<"Attendance"> | number
    schoolId?: StringFilter<"Attendance"> | string
    createdAt?: DateTimeFilter<"Attendance"> | Date | string
    updatedAt?: DateTimeFilter<"Attendance"> | Date | string
  }

  export type AttendanceOrderByWithRelationInput = {
    id?: SortOrder
    date?: SortOrder
    present?: SortOrder
    studentId?: SortOrder
    lessonId?: SortOrder
    schoolId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AttendanceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    date_studentId_lessonId?: AttendanceDateStudentIdLessonIdCompoundUniqueInput
    AND?: AttendanceWhereInput | AttendanceWhereInput[]
    OR?: AttendanceWhereInput[]
    NOT?: AttendanceWhereInput | AttendanceWhereInput[]
    date?: DateTimeFilter<"Attendance"> | Date | string
    present?: BoolFilter<"Attendance"> | boolean
    studentId?: StringFilter<"Attendance"> | string
    lessonId?: IntFilter<"Attendance"> | number
    schoolId?: StringFilter<"Attendance"> | string
    createdAt?: DateTimeFilter<"Attendance"> | Date | string
    updatedAt?: DateTimeFilter<"Attendance"> | Date | string
  }, "id" | "date_studentId_lessonId">

  export type AttendanceOrderByWithAggregationInput = {
    id?: SortOrder
    date?: SortOrder
    present?: SortOrder
    studentId?: SortOrder
    lessonId?: SortOrder
    schoolId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AttendanceCountOrderByAggregateInput
    _avg?: AttendanceAvgOrderByAggregateInput
    _max?: AttendanceMaxOrderByAggregateInput
    _min?: AttendanceMinOrderByAggregateInput
    _sum?: AttendanceSumOrderByAggregateInput
  }

  export type AttendanceScalarWhereWithAggregatesInput = {
    AND?: AttendanceScalarWhereWithAggregatesInput | AttendanceScalarWhereWithAggregatesInput[]
    OR?: AttendanceScalarWhereWithAggregatesInput[]
    NOT?: AttendanceScalarWhereWithAggregatesInput | AttendanceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Attendance"> | number
    date?: DateTimeWithAggregatesFilter<"Attendance"> | Date | string
    present?: BoolWithAggregatesFilter<"Attendance"> | boolean
    studentId?: StringWithAggregatesFilter<"Attendance"> | string
    lessonId?: IntWithAggregatesFilter<"Attendance"> | number
    schoolId?: StringWithAggregatesFilter<"Attendance"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Attendance"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Attendance"> | Date | string
  }

  export type AttendanceSummaryWhereInput = {
    AND?: AttendanceSummaryWhereInput | AttendanceSummaryWhereInput[]
    OR?: AttendanceSummaryWhereInput[]
    NOT?: AttendanceSummaryWhereInput | AttendanceSummaryWhereInput[]
    id?: IntFilter<"AttendanceSummary"> | number
    studentId?: StringFilter<"AttendanceSummary"> | string
    schoolId?: StringFilter<"AttendanceSummary"> | string
    month?: IntFilter<"AttendanceSummary"> | number
    year?: IntFilter<"AttendanceSummary"> | number
    totalDays?: IntFilter<"AttendanceSummary"> | number
    presentDays?: IntFilter<"AttendanceSummary"> | number
    absentDays?: IntFilter<"AttendanceSummary"> | number
    percentage?: FloatFilter<"AttendanceSummary"> | number
    updatedAt?: DateTimeFilter<"AttendanceSummary"> | Date | string
  }

  export type AttendanceSummaryOrderByWithRelationInput = {
    id?: SortOrder
    studentId?: SortOrder
    schoolId?: SortOrder
    month?: SortOrder
    year?: SortOrder
    totalDays?: SortOrder
    presentDays?: SortOrder
    absentDays?: SortOrder
    percentage?: SortOrder
    updatedAt?: SortOrder
  }

  export type AttendanceSummaryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    studentId_month_year?: AttendanceSummaryStudentIdMonthYearCompoundUniqueInput
    AND?: AttendanceSummaryWhereInput | AttendanceSummaryWhereInput[]
    OR?: AttendanceSummaryWhereInput[]
    NOT?: AttendanceSummaryWhereInput | AttendanceSummaryWhereInput[]
    studentId?: StringFilter<"AttendanceSummary"> | string
    schoolId?: StringFilter<"AttendanceSummary"> | string
    month?: IntFilter<"AttendanceSummary"> | number
    year?: IntFilter<"AttendanceSummary"> | number
    totalDays?: IntFilter<"AttendanceSummary"> | number
    presentDays?: IntFilter<"AttendanceSummary"> | number
    absentDays?: IntFilter<"AttendanceSummary"> | number
    percentage?: FloatFilter<"AttendanceSummary"> | number
    updatedAt?: DateTimeFilter<"AttendanceSummary"> | Date | string
  }, "id" | "studentId_month_year">

  export type AttendanceSummaryOrderByWithAggregationInput = {
    id?: SortOrder
    studentId?: SortOrder
    schoolId?: SortOrder
    month?: SortOrder
    year?: SortOrder
    totalDays?: SortOrder
    presentDays?: SortOrder
    absentDays?: SortOrder
    percentage?: SortOrder
    updatedAt?: SortOrder
    _count?: AttendanceSummaryCountOrderByAggregateInput
    _avg?: AttendanceSummaryAvgOrderByAggregateInput
    _max?: AttendanceSummaryMaxOrderByAggregateInput
    _min?: AttendanceSummaryMinOrderByAggregateInput
    _sum?: AttendanceSummarySumOrderByAggregateInput
  }

  export type AttendanceSummaryScalarWhereWithAggregatesInput = {
    AND?: AttendanceSummaryScalarWhereWithAggregatesInput | AttendanceSummaryScalarWhereWithAggregatesInput[]
    OR?: AttendanceSummaryScalarWhereWithAggregatesInput[]
    NOT?: AttendanceSummaryScalarWhereWithAggregatesInput | AttendanceSummaryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AttendanceSummary"> | number
    studentId?: StringWithAggregatesFilter<"AttendanceSummary"> | string
    schoolId?: StringWithAggregatesFilter<"AttendanceSummary"> | string
    month?: IntWithAggregatesFilter<"AttendanceSummary"> | number
    year?: IntWithAggregatesFilter<"AttendanceSummary"> | number
    totalDays?: IntWithAggregatesFilter<"AttendanceSummary"> | number
    presentDays?: IntWithAggregatesFilter<"AttendanceSummary"> | number
    absentDays?: IntWithAggregatesFilter<"AttendanceSummary"> | number
    percentage?: FloatWithAggregatesFilter<"AttendanceSummary"> | number
    updatedAt?: DateTimeWithAggregatesFilter<"AttendanceSummary"> | Date | string
  }

  export type AttendanceCreateInput = {
    date: Date | string
    present: boolean
    studentId: string
    lessonId: number
    schoolId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AttendanceUncheckedCreateInput = {
    id?: number
    date: Date | string
    present: boolean
    studentId: string
    lessonId: number
    schoolId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AttendanceUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    present?: BoolFieldUpdateOperationsInput | boolean
    studentId?: StringFieldUpdateOperationsInput | string
    lessonId?: IntFieldUpdateOperationsInput | number
    schoolId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    present?: BoolFieldUpdateOperationsInput | boolean
    studentId?: StringFieldUpdateOperationsInput | string
    lessonId?: IntFieldUpdateOperationsInput | number
    schoolId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceCreateManyInput = {
    id?: number
    date: Date | string
    present: boolean
    studentId: string
    lessonId: number
    schoolId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AttendanceUpdateManyMutationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    present?: BoolFieldUpdateOperationsInput | boolean
    studentId?: StringFieldUpdateOperationsInput | string
    lessonId?: IntFieldUpdateOperationsInput | number
    schoolId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    present?: BoolFieldUpdateOperationsInput | boolean
    studentId?: StringFieldUpdateOperationsInput | string
    lessonId?: IntFieldUpdateOperationsInput | number
    schoolId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceSummaryCreateInput = {
    studentId: string
    schoolId: string
    month: number
    year: number
    totalDays?: number
    presentDays?: number
    absentDays?: number
    percentage?: number
    updatedAt?: Date | string
  }

  export type AttendanceSummaryUncheckedCreateInput = {
    id?: number
    studentId: string
    schoolId: string
    month: number
    year: number
    totalDays?: number
    presentDays?: number
    absentDays?: number
    percentage?: number
    updatedAt?: Date | string
  }

  export type AttendanceSummaryUpdateInput = {
    studentId?: StringFieldUpdateOperationsInput | string
    schoolId?: StringFieldUpdateOperationsInput | string
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    totalDays?: IntFieldUpdateOperationsInput | number
    presentDays?: IntFieldUpdateOperationsInput | number
    absentDays?: IntFieldUpdateOperationsInput | number
    percentage?: FloatFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceSummaryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: StringFieldUpdateOperationsInput | string
    schoolId?: StringFieldUpdateOperationsInput | string
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    totalDays?: IntFieldUpdateOperationsInput | number
    presentDays?: IntFieldUpdateOperationsInput | number
    absentDays?: IntFieldUpdateOperationsInput | number
    percentage?: FloatFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceSummaryCreateManyInput = {
    id?: number
    studentId: string
    schoolId: string
    month: number
    year: number
    totalDays?: number
    presentDays?: number
    absentDays?: number
    percentage?: number
    updatedAt?: Date | string
  }

  export type AttendanceSummaryUpdateManyMutationInput = {
    studentId?: StringFieldUpdateOperationsInput | string
    schoolId?: StringFieldUpdateOperationsInput | string
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    totalDays?: IntFieldUpdateOperationsInput | number
    presentDays?: IntFieldUpdateOperationsInput | number
    absentDays?: IntFieldUpdateOperationsInput | number
    percentage?: FloatFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceSummaryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: StringFieldUpdateOperationsInput | string
    schoolId?: StringFieldUpdateOperationsInput | string
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    totalDays?: IntFieldUpdateOperationsInput | number
    presentDays?: IntFieldUpdateOperationsInput | number
    absentDays?: IntFieldUpdateOperationsInput | number
    percentage?: FloatFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type AttendanceDateStudentIdLessonIdCompoundUniqueInput = {
    date: Date | string
    studentId: string
    lessonId: number
  }

  export type AttendanceCountOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    present?: SortOrder
    studentId?: SortOrder
    lessonId?: SortOrder
    schoolId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AttendanceAvgOrderByAggregateInput = {
    id?: SortOrder
    lessonId?: SortOrder
  }

  export type AttendanceMaxOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    present?: SortOrder
    studentId?: SortOrder
    lessonId?: SortOrder
    schoolId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AttendanceMinOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    present?: SortOrder
    studentId?: SortOrder
    lessonId?: SortOrder
    schoolId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AttendanceSumOrderByAggregateInput = {
    id?: SortOrder
    lessonId?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type AttendanceSummaryStudentIdMonthYearCompoundUniqueInput = {
    studentId: string
    month: number
    year: number
  }

  export type AttendanceSummaryCountOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    schoolId?: SortOrder
    month?: SortOrder
    year?: SortOrder
    totalDays?: SortOrder
    presentDays?: SortOrder
    absentDays?: SortOrder
    percentage?: SortOrder
    updatedAt?: SortOrder
  }

  export type AttendanceSummaryAvgOrderByAggregateInput = {
    id?: SortOrder
    month?: SortOrder
    year?: SortOrder
    totalDays?: SortOrder
    presentDays?: SortOrder
    absentDays?: SortOrder
    percentage?: SortOrder
  }

  export type AttendanceSummaryMaxOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    schoolId?: SortOrder
    month?: SortOrder
    year?: SortOrder
    totalDays?: SortOrder
    presentDays?: SortOrder
    absentDays?: SortOrder
    percentage?: SortOrder
    updatedAt?: SortOrder
  }

  export type AttendanceSummaryMinOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    schoolId?: SortOrder
    month?: SortOrder
    year?: SortOrder
    totalDays?: SortOrder
    presentDays?: SortOrder
    absentDays?: SortOrder
    percentage?: SortOrder
    updatedAt?: SortOrder
  }

  export type AttendanceSummarySumOrderByAggregateInput = {
    id?: SortOrder
    month?: SortOrder
    year?: SortOrder
    totalDays?: SortOrder
    presentDays?: SortOrder
    absentDays?: SortOrder
    percentage?: SortOrder
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

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use AttendanceDefaultArgs instead
     */
    export type AttendanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AttendanceDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AttendanceSummaryDefaultArgs instead
     */
    export type AttendanceSummaryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AttendanceSummaryDefaultArgs<ExtArgs>

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