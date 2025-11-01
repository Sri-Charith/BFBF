
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
 * Model playing_with_neon
 * 
 */
export type playing_with_neon = $Result.DefaultSelection<Prisma.$playing_with_neonPayload>
/**
 * Model state_data
 * 
 */
export type state_data = $Result.DefaultSelection<Prisma.$state_dataPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Playing_with_neons
 * const playing_with_neons = await prisma.playing_with_neon.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Playing_with_neons
   * const playing_with_neons = await prisma.playing_with_neon.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.playing_with_neon`: Exposes CRUD operations for the **playing_with_neon** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Playing_with_neons
    * const playing_with_neons = await prisma.playing_with_neon.findMany()
    * ```
    */
  get playing_with_neon(): Prisma.playing_with_neonDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.state_data`: Exposes CRUD operations for the **state_data** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more State_data
    * const state_data = await prisma.state_data.findMany()
    * ```
    */
  get state_data(): Prisma.state_dataDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.18.0
   * Query Engine version: 34b5a692b7bd79939a9a2c3ef97d816e749cda2f
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    playing_with_neon: 'playing_with_neon',
    state_data: 'state_data'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "playing_with_neon" | "state_data"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      playing_with_neon: {
        payload: Prisma.$playing_with_neonPayload<ExtArgs>
        fields: Prisma.playing_with_neonFieldRefs
        operations: {
          findUnique: {
            args: Prisma.playing_with_neonFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$playing_with_neonPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.playing_with_neonFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$playing_with_neonPayload>
          }
          findFirst: {
            args: Prisma.playing_with_neonFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$playing_with_neonPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.playing_with_neonFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$playing_with_neonPayload>
          }
          findMany: {
            args: Prisma.playing_with_neonFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$playing_with_neonPayload>[]
          }
          create: {
            args: Prisma.playing_with_neonCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$playing_with_neonPayload>
          }
          createMany: {
            args: Prisma.playing_with_neonCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.playing_with_neonCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$playing_with_neonPayload>[]
          }
          delete: {
            args: Prisma.playing_with_neonDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$playing_with_neonPayload>
          }
          update: {
            args: Prisma.playing_with_neonUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$playing_with_neonPayload>
          }
          deleteMany: {
            args: Prisma.playing_with_neonDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.playing_with_neonUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.playing_with_neonUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$playing_with_neonPayload>[]
          }
          upsert: {
            args: Prisma.playing_with_neonUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$playing_with_neonPayload>
          }
          aggregate: {
            args: Prisma.Playing_with_neonAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlaying_with_neon>
          }
          groupBy: {
            args: Prisma.playing_with_neonGroupByArgs<ExtArgs>
            result: $Utils.Optional<Playing_with_neonGroupByOutputType>[]
          }
          count: {
            args: Prisma.playing_with_neonCountArgs<ExtArgs>
            result: $Utils.Optional<Playing_with_neonCountAggregateOutputType> | number
          }
        }
      }
      state_data: {
        payload: Prisma.$state_dataPayload<ExtArgs>
        fields: Prisma.state_dataFieldRefs
        operations: {
          findUnique: {
            args: Prisma.state_dataFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$state_dataPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.state_dataFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$state_dataPayload>
          }
          findFirst: {
            args: Prisma.state_dataFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$state_dataPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.state_dataFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$state_dataPayload>
          }
          findMany: {
            args: Prisma.state_dataFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$state_dataPayload>[]
          }
          create: {
            args: Prisma.state_dataCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$state_dataPayload>
          }
          createMany: {
            args: Prisma.state_dataCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.state_dataCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$state_dataPayload>[]
          }
          delete: {
            args: Prisma.state_dataDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$state_dataPayload>
          }
          update: {
            args: Prisma.state_dataUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$state_dataPayload>
          }
          deleteMany: {
            args: Prisma.state_dataDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.state_dataUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.state_dataUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$state_dataPayload>[]
          }
          upsert: {
            args: Prisma.state_dataUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$state_dataPayload>
          }
          aggregate: {
            args: Prisma.State_dataAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateState_data>
          }
          groupBy: {
            args: Prisma.state_dataGroupByArgs<ExtArgs>
            result: $Utils.Optional<State_dataGroupByOutputType>[]
          }
          count: {
            args: Prisma.state_dataCountArgs<ExtArgs>
            result: $Utils.Optional<State_dataCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    playing_with_neon?: playing_with_neonOmit
    state_data?: state_dataOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    | 'updateManyAndReturn'
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
   * Model playing_with_neon
   */

  export type AggregatePlaying_with_neon = {
    _count: Playing_with_neonCountAggregateOutputType | null
    _avg: Playing_with_neonAvgAggregateOutputType | null
    _sum: Playing_with_neonSumAggregateOutputType | null
    _min: Playing_with_neonMinAggregateOutputType | null
    _max: Playing_with_neonMaxAggregateOutputType | null
  }

  export type Playing_with_neonAvgAggregateOutputType = {
    id: number | null
    value: number | null
  }

  export type Playing_with_neonSumAggregateOutputType = {
    id: number | null
    value: number | null
  }

  export type Playing_with_neonMinAggregateOutputType = {
    id: number | null
    name: string | null
    value: number | null
  }

  export type Playing_with_neonMaxAggregateOutputType = {
    id: number | null
    name: string | null
    value: number | null
  }

  export type Playing_with_neonCountAggregateOutputType = {
    id: number
    name: number
    value: number
    _all: number
  }


  export type Playing_with_neonAvgAggregateInputType = {
    id?: true
    value?: true
  }

  export type Playing_with_neonSumAggregateInputType = {
    id?: true
    value?: true
  }

  export type Playing_with_neonMinAggregateInputType = {
    id?: true
    name?: true
    value?: true
  }

  export type Playing_with_neonMaxAggregateInputType = {
    id?: true
    name?: true
    value?: true
  }

  export type Playing_with_neonCountAggregateInputType = {
    id?: true
    name?: true
    value?: true
    _all?: true
  }

  export type Playing_with_neonAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which playing_with_neon to aggregate.
     */
    where?: playing_with_neonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of playing_with_neons to fetch.
     */
    orderBy?: playing_with_neonOrderByWithRelationInput | playing_with_neonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: playing_with_neonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` playing_with_neons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` playing_with_neons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned playing_with_neons
    **/
    _count?: true | Playing_with_neonCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Playing_with_neonAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Playing_with_neonSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Playing_with_neonMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Playing_with_neonMaxAggregateInputType
  }

  export type GetPlaying_with_neonAggregateType<T extends Playing_with_neonAggregateArgs> = {
        [P in keyof T & keyof AggregatePlaying_with_neon]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlaying_with_neon[P]>
      : GetScalarType<T[P], AggregatePlaying_with_neon[P]>
  }




  export type playing_with_neonGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: playing_with_neonWhereInput
    orderBy?: playing_with_neonOrderByWithAggregationInput | playing_with_neonOrderByWithAggregationInput[]
    by: Playing_with_neonScalarFieldEnum[] | Playing_with_neonScalarFieldEnum
    having?: playing_with_neonScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Playing_with_neonCountAggregateInputType | true
    _avg?: Playing_with_neonAvgAggregateInputType
    _sum?: Playing_with_neonSumAggregateInputType
    _min?: Playing_with_neonMinAggregateInputType
    _max?: Playing_with_neonMaxAggregateInputType
  }

  export type Playing_with_neonGroupByOutputType = {
    id: number
    name: string
    value: number
    _count: Playing_with_neonCountAggregateOutputType | null
    _avg: Playing_with_neonAvgAggregateOutputType | null
    _sum: Playing_with_neonSumAggregateOutputType | null
    _min: Playing_with_neonMinAggregateOutputType | null
    _max: Playing_with_neonMaxAggregateOutputType | null
  }

  type GetPlaying_with_neonGroupByPayload<T extends playing_with_neonGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Playing_with_neonGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Playing_with_neonGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Playing_with_neonGroupByOutputType[P]>
            : GetScalarType<T[P], Playing_with_neonGroupByOutputType[P]>
        }
      >
    >


  export type playing_with_neonSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    value?: boolean
  }, ExtArgs["result"]["playing_with_neon"]>

  export type playing_with_neonSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    value?: boolean
  }, ExtArgs["result"]["playing_with_neon"]>

  export type playing_with_neonSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    value?: boolean
  }, ExtArgs["result"]["playing_with_neon"]>

  export type playing_with_neonSelectScalar = {
    id?: boolean
    name?: boolean
    value?: boolean
  }

  export type playing_with_neonOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "value", ExtArgs["result"]["playing_with_neon"]>

  export type $playing_with_neonPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "playing_with_neon"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      value: number
    }, ExtArgs["result"]["playing_with_neon"]>
    composites: {}
  }

  type playing_with_neonGetPayload<S extends boolean | null | undefined | playing_with_neonDefaultArgs> = $Result.GetResult<Prisma.$playing_with_neonPayload, S>

  type playing_with_neonCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<playing_with_neonFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Playing_with_neonCountAggregateInputType | true
    }

  export interface playing_with_neonDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['playing_with_neon'], meta: { name: 'playing_with_neon' } }
    /**
     * Find zero or one Playing_with_neon that matches the filter.
     * @param {playing_with_neonFindUniqueArgs} args - Arguments to find a Playing_with_neon
     * @example
     * // Get one Playing_with_neon
     * const playing_with_neon = await prisma.playing_with_neon.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends playing_with_neonFindUniqueArgs>(args: SelectSubset<T, playing_with_neonFindUniqueArgs<ExtArgs>>): Prisma__playing_with_neonClient<$Result.GetResult<Prisma.$playing_with_neonPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Playing_with_neon that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {playing_with_neonFindUniqueOrThrowArgs} args - Arguments to find a Playing_with_neon
     * @example
     * // Get one Playing_with_neon
     * const playing_with_neon = await prisma.playing_with_neon.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends playing_with_neonFindUniqueOrThrowArgs>(args: SelectSubset<T, playing_with_neonFindUniqueOrThrowArgs<ExtArgs>>): Prisma__playing_with_neonClient<$Result.GetResult<Prisma.$playing_with_neonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Playing_with_neon that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {playing_with_neonFindFirstArgs} args - Arguments to find a Playing_with_neon
     * @example
     * // Get one Playing_with_neon
     * const playing_with_neon = await prisma.playing_with_neon.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends playing_with_neonFindFirstArgs>(args?: SelectSubset<T, playing_with_neonFindFirstArgs<ExtArgs>>): Prisma__playing_with_neonClient<$Result.GetResult<Prisma.$playing_with_neonPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Playing_with_neon that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {playing_with_neonFindFirstOrThrowArgs} args - Arguments to find a Playing_with_neon
     * @example
     * // Get one Playing_with_neon
     * const playing_with_neon = await prisma.playing_with_neon.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends playing_with_neonFindFirstOrThrowArgs>(args?: SelectSubset<T, playing_with_neonFindFirstOrThrowArgs<ExtArgs>>): Prisma__playing_with_neonClient<$Result.GetResult<Prisma.$playing_with_neonPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Playing_with_neons that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {playing_with_neonFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Playing_with_neons
     * const playing_with_neons = await prisma.playing_with_neon.findMany()
     * 
     * // Get first 10 Playing_with_neons
     * const playing_with_neons = await prisma.playing_with_neon.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const playing_with_neonWithIdOnly = await prisma.playing_with_neon.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends playing_with_neonFindManyArgs>(args?: SelectSubset<T, playing_with_neonFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$playing_with_neonPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Playing_with_neon.
     * @param {playing_with_neonCreateArgs} args - Arguments to create a Playing_with_neon.
     * @example
     * // Create one Playing_with_neon
     * const Playing_with_neon = await prisma.playing_with_neon.create({
     *   data: {
     *     // ... data to create a Playing_with_neon
     *   }
     * })
     * 
     */
    create<T extends playing_with_neonCreateArgs>(args: SelectSubset<T, playing_with_neonCreateArgs<ExtArgs>>): Prisma__playing_with_neonClient<$Result.GetResult<Prisma.$playing_with_neonPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Playing_with_neons.
     * @param {playing_with_neonCreateManyArgs} args - Arguments to create many Playing_with_neons.
     * @example
     * // Create many Playing_with_neons
     * const playing_with_neon = await prisma.playing_with_neon.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends playing_with_neonCreateManyArgs>(args?: SelectSubset<T, playing_with_neonCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Playing_with_neons and returns the data saved in the database.
     * @param {playing_with_neonCreateManyAndReturnArgs} args - Arguments to create many Playing_with_neons.
     * @example
     * // Create many Playing_with_neons
     * const playing_with_neon = await prisma.playing_with_neon.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Playing_with_neons and only return the `id`
     * const playing_with_neonWithIdOnly = await prisma.playing_with_neon.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends playing_with_neonCreateManyAndReturnArgs>(args?: SelectSubset<T, playing_with_neonCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$playing_with_neonPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Playing_with_neon.
     * @param {playing_with_neonDeleteArgs} args - Arguments to delete one Playing_with_neon.
     * @example
     * // Delete one Playing_with_neon
     * const Playing_with_neon = await prisma.playing_with_neon.delete({
     *   where: {
     *     // ... filter to delete one Playing_with_neon
     *   }
     * })
     * 
     */
    delete<T extends playing_with_neonDeleteArgs>(args: SelectSubset<T, playing_with_neonDeleteArgs<ExtArgs>>): Prisma__playing_with_neonClient<$Result.GetResult<Prisma.$playing_with_neonPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Playing_with_neon.
     * @param {playing_with_neonUpdateArgs} args - Arguments to update one Playing_with_neon.
     * @example
     * // Update one Playing_with_neon
     * const playing_with_neon = await prisma.playing_with_neon.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends playing_with_neonUpdateArgs>(args: SelectSubset<T, playing_with_neonUpdateArgs<ExtArgs>>): Prisma__playing_with_neonClient<$Result.GetResult<Prisma.$playing_with_neonPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Playing_with_neons.
     * @param {playing_with_neonDeleteManyArgs} args - Arguments to filter Playing_with_neons to delete.
     * @example
     * // Delete a few Playing_with_neons
     * const { count } = await prisma.playing_with_neon.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends playing_with_neonDeleteManyArgs>(args?: SelectSubset<T, playing_with_neonDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Playing_with_neons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {playing_with_neonUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Playing_with_neons
     * const playing_with_neon = await prisma.playing_with_neon.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends playing_with_neonUpdateManyArgs>(args: SelectSubset<T, playing_with_neonUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Playing_with_neons and returns the data updated in the database.
     * @param {playing_with_neonUpdateManyAndReturnArgs} args - Arguments to update many Playing_with_neons.
     * @example
     * // Update many Playing_with_neons
     * const playing_with_neon = await prisma.playing_with_neon.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Playing_with_neons and only return the `id`
     * const playing_with_neonWithIdOnly = await prisma.playing_with_neon.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends playing_with_neonUpdateManyAndReturnArgs>(args: SelectSubset<T, playing_with_neonUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$playing_with_neonPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Playing_with_neon.
     * @param {playing_with_neonUpsertArgs} args - Arguments to update or create a Playing_with_neon.
     * @example
     * // Update or create a Playing_with_neon
     * const playing_with_neon = await prisma.playing_with_neon.upsert({
     *   create: {
     *     // ... data to create a Playing_with_neon
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Playing_with_neon we want to update
     *   }
     * })
     */
    upsert<T extends playing_with_neonUpsertArgs>(args: SelectSubset<T, playing_with_neonUpsertArgs<ExtArgs>>): Prisma__playing_with_neonClient<$Result.GetResult<Prisma.$playing_with_neonPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Playing_with_neons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {playing_with_neonCountArgs} args - Arguments to filter Playing_with_neons to count.
     * @example
     * // Count the number of Playing_with_neons
     * const count = await prisma.playing_with_neon.count({
     *   where: {
     *     // ... the filter for the Playing_with_neons we want to count
     *   }
     * })
    **/
    count<T extends playing_with_neonCountArgs>(
      args?: Subset<T, playing_with_neonCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Playing_with_neonCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Playing_with_neon.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Playing_with_neonAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Playing_with_neonAggregateArgs>(args: Subset<T, Playing_with_neonAggregateArgs>): Prisma.PrismaPromise<GetPlaying_with_neonAggregateType<T>>

    /**
     * Group by Playing_with_neon.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {playing_with_neonGroupByArgs} args - Group by arguments.
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
      T extends playing_with_neonGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: playing_with_neonGroupByArgs['orderBy'] }
        : { orderBy?: playing_with_neonGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, playing_with_neonGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlaying_with_neonGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the playing_with_neon model
   */
  readonly fields: playing_with_neonFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for playing_with_neon.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__playing_with_neonClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the playing_with_neon model
   */
  interface playing_with_neonFieldRefs {
    readonly id: FieldRef<"playing_with_neon", 'Int'>
    readonly name: FieldRef<"playing_with_neon", 'String'>
    readonly value: FieldRef<"playing_with_neon", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * playing_with_neon findUnique
   */
  export type playing_with_neonFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the playing_with_neon
     */
    select?: playing_with_neonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the playing_with_neon
     */
    omit?: playing_with_neonOmit<ExtArgs> | null
    /**
     * Filter, which playing_with_neon to fetch.
     */
    where: playing_with_neonWhereUniqueInput
  }

  /**
   * playing_with_neon findUniqueOrThrow
   */
  export type playing_with_neonFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the playing_with_neon
     */
    select?: playing_with_neonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the playing_with_neon
     */
    omit?: playing_with_neonOmit<ExtArgs> | null
    /**
     * Filter, which playing_with_neon to fetch.
     */
    where: playing_with_neonWhereUniqueInput
  }

  /**
   * playing_with_neon findFirst
   */
  export type playing_with_neonFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the playing_with_neon
     */
    select?: playing_with_neonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the playing_with_neon
     */
    omit?: playing_with_neonOmit<ExtArgs> | null
    /**
     * Filter, which playing_with_neon to fetch.
     */
    where?: playing_with_neonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of playing_with_neons to fetch.
     */
    orderBy?: playing_with_neonOrderByWithRelationInput | playing_with_neonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for playing_with_neons.
     */
    cursor?: playing_with_neonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` playing_with_neons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` playing_with_neons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of playing_with_neons.
     */
    distinct?: Playing_with_neonScalarFieldEnum | Playing_with_neonScalarFieldEnum[]
  }

  /**
   * playing_with_neon findFirstOrThrow
   */
  export type playing_with_neonFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the playing_with_neon
     */
    select?: playing_with_neonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the playing_with_neon
     */
    omit?: playing_with_neonOmit<ExtArgs> | null
    /**
     * Filter, which playing_with_neon to fetch.
     */
    where?: playing_with_neonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of playing_with_neons to fetch.
     */
    orderBy?: playing_with_neonOrderByWithRelationInput | playing_with_neonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for playing_with_neons.
     */
    cursor?: playing_with_neonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` playing_with_neons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` playing_with_neons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of playing_with_neons.
     */
    distinct?: Playing_with_neonScalarFieldEnum | Playing_with_neonScalarFieldEnum[]
  }

  /**
   * playing_with_neon findMany
   */
  export type playing_with_neonFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the playing_with_neon
     */
    select?: playing_with_neonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the playing_with_neon
     */
    omit?: playing_with_neonOmit<ExtArgs> | null
    /**
     * Filter, which playing_with_neons to fetch.
     */
    where?: playing_with_neonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of playing_with_neons to fetch.
     */
    orderBy?: playing_with_neonOrderByWithRelationInput | playing_with_neonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing playing_with_neons.
     */
    cursor?: playing_with_neonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` playing_with_neons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` playing_with_neons.
     */
    skip?: number
    distinct?: Playing_with_neonScalarFieldEnum | Playing_with_neonScalarFieldEnum[]
  }

  /**
   * playing_with_neon create
   */
  export type playing_with_neonCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the playing_with_neon
     */
    select?: playing_with_neonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the playing_with_neon
     */
    omit?: playing_with_neonOmit<ExtArgs> | null
    /**
     * The data needed to create a playing_with_neon.
     */
    data: XOR<playing_with_neonCreateInput, playing_with_neonUncheckedCreateInput>
  }

  /**
   * playing_with_neon createMany
   */
  export type playing_with_neonCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many playing_with_neons.
     */
    data: playing_with_neonCreateManyInput | playing_with_neonCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * playing_with_neon createManyAndReturn
   */
  export type playing_with_neonCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the playing_with_neon
     */
    select?: playing_with_neonSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the playing_with_neon
     */
    omit?: playing_with_neonOmit<ExtArgs> | null
    /**
     * The data used to create many playing_with_neons.
     */
    data: playing_with_neonCreateManyInput | playing_with_neonCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * playing_with_neon update
   */
  export type playing_with_neonUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the playing_with_neon
     */
    select?: playing_with_neonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the playing_with_neon
     */
    omit?: playing_with_neonOmit<ExtArgs> | null
    /**
     * The data needed to update a playing_with_neon.
     */
    data: XOR<playing_with_neonUpdateInput, playing_with_neonUncheckedUpdateInput>
    /**
     * Choose, which playing_with_neon to update.
     */
    where: playing_with_neonWhereUniqueInput
  }

  /**
   * playing_with_neon updateMany
   */
  export type playing_with_neonUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update playing_with_neons.
     */
    data: XOR<playing_with_neonUpdateManyMutationInput, playing_with_neonUncheckedUpdateManyInput>
    /**
     * Filter which playing_with_neons to update
     */
    where?: playing_with_neonWhereInput
    /**
     * Limit how many playing_with_neons to update.
     */
    limit?: number
  }

  /**
   * playing_with_neon updateManyAndReturn
   */
  export type playing_with_neonUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the playing_with_neon
     */
    select?: playing_with_neonSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the playing_with_neon
     */
    omit?: playing_with_neonOmit<ExtArgs> | null
    /**
     * The data used to update playing_with_neons.
     */
    data: XOR<playing_with_neonUpdateManyMutationInput, playing_with_neonUncheckedUpdateManyInput>
    /**
     * Filter which playing_with_neons to update
     */
    where?: playing_with_neonWhereInput
    /**
     * Limit how many playing_with_neons to update.
     */
    limit?: number
  }

  /**
   * playing_with_neon upsert
   */
  export type playing_with_neonUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the playing_with_neon
     */
    select?: playing_with_neonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the playing_with_neon
     */
    omit?: playing_with_neonOmit<ExtArgs> | null
    /**
     * The filter to search for the playing_with_neon to update in case it exists.
     */
    where: playing_with_neonWhereUniqueInput
    /**
     * In case the playing_with_neon found by the `where` argument doesn't exist, create a new playing_with_neon with this data.
     */
    create: XOR<playing_with_neonCreateInput, playing_with_neonUncheckedCreateInput>
    /**
     * In case the playing_with_neon was found with the provided `where` argument, update it with this data.
     */
    update: XOR<playing_with_neonUpdateInput, playing_with_neonUncheckedUpdateInput>
  }

  /**
   * playing_with_neon delete
   */
  export type playing_with_neonDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the playing_with_neon
     */
    select?: playing_with_neonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the playing_with_neon
     */
    omit?: playing_with_neonOmit<ExtArgs> | null
    /**
     * Filter which playing_with_neon to delete.
     */
    where: playing_with_neonWhereUniqueInput
  }

  /**
   * playing_with_neon deleteMany
   */
  export type playing_with_neonDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which playing_with_neons to delete
     */
    where?: playing_with_neonWhereInput
    /**
     * Limit how many playing_with_neons to delete.
     */
    limit?: number
  }

  /**
   * playing_with_neon without action
   */
  export type playing_with_neonDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the playing_with_neon
     */
    select?: playing_with_neonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the playing_with_neon
     */
    omit?: playing_with_neonOmit<ExtArgs> | null
  }


  /**
   * Model state_data
   */

  export type AggregateState_data = {
    _count: State_dataCountAggregateOutputType | null
    _avg: State_dataAvgAggregateOutputType | null
    _sum: State_dataSumAggregateOutputType | null
    _min: State_dataMinAggregateOutputType | null
    _max: State_dataMaxAggregateOutputType | null
  }

  export type State_dataAvgAggregateOutputType = {
    id: number | null
    state_code: number | null
    district_code: number | null
    Approved_Labour_Budget: number | null
    Average_Wage_rate_per_day_per_person: Decimal | null
    Average_days_of_employment_provided_per_Household: number | null
    Differently_abled_persons_worked: number | null
    Material_and_skilled_Wages: Decimal | null
    Number_of_Completed_Works: number | null
    Number_of_GPs_with_NIL_exp: number | null
    Number_of_Ongoing_Works: number | null
    Persondays_of_Central_Liability_so_far: number | null
    SC_persondays: number | null
    SC_workers_against_active_workers: number | null
    ST_persondays: number | null
    ST_workers_against_active_workers: number | null
    Total_Adm_Expenditure: Decimal | null
    Total_Exp: Decimal | null
    Total_Households_Worked: number | null
    Total_Individuals_Worked: number | null
    Total_No_of_Active_Job_Cards: number | null
    Total_No_of_Active_Workers: number | null
    Total_No_of_HHs_completed_100_Days_of_Wage_Employment: number | null
    Total_No_of_JobCards_issued: number | null
    Total_No_of_Workers: number | null
    Total_No_of_Works_Takenup: number | null
    Wages: Decimal | null
    Women_Persondays: number | null
    percent_of_Category_B_Works: Decimal | null
    percent_of_Expenditure_on_Agriculture_Allied_Works: Decimal | null
    percent_of_NRM_Expenditure: Decimal | null
    percentage_payments_gererated_within_15_days: Decimal | null
  }

  export type State_dataSumAggregateOutputType = {
    id: number | null
    state_code: number | null
    district_code: number | null
    Approved_Labour_Budget: bigint | null
    Average_Wage_rate_per_day_per_person: Decimal | null
    Average_days_of_employment_provided_per_Household: number | null
    Differently_abled_persons_worked: number | null
    Material_and_skilled_Wages: Decimal | null
    Number_of_Completed_Works: number | null
    Number_of_GPs_with_NIL_exp: number | null
    Number_of_Ongoing_Works: number | null
    Persondays_of_Central_Liability_so_far: bigint | null
    SC_persondays: bigint | null
    SC_workers_against_active_workers: number | null
    ST_persondays: bigint | null
    ST_workers_against_active_workers: number | null
    Total_Adm_Expenditure: Decimal | null
    Total_Exp: Decimal | null
    Total_Households_Worked: number | null
    Total_Individuals_Worked: number | null
    Total_No_of_Active_Job_Cards: number | null
    Total_No_of_Active_Workers: number | null
    Total_No_of_HHs_completed_100_Days_of_Wage_Employment: number | null
    Total_No_of_JobCards_issued: number | null
    Total_No_of_Workers: number | null
    Total_No_of_Works_Takenup: number | null
    Wages: Decimal | null
    Women_Persondays: bigint | null
    percent_of_Category_B_Works: Decimal | null
    percent_of_Expenditure_on_Agriculture_Allied_Works: Decimal | null
    percent_of_NRM_Expenditure: Decimal | null
    percentage_payments_gererated_within_15_days: Decimal | null
  }

  export type State_dataMinAggregateOutputType = {
    id: number | null
    fin_year: string | null
    month: string | null
    state_code: number | null
    state_name: string | null
    district_code: number | null
    district_name: string | null
    Approved_Labour_Budget: bigint | null
    Average_Wage_rate_per_day_per_person: Decimal | null
    Average_days_of_employment_provided_per_Household: number | null
    Differently_abled_persons_worked: number | null
    Material_and_skilled_Wages: Decimal | null
    Number_of_Completed_Works: number | null
    Number_of_GPs_with_NIL_exp: number | null
    Number_of_Ongoing_Works: number | null
    Persondays_of_Central_Liability_so_far: bigint | null
    SC_persondays: bigint | null
    SC_workers_against_active_workers: number | null
    ST_persondays: bigint | null
    ST_workers_against_active_workers: number | null
    Total_Adm_Expenditure: Decimal | null
    Total_Exp: Decimal | null
    Total_Households_Worked: number | null
    Total_Individuals_Worked: number | null
    Total_No_of_Active_Job_Cards: number | null
    Total_No_of_Active_Workers: number | null
    Total_No_of_HHs_completed_100_Days_of_Wage_Employment: number | null
    Total_No_of_JobCards_issued: number | null
    Total_No_of_Workers: number | null
    Total_No_of_Works_Takenup: number | null
    Wages: Decimal | null
    Women_Persondays: bigint | null
    percent_of_Category_B_Works: Decimal | null
    percent_of_Expenditure_on_Agriculture_Allied_Works: Decimal | null
    percent_of_NRM_Expenditure: Decimal | null
    percentage_payments_gererated_within_15_days: Decimal | null
    Remarks: string | null
  }

  export type State_dataMaxAggregateOutputType = {
    id: number | null
    fin_year: string | null
    month: string | null
    state_code: number | null
    state_name: string | null
    district_code: number | null
    district_name: string | null
    Approved_Labour_Budget: bigint | null
    Average_Wage_rate_per_day_per_person: Decimal | null
    Average_days_of_employment_provided_per_Household: number | null
    Differently_abled_persons_worked: number | null
    Material_and_skilled_Wages: Decimal | null
    Number_of_Completed_Works: number | null
    Number_of_GPs_with_NIL_exp: number | null
    Number_of_Ongoing_Works: number | null
    Persondays_of_Central_Liability_so_far: bigint | null
    SC_persondays: bigint | null
    SC_workers_against_active_workers: number | null
    ST_persondays: bigint | null
    ST_workers_against_active_workers: number | null
    Total_Adm_Expenditure: Decimal | null
    Total_Exp: Decimal | null
    Total_Households_Worked: number | null
    Total_Individuals_Worked: number | null
    Total_No_of_Active_Job_Cards: number | null
    Total_No_of_Active_Workers: number | null
    Total_No_of_HHs_completed_100_Days_of_Wage_Employment: number | null
    Total_No_of_JobCards_issued: number | null
    Total_No_of_Workers: number | null
    Total_No_of_Works_Takenup: number | null
    Wages: Decimal | null
    Women_Persondays: bigint | null
    percent_of_Category_B_Works: Decimal | null
    percent_of_Expenditure_on_Agriculture_Allied_Works: Decimal | null
    percent_of_NRM_Expenditure: Decimal | null
    percentage_payments_gererated_within_15_days: Decimal | null
    Remarks: string | null
  }

  export type State_dataCountAggregateOutputType = {
    id: number
    fin_year: number
    month: number
    state_code: number
    state_name: number
    district_code: number
    district_name: number
    Approved_Labour_Budget: number
    Average_Wage_rate_per_day_per_person: number
    Average_days_of_employment_provided_per_Household: number
    Differently_abled_persons_worked: number
    Material_and_skilled_Wages: number
    Number_of_Completed_Works: number
    Number_of_GPs_with_NIL_exp: number
    Number_of_Ongoing_Works: number
    Persondays_of_Central_Liability_so_far: number
    SC_persondays: number
    SC_workers_against_active_workers: number
    ST_persondays: number
    ST_workers_against_active_workers: number
    Total_Adm_Expenditure: number
    Total_Exp: number
    Total_Households_Worked: number
    Total_Individuals_Worked: number
    Total_No_of_Active_Job_Cards: number
    Total_No_of_Active_Workers: number
    Total_No_of_HHs_completed_100_Days_of_Wage_Employment: number
    Total_No_of_JobCards_issued: number
    Total_No_of_Workers: number
    Total_No_of_Works_Takenup: number
    Wages: number
    Women_Persondays: number
    percent_of_Category_B_Works: number
    percent_of_Expenditure_on_Agriculture_Allied_Works: number
    percent_of_NRM_Expenditure: number
    percentage_payments_gererated_within_15_days: number
    Remarks: number
    _all: number
  }


  export type State_dataAvgAggregateInputType = {
    id?: true
    state_code?: true
    district_code?: true
    Approved_Labour_Budget?: true
    Average_Wage_rate_per_day_per_person?: true
    Average_days_of_employment_provided_per_Household?: true
    Differently_abled_persons_worked?: true
    Material_and_skilled_Wages?: true
    Number_of_Completed_Works?: true
    Number_of_GPs_with_NIL_exp?: true
    Number_of_Ongoing_Works?: true
    Persondays_of_Central_Liability_so_far?: true
    SC_persondays?: true
    SC_workers_against_active_workers?: true
    ST_persondays?: true
    ST_workers_against_active_workers?: true
    Total_Adm_Expenditure?: true
    Total_Exp?: true
    Total_Households_Worked?: true
    Total_Individuals_Worked?: true
    Total_No_of_Active_Job_Cards?: true
    Total_No_of_Active_Workers?: true
    Total_No_of_HHs_completed_100_Days_of_Wage_Employment?: true
    Total_No_of_JobCards_issued?: true
    Total_No_of_Workers?: true
    Total_No_of_Works_Takenup?: true
    Wages?: true
    Women_Persondays?: true
    percent_of_Category_B_Works?: true
    percent_of_Expenditure_on_Agriculture_Allied_Works?: true
    percent_of_NRM_Expenditure?: true
    percentage_payments_gererated_within_15_days?: true
  }

  export type State_dataSumAggregateInputType = {
    id?: true
    state_code?: true
    district_code?: true
    Approved_Labour_Budget?: true
    Average_Wage_rate_per_day_per_person?: true
    Average_days_of_employment_provided_per_Household?: true
    Differently_abled_persons_worked?: true
    Material_and_skilled_Wages?: true
    Number_of_Completed_Works?: true
    Number_of_GPs_with_NIL_exp?: true
    Number_of_Ongoing_Works?: true
    Persondays_of_Central_Liability_so_far?: true
    SC_persondays?: true
    SC_workers_against_active_workers?: true
    ST_persondays?: true
    ST_workers_against_active_workers?: true
    Total_Adm_Expenditure?: true
    Total_Exp?: true
    Total_Households_Worked?: true
    Total_Individuals_Worked?: true
    Total_No_of_Active_Job_Cards?: true
    Total_No_of_Active_Workers?: true
    Total_No_of_HHs_completed_100_Days_of_Wage_Employment?: true
    Total_No_of_JobCards_issued?: true
    Total_No_of_Workers?: true
    Total_No_of_Works_Takenup?: true
    Wages?: true
    Women_Persondays?: true
    percent_of_Category_B_Works?: true
    percent_of_Expenditure_on_Agriculture_Allied_Works?: true
    percent_of_NRM_Expenditure?: true
    percentage_payments_gererated_within_15_days?: true
  }

  export type State_dataMinAggregateInputType = {
    id?: true
    fin_year?: true
    month?: true
    state_code?: true
    state_name?: true
    district_code?: true
    district_name?: true
    Approved_Labour_Budget?: true
    Average_Wage_rate_per_day_per_person?: true
    Average_days_of_employment_provided_per_Household?: true
    Differently_abled_persons_worked?: true
    Material_and_skilled_Wages?: true
    Number_of_Completed_Works?: true
    Number_of_GPs_with_NIL_exp?: true
    Number_of_Ongoing_Works?: true
    Persondays_of_Central_Liability_so_far?: true
    SC_persondays?: true
    SC_workers_against_active_workers?: true
    ST_persondays?: true
    ST_workers_against_active_workers?: true
    Total_Adm_Expenditure?: true
    Total_Exp?: true
    Total_Households_Worked?: true
    Total_Individuals_Worked?: true
    Total_No_of_Active_Job_Cards?: true
    Total_No_of_Active_Workers?: true
    Total_No_of_HHs_completed_100_Days_of_Wage_Employment?: true
    Total_No_of_JobCards_issued?: true
    Total_No_of_Workers?: true
    Total_No_of_Works_Takenup?: true
    Wages?: true
    Women_Persondays?: true
    percent_of_Category_B_Works?: true
    percent_of_Expenditure_on_Agriculture_Allied_Works?: true
    percent_of_NRM_Expenditure?: true
    percentage_payments_gererated_within_15_days?: true
    Remarks?: true
  }

  export type State_dataMaxAggregateInputType = {
    id?: true
    fin_year?: true
    month?: true
    state_code?: true
    state_name?: true
    district_code?: true
    district_name?: true
    Approved_Labour_Budget?: true
    Average_Wage_rate_per_day_per_person?: true
    Average_days_of_employment_provided_per_Household?: true
    Differently_abled_persons_worked?: true
    Material_and_skilled_Wages?: true
    Number_of_Completed_Works?: true
    Number_of_GPs_with_NIL_exp?: true
    Number_of_Ongoing_Works?: true
    Persondays_of_Central_Liability_so_far?: true
    SC_persondays?: true
    SC_workers_against_active_workers?: true
    ST_persondays?: true
    ST_workers_against_active_workers?: true
    Total_Adm_Expenditure?: true
    Total_Exp?: true
    Total_Households_Worked?: true
    Total_Individuals_Worked?: true
    Total_No_of_Active_Job_Cards?: true
    Total_No_of_Active_Workers?: true
    Total_No_of_HHs_completed_100_Days_of_Wage_Employment?: true
    Total_No_of_JobCards_issued?: true
    Total_No_of_Workers?: true
    Total_No_of_Works_Takenup?: true
    Wages?: true
    Women_Persondays?: true
    percent_of_Category_B_Works?: true
    percent_of_Expenditure_on_Agriculture_Allied_Works?: true
    percent_of_NRM_Expenditure?: true
    percentage_payments_gererated_within_15_days?: true
    Remarks?: true
  }

  export type State_dataCountAggregateInputType = {
    id?: true
    fin_year?: true
    month?: true
    state_code?: true
    state_name?: true
    district_code?: true
    district_name?: true
    Approved_Labour_Budget?: true
    Average_Wage_rate_per_day_per_person?: true
    Average_days_of_employment_provided_per_Household?: true
    Differently_abled_persons_worked?: true
    Material_and_skilled_Wages?: true
    Number_of_Completed_Works?: true
    Number_of_GPs_with_NIL_exp?: true
    Number_of_Ongoing_Works?: true
    Persondays_of_Central_Liability_so_far?: true
    SC_persondays?: true
    SC_workers_against_active_workers?: true
    ST_persondays?: true
    ST_workers_against_active_workers?: true
    Total_Adm_Expenditure?: true
    Total_Exp?: true
    Total_Households_Worked?: true
    Total_Individuals_Worked?: true
    Total_No_of_Active_Job_Cards?: true
    Total_No_of_Active_Workers?: true
    Total_No_of_HHs_completed_100_Days_of_Wage_Employment?: true
    Total_No_of_JobCards_issued?: true
    Total_No_of_Workers?: true
    Total_No_of_Works_Takenup?: true
    Wages?: true
    Women_Persondays?: true
    percent_of_Category_B_Works?: true
    percent_of_Expenditure_on_Agriculture_Allied_Works?: true
    percent_of_NRM_Expenditure?: true
    percentage_payments_gererated_within_15_days?: true
    Remarks?: true
    _all?: true
  }

  export type State_dataAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which state_data to aggregate.
     */
    where?: state_dataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of state_data to fetch.
     */
    orderBy?: state_dataOrderByWithRelationInput | state_dataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: state_dataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` state_data from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` state_data.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned state_data
    **/
    _count?: true | State_dataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: State_dataAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: State_dataSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: State_dataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: State_dataMaxAggregateInputType
  }

  export type GetState_dataAggregateType<T extends State_dataAggregateArgs> = {
        [P in keyof T & keyof AggregateState_data]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateState_data[P]>
      : GetScalarType<T[P], AggregateState_data[P]>
  }




  export type state_dataGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: state_dataWhereInput
    orderBy?: state_dataOrderByWithAggregationInput | state_dataOrderByWithAggregationInput[]
    by: State_dataScalarFieldEnum[] | State_dataScalarFieldEnum
    having?: state_dataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: State_dataCountAggregateInputType | true
    _avg?: State_dataAvgAggregateInputType
    _sum?: State_dataSumAggregateInputType
    _min?: State_dataMinAggregateInputType
    _max?: State_dataMaxAggregateInputType
  }

  export type State_dataGroupByOutputType = {
    id: number
    fin_year: string | null
    month: string | null
    state_code: number | null
    state_name: string | null
    district_code: number | null
    district_name: string | null
    Approved_Labour_Budget: bigint | null
    Average_Wage_rate_per_day_per_person: Decimal | null
    Average_days_of_employment_provided_per_Household: number | null
    Differently_abled_persons_worked: number | null
    Material_and_skilled_Wages: Decimal | null
    Number_of_Completed_Works: number | null
    Number_of_GPs_with_NIL_exp: number | null
    Number_of_Ongoing_Works: number | null
    Persondays_of_Central_Liability_so_far: bigint | null
    SC_persondays: bigint | null
    SC_workers_against_active_workers: number | null
    ST_persondays: bigint | null
    ST_workers_against_active_workers: number | null
    Total_Adm_Expenditure: Decimal | null
    Total_Exp: Decimal | null
    Total_Households_Worked: number | null
    Total_Individuals_Worked: number | null
    Total_No_of_Active_Job_Cards: number | null
    Total_No_of_Active_Workers: number | null
    Total_No_of_HHs_completed_100_Days_of_Wage_Employment: number | null
    Total_No_of_JobCards_issued: number | null
    Total_No_of_Workers: number | null
    Total_No_of_Works_Takenup: number | null
    Wages: Decimal | null
    Women_Persondays: bigint | null
    percent_of_Category_B_Works: Decimal | null
    percent_of_Expenditure_on_Agriculture_Allied_Works: Decimal | null
    percent_of_NRM_Expenditure: Decimal | null
    percentage_payments_gererated_within_15_days: Decimal | null
    Remarks: string | null
    _count: State_dataCountAggregateOutputType | null
    _avg: State_dataAvgAggregateOutputType | null
    _sum: State_dataSumAggregateOutputType | null
    _min: State_dataMinAggregateOutputType | null
    _max: State_dataMaxAggregateOutputType | null
  }

  type GetState_dataGroupByPayload<T extends state_dataGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<State_dataGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof State_dataGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], State_dataGroupByOutputType[P]>
            : GetScalarType<T[P], State_dataGroupByOutputType[P]>
        }
      >
    >


  export type state_dataSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fin_year?: boolean
    month?: boolean
    state_code?: boolean
    state_name?: boolean
    district_code?: boolean
    district_name?: boolean
    Approved_Labour_Budget?: boolean
    Average_Wage_rate_per_day_per_person?: boolean
    Average_days_of_employment_provided_per_Household?: boolean
    Differently_abled_persons_worked?: boolean
    Material_and_skilled_Wages?: boolean
    Number_of_Completed_Works?: boolean
    Number_of_GPs_with_NIL_exp?: boolean
    Number_of_Ongoing_Works?: boolean
    Persondays_of_Central_Liability_so_far?: boolean
    SC_persondays?: boolean
    SC_workers_against_active_workers?: boolean
    ST_persondays?: boolean
    ST_workers_against_active_workers?: boolean
    Total_Adm_Expenditure?: boolean
    Total_Exp?: boolean
    Total_Households_Worked?: boolean
    Total_Individuals_Worked?: boolean
    Total_No_of_Active_Job_Cards?: boolean
    Total_No_of_Active_Workers?: boolean
    Total_No_of_HHs_completed_100_Days_of_Wage_Employment?: boolean
    Total_No_of_JobCards_issued?: boolean
    Total_No_of_Workers?: boolean
    Total_No_of_Works_Takenup?: boolean
    Wages?: boolean
    Women_Persondays?: boolean
    percent_of_Category_B_Works?: boolean
    percent_of_Expenditure_on_Agriculture_Allied_Works?: boolean
    percent_of_NRM_Expenditure?: boolean
    percentage_payments_gererated_within_15_days?: boolean
    Remarks?: boolean
  }, ExtArgs["result"]["state_data"]>

  export type state_dataSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fin_year?: boolean
    month?: boolean
    state_code?: boolean
    state_name?: boolean
    district_code?: boolean
    district_name?: boolean
    Approved_Labour_Budget?: boolean
    Average_Wage_rate_per_day_per_person?: boolean
    Average_days_of_employment_provided_per_Household?: boolean
    Differently_abled_persons_worked?: boolean
    Material_and_skilled_Wages?: boolean
    Number_of_Completed_Works?: boolean
    Number_of_GPs_with_NIL_exp?: boolean
    Number_of_Ongoing_Works?: boolean
    Persondays_of_Central_Liability_so_far?: boolean
    SC_persondays?: boolean
    SC_workers_against_active_workers?: boolean
    ST_persondays?: boolean
    ST_workers_against_active_workers?: boolean
    Total_Adm_Expenditure?: boolean
    Total_Exp?: boolean
    Total_Households_Worked?: boolean
    Total_Individuals_Worked?: boolean
    Total_No_of_Active_Job_Cards?: boolean
    Total_No_of_Active_Workers?: boolean
    Total_No_of_HHs_completed_100_Days_of_Wage_Employment?: boolean
    Total_No_of_JobCards_issued?: boolean
    Total_No_of_Workers?: boolean
    Total_No_of_Works_Takenup?: boolean
    Wages?: boolean
    Women_Persondays?: boolean
    percent_of_Category_B_Works?: boolean
    percent_of_Expenditure_on_Agriculture_Allied_Works?: boolean
    percent_of_NRM_Expenditure?: boolean
    percentage_payments_gererated_within_15_days?: boolean
    Remarks?: boolean
  }, ExtArgs["result"]["state_data"]>

  export type state_dataSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fin_year?: boolean
    month?: boolean
    state_code?: boolean
    state_name?: boolean
    district_code?: boolean
    district_name?: boolean
    Approved_Labour_Budget?: boolean
    Average_Wage_rate_per_day_per_person?: boolean
    Average_days_of_employment_provided_per_Household?: boolean
    Differently_abled_persons_worked?: boolean
    Material_and_skilled_Wages?: boolean
    Number_of_Completed_Works?: boolean
    Number_of_GPs_with_NIL_exp?: boolean
    Number_of_Ongoing_Works?: boolean
    Persondays_of_Central_Liability_so_far?: boolean
    SC_persondays?: boolean
    SC_workers_against_active_workers?: boolean
    ST_persondays?: boolean
    ST_workers_against_active_workers?: boolean
    Total_Adm_Expenditure?: boolean
    Total_Exp?: boolean
    Total_Households_Worked?: boolean
    Total_Individuals_Worked?: boolean
    Total_No_of_Active_Job_Cards?: boolean
    Total_No_of_Active_Workers?: boolean
    Total_No_of_HHs_completed_100_Days_of_Wage_Employment?: boolean
    Total_No_of_JobCards_issued?: boolean
    Total_No_of_Workers?: boolean
    Total_No_of_Works_Takenup?: boolean
    Wages?: boolean
    Women_Persondays?: boolean
    percent_of_Category_B_Works?: boolean
    percent_of_Expenditure_on_Agriculture_Allied_Works?: boolean
    percent_of_NRM_Expenditure?: boolean
    percentage_payments_gererated_within_15_days?: boolean
    Remarks?: boolean
  }, ExtArgs["result"]["state_data"]>

  export type state_dataSelectScalar = {
    id?: boolean
    fin_year?: boolean
    month?: boolean
    state_code?: boolean
    state_name?: boolean
    district_code?: boolean
    district_name?: boolean
    Approved_Labour_Budget?: boolean
    Average_Wage_rate_per_day_per_person?: boolean
    Average_days_of_employment_provided_per_Household?: boolean
    Differently_abled_persons_worked?: boolean
    Material_and_skilled_Wages?: boolean
    Number_of_Completed_Works?: boolean
    Number_of_GPs_with_NIL_exp?: boolean
    Number_of_Ongoing_Works?: boolean
    Persondays_of_Central_Liability_so_far?: boolean
    SC_persondays?: boolean
    SC_workers_against_active_workers?: boolean
    ST_persondays?: boolean
    ST_workers_against_active_workers?: boolean
    Total_Adm_Expenditure?: boolean
    Total_Exp?: boolean
    Total_Households_Worked?: boolean
    Total_Individuals_Worked?: boolean
    Total_No_of_Active_Job_Cards?: boolean
    Total_No_of_Active_Workers?: boolean
    Total_No_of_HHs_completed_100_Days_of_Wage_Employment?: boolean
    Total_No_of_JobCards_issued?: boolean
    Total_No_of_Workers?: boolean
    Total_No_of_Works_Takenup?: boolean
    Wages?: boolean
    Women_Persondays?: boolean
    percent_of_Category_B_Works?: boolean
    percent_of_Expenditure_on_Agriculture_Allied_Works?: boolean
    percent_of_NRM_Expenditure?: boolean
    percentage_payments_gererated_within_15_days?: boolean
    Remarks?: boolean
  }

  export type state_dataOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fin_year" | "month" | "state_code" | "state_name" | "district_code" | "district_name" | "Approved_Labour_Budget" | "Average_Wage_rate_per_day_per_person" | "Average_days_of_employment_provided_per_Household" | "Differently_abled_persons_worked" | "Material_and_skilled_Wages" | "Number_of_Completed_Works" | "Number_of_GPs_with_NIL_exp" | "Number_of_Ongoing_Works" | "Persondays_of_Central_Liability_so_far" | "SC_persondays" | "SC_workers_against_active_workers" | "ST_persondays" | "ST_workers_against_active_workers" | "Total_Adm_Expenditure" | "Total_Exp" | "Total_Households_Worked" | "Total_Individuals_Worked" | "Total_No_of_Active_Job_Cards" | "Total_No_of_Active_Workers" | "Total_No_of_HHs_completed_100_Days_of_Wage_Employment" | "Total_No_of_JobCards_issued" | "Total_No_of_Workers" | "Total_No_of_Works_Takenup" | "Wages" | "Women_Persondays" | "percent_of_Category_B_Works" | "percent_of_Expenditure_on_Agriculture_Allied_Works" | "percent_of_NRM_Expenditure" | "percentage_payments_gererated_within_15_days" | "Remarks", ExtArgs["result"]["state_data"]>

  export type $state_dataPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "state_data"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      fin_year: string | null
      month: string | null
      state_code: number | null
      state_name: string | null
      district_code: number | null
      district_name: string | null
      Approved_Labour_Budget: bigint | null
      Average_Wage_rate_per_day_per_person: Prisma.Decimal | null
      Average_days_of_employment_provided_per_Household: number | null
      Differently_abled_persons_worked: number | null
      Material_and_skilled_Wages: Prisma.Decimal | null
      Number_of_Completed_Works: number | null
      Number_of_GPs_with_NIL_exp: number | null
      Number_of_Ongoing_Works: number | null
      Persondays_of_Central_Liability_so_far: bigint | null
      SC_persondays: bigint | null
      SC_workers_against_active_workers: number | null
      ST_persondays: bigint | null
      ST_workers_against_active_workers: number | null
      Total_Adm_Expenditure: Prisma.Decimal | null
      Total_Exp: Prisma.Decimal | null
      Total_Households_Worked: number | null
      Total_Individuals_Worked: number | null
      Total_No_of_Active_Job_Cards: number | null
      Total_No_of_Active_Workers: number | null
      Total_No_of_HHs_completed_100_Days_of_Wage_Employment: number | null
      Total_No_of_JobCards_issued: number | null
      Total_No_of_Workers: number | null
      Total_No_of_Works_Takenup: number | null
      Wages: Prisma.Decimal | null
      Women_Persondays: bigint | null
      percent_of_Category_B_Works: Prisma.Decimal | null
      percent_of_Expenditure_on_Agriculture_Allied_Works: Prisma.Decimal | null
      percent_of_NRM_Expenditure: Prisma.Decimal | null
      percentage_payments_gererated_within_15_days: Prisma.Decimal | null
      Remarks: string | null
    }, ExtArgs["result"]["state_data"]>
    composites: {}
  }

  type state_dataGetPayload<S extends boolean | null | undefined | state_dataDefaultArgs> = $Result.GetResult<Prisma.$state_dataPayload, S>

  type state_dataCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<state_dataFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: State_dataCountAggregateInputType | true
    }

  export interface state_dataDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['state_data'], meta: { name: 'state_data' } }
    /**
     * Find zero or one State_data that matches the filter.
     * @param {state_dataFindUniqueArgs} args - Arguments to find a State_data
     * @example
     * // Get one State_data
     * const state_data = await prisma.state_data.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends state_dataFindUniqueArgs>(args: SelectSubset<T, state_dataFindUniqueArgs<ExtArgs>>): Prisma__state_dataClient<$Result.GetResult<Prisma.$state_dataPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one State_data that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {state_dataFindUniqueOrThrowArgs} args - Arguments to find a State_data
     * @example
     * // Get one State_data
     * const state_data = await prisma.state_data.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends state_dataFindUniqueOrThrowArgs>(args: SelectSubset<T, state_dataFindUniqueOrThrowArgs<ExtArgs>>): Prisma__state_dataClient<$Result.GetResult<Prisma.$state_dataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first State_data that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {state_dataFindFirstArgs} args - Arguments to find a State_data
     * @example
     * // Get one State_data
     * const state_data = await prisma.state_data.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends state_dataFindFirstArgs>(args?: SelectSubset<T, state_dataFindFirstArgs<ExtArgs>>): Prisma__state_dataClient<$Result.GetResult<Prisma.$state_dataPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first State_data that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {state_dataFindFirstOrThrowArgs} args - Arguments to find a State_data
     * @example
     * // Get one State_data
     * const state_data = await prisma.state_data.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends state_dataFindFirstOrThrowArgs>(args?: SelectSubset<T, state_dataFindFirstOrThrowArgs<ExtArgs>>): Prisma__state_dataClient<$Result.GetResult<Prisma.$state_dataPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more State_data that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {state_dataFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all State_data
     * const state_data = await prisma.state_data.findMany()
     * 
     * // Get first 10 State_data
     * const state_data = await prisma.state_data.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const state_dataWithIdOnly = await prisma.state_data.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends state_dataFindManyArgs>(args?: SelectSubset<T, state_dataFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$state_dataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a State_data.
     * @param {state_dataCreateArgs} args - Arguments to create a State_data.
     * @example
     * // Create one State_data
     * const State_data = await prisma.state_data.create({
     *   data: {
     *     // ... data to create a State_data
     *   }
     * })
     * 
     */
    create<T extends state_dataCreateArgs>(args: SelectSubset<T, state_dataCreateArgs<ExtArgs>>): Prisma__state_dataClient<$Result.GetResult<Prisma.$state_dataPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many State_data.
     * @param {state_dataCreateManyArgs} args - Arguments to create many State_data.
     * @example
     * // Create many State_data
     * const state_data = await prisma.state_data.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends state_dataCreateManyArgs>(args?: SelectSubset<T, state_dataCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many State_data and returns the data saved in the database.
     * @param {state_dataCreateManyAndReturnArgs} args - Arguments to create many State_data.
     * @example
     * // Create many State_data
     * const state_data = await prisma.state_data.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many State_data and only return the `id`
     * const state_dataWithIdOnly = await prisma.state_data.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends state_dataCreateManyAndReturnArgs>(args?: SelectSubset<T, state_dataCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$state_dataPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a State_data.
     * @param {state_dataDeleteArgs} args - Arguments to delete one State_data.
     * @example
     * // Delete one State_data
     * const State_data = await prisma.state_data.delete({
     *   where: {
     *     // ... filter to delete one State_data
     *   }
     * })
     * 
     */
    delete<T extends state_dataDeleteArgs>(args: SelectSubset<T, state_dataDeleteArgs<ExtArgs>>): Prisma__state_dataClient<$Result.GetResult<Prisma.$state_dataPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one State_data.
     * @param {state_dataUpdateArgs} args - Arguments to update one State_data.
     * @example
     * // Update one State_data
     * const state_data = await prisma.state_data.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends state_dataUpdateArgs>(args: SelectSubset<T, state_dataUpdateArgs<ExtArgs>>): Prisma__state_dataClient<$Result.GetResult<Prisma.$state_dataPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more State_data.
     * @param {state_dataDeleteManyArgs} args - Arguments to filter State_data to delete.
     * @example
     * // Delete a few State_data
     * const { count } = await prisma.state_data.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends state_dataDeleteManyArgs>(args?: SelectSubset<T, state_dataDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more State_data.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {state_dataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many State_data
     * const state_data = await prisma.state_data.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends state_dataUpdateManyArgs>(args: SelectSubset<T, state_dataUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more State_data and returns the data updated in the database.
     * @param {state_dataUpdateManyAndReturnArgs} args - Arguments to update many State_data.
     * @example
     * // Update many State_data
     * const state_data = await prisma.state_data.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more State_data and only return the `id`
     * const state_dataWithIdOnly = await prisma.state_data.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends state_dataUpdateManyAndReturnArgs>(args: SelectSubset<T, state_dataUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$state_dataPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one State_data.
     * @param {state_dataUpsertArgs} args - Arguments to update or create a State_data.
     * @example
     * // Update or create a State_data
     * const state_data = await prisma.state_data.upsert({
     *   create: {
     *     // ... data to create a State_data
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the State_data we want to update
     *   }
     * })
     */
    upsert<T extends state_dataUpsertArgs>(args: SelectSubset<T, state_dataUpsertArgs<ExtArgs>>): Prisma__state_dataClient<$Result.GetResult<Prisma.$state_dataPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of State_data.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {state_dataCountArgs} args - Arguments to filter State_data to count.
     * @example
     * // Count the number of State_data
     * const count = await prisma.state_data.count({
     *   where: {
     *     // ... the filter for the State_data we want to count
     *   }
     * })
    **/
    count<T extends state_dataCountArgs>(
      args?: Subset<T, state_dataCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], State_dataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a State_data.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {State_dataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends State_dataAggregateArgs>(args: Subset<T, State_dataAggregateArgs>): Prisma.PrismaPromise<GetState_dataAggregateType<T>>

    /**
     * Group by State_data.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {state_dataGroupByArgs} args - Group by arguments.
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
      T extends state_dataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: state_dataGroupByArgs['orderBy'] }
        : { orderBy?: state_dataGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, state_dataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetState_dataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the state_data model
   */
  readonly fields: state_dataFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for state_data.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__state_dataClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the state_data model
   */
  interface state_dataFieldRefs {
    readonly id: FieldRef<"state_data", 'Int'>
    readonly fin_year: FieldRef<"state_data", 'String'>
    readonly month: FieldRef<"state_data", 'String'>
    readonly state_code: FieldRef<"state_data", 'Int'>
    readonly state_name: FieldRef<"state_data", 'String'>
    readonly district_code: FieldRef<"state_data", 'Int'>
    readonly district_name: FieldRef<"state_data", 'String'>
    readonly Approved_Labour_Budget: FieldRef<"state_data", 'BigInt'>
    readonly Average_Wage_rate_per_day_per_person: FieldRef<"state_data", 'Decimal'>
    readonly Average_days_of_employment_provided_per_Household: FieldRef<"state_data", 'Int'>
    readonly Differently_abled_persons_worked: FieldRef<"state_data", 'Int'>
    readonly Material_and_skilled_Wages: FieldRef<"state_data", 'Decimal'>
    readonly Number_of_Completed_Works: FieldRef<"state_data", 'Int'>
    readonly Number_of_GPs_with_NIL_exp: FieldRef<"state_data", 'Int'>
    readonly Number_of_Ongoing_Works: FieldRef<"state_data", 'Int'>
    readonly Persondays_of_Central_Liability_so_far: FieldRef<"state_data", 'BigInt'>
    readonly SC_persondays: FieldRef<"state_data", 'BigInt'>
    readonly SC_workers_against_active_workers: FieldRef<"state_data", 'Int'>
    readonly ST_persondays: FieldRef<"state_data", 'BigInt'>
    readonly ST_workers_against_active_workers: FieldRef<"state_data", 'Int'>
    readonly Total_Adm_Expenditure: FieldRef<"state_data", 'Decimal'>
    readonly Total_Exp: FieldRef<"state_data", 'Decimal'>
    readonly Total_Households_Worked: FieldRef<"state_data", 'Int'>
    readonly Total_Individuals_Worked: FieldRef<"state_data", 'Int'>
    readonly Total_No_of_Active_Job_Cards: FieldRef<"state_data", 'Int'>
    readonly Total_No_of_Active_Workers: FieldRef<"state_data", 'Int'>
    readonly Total_No_of_HHs_completed_100_Days_of_Wage_Employment: FieldRef<"state_data", 'Int'>
    readonly Total_No_of_JobCards_issued: FieldRef<"state_data", 'Int'>
    readonly Total_No_of_Workers: FieldRef<"state_data", 'Int'>
    readonly Total_No_of_Works_Takenup: FieldRef<"state_data", 'Int'>
    readonly Wages: FieldRef<"state_data", 'Decimal'>
    readonly Women_Persondays: FieldRef<"state_data", 'BigInt'>
    readonly percent_of_Category_B_Works: FieldRef<"state_data", 'Decimal'>
    readonly percent_of_Expenditure_on_Agriculture_Allied_Works: FieldRef<"state_data", 'Decimal'>
    readonly percent_of_NRM_Expenditure: FieldRef<"state_data", 'Decimal'>
    readonly percentage_payments_gererated_within_15_days: FieldRef<"state_data", 'Decimal'>
    readonly Remarks: FieldRef<"state_data", 'String'>
  }
    

  // Custom InputTypes
  /**
   * state_data findUnique
   */
  export type state_dataFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the state_data
     */
    select?: state_dataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the state_data
     */
    omit?: state_dataOmit<ExtArgs> | null
    /**
     * Filter, which state_data to fetch.
     */
    where: state_dataWhereUniqueInput
  }

  /**
   * state_data findUniqueOrThrow
   */
  export type state_dataFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the state_data
     */
    select?: state_dataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the state_data
     */
    omit?: state_dataOmit<ExtArgs> | null
    /**
     * Filter, which state_data to fetch.
     */
    where: state_dataWhereUniqueInput
  }

  /**
   * state_data findFirst
   */
  export type state_dataFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the state_data
     */
    select?: state_dataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the state_data
     */
    omit?: state_dataOmit<ExtArgs> | null
    /**
     * Filter, which state_data to fetch.
     */
    where?: state_dataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of state_data to fetch.
     */
    orderBy?: state_dataOrderByWithRelationInput | state_dataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for state_data.
     */
    cursor?: state_dataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` state_data from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` state_data.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of state_data.
     */
    distinct?: State_dataScalarFieldEnum | State_dataScalarFieldEnum[]
  }

  /**
   * state_data findFirstOrThrow
   */
  export type state_dataFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the state_data
     */
    select?: state_dataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the state_data
     */
    omit?: state_dataOmit<ExtArgs> | null
    /**
     * Filter, which state_data to fetch.
     */
    where?: state_dataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of state_data to fetch.
     */
    orderBy?: state_dataOrderByWithRelationInput | state_dataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for state_data.
     */
    cursor?: state_dataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` state_data from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` state_data.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of state_data.
     */
    distinct?: State_dataScalarFieldEnum | State_dataScalarFieldEnum[]
  }

  /**
   * state_data findMany
   */
  export type state_dataFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the state_data
     */
    select?: state_dataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the state_data
     */
    omit?: state_dataOmit<ExtArgs> | null
    /**
     * Filter, which state_data to fetch.
     */
    where?: state_dataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of state_data to fetch.
     */
    orderBy?: state_dataOrderByWithRelationInput | state_dataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing state_data.
     */
    cursor?: state_dataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` state_data from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` state_data.
     */
    skip?: number
    distinct?: State_dataScalarFieldEnum | State_dataScalarFieldEnum[]
  }

  /**
   * state_data create
   */
  export type state_dataCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the state_data
     */
    select?: state_dataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the state_data
     */
    omit?: state_dataOmit<ExtArgs> | null
    /**
     * The data needed to create a state_data.
     */
    data?: XOR<state_dataCreateInput, state_dataUncheckedCreateInput>
  }

  /**
   * state_data createMany
   */
  export type state_dataCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many state_data.
     */
    data: state_dataCreateManyInput | state_dataCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * state_data createManyAndReturn
   */
  export type state_dataCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the state_data
     */
    select?: state_dataSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the state_data
     */
    omit?: state_dataOmit<ExtArgs> | null
    /**
     * The data used to create many state_data.
     */
    data: state_dataCreateManyInput | state_dataCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * state_data update
   */
  export type state_dataUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the state_data
     */
    select?: state_dataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the state_data
     */
    omit?: state_dataOmit<ExtArgs> | null
    /**
     * The data needed to update a state_data.
     */
    data: XOR<state_dataUpdateInput, state_dataUncheckedUpdateInput>
    /**
     * Choose, which state_data to update.
     */
    where: state_dataWhereUniqueInput
  }

  /**
   * state_data updateMany
   */
  export type state_dataUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update state_data.
     */
    data: XOR<state_dataUpdateManyMutationInput, state_dataUncheckedUpdateManyInput>
    /**
     * Filter which state_data to update
     */
    where?: state_dataWhereInput
    /**
     * Limit how many state_data to update.
     */
    limit?: number
  }

  /**
   * state_data updateManyAndReturn
   */
  export type state_dataUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the state_data
     */
    select?: state_dataSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the state_data
     */
    omit?: state_dataOmit<ExtArgs> | null
    /**
     * The data used to update state_data.
     */
    data: XOR<state_dataUpdateManyMutationInput, state_dataUncheckedUpdateManyInput>
    /**
     * Filter which state_data to update
     */
    where?: state_dataWhereInput
    /**
     * Limit how many state_data to update.
     */
    limit?: number
  }

  /**
   * state_data upsert
   */
  export type state_dataUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the state_data
     */
    select?: state_dataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the state_data
     */
    omit?: state_dataOmit<ExtArgs> | null
    /**
     * The filter to search for the state_data to update in case it exists.
     */
    where: state_dataWhereUniqueInput
    /**
     * In case the state_data found by the `where` argument doesn't exist, create a new state_data with this data.
     */
    create: XOR<state_dataCreateInput, state_dataUncheckedCreateInput>
    /**
     * In case the state_data was found with the provided `where` argument, update it with this data.
     */
    update: XOR<state_dataUpdateInput, state_dataUncheckedUpdateInput>
  }

  /**
   * state_data delete
   */
  export type state_dataDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the state_data
     */
    select?: state_dataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the state_data
     */
    omit?: state_dataOmit<ExtArgs> | null
    /**
     * Filter which state_data to delete.
     */
    where: state_dataWhereUniqueInput
  }

  /**
   * state_data deleteMany
   */
  export type state_dataDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which state_data to delete
     */
    where?: state_dataWhereInput
    /**
     * Limit how many state_data to delete.
     */
    limit?: number
  }

  /**
   * state_data without action
   */
  export type state_dataDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the state_data
     */
    select?: state_dataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the state_data
     */
    omit?: state_dataOmit<ExtArgs> | null
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


  export const Playing_with_neonScalarFieldEnum: {
    id: 'id',
    name: 'name',
    value: 'value'
  };

  export type Playing_with_neonScalarFieldEnum = (typeof Playing_with_neonScalarFieldEnum)[keyof typeof Playing_with_neonScalarFieldEnum]


  export const State_dataScalarFieldEnum: {
    id: 'id',
    fin_year: 'fin_year',
    month: 'month',
    state_code: 'state_code',
    state_name: 'state_name',
    district_code: 'district_code',
    district_name: 'district_name',
    Approved_Labour_Budget: 'Approved_Labour_Budget',
    Average_Wage_rate_per_day_per_person: 'Average_Wage_rate_per_day_per_person',
    Average_days_of_employment_provided_per_Household: 'Average_days_of_employment_provided_per_Household',
    Differently_abled_persons_worked: 'Differently_abled_persons_worked',
    Material_and_skilled_Wages: 'Material_and_skilled_Wages',
    Number_of_Completed_Works: 'Number_of_Completed_Works',
    Number_of_GPs_with_NIL_exp: 'Number_of_GPs_with_NIL_exp',
    Number_of_Ongoing_Works: 'Number_of_Ongoing_Works',
    Persondays_of_Central_Liability_so_far: 'Persondays_of_Central_Liability_so_far',
    SC_persondays: 'SC_persondays',
    SC_workers_against_active_workers: 'SC_workers_against_active_workers',
    ST_persondays: 'ST_persondays',
    ST_workers_against_active_workers: 'ST_workers_against_active_workers',
    Total_Adm_Expenditure: 'Total_Adm_Expenditure',
    Total_Exp: 'Total_Exp',
    Total_Households_Worked: 'Total_Households_Worked',
    Total_Individuals_Worked: 'Total_Individuals_Worked',
    Total_No_of_Active_Job_Cards: 'Total_No_of_Active_Job_Cards',
    Total_No_of_Active_Workers: 'Total_No_of_Active_Workers',
    Total_No_of_HHs_completed_100_Days_of_Wage_Employment: 'Total_No_of_HHs_completed_100_Days_of_Wage_Employment',
    Total_No_of_JobCards_issued: 'Total_No_of_JobCards_issued',
    Total_No_of_Workers: 'Total_No_of_Workers',
    Total_No_of_Works_Takenup: 'Total_No_of_Works_Takenup',
    Wages: 'Wages',
    Women_Persondays: 'Women_Persondays',
    percent_of_Category_B_Works: 'percent_of_Category_B_Works',
    percent_of_Expenditure_on_Agriculture_Allied_Works: 'percent_of_Expenditure_on_Agriculture_Allied_Works',
    percent_of_NRM_Expenditure: 'percent_of_NRM_Expenditure',
    percentage_payments_gererated_within_15_days: 'percentage_payments_gererated_within_15_days',
    Remarks: 'Remarks'
  };

  export type State_dataScalarFieldEnum = (typeof State_dataScalarFieldEnum)[keyof typeof State_dataScalarFieldEnum]


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
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    
  /**
   * Deep Input Types
   */


  export type playing_with_neonWhereInput = {
    AND?: playing_with_neonWhereInput | playing_with_neonWhereInput[]
    OR?: playing_with_neonWhereInput[]
    NOT?: playing_with_neonWhereInput | playing_with_neonWhereInput[]
    id?: IntFilter<"playing_with_neon"> | number
    name?: StringFilter<"playing_with_neon"> | string
    value?: FloatFilter<"playing_with_neon"> | number
  }

  export type playing_with_neonOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    value?: SortOrder
  }

  export type playing_with_neonWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: playing_with_neonWhereInput | playing_with_neonWhereInput[]
    OR?: playing_with_neonWhereInput[]
    NOT?: playing_with_neonWhereInput | playing_with_neonWhereInput[]
    name?: StringFilter<"playing_with_neon"> | string
    value?: FloatFilter<"playing_with_neon"> | number
  }, "id">

  export type playing_with_neonOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    value?: SortOrder
    _count?: playing_with_neonCountOrderByAggregateInput
    _avg?: playing_with_neonAvgOrderByAggregateInput
    _max?: playing_with_neonMaxOrderByAggregateInput
    _min?: playing_with_neonMinOrderByAggregateInput
    _sum?: playing_with_neonSumOrderByAggregateInput
  }

  export type playing_with_neonScalarWhereWithAggregatesInput = {
    AND?: playing_with_neonScalarWhereWithAggregatesInput | playing_with_neonScalarWhereWithAggregatesInput[]
    OR?: playing_with_neonScalarWhereWithAggregatesInput[]
    NOT?: playing_with_neonScalarWhereWithAggregatesInput | playing_with_neonScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"playing_with_neon"> | number
    name?: StringWithAggregatesFilter<"playing_with_neon"> | string
    value?: FloatWithAggregatesFilter<"playing_with_neon"> | number
  }

  export type state_dataWhereInput = {
    AND?: state_dataWhereInput | state_dataWhereInput[]
    OR?: state_dataWhereInput[]
    NOT?: state_dataWhereInput | state_dataWhereInput[]
    id?: IntFilter<"state_data"> | number
    fin_year?: StringNullableFilter<"state_data"> | string | null
    month?: StringNullableFilter<"state_data"> | string | null
    state_code?: IntNullableFilter<"state_data"> | number | null
    state_name?: StringNullableFilter<"state_data"> | string | null
    district_code?: IntNullableFilter<"state_data"> | number | null
    district_name?: StringNullableFilter<"state_data"> | string | null
    Approved_Labour_Budget?: BigIntNullableFilter<"state_data"> | bigint | number | null
    Average_Wage_rate_per_day_per_person?: DecimalNullableFilter<"state_data"> | Decimal | DecimalJsLike | number | string | null
    Average_days_of_employment_provided_per_Household?: IntNullableFilter<"state_data"> | number | null
    Differently_abled_persons_worked?: IntNullableFilter<"state_data"> | number | null
    Material_and_skilled_Wages?: DecimalNullableFilter<"state_data"> | Decimal | DecimalJsLike | number | string | null
    Number_of_Completed_Works?: IntNullableFilter<"state_data"> | number | null
    Number_of_GPs_with_NIL_exp?: IntNullableFilter<"state_data"> | number | null
    Number_of_Ongoing_Works?: IntNullableFilter<"state_data"> | number | null
    Persondays_of_Central_Liability_so_far?: BigIntNullableFilter<"state_data"> | bigint | number | null
    SC_persondays?: BigIntNullableFilter<"state_data"> | bigint | number | null
    SC_workers_against_active_workers?: IntNullableFilter<"state_data"> | number | null
    ST_persondays?: BigIntNullableFilter<"state_data"> | bigint | number | null
    ST_workers_against_active_workers?: IntNullableFilter<"state_data"> | number | null
    Total_Adm_Expenditure?: DecimalNullableFilter<"state_data"> | Decimal | DecimalJsLike | number | string | null
    Total_Exp?: DecimalNullableFilter<"state_data"> | Decimal | DecimalJsLike | number | string | null
    Total_Households_Worked?: IntNullableFilter<"state_data"> | number | null
    Total_Individuals_Worked?: IntNullableFilter<"state_data"> | number | null
    Total_No_of_Active_Job_Cards?: IntNullableFilter<"state_data"> | number | null
    Total_No_of_Active_Workers?: IntNullableFilter<"state_data"> | number | null
    Total_No_of_HHs_completed_100_Days_of_Wage_Employment?: IntNullableFilter<"state_data"> | number | null
    Total_No_of_JobCards_issued?: IntNullableFilter<"state_data"> | number | null
    Total_No_of_Workers?: IntNullableFilter<"state_data"> | number | null
    Total_No_of_Works_Takenup?: IntNullableFilter<"state_data"> | number | null
    Wages?: DecimalNullableFilter<"state_data"> | Decimal | DecimalJsLike | number | string | null
    Women_Persondays?: BigIntNullableFilter<"state_data"> | bigint | number | null
    percent_of_Category_B_Works?: DecimalNullableFilter<"state_data"> | Decimal | DecimalJsLike | number | string | null
    percent_of_Expenditure_on_Agriculture_Allied_Works?: DecimalNullableFilter<"state_data"> | Decimal | DecimalJsLike | number | string | null
    percent_of_NRM_Expenditure?: DecimalNullableFilter<"state_data"> | Decimal | DecimalJsLike | number | string | null
    percentage_payments_gererated_within_15_days?: DecimalNullableFilter<"state_data"> | Decimal | DecimalJsLike | number | string | null
    Remarks?: StringNullableFilter<"state_data"> | string | null
  }

  export type state_dataOrderByWithRelationInput = {
    id?: SortOrder
    fin_year?: SortOrderInput | SortOrder
    month?: SortOrderInput | SortOrder
    state_code?: SortOrderInput | SortOrder
    state_name?: SortOrderInput | SortOrder
    district_code?: SortOrderInput | SortOrder
    district_name?: SortOrderInput | SortOrder
    Approved_Labour_Budget?: SortOrderInput | SortOrder
    Average_Wage_rate_per_day_per_person?: SortOrderInput | SortOrder
    Average_days_of_employment_provided_per_Household?: SortOrderInput | SortOrder
    Differently_abled_persons_worked?: SortOrderInput | SortOrder
    Material_and_skilled_Wages?: SortOrderInput | SortOrder
    Number_of_Completed_Works?: SortOrderInput | SortOrder
    Number_of_GPs_with_NIL_exp?: SortOrderInput | SortOrder
    Number_of_Ongoing_Works?: SortOrderInput | SortOrder
    Persondays_of_Central_Liability_so_far?: SortOrderInput | SortOrder
    SC_persondays?: SortOrderInput | SortOrder
    SC_workers_against_active_workers?: SortOrderInput | SortOrder
    ST_persondays?: SortOrderInput | SortOrder
    ST_workers_against_active_workers?: SortOrderInput | SortOrder
    Total_Adm_Expenditure?: SortOrderInput | SortOrder
    Total_Exp?: SortOrderInput | SortOrder
    Total_Households_Worked?: SortOrderInput | SortOrder
    Total_Individuals_Worked?: SortOrderInput | SortOrder
    Total_No_of_Active_Job_Cards?: SortOrderInput | SortOrder
    Total_No_of_Active_Workers?: SortOrderInput | SortOrder
    Total_No_of_HHs_completed_100_Days_of_Wage_Employment?: SortOrderInput | SortOrder
    Total_No_of_JobCards_issued?: SortOrderInput | SortOrder
    Total_No_of_Workers?: SortOrderInput | SortOrder
    Total_No_of_Works_Takenup?: SortOrderInput | SortOrder
    Wages?: SortOrderInput | SortOrder
    Women_Persondays?: SortOrderInput | SortOrder
    percent_of_Category_B_Works?: SortOrderInput | SortOrder
    percent_of_Expenditure_on_Agriculture_Allied_Works?: SortOrderInput | SortOrder
    percent_of_NRM_Expenditure?: SortOrderInput | SortOrder
    percentage_payments_gererated_within_15_days?: SortOrderInput | SortOrder
    Remarks?: SortOrderInput | SortOrder
  }

  export type state_dataWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: state_dataWhereInput | state_dataWhereInput[]
    OR?: state_dataWhereInput[]
    NOT?: state_dataWhereInput | state_dataWhereInput[]
    fin_year?: StringNullableFilter<"state_data"> | string | null
    month?: StringNullableFilter<"state_data"> | string | null
    state_code?: IntNullableFilter<"state_data"> | number | null
    state_name?: StringNullableFilter<"state_data"> | string | null
    district_code?: IntNullableFilter<"state_data"> | number | null
    district_name?: StringNullableFilter<"state_data"> | string | null
    Approved_Labour_Budget?: BigIntNullableFilter<"state_data"> | bigint | number | null
    Average_Wage_rate_per_day_per_person?: DecimalNullableFilter<"state_data"> | Decimal | DecimalJsLike | number | string | null
    Average_days_of_employment_provided_per_Household?: IntNullableFilter<"state_data"> | number | null
    Differently_abled_persons_worked?: IntNullableFilter<"state_data"> | number | null
    Material_and_skilled_Wages?: DecimalNullableFilter<"state_data"> | Decimal | DecimalJsLike | number | string | null
    Number_of_Completed_Works?: IntNullableFilter<"state_data"> | number | null
    Number_of_GPs_with_NIL_exp?: IntNullableFilter<"state_data"> | number | null
    Number_of_Ongoing_Works?: IntNullableFilter<"state_data"> | number | null
    Persondays_of_Central_Liability_so_far?: BigIntNullableFilter<"state_data"> | bigint | number | null
    SC_persondays?: BigIntNullableFilter<"state_data"> | bigint | number | null
    SC_workers_against_active_workers?: IntNullableFilter<"state_data"> | number | null
    ST_persondays?: BigIntNullableFilter<"state_data"> | bigint | number | null
    ST_workers_against_active_workers?: IntNullableFilter<"state_data"> | number | null
    Total_Adm_Expenditure?: DecimalNullableFilter<"state_data"> | Decimal | DecimalJsLike | number | string | null
    Total_Exp?: DecimalNullableFilter<"state_data"> | Decimal | DecimalJsLike | number | string | null
    Total_Households_Worked?: IntNullableFilter<"state_data"> | number | null
    Total_Individuals_Worked?: IntNullableFilter<"state_data"> | number | null
    Total_No_of_Active_Job_Cards?: IntNullableFilter<"state_data"> | number | null
    Total_No_of_Active_Workers?: IntNullableFilter<"state_data"> | number | null
    Total_No_of_HHs_completed_100_Days_of_Wage_Employment?: IntNullableFilter<"state_data"> | number | null
    Total_No_of_JobCards_issued?: IntNullableFilter<"state_data"> | number | null
    Total_No_of_Workers?: IntNullableFilter<"state_data"> | number | null
    Total_No_of_Works_Takenup?: IntNullableFilter<"state_data"> | number | null
    Wages?: DecimalNullableFilter<"state_data"> | Decimal | DecimalJsLike | number | string | null
    Women_Persondays?: BigIntNullableFilter<"state_data"> | bigint | number | null
    percent_of_Category_B_Works?: DecimalNullableFilter<"state_data"> | Decimal | DecimalJsLike | number | string | null
    percent_of_Expenditure_on_Agriculture_Allied_Works?: DecimalNullableFilter<"state_data"> | Decimal | DecimalJsLike | number | string | null
    percent_of_NRM_Expenditure?: DecimalNullableFilter<"state_data"> | Decimal | DecimalJsLike | number | string | null
    percentage_payments_gererated_within_15_days?: DecimalNullableFilter<"state_data"> | Decimal | DecimalJsLike | number | string | null
    Remarks?: StringNullableFilter<"state_data"> | string | null
  }, "id">

  export type state_dataOrderByWithAggregationInput = {
    id?: SortOrder
    fin_year?: SortOrderInput | SortOrder
    month?: SortOrderInput | SortOrder
    state_code?: SortOrderInput | SortOrder
    state_name?: SortOrderInput | SortOrder
    district_code?: SortOrderInput | SortOrder
    district_name?: SortOrderInput | SortOrder
    Approved_Labour_Budget?: SortOrderInput | SortOrder
    Average_Wage_rate_per_day_per_person?: SortOrderInput | SortOrder
    Average_days_of_employment_provided_per_Household?: SortOrderInput | SortOrder
    Differently_abled_persons_worked?: SortOrderInput | SortOrder
    Material_and_skilled_Wages?: SortOrderInput | SortOrder
    Number_of_Completed_Works?: SortOrderInput | SortOrder
    Number_of_GPs_with_NIL_exp?: SortOrderInput | SortOrder
    Number_of_Ongoing_Works?: SortOrderInput | SortOrder
    Persondays_of_Central_Liability_so_far?: SortOrderInput | SortOrder
    SC_persondays?: SortOrderInput | SortOrder
    SC_workers_against_active_workers?: SortOrderInput | SortOrder
    ST_persondays?: SortOrderInput | SortOrder
    ST_workers_against_active_workers?: SortOrderInput | SortOrder
    Total_Adm_Expenditure?: SortOrderInput | SortOrder
    Total_Exp?: SortOrderInput | SortOrder
    Total_Households_Worked?: SortOrderInput | SortOrder
    Total_Individuals_Worked?: SortOrderInput | SortOrder
    Total_No_of_Active_Job_Cards?: SortOrderInput | SortOrder
    Total_No_of_Active_Workers?: SortOrderInput | SortOrder
    Total_No_of_HHs_completed_100_Days_of_Wage_Employment?: SortOrderInput | SortOrder
    Total_No_of_JobCards_issued?: SortOrderInput | SortOrder
    Total_No_of_Workers?: SortOrderInput | SortOrder
    Total_No_of_Works_Takenup?: SortOrderInput | SortOrder
    Wages?: SortOrderInput | SortOrder
    Women_Persondays?: SortOrderInput | SortOrder
    percent_of_Category_B_Works?: SortOrderInput | SortOrder
    percent_of_Expenditure_on_Agriculture_Allied_Works?: SortOrderInput | SortOrder
    percent_of_NRM_Expenditure?: SortOrderInput | SortOrder
    percentage_payments_gererated_within_15_days?: SortOrderInput | SortOrder
    Remarks?: SortOrderInput | SortOrder
    _count?: state_dataCountOrderByAggregateInput
    _avg?: state_dataAvgOrderByAggregateInput
    _max?: state_dataMaxOrderByAggregateInput
    _min?: state_dataMinOrderByAggregateInput
    _sum?: state_dataSumOrderByAggregateInput
  }

  export type state_dataScalarWhereWithAggregatesInput = {
    AND?: state_dataScalarWhereWithAggregatesInput | state_dataScalarWhereWithAggregatesInput[]
    OR?: state_dataScalarWhereWithAggregatesInput[]
    NOT?: state_dataScalarWhereWithAggregatesInput | state_dataScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"state_data"> | number
    fin_year?: StringNullableWithAggregatesFilter<"state_data"> | string | null
    month?: StringNullableWithAggregatesFilter<"state_data"> | string | null
    state_code?: IntNullableWithAggregatesFilter<"state_data"> | number | null
    state_name?: StringNullableWithAggregatesFilter<"state_data"> | string | null
    district_code?: IntNullableWithAggregatesFilter<"state_data"> | number | null
    district_name?: StringNullableWithAggregatesFilter<"state_data"> | string | null
    Approved_Labour_Budget?: BigIntNullableWithAggregatesFilter<"state_data"> | bigint | number | null
    Average_Wage_rate_per_day_per_person?: DecimalNullableWithAggregatesFilter<"state_data"> | Decimal | DecimalJsLike | number | string | null
    Average_days_of_employment_provided_per_Household?: IntNullableWithAggregatesFilter<"state_data"> | number | null
    Differently_abled_persons_worked?: IntNullableWithAggregatesFilter<"state_data"> | number | null
    Material_and_skilled_Wages?: DecimalNullableWithAggregatesFilter<"state_data"> | Decimal | DecimalJsLike | number | string | null
    Number_of_Completed_Works?: IntNullableWithAggregatesFilter<"state_data"> | number | null
    Number_of_GPs_with_NIL_exp?: IntNullableWithAggregatesFilter<"state_data"> | number | null
    Number_of_Ongoing_Works?: IntNullableWithAggregatesFilter<"state_data"> | number | null
    Persondays_of_Central_Liability_so_far?: BigIntNullableWithAggregatesFilter<"state_data"> | bigint | number | null
    SC_persondays?: BigIntNullableWithAggregatesFilter<"state_data"> | bigint | number | null
    SC_workers_against_active_workers?: IntNullableWithAggregatesFilter<"state_data"> | number | null
    ST_persondays?: BigIntNullableWithAggregatesFilter<"state_data"> | bigint | number | null
    ST_workers_against_active_workers?: IntNullableWithAggregatesFilter<"state_data"> | number | null
    Total_Adm_Expenditure?: DecimalNullableWithAggregatesFilter<"state_data"> | Decimal | DecimalJsLike | number | string | null
    Total_Exp?: DecimalNullableWithAggregatesFilter<"state_data"> | Decimal | DecimalJsLike | number | string | null
    Total_Households_Worked?: IntNullableWithAggregatesFilter<"state_data"> | number | null
    Total_Individuals_Worked?: IntNullableWithAggregatesFilter<"state_data"> | number | null
    Total_No_of_Active_Job_Cards?: IntNullableWithAggregatesFilter<"state_data"> | number | null
    Total_No_of_Active_Workers?: IntNullableWithAggregatesFilter<"state_data"> | number | null
    Total_No_of_HHs_completed_100_Days_of_Wage_Employment?: IntNullableWithAggregatesFilter<"state_data"> | number | null
    Total_No_of_JobCards_issued?: IntNullableWithAggregatesFilter<"state_data"> | number | null
    Total_No_of_Workers?: IntNullableWithAggregatesFilter<"state_data"> | number | null
    Total_No_of_Works_Takenup?: IntNullableWithAggregatesFilter<"state_data"> | number | null
    Wages?: DecimalNullableWithAggregatesFilter<"state_data"> | Decimal | DecimalJsLike | number | string | null
    Women_Persondays?: BigIntNullableWithAggregatesFilter<"state_data"> | bigint | number | null
    percent_of_Category_B_Works?: DecimalNullableWithAggregatesFilter<"state_data"> | Decimal | DecimalJsLike | number | string | null
    percent_of_Expenditure_on_Agriculture_Allied_Works?: DecimalNullableWithAggregatesFilter<"state_data"> | Decimal | DecimalJsLike | number | string | null
    percent_of_NRM_Expenditure?: DecimalNullableWithAggregatesFilter<"state_data"> | Decimal | DecimalJsLike | number | string | null
    percentage_payments_gererated_within_15_days?: DecimalNullableWithAggregatesFilter<"state_data"> | Decimal | DecimalJsLike | number | string | null
    Remarks?: StringNullableWithAggregatesFilter<"state_data"> | string | null
  }

  export type playing_with_neonCreateInput = {
    name: string
    value: number
  }

  export type playing_with_neonUncheckedCreateInput = {
    id?: number
    name: string
    value: number
  }

  export type playing_with_neonUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
  }

  export type playing_with_neonUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
  }

  export type playing_with_neonCreateManyInput = {
    id?: number
    name: string
    value: number
  }

  export type playing_with_neonUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
  }

  export type playing_with_neonUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
  }

  export type state_dataCreateInput = {
    fin_year?: string | null
    month?: string | null
    state_code?: number | null
    state_name?: string | null
    district_code?: number | null
    district_name?: string | null
    Approved_Labour_Budget?: bigint | number | null
    Average_Wage_rate_per_day_per_person?: Decimal | DecimalJsLike | number | string | null
    Average_days_of_employment_provided_per_Household?: number | null
    Differently_abled_persons_worked?: number | null
    Material_and_skilled_Wages?: Decimal | DecimalJsLike | number | string | null
    Number_of_Completed_Works?: number | null
    Number_of_GPs_with_NIL_exp?: number | null
    Number_of_Ongoing_Works?: number | null
    Persondays_of_Central_Liability_so_far?: bigint | number | null
    SC_persondays?: bigint | number | null
    SC_workers_against_active_workers?: number | null
    ST_persondays?: bigint | number | null
    ST_workers_against_active_workers?: number | null
    Total_Adm_Expenditure?: Decimal | DecimalJsLike | number | string | null
    Total_Exp?: Decimal | DecimalJsLike | number | string | null
    Total_Households_Worked?: number | null
    Total_Individuals_Worked?: number | null
    Total_No_of_Active_Job_Cards?: number | null
    Total_No_of_Active_Workers?: number | null
    Total_No_of_HHs_completed_100_Days_of_Wage_Employment?: number | null
    Total_No_of_JobCards_issued?: number | null
    Total_No_of_Workers?: number | null
    Total_No_of_Works_Takenup?: number | null
    Wages?: Decimal | DecimalJsLike | number | string | null
    Women_Persondays?: bigint | number | null
    percent_of_Category_B_Works?: Decimal | DecimalJsLike | number | string | null
    percent_of_Expenditure_on_Agriculture_Allied_Works?: Decimal | DecimalJsLike | number | string | null
    percent_of_NRM_Expenditure?: Decimal | DecimalJsLike | number | string | null
    percentage_payments_gererated_within_15_days?: Decimal | DecimalJsLike | number | string | null
    Remarks?: string | null
  }

  export type state_dataUncheckedCreateInput = {
    id?: number
    fin_year?: string | null
    month?: string | null
    state_code?: number | null
    state_name?: string | null
    district_code?: number | null
    district_name?: string | null
    Approved_Labour_Budget?: bigint | number | null
    Average_Wage_rate_per_day_per_person?: Decimal | DecimalJsLike | number | string | null
    Average_days_of_employment_provided_per_Household?: number | null
    Differently_abled_persons_worked?: number | null
    Material_and_skilled_Wages?: Decimal | DecimalJsLike | number | string | null
    Number_of_Completed_Works?: number | null
    Number_of_GPs_with_NIL_exp?: number | null
    Number_of_Ongoing_Works?: number | null
    Persondays_of_Central_Liability_so_far?: bigint | number | null
    SC_persondays?: bigint | number | null
    SC_workers_against_active_workers?: number | null
    ST_persondays?: bigint | number | null
    ST_workers_against_active_workers?: number | null
    Total_Adm_Expenditure?: Decimal | DecimalJsLike | number | string | null
    Total_Exp?: Decimal | DecimalJsLike | number | string | null
    Total_Households_Worked?: number | null
    Total_Individuals_Worked?: number | null
    Total_No_of_Active_Job_Cards?: number | null
    Total_No_of_Active_Workers?: number | null
    Total_No_of_HHs_completed_100_Days_of_Wage_Employment?: number | null
    Total_No_of_JobCards_issued?: number | null
    Total_No_of_Workers?: number | null
    Total_No_of_Works_Takenup?: number | null
    Wages?: Decimal | DecimalJsLike | number | string | null
    Women_Persondays?: bigint | number | null
    percent_of_Category_B_Works?: Decimal | DecimalJsLike | number | string | null
    percent_of_Expenditure_on_Agriculture_Allied_Works?: Decimal | DecimalJsLike | number | string | null
    percent_of_NRM_Expenditure?: Decimal | DecimalJsLike | number | string | null
    percentage_payments_gererated_within_15_days?: Decimal | DecimalJsLike | number | string | null
    Remarks?: string | null
  }

  export type state_dataUpdateInput = {
    fin_year?: NullableStringFieldUpdateOperationsInput | string | null
    month?: NullableStringFieldUpdateOperationsInput | string | null
    state_code?: NullableIntFieldUpdateOperationsInput | number | null
    state_name?: NullableStringFieldUpdateOperationsInput | string | null
    district_code?: NullableIntFieldUpdateOperationsInput | number | null
    district_name?: NullableStringFieldUpdateOperationsInput | string | null
    Approved_Labour_Budget?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    Average_Wage_rate_per_day_per_person?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    Average_days_of_employment_provided_per_Household?: NullableIntFieldUpdateOperationsInput | number | null
    Differently_abled_persons_worked?: NullableIntFieldUpdateOperationsInput | number | null
    Material_and_skilled_Wages?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    Number_of_Completed_Works?: NullableIntFieldUpdateOperationsInput | number | null
    Number_of_GPs_with_NIL_exp?: NullableIntFieldUpdateOperationsInput | number | null
    Number_of_Ongoing_Works?: NullableIntFieldUpdateOperationsInput | number | null
    Persondays_of_Central_Liability_so_far?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    SC_persondays?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    SC_workers_against_active_workers?: NullableIntFieldUpdateOperationsInput | number | null
    ST_persondays?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    ST_workers_against_active_workers?: NullableIntFieldUpdateOperationsInput | number | null
    Total_Adm_Expenditure?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    Total_Exp?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    Total_Households_Worked?: NullableIntFieldUpdateOperationsInput | number | null
    Total_Individuals_Worked?: NullableIntFieldUpdateOperationsInput | number | null
    Total_No_of_Active_Job_Cards?: NullableIntFieldUpdateOperationsInput | number | null
    Total_No_of_Active_Workers?: NullableIntFieldUpdateOperationsInput | number | null
    Total_No_of_HHs_completed_100_Days_of_Wage_Employment?: NullableIntFieldUpdateOperationsInput | number | null
    Total_No_of_JobCards_issued?: NullableIntFieldUpdateOperationsInput | number | null
    Total_No_of_Workers?: NullableIntFieldUpdateOperationsInput | number | null
    Total_No_of_Works_Takenup?: NullableIntFieldUpdateOperationsInput | number | null
    Wages?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    Women_Persondays?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    percent_of_Category_B_Works?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    percent_of_Expenditure_on_Agriculture_Allied_Works?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    percent_of_NRM_Expenditure?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    percentage_payments_gererated_within_15_days?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    Remarks?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type state_dataUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fin_year?: NullableStringFieldUpdateOperationsInput | string | null
    month?: NullableStringFieldUpdateOperationsInput | string | null
    state_code?: NullableIntFieldUpdateOperationsInput | number | null
    state_name?: NullableStringFieldUpdateOperationsInput | string | null
    district_code?: NullableIntFieldUpdateOperationsInput | number | null
    district_name?: NullableStringFieldUpdateOperationsInput | string | null
    Approved_Labour_Budget?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    Average_Wage_rate_per_day_per_person?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    Average_days_of_employment_provided_per_Household?: NullableIntFieldUpdateOperationsInput | number | null
    Differently_abled_persons_worked?: NullableIntFieldUpdateOperationsInput | number | null
    Material_and_skilled_Wages?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    Number_of_Completed_Works?: NullableIntFieldUpdateOperationsInput | number | null
    Number_of_GPs_with_NIL_exp?: NullableIntFieldUpdateOperationsInput | number | null
    Number_of_Ongoing_Works?: NullableIntFieldUpdateOperationsInput | number | null
    Persondays_of_Central_Liability_so_far?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    SC_persondays?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    SC_workers_against_active_workers?: NullableIntFieldUpdateOperationsInput | number | null
    ST_persondays?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    ST_workers_against_active_workers?: NullableIntFieldUpdateOperationsInput | number | null
    Total_Adm_Expenditure?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    Total_Exp?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    Total_Households_Worked?: NullableIntFieldUpdateOperationsInput | number | null
    Total_Individuals_Worked?: NullableIntFieldUpdateOperationsInput | number | null
    Total_No_of_Active_Job_Cards?: NullableIntFieldUpdateOperationsInput | number | null
    Total_No_of_Active_Workers?: NullableIntFieldUpdateOperationsInput | number | null
    Total_No_of_HHs_completed_100_Days_of_Wage_Employment?: NullableIntFieldUpdateOperationsInput | number | null
    Total_No_of_JobCards_issued?: NullableIntFieldUpdateOperationsInput | number | null
    Total_No_of_Workers?: NullableIntFieldUpdateOperationsInput | number | null
    Total_No_of_Works_Takenup?: NullableIntFieldUpdateOperationsInput | number | null
    Wages?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    Women_Persondays?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    percent_of_Category_B_Works?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    percent_of_Expenditure_on_Agriculture_Allied_Works?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    percent_of_NRM_Expenditure?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    percentage_payments_gererated_within_15_days?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    Remarks?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type state_dataCreateManyInput = {
    id?: number
    fin_year?: string | null
    month?: string | null
    state_code?: number | null
    state_name?: string | null
    district_code?: number | null
    district_name?: string | null
    Approved_Labour_Budget?: bigint | number | null
    Average_Wage_rate_per_day_per_person?: Decimal | DecimalJsLike | number | string | null
    Average_days_of_employment_provided_per_Household?: number | null
    Differently_abled_persons_worked?: number | null
    Material_and_skilled_Wages?: Decimal | DecimalJsLike | number | string | null
    Number_of_Completed_Works?: number | null
    Number_of_GPs_with_NIL_exp?: number | null
    Number_of_Ongoing_Works?: number | null
    Persondays_of_Central_Liability_so_far?: bigint | number | null
    SC_persondays?: bigint | number | null
    SC_workers_against_active_workers?: number | null
    ST_persondays?: bigint | number | null
    ST_workers_against_active_workers?: number | null
    Total_Adm_Expenditure?: Decimal | DecimalJsLike | number | string | null
    Total_Exp?: Decimal | DecimalJsLike | number | string | null
    Total_Households_Worked?: number | null
    Total_Individuals_Worked?: number | null
    Total_No_of_Active_Job_Cards?: number | null
    Total_No_of_Active_Workers?: number | null
    Total_No_of_HHs_completed_100_Days_of_Wage_Employment?: number | null
    Total_No_of_JobCards_issued?: number | null
    Total_No_of_Workers?: number | null
    Total_No_of_Works_Takenup?: number | null
    Wages?: Decimal | DecimalJsLike | number | string | null
    Women_Persondays?: bigint | number | null
    percent_of_Category_B_Works?: Decimal | DecimalJsLike | number | string | null
    percent_of_Expenditure_on_Agriculture_Allied_Works?: Decimal | DecimalJsLike | number | string | null
    percent_of_NRM_Expenditure?: Decimal | DecimalJsLike | number | string | null
    percentage_payments_gererated_within_15_days?: Decimal | DecimalJsLike | number | string | null
    Remarks?: string | null
  }

  export type state_dataUpdateManyMutationInput = {
    fin_year?: NullableStringFieldUpdateOperationsInput | string | null
    month?: NullableStringFieldUpdateOperationsInput | string | null
    state_code?: NullableIntFieldUpdateOperationsInput | number | null
    state_name?: NullableStringFieldUpdateOperationsInput | string | null
    district_code?: NullableIntFieldUpdateOperationsInput | number | null
    district_name?: NullableStringFieldUpdateOperationsInput | string | null
    Approved_Labour_Budget?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    Average_Wage_rate_per_day_per_person?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    Average_days_of_employment_provided_per_Household?: NullableIntFieldUpdateOperationsInput | number | null
    Differently_abled_persons_worked?: NullableIntFieldUpdateOperationsInput | number | null
    Material_and_skilled_Wages?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    Number_of_Completed_Works?: NullableIntFieldUpdateOperationsInput | number | null
    Number_of_GPs_with_NIL_exp?: NullableIntFieldUpdateOperationsInput | number | null
    Number_of_Ongoing_Works?: NullableIntFieldUpdateOperationsInput | number | null
    Persondays_of_Central_Liability_so_far?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    SC_persondays?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    SC_workers_against_active_workers?: NullableIntFieldUpdateOperationsInput | number | null
    ST_persondays?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    ST_workers_against_active_workers?: NullableIntFieldUpdateOperationsInput | number | null
    Total_Adm_Expenditure?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    Total_Exp?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    Total_Households_Worked?: NullableIntFieldUpdateOperationsInput | number | null
    Total_Individuals_Worked?: NullableIntFieldUpdateOperationsInput | number | null
    Total_No_of_Active_Job_Cards?: NullableIntFieldUpdateOperationsInput | number | null
    Total_No_of_Active_Workers?: NullableIntFieldUpdateOperationsInput | number | null
    Total_No_of_HHs_completed_100_Days_of_Wage_Employment?: NullableIntFieldUpdateOperationsInput | number | null
    Total_No_of_JobCards_issued?: NullableIntFieldUpdateOperationsInput | number | null
    Total_No_of_Workers?: NullableIntFieldUpdateOperationsInput | number | null
    Total_No_of_Works_Takenup?: NullableIntFieldUpdateOperationsInput | number | null
    Wages?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    Women_Persondays?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    percent_of_Category_B_Works?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    percent_of_Expenditure_on_Agriculture_Allied_Works?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    percent_of_NRM_Expenditure?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    percentage_payments_gererated_within_15_days?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    Remarks?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type state_dataUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    fin_year?: NullableStringFieldUpdateOperationsInput | string | null
    month?: NullableStringFieldUpdateOperationsInput | string | null
    state_code?: NullableIntFieldUpdateOperationsInput | number | null
    state_name?: NullableStringFieldUpdateOperationsInput | string | null
    district_code?: NullableIntFieldUpdateOperationsInput | number | null
    district_name?: NullableStringFieldUpdateOperationsInput | string | null
    Approved_Labour_Budget?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    Average_Wage_rate_per_day_per_person?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    Average_days_of_employment_provided_per_Household?: NullableIntFieldUpdateOperationsInput | number | null
    Differently_abled_persons_worked?: NullableIntFieldUpdateOperationsInput | number | null
    Material_and_skilled_Wages?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    Number_of_Completed_Works?: NullableIntFieldUpdateOperationsInput | number | null
    Number_of_GPs_with_NIL_exp?: NullableIntFieldUpdateOperationsInput | number | null
    Number_of_Ongoing_Works?: NullableIntFieldUpdateOperationsInput | number | null
    Persondays_of_Central_Liability_so_far?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    SC_persondays?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    SC_workers_against_active_workers?: NullableIntFieldUpdateOperationsInput | number | null
    ST_persondays?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    ST_workers_against_active_workers?: NullableIntFieldUpdateOperationsInput | number | null
    Total_Adm_Expenditure?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    Total_Exp?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    Total_Households_Worked?: NullableIntFieldUpdateOperationsInput | number | null
    Total_Individuals_Worked?: NullableIntFieldUpdateOperationsInput | number | null
    Total_No_of_Active_Job_Cards?: NullableIntFieldUpdateOperationsInput | number | null
    Total_No_of_Active_Workers?: NullableIntFieldUpdateOperationsInput | number | null
    Total_No_of_HHs_completed_100_Days_of_Wage_Employment?: NullableIntFieldUpdateOperationsInput | number | null
    Total_No_of_JobCards_issued?: NullableIntFieldUpdateOperationsInput | number | null
    Total_No_of_Workers?: NullableIntFieldUpdateOperationsInput | number | null
    Total_No_of_Works_Takenup?: NullableIntFieldUpdateOperationsInput | number | null
    Wages?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    Women_Persondays?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    percent_of_Category_B_Works?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    percent_of_Expenditure_on_Agriculture_Allied_Works?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    percent_of_NRM_Expenditure?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    percentage_payments_gererated_within_15_days?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    Remarks?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type playing_with_neonCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    value?: SortOrder
  }

  export type playing_with_neonAvgOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
  }

  export type playing_with_neonMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    value?: SortOrder
  }

  export type playing_with_neonMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    value?: SortOrder
  }

  export type playing_with_neonSumOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
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

  export type BigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type state_dataCountOrderByAggregateInput = {
    id?: SortOrder
    fin_year?: SortOrder
    month?: SortOrder
    state_code?: SortOrder
    state_name?: SortOrder
    district_code?: SortOrder
    district_name?: SortOrder
    Approved_Labour_Budget?: SortOrder
    Average_Wage_rate_per_day_per_person?: SortOrder
    Average_days_of_employment_provided_per_Household?: SortOrder
    Differently_abled_persons_worked?: SortOrder
    Material_and_skilled_Wages?: SortOrder
    Number_of_Completed_Works?: SortOrder
    Number_of_GPs_with_NIL_exp?: SortOrder
    Number_of_Ongoing_Works?: SortOrder
    Persondays_of_Central_Liability_so_far?: SortOrder
    SC_persondays?: SortOrder
    SC_workers_against_active_workers?: SortOrder
    ST_persondays?: SortOrder
    ST_workers_against_active_workers?: SortOrder
    Total_Adm_Expenditure?: SortOrder
    Total_Exp?: SortOrder
    Total_Households_Worked?: SortOrder
    Total_Individuals_Worked?: SortOrder
    Total_No_of_Active_Job_Cards?: SortOrder
    Total_No_of_Active_Workers?: SortOrder
    Total_No_of_HHs_completed_100_Days_of_Wage_Employment?: SortOrder
    Total_No_of_JobCards_issued?: SortOrder
    Total_No_of_Workers?: SortOrder
    Total_No_of_Works_Takenup?: SortOrder
    Wages?: SortOrder
    Women_Persondays?: SortOrder
    percent_of_Category_B_Works?: SortOrder
    percent_of_Expenditure_on_Agriculture_Allied_Works?: SortOrder
    percent_of_NRM_Expenditure?: SortOrder
    percentage_payments_gererated_within_15_days?: SortOrder
    Remarks?: SortOrder
  }

  export type state_dataAvgOrderByAggregateInput = {
    id?: SortOrder
    state_code?: SortOrder
    district_code?: SortOrder
    Approved_Labour_Budget?: SortOrder
    Average_Wage_rate_per_day_per_person?: SortOrder
    Average_days_of_employment_provided_per_Household?: SortOrder
    Differently_abled_persons_worked?: SortOrder
    Material_and_skilled_Wages?: SortOrder
    Number_of_Completed_Works?: SortOrder
    Number_of_GPs_with_NIL_exp?: SortOrder
    Number_of_Ongoing_Works?: SortOrder
    Persondays_of_Central_Liability_so_far?: SortOrder
    SC_persondays?: SortOrder
    SC_workers_against_active_workers?: SortOrder
    ST_persondays?: SortOrder
    ST_workers_against_active_workers?: SortOrder
    Total_Adm_Expenditure?: SortOrder
    Total_Exp?: SortOrder
    Total_Households_Worked?: SortOrder
    Total_Individuals_Worked?: SortOrder
    Total_No_of_Active_Job_Cards?: SortOrder
    Total_No_of_Active_Workers?: SortOrder
    Total_No_of_HHs_completed_100_Days_of_Wage_Employment?: SortOrder
    Total_No_of_JobCards_issued?: SortOrder
    Total_No_of_Workers?: SortOrder
    Total_No_of_Works_Takenup?: SortOrder
    Wages?: SortOrder
    Women_Persondays?: SortOrder
    percent_of_Category_B_Works?: SortOrder
    percent_of_Expenditure_on_Agriculture_Allied_Works?: SortOrder
    percent_of_NRM_Expenditure?: SortOrder
    percentage_payments_gererated_within_15_days?: SortOrder
  }

  export type state_dataMaxOrderByAggregateInput = {
    id?: SortOrder
    fin_year?: SortOrder
    month?: SortOrder
    state_code?: SortOrder
    state_name?: SortOrder
    district_code?: SortOrder
    district_name?: SortOrder
    Approved_Labour_Budget?: SortOrder
    Average_Wage_rate_per_day_per_person?: SortOrder
    Average_days_of_employment_provided_per_Household?: SortOrder
    Differently_abled_persons_worked?: SortOrder
    Material_and_skilled_Wages?: SortOrder
    Number_of_Completed_Works?: SortOrder
    Number_of_GPs_with_NIL_exp?: SortOrder
    Number_of_Ongoing_Works?: SortOrder
    Persondays_of_Central_Liability_so_far?: SortOrder
    SC_persondays?: SortOrder
    SC_workers_against_active_workers?: SortOrder
    ST_persondays?: SortOrder
    ST_workers_against_active_workers?: SortOrder
    Total_Adm_Expenditure?: SortOrder
    Total_Exp?: SortOrder
    Total_Households_Worked?: SortOrder
    Total_Individuals_Worked?: SortOrder
    Total_No_of_Active_Job_Cards?: SortOrder
    Total_No_of_Active_Workers?: SortOrder
    Total_No_of_HHs_completed_100_Days_of_Wage_Employment?: SortOrder
    Total_No_of_JobCards_issued?: SortOrder
    Total_No_of_Workers?: SortOrder
    Total_No_of_Works_Takenup?: SortOrder
    Wages?: SortOrder
    Women_Persondays?: SortOrder
    percent_of_Category_B_Works?: SortOrder
    percent_of_Expenditure_on_Agriculture_Allied_Works?: SortOrder
    percent_of_NRM_Expenditure?: SortOrder
    percentage_payments_gererated_within_15_days?: SortOrder
    Remarks?: SortOrder
  }

  export type state_dataMinOrderByAggregateInput = {
    id?: SortOrder
    fin_year?: SortOrder
    month?: SortOrder
    state_code?: SortOrder
    state_name?: SortOrder
    district_code?: SortOrder
    district_name?: SortOrder
    Approved_Labour_Budget?: SortOrder
    Average_Wage_rate_per_day_per_person?: SortOrder
    Average_days_of_employment_provided_per_Household?: SortOrder
    Differently_abled_persons_worked?: SortOrder
    Material_and_skilled_Wages?: SortOrder
    Number_of_Completed_Works?: SortOrder
    Number_of_GPs_with_NIL_exp?: SortOrder
    Number_of_Ongoing_Works?: SortOrder
    Persondays_of_Central_Liability_so_far?: SortOrder
    SC_persondays?: SortOrder
    SC_workers_against_active_workers?: SortOrder
    ST_persondays?: SortOrder
    ST_workers_against_active_workers?: SortOrder
    Total_Adm_Expenditure?: SortOrder
    Total_Exp?: SortOrder
    Total_Households_Worked?: SortOrder
    Total_Individuals_Worked?: SortOrder
    Total_No_of_Active_Job_Cards?: SortOrder
    Total_No_of_Active_Workers?: SortOrder
    Total_No_of_HHs_completed_100_Days_of_Wage_Employment?: SortOrder
    Total_No_of_JobCards_issued?: SortOrder
    Total_No_of_Workers?: SortOrder
    Total_No_of_Works_Takenup?: SortOrder
    Wages?: SortOrder
    Women_Persondays?: SortOrder
    percent_of_Category_B_Works?: SortOrder
    percent_of_Expenditure_on_Agriculture_Allied_Works?: SortOrder
    percent_of_NRM_Expenditure?: SortOrder
    percentage_payments_gererated_within_15_days?: SortOrder
    Remarks?: SortOrder
  }

  export type state_dataSumOrderByAggregateInput = {
    id?: SortOrder
    state_code?: SortOrder
    district_code?: SortOrder
    Approved_Labour_Budget?: SortOrder
    Average_Wage_rate_per_day_per_person?: SortOrder
    Average_days_of_employment_provided_per_Household?: SortOrder
    Differently_abled_persons_worked?: SortOrder
    Material_and_skilled_Wages?: SortOrder
    Number_of_Completed_Works?: SortOrder
    Number_of_GPs_with_NIL_exp?: SortOrder
    Number_of_Ongoing_Works?: SortOrder
    Persondays_of_Central_Liability_so_far?: SortOrder
    SC_persondays?: SortOrder
    SC_workers_against_active_workers?: SortOrder
    ST_persondays?: SortOrder
    ST_workers_against_active_workers?: SortOrder
    Total_Adm_Expenditure?: SortOrder
    Total_Exp?: SortOrder
    Total_Households_Worked?: SortOrder
    Total_Individuals_Worked?: SortOrder
    Total_No_of_Active_Job_Cards?: SortOrder
    Total_No_of_Active_Workers?: SortOrder
    Total_No_of_HHs_completed_100_Days_of_Wage_Employment?: SortOrder
    Total_No_of_JobCards_issued?: SortOrder
    Total_No_of_Workers?: SortOrder
    Total_No_of_Works_Takenup?: SortOrder
    Wages?: SortOrder
    Women_Persondays?: SortOrder
    percent_of_Category_B_Works?: SortOrder
    percent_of_Expenditure_on_Agriculture_Allied_Works?: SortOrder
    percent_of_NRM_Expenditure?: SortOrder
    percentage_payments_gererated_within_15_days?: SortOrder
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

  export type BigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
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

  export type NullableBigIntFieldUpdateOperationsInput = {
    set?: bigint | number | null
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
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

  export type NestedBigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
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

  export type NestedBigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }



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