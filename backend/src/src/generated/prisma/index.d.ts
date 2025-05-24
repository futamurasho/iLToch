
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Email
 * 
 */
export type Email = $Result.DefaultSelection<Prisma.$EmailPayload>
/**
 * Model Friend
 * 
 */
export type Friend = $Result.DefaultSelection<Prisma.$FriendPayload>
/**
 * Model Group
 * 
 */
export type Group = $Result.DefaultSelection<Prisma.$GroupPayload>
/**
 * Model FriendGroup
 * 
 */
export type FriendGroup = $Result.DefaultSelection<Prisma.$FriendGroupPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.email`: Exposes CRUD operations for the **Email** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Emails
    * const emails = await prisma.email.findMany()
    * ```
    */
  get email(): Prisma.EmailDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.friend`: Exposes CRUD operations for the **Friend** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Friends
    * const friends = await prisma.friend.findMany()
    * ```
    */
  get friend(): Prisma.FriendDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.group`: Exposes CRUD operations for the **Group** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Groups
    * const groups = await prisma.group.findMany()
    * ```
    */
  get group(): Prisma.GroupDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.friendGroup`: Exposes CRUD operations for the **FriendGroup** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FriendGroups
    * const friendGroups = await prisma.friendGroup.findMany()
    * ```
    */
  get friendGroup(): Prisma.FriendGroupDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
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
    User: 'User',
    Email: 'Email',
    Friend: 'Friend',
    Group: 'Group',
    FriendGroup: 'FriendGroup'
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
      modelProps: "user" | "email" | "friend" | "group" | "friendGroup"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Email: {
        payload: Prisma.$EmailPayload<ExtArgs>
        fields: Prisma.EmailFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmailFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmailFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailPayload>
          }
          findFirst: {
            args: Prisma.EmailFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmailFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailPayload>
          }
          findMany: {
            args: Prisma.EmailFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailPayload>[]
          }
          create: {
            args: Prisma.EmailCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailPayload>
          }
          createMany: {
            args: Prisma.EmailCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmailCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailPayload>[]
          }
          delete: {
            args: Prisma.EmailDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailPayload>
          }
          update: {
            args: Prisma.EmailUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailPayload>
          }
          deleteMany: {
            args: Prisma.EmailDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmailUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EmailUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailPayload>[]
          }
          upsert: {
            args: Prisma.EmailUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailPayload>
          }
          aggregate: {
            args: Prisma.EmailAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmail>
          }
          groupBy: {
            args: Prisma.EmailGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmailGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmailCountArgs<ExtArgs>
            result: $Utils.Optional<EmailCountAggregateOutputType> | number
          }
        }
      }
      Friend: {
        payload: Prisma.$FriendPayload<ExtArgs>
        fields: Prisma.FriendFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FriendFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FriendFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendPayload>
          }
          findFirst: {
            args: Prisma.FriendFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FriendFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendPayload>
          }
          findMany: {
            args: Prisma.FriendFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendPayload>[]
          }
          create: {
            args: Prisma.FriendCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendPayload>
          }
          createMany: {
            args: Prisma.FriendCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FriendCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendPayload>[]
          }
          delete: {
            args: Prisma.FriendDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendPayload>
          }
          update: {
            args: Prisma.FriendUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendPayload>
          }
          deleteMany: {
            args: Prisma.FriendDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FriendUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FriendUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendPayload>[]
          }
          upsert: {
            args: Prisma.FriendUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendPayload>
          }
          aggregate: {
            args: Prisma.FriendAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFriend>
          }
          groupBy: {
            args: Prisma.FriendGroupByArgs<ExtArgs>
            result: $Utils.Optional<FriendGroupByOutputType>[]
          }
          count: {
            args: Prisma.FriendCountArgs<ExtArgs>
            result: $Utils.Optional<FriendCountAggregateOutputType> | number
          }
        }
      }
      Group: {
        payload: Prisma.$GroupPayload<ExtArgs>
        fields: Prisma.GroupFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GroupFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GroupFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          findFirst: {
            args: Prisma.GroupFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GroupFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          findMany: {
            args: Prisma.GroupFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>[]
          }
          create: {
            args: Prisma.GroupCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          createMany: {
            args: Prisma.GroupCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GroupCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>[]
          }
          delete: {
            args: Prisma.GroupDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          update: {
            args: Prisma.GroupUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          deleteMany: {
            args: Prisma.GroupDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GroupUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GroupUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>[]
          }
          upsert: {
            args: Prisma.GroupUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          aggregate: {
            args: Prisma.GroupAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGroup>
          }
          groupBy: {
            args: Prisma.GroupGroupByArgs<ExtArgs>
            result: $Utils.Optional<GroupGroupByOutputType>[]
          }
          count: {
            args: Prisma.GroupCountArgs<ExtArgs>
            result: $Utils.Optional<GroupCountAggregateOutputType> | number
          }
        }
      }
      FriendGroup: {
        payload: Prisma.$FriendGroupPayload<ExtArgs>
        fields: Prisma.FriendGroupFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FriendGroupFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendGroupPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FriendGroupFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendGroupPayload>
          }
          findFirst: {
            args: Prisma.FriendGroupFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendGroupPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FriendGroupFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendGroupPayload>
          }
          findMany: {
            args: Prisma.FriendGroupFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendGroupPayload>[]
          }
          create: {
            args: Prisma.FriendGroupCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendGroupPayload>
          }
          createMany: {
            args: Prisma.FriendGroupCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FriendGroupCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendGroupPayload>[]
          }
          delete: {
            args: Prisma.FriendGroupDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendGroupPayload>
          }
          update: {
            args: Prisma.FriendGroupUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendGroupPayload>
          }
          deleteMany: {
            args: Prisma.FriendGroupDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FriendGroupUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FriendGroupUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendGroupPayload>[]
          }
          upsert: {
            args: Prisma.FriendGroupUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendGroupPayload>
          }
          aggregate: {
            args: Prisma.FriendGroupAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFriendGroup>
          }
          groupBy: {
            args: Prisma.FriendGroupGroupByArgs<ExtArgs>
            result: $Utils.Optional<FriendGroupGroupByOutputType>[]
          }
          count: {
            args: Prisma.FriendGroupCountArgs<ExtArgs>
            result: $Utils.Optional<FriendGroupCountAggregateOutputType> | number
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
    user?: UserOmit
    email?: EmailOmit
    friend?: FriendOmit
    group?: GroupOmit
    friendGroup?: FriendGroupOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    emails: number
    friend: number
    groups: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    emails?: boolean | UserCountOutputTypeCountEmailsArgs
    friend?: boolean | UserCountOutputTypeCountFriendArgs
    groups?: boolean | UserCountOutputTypeCountGroupsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountEmailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmailWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFriendArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FriendWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountGroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupWhereInput
  }


  /**
   * Count Type FriendCountOutputType
   */

  export type FriendCountOutputType = {
    groups: number
  }

  export type FriendCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    groups?: boolean | FriendCountOutputTypeCountGroupsArgs
  }

  // Custom InputTypes
  /**
   * FriendCountOutputType without action
   */
  export type FriendCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FriendCountOutputType
     */
    select?: FriendCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FriendCountOutputType without action
   */
  export type FriendCountOutputTypeCountGroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FriendGroupWhereInput
  }


  /**
   * Count Type GroupCountOutputType
   */

  export type GroupCountOutputType = {
    members: number
  }

  export type GroupCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | GroupCountOutputTypeCountMembersArgs
  }

  // Custom InputTypes
  /**
   * GroupCountOutputType without action
   */
  export type GroupCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupCountOutputType
     */
    select?: GroupCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GroupCountOutputType without action
   */
  export type GroupCountOutputTypeCountMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FriendGroupWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    accessToken: string | null
    refreshToken: string | null
    tokenExpiry: Date | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    accessToken: string | null
    refreshToken: string | null
    tokenExpiry: Date | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    accessToken: number
    refreshToken: number
    tokenExpiry: number
    createdAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    accessToken?: true
    refreshToken?: true
    tokenExpiry?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    accessToken?: true
    refreshToken?: true
    tokenExpiry?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    accessToken?: true
    refreshToken?: true
    tokenExpiry?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    accessToken: string
    refreshToken: string
    tokenExpiry: Date | null
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    tokenExpiry?: boolean
    createdAt?: boolean
    emails?: boolean | User$emailsArgs<ExtArgs>
    friend?: boolean | User$friendArgs<ExtArgs>
    groups?: boolean | User$groupsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    tokenExpiry?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    tokenExpiry?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    tokenExpiry?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "accessToken" | "refreshToken" | "tokenExpiry" | "createdAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    emails?: boolean | User$emailsArgs<ExtArgs>
    friend?: boolean | User$friendArgs<ExtArgs>
    groups?: boolean | User$groupsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      emails: Prisma.$EmailPayload<ExtArgs>[]
      friend: Prisma.$FriendPayload<ExtArgs>[]
      groups: Prisma.$GroupPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      accessToken: string
      refreshToken: string
      tokenExpiry: Date | null
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    emails<T extends User$emailsArgs<ExtArgs> = {}>(args?: Subset<T, User$emailsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    friend<T extends User$friendArgs<ExtArgs> = {}>(args?: Subset<T, User$friendArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FriendPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    groups<T extends User$groupsArgs<ExtArgs> = {}>(args?: Subset<T, User$groupsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly accessToken: FieldRef<"User", 'String'>
    readonly refreshToken: FieldRef<"User", 'String'>
    readonly tokenExpiry: FieldRef<"User", 'DateTime'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.emails
   */
  export type User$emailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Email
     */
    select?: EmailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Email
     */
    omit?: EmailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailInclude<ExtArgs> | null
    where?: EmailWhereInput
    orderBy?: EmailOrderByWithRelationInput | EmailOrderByWithRelationInput[]
    cursor?: EmailWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmailScalarFieldEnum | EmailScalarFieldEnum[]
  }

  /**
   * User.friend
   */
  export type User$friendArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friend
     */
    select?: FriendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friend
     */
    omit?: FriendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendInclude<ExtArgs> | null
    where?: FriendWhereInput
    orderBy?: FriendOrderByWithRelationInput | FriendOrderByWithRelationInput[]
    cursor?: FriendWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FriendScalarFieldEnum | FriendScalarFieldEnum[]
  }

  /**
   * User.groups
   */
  export type User$groupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    where?: GroupWhereInput
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    cursor?: GroupWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Email
   */

  export type AggregateEmail = {
    _count: EmailCountAggregateOutputType | null
    _min: EmailMinAggregateOutputType | null
    _max: EmailMaxAggregateOutputType | null
  }

  export type EmailMinAggregateOutputType = {
    id: string | null
    userId: string | null
    gmailMessageId: string | null
    subject: string | null
    senderAddress: string | null
    receiverAddress: string | null
    content: string | null
    html_content: string | null
    snippet: string | null
    receivedAt: Date | null
    isRead: boolean | null
    isNotified: boolean | null
    customLabel: string | null
    createdAt: Date | null
  }

  export type EmailMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    gmailMessageId: string | null
    subject: string | null
    senderAddress: string | null
    receiverAddress: string | null
    content: string | null
    html_content: string | null
    snippet: string | null
    receivedAt: Date | null
    isRead: boolean | null
    isNotified: boolean | null
    customLabel: string | null
    createdAt: Date | null
  }

  export type EmailCountAggregateOutputType = {
    id: number
    userId: number
    gmailMessageId: number
    subject: number
    senderAddress: number
    receiverAddress: number
    content: number
    html_content: number
    snippet: number
    receivedAt: number
    isRead: number
    isNotified: number
    customLabel: number
    createdAt: number
    _all: number
  }


  export type EmailMinAggregateInputType = {
    id?: true
    userId?: true
    gmailMessageId?: true
    subject?: true
    senderAddress?: true
    receiverAddress?: true
    content?: true
    html_content?: true
    snippet?: true
    receivedAt?: true
    isRead?: true
    isNotified?: true
    customLabel?: true
    createdAt?: true
  }

  export type EmailMaxAggregateInputType = {
    id?: true
    userId?: true
    gmailMessageId?: true
    subject?: true
    senderAddress?: true
    receiverAddress?: true
    content?: true
    html_content?: true
    snippet?: true
    receivedAt?: true
    isRead?: true
    isNotified?: true
    customLabel?: true
    createdAt?: true
  }

  export type EmailCountAggregateInputType = {
    id?: true
    userId?: true
    gmailMessageId?: true
    subject?: true
    senderAddress?: true
    receiverAddress?: true
    content?: true
    html_content?: true
    snippet?: true
    receivedAt?: true
    isRead?: true
    isNotified?: true
    customLabel?: true
    createdAt?: true
    _all?: true
  }

  export type EmailAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Email to aggregate.
     */
    where?: EmailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Emails to fetch.
     */
    orderBy?: EmailOrderByWithRelationInput | EmailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Emails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Emails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Emails
    **/
    _count?: true | EmailCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmailMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmailMaxAggregateInputType
  }

  export type GetEmailAggregateType<T extends EmailAggregateArgs> = {
        [P in keyof T & keyof AggregateEmail]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmail[P]>
      : GetScalarType<T[P], AggregateEmail[P]>
  }




  export type EmailGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmailWhereInput
    orderBy?: EmailOrderByWithAggregationInput | EmailOrderByWithAggregationInput[]
    by: EmailScalarFieldEnum[] | EmailScalarFieldEnum
    having?: EmailScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmailCountAggregateInputType | true
    _min?: EmailMinAggregateInputType
    _max?: EmailMaxAggregateInputType
  }

  export type EmailGroupByOutputType = {
    id: string
    userId: string
    gmailMessageId: string
    subject: string | null
    senderAddress: string
    receiverAddress: string
    content: string
    html_content: string
    snippet: string | null
    receivedAt: Date | null
    isRead: boolean
    isNotified: boolean
    customLabel: string | null
    createdAt: Date
    _count: EmailCountAggregateOutputType | null
    _min: EmailMinAggregateOutputType | null
    _max: EmailMaxAggregateOutputType | null
  }

  type GetEmailGroupByPayload<T extends EmailGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmailGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmailGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmailGroupByOutputType[P]>
            : GetScalarType<T[P], EmailGroupByOutputType[P]>
        }
      >
    >


  export type EmailSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    gmailMessageId?: boolean
    subject?: boolean
    senderAddress?: boolean
    receiverAddress?: boolean
    content?: boolean
    html_content?: boolean
    snippet?: boolean
    receivedAt?: boolean
    isRead?: boolean
    isNotified?: boolean
    customLabel?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["email"]>

  export type EmailSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    gmailMessageId?: boolean
    subject?: boolean
    senderAddress?: boolean
    receiverAddress?: boolean
    content?: boolean
    html_content?: boolean
    snippet?: boolean
    receivedAt?: boolean
    isRead?: boolean
    isNotified?: boolean
    customLabel?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["email"]>

  export type EmailSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    gmailMessageId?: boolean
    subject?: boolean
    senderAddress?: boolean
    receiverAddress?: boolean
    content?: boolean
    html_content?: boolean
    snippet?: boolean
    receivedAt?: boolean
    isRead?: boolean
    isNotified?: boolean
    customLabel?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["email"]>

  export type EmailSelectScalar = {
    id?: boolean
    userId?: boolean
    gmailMessageId?: boolean
    subject?: boolean
    senderAddress?: boolean
    receiverAddress?: boolean
    content?: boolean
    html_content?: boolean
    snippet?: boolean
    receivedAt?: boolean
    isRead?: boolean
    isNotified?: boolean
    customLabel?: boolean
    createdAt?: boolean
  }

  export type EmailOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "gmailMessageId" | "subject" | "senderAddress" | "receiverAddress" | "content" | "html_content" | "snippet" | "receivedAt" | "isRead" | "isNotified" | "customLabel" | "createdAt", ExtArgs["result"]["email"]>
  export type EmailInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type EmailIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type EmailIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $EmailPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Email"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      gmailMessageId: string
      subject: string | null
      senderAddress: string
      receiverAddress: string
      content: string
      html_content: string
      snippet: string | null
      receivedAt: Date | null
      isRead: boolean
      isNotified: boolean
      customLabel: string | null
      createdAt: Date
    }, ExtArgs["result"]["email"]>
    composites: {}
  }

  type EmailGetPayload<S extends boolean | null | undefined | EmailDefaultArgs> = $Result.GetResult<Prisma.$EmailPayload, S>

  type EmailCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmailFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmailCountAggregateInputType | true
    }

  export interface EmailDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Email'], meta: { name: 'Email' } }
    /**
     * Find zero or one Email that matches the filter.
     * @param {EmailFindUniqueArgs} args - Arguments to find a Email
     * @example
     * // Get one Email
     * const email = await prisma.email.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmailFindUniqueArgs>(args: SelectSubset<T, EmailFindUniqueArgs<ExtArgs>>): Prisma__EmailClient<$Result.GetResult<Prisma.$EmailPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Email that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmailFindUniqueOrThrowArgs} args - Arguments to find a Email
     * @example
     * // Get one Email
     * const email = await prisma.email.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmailFindUniqueOrThrowArgs>(args: SelectSubset<T, EmailFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmailClient<$Result.GetResult<Prisma.$EmailPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Email that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailFindFirstArgs} args - Arguments to find a Email
     * @example
     * // Get one Email
     * const email = await prisma.email.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmailFindFirstArgs>(args?: SelectSubset<T, EmailFindFirstArgs<ExtArgs>>): Prisma__EmailClient<$Result.GetResult<Prisma.$EmailPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Email that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailFindFirstOrThrowArgs} args - Arguments to find a Email
     * @example
     * // Get one Email
     * const email = await prisma.email.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmailFindFirstOrThrowArgs>(args?: SelectSubset<T, EmailFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmailClient<$Result.GetResult<Prisma.$EmailPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Emails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Emails
     * const emails = await prisma.email.findMany()
     * 
     * // Get first 10 Emails
     * const emails = await prisma.email.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const emailWithIdOnly = await prisma.email.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmailFindManyArgs>(args?: SelectSubset<T, EmailFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Email.
     * @param {EmailCreateArgs} args - Arguments to create a Email.
     * @example
     * // Create one Email
     * const Email = await prisma.email.create({
     *   data: {
     *     // ... data to create a Email
     *   }
     * })
     * 
     */
    create<T extends EmailCreateArgs>(args: SelectSubset<T, EmailCreateArgs<ExtArgs>>): Prisma__EmailClient<$Result.GetResult<Prisma.$EmailPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Emails.
     * @param {EmailCreateManyArgs} args - Arguments to create many Emails.
     * @example
     * // Create many Emails
     * const email = await prisma.email.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmailCreateManyArgs>(args?: SelectSubset<T, EmailCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Emails and returns the data saved in the database.
     * @param {EmailCreateManyAndReturnArgs} args - Arguments to create many Emails.
     * @example
     * // Create many Emails
     * const email = await prisma.email.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Emails and only return the `id`
     * const emailWithIdOnly = await prisma.email.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmailCreateManyAndReturnArgs>(args?: SelectSubset<T, EmailCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Email.
     * @param {EmailDeleteArgs} args - Arguments to delete one Email.
     * @example
     * // Delete one Email
     * const Email = await prisma.email.delete({
     *   where: {
     *     // ... filter to delete one Email
     *   }
     * })
     * 
     */
    delete<T extends EmailDeleteArgs>(args: SelectSubset<T, EmailDeleteArgs<ExtArgs>>): Prisma__EmailClient<$Result.GetResult<Prisma.$EmailPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Email.
     * @param {EmailUpdateArgs} args - Arguments to update one Email.
     * @example
     * // Update one Email
     * const email = await prisma.email.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmailUpdateArgs>(args: SelectSubset<T, EmailUpdateArgs<ExtArgs>>): Prisma__EmailClient<$Result.GetResult<Prisma.$EmailPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Emails.
     * @param {EmailDeleteManyArgs} args - Arguments to filter Emails to delete.
     * @example
     * // Delete a few Emails
     * const { count } = await prisma.email.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmailDeleteManyArgs>(args?: SelectSubset<T, EmailDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Emails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Emails
     * const email = await prisma.email.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmailUpdateManyArgs>(args: SelectSubset<T, EmailUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Emails and returns the data updated in the database.
     * @param {EmailUpdateManyAndReturnArgs} args - Arguments to update many Emails.
     * @example
     * // Update many Emails
     * const email = await prisma.email.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Emails and only return the `id`
     * const emailWithIdOnly = await prisma.email.updateManyAndReturn({
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
    updateManyAndReturn<T extends EmailUpdateManyAndReturnArgs>(args: SelectSubset<T, EmailUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Email.
     * @param {EmailUpsertArgs} args - Arguments to update or create a Email.
     * @example
     * // Update or create a Email
     * const email = await prisma.email.upsert({
     *   create: {
     *     // ... data to create a Email
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Email we want to update
     *   }
     * })
     */
    upsert<T extends EmailUpsertArgs>(args: SelectSubset<T, EmailUpsertArgs<ExtArgs>>): Prisma__EmailClient<$Result.GetResult<Prisma.$EmailPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Emails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailCountArgs} args - Arguments to filter Emails to count.
     * @example
     * // Count the number of Emails
     * const count = await prisma.email.count({
     *   where: {
     *     // ... the filter for the Emails we want to count
     *   }
     * })
    **/
    count<T extends EmailCountArgs>(
      args?: Subset<T, EmailCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmailCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Email.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EmailAggregateArgs>(args: Subset<T, EmailAggregateArgs>): Prisma.PrismaPromise<GetEmailAggregateType<T>>

    /**
     * Group by Email.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailGroupByArgs} args - Group by arguments.
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
      T extends EmailGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmailGroupByArgs['orderBy'] }
        : { orderBy?: EmailGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EmailGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmailGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Email model
   */
  readonly fields: EmailFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Email.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmailClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Email model
   */
  interface EmailFieldRefs {
    readonly id: FieldRef<"Email", 'String'>
    readonly userId: FieldRef<"Email", 'String'>
    readonly gmailMessageId: FieldRef<"Email", 'String'>
    readonly subject: FieldRef<"Email", 'String'>
    readonly senderAddress: FieldRef<"Email", 'String'>
    readonly receiverAddress: FieldRef<"Email", 'String'>
    readonly content: FieldRef<"Email", 'String'>
    readonly html_content: FieldRef<"Email", 'String'>
    readonly snippet: FieldRef<"Email", 'String'>
    readonly receivedAt: FieldRef<"Email", 'DateTime'>
    readonly isRead: FieldRef<"Email", 'Boolean'>
    readonly isNotified: FieldRef<"Email", 'Boolean'>
    readonly customLabel: FieldRef<"Email", 'String'>
    readonly createdAt: FieldRef<"Email", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Email findUnique
   */
  export type EmailFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Email
     */
    select?: EmailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Email
     */
    omit?: EmailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailInclude<ExtArgs> | null
    /**
     * Filter, which Email to fetch.
     */
    where: EmailWhereUniqueInput
  }

  /**
   * Email findUniqueOrThrow
   */
  export type EmailFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Email
     */
    select?: EmailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Email
     */
    omit?: EmailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailInclude<ExtArgs> | null
    /**
     * Filter, which Email to fetch.
     */
    where: EmailWhereUniqueInput
  }

  /**
   * Email findFirst
   */
  export type EmailFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Email
     */
    select?: EmailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Email
     */
    omit?: EmailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailInclude<ExtArgs> | null
    /**
     * Filter, which Email to fetch.
     */
    where?: EmailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Emails to fetch.
     */
    orderBy?: EmailOrderByWithRelationInput | EmailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Emails.
     */
    cursor?: EmailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Emails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Emails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Emails.
     */
    distinct?: EmailScalarFieldEnum | EmailScalarFieldEnum[]
  }

  /**
   * Email findFirstOrThrow
   */
  export type EmailFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Email
     */
    select?: EmailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Email
     */
    omit?: EmailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailInclude<ExtArgs> | null
    /**
     * Filter, which Email to fetch.
     */
    where?: EmailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Emails to fetch.
     */
    orderBy?: EmailOrderByWithRelationInput | EmailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Emails.
     */
    cursor?: EmailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Emails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Emails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Emails.
     */
    distinct?: EmailScalarFieldEnum | EmailScalarFieldEnum[]
  }

  /**
   * Email findMany
   */
  export type EmailFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Email
     */
    select?: EmailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Email
     */
    omit?: EmailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailInclude<ExtArgs> | null
    /**
     * Filter, which Emails to fetch.
     */
    where?: EmailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Emails to fetch.
     */
    orderBy?: EmailOrderByWithRelationInput | EmailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Emails.
     */
    cursor?: EmailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Emails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Emails.
     */
    skip?: number
    distinct?: EmailScalarFieldEnum | EmailScalarFieldEnum[]
  }

  /**
   * Email create
   */
  export type EmailCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Email
     */
    select?: EmailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Email
     */
    omit?: EmailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailInclude<ExtArgs> | null
    /**
     * The data needed to create a Email.
     */
    data: XOR<EmailCreateInput, EmailUncheckedCreateInput>
  }

  /**
   * Email createMany
   */
  export type EmailCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Emails.
     */
    data: EmailCreateManyInput | EmailCreateManyInput[]
  }

  /**
   * Email createManyAndReturn
   */
  export type EmailCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Email
     */
    select?: EmailSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Email
     */
    omit?: EmailOmit<ExtArgs> | null
    /**
     * The data used to create many Emails.
     */
    data: EmailCreateManyInput | EmailCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Email update
   */
  export type EmailUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Email
     */
    select?: EmailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Email
     */
    omit?: EmailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailInclude<ExtArgs> | null
    /**
     * The data needed to update a Email.
     */
    data: XOR<EmailUpdateInput, EmailUncheckedUpdateInput>
    /**
     * Choose, which Email to update.
     */
    where: EmailWhereUniqueInput
  }

  /**
   * Email updateMany
   */
  export type EmailUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Emails.
     */
    data: XOR<EmailUpdateManyMutationInput, EmailUncheckedUpdateManyInput>
    /**
     * Filter which Emails to update
     */
    where?: EmailWhereInput
    /**
     * Limit how many Emails to update.
     */
    limit?: number
  }

  /**
   * Email updateManyAndReturn
   */
  export type EmailUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Email
     */
    select?: EmailSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Email
     */
    omit?: EmailOmit<ExtArgs> | null
    /**
     * The data used to update Emails.
     */
    data: XOR<EmailUpdateManyMutationInput, EmailUncheckedUpdateManyInput>
    /**
     * Filter which Emails to update
     */
    where?: EmailWhereInput
    /**
     * Limit how many Emails to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Email upsert
   */
  export type EmailUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Email
     */
    select?: EmailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Email
     */
    omit?: EmailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailInclude<ExtArgs> | null
    /**
     * The filter to search for the Email to update in case it exists.
     */
    where: EmailWhereUniqueInput
    /**
     * In case the Email found by the `where` argument doesn't exist, create a new Email with this data.
     */
    create: XOR<EmailCreateInput, EmailUncheckedCreateInput>
    /**
     * In case the Email was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmailUpdateInput, EmailUncheckedUpdateInput>
  }

  /**
   * Email delete
   */
  export type EmailDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Email
     */
    select?: EmailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Email
     */
    omit?: EmailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailInclude<ExtArgs> | null
    /**
     * Filter which Email to delete.
     */
    where: EmailWhereUniqueInput
  }

  /**
   * Email deleteMany
   */
  export type EmailDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Emails to delete
     */
    where?: EmailWhereInput
    /**
     * Limit how many Emails to delete.
     */
    limit?: number
  }

  /**
   * Email without action
   */
  export type EmailDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Email
     */
    select?: EmailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Email
     */
    omit?: EmailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailInclude<ExtArgs> | null
  }


  /**
   * Model Friend
   */

  export type AggregateFriend = {
    _count: FriendCountAggregateOutputType | null
    _min: FriendMinAggregateOutputType | null
    _max: FriendMaxAggregateOutputType | null
  }

  export type FriendMinAggregateOutputType = {
    id: string | null
    userId: string | null
    emailAddress: string | null
    name: string | null
    createdAt: Date | null
    customLabel: string | null
  }

  export type FriendMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    emailAddress: string | null
    name: string | null
    createdAt: Date | null
    customLabel: string | null
  }

  export type FriendCountAggregateOutputType = {
    id: number
    userId: number
    emailAddress: number
    name: number
    createdAt: number
    customLabel: number
    _all: number
  }


  export type FriendMinAggregateInputType = {
    id?: true
    userId?: true
    emailAddress?: true
    name?: true
    createdAt?: true
    customLabel?: true
  }

  export type FriendMaxAggregateInputType = {
    id?: true
    userId?: true
    emailAddress?: true
    name?: true
    createdAt?: true
    customLabel?: true
  }

  export type FriendCountAggregateInputType = {
    id?: true
    userId?: true
    emailAddress?: true
    name?: true
    createdAt?: true
    customLabel?: true
    _all?: true
  }

  export type FriendAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Friend to aggregate.
     */
    where?: FriendWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Friends to fetch.
     */
    orderBy?: FriendOrderByWithRelationInput | FriendOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FriendWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Friends from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Friends.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Friends
    **/
    _count?: true | FriendCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FriendMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FriendMaxAggregateInputType
  }

  export type GetFriendAggregateType<T extends FriendAggregateArgs> = {
        [P in keyof T & keyof AggregateFriend]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFriend[P]>
      : GetScalarType<T[P], AggregateFriend[P]>
  }




  export type FriendGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FriendWhereInput
    orderBy?: FriendOrderByWithAggregationInput | FriendOrderByWithAggregationInput[]
    by: FriendScalarFieldEnum[] | FriendScalarFieldEnum
    having?: FriendScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FriendCountAggregateInputType | true
    _min?: FriendMinAggregateInputType
    _max?: FriendMaxAggregateInputType
  }

  export type FriendGroupByOutputType = {
    id: string
    userId: string
    emailAddress: string
    name: string | null
    createdAt: Date
    customLabel: string | null
    _count: FriendCountAggregateOutputType | null
    _min: FriendMinAggregateOutputType | null
    _max: FriendMaxAggregateOutputType | null
  }

  type GetFriendGroupByPayload<T extends FriendGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FriendGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FriendGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FriendGroupByOutputType[P]>
            : GetScalarType<T[P], FriendGroupByOutputType[P]>
        }
      >
    >


  export type FriendSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    emailAddress?: boolean
    name?: boolean
    createdAt?: boolean
    customLabel?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    groups?: boolean | Friend$groupsArgs<ExtArgs>
    _count?: boolean | FriendCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["friend"]>

  export type FriendSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    emailAddress?: boolean
    name?: boolean
    createdAt?: boolean
    customLabel?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["friend"]>

  export type FriendSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    emailAddress?: boolean
    name?: boolean
    createdAt?: boolean
    customLabel?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["friend"]>

  export type FriendSelectScalar = {
    id?: boolean
    userId?: boolean
    emailAddress?: boolean
    name?: boolean
    createdAt?: boolean
    customLabel?: boolean
  }

  export type FriendOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "emailAddress" | "name" | "createdAt" | "customLabel", ExtArgs["result"]["friend"]>
  export type FriendInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    groups?: boolean | Friend$groupsArgs<ExtArgs>
    _count?: boolean | FriendCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FriendIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type FriendIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $FriendPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Friend"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      groups: Prisma.$FriendGroupPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      emailAddress: string
      name: string | null
      createdAt: Date
      customLabel: string | null
    }, ExtArgs["result"]["friend"]>
    composites: {}
  }

  type FriendGetPayload<S extends boolean | null | undefined | FriendDefaultArgs> = $Result.GetResult<Prisma.$FriendPayload, S>

  type FriendCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FriendFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FriendCountAggregateInputType | true
    }

  export interface FriendDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Friend'], meta: { name: 'Friend' } }
    /**
     * Find zero or one Friend that matches the filter.
     * @param {FriendFindUniqueArgs} args - Arguments to find a Friend
     * @example
     * // Get one Friend
     * const friend = await prisma.friend.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FriendFindUniqueArgs>(args: SelectSubset<T, FriendFindUniqueArgs<ExtArgs>>): Prisma__FriendClient<$Result.GetResult<Prisma.$FriendPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Friend that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FriendFindUniqueOrThrowArgs} args - Arguments to find a Friend
     * @example
     * // Get one Friend
     * const friend = await prisma.friend.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FriendFindUniqueOrThrowArgs>(args: SelectSubset<T, FriendFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FriendClient<$Result.GetResult<Prisma.$FriendPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Friend that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendFindFirstArgs} args - Arguments to find a Friend
     * @example
     * // Get one Friend
     * const friend = await prisma.friend.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FriendFindFirstArgs>(args?: SelectSubset<T, FriendFindFirstArgs<ExtArgs>>): Prisma__FriendClient<$Result.GetResult<Prisma.$FriendPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Friend that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendFindFirstOrThrowArgs} args - Arguments to find a Friend
     * @example
     * // Get one Friend
     * const friend = await prisma.friend.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FriendFindFirstOrThrowArgs>(args?: SelectSubset<T, FriendFindFirstOrThrowArgs<ExtArgs>>): Prisma__FriendClient<$Result.GetResult<Prisma.$FriendPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Friends that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Friends
     * const friends = await prisma.friend.findMany()
     * 
     * // Get first 10 Friends
     * const friends = await prisma.friend.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const friendWithIdOnly = await prisma.friend.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FriendFindManyArgs>(args?: SelectSubset<T, FriendFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FriendPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Friend.
     * @param {FriendCreateArgs} args - Arguments to create a Friend.
     * @example
     * // Create one Friend
     * const Friend = await prisma.friend.create({
     *   data: {
     *     // ... data to create a Friend
     *   }
     * })
     * 
     */
    create<T extends FriendCreateArgs>(args: SelectSubset<T, FriendCreateArgs<ExtArgs>>): Prisma__FriendClient<$Result.GetResult<Prisma.$FriendPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Friends.
     * @param {FriendCreateManyArgs} args - Arguments to create many Friends.
     * @example
     * // Create many Friends
     * const friend = await prisma.friend.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FriendCreateManyArgs>(args?: SelectSubset<T, FriendCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Friends and returns the data saved in the database.
     * @param {FriendCreateManyAndReturnArgs} args - Arguments to create many Friends.
     * @example
     * // Create many Friends
     * const friend = await prisma.friend.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Friends and only return the `id`
     * const friendWithIdOnly = await prisma.friend.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FriendCreateManyAndReturnArgs>(args?: SelectSubset<T, FriendCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FriendPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Friend.
     * @param {FriendDeleteArgs} args - Arguments to delete one Friend.
     * @example
     * // Delete one Friend
     * const Friend = await prisma.friend.delete({
     *   where: {
     *     // ... filter to delete one Friend
     *   }
     * })
     * 
     */
    delete<T extends FriendDeleteArgs>(args: SelectSubset<T, FriendDeleteArgs<ExtArgs>>): Prisma__FriendClient<$Result.GetResult<Prisma.$FriendPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Friend.
     * @param {FriendUpdateArgs} args - Arguments to update one Friend.
     * @example
     * // Update one Friend
     * const friend = await prisma.friend.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FriendUpdateArgs>(args: SelectSubset<T, FriendUpdateArgs<ExtArgs>>): Prisma__FriendClient<$Result.GetResult<Prisma.$FriendPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Friends.
     * @param {FriendDeleteManyArgs} args - Arguments to filter Friends to delete.
     * @example
     * // Delete a few Friends
     * const { count } = await prisma.friend.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FriendDeleteManyArgs>(args?: SelectSubset<T, FriendDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Friends.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Friends
     * const friend = await prisma.friend.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FriendUpdateManyArgs>(args: SelectSubset<T, FriendUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Friends and returns the data updated in the database.
     * @param {FriendUpdateManyAndReturnArgs} args - Arguments to update many Friends.
     * @example
     * // Update many Friends
     * const friend = await prisma.friend.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Friends and only return the `id`
     * const friendWithIdOnly = await prisma.friend.updateManyAndReturn({
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
    updateManyAndReturn<T extends FriendUpdateManyAndReturnArgs>(args: SelectSubset<T, FriendUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FriendPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Friend.
     * @param {FriendUpsertArgs} args - Arguments to update or create a Friend.
     * @example
     * // Update or create a Friend
     * const friend = await prisma.friend.upsert({
     *   create: {
     *     // ... data to create a Friend
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Friend we want to update
     *   }
     * })
     */
    upsert<T extends FriendUpsertArgs>(args: SelectSubset<T, FriendUpsertArgs<ExtArgs>>): Prisma__FriendClient<$Result.GetResult<Prisma.$FriendPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Friends.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendCountArgs} args - Arguments to filter Friends to count.
     * @example
     * // Count the number of Friends
     * const count = await prisma.friend.count({
     *   where: {
     *     // ... the filter for the Friends we want to count
     *   }
     * })
    **/
    count<T extends FriendCountArgs>(
      args?: Subset<T, FriendCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FriendCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Friend.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FriendAggregateArgs>(args: Subset<T, FriendAggregateArgs>): Prisma.PrismaPromise<GetFriendAggregateType<T>>

    /**
     * Group by Friend.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendGroupByArgs} args - Group by arguments.
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
      T extends FriendGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FriendGroupByArgs['orderBy'] }
        : { orderBy?: FriendGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FriendGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFriendGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Friend model
   */
  readonly fields: FriendFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Friend.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FriendClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    groups<T extends Friend$groupsArgs<ExtArgs> = {}>(args?: Subset<T, Friend$groupsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FriendGroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Friend model
   */
  interface FriendFieldRefs {
    readonly id: FieldRef<"Friend", 'String'>
    readonly userId: FieldRef<"Friend", 'String'>
    readonly emailAddress: FieldRef<"Friend", 'String'>
    readonly name: FieldRef<"Friend", 'String'>
    readonly createdAt: FieldRef<"Friend", 'DateTime'>
    readonly customLabel: FieldRef<"Friend", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Friend findUnique
   */
  export type FriendFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friend
     */
    select?: FriendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friend
     */
    omit?: FriendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendInclude<ExtArgs> | null
    /**
     * Filter, which Friend to fetch.
     */
    where: FriendWhereUniqueInput
  }

  /**
   * Friend findUniqueOrThrow
   */
  export type FriendFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friend
     */
    select?: FriendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friend
     */
    omit?: FriendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendInclude<ExtArgs> | null
    /**
     * Filter, which Friend to fetch.
     */
    where: FriendWhereUniqueInput
  }

  /**
   * Friend findFirst
   */
  export type FriendFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friend
     */
    select?: FriendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friend
     */
    omit?: FriendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendInclude<ExtArgs> | null
    /**
     * Filter, which Friend to fetch.
     */
    where?: FriendWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Friends to fetch.
     */
    orderBy?: FriendOrderByWithRelationInput | FriendOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Friends.
     */
    cursor?: FriendWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Friends from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Friends.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Friends.
     */
    distinct?: FriendScalarFieldEnum | FriendScalarFieldEnum[]
  }

  /**
   * Friend findFirstOrThrow
   */
  export type FriendFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friend
     */
    select?: FriendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friend
     */
    omit?: FriendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendInclude<ExtArgs> | null
    /**
     * Filter, which Friend to fetch.
     */
    where?: FriendWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Friends to fetch.
     */
    orderBy?: FriendOrderByWithRelationInput | FriendOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Friends.
     */
    cursor?: FriendWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Friends from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Friends.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Friends.
     */
    distinct?: FriendScalarFieldEnum | FriendScalarFieldEnum[]
  }

  /**
   * Friend findMany
   */
  export type FriendFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friend
     */
    select?: FriendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friend
     */
    omit?: FriendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendInclude<ExtArgs> | null
    /**
     * Filter, which Friends to fetch.
     */
    where?: FriendWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Friends to fetch.
     */
    orderBy?: FriendOrderByWithRelationInput | FriendOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Friends.
     */
    cursor?: FriendWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Friends from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Friends.
     */
    skip?: number
    distinct?: FriendScalarFieldEnum | FriendScalarFieldEnum[]
  }

  /**
   * Friend create
   */
  export type FriendCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friend
     */
    select?: FriendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friend
     */
    omit?: FriendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendInclude<ExtArgs> | null
    /**
     * The data needed to create a Friend.
     */
    data: XOR<FriendCreateInput, FriendUncheckedCreateInput>
  }

  /**
   * Friend createMany
   */
  export type FriendCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Friends.
     */
    data: FriendCreateManyInput | FriendCreateManyInput[]
  }

  /**
   * Friend createManyAndReturn
   */
  export type FriendCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friend
     */
    select?: FriendSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Friend
     */
    omit?: FriendOmit<ExtArgs> | null
    /**
     * The data used to create many Friends.
     */
    data: FriendCreateManyInput | FriendCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Friend update
   */
  export type FriendUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friend
     */
    select?: FriendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friend
     */
    omit?: FriendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendInclude<ExtArgs> | null
    /**
     * The data needed to update a Friend.
     */
    data: XOR<FriendUpdateInput, FriendUncheckedUpdateInput>
    /**
     * Choose, which Friend to update.
     */
    where: FriendWhereUniqueInput
  }

  /**
   * Friend updateMany
   */
  export type FriendUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Friends.
     */
    data: XOR<FriendUpdateManyMutationInput, FriendUncheckedUpdateManyInput>
    /**
     * Filter which Friends to update
     */
    where?: FriendWhereInput
    /**
     * Limit how many Friends to update.
     */
    limit?: number
  }

  /**
   * Friend updateManyAndReturn
   */
  export type FriendUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friend
     */
    select?: FriendSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Friend
     */
    omit?: FriendOmit<ExtArgs> | null
    /**
     * The data used to update Friends.
     */
    data: XOR<FriendUpdateManyMutationInput, FriendUncheckedUpdateManyInput>
    /**
     * Filter which Friends to update
     */
    where?: FriendWhereInput
    /**
     * Limit how many Friends to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Friend upsert
   */
  export type FriendUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friend
     */
    select?: FriendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friend
     */
    omit?: FriendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendInclude<ExtArgs> | null
    /**
     * The filter to search for the Friend to update in case it exists.
     */
    where: FriendWhereUniqueInput
    /**
     * In case the Friend found by the `where` argument doesn't exist, create a new Friend with this data.
     */
    create: XOR<FriendCreateInput, FriendUncheckedCreateInput>
    /**
     * In case the Friend was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FriendUpdateInput, FriendUncheckedUpdateInput>
  }

  /**
   * Friend delete
   */
  export type FriendDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friend
     */
    select?: FriendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friend
     */
    omit?: FriendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendInclude<ExtArgs> | null
    /**
     * Filter which Friend to delete.
     */
    where: FriendWhereUniqueInput
  }

  /**
   * Friend deleteMany
   */
  export type FriendDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Friends to delete
     */
    where?: FriendWhereInput
    /**
     * Limit how many Friends to delete.
     */
    limit?: number
  }

  /**
   * Friend.groups
   */
  export type Friend$groupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FriendGroup
     */
    select?: FriendGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FriendGroup
     */
    omit?: FriendGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendGroupInclude<ExtArgs> | null
    where?: FriendGroupWhereInput
    orderBy?: FriendGroupOrderByWithRelationInput | FriendGroupOrderByWithRelationInput[]
    cursor?: FriendGroupWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FriendGroupScalarFieldEnum | FriendGroupScalarFieldEnum[]
  }

  /**
   * Friend without action
   */
  export type FriendDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friend
     */
    select?: FriendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friend
     */
    omit?: FriendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendInclude<ExtArgs> | null
  }


  /**
   * Model Group
   */

  export type AggregateGroup = {
    _count: GroupCountAggregateOutputType | null
    _min: GroupMinAggregateOutputType | null
    _max: GroupMaxAggregateOutputType | null
  }

  export type GroupMinAggregateOutputType = {
    id: string | null
    name: string | null
    userId: string | null
    createdAt: Date | null
  }

  export type GroupMaxAggregateOutputType = {
    id: string | null
    name: string | null
    userId: string | null
    createdAt: Date | null
  }

  export type GroupCountAggregateOutputType = {
    id: number
    name: number
    userId: number
    createdAt: number
    _all: number
  }


  export type GroupMinAggregateInputType = {
    id?: true
    name?: true
    userId?: true
    createdAt?: true
  }

  export type GroupMaxAggregateInputType = {
    id?: true
    name?: true
    userId?: true
    createdAt?: true
  }

  export type GroupCountAggregateInputType = {
    id?: true
    name?: true
    userId?: true
    createdAt?: true
    _all?: true
  }

  export type GroupAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Group to aggregate.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Groups
    **/
    _count?: true | GroupCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GroupMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GroupMaxAggregateInputType
  }

  export type GetGroupAggregateType<T extends GroupAggregateArgs> = {
        [P in keyof T & keyof AggregateGroup]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGroup[P]>
      : GetScalarType<T[P], AggregateGroup[P]>
  }




  export type GroupGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupWhereInput
    orderBy?: GroupOrderByWithAggregationInput | GroupOrderByWithAggregationInput[]
    by: GroupScalarFieldEnum[] | GroupScalarFieldEnum
    having?: GroupScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GroupCountAggregateInputType | true
    _min?: GroupMinAggregateInputType
    _max?: GroupMaxAggregateInputType
  }

  export type GroupGroupByOutputType = {
    id: string
    name: string
    userId: string
    createdAt: Date
    _count: GroupCountAggregateOutputType | null
    _min: GroupMinAggregateOutputType | null
    _max: GroupMaxAggregateOutputType | null
  }

  type GetGroupGroupByPayload<T extends GroupGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GroupGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GroupGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GroupGroupByOutputType[P]>
            : GetScalarType<T[P], GroupGroupByOutputType[P]>
        }
      >
    >


  export type GroupSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    userId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    members?: boolean | Group$membersArgs<ExtArgs>
    _count?: boolean | GroupCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["group"]>

  export type GroupSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    userId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["group"]>

  export type GroupSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    userId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["group"]>

  export type GroupSelectScalar = {
    id?: boolean
    name?: boolean
    userId?: boolean
    createdAt?: boolean
  }

  export type GroupOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "userId" | "createdAt", ExtArgs["result"]["group"]>
  export type GroupInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    members?: boolean | Group$membersArgs<ExtArgs>
    _count?: boolean | GroupCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GroupIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type GroupIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $GroupPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Group"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      members: Prisma.$FriendGroupPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      userId: string
      createdAt: Date
    }, ExtArgs["result"]["group"]>
    composites: {}
  }

  type GroupGetPayload<S extends boolean | null | undefined | GroupDefaultArgs> = $Result.GetResult<Prisma.$GroupPayload, S>

  type GroupCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GroupFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GroupCountAggregateInputType | true
    }

  export interface GroupDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Group'], meta: { name: 'Group' } }
    /**
     * Find zero or one Group that matches the filter.
     * @param {GroupFindUniqueArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GroupFindUniqueArgs>(args: SelectSubset<T, GroupFindUniqueArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Group that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GroupFindUniqueOrThrowArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GroupFindUniqueOrThrowArgs>(args: SelectSubset<T, GroupFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Group that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupFindFirstArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GroupFindFirstArgs>(args?: SelectSubset<T, GroupFindFirstArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Group that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupFindFirstOrThrowArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GroupFindFirstOrThrowArgs>(args?: SelectSubset<T, GroupFindFirstOrThrowArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Groups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Groups
     * const groups = await prisma.group.findMany()
     * 
     * // Get first 10 Groups
     * const groups = await prisma.group.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const groupWithIdOnly = await prisma.group.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GroupFindManyArgs>(args?: SelectSubset<T, GroupFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Group.
     * @param {GroupCreateArgs} args - Arguments to create a Group.
     * @example
     * // Create one Group
     * const Group = await prisma.group.create({
     *   data: {
     *     // ... data to create a Group
     *   }
     * })
     * 
     */
    create<T extends GroupCreateArgs>(args: SelectSubset<T, GroupCreateArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Groups.
     * @param {GroupCreateManyArgs} args - Arguments to create many Groups.
     * @example
     * // Create many Groups
     * const group = await prisma.group.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GroupCreateManyArgs>(args?: SelectSubset<T, GroupCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Groups and returns the data saved in the database.
     * @param {GroupCreateManyAndReturnArgs} args - Arguments to create many Groups.
     * @example
     * // Create many Groups
     * const group = await prisma.group.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Groups and only return the `id`
     * const groupWithIdOnly = await prisma.group.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GroupCreateManyAndReturnArgs>(args?: SelectSubset<T, GroupCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Group.
     * @param {GroupDeleteArgs} args - Arguments to delete one Group.
     * @example
     * // Delete one Group
     * const Group = await prisma.group.delete({
     *   where: {
     *     // ... filter to delete one Group
     *   }
     * })
     * 
     */
    delete<T extends GroupDeleteArgs>(args: SelectSubset<T, GroupDeleteArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Group.
     * @param {GroupUpdateArgs} args - Arguments to update one Group.
     * @example
     * // Update one Group
     * const group = await prisma.group.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GroupUpdateArgs>(args: SelectSubset<T, GroupUpdateArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Groups.
     * @param {GroupDeleteManyArgs} args - Arguments to filter Groups to delete.
     * @example
     * // Delete a few Groups
     * const { count } = await prisma.group.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GroupDeleteManyArgs>(args?: SelectSubset<T, GroupDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Groups
     * const group = await prisma.group.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GroupUpdateManyArgs>(args: SelectSubset<T, GroupUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Groups and returns the data updated in the database.
     * @param {GroupUpdateManyAndReturnArgs} args - Arguments to update many Groups.
     * @example
     * // Update many Groups
     * const group = await prisma.group.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Groups and only return the `id`
     * const groupWithIdOnly = await prisma.group.updateManyAndReturn({
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
    updateManyAndReturn<T extends GroupUpdateManyAndReturnArgs>(args: SelectSubset<T, GroupUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Group.
     * @param {GroupUpsertArgs} args - Arguments to update or create a Group.
     * @example
     * // Update or create a Group
     * const group = await prisma.group.upsert({
     *   create: {
     *     // ... data to create a Group
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Group we want to update
     *   }
     * })
     */
    upsert<T extends GroupUpsertArgs>(args: SelectSubset<T, GroupUpsertArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupCountArgs} args - Arguments to filter Groups to count.
     * @example
     * // Count the number of Groups
     * const count = await prisma.group.count({
     *   where: {
     *     // ... the filter for the Groups we want to count
     *   }
     * })
    **/
    count<T extends GroupCountArgs>(
      args?: Subset<T, GroupCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GroupCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Group.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GroupAggregateArgs>(args: Subset<T, GroupAggregateArgs>): Prisma.PrismaPromise<GetGroupAggregateType<T>>

    /**
     * Group by Group.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupGroupByArgs} args - Group by arguments.
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
      T extends GroupGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GroupGroupByArgs['orderBy'] }
        : { orderBy?: GroupGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GroupGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGroupGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Group model
   */
  readonly fields: GroupFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Group.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GroupClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    members<T extends Group$membersArgs<ExtArgs> = {}>(args?: Subset<T, Group$membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FriendGroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Group model
   */
  interface GroupFieldRefs {
    readonly id: FieldRef<"Group", 'String'>
    readonly name: FieldRef<"Group", 'String'>
    readonly userId: FieldRef<"Group", 'String'>
    readonly createdAt: FieldRef<"Group", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Group findUnique
   */
  export type GroupFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where: GroupWhereUniqueInput
  }

  /**
   * Group findUniqueOrThrow
   */
  export type GroupFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where: GroupWhereUniqueInput
  }

  /**
   * Group findFirst
   */
  export type GroupFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Groups.
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Groups.
     */
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }

  /**
   * Group findFirstOrThrow
   */
  export type GroupFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Groups.
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Groups.
     */
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }

  /**
   * Group findMany
   */
  export type GroupFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Groups to fetch.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Groups.
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }

  /**
   * Group create
   */
  export type GroupCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * The data needed to create a Group.
     */
    data: XOR<GroupCreateInput, GroupUncheckedCreateInput>
  }

  /**
   * Group createMany
   */
  export type GroupCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Groups.
     */
    data: GroupCreateManyInput | GroupCreateManyInput[]
  }

  /**
   * Group createManyAndReturn
   */
  export type GroupCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * The data used to create many Groups.
     */
    data: GroupCreateManyInput | GroupCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Group update
   */
  export type GroupUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * The data needed to update a Group.
     */
    data: XOR<GroupUpdateInput, GroupUncheckedUpdateInput>
    /**
     * Choose, which Group to update.
     */
    where: GroupWhereUniqueInput
  }

  /**
   * Group updateMany
   */
  export type GroupUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Groups.
     */
    data: XOR<GroupUpdateManyMutationInput, GroupUncheckedUpdateManyInput>
    /**
     * Filter which Groups to update
     */
    where?: GroupWhereInput
    /**
     * Limit how many Groups to update.
     */
    limit?: number
  }

  /**
   * Group updateManyAndReturn
   */
  export type GroupUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * The data used to update Groups.
     */
    data: XOR<GroupUpdateManyMutationInput, GroupUncheckedUpdateManyInput>
    /**
     * Filter which Groups to update
     */
    where?: GroupWhereInput
    /**
     * Limit how many Groups to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Group upsert
   */
  export type GroupUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * The filter to search for the Group to update in case it exists.
     */
    where: GroupWhereUniqueInput
    /**
     * In case the Group found by the `where` argument doesn't exist, create a new Group with this data.
     */
    create: XOR<GroupCreateInput, GroupUncheckedCreateInput>
    /**
     * In case the Group was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GroupUpdateInput, GroupUncheckedUpdateInput>
  }

  /**
   * Group delete
   */
  export type GroupDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter which Group to delete.
     */
    where: GroupWhereUniqueInput
  }

  /**
   * Group deleteMany
   */
  export type GroupDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Groups to delete
     */
    where?: GroupWhereInput
    /**
     * Limit how many Groups to delete.
     */
    limit?: number
  }

  /**
   * Group.members
   */
  export type Group$membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FriendGroup
     */
    select?: FriendGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FriendGroup
     */
    omit?: FriendGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendGroupInclude<ExtArgs> | null
    where?: FriendGroupWhereInput
    orderBy?: FriendGroupOrderByWithRelationInput | FriendGroupOrderByWithRelationInput[]
    cursor?: FriendGroupWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FriendGroupScalarFieldEnum | FriendGroupScalarFieldEnum[]
  }

  /**
   * Group without action
   */
  export type GroupDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
  }


  /**
   * Model FriendGroup
   */

  export type AggregateFriendGroup = {
    _count: FriendGroupCountAggregateOutputType | null
    _min: FriendGroupMinAggregateOutputType | null
    _max: FriendGroupMaxAggregateOutputType | null
  }

  export type FriendGroupMinAggregateOutputType = {
    id: string | null
    groupId: string | null
    friendId: string | null
  }

  export type FriendGroupMaxAggregateOutputType = {
    id: string | null
    groupId: string | null
    friendId: string | null
  }

  export type FriendGroupCountAggregateOutputType = {
    id: number
    groupId: number
    friendId: number
    _all: number
  }


  export type FriendGroupMinAggregateInputType = {
    id?: true
    groupId?: true
    friendId?: true
  }

  export type FriendGroupMaxAggregateInputType = {
    id?: true
    groupId?: true
    friendId?: true
  }

  export type FriendGroupCountAggregateInputType = {
    id?: true
    groupId?: true
    friendId?: true
    _all?: true
  }

  export type FriendGroupAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FriendGroup to aggregate.
     */
    where?: FriendGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FriendGroups to fetch.
     */
    orderBy?: FriendGroupOrderByWithRelationInput | FriendGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FriendGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FriendGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FriendGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FriendGroups
    **/
    _count?: true | FriendGroupCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FriendGroupMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FriendGroupMaxAggregateInputType
  }

  export type GetFriendGroupAggregateType<T extends FriendGroupAggregateArgs> = {
        [P in keyof T & keyof AggregateFriendGroup]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFriendGroup[P]>
      : GetScalarType<T[P], AggregateFriendGroup[P]>
  }




  export type FriendGroupGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FriendGroupWhereInput
    orderBy?: FriendGroupOrderByWithAggregationInput | FriendGroupOrderByWithAggregationInput[]
    by: FriendGroupScalarFieldEnum[] | FriendGroupScalarFieldEnum
    having?: FriendGroupScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FriendGroupCountAggregateInputType | true
    _min?: FriendGroupMinAggregateInputType
    _max?: FriendGroupMaxAggregateInputType
  }

  export type FriendGroupGroupByOutputType = {
    id: string
    groupId: string
    friendId: string
    _count: FriendGroupCountAggregateOutputType | null
    _min: FriendGroupMinAggregateOutputType | null
    _max: FriendGroupMaxAggregateOutputType | null
  }

  type GetFriendGroupGroupByPayload<T extends FriendGroupGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FriendGroupGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FriendGroupGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FriendGroupGroupByOutputType[P]>
            : GetScalarType<T[P], FriendGroupGroupByOutputType[P]>
        }
      >
    >


  export type FriendGroupSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    groupId?: boolean
    friendId?: boolean
    group?: boolean | GroupDefaultArgs<ExtArgs>
    friend?: boolean | FriendDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["friendGroup"]>

  export type FriendGroupSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    groupId?: boolean
    friendId?: boolean
    group?: boolean | GroupDefaultArgs<ExtArgs>
    friend?: boolean | FriendDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["friendGroup"]>

  export type FriendGroupSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    groupId?: boolean
    friendId?: boolean
    group?: boolean | GroupDefaultArgs<ExtArgs>
    friend?: boolean | FriendDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["friendGroup"]>

  export type FriendGroupSelectScalar = {
    id?: boolean
    groupId?: boolean
    friendId?: boolean
  }

  export type FriendGroupOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "groupId" | "friendId", ExtArgs["result"]["friendGroup"]>
  export type FriendGroupInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | GroupDefaultArgs<ExtArgs>
    friend?: boolean | FriendDefaultArgs<ExtArgs>
  }
  export type FriendGroupIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | GroupDefaultArgs<ExtArgs>
    friend?: boolean | FriendDefaultArgs<ExtArgs>
  }
  export type FriendGroupIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | GroupDefaultArgs<ExtArgs>
    friend?: boolean | FriendDefaultArgs<ExtArgs>
  }

  export type $FriendGroupPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FriendGroup"
    objects: {
      group: Prisma.$GroupPayload<ExtArgs>
      friend: Prisma.$FriendPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      groupId: string
      friendId: string
    }, ExtArgs["result"]["friendGroup"]>
    composites: {}
  }

  type FriendGroupGetPayload<S extends boolean | null | undefined | FriendGroupDefaultArgs> = $Result.GetResult<Prisma.$FriendGroupPayload, S>

  type FriendGroupCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FriendGroupFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FriendGroupCountAggregateInputType | true
    }

  export interface FriendGroupDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FriendGroup'], meta: { name: 'FriendGroup' } }
    /**
     * Find zero or one FriendGroup that matches the filter.
     * @param {FriendGroupFindUniqueArgs} args - Arguments to find a FriendGroup
     * @example
     * // Get one FriendGroup
     * const friendGroup = await prisma.friendGroup.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FriendGroupFindUniqueArgs>(args: SelectSubset<T, FriendGroupFindUniqueArgs<ExtArgs>>): Prisma__FriendGroupClient<$Result.GetResult<Prisma.$FriendGroupPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FriendGroup that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FriendGroupFindUniqueOrThrowArgs} args - Arguments to find a FriendGroup
     * @example
     * // Get one FriendGroup
     * const friendGroup = await prisma.friendGroup.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FriendGroupFindUniqueOrThrowArgs>(args: SelectSubset<T, FriendGroupFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FriendGroupClient<$Result.GetResult<Prisma.$FriendGroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FriendGroup that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendGroupFindFirstArgs} args - Arguments to find a FriendGroup
     * @example
     * // Get one FriendGroup
     * const friendGroup = await prisma.friendGroup.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FriendGroupFindFirstArgs>(args?: SelectSubset<T, FriendGroupFindFirstArgs<ExtArgs>>): Prisma__FriendGroupClient<$Result.GetResult<Prisma.$FriendGroupPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FriendGroup that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendGroupFindFirstOrThrowArgs} args - Arguments to find a FriendGroup
     * @example
     * // Get one FriendGroup
     * const friendGroup = await prisma.friendGroup.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FriendGroupFindFirstOrThrowArgs>(args?: SelectSubset<T, FriendGroupFindFirstOrThrowArgs<ExtArgs>>): Prisma__FriendGroupClient<$Result.GetResult<Prisma.$FriendGroupPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FriendGroups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendGroupFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FriendGroups
     * const friendGroups = await prisma.friendGroup.findMany()
     * 
     * // Get first 10 FriendGroups
     * const friendGroups = await prisma.friendGroup.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const friendGroupWithIdOnly = await prisma.friendGroup.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FriendGroupFindManyArgs>(args?: SelectSubset<T, FriendGroupFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FriendGroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FriendGroup.
     * @param {FriendGroupCreateArgs} args - Arguments to create a FriendGroup.
     * @example
     * // Create one FriendGroup
     * const FriendGroup = await prisma.friendGroup.create({
     *   data: {
     *     // ... data to create a FriendGroup
     *   }
     * })
     * 
     */
    create<T extends FriendGroupCreateArgs>(args: SelectSubset<T, FriendGroupCreateArgs<ExtArgs>>): Prisma__FriendGroupClient<$Result.GetResult<Prisma.$FriendGroupPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FriendGroups.
     * @param {FriendGroupCreateManyArgs} args - Arguments to create many FriendGroups.
     * @example
     * // Create many FriendGroups
     * const friendGroup = await prisma.friendGroup.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FriendGroupCreateManyArgs>(args?: SelectSubset<T, FriendGroupCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FriendGroups and returns the data saved in the database.
     * @param {FriendGroupCreateManyAndReturnArgs} args - Arguments to create many FriendGroups.
     * @example
     * // Create many FriendGroups
     * const friendGroup = await prisma.friendGroup.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FriendGroups and only return the `id`
     * const friendGroupWithIdOnly = await prisma.friendGroup.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FriendGroupCreateManyAndReturnArgs>(args?: SelectSubset<T, FriendGroupCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FriendGroupPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FriendGroup.
     * @param {FriendGroupDeleteArgs} args - Arguments to delete one FriendGroup.
     * @example
     * // Delete one FriendGroup
     * const FriendGroup = await prisma.friendGroup.delete({
     *   where: {
     *     // ... filter to delete one FriendGroup
     *   }
     * })
     * 
     */
    delete<T extends FriendGroupDeleteArgs>(args: SelectSubset<T, FriendGroupDeleteArgs<ExtArgs>>): Prisma__FriendGroupClient<$Result.GetResult<Prisma.$FriendGroupPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FriendGroup.
     * @param {FriendGroupUpdateArgs} args - Arguments to update one FriendGroup.
     * @example
     * // Update one FriendGroup
     * const friendGroup = await prisma.friendGroup.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FriendGroupUpdateArgs>(args: SelectSubset<T, FriendGroupUpdateArgs<ExtArgs>>): Prisma__FriendGroupClient<$Result.GetResult<Prisma.$FriendGroupPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FriendGroups.
     * @param {FriendGroupDeleteManyArgs} args - Arguments to filter FriendGroups to delete.
     * @example
     * // Delete a few FriendGroups
     * const { count } = await prisma.friendGroup.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FriendGroupDeleteManyArgs>(args?: SelectSubset<T, FriendGroupDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FriendGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendGroupUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FriendGroups
     * const friendGroup = await prisma.friendGroup.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FriendGroupUpdateManyArgs>(args: SelectSubset<T, FriendGroupUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FriendGroups and returns the data updated in the database.
     * @param {FriendGroupUpdateManyAndReturnArgs} args - Arguments to update many FriendGroups.
     * @example
     * // Update many FriendGroups
     * const friendGroup = await prisma.friendGroup.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FriendGroups and only return the `id`
     * const friendGroupWithIdOnly = await prisma.friendGroup.updateManyAndReturn({
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
    updateManyAndReturn<T extends FriendGroupUpdateManyAndReturnArgs>(args: SelectSubset<T, FriendGroupUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FriendGroupPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FriendGroup.
     * @param {FriendGroupUpsertArgs} args - Arguments to update or create a FriendGroup.
     * @example
     * // Update or create a FriendGroup
     * const friendGroup = await prisma.friendGroup.upsert({
     *   create: {
     *     // ... data to create a FriendGroup
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FriendGroup we want to update
     *   }
     * })
     */
    upsert<T extends FriendGroupUpsertArgs>(args: SelectSubset<T, FriendGroupUpsertArgs<ExtArgs>>): Prisma__FriendGroupClient<$Result.GetResult<Prisma.$FriendGroupPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FriendGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendGroupCountArgs} args - Arguments to filter FriendGroups to count.
     * @example
     * // Count the number of FriendGroups
     * const count = await prisma.friendGroup.count({
     *   where: {
     *     // ... the filter for the FriendGroups we want to count
     *   }
     * })
    **/
    count<T extends FriendGroupCountArgs>(
      args?: Subset<T, FriendGroupCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FriendGroupCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FriendGroup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendGroupAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FriendGroupAggregateArgs>(args: Subset<T, FriendGroupAggregateArgs>): Prisma.PrismaPromise<GetFriendGroupAggregateType<T>>

    /**
     * Group by FriendGroup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendGroupGroupByArgs} args - Group by arguments.
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
      T extends FriendGroupGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FriendGroupGroupByArgs['orderBy'] }
        : { orderBy?: FriendGroupGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FriendGroupGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFriendGroupGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FriendGroup model
   */
  readonly fields: FriendGroupFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FriendGroup.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FriendGroupClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    group<T extends GroupDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GroupDefaultArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    friend<T extends FriendDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FriendDefaultArgs<ExtArgs>>): Prisma__FriendClient<$Result.GetResult<Prisma.$FriendPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the FriendGroup model
   */
  interface FriendGroupFieldRefs {
    readonly id: FieldRef<"FriendGroup", 'String'>
    readonly groupId: FieldRef<"FriendGroup", 'String'>
    readonly friendId: FieldRef<"FriendGroup", 'String'>
  }
    

  // Custom InputTypes
  /**
   * FriendGroup findUnique
   */
  export type FriendGroupFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FriendGroup
     */
    select?: FriendGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FriendGroup
     */
    omit?: FriendGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendGroupInclude<ExtArgs> | null
    /**
     * Filter, which FriendGroup to fetch.
     */
    where: FriendGroupWhereUniqueInput
  }

  /**
   * FriendGroup findUniqueOrThrow
   */
  export type FriendGroupFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FriendGroup
     */
    select?: FriendGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FriendGroup
     */
    omit?: FriendGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendGroupInclude<ExtArgs> | null
    /**
     * Filter, which FriendGroup to fetch.
     */
    where: FriendGroupWhereUniqueInput
  }

  /**
   * FriendGroup findFirst
   */
  export type FriendGroupFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FriendGroup
     */
    select?: FriendGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FriendGroup
     */
    omit?: FriendGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendGroupInclude<ExtArgs> | null
    /**
     * Filter, which FriendGroup to fetch.
     */
    where?: FriendGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FriendGroups to fetch.
     */
    orderBy?: FriendGroupOrderByWithRelationInput | FriendGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FriendGroups.
     */
    cursor?: FriendGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FriendGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FriendGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FriendGroups.
     */
    distinct?: FriendGroupScalarFieldEnum | FriendGroupScalarFieldEnum[]
  }

  /**
   * FriendGroup findFirstOrThrow
   */
  export type FriendGroupFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FriendGroup
     */
    select?: FriendGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FriendGroup
     */
    omit?: FriendGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendGroupInclude<ExtArgs> | null
    /**
     * Filter, which FriendGroup to fetch.
     */
    where?: FriendGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FriendGroups to fetch.
     */
    orderBy?: FriendGroupOrderByWithRelationInput | FriendGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FriendGroups.
     */
    cursor?: FriendGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FriendGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FriendGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FriendGroups.
     */
    distinct?: FriendGroupScalarFieldEnum | FriendGroupScalarFieldEnum[]
  }

  /**
   * FriendGroup findMany
   */
  export type FriendGroupFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FriendGroup
     */
    select?: FriendGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FriendGroup
     */
    omit?: FriendGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendGroupInclude<ExtArgs> | null
    /**
     * Filter, which FriendGroups to fetch.
     */
    where?: FriendGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FriendGroups to fetch.
     */
    orderBy?: FriendGroupOrderByWithRelationInput | FriendGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FriendGroups.
     */
    cursor?: FriendGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FriendGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FriendGroups.
     */
    skip?: number
    distinct?: FriendGroupScalarFieldEnum | FriendGroupScalarFieldEnum[]
  }

  /**
   * FriendGroup create
   */
  export type FriendGroupCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FriendGroup
     */
    select?: FriendGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FriendGroup
     */
    omit?: FriendGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendGroupInclude<ExtArgs> | null
    /**
     * The data needed to create a FriendGroup.
     */
    data: XOR<FriendGroupCreateInput, FriendGroupUncheckedCreateInput>
  }

  /**
   * FriendGroup createMany
   */
  export type FriendGroupCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FriendGroups.
     */
    data: FriendGroupCreateManyInput | FriendGroupCreateManyInput[]
  }

  /**
   * FriendGroup createManyAndReturn
   */
  export type FriendGroupCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FriendGroup
     */
    select?: FriendGroupSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FriendGroup
     */
    omit?: FriendGroupOmit<ExtArgs> | null
    /**
     * The data used to create many FriendGroups.
     */
    data: FriendGroupCreateManyInput | FriendGroupCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendGroupIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FriendGroup update
   */
  export type FriendGroupUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FriendGroup
     */
    select?: FriendGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FriendGroup
     */
    omit?: FriendGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendGroupInclude<ExtArgs> | null
    /**
     * The data needed to update a FriendGroup.
     */
    data: XOR<FriendGroupUpdateInput, FriendGroupUncheckedUpdateInput>
    /**
     * Choose, which FriendGroup to update.
     */
    where: FriendGroupWhereUniqueInput
  }

  /**
   * FriendGroup updateMany
   */
  export type FriendGroupUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FriendGroups.
     */
    data: XOR<FriendGroupUpdateManyMutationInput, FriendGroupUncheckedUpdateManyInput>
    /**
     * Filter which FriendGroups to update
     */
    where?: FriendGroupWhereInput
    /**
     * Limit how many FriendGroups to update.
     */
    limit?: number
  }

  /**
   * FriendGroup updateManyAndReturn
   */
  export type FriendGroupUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FriendGroup
     */
    select?: FriendGroupSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FriendGroup
     */
    omit?: FriendGroupOmit<ExtArgs> | null
    /**
     * The data used to update FriendGroups.
     */
    data: XOR<FriendGroupUpdateManyMutationInput, FriendGroupUncheckedUpdateManyInput>
    /**
     * Filter which FriendGroups to update
     */
    where?: FriendGroupWhereInput
    /**
     * Limit how many FriendGroups to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendGroupIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * FriendGroup upsert
   */
  export type FriendGroupUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FriendGroup
     */
    select?: FriendGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FriendGroup
     */
    omit?: FriendGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendGroupInclude<ExtArgs> | null
    /**
     * The filter to search for the FriendGroup to update in case it exists.
     */
    where: FriendGroupWhereUniqueInput
    /**
     * In case the FriendGroup found by the `where` argument doesn't exist, create a new FriendGroup with this data.
     */
    create: XOR<FriendGroupCreateInput, FriendGroupUncheckedCreateInput>
    /**
     * In case the FriendGroup was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FriendGroupUpdateInput, FriendGroupUncheckedUpdateInput>
  }

  /**
   * FriendGroup delete
   */
  export type FriendGroupDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FriendGroup
     */
    select?: FriendGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FriendGroup
     */
    omit?: FriendGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendGroupInclude<ExtArgs> | null
    /**
     * Filter which FriendGroup to delete.
     */
    where: FriendGroupWhereUniqueInput
  }

  /**
   * FriendGroup deleteMany
   */
  export type FriendGroupDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FriendGroups to delete
     */
    where?: FriendGroupWhereInput
    /**
     * Limit how many FriendGroups to delete.
     */
    limit?: number
  }

  /**
   * FriendGroup without action
   */
  export type FriendGroupDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FriendGroup
     */
    select?: FriendGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FriendGroup
     */
    omit?: FriendGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendGroupInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    accessToken: 'accessToken',
    refreshToken: 'refreshToken',
    tokenExpiry: 'tokenExpiry',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const EmailScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    gmailMessageId: 'gmailMessageId',
    subject: 'subject',
    senderAddress: 'senderAddress',
    receiverAddress: 'receiverAddress',
    content: 'content',
    html_content: 'html_content',
    snippet: 'snippet',
    receivedAt: 'receivedAt',
    isRead: 'isRead',
    isNotified: 'isNotified',
    customLabel: 'customLabel',
    createdAt: 'createdAt'
  };

  export type EmailScalarFieldEnum = (typeof EmailScalarFieldEnum)[keyof typeof EmailScalarFieldEnum]


  export const FriendScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    emailAddress: 'emailAddress',
    name: 'name',
    createdAt: 'createdAt',
    customLabel: 'customLabel'
  };

  export type FriendScalarFieldEnum = (typeof FriendScalarFieldEnum)[keyof typeof FriendScalarFieldEnum]


  export const GroupScalarFieldEnum: {
    id: 'id',
    name: 'name',
    userId: 'userId',
    createdAt: 'createdAt'
  };

  export type GroupScalarFieldEnum = (typeof GroupScalarFieldEnum)[keyof typeof GroupScalarFieldEnum]


  export const FriendGroupScalarFieldEnum: {
    id: 'id',
    groupId: 'groupId',
    friendId: 'friendId'
  };

  export type FriendGroupScalarFieldEnum = (typeof FriendGroupScalarFieldEnum)[keyof typeof FriendGroupScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    accessToken?: StringFilter<"User"> | string
    refreshToken?: StringFilter<"User"> | string
    tokenExpiry?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    emails?: EmailListRelationFilter
    friend?: FriendListRelationFilter
    groups?: GroupListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    tokenExpiry?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    emails?: EmailOrderByRelationAggregateInput
    friend?: FriendOrderByRelationAggregateInput
    groups?: GroupOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    accessToken?: StringFilter<"User"> | string
    refreshToken?: StringFilter<"User"> | string
    tokenExpiry?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    emails?: EmailListRelationFilter
    friend?: FriendListRelationFilter
    groups?: GroupListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    tokenExpiry?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    accessToken?: StringWithAggregatesFilter<"User"> | string
    refreshToken?: StringWithAggregatesFilter<"User"> | string
    tokenExpiry?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type EmailWhereInput = {
    AND?: EmailWhereInput | EmailWhereInput[]
    OR?: EmailWhereInput[]
    NOT?: EmailWhereInput | EmailWhereInput[]
    id?: StringFilter<"Email"> | string
    userId?: StringFilter<"Email"> | string
    gmailMessageId?: StringFilter<"Email"> | string
    subject?: StringNullableFilter<"Email"> | string | null
    senderAddress?: StringFilter<"Email"> | string
    receiverAddress?: StringFilter<"Email"> | string
    content?: StringFilter<"Email"> | string
    html_content?: StringFilter<"Email"> | string
    snippet?: StringNullableFilter<"Email"> | string | null
    receivedAt?: DateTimeNullableFilter<"Email"> | Date | string | null
    isRead?: BoolFilter<"Email"> | boolean
    isNotified?: BoolFilter<"Email"> | boolean
    customLabel?: StringNullableFilter<"Email"> | string | null
    createdAt?: DateTimeFilter<"Email"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type EmailOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    gmailMessageId?: SortOrder
    subject?: SortOrderInput | SortOrder
    senderAddress?: SortOrder
    receiverAddress?: SortOrder
    content?: SortOrder
    html_content?: SortOrder
    snippet?: SortOrderInput | SortOrder
    receivedAt?: SortOrderInput | SortOrder
    isRead?: SortOrder
    isNotified?: SortOrder
    customLabel?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type EmailWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    gmailMessageId?: string
    AND?: EmailWhereInput | EmailWhereInput[]
    OR?: EmailWhereInput[]
    NOT?: EmailWhereInput | EmailWhereInput[]
    userId?: StringFilter<"Email"> | string
    subject?: StringNullableFilter<"Email"> | string | null
    senderAddress?: StringFilter<"Email"> | string
    receiverAddress?: StringFilter<"Email"> | string
    content?: StringFilter<"Email"> | string
    html_content?: StringFilter<"Email"> | string
    snippet?: StringNullableFilter<"Email"> | string | null
    receivedAt?: DateTimeNullableFilter<"Email"> | Date | string | null
    isRead?: BoolFilter<"Email"> | boolean
    isNotified?: BoolFilter<"Email"> | boolean
    customLabel?: StringNullableFilter<"Email"> | string | null
    createdAt?: DateTimeFilter<"Email"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "gmailMessageId">

  export type EmailOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    gmailMessageId?: SortOrder
    subject?: SortOrderInput | SortOrder
    senderAddress?: SortOrder
    receiverAddress?: SortOrder
    content?: SortOrder
    html_content?: SortOrder
    snippet?: SortOrderInput | SortOrder
    receivedAt?: SortOrderInput | SortOrder
    isRead?: SortOrder
    isNotified?: SortOrder
    customLabel?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: EmailCountOrderByAggregateInput
    _max?: EmailMaxOrderByAggregateInput
    _min?: EmailMinOrderByAggregateInput
  }

  export type EmailScalarWhereWithAggregatesInput = {
    AND?: EmailScalarWhereWithAggregatesInput | EmailScalarWhereWithAggregatesInput[]
    OR?: EmailScalarWhereWithAggregatesInput[]
    NOT?: EmailScalarWhereWithAggregatesInput | EmailScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Email"> | string
    userId?: StringWithAggregatesFilter<"Email"> | string
    gmailMessageId?: StringWithAggregatesFilter<"Email"> | string
    subject?: StringNullableWithAggregatesFilter<"Email"> | string | null
    senderAddress?: StringWithAggregatesFilter<"Email"> | string
    receiverAddress?: StringWithAggregatesFilter<"Email"> | string
    content?: StringWithAggregatesFilter<"Email"> | string
    html_content?: StringWithAggregatesFilter<"Email"> | string
    snippet?: StringNullableWithAggregatesFilter<"Email"> | string | null
    receivedAt?: DateTimeNullableWithAggregatesFilter<"Email"> | Date | string | null
    isRead?: BoolWithAggregatesFilter<"Email"> | boolean
    isNotified?: BoolWithAggregatesFilter<"Email"> | boolean
    customLabel?: StringNullableWithAggregatesFilter<"Email"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Email"> | Date | string
  }

  export type FriendWhereInput = {
    AND?: FriendWhereInput | FriendWhereInput[]
    OR?: FriendWhereInput[]
    NOT?: FriendWhereInput | FriendWhereInput[]
    id?: StringFilter<"Friend"> | string
    userId?: StringFilter<"Friend"> | string
    emailAddress?: StringFilter<"Friend"> | string
    name?: StringNullableFilter<"Friend"> | string | null
    createdAt?: DateTimeFilter<"Friend"> | Date | string
    customLabel?: StringNullableFilter<"Friend"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    groups?: FriendGroupListRelationFilter
  }

  export type FriendOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    emailAddress?: SortOrder
    name?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    customLabel?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    groups?: FriendGroupOrderByRelationAggregateInput
  }

  export type FriendWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_emailAddress?: FriendUserIdEmailAddressCompoundUniqueInput
    AND?: FriendWhereInput | FriendWhereInput[]
    OR?: FriendWhereInput[]
    NOT?: FriendWhereInput | FriendWhereInput[]
    userId?: StringFilter<"Friend"> | string
    emailAddress?: StringFilter<"Friend"> | string
    name?: StringNullableFilter<"Friend"> | string | null
    createdAt?: DateTimeFilter<"Friend"> | Date | string
    customLabel?: StringNullableFilter<"Friend"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    groups?: FriendGroupListRelationFilter
  }, "id" | "userId_emailAddress">

  export type FriendOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    emailAddress?: SortOrder
    name?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    customLabel?: SortOrderInput | SortOrder
    _count?: FriendCountOrderByAggregateInput
    _max?: FriendMaxOrderByAggregateInput
    _min?: FriendMinOrderByAggregateInput
  }

  export type FriendScalarWhereWithAggregatesInput = {
    AND?: FriendScalarWhereWithAggregatesInput | FriendScalarWhereWithAggregatesInput[]
    OR?: FriendScalarWhereWithAggregatesInput[]
    NOT?: FriendScalarWhereWithAggregatesInput | FriendScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Friend"> | string
    userId?: StringWithAggregatesFilter<"Friend"> | string
    emailAddress?: StringWithAggregatesFilter<"Friend"> | string
    name?: StringNullableWithAggregatesFilter<"Friend"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Friend"> | Date | string
    customLabel?: StringNullableWithAggregatesFilter<"Friend"> | string | null
  }

  export type GroupWhereInput = {
    AND?: GroupWhereInput | GroupWhereInput[]
    OR?: GroupWhereInput[]
    NOT?: GroupWhereInput | GroupWhereInput[]
    id?: StringFilter<"Group"> | string
    name?: StringFilter<"Group"> | string
    userId?: StringFilter<"Group"> | string
    createdAt?: DateTimeFilter<"Group"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    members?: FriendGroupListRelationFilter
  }

  export type GroupOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    members?: FriendGroupOrderByRelationAggregateInput
  }

  export type GroupWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GroupWhereInput | GroupWhereInput[]
    OR?: GroupWhereInput[]
    NOT?: GroupWhereInput | GroupWhereInput[]
    name?: StringFilter<"Group"> | string
    userId?: StringFilter<"Group"> | string
    createdAt?: DateTimeFilter<"Group"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    members?: FriendGroupListRelationFilter
  }, "id">

  export type GroupOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    _count?: GroupCountOrderByAggregateInput
    _max?: GroupMaxOrderByAggregateInput
    _min?: GroupMinOrderByAggregateInput
  }

  export type GroupScalarWhereWithAggregatesInput = {
    AND?: GroupScalarWhereWithAggregatesInput | GroupScalarWhereWithAggregatesInput[]
    OR?: GroupScalarWhereWithAggregatesInput[]
    NOT?: GroupScalarWhereWithAggregatesInput | GroupScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Group"> | string
    name?: StringWithAggregatesFilter<"Group"> | string
    userId?: StringWithAggregatesFilter<"Group"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Group"> | Date | string
  }

  export type FriendGroupWhereInput = {
    AND?: FriendGroupWhereInput | FriendGroupWhereInput[]
    OR?: FriendGroupWhereInput[]
    NOT?: FriendGroupWhereInput | FriendGroupWhereInput[]
    id?: StringFilter<"FriendGroup"> | string
    groupId?: StringFilter<"FriendGroup"> | string
    friendId?: StringFilter<"FriendGroup"> | string
    group?: XOR<GroupScalarRelationFilter, GroupWhereInput>
    friend?: XOR<FriendScalarRelationFilter, FriendWhereInput>
  }

  export type FriendGroupOrderByWithRelationInput = {
    id?: SortOrder
    groupId?: SortOrder
    friendId?: SortOrder
    group?: GroupOrderByWithRelationInput
    friend?: FriendOrderByWithRelationInput
  }

  export type FriendGroupWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    groupId_friendId?: FriendGroupGroupIdFriendIdCompoundUniqueInput
    AND?: FriendGroupWhereInput | FriendGroupWhereInput[]
    OR?: FriendGroupWhereInput[]
    NOT?: FriendGroupWhereInput | FriendGroupWhereInput[]
    groupId?: StringFilter<"FriendGroup"> | string
    friendId?: StringFilter<"FriendGroup"> | string
    group?: XOR<GroupScalarRelationFilter, GroupWhereInput>
    friend?: XOR<FriendScalarRelationFilter, FriendWhereInput>
  }, "id" | "groupId_friendId">

  export type FriendGroupOrderByWithAggregationInput = {
    id?: SortOrder
    groupId?: SortOrder
    friendId?: SortOrder
    _count?: FriendGroupCountOrderByAggregateInput
    _max?: FriendGroupMaxOrderByAggregateInput
    _min?: FriendGroupMinOrderByAggregateInput
  }

  export type FriendGroupScalarWhereWithAggregatesInput = {
    AND?: FriendGroupScalarWhereWithAggregatesInput | FriendGroupScalarWhereWithAggregatesInput[]
    OR?: FriendGroupScalarWhereWithAggregatesInput[]
    NOT?: FriendGroupScalarWhereWithAggregatesInput | FriendGroupScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FriendGroup"> | string
    groupId?: StringWithAggregatesFilter<"FriendGroup"> | string
    friendId?: StringWithAggregatesFilter<"FriendGroup"> | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    accessToken: string
    refreshToken: string
    tokenExpiry?: Date | string | null
    createdAt?: Date | string
    emails?: EmailCreateNestedManyWithoutUserInput
    friend?: FriendCreateNestedManyWithoutUserInput
    groups?: GroupCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    accessToken: string
    refreshToken: string
    tokenExpiry?: Date | string | null
    createdAt?: Date | string
    emails?: EmailUncheckedCreateNestedManyWithoutUserInput
    friend?: FriendUncheckedCreateNestedManyWithoutUserInput
    groups?: GroupUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: StringFieldUpdateOperationsInput | string
    tokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emails?: EmailUpdateManyWithoutUserNestedInput
    friend?: FriendUpdateManyWithoutUserNestedInput
    groups?: GroupUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: StringFieldUpdateOperationsInput | string
    tokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emails?: EmailUncheckedUpdateManyWithoutUserNestedInput
    friend?: FriendUncheckedUpdateManyWithoutUserNestedInput
    groups?: GroupUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    accessToken: string
    refreshToken: string
    tokenExpiry?: Date | string | null
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: StringFieldUpdateOperationsInput | string
    tokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: StringFieldUpdateOperationsInput | string
    tokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailCreateInput = {
    id?: string
    gmailMessageId: string
    subject?: string | null
    senderAddress: string
    receiverAddress: string
    content: string
    html_content: string
    snippet?: string | null
    receivedAt?: Date | string | null
    isRead?: boolean
    isNotified?: boolean
    customLabel?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutEmailsInput
  }

  export type EmailUncheckedCreateInput = {
    id?: string
    userId: string
    gmailMessageId: string
    subject?: string | null
    senderAddress: string
    receiverAddress: string
    content: string
    html_content: string
    snippet?: string | null
    receivedAt?: Date | string | null
    isRead?: boolean
    isNotified?: boolean
    customLabel?: string | null
    createdAt?: Date | string
  }

  export type EmailUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    gmailMessageId?: StringFieldUpdateOperationsInput | string
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    senderAddress?: StringFieldUpdateOperationsInput | string
    receiverAddress?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    html_content?: StringFieldUpdateOperationsInput | string
    snippet?: NullableStringFieldUpdateOperationsInput | string | null
    receivedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isRead?: BoolFieldUpdateOperationsInput | boolean
    isNotified?: BoolFieldUpdateOperationsInput | boolean
    customLabel?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutEmailsNestedInput
  }

  export type EmailUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    gmailMessageId?: StringFieldUpdateOperationsInput | string
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    senderAddress?: StringFieldUpdateOperationsInput | string
    receiverAddress?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    html_content?: StringFieldUpdateOperationsInput | string
    snippet?: NullableStringFieldUpdateOperationsInput | string | null
    receivedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isRead?: BoolFieldUpdateOperationsInput | boolean
    isNotified?: BoolFieldUpdateOperationsInput | boolean
    customLabel?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailCreateManyInput = {
    id?: string
    userId: string
    gmailMessageId: string
    subject?: string | null
    senderAddress: string
    receiverAddress: string
    content: string
    html_content: string
    snippet?: string | null
    receivedAt?: Date | string | null
    isRead?: boolean
    isNotified?: boolean
    customLabel?: string | null
    createdAt?: Date | string
  }

  export type EmailUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    gmailMessageId?: StringFieldUpdateOperationsInput | string
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    senderAddress?: StringFieldUpdateOperationsInput | string
    receiverAddress?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    html_content?: StringFieldUpdateOperationsInput | string
    snippet?: NullableStringFieldUpdateOperationsInput | string | null
    receivedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isRead?: BoolFieldUpdateOperationsInput | boolean
    isNotified?: BoolFieldUpdateOperationsInput | boolean
    customLabel?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    gmailMessageId?: StringFieldUpdateOperationsInput | string
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    senderAddress?: StringFieldUpdateOperationsInput | string
    receiverAddress?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    html_content?: StringFieldUpdateOperationsInput | string
    snippet?: NullableStringFieldUpdateOperationsInput | string | null
    receivedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isRead?: BoolFieldUpdateOperationsInput | boolean
    isNotified?: BoolFieldUpdateOperationsInput | boolean
    customLabel?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FriendCreateInput = {
    id?: string
    emailAddress: string
    name?: string | null
    createdAt?: Date | string
    customLabel?: string | null
    user: UserCreateNestedOneWithoutFriendInput
    groups?: FriendGroupCreateNestedManyWithoutFriendInput
  }

  export type FriendUncheckedCreateInput = {
    id?: string
    userId: string
    emailAddress: string
    name?: string | null
    createdAt?: Date | string
    customLabel?: string | null
    groups?: FriendGroupUncheckedCreateNestedManyWithoutFriendInput
  }

  export type FriendUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    emailAddress?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customLabel?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutFriendNestedInput
    groups?: FriendGroupUpdateManyWithoutFriendNestedInput
  }

  export type FriendUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    emailAddress?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customLabel?: NullableStringFieldUpdateOperationsInput | string | null
    groups?: FriendGroupUncheckedUpdateManyWithoutFriendNestedInput
  }

  export type FriendCreateManyInput = {
    id?: string
    userId: string
    emailAddress: string
    name?: string | null
    createdAt?: Date | string
    customLabel?: string | null
  }

  export type FriendUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    emailAddress?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customLabel?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FriendUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    emailAddress?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customLabel?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GroupCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutGroupsInput
    members?: FriendGroupCreateNestedManyWithoutGroupInput
  }

  export type GroupUncheckedCreateInput = {
    id?: string
    name: string
    userId: string
    createdAt?: Date | string
    members?: FriendGroupUncheckedCreateNestedManyWithoutGroupInput
  }

  export type GroupUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutGroupsNestedInput
    members?: FriendGroupUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: FriendGroupUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type GroupCreateManyInput = {
    id?: string
    name: string
    userId: string
    createdAt?: Date | string
  }

  export type GroupUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FriendGroupCreateInput = {
    id?: string
    group: GroupCreateNestedOneWithoutMembersInput
    friend: FriendCreateNestedOneWithoutGroupsInput
  }

  export type FriendGroupUncheckedCreateInput = {
    id?: string
    groupId: string
    friendId: string
  }

  export type FriendGroupUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    group?: GroupUpdateOneRequiredWithoutMembersNestedInput
    friend?: FriendUpdateOneRequiredWithoutGroupsNestedInput
  }

  export type FriendGroupUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
    friendId?: StringFieldUpdateOperationsInput | string
  }

  export type FriendGroupCreateManyInput = {
    id?: string
    groupId: string
    friendId: string
  }

  export type FriendGroupUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type FriendGroupUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
    friendId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type EmailListRelationFilter = {
    every?: EmailWhereInput
    some?: EmailWhereInput
    none?: EmailWhereInput
  }

  export type FriendListRelationFilter = {
    every?: FriendWhereInput
    some?: FriendWhereInput
    none?: FriendWhereInput
  }

  export type GroupListRelationFilter = {
    every?: GroupWhereInput
    some?: GroupWhereInput
    none?: GroupWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type EmailOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FriendOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GroupOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    tokenExpiry?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    tokenExpiry?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    tokenExpiry?: SortOrder
    createdAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type EmailCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    gmailMessageId?: SortOrder
    subject?: SortOrder
    senderAddress?: SortOrder
    receiverAddress?: SortOrder
    content?: SortOrder
    html_content?: SortOrder
    snippet?: SortOrder
    receivedAt?: SortOrder
    isRead?: SortOrder
    isNotified?: SortOrder
    customLabel?: SortOrder
    createdAt?: SortOrder
  }

  export type EmailMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    gmailMessageId?: SortOrder
    subject?: SortOrder
    senderAddress?: SortOrder
    receiverAddress?: SortOrder
    content?: SortOrder
    html_content?: SortOrder
    snippet?: SortOrder
    receivedAt?: SortOrder
    isRead?: SortOrder
    isNotified?: SortOrder
    customLabel?: SortOrder
    createdAt?: SortOrder
  }

  export type EmailMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    gmailMessageId?: SortOrder
    subject?: SortOrder
    senderAddress?: SortOrder
    receiverAddress?: SortOrder
    content?: SortOrder
    html_content?: SortOrder
    snippet?: SortOrder
    receivedAt?: SortOrder
    isRead?: SortOrder
    isNotified?: SortOrder
    customLabel?: SortOrder
    createdAt?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type FriendGroupListRelationFilter = {
    every?: FriendGroupWhereInput
    some?: FriendGroupWhereInput
    none?: FriendGroupWhereInput
  }

  export type FriendGroupOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FriendUserIdEmailAddressCompoundUniqueInput = {
    userId: string
    emailAddress: string
  }

  export type FriendCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    emailAddress?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    customLabel?: SortOrder
  }

  export type FriendMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    emailAddress?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    customLabel?: SortOrder
  }

  export type FriendMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    emailAddress?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    customLabel?: SortOrder
  }

  export type GroupCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type GroupMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type GroupMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type GroupScalarRelationFilter = {
    is?: GroupWhereInput
    isNot?: GroupWhereInput
  }

  export type FriendScalarRelationFilter = {
    is?: FriendWhereInput
    isNot?: FriendWhereInput
  }

  export type FriendGroupGroupIdFriendIdCompoundUniqueInput = {
    groupId: string
    friendId: string
  }

  export type FriendGroupCountOrderByAggregateInput = {
    id?: SortOrder
    groupId?: SortOrder
    friendId?: SortOrder
  }

  export type FriendGroupMaxOrderByAggregateInput = {
    id?: SortOrder
    groupId?: SortOrder
    friendId?: SortOrder
  }

  export type FriendGroupMinOrderByAggregateInput = {
    id?: SortOrder
    groupId?: SortOrder
    friendId?: SortOrder
  }

  export type EmailCreateNestedManyWithoutUserInput = {
    create?: XOR<EmailCreateWithoutUserInput, EmailUncheckedCreateWithoutUserInput> | EmailCreateWithoutUserInput[] | EmailUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EmailCreateOrConnectWithoutUserInput | EmailCreateOrConnectWithoutUserInput[]
    createMany?: EmailCreateManyUserInputEnvelope
    connect?: EmailWhereUniqueInput | EmailWhereUniqueInput[]
  }

  export type FriendCreateNestedManyWithoutUserInput = {
    create?: XOR<FriendCreateWithoutUserInput, FriendUncheckedCreateWithoutUserInput> | FriendCreateWithoutUserInput[] | FriendUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FriendCreateOrConnectWithoutUserInput | FriendCreateOrConnectWithoutUserInput[]
    createMany?: FriendCreateManyUserInputEnvelope
    connect?: FriendWhereUniqueInput | FriendWhereUniqueInput[]
  }

  export type GroupCreateNestedManyWithoutUserInput = {
    create?: XOR<GroupCreateWithoutUserInput, GroupUncheckedCreateWithoutUserInput> | GroupCreateWithoutUserInput[] | GroupUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GroupCreateOrConnectWithoutUserInput | GroupCreateOrConnectWithoutUserInput[]
    createMany?: GroupCreateManyUserInputEnvelope
    connect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
  }

  export type EmailUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<EmailCreateWithoutUserInput, EmailUncheckedCreateWithoutUserInput> | EmailCreateWithoutUserInput[] | EmailUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EmailCreateOrConnectWithoutUserInput | EmailCreateOrConnectWithoutUserInput[]
    createMany?: EmailCreateManyUserInputEnvelope
    connect?: EmailWhereUniqueInput | EmailWhereUniqueInput[]
  }

  export type FriendUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<FriendCreateWithoutUserInput, FriendUncheckedCreateWithoutUserInput> | FriendCreateWithoutUserInput[] | FriendUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FriendCreateOrConnectWithoutUserInput | FriendCreateOrConnectWithoutUserInput[]
    createMany?: FriendCreateManyUserInputEnvelope
    connect?: FriendWhereUniqueInput | FriendWhereUniqueInput[]
  }

  export type GroupUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<GroupCreateWithoutUserInput, GroupUncheckedCreateWithoutUserInput> | GroupCreateWithoutUserInput[] | GroupUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GroupCreateOrConnectWithoutUserInput | GroupCreateOrConnectWithoutUserInput[]
    createMany?: GroupCreateManyUserInputEnvelope
    connect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EmailUpdateManyWithoutUserNestedInput = {
    create?: XOR<EmailCreateWithoutUserInput, EmailUncheckedCreateWithoutUserInput> | EmailCreateWithoutUserInput[] | EmailUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EmailCreateOrConnectWithoutUserInput | EmailCreateOrConnectWithoutUserInput[]
    upsert?: EmailUpsertWithWhereUniqueWithoutUserInput | EmailUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EmailCreateManyUserInputEnvelope
    set?: EmailWhereUniqueInput | EmailWhereUniqueInput[]
    disconnect?: EmailWhereUniqueInput | EmailWhereUniqueInput[]
    delete?: EmailWhereUniqueInput | EmailWhereUniqueInput[]
    connect?: EmailWhereUniqueInput | EmailWhereUniqueInput[]
    update?: EmailUpdateWithWhereUniqueWithoutUserInput | EmailUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EmailUpdateManyWithWhereWithoutUserInput | EmailUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EmailScalarWhereInput | EmailScalarWhereInput[]
  }

  export type FriendUpdateManyWithoutUserNestedInput = {
    create?: XOR<FriendCreateWithoutUserInput, FriendUncheckedCreateWithoutUserInput> | FriendCreateWithoutUserInput[] | FriendUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FriendCreateOrConnectWithoutUserInput | FriendCreateOrConnectWithoutUserInput[]
    upsert?: FriendUpsertWithWhereUniqueWithoutUserInput | FriendUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FriendCreateManyUserInputEnvelope
    set?: FriendWhereUniqueInput | FriendWhereUniqueInput[]
    disconnect?: FriendWhereUniqueInput | FriendWhereUniqueInput[]
    delete?: FriendWhereUniqueInput | FriendWhereUniqueInput[]
    connect?: FriendWhereUniqueInput | FriendWhereUniqueInput[]
    update?: FriendUpdateWithWhereUniqueWithoutUserInput | FriendUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FriendUpdateManyWithWhereWithoutUserInput | FriendUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FriendScalarWhereInput | FriendScalarWhereInput[]
  }

  export type GroupUpdateManyWithoutUserNestedInput = {
    create?: XOR<GroupCreateWithoutUserInput, GroupUncheckedCreateWithoutUserInput> | GroupCreateWithoutUserInput[] | GroupUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GroupCreateOrConnectWithoutUserInput | GroupCreateOrConnectWithoutUserInput[]
    upsert?: GroupUpsertWithWhereUniqueWithoutUserInput | GroupUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: GroupCreateManyUserInputEnvelope
    set?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    disconnect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    delete?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    connect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    update?: GroupUpdateWithWhereUniqueWithoutUserInput | GroupUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GroupUpdateManyWithWhereWithoutUserInput | GroupUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GroupScalarWhereInput | GroupScalarWhereInput[]
  }

  export type EmailUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<EmailCreateWithoutUserInput, EmailUncheckedCreateWithoutUserInput> | EmailCreateWithoutUserInput[] | EmailUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EmailCreateOrConnectWithoutUserInput | EmailCreateOrConnectWithoutUserInput[]
    upsert?: EmailUpsertWithWhereUniqueWithoutUserInput | EmailUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EmailCreateManyUserInputEnvelope
    set?: EmailWhereUniqueInput | EmailWhereUniqueInput[]
    disconnect?: EmailWhereUniqueInput | EmailWhereUniqueInput[]
    delete?: EmailWhereUniqueInput | EmailWhereUniqueInput[]
    connect?: EmailWhereUniqueInput | EmailWhereUniqueInput[]
    update?: EmailUpdateWithWhereUniqueWithoutUserInput | EmailUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EmailUpdateManyWithWhereWithoutUserInput | EmailUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EmailScalarWhereInput | EmailScalarWhereInput[]
  }

  export type FriendUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<FriendCreateWithoutUserInput, FriendUncheckedCreateWithoutUserInput> | FriendCreateWithoutUserInput[] | FriendUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FriendCreateOrConnectWithoutUserInput | FriendCreateOrConnectWithoutUserInput[]
    upsert?: FriendUpsertWithWhereUniqueWithoutUserInput | FriendUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FriendCreateManyUserInputEnvelope
    set?: FriendWhereUniqueInput | FriendWhereUniqueInput[]
    disconnect?: FriendWhereUniqueInput | FriendWhereUniqueInput[]
    delete?: FriendWhereUniqueInput | FriendWhereUniqueInput[]
    connect?: FriendWhereUniqueInput | FriendWhereUniqueInput[]
    update?: FriendUpdateWithWhereUniqueWithoutUserInput | FriendUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FriendUpdateManyWithWhereWithoutUserInput | FriendUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FriendScalarWhereInput | FriendScalarWhereInput[]
  }

  export type GroupUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<GroupCreateWithoutUserInput, GroupUncheckedCreateWithoutUserInput> | GroupCreateWithoutUserInput[] | GroupUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GroupCreateOrConnectWithoutUserInput | GroupCreateOrConnectWithoutUserInput[]
    upsert?: GroupUpsertWithWhereUniqueWithoutUserInput | GroupUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: GroupCreateManyUserInputEnvelope
    set?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    disconnect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    delete?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    connect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    update?: GroupUpdateWithWhereUniqueWithoutUserInput | GroupUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GroupUpdateManyWithWhereWithoutUserInput | GroupUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GroupScalarWhereInput | GroupScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutEmailsInput = {
    create?: XOR<UserCreateWithoutEmailsInput, UserUncheckedCreateWithoutEmailsInput>
    connectOrCreate?: UserCreateOrConnectWithoutEmailsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutEmailsNestedInput = {
    create?: XOR<UserCreateWithoutEmailsInput, UserUncheckedCreateWithoutEmailsInput>
    connectOrCreate?: UserCreateOrConnectWithoutEmailsInput
    upsert?: UserUpsertWithoutEmailsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutEmailsInput, UserUpdateWithoutEmailsInput>, UserUncheckedUpdateWithoutEmailsInput>
  }

  export type UserCreateNestedOneWithoutFriendInput = {
    create?: XOR<UserCreateWithoutFriendInput, UserUncheckedCreateWithoutFriendInput>
    connectOrCreate?: UserCreateOrConnectWithoutFriendInput
    connect?: UserWhereUniqueInput
  }

  export type FriendGroupCreateNestedManyWithoutFriendInput = {
    create?: XOR<FriendGroupCreateWithoutFriendInput, FriendGroupUncheckedCreateWithoutFriendInput> | FriendGroupCreateWithoutFriendInput[] | FriendGroupUncheckedCreateWithoutFriendInput[]
    connectOrCreate?: FriendGroupCreateOrConnectWithoutFriendInput | FriendGroupCreateOrConnectWithoutFriendInput[]
    createMany?: FriendGroupCreateManyFriendInputEnvelope
    connect?: FriendGroupWhereUniqueInput | FriendGroupWhereUniqueInput[]
  }

  export type FriendGroupUncheckedCreateNestedManyWithoutFriendInput = {
    create?: XOR<FriendGroupCreateWithoutFriendInput, FriendGroupUncheckedCreateWithoutFriendInput> | FriendGroupCreateWithoutFriendInput[] | FriendGroupUncheckedCreateWithoutFriendInput[]
    connectOrCreate?: FriendGroupCreateOrConnectWithoutFriendInput | FriendGroupCreateOrConnectWithoutFriendInput[]
    createMany?: FriendGroupCreateManyFriendInputEnvelope
    connect?: FriendGroupWhereUniqueInput | FriendGroupWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutFriendNestedInput = {
    create?: XOR<UserCreateWithoutFriendInput, UserUncheckedCreateWithoutFriendInput>
    connectOrCreate?: UserCreateOrConnectWithoutFriendInput
    upsert?: UserUpsertWithoutFriendInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFriendInput, UserUpdateWithoutFriendInput>, UserUncheckedUpdateWithoutFriendInput>
  }

  export type FriendGroupUpdateManyWithoutFriendNestedInput = {
    create?: XOR<FriendGroupCreateWithoutFriendInput, FriendGroupUncheckedCreateWithoutFriendInput> | FriendGroupCreateWithoutFriendInput[] | FriendGroupUncheckedCreateWithoutFriendInput[]
    connectOrCreate?: FriendGroupCreateOrConnectWithoutFriendInput | FriendGroupCreateOrConnectWithoutFriendInput[]
    upsert?: FriendGroupUpsertWithWhereUniqueWithoutFriendInput | FriendGroupUpsertWithWhereUniqueWithoutFriendInput[]
    createMany?: FriendGroupCreateManyFriendInputEnvelope
    set?: FriendGroupWhereUniqueInput | FriendGroupWhereUniqueInput[]
    disconnect?: FriendGroupWhereUniqueInput | FriendGroupWhereUniqueInput[]
    delete?: FriendGroupWhereUniqueInput | FriendGroupWhereUniqueInput[]
    connect?: FriendGroupWhereUniqueInput | FriendGroupWhereUniqueInput[]
    update?: FriendGroupUpdateWithWhereUniqueWithoutFriendInput | FriendGroupUpdateWithWhereUniqueWithoutFriendInput[]
    updateMany?: FriendGroupUpdateManyWithWhereWithoutFriendInput | FriendGroupUpdateManyWithWhereWithoutFriendInput[]
    deleteMany?: FriendGroupScalarWhereInput | FriendGroupScalarWhereInput[]
  }

  export type FriendGroupUncheckedUpdateManyWithoutFriendNestedInput = {
    create?: XOR<FriendGroupCreateWithoutFriendInput, FriendGroupUncheckedCreateWithoutFriendInput> | FriendGroupCreateWithoutFriendInput[] | FriendGroupUncheckedCreateWithoutFriendInput[]
    connectOrCreate?: FriendGroupCreateOrConnectWithoutFriendInput | FriendGroupCreateOrConnectWithoutFriendInput[]
    upsert?: FriendGroupUpsertWithWhereUniqueWithoutFriendInput | FriendGroupUpsertWithWhereUniqueWithoutFriendInput[]
    createMany?: FriendGroupCreateManyFriendInputEnvelope
    set?: FriendGroupWhereUniqueInput | FriendGroupWhereUniqueInput[]
    disconnect?: FriendGroupWhereUniqueInput | FriendGroupWhereUniqueInput[]
    delete?: FriendGroupWhereUniqueInput | FriendGroupWhereUniqueInput[]
    connect?: FriendGroupWhereUniqueInput | FriendGroupWhereUniqueInput[]
    update?: FriendGroupUpdateWithWhereUniqueWithoutFriendInput | FriendGroupUpdateWithWhereUniqueWithoutFriendInput[]
    updateMany?: FriendGroupUpdateManyWithWhereWithoutFriendInput | FriendGroupUpdateManyWithWhereWithoutFriendInput[]
    deleteMany?: FriendGroupScalarWhereInput | FriendGroupScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutGroupsInput = {
    create?: XOR<UserCreateWithoutGroupsInput, UserUncheckedCreateWithoutGroupsInput>
    connectOrCreate?: UserCreateOrConnectWithoutGroupsInput
    connect?: UserWhereUniqueInput
  }

  export type FriendGroupCreateNestedManyWithoutGroupInput = {
    create?: XOR<FriendGroupCreateWithoutGroupInput, FriendGroupUncheckedCreateWithoutGroupInput> | FriendGroupCreateWithoutGroupInput[] | FriendGroupUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: FriendGroupCreateOrConnectWithoutGroupInput | FriendGroupCreateOrConnectWithoutGroupInput[]
    createMany?: FriendGroupCreateManyGroupInputEnvelope
    connect?: FriendGroupWhereUniqueInput | FriendGroupWhereUniqueInput[]
  }

  export type FriendGroupUncheckedCreateNestedManyWithoutGroupInput = {
    create?: XOR<FriendGroupCreateWithoutGroupInput, FriendGroupUncheckedCreateWithoutGroupInput> | FriendGroupCreateWithoutGroupInput[] | FriendGroupUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: FriendGroupCreateOrConnectWithoutGroupInput | FriendGroupCreateOrConnectWithoutGroupInput[]
    createMany?: FriendGroupCreateManyGroupInputEnvelope
    connect?: FriendGroupWhereUniqueInput | FriendGroupWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutGroupsNestedInput = {
    create?: XOR<UserCreateWithoutGroupsInput, UserUncheckedCreateWithoutGroupsInput>
    connectOrCreate?: UserCreateOrConnectWithoutGroupsInput
    upsert?: UserUpsertWithoutGroupsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutGroupsInput, UserUpdateWithoutGroupsInput>, UserUncheckedUpdateWithoutGroupsInput>
  }

  export type FriendGroupUpdateManyWithoutGroupNestedInput = {
    create?: XOR<FriendGroupCreateWithoutGroupInput, FriendGroupUncheckedCreateWithoutGroupInput> | FriendGroupCreateWithoutGroupInput[] | FriendGroupUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: FriendGroupCreateOrConnectWithoutGroupInput | FriendGroupCreateOrConnectWithoutGroupInput[]
    upsert?: FriendGroupUpsertWithWhereUniqueWithoutGroupInput | FriendGroupUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: FriendGroupCreateManyGroupInputEnvelope
    set?: FriendGroupWhereUniqueInput | FriendGroupWhereUniqueInput[]
    disconnect?: FriendGroupWhereUniqueInput | FriendGroupWhereUniqueInput[]
    delete?: FriendGroupWhereUniqueInput | FriendGroupWhereUniqueInput[]
    connect?: FriendGroupWhereUniqueInput | FriendGroupWhereUniqueInput[]
    update?: FriendGroupUpdateWithWhereUniqueWithoutGroupInput | FriendGroupUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: FriendGroupUpdateManyWithWhereWithoutGroupInput | FriendGroupUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: FriendGroupScalarWhereInput | FriendGroupScalarWhereInput[]
  }

  export type FriendGroupUncheckedUpdateManyWithoutGroupNestedInput = {
    create?: XOR<FriendGroupCreateWithoutGroupInput, FriendGroupUncheckedCreateWithoutGroupInput> | FriendGroupCreateWithoutGroupInput[] | FriendGroupUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: FriendGroupCreateOrConnectWithoutGroupInput | FriendGroupCreateOrConnectWithoutGroupInput[]
    upsert?: FriendGroupUpsertWithWhereUniqueWithoutGroupInput | FriendGroupUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: FriendGroupCreateManyGroupInputEnvelope
    set?: FriendGroupWhereUniqueInput | FriendGroupWhereUniqueInput[]
    disconnect?: FriendGroupWhereUniqueInput | FriendGroupWhereUniqueInput[]
    delete?: FriendGroupWhereUniqueInput | FriendGroupWhereUniqueInput[]
    connect?: FriendGroupWhereUniqueInput | FriendGroupWhereUniqueInput[]
    update?: FriendGroupUpdateWithWhereUniqueWithoutGroupInput | FriendGroupUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: FriendGroupUpdateManyWithWhereWithoutGroupInput | FriendGroupUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: FriendGroupScalarWhereInput | FriendGroupScalarWhereInput[]
  }

  export type GroupCreateNestedOneWithoutMembersInput = {
    create?: XOR<GroupCreateWithoutMembersInput, GroupUncheckedCreateWithoutMembersInput>
    connectOrCreate?: GroupCreateOrConnectWithoutMembersInput
    connect?: GroupWhereUniqueInput
  }

  export type FriendCreateNestedOneWithoutGroupsInput = {
    create?: XOR<FriendCreateWithoutGroupsInput, FriendUncheckedCreateWithoutGroupsInput>
    connectOrCreate?: FriendCreateOrConnectWithoutGroupsInput
    connect?: FriendWhereUniqueInput
  }

  export type GroupUpdateOneRequiredWithoutMembersNestedInput = {
    create?: XOR<GroupCreateWithoutMembersInput, GroupUncheckedCreateWithoutMembersInput>
    connectOrCreate?: GroupCreateOrConnectWithoutMembersInput
    upsert?: GroupUpsertWithoutMembersInput
    connect?: GroupWhereUniqueInput
    update?: XOR<XOR<GroupUpdateToOneWithWhereWithoutMembersInput, GroupUpdateWithoutMembersInput>, GroupUncheckedUpdateWithoutMembersInput>
  }

  export type FriendUpdateOneRequiredWithoutGroupsNestedInput = {
    create?: XOR<FriendCreateWithoutGroupsInput, FriendUncheckedCreateWithoutGroupsInput>
    connectOrCreate?: FriendCreateOrConnectWithoutGroupsInput
    upsert?: FriendUpsertWithoutGroupsInput
    connect?: FriendWhereUniqueInput
    update?: XOR<XOR<FriendUpdateToOneWithWhereWithoutGroupsInput, FriendUpdateWithoutGroupsInput>, FriendUncheckedUpdateWithoutGroupsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EmailCreateWithoutUserInput = {
    id?: string
    gmailMessageId: string
    subject?: string | null
    senderAddress: string
    receiverAddress: string
    content: string
    html_content: string
    snippet?: string | null
    receivedAt?: Date | string | null
    isRead?: boolean
    isNotified?: boolean
    customLabel?: string | null
    createdAt?: Date | string
  }

  export type EmailUncheckedCreateWithoutUserInput = {
    id?: string
    gmailMessageId: string
    subject?: string | null
    senderAddress: string
    receiverAddress: string
    content: string
    html_content: string
    snippet?: string | null
    receivedAt?: Date | string | null
    isRead?: boolean
    isNotified?: boolean
    customLabel?: string | null
    createdAt?: Date | string
  }

  export type EmailCreateOrConnectWithoutUserInput = {
    where: EmailWhereUniqueInput
    create: XOR<EmailCreateWithoutUserInput, EmailUncheckedCreateWithoutUserInput>
  }

  export type EmailCreateManyUserInputEnvelope = {
    data: EmailCreateManyUserInput | EmailCreateManyUserInput[]
  }

  export type FriendCreateWithoutUserInput = {
    id?: string
    emailAddress: string
    name?: string | null
    createdAt?: Date | string
    customLabel?: string | null
    groups?: FriendGroupCreateNestedManyWithoutFriendInput
  }

  export type FriendUncheckedCreateWithoutUserInput = {
    id?: string
    emailAddress: string
    name?: string | null
    createdAt?: Date | string
    customLabel?: string | null
    groups?: FriendGroupUncheckedCreateNestedManyWithoutFriendInput
  }

  export type FriendCreateOrConnectWithoutUserInput = {
    where: FriendWhereUniqueInput
    create: XOR<FriendCreateWithoutUserInput, FriendUncheckedCreateWithoutUserInput>
  }

  export type FriendCreateManyUserInputEnvelope = {
    data: FriendCreateManyUserInput | FriendCreateManyUserInput[]
  }

  export type GroupCreateWithoutUserInput = {
    id?: string
    name: string
    createdAt?: Date | string
    members?: FriendGroupCreateNestedManyWithoutGroupInput
  }

  export type GroupUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    createdAt?: Date | string
    members?: FriendGroupUncheckedCreateNestedManyWithoutGroupInput
  }

  export type GroupCreateOrConnectWithoutUserInput = {
    where: GroupWhereUniqueInput
    create: XOR<GroupCreateWithoutUserInput, GroupUncheckedCreateWithoutUserInput>
  }

  export type GroupCreateManyUserInputEnvelope = {
    data: GroupCreateManyUserInput | GroupCreateManyUserInput[]
  }

  export type EmailUpsertWithWhereUniqueWithoutUserInput = {
    where: EmailWhereUniqueInput
    update: XOR<EmailUpdateWithoutUserInput, EmailUncheckedUpdateWithoutUserInput>
    create: XOR<EmailCreateWithoutUserInput, EmailUncheckedCreateWithoutUserInput>
  }

  export type EmailUpdateWithWhereUniqueWithoutUserInput = {
    where: EmailWhereUniqueInput
    data: XOR<EmailUpdateWithoutUserInput, EmailUncheckedUpdateWithoutUserInput>
  }

  export type EmailUpdateManyWithWhereWithoutUserInput = {
    where: EmailScalarWhereInput
    data: XOR<EmailUpdateManyMutationInput, EmailUncheckedUpdateManyWithoutUserInput>
  }

  export type EmailScalarWhereInput = {
    AND?: EmailScalarWhereInput | EmailScalarWhereInput[]
    OR?: EmailScalarWhereInput[]
    NOT?: EmailScalarWhereInput | EmailScalarWhereInput[]
    id?: StringFilter<"Email"> | string
    userId?: StringFilter<"Email"> | string
    gmailMessageId?: StringFilter<"Email"> | string
    subject?: StringNullableFilter<"Email"> | string | null
    senderAddress?: StringFilter<"Email"> | string
    receiverAddress?: StringFilter<"Email"> | string
    content?: StringFilter<"Email"> | string
    html_content?: StringFilter<"Email"> | string
    snippet?: StringNullableFilter<"Email"> | string | null
    receivedAt?: DateTimeNullableFilter<"Email"> | Date | string | null
    isRead?: BoolFilter<"Email"> | boolean
    isNotified?: BoolFilter<"Email"> | boolean
    customLabel?: StringNullableFilter<"Email"> | string | null
    createdAt?: DateTimeFilter<"Email"> | Date | string
  }

  export type FriendUpsertWithWhereUniqueWithoutUserInput = {
    where: FriendWhereUniqueInput
    update: XOR<FriendUpdateWithoutUserInput, FriendUncheckedUpdateWithoutUserInput>
    create: XOR<FriendCreateWithoutUserInput, FriendUncheckedCreateWithoutUserInput>
  }

  export type FriendUpdateWithWhereUniqueWithoutUserInput = {
    where: FriendWhereUniqueInput
    data: XOR<FriendUpdateWithoutUserInput, FriendUncheckedUpdateWithoutUserInput>
  }

  export type FriendUpdateManyWithWhereWithoutUserInput = {
    where: FriendScalarWhereInput
    data: XOR<FriendUpdateManyMutationInput, FriendUncheckedUpdateManyWithoutUserInput>
  }

  export type FriendScalarWhereInput = {
    AND?: FriendScalarWhereInput | FriendScalarWhereInput[]
    OR?: FriendScalarWhereInput[]
    NOT?: FriendScalarWhereInput | FriendScalarWhereInput[]
    id?: StringFilter<"Friend"> | string
    userId?: StringFilter<"Friend"> | string
    emailAddress?: StringFilter<"Friend"> | string
    name?: StringNullableFilter<"Friend"> | string | null
    createdAt?: DateTimeFilter<"Friend"> | Date | string
    customLabel?: StringNullableFilter<"Friend"> | string | null
  }

  export type GroupUpsertWithWhereUniqueWithoutUserInput = {
    where: GroupWhereUniqueInput
    update: XOR<GroupUpdateWithoutUserInput, GroupUncheckedUpdateWithoutUserInput>
    create: XOR<GroupCreateWithoutUserInput, GroupUncheckedCreateWithoutUserInput>
  }

  export type GroupUpdateWithWhereUniqueWithoutUserInput = {
    where: GroupWhereUniqueInput
    data: XOR<GroupUpdateWithoutUserInput, GroupUncheckedUpdateWithoutUserInput>
  }

  export type GroupUpdateManyWithWhereWithoutUserInput = {
    where: GroupScalarWhereInput
    data: XOR<GroupUpdateManyMutationInput, GroupUncheckedUpdateManyWithoutUserInput>
  }

  export type GroupScalarWhereInput = {
    AND?: GroupScalarWhereInput | GroupScalarWhereInput[]
    OR?: GroupScalarWhereInput[]
    NOT?: GroupScalarWhereInput | GroupScalarWhereInput[]
    id?: StringFilter<"Group"> | string
    name?: StringFilter<"Group"> | string
    userId?: StringFilter<"Group"> | string
    createdAt?: DateTimeFilter<"Group"> | Date | string
  }

  export type UserCreateWithoutEmailsInput = {
    id?: string
    email: string
    accessToken: string
    refreshToken: string
    tokenExpiry?: Date | string | null
    createdAt?: Date | string
    friend?: FriendCreateNestedManyWithoutUserInput
    groups?: GroupCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutEmailsInput = {
    id?: string
    email: string
    accessToken: string
    refreshToken: string
    tokenExpiry?: Date | string | null
    createdAt?: Date | string
    friend?: FriendUncheckedCreateNestedManyWithoutUserInput
    groups?: GroupUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutEmailsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEmailsInput, UserUncheckedCreateWithoutEmailsInput>
  }

  export type UserUpsertWithoutEmailsInput = {
    update: XOR<UserUpdateWithoutEmailsInput, UserUncheckedUpdateWithoutEmailsInput>
    create: XOR<UserCreateWithoutEmailsInput, UserUncheckedCreateWithoutEmailsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutEmailsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutEmailsInput, UserUncheckedUpdateWithoutEmailsInput>
  }

  export type UserUpdateWithoutEmailsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: StringFieldUpdateOperationsInput | string
    tokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    friend?: FriendUpdateManyWithoutUserNestedInput
    groups?: GroupUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutEmailsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: StringFieldUpdateOperationsInput | string
    tokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    friend?: FriendUncheckedUpdateManyWithoutUserNestedInput
    groups?: GroupUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutFriendInput = {
    id?: string
    email: string
    accessToken: string
    refreshToken: string
    tokenExpiry?: Date | string | null
    createdAt?: Date | string
    emails?: EmailCreateNestedManyWithoutUserInput
    groups?: GroupCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFriendInput = {
    id?: string
    email: string
    accessToken: string
    refreshToken: string
    tokenExpiry?: Date | string | null
    createdAt?: Date | string
    emails?: EmailUncheckedCreateNestedManyWithoutUserInput
    groups?: GroupUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFriendInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFriendInput, UserUncheckedCreateWithoutFriendInput>
  }

  export type FriendGroupCreateWithoutFriendInput = {
    id?: string
    group: GroupCreateNestedOneWithoutMembersInput
  }

  export type FriendGroupUncheckedCreateWithoutFriendInput = {
    id?: string
    groupId: string
  }

  export type FriendGroupCreateOrConnectWithoutFriendInput = {
    where: FriendGroupWhereUniqueInput
    create: XOR<FriendGroupCreateWithoutFriendInput, FriendGroupUncheckedCreateWithoutFriendInput>
  }

  export type FriendGroupCreateManyFriendInputEnvelope = {
    data: FriendGroupCreateManyFriendInput | FriendGroupCreateManyFriendInput[]
  }

  export type UserUpsertWithoutFriendInput = {
    update: XOR<UserUpdateWithoutFriendInput, UserUncheckedUpdateWithoutFriendInput>
    create: XOR<UserCreateWithoutFriendInput, UserUncheckedCreateWithoutFriendInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFriendInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFriendInput, UserUncheckedUpdateWithoutFriendInput>
  }

  export type UserUpdateWithoutFriendInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: StringFieldUpdateOperationsInput | string
    tokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emails?: EmailUpdateManyWithoutUserNestedInput
    groups?: GroupUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFriendInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: StringFieldUpdateOperationsInput | string
    tokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emails?: EmailUncheckedUpdateManyWithoutUserNestedInput
    groups?: GroupUncheckedUpdateManyWithoutUserNestedInput
  }

  export type FriendGroupUpsertWithWhereUniqueWithoutFriendInput = {
    where: FriendGroupWhereUniqueInput
    update: XOR<FriendGroupUpdateWithoutFriendInput, FriendGroupUncheckedUpdateWithoutFriendInput>
    create: XOR<FriendGroupCreateWithoutFriendInput, FriendGroupUncheckedCreateWithoutFriendInput>
  }

  export type FriendGroupUpdateWithWhereUniqueWithoutFriendInput = {
    where: FriendGroupWhereUniqueInput
    data: XOR<FriendGroupUpdateWithoutFriendInput, FriendGroupUncheckedUpdateWithoutFriendInput>
  }

  export type FriendGroupUpdateManyWithWhereWithoutFriendInput = {
    where: FriendGroupScalarWhereInput
    data: XOR<FriendGroupUpdateManyMutationInput, FriendGroupUncheckedUpdateManyWithoutFriendInput>
  }

  export type FriendGroupScalarWhereInput = {
    AND?: FriendGroupScalarWhereInput | FriendGroupScalarWhereInput[]
    OR?: FriendGroupScalarWhereInput[]
    NOT?: FriendGroupScalarWhereInput | FriendGroupScalarWhereInput[]
    id?: StringFilter<"FriendGroup"> | string
    groupId?: StringFilter<"FriendGroup"> | string
    friendId?: StringFilter<"FriendGroup"> | string
  }

  export type UserCreateWithoutGroupsInput = {
    id?: string
    email: string
    accessToken: string
    refreshToken: string
    tokenExpiry?: Date | string | null
    createdAt?: Date | string
    emails?: EmailCreateNestedManyWithoutUserInput
    friend?: FriendCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutGroupsInput = {
    id?: string
    email: string
    accessToken: string
    refreshToken: string
    tokenExpiry?: Date | string | null
    createdAt?: Date | string
    emails?: EmailUncheckedCreateNestedManyWithoutUserInput
    friend?: FriendUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutGroupsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGroupsInput, UserUncheckedCreateWithoutGroupsInput>
  }

  export type FriendGroupCreateWithoutGroupInput = {
    id?: string
    friend: FriendCreateNestedOneWithoutGroupsInput
  }

  export type FriendGroupUncheckedCreateWithoutGroupInput = {
    id?: string
    friendId: string
  }

  export type FriendGroupCreateOrConnectWithoutGroupInput = {
    where: FriendGroupWhereUniqueInput
    create: XOR<FriendGroupCreateWithoutGroupInput, FriendGroupUncheckedCreateWithoutGroupInput>
  }

  export type FriendGroupCreateManyGroupInputEnvelope = {
    data: FriendGroupCreateManyGroupInput | FriendGroupCreateManyGroupInput[]
  }

  export type UserUpsertWithoutGroupsInput = {
    update: XOR<UserUpdateWithoutGroupsInput, UserUncheckedUpdateWithoutGroupsInput>
    create: XOR<UserCreateWithoutGroupsInput, UserUncheckedCreateWithoutGroupsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutGroupsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutGroupsInput, UserUncheckedUpdateWithoutGroupsInput>
  }

  export type UserUpdateWithoutGroupsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: StringFieldUpdateOperationsInput | string
    tokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emails?: EmailUpdateManyWithoutUserNestedInput
    friend?: FriendUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutGroupsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: StringFieldUpdateOperationsInput | string
    tokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emails?: EmailUncheckedUpdateManyWithoutUserNestedInput
    friend?: FriendUncheckedUpdateManyWithoutUserNestedInput
  }

  export type FriendGroupUpsertWithWhereUniqueWithoutGroupInput = {
    where: FriendGroupWhereUniqueInput
    update: XOR<FriendGroupUpdateWithoutGroupInput, FriendGroupUncheckedUpdateWithoutGroupInput>
    create: XOR<FriendGroupCreateWithoutGroupInput, FriendGroupUncheckedCreateWithoutGroupInput>
  }

  export type FriendGroupUpdateWithWhereUniqueWithoutGroupInput = {
    where: FriendGroupWhereUniqueInput
    data: XOR<FriendGroupUpdateWithoutGroupInput, FriendGroupUncheckedUpdateWithoutGroupInput>
  }

  export type FriendGroupUpdateManyWithWhereWithoutGroupInput = {
    where: FriendGroupScalarWhereInput
    data: XOR<FriendGroupUpdateManyMutationInput, FriendGroupUncheckedUpdateManyWithoutGroupInput>
  }

  export type GroupCreateWithoutMembersInput = {
    id?: string
    name: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutGroupsInput
  }

  export type GroupUncheckedCreateWithoutMembersInput = {
    id?: string
    name: string
    userId: string
    createdAt?: Date | string
  }

  export type GroupCreateOrConnectWithoutMembersInput = {
    where: GroupWhereUniqueInput
    create: XOR<GroupCreateWithoutMembersInput, GroupUncheckedCreateWithoutMembersInput>
  }

  export type FriendCreateWithoutGroupsInput = {
    id?: string
    emailAddress: string
    name?: string | null
    createdAt?: Date | string
    customLabel?: string | null
    user: UserCreateNestedOneWithoutFriendInput
  }

  export type FriendUncheckedCreateWithoutGroupsInput = {
    id?: string
    userId: string
    emailAddress: string
    name?: string | null
    createdAt?: Date | string
    customLabel?: string | null
  }

  export type FriendCreateOrConnectWithoutGroupsInput = {
    where: FriendWhereUniqueInput
    create: XOR<FriendCreateWithoutGroupsInput, FriendUncheckedCreateWithoutGroupsInput>
  }

  export type GroupUpsertWithoutMembersInput = {
    update: XOR<GroupUpdateWithoutMembersInput, GroupUncheckedUpdateWithoutMembersInput>
    create: XOR<GroupCreateWithoutMembersInput, GroupUncheckedCreateWithoutMembersInput>
    where?: GroupWhereInput
  }

  export type GroupUpdateToOneWithWhereWithoutMembersInput = {
    where?: GroupWhereInput
    data: XOR<GroupUpdateWithoutMembersInput, GroupUncheckedUpdateWithoutMembersInput>
  }

  export type GroupUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutGroupsNestedInput
  }

  export type GroupUncheckedUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FriendUpsertWithoutGroupsInput = {
    update: XOR<FriendUpdateWithoutGroupsInput, FriendUncheckedUpdateWithoutGroupsInput>
    create: XOR<FriendCreateWithoutGroupsInput, FriendUncheckedCreateWithoutGroupsInput>
    where?: FriendWhereInput
  }

  export type FriendUpdateToOneWithWhereWithoutGroupsInput = {
    where?: FriendWhereInput
    data: XOR<FriendUpdateWithoutGroupsInput, FriendUncheckedUpdateWithoutGroupsInput>
  }

  export type FriendUpdateWithoutGroupsInput = {
    id?: StringFieldUpdateOperationsInput | string
    emailAddress?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customLabel?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutFriendNestedInput
  }

  export type FriendUncheckedUpdateWithoutGroupsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    emailAddress?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customLabel?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EmailCreateManyUserInput = {
    id?: string
    gmailMessageId: string
    subject?: string | null
    senderAddress: string
    receiverAddress: string
    content: string
    html_content: string
    snippet?: string | null
    receivedAt?: Date | string | null
    isRead?: boolean
    isNotified?: boolean
    customLabel?: string | null
    createdAt?: Date | string
  }

  export type FriendCreateManyUserInput = {
    id?: string
    emailAddress: string
    name?: string | null
    createdAt?: Date | string
    customLabel?: string | null
  }

  export type GroupCreateManyUserInput = {
    id?: string
    name: string
    createdAt?: Date | string
  }

  export type EmailUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    gmailMessageId?: StringFieldUpdateOperationsInput | string
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    senderAddress?: StringFieldUpdateOperationsInput | string
    receiverAddress?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    html_content?: StringFieldUpdateOperationsInput | string
    snippet?: NullableStringFieldUpdateOperationsInput | string | null
    receivedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isRead?: BoolFieldUpdateOperationsInput | boolean
    isNotified?: BoolFieldUpdateOperationsInput | boolean
    customLabel?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    gmailMessageId?: StringFieldUpdateOperationsInput | string
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    senderAddress?: StringFieldUpdateOperationsInput | string
    receiverAddress?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    html_content?: StringFieldUpdateOperationsInput | string
    snippet?: NullableStringFieldUpdateOperationsInput | string | null
    receivedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isRead?: BoolFieldUpdateOperationsInput | boolean
    isNotified?: BoolFieldUpdateOperationsInput | boolean
    customLabel?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    gmailMessageId?: StringFieldUpdateOperationsInput | string
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    senderAddress?: StringFieldUpdateOperationsInput | string
    receiverAddress?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    html_content?: StringFieldUpdateOperationsInput | string
    snippet?: NullableStringFieldUpdateOperationsInput | string | null
    receivedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isRead?: BoolFieldUpdateOperationsInput | boolean
    isNotified?: BoolFieldUpdateOperationsInput | boolean
    customLabel?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FriendUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    emailAddress?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customLabel?: NullableStringFieldUpdateOperationsInput | string | null
    groups?: FriendGroupUpdateManyWithoutFriendNestedInput
  }

  export type FriendUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    emailAddress?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customLabel?: NullableStringFieldUpdateOperationsInput | string | null
    groups?: FriendGroupUncheckedUpdateManyWithoutFriendNestedInput
  }

  export type FriendUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    emailAddress?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customLabel?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GroupUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: FriendGroupUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: FriendGroupUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FriendGroupCreateManyFriendInput = {
    id?: string
    groupId: string
  }

  export type FriendGroupUpdateWithoutFriendInput = {
    id?: StringFieldUpdateOperationsInput | string
    group?: GroupUpdateOneRequiredWithoutMembersNestedInput
  }

  export type FriendGroupUncheckedUpdateWithoutFriendInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
  }

  export type FriendGroupUncheckedUpdateManyWithoutFriendInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
  }

  export type FriendGroupCreateManyGroupInput = {
    id?: string
    friendId: string
  }

  export type FriendGroupUpdateWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    friend?: FriendUpdateOneRequiredWithoutGroupsNestedInput
  }

  export type FriendGroupUncheckedUpdateWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    friendId?: StringFieldUpdateOperationsInput | string
  }

  export type FriendGroupUncheckedUpdateManyWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    friendId?: StringFieldUpdateOperationsInput | string
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