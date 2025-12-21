
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
 * Model Resource
 * 
 */
export type Resource = $Result.DefaultSelection<Prisma.$ResourcePayload>
/**
 * Model LibraryBook
 * 
 */
export type LibraryBook = $Result.DefaultSelection<Prisma.$LibraryBookPayload>
/**
 * Model BookBorrowing
 * 
 */
export type BookBorrowing = $Result.DefaultSelection<Prisma.$BookBorrowingPayload>
/**
 * Model Equipment
 * 
 */
export type Equipment = $Result.DefaultSelection<Prisma.$EquipmentPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Resources
 * const resources = await prisma.resource.findMany()
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
   * // Fetch zero or more Resources
   * const resources = await prisma.resource.findMany()
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
   * `prisma.resource`: Exposes CRUD operations for the **Resource** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Resources
    * const resources = await prisma.resource.findMany()
    * ```
    */
  get resource(): Prisma.ResourceDelegate<ExtArgs>;

  /**
   * `prisma.libraryBook`: Exposes CRUD operations for the **LibraryBook** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LibraryBooks
    * const libraryBooks = await prisma.libraryBook.findMany()
    * ```
    */
  get libraryBook(): Prisma.LibraryBookDelegate<ExtArgs>;

  /**
   * `prisma.bookBorrowing`: Exposes CRUD operations for the **BookBorrowing** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BookBorrowings
    * const bookBorrowings = await prisma.bookBorrowing.findMany()
    * ```
    */
  get bookBorrowing(): Prisma.BookBorrowingDelegate<ExtArgs>;

  /**
   * `prisma.equipment`: Exposes CRUD operations for the **Equipment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Equipment
    * const equipment = await prisma.equipment.findMany()
    * ```
    */
  get equipment(): Prisma.EquipmentDelegate<ExtArgs>;
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
    Resource: 'Resource',
    LibraryBook: 'LibraryBook',
    BookBorrowing: 'BookBorrowing',
    Equipment: 'Equipment'
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
      modelProps: "resource" | "libraryBook" | "bookBorrowing" | "equipment"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Resource: {
        payload: Prisma.$ResourcePayload<ExtArgs>
        fields: Prisma.ResourceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ResourceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourcePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ResourceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourcePayload>
          }
          findFirst: {
            args: Prisma.ResourceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourcePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ResourceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourcePayload>
          }
          findMany: {
            args: Prisma.ResourceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourcePayload>[]
          }
          create: {
            args: Prisma.ResourceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourcePayload>
          }
          createMany: {
            args: Prisma.ResourceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ResourceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourcePayload>[]
          }
          delete: {
            args: Prisma.ResourceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourcePayload>
          }
          update: {
            args: Prisma.ResourceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourcePayload>
          }
          deleteMany: {
            args: Prisma.ResourceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ResourceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ResourceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourcePayload>
          }
          aggregate: {
            args: Prisma.ResourceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateResource>
          }
          groupBy: {
            args: Prisma.ResourceGroupByArgs<ExtArgs>
            result: $Utils.Optional<ResourceGroupByOutputType>[]
          }
          count: {
            args: Prisma.ResourceCountArgs<ExtArgs>
            result: $Utils.Optional<ResourceCountAggregateOutputType> | number
          }
        }
      }
      LibraryBook: {
        payload: Prisma.$LibraryBookPayload<ExtArgs>
        fields: Prisma.LibraryBookFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LibraryBookFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibraryBookPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LibraryBookFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibraryBookPayload>
          }
          findFirst: {
            args: Prisma.LibraryBookFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibraryBookPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LibraryBookFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibraryBookPayload>
          }
          findMany: {
            args: Prisma.LibraryBookFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibraryBookPayload>[]
          }
          create: {
            args: Prisma.LibraryBookCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibraryBookPayload>
          }
          createMany: {
            args: Prisma.LibraryBookCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LibraryBookCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibraryBookPayload>[]
          }
          delete: {
            args: Prisma.LibraryBookDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibraryBookPayload>
          }
          update: {
            args: Prisma.LibraryBookUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibraryBookPayload>
          }
          deleteMany: {
            args: Prisma.LibraryBookDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LibraryBookUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LibraryBookUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibraryBookPayload>
          }
          aggregate: {
            args: Prisma.LibraryBookAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLibraryBook>
          }
          groupBy: {
            args: Prisma.LibraryBookGroupByArgs<ExtArgs>
            result: $Utils.Optional<LibraryBookGroupByOutputType>[]
          }
          count: {
            args: Prisma.LibraryBookCountArgs<ExtArgs>
            result: $Utils.Optional<LibraryBookCountAggregateOutputType> | number
          }
        }
      }
      BookBorrowing: {
        payload: Prisma.$BookBorrowingPayload<ExtArgs>
        fields: Prisma.BookBorrowingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookBorrowingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookBorrowingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookBorrowingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookBorrowingPayload>
          }
          findFirst: {
            args: Prisma.BookBorrowingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookBorrowingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookBorrowingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookBorrowingPayload>
          }
          findMany: {
            args: Prisma.BookBorrowingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookBorrowingPayload>[]
          }
          create: {
            args: Prisma.BookBorrowingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookBorrowingPayload>
          }
          createMany: {
            args: Prisma.BookBorrowingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BookBorrowingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookBorrowingPayload>[]
          }
          delete: {
            args: Prisma.BookBorrowingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookBorrowingPayload>
          }
          update: {
            args: Prisma.BookBorrowingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookBorrowingPayload>
          }
          deleteMany: {
            args: Prisma.BookBorrowingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookBorrowingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BookBorrowingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookBorrowingPayload>
          }
          aggregate: {
            args: Prisma.BookBorrowingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBookBorrowing>
          }
          groupBy: {
            args: Prisma.BookBorrowingGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookBorrowingGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookBorrowingCountArgs<ExtArgs>
            result: $Utils.Optional<BookBorrowingCountAggregateOutputType> | number
          }
        }
      }
      Equipment: {
        payload: Prisma.$EquipmentPayload<ExtArgs>
        fields: Prisma.EquipmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EquipmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EquipmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPayload>
          }
          findFirst: {
            args: Prisma.EquipmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EquipmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPayload>
          }
          findMany: {
            args: Prisma.EquipmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPayload>[]
          }
          create: {
            args: Prisma.EquipmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPayload>
          }
          createMany: {
            args: Prisma.EquipmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EquipmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPayload>[]
          }
          delete: {
            args: Prisma.EquipmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPayload>
          }
          update: {
            args: Prisma.EquipmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPayload>
          }
          deleteMany: {
            args: Prisma.EquipmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EquipmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EquipmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPayload>
          }
          aggregate: {
            args: Prisma.EquipmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEquipment>
          }
          groupBy: {
            args: Prisma.EquipmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<EquipmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.EquipmentCountArgs<ExtArgs>
            result: $Utils.Optional<EquipmentCountAggregateOutputType> | number
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
   * Count Type LibraryBookCountOutputType
   */

  export type LibraryBookCountOutputType = {
    borrowings: number
  }

  export type LibraryBookCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    borrowings?: boolean | LibraryBookCountOutputTypeCountBorrowingsArgs
  }

  // Custom InputTypes
  /**
   * LibraryBookCountOutputType without action
   */
  export type LibraryBookCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LibraryBookCountOutputType
     */
    select?: LibraryBookCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LibraryBookCountOutputType without action
   */
  export type LibraryBookCountOutputTypeCountBorrowingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookBorrowingWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Resource
   */

  export type AggregateResource = {
    _count: ResourceCountAggregateOutputType | null
    _avg: ResourceAvgAggregateOutputType | null
    _sum: ResourceSumAggregateOutputType | null
    _min: ResourceMinAggregateOutputType | null
    _max: ResourceMaxAggregateOutputType | null
  }

  export type ResourceAvgAggregateOutputType = {
    id: number | null
    size: number | null
    subjectId: number | null
    gradeId: number | null
    classId: number | null
    downloads: number | null
  }

  export type ResourceSumAggregateOutputType = {
    id: number | null
    size: number | null
    subjectId: number | null
    gradeId: number | null
    classId: number | null
    downloads: number | null
  }

  export type ResourceMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    type: string | null
    url: string | null
    size: number | null
    mimeType: string | null
    category: string | null
    subjectId: number | null
    gradeId: number | null
    classId: number | null
    uploadedBy: string | null
    uploaderName: string | null
    schoolId: string | null
    isPublic: boolean | null
    downloads: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ResourceMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    type: string | null
    url: string | null
    size: number | null
    mimeType: string | null
    category: string | null
    subjectId: number | null
    gradeId: number | null
    classId: number | null
    uploadedBy: string | null
    uploaderName: string | null
    schoolId: string | null
    isPublic: boolean | null
    downloads: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ResourceCountAggregateOutputType = {
    id: number
    title: number
    description: number
    type: number
    url: number
    size: number
    mimeType: number
    category: number
    subjectId: number
    gradeId: number
    classId: number
    uploadedBy: number
    uploaderName: number
    schoolId: number
    isPublic: number
    downloads: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ResourceAvgAggregateInputType = {
    id?: true
    size?: true
    subjectId?: true
    gradeId?: true
    classId?: true
    downloads?: true
  }

  export type ResourceSumAggregateInputType = {
    id?: true
    size?: true
    subjectId?: true
    gradeId?: true
    classId?: true
    downloads?: true
  }

  export type ResourceMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    type?: true
    url?: true
    size?: true
    mimeType?: true
    category?: true
    subjectId?: true
    gradeId?: true
    classId?: true
    uploadedBy?: true
    uploaderName?: true
    schoolId?: true
    isPublic?: true
    downloads?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ResourceMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    type?: true
    url?: true
    size?: true
    mimeType?: true
    category?: true
    subjectId?: true
    gradeId?: true
    classId?: true
    uploadedBy?: true
    uploaderName?: true
    schoolId?: true
    isPublic?: true
    downloads?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ResourceCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    type?: true
    url?: true
    size?: true
    mimeType?: true
    category?: true
    subjectId?: true
    gradeId?: true
    classId?: true
    uploadedBy?: true
    uploaderName?: true
    schoolId?: true
    isPublic?: true
    downloads?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ResourceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Resource to aggregate.
     */
    where?: ResourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resources to fetch.
     */
    orderBy?: ResourceOrderByWithRelationInput | ResourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ResourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Resources
    **/
    _count?: true | ResourceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ResourceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ResourceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ResourceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ResourceMaxAggregateInputType
  }

  export type GetResourceAggregateType<T extends ResourceAggregateArgs> = {
        [P in keyof T & keyof AggregateResource]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateResource[P]>
      : GetScalarType<T[P], AggregateResource[P]>
  }




  export type ResourceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResourceWhereInput
    orderBy?: ResourceOrderByWithAggregationInput | ResourceOrderByWithAggregationInput[]
    by: ResourceScalarFieldEnum[] | ResourceScalarFieldEnum
    having?: ResourceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ResourceCountAggregateInputType | true
    _avg?: ResourceAvgAggregateInputType
    _sum?: ResourceSumAggregateInputType
    _min?: ResourceMinAggregateInputType
    _max?: ResourceMaxAggregateInputType
  }

  export type ResourceGroupByOutputType = {
    id: number
    title: string
    description: string | null
    type: string
    url: string
    size: number | null
    mimeType: string | null
    category: string
    subjectId: number | null
    gradeId: number | null
    classId: number | null
    uploadedBy: string
    uploaderName: string
    schoolId: string
    isPublic: boolean
    downloads: number
    createdAt: Date
    updatedAt: Date
    _count: ResourceCountAggregateOutputType | null
    _avg: ResourceAvgAggregateOutputType | null
    _sum: ResourceSumAggregateOutputType | null
    _min: ResourceMinAggregateOutputType | null
    _max: ResourceMaxAggregateOutputType | null
  }

  type GetResourceGroupByPayload<T extends ResourceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ResourceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ResourceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ResourceGroupByOutputType[P]>
            : GetScalarType<T[P], ResourceGroupByOutputType[P]>
        }
      >
    >


  export type ResourceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    type?: boolean
    url?: boolean
    size?: boolean
    mimeType?: boolean
    category?: boolean
    subjectId?: boolean
    gradeId?: boolean
    classId?: boolean
    uploadedBy?: boolean
    uploaderName?: boolean
    schoolId?: boolean
    isPublic?: boolean
    downloads?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["resource"]>

  export type ResourceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    type?: boolean
    url?: boolean
    size?: boolean
    mimeType?: boolean
    category?: boolean
    subjectId?: boolean
    gradeId?: boolean
    classId?: boolean
    uploadedBy?: boolean
    uploaderName?: boolean
    schoolId?: boolean
    isPublic?: boolean
    downloads?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["resource"]>

  export type ResourceSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    type?: boolean
    url?: boolean
    size?: boolean
    mimeType?: boolean
    category?: boolean
    subjectId?: boolean
    gradeId?: boolean
    classId?: boolean
    uploadedBy?: boolean
    uploaderName?: boolean
    schoolId?: boolean
    isPublic?: boolean
    downloads?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $ResourcePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Resource"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      description: string | null
      type: string
      url: string
      size: number | null
      mimeType: string | null
      category: string
      subjectId: number | null
      gradeId: number | null
      classId: number | null
      uploadedBy: string
      uploaderName: string
      schoolId: string
      isPublic: boolean
      downloads: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["resource"]>
    composites: {}
  }

  type ResourceGetPayload<S extends boolean | null | undefined | ResourceDefaultArgs> = $Result.GetResult<Prisma.$ResourcePayload, S>

  type ResourceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ResourceFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ResourceCountAggregateInputType | true
    }

  export interface ResourceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Resource'], meta: { name: 'Resource' } }
    /**
     * Find zero or one Resource that matches the filter.
     * @param {ResourceFindUniqueArgs} args - Arguments to find a Resource
     * @example
     * // Get one Resource
     * const resource = await prisma.resource.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ResourceFindUniqueArgs>(args: SelectSubset<T, ResourceFindUniqueArgs<ExtArgs>>): Prisma__ResourceClient<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Resource that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ResourceFindUniqueOrThrowArgs} args - Arguments to find a Resource
     * @example
     * // Get one Resource
     * const resource = await prisma.resource.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ResourceFindUniqueOrThrowArgs>(args: SelectSubset<T, ResourceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ResourceClient<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Resource that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceFindFirstArgs} args - Arguments to find a Resource
     * @example
     * // Get one Resource
     * const resource = await prisma.resource.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ResourceFindFirstArgs>(args?: SelectSubset<T, ResourceFindFirstArgs<ExtArgs>>): Prisma__ResourceClient<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Resource that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceFindFirstOrThrowArgs} args - Arguments to find a Resource
     * @example
     * // Get one Resource
     * const resource = await prisma.resource.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ResourceFindFirstOrThrowArgs>(args?: SelectSubset<T, ResourceFindFirstOrThrowArgs<ExtArgs>>): Prisma__ResourceClient<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Resources that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Resources
     * const resources = await prisma.resource.findMany()
     * 
     * // Get first 10 Resources
     * const resources = await prisma.resource.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const resourceWithIdOnly = await prisma.resource.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ResourceFindManyArgs>(args?: SelectSubset<T, ResourceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Resource.
     * @param {ResourceCreateArgs} args - Arguments to create a Resource.
     * @example
     * // Create one Resource
     * const Resource = await prisma.resource.create({
     *   data: {
     *     // ... data to create a Resource
     *   }
     * })
     * 
     */
    create<T extends ResourceCreateArgs>(args: SelectSubset<T, ResourceCreateArgs<ExtArgs>>): Prisma__ResourceClient<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Resources.
     * @param {ResourceCreateManyArgs} args - Arguments to create many Resources.
     * @example
     * // Create many Resources
     * const resource = await prisma.resource.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ResourceCreateManyArgs>(args?: SelectSubset<T, ResourceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Resources and returns the data saved in the database.
     * @param {ResourceCreateManyAndReturnArgs} args - Arguments to create many Resources.
     * @example
     * // Create many Resources
     * const resource = await prisma.resource.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Resources and only return the `id`
     * const resourceWithIdOnly = await prisma.resource.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ResourceCreateManyAndReturnArgs>(args?: SelectSubset<T, ResourceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Resource.
     * @param {ResourceDeleteArgs} args - Arguments to delete one Resource.
     * @example
     * // Delete one Resource
     * const Resource = await prisma.resource.delete({
     *   where: {
     *     // ... filter to delete one Resource
     *   }
     * })
     * 
     */
    delete<T extends ResourceDeleteArgs>(args: SelectSubset<T, ResourceDeleteArgs<ExtArgs>>): Prisma__ResourceClient<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Resource.
     * @param {ResourceUpdateArgs} args - Arguments to update one Resource.
     * @example
     * // Update one Resource
     * const resource = await prisma.resource.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ResourceUpdateArgs>(args: SelectSubset<T, ResourceUpdateArgs<ExtArgs>>): Prisma__ResourceClient<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Resources.
     * @param {ResourceDeleteManyArgs} args - Arguments to filter Resources to delete.
     * @example
     * // Delete a few Resources
     * const { count } = await prisma.resource.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ResourceDeleteManyArgs>(args?: SelectSubset<T, ResourceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Resources.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Resources
     * const resource = await prisma.resource.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ResourceUpdateManyArgs>(args: SelectSubset<T, ResourceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Resource.
     * @param {ResourceUpsertArgs} args - Arguments to update or create a Resource.
     * @example
     * // Update or create a Resource
     * const resource = await prisma.resource.upsert({
     *   create: {
     *     // ... data to create a Resource
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Resource we want to update
     *   }
     * })
     */
    upsert<T extends ResourceUpsertArgs>(args: SelectSubset<T, ResourceUpsertArgs<ExtArgs>>): Prisma__ResourceClient<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Resources.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceCountArgs} args - Arguments to filter Resources to count.
     * @example
     * // Count the number of Resources
     * const count = await prisma.resource.count({
     *   where: {
     *     // ... the filter for the Resources we want to count
     *   }
     * })
    **/
    count<T extends ResourceCountArgs>(
      args?: Subset<T, ResourceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ResourceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Resource.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ResourceAggregateArgs>(args: Subset<T, ResourceAggregateArgs>): Prisma.PrismaPromise<GetResourceAggregateType<T>>

    /**
     * Group by Resource.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceGroupByArgs} args - Group by arguments.
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
      T extends ResourceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ResourceGroupByArgs['orderBy'] }
        : { orderBy?: ResourceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ResourceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetResourceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Resource model
   */
  readonly fields: ResourceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Resource.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ResourceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Resource model
   */ 
  interface ResourceFieldRefs {
    readonly id: FieldRef<"Resource", 'Int'>
    readonly title: FieldRef<"Resource", 'String'>
    readonly description: FieldRef<"Resource", 'String'>
    readonly type: FieldRef<"Resource", 'String'>
    readonly url: FieldRef<"Resource", 'String'>
    readonly size: FieldRef<"Resource", 'Int'>
    readonly mimeType: FieldRef<"Resource", 'String'>
    readonly category: FieldRef<"Resource", 'String'>
    readonly subjectId: FieldRef<"Resource", 'Int'>
    readonly gradeId: FieldRef<"Resource", 'Int'>
    readonly classId: FieldRef<"Resource", 'Int'>
    readonly uploadedBy: FieldRef<"Resource", 'String'>
    readonly uploaderName: FieldRef<"Resource", 'String'>
    readonly schoolId: FieldRef<"Resource", 'String'>
    readonly isPublic: FieldRef<"Resource", 'Boolean'>
    readonly downloads: FieldRef<"Resource", 'Int'>
    readonly createdAt: FieldRef<"Resource", 'DateTime'>
    readonly updatedAt: FieldRef<"Resource", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Resource findUnique
   */
  export type ResourceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelect<ExtArgs> | null
    /**
     * Filter, which Resource to fetch.
     */
    where: ResourceWhereUniqueInput
  }

  /**
   * Resource findUniqueOrThrow
   */
  export type ResourceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelect<ExtArgs> | null
    /**
     * Filter, which Resource to fetch.
     */
    where: ResourceWhereUniqueInput
  }

  /**
   * Resource findFirst
   */
  export type ResourceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelect<ExtArgs> | null
    /**
     * Filter, which Resource to fetch.
     */
    where?: ResourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resources to fetch.
     */
    orderBy?: ResourceOrderByWithRelationInput | ResourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Resources.
     */
    cursor?: ResourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Resources.
     */
    distinct?: ResourceScalarFieldEnum | ResourceScalarFieldEnum[]
  }

  /**
   * Resource findFirstOrThrow
   */
  export type ResourceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelect<ExtArgs> | null
    /**
     * Filter, which Resource to fetch.
     */
    where?: ResourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resources to fetch.
     */
    orderBy?: ResourceOrderByWithRelationInput | ResourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Resources.
     */
    cursor?: ResourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Resources.
     */
    distinct?: ResourceScalarFieldEnum | ResourceScalarFieldEnum[]
  }

  /**
   * Resource findMany
   */
  export type ResourceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelect<ExtArgs> | null
    /**
     * Filter, which Resources to fetch.
     */
    where?: ResourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resources to fetch.
     */
    orderBy?: ResourceOrderByWithRelationInput | ResourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Resources.
     */
    cursor?: ResourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resources.
     */
    skip?: number
    distinct?: ResourceScalarFieldEnum | ResourceScalarFieldEnum[]
  }

  /**
   * Resource create
   */
  export type ResourceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelect<ExtArgs> | null
    /**
     * The data needed to create a Resource.
     */
    data: XOR<ResourceCreateInput, ResourceUncheckedCreateInput>
  }

  /**
   * Resource createMany
   */
  export type ResourceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Resources.
     */
    data: ResourceCreateManyInput | ResourceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Resource createManyAndReturn
   */
  export type ResourceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Resources.
     */
    data: ResourceCreateManyInput | ResourceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Resource update
   */
  export type ResourceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelect<ExtArgs> | null
    /**
     * The data needed to update a Resource.
     */
    data: XOR<ResourceUpdateInput, ResourceUncheckedUpdateInput>
    /**
     * Choose, which Resource to update.
     */
    where: ResourceWhereUniqueInput
  }

  /**
   * Resource updateMany
   */
  export type ResourceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Resources.
     */
    data: XOR<ResourceUpdateManyMutationInput, ResourceUncheckedUpdateManyInput>
    /**
     * Filter which Resources to update
     */
    where?: ResourceWhereInput
  }

  /**
   * Resource upsert
   */
  export type ResourceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelect<ExtArgs> | null
    /**
     * The filter to search for the Resource to update in case it exists.
     */
    where: ResourceWhereUniqueInput
    /**
     * In case the Resource found by the `where` argument doesn't exist, create a new Resource with this data.
     */
    create: XOR<ResourceCreateInput, ResourceUncheckedCreateInput>
    /**
     * In case the Resource was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ResourceUpdateInput, ResourceUncheckedUpdateInput>
  }

  /**
   * Resource delete
   */
  export type ResourceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelect<ExtArgs> | null
    /**
     * Filter which Resource to delete.
     */
    where: ResourceWhereUniqueInput
  }

  /**
   * Resource deleteMany
   */
  export type ResourceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Resources to delete
     */
    where?: ResourceWhereInput
  }

  /**
   * Resource without action
   */
  export type ResourceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelect<ExtArgs> | null
  }


  /**
   * Model LibraryBook
   */

  export type AggregateLibraryBook = {
    _count: LibraryBookCountAggregateOutputType | null
    _avg: LibraryBookAvgAggregateOutputType | null
    _sum: LibraryBookSumAggregateOutputType | null
    _min: LibraryBookMinAggregateOutputType | null
    _max: LibraryBookMaxAggregateOutputType | null
  }

  export type LibraryBookAvgAggregateOutputType = {
    id: number | null
    publishYear: number | null
    totalCopies: number | null
    availableCopies: number | null
  }

  export type LibraryBookSumAggregateOutputType = {
    id: number | null
    publishYear: number | null
    totalCopies: number | null
    availableCopies: number | null
  }

  export type LibraryBookMinAggregateOutputType = {
    id: number | null
    title: string | null
    author: string | null
    isbn: string | null
    publisher: string | null
    publishYear: number | null
    category: string | null
    description: string | null
    coverImage: string | null
    totalCopies: number | null
    availableCopies: number | null
    location: string | null
    schoolId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LibraryBookMaxAggregateOutputType = {
    id: number | null
    title: string | null
    author: string | null
    isbn: string | null
    publisher: string | null
    publishYear: number | null
    category: string | null
    description: string | null
    coverImage: string | null
    totalCopies: number | null
    availableCopies: number | null
    location: string | null
    schoolId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LibraryBookCountAggregateOutputType = {
    id: number
    title: number
    author: number
    isbn: number
    publisher: number
    publishYear: number
    category: number
    description: number
    coverImage: number
    totalCopies: number
    availableCopies: number
    location: number
    schoolId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LibraryBookAvgAggregateInputType = {
    id?: true
    publishYear?: true
    totalCopies?: true
    availableCopies?: true
  }

  export type LibraryBookSumAggregateInputType = {
    id?: true
    publishYear?: true
    totalCopies?: true
    availableCopies?: true
  }

  export type LibraryBookMinAggregateInputType = {
    id?: true
    title?: true
    author?: true
    isbn?: true
    publisher?: true
    publishYear?: true
    category?: true
    description?: true
    coverImage?: true
    totalCopies?: true
    availableCopies?: true
    location?: true
    schoolId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LibraryBookMaxAggregateInputType = {
    id?: true
    title?: true
    author?: true
    isbn?: true
    publisher?: true
    publishYear?: true
    category?: true
    description?: true
    coverImage?: true
    totalCopies?: true
    availableCopies?: true
    location?: true
    schoolId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LibraryBookCountAggregateInputType = {
    id?: true
    title?: true
    author?: true
    isbn?: true
    publisher?: true
    publishYear?: true
    category?: true
    description?: true
    coverImage?: true
    totalCopies?: true
    availableCopies?: true
    location?: true
    schoolId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LibraryBookAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LibraryBook to aggregate.
     */
    where?: LibraryBookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LibraryBooks to fetch.
     */
    orderBy?: LibraryBookOrderByWithRelationInput | LibraryBookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LibraryBookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LibraryBooks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LibraryBooks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LibraryBooks
    **/
    _count?: true | LibraryBookCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LibraryBookAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LibraryBookSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LibraryBookMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LibraryBookMaxAggregateInputType
  }

  export type GetLibraryBookAggregateType<T extends LibraryBookAggregateArgs> = {
        [P in keyof T & keyof AggregateLibraryBook]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLibraryBook[P]>
      : GetScalarType<T[P], AggregateLibraryBook[P]>
  }




  export type LibraryBookGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LibraryBookWhereInput
    orderBy?: LibraryBookOrderByWithAggregationInput | LibraryBookOrderByWithAggregationInput[]
    by: LibraryBookScalarFieldEnum[] | LibraryBookScalarFieldEnum
    having?: LibraryBookScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LibraryBookCountAggregateInputType | true
    _avg?: LibraryBookAvgAggregateInputType
    _sum?: LibraryBookSumAggregateInputType
    _min?: LibraryBookMinAggregateInputType
    _max?: LibraryBookMaxAggregateInputType
  }

  export type LibraryBookGroupByOutputType = {
    id: number
    title: string
    author: string
    isbn: string | null
    publisher: string | null
    publishYear: number | null
    category: string
    description: string | null
    coverImage: string | null
    totalCopies: number
    availableCopies: number
    location: string | null
    schoolId: string
    createdAt: Date
    updatedAt: Date
    _count: LibraryBookCountAggregateOutputType | null
    _avg: LibraryBookAvgAggregateOutputType | null
    _sum: LibraryBookSumAggregateOutputType | null
    _min: LibraryBookMinAggregateOutputType | null
    _max: LibraryBookMaxAggregateOutputType | null
  }

  type GetLibraryBookGroupByPayload<T extends LibraryBookGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LibraryBookGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LibraryBookGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LibraryBookGroupByOutputType[P]>
            : GetScalarType<T[P], LibraryBookGroupByOutputType[P]>
        }
      >
    >


  export type LibraryBookSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    author?: boolean
    isbn?: boolean
    publisher?: boolean
    publishYear?: boolean
    category?: boolean
    description?: boolean
    coverImage?: boolean
    totalCopies?: boolean
    availableCopies?: boolean
    location?: boolean
    schoolId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    borrowings?: boolean | LibraryBook$borrowingsArgs<ExtArgs>
    _count?: boolean | LibraryBookCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["libraryBook"]>

  export type LibraryBookSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    author?: boolean
    isbn?: boolean
    publisher?: boolean
    publishYear?: boolean
    category?: boolean
    description?: boolean
    coverImage?: boolean
    totalCopies?: boolean
    availableCopies?: boolean
    location?: boolean
    schoolId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["libraryBook"]>

  export type LibraryBookSelectScalar = {
    id?: boolean
    title?: boolean
    author?: boolean
    isbn?: boolean
    publisher?: boolean
    publishYear?: boolean
    category?: boolean
    description?: boolean
    coverImage?: boolean
    totalCopies?: boolean
    availableCopies?: boolean
    location?: boolean
    schoolId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type LibraryBookInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    borrowings?: boolean | LibraryBook$borrowingsArgs<ExtArgs>
    _count?: boolean | LibraryBookCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LibraryBookIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $LibraryBookPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LibraryBook"
    objects: {
      borrowings: Prisma.$BookBorrowingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      author: string
      isbn: string | null
      publisher: string | null
      publishYear: number | null
      category: string
      description: string | null
      coverImage: string | null
      totalCopies: number
      availableCopies: number
      location: string | null
      schoolId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["libraryBook"]>
    composites: {}
  }

  type LibraryBookGetPayload<S extends boolean | null | undefined | LibraryBookDefaultArgs> = $Result.GetResult<Prisma.$LibraryBookPayload, S>

  type LibraryBookCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<LibraryBookFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: LibraryBookCountAggregateInputType | true
    }

  export interface LibraryBookDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LibraryBook'], meta: { name: 'LibraryBook' } }
    /**
     * Find zero or one LibraryBook that matches the filter.
     * @param {LibraryBookFindUniqueArgs} args - Arguments to find a LibraryBook
     * @example
     * // Get one LibraryBook
     * const libraryBook = await prisma.libraryBook.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LibraryBookFindUniqueArgs>(args: SelectSubset<T, LibraryBookFindUniqueArgs<ExtArgs>>): Prisma__LibraryBookClient<$Result.GetResult<Prisma.$LibraryBookPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one LibraryBook that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {LibraryBookFindUniqueOrThrowArgs} args - Arguments to find a LibraryBook
     * @example
     * // Get one LibraryBook
     * const libraryBook = await prisma.libraryBook.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LibraryBookFindUniqueOrThrowArgs>(args: SelectSubset<T, LibraryBookFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LibraryBookClient<$Result.GetResult<Prisma.$LibraryBookPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first LibraryBook that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LibraryBookFindFirstArgs} args - Arguments to find a LibraryBook
     * @example
     * // Get one LibraryBook
     * const libraryBook = await prisma.libraryBook.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LibraryBookFindFirstArgs>(args?: SelectSubset<T, LibraryBookFindFirstArgs<ExtArgs>>): Prisma__LibraryBookClient<$Result.GetResult<Prisma.$LibraryBookPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first LibraryBook that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LibraryBookFindFirstOrThrowArgs} args - Arguments to find a LibraryBook
     * @example
     * // Get one LibraryBook
     * const libraryBook = await prisma.libraryBook.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LibraryBookFindFirstOrThrowArgs>(args?: SelectSubset<T, LibraryBookFindFirstOrThrowArgs<ExtArgs>>): Prisma__LibraryBookClient<$Result.GetResult<Prisma.$LibraryBookPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more LibraryBooks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LibraryBookFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LibraryBooks
     * const libraryBooks = await prisma.libraryBook.findMany()
     * 
     * // Get first 10 LibraryBooks
     * const libraryBooks = await prisma.libraryBook.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const libraryBookWithIdOnly = await prisma.libraryBook.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LibraryBookFindManyArgs>(args?: SelectSubset<T, LibraryBookFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LibraryBookPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a LibraryBook.
     * @param {LibraryBookCreateArgs} args - Arguments to create a LibraryBook.
     * @example
     * // Create one LibraryBook
     * const LibraryBook = await prisma.libraryBook.create({
     *   data: {
     *     // ... data to create a LibraryBook
     *   }
     * })
     * 
     */
    create<T extends LibraryBookCreateArgs>(args: SelectSubset<T, LibraryBookCreateArgs<ExtArgs>>): Prisma__LibraryBookClient<$Result.GetResult<Prisma.$LibraryBookPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many LibraryBooks.
     * @param {LibraryBookCreateManyArgs} args - Arguments to create many LibraryBooks.
     * @example
     * // Create many LibraryBooks
     * const libraryBook = await prisma.libraryBook.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LibraryBookCreateManyArgs>(args?: SelectSubset<T, LibraryBookCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LibraryBooks and returns the data saved in the database.
     * @param {LibraryBookCreateManyAndReturnArgs} args - Arguments to create many LibraryBooks.
     * @example
     * // Create many LibraryBooks
     * const libraryBook = await prisma.libraryBook.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LibraryBooks and only return the `id`
     * const libraryBookWithIdOnly = await prisma.libraryBook.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LibraryBookCreateManyAndReturnArgs>(args?: SelectSubset<T, LibraryBookCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LibraryBookPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a LibraryBook.
     * @param {LibraryBookDeleteArgs} args - Arguments to delete one LibraryBook.
     * @example
     * // Delete one LibraryBook
     * const LibraryBook = await prisma.libraryBook.delete({
     *   where: {
     *     // ... filter to delete one LibraryBook
     *   }
     * })
     * 
     */
    delete<T extends LibraryBookDeleteArgs>(args: SelectSubset<T, LibraryBookDeleteArgs<ExtArgs>>): Prisma__LibraryBookClient<$Result.GetResult<Prisma.$LibraryBookPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one LibraryBook.
     * @param {LibraryBookUpdateArgs} args - Arguments to update one LibraryBook.
     * @example
     * // Update one LibraryBook
     * const libraryBook = await prisma.libraryBook.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LibraryBookUpdateArgs>(args: SelectSubset<T, LibraryBookUpdateArgs<ExtArgs>>): Prisma__LibraryBookClient<$Result.GetResult<Prisma.$LibraryBookPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more LibraryBooks.
     * @param {LibraryBookDeleteManyArgs} args - Arguments to filter LibraryBooks to delete.
     * @example
     * // Delete a few LibraryBooks
     * const { count } = await prisma.libraryBook.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LibraryBookDeleteManyArgs>(args?: SelectSubset<T, LibraryBookDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LibraryBooks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LibraryBookUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LibraryBooks
     * const libraryBook = await prisma.libraryBook.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LibraryBookUpdateManyArgs>(args: SelectSubset<T, LibraryBookUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one LibraryBook.
     * @param {LibraryBookUpsertArgs} args - Arguments to update or create a LibraryBook.
     * @example
     * // Update or create a LibraryBook
     * const libraryBook = await prisma.libraryBook.upsert({
     *   create: {
     *     // ... data to create a LibraryBook
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LibraryBook we want to update
     *   }
     * })
     */
    upsert<T extends LibraryBookUpsertArgs>(args: SelectSubset<T, LibraryBookUpsertArgs<ExtArgs>>): Prisma__LibraryBookClient<$Result.GetResult<Prisma.$LibraryBookPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of LibraryBooks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LibraryBookCountArgs} args - Arguments to filter LibraryBooks to count.
     * @example
     * // Count the number of LibraryBooks
     * const count = await prisma.libraryBook.count({
     *   where: {
     *     // ... the filter for the LibraryBooks we want to count
     *   }
     * })
    **/
    count<T extends LibraryBookCountArgs>(
      args?: Subset<T, LibraryBookCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LibraryBookCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LibraryBook.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LibraryBookAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LibraryBookAggregateArgs>(args: Subset<T, LibraryBookAggregateArgs>): Prisma.PrismaPromise<GetLibraryBookAggregateType<T>>

    /**
     * Group by LibraryBook.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LibraryBookGroupByArgs} args - Group by arguments.
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
      T extends LibraryBookGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LibraryBookGroupByArgs['orderBy'] }
        : { orderBy?: LibraryBookGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LibraryBookGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLibraryBookGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LibraryBook model
   */
  readonly fields: LibraryBookFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LibraryBook.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LibraryBookClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    borrowings<T extends LibraryBook$borrowingsArgs<ExtArgs> = {}>(args?: Subset<T, LibraryBook$borrowingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookBorrowingPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the LibraryBook model
   */ 
  interface LibraryBookFieldRefs {
    readonly id: FieldRef<"LibraryBook", 'Int'>
    readonly title: FieldRef<"LibraryBook", 'String'>
    readonly author: FieldRef<"LibraryBook", 'String'>
    readonly isbn: FieldRef<"LibraryBook", 'String'>
    readonly publisher: FieldRef<"LibraryBook", 'String'>
    readonly publishYear: FieldRef<"LibraryBook", 'Int'>
    readonly category: FieldRef<"LibraryBook", 'String'>
    readonly description: FieldRef<"LibraryBook", 'String'>
    readonly coverImage: FieldRef<"LibraryBook", 'String'>
    readonly totalCopies: FieldRef<"LibraryBook", 'Int'>
    readonly availableCopies: FieldRef<"LibraryBook", 'Int'>
    readonly location: FieldRef<"LibraryBook", 'String'>
    readonly schoolId: FieldRef<"LibraryBook", 'String'>
    readonly createdAt: FieldRef<"LibraryBook", 'DateTime'>
    readonly updatedAt: FieldRef<"LibraryBook", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LibraryBook findUnique
   */
  export type LibraryBookFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LibraryBook
     */
    select?: LibraryBookSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibraryBookInclude<ExtArgs> | null
    /**
     * Filter, which LibraryBook to fetch.
     */
    where: LibraryBookWhereUniqueInput
  }

  /**
   * LibraryBook findUniqueOrThrow
   */
  export type LibraryBookFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LibraryBook
     */
    select?: LibraryBookSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibraryBookInclude<ExtArgs> | null
    /**
     * Filter, which LibraryBook to fetch.
     */
    where: LibraryBookWhereUniqueInput
  }

  /**
   * LibraryBook findFirst
   */
  export type LibraryBookFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LibraryBook
     */
    select?: LibraryBookSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibraryBookInclude<ExtArgs> | null
    /**
     * Filter, which LibraryBook to fetch.
     */
    where?: LibraryBookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LibraryBooks to fetch.
     */
    orderBy?: LibraryBookOrderByWithRelationInput | LibraryBookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LibraryBooks.
     */
    cursor?: LibraryBookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LibraryBooks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LibraryBooks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LibraryBooks.
     */
    distinct?: LibraryBookScalarFieldEnum | LibraryBookScalarFieldEnum[]
  }

  /**
   * LibraryBook findFirstOrThrow
   */
  export type LibraryBookFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LibraryBook
     */
    select?: LibraryBookSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibraryBookInclude<ExtArgs> | null
    /**
     * Filter, which LibraryBook to fetch.
     */
    where?: LibraryBookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LibraryBooks to fetch.
     */
    orderBy?: LibraryBookOrderByWithRelationInput | LibraryBookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LibraryBooks.
     */
    cursor?: LibraryBookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LibraryBooks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LibraryBooks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LibraryBooks.
     */
    distinct?: LibraryBookScalarFieldEnum | LibraryBookScalarFieldEnum[]
  }

  /**
   * LibraryBook findMany
   */
  export type LibraryBookFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LibraryBook
     */
    select?: LibraryBookSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibraryBookInclude<ExtArgs> | null
    /**
     * Filter, which LibraryBooks to fetch.
     */
    where?: LibraryBookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LibraryBooks to fetch.
     */
    orderBy?: LibraryBookOrderByWithRelationInput | LibraryBookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LibraryBooks.
     */
    cursor?: LibraryBookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LibraryBooks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LibraryBooks.
     */
    skip?: number
    distinct?: LibraryBookScalarFieldEnum | LibraryBookScalarFieldEnum[]
  }

  /**
   * LibraryBook create
   */
  export type LibraryBookCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LibraryBook
     */
    select?: LibraryBookSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibraryBookInclude<ExtArgs> | null
    /**
     * The data needed to create a LibraryBook.
     */
    data: XOR<LibraryBookCreateInput, LibraryBookUncheckedCreateInput>
  }

  /**
   * LibraryBook createMany
   */
  export type LibraryBookCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LibraryBooks.
     */
    data: LibraryBookCreateManyInput | LibraryBookCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LibraryBook createManyAndReturn
   */
  export type LibraryBookCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LibraryBook
     */
    select?: LibraryBookSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many LibraryBooks.
     */
    data: LibraryBookCreateManyInput | LibraryBookCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LibraryBook update
   */
  export type LibraryBookUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LibraryBook
     */
    select?: LibraryBookSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibraryBookInclude<ExtArgs> | null
    /**
     * The data needed to update a LibraryBook.
     */
    data: XOR<LibraryBookUpdateInput, LibraryBookUncheckedUpdateInput>
    /**
     * Choose, which LibraryBook to update.
     */
    where: LibraryBookWhereUniqueInput
  }

  /**
   * LibraryBook updateMany
   */
  export type LibraryBookUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LibraryBooks.
     */
    data: XOR<LibraryBookUpdateManyMutationInput, LibraryBookUncheckedUpdateManyInput>
    /**
     * Filter which LibraryBooks to update
     */
    where?: LibraryBookWhereInput
  }

  /**
   * LibraryBook upsert
   */
  export type LibraryBookUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LibraryBook
     */
    select?: LibraryBookSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibraryBookInclude<ExtArgs> | null
    /**
     * The filter to search for the LibraryBook to update in case it exists.
     */
    where: LibraryBookWhereUniqueInput
    /**
     * In case the LibraryBook found by the `where` argument doesn't exist, create a new LibraryBook with this data.
     */
    create: XOR<LibraryBookCreateInput, LibraryBookUncheckedCreateInput>
    /**
     * In case the LibraryBook was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LibraryBookUpdateInput, LibraryBookUncheckedUpdateInput>
  }

  /**
   * LibraryBook delete
   */
  export type LibraryBookDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LibraryBook
     */
    select?: LibraryBookSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibraryBookInclude<ExtArgs> | null
    /**
     * Filter which LibraryBook to delete.
     */
    where: LibraryBookWhereUniqueInput
  }

  /**
   * LibraryBook deleteMany
   */
  export type LibraryBookDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LibraryBooks to delete
     */
    where?: LibraryBookWhereInput
  }

  /**
   * LibraryBook.borrowings
   */
  export type LibraryBook$borrowingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookBorrowing
     */
    select?: BookBorrowingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookBorrowingInclude<ExtArgs> | null
    where?: BookBorrowingWhereInput
    orderBy?: BookBorrowingOrderByWithRelationInput | BookBorrowingOrderByWithRelationInput[]
    cursor?: BookBorrowingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookBorrowingScalarFieldEnum | BookBorrowingScalarFieldEnum[]
  }

  /**
   * LibraryBook without action
   */
  export type LibraryBookDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LibraryBook
     */
    select?: LibraryBookSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibraryBookInclude<ExtArgs> | null
  }


  /**
   * Model BookBorrowing
   */

  export type AggregateBookBorrowing = {
    _count: BookBorrowingCountAggregateOutputType | null
    _avg: BookBorrowingAvgAggregateOutputType | null
    _sum: BookBorrowingSumAggregateOutputType | null
    _min: BookBorrowingMinAggregateOutputType | null
    _max: BookBorrowingMaxAggregateOutputType | null
  }

  export type BookBorrowingAvgAggregateOutputType = {
    id: number | null
    bookId: number | null
  }

  export type BookBorrowingSumAggregateOutputType = {
    id: number | null
    bookId: number | null
  }

  export type BookBorrowingMinAggregateOutputType = {
    id: number | null
    bookId: number | null
    studentId: string | null
    studentName: string | null
    borrowedAt: Date | null
    dueDate: Date | null
    returnedAt: Date | null
    status: string | null
    schoolId: string | null
  }

  export type BookBorrowingMaxAggregateOutputType = {
    id: number | null
    bookId: number | null
    studentId: string | null
    studentName: string | null
    borrowedAt: Date | null
    dueDate: Date | null
    returnedAt: Date | null
    status: string | null
    schoolId: string | null
  }

  export type BookBorrowingCountAggregateOutputType = {
    id: number
    bookId: number
    studentId: number
    studentName: number
    borrowedAt: number
    dueDate: number
    returnedAt: number
    status: number
    schoolId: number
    _all: number
  }


  export type BookBorrowingAvgAggregateInputType = {
    id?: true
    bookId?: true
  }

  export type BookBorrowingSumAggregateInputType = {
    id?: true
    bookId?: true
  }

  export type BookBorrowingMinAggregateInputType = {
    id?: true
    bookId?: true
    studentId?: true
    studentName?: true
    borrowedAt?: true
    dueDate?: true
    returnedAt?: true
    status?: true
    schoolId?: true
  }

  export type BookBorrowingMaxAggregateInputType = {
    id?: true
    bookId?: true
    studentId?: true
    studentName?: true
    borrowedAt?: true
    dueDate?: true
    returnedAt?: true
    status?: true
    schoolId?: true
  }

  export type BookBorrowingCountAggregateInputType = {
    id?: true
    bookId?: true
    studentId?: true
    studentName?: true
    borrowedAt?: true
    dueDate?: true
    returnedAt?: true
    status?: true
    schoolId?: true
    _all?: true
  }

  export type BookBorrowingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BookBorrowing to aggregate.
     */
    where?: BookBorrowingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookBorrowings to fetch.
     */
    orderBy?: BookBorrowingOrderByWithRelationInput | BookBorrowingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookBorrowingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookBorrowings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookBorrowings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BookBorrowings
    **/
    _count?: true | BookBorrowingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookBorrowingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookBorrowingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookBorrowingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookBorrowingMaxAggregateInputType
  }

  export type GetBookBorrowingAggregateType<T extends BookBorrowingAggregateArgs> = {
        [P in keyof T & keyof AggregateBookBorrowing]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBookBorrowing[P]>
      : GetScalarType<T[P], AggregateBookBorrowing[P]>
  }




  export type BookBorrowingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookBorrowingWhereInput
    orderBy?: BookBorrowingOrderByWithAggregationInput | BookBorrowingOrderByWithAggregationInput[]
    by: BookBorrowingScalarFieldEnum[] | BookBorrowingScalarFieldEnum
    having?: BookBorrowingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookBorrowingCountAggregateInputType | true
    _avg?: BookBorrowingAvgAggregateInputType
    _sum?: BookBorrowingSumAggregateInputType
    _min?: BookBorrowingMinAggregateInputType
    _max?: BookBorrowingMaxAggregateInputType
  }

  export type BookBorrowingGroupByOutputType = {
    id: number
    bookId: number
    studentId: string
    studentName: string
    borrowedAt: Date
    dueDate: Date
    returnedAt: Date | null
    status: string
    schoolId: string
    _count: BookBorrowingCountAggregateOutputType | null
    _avg: BookBorrowingAvgAggregateOutputType | null
    _sum: BookBorrowingSumAggregateOutputType | null
    _min: BookBorrowingMinAggregateOutputType | null
    _max: BookBorrowingMaxAggregateOutputType | null
  }

  type GetBookBorrowingGroupByPayload<T extends BookBorrowingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookBorrowingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookBorrowingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookBorrowingGroupByOutputType[P]>
            : GetScalarType<T[P], BookBorrowingGroupByOutputType[P]>
        }
      >
    >


  export type BookBorrowingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookId?: boolean
    studentId?: boolean
    studentName?: boolean
    borrowedAt?: boolean
    dueDate?: boolean
    returnedAt?: boolean
    status?: boolean
    schoolId?: boolean
    book?: boolean | LibraryBookDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookBorrowing"]>

  export type BookBorrowingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookId?: boolean
    studentId?: boolean
    studentName?: boolean
    borrowedAt?: boolean
    dueDate?: boolean
    returnedAt?: boolean
    status?: boolean
    schoolId?: boolean
    book?: boolean | LibraryBookDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookBorrowing"]>

  export type BookBorrowingSelectScalar = {
    id?: boolean
    bookId?: boolean
    studentId?: boolean
    studentName?: boolean
    borrowedAt?: boolean
    dueDate?: boolean
    returnedAt?: boolean
    status?: boolean
    schoolId?: boolean
  }

  export type BookBorrowingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    book?: boolean | LibraryBookDefaultArgs<ExtArgs>
  }
  export type BookBorrowingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    book?: boolean | LibraryBookDefaultArgs<ExtArgs>
  }

  export type $BookBorrowingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BookBorrowing"
    objects: {
      book: Prisma.$LibraryBookPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      bookId: number
      studentId: string
      studentName: string
      borrowedAt: Date
      dueDate: Date
      returnedAt: Date | null
      status: string
      schoolId: string
    }, ExtArgs["result"]["bookBorrowing"]>
    composites: {}
  }

  type BookBorrowingGetPayload<S extends boolean | null | undefined | BookBorrowingDefaultArgs> = $Result.GetResult<Prisma.$BookBorrowingPayload, S>

  type BookBorrowingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BookBorrowingFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BookBorrowingCountAggregateInputType | true
    }

  export interface BookBorrowingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BookBorrowing'], meta: { name: 'BookBorrowing' } }
    /**
     * Find zero or one BookBorrowing that matches the filter.
     * @param {BookBorrowingFindUniqueArgs} args - Arguments to find a BookBorrowing
     * @example
     * // Get one BookBorrowing
     * const bookBorrowing = await prisma.bookBorrowing.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookBorrowingFindUniqueArgs>(args: SelectSubset<T, BookBorrowingFindUniqueArgs<ExtArgs>>): Prisma__BookBorrowingClient<$Result.GetResult<Prisma.$BookBorrowingPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one BookBorrowing that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {BookBorrowingFindUniqueOrThrowArgs} args - Arguments to find a BookBorrowing
     * @example
     * // Get one BookBorrowing
     * const bookBorrowing = await prisma.bookBorrowing.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookBorrowingFindUniqueOrThrowArgs>(args: SelectSubset<T, BookBorrowingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookBorrowingClient<$Result.GetResult<Prisma.$BookBorrowingPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first BookBorrowing that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookBorrowingFindFirstArgs} args - Arguments to find a BookBorrowing
     * @example
     * // Get one BookBorrowing
     * const bookBorrowing = await prisma.bookBorrowing.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookBorrowingFindFirstArgs>(args?: SelectSubset<T, BookBorrowingFindFirstArgs<ExtArgs>>): Prisma__BookBorrowingClient<$Result.GetResult<Prisma.$BookBorrowingPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first BookBorrowing that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookBorrowingFindFirstOrThrowArgs} args - Arguments to find a BookBorrowing
     * @example
     * // Get one BookBorrowing
     * const bookBorrowing = await prisma.bookBorrowing.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookBorrowingFindFirstOrThrowArgs>(args?: SelectSubset<T, BookBorrowingFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookBorrowingClient<$Result.GetResult<Prisma.$BookBorrowingPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more BookBorrowings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookBorrowingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BookBorrowings
     * const bookBorrowings = await prisma.bookBorrowing.findMany()
     * 
     * // Get first 10 BookBorrowings
     * const bookBorrowings = await prisma.bookBorrowing.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookBorrowingWithIdOnly = await prisma.bookBorrowing.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BookBorrowingFindManyArgs>(args?: SelectSubset<T, BookBorrowingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookBorrowingPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a BookBorrowing.
     * @param {BookBorrowingCreateArgs} args - Arguments to create a BookBorrowing.
     * @example
     * // Create one BookBorrowing
     * const BookBorrowing = await prisma.bookBorrowing.create({
     *   data: {
     *     // ... data to create a BookBorrowing
     *   }
     * })
     * 
     */
    create<T extends BookBorrowingCreateArgs>(args: SelectSubset<T, BookBorrowingCreateArgs<ExtArgs>>): Prisma__BookBorrowingClient<$Result.GetResult<Prisma.$BookBorrowingPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many BookBorrowings.
     * @param {BookBorrowingCreateManyArgs} args - Arguments to create many BookBorrowings.
     * @example
     * // Create many BookBorrowings
     * const bookBorrowing = await prisma.bookBorrowing.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookBorrowingCreateManyArgs>(args?: SelectSubset<T, BookBorrowingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BookBorrowings and returns the data saved in the database.
     * @param {BookBorrowingCreateManyAndReturnArgs} args - Arguments to create many BookBorrowings.
     * @example
     * // Create many BookBorrowings
     * const bookBorrowing = await prisma.bookBorrowing.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BookBorrowings and only return the `id`
     * const bookBorrowingWithIdOnly = await prisma.bookBorrowing.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BookBorrowingCreateManyAndReturnArgs>(args?: SelectSubset<T, BookBorrowingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookBorrowingPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a BookBorrowing.
     * @param {BookBorrowingDeleteArgs} args - Arguments to delete one BookBorrowing.
     * @example
     * // Delete one BookBorrowing
     * const BookBorrowing = await prisma.bookBorrowing.delete({
     *   where: {
     *     // ... filter to delete one BookBorrowing
     *   }
     * })
     * 
     */
    delete<T extends BookBorrowingDeleteArgs>(args: SelectSubset<T, BookBorrowingDeleteArgs<ExtArgs>>): Prisma__BookBorrowingClient<$Result.GetResult<Prisma.$BookBorrowingPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one BookBorrowing.
     * @param {BookBorrowingUpdateArgs} args - Arguments to update one BookBorrowing.
     * @example
     * // Update one BookBorrowing
     * const bookBorrowing = await prisma.bookBorrowing.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookBorrowingUpdateArgs>(args: SelectSubset<T, BookBorrowingUpdateArgs<ExtArgs>>): Prisma__BookBorrowingClient<$Result.GetResult<Prisma.$BookBorrowingPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more BookBorrowings.
     * @param {BookBorrowingDeleteManyArgs} args - Arguments to filter BookBorrowings to delete.
     * @example
     * // Delete a few BookBorrowings
     * const { count } = await prisma.bookBorrowing.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookBorrowingDeleteManyArgs>(args?: SelectSubset<T, BookBorrowingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BookBorrowings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookBorrowingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BookBorrowings
     * const bookBorrowing = await prisma.bookBorrowing.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookBorrowingUpdateManyArgs>(args: SelectSubset<T, BookBorrowingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one BookBorrowing.
     * @param {BookBorrowingUpsertArgs} args - Arguments to update or create a BookBorrowing.
     * @example
     * // Update or create a BookBorrowing
     * const bookBorrowing = await prisma.bookBorrowing.upsert({
     *   create: {
     *     // ... data to create a BookBorrowing
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BookBorrowing we want to update
     *   }
     * })
     */
    upsert<T extends BookBorrowingUpsertArgs>(args: SelectSubset<T, BookBorrowingUpsertArgs<ExtArgs>>): Prisma__BookBorrowingClient<$Result.GetResult<Prisma.$BookBorrowingPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of BookBorrowings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookBorrowingCountArgs} args - Arguments to filter BookBorrowings to count.
     * @example
     * // Count the number of BookBorrowings
     * const count = await prisma.bookBorrowing.count({
     *   where: {
     *     // ... the filter for the BookBorrowings we want to count
     *   }
     * })
    **/
    count<T extends BookBorrowingCountArgs>(
      args?: Subset<T, BookBorrowingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookBorrowingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BookBorrowing.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookBorrowingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BookBorrowingAggregateArgs>(args: Subset<T, BookBorrowingAggregateArgs>): Prisma.PrismaPromise<GetBookBorrowingAggregateType<T>>

    /**
     * Group by BookBorrowing.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookBorrowingGroupByArgs} args - Group by arguments.
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
      T extends BookBorrowingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookBorrowingGroupByArgs['orderBy'] }
        : { orderBy?: BookBorrowingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BookBorrowingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookBorrowingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BookBorrowing model
   */
  readonly fields: BookBorrowingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BookBorrowing.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookBorrowingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    book<T extends LibraryBookDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LibraryBookDefaultArgs<ExtArgs>>): Prisma__LibraryBookClient<$Result.GetResult<Prisma.$LibraryBookPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the BookBorrowing model
   */ 
  interface BookBorrowingFieldRefs {
    readonly id: FieldRef<"BookBorrowing", 'Int'>
    readonly bookId: FieldRef<"BookBorrowing", 'Int'>
    readonly studentId: FieldRef<"BookBorrowing", 'String'>
    readonly studentName: FieldRef<"BookBorrowing", 'String'>
    readonly borrowedAt: FieldRef<"BookBorrowing", 'DateTime'>
    readonly dueDate: FieldRef<"BookBorrowing", 'DateTime'>
    readonly returnedAt: FieldRef<"BookBorrowing", 'DateTime'>
    readonly status: FieldRef<"BookBorrowing", 'String'>
    readonly schoolId: FieldRef<"BookBorrowing", 'String'>
  }
    

  // Custom InputTypes
  /**
   * BookBorrowing findUnique
   */
  export type BookBorrowingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookBorrowing
     */
    select?: BookBorrowingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookBorrowingInclude<ExtArgs> | null
    /**
     * Filter, which BookBorrowing to fetch.
     */
    where: BookBorrowingWhereUniqueInput
  }

  /**
   * BookBorrowing findUniqueOrThrow
   */
  export type BookBorrowingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookBorrowing
     */
    select?: BookBorrowingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookBorrowingInclude<ExtArgs> | null
    /**
     * Filter, which BookBorrowing to fetch.
     */
    where: BookBorrowingWhereUniqueInput
  }

  /**
   * BookBorrowing findFirst
   */
  export type BookBorrowingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookBorrowing
     */
    select?: BookBorrowingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookBorrowingInclude<ExtArgs> | null
    /**
     * Filter, which BookBorrowing to fetch.
     */
    where?: BookBorrowingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookBorrowings to fetch.
     */
    orderBy?: BookBorrowingOrderByWithRelationInput | BookBorrowingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BookBorrowings.
     */
    cursor?: BookBorrowingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookBorrowings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookBorrowings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BookBorrowings.
     */
    distinct?: BookBorrowingScalarFieldEnum | BookBorrowingScalarFieldEnum[]
  }

  /**
   * BookBorrowing findFirstOrThrow
   */
  export type BookBorrowingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookBorrowing
     */
    select?: BookBorrowingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookBorrowingInclude<ExtArgs> | null
    /**
     * Filter, which BookBorrowing to fetch.
     */
    where?: BookBorrowingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookBorrowings to fetch.
     */
    orderBy?: BookBorrowingOrderByWithRelationInput | BookBorrowingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BookBorrowings.
     */
    cursor?: BookBorrowingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookBorrowings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookBorrowings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BookBorrowings.
     */
    distinct?: BookBorrowingScalarFieldEnum | BookBorrowingScalarFieldEnum[]
  }

  /**
   * BookBorrowing findMany
   */
  export type BookBorrowingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookBorrowing
     */
    select?: BookBorrowingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookBorrowingInclude<ExtArgs> | null
    /**
     * Filter, which BookBorrowings to fetch.
     */
    where?: BookBorrowingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookBorrowings to fetch.
     */
    orderBy?: BookBorrowingOrderByWithRelationInput | BookBorrowingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BookBorrowings.
     */
    cursor?: BookBorrowingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookBorrowings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookBorrowings.
     */
    skip?: number
    distinct?: BookBorrowingScalarFieldEnum | BookBorrowingScalarFieldEnum[]
  }

  /**
   * BookBorrowing create
   */
  export type BookBorrowingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookBorrowing
     */
    select?: BookBorrowingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookBorrowingInclude<ExtArgs> | null
    /**
     * The data needed to create a BookBorrowing.
     */
    data: XOR<BookBorrowingCreateInput, BookBorrowingUncheckedCreateInput>
  }

  /**
   * BookBorrowing createMany
   */
  export type BookBorrowingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BookBorrowings.
     */
    data: BookBorrowingCreateManyInput | BookBorrowingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BookBorrowing createManyAndReturn
   */
  export type BookBorrowingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookBorrowing
     */
    select?: BookBorrowingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many BookBorrowings.
     */
    data: BookBorrowingCreateManyInput | BookBorrowingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookBorrowingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BookBorrowing update
   */
  export type BookBorrowingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookBorrowing
     */
    select?: BookBorrowingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookBorrowingInclude<ExtArgs> | null
    /**
     * The data needed to update a BookBorrowing.
     */
    data: XOR<BookBorrowingUpdateInput, BookBorrowingUncheckedUpdateInput>
    /**
     * Choose, which BookBorrowing to update.
     */
    where: BookBorrowingWhereUniqueInput
  }

  /**
   * BookBorrowing updateMany
   */
  export type BookBorrowingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BookBorrowings.
     */
    data: XOR<BookBorrowingUpdateManyMutationInput, BookBorrowingUncheckedUpdateManyInput>
    /**
     * Filter which BookBorrowings to update
     */
    where?: BookBorrowingWhereInput
  }

  /**
   * BookBorrowing upsert
   */
  export type BookBorrowingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookBorrowing
     */
    select?: BookBorrowingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookBorrowingInclude<ExtArgs> | null
    /**
     * The filter to search for the BookBorrowing to update in case it exists.
     */
    where: BookBorrowingWhereUniqueInput
    /**
     * In case the BookBorrowing found by the `where` argument doesn't exist, create a new BookBorrowing with this data.
     */
    create: XOR<BookBorrowingCreateInput, BookBorrowingUncheckedCreateInput>
    /**
     * In case the BookBorrowing was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookBorrowingUpdateInput, BookBorrowingUncheckedUpdateInput>
  }

  /**
   * BookBorrowing delete
   */
  export type BookBorrowingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookBorrowing
     */
    select?: BookBorrowingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookBorrowingInclude<ExtArgs> | null
    /**
     * Filter which BookBorrowing to delete.
     */
    where: BookBorrowingWhereUniqueInput
  }

  /**
   * BookBorrowing deleteMany
   */
  export type BookBorrowingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BookBorrowings to delete
     */
    where?: BookBorrowingWhereInput
  }

  /**
   * BookBorrowing without action
   */
  export type BookBorrowingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookBorrowing
     */
    select?: BookBorrowingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookBorrowingInclude<ExtArgs> | null
  }


  /**
   * Model Equipment
   */

  export type AggregateEquipment = {
    _count: EquipmentCountAggregateOutputType | null
    _avg: EquipmentAvgAggregateOutputType | null
    _sum: EquipmentSumAggregateOutputType | null
    _min: EquipmentMinAggregateOutputType | null
    _max: EquipmentMaxAggregateOutputType | null
  }

  export type EquipmentAvgAggregateOutputType = {
    id: number | null
  }

  export type EquipmentSumAggregateOutputType = {
    id: number | null
  }

  export type EquipmentMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    category: string | null
    serialNumber: string | null
    purchaseDate: Date | null
    condition: string | null
    location: string | null
    assignedTo: string | null
    schoolId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EquipmentMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    category: string | null
    serialNumber: string | null
    purchaseDate: Date | null
    condition: string | null
    location: string | null
    assignedTo: string | null
    schoolId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EquipmentCountAggregateOutputType = {
    id: number
    name: number
    description: number
    category: number
    serialNumber: number
    purchaseDate: number
    condition: number
    location: number
    assignedTo: number
    schoolId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EquipmentAvgAggregateInputType = {
    id?: true
  }

  export type EquipmentSumAggregateInputType = {
    id?: true
  }

  export type EquipmentMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    category?: true
    serialNumber?: true
    purchaseDate?: true
    condition?: true
    location?: true
    assignedTo?: true
    schoolId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EquipmentMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    category?: true
    serialNumber?: true
    purchaseDate?: true
    condition?: true
    location?: true
    assignedTo?: true
    schoolId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EquipmentCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    category?: true
    serialNumber?: true
    purchaseDate?: true
    condition?: true
    location?: true
    assignedTo?: true
    schoolId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EquipmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Equipment to aggregate.
     */
    where?: EquipmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Equipment to fetch.
     */
    orderBy?: EquipmentOrderByWithRelationInput | EquipmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EquipmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Equipment from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Equipment.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Equipment
    **/
    _count?: true | EquipmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EquipmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EquipmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EquipmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EquipmentMaxAggregateInputType
  }

  export type GetEquipmentAggregateType<T extends EquipmentAggregateArgs> = {
        [P in keyof T & keyof AggregateEquipment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEquipment[P]>
      : GetScalarType<T[P], AggregateEquipment[P]>
  }




  export type EquipmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EquipmentWhereInput
    orderBy?: EquipmentOrderByWithAggregationInput | EquipmentOrderByWithAggregationInput[]
    by: EquipmentScalarFieldEnum[] | EquipmentScalarFieldEnum
    having?: EquipmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EquipmentCountAggregateInputType | true
    _avg?: EquipmentAvgAggregateInputType
    _sum?: EquipmentSumAggregateInputType
    _min?: EquipmentMinAggregateInputType
    _max?: EquipmentMaxAggregateInputType
  }

  export type EquipmentGroupByOutputType = {
    id: number
    name: string
    description: string | null
    category: string
    serialNumber: string | null
    purchaseDate: Date | null
    condition: string
    location: string | null
    assignedTo: string | null
    schoolId: string
    createdAt: Date
    updatedAt: Date
    _count: EquipmentCountAggregateOutputType | null
    _avg: EquipmentAvgAggregateOutputType | null
    _sum: EquipmentSumAggregateOutputType | null
    _min: EquipmentMinAggregateOutputType | null
    _max: EquipmentMaxAggregateOutputType | null
  }

  type GetEquipmentGroupByPayload<T extends EquipmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EquipmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EquipmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EquipmentGroupByOutputType[P]>
            : GetScalarType<T[P], EquipmentGroupByOutputType[P]>
        }
      >
    >


  export type EquipmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    category?: boolean
    serialNumber?: boolean
    purchaseDate?: boolean
    condition?: boolean
    location?: boolean
    assignedTo?: boolean
    schoolId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["equipment"]>

  export type EquipmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    category?: boolean
    serialNumber?: boolean
    purchaseDate?: boolean
    condition?: boolean
    location?: boolean
    assignedTo?: boolean
    schoolId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["equipment"]>

  export type EquipmentSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    category?: boolean
    serialNumber?: boolean
    purchaseDate?: boolean
    condition?: boolean
    location?: boolean
    assignedTo?: boolean
    schoolId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $EquipmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Equipment"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string | null
      category: string
      serialNumber: string | null
      purchaseDate: Date | null
      condition: string
      location: string | null
      assignedTo: string | null
      schoolId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["equipment"]>
    composites: {}
  }

  type EquipmentGetPayload<S extends boolean | null | undefined | EquipmentDefaultArgs> = $Result.GetResult<Prisma.$EquipmentPayload, S>

  type EquipmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<EquipmentFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: EquipmentCountAggregateInputType | true
    }

  export interface EquipmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Equipment'], meta: { name: 'Equipment' } }
    /**
     * Find zero or one Equipment that matches the filter.
     * @param {EquipmentFindUniqueArgs} args - Arguments to find a Equipment
     * @example
     * // Get one Equipment
     * const equipment = await prisma.equipment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EquipmentFindUniqueArgs>(args: SelectSubset<T, EquipmentFindUniqueArgs<ExtArgs>>): Prisma__EquipmentClient<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Equipment that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {EquipmentFindUniqueOrThrowArgs} args - Arguments to find a Equipment
     * @example
     * // Get one Equipment
     * const equipment = await prisma.equipment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EquipmentFindUniqueOrThrowArgs>(args: SelectSubset<T, EquipmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EquipmentClient<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Equipment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentFindFirstArgs} args - Arguments to find a Equipment
     * @example
     * // Get one Equipment
     * const equipment = await prisma.equipment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EquipmentFindFirstArgs>(args?: SelectSubset<T, EquipmentFindFirstArgs<ExtArgs>>): Prisma__EquipmentClient<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Equipment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentFindFirstOrThrowArgs} args - Arguments to find a Equipment
     * @example
     * // Get one Equipment
     * const equipment = await prisma.equipment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EquipmentFindFirstOrThrowArgs>(args?: SelectSubset<T, EquipmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__EquipmentClient<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Equipment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Equipment
     * const equipment = await prisma.equipment.findMany()
     * 
     * // Get first 10 Equipment
     * const equipment = await prisma.equipment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const equipmentWithIdOnly = await prisma.equipment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EquipmentFindManyArgs>(args?: SelectSubset<T, EquipmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Equipment.
     * @param {EquipmentCreateArgs} args - Arguments to create a Equipment.
     * @example
     * // Create one Equipment
     * const Equipment = await prisma.equipment.create({
     *   data: {
     *     // ... data to create a Equipment
     *   }
     * })
     * 
     */
    create<T extends EquipmentCreateArgs>(args: SelectSubset<T, EquipmentCreateArgs<ExtArgs>>): Prisma__EquipmentClient<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Equipment.
     * @param {EquipmentCreateManyArgs} args - Arguments to create many Equipment.
     * @example
     * // Create many Equipment
     * const equipment = await prisma.equipment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EquipmentCreateManyArgs>(args?: SelectSubset<T, EquipmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Equipment and returns the data saved in the database.
     * @param {EquipmentCreateManyAndReturnArgs} args - Arguments to create many Equipment.
     * @example
     * // Create many Equipment
     * const equipment = await prisma.equipment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Equipment and only return the `id`
     * const equipmentWithIdOnly = await prisma.equipment.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EquipmentCreateManyAndReturnArgs>(args?: SelectSubset<T, EquipmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Equipment.
     * @param {EquipmentDeleteArgs} args - Arguments to delete one Equipment.
     * @example
     * // Delete one Equipment
     * const Equipment = await prisma.equipment.delete({
     *   where: {
     *     // ... filter to delete one Equipment
     *   }
     * })
     * 
     */
    delete<T extends EquipmentDeleteArgs>(args: SelectSubset<T, EquipmentDeleteArgs<ExtArgs>>): Prisma__EquipmentClient<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Equipment.
     * @param {EquipmentUpdateArgs} args - Arguments to update one Equipment.
     * @example
     * // Update one Equipment
     * const equipment = await prisma.equipment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EquipmentUpdateArgs>(args: SelectSubset<T, EquipmentUpdateArgs<ExtArgs>>): Prisma__EquipmentClient<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Equipment.
     * @param {EquipmentDeleteManyArgs} args - Arguments to filter Equipment to delete.
     * @example
     * // Delete a few Equipment
     * const { count } = await prisma.equipment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EquipmentDeleteManyArgs>(args?: SelectSubset<T, EquipmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Equipment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Equipment
     * const equipment = await prisma.equipment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EquipmentUpdateManyArgs>(args: SelectSubset<T, EquipmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Equipment.
     * @param {EquipmentUpsertArgs} args - Arguments to update or create a Equipment.
     * @example
     * // Update or create a Equipment
     * const equipment = await prisma.equipment.upsert({
     *   create: {
     *     // ... data to create a Equipment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Equipment we want to update
     *   }
     * })
     */
    upsert<T extends EquipmentUpsertArgs>(args: SelectSubset<T, EquipmentUpsertArgs<ExtArgs>>): Prisma__EquipmentClient<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Equipment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentCountArgs} args - Arguments to filter Equipment to count.
     * @example
     * // Count the number of Equipment
     * const count = await prisma.equipment.count({
     *   where: {
     *     // ... the filter for the Equipment we want to count
     *   }
     * })
    **/
    count<T extends EquipmentCountArgs>(
      args?: Subset<T, EquipmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EquipmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Equipment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EquipmentAggregateArgs>(args: Subset<T, EquipmentAggregateArgs>): Prisma.PrismaPromise<GetEquipmentAggregateType<T>>

    /**
     * Group by Equipment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentGroupByArgs} args - Group by arguments.
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
      T extends EquipmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EquipmentGroupByArgs['orderBy'] }
        : { orderBy?: EquipmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EquipmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEquipmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Equipment model
   */
  readonly fields: EquipmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Equipment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EquipmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Equipment model
   */ 
  interface EquipmentFieldRefs {
    readonly id: FieldRef<"Equipment", 'Int'>
    readonly name: FieldRef<"Equipment", 'String'>
    readonly description: FieldRef<"Equipment", 'String'>
    readonly category: FieldRef<"Equipment", 'String'>
    readonly serialNumber: FieldRef<"Equipment", 'String'>
    readonly purchaseDate: FieldRef<"Equipment", 'DateTime'>
    readonly condition: FieldRef<"Equipment", 'String'>
    readonly location: FieldRef<"Equipment", 'String'>
    readonly assignedTo: FieldRef<"Equipment", 'String'>
    readonly schoolId: FieldRef<"Equipment", 'String'>
    readonly createdAt: FieldRef<"Equipment", 'DateTime'>
    readonly updatedAt: FieldRef<"Equipment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Equipment findUnique
   */
  export type EquipmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Filter, which Equipment to fetch.
     */
    where: EquipmentWhereUniqueInput
  }

  /**
   * Equipment findUniqueOrThrow
   */
  export type EquipmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Filter, which Equipment to fetch.
     */
    where: EquipmentWhereUniqueInput
  }

  /**
   * Equipment findFirst
   */
  export type EquipmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Filter, which Equipment to fetch.
     */
    where?: EquipmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Equipment to fetch.
     */
    orderBy?: EquipmentOrderByWithRelationInput | EquipmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Equipment.
     */
    cursor?: EquipmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Equipment from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Equipment.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Equipment.
     */
    distinct?: EquipmentScalarFieldEnum | EquipmentScalarFieldEnum[]
  }

  /**
   * Equipment findFirstOrThrow
   */
  export type EquipmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Filter, which Equipment to fetch.
     */
    where?: EquipmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Equipment to fetch.
     */
    orderBy?: EquipmentOrderByWithRelationInput | EquipmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Equipment.
     */
    cursor?: EquipmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Equipment from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Equipment.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Equipment.
     */
    distinct?: EquipmentScalarFieldEnum | EquipmentScalarFieldEnum[]
  }

  /**
   * Equipment findMany
   */
  export type EquipmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Filter, which Equipment to fetch.
     */
    where?: EquipmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Equipment to fetch.
     */
    orderBy?: EquipmentOrderByWithRelationInput | EquipmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Equipment.
     */
    cursor?: EquipmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Equipment from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Equipment.
     */
    skip?: number
    distinct?: EquipmentScalarFieldEnum | EquipmentScalarFieldEnum[]
  }

  /**
   * Equipment create
   */
  export type EquipmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * The data needed to create a Equipment.
     */
    data: XOR<EquipmentCreateInput, EquipmentUncheckedCreateInput>
  }

  /**
   * Equipment createMany
   */
  export type EquipmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Equipment.
     */
    data: EquipmentCreateManyInput | EquipmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Equipment createManyAndReturn
   */
  export type EquipmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Equipment.
     */
    data: EquipmentCreateManyInput | EquipmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Equipment update
   */
  export type EquipmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * The data needed to update a Equipment.
     */
    data: XOR<EquipmentUpdateInput, EquipmentUncheckedUpdateInput>
    /**
     * Choose, which Equipment to update.
     */
    where: EquipmentWhereUniqueInput
  }

  /**
   * Equipment updateMany
   */
  export type EquipmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Equipment.
     */
    data: XOR<EquipmentUpdateManyMutationInput, EquipmentUncheckedUpdateManyInput>
    /**
     * Filter which Equipment to update
     */
    where?: EquipmentWhereInput
  }

  /**
   * Equipment upsert
   */
  export type EquipmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * The filter to search for the Equipment to update in case it exists.
     */
    where: EquipmentWhereUniqueInput
    /**
     * In case the Equipment found by the `where` argument doesn't exist, create a new Equipment with this data.
     */
    create: XOR<EquipmentCreateInput, EquipmentUncheckedCreateInput>
    /**
     * In case the Equipment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EquipmentUpdateInput, EquipmentUncheckedUpdateInput>
  }

  /**
   * Equipment delete
   */
  export type EquipmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Filter which Equipment to delete.
     */
    where: EquipmentWhereUniqueInput
  }

  /**
   * Equipment deleteMany
   */
  export type EquipmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Equipment to delete
     */
    where?: EquipmentWhereInput
  }

  /**
   * Equipment without action
   */
  export type EquipmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
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


  export const ResourceScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    type: 'type',
    url: 'url',
    size: 'size',
    mimeType: 'mimeType',
    category: 'category',
    subjectId: 'subjectId',
    gradeId: 'gradeId',
    classId: 'classId',
    uploadedBy: 'uploadedBy',
    uploaderName: 'uploaderName',
    schoolId: 'schoolId',
    isPublic: 'isPublic',
    downloads: 'downloads',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ResourceScalarFieldEnum = (typeof ResourceScalarFieldEnum)[keyof typeof ResourceScalarFieldEnum]


  export const LibraryBookScalarFieldEnum: {
    id: 'id',
    title: 'title',
    author: 'author',
    isbn: 'isbn',
    publisher: 'publisher',
    publishYear: 'publishYear',
    category: 'category',
    description: 'description',
    coverImage: 'coverImage',
    totalCopies: 'totalCopies',
    availableCopies: 'availableCopies',
    location: 'location',
    schoolId: 'schoolId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LibraryBookScalarFieldEnum = (typeof LibraryBookScalarFieldEnum)[keyof typeof LibraryBookScalarFieldEnum]


  export const BookBorrowingScalarFieldEnum: {
    id: 'id',
    bookId: 'bookId',
    studentId: 'studentId',
    studentName: 'studentName',
    borrowedAt: 'borrowedAt',
    dueDate: 'dueDate',
    returnedAt: 'returnedAt',
    status: 'status',
    schoolId: 'schoolId'
  };

  export type BookBorrowingScalarFieldEnum = (typeof BookBorrowingScalarFieldEnum)[keyof typeof BookBorrowingScalarFieldEnum]


  export const EquipmentScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    category: 'category',
    serialNumber: 'serialNumber',
    purchaseDate: 'purchaseDate',
    condition: 'condition',
    location: 'location',
    assignedTo: 'assignedTo',
    schoolId: 'schoolId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EquipmentScalarFieldEnum = (typeof EquipmentScalarFieldEnum)[keyof typeof EquipmentScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


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


  export type ResourceWhereInput = {
    AND?: ResourceWhereInput | ResourceWhereInput[]
    OR?: ResourceWhereInput[]
    NOT?: ResourceWhereInput | ResourceWhereInput[]
    id?: IntFilter<"Resource"> | number
    title?: StringFilter<"Resource"> | string
    description?: StringNullableFilter<"Resource"> | string | null
    type?: StringFilter<"Resource"> | string
    url?: StringFilter<"Resource"> | string
    size?: IntNullableFilter<"Resource"> | number | null
    mimeType?: StringNullableFilter<"Resource"> | string | null
    category?: StringFilter<"Resource"> | string
    subjectId?: IntNullableFilter<"Resource"> | number | null
    gradeId?: IntNullableFilter<"Resource"> | number | null
    classId?: IntNullableFilter<"Resource"> | number | null
    uploadedBy?: StringFilter<"Resource"> | string
    uploaderName?: StringFilter<"Resource"> | string
    schoolId?: StringFilter<"Resource"> | string
    isPublic?: BoolFilter<"Resource"> | boolean
    downloads?: IntFilter<"Resource"> | number
    createdAt?: DateTimeFilter<"Resource"> | Date | string
    updatedAt?: DateTimeFilter<"Resource"> | Date | string
  }

  export type ResourceOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    type?: SortOrder
    url?: SortOrder
    size?: SortOrderInput | SortOrder
    mimeType?: SortOrderInput | SortOrder
    category?: SortOrder
    subjectId?: SortOrderInput | SortOrder
    gradeId?: SortOrderInput | SortOrder
    classId?: SortOrderInput | SortOrder
    uploadedBy?: SortOrder
    uploaderName?: SortOrder
    schoolId?: SortOrder
    isPublic?: SortOrder
    downloads?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ResourceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ResourceWhereInput | ResourceWhereInput[]
    OR?: ResourceWhereInput[]
    NOT?: ResourceWhereInput | ResourceWhereInput[]
    title?: StringFilter<"Resource"> | string
    description?: StringNullableFilter<"Resource"> | string | null
    type?: StringFilter<"Resource"> | string
    url?: StringFilter<"Resource"> | string
    size?: IntNullableFilter<"Resource"> | number | null
    mimeType?: StringNullableFilter<"Resource"> | string | null
    category?: StringFilter<"Resource"> | string
    subjectId?: IntNullableFilter<"Resource"> | number | null
    gradeId?: IntNullableFilter<"Resource"> | number | null
    classId?: IntNullableFilter<"Resource"> | number | null
    uploadedBy?: StringFilter<"Resource"> | string
    uploaderName?: StringFilter<"Resource"> | string
    schoolId?: StringFilter<"Resource"> | string
    isPublic?: BoolFilter<"Resource"> | boolean
    downloads?: IntFilter<"Resource"> | number
    createdAt?: DateTimeFilter<"Resource"> | Date | string
    updatedAt?: DateTimeFilter<"Resource"> | Date | string
  }, "id">

  export type ResourceOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    type?: SortOrder
    url?: SortOrder
    size?: SortOrderInput | SortOrder
    mimeType?: SortOrderInput | SortOrder
    category?: SortOrder
    subjectId?: SortOrderInput | SortOrder
    gradeId?: SortOrderInput | SortOrder
    classId?: SortOrderInput | SortOrder
    uploadedBy?: SortOrder
    uploaderName?: SortOrder
    schoolId?: SortOrder
    isPublic?: SortOrder
    downloads?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ResourceCountOrderByAggregateInput
    _avg?: ResourceAvgOrderByAggregateInput
    _max?: ResourceMaxOrderByAggregateInput
    _min?: ResourceMinOrderByAggregateInput
    _sum?: ResourceSumOrderByAggregateInput
  }

  export type ResourceScalarWhereWithAggregatesInput = {
    AND?: ResourceScalarWhereWithAggregatesInput | ResourceScalarWhereWithAggregatesInput[]
    OR?: ResourceScalarWhereWithAggregatesInput[]
    NOT?: ResourceScalarWhereWithAggregatesInput | ResourceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Resource"> | number
    title?: StringWithAggregatesFilter<"Resource"> | string
    description?: StringNullableWithAggregatesFilter<"Resource"> | string | null
    type?: StringWithAggregatesFilter<"Resource"> | string
    url?: StringWithAggregatesFilter<"Resource"> | string
    size?: IntNullableWithAggregatesFilter<"Resource"> | number | null
    mimeType?: StringNullableWithAggregatesFilter<"Resource"> | string | null
    category?: StringWithAggregatesFilter<"Resource"> | string
    subjectId?: IntNullableWithAggregatesFilter<"Resource"> | number | null
    gradeId?: IntNullableWithAggregatesFilter<"Resource"> | number | null
    classId?: IntNullableWithAggregatesFilter<"Resource"> | number | null
    uploadedBy?: StringWithAggregatesFilter<"Resource"> | string
    uploaderName?: StringWithAggregatesFilter<"Resource"> | string
    schoolId?: StringWithAggregatesFilter<"Resource"> | string
    isPublic?: BoolWithAggregatesFilter<"Resource"> | boolean
    downloads?: IntWithAggregatesFilter<"Resource"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Resource"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Resource"> | Date | string
  }

  export type LibraryBookWhereInput = {
    AND?: LibraryBookWhereInput | LibraryBookWhereInput[]
    OR?: LibraryBookWhereInput[]
    NOT?: LibraryBookWhereInput | LibraryBookWhereInput[]
    id?: IntFilter<"LibraryBook"> | number
    title?: StringFilter<"LibraryBook"> | string
    author?: StringFilter<"LibraryBook"> | string
    isbn?: StringNullableFilter<"LibraryBook"> | string | null
    publisher?: StringNullableFilter<"LibraryBook"> | string | null
    publishYear?: IntNullableFilter<"LibraryBook"> | number | null
    category?: StringFilter<"LibraryBook"> | string
    description?: StringNullableFilter<"LibraryBook"> | string | null
    coverImage?: StringNullableFilter<"LibraryBook"> | string | null
    totalCopies?: IntFilter<"LibraryBook"> | number
    availableCopies?: IntFilter<"LibraryBook"> | number
    location?: StringNullableFilter<"LibraryBook"> | string | null
    schoolId?: StringFilter<"LibraryBook"> | string
    createdAt?: DateTimeFilter<"LibraryBook"> | Date | string
    updatedAt?: DateTimeFilter<"LibraryBook"> | Date | string
    borrowings?: BookBorrowingListRelationFilter
  }

  export type LibraryBookOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    author?: SortOrder
    isbn?: SortOrderInput | SortOrder
    publisher?: SortOrderInput | SortOrder
    publishYear?: SortOrderInput | SortOrder
    category?: SortOrder
    description?: SortOrderInput | SortOrder
    coverImage?: SortOrderInput | SortOrder
    totalCopies?: SortOrder
    availableCopies?: SortOrder
    location?: SortOrderInput | SortOrder
    schoolId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    borrowings?: BookBorrowingOrderByRelationAggregateInput
  }

  export type LibraryBookWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LibraryBookWhereInput | LibraryBookWhereInput[]
    OR?: LibraryBookWhereInput[]
    NOT?: LibraryBookWhereInput | LibraryBookWhereInput[]
    title?: StringFilter<"LibraryBook"> | string
    author?: StringFilter<"LibraryBook"> | string
    isbn?: StringNullableFilter<"LibraryBook"> | string | null
    publisher?: StringNullableFilter<"LibraryBook"> | string | null
    publishYear?: IntNullableFilter<"LibraryBook"> | number | null
    category?: StringFilter<"LibraryBook"> | string
    description?: StringNullableFilter<"LibraryBook"> | string | null
    coverImage?: StringNullableFilter<"LibraryBook"> | string | null
    totalCopies?: IntFilter<"LibraryBook"> | number
    availableCopies?: IntFilter<"LibraryBook"> | number
    location?: StringNullableFilter<"LibraryBook"> | string | null
    schoolId?: StringFilter<"LibraryBook"> | string
    createdAt?: DateTimeFilter<"LibraryBook"> | Date | string
    updatedAt?: DateTimeFilter<"LibraryBook"> | Date | string
    borrowings?: BookBorrowingListRelationFilter
  }, "id">

  export type LibraryBookOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    author?: SortOrder
    isbn?: SortOrderInput | SortOrder
    publisher?: SortOrderInput | SortOrder
    publishYear?: SortOrderInput | SortOrder
    category?: SortOrder
    description?: SortOrderInput | SortOrder
    coverImage?: SortOrderInput | SortOrder
    totalCopies?: SortOrder
    availableCopies?: SortOrder
    location?: SortOrderInput | SortOrder
    schoolId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LibraryBookCountOrderByAggregateInput
    _avg?: LibraryBookAvgOrderByAggregateInput
    _max?: LibraryBookMaxOrderByAggregateInput
    _min?: LibraryBookMinOrderByAggregateInput
    _sum?: LibraryBookSumOrderByAggregateInput
  }

  export type LibraryBookScalarWhereWithAggregatesInput = {
    AND?: LibraryBookScalarWhereWithAggregatesInput | LibraryBookScalarWhereWithAggregatesInput[]
    OR?: LibraryBookScalarWhereWithAggregatesInput[]
    NOT?: LibraryBookScalarWhereWithAggregatesInput | LibraryBookScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"LibraryBook"> | number
    title?: StringWithAggregatesFilter<"LibraryBook"> | string
    author?: StringWithAggregatesFilter<"LibraryBook"> | string
    isbn?: StringNullableWithAggregatesFilter<"LibraryBook"> | string | null
    publisher?: StringNullableWithAggregatesFilter<"LibraryBook"> | string | null
    publishYear?: IntNullableWithAggregatesFilter<"LibraryBook"> | number | null
    category?: StringWithAggregatesFilter<"LibraryBook"> | string
    description?: StringNullableWithAggregatesFilter<"LibraryBook"> | string | null
    coverImage?: StringNullableWithAggregatesFilter<"LibraryBook"> | string | null
    totalCopies?: IntWithAggregatesFilter<"LibraryBook"> | number
    availableCopies?: IntWithAggregatesFilter<"LibraryBook"> | number
    location?: StringNullableWithAggregatesFilter<"LibraryBook"> | string | null
    schoolId?: StringWithAggregatesFilter<"LibraryBook"> | string
    createdAt?: DateTimeWithAggregatesFilter<"LibraryBook"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"LibraryBook"> | Date | string
  }

  export type BookBorrowingWhereInput = {
    AND?: BookBorrowingWhereInput | BookBorrowingWhereInput[]
    OR?: BookBorrowingWhereInput[]
    NOT?: BookBorrowingWhereInput | BookBorrowingWhereInput[]
    id?: IntFilter<"BookBorrowing"> | number
    bookId?: IntFilter<"BookBorrowing"> | number
    studentId?: StringFilter<"BookBorrowing"> | string
    studentName?: StringFilter<"BookBorrowing"> | string
    borrowedAt?: DateTimeFilter<"BookBorrowing"> | Date | string
    dueDate?: DateTimeFilter<"BookBorrowing"> | Date | string
    returnedAt?: DateTimeNullableFilter<"BookBorrowing"> | Date | string | null
    status?: StringFilter<"BookBorrowing"> | string
    schoolId?: StringFilter<"BookBorrowing"> | string
    book?: XOR<LibraryBookRelationFilter, LibraryBookWhereInput>
  }

  export type BookBorrowingOrderByWithRelationInput = {
    id?: SortOrder
    bookId?: SortOrder
    studentId?: SortOrder
    studentName?: SortOrder
    borrowedAt?: SortOrder
    dueDate?: SortOrder
    returnedAt?: SortOrderInput | SortOrder
    status?: SortOrder
    schoolId?: SortOrder
    book?: LibraryBookOrderByWithRelationInput
  }

  export type BookBorrowingWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BookBorrowingWhereInput | BookBorrowingWhereInput[]
    OR?: BookBorrowingWhereInput[]
    NOT?: BookBorrowingWhereInput | BookBorrowingWhereInput[]
    bookId?: IntFilter<"BookBorrowing"> | number
    studentId?: StringFilter<"BookBorrowing"> | string
    studentName?: StringFilter<"BookBorrowing"> | string
    borrowedAt?: DateTimeFilter<"BookBorrowing"> | Date | string
    dueDate?: DateTimeFilter<"BookBorrowing"> | Date | string
    returnedAt?: DateTimeNullableFilter<"BookBorrowing"> | Date | string | null
    status?: StringFilter<"BookBorrowing"> | string
    schoolId?: StringFilter<"BookBorrowing"> | string
    book?: XOR<LibraryBookRelationFilter, LibraryBookWhereInput>
  }, "id">

  export type BookBorrowingOrderByWithAggregationInput = {
    id?: SortOrder
    bookId?: SortOrder
    studentId?: SortOrder
    studentName?: SortOrder
    borrowedAt?: SortOrder
    dueDate?: SortOrder
    returnedAt?: SortOrderInput | SortOrder
    status?: SortOrder
    schoolId?: SortOrder
    _count?: BookBorrowingCountOrderByAggregateInput
    _avg?: BookBorrowingAvgOrderByAggregateInput
    _max?: BookBorrowingMaxOrderByAggregateInput
    _min?: BookBorrowingMinOrderByAggregateInput
    _sum?: BookBorrowingSumOrderByAggregateInput
  }

  export type BookBorrowingScalarWhereWithAggregatesInput = {
    AND?: BookBorrowingScalarWhereWithAggregatesInput | BookBorrowingScalarWhereWithAggregatesInput[]
    OR?: BookBorrowingScalarWhereWithAggregatesInput[]
    NOT?: BookBorrowingScalarWhereWithAggregatesInput | BookBorrowingScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"BookBorrowing"> | number
    bookId?: IntWithAggregatesFilter<"BookBorrowing"> | number
    studentId?: StringWithAggregatesFilter<"BookBorrowing"> | string
    studentName?: StringWithAggregatesFilter<"BookBorrowing"> | string
    borrowedAt?: DateTimeWithAggregatesFilter<"BookBorrowing"> | Date | string
    dueDate?: DateTimeWithAggregatesFilter<"BookBorrowing"> | Date | string
    returnedAt?: DateTimeNullableWithAggregatesFilter<"BookBorrowing"> | Date | string | null
    status?: StringWithAggregatesFilter<"BookBorrowing"> | string
    schoolId?: StringWithAggregatesFilter<"BookBorrowing"> | string
  }

  export type EquipmentWhereInput = {
    AND?: EquipmentWhereInput | EquipmentWhereInput[]
    OR?: EquipmentWhereInput[]
    NOT?: EquipmentWhereInput | EquipmentWhereInput[]
    id?: IntFilter<"Equipment"> | number
    name?: StringFilter<"Equipment"> | string
    description?: StringNullableFilter<"Equipment"> | string | null
    category?: StringFilter<"Equipment"> | string
    serialNumber?: StringNullableFilter<"Equipment"> | string | null
    purchaseDate?: DateTimeNullableFilter<"Equipment"> | Date | string | null
    condition?: StringFilter<"Equipment"> | string
    location?: StringNullableFilter<"Equipment"> | string | null
    assignedTo?: StringNullableFilter<"Equipment"> | string | null
    schoolId?: StringFilter<"Equipment"> | string
    createdAt?: DateTimeFilter<"Equipment"> | Date | string
    updatedAt?: DateTimeFilter<"Equipment"> | Date | string
  }

  export type EquipmentOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    category?: SortOrder
    serialNumber?: SortOrderInput | SortOrder
    purchaseDate?: SortOrderInput | SortOrder
    condition?: SortOrder
    location?: SortOrderInput | SortOrder
    assignedTo?: SortOrderInput | SortOrder
    schoolId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EquipmentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EquipmentWhereInput | EquipmentWhereInput[]
    OR?: EquipmentWhereInput[]
    NOT?: EquipmentWhereInput | EquipmentWhereInput[]
    name?: StringFilter<"Equipment"> | string
    description?: StringNullableFilter<"Equipment"> | string | null
    category?: StringFilter<"Equipment"> | string
    serialNumber?: StringNullableFilter<"Equipment"> | string | null
    purchaseDate?: DateTimeNullableFilter<"Equipment"> | Date | string | null
    condition?: StringFilter<"Equipment"> | string
    location?: StringNullableFilter<"Equipment"> | string | null
    assignedTo?: StringNullableFilter<"Equipment"> | string | null
    schoolId?: StringFilter<"Equipment"> | string
    createdAt?: DateTimeFilter<"Equipment"> | Date | string
    updatedAt?: DateTimeFilter<"Equipment"> | Date | string
  }, "id">

  export type EquipmentOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    category?: SortOrder
    serialNumber?: SortOrderInput | SortOrder
    purchaseDate?: SortOrderInput | SortOrder
    condition?: SortOrder
    location?: SortOrderInput | SortOrder
    assignedTo?: SortOrderInput | SortOrder
    schoolId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EquipmentCountOrderByAggregateInput
    _avg?: EquipmentAvgOrderByAggregateInput
    _max?: EquipmentMaxOrderByAggregateInput
    _min?: EquipmentMinOrderByAggregateInput
    _sum?: EquipmentSumOrderByAggregateInput
  }

  export type EquipmentScalarWhereWithAggregatesInput = {
    AND?: EquipmentScalarWhereWithAggregatesInput | EquipmentScalarWhereWithAggregatesInput[]
    OR?: EquipmentScalarWhereWithAggregatesInput[]
    NOT?: EquipmentScalarWhereWithAggregatesInput | EquipmentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Equipment"> | number
    name?: StringWithAggregatesFilter<"Equipment"> | string
    description?: StringNullableWithAggregatesFilter<"Equipment"> | string | null
    category?: StringWithAggregatesFilter<"Equipment"> | string
    serialNumber?: StringNullableWithAggregatesFilter<"Equipment"> | string | null
    purchaseDate?: DateTimeNullableWithAggregatesFilter<"Equipment"> | Date | string | null
    condition?: StringWithAggregatesFilter<"Equipment"> | string
    location?: StringNullableWithAggregatesFilter<"Equipment"> | string | null
    assignedTo?: StringNullableWithAggregatesFilter<"Equipment"> | string | null
    schoolId?: StringWithAggregatesFilter<"Equipment"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Equipment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Equipment"> | Date | string
  }

  export type ResourceCreateInput = {
    title: string
    description?: string | null
    type: string
    url: string
    size?: number | null
    mimeType?: string | null
    category: string
    subjectId?: number | null
    gradeId?: number | null
    classId?: number | null
    uploadedBy: string
    uploaderName: string
    schoolId: string
    isPublic?: boolean
    downloads?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ResourceUncheckedCreateInput = {
    id?: number
    title: string
    description?: string | null
    type: string
    url: string
    size?: number | null
    mimeType?: string | null
    category: string
    subjectId?: number | null
    gradeId?: number | null
    classId?: number | null
    uploadedBy: string
    uploaderName: string
    schoolId: string
    isPublic?: boolean
    downloads?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ResourceUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    size?: NullableIntFieldUpdateOperationsInput | number | null
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    subjectId?: NullableIntFieldUpdateOperationsInput | number | null
    gradeId?: NullableIntFieldUpdateOperationsInput | number | null
    classId?: NullableIntFieldUpdateOperationsInput | number | null
    uploadedBy?: StringFieldUpdateOperationsInput | string
    uploaderName?: StringFieldUpdateOperationsInput | string
    schoolId?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    downloads?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResourceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    size?: NullableIntFieldUpdateOperationsInput | number | null
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    subjectId?: NullableIntFieldUpdateOperationsInput | number | null
    gradeId?: NullableIntFieldUpdateOperationsInput | number | null
    classId?: NullableIntFieldUpdateOperationsInput | number | null
    uploadedBy?: StringFieldUpdateOperationsInput | string
    uploaderName?: StringFieldUpdateOperationsInput | string
    schoolId?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    downloads?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResourceCreateManyInput = {
    id?: number
    title: string
    description?: string | null
    type: string
    url: string
    size?: number | null
    mimeType?: string | null
    category: string
    subjectId?: number | null
    gradeId?: number | null
    classId?: number | null
    uploadedBy: string
    uploaderName: string
    schoolId: string
    isPublic?: boolean
    downloads?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ResourceUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    size?: NullableIntFieldUpdateOperationsInput | number | null
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    subjectId?: NullableIntFieldUpdateOperationsInput | number | null
    gradeId?: NullableIntFieldUpdateOperationsInput | number | null
    classId?: NullableIntFieldUpdateOperationsInput | number | null
    uploadedBy?: StringFieldUpdateOperationsInput | string
    uploaderName?: StringFieldUpdateOperationsInput | string
    schoolId?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    downloads?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResourceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    size?: NullableIntFieldUpdateOperationsInput | number | null
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    subjectId?: NullableIntFieldUpdateOperationsInput | number | null
    gradeId?: NullableIntFieldUpdateOperationsInput | number | null
    classId?: NullableIntFieldUpdateOperationsInput | number | null
    uploadedBy?: StringFieldUpdateOperationsInput | string
    uploaderName?: StringFieldUpdateOperationsInput | string
    schoolId?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    downloads?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LibraryBookCreateInput = {
    title: string
    author: string
    isbn?: string | null
    publisher?: string | null
    publishYear?: number | null
    category: string
    description?: string | null
    coverImage?: string | null
    totalCopies?: number
    availableCopies?: number
    location?: string | null
    schoolId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    borrowings?: BookBorrowingCreateNestedManyWithoutBookInput
  }

  export type LibraryBookUncheckedCreateInput = {
    id?: number
    title: string
    author: string
    isbn?: string | null
    publisher?: string | null
    publishYear?: number | null
    category: string
    description?: string | null
    coverImage?: string | null
    totalCopies?: number
    availableCopies?: number
    location?: string | null
    schoolId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    borrowings?: BookBorrowingUncheckedCreateNestedManyWithoutBookInput
  }

  export type LibraryBookUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    isbn?: NullableStringFieldUpdateOperationsInput | string | null
    publisher?: NullableStringFieldUpdateOperationsInput | string | null
    publishYear?: NullableIntFieldUpdateOperationsInput | number | null
    category?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    totalCopies?: IntFieldUpdateOperationsInput | number
    availableCopies?: IntFieldUpdateOperationsInput | number
    location?: NullableStringFieldUpdateOperationsInput | string | null
    schoolId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    borrowings?: BookBorrowingUpdateManyWithoutBookNestedInput
  }

  export type LibraryBookUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    isbn?: NullableStringFieldUpdateOperationsInput | string | null
    publisher?: NullableStringFieldUpdateOperationsInput | string | null
    publishYear?: NullableIntFieldUpdateOperationsInput | number | null
    category?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    totalCopies?: IntFieldUpdateOperationsInput | number
    availableCopies?: IntFieldUpdateOperationsInput | number
    location?: NullableStringFieldUpdateOperationsInput | string | null
    schoolId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    borrowings?: BookBorrowingUncheckedUpdateManyWithoutBookNestedInput
  }

  export type LibraryBookCreateManyInput = {
    id?: number
    title: string
    author: string
    isbn?: string | null
    publisher?: string | null
    publishYear?: number | null
    category: string
    description?: string | null
    coverImage?: string | null
    totalCopies?: number
    availableCopies?: number
    location?: string | null
    schoolId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LibraryBookUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    isbn?: NullableStringFieldUpdateOperationsInput | string | null
    publisher?: NullableStringFieldUpdateOperationsInput | string | null
    publishYear?: NullableIntFieldUpdateOperationsInput | number | null
    category?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    totalCopies?: IntFieldUpdateOperationsInput | number
    availableCopies?: IntFieldUpdateOperationsInput | number
    location?: NullableStringFieldUpdateOperationsInput | string | null
    schoolId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LibraryBookUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    isbn?: NullableStringFieldUpdateOperationsInput | string | null
    publisher?: NullableStringFieldUpdateOperationsInput | string | null
    publishYear?: NullableIntFieldUpdateOperationsInput | number | null
    category?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    totalCopies?: IntFieldUpdateOperationsInput | number
    availableCopies?: IntFieldUpdateOperationsInput | number
    location?: NullableStringFieldUpdateOperationsInput | string | null
    schoolId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookBorrowingCreateInput = {
    studentId: string
    studentName: string
    borrowedAt?: Date | string
    dueDate: Date | string
    returnedAt?: Date | string | null
    status?: string
    schoolId: string
    book: LibraryBookCreateNestedOneWithoutBorrowingsInput
  }

  export type BookBorrowingUncheckedCreateInput = {
    id?: number
    bookId: number
    studentId: string
    studentName: string
    borrowedAt?: Date | string
    dueDate: Date | string
    returnedAt?: Date | string | null
    status?: string
    schoolId: string
  }

  export type BookBorrowingUpdateInput = {
    studentId?: StringFieldUpdateOperationsInput | string
    studentName?: StringFieldUpdateOperationsInput | string
    borrowedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    returnedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    schoolId?: StringFieldUpdateOperationsInput | string
    book?: LibraryBookUpdateOneRequiredWithoutBorrowingsNestedInput
  }

  export type BookBorrowingUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    bookId?: IntFieldUpdateOperationsInput | number
    studentId?: StringFieldUpdateOperationsInput | string
    studentName?: StringFieldUpdateOperationsInput | string
    borrowedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    returnedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    schoolId?: StringFieldUpdateOperationsInput | string
  }

  export type BookBorrowingCreateManyInput = {
    id?: number
    bookId: number
    studentId: string
    studentName: string
    borrowedAt?: Date | string
    dueDate: Date | string
    returnedAt?: Date | string | null
    status?: string
    schoolId: string
  }

  export type BookBorrowingUpdateManyMutationInput = {
    studentId?: StringFieldUpdateOperationsInput | string
    studentName?: StringFieldUpdateOperationsInput | string
    borrowedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    returnedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    schoolId?: StringFieldUpdateOperationsInput | string
  }

  export type BookBorrowingUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    bookId?: IntFieldUpdateOperationsInput | number
    studentId?: StringFieldUpdateOperationsInput | string
    studentName?: StringFieldUpdateOperationsInput | string
    borrowedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    returnedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    schoolId?: StringFieldUpdateOperationsInput | string
  }

  export type EquipmentCreateInput = {
    name: string
    description?: string | null
    category: string
    serialNumber?: string | null
    purchaseDate?: Date | string | null
    condition?: string
    location?: string | null
    assignedTo?: string | null
    schoolId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EquipmentUncheckedCreateInput = {
    id?: number
    name: string
    description?: string | null
    category: string
    serialNumber?: string | null
    purchaseDate?: Date | string | null
    condition?: string
    location?: string | null
    assignedTo?: string | null
    schoolId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EquipmentUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    purchaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    condition?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    assignedTo?: NullableStringFieldUpdateOperationsInput | string | null
    schoolId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EquipmentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    purchaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    condition?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    assignedTo?: NullableStringFieldUpdateOperationsInput | string | null
    schoolId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EquipmentCreateManyInput = {
    id?: number
    name: string
    description?: string | null
    category: string
    serialNumber?: string | null
    purchaseDate?: Date | string | null
    condition?: string
    location?: string | null
    assignedTo?: string | null
    schoolId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EquipmentUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    purchaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    condition?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    assignedTo?: NullableStringFieldUpdateOperationsInput | string | null
    schoolId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EquipmentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    purchaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    condition?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    assignedTo?: NullableStringFieldUpdateOperationsInput | string | null
    schoolId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type ResourceCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    type?: SortOrder
    url?: SortOrder
    size?: SortOrder
    mimeType?: SortOrder
    category?: SortOrder
    subjectId?: SortOrder
    gradeId?: SortOrder
    classId?: SortOrder
    uploadedBy?: SortOrder
    uploaderName?: SortOrder
    schoolId?: SortOrder
    isPublic?: SortOrder
    downloads?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ResourceAvgOrderByAggregateInput = {
    id?: SortOrder
    size?: SortOrder
    subjectId?: SortOrder
    gradeId?: SortOrder
    classId?: SortOrder
    downloads?: SortOrder
  }

  export type ResourceMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    type?: SortOrder
    url?: SortOrder
    size?: SortOrder
    mimeType?: SortOrder
    category?: SortOrder
    subjectId?: SortOrder
    gradeId?: SortOrder
    classId?: SortOrder
    uploadedBy?: SortOrder
    uploaderName?: SortOrder
    schoolId?: SortOrder
    isPublic?: SortOrder
    downloads?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ResourceMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    type?: SortOrder
    url?: SortOrder
    size?: SortOrder
    mimeType?: SortOrder
    category?: SortOrder
    subjectId?: SortOrder
    gradeId?: SortOrder
    classId?: SortOrder
    uploadedBy?: SortOrder
    uploaderName?: SortOrder
    schoolId?: SortOrder
    isPublic?: SortOrder
    downloads?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ResourceSumOrderByAggregateInput = {
    id?: SortOrder
    size?: SortOrder
    subjectId?: SortOrder
    gradeId?: SortOrder
    classId?: SortOrder
    downloads?: SortOrder
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

  export type BookBorrowingListRelationFilter = {
    every?: BookBorrowingWhereInput
    some?: BookBorrowingWhereInput
    none?: BookBorrowingWhereInput
  }

  export type BookBorrowingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LibraryBookCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    author?: SortOrder
    isbn?: SortOrder
    publisher?: SortOrder
    publishYear?: SortOrder
    category?: SortOrder
    description?: SortOrder
    coverImage?: SortOrder
    totalCopies?: SortOrder
    availableCopies?: SortOrder
    location?: SortOrder
    schoolId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LibraryBookAvgOrderByAggregateInput = {
    id?: SortOrder
    publishYear?: SortOrder
    totalCopies?: SortOrder
    availableCopies?: SortOrder
  }

  export type LibraryBookMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    author?: SortOrder
    isbn?: SortOrder
    publisher?: SortOrder
    publishYear?: SortOrder
    category?: SortOrder
    description?: SortOrder
    coverImage?: SortOrder
    totalCopies?: SortOrder
    availableCopies?: SortOrder
    location?: SortOrder
    schoolId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LibraryBookMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    author?: SortOrder
    isbn?: SortOrder
    publisher?: SortOrder
    publishYear?: SortOrder
    category?: SortOrder
    description?: SortOrder
    coverImage?: SortOrder
    totalCopies?: SortOrder
    availableCopies?: SortOrder
    location?: SortOrder
    schoolId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LibraryBookSumOrderByAggregateInput = {
    id?: SortOrder
    publishYear?: SortOrder
    totalCopies?: SortOrder
    availableCopies?: SortOrder
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

  export type LibraryBookRelationFilter = {
    is?: LibraryBookWhereInput
    isNot?: LibraryBookWhereInput
  }

  export type BookBorrowingCountOrderByAggregateInput = {
    id?: SortOrder
    bookId?: SortOrder
    studentId?: SortOrder
    studentName?: SortOrder
    borrowedAt?: SortOrder
    dueDate?: SortOrder
    returnedAt?: SortOrder
    status?: SortOrder
    schoolId?: SortOrder
  }

  export type BookBorrowingAvgOrderByAggregateInput = {
    id?: SortOrder
    bookId?: SortOrder
  }

  export type BookBorrowingMaxOrderByAggregateInput = {
    id?: SortOrder
    bookId?: SortOrder
    studentId?: SortOrder
    studentName?: SortOrder
    borrowedAt?: SortOrder
    dueDate?: SortOrder
    returnedAt?: SortOrder
    status?: SortOrder
    schoolId?: SortOrder
  }

  export type BookBorrowingMinOrderByAggregateInput = {
    id?: SortOrder
    bookId?: SortOrder
    studentId?: SortOrder
    studentName?: SortOrder
    borrowedAt?: SortOrder
    dueDate?: SortOrder
    returnedAt?: SortOrder
    status?: SortOrder
    schoolId?: SortOrder
  }

  export type BookBorrowingSumOrderByAggregateInput = {
    id?: SortOrder
    bookId?: SortOrder
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

  export type EquipmentCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    category?: SortOrder
    serialNumber?: SortOrder
    purchaseDate?: SortOrder
    condition?: SortOrder
    location?: SortOrder
    assignedTo?: SortOrder
    schoolId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EquipmentAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EquipmentMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    category?: SortOrder
    serialNumber?: SortOrder
    purchaseDate?: SortOrder
    condition?: SortOrder
    location?: SortOrder
    assignedTo?: SortOrder
    schoolId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EquipmentMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    category?: SortOrder
    serialNumber?: SortOrder
    purchaseDate?: SortOrder
    condition?: SortOrder
    location?: SortOrder
    assignedTo?: SortOrder
    schoolId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EquipmentSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
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

  export type BookBorrowingCreateNestedManyWithoutBookInput = {
    create?: XOR<BookBorrowingCreateWithoutBookInput, BookBorrowingUncheckedCreateWithoutBookInput> | BookBorrowingCreateWithoutBookInput[] | BookBorrowingUncheckedCreateWithoutBookInput[]
    connectOrCreate?: BookBorrowingCreateOrConnectWithoutBookInput | BookBorrowingCreateOrConnectWithoutBookInput[]
    createMany?: BookBorrowingCreateManyBookInputEnvelope
    connect?: BookBorrowingWhereUniqueInput | BookBorrowingWhereUniqueInput[]
  }

  export type BookBorrowingUncheckedCreateNestedManyWithoutBookInput = {
    create?: XOR<BookBorrowingCreateWithoutBookInput, BookBorrowingUncheckedCreateWithoutBookInput> | BookBorrowingCreateWithoutBookInput[] | BookBorrowingUncheckedCreateWithoutBookInput[]
    connectOrCreate?: BookBorrowingCreateOrConnectWithoutBookInput | BookBorrowingCreateOrConnectWithoutBookInput[]
    createMany?: BookBorrowingCreateManyBookInputEnvelope
    connect?: BookBorrowingWhereUniqueInput | BookBorrowingWhereUniqueInput[]
  }

  export type BookBorrowingUpdateManyWithoutBookNestedInput = {
    create?: XOR<BookBorrowingCreateWithoutBookInput, BookBorrowingUncheckedCreateWithoutBookInput> | BookBorrowingCreateWithoutBookInput[] | BookBorrowingUncheckedCreateWithoutBookInput[]
    connectOrCreate?: BookBorrowingCreateOrConnectWithoutBookInput | BookBorrowingCreateOrConnectWithoutBookInput[]
    upsert?: BookBorrowingUpsertWithWhereUniqueWithoutBookInput | BookBorrowingUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: BookBorrowingCreateManyBookInputEnvelope
    set?: BookBorrowingWhereUniqueInput | BookBorrowingWhereUniqueInput[]
    disconnect?: BookBorrowingWhereUniqueInput | BookBorrowingWhereUniqueInput[]
    delete?: BookBorrowingWhereUniqueInput | BookBorrowingWhereUniqueInput[]
    connect?: BookBorrowingWhereUniqueInput | BookBorrowingWhereUniqueInput[]
    update?: BookBorrowingUpdateWithWhereUniqueWithoutBookInput | BookBorrowingUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: BookBorrowingUpdateManyWithWhereWithoutBookInput | BookBorrowingUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: BookBorrowingScalarWhereInput | BookBorrowingScalarWhereInput[]
  }

  export type BookBorrowingUncheckedUpdateManyWithoutBookNestedInput = {
    create?: XOR<BookBorrowingCreateWithoutBookInput, BookBorrowingUncheckedCreateWithoutBookInput> | BookBorrowingCreateWithoutBookInput[] | BookBorrowingUncheckedCreateWithoutBookInput[]
    connectOrCreate?: BookBorrowingCreateOrConnectWithoutBookInput | BookBorrowingCreateOrConnectWithoutBookInput[]
    upsert?: BookBorrowingUpsertWithWhereUniqueWithoutBookInput | BookBorrowingUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: BookBorrowingCreateManyBookInputEnvelope
    set?: BookBorrowingWhereUniqueInput | BookBorrowingWhereUniqueInput[]
    disconnect?: BookBorrowingWhereUniqueInput | BookBorrowingWhereUniqueInput[]
    delete?: BookBorrowingWhereUniqueInput | BookBorrowingWhereUniqueInput[]
    connect?: BookBorrowingWhereUniqueInput | BookBorrowingWhereUniqueInput[]
    update?: BookBorrowingUpdateWithWhereUniqueWithoutBookInput | BookBorrowingUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: BookBorrowingUpdateManyWithWhereWithoutBookInput | BookBorrowingUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: BookBorrowingScalarWhereInput | BookBorrowingScalarWhereInput[]
  }

  export type LibraryBookCreateNestedOneWithoutBorrowingsInput = {
    create?: XOR<LibraryBookCreateWithoutBorrowingsInput, LibraryBookUncheckedCreateWithoutBorrowingsInput>
    connectOrCreate?: LibraryBookCreateOrConnectWithoutBorrowingsInput
    connect?: LibraryBookWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type LibraryBookUpdateOneRequiredWithoutBorrowingsNestedInput = {
    create?: XOR<LibraryBookCreateWithoutBorrowingsInput, LibraryBookUncheckedCreateWithoutBorrowingsInput>
    connectOrCreate?: LibraryBookCreateOrConnectWithoutBorrowingsInput
    upsert?: LibraryBookUpsertWithoutBorrowingsInput
    connect?: LibraryBookWhereUniqueInput
    update?: XOR<XOR<LibraryBookUpdateToOneWithWhereWithoutBorrowingsInput, LibraryBookUpdateWithoutBorrowingsInput>, LibraryBookUncheckedUpdateWithoutBorrowingsInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type BookBorrowingCreateWithoutBookInput = {
    studentId: string
    studentName: string
    borrowedAt?: Date | string
    dueDate: Date | string
    returnedAt?: Date | string | null
    status?: string
    schoolId: string
  }

  export type BookBorrowingUncheckedCreateWithoutBookInput = {
    id?: number
    studentId: string
    studentName: string
    borrowedAt?: Date | string
    dueDate: Date | string
    returnedAt?: Date | string | null
    status?: string
    schoolId: string
  }

  export type BookBorrowingCreateOrConnectWithoutBookInput = {
    where: BookBorrowingWhereUniqueInput
    create: XOR<BookBorrowingCreateWithoutBookInput, BookBorrowingUncheckedCreateWithoutBookInput>
  }

  export type BookBorrowingCreateManyBookInputEnvelope = {
    data: BookBorrowingCreateManyBookInput | BookBorrowingCreateManyBookInput[]
    skipDuplicates?: boolean
  }

  export type BookBorrowingUpsertWithWhereUniqueWithoutBookInput = {
    where: BookBorrowingWhereUniqueInput
    update: XOR<BookBorrowingUpdateWithoutBookInput, BookBorrowingUncheckedUpdateWithoutBookInput>
    create: XOR<BookBorrowingCreateWithoutBookInput, BookBorrowingUncheckedCreateWithoutBookInput>
  }

  export type BookBorrowingUpdateWithWhereUniqueWithoutBookInput = {
    where: BookBorrowingWhereUniqueInput
    data: XOR<BookBorrowingUpdateWithoutBookInput, BookBorrowingUncheckedUpdateWithoutBookInput>
  }

  export type BookBorrowingUpdateManyWithWhereWithoutBookInput = {
    where: BookBorrowingScalarWhereInput
    data: XOR<BookBorrowingUpdateManyMutationInput, BookBorrowingUncheckedUpdateManyWithoutBookInput>
  }

  export type BookBorrowingScalarWhereInput = {
    AND?: BookBorrowingScalarWhereInput | BookBorrowingScalarWhereInput[]
    OR?: BookBorrowingScalarWhereInput[]
    NOT?: BookBorrowingScalarWhereInput | BookBorrowingScalarWhereInput[]
    id?: IntFilter<"BookBorrowing"> | number
    bookId?: IntFilter<"BookBorrowing"> | number
    studentId?: StringFilter<"BookBorrowing"> | string
    studentName?: StringFilter<"BookBorrowing"> | string
    borrowedAt?: DateTimeFilter<"BookBorrowing"> | Date | string
    dueDate?: DateTimeFilter<"BookBorrowing"> | Date | string
    returnedAt?: DateTimeNullableFilter<"BookBorrowing"> | Date | string | null
    status?: StringFilter<"BookBorrowing"> | string
    schoolId?: StringFilter<"BookBorrowing"> | string
  }

  export type LibraryBookCreateWithoutBorrowingsInput = {
    title: string
    author: string
    isbn?: string | null
    publisher?: string | null
    publishYear?: number | null
    category: string
    description?: string | null
    coverImage?: string | null
    totalCopies?: number
    availableCopies?: number
    location?: string | null
    schoolId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LibraryBookUncheckedCreateWithoutBorrowingsInput = {
    id?: number
    title: string
    author: string
    isbn?: string | null
    publisher?: string | null
    publishYear?: number | null
    category: string
    description?: string | null
    coverImage?: string | null
    totalCopies?: number
    availableCopies?: number
    location?: string | null
    schoolId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LibraryBookCreateOrConnectWithoutBorrowingsInput = {
    where: LibraryBookWhereUniqueInput
    create: XOR<LibraryBookCreateWithoutBorrowingsInput, LibraryBookUncheckedCreateWithoutBorrowingsInput>
  }

  export type LibraryBookUpsertWithoutBorrowingsInput = {
    update: XOR<LibraryBookUpdateWithoutBorrowingsInput, LibraryBookUncheckedUpdateWithoutBorrowingsInput>
    create: XOR<LibraryBookCreateWithoutBorrowingsInput, LibraryBookUncheckedCreateWithoutBorrowingsInput>
    where?: LibraryBookWhereInput
  }

  export type LibraryBookUpdateToOneWithWhereWithoutBorrowingsInput = {
    where?: LibraryBookWhereInput
    data: XOR<LibraryBookUpdateWithoutBorrowingsInput, LibraryBookUncheckedUpdateWithoutBorrowingsInput>
  }

  export type LibraryBookUpdateWithoutBorrowingsInput = {
    title?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    isbn?: NullableStringFieldUpdateOperationsInput | string | null
    publisher?: NullableStringFieldUpdateOperationsInput | string | null
    publishYear?: NullableIntFieldUpdateOperationsInput | number | null
    category?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    totalCopies?: IntFieldUpdateOperationsInput | number
    availableCopies?: IntFieldUpdateOperationsInput | number
    location?: NullableStringFieldUpdateOperationsInput | string | null
    schoolId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LibraryBookUncheckedUpdateWithoutBorrowingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    isbn?: NullableStringFieldUpdateOperationsInput | string | null
    publisher?: NullableStringFieldUpdateOperationsInput | string | null
    publishYear?: NullableIntFieldUpdateOperationsInput | number | null
    category?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    totalCopies?: IntFieldUpdateOperationsInput | number
    availableCopies?: IntFieldUpdateOperationsInput | number
    location?: NullableStringFieldUpdateOperationsInput | string | null
    schoolId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookBorrowingCreateManyBookInput = {
    id?: number
    studentId: string
    studentName: string
    borrowedAt?: Date | string
    dueDate: Date | string
    returnedAt?: Date | string | null
    status?: string
    schoolId: string
  }

  export type BookBorrowingUpdateWithoutBookInput = {
    studentId?: StringFieldUpdateOperationsInput | string
    studentName?: StringFieldUpdateOperationsInput | string
    borrowedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    returnedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    schoolId?: StringFieldUpdateOperationsInput | string
  }

  export type BookBorrowingUncheckedUpdateWithoutBookInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: StringFieldUpdateOperationsInput | string
    studentName?: StringFieldUpdateOperationsInput | string
    borrowedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    returnedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    schoolId?: StringFieldUpdateOperationsInput | string
  }

  export type BookBorrowingUncheckedUpdateManyWithoutBookInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: StringFieldUpdateOperationsInput | string
    studentName?: StringFieldUpdateOperationsInput | string
    borrowedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    returnedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    schoolId?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use LibraryBookCountOutputTypeDefaultArgs instead
     */
    export type LibraryBookCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LibraryBookCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ResourceDefaultArgs instead
     */
    export type ResourceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ResourceDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LibraryBookDefaultArgs instead
     */
    export type LibraryBookArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LibraryBookDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BookBorrowingDefaultArgs instead
     */
    export type BookBorrowingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BookBorrowingDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EquipmentDefaultArgs instead
     */
    export type EquipmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EquipmentDefaultArgs<ExtArgs>

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