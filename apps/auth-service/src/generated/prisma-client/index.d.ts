
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
 * Model Admin
 * 
 */
export type Admin = $Result.DefaultSelection<Prisma.$AdminPayload>
/**
 * Model Teacher
 * 
 */
export type Teacher = $Result.DefaultSelection<Prisma.$TeacherPayload>
/**
 * Model Student
 * 
 */
export type Student = $Result.DefaultSelection<Prisma.$StudentPayload>
/**
 * Model Parent
 * 
 */
export type Parent = $Result.DefaultSelection<Prisma.$ParentPayload>
/**
 * Model SchoolManager
 * 
 */
export type SchoolManager = $Result.DefaultSelection<Prisma.$SchoolManagerPayload>
/**
 * Model SuperAdmin
 * 
 */
export type SuperAdmin = $Result.DefaultSelection<Prisma.$SuperAdminPayload>
/**
 * Model PasswordResetToken
 * 
 */
export type PasswordResetToken = $Result.DefaultSelection<Prisma.$PasswordResetTokenPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Admins
 * const admins = await prisma.admin.findMany()
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
   * // Fetch zero or more Admins
   * const admins = await prisma.admin.findMany()
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
   * `prisma.admin`: Exposes CRUD operations for the **Admin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admins
    * const admins = await prisma.admin.findMany()
    * ```
    */
  get admin(): Prisma.AdminDelegate<ExtArgs>;

  /**
   * `prisma.teacher`: Exposes CRUD operations for the **Teacher** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Teachers
    * const teachers = await prisma.teacher.findMany()
    * ```
    */
  get teacher(): Prisma.TeacherDelegate<ExtArgs>;

  /**
   * `prisma.student`: Exposes CRUD operations for the **Student** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Students
    * const students = await prisma.student.findMany()
    * ```
    */
  get student(): Prisma.StudentDelegate<ExtArgs>;

  /**
   * `prisma.parent`: Exposes CRUD operations for the **Parent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Parents
    * const parents = await prisma.parent.findMany()
    * ```
    */
  get parent(): Prisma.ParentDelegate<ExtArgs>;

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
   * `prisma.superAdmin`: Exposes CRUD operations for the **SuperAdmin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SuperAdmins
    * const superAdmins = await prisma.superAdmin.findMany()
    * ```
    */
  get superAdmin(): Prisma.SuperAdminDelegate<ExtArgs>;

  /**
   * `prisma.passwordResetToken`: Exposes CRUD operations for the **PasswordResetToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PasswordResetTokens
    * const passwordResetTokens = await prisma.passwordResetToken.findMany()
    * ```
    */
  get passwordResetToken(): Prisma.PasswordResetTokenDelegate<ExtArgs>;
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
    Admin: 'Admin',
    Teacher: 'Teacher',
    Student: 'Student',
    Parent: 'Parent',
    SchoolManager: 'SchoolManager',
    SuperAdmin: 'SuperAdmin',
    PasswordResetToken: 'PasswordResetToken'
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
      modelProps: "admin" | "teacher" | "student" | "parent" | "schoolManager" | "superAdmin" | "passwordResetToken"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Admin: {
        payload: Prisma.$AdminPayload<ExtArgs>
        fields: Prisma.AdminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findFirst: {
            args: Prisma.AdminFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findMany: {
            args: Prisma.AdminFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          create: {
            args: Prisma.AdminCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          createMany: {
            args: Prisma.AdminCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdminCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          delete: {
            args: Prisma.AdminDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          update: {
            args: Prisma.AdminUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          deleteMany: {
            args: Prisma.AdminDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AdminUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          aggregate: {
            args: Prisma.AdminAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdmin>
          }
          groupBy: {
            args: Prisma.AdminGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminCountArgs<ExtArgs>
            result: $Utils.Optional<AdminCountAggregateOutputType> | number
          }
        }
      }
      Teacher: {
        payload: Prisma.$TeacherPayload<ExtArgs>
        fields: Prisma.TeacherFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TeacherFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TeacherFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>
          }
          findFirst: {
            args: Prisma.TeacherFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TeacherFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>
          }
          findMany: {
            args: Prisma.TeacherFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>[]
          }
          create: {
            args: Prisma.TeacherCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>
          }
          createMany: {
            args: Prisma.TeacherCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TeacherCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>[]
          }
          delete: {
            args: Prisma.TeacherDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>
          }
          update: {
            args: Prisma.TeacherUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>
          }
          deleteMany: {
            args: Prisma.TeacherDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TeacherUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TeacherUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>
          }
          aggregate: {
            args: Prisma.TeacherAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeacher>
          }
          groupBy: {
            args: Prisma.TeacherGroupByArgs<ExtArgs>
            result: $Utils.Optional<TeacherGroupByOutputType>[]
          }
          count: {
            args: Prisma.TeacherCountArgs<ExtArgs>
            result: $Utils.Optional<TeacherCountAggregateOutputType> | number
          }
        }
      }
      Student: {
        payload: Prisma.$StudentPayload<ExtArgs>
        fields: Prisma.StudentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          findFirst: {
            args: Prisma.StudentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          findMany: {
            args: Prisma.StudentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          create: {
            args: Prisma.StudentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          createMany: {
            args: Prisma.StudentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StudentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          delete: {
            args: Prisma.StudentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          update: {
            args: Prisma.StudentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          deleteMany: {
            args: Prisma.StudentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StudentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.StudentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          aggregate: {
            args: Prisma.StudentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudent>
          }
          groupBy: {
            args: Prisma.StudentGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudentGroupByOutputType>[]
          }
          count: {
            args: Prisma.StudentCountArgs<ExtArgs>
            result: $Utils.Optional<StudentCountAggregateOutputType> | number
          }
        }
      }
      Parent: {
        payload: Prisma.$ParentPayload<ExtArgs>
        fields: Prisma.ParentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ParentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ParentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParentPayload>
          }
          findFirst: {
            args: Prisma.ParentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ParentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParentPayload>
          }
          findMany: {
            args: Prisma.ParentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParentPayload>[]
          }
          create: {
            args: Prisma.ParentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParentPayload>
          }
          createMany: {
            args: Prisma.ParentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ParentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParentPayload>[]
          }
          delete: {
            args: Prisma.ParentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParentPayload>
          }
          update: {
            args: Prisma.ParentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParentPayload>
          }
          deleteMany: {
            args: Prisma.ParentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ParentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ParentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParentPayload>
          }
          aggregate: {
            args: Prisma.ParentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateParent>
          }
          groupBy: {
            args: Prisma.ParentGroupByArgs<ExtArgs>
            result: $Utils.Optional<ParentGroupByOutputType>[]
          }
          count: {
            args: Prisma.ParentCountArgs<ExtArgs>
            result: $Utils.Optional<ParentCountAggregateOutputType> | number
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
      SuperAdmin: {
        payload: Prisma.$SuperAdminPayload<ExtArgs>
        fields: Prisma.SuperAdminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SuperAdminFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuperAdminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SuperAdminFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuperAdminPayload>
          }
          findFirst: {
            args: Prisma.SuperAdminFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuperAdminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SuperAdminFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuperAdminPayload>
          }
          findMany: {
            args: Prisma.SuperAdminFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuperAdminPayload>[]
          }
          create: {
            args: Prisma.SuperAdminCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuperAdminPayload>
          }
          createMany: {
            args: Prisma.SuperAdminCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SuperAdminCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuperAdminPayload>[]
          }
          delete: {
            args: Prisma.SuperAdminDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuperAdminPayload>
          }
          update: {
            args: Prisma.SuperAdminUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuperAdminPayload>
          }
          deleteMany: {
            args: Prisma.SuperAdminDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SuperAdminUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SuperAdminUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuperAdminPayload>
          }
          aggregate: {
            args: Prisma.SuperAdminAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSuperAdmin>
          }
          groupBy: {
            args: Prisma.SuperAdminGroupByArgs<ExtArgs>
            result: $Utils.Optional<SuperAdminGroupByOutputType>[]
          }
          count: {
            args: Prisma.SuperAdminCountArgs<ExtArgs>
            result: $Utils.Optional<SuperAdminCountAggregateOutputType> | number
          }
        }
      }
      PasswordResetToken: {
        payload: Prisma.$PasswordResetTokenPayload<ExtArgs>
        fields: Prisma.PasswordResetTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PasswordResetTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PasswordResetTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>
          }
          findFirst: {
            args: Prisma.PasswordResetTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PasswordResetTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>
          }
          findMany: {
            args: Prisma.PasswordResetTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>[]
          }
          create: {
            args: Prisma.PasswordResetTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>
          }
          createMany: {
            args: Prisma.PasswordResetTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PasswordResetTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>[]
          }
          delete: {
            args: Prisma.PasswordResetTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>
          }
          update: {
            args: Prisma.PasswordResetTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>
          }
          deleteMany: {
            args: Prisma.PasswordResetTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PasswordResetTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PasswordResetTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>
          }
          aggregate: {
            args: Prisma.PasswordResetTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePasswordResetToken>
          }
          groupBy: {
            args: Prisma.PasswordResetTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<PasswordResetTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.PasswordResetTokenCountArgs<ExtArgs>
            result: $Utils.Optional<PasswordResetTokenCountAggregateOutputType> | number
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
   * Model Admin
   */

  export type AggregateAdmin = {
    _count: AdminCountAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  export type AdminMinAggregateOutputType = {
    id: string | null
    username: string | null
    password: string | null
    schoolId: string | null
  }

  export type AdminMaxAggregateOutputType = {
    id: string | null
    username: string | null
    password: string | null
    schoolId: string | null
  }

  export type AdminCountAggregateOutputType = {
    id: number
    username: number
    password: number
    schoolId: number
    _all: number
  }


  export type AdminMinAggregateInputType = {
    id?: true
    username?: true
    password?: true
    schoolId?: true
  }

  export type AdminMaxAggregateInputType = {
    id?: true
    username?: true
    password?: true
    schoolId?: true
  }

  export type AdminCountAggregateInputType = {
    id?: true
    username?: true
    password?: true
    schoolId?: true
    _all?: true
  }

  export type AdminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admin to aggregate.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Admins
    **/
    _count?: true | AdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminMaxAggregateInputType
  }

  export type GetAdminAggregateType<T extends AdminAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin[P]>
      : GetScalarType<T[P], AggregateAdmin[P]>
  }




  export type AdminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminWhereInput
    orderBy?: AdminOrderByWithAggregationInput | AdminOrderByWithAggregationInput[]
    by: AdminScalarFieldEnum[] | AdminScalarFieldEnum
    having?: AdminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminCountAggregateInputType | true
    _min?: AdminMinAggregateInputType
    _max?: AdminMaxAggregateInputType
  }

  export type AdminGroupByOutputType = {
    id: string
    username: string
    password: string
    schoolId: string
    _count: AdminCountAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  type GetAdminGroupByPayload<T extends AdminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminGroupByOutputType[P]>
            : GetScalarType<T[P], AdminGroupByOutputType[P]>
        }
      >
    >


  export type AdminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    schoolId?: boolean
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    schoolId?: boolean
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectScalar = {
    id?: boolean
    username?: boolean
    password?: boolean
    schoolId?: boolean
  }


  export type $AdminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Admin"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      password: string
      schoolId: string
    }, ExtArgs["result"]["admin"]>
    composites: {}
  }

  type AdminGetPayload<S extends boolean | null | undefined | AdminDefaultArgs> = $Result.GetResult<Prisma.$AdminPayload, S>

  type AdminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AdminFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AdminCountAggregateInputType | true
    }

  export interface AdminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Admin'], meta: { name: 'Admin' } }
    /**
     * Find zero or one Admin that matches the filter.
     * @param {AdminFindUniqueArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminFindUniqueArgs>(args: SelectSubset<T, AdminFindUniqueArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Admin that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AdminFindUniqueOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Admin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminFindFirstArgs>(args?: SelectSubset<T, AdminFindFirstArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Admin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admins
     * const admins = await prisma.admin.findMany()
     * 
     * // Get first 10 Admins
     * const admins = await prisma.admin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminWithIdOnly = await prisma.admin.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdminFindManyArgs>(args?: SelectSubset<T, AdminFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Admin.
     * @param {AdminCreateArgs} args - Arguments to create a Admin.
     * @example
     * // Create one Admin
     * const Admin = await prisma.admin.create({
     *   data: {
     *     // ... data to create a Admin
     *   }
     * })
     * 
     */
    create<T extends AdminCreateArgs>(args: SelectSubset<T, AdminCreateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Admins.
     * @param {AdminCreateManyArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminCreateManyArgs>(args?: SelectSubset<T, AdminCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Admins and returns the data saved in the database.
     * @param {AdminCreateManyAndReturnArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Admins and only return the `id`
     * const adminWithIdOnly = await prisma.admin.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdminCreateManyAndReturnArgs>(args?: SelectSubset<T, AdminCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Admin.
     * @param {AdminDeleteArgs} args - Arguments to delete one Admin.
     * @example
     * // Delete one Admin
     * const Admin = await prisma.admin.delete({
     *   where: {
     *     // ... filter to delete one Admin
     *   }
     * })
     * 
     */
    delete<T extends AdminDeleteArgs>(args: SelectSubset<T, AdminDeleteArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Admin.
     * @param {AdminUpdateArgs} args - Arguments to update one Admin.
     * @example
     * // Update one Admin
     * const admin = await prisma.admin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminUpdateArgs>(args: SelectSubset<T, AdminUpdateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Admins.
     * @param {AdminDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminDeleteManyArgs>(args?: SelectSubset<T, AdminDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminUpdateManyArgs>(args: SelectSubset<T, AdminUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Admin.
     * @param {AdminUpsertArgs} args - Arguments to update or create a Admin.
     * @example
     * // Update or create a Admin
     * const admin = await prisma.admin.upsert({
     *   create: {
     *     // ... data to create a Admin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin we want to update
     *   }
     * })
     */
    upsert<T extends AdminUpsertArgs>(args: SelectSubset<T, AdminUpsertArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admin.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
    **/
    count<T extends AdminCountArgs>(
      args?: Subset<T, AdminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdminAggregateArgs>(args: Subset<T, AdminAggregateArgs>): Prisma.PrismaPromise<GetAdminAggregateType<T>>

    /**
     * Group by Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminGroupByArgs} args - Group by arguments.
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
      T extends AdminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminGroupByArgs['orderBy'] }
        : { orderBy?: AdminGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AdminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Admin model
   */
  readonly fields: AdminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Admin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Admin model
   */ 
  interface AdminFieldRefs {
    readonly id: FieldRef<"Admin", 'String'>
    readonly username: FieldRef<"Admin", 'String'>
    readonly password: FieldRef<"Admin", 'String'>
    readonly schoolId: FieldRef<"Admin", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Admin findUnique
   */
  export type AdminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findUniqueOrThrow
   */
  export type AdminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findFirst
   */
  export type AdminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findFirstOrThrow
   */
  export type AdminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findMany
   */
  export type AdminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Filter, which Admins to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin create
   */
  export type AdminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * The data needed to create a Admin.
     */
    data: XOR<AdminCreateInput, AdminUncheckedCreateInput>
  }

  /**
   * Admin createMany
   */
  export type AdminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Admin createManyAndReturn
   */
  export type AdminCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Admin update
   */
  export type AdminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * The data needed to update a Admin.
     */
    data: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
    /**
     * Choose, which Admin to update.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin updateMany
   */
  export type AdminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
  }

  /**
   * Admin upsert
   */
  export type AdminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * The filter to search for the Admin to update in case it exists.
     */
    where: AdminWhereUniqueInput
    /**
     * In case the Admin found by the `where` argument doesn't exist, create a new Admin with this data.
     */
    create: XOR<AdminCreateInput, AdminUncheckedCreateInput>
    /**
     * In case the Admin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
  }

  /**
   * Admin delete
   */
  export type AdminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Filter which Admin to delete.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin deleteMany
   */
  export type AdminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admins to delete
     */
    where?: AdminWhereInput
  }

  /**
   * Admin without action
   */
  export type AdminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
  }


  /**
   * Model Teacher
   */

  export type AggregateTeacher = {
    _count: TeacherCountAggregateOutputType | null
    _min: TeacherMinAggregateOutputType | null
    _max: TeacherMaxAggregateOutputType | null
  }

  export type TeacherMinAggregateOutputType = {
    id: string | null
    username: string | null
    password: string | null
    schoolId: string | null
  }

  export type TeacherMaxAggregateOutputType = {
    id: string | null
    username: string | null
    password: string | null
    schoolId: string | null
  }

  export type TeacherCountAggregateOutputType = {
    id: number
    username: number
    password: number
    schoolId: number
    _all: number
  }


  export type TeacherMinAggregateInputType = {
    id?: true
    username?: true
    password?: true
    schoolId?: true
  }

  export type TeacherMaxAggregateInputType = {
    id?: true
    username?: true
    password?: true
    schoolId?: true
  }

  export type TeacherCountAggregateInputType = {
    id?: true
    username?: true
    password?: true
    schoolId?: true
    _all?: true
  }

  export type TeacherAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Teacher to aggregate.
     */
    where?: TeacherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teachers to fetch.
     */
    orderBy?: TeacherOrderByWithRelationInput | TeacherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TeacherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teachers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teachers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Teachers
    **/
    _count?: true | TeacherCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeacherMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeacherMaxAggregateInputType
  }

  export type GetTeacherAggregateType<T extends TeacherAggregateArgs> = {
        [P in keyof T & keyof AggregateTeacher]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeacher[P]>
      : GetScalarType<T[P], AggregateTeacher[P]>
  }




  export type TeacherGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeacherWhereInput
    orderBy?: TeacherOrderByWithAggregationInput | TeacherOrderByWithAggregationInput[]
    by: TeacherScalarFieldEnum[] | TeacherScalarFieldEnum
    having?: TeacherScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeacherCountAggregateInputType | true
    _min?: TeacherMinAggregateInputType
    _max?: TeacherMaxAggregateInputType
  }

  export type TeacherGroupByOutputType = {
    id: string
    username: string
    password: string
    schoolId: string
    _count: TeacherCountAggregateOutputType | null
    _min: TeacherMinAggregateOutputType | null
    _max: TeacherMaxAggregateOutputType | null
  }

  type GetTeacherGroupByPayload<T extends TeacherGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeacherGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeacherGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeacherGroupByOutputType[P]>
            : GetScalarType<T[P], TeacherGroupByOutputType[P]>
        }
      >
    >


  export type TeacherSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    schoolId?: boolean
  }, ExtArgs["result"]["teacher"]>

  export type TeacherSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    schoolId?: boolean
  }, ExtArgs["result"]["teacher"]>

  export type TeacherSelectScalar = {
    id?: boolean
    username?: boolean
    password?: boolean
    schoolId?: boolean
  }


  export type $TeacherPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Teacher"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      password: string
      schoolId: string
    }, ExtArgs["result"]["teacher"]>
    composites: {}
  }

  type TeacherGetPayload<S extends boolean | null | undefined | TeacherDefaultArgs> = $Result.GetResult<Prisma.$TeacherPayload, S>

  type TeacherCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TeacherFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TeacherCountAggregateInputType | true
    }

  export interface TeacherDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Teacher'], meta: { name: 'Teacher' } }
    /**
     * Find zero or one Teacher that matches the filter.
     * @param {TeacherFindUniqueArgs} args - Arguments to find a Teacher
     * @example
     * // Get one Teacher
     * const teacher = await prisma.teacher.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TeacherFindUniqueArgs>(args: SelectSubset<T, TeacherFindUniqueArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Teacher that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TeacherFindUniqueOrThrowArgs} args - Arguments to find a Teacher
     * @example
     * // Get one Teacher
     * const teacher = await prisma.teacher.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TeacherFindUniqueOrThrowArgs>(args: SelectSubset<T, TeacherFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Teacher that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherFindFirstArgs} args - Arguments to find a Teacher
     * @example
     * // Get one Teacher
     * const teacher = await prisma.teacher.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TeacherFindFirstArgs>(args?: SelectSubset<T, TeacherFindFirstArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Teacher that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherFindFirstOrThrowArgs} args - Arguments to find a Teacher
     * @example
     * // Get one Teacher
     * const teacher = await prisma.teacher.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TeacherFindFirstOrThrowArgs>(args?: SelectSubset<T, TeacherFindFirstOrThrowArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Teachers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Teachers
     * const teachers = await prisma.teacher.findMany()
     * 
     * // Get first 10 Teachers
     * const teachers = await prisma.teacher.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teacherWithIdOnly = await prisma.teacher.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TeacherFindManyArgs>(args?: SelectSubset<T, TeacherFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Teacher.
     * @param {TeacherCreateArgs} args - Arguments to create a Teacher.
     * @example
     * // Create one Teacher
     * const Teacher = await prisma.teacher.create({
     *   data: {
     *     // ... data to create a Teacher
     *   }
     * })
     * 
     */
    create<T extends TeacherCreateArgs>(args: SelectSubset<T, TeacherCreateArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Teachers.
     * @param {TeacherCreateManyArgs} args - Arguments to create many Teachers.
     * @example
     * // Create many Teachers
     * const teacher = await prisma.teacher.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TeacherCreateManyArgs>(args?: SelectSubset<T, TeacherCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Teachers and returns the data saved in the database.
     * @param {TeacherCreateManyAndReturnArgs} args - Arguments to create many Teachers.
     * @example
     * // Create many Teachers
     * const teacher = await prisma.teacher.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Teachers and only return the `id`
     * const teacherWithIdOnly = await prisma.teacher.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TeacherCreateManyAndReturnArgs>(args?: SelectSubset<T, TeacherCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Teacher.
     * @param {TeacherDeleteArgs} args - Arguments to delete one Teacher.
     * @example
     * // Delete one Teacher
     * const Teacher = await prisma.teacher.delete({
     *   where: {
     *     // ... filter to delete one Teacher
     *   }
     * })
     * 
     */
    delete<T extends TeacherDeleteArgs>(args: SelectSubset<T, TeacherDeleteArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Teacher.
     * @param {TeacherUpdateArgs} args - Arguments to update one Teacher.
     * @example
     * // Update one Teacher
     * const teacher = await prisma.teacher.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TeacherUpdateArgs>(args: SelectSubset<T, TeacherUpdateArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Teachers.
     * @param {TeacherDeleteManyArgs} args - Arguments to filter Teachers to delete.
     * @example
     * // Delete a few Teachers
     * const { count } = await prisma.teacher.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TeacherDeleteManyArgs>(args?: SelectSubset<T, TeacherDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teachers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Teachers
     * const teacher = await prisma.teacher.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TeacherUpdateManyArgs>(args: SelectSubset<T, TeacherUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Teacher.
     * @param {TeacherUpsertArgs} args - Arguments to update or create a Teacher.
     * @example
     * // Update or create a Teacher
     * const teacher = await prisma.teacher.upsert({
     *   create: {
     *     // ... data to create a Teacher
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Teacher we want to update
     *   }
     * })
     */
    upsert<T extends TeacherUpsertArgs>(args: SelectSubset<T, TeacherUpsertArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Teachers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherCountArgs} args - Arguments to filter Teachers to count.
     * @example
     * // Count the number of Teachers
     * const count = await prisma.teacher.count({
     *   where: {
     *     // ... the filter for the Teachers we want to count
     *   }
     * })
    **/
    count<T extends TeacherCountArgs>(
      args?: Subset<T, TeacherCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeacherCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Teacher.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TeacherAggregateArgs>(args: Subset<T, TeacherAggregateArgs>): Prisma.PrismaPromise<GetTeacherAggregateType<T>>

    /**
     * Group by Teacher.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherGroupByArgs} args - Group by arguments.
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
      T extends TeacherGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeacherGroupByArgs['orderBy'] }
        : { orderBy?: TeacherGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TeacherGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeacherGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Teacher model
   */
  readonly fields: TeacherFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Teacher.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TeacherClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Teacher model
   */ 
  interface TeacherFieldRefs {
    readonly id: FieldRef<"Teacher", 'String'>
    readonly username: FieldRef<"Teacher", 'String'>
    readonly password: FieldRef<"Teacher", 'String'>
    readonly schoolId: FieldRef<"Teacher", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Teacher findUnique
   */
  export type TeacherFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Filter, which Teacher to fetch.
     */
    where: TeacherWhereUniqueInput
  }

  /**
   * Teacher findUniqueOrThrow
   */
  export type TeacherFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Filter, which Teacher to fetch.
     */
    where: TeacherWhereUniqueInput
  }

  /**
   * Teacher findFirst
   */
  export type TeacherFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Filter, which Teacher to fetch.
     */
    where?: TeacherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teachers to fetch.
     */
    orderBy?: TeacherOrderByWithRelationInput | TeacherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teachers.
     */
    cursor?: TeacherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teachers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teachers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teachers.
     */
    distinct?: TeacherScalarFieldEnum | TeacherScalarFieldEnum[]
  }

  /**
   * Teacher findFirstOrThrow
   */
  export type TeacherFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Filter, which Teacher to fetch.
     */
    where?: TeacherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teachers to fetch.
     */
    orderBy?: TeacherOrderByWithRelationInput | TeacherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teachers.
     */
    cursor?: TeacherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teachers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teachers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teachers.
     */
    distinct?: TeacherScalarFieldEnum | TeacherScalarFieldEnum[]
  }

  /**
   * Teacher findMany
   */
  export type TeacherFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Filter, which Teachers to fetch.
     */
    where?: TeacherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teachers to fetch.
     */
    orderBy?: TeacherOrderByWithRelationInput | TeacherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Teachers.
     */
    cursor?: TeacherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teachers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teachers.
     */
    skip?: number
    distinct?: TeacherScalarFieldEnum | TeacherScalarFieldEnum[]
  }

  /**
   * Teacher create
   */
  export type TeacherCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * The data needed to create a Teacher.
     */
    data: XOR<TeacherCreateInput, TeacherUncheckedCreateInput>
  }

  /**
   * Teacher createMany
   */
  export type TeacherCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Teachers.
     */
    data: TeacherCreateManyInput | TeacherCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Teacher createManyAndReturn
   */
  export type TeacherCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Teachers.
     */
    data: TeacherCreateManyInput | TeacherCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Teacher update
   */
  export type TeacherUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * The data needed to update a Teacher.
     */
    data: XOR<TeacherUpdateInput, TeacherUncheckedUpdateInput>
    /**
     * Choose, which Teacher to update.
     */
    where: TeacherWhereUniqueInput
  }

  /**
   * Teacher updateMany
   */
  export type TeacherUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Teachers.
     */
    data: XOR<TeacherUpdateManyMutationInput, TeacherUncheckedUpdateManyInput>
    /**
     * Filter which Teachers to update
     */
    where?: TeacherWhereInput
  }

  /**
   * Teacher upsert
   */
  export type TeacherUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * The filter to search for the Teacher to update in case it exists.
     */
    where: TeacherWhereUniqueInput
    /**
     * In case the Teacher found by the `where` argument doesn't exist, create a new Teacher with this data.
     */
    create: XOR<TeacherCreateInput, TeacherUncheckedCreateInput>
    /**
     * In case the Teacher was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TeacherUpdateInput, TeacherUncheckedUpdateInput>
  }

  /**
   * Teacher delete
   */
  export type TeacherDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Filter which Teacher to delete.
     */
    where: TeacherWhereUniqueInput
  }

  /**
   * Teacher deleteMany
   */
  export type TeacherDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Teachers to delete
     */
    where?: TeacherWhereInput
  }

  /**
   * Teacher without action
   */
  export type TeacherDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
  }


  /**
   * Model Student
   */

  export type AggregateStudent = {
    _count: StudentCountAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  export type StudentMinAggregateOutputType = {
    id: string | null
    username: string | null
    password: string | null
    schoolId: string | null
  }

  export type StudentMaxAggregateOutputType = {
    id: string | null
    username: string | null
    password: string | null
    schoolId: string | null
  }

  export type StudentCountAggregateOutputType = {
    id: number
    username: number
    password: number
    schoolId: number
    _all: number
  }


  export type StudentMinAggregateInputType = {
    id?: true
    username?: true
    password?: true
    schoolId?: true
  }

  export type StudentMaxAggregateInputType = {
    id?: true
    username?: true
    password?: true
    schoolId?: true
  }

  export type StudentCountAggregateInputType = {
    id?: true
    username?: true
    password?: true
    schoolId?: true
    _all?: true
  }

  export type StudentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Student to aggregate.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Students
    **/
    _count?: true | StudentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentMaxAggregateInputType
  }

  export type GetStudentAggregateType<T extends StudentAggregateArgs> = {
        [P in keyof T & keyof AggregateStudent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudent[P]>
      : GetScalarType<T[P], AggregateStudent[P]>
  }




  export type StudentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentWhereInput
    orderBy?: StudentOrderByWithAggregationInput | StudentOrderByWithAggregationInput[]
    by: StudentScalarFieldEnum[] | StudentScalarFieldEnum
    having?: StudentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentCountAggregateInputType | true
    _min?: StudentMinAggregateInputType
    _max?: StudentMaxAggregateInputType
  }

  export type StudentGroupByOutputType = {
    id: string
    username: string
    password: string
    schoolId: string
    _count: StudentCountAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  type GetStudentGroupByPayload<T extends StudentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentGroupByOutputType[P]>
            : GetScalarType<T[P], StudentGroupByOutputType[P]>
        }
      >
    >


  export type StudentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    schoolId?: boolean
  }, ExtArgs["result"]["student"]>

  export type StudentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    schoolId?: boolean
  }, ExtArgs["result"]["student"]>

  export type StudentSelectScalar = {
    id?: boolean
    username?: boolean
    password?: boolean
    schoolId?: boolean
  }


  export type $StudentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Student"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      password: string
      schoolId: string
    }, ExtArgs["result"]["student"]>
    composites: {}
  }

  type StudentGetPayload<S extends boolean | null | undefined | StudentDefaultArgs> = $Result.GetResult<Prisma.$StudentPayload, S>

  type StudentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<StudentFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: StudentCountAggregateInputType | true
    }

  export interface StudentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Student'], meta: { name: 'Student' } }
    /**
     * Find zero or one Student that matches the filter.
     * @param {StudentFindUniqueArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StudentFindUniqueArgs>(args: SelectSubset<T, StudentFindUniqueArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Student that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {StudentFindUniqueOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StudentFindUniqueOrThrowArgs>(args: SelectSubset<T, StudentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Student that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindFirstArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StudentFindFirstArgs>(args?: SelectSubset<T, StudentFindFirstArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Student that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindFirstOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StudentFindFirstOrThrowArgs>(args?: SelectSubset<T, StudentFindFirstOrThrowArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Students that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Students
     * const students = await prisma.student.findMany()
     * 
     * // Get first 10 Students
     * const students = await prisma.student.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studentWithIdOnly = await prisma.student.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StudentFindManyArgs>(args?: SelectSubset<T, StudentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Student.
     * @param {StudentCreateArgs} args - Arguments to create a Student.
     * @example
     * // Create one Student
     * const Student = await prisma.student.create({
     *   data: {
     *     // ... data to create a Student
     *   }
     * })
     * 
     */
    create<T extends StudentCreateArgs>(args: SelectSubset<T, StudentCreateArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Students.
     * @param {StudentCreateManyArgs} args - Arguments to create many Students.
     * @example
     * // Create many Students
     * const student = await prisma.student.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StudentCreateManyArgs>(args?: SelectSubset<T, StudentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Students and returns the data saved in the database.
     * @param {StudentCreateManyAndReturnArgs} args - Arguments to create many Students.
     * @example
     * // Create many Students
     * const student = await prisma.student.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Students and only return the `id`
     * const studentWithIdOnly = await prisma.student.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StudentCreateManyAndReturnArgs>(args?: SelectSubset<T, StudentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Student.
     * @param {StudentDeleteArgs} args - Arguments to delete one Student.
     * @example
     * // Delete one Student
     * const Student = await prisma.student.delete({
     *   where: {
     *     // ... filter to delete one Student
     *   }
     * })
     * 
     */
    delete<T extends StudentDeleteArgs>(args: SelectSubset<T, StudentDeleteArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Student.
     * @param {StudentUpdateArgs} args - Arguments to update one Student.
     * @example
     * // Update one Student
     * const student = await prisma.student.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StudentUpdateArgs>(args: SelectSubset<T, StudentUpdateArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Students.
     * @param {StudentDeleteManyArgs} args - Arguments to filter Students to delete.
     * @example
     * // Delete a few Students
     * const { count } = await prisma.student.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StudentDeleteManyArgs>(args?: SelectSubset<T, StudentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Students
     * const student = await prisma.student.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StudentUpdateManyArgs>(args: SelectSubset<T, StudentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Student.
     * @param {StudentUpsertArgs} args - Arguments to update or create a Student.
     * @example
     * // Update or create a Student
     * const student = await prisma.student.upsert({
     *   create: {
     *     // ... data to create a Student
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Student we want to update
     *   }
     * })
     */
    upsert<T extends StudentUpsertArgs>(args: SelectSubset<T, StudentUpsertArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentCountArgs} args - Arguments to filter Students to count.
     * @example
     * // Count the number of Students
     * const count = await prisma.student.count({
     *   where: {
     *     // ... the filter for the Students we want to count
     *   }
     * })
    **/
    count<T extends StudentCountArgs>(
      args?: Subset<T, StudentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StudentAggregateArgs>(args: Subset<T, StudentAggregateArgs>): Prisma.PrismaPromise<GetStudentAggregateType<T>>

    /**
     * Group by Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentGroupByArgs} args - Group by arguments.
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
      T extends StudentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudentGroupByArgs['orderBy'] }
        : { orderBy?: StudentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StudentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Student model
   */
  readonly fields: StudentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Student.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Student model
   */ 
  interface StudentFieldRefs {
    readonly id: FieldRef<"Student", 'String'>
    readonly username: FieldRef<"Student", 'String'>
    readonly password: FieldRef<"Student", 'String'>
    readonly schoolId: FieldRef<"Student", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Student findUnique
   */
  export type StudentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student findUniqueOrThrow
   */
  export type StudentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student findFirst
   */
  export type StudentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student findFirstOrThrow
   */
  export type StudentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student findMany
   */
  export type StudentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Filter, which Students to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student create
   */
  export type StudentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * The data needed to create a Student.
     */
    data: XOR<StudentCreateInput, StudentUncheckedCreateInput>
  }

  /**
   * Student createMany
   */
  export type StudentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Students.
     */
    data: StudentCreateManyInput | StudentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Student createManyAndReturn
   */
  export type StudentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Students.
     */
    data: StudentCreateManyInput | StudentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Student update
   */
  export type StudentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * The data needed to update a Student.
     */
    data: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>
    /**
     * Choose, which Student to update.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student updateMany
   */
  export type StudentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Students.
     */
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyInput>
    /**
     * Filter which Students to update
     */
    where?: StudentWhereInput
  }

  /**
   * Student upsert
   */
  export type StudentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * The filter to search for the Student to update in case it exists.
     */
    where: StudentWhereUniqueInput
    /**
     * In case the Student found by the `where` argument doesn't exist, create a new Student with this data.
     */
    create: XOR<StudentCreateInput, StudentUncheckedCreateInput>
    /**
     * In case the Student was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>
  }

  /**
   * Student delete
   */
  export type StudentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Filter which Student to delete.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student deleteMany
   */
  export type StudentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Students to delete
     */
    where?: StudentWhereInput
  }

  /**
   * Student without action
   */
  export type StudentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
  }


  /**
   * Model Parent
   */

  export type AggregateParent = {
    _count: ParentCountAggregateOutputType | null
    _min: ParentMinAggregateOutputType | null
    _max: ParentMaxAggregateOutputType | null
  }

  export type ParentMinAggregateOutputType = {
    id: string | null
    username: string | null
    password: string | null
    schoolId: string | null
  }

  export type ParentMaxAggregateOutputType = {
    id: string | null
    username: string | null
    password: string | null
    schoolId: string | null
  }

  export type ParentCountAggregateOutputType = {
    id: number
    username: number
    password: number
    schoolId: number
    _all: number
  }


  export type ParentMinAggregateInputType = {
    id?: true
    username?: true
    password?: true
    schoolId?: true
  }

  export type ParentMaxAggregateInputType = {
    id?: true
    username?: true
    password?: true
    schoolId?: true
  }

  export type ParentCountAggregateInputType = {
    id?: true
    username?: true
    password?: true
    schoolId?: true
    _all?: true
  }

  export type ParentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Parent to aggregate.
     */
    where?: ParentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parents to fetch.
     */
    orderBy?: ParentOrderByWithRelationInput | ParentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ParentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Parents
    **/
    _count?: true | ParentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ParentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ParentMaxAggregateInputType
  }

  export type GetParentAggregateType<T extends ParentAggregateArgs> = {
        [P in keyof T & keyof AggregateParent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateParent[P]>
      : GetScalarType<T[P], AggregateParent[P]>
  }




  export type ParentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParentWhereInput
    orderBy?: ParentOrderByWithAggregationInput | ParentOrderByWithAggregationInput[]
    by: ParentScalarFieldEnum[] | ParentScalarFieldEnum
    having?: ParentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ParentCountAggregateInputType | true
    _min?: ParentMinAggregateInputType
    _max?: ParentMaxAggregateInputType
  }

  export type ParentGroupByOutputType = {
    id: string
    username: string
    password: string
    schoolId: string
    _count: ParentCountAggregateOutputType | null
    _min: ParentMinAggregateOutputType | null
    _max: ParentMaxAggregateOutputType | null
  }

  type GetParentGroupByPayload<T extends ParentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ParentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ParentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ParentGroupByOutputType[P]>
            : GetScalarType<T[P], ParentGroupByOutputType[P]>
        }
      >
    >


  export type ParentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    schoolId?: boolean
  }, ExtArgs["result"]["parent"]>

  export type ParentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    schoolId?: boolean
  }, ExtArgs["result"]["parent"]>

  export type ParentSelectScalar = {
    id?: boolean
    username?: boolean
    password?: boolean
    schoolId?: boolean
  }


  export type $ParentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Parent"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      password: string
      schoolId: string
    }, ExtArgs["result"]["parent"]>
    composites: {}
  }

  type ParentGetPayload<S extends boolean | null | undefined | ParentDefaultArgs> = $Result.GetResult<Prisma.$ParentPayload, S>

  type ParentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ParentFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ParentCountAggregateInputType | true
    }

  export interface ParentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Parent'], meta: { name: 'Parent' } }
    /**
     * Find zero or one Parent that matches the filter.
     * @param {ParentFindUniqueArgs} args - Arguments to find a Parent
     * @example
     * // Get one Parent
     * const parent = await prisma.parent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ParentFindUniqueArgs>(args: SelectSubset<T, ParentFindUniqueArgs<ExtArgs>>): Prisma__ParentClient<$Result.GetResult<Prisma.$ParentPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Parent that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ParentFindUniqueOrThrowArgs} args - Arguments to find a Parent
     * @example
     * // Get one Parent
     * const parent = await prisma.parent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ParentFindUniqueOrThrowArgs>(args: SelectSubset<T, ParentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ParentClient<$Result.GetResult<Prisma.$ParentPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Parent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParentFindFirstArgs} args - Arguments to find a Parent
     * @example
     * // Get one Parent
     * const parent = await prisma.parent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ParentFindFirstArgs>(args?: SelectSubset<T, ParentFindFirstArgs<ExtArgs>>): Prisma__ParentClient<$Result.GetResult<Prisma.$ParentPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Parent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParentFindFirstOrThrowArgs} args - Arguments to find a Parent
     * @example
     * // Get one Parent
     * const parent = await prisma.parent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ParentFindFirstOrThrowArgs>(args?: SelectSubset<T, ParentFindFirstOrThrowArgs<ExtArgs>>): Prisma__ParentClient<$Result.GetResult<Prisma.$ParentPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Parents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Parents
     * const parents = await prisma.parent.findMany()
     * 
     * // Get first 10 Parents
     * const parents = await prisma.parent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const parentWithIdOnly = await prisma.parent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ParentFindManyArgs>(args?: SelectSubset<T, ParentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParentPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Parent.
     * @param {ParentCreateArgs} args - Arguments to create a Parent.
     * @example
     * // Create one Parent
     * const Parent = await prisma.parent.create({
     *   data: {
     *     // ... data to create a Parent
     *   }
     * })
     * 
     */
    create<T extends ParentCreateArgs>(args: SelectSubset<T, ParentCreateArgs<ExtArgs>>): Prisma__ParentClient<$Result.GetResult<Prisma.$ParentPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Parents.
     * @param {ParentCreateManyArgs} args - Arguments to create many Parents.
     * @example
     * // Create many Parents
     * const parent = await prisma.parent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ParentCreateManyArgs>(args?: SelectSubset<T, ParentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Parents and returns the data saved in the database.
     * @param {ParentCreateManyAndReturnArgs} args - Arguments to create many Parents.
     * @example
     * // Create many Parents
     * const parent = await prisma.parent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Parents and only return the `id`
     * const parentWithIdOnly = await prisma.parent.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ParentCreateManyAndReturnArgs>(args?: SelectSubset<T, ParentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParentPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Parent.
     * @param {ParentDeleteArgs} args - Arguments to delete one Parent.
     * @example
     * // Delete one Parent
     * const Parent = await prisma.parent.delete({
     *   where: {
     *     // ... filter to delete one Parent
     *   }
     * })
     * 
     */
    delete<T extends ParentDeleteArgs>(args: SelectSubset<T, ParentDeleteArgs<ExtArgs>>): Prisma__ParentClient<$Result.GetResult<Prisma.$ParentPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Parent.
     * @param {ParentUpdateArgs} args - Arguments to update one Parent.
     * @example
     * // Update one Parent
     * const parent = await prisma.parent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ParentUpdateArgs>(args: SelectSubset<T, ParentUpdateArgs<ExtArgs>>): Prisma__ParentClient<$Result.GetResult<Prisma.$ParentPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Parents.
     * @param {ParentDeleteManyArgs} args - Arguments to filter Parents to delete.
     * @example
     * // Delete a few Parents
     * const { count } = await prisma.parent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ParentDeleteManyArgs>(args?: SelectSubset<T, ParentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Parents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Parents
     * const parent = await prisma.parent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ParentUpdateManyArgs>(args: SelectSubset<T, ParentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Parent.
     * @param {ParentUpsertArgs} args - Arguments to update or create a Parent.
     * @example
     * // Update or create a Parent
     * const parent = await prisma.parent.upsert({
     *   create: {
     *     // ... data to create a Parent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Parent we want to update
     *   }
     * })
     */
    upsert<T extends ParentUpsertArgs>(args: SelectSubset<T, ParentUpsertArgs<ExtArgs>>): Prisma__ParentClient<$Result.GetResult<Prisma.$ParentPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Parents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParentCountArgs} args - Arguments to filter Parents to count.
     * @example
     * // Count the number of Parents
     * const count = await prisma.parent.count({
     *   where: {
     *     // ... the filter for the Parents we want to count
     *   }
     * })
    **/
    count<T extends ParentCountArgs>(
      args?: Subset<T, ParentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ParentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Parent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ParentAggregateArgs>(args: Subset<T, ParentAggregateArgs>): Prisma.PrismaPromise<GetParentAggregateType<T>>

    /**
     * Group by Parent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParentGroupByArgs} args - Group by arguments.
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
      T extends ParentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ParentGroupByArgs['orderBy'] }
        : { orderBy?: ParentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ParentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetParentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Parent model
   */
  readonly fields: ParentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Parent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ParentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Parent model
   */ 
  interface ParentFieldRefs {
    readonly id: FieldRef<"Parent", 'String'>
    readonly username: FieldRef<"Parent", 'String'>
    readonly password: FieldRef<"Parent", 'String'>
    readonly schoolId: FieldRef<"Parent", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Parent findUnique
   */
  export type ParentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parent
     */
    select?: ParentSelect<ExtArgs> | null
    /**
     * Filter, which Parent to fetch.
     */
    where: ParentWhereUniqueInput
  }

  /**
   * Parent findUniqueOrThrow
   */
  export type ParentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parent
     */
    select?: ParentSelect<ExtArgs> | null
    /**
     * Filter, which Parent to fetch.
     */
    where: ParentWhereUniqueInput
  }

  /**
   * Parent findFirst
   */
  export type ParentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parent
     */
    select?: ParentSelect<ExtArgs> | null
    /**
     * Filter, which Parent to fetch.
     */
    where?: ParentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parents to fetch.
     */
    orderBy?: ParentOrderByWithRelationInput | ParentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Parents.
     */
    cursor?: ParentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Parents.
     */
    distinct?: ParentScalarFieldEnum | ParentScalarFieldEnum[]
  }

  /**
   * Parent findFirstOrThrow
   */
  export type ParentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parent
     */
    select?: ParentSelect<ExtArgs> | null
    /**
     * Filter, which Parent to fetch.
     */
    where?: ParentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parents to fetch.
     */
    orderBy?: ParentOrderByWithRelationInput | ParentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Parents.
     */
    cursor?: ParentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Parents.
     */
    distinct?: ParentScalarFieldEnum | ParentScalarFieldEnum[]
  }

  /**
   * Parent findMany
   */
  export type ParentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parent
     */
    select?: ParentSelect<ExtArgs> | null
    /**
     * Filter, which Parents to fetch.
     */
    where?: ParentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parents to fetch.
     */
    orderBy?: ParentOrderByWithRelationInput | ParentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Parents.
     */
    cursor?: ParentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parents.
     */
    skip?: number
    distinct?: ParentScalarFieldEnum | ParentScalarFieldEnum[]
  }

  /**
   * Parent create
   */
  export type ParentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parent
     */
    select?: ParentSelect<ExtArgs> | null
    /**
     * The data needed to create a Parent.
     */
    data: XOR<ParentCreateInput, ParentUncheckedCreateInput>
  }

  /**
   * Parent createMany
   */
  export type ParentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Parents.
     */
    data: ParentCreateManyInput | ParentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Parent createManyAndReturn
   */
  export type ParentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parent
     */
    select?: ParentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Parents.
     */
    data: ParentCreateManyInput | ParentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Parent update
   */
  export type ParentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parent
     */
    select?: ParentSelect<ExtArgs> | null
    /**
     * The data needed to update a Parent.
     */
    data: XOR<ParentUpdateInput, ParentUncheckedUpdateInput>
    /**
     * Choose, which Parent to update.
     */
    where: ParentWhereUniqueInput
  }

  /**
   * Parent updateMany
   */
  export type ParentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Parents.
     */
    data: XOR<ParentUpdateManyMutationInput, ParentUncheckedUpdateManyInput>
    /**
     * Filter which Parents to update
     */
    where?: ParentWhereInput
  }

  /**
   * Parent upsert
   */
  export type ParentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parent
     */
    select?: ParentSelect<ExtArgs> | null
    /**
     * The filter to search for the Parent to update in case it exists.
     */
    where: ParentWhereUniqueInput
    /**
     * In case the Parent found by the `where` argument doesn't exist, create a new Parent with this data.
     */
    create: XOR<ParentCreateInput, ParentUncheckedCreateInput>
    /**
     * In case the Parent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ParentUpdateInput, ParentUncheckedUpdateInput>
  }

  /**
   * Parent delete
   */
  export type ParentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parent
     */
    select?: ParentSelect<ExtArgs> | null
    /**
     * Filter which Parent to delete.
     */
    where: ParentWhereUniqueInput
  }

  /**
   * Parent deleteMany
   */
  export type ParentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Parents to delete
     */
    where?: ParentWhereInput
  }

  /**
   * Parent without action
   */
  export type ParentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parent
     */
    select?: ParentSelect<ExtArgs> | null
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


  export type $SchoolManagerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SchoolManager"
    objects: {}
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
   * SchoolManager without action
   */
  export type SchoolManagerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolManager
     */
    select?: SchoolManagerSelect<ExtArgs> | null
  }


  /**
   * Model SuperAdmin
   */

  export type AggregateSuperAdmin = {
    _count: SuperAdminCountAggregateOutputType | null
    _min: SuperAdminMinAggregateOutputType | null
    _max: SuperAdminMaxAggregateOutputType | null
  }

  export type SuperAdminMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SuperAdminMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SuperAdminCountAggregateOutputType = {
    id: number
    email: number
    password: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SuperAdminMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SuperAdminMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SuperAdminCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SuperAdminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SuperAdmin to aggregate.
     */
    where?: SuperAdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SuperAdmins to fetch.
     */
    orderBy?: SuperAdminOrderByWithRelationInput | SuperAdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SuperAdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SuperAdmins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SuperAdmins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SuperAdmins
    **/
    _count?: true | SuperAdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SuperAdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SuperAdminMaxAggregateInputType
  }

  export type GetSuperAdminAggregateType<T extends SuperAdminAggregateArgs> = {
        [P in keyof T & keyof AggregateSuperAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSuperAdmin[P]>
      : GetScalarType<T[P], AggregateSuperAdmin[P]>
  }




  export type SuperAdminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SuperAdminWhereInput
    orderBy?: SuperAdminOrderByWithAggregationInput | SuperAdminOrderByWithAggregationInput[]
    by: SuperAdminScalarFieldEnum[] | SuperAdminScalarFieldEnum
    having?: SuperAdminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SuperAdminCountAggregateInputType | true
    _min?: SuperAdminMinAggregateInputType
    _max?: SuperAdminMaxAggregateInputType
  }

  export type SuperAdminGroupByOutputType = {
    id: string
    email: string
    password: string
    name: string
    createdAt: Date
    updatedAt: Date
    _count: SuperAdminCountAggregateOutputType | null
    _min: SuperAdminMinAggregateOutputType | null
    _max: SuperAdminMaxAggregateOutputType | null
  }

  type GetSuperAdminGroupByPayload<T extends SuperAdminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SuperAdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SuperAdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SuperAdminGroupByOutputType[P]>
            : GetScalarType<T[P], SuperAdminGroupByOutputType[P]>
        }
      >
    >


  export type SuperAdminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["superAdmin"]>

  export type SuperAdminSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["superAdmin"]>

  export type SuperAdminSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $SuperAdminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SuperAdmin"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      name: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["superAdmin"]>
    composites: {}
  }

  type SuperAdminGetPayload<S extends boolean | null | undefined | SuperAdminDefaultArgs> = $Result.GetResult<Prisma.$SuperAdminPayload, S>

  type SuperAdminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SuperAdminFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SuperAdminCountAggregateInputType | true
    }

  export interface SuperAdminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SuperAdmin'], meta: { name: 'SuperAdmin' } }
    /**
     * Find zero or one SuperAdmin that matches the filter.
     * @param {SuperAdminFindUniqueArgs} args - Arguments to find a SuperAdmin
     * @example
     * // Get one SuperAdmin
     * const superAdmin = await prisma.superAdmin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SuperAdminFindUniqueArgs>(args: SelectSubset<T, SuperAdminFindUniqueArgs<ExtArgs>>): Prisma__SuperAdminClient<$Result.GetResult<Prisma.$SuperAdminPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one SuperAdmin that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SuperAdminFindUniqueOrThrowArgs} args - Arguments to find a SuperAdmin
     * @example
     * // Get one SuperAdmin
     * const superAdmin = await prisma.superAdmin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SuperAdminFindUniqueOrThrowArgs>(args: SelectSubset<T, SuperAdminFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SuperAdminClient<$Result.GetResult<Prisma.$SuperAdminPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first SuperAdmin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuperAdminFindFirstArgs} args - Arguments to find a SuperAdmin
     * @example
     * // Get one SuperAdmin
     * const superAdmin = await prisma.superAdmin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SuperAdminFindFirstArgs>(args?: SelectSubset<T, SuperAdminFindFirstArgs<ExtArgs>>): Prisma__SuperAdminClient<$Result.GetResult<Prisma.$SuperAdminPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first SuperAdmin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuperAdminFindFirstOrThrowArgs} args - Arguments to find a SuperAdmin
     * @example
     * // Get one SuperAdmin
     * const superAdmin = await prisma.superAdmin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SuperAdminFindFirstOrThrowArgs>(args?: SelectSubset<T, SuperAdminFindFirstOrThrowArgs<ExtArgs>>): Prisma__SuperAdminClient<$Result.GetResult<Prisma.$SuperAdminPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more SuperAdmins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuperAdminFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SuperAdmins
     * const superAdmins = await prisma.superAdmin.findMany()
     * 
     * // Get first 10 SuperAdmins
     * const superAdmins = await prisma.superAdmin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const superAdminWithIdOnly = await prisma.superAdmin.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SuperAdminFindManyArgs>(args?: SelectSubset<T, SuperAdminFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SuperAdminPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a SuperAdmin.
     * @param {SuperAdminCreateArgs} args - Arguments to create a SuperAdmin.
     * @example
     * // Create one SuperAdmin
     * const SuperAdmin = await prisma.superAdmin.create({
     *   data: {
     *     // ... data to create a SuperAdmin
     *   }
     * })
     * 
     */
    create<T extends SuperAdminCreateArgs>(args: SelectSubset<T, SuperAdminCreateArgs<ExtArgs>>): Prisma__SuperAdminClient<$Result.GetResult<Prisma.$SuperAdminPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many SuperAdmins.
     * @param {SuperAdminCreateManyArgs} args - Arguments to create many SuperAdmins.
     * @example
     * // Create many SuperAdmins
     * const superAdmin = await prisma.superAdmin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SuperAdminCreateManyArgs>(args?: SelectSubset<T, SuperAdminCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SuperAdmins and returns the data saved in the database.
     * @param {SuperAdminCreateManyAndReturnArgs} args - Arguments to create many SuperAdmins.
     * @example
     * // Create many SuperAdmins
     * const superAdmin = await prisma.superAdmin.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SuperAdmins and only return the `id`
     * const superAdminWithIdOnly = await prisma.superAdmin.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SuperAdminCreateManyAndReturnArgs>(args?: SelectSubset<T, SuperAdminCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SuperAdminPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a SuperAdmin.
     * @param {SuperAdminDeleteArgs} args - Arguments to delete one SuperAdmin.
     * @example
     * // Delete one SuperAdmin
     * const SuperAdmin = await prisma.superAdmin.delete({
     *   where: {
     *     // ... filter to delete one SuperAdmin
     *   }
     * })
     * 
     */
    delete<T extends SuperAdminDeleteArgs>(args: SelectSubset<T, SuperAdminDeleteArgs<ExtArgs>>): Prisma__SuperAdminClient<$Result.GetResult<Prisma.$SuperAdminPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one SuperAdmin.
     * @param {SuperAdminUpdateArgs} args - Arguments to update one SuperAdmin.
     * @example
     * // Update one SuperAdmin
     * const superAdmin = await prisma.superAdmin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SuperAdminUpdateArgs>(args: SelectSubset<T, SuperAdminUpdateArgs<ExtArgs>>): Prisma__SuperAdminClient<$Result.GetResult<Prisma.$SuperAdminPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more SuperAdmins.
     * @param {SuperAdminDeleteManyArgs} args - Arguments to filter SuperAdmins to delete.
     * @example
     * // Delete a few SuperAdmins
     * const { count } = await prisma.superAdmin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SuperAdminDeleteManyArgs>(args?: SelectSubset<T, SuperAdminDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SuperAdmins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuperAdminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SuperAdmins
     * const superAdmin = await prisma.superAdmin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SuperAdminUpdateManyArgs>(args: SelectSubset<T, SuperAdminUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SuperAdmin.
     * @param {SuperAdminUpsertArgs} args - Arguments to update or create a SuperAdmin.
     * @example
     * // Update or create a SuperAdmin
     * const superAdmin = await prisma.superAdmin.upsert({
     *   create: {
     *     // ... data to create a SuperAdmin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SuperAdmin we want to update
     *   }
     * })
     */
    upsert<T extends SuperAdminUpsertArgs>(args: SelectSubset<T, SuperAdminUpsertArgs<ExtArgs>>): Prisma__SuperAdminClient<$Result.GetResult<Prisma.$SuperAdminPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of SuperAdmins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuperAdminCountArgs} args - Arguments to filter SuperAdmins to count.
     * @example
     * // Count the number of SuperAdmins
     * const count = await prisma.superAdmin.count({
     *   where: {
     *     // ... the filter for the SuperAdmins we want to count
     *   }
     * })
    **/
    count<T extends SuperAdminCountArgs>(
      args?: Subset<T, SuperAdminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SuperAdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SuperAdmin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuperAdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SuperAdminAggregateArgs>(args: Subset<T, SuperAdminAggregateArgs>): Prisma.PrismaPromise<GetSuperAdminAggregateType<T>>

    /**
     * Group by SuperAdmin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuperAdminGroupByArgs} args - Group by arguments.
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
      T extends SuperAdminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SuperAdminGroupByArgs['orderBy'] }
        : { orderBy?: SuperAdminGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SuperAdminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSuperAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SuperAdmin model
   */
  readonly fields: SuperAdminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SuperAdmin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SuperAdminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the SuperAdmin model
   */ 
  interface SuperAdminFieldRefs {
    readonly id: FieldRef<"SuperAdmin", 'String'>
    readonly email: FieldRef<"SuperAdmin", 'String'>
    readonly password: FieldRef<"SuperAdmin", 'String'>
    readonly name: FieldRef<"SuperAdmin", 'String'>
    readonly createdAt: FieldRef<"SuperAdmin", 'DateTime'>
    readonly updatedAt: FieldRef<"SuperAdmin", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SuperAdmin findUnique
   */
  export type SuperAdminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuperAdmin
     */
    select?: SuperAdminSelect<ExtArgs> | null
    /**
     * Filter, which SuperAdmin to fetch.
     */
    where: SuperAdminWhereUniqueInput
  }

  /**
   * SuperAdmin findUniqueOrThrow
   */
  export type SuperAdminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuperAdmin
     */
    select?: SuperAdminSelect<ExtArgs> | null
    /**
     * Filter, which SuperAdmin to fetch.
     */
    where: SuperAdminWhereUniqueInput
  }

  /**
   * SuperAdmin findFirst
   */
  export type SuperAdminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuperAdmin
     */
    select?: SuperAdminSelect<ExtArgs> | null
    /**
     * Filter, which SuperAdmin to fetch.
     */
    where?: SuperAdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SuperAdmins to fetch.
     */
    orderBy?: SuperAdminOrderByWithRelationInput | SuperAdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SuperAdmins.
     */
    cursor?: SuperAdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SuperAdmins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SuperAdmins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SuperAdmins.
     */
    distinct?: SuperAdminScalarFieldEnum | SuperAdminScalarFieldEnum[]
  }

  /**
   * SuperAdmin findFirstOrThrow
   */
  export type SuperAdminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuperAdmin
     */
    select?: SuperAdminSelect<ExtArgs> | null
    /**
     * Filter, which SuperAdmin to fetch.
     */
    where?: SuperAdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SuperAdmins to fetch.
     */
    orderBy?: SuperAdminOrderByWithRelationInput | SuperAdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SuperAdmins.
     */
    cursor?: SuperAdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SuperAdmins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SuperAdmins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SuperAdmins.
     */
    distinct?: SuperAdminScalarFieldEnum | SuperAdminScalarFieldEnum[]
  }

  /**
   * SuperAdmin findMany
   */
  export type SuperAdminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuperAdmin
     */
    select?: SuperAdminSelect<ExtArgs> | null
    /**
     * Filter, which SuperAdmins to fetch.
     */
    where?: SuperAdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SuperAdmins to fetch.
     */
    orderBy?: SuperAdminOrderByWithRelationInput | SuperAdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SuperAdmins.
     */
    cursor?: SuperAdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SuperAdmins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SuperAdmins.
     */
    skip?: number
    distinct?: SuperAdminScalarFieldEnum | SuperAdminScalarFieldEnum[]
  }

  /**
   * SuperAdmin create
   */
  export type SuperAdminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuperAdmin
     */
    select?: SuperAdminSelect<ExtArgs> | null
    /**
     * The data needed to create a SuperAdmin.
     */
    data: XOR<SuperAdminCreateInput, SuperAdminUncheckedCreateInput>
  }

  /**
   * SuperAdmin createMany
   */
  export type SuperAdminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SuperAdmins.
     */
    data: SuperAdminCreateManyInput | SuperAdminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SuperAdmin createManyAndReturn
   */
  export type SuperAdminCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuperAdmin
     */
    select?: SuperAdminSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many SuperAdmins.
     */
    data: SuperAdminCreateManyInput | SuperAdminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SuperAdmin update
   */
  export type SuperAdminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuperAdmin
     */
    select?: SuperAdminSelect<ExtArgs> | null
    /**
     * The data needed to update a SuperAdmin.
     */
    data: XOR<SuperAdminUpdateInput, SuperAdminUncheckedUpdateInput>
    /**
     * Choose, which SuperAdmin to update.
     */
    where: SuperAdminWhereUniqueInput
  }

  /**
   * SuperAdmin updateMany
   */
  export type SuperAdminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SuperAdmins.
     */
    data: XOR<SuperAdminUpdateManyMutationInput, SuperAdminUncheckedUpdateManyInput>
    /**
     * Filter which SuperAdmins to update
     */
    where?: SuperAdminWhereInput
  }

  /**
   * SuperAdmin upsert
   */
  export type SuperAdminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuperAdmin
     */
    select?: SuperAdminSelect<ExtArgs> | null
    /**
     * The filter to search for the SuperAdmin to update in case it exists.
     */
    where: SuperAdminWhereUniqueInput
    /**
     * In case the SuperAdmin found by the `where` argument doesn't exist, create a new SuperAdmin with this data.
     */
    create: XOR<SuperAdminCreateInput, SuperAdminUncheckedCreateInput>
    /**
     * In case the SuperAdmin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SuperAdminUpdateInput, SuperAdminUncheckedUpdateInput>
  }

  /**
   * SuperAdmin delete
   */
  export type SuperAdminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuperAdmin
     */
    select?: SuperAdminSelect<ExtArgs> | null
    /**
     * Filter which SuperAdmin to delete.
     */
    where: SuperAdminWhereUniqueInput
  }

  /**
   * SuperAdmin deleteMany
   */
  export type SuperAdminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SuperAdmins to delete
     */
    where?: SuperAdminWhereInput
  }

  /**
   * SuperAdmin without action
   */
  export type SuperAdminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuperAdmin
     */
    select?: SuperAdminSelect<ExtArgs> | null
  }


  /**
   * Model PasswordResetToken
   */

  export type AggregatePasswordResetToken = {
    _count: PasswordResetTokenCountAggregateOutputType | null
    _avg: PasswordResetTokenAvgAggregateOutputType | null
    _sum: PasswordResetTokenSumAggregateOutputType | null
    _min: PasswordResetTokenMinAggregateOutputType | null
    _max: PasswordResetTokenMaxAggregateOutputType | null
  }

  export type PasswordResetTokenAvgAggregateOutputType = {
    id: number | null
  }

  export type PasswordResetTokenSumAggregateOutputType = {
    id: number | null
  }

  export type PasswordResetTokenMinAggregateOutputType = {
    id: number | null
    email: string | null
    otp: string | null
    expiresAt: Date | null
    used: boolean | null
    createdAt: Date | null
  }

  export type PasswordResetTokenMaxAggregateOutputType = {
    id: number | null
    email: string | null
    otp: string | null
    expiresAt: Date | null
    used: boolean | null
    createdAt: Date | null
  }

  export type PasswordResetTokenCountAggregateOutputType = {
    id: number
    email: number
    otp: number
    expiresAt: number
    used: number
    createdAt: number
    _all: number
  }


  export type PasswordResetTokenAvgAggregateInputType = {
    id?: true
  }

  export type PasswordResetTokenSumAggregateInputType = {
    id?: true
  }

  export type PasswordResetTokenMinAggregateInputType = {
    id?: true
    email?: true
    otp?: true
    expiresAt?: true
    used?: true
    createdAt?: true
  }

  export type PasswordResetTokenMaxAggregateInputType = {
    id?: true
    email?: true
    otp?: true
    expiresAt?: true
    used?: true
    createdAt?: true
  }

  export type PasswordResetTokenCountAggregateInputType = {
    id?: true
    email?: true
    otp?: true
    expiresAt?: true
    used?: true
    createdAt?: true
    _all?: true
  }

  export type PasswordResetTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PasswordResetToken to aggregate.
     */
    where?: PasswordResetTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PasswordResetTokens to fetch.
     */
    orderBy?: PasswordResetTokenOrderByWithRelationInput | PasswordResetTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PasswordResetTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PasswordResetTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PasswordResetTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PasswordResetTokens
    **/
    _count?: true | PasswordResetTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PasswordResetTokenAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PasswordResetTokenSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PasswordResetTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PasswordResetTokenMaxAggregateInputType
  }

  export type GetPasswordResetTokenAggregateType<T extends PasswordResetTokenAggregateArgs> = {
        [P in keyof T & keyof AggregatePasswordResetToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePasswordResetToken[P]>
      : GetScalarType<T[P], AggregatePasswordResetToken[P]>
  }




  export type PasswordResetTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PasswordResetTokenWhereInput
    orderBy?: PasswordResetTokenOrderByWithAggregationInput | PasswordResetTokenOrderByWithAggregationInput[]
    by: PasswordResetTokenScalarFieldEnum[] | PasswordResetTokenScalarFieldEnum
    having?: PasswordResetTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PasswordResetTokenCountAggregateInputType | true
    _avg?: PasswordResetTokenAvgAggregateInputType
    _sum?: PasswordResetTokenSumAggregateInputType
    _min?: PasswordResetTokenMinAggregateInputType
    _max?: PasswordResetTokenMaxAggregateInputType
  }

  export type PasswordResetTokenGroupByOutputType = {
    id: number
    email: string
    otp: string
    expiresAt: Date
    used: boolean
    createdAt: Date
    _count: PasswordResetTokenCountAggregateOutputType | null
    _avg: PasswordResetTokenAvgAggregateOutputType | null
    _sum: PasswordResetTokenSumAggregateOutputType | null
    _min: PasswordResetTokenMinAggregateOutputType | null
    _max: PasswordResetTokenMaxAggregateOutputType | null
  }

  type GetPasswordResetTokenGroupByPayload<T extends PasswordResetTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PasswordResetTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PasswordResetTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PasswordResetTokenGroupByOutputType[P]>
            : GetScalarType<T[P], PasswordResetTokenGroupByOutputType[P]>
        }
      >
    >


  export type PasswordResetTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    otp?: boolean
    expiresAt?: boolean
    used?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["passwordResetToken"]>

  export type PasswordResetTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    otp?: boolean
    expiresAt?: boolean
    used?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["passwordResetToken"]>

  export type PasswordResetTokenSelectScalar = {
    id?: boolean
    email?: boolean
    otp?: boolean
    expiresAt?: boolean
    used?: boolean
    createdAt?: boolean
  }


  export type $PasswordResetTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PasswordResetToken"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      otp: string
      expiresAt: Date
      used: boolean
      createdAt: Date
    }, ExtArgs["result"]["passwordResetToken"]>
    composites: {}
  }

  type PasswordResetTokenGetPayload<S extends boolean | null | undefined | PasswordResetTokenDefaultArgs> = $Result.GetResult<Prisma.$PasswordResetTokenPayload, S>

  type PasswordResetTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PasswordResetTokenFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PasswordResetTokenCountAggregateInputType | true
    }

  export interface PasswordResetTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PasswordResetToken'], meta: { name: 'PasswordResetToken' } }
    /**
     * Find zero or one PasswordResetToken that matches the filter.
     * @param {PasswordResetTokenFindUniqueArgs} args - Arguments to find a PasswordResetToken
     * @example
     * // Get one PasswordResetToken
     * const passwordResetToken = await prisma.passwordResetToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PasswordResetTokenFindUniqueArgs>(args: SelectSubset<T, PasswordResetTokenFindUniqueArgs<ExtArgs>>): Prisma__PasswordResetTokenClient<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one PasswordResetToken that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PasswordResetTokenFindUniqueOrThrowArgs} args - Arguments to find a PasswordResetToken
     * @example
     * // Get one PasswordResetToken
     * const passwordResetToken = await prisma.passwordResetToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PasswordResetTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, PasswordResetTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PasswordResetTokenClient<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first PasswordResetToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetTokenFindFirstArgs} args - Arguments to find a PasswordResetToken
     * @example
     * // Get one PasswordResetToken
     * const passwordResetToken = await prisma.passwordResetToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PasswordResetTokenFindFirstArgs>(args?: SelectSubset<T, PasswordResetTokenFindFirstArgs<ExtArgs>>): Prisma__PasswordResetTokenClient<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first PasswordResetToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetTokenFindFirstOrThrowArgs} args - Arguments to find a PasswordResetToken
     * @example
     * // Get one PasswordResetToken
     * const passwordResetToken = await prisma.passwordResetToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PasswordResetTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, PasswordResetTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__PasswordResetTokenClient<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more PasswordResetTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PasswordResetTokens
     * const passwordResetTokens = await prisma.passwordResetToken.findMany()
     * 
     * // Get first 10 PasswordResetTokens
     * const passwordResetTokens = await prisma.passwordResetToken.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const passwordResetTokenWithIdOnly = await prisma.passwordResetToken.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PasswordResetTokenFindManyArgs>(args?: SelectSubset<T, PasswordResetTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a PasswordResetToken.
     * @param {PasswordResetTokenCreateArgs} args - Arguments to create a PasswordResetToken.
     * @example
     * // Create one PasswordResetToken
     * const PasswordResetToken = await prisma.passwordResetToken.create({
     *   data: {
     *     // ... data to create a PasswordResetToken
     *   }
     * })
     * 
     */
    create<T extends PasswordResetTokenCreateArgs>(args: SelectSubset<T, PasswordResetTokenCreateArgs<ExtArgs>>): Prisma__PasswordResetTokenClient<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many PasswordResetTokens.
     * @param {PasswordResetTokenCreateManyArgs} args - Arguments to create many PasswordResetTokens.
     * @example
     * // Create many PasswordResetTokens
     * const passwordResetToken = await prisma.passwordResetToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PasswordResetTokenCreateManyArgs>(args?: SelectSubset<T, PasswordResetTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PasswordResetTokens and returns the data saved in the database.
     * @param {PasswordResetTokenCreateManyAndReturnArgs} args - Arguments to create many PasswordResetTokens.
     * @example
     * // Create many PasswordResetTokens
     * const passwordResetToken = await prisma.passwordResetToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PasswordResetTokens and only return the `id`
     * const passwordResetTokenWithIdOnly = await prisma.passwordResetToken.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PasswordResetTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, PasswordResetTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a PasswordResetToken.
     * @param {PasswordResetTokenDeleteArgs} args - Arguments to delete one PasswordResetToken.
     * @example
     * // Delete one PasswordResetToken
     * const PasswordResetToken = await prisma.passwordResetToken.delete({
     *   where: {
     *     // ... filter to delete one PasswordResetToken
     *   }
     * })
     * 
     */
    delete<T extends PasswordResetTokenDeleteArgs>(args: SelectSubset<T, PasswordResetTokenDeleteArgs<ExtArgs>>): Prisma__PasswordResetTokenClient<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one PasswordResetToken.
     * @param {PasswordResetTokenUpdateArgs} args - Arguments to update one PasswordResetToken.
     * @example
     * // Update one PasswordResetToken
     * const passwordResetToken = await prisma.passwordResetToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PasswordResetTokenUpdateArgs>(args: SelectSubset<T, PasswordResetTokenUpdateArgs<ExtArgs>>): Prisma__PasswordResetTokenClient<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more PasswordResetTokens.
     * @param {PasswordResetTokenDeleteManyArgs} args - Arguments to filter PasswordResetTokens to delete.
     * @example
     * // Delete a few PasswordResetTokens
     * const { count } = await prisma.passwordResetToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PasswordResetTokenDeleteManyArgs>(args?: SelectSubset<T, PasswordResetTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PasswordResetTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PasswordResetTokens
     * const passwordResetToken = await prisma.passwordResetToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PasswordResetTokenUpdateManyArgs>(args: SelectSubset<T, PasswordResetTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PasswordResetToken.
     * @param {PasswordResetTokenUpsertArgs} args - Arguments to update or create a PasswordResetToken.
     * @example
     * // Update or create a PasswordResetToken
     * const passwordResetToken = await prisma.passwordResetToken.upsert({
     *   create: {
     *     // ... data to create a PasswordResetToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PasswordResetToken we want to update
     *   }
     * })
     */
    upsert<T extends PasswordResetTokenUpsertArgs>(args: SelectSubset<T, PasswordResetTokenUpsertArgs<ExtArgs>>): Prisma__PasswordResetTokenClient<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of PasswordResetTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetTokenCountArgs} args - Arguments to filter PasswordResetTokens to count.
     * @example
     * // Count the number of PasswordResetTokens
     * const count = await prisma.passwordResetToken.count({
     *   where: {
     *     // ... the filter for the PasswordResetTokens we want to count
     *   }
     * })
    **/
    count<T extends PasswordResetTokenCountArgs>(
      args?: Subset<T, PasswordResetTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PasswordResetTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PasswordResetToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PasswordResetTokenAggregateArgs>(args: Subset<T, PasswordResetTokenAggregateArgs>): Prisma.PrismaPromise<GetPasswordResetTokenAggregateType<T>>

    /**
     * Group by PasswordResetToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetTokenGroupByArgs} args - Group by arguments.
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
      T extends PasswordResetTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PasswordResetTokenGroupByArgs['orderBy'] }
        : { orderBy?: PasswordResetTokenGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PasswordResetTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPasswordResetTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PasswordResetToken model
   */
  readonly fields: PasswordResetTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PasswordResetToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PasswordResetTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the PasswordResetToken model
   */ 
  interface PasswordResetTokenFieldRefs {
    readonly id: FieldRef<"PasswordResetToken", 'Int'>
    readonly email: FieldRef<"PasswordResetToken", 'String'>
    readonly otp: FieldRef<"PasswordResetToken", 'String'>
    readonly expiresAt: FieldRef<"PasswordResetToken", 'DateTime'>
    readonly used: FieldRef<"PasswordResetToken", 'Boolean'>
    readonly createdAt: FieldRef<"PasswordResetToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PasswordResetToken findUnique
   */
  export type PasswordResetTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Filter, which PasswordResetToken to fetch.
     */
    where: PasswordResetTokenWhereUniqueInput
  }

  /**
   * PasswordResetToken findUniqueOrThrow
   */
  export type PasswordResetTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Filter, which PasswordResetToken to fetch.
     */
    where: PasswordResetTokenWhereUniqueInput
  }

  /**
   * PasswordResetToken findFirst
   */
  export type PasswordResetTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Filter, which PasswordResetToken to fetch.
     */
    where?: PasswordResetTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PasswordResetTokens to fetch.
     */
    orderBy?: PasswordResetTokenOrderByWithRelationInput | PasswordResetTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PasswordResetTokens.
     */
    cursor?: PasswordResetTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PasswordResetTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PasswordResetTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PasswordResetTokens.
     */
    distinct?: PasswordResetTokenScalarFieldEnum | PasswordResetTokenScalarFieldEnum[]
  }

  /**
   * PasswordResetToken findFirstOrThrow
   */
  export type PasswordResetTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Filter, which PasswordResetToken to fetch.
     */
    where?: PasswordResetTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PasswordResetTokens to fetch.
     */
    orderBy?: PasswordResetTokenOrderByWithRelationInput | PasswordResetTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PasswordResetTokens.
     */
    cursor?: PasswordResetTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PasswordResetTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PasswordResetTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PasswordResetTokens.
     */
    distinct?: PasswordResetTokenScalarFieldEnum | PasswordResetTokenScalarFieldEnum[]
  }

  /**
   * PasswordResetToken findMany
   */
  export type PasswordResetTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Filter, which PasswordResetTokens to fetch.
     */
    where?: PasswordResetTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PasswordResetTokens to fetch.
     */
    orderBy?: PasswordResetTokenOrderByWithRelationInput | PasswordResetTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PasswordResetTokens.
     */
    cursor?: PasswordResetTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PasswordResetTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PasswordResetTokens.
     */
    skip?: number
    distinct?: PasswordResetTokenScalarFieldEnum | PasswordResetTokenScalarFieldEnum[]
  }

  /**
   * PasswordResetToken create
   */
  export type PasswordResetTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * The data needed to create a PasswordResetToken.
     */
    data: XOR<PasswordResetTokenCreateInput, PasswordResetTokenUncheckedCreateInput>
  }

  /**
   * PasswordResetToken createMany
   */
  export type PasswordResetTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PasswordResetTokens.
     */
    data: PasswordResetTokenCreateManyInput | PasswordResetTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PasswordResetToken createManyAndReturn
   */
  export type PasswordResetTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many PasswordResetTokens.
     */
    data: PasswordResetTokenCreateManyInput | PasswordResetTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PasswordResetToken update
   */
  export type PasswordResetTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * The data needed to update a PasswordResetToken.
     */
    data: XOR<PasswordResetTokenUpdateInput, PasswordResetTokenUncheckedUpdateInput>
    /**
     * Choose, which PasswordResetToken to update.
     */
    where: PasswordResetTokenWhereUniqueInput
  }

  /**
   * PasswordResetToken updateMany
   */
  export type PasswordResetTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PasswordResetTokens.
     */
    data: XOR<PasswordResetTokenUpdateManyMutationInput, PasswordResetTokenUncheckedUpdateManyInput>
    /**
     * Filter which PasswordResetTokens to update
     */
    where?: PasswordResetTokenWhereInput
  }

  /**
   * PasswordResetToken upsert
   */
  export type PasswordResetTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * The filter to search for the PasswordResetToken to update in case it exists.
     */
    where: PasswordResetTokenWhereUniqueInput
    /**
     * In case the PasswordResetToken found by the `where` argument doesn't exist, create a new PasswordResetToken with this data.
     */
    create: XOR<PasswordResetTokenCreateInput, PasswordResetTokenUncheckedCreateInput>
    /**
     * In case the PasswordResetToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PasswordResetTokenUpdateInput, PasswordResetTokenUncheckedUpdateInput>
  }

  /**
   * PasswordResetToken delete
   */
  export type PasswordResetTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Filter which PasswordResetToken to delete.
     */
    where: PasswordResetTokenWhereUniqueInput
  }

  /**
   * PasswordResetToken deleteMany
   */
  export type PasswordResetTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PasswordResetTokens to delete
     */
    where?: PasswordResetTokenWhereInput
  }

  /**
   * PasswordResetToken without action
   */
  export type PasswordResetTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
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


  export const AdminScalarFieldEnum: {
    id: 'id',
    username: 'username',
    password: 'password',
    schoolId: 'schoolId'
  };

  export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum]


  export const TeacherScalarFieldEnum: {
    id: 'id',
    username: 'username',
    password: 'password',
    schoolId: 'schoolId'
  };

  export type TeacherScalarFieldEnum = (typeof TeacherScalarFieldEnum)[keyof typeof TeacherScalarFieldEnum]


  export const StudentScalarFieldEnum: {
    id: 'id',
    username: 'username',
    password: 'password',
    schoolId: 'schoolId'
  };

  export type StudentScalarFieldEnum = (typeof StudentScalarFieldEnum)[keyof typeof StudentScalarFieldEnum]


  export const ParentScalarFieldEnum: {
    id: 'id',
    username: 'username',
    password: 'password',
    schoolId: 'schoolId'
  };

  export type ParentScalarFieldEnum = (typeof ParentScalarFieldEnum)[keyof typeof ParentScalarFieldEnum]


  export const SchoolManagerScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SchoolManagerScalarFieldEnum = (typeof SchoolManagerScalarFieldEnum)[keyof typeof SchoolManagerScalarFieldEnum]


  export const SuperAdminScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SuperAdminScalarFieldEnum = (typeof SuperAdminScalarFieldEnum)[keyof typeof SuperAdminScalarFieldEnum]


  export const PasswordResetTokenScalarFieldEnum: {
    id: 'id',
    email: 'email',
    otp: 'otp',
    expiresAt: 'expiresAt',
    used: 'used',
    createdAt: 'createdAt'
  };

  export type PasswordResetTokenScalarFieldEnum = (typeof PasswordResetTokenScalarFieldEnum)[keyof typeof PasswordResetTokenScalarFieldEnum]


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


  export type AdminWhereInput = {
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    id?: StringFilter<"Admin"> | string
    username?: StringFilter<"Admin"> | string
    password?: StringFilter<"Admin"> | string
    schoolId?: StringFilter<"Admin"> | string
  }

  export type AdminOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    schoolId?: SortOrder
  }

  export type AdminWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    password?: StringFilter<"Admin"> | string
    schoolId?: StringFilter<"Admin"> | string
  }, "id" | "username">

  export type AdminOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    schoolId?: SortOrder
    _count?: AdminCountOrderByAggregateInput
    _max?: AdminMaxOrderByAggregateInput
    _min?: AdminMinOrderByAggregateInput
  }

  export type AdminScalarWhereWithAggregatesInput = {
    AND?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    OR?: AdminScalarWhereWithAggregatesInput[]
    NOT?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Admin"> | string
    username?: StringWithAggregatesFilter<"Admin"> | string
    password?: StringWithAggregatesFilter<"Admin"> | string
    schoolId?: StringWithAggregatesFilter<"Admin"> | string
  }

  export type TeacherWhereInput = {
    AND?: TeacherWhereInput | TeacherWhereInput[]
    OR?: TeacherWhereInput[]
    NOT?: TeacherWhereInput | TeacherWhereInput[]
    id?: StringFilter<"Teacher"> | string
    username?: StringFilter<"Teacher"> | string
    password?: StringFilter<"Teacher"> | string
    schoolId?: StringFilter<"Teacher"> | string
  }

  export type TeacherOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    schoolId?: SortOrder
  }

  export type TeacherWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    AND?: TeacherWhereInput | TeacherWhereInput[]
    OR?: TeacherWhereInput[]
    NOT?: TeacherWhereInput | TeacherWhereInput[]
    password?: StringFilter<"Teacher"> | string
    schoolId?: StringFilter<"Teacher"> | string
  }, "id" | "username">

  export type TeacherOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    schoolId?: SortOrder
    _count?: TeacherCountOrderByAggregateInput
    _max?: TeacherMaxOrderByAggregateInput
    _min?: TeacherMinOrderByAggregateInput
  }

  export type TeacherScalarWhereWithAggregatesInput = {
    AND?: TeacherScalarWhereWithAggregatesInput | TeacherScalarWhereWithAggregatesInput[]
    OR?: TeacherScalarWhereWithAggregatesInput[]
    NOT?: TeacherScalarWhereWithAggregatesInput | TeacherScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Teacher"> | string
    username?: StringWithAggregatesFilter<"Teacher"> | string
    password?: StringWithAggregatesFilter<"Teacher"> | string
    schoolId?: StringWithAggregatesFilter<"Teacher"> | string
  }

  export type StudentWhereInput = {
    AND?: StudentWhereInput | StudentWhereInput[]
    OR?: StudentWhereInput[]
    NOT?: StudentWhereInput | StudentWhereInput[]
    id?: StringFilter<"Student"> | string
    username?: StringFilter<"Student"> | string
    password?: StringFilter<"Student"> | string
    schoolId?: StringFilter<"Student"> | string
  }

  export type StudentOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    schoolId?: SortOrder
  }

  export type StudentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    AND?: StudentWhereInput | StudentWhereInput[]
    OR?: StudentWhereInput[]
    NOT?: StudentWhereInput | StudentWhereInput[]
    password?: StringFilter<"Student"> | string
    schoolId?: StringFilter<"Student"> | string
  }, "id" | "username">

  export type StudentOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    schoolId?: SortOrder
    _count?: StudentCountOrderByAggregateInput
    _max?: StudentMaxOrderByAggregateInput
    _min?: StudentMinOrderByAggregateInput
  }

  export type StudentScalarWhereWithAggregatesInput = {
    AND?: StudentScalarWhereWithAggregatesInput | StudentScalarWhereWithAggregatesInput[]
    OR?: StudentScalarWhereWithAggregatesInput[]
    NOT?: StudentScalarWhereWithAggregatesInput | StudentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Student"> | string
    username?: StringWithAggregatesFilter<"Student"> | string
    password?: StringWithAggregatesFilter<"Student"> | string
    schoolId?: StringWithAggregatesFilter<"Student"> | string
  }

  export type ParentWhereInput = {
    AND?: ParentWhereInput | ParentWhereInput[]
    OR?: ParentWhereInput[]
    NOT?: ParentWhereInput | ParentWhereInput[]
    id?: StringFilter<"Parent"> | string
    username?: StringFilter<"Parent"> | string
    password?: StringFilter<"Parent"> | string
    schoolId?: StringFilter<"Parent"> | string
  }

  export type ParentOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    schoolId?: SortOrder
  }

  export type ParentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    AND?: ParentWhereInput | ParentWhereInput[]
    OR?: ParentWhereInput[]
    NOT?: ParentWhereInput | ParentWhereInput[]
    password?: StringFilter<"Parent"> | string
    schoolId?: StringFilter<"Parent"> | string
  }, "id" | "username">

  export type ParentOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    schoolId?: SortOrder
    _count?: ParentCountOrderByAggregateInput
    _max?: ParentMaxOrderByAggregateInput
    _min?: ParentMinOrderByAggregateInput
  }

  export type ParentScalarWhereWithAggregatesInput = {
    AND?: ParentScalarWhereWithAggregatesInput | ParentScalarWhereWithAggregatesInput[]
    OR?: ParentScalarWhereWithAggregatesInput[]
    NOT?: ParentScalarWhereWithAggregatesInput | ParentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Parent"> | string
    username?: StringWithAggregatesFilter<"Parent"> | string
    password?: StringWithAggregatesFilter<"Parent"> | string
    schoolId?: StringWithAggregatesFilter<"Parent"> | string
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
  }

  export type SchoolManagerOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type SuperAdminWhereInput = {
    AND?: SuperAdminWhereInput | SuperAdminWhereInput[]
    OR?: SuperAdminWhereInput[]
    NOT?: SuperAdminWhereInput | SuperAdminWhereInput[]
    id?: StringFilter<"SuperAdmin"> | string
    email?: StringFilter<"SuperAdmin"> | string
    password?: StringFilter<"SuperAdmin"> | string
    name?: StringFilter<"SuperAdmin"> | string
    createdAt?: DateTimeFilter<"SuperAdmin"> | Date | string
    updatedAt?: DateTimeFilter<"SuperAdmin"> | Date | string
  }

  export type SuperAdminOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SuperAdminWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: SuperAdminWhereInput | SuperAdminWhereInput[]
    OR?: SuperAdminWhereInput[]
    NOT?: SuperAdminWhereInput | SuperAdminWhereInput[]
    password?: StringFilter<"SuperAdmin"> | string
    name?: StringFilter<"SuperAdmin"> | string
    createdAt?: DateTimeFilter<"SuperAdmin"> | Date | string
    updatedAt?: DateTimeFilter<"SuperAdmin"> | Date | string
  }, "id" | "email">

  export type SuperAdminOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SuperAdminCountOrderByAggregateInput
    _max?: SuperAdminMaxOrderByAggregateInput
    _min?: SuperAdminMinOrderByAggregateInput
  }

  export type SuperAdminScalarWhereWithAggregatesInput = {
    AND?: SuperAdminScalarWhereWithAggregatesInput | SuperAdminScalarWhereWithAggregatesInput[]
    OR?: SuperAdminScalarWhereWithAggregatesInput[]
    NOT?: SuperAdminScalarWhereWithAggregatesInput | SuperAdminScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SuperAdmin"> | string
    email?: StringWithAggregatesFilter<"SuperAdmin"> | string
    password?: StringWithAggregatesFilter<"SuperAdmin"> | string
    name?: StringWithAggregatesFilter<"SuperAdmin"> | string
    createdAt?: DateTimeWithAggregatesFilter<"SuperAdmin"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SuperAdmin"> | Date | string
  }

  export type PasswordResetTokenWhereInput = {
    AND?: PasswordResetTokenWhereInput | PasswordResetTokenWhereInput[]
    OR?: PasswordResetTokenWhereInput[]
    NOT?: PasswordResetTokenWhereInput | PasswordResetTokenWhereInput[]
    id?: IntFilter<"PasswordResetToken"> | number
    email?: StringFilter<"PasswordResetToken"> | string
    otp?: StringFilter<"PasswordResetToken"> | string
    expiresAt?: DateTimeFilter<"PasswordResetToken"> | Date | string
    used?: BoolFilter<"PasswordResetToken"> | boolean
    createdAt?: DateTimeFilter<"PasswordResetToken"> | Date | string
  }

  export type PasswordResetTokenOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    otp?: SortOrder
    expiresAt?: SortOrder
    used?: SortOrder
    createdAt?: SortOrder
  }

  export type PasswordResetTokenWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PasswordResetTokenWhereInput | PasswordResetTokenWhereInput[]
    OR?: PasswordResetTokenWhereInput[]
    NOT?: PasswordResetTokenWhereInput | PasswordResetTokenWhereInput[]
    email?: StringFilter<"PasswordResetToken"> | string
    otp?: StringFilter<"PasswordResetToken"> | string
    expiresAt?: DateTimeFilter<"PasswordResetToken"> | Date | string
    used?: BoolFilter<"PasswordResetToken"> | boolean
    createdAt?: DateTimeFilter<"PasswordResetToken"> | Date | string
  }, "id">

  export type PasswordResetTokenOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    otp?: SortOrder
    expiresAt?: SortOrder
    used?: SortOrder
    createdAt?: SortOrder
    _count?: PasswordResetTokenCountOrderByAggregateInput
    _avg?: PasswordResetTokenAvgOrderByAggregateInput
    _max?: PasswordResetTokenMaxOrderByAggregateInput
    _min?: PasswordResetTokenMinOrderByAggregateInput
    _sum?: PasswordResetTokenSumOrderByAggregateInput
  }

  export type PasswordResetTokenScalarWhereWithAggregatesInput = {
    AND?: PasswordResetTokenScalarWhereWithAggregatesInput | PasswordResetTokenScalarWhereWithAggregatesInput[]
    OR?: PasswordResetTokenScalarWhereWithAggregatesInput[]
    NOT?: PasswordResetTokenScalarWhereWithAggregatesInput | PasswordResetTokenScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PasswordResetToken"> | number
    email?: StringWithAggregatesFilter<"PasswordResetToken"> | string
    otp?: StringWithAggregatesFilter<"PasswordResetToken"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"PasswordResetToken"> | Date | string
    used?: BoolWithAggregatesFilter<"PasswordResetToken"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"PasswordResetToken"> | Date | string
  }

  export type AdminCreateInput = {
    id?: string
    username: string
    password: string
    schoolId: string
  }

  export type AdminUncheckedCreateInput = {
    id?: string
    username: string
    password: string
    schoolId: string
  }

  export type AdminUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    schoolId?: StringFieldUpdateOperationsInput | string
  }

  export type AdminUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    schoolId?: StringFieldUpdateOperationsInput | string
  }

  export type AdminCreateManyInput = {
    id?: string
    username: string
    password: string
    schoolId: string
  }

  export type AdminUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    schoolId?: StringFieldUpdateOperationsInput | string
  }

  export type AdminUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    schoolId?: StringFieldUpdateOperationsInput | string
  }

  export type TeacherCreateInput = {
    id?: string
    username: string
    password: string
    schoolId: string
  }

  export type TeacherUncheckedCreateInput = {
    id?: string
    username: string
    password: string
    schoolId: string
  }

  export type TeacherUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    schoolId?: StringFieldUpdateOperationsInput | string
  }

  export type TeacherUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    schoolId?: StringFieldUpdateOperationsInput | string
  }

  export type TeacherCreateManyInput = {
    id?: string
    username: string
    password: string
    schoolId: string
  }

  export type TeacherUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    schoolId?: StringFieldUpdateOperationsInput | string
  }

  export type TeacherUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    schoolId?: StringFieldUpdateOperationsInput | string
  }

  export type StudentCreateInput = {
    id?: string
    username: string
    password: string
    schoolId: string
  }

  export type StudentUncheckedCreateInput = {
    id?: string
    username: string
    password: string
    schoolId: string
  }

  export type StudentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    schoolId?: StringFieldUpdateOperationsInput | string
  }

  export type StudentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    schoolId?: StringFieldUpdateOperationsInput | string
  }

  export type StudentCreateManyInput = {
    id?: string
    username: string
    password: string
    schoolId: string
  }

  export type StudentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    schoolId?: StringFieldUpdateOperationsInput | string
  }

  export type StudentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    schoolId?: StringFieldUpdateOperationsInput | string
  }

  export type ParentCreateInput = {
    id?: string
    username: string
    password: string
    schoolId: string
  }

  export type ParentUncheckedCreateInput = {
    id?: string
    username: string
    password: string
    schoolId: string
  }

  export type ParentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    schoolId?: StringFieldUpdateOperationsInput | string
  }

  export type ParentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    schoolId?: StringFieldUpdateOperationsInput | string
  }

  export type ParentCreateManyInput = {
    id?: string
    username: string
    password: string
    schoolId: string
  }

  export type ParentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    schoolId?: StringFieldUpdateOperationsInput | string
  }

  export type ParentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    schoolId?: StringFieldUpdateOperationsInput | string
  }

  export type SchoolManagerCreateInput = {
    id?: string
    email: string
    password: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SchoolManagerUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SchoolManagerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SchoolManagerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type SuperAdminCreateInput = {
    id?: string
    email: string
    password: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SuperAdminUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SuperAdminUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SuperAdminUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SuperAdminCreateManyInput = {
    id?: string
    email: string
    password: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SuperAdminUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SuperAdminUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PasswordResetTokenCreateInput = {
    email: string
    otp: string
    expiresAt: Date | string
    used?: boolean
    createdAt?: Date | string
  }

  export type PasswordResetTokenUncheckedCreateInput = {
    id?: number
    email: string
    otp: string
    expiresAt: Date | string
    used?: boolean
    createdAt?: Date | string
  }

  export type PasswordResetTokenUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    otp?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    used?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PasswordResetTokenUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    otp?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    used?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PasswordResetTokenCreateManyInput = {
    id?: number
    email: string
    otp: string
    expiresAt: Date | string
    used?: boolean
    createdAt?: Date | string
  }

  export type PasswordResetTokenUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    otp?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    used?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PasswordResetTokenUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    otp?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    used?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type AdminCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    schoolId?: SortOrder
  }

  export type AdminMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    schoolId?: SortOrder
  }

  export type AdminMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    schoolId?: SortOrder
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

  export type TeacherCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    schoolId?: SortOrder
  }

  export type TeacherMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    schoolId?: SortOrder
  }

  export type TeacherMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    schoolId?: SortOrder
  }

  export type StudentCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    schoolId?: SortOrder
  }

  export type StudentMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    schoolId?: SortOrder
  }

  export type StudentMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    schoolId?: SortOrder
  }

  export type ParentCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    schoolId?: SortOrder
  }

  export type ParentMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    schoolId?: SortOrder
  }

  export type ParentMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    schoolId?: SortOrder
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

  export type SuperAdminCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SuperAdminMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SuperAdminMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type PasswordResetTokenCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    otp?: SortOrder
    expiresAt?: SortOrder
    used?: SortOrder
    createdAt?: SortOrder
  }

  export type PasswordResetTokenAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PasswordResetTokenMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    otp?: SortOrder
    expiresAt?: SortOrder
    used?: SortOrder
    createdAt?: SortOrder
  }

  export type PasswordResetTokenMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    otp?: SortOrder
    expiresAt?: SortOrder
    used?: SortOrder
    createdAt?: SortOrder
  }

  export type PasswordResetTokenSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
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
     * @deprecated Use AdminDefaultArgs instead
     */
    export type AdminArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AdminDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TeacherDefaultArgs instead
     */
    export type TeacherArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TeacherDefaultArgs<ExtArgs>
    /**
     * @deprecated Use StudentDefaultArgs instead
     */
    export type StudentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = StudentDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ParentDefaultArgs instead
     */
    export type ParentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ParentDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SchoolManagerDefaultArgs instead
     */
    export type SchoolManagerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SchoolManagerDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SuperAdminDefaultArgs instead
     */
    export type SuperAdminArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SuperAdminDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PasswordResetTokenDefaultArgs instead
     */
    export type PasswordResetTokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PasswordResetTokenDefaultArgs<ExtArgs>

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