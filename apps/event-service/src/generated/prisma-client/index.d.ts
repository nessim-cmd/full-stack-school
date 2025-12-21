
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
 * Model Event
 * 
 */
export type Event = $Result.DefaultSelection<Prisma.$EventPayload>
/**
 * Model EventAttendee
 * 
 */
export type EventAttendee = $Result.DefaultSelection<Prisma.$EventAttendeePayload>
/**
 * Model Holiday
 * 
 */
export type Holiday = $Result.DefaultSelection<Prisma.$HolidayPayload>
/**
 * Model AcademicCalendar
 * 
 */
export type AcademicCalendar = $Result.DefaultSelection<Prisma.$AcademicCalendarPayload>
/**
 * Model Term
 * 
 */
export type Term = $Result.DefaultSelection<Prisma.$TermPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const EventType: {
  ACADEMIC: 'ACADEMIC',
  SPORTS: 'SPORTS',
  CULTURAL: 'CULTURAL',
  HOLIDAY: 'HOLIDAY',
  EXAM: 'EXAM',
  MEETING: 'MEETING',
  PARENT_TEACHER: 'PARENT_TEACHER',
  WORKSHOP: 'WORKSHOP',
  OTHER: 'OTHER'
};

export type EventType = (typeof EventType)[keyof typeof EventType]


export const AttendeeStatus: {
  PENDING: 'PENDING',
  ACCEPTED: 'ACCEPTED',
  DECLINED: 'DECLINED'
};

export type AttendeeStatus = (typeof AttendeeStatus)[keyof typeof AttendeeStatus]


export const HolidayType: {
  PUBLIC_HOLIDAY: 'PUBLIC_HOLIDAY',
  SCHOOL_HOLIDAY: 'SCHOOL_HOLIDAY',
  STAFF_ONLY: 'STAFF_ONLY',
  EXAM_BREAK: 'EXAM_BREAK'
};

export type HolidayType = (typeof HolidayType)[keyof typeof HolidayType]

}

export type EventType = $Enums.EventType

export const EventType: typeof $Enums.EventType

export type AttendeeStatus = $Enums.AttendeeStatus

export const AttendeeStatus: typeof $Enums.AttendeeStatus

export type HolidayType = $Enums.HolidayType

export const HolidayType: typeof $Enums.HolidayType

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Events
 * const events = await prisma.event.findMany()
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
   * // Fetch zero or more Events
   * const events = await prisma.event.findMany()
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
   * `prisma.event`: Exposes CRUD operations for the **Event** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Events
    * const events = await prisma.event.findMany()
    * ```
    */
  get event(): Prisma.EventDelegate<ExtArgs>;

  /**
   * `prisma.eventAttendee`: Exposes CRUD operations for the **EventAttendee** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EventAttendees
    * const eventAttendees = await prisma.eventAttendee.findMany()
    * ```
    */
  get eventAttendee(): Prisma.EventAttendeeDelegate<ExtArgs>;

  /**
   * `prisma.holiday`: Exposes CRUD operations for the **Holiday** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Holidays
    * const holidays = await prisma.holiday.findMany()
    * ```
    */
  get holiday(): Prisma.HolidayDelegate<ExtArgs>;

  /**
   * `prisma.academicCalendar`: Exposes CRUD operations for the **AcademicCalendar** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AcademicCalendars
    * const academicCalendars = await prisma.academicCalendar.findMany()
    * ```
    */
  get academicCalendar(): Prisma.AcademicCalendarDelegate<ExtArgs>;

  /**
   * `prisma.term`: Exposes CRUD operations for the **Term** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Terms
    * const terms = await prisma.term.findMany()
    * ```
    */
  get term(): Prisma.TermDelegate<ExtArgs>;
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
    Event: 'Event',
    EventAttendee: 'EventAttendee',
    Holiday: 'Holiday',
    AcademicCalendar: 'AcademicCalendar',
    Term: 'Term'
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
      modelProps: "event" | "eventAttendee" | "holiday" | "academicCalendar" | "term"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Event: {
        payload: Prisma.$EventPayload<ExtArgs>
        fields: Prisma.EventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findFirst: {
            args: Prisma.EventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findMany: {
            args: Prisma.EventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          create: {
            args: Prisma.EventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          createMany: {
            args: Prisma.EventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          delete: {
            args: Prisma.EventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          update: {
            args: Prisma.EventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          deleteMany: {
            args: Prisma.EventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          aggregate: {
            args: Prisma.EventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvent>
          }
          groupBy: {
            args: Prisma.EventGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventCountArgs<ExtArgs>
            result: $Utils.Optional<EventCountAggregateOutputType> | number
          }
        }
      }
      EventAttendee: {
        payload: Prisma.$EventAttendeePayload<ExtArgs>
        fields: Prisma.EventAttendeeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventAttendeeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventAttendeePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventAttendeeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventAttendeePayload>
          }
          findFirst: {
            args: Prisma.EventAttendeeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventAttendeePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventAttendeeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventAttendeePayload>
          }
          findMany: {
            args: Prisma.EventAttendeeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventAttendeePayload>[]
          }
          create: {
            args: Prisma.EventAttendeeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventAttendeePayload>
          }
          createMany: {
            args: Prisma.EventAttendeeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EventAttendeeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventAttendeePayload>[]
          }
          delete: {
            args: Prisma.EventAttendeeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventAttendeePayload>
          }
          update: {
            args: Prisma.EventAttendeeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventAttendeePayload>
          }
          deleteMany: {
            args: Prisma.EventAttendeeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventAttendeeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EventAttendeeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventAttendeePayload>
          }
          aggregate: {
            args: Prisma.EventAttendeeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEventAttendee>
          }
          groupBy: {
            args: Prisma.EventAttendeeGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventAttendeeGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventAttendeeCountArgs<ExtArgs>
            result: $Utils.Optional<EventAttendeeCountAggregateOutputType> | number
          }
        }
      }
      Holiday: {
        payload: Prisma.$HolidayPayload<ExtArgs>
        fields: Prisma.HolidayFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HolidayFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HolidayPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HolidayFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HolidayPayload>
          }
          findFirst: {
            args: Prisma.HolidayFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HolidayPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HolidayFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HolidayPayload>
          }
          findMany: {
            args: Prisma.HolidayFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HolidayPayload>[]
          }
          create: {
            args: Prisma.HolidayCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HolidayPayload>
          }
          createMany: {
            args: Prisma.HolidayCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HolidayCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HolidayPayload>[]
          }
          delete: {
            args: Prisma.HolidayDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HolidayPayload>
          }
          update: {
            args: Prisma.HolidayUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HolidayPayload>
          }
          deleteMany: {
            args: Prisma.HolidayDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HolidayUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.HolidayUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HolidayPayload>
          }
          aggregate: {
            args: Prisma.HolidayAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHoliday>
          }
          groupBy: {
            args: Prisma.HolidayGroupByArgs<ExtArgs>
            result: $Utils.Optional<HolidayGroupByOutputType>[]
          }
          count: {
            args: Prisma.HolidayCountArgs<ExtArgs>
            result: $Utils.Optional<HolidayCountAggregateOutputType> | number
          }
        }
      }
      AcademicCalendar: {
        payload: Prisma.$AcademicCalendarPayload<ExtArgs>
        fields: Prisma.AcademicCalendarFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AcademicCalendarFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcademicCalendarPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AcademicCalendarFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcademicCalendarPayload>
          }
          findFirst: {
            args: Prisma.AcademicCalendarFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcademicCalendarPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AcademicCalendarFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcademicCalendarPayload>
          }
          findMany: {
            args: Prisma.AcademicCalendarFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcademicCalendarPayload>[]
          }
          create: {
            args: Prisma.AcademicCalendarCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcademicCalendarPayload>
          }
          createMany: {
            args: Prisma.AcademicCalendarCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AcademicCalendarCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcademicCalendarPayload>[]
          }
          delete: {
            args: Prisma.AcademicCalendarDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcademicCalendarPayload>
          }
          update: {
            args: Prisma.AcademicCalendarUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcademicCalendarPayload>
          }
          deleteMany: {
            args: Prisma.AcademicCalendarDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AcademicCalendarUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AcademicCalendarUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcademicCalendarPayload>
          }
          aggregate: {
            args: Prisma.AcademicCalendarAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAcademicCalendar>
          }
          groupBy: {
            args: Prisma.AcademicCalendarGroupByArgs<ExtArgs>
            result: $Utils.Optional<AcademicCalendarGroupByOutputType>[]
          }
          count: {
            args: Prisma.AcademicCalendarCountArgs<ExtArgs>
            result: $Utils.Optional<AcademicCalendarCountAggregateOutputType> | number
          }
        }
      }
      Term: {
        payload: Prisma.$TermPayload<ExtArgs>
        fields: Prisma.TermFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TermFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TermPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TermFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TermPayload>
          }
          findFirst: {
            args: Prisma.TermFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TermPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TermFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TermPayload>
          }
          findMany: {
            args: Prisma.TermFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TermPayload>[]
          }
          create: {
            args: Prisma.TermCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TermPayload>
          }
          createMany: {
            args: Prisma.TermCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TermCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TermPayload>[]
          }
          delete: {
            args: Prisma.TermDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TermPayload>
          }
          update: {
            args: Prisma.TermUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TermPayload>
          }
          deleteMany: {
            args: Prisma.TermDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TermUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TermUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TermPayload>
          }
          aggregate: {
            args: Prisma.TermAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTerm>
          }
          groupBy: {
            args: Prisma.TermGroupByArgs<ExtArgs>
            result: $Utils.Optional<TermGroupByOutputType>[]
          }
          count: {
            args: Prisma.TermCountArgs<ExtArgs>
            result: $Utils.Optional<TermCountAggregateOutputType> | number
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
   * Count Type EventCountOutputType
   */

  export type EventCountOutputType = {
    attendees: number
  }

  export type EventCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attendees?: boolean | EventCountOutputTypeCountAttendeesArgs
  }

  // Custom InputTypes
  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventCountOutputType
     */
    select?: EventCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeCountAttendeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventAttendeeWhereInput
  }


  /**
   * Count Type AcademicCalendarCountOutputType
   */

  export type AcademicCalendarCountOutputType = {
    terms: number
  }

  export type AcademicCalendarCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    terms?: boolean | AcademicCalendarCountOutputTypeCountTermsArgs
  }

  // Custom InputTypes
  /**
   * AcademicCalendarCountOutputType without action
   */
  export type AcademicCalendarCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcademicCalendarCountOutputType
     */
    select?: AcademicCalendarCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AcademicCalendarCountOutputType without action
   */
  export type AcademicCalendarCountOutputTypeCountTermsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TermWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Event
   */

  export type AggregateEvent = {
    _count: EventCountAggregateOutputType | null
    _avg: EventAvgAggregateOutputType | null
    _sum: EventSumAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  export type EventAvgAggregateOutputType = {
    classId: number | null
    gradeId: number | null
  }

  export type EventSumAggregateOutputType = {
    classId: number | null
    gradeId: number | null
  }

  export type EventMinAggregateOutputType = {
    id: string | null
    schoolId: string | null
    title: string | null
    description: string | null
    startDate: Date | null
    endDate: Date | null
    allDay: boolean | null
    location: string | null
    type: $Enums.EventType | null
    color: string | null
    isPublic: boolean | null
    classId: number | null
    gradeId: number | null
    isRecurring: boolean | null
    reminderSent: boolean | null
    createdBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EventMaxAggregateOutputType = {
    id: string | null
    schoolId: string | null
    title: string | null
    description: string | null
    startDate: Date | null
    endDate: Date | null
    allDay: boolean | null
    location: string | null
    type: $Enums.EventType | null
    color: string | null
    isPublic: boolean | null
    classId: number | null
    gradeId: number | null
    isRecurring: boolean | null
    reminderSent: boolean | null
    createdBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EventCountAggregateOutputType = {
    id: number
    schoolId: number
    title: number
    description: number
    startDate: number
    endDate: number
    allDay: number
    location: number
    type: number
    color: number
    isPublic: number
    classId: number
    gradeId: number
    isRecurring: number
    recurrence: number
    reminderSent: number
    createdBy: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EventAvgAggregateInputType = {
    classId?: true
    gradeId?: true
  }

  export type EventSumAggregateInputType = {
    classId?: true
    gradeId?: true
  }

  export type EventMinAggregateInputType = {
    id?: true
    schoolId?: true
    title?: true
    description?: true
    startDate?: true
    endDate?: true
    allDay?: true
    location?: true
    type?: true
    color?: true
    isPublic?: true
    classId?: true
    gradeId?: true
    isRecurring?: true
    reminderSent?: true
    createdBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EventMaxAggregateInputType = {
    id?: true
    schoolId?: true
    title?: true
    description?: true
    startDate?: true
    endDate?: true
    allDay?: true
    location?: true
    type?: true
    color?: true
    isPublic?: true
    classId?: true
    gradeId?: true
    isRecurring?: true
    reminderSent?: true
    createdBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EventCountAggregateInputType = {
    id?: true
    schoolId?: true
    title?: true
    description?: true
    startDate?: true
    endDate?: true
    allDay?: true
    location?: true
    type?: true
    color?: true
    isPublic?: true
    classId?: true
    gradeId?: true
    isRecurring?: true
    recurrence?: true
    reminderSent?: true
    createdBy?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Event to aggregate.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Events
    **/
    _count?: true | EventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EventAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EventSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventMaxAggregateInputType
  }

  export type GetEventAggregateType<T extends EventAggregateArgs> = {
        [P in keyof T & keyof AggregateEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvent[P]>
      : GetScalarType<T[P], AggregateEvent[P]>
  }




  export type EventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
    orderBy?: EventOrderByWithAggregationInput | EventOrderByWithAggregationInput[]
    by: EventScalarFieldEnum[] | EventScalarFieldEnum
    having?: EventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventCountAggregateInputType | true
    _avg?: EventAvgAggregateInputType
    _sum?: EventSumAggregateInputType
    _min?: EventMinAggregateInputType
    _max?: EventMaxAggregateInputType
  }

  export type EventGroupByOutputType = {
    id: string
    schoolId: string
    title: string
    description: string | null
    startDate: Date
    endDate: Date
    allDay: boolean
    location: string | null
    type: $Enums.EventType
    color: string | null
    isPublic: boolean
    classId: number | null
    gradeId: number | null
    isRecurring: boolean
    recurrence: JsonValue | null
    reminderSent: boolean
    createdBy: string
    createdAt: Date
    updatedAt: Date
    _count: EventCountAggregateOutputType | null
    _avg: EventAvgAggregateOutputType | null
    _sum: EventSumAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  type GetEventGroupByPayload<T extends EventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventGroupByOutputType[P]>
            : GetScalarType<T[P], EventGroupByOutputType[P]>
        }
      >
    >


  export type EventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    schoolId?: boolean
    title?: boolean
    description?: boolean
    startDate?: boolean
    endDate?: boolean
    allDay?: boolean
    location?: boolean
    type?: boolean
    color?: boolean
    isPublic?: boolean
    classId?: boolean
    gradeId?: boolean
    isRecurring?: boolean
    recurrence?: boolean
    reminderSent?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    attendees?: boolean | Event$attendeesArgs<ExtArgs>
    _count?: boolean | EventCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type EventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    schoolId?: boolean
    title?: boolean
    description?: boolean
    startDate?: boolean
    endDate?: boolean
    allDay?: boolean
    location?: boolean
    type?: boolean
    color?: boolean
    isPublic?: boolean
    classId?: boolean
    gradeId?: boolean
    isRecurring?: boolean
    recurrence?: boolean
    reminderSent?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["event"]>

  export type EventSelectScalar = {
    id?: boolean
    schoolId?: boolean
    title?: boolean
    description?: boolean
    startDate?: boolean
    endDate?: boolean
    allDay?: boolean
    location?: boolean
    type?: boolean
    color?: boolean
    isPublic?: boolean
    classId?: boolean
    gradeId?: boolean
    isRecurring?: boolean
    recurrence?: boolean
    reminderSent?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attendees?: boolean | Event$attendeesArgs<ExtArgs>
    _count?: boolean | EventCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EventIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $EventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Event"
    objects: {
      attendees: Prisma.$EventAttendeePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      schoolId: string
      title: string
      description: string | null
      startDate: Date
      endDate: Date
      allDay: boolean
      location: string | null
      type: $Enums.EventType
      color: string | null
      isPublic: boolean
      classId: number | null
      gradeId: number | null
      isRecurring: boolean
      recurrence: Prisma.JsonValue | null
      reminderSent: boolean
      createdBy: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["event"]>
    composites: {}
  }

  type EventGetPayload<S extends boolean | null | undefined | EventDefaultArgs> = $Result.GetResult<Prisma.$EventPayload, S>

  type EventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<EventFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: EventCountAggregateInputType | true
    }

  export interface EventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Event'], meta: { name: 'Event' } }
    /**
     * Find zero or one Event that matches the filter.
     * @param {EventFindUniqueArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventFindUniqueArgs>(args: SelectSubset<T, EventFindUniqueArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Event that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {EventFindUniqueOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventFindUniqueOrThrowArgs>(args: SelectSubset<T, EventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Event that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventFindFirstArgs>(args?: SelectSubset<T, EventFindFirstArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Event that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventFindFirstOrThrowArgs>(args?: SelectSubset<T, EventFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Events
     * const events = await prisma.event.findMany()
     * 
     * // Get first 10 Events
     * const events = await prisma.event.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventWithIdOnly = await prisma.event.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventFindManyArgs>(args?: SelectSubset<T, EventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Event.
     * @param {EventCreateArgs} args - Arguments to create a Event.
     * @example
     * // Create one Event
     * const Event = await prisma.event.create({
     *   data: {
     *     // ... data to create a Event
     *   }
     * })
     * 
     */
    create<T extends EventCreateArgs>(args: SelectSubset<T, EventCreateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Events.
     * @param {EventCreateManyArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventCreateManyArgs>(args?: SelectSubset<T, EventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Events and returns the data saved in the database.
     * @param {EventCreateManyAndReturnArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Events and only return the `id`
     * const eventWithIdOnly = await prisma.event.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EventCreateManyAndReturnArgs>(args?: SelectSubset<T, EventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Event.
     * @param {EventDeleteArgs} args - Arguments to delete one Event.
     * @example
     * // Delete one Event
     * const Event = await prisma.event.delete({
     *   where: {
     *     // ... filter to delete one Event
     *   }
     * })
     * 
     */
    delete<T extends EventDeleteArgs>(args: SelectSubset<T, EventDeleteArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Event.
     * @param {EventUpdateArgs} args - Arguments to update one Event.
     * @example
     * // Update one Event
     * const event = await prisma.event.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventUpdateArgs>(args: SelectSubset<T, EventUpdateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Events.
     * @param {EventDeleteManyArgs} args - Arguments to filter Events to delete.
     * @example
     * // Delete a few Events
     * const { count } = await prisma.event.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventDeleteManyArgs>(args?: SelectSubset<T, EventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Events
     * const event = await prisma.event.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventUpdateManyArgs>(args: SelectSubset<T, EventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Event.
     * @param {EventUpsertArgs} args - Arguments to update or create a Event.
     * @example
     * // Update or create a Event
     * const event = await prisma.event.upsert({
     *   create: {
     *     // ... data to create a Event
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Event we want to update
     *   }
     * })
     */
    upsert<T extends EventUpsertArgs>(args: SelectSubset<T, EventUpsertArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventCountArgs} args - Arguments to filter Events to count.
     * @example
     * // Count the number of Events
     * const count = await prisma.event.count({
     *   where: {
     *     // ... the filter for the Events we want to count
     *   }
     * })
    **/
    count<T extends EventCountArgs>(
      args?: Subset<T, EventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EventAggregateArgs>(args: Subset<T, EventAggregateArgs>): Prisma.PrismaPromise<GetEventAggregateType<T>>

    /**
     * Group by Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventGroupByArgs} args - Group by arguments.
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
      T extends EventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventGroupByArgs['orderBy'] }
        : { orderBy?: EventGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Event model
   */
  readonly fields: EventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Event.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    attendees<T extends Event$attendeesArgs<ExtArgs> = {}>(args?: Subset<T, Event$attendeesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventAttendeePayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Event model
   */ 
  interface EventFieldRefs {
    readonly id: FieldRef<"Event", 'String'>
    readonly schoolId: FieldRef<"Event", 'String'>
    readonly title: FieldRef<"Event", 'String'>
    readonly description: FieldRef<"Event", 'String'>
    readonly startDate: FieldRef<"Event", 'DateTime'>
    readonly endDate: FieldRef<"Event", 'DateTime'>
    readonly allDay: FieldRef<"Event", 'Boolean'>
    readonly location: FieldRef<"Event", 'String'>
    readonly type: FieldRef<"Event", 'EventType'>
    readonly color: FieldRef<"Event", 'String'>
    readonly isPublic: FieldRef<"Event", 'Boolean'>
    readonly classId: FieldRef<"Event", 'Int'>
    readonly gradeId: FieldRef<"Event", 'Int'>
    readonly isRecurring: FieldRef<"Event", 'Boolean'>
    readonly recurrence: FieldRef<"Event", 'Json'>
    readonly reminderSent: FieldRef<"Event", 'Boolean'>
    readonly createdBy: FieldRef<"Event", 'String'>
    readonly createdAt: FieldRef<"Event", 'DateTime'>
    readonly updatedAt: FieldRef<"Event", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Event findUnique
   */
  export type EventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findUniqueOrThrow
   */
  export type EventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findFirst
   */
  export type EventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findFirstOrThrow
   */
  export type EventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findMany
   */
  export type EventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Events to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event create
   */
  export type EventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The data needed to create a Event.
     */
    data: XOR<EventCreateInput, EventUncheckedCreateInput>
  }

  /**
   * Event createMany
   */
  export type EventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Events.
     */
    data: EventCreateManyInput | EventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Event createManyAndReturn
   */
  export type EventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Events.
     */
    data: EventCreateManyInput | EventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Event update
   */
  export type EventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The data needed to update a Event.
     */
    data: XOR<EventUpdateInput, EventUncheckedUpdateInput>
    /**
     * Choose, which Event to update.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event updateMany
   */
  export type EventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Events.
     */
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     */
    where?: EventWhereInput
  }

  /**
   * Event upsert
   */
  export type EventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The filter to search for the Event to update in case it exists.
     */
    where: EventWhereUniqueInput
    /**
     * In case the Event found by the `where` argument doesn't exist, create a new Event with this data.
     */
    create: XOR<EventCreateInput, EventUncheckedCreateInput>
    /**
     * In case the Event was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventUpdateInput, EventUncheckedUpdateInput>
  }

  /**
   * Event delete
   */
  export type EventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter which Event to delete.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event deleteMany
   */
  export type EventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Events to delete
     */
    where?: EventWhereInput
  }

  /**
   * Event.attendees
   */
  export type Event$attendeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventAttendee
     */
    select?: EventAttendeeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventAttendeeInclude<ExtArgs> | null
    where?: EventAttendeeWhereInput
    orderBy?: EventAttendeeOrderByWithRelationInput | EventAttendeeOrderByWithRelationInput[]
    cursor?: EventAttendeeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventAttendeeScalarFieldEnum | EventAttendeeScalarFieldEnum[]
  }

  /**
   * Event without action
   */
  export type EventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
  }


  /**
   * Model EventAttendee
   */

  export type AggregateEventAttendee = {
    _count: EventAttendeeCountAggregateOutputType | null
    _min: EventAttendeeMinAggregateOutputType | null
    _max: EventAttendeeMaxAggregateOutputType | null
  }

  export type EventAttendeeMinAggregateOutputType = {
    id: string | null
    eventId: string | null
    userId: string | null
    userType: string | null
    status: $Enums.AttendeeStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EventAttendeeMaxAggregateOutputType = {
    id: string | null
    eventId: string | null
    userId: string | null
    userType: string | null
    status: $Enums.AttendeeStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EventAttendeeCountAggregateOutputType = {
    id: number
    eventId: number
    userId: number
    userType: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EventAttendeeMinAggregateInputType = {
    id?: true
    eventId?: true
    userId?: true
    userType?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EventAttendeeMaxAggregateInputType = {
    id?: true
    eventId?: true
    userId?: true
    userType?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EventAttendeeCountAggregateInputType = {
    id?: true
    eventId?: true
    userId?: true
    userType?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EventAttendeeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventAttendee to aggregate.
     */
    where?: EventAttendeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventAttendees to fetch.
     */
    orderBy?: EventAttendeeOrderByWithRelationInput | EventAttendeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventAttendeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventAttendees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventAttendees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EventAttendees
    **/
    _count?: true | EventAttendeeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventAttendeeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventAttendeeMaxAggregateInputType
  }

  export type GetEventAttendeeAggregateType<T extends EventAttendeeAggregateArgs> = {
        [P in keyof T & keyof AggregateEventAttendee]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEventAttendee[P]>
      : GetScalarType<T[P], AggregateEventAttendee[P]>
  }




  export type EventAttendeeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventAttendeeWhereInput
    orderBy?: EventAttendeeOrderByWithAggregationInput | EventAttendeeOrderByWithAggregationInput[]
    by: EventAttendeeScalarFieldEnum[] | EventAttendeeScalarFieldEnum
    having?: EventAttendeeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventAttendeeCountAggregateInputType | true
    _min?: EventAttendeeMinAggregateInputType
    _max?: EventAttendeeMaxAggregateInputType
  }

  export type EventAttendeeGroupByOutputType = {
    id: string
    eventId: string
    userId: string
    userType: string
    status: $Enums.AttendeeStatus
    createdAt: Date
    updatedAt: Date
    _count: EventAttendeeCountAggregateOutputType | null
    _min: EventAttendeeMinAggregateOutputType | null
    _max: EventAttendeeMaxAggregateOutputType | null
  }

  type GetEventAttendeeGroupByPayload<T extends EventAttendeeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventAttendeeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventAttendeeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventAttendeeGroupByOutputType[P]>
            : GetScalarType<T[P], EventAttendeeGroupByOutputType[P]>
        }
      >
    >


  export type EventAttendeeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    userId?: boolean
    userType?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventAttendee"]>

  export type EventAttendeeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    userId?: boolean
    userType?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventAttendee"]>

  export type EventAttendeeSelectScalar = {
    id?: boolean
    eventId?: boolean
    userId?: boolean
    userType?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EventAttendeeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
  }
  export type EventAttendeeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
  }

  export type $EventAttendeePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EventAttendee"
    objects: {
      event: Prisma.$EventPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      eventId: string
      userId: string
      userType: string
      status: $Enums.AttendeeStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["eventAttendee"]>
    composites: {}
  }

  type EventAttendeeGetPayload<S extends boolean | null | undefined | EventAttendeeDefaultArgs> = $Result.GetResult<Prisma.$EventAttendeePayload, S>

  type EventAttendeeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<EventAttendeeFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: EventAttendeeCountAggregateInputType | true
    }

  export interface EventAttendeeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EventAttendee'], meta: { name: 'EventAttendee' } }
    /**
     * Find zero or one EventAttendee that matches the filter.
     * @param {EventAttendeeFindUniqueArgs} args - Arguments to find a EventAttendee
     * @example
     * // Get one EventAttendee
     * const eventAttendee = await prisma.eventAttendee.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventAttendeeFindUniqueArgs>(args: SelectSubset<T, EventAttendeeFindUniqueArgs<ExtArgs>>): Prisma__EventAttendeeClient<$Result.GetResult<Prisma.$EventAttendeePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one EventAttendee that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {EventAttendeeFindUniqueOrThrowArgs} args - Arguments to find a EventAttendee
     * @example
     * // Get one EventAttendee
     * const eventAttendee = await prisma.eventAttendee.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventAttendeeFindUniqueOrThrowArgs>(args: SelectSubset<T, EventAttendeeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventAttendeeClient<$Result.GetResult<Prisma.$EventAttendeePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first EventAttendee that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventAttendeeFindFirstArgs} args - Arguments to find a EventAttendee
     * @example
     * // Get one EventAttendee
     * const eventAttendee = await prisma.eventAttendee.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventAttendeeFindFirstArgs>(args?: SelectSubset<T, EventAttendeeFindFirstArgs<ExtArgs>>): Prisma__EventAttendeeClient<$Result.GetResult<Prisma.$EventAttendeePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first EventAttendee that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventAttendeeFindFirstOrThrowArgs} args - Arguments to find a EventAttendee
     * @example
     * // Get one EventAttendee
     * const eventAttendee = await prisma.eventAttendee.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventAttendeeFindFirstOrThrowArgs>(args?: SelectSubset<T, EventAttendeeFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventAttendeeClient<$Result.GetResult<Prisma.$EventAttendeePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more EventAttendees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventAttendeeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EventAttendees
     * const eventAttendees = await prisma.eventAttendee.findMany()
     * 
     * // Get first 10 EventAttendees
     * const eventAttendees = await prisma.eventAttendee.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventAttendeeWithIdOnly = await prisma.eventAttendee.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventAttendeeFindManyArgs>(args?: SelectSubset<T, EventAttendeeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventAttendeePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a EventAttendee.
     * @param {EventAttendeeCreateArgs} args - Arguments to create a EventAttendee.
     * @example
     * // Create one EventAttendee
     * const EventAttendee = await prisma.eventAttendee.create({
     *   data: {
     *     // ... data to create a EventAttendee
     *   }
     * })
     * 
     */
    create<T extends EventAttendeeCreateArgs>(args: SelectSubset<T, EventAttendeeCreateArgs<ExtArgs>>): Prisma__EventAttendeeClient<$Result.GetResult<Prisma.$EventAttendeePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many EventAttendees.
     * @param {EventAttendeeCreateManyArgs} args - Arguments to create many EventAttendees.
     * @example
     * // Create many EventAttendees
     * const eventAttendee = await prisma.eventAttendee.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventAttendeeCreateManyArgs>(args?: SelectSubset<T, EventAttendeeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EventAttendees and returns the data saved in the database.
     * @param {EventAttendeeCreateManyAndReturnArgs} args - Arguments to create many EventAttendees.
     * @example
     * // Create many EventAttendees
     * const eventAttendee = await prisma.eventAttendee.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EventAttendees and only return the `id`
     * const eventAttendeeWithIdOnly = await prisma.eventAttendee.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EventAttendeeCreateManyAndReturnArgs>(args?: SelectSubset<T, EventAttendeeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventAttendeePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a EventAttendee.
     * @param {EventAttendeeDeleteArgs} args - Arguments to delete one EventAttendee.
     * @example
     * // Delete one EventAttendee
     * const EventAttendee = await prisma.eventAttendee.delete({
     *   where: {
     *     // ... filter to delete one EventAttendee
     *   }
     * })
     * 
     */
    delete<T extends EventAttendeeDeleteArgs>(args: SelectSubset<T, EventAttendeeDeleteArgs<ExtArgs>>): Prisma__EventAttendeeClient<$Result.GetResult<Prisma.$EventAttendeePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one EventAttendee.
     * @param {EventAttendeeUpdateArgs} args - Arguments to update one EventAttendee.
     * @example
     * // Update one EventAttendee
     * const eventAttendee = await prisma.eventAttendee.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventAttendeeUpdateArgs>(args: SelectSubset<T, EventAttendeeUpdateArgs<ExtArgs>>): Prisma__EventAttendeeClient<$Result.GetResult<Prisma.$EventAttendeePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more EventAttendees.
     * @param {EventAttendeeDeleteManyArgs} args - Arguments to filter EventAttendees to delete.
     * @example
     * // Delete a few EventAttendees
     * const { count } = await prisma.eventAttendee.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventAttendeeDeleteManyArgs>(args?: SelectSubset<T, EventAttendeeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EventAttendees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventAttendeeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EventAttendees
     * const eventAttendee = await prisma.eventAttendee.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventAttendeeUpdateManyArgs>(args: SelectSubset<T, EventAttendeeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one EventAttendee.
     * @param {EventAttendeeUpsertArgs} args - Arguments to update or create a EventAttendee.
     * @example
     * // Update or create a EventAttendee
     * const eventAttendee = await prisma.eventAttendee.upsert({
     *   create: {
     *     // ... data to create a EventAttendee
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EventAttendee we want to update
     *   }
     * })
     */
    upsert<T extends EventAttendeeUpsertArgs>(args: SelectSubset<T, EventAttendeeUpsertArgs<ExtArgs>>): Prisma__EventAttendeeClient<$Result.GetResult<Prisma.$EventAttendeePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of EventAttendees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventAttendeeCountArgs} args - Arguments to filter EventAttendees to count.
     * @example
     * // Count the number of EventAttendees
     * const count = await prisma.eventAttendee.count({
     *   where: {
     *     // ... the filter for the EventAttendees we want to count
     *   }
     * })
    **/
    count<T extends EventAttendeeCountArgs>(
      args?: Subset<T, EventAttendeeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventAttendeeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EventAttendee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventAttendeeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EventAttendeeAggregateArgs>(args: Subset<T, EventAttendeeAggregateArgs>): Prisma.PrismaPromise<GetEventAttendeeAggregateType<T>>

    /**
     * Group by EventAttendee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventAttendeeGroupByArgs} args - Group by arguments.
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
      T extends EventAttendeeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventAttendeeGroupByArgs['orderBy'] }
        : { orderBy?: EventAttendeeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EventAttendeeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventAttendeeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EventAttendee model
   */
  readonly fields: EventAttendeeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EventAttendee.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventAttendeeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    event<T extends EventDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventDefaultArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the EventAttendee model
   */ 
  interface EventAttendeeFieldRefs {
    readonly id: FieldRef<"EventAttendee", 'String'>
    readonly eventId: FieldRef<"EventAttendee", 'String'>
    readonly userId: FieldRef<"EventAttendee", 'String'>
    readonly userType: FieldRef<"EventAttendee", 'String'>
    readonly status: FieldRef<"EventAttendee", 'AttendeeStatus'>
    readonly createdAt: FieldRef<"EventAttendee", 'DateTime'>
    readonly updatedAt: FieldRef<"EventAttendee", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * EventAttendee findUnique
   */
  export type EventAttendeeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventAttendee
     */
    select?: EventAttendeeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventAttendeeInclude<ExtArgs> | null
    /**
     * Filter, which EventAttendee to fetch.
     */
    where: EventAttendeeWhereUniqueInput
  }

  /**
   * EventAttendee findUniqueOrThrow
   */
  export type EventAttendeeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventAttendee
     */
    select?: EventAttendeeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventAttendeeInclude<ExtArgs> | null
    /**
     * Filter, which EventAttendee to fetch.
     */
    where: EventAttendeeWhereUniqueInput
  }

  /**
   * EventAttendee findFirst
   */
  export type EventAttendeeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventAttendee
     */
    select?: EventAttendeeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventAttendeeInclude<ExtArgs> | null
    /**
     * Filter, which EventAttendee to fetch.
     */
    where?: EventAttendeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventAttendees to fetch.
     */
    orderBy?: EventAttendeeOrderByWithRelationInput | EventAttendeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventAttendees.
     */
    cursor?: EventAttendeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventAttendees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventAttendees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventAttendees.
     */
    distinct?: EventAttendeeScalarFieldEnum | EventAttendeeScalarFieldEnum[]
  }

  /**
   * EventAttendee findFirstOrThrow
   */
  export type EventAttendeeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventAttendee
     */
    select?: EventAttendeeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventAttendeeInclude<ExtArgs> | null
    /**
     * Filter, which EventAttendee to fetch.
     */
    where?: EventAttendeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventAttendees to fetch.
     */
    orderBy?: EventAttendeeOrderByWithRelationInput | EventAttendeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventAttendees.
     */
    cursor?: EventAttendeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventAttendees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventAttendees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventAttendees.
     */
    distinct?: EventAttendeeScalarFieldEnum | EventAttendeeScalarFieldEnum[]
  }

  /**
   * EventAttendee findMany
   */
  export type EventAttendeeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventAttendee
     */
    select?: EventAttendeeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventAttendeeInclude<ExtArgs> | null
    /**
     * Filter, which EventAttendees to fetch.
     */
    where?: EventAttendeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventAttendees to fetch.
     */
    orderBy?: EventAttendeeOrderByWithRelationInput | EventAttendeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EventAttendees.
     */
    cursor?: EventAttendeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventAttendees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventAttendees.
     */
    skip?: number
    distinct?: EventAttendeeScalarFieldEnum | EventAttendeeScalarFieldEnum[]
  }

  /**
   * EventAttendee create
   */
  export type EventAttendeeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventAttendee
     */
    select?: EventAttendeeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventAttendeeInclude<ExtArgs> | null
    /**
     * The data needed to create a EventAttendee.
     */
    data: XOR<EventAttendeeCreateInput, EventAttendeeUncheckedCreateInput>
  }

  /**
   * EventAttendee createMany
   */
  export type EventAttendeeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EventAttendees.
     */
    data: EventAttendeeCreateManyInput | EventAttendeeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EventAttendee createManyAndReturn
   */
  export type EventAttendeeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventAttendee
     */
    select?: EventAttendeeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many EventAttendees.
     */
    data: EventAttendeeCreateManyInput | EventAttendeeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventAttendeeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EventAttendee update
   */
  export type EventAttendeeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventAttendee
     */
    select?: EventAttendeeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventAttendeeInclude<ExtArgs> | null
    /**
     * The data needed to update a EventAttendee.
     */
    data: XOR<EventAttendeeUpdateInput, EventAttendeeUncheckedUpdateInput>
    /**
     * Choose, which EventAttendee to update.
     */
    where: EventAttendeeWhereUniqueInput
  }

  /**
   * EventAttendee updateMany
   */
  export type EventAttendeeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EventAttendees.
     */
    data: XOR<EventAttendeeUpdateManyMutationInput, EventAttendeeUncheckedUpdateManyInput>
    /**
     * Filter which EventAttendees to update
     */
    where?: EventAttendeeWhereInput
  }

  /**
   * EventAttendee upsert
   */
  export type EventAttendeeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventAttendee
     */
    select?: EventAttendeeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventAttendeeInclude<ExtArgs> | null
    /**
     * The filter to search for the EventAttendee to update in case it exists.
     */
    where: EventAttendeeWhereUniqueInput
    /**
     * In case the EventAttendee found by the `where` argument doesn't exist, create a new EventAttendee with this data.
     */
    create: XOR<EventAttendeeCreateInput, EventAttendeeUncheckedCreateInput>
    /**
     * In case the EventAttendee was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventAttendeeUpdateInput, EventAttendeeUncheckedUpdateInput>
  }

  /**
   * EventAttendee delete
   */
  export type EventAttendeeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventAttendee
     */
    select?: EventAttendeeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventAttendeeInclude<ExtArgs> | null
    /**
     * Filter which EventAttendee to delete.
     */
    where: EventAttendeeWhereUniqueInput
  }

  /**
   * EventAttendee deleteMany
   */
  export type EventAttendeeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventAttendees to delete
     */
    where?: EventAttendeeWhereInput
  }

  /**
   * EventAttendee without action
   */
  export type EventAttendeeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventAttendee
     */
    select?: EventAttendeeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventAttendeeInclude<ExtArgs> | null
  }


  /**
   * Model Holiday
   */

  export type AggregateHoliday = {
    _count: HolidayCountAggregateOutputType | null
    _min: HolidayMinAggregateOutputType | null
    _max: HolidayMaxAggregateOutputType | null
  }

  export type HolidayMinAggregateOutputType = {
    id: string | null
    schoolId: string | null
    name: string | null
    date: Date | null
    endDate: Date | null
    type: $Enums.HolidayType | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HolidayMaxAggregateOutputType = {
    id: string | null
    schoolId: string | null
    name: string | null
    date: Date | null
    endDate: Date | null
    type: $Enums.HolidayType | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HolidayCountAggregateOutputType = {
    id: number
    schoolId: number
    name: number
    date: number
    endDate: number
    type: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type HolidayMinAggregateInputType = {
    id?: true
    schoolId?: true
    name?: true
    date?: true
    endDate?: true
    type?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HolidayMaxAggregateInputType = {
    id?: true
    schoolId?: true
    name?: true
    date?: true
    endDate?: true
    type?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HolidayCountAggregateInputType = {
    id?: true
    schoolId?: true
    name?: true
    date?: true
    endDate?: true
    type?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type HolidayAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Holiday to aggregate.
     */
    where?: HolidayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Holidays to fetch.
     */
    orderBy?: HolidayOrderByWithRelationInput | HolidayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HolidayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Holidays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Holidays.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Holidays
    **/
    _count?: true | HolidayCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HolidayMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HolidayMaxAggregateInputType
  }

  export type GetHolidayAggregateType<T extends HolidayAggregateArgs> = {
        [P in keyof T & keyof AggregateHoliday]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHoliday[P]>
      : GetScalarType<T[P], AggregateHoliday[P]>
  }




  export type HolidayGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HolidayWhereInput
    orderBy?: HolidayOrderByWithAggregationInput | HolidayOrderByWithAggregationInput[]
    by: HolidayScalarFieldEnum[] | HolidayScalarFieldEnum
    having?: HolidayScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HolidayCountAggregateInputType | true
    _min?: HolidayMinAggregateInputType
    _max?: HolidayMaxAggregateInputType
  }

  export type HolidayGroupByOutputType = {
    id: string
    schoolId: string
    name: string
    date: Date
    endDate: Date | null
    type: $Enums.HolidayType
    description: string | null
    createdAt: Date
    updatedAt: Date
    _count: HolidayCountAggregateOutputType | null
    _min: HolidayMinAggregateOutputType | null
    _max: HolidayMaxAggregateOutputType | null
  }

  type GetHolidayGroupByPayload<T extends HolidayGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HolidayGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HolidayGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HolidayGroupByOutputType[P]>
            : GetScalarType<T[P], HolidayGroupByOutputType[P]>
        }
      >
    >


  export type HolidaySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    schoolId?: boolean
    name?: boolean
    date?: boolean
    endDate?: boolean
    type?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["holiday"]>

  export type HolidaySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    schoolId?: boolean
    name?: boolean
    date?: boolean
    endDate?: boolean
    type?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["holiday"]>

  export type HolidaySelectScalar = {
    id?: boolean
    schoolId?: boolean
    name?: boolean
    date?: boolean
    endDate?: boolean
    type?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $HolidayPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Holiday"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      schoolId: string
      name: string
      date: Date
      endDate: Date | null
      type: $Enums.HolidayType
      description: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["holiday"]>
    composites: {}
  }

  type HolidayGetPayload<S extends boolean | null | undefined | HolidayDefaultArgs> = $Result.GetResult<Prisma.$HolidayPayload, S>

  type HolidayCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<HolidayFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: HolidayCountAggregateInputType | true
    }

  export interface HolidayDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Holiday'], meta: { name: 'Holiday' } }
    /**
     * Find zero or one Holiday that matches the filter.
     * @param {HolidayFindUniqueArgs} args - Arguments to find a Holiday
     * @example
     * // Get one Holiday
     * const holiday = await prisma.holiday.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HolidayFindUniqueArgs>(args: SelectSubset<T, HolidayFindUniqueArgs<ExtArgs>>): Prisma__HolidayClient<$Result.GetResult<Prisma.$HolidayPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Holiday that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {HolidayFindUniqueOrThrowArgs} args - Arguments to find a Holiday
     * @example
     * // Get one Holiday
     * const holiday = await prisma.holiday.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HolidayFindUniqueOrThrowArgs>(args: SelectSubset<T, HolidayFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HolidayClient<$Result.GetResult<Prisma.$HolidayPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Holiday that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HolidayFindFirstArgs} args - Arguments to find a Holiday
     * @example
     * // Get one Holiday
     * const holiday = await prisma.holiday.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HolidayFindFirstArgs>(args?: SelectSubset<T, HolidayFindFirstArgs<ExtArgs>>): Prisma__HolidayClient<$Result.GetResult<Prisma.$HolidayPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Holiday that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HolidayFindFirstOrThrowArgs} args - Arguments to find a Holiday
     * @example
     * // Get one Holiday
     * const holiday = await prisma.holiday.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HolidayFindFirstOrThrowArgs>(args?: SelectSubset<T, HolidayFindFirstOrThrowArgs<ExtArgs>>): Prisma__HolidayClient<$Result.GetResult<Prisma.$HolidayPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Holidays that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HolidayFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Holidays
     * const holidays = await prisma.holiday.findMany()
     * 
     * // Get first 10 Holidays
     * const holidays = await prisma.holiday.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const holidayWithIdOnly = await prisma.holiday.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HolidayFindManyArgs>(args?: SelectSubset<T, HolidayFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HolidayPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Holiday.
     * @param {HolidayCreateArgs} args - Arguments to create a Holiday.
     * @example
     * // Create one Holiday
     * const Holiday = await prisma.holiday.create({
     *   data: {
     *     // ... data to create a Holiday
     *   }
     * })
     * 
     */
    create<T extends HolidayCreateArgs>(args: SelectSubset<T, HolidayCreateArgs<ExtArgs>>): Prisma__HolidayClient<$Result.GetResult<Prisma.$HolidayPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Holidays.
     * @param {HolidayCreateManyArgs} args - Arguments to create many Holidays.
     * @example
     * // Create many Holidays
     * const holiday = await prisma.holiday.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HolidayCreateManyArgs>(args?: SelectSubset<T, HolidayCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Holidays and returns the data saved in the database.
     * @param {HolidayCreateManyAndReturnArgs} args - Arguments to create many Holidays.
     * @example
     * // Create many Holidays
     * const holiday = await prisma.holiday.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Holidays and only return the `id`
     * const holidayWithIdOnly = await prisma.holiday.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HolidayCreateManyAndReturnArgs>(args?: SelectSubset<T, HolidayCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HolidayPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Holiday.
     * @param {HolidayDeleteArgs} args - Arguments to delete one Holiday.
     * @example
     * // Delete one Holiday
     * const Holiday = await prisma.holiday.delete({
     *   where: {
     *     // ... filter to delete one Holiday
     *   }
     * })
     * 
     */
    delete<T extends HolidayDeleteArgs>(args: SelectSubset<T, HolidayDeleteArgs<ExtArgs>>): Prisma__HolidayClient<$Result.GetResult<Prisma.$HolidayPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Holiday.
     * @param {HolidayUpdateArgs} args - Arguments to update one Holiday.
     * @example
     * // Update one Holiday
     * const holiday = await prisma.holiday.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HolidayUpdateArgs>(args: SelectSubset<T, HolidayUpdateArgs<ExtArgs>>): Prisma__HolidayClient<$Result.GetResult<Prisma.$HolidayPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Holidays.
     * @param {HolidayDeleteManyArgs} args - Arguments to filter Holidays to delete.
     * @example
     * // Delete a few Holidays
     * const { count } = await prisma.holiday.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HolidayDeleteManyArgs>(args?: SelectSubset<T, HolidayDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Holidays.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HolidayUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Holidays
     * const holiday = await prisma.holiday.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HolidayUpdateManyArgs>(args: SelectSubset<T, HolidayUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Holiday.
     * @param {HolidayUpsertArgs} args - Arguments to update or create a Holiday.
     * @example
     * // Update or create a Holiday
     * const holiday = await prisma.holiday.upsert({
     *   create: {
     *     // ... data to create a Holiday
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Holiday we want to update
     *   }
     * })
     */
    upsert<T extends HolidayUpsertArgs>(args: SelectSubset<T, HolidayUpsertArgs<ExtArgs>>): Prisma__HolidayClient<$Result.GetResult<Prisma.$HolidayPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Holidays.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HolidayCountArgs} args - Arguments to filter Holidays to count.
     * @example
     * // Count the number of Holidays
     * const count = await prisma.holiday.count({
     *   where: {
     *     // ... the filter for the Holidays we want to count
     *   }
     * })
    **/
    count<T extends HolidayCountArgs>(
      args?: Subset<T, HolidayCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HolidayCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Holiday.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HolidayAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HolidayAggregateArgs>(args: Subset<T, HolidayAggregateArgs>): Prisma.PrismaPromise<GetHolidayAggregateType<T>>

    /**
     * Group by Holiday.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HolidayGroupByArgs} args - Group by arguments.
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
      T extends HolidayGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HolidayGroupByArgs['orderBy'] }
        : { orderBy?: HolidayGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HolidayGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHolidayGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Holiday model
   */
  readonly fields: HolidayFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Holiday.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HolidayClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Holiday model
   */ 
  interface HolidayFieldRefs {
    readonly id: FieldRef<"Holiday", 'String'>
    readonly schoolId: FieldRef<"Holiday", 'String'>
    readonly name: FieldRef<"Holiday", 'String'>
    readonly date: FieldRef<"Holiday", 'DateTime'>
    readonly endDate: FieldRef<"Holiday", 'DateTime'>
    readonly type: FieldRef<"Holiday", 'HolidayType'>
    readonly description: FieldRef<"Holiday", 'String'>
    readonly createdAt: FieldRef<"Holiday", 'DateTime'>
    readonly updatedAt: FieldRef<"Holiday", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Holiday findUnique
   */
  export type HolidayFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Holiday
     */
    select?: HolidaySelect<ExtArgs> | null
    /**
     * Filter, which Holiday to fetch.
     */
    where: HolidayWhereUniqueInput
  }

  /**
   * Holiday findUniqueOrThrow
   */
  export type HolidayFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Holiday
     */
    select?: HolidaySelect<ExtArgs> | null
    /**
     * Filter, which Holiday to fetch.
     */
    where: HolidayWhereUniqueInput
  }

  /**
   * Holiday findFirst
   */
  export type HolidayFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Holiday
     */
    select?: HolidaySelect<ExtArgs> | null
    /**
     * Filter, which Holiday to fetch.
     */
    where?: HolidayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Holidays to fetch.
     */
    orderBy?: HolidayOrderByWithRelationInput | HolidayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Holidays.
     */
    cursor?: HolidayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Holidays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Holidays.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Holidays.
     */
    distinct?: HolidayScalarFieldEnum | HolidayScalarFieldEnum[]
  }

  /**
   * Holiday findFirstOrThrow
   */
  export type HolidayFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Holiday
     */
    select?: HolidaySelect<ExtArgs> | null
    /**
     * Filter, which Holiday to fetch.
     */
    where?: HolidayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Holidays to fetch.
     */
    orderBy?: HolidayOrderByWithRelationInput | HolidayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Holidays.
     */
    cursor?: HolidayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Holidays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Holidays.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Holidays.
     */
    distinct?: HolidayScalarFieldEnum | HolidayScalarFieldEnum[]
  }

  /**
   * Holiday findMany
   */
  export type HolidayFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Holiday
     */
    select?: HolidaySelect<ExtArgs> | null
    /**
     * Filter, which Holidays to fetch.
     */
    where?: HolidayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Holidays to fetch.
     */
    orderBy?: HolidayOrderByWithRelationInput | HolidayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Holidays.
     */
    cursor?: HolidayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Holidays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Holidays.
     */
    skip?: number
    distinct?: HolidayScalarFieldEnum | HolidayScalarFieldEnum[]
  }

  /**
   * Holiday create
   */
  export type HolidayCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Holiday
     */
    select?: HolidaySelect<ExtArgs> | null
    /**
     * The data needed to create a Holiday.
     */
    data: XOR<HolidayCreateInput, HolidayUncheckedCreateInput>
  }

  /**
   * Holiday createMany
   */
  export type HolidayCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Holidays.
     */
    data: HolidayCreateManyInput | HolidayCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Holiday createManyAndReturn
   */
  export type HolidayCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Holiday
     */
    select?: HolidaySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Holidays.
     */
    data: HolidayCreateManyInput | HolidayCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Holiday update
   */
  export type HolidayUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Holiday
     */
    select?: HolidaySelect<ExtArgs> | null
    /**
     * The data needed to update a Holiday.
     */
    data: XOR<HolidayUpdateInput, HolidayUncheckedUpdateInput>
    /**
     * Choose, which Holiday to update.
     */
    where: HolidayWhereUniqueInput
  }

  /**
   * Holiday updateMany
   */
  export type HolidayUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Holidays.
     */
    data: XOR<HolidayUpdateManyMutationInput, HolidayUncheckedUpdateManyInput>
    /**
     * Filter which Holidays to update
     */
    where?: HolidayWhereInput
  }

  /**
   * Holiday upsert
   */
  export type HolidayUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Holiday
     */
    select?: HolidaySelect<ExtArgs> | null
    /**
     * The filter to search for the Holiday to update in case it exists.
     */
    where: HolidayWhereUniqueInput
    /**
     * In case the Holiday found by the `where` argument doesn't exist, create a new Holiday with this data.
     */
    create: XOR<HolidayCreateInput, HolidayUncheckedCreateInput>
    /**
     * In case the Holiday was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HolidayUpdateInput, HolidayUncheckedUpdateInput>
  }

  /**
   * Holiday delete
   */
  export type HolidayDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Holiday
     */
    select?: HolidaySelect<ExtArgs> | null
    /**
     * Filter which Holiday to delete.
     */
    where: HolidayWhereUniqueInput
  }

  /**
   * Holiday deleteMany
   */
  export type HolidayDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Holidays to delete
     */
    where?: HolidayWhereInput
  }

  /**
   * Holiday without action
   */
  export type HolidayDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Holiday
     */
    select?: HolidaySelect<ExtArgs> | null
  }


  /**
   * Model AcademicCalendar
   */

  export type AggregateAcademicCalendar = {
    _count: AcademicCalendarCountAggregateOutputType | null
    _min: AcademicCalendarMinAggregateOutputType | null
    _max: AcademicCalendarMaxAggregateOutputType | null
  }

  export type AcademicCalendarMinAggregateOutputType = {
    id: string | null
    schoolId: string | null
    academicYear: string | null
    startDate: Date | null
    endDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AcademicCalendarMaxAggregateOutputType = {
    id: string | null
    schoolId: string | null
    academicYear: string | null
    startDate: Date | null
    endDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AcademicCalendarCountAggregateOutputType = {
    id: number
    schoolId: number
    academicYear: number
    startDate: number
    endDate: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AcademicCalendarMinAggregateInputType = {
    id?: true
    schoolId?: true
    academicYear?: true
    startDate?: true
    endDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AcademicCalendarMaxAggregateInputType = {
    id?: true
    schoolId?: true
    academicYear?: true
    startDate?: true
    endDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AcademicCalendarCountAggregateInputType = {
    id?: true
    schoolId?: true
    academicYear?: true
    startDate?: true
    endDate?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AcademicCalendarAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AcademicCalendar to aggregate.
     */
    where?: AcademicCalendarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AcademicCalendars to fetch.
     */
    orderBy?: AcademicCalendarOrderByWithRelationInput | AcademicCalendarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AcademicCalendarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AcademicCalendars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AcademicCalendars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AcademicCalendars
    **/
    _count?: true | AcademicCalendarCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AcademicCalendarMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AcademicCalendarMaxAggregateInputType
  }

  export type GetAcademicCalendarAggregateType<T extends AcademicCalendarAggregateArgs> = {
        [P in keyof T & keyof AggregateAcademicCalendar]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAcademicCalendar[P]>
      : GetScalarType<T[P], AggregateAcademicCalendar[P]>
  }




  export type AcademicCalendarGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AcademicCalendarWhereInput
    orderBy?: AcademicCalendarOrderByWithAggregationInput | AcademicCalendarOrderByWithAggregationInput[]
    by: AcademicCalendarScalarFieldEnum[] | AcademicCalendarScalarFieldEnum
    having?: AcademicCalendarScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AcademicCalendarCountAggregateInputType | true
    _min?: AcademicCalendarMinAggregateInputType
    _max?: AcademicCalendarMaxAggregateInputType
  }

  export type AcademicCalendarGroupByOutputType = {
    id: string
    schoolId: string
    academicYear: string
    startDate: Date
    endDate: Date
    createdAt: Date
    updatedAt: Date
    _count: AcademicCalendarCountAggregateOutputType | null
    _min: AcademicCalendarMinAggregateOutputType | null
    _max: AcademicCalendarMaxAggregateOutputType | null
  }

  type GetAcademicCalendarGroupByPayload<T extends AcademicCalendarGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AcademicCalendarGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AcademicCalendarGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AcademicCalendarGroupByOutputType[P]>
            : GetScalarType<T[P], AcademicCalendarGroupByOutputType[P]>
        }
      >
    >


  export type AcademicCalendarSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    schoolId?: boolean
    academicYear?: boolean
    startDate?: boolean
    endDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    terms?: boolean | AcademicCalendar$termsArgs<ExtArgs>
    _count?: boolean | AcademicCalendarCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["academicCalendar"]>

  export type AcademicCalendarSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    schoolId?: boolean
    academicYear?: boolean
    startDate?: boolean
    endDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["academicCalendar"]>

  export type AcademicCalendarSelectScalar = {
    id?: boolean
    schoolId?: boolean
    academicYear?: boolean
    startDate?: boolean
    endDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AcademicCalendarInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    terms?: boolean | AcademicCalendar$termsArgs<ExtArgs>
    _count?: boolean | AcademicCalendarCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AcademicCalendarIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AcademicCalendarPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AcademicCalendar"
    objects: {
      terms: Prisma.$TermPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      schoolId: string
      academicYear: string
      startDate: Date
      endDate: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["academicCalendar"]>
    composites: {}
  }

  type AcademicCalendarGetPayload<S extends boolean | null | undefined | AcademicCalendarDefaultArgs> = $Result.GetResult<Prisma.$AcademicCalendarPayload, S>

  type AcademicCalendarCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AcademicCalendarFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AcademicCalendarCountAggregateInputType | true
    }

  export interface AcademicCalendarDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AcademicCalendar'], meta: { name: 'AcademicCalendar' } }
    /**
     * Find zero or one AcademicCalendar that matches the filter.
     * @param {AcademicCalendarFindUniqueArgs} args - Arguments to find a AcademicCalendar
     * @example
     * // Get one AcademicCalendar
     * const academicCalendar = await prisma.academicCalendar.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AcademicCalendarFindUniqueArgs>(args: SelectSubset<T, AcademicCalendarFindUniqueArgs<ExtArgs>>): Prisma__AcademicCalendarClient<$Result.GetResult<Prisma.$AcademicCalendarPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one AcademicCalendar that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AcademicCalendarFindUniqueOrThrowArgs} args - Arguments to find a AcademicCalendar
     * @example
     * // Get one AcademicCalendar
     * const academicCalendar = await prisma.academicCalendar.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AcademicCalendarFindUniqueOrThrowArgs>(args: SelectSubset<T, AcademicCalendarFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AcademicCalendarClient<$Result.GetResult<Prisma.$AcademicCalendarPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first AcademicCalendar that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcademicCalendarFindFirstArgs} args - Arguments to find a AcademicCalendar
     * @example
     * // Get one AcademicCalendar
     * const academicCalendar = await prisma.academicCalendar.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AcademicCalendarFindFirstArgs>(args?: SelectSubset<T, AcademicCalendarFindFirstArgs<ExtArgs>>): Prisma__AcademicCalendarClient<$Result.GetResult<Prisma.$AcademicCalendarPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first AcademicCalendar that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcademicCalendarFindFirstOrThrowArgs} args - Arguments to find a AcademicCalendar
     * @example
     * // Get one AcademicCalendar
     * const academicCalendar = await prisma.academicCalendar.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AcademicCalendarFindFirstOrThrowArgs>(args?: SelectSubset<T, AcademicCalendarFindFirstOrThrowArgs<ExtArgs>>): Prisma__AcademicCalendarClient<$Result.GetResult<Prisma.$AcademicCalendarPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more AcademicCalendars that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcademicCalendarFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AcademicCalendars
     * const academicCalendars = await prisma.academicCalendar.findMany()
     * 
     * // Get first 10 AcademicCalendars
     * const academicCalendars = await prisma.academicCalendar.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const academicCalendarWithIdOnly = await prisma.academicCalendar.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AcademicCalendarFindManyArgs>(args?: SelectSubset<T, AcademicCalendarFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AcademicCalendarPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a AcademicCalendar.
     * @param {AcademicCalendarCreateArgs} args - Arguments to create a AcademicCalendar.
     * @example
     * // Create one AcademicCalendar
     * const AcademicCalendar = await prisma.academicCalendar.create({
     *   data: {
     *     // ... data to create a AcademicCalendar
     *   }
     * })
     * 
     */
    create<T extends AcademicCalendarCreateArgs>(args: SelectSubset<T, AcademicCalendarCreateArgs<ExtArgs>>): Prisma__AcademicCalendarClient<$Result.GetResult<Prisma.$AcademicCalendarPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many AcademicCalendars.
     * @param {AcademicCalendarCreateManyArgs} args - Arguments to create many AcademicCalendars.
     * @example
     * // Create many AcademicCalendars
     * const academicCalendar = await prisma.academicCalendar.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AcademicCalendarCreateManyArgs>(args?: SelectSubset<T, AcademicCalendarCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AcademicCalendars and returns the data saved in the database.
     * @param {AcademicCalendarCreateManyAndReturnArgs} args - Arguments to create many AcademicCalendars.
     * @example
     * // Create many AcademicCalendars
     * const academicCalendar = await prisma.academicCalendar.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AcademicCalendars and only return the `id`
     * const academicCalendarWithIdOnly = await prisma.academicCalendar.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AcademicCalendarCreateManyAndReturnArgs>(args?: SelectSubset<T, AcademicCalendarCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AcademicCalendarPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a AcademicCalendar.
     * @param {AcademicCalendarDeleteArgs} args - Arguments to delete one AcademicCalendar.
     * @example
     * // Delete one AcademicCalendar
     * const AcademicCalendar = await prisma.academicCalendar.delete({
     *   where: {
     *     // ... filter to delete one AcademicCalendar
     *   }
     * })
     * 
     */
    delete<T extends AcademicCalendarDeleteArgs>(args: SelectSubset<T, AcademicCalendarDeleteArgs<ExtArgs>>): Prisma__AcademicCalendarClient<$Result.GetResult<Prisma.$AcademicCalendarPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one AcademicCalendar.
     * @param {AcademicCalendarUpdateArgs} args - Arguments to update one AcademicCalendar.
     * @example
     * // Update one AcademicCalendar
     * const academicCalendar = await prisma.academicCalendar.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AcademicCalendarUpdateArgs>(args: SelectSubset<T, AcademicCalendarUpdateArgs<ExtArgs>>): Prisma__AcademicCalendarClient<$Result.GetResult<Prisma.$AcademicCalendarPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more AcademicCalendars.
     * @param {AcademicCalendarDeleteManyArgs} args - Arguments to filter AcademicCalendars to delete.
     * @example
     * // Delete a few AcademicCalendars
     * const { count } = await prisma.academicCalendar.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AcademicCalendarDeleteManyArgs>(args?: SelectSubset<T, AcademicCalendarDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AcademicCalendars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcademicCalendarUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AcademicCalendars
     * const academicCalendar = await prisma.academicCalendar.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AcademicCalendarUpdateManyArgs>(args: SelectSubset<T, AcademicCalendarUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AcademicCalendar.
     * @param {AcademicCalendarUpsertArgs} args - Arguments to update or create a AcademicCalendar.
     * @example
     * // Update or create a AcademicCalendar
     * const academicCalendar = await prisma.academicCalendar.upsert({
     *   create: {
     *     // ... data to create a AcademicCalendar
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AcademicCalendar we want to update
     *   }
     * })
     */
    upsert<T extends AcademicCalendarUpsertArgs>(args: SelectSubset<T, AcademicCalendarUpsertArgs<ExtArgs>>): Prisma__AcademicCalendarClient<$Result.GetResult<Prisma.$AcademicCalendarPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of AcademicCalendars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcademicCalendarCountArgs} args - Arguments to filter AcademicCalendars to count.
     * @example
     * // Count the number of AcademicCalendars
     * const count = await prisma.academicCalendar.count({
     *   where: {
     *     // ... the filter for the AcademicCalendars we want to count
     *   }
     * })
    **/
    count<T extends AcademicCalendarCountArgs>(
      args?: Subset<T, AcademicCalendarCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AcademicCalendarCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AcademicCalendar.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcademicCalendarAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AcademicCalendarAggregateArgs>(args: Subset<T, AcademicCalendarAggregateArgs>): Prisma.PrismaPromise<GetAcademicCalendarAggregateType<T>>

    /**
     * Group by AcademicCalendar.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcademicCalendarGroupByArgs} args - Group by arguments.
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
      T extends AcademicCalendarGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AcademicCalendarGroupByArgs['orderBy'] }
        : { orderBy?: AcademicCalendarGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AcademicCalendarGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAcademicCalendarGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AcademicCalendar model
   */
  readonly fields: AcademicCalendarFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AcademicCalendar.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AcademicCalendarClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    terms<T extends AcademicCalendar$termsArgs<ExtArgs> = {}>(args?: Subset<T, AcademicCalendar$termsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TermPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the AcademicCalendar model
   */ 
  interface AcademicCalendarFieldRefs {
    readonly id: FieldRef<"AcademicCalendar", 'String'>
    readonly schoolId: FieldRef<"AcademicCalendar", 'String'>
    readonly academicYear: FieldRef<"AcademicCalendar", 'String'>
    readonly startDate: FieldRef<"AcademicCalendar", 'DateTime'>
    readonly endDate: FieldRef<"AcademicCalendar", 'DateTime'>
    readonly createdAt: FieldRef<"AcademicCalendar", 'DateTime'>
    readonly updatedAt: FieldRef<"AcademicCalendar", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AcademicCalendar findUnique
   */
  export type AcademicCalendarFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcademicCalendar
     */
    select?: AcademicCalendarSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcademicCalendarInclude<ExtArgs> | null
    /**
     * Filter, which AcademicCalendar to fetch.
     */
    where: AcademicCalendarWhereUniqueInput
  }

  /**
   * AcademicCalendar findUniqueOrThrow
   */
  export type AcademicCalendarFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcademicCalendar
     */
    select?: AcademicCalendarSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcademicCalendarInclude<ExtArgs> | null
    /**
     * Filter, which AcademicCalendar to fetch.
     */
    where: AcademicCalendarWhereUniqueInput
  }

  /**
   * AcademicCalendar findFirst
   */
  export type AcademicCalendarFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcademicCalendar
     */
    select?: AcademicCalendarSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcademicCalendarInclude<ExtArgs> | null
    /**
     * Filter, which AcademicCalendar to fetch.
     */
    where?: AcademicCalendarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AcademicCalendars to fetch.
     */
    orderBy?: AcademicCalendarOrderByWithRelationInput | AcademicCalendarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AcademicCalendars.
     */
    cursor?: AcademicCalendarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AcademicCalendars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AcademicCalendars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AcademicCalendars.
     */
    distinct?: AcademicCalendarScalarFieldEnum | AcademicCalendarScalarFieldEnum[]
  }

  /**
   * AcademicCalendar findFirstOrThrow
   */
  export type AcademicCalendarFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcademicCalendar
     */
    select?: AcademicCalendarSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcademicCalendarInclude<ExtArgs> | null
    /**
     * Filter, which AcademicCalendar to fetch.
     */
    where?: AcademicCalendarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AcademicCalendars to fetch.
     */
    orderBy?: AcademicCalendarOrderByWithRelationInput | AcademicCalendarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AcademicCalendars.
     */
    cursor?: AcademicCalendarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AcademicCalendars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AcademicCalendars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AcademicCalendars.
     */
    distinct?: AcademicCalendarScalarFieldEnum | AcademicCalendarScalarFieldEnum[]
  }

  /**
   * AcademicCalendar findMany
   */
  export type AcademicCalendarFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcademicCalendar
     */
    select?: AcademicCalendarSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcademicCalendarInclude<ExtArgs> | null
    /**
     * Filter, which AcademicCalendars to fetch.
     */
    where?: AcademicCalendarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AcademicCalendars to fetch.
     */
    orderBy?: AcademicCalendarOrderByWithRelationInput | AcademicCalendarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AcademicCalendars.
     */
    cursor?: AcademicCalendarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AcademicCalendars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AcademicCalendars.
     */
    skip?: number
    distinct?: AcademicCalendarScalarFieldEnum | AcademicCalendarScalarFieldEnum[]
  }

  /**
   * AcademicCalendar create
   */
  export type AcademicCalendarCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcademicCalendar
     */
    select?: AcademicCalendarSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcademicCalendarInclude<ExtArgs> | null
    /**
     * The data needed to create a AcademicCalendar.
     */
    data: XOR<AcademicCalendarCreateInput, AcademicCalendarUncheckedCreateInput>
  }

  /**
   * AcademicCalendar createMany
   */
  export type AcademicCalendarCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AcademicCalendars.
     */
    data: AcademicCalendarCreateManyInput | AcademicCalendarCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AcademicCalendar createManyAndReturn
   */
  export type AcademicCalendarCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcademicCalendar
     */
    select?: AcademicCalendarSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many AcademicCalendars.
     */
    data: AcademicCalendarCreateManyInput | AcademicCalendarCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AcademicCalendar update
   */
  export type AcademicCalendarUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcademicCalendar
     */
    select?: AcademicCalendarSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcademicCalendarInclude<ExtArgs> | null
    /**
     * The data needed to update a AcademicCalendar.
     */
    data: XOR<AcademicCalendarUpdateInput, AcademicCalendarUncheckedUpdateInput>
    /**
     * Choose, which AcademicCalendar to update.
     */
    where: AcademicCalendarWhereUniqueInput
  }

  /**
   * AcademicCalendar updateMany
   */
  export type AcademicCalendarUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AcademicCalendars.
     */
    data: XOR<AcademicCalendarUpdateManyMutationInput, AcademicCalendarUncheckedUpdateManyInput>
    /**
     * Filter which AcademicCalendars to update
     */
    where?: AcademicCalendarWhereInput
  }

  /**
   * AcademicCalendar upsert
   */
  export type AcademicCalendarUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcademicCalendar
     */
    select?: AcademicCalendarSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcademicCalendarInclude<ExtArgs> | null
    /**
     * The filter to search for the AcademicCalendar to update in case it exists.
     */
    where: AcademicCalendarWhereUniqueInput
    /**
     * In case the AcademicCalendar found by the `where` argument doesn't exist, create a new AcademicCalendar with this data.
     */
    create: XOR<AcademicCalendarCreateInput, AcademicCalendarUncheckedCreateInput>
    /**
     * In case the AcademicCalendar was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AcademicCalendarUpdateInput, AcademicCalendarUncheckedUpdateInput>
  }

  /**
   * AcademicCalendar delete
   */
  export type AcademicCalendarDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcademicCalendar
     */
    select?: AcademicCalendarSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcademicCalendarInclude<ExtArgs> | null
    /**
     * Filter which AcademicCalendar to delete.
     */
    where: AcademicCalendarWhereUniqueInput
  }

  /**
   * AcademicCalendar deleteMany
   */
  export type AcademicCalendarDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AcademicCalendars to delete
     */
    where?: AcademicCalendarWhereInput
  }

  /**
   * AcademicCalendar.terms
   */
  export type AcademicCalendar$termsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Term
     */
    select?: TermSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TermInclude<ExtArgs> | null
    where?: TermWhereInput
    orderBy?: TermOrderByWithRelationInput | TermOrderByWithRelationInput[]
    cursor?: TermWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TermScalarFieldEnum | TermScalarFieldEnum[]
  }

  /**
   * AcademicCalendar without action
   */
  export type AcademicCalendarDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcademicCalendar
     */
    select?: AcademicCalendarSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcademicCalendarInclude<ExtArgs> | null
  }


  /**
   * Model Term
   */

  export type AggregateTerm = {
    _count: TermCountAggregateOutputType | null
    _min: TermMinAggregateOutputType | null
    _max: TermMaxAggregateOutputType | null
  }

  export type TermMinAggregateOutputType = {
    id: string | null
    calendarId: string | null
    name: string | null
    startDate: Date | null
    endDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TermMaxAggregateOutputType = {
    id: string | null
    calendarId: string | null
    name: string | null
    startDate: Date | null
    endDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TermCountAggregateOutputType = {
    id: number
    calendarId: number
    name: number
    startDate: number
    endDate: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TermMinAggregateInputType = {
    id?: true
    calendarId?: true
    name?: true
    startDate?: true
    endDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TermMaxAggregateInputType = {
    id?: true
    calendarId?: true
    name?: true
    startDate?: true
    endDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TermCountAggregateInputType = {
    id?: true
    calendarId?: true
    name?: true
    startDate?: true
    endDate?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TermAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Term to aggregate.
     */
    where?: TermWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Terms to fetch.
     */
    orderBy?: TermOrderByWithRelationInput | TermOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TermWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Terms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Terms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Terms
    **/
    _count?: true | TermCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TermMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TermMaxAggregateInputType
  }

  export type GetTermAggregateType<T extends TermAggregateArgs> = {
        [P in keyof T & keyof AggregateTerm]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTerm[P]>
      : GetScalarType<T[P], AggregateTerm[P]>
  }




  export type TermGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TermWhereInput
    orderBy?: TermOrderByWithAggregationInput | TermOrderByWithAggregationInput[]
    by: TermScalarFieldEnum[] | TermScalarFieldEnum
    having?: TermScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TermCountAggregateInputType | true
    _min?: TermMinAggregateInputType
    _max?: TermMaxAggregateInputType
  }

  export type TermGroupByOutputType = {
    id: string
    calendarId: string
    name: string
    startDate: Date
    endDate: Date
    createdAt: Date
    updatedAt: Date
    _count: TermCountAggregateOutputType | null
    _min: TermMinAggregateOutputType | null
    _max: TermMaxAggregateOutputType | null
  }

  type GetTermGroupByPayload<T extends TermGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TermGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TermGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TermGroupByOutputType[P]>
            : GetScalarType<T[P], TermGroupByOutputType[P]>
        }
      >
    >


  export type TermSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    calendarId?: boolean
    name?: boolean
    startDate?: boolean
    endDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    calendar?: boolean | AcademicCalendarDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["term"]>

  export type TermSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    calendarId?: boolean
    name?: boolean
    startDate?: boolean
    endDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    calendar?: boolean | AcademicCalendarDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["term"]>

  export type TermSelectScalar = {
    id?: boolean
    calendarId?: boolean
    name?: boolean
    startDate?: boolean
    endDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TermInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    calendar?: boolean | AcademicCalendarDefaultArgs<ExtArgs>
  }
  export type TermIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    calendar?: boolean | AcademicCalendarDefaultArgs<ExtArgs>
  }

  export type $TermPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Term"
    objects: {
      calendar: Prisma.$AcademicCalendarPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      calendarId: string
      name: string
      startDate: Date
      endDate: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["term"]>
    composites: {}
  }

  type TermGetPayload<S extends boolean | null | undefined | TermDefaultArgs> = $Result.GetResult<Prisma.$TermPayload, S>

  type TermCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TermFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TermCountAggregateInputType | true
    }

  export interface TermDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Term'], meta: { name: 'Term' } }
    /**
     * Find zero or one Term that matches the filter.
     * @param {TermFindUniqueArgs} args - Arguments to find a Term
     * @example
     * // Get one Term
     * const term = await prisma.term.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TermFindUniqueArgs>(args: SelectSubset<T, TermFindUniqueArgs<ExtArgs>>): Prisma__TermClient<$Result.GetResult<Prisma.$TermPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Term that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TermFindUniqueOrThrowArgs} args - Arguments to find a Term
     * @example
     * // Get one Term
     * const term = await prisma.term.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TermFindUniqueOrThrowArgs>(args: SelectSubset<T, TermFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TermClient<$Result.GetResult<Prisma.$TermPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Term that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TermFindFirstArgs} args - Arguments to find a Term
     * @example
     * // Get one Term
     * const term = await prisma.term.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TermFindFirstArgs>(args?: SelectSubset<T, TermFindFirstArgs<ExtArgs>>): Prisma__TermClient<$Result.GetResult<Prisma.$TermPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Term that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TermFindFirstOrThrowArgs} args - Arguments to find a Term
     * @example
     * // Get one Term
     * const term = await prisma.term.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TermFindFirstOrThrowArgs>(args?: SelectSubset<T, TermFindFirstOrThrowArgs<ExtArgs>>): Prisma__TermClient<$Result.GetResult<Prisma.$TermPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Terms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TermFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Terms
     * const terms = await prisma.term.findMany()
     * 
     * // Get first 10 Terms
     * const terms = await prisma.term.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const termWithIdOnly = await prisma.term.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TermFindManyArgs>(args?: SelectSubset<T, TermFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TermPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Term.
     * @param {TermCreateArgs} args - Arguments to create a Term.
     * @example
     * // Create one Term
     * const Term = await prisma.term.create({
     *   data: {
     *     // ... data to create a Term
     *   }
     * })
     * 
     */
    create<T extends TermCreateArgs>(args: SelectSubset<T, TermCreateArgs<ExtArgs>>): Prisma__TermClient<$Result.GetResult<Prisma.$TermPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Terms.
     * @param {TermCreateManyArgs} args - Arguments to create many Terms.
     * @example
     * // Create many Terms
     * const term = await prisma.term.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TermCreateManyArgs>(args?: SelectSubset<T, TermCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Terms and returns the data saved in the database.
     * @param {TermCreateManyAndReturnArgs} args - Arguments to create many Terms.
     * @example
     * // Create many Terms
     * const term = await prisma.term.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Terms and only return the `id`
     * const termWithIdOnly = await prisma.term.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TermCreateManyAndReturnArgs>(args?: SelectSubset<T, TermCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TermPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Term.
     * @param {TermDeleteArgs} args - Arguments to delete one Term.
     * @example
     * // Delete one Term
     * const Term = await prisma.term.delete({
     *   where: {
     *     // ... filter to delete one Term
     *   }
     * })
     * 
     */
    delete<T extends TermDeleteArgs>(args: SelectSubset<T, TermDeleteArgs<ExtArgs>>): Prisma__TermClient<$Result.GetResult<Prisma.$TermPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Term.
     * @param {TermUpdateArgs} args - Arguments to update one Term.
     * @example
     * // Update one Term
     * const term = await prisma.term.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TermUpdateArgs>(args: SelectSubset<T, TermUpdateArgs<ExtArgs>>): Prisma__TermClient<$Result.GetResult<Prisma.$TermPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Terms.
     * @param {TermDeleteManyArgs} args - Arguments to filter Terms to delete.
     * @example
     * // Delete a few Terms
     * const { count } = await prisma.term.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TermDeleteManyArgs>(args?: SelectSubset<T, TermDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Terms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TermUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Terms
     * const term = await prisma.term.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TermUpdateManyArgs>(args: SelectSubset<T, TermUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Term.
     * @param {TermUpsertArgs} args - Arguments to update or create a Term.
     * @example
     * // Update or create a Term
     * const term = await prisma.term.upsert({
     *   create: {
     *     // ... data to create a Term
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Term we want to update
     *   }
     * })
     */
    upsert<T extends TermUpsertArgs>(args: SelectSubset<T, TermUpsertArgs<ExtArgs>>): Prisma__TermClient<$Result.GetResult<Prisma.$TermPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Terms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TermCountArgs} args - Arguments to filter Terms to count.
     * @example
     * // Count the number of Terms
     * const count = await prisma.term.count({
     *   where: {
     *     // ... the filter for the Terms we want to count
     *   }
     * })
    **/
    count<T extends TermCountArgs>(
      args?: Subset<T, TermCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TermCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Term.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TermAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TermAggregateArgs>(args: Subset<T, TermAggregateArgs>): Prisma.PrismaPromise<GetTermAggregateType<T>>

    /**
     * Group by Term.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TermGroupByArgs} args - Group by arguments.
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
      T extends TermGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TermGroupByArgs['orderBy'] }
        : { orderBy?: TermGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TermGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTermGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Term model
   */
  readonly fields: TermFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Term.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TermClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    calendar<T extends AcademicCalendarDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AcademicCalendarDefaultArgs<ExtArgs>>): Prisma__AcademicCalendarClient<$Result.GetResult<Prisma.$AcademicCalendarPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the Term model
   */ 
  interface TermFieldRefs {
    readonly id: FieldRef<"Term", 'String'>
    readonly calendarId: FieldRef<"Term", 'String'>
    readonly name: FieldRef<"Term", 'String'>
    readonly startDate: FieldRef<"Term", 'DateTime'>
    readonly endDate: FieldRef<"Term", 'DateTime'>
    readonly createdAt: FieldRef<"Term", 'DateTime'>
    readonly updatedAt: FieldRef<"Term", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Term findUnique
   */
  export type TermFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Term
     */
    select?: TermSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TermInclude<ExtArgs> | null
    /**
     * Filter, which Term to fetch.
     */
    where: TermWhereUniqueInput
  }

  /**
   * Term findUniqueOrThrow
   */
  export type TermFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Term
     */
    select?: TermSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TermInclude<ExtArgs> | null
    /**
     * Filter, which Term to fetch.
     */
    where: TermWhereUniqueInput
  }

  /**
   * Term findFirst
   */
  export type TermFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Term
     */
    select?: TermSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TermInclude<ExtArgs> | null
    /**
     * Filter, which Term to fetch.
     */
    where?: TermWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Terms to fetch.
     */
    orderBy?: TermOrderByWithRelationInput | TermOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Terms.
     */
    cursor?: TermWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Terms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Terms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Terms.
     */
    distinct?: TermScalarFieldEnum | TermScalarFieldEnum[]
  }

  /**
   * Term findFirstOrThrow
   */
  export type TermFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Term
     */
    select?: TermSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TermInclude<ExtArgs> | null
    /**
     * Filter, which Term to fetch.
     */
    where?: TermWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Terms to fetch.
     */
    orderBy?: TermOrderByWithRelationInput | TermOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Terms.
     */
    cursor?: TermWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Terms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Terms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Terms.
     */
    distinct?: TermScalarFieldEnum | TermScalarFieldEnum[]
  }

  /**
   * Term findMany
   */
  export type TermFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Term
     */
    select?: TermSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TermInclude<ExtArgs> | null
    /**
     * Filter, which Terms to fetch.
     */
    where?: TermWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Terms to fetch.
     */
    orderBy?: TermOrderByWithRelationInput | TermOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Terms.
     */
    cursor?: TermWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Terms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Terms.
     */
    skip?: number
    distinct?: TermScalarFieldEnum | TermScalarFieldEnum[]
  }

  /**
   * Term create
   */
  export type TermCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Term
     */
    select?: TermSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TermInclude<ExtArgs> | null
    /**
     * The data needed to create a Term.
     */
    data: XOR<TermCreateInput, TermUncheckedCreateInput>
  }

  /**
   * Term createMany
   */
  export type TermCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Terms.
     */
    data: TermCreateManyInput | TermCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Term createManyAndReturn
   */
  export type TermCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Term
     */
    select?: TermSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Terms.
     */
    data: TermCreateManyInput | TermCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TermIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Term update
   */
  export type TermUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Term
     */
    select?: TermSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TermInclude<ExtArgs> | null
    /**
     * The data needed to update a Term.
     */
    data: XOR<TermUpdateInput, TermUncheckedUpdateInput>
    /**
     * Choose, which Term to update.
     */
    where: TermWhereUniqueInput
  }

  /**
   * Term updateMany
   */
  export type TermUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Terms.
     */
    data: XOR<TermUpdateManyMutationInput, TermUncheckedUpdateManyInput>
    /**
     * Filter which Terms to update
     */
    where?: TermWhereInput
  }

  /**
   * Term upsert
   */
  export type TermUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Term
     */
    select?: TermSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TermInclude<ExtArgs> | null
    /**
     * The filter to search for the Term to update in case it exists.
     */
    where: TermWhereUniqueInput
    /**
     * In case the Term found by the `where` argument doesn't exist, create a new Term with this data.
     */
    create: XOR<TermCreateInput, TermUncheckedCreateInput>
    /**
     * In case the Term was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TermUpdateInput, TermUncheckedUpdateInput>
  }

  /**
   * Term delete
   */
  export type TermDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Term
     */
    select?: TermSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TermInclude<ExtArgs> | null
    /**
     * Filter which Term to delete.
     */
    where: TermWhereUniqueInput
  }

  /**
   * Term deleteMany
   */
  export type TermDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Terms to delete
     */
    where?: TermWhereInput
  }

  /**
   * Term without action
   */
  export type TermDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Term
     */
    select?: TermSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TermInclude<ExtArgs> | null
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


  export const EventScalarFieldEnum: {
    id: 'id',
    schoolId: 'schoolId',
    title: 'title',
    description: 'description',
    startDate: 'startDate',
    endDate: 'endDate',
    allDay: 'allDay',
    location: 'location',
    type: 'type',
    color: 'color',
    isPublic: 'isPublic',
    classId: 'classId',
    gradeId: 'gradeId',
    isRecurring: 'isRecurring',
    recurrence: 'recurrence',
    reminderSent: 'reminderSent',
    createdBy: 'createdBy',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EventScalarFieldEnum = (typeof EventScalarFieldEnum)[keyof typeof EventScalarFieldEnum]


  export const EventAttendeeScalarFieldEnum: {
    id: 'id',
    eventId: 'eventId',
    userId: 'userId',
    userType: 'userType',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EventAttendeeScalarFieldEnum = (typeof EventAttendeeScalarFieldEnum)[keyof typeof EventAttendeeScalarFieldEnum]


  export const HolidayScalarFieldEnum: {
    id: 'id',
    schoolId: 'schoolId',
    name: 'name',
    date: 'date',
    endDate: 'endDate',
    type: 'type',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type HolidayScalarFieldEnum = (typeof HolidayScalarFieldEnum)[keyof typeof HolidayScalarFieldEnum]


  export const AcademicCalendarScalarFieldEnum: {
    id: 'id',
    schoolId: 'schoolId',
    academicYear: 'academicYear',
    startDate: 'startDate',
    endDate: 'endDate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AcademicCalendarScalarFieldEnum = (typeof AcademicCalendarScalarFieldEnum)[keyof typeof AcademicCalendarScalarFieldEnum]


  export const TermScalarFieldEnum: {
    id: 'id',
    calendarId: 'calendarId',
    name: 'name',
    startDate: 'startDate',
    endDate: 'endDate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TermScalarFieldEnum = (typeof TermScalarFieldEnum)[keyof typeof TermScalarFieldEnum]


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
   * Reference to a field of type 'EventType'
   */
  export type EnumEventTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EventType'>
    


  /**
   * Reference to a field of type 'EventType[]'
   */
  export type ListEnumEventTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EventType[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'AttendeeStatus'
   */
  export type EnumAttendeeStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AttendeeStatus'>
    


  /**
   * Reference to a field of type 'AttendeeStatus[]'
   */
  export type ListEnumAttendeeStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AttendeeStatus[]'>
    


  /**
   * Reference to a field of type 'HolidayType'
   */
  export type EnumHolidayTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'HolidayType'>
    


  /**
   * Reference to a field of type 'HolidayType[]'
   */
  export type ListEnumHolidayTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'HolidayType[]'>
    


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


  export type EventWhereInput = {
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    id?: StringFilter<"Event"> | string
    schoolId?: StringFilter<"Event"> | string
    title?: StringFilter<"Event"> | string
    description?: StringNullableFilter<"Event"> | string | null
    startDate?: DateTimeFilter<"Event"> | Date | string
    endDate?: DateTimeFilter<"Event"> | Date | string
    allDay?: BoolFilter<"Event"> | boolean
    location?: StringNullableFilter<"Event"> | string | null
    type?: EnumEventTypeFilter<"Event"> | $Enums.EventType
    color?: StringNullableFilter<"Event"> | string | null
    isPublic?: BoolFilter<"Event"> | boolean
    classId?: IntNullableFilter<"Event"> | number | null
    gradeId?: IntNullableFilter<"Event"> | number | null
    isRecurring?: BoolFilter<"Event"> | boolean
    recurrence?: JsonNullableFilter<"Event">
    reminderSent?: BoolFilter<"Event"> | boolean
    createdBy?: StringFilter<"Event"> | string
    createdAt?: DateTimeFilter<"Event"> | Date | string
    updatedAt?: DateTimeFilter<"Event"> | Date | string
    attendees?: EventAttendeeListRelationFilter
  }

  export type EventOrderByWithRelationInput = {
    id?: SortOrder
    schoolId?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    allDay?: SortOrder
    location?: SortOrderInput | SortOrder
    type?: SortOrder
    color?: SortOrderInput | SortOrder
    isPublic?: SortOrder
    classId?: SortOrderInput | SortOrder
    gradeId?: SortOrderInput | SortOrder
    isRecurring?: SortOrder
    recurrence?: SortOrderInput | SortOrder
    reminderSent?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    attendees?: EventAttendeeOrderByRelationAggregateInput
  }

  export type EventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    schoolId?: StringFilter<"Event"> | string
    title?: StringFilter<"Event"> | string
    description?: StringNullableFilter<"Event"> | string | null
    startDate?: DateTimeFilter<"Event"> | Date | string
    endDate?: DateTimeFilter<"Event"> | Date | string
    allDay?: BoolFilter<"Event"> | boolean
    location?: StringNullableFilter<"Event"> | string | null
    type?: EnumEventTypeFilter<"Event"> | $Enums.EventType
    color?: StringNullableFilter<"Event"> | string | null
    isPublic?: BoolFilter<"Event"> | boolean
    classId?: IntNullableFilter<"Event"> | number | null
    gradeId?: IntNullableFilter<"Event"> | number | null
    isRecurring?: BoolFilter<"Event"> | boolean
    recurrence?: JsonNullableFilter<"Event">
    reminderSent?: BoolFilter<"Event"> | boolean
    createdBy?: StringFilter<"Event"> | string
    createdAt?: DateTimeFilter<"Event"> | Date | string
    updatedAt?: DateTimeFilter<"Event"> | Date | string
    attendees?: EventAttendeeListRelationFilter
  }, "id">

  export type EventOrderByWithAggregationInput = {
    id?: SortOrder
    schoolId?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    allDay?: SortOrder
    location?: SortOrderInput | SortOrder
    type?: SortOrder
    color?: SortOrderInput | SortOrder
    isPublic?: SortOrder
    classId?: SortOrderInput | SortOrder
    gradeId?: SortOrderInput | SortOrder
    isRecurring?: SortOrder
    recurrence?: SortOrderInput | SortOrder
    reminderSent?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EventCountOrderByAggregateInput
    _avg?: EventAvgOrderByAggregateInput
    _max?: EventMaxOrderByAggregateInput
    _min?: EventMinOrderByAggregateInput
    _sum?: EventSumOrderByAggregateInput
  }

  export type EventScalarWhereWithAggregatesInput = {
    AND?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    OR?: EventScalarWhereWithAggregatesInput[]
    NOT?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Event"> | string
    schoolId?: StringWithAggregatesFilter<"Event"> | string
    title?: StringWithAggregatesFilter<"Event"> | string
    description?: StringNullableWithAggregatesFilter<"Event"> | string | null
    startDate?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    allDay?: BoolWithAggregatesFilter<"Event"> | boolean
    location?: StringNullableWithAggregatesFilter<"Event"> | string | null
    type?: EnumEventTypeWithAggregatesFilter<"Event"> | $Enums.EventType
    color?: StringNullableWithAggregatesFilter<"Event"> | string | null
    isPublic?: BoolWithAggregatesFilter<"Event"> | boolean
    classId?: IntNullableWithAggregatesFilter<"Event"> | number | null
    gradeId?: IntNullableWithAggregatesFilter<"Event"> | number | null
    isRecurring?: BoolWithAggregatesFilter<"Event"> | boolean
    recurrence?: JsonNullableWithAggregatesFilter<"Event">
    reminderSent?: BoolWithAggregatesFilter<"Event"> | boolean
    createdBy?: StringWithAggregatesFilter<"Event"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Event"> | Date | string
  }

  export type EventAttendeeWhereInput = {
    AND?: EventAttendeeWhereInput | EventAttendeeWhereInput[]
    OR?: EventAttendeeWhereInput[]
    NOT?: EventAttendeeWhereInput | EventAttendeeWhereInput[]
    id?: StringFilter<"EventAttendee"> | string
    eventId?: StringFilter<"EventAttendee"> | string
    userId?: StringFilter<"EventAttendee"> | string
    userType?: StringFilter<"EventAttendee"> | string
    status?: EnumAttendeeStatusFilter<"EventAttendee"> | $Enums.AttendeeStatus
    createdAt?: DateTimeFilter<"EventAttendee"> | Date | string
    updatedAt?: DateTimeFilter<"EventAttendee"> | Date | string
    event?: XOR<EventRelationFilter, EventWhereInput>
  }

  export type EventAttendeeOrderByWithRelationInput = {
    id?: SortOrder
    eventId?: SortOrder
    userId?: SortOrder
    userType?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    event?: EventOrderByWithRelationInput
  }

  export type EventAttendeeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    eventId_userId?: EventAttendeeEventIdUserIdCompoundUniqueInput
    AND?: EventAttendeeWhereInput | EventAttendeeWhereInput[]
    OR?: EventAttendeeWhereInput[]
    NOT?: EventAttendeeWhereInput | EventAttendeeWhereInput[]
    eventId?: StringFilter<"EventAttendee"> | string
    userId?: StringFilter<"EventAttendee"> | string
    userType?: StringFilter<"EventAttendee"> | string
    status?: EnumAttendeeStatusFilter<"EventAttendee"> | $Enums.AttendeeStatus
    createdAt?: DateTimeFilter<"EventAttendee"> | Date | string
    updatedAt?: DateTimeFilter<"EventAttendee"> | Date | string
    event?: XOR<EventRelationFilter, EventWhereInput>
  }, "id" | "eventId_userId">

  export type EventAttendeeOrderByWithAggregationInput = {
    id?: SortOrder
    eventId?: SortOrder
    userId?: SortOrder
    userType?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EventAttendeeCountOrderByAggregateInput
    _max?: EventAttendeeMaxOrderByAggregateInput
    _min?: EventAttendeeMinOrderByAggregateInput
  }

  export type EventAttendeeScalarWhereWithAggregatesInput = {
    AND?: EventAttendeeScalarWhereWithAggregatesInput | EventAttendeeScalarWhereWithAggregatesInput[]
    OR?: EventAttendeeScalarWhereWithAggregatesInput[]
    NOT?: EventAttendeeScalarWhereWithAggregatesInput | EventAttendeeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EventAttendee"> | string
    eventId?: StringWithAggregatesFilter<"EventAttendee"> | string
    userId?: StringWithAggregatesFilter<"EventAttendee"> | string
    userType?: StringWithAggregatesFilter<"EventAttendee"> | string
    status?: EnumAttendeeStatusWithAggregatesFilter<"EventAttendee"> | $Enums.AttendeeStatus
    createdAt?: DateTimeWithAggregatesFilter<"EventAttendee"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"EventAttendee"> | Date | string
  }

  export type HolidayWhereInput = {
    AND?: HolidayWhereInput | HolidayWhereInput[]
    OR?: HolidayWhereInput[]
    NOT?: HolidayWhereInput | HolidayWhereInput[]
    id?: StringFilter<"Holiday"> | string
    schoolId?: StringFilter<"Holiday"> | string
    name?: StringFilter<"Holiday"> | string
    date?: DateTimeFilter<"Holiday"> | Date | string
    endDate?: DateTimeNullableFilter<"Holiday"> | Date | string | null
    type?: EnumHolidayTypeFilter<"Holiday"> | $Enums.HolidayType
    description?: StringNullableFilter<"Holiday"> | string | null
    createdAt?: DateTimeFilter<"Holiday"> | Date | string
    updatedAt?: DateTimeFilter<"Holiday"> | Date | string
  }

  export type HolidayOrderByWithRelationInput = {
    id?: SortOrder
    schoolId?: SortOrder
    name?: SortOrder
    date?: SortOrder
    endDate?: SortOrderInput | SortOrder
    type?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HolidayWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: HolidayWhereInput | HolidayWhereInput[]
    OR?: HolidayWhereInput[]
    NOT?: HolidayWhereInput | HolidayWhereInput[]
    schoolId?: StringFilter<"Holiday"> | string
    name?: StringFilter<"Holiday"> | string
    date?: DateTimeFilter<"Holiday"> | Date | string
    endDate?: DateTimeNullableFilter<"Holiday"> | Date | string | null
    type?: EnumHolidayTypeFilter<"Holiday"> | $Enums.HolidayType
    description?: StringNullableFilter<"Holiday"> | string | null
    createdAt?: DateTimeFilter<"Holiday"> | Date | string
    updatedAt?: DateTimeFilter<"Holiday"> | Date | string
  }, "id">

  export type HolidayOrderByWithAggregationInput = {
    id?: SortOrder
    schoolId?: SortOrder
    name?: SortOrder
    date?: SortOrder
    endDate?: SortOrderInput | SortOrder
    type?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: HolidayCountOrderByAggregateInput
    _max?: HolidayMaxOrderByAggregateInput
    _min?: HolidayMinOrderByAggregateInput
  }

  export type HolidayScalarWhereWithAggregatesInput = {
    AND?: HolidayScalarWhereWithAggregatesInput | HolidayScalarWhereWithAggregatesInput[]
    OR?: HolidayScalarWhereWithAggregatesInput[]
    NOT?: HolidayScalarWhereWithAggregatesInput | HolidayScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Holiday"> | string
    schoolId?: StringWithAggregatesFilter<"Holiday"> | string
    name?: StringWithAggregatesFilter<"Holiday"> | string
    date?: DateTimeWithAggregatesFilter<"Holiday"> | Date | string
    endDate?: DateTimeNullableWithAggregatesFilter<"Holiday"> | Date | string | null
    type?: EnumHolidayTypeWithAggregatesFilter<"Holiday"> | $Enums.HolidayType
    description?: StringNullableWithAggregatesFilter<"Holiday"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Holiday"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Holiday"> | Date | string
  }

  export type AcademicCalendarWhereInput = {
    AND?: AcademicCalendarWhereInput | AcademicCalendarWhereInput[]
    OR?: AcademicCalendarWhereInput[]
    NOT?: AcademicCalendarWhereInput | AcademicCalendarWhereInput[]
    id?: StringFilter<"AcademicCalendar"> | string
    schoolId?: StringFilter<"AcademicCalendar"> | string
    academicYear?: StringFilter<"AcademicCalendar"> | string
    startDate?: DateTimeFilter<"AcademicCalendar"> | Date | string
    endDate?: DateTimeFilter<"AcademicCalendar"> | Date | string
    createdAt?: DateTimeFilter<"AcademicCalendar"> | Date | string
    updatedAt?: DateTimeFilter<"AcademicCalendar"> | Date | string
    terms?: TermListRelationFilter
  }

  export type AcademicCalendarOrderByWithRelationInput = {
    id?: SortOrder
    schoolId?: SortOrder
    academicYear?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    terms?: TermOrderByRelationAggregateInput
  }

  export type AcademicCalendarWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    schoolId?: string
    AND?: AcademicCalendarWhereInput | AcademicCalendarWhereInput[]
    OR?: AcademicCalendarWhereInput[]
    NOT?: AcademicCalendarWhereInput | AcademicCalendarWhereInput[]
    academicYear?: StringFilter<"AcademicCalendar"> | string
    startDate?: DateTimeFilter<"AcademicCalendar"> | Date | string
    endDate?: DateTimeFilter<"AcademicCalendar"> | Date | string
    createdAt?: DateTimeFilter<"AcademicCalendar"> | Date | string
    updatedAt?: DateTimeFilter<"AcademicCalendar"> | Date | string
    terms?: TermListRelationFilter
  }, "id" | "schoolId">

  export type AcademicCalendarOrderByWithAggregationInput = {
    id?: SortOrder
    schoolId?: SortOrder
    academicYear?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AcademicCalendarCountOrderByAggregateInput
    _max?: AcademicCalendarMaxOrderByAggregateInput
    _min?: AcademicCalendarMinOrderByAggregateInput
  }

  export type AcademicCalendarScalarWhereWithAggregatesInput = {
    AND?: AcademicCalendarScalarWhereWithAggregatesInput | AcademicCalendarScalarWhereWithAggregatesInput[]
    OR?: AcademicCalendarScalarWhereWithAggregatesInput[]
    NOT?: AcademicCalendarScalarWhereWithAggregatesInput | AcademicCalendarScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AcademicCalendar"> | string
    schoolId?: StringWithAggregatesFilter<"AcademicCalendar"> | string
    academicYear?: StringWithAggregatesFilter<"AcademicCalendar"> | string
    startDate?: DateTimeWithAggregatesFilter<"AcademicCalendar"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"AcademicCalendar"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"AcademicCalendar"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AcademicCalendar"> | Date | string
  }

  export type TermWhereInput = {
    AND?: TermWhereInput | TermWhereInput[]
    OR?: TermWhereInput[]
    NOT?: TermWhereInput | TermWhereInput[]
    id?: StringFilter<"Term"> | string
    calendarId?: StringFilter<"Term"> | string
    name?: StringFilter<"Term"> | string
    startDate?: DateTimeFilter<"Term"> | Date | string
    endDate?: DateTimeFilter<"Term"> | Date | string
    createdAt?: DateTimeFilter<"Term"> | Date | string
    updatedAt?: DateTimeFilter<"Term"> | Date | string
    calendar?: XOR<AcademicCalendarRelationFilter, AcademicCalendarWhereInput>
  }

  export type TermOrderByWithRelationInput = {
    id?: SortOrder
    calendarId?: SortOrder
    name?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    calendar?: AcademicCalendarOrderByWithRelationInput
  }

  export type TermWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TermWhereInput | TermWhereInput[]
    OR?: TermWhereInput[]
    NOT?: TermWhereInput | TermWhereInput[]
    calendarId?: StringFilter<"Term"> | string
    name?: StringFilter<"Term"> | string
    startDate?: DateTimeFilter<"Term"> | Date | string
    endDate?: DateTimeFilter<"Term"> | Date | string
    createdAt?: DateTimeFilter<"Term"> | Date | string
    updatedAt?: DateTimeFilter<"Term"> | Date | string
    calendar?: XOR<AcademicCalendarRelationFilter, AcademicCalendarWhereInput>
  }, "id">

  export type TermOrderByWithAggregationInput = {
    id?: SortOrder
    calendarId?: SortOrder
    name?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TermCountOrderByAggregateInput
    _max?: TermMaxOrderByAggregateInput
    _min?: TermMinOrderByAggregateInput
  }

  export type TermScalarWhereWithAggregatesInput = {
    AND?: TermScalarWhereWithAggregatesInput | TermScalarWhereWithAggregatesInput[]
    OR?: TermScalarWhereWithAggregatesInput[]
    NOT?: TermScalarWhereWithAggregatesInput | TermScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Term"> | string
    calendarId?: StringWithAggregatesFilter<"Term"> | string
    name?: StringWithAggregatesFilter<"Term"> | string
    startDate?: DateTimeWithAggregatesFilter<"Term"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"Term"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Term"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Term"> | Date | string
  }

  export type EventCreateInput = {
    id?: string
    schoolId: string
    title: string
    description?: string | null
    startDate: Date | string
    endDate: Date | string
    allDay?: boolean
    location?: string | null
    type?: $Enums.EventType
    color?: string | null
    isPublic?: boolean
    classId?: number | null
    gradeId?: number | null
    isRecurring?: boolean
    recurrence?: NullableJsonNullValueInput | InputJsonValue
    reminderSent?: boolean
    createdBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
    attendees?: EventAttendeeCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateInput = {
    id?: string
    schoolId: string
    title: string
    description?: string | null
    startDate: Date | string
    endDate: Date | string
    allDay?: boolean
    location?: string | null
    type?: $Enums.EventType
    color?: string | null
    isPublic?: boolean
    classId?: number | null
    gradeId?: number | null
    isRecurring?: boolean
    recurrence?: NullableJsonNullValueInput | InputJsonValue
    reminderSent?: boolean
    createdBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
    attendees?: EventAttendeeUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    schoolId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    allDay?: BoolFieldUpdateOperationsInput | boolean
    location?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    color?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    classId?: NullableIntFieldUpdateOperationsInput | number | null
    gradeId?: NullableIntFieldUpdateOperationsInput | number | null
    isRecurring?: BoolFieldUpdateOperationsInput | boolean
    recurrence?: NullableJsonNullValueInput | InputJsonValue
    reminderSent?: BoolFieldUpdateOperationsInput | boolean
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attendees?: EventAttendeeUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    schoolId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    allDay?: BoolFieldUpdateOperationsInput | boolean
    location?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    color?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    classId?: NullableIntFieldUpdateOperationsInput | number | null
    gradeId?: NullableIntFieldUpdateOperationsInput | number | null
    isRecurring?: BoolFieldUpdateOperationsInput | boolean
    recurrence?: NullableJsonNullValueInput | InputJsonValue
    reminderSent?: BoolFieldUpdateOperationsInput | boolean
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attendees?: EventAttendeeUncheckedUpdateManyWithoutEventNestedInput
  }

  export type EventCreateManyInput = {
    id?: string
    schoolId: string
    title: string
    description?: string | null
    startDate: Date | string
    endDate: Date | string
    allDay?: boolean
    location?: string | null
    type?: $Enums.EventType
    color?: string | null
    isPublic?: boolean
    classId?: number | null
    gradeId?: number | null
    isRecurring?: boolean
    recurrence?: NullableJsonNullValueInput | InputJsonValue
    reminderSent?: boolean
    createdBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    schoolId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    allDay?: BoolFieldUpdateOperationsInput | boolean
    location?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    color?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    classId?: NullableIntFieldUpdateOperationsInput | number | null
    gradeId?: NullableIntFieldUpdateOperationsInput | number | null
    isRecurring?: BoolFieldUpdateOperationsInput | boolean
    recurrence?: NullableJsonNullValueInput | InputJsonValue
    reminderSent?: BoolFieldUpdateOperationsInput | boolean
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    schoolId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    allDay?: BoolFieldUpdateOperationsInput | boolean
    location?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    color?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    classId?: NullableIntFieldUpdateOperationsInput | number | null
    gradeId?: NullableIntFieldUpdateOperationsInput | number | null
    isRecurring?: BoolFieldUpdateOperationsInput | boolean
    recurrence?: NullableJsonNullValueInput | InputJsonValue
    reminderSent?: BoolFieldUpdateOperationsInput | boolean
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventAttendeeCreateInput = {
    id?: string
    userId: string
    userType: string
    status?: $Enums.AttendeeStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    event: EventCreateNestedOneWithoutAttendeesInput
  }

  export type EventAttendeeUncheckedCreateInput = {
    id?: string
    eventId: string
    userId: string
    userType: string
    status?: $Enums.AttendeeStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventAttendeeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    userType?: StringFieldUpdateOperationsInput | string
    status?: EnumAttendeeStatusFieldUpdateOperationsInput | $Enums.AttendeeStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: EventUpdateOneRequiredWithoutAttendeesNestedInput
  }

  export type EventAttendeeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    userType?: StringFieldUpdateOperationsInput | string
    status?: EnumAttendeeStatusFieldUpdateOperationsInput | $Enums.AttendeeStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventAttendeeCreateManyInput = {
    id?: string
    eventId: string
    userId: string
    userType: string
    status?: $Enums.AttendeeStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventAttendeeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    userType?: StringFieldUpdateOperationsInput | string
    status?: EnumAttendeeStatusFieldUpdateOperationsInput | $Enums.AttendeeStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventAttendeeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    userType?: StringFieldUpdateOperationsInput | string
    status?: EnumAttendeeStatusFieldUpdateOperationsInput | $Enums.AttendeeStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HolidayCreateInput = {
    id?: string
    schoolId: string
    name: string
    date: Date | string
    endDate?: Date | string | null
    type?: $Enums.HolidayType
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HolidayUncheckedCreateInput = {
    id?: string
    schoolId: string
    name: string
    date: Date | string
    endDate?: Date | string | null
    type?: $Enums.HolidayType
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HolidayUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    schoolId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    type?: EnumHolidayTypeFieldUpdateOperationsInput | $Enums.HolidayType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HolidayUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    schoolId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    type?: EnumHolidayTypeFieldUpdateOperationsInput | $Enums.HolidayType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HolidayCreateManyInput = {
    id?: string
    schoolId: string
    name: string
    date: Date | string
    endDate?: Date | string | null
    type?: $Enums.HolidayType
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HolidayUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    schoolId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    type?: EnumHolidayTypeFieldUpdateOperationsInput | $Enums.HolidayType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HolidayUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    schoolId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    type?: EnumHolidayTypeFieldUpdateOperationsInput | $Enums.HolidayType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AcademicCalendarCreateInput = {
    id?: string
    schoolId: string
    academicYear: string
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    terms?: TermCreateNestedManyWithoutCalendarInput
  }

  export type AcademicCalendarUncheckedCreateInput = {
    id?: string
    schoolId: string
    academicYear: string
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    terms?: TermUncheckedCreateNestedManyWithoutCalendarInput
  }

  export type AcademicCalendarUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    schoolId?: StringFieldUpdateOperationsInput | string
    academicYear?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    terms?: TermUpdateManyWithoutCalendarNestedInput
  }

  export type AcademicCalendarUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    schoolId?: StringFieldUpdateOperationsInput | string
    academicYear?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    terms?: TermUncheckedUpdateManyWithoutCalendarNestedInput
  }

  export type AcademicCalendarCreateManyInput = {
    id?: string
    schoolId: string
    academicYear: string
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AcademicCalendarUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    schoolId?: StringFieldUpdateOperationsInput | string
    academicYear?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AcademicCalendarUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    schoolId?: StringFieldUpdateOperationsInput | string
    academicYear?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TermCreateInput = {
    id?: string
    name: string
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    calendar: AcademicCalendarCreateNestedOneWithoutTermsInput
  }

  export type TermUncheckedCreateInput = {
    id?: string
    calendarId: string
    name: string
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TermUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    calendar?: AcademicCalendarUpdateOneRequiredWithoutTermsNestedInput
  }

  export type TermUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    calendarId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TermCreateManyInput = {
    id?: string
    calendarId: string
    name: string
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TermUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TermUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    calendarId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EnumEventTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.EventType | EnumEventTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EventType[] | ListEnumEventTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.EventType[] | ListEnumEventTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumEventTypeFilter<$PrismaModel> | $Enums.EventType
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

  export type EventAttendeeListRelationFilter = {
    every?: EventAttendeeWhereInput
    some?: EventAttendeeWhereInput
    none?: EventAttendeeWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type EventAttendeeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EventCountOrderByAggregateInput = {
    id?: SortOrder
    schoolId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    allDay?: SortOrder
    location?: SortOrder
    type?: SortOrder
    color?: SortOrder
    isPublic?: SortOrder
    classId?: SortOrder
    gradeId?: SortOrder
    isRecurring?: SortOrder
    recurrence?: SortOrder
    reminderSent?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventAvgOrderByAggregateInput = {
    classId?: SortOrder
    gradeId?: SortOrder
  }

  export type EventMaxOrderByAggregateInput = {
    id?: SortOrder
    schoolId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    allDay?: SortOrder
    location?: SortOrder
    type?: SortOrder
    color?: SortOrder
    isPublic?: SortOrder
    classId?: SortOrder
    gradeId?: SortOrder
    isRecurring?: SortOrder
    reminderSent?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventMinOrderByAggregateInput = {
    id?: SortOrder
    schoolId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    allDay?: SortOrder
    location?: SortOrder
    type?: SortOrder
    color?: SortOrder
    isPublic?: SortOrder
    classId?: SortOrder
    gradeId?: SortOrder
    isRecurring?: SortOrder
    reminderSent?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventSumOrderByAggregateInput = {
    classId?: SortOrder
    gradeId?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumEventTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EventType | EnumEventTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EventType[] | ListEnumEventTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.EventType[] | ListEnumEventTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumEventTypeWithAggregatesFilter<$PrismaModel> | $Enums.EventType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEventTypeFilter<$PrismaModel>
    _max?: NestedEnumEventTypeFilter<$PrismaModel>
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

  export type EnumAttendeeStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AttendeeStatus | EnumAttendeeStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AttendeeStatus[] | ListEnumAttendeeStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AttendeeStatus[] | ListEnumAttendeeStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAttendeeStatusFilter<$PrismaModel> | $Enums.AttendeeStatus
  }

  export type EventRelationFilter = {
    is?: EventWhereInput
    isNot?: EventWhereInput
  }

  export type EventAttendeeEventIdUserIdCompoundUniqueInput = {
    eventId: string
    userId: string
  }

  export type EventAttendeeCountOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    userId?: SortOrder
    userType?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventAttendeeMaxOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    userId?: SortOrder
    userType?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventAttendeeMinOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    userId?: SortOrder
    userType?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumAttendeeStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AttendeeStatus | EnumAttendeeStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AttendeeStatus[] | ListEnumAttendeeStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AttendeeStatus[] | ListEnumAttendeeStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAttendeeStatusWithAggregatesFilter<$PrismaModel> | $Enums.AttendeeStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAttendeeStatusFilter<$PrismaModel>
    _max?: NestedEnumAttendeeStatusFilter<$PrismaModel>
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

  export type EnumHolidayTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.HolidayType | EnumHolidayTypeFieldRefInput<$PrismaModel>
    in?: $Enums.HolidayType[] | ListEnumHolidayTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.HolidayType[] | ListEnumHolidayTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumHolidayTypeFilter<$PrismaModel> | $Enums.HolidayType
  }

  export type HolidayCountOrderByAggregateInput = {
    id?: SortOrder
    schoolId?: SortOrder
    name?: SortOrder
    date?: SortOrder
    endDate?: SortOrder
    type?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HolidayMaxOrderByAggregateInput = {
    id?: SortOrder
    schoolId?: SortOrder
    name?: SortOrder
    date?: SortOrder
    endDate?: SortOrder
    type?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HolidayMinOrderByAggregateInput = {
    id?: SortOrder
    schoolId?: SortOrder
    name?: SortOrder
    date?: SortOrder
    endDate?: SortOrder
    type?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type EnumHolidayTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.HolidayType | EnumHolidayTypeFieldRefInput<$PrismaModel>
    in?: $Enums.HolidayType[] | ListEnumHolidayTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.HolidayType[] | ListEnumHolidayTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumHolidayTypeWithAggregatesFilter<$PrismaModel> | $Enums.HolidayType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumHolidayTypeFilter<$PrismaModel>
    _max?: NestedEnumHolidayTypeFilter<$PrismaModel>
  }

  export type TermListRelationFilter = {
    every?: TermWhereInput
    some?: TermWhereInput
    none?: TermWhereInput
  }

  export type TermOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AcademicCalendarCountOrderByAggregateInput = {
    id?: SortOrder
    schoolId?: SortOrder
    academicYear?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AcademicCalendarMaxOrderByAggregateInput = {
    id?: SortOrder
    schoolId?: SortOrder
    academicYear?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AcademicCalendarMinOrderByAggregateInput = {
    id?: SortOrder
    schoolId?: SortOrder
    academicYear?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AcademicCalendarRelationFilter = {
    is?: AcademicCalendarWhereInput
    isNot?: AcademicCalendarWhereInput
  }

  export type TermCountOrderByAggregateInput = {
    id?: SortOrder
    calendarId?: SortOrder
    name?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TermMaxOrderByAggregateInput = {
    id?: SortOrder
    calendarId?: SortOrder
    name?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TermMinOrderByAggregateInput = {
    id?: SortOrder
    calendarId?: SortOrder
    name?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventAttendeeCreateNestedManyWithoutEventInput = {
    create?: XOR<EventAttendeeCreateWithoutEventInput, EventAttendeeUncheckedCreateWithoutEventInput> | EventAttendeeCreateWithoutEventInput[] | EventAttendeeUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventAttendeeCreateOrConnectWithoutEventInput | EventAttendeeCreateOrConnectWithoutEventInput[]
    createMany?: EventAttendeeCreateManyEventInputEnvelope
    connect?: EventAttendeeWhereUniqueInput | EventAttendeeWhereUniqueInput[]
  }

  export type EventAttendeeUncheckedCreateNestedManyWithoutEventInput = {
    create?: XOR<EventAttendeeCreateWithoutEventInput, EventAttendeeUncheckedCreateWithoutEventInput> | EventAttendeeCreateWithoutEventInput[] | EventAttendeeUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventAttendeeCreateOrConnectWithoutEventInput | EventAttendeeCreateOrConnectWithoutEventInput[]
    createMany?: EventAttendeeCreateManyEventInputEnvelope
    connect?: EventAttendeeWhereUniqueInput | EventAttendeeWhereUniqueInput[]
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

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EnumEventTypeFieldUpdateOperationsInput = {
    set?: $Enums.EventType
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EventAttendeeUpdateManyWithoutEventNestedInput = {
    create?: XOR<EventAttendeeCreateWithoutEventInput, EventAttendeeUncheckedCreateWithoutEventInput> | EventAttendeeCreateWithoutEventInput[] | EventAttendeeUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventAttendeeCreateOrConnectWithoutEventInput | EventAttendeeCreateOrConnectWithoutEventInput[]
    upsert?: EventAttendeeUpsertWithWhereUniqueWithoutEventInput | EventAttendeeUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: EventAttendeeCreateManyEventInputEnvelope
    set?: EventAttendeeWhereUniqueInput | EventAttendeeWhereUniqueInput[]
    disconnect?: EventAttendeeWhereUniqueInput | EventAttendeeWhereUniqueInput[]
    delete?: EventAttendeeWhereUniqueInput | EventAttendeeWhereUniqueInput[]
    connect?: EventAttendeeWhereUniqueInput | EventAttendeeWhereUniqueInput[]
    update?: EventAttendeeUpdateWithWhereUniqueWithoutEventInput | EventAttendeeUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: EventAttendeeUpdateManyWithWhereWithoutEventInput | EventAttendeeUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: EventAttendeeScalarWhereInput | EventAttendeeScalarWhereInput[]
  }

  export type EventAttendeeUncheckedUpdateManyWithoutEventNestedInput = {
    create?: XOR<EventAttendeeCreateWithoutEventInput, EventAttendeeUncheckedCreateWithoutEventInput> | EventAttendeeCreateWithoutEventInput[] | EventAttendeeUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventAttendeeCreateOrConnectWithoutEventInput | EventAttendeeCreateOrConnectWithoutEventInput[]
    upsert?: EventAttendeeUpsertWithWhereUniqueWithoutEventInput | EventAttendeeUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: EventAttendeeCreateManyEventInputEnvelope
    set?: EventAttendeeWhereUniqueInput | EventAttendeeWhereUniqueInput[]
    disconnect?: EventAttendeeWhereUniqueInput | EventAttendeeWhereUniqueInput[]
    delete?: EventAttendeeWhereUniqueInput | EventAttendeeWhereUniqueInput[]
    connect?: EventAttendeeWhereUniqueInput | EventAttendeeWhereUniqueInput[]
    update?: EventAttendeeUpdateWithWhereUniqueWithoutEventInput | EventAttendeeUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: EventAttendeeUpdateManyWithWhereWithoutEventInput | EventAttendeeUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: EventAttendeeScalarWhereInput | EventAttendeeScalarWhereInput[]
  }

  export type EventCreateNestedOneWithoutAttendeesInput = {
    create?: XOR<EventCreateWithoutAttendeesInput, EventUncheckedCreateWithoutAttendeesInput>
    connectOrCreate?: EventCreateOrConnectWithoutAttendeesInput
    connect?: EventWhereUniqueInput
  }

  export type EnumAttendeeStatusFieldUpdateOperationsInput = {
    set?: $Enums.AttendeeStatus
  }

  export type EventUpdateOneRequiredWithoutAttendeesNestedInput = {
    create?: XOR<EventCreateWithoutAttendeesInput, EventUncheckedCreateWithoutAttendeesInput>
    connectOrCreate?: EventCreateOrConnectWithoutAttendeesInput
    upsert?: EventUpsertWithoutAttendeesInput
    connect?: EventWhereUniqueInput
    update?: XOR<XOR<EventUpdateToOneWithWhereWithoutAttendeesInput, EventUpdateWithoutAttendeesInput>, EventUncheckedUpdateWithoutAttendeesInput>
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EnumHolidayTypeFieldUpdateOperationsInput = {
    set?: $Enums.HolidayType
  }

  export type TermCreateNestedManyWithoutCalendarInput = {
    create?: XOR<TermCreateWithoutCalendarInput, TermUncheckedCreateWithoutCalendarInput> | TermCreateWithoutCalendarInput[] | TermUncheckedCreateWithoutCalendarInput[]
    connectOrCreate?: TermCreateOrConnectWithoutCalendarInput | TermCreateOrConnectWithoutCalendarInput[]
    createMany?: TermCreateManyCalendarInputEnvelope
    connect?: TermWhereUniqueInput | TermWhereUniqueInput[]
  }

  export type TermUncheckedCreateNestedManyWithoutCalendarInput = {
    create?: XOR<TermCreateWithoutCalendarInput, TermUncheckedCreateWithoutCalendarInput> | TermCreateWithoutCalendarInput[] | TermUncheckedCreateWithoutCalendarInput[]
    connectOrCreate?: TermCreateOrConnectWithoutCalendarInput | TermCreateOrConnectWithoutCalendarInput[]
    createMany?: TermCreateManyCalendarInputEnvelope
    connect?: TermWhereUniqueInput | TermWhereUniqueInput[]
  }

  export type TermUpdateManyWithoutCalendarNestedInput = {
    create?: XOR<TermCreateWithoutCalendarInput, TermUncheckedCreateWithoutCalendarInput> | TermCreateWithoutCalendarInput[] | TermUncheckedCreateWithoutCalendarInput[]
    connectOrCreate?: TermCreateOrConnectWithoutCalendarInput | TermCreateOrConnectWithoutCalendarInput[]
    upsert?: TermUpsertWithWhereUniqueWithoutCalendarInput | TermUpsertWithWhereUniqueWithoutCalendarInput[]
    createMany?: TermCreateManyCalendarInputEnvelope
    set?: TermWhereUniqueInput | TermWhereUniqueInput[]
    disconnect?: TermWhereUniqueInput | TermWhereUniqueInput[]
    delete?: TermWhereUniqueInput | TermWhereUniqueInput[]
    connect?: TermWhereUniqueInput | TermWhereUniqueInput[]
    update?: TermUpdateWithWhereUniqueWithoutCalendarInput | TermUpdateWithWhereUniqueWithoutCalendarInput[]
    updateMany?: TermUpdateManyWithWhereWithoutCalendarInput | TermUpdateManyWithWhereWithoutCalendarInput[]
    deleteMany?: TermScalarWhereInput | TermScalarWhereInput[]
  }

  export type TermUncheckedUpdateManyWithoutCalendarNestedInput = {
    create?: XOR<TermCreateWithoutCalendarInput, TermUncheckedCreateWithoutCalendarInput> | TermCreateWithoutCalendarInput[] | TermUncheckedCreateWithoutCalendarInput[]
    connectOrCreate?: TermCreateOrConnectWithoutCalendarInput | TermCreateOrConnectWithoutCalendarInput[]
    upsert?: TermUpsertWithWhereUniqueWithoutCalendarInput | TermUpsertWithWhereUniqueWithoutCalendarInput[]
    createMany?: TermCreateManyCalendarInputEnvelope
    set?: TermWhereUniqueInput | TermWhereUniqueInput[]
    disconnect?: TermWhereUniqueInput | TermWhereUniqueInput[]
    delete?: TermWhereUniqueInput | TermWhereUniqueInput[]
    connect?: TermWhereUniqueInput | TermWhereUniqueInput[]
    update?: TermUpdateWithWhereUniqueWithoutCalendarInput | TermUpdateWithWhereUniqueWithoutCalendarInput[]
    updateMany?: TermUpdateManyWithWhereWithoutCalendarInput | TermUpdateManyWithWhereWithoutCalendarInput[]
    deleteMany?: TermScalarWhereInput | TermScalarWhereInput[]
  }

  export type AcademicCalendarCreateNestedOneWithoutTermsInput = {
    create?: XOR<AcademicCalendarCreateWithoutTermsInput, AcademicCalendarUncheckedCreateWithoutTermsInput>
    connectOrCreate?: AcademicCalendarCreateOrConnectWithoutTermsInput
    connect?: AcademicCalendarWhereUniqueInput
  }

  export type AcademicCalendarUpdateOneRequiredWithoutTermsNestedInput = {
    create?: XOR<AcademicCalendarCreateWithoutTermsInput, AcademicCalendarUncheckedCreateWithoutTermsInput>
    connectOrCreate?: AcademicCalendarCreateOrConnectWithoutTermsInput
    upsert?: AcademicCalendarUpsertWithoutTermsInput
    connect?: AcademicCalendarWhereUniqueInput
    update?: XOR<XOR<AcademicCalendarUpdateToOneWithWhereWithoutTermsInput, AcademicCalendarUpdateWithoutTermsInput>, AcademicCalendarUncheckedUpdateWithoutTermsInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumEventTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.EventType | EnumEventTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EventType[] | ListEnumEventTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.EventType[] | ListEnumEventTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumEventTypeFilter<$PrismaModel> | $Enums.EventType
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

  export type NestedEnumEventTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EventType | EnumEventTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EventType[] | ListEnumEventTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.EventType[] | ListEnumEventTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumEventTypeWithAggregatesFilter<$PrismaModel> | $Enums.EventType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEventTypeFilter<$PrismaModel>
    _max?: NestedEnumEventTypeFilter<$PrismaModel>
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

  export type NestedEnumAttendeeStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AttendeeStatus | EnumAttendeeStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AttendeeStatus[] | ListEnumAttendeeStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AttendeeStatus[] | ListEnumAttendeeStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAttendeeStatusFilter<$PrismaModel> | $Enums.AttendeeStatus
  }

  export type NestedEnumAttendeeStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AttendeeStatus | EnumAttendeeStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AttendeeStatus[] | ListEnumAttendeeStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AttendeeStatus[] | ListEnumAttendeeStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAttendeeStatusWithAggregatesFilter<$PrismaModel> | $Enums.AttendeeStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAttendeeStatusFilter<$PrismaModel>
    _max?: NestedEnumAttendeeStatusFilter<$PrismaModel>
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

  export type NestedEnumHolidayTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.HolidayType | EnumHolidayTypeFieldRefInput<$PrismaModel>
    in?: $Enums.HolidayType[] | ListEnumHolidayTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.HolidayType[] | ListEnumHolidayTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumHolidayTypeFilter<$PrismaModel> | $Enums.HolidayType
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

  export type NestedEnumHolidayTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.HolidayType | EnumHolidayTypeFieldRefInput<$PrismaModel>
    in?: $Enums.HolidayType[] | ListEnumHolidayTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.HolidayType[] | ListEnumHolidayTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumHolidayTypeWithAggregatesFilter<$PrismaModel> | $Enums.HolidayType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumHolidayTypeFilter<$PrismaModel>
    _max?: NestedEnumHolidayTypeFilter<$PrismaModel>
  }

  export type EventAttendeeCreateWithoutEventInput = {
    id?: string
    userId: string
    userType: string
    status?: $Enums.AttendeeStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventAttendeeUncheckedCreateWithoutEventInput = {
    id?: string
    userId: string
    userType: string
    status?: $Enums.AttendeeStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventAttendeeCreateOrConnectWithoutEventInput = {
    where: EventAttendeeWhereUniqueInput
    create: XOR<EventAttendeeCreateWithoutEventInput, EventAttendeeUncheckedCreateWithoutEventInput>
  }

  export type EventAttendeeCreateManyEventInputEnvelope = {
    data: EventAttendeeCreateManyEventInput | EventAttendeeCreateManyEventInput[]
    skipDuplicates?: boolean
  }

  export type EventAttendeeUpsertWithWhereUniqueWithoutEventInput = {
    where: EventAttendeeWhereUniqueInput
    update: XOR<EventAttendeeUpdateWithoutEventInput, EventAttendeeUncheckedUpdateWithoutEventInput>
    create: XOR<EventAttendeeCreateWithoutEventInput, EventAttendeeUncheckedCreateWithoutEventInput>
  }

  export type EventAttendeeUpdateWithWhereUniqueWithoutEventInput = {
    where: EventAttendeeWhereUniqueInput
    data: XOR<EventAttendeeUpdateWithoutEventInput, EventAttendeeUncheckedUpdateWithoutEventInput>
  }

  export type EventAttendeeUpdateManyWithWhereWithoutEventInput = {
    where: EventAttendeeScalarWhereInput
    data: XOR<EventAttendeeUpdateManyMutationInput, EventAttendeeUncheckedUpdateManyWithoutEventInput>
  }

  export type EventAttendeeScalarWhereInput = {
    AND?: EventAttendeeScalarWhereInput | EventAttendeeScalarWhereInput[]
    OR?: EventAttendeeScalarWhereInput[]
    NOT?: EventAttendeeScalarWhereInput | EventAttendeeScalarWhereInput[]
    id?: StringFilter<"EventAttendee"> | string
    eventId?: StringFilter<"EventAttendee"> | string
    userId?: StringFilter<"EventAttendee"> | string
    userType?: StringFilter<"EventAttendee"> | string
    status?: EnumAttendeeStatusFilter<"EventAttendee"> | $Enums.AttendeeStatus
    createdAt?: DateTimeFilter<"EventAttendee"> | Date | string
    updatedAt?: DateTimeFilter<"EventAttendee"> | Date | string
  }

  export type EventCreateWithoutAttendeesInput = {
    id?: string
    schoolId: string
    title: string
    description?: string | null
    startDate: Date | string
    endDate: Date | string
    allDay?: boolean
    location?: string | null
    type?: $Enums.EventType
    color?: string | null
    isPublic?: boolean
    classId?: number | null
    gradeId?: number | null
    isRecurring?: boolean
    recurrence?: NullableJsonNullValueInput | InputJsonValue
    reminderSent?: boolean
    createdBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventUncheckedCreateWithoutAttendeesInput = {
    id?: string
    schoolId: string
    title: string
    description?: string | null
    startDate: Date | string
    endDate: Date | string
    allDay?: boolean
    location?: string | null
    type?: $Enums.EventType
    color?: string | null
    isPublic?: boolean
    classId?: number | null
    gradeId?: number | null
    isRecurring?: boolean
    recurrence?: NullableJsonNullValueInput | InputJsonValue
    reminderSent?: boolean
    createdBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventCreateOrConnectWithoutAttendeesInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutAttendeesInput, EventUncheckedCreateWithoutAttendeesInput>
  }

  export type EventUpsertWithoutAttendeesInput = {
    update: XOR<EventUpdateWithoutAttendeesInput, EventUncheckedUpdateWithoutAttendeesInput>
    create: XOR<EventCreateWithoutAttendeesInput, EventUncheckedCreateWithoutAttendeesInput>
    where?: EventWhereInput
  }

  export type EventUpdateToOneWithWhereWithoutAttendeesInput = {
    where?: EventWhereInput
    data: XOR<EventUpdateWithoutAttendeesInput, EventUncheckedUpdateWithoutAttendeesInput>
  }

  export type EventUpdateWithoutAttendeesInput = {
    id?: StringFieldUpdateOperationsInput | string
    schoolId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    allDay?: BoolFieldUpdateOperationsInput | boolean
    location?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    color?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    classId?: NullableIntFieldUpdateOperationsInput | number | null
    gradeId?: NullableIntFieldUpdateOperationsInput | number | null
    isRecurring?: BoolFieldUpdateOperationsInput | boolean
    recurrence?: NullableJsonNullValueInput | InputJsonValue
    reminderSent?: BoolFieldUpdateOperationsInput | boolean
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventUncheckedUpdateWithoutAttendeesInput = {
    id?: StringFieldUpdateOperationsInput | string
    schoolId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    allDay?: BoolFieldUpdateOperationsInput | boolean
    location?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    color?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    classId?: NullableIntFieldUpdateOperationsInput | number | null
    gradeId?: NullableIntFieldUpdateOperationsInput | number | null
    isRecurring?: BoolFieldUpdateOperationsInput | boolean
    recurrence?: NullableJsonNullValueInput | InputJsonValue
    reminderSent?: BoolFieldUpdateOperationsInput | boolean
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TermCreateWithoutCalendarInput = {
    id?: string
    name: string
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TermUncheckedCreateWithoutCalendarInput = {
    id?: string
    name: string
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TermCreateOrConnectWithoutCalendarInput = {
    where: TermWhereUniqueInput
    create: XOR<TermCreateWithoutCalendarInput, TermUncheckedCreateWithoutCalendarInput>
  }

  export type TermCreateManyCalendarInputEnvelope = {
    data: TermCreateManyCalendarInput | TermCreateManyCalendarInput[]
    skipDuplicates?: boolean
  }

  export type TermUpsertWithWhereUniqueWithoutCalendarInput = {
    where: TermWhereUniqueInput
    update: XOR<TermUpdateWithoutCalendarInput, TermUncheckedUpdateWithoutCalendarInput>
    create: XOR<TermCreateWithoutCalendarInput, TermUncheckedCreateWithoutCalendarInput>
  }

  export type TermUpdateWithWhereUniqueWithoutCalendarInput = {
    where: TermWhereUniqueInput
    data: XOR<TermUpdateWithoutCalendarInput, TermUncheckedUpdateWithoutCalendarInput>
  }

  export type TermUpdateManyWithWhereWithoutCalendarInput = {
    where: TermScalarWhereInput
    data: XOR<TermUpdateManyMutationInput, TermUncheckedUpdateManyWithoutCalendarInput>
  }

  export type TermScalarWhereInput = {
    AND?: TermScalarWhereInput | TermScalarWhereInput[]
    OR?: TermScalarWhereInput[]
    NOT?: TermScalarWhereInput | TermScalarWhereInput[]
    id?: StringFilter<"Term"> | string
    calendarId?: StringFilter<"Term"> | string
    name?: StringFilter<"Term"> | string
    startDate?: DateTimeFilter<"Term"> | Date | string
    endDate?: DateTimeFilter<"Term"> | Date | string
    createdAt?: DateTimeFilter<"Term"> | Date | string
    updatedAt?: DateTimeFilter<"Term"> | Date | string
  }

  export type AcademicCalendarCreateWithoutTermsInput = {
    id?: string
    schoolId: string
    academicYear: string
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AcademicCalendarUncheckedCreateWithoutTermsInput = {
    id?: string
    schoolId: string
    academicYear: string
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AcademicCalendarCreateOrConnectWithoutTermsInput = {
    where: AcademicCalendarWhereUniqueInput
    create: XOR<AcademicCalendarCreateWithoutTermsInput, AcademicCalendarUncheckedCreateWithoutTermsInput>
  }

  export type AcademicCalendarUpsertWithoutTermsInput = {
    update: XOR<AcademicCalendarUpdateWithoutTermsInput, AcademicCalendarUncheckedUpdateWithoutTermsInput>
    create: XOR<AcademicCalendarCreateWithoutTermsInput, AcademicCalendarUncheckedCreateWithoutTermsInput>
    where?: AcademicCalendarWhereInput
  }

  export type AcademicCalendarUpdateToOneWithWhereWithoutTermsInput = {
    where?: AcademicCalendarWhereInput
    data: XOR<AcademicCalendarUpdateWithoutTermsInput, AcademicCalendarUncheckedUpdateWithoutTermsInput>
  }

  export type AcademicCalendarUpdateWithoutTermsInput = {
    id?: StringFieldUpdateOperationsInput | string
    schoolId?: StringFieldUpdateOperationsInput | string
    academicYear?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AcademicCalendarUncheckedUpdateWithoutTermsInput = {
    id?: StringFieldUpdateOperationsInput | string
    schoolId?: StringFieldUpdateOperationsInput | string
    academicYear?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventAttendeeCreateManyEventInput = {
    id?: string
    userId: string
    userType: string
    status?: $Enums.AttendeeStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventAttendeeUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    userType?: StringFieldUpdateOperationsInput | string
    status?: EnumAttendeeStatusFieldUpdateOperationsInput | $Enums.AttendeeStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventAttendeeUncheckedUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    userType?: StringFieldUpdateOperationsInput | string
    status?: EnumAttendeeStatusFieldUpdateOperationsInput | $Enums.AttendeeStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventAttendeeUncheckedUpdateManyWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    userType?: StringFieldUpdateOperationsInput | string
    status?: EnumAttendeeStatusFieldUpdateOperationsInput | $Enums.AttendeeStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TermCreateManyCalendarInput = {
    id?: string
    name: string
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TermUpdateWithoutCalendarInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TermUncheckedUpdateWithoutCalendarInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TermUncheckedUpdateManyWithoutCalendarInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use EventCountOutputTypeDefaultArgs instead
     */
    export type EventCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EventCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AcademicCalendarCountOutputTypeDefaultArgs instead
     */
    export type AcademicCalendarCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AcademicCalendarCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EventDefaultArgs instead
     */
    export type EventArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EventDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EventAttendeeDefaultArgs instead
     */
    export type EventAttendeeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EventAttendeeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use HolidayDefaultArgs instead
     */
    export type HolidayArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = HolidayDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AcademicCalendarDefaultArgs instead
     */
    export type AcademicCalendarArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AcademicCalendarDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TermDefaultArgs instead
     */
    export type TermArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TermDefaultArgs<ExtArgs>

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