import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never;
    };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  BigFloat: { input: any; output: any };
  Cursor: { input: any; output: any };
  Datetime: { input: any; output: any };
  UUID: { input: any; output: any };
};

export type Address = {
  __typename?: 'Address';
  address?: Maybe<Scalars['String']['output']>;
  /** Reads a single `Company` that is related to this `Address`. */
  company?: Maybe<Company>;
  companyId?: Maybe<Scalars['UUID']['output']>;
  contactNumber?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['Datetime']['output'];
  id: Scalars['UUID']['output'];
  isPrimary: Scalars['Boolean']['output'];
  /** Reads and enables pagination through a set of `Order`. */
  orders: OrdersConnection;
  /** Reads and enables pagination through a set of `Product`. */
  productsByOrderAddressIdAndProductId: AddressProductsByOrderAddressIdAndProductIdManyToManyConnection;
  updatedAt: Scalars['Datetime']['output'];
  /** Reads a single `User` that is related to this `Address`. */
  user?: Maybe<User>;
  userId?: Maybe<Scalars['UUID']['output']>;
  /** Reads and enables pagination through a set of `User`. */
  usersByOrderAddressIdAndUserId: AddressUsersByOrderAddressIdAndUserIdManyToManyConnection;
};

export type AddressOrdersArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<OrderCondition>;
  filter?: InputMaybe<OrderFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OrdersOrderBy>>;
};

export type AddressProductsByOrderAddressIdAndProductIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<ProductCondition>;
  filter?: InputMaybe<ProductFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ProductsOrderBy>>;
};

export type AddressUsersByOrderAddressIdAndUserIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<UserCondition>;
  filter?: InputMaybe<UserFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
};

/** The fields on `address` to look up the row to connect. */
export type AddressAddressesCompanyIdKeyConnect = {
  companyId: Scalars['UUID']['input'];
};

/** The fields on `address` to look up the row to delete. */
export type AddressAddressesCompanyIdKeyDelete = {
  companyId: Scalars['UUID']['input'];
};

/** The fields on `address` to look up the row to connect. */
export type AddressAddressesPkeyConnect = {
  id: Scalars['UUID']['input'];
};

/** The fields on `address` to look up the row to delete. */
export type AddressAddressesPkeyDelete = {
  id: Scalars['UUID']['input'];
};

/** A condition to be used against `Address` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type AddressCondition = {
  /** Checks for equality with the object’s `companyId` field. */
  companyId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `userId` field. */
  userId?: InputMaybe<Scalars['UUID']['input']>;
};

/** A filter to be used against `Address` object types. All fields are combined with a logical ‘and.’ */
export type AddressFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<AddressFilter>>;
  /** Filter by the object’s `company` relation. */
  company?: InputMaybe<CompanyFilter>;
  /** A related `company` exists. */
  companyExists?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `companyId` field. */
  companyId?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<UuidFilter>;
  /** Negates the expression. */
  not?: InputMaybe<AddressFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<AddressFilter>>;
  /** Filter by the object’s `orders` relation. */
  orders?: InputMaybe<AddressToManyOrderFilter>;
  /** Some related `orders` exist. */
  ordersExist?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `user` relation. */
  user?: InputMaybe<UserFilter>;
  /** A related `user` exists. */
  userExists?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `userId` field. */
  userId?: InputMaybe<UuidFilter>;
};

/** An input for mutations affecting `Address` */
export type AddressInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  companyId?: InputMaybe<Scalars['UUID']['input']>;
  companyToCompanyId?: InputMaybe<AddressesCompanyIdFkeyInput>;
  contactNumber?: InputMaybe<Scalars['String']['input']>;
  isPrimary?: InputMaybe<Scalars['Boolean']['input']>;
  ordersUsingId?: InputMaybe<OrdersAddressIdFkeyInverseInput>;
  userId?: InputMaybe<Scalars['UUID']['input']>;
  userToUserId?: InputMaybe<AddressesUserIdFkeyInput>;
};

/** The fields on `address` to look up the row to update. */
export type AddressOnAddressForAddressesCompanyIdFkeyUsingAddressesCompanyIdKeyUpdate =
  {
    companyId: Scalars['UUID']['input'];
    /** An object where the defined keys will be set on the `address` being updated. */
    patch: UpdateAddressOnAddressForAddressesCompanyIdFkeyPatch;
  };

/** The fields on `address` to look up the row to update. */
export type AddressOnAddressForAddressesCompanyIdFkeyUsingAddressesPkeyUpdate =
  {
    id: Scalars['UUID']['input'];
    /** An object where the defined keys will be set on the `address` being updated. */
    patch: UpdateAddressOnAddressForAddressesCompanyIdFkeyPatch;
  };

/** The fields on `address` to look up the row to update. */
export type AddressOnAddressForAddressesUserIdFkeyUsingAddressesCompanyIdKeyUpdate =
  {
    companyId: Scalars['UUID']['input'];
    /** An object where the defined keys will be set on the `address` being updated. */
    patch: UpdateAddressOnAddressForAddressesUserIdFkeyPatch;
  };

/** The fields on `address` to look up the row to update. */
export type AddressOnAddressForAddressesUserIdFkeyUsingAddressesPkeyUpdate = {
  id: Scalars['UUID']['input'];
  /** An object where the defined keys will be set on the `address` being updated. */
  patch: UpdateAddressOnAddressForAddressesUserIdFkeyPatch;
};

/** The fields on `address` to look up the row to update. */
export type AddressOnOrderForOrdersAddressIdFkeyUsingAddressesCompanyIdKeyUpdate =
  {
    companyId: Scalars['UUID']['input'];
    /** An object where the defined keys will be set on the `address` being updated. */
    patch: UpdateAddressOnOrderForOrdersAddressIdFkeyPatch;
  };

/** The fields on `address` to look up the row to update. */
export type AddressOnOrderForOrdersAddressIdFkeyUsingAddressesPkeyUpdate = {
  id: Scalars['UUID']['input'];
  /** An object where the defined keys will be set on the `address` being updated. */
  patch: UpdateAddressOnOrderForOrdersAddressIdFkeyPatch;
};

/** Represents an update to a `Address`. Fields that are set will be updated. */
export type AddressPatch = {
  address?: InputMaybe<Scalars['String']['input']>;
  companyId?: InputMaybe<Scalars['UUID']['input']>;
  companyToCompanyId?: InputMaybe<AddressesCompanyIdFkeyInput>;
  contactNumber?: InputMaybe<Scalars['String']['input']>;
  isPrimary?: InputMaybe<Scalars['Boolean']['input']>;
  ordersUsingId?: InputMaybe<OrdersAddressIdFkeyInverseInput>;
  userId?: InputMaybe<Scalars['UUID']['input']>;
  userToUserId?: InputMaybe<AddressesUserIdFkeyInput>;
};

/** A connection to a list of `Product` values, with data from `Order`. */
export type AddressProductsByOrderAddressIdAndProductIdManyToManyConnection = {
  __typename?: 'AddressProductsByOrderAddressIdAndProductIdManyToManyConnection';
  /** A list of edges which contains the `Product`, info from the `Order`, and the cursor to aid in pagination. */
  edges: Array<AddressProductsByOrderAddressIdAndProductIdManyToManyEdge>;
  /** A list of `Product` objects. */
  nodes: Array<Product>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Product` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `Product` edge in the connection, with data from `Order`. */
export type AddressProductsByOrderAddressIdAndProductIdManyToManyEdge = {
  __typename?: 'AddressProductsByOrderAddressIdAndProductIdManyToManyEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Product` at the end of the edge. */
  node: Product;
  /** Reads and enables pagination through a set of `Order`. */
  orders: OrdersConnection;
};

/** A `Product` edge in the connection, with data from `Order`. */
export type AddressProductsByOrderAddressIdAndProductIdManyToManyEdgeOrdersArgs =
  {
    after?: InputMaybe<Scalars['Cursor']['input']>;
    before?: InputMaybe<Scalars['Cursor']['input']>;
    condition?: InputMaybe<OrderCondition>;
    filter?: InputMaybe<OrderFilter>;
    first?: InputMaybe<Scalars['Int']['input']>;
    last?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    orderBy?: InputMaybe<Array<OrdersOrderBy>>;
  };

/** A filter to be used against many `Order` object types. All fields are combined with a logical ‘and.’ */
export type AddressToManyOrderFilter = {
  /** Every related `Order` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<OrderFilter>;
  /** No related `Order` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<OrderFilter>;
  /** Some related `Order` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<OrderFilter>;
};

/** A connection to a list of `User` values, with data from `Order`. */
export type AddressUsersByOrderAddressIdAndUserIdManyToManyConnection = {
  __typename?: 'AddressUsersByOrderAddressIdAndUserIdManyToManyConnection';
  /** A list of edges which contains the `User`, info from the `Order`, and the cursor to aid in pagination. */
  edges: Array<AddressUsersByOrderAddressIdAndUserIdManyToManyEdge>;
  /** A list of `User` objects. */
  nodes: Array<User>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `User` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `User` edge in the connection, with data from `Order`. */
export type AddressUsersByOrderAddressIdAndUserIdManyToManyEdge = {
  __typename?: 'AddressUsersByOrderAddressIdAndUserIdManyToManyEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `User` at the end of the edge. */
  node: User;
  /** Reads and enables pagination through a set of `Order`. */
  orders: OrdersConnection;
};

/** A `User` edge in the connection, with data from `Order`. */
export type AddressUsersByOrderAddressIdAndUserIdManyToManyEdgeOrdersArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<OrderCondition>;
  filter?: InputMaybe<OrderFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OrdersOrderBy>>;
};

/** The `address` to be created by this mutation. */
export type AddressesCompanyIdFkeyAddressesCreateInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  companyToCompanyId?: InputMaybe<AddressesCompanyIdFkeyInput>;
  contactNumber?: InputMaybe<Scalars['String']['input']>;
  isPrimary?: InputMaybe<Scalars['Boolean']['input']>;
  ordersUsingId?: InputMaybe<OrdersAddressIdFkeyInverseInput>;
  userId?: InputMaybe<Scalars['UUID']['input']>;
  userToUserId?: InputMaybe<AddressesUserIdFkeyInput>;
};

/** The `company` to be created by this mutation. */
export type AddressesCompanyIdFkeyCompaniesCreateInput = {
  addressUsingId?: InputMaybe<AddressesCompanyIdFkeyInverseInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  isVerified?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  productsUsingId?: InputMaybe<ProductsCompanyIdFkeyInverseInput>;
  userId?: InputMaybe<Scalars['UUID']['input']>;
  userToUserId?: InputMaybe<CompaniesUserIdFkeyInput>;
};

/** Input for the nested mutation of `company` in the `AddressInput` mutation. */
export type AddressesCompanyIdFkeyInput = {
  /** The primary key(s) for `company` for the far side of the relationship. */
  connectById?: InputMaybe<CompanyCompaniesPkeyConnect>;
  /** The primary key(s) for `company` for the far side of the relationship. */
  connectByUserId?: InputMaybe<CompanyCompaniesUserIdKeyConnect>;
  /** A `CompanyInput` object that will be created and connected to this object. */
  create?: InputMaybe<AddressesCompanyIdFkeyCompaniesCreateInput>;
  /** The primary key(s) for `company` for the far side of the relationship. */
  deleteById?: InputMaybe<CompanyCompaniesPkeyDelete>;
  /** The primary key(s) for `company` for the far side of the relationship. */
  deleteByUserId?: InputMaybe<CompanyCompaniesUserIdKeyDelete>;
  /** The primary key(s) and patch data for `company` for the far side of the relationship. */
  updateById?: InputMaybe<CompanyOnAddressForAddressesCompanyIdFkeyUsingCompaniesPkeyUpdate>;
  /** The primary key(s) and patch data for `company` for the far side of the relationship. */
  updateByUserId?: InputMaybe<CompanyOnAddressForAddressesCompanyIdFkeyUsingCompaniesUserIdKeyUpdate>;
};

/** Input for the nested mutation of `address` in the `CompanyInput` mutation. */
export type AddressesCompanyIdFkeyInverseInput = {
  /** The primary key(s) for `address` for the far side of the relationship. */
  connectByCompanyId?: InputMaybe<AddressAddressesCompanyIdKeyConnect>;
  /** The primary key(s) for `address` for the far side of the relationship. */
  connectById?: InputMaybe<AddressAddressesPkeyConnect>;
  /** A `AddressInput` object that will be created and connected to this object. */
  create?: InputMaybe<Array<AddressesCompanyIdFkeyAddressesCreateInput>>;
  /** The primary key(s) for `address` for the far side of the relationship. */
  deleteByCompanyId?: InputMaybe<AddressAddressesCompanyIdKeyDelete>;
  /** The primary key(s) for `address` for the far side of the relationship. */
  deleteById?: InputMaybe<AddressAddressesPkeyDelete>;
  /** Flag indicating whether all other `address` records that match this relationship should be removed. */
  deleteOthers?: InputMaybe<Scalars['Boolean']['input']>;
  /** The primary key(s) and patch data for `address` for the far side of the relationship. */
  updateByCompanyId?: InputMaybe<AddressOnAddressForAddressesCompanyIdFkeyUsingAddressesCompanyIdKeyUpdate>;
  /** The primary key(s) and patch data for `address` for the far side of the relationship. */
  updateById?: InputMaybe<AddressOnAddressForAddressesCompanyIdFkeyUsingAddressesPkeyUpdate>;
};

/** A connection to a list of `Address` values. */
export type AddressesConnection = {
  __typename?: 'AddressesConnection';
  /** A list of edges which contains the `Address` and cursor to aid in pagination. */
  edges: Array<AddressesEdge>;
  /** A list of `Address` objects. */
  nodes: Array<Address>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Address` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `Address` edge in the connection. */
export type AddressesEdge = {
  __typename?: 'AddressesEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Address` at the end of the edge. */
  node: Address;
};

/** Methods to use when ordering `Address`. */
export enum AddressesOrderBy {
  CompanyIdAsc = 'COMPANY_ID_ASC',
  CompanyIdDesc = 'COMPANY_ID_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  UserIdAsc = 'USER_ID_ASC',
  UserIdDesc = 'USER_ID_DESC',
}

/** The `address` to be created by this mutation. */
export type AddressesUserIdFkeyAddressesCreateInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  companyId?: InputMaybe<Scalars['UUID']['input']>;
  companyToCompanyId?: InputMaybe<AddressesCompanyIdFkeyInput>;
  contactNumber?: InputMaybe<Scalars['String']['input']>;
  isPrimary?: InputMaybe<Scalars['Boolean']['input']>;
  ordersUsingId?: InputMaybe<OrdersAddressIdFkeyInverseInput>;
  userToUserId?: InputMaybe<AddressesUserIdFkeyInput>;
};

/** Input for the nested mutation of `user` in the `AddressInput` mutation. */
export type AddressesUserIdFkeyInput = {
  /** The primary key(s) for `user` for the far side of the relationship. */
  connectById?: InputMaybe<UserUsersPkeyConnect>;
  /** A `UserInput` object that will be created and connected to this object. */
  create?: InputMaybe<AddressesUserIdFkeyUsersCreateInput>;
  /** The primary key(s) for `user` for the far side of the relationship. */
  deleteById?: InputMaybe<UserUsersPkeyDelete>;
  /** The primary key(s) and patch data for `user` for the far side of the relationship. */
  updateById?: InputMaybe<UserOnAddressForAddressesUserIdFkeyUsingUsersPkeyUpdate>;
};

/** Input for the nested mutation of `address` in the `UserInput` mutation. */
export type AddressesUserIdFkeyInverseInput = {
  /** The primary key(s) for `address` for the far side of the relationship. */
  connectByCompanyId?: InputMaybe<Array<AddressAddressesCompanyIdKeyConnect>>;
  /** The primary key(s) for `address` for the far side of the relationship. */
  connectById?: InputMaybe<Array<AddressAddressesPkeyConnect>>;
  /** A `AddressInput` object that will be created and connected to this object. */
  create?: InputMaybe<Array<AddressesUserIdFkeyAddressesCreateInput>>;
  /** The primary key(s) for `address` for the far side of the relationship. */
  deleteByCompanyId?: InputMaybe<Array<AddressAddressesCompanyIdKeyDelete>>;
  /** The primary key(s) for `address` for the far side of the relationship. */
  deleteById?: InputMaybe<Array<AddressAddressesPkeyDelete>>;
  /** Flag indicating whether all other `address` records that match this relationship should be removed. */
  deleteOthers?: InputMaybe<Scalars['Boolean']['input']>;
  /** The primary key(s) and patch data for `address` for the far side of the relationship. */
  updateByCompanyId?: InputMaybe<
    Array<AddressOnAddressForAddressesUserIdFkeyUsingAddressesCompanyIdKeyUpdate>
  >;
  /** The primary key(s) and patch data for `address` for the far side of the relationship. */
  updateById?: InputMaybe<
    Array<AddressOnAddressForAddressesUserIdFkeyUsingAddressesPkeyUpdate>
  >;
};

/** The `user` to be created by this mutation. */
export type AddressesUserIdFkeyUsersCreateInput = {
  addressesUsingId?: InputMaybe<AddressesUserIdFkeyInverseInput>;
  companyUsingId?: InputMaybe<CompaniesUserIdFkeyInverseInput>;
  email: Scalars['String']['input'];
  isAdmin?: InputMaybe<Scalars['Boolean']['input']>;
  isVerified?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  ordersUsingId?: InputMaybe<OrdersUserIdFkeyInverseInput>;
  password?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

/** The `category` to be created by this mutation. */
export type CategoriesCategoryIdFkeyCategoriesCreateInput = {
  categoryToParentId?: InputMaybe<CategoriesCategoryIdFkeyInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  productsUsingId?: InputMaybe<ProductsCategoryIdFkeyInverseInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

/** Input for the nested mutation of `category` in the `CategoryInput` mutation. */
export type CategoriesCategoryIdFkeyInput = {
  /** The primary key(s) for `category` for the far side of the relationship. */
  connectById?: InputMaybe<CategoryCategoriesPkeyConnect>;
  /** A `CategoryInput` object that will be created and connected to this object. */
  create?: InputMaybe<CategoriesCategoryIdFkeyCategoriesCreateInput>;
  /** The primary key(s) for `category` for the far side of the relationship. */
  deleteById?: InputMaybe<CategoryCategoriesPkeyDelete>;
  /** The primary key(s) and patch data for `category` for the far side of the relationship. */
  updateById?: InputMaybe<CategoryOnCategoryForCategoriesCategoryIdFkeyUsingCategoriesPkeyUpdate>;
};

/** A connection to a list of `Category` values. */
export type CategoriesConnection = {
  __typename?: 'CategoriesConnection';
  /** A list of edges which contains the `Category` and cursor to aid in pagination. */
  edges: Array<CategoriesEdge>;
  /** A list of `Category` objects. */
  nodes: Array<Category>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Category` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `Category` edge in the connection. */
export type CategoriesEdge = {
  __typename?: 'CategoriesEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Category` at the end of the edge. */
  node: Category;
};

/** Methods to use when ordering `Category`. */
export enum CategoriesOrderBy {
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  Natural = 'NATURAL',
  ParentIdAsc = 'PARENT_ID_ASC',
  ParentIdDesc = 'PARENT_ID_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  SlugAsc = 'SLUG_ASC',
  SlugDesc = 'SLUG_DESC',
}

export type Category = {
  __typename?: 'Category';
  /** Reads and enables pagination through a set of `Category`. */
  childCategories: CategoriesConnection;
  /** Reads and enables pagination through a set of `Company`. */
  companiesByProductCategoryIdAndCompanyId: CategoryCompaniesByProductCategoryIdAndCompanyIdManyToManyConnection;
  createdAt: Scalars['Datetime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['UUID']['output'];
  imgUrl?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  /** Reads a single `Category` that is related to this `Category`. */
  parent?: Maybe<Category>;
  parentId?: Maybe<Scalars['UUID']['output']>;
  /** Reads and enables pagination through a set of `Product`. */
  products: ProductsConnection;
  slug?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['Datetime']['output'];
};

export type CategoryChildCategoriesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<CategoryCondition>;
  filter?: InputMaybe<CategoryFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CategoriesOrderBy>>;
};

export type CategoryCompaniesByProductCategoryIdAndCompanyIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<CompanyCondition>;
  filter?: InputMaybe<CompanyFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CompaniesOrderBy>>;
};

export type CategoryProductsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<ProductCondition>;
  filter?: InputMaybe<ProductFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ProductsOrderBy>>;
};

/** The fields on `category` to look up the row to connect. */
export type CategoryCategoriesPkeyConnect = {
  id: Scalars['UUID']['input'];
};

/** The fields on `category` to look up the row to delete. */
export type CategoryCategoriesPkeyDelete = {
  id: Scalars['UUID']['input'];
};

/** A connection to a list of `Company` values, with data from `Product`. */
export type CategoryCompaniesByProductCategoryIdAndCompanyIdManyToManyConnection =
  {
    __typename?: 'CategoryCompaniesByProductCategoryIdAndCompanyIdManyToManyConnection';
    /** A list of edges which contains the `Company`, info from the `Product`, and the cursor to aid in pagination. */
    edges: Array<CategoryCompaniesByProductCategoryIdAndCompanyIdManyToManyEdge>;
    /** A list of `Company` objects. */
    nodes: Array<Company>;
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
    /** The count of *all* `Company` you could get from the connection. */
    totalCount: Scalars['Int']['output'];
  };

/** A `Company` edge in the connection, with data from `Product`. */
export type CategoryCompaniesByProductCategoryIdAndCompanyIdManyToManyEdge = {
  __typename?: 'CategoryCompaniesByProductCategoryIdAndCompanyIdManyToManyEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Company` at the end of the edge. */
  node: Company;
  /** Reads and enables pagination through a set of `Product`. */
  products: ProductsConnection;
};

/** A `Company` edge in the connection, with data from `Product`. */
export type CategoryCompaniesByProductCategoryIdAndCompanyIdManyToManyEdgeProductsArgs =
  {
    after?: InputMaybe<Scalars['Cursor']['input']>;
    before?: InputMaybe<Scalars['Cursor']['input']>;
    condition?: InputMaybe<ProductCondition>;
    filter?: InputMaybe<ProductFilter>;
    first?: InputMaybe<Scalars['Int']['input']>;
    last?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    orderBy?: InputMaybe<Array<ProductsOrderBy>>;
  };

/**
 * A condition to be used against `Category` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type CategoryCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `name` field. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `parentId` field. */
  parentId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `slug` field. */
  slug?: InputMaybe<Scalars['String']['input']>;
};

/** A filter to be used against `Category` object types. All fields are combined with a logical ‘and.’ */
export type CategoryFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<CategoryFilter>>;
  /** Filter by the object’s `childCategories` relation. */
  childCategories?: InputMaybe<CategoryToManyCategoryFilter>;
  /** Some related `childCategories` exist. */
  childCategoriesExist?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `name` field. */
  name?: InputMaybe<StringFilter>;
  /** Negates the expression. */
  not?: InputMaybe<CategoryFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<CategoryFilter>>;
  /** Filter by the object’s `parent` relation. */
  parent?: InputMaybe<CategoryFilter>;
  /** A related `parent` exists. */
  parentExists?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `parentId` field. */
  parentId?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `products` relation. */
  products?: InputMaybe<CategoryToManyProductFilter>;
  /** Some related `products` exist. */
  productsExist?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `slug` field. */
  slug?: InputMaybe<StringFilter>;
};

/** An input for mutations affecting `Category` */
export type CategoryInput = {
  categoryToParentId?: InputMaybe<CategoriesCategoryIdFkeyInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  parentId?: InputMaybe<Scalars['UUID']['input']>;
  productsUsingId?: InputMaybe<ProductsCategoryIdFkeyInverseInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

/** The fields on `category` to look up the row to update. */
export type CategoryOnCategoryForCategoriesCategoryIdFkeyUsingCategoriesPkeyUpdate =
  {
    id: Scalars['UUID']['input'];
    /** An object where the defined keys will be set on the `category` being updated. */
    patch: UpdateCategoryOnCategoryForCategoriesCategoryIdFkeyPatch;
  };

/** The fields on `category` to look up the row to update. */
export type CategoryOnProductForProductsCategoryIdFkeyUsingCategoriesPkeyUpdate =
  {
    id: Scalars['UUID']['input'];
    /** An object where the defined keys will be set on the `category` being updated. */
    patch: UpdateCategoryOnProductForProductsCategoryIdFkeyPatch;
  };

/** Represents an update to a `Category`. Fields that are set will be updated. */
export type CategoryPatch = {
  categoryToParentId?: InputMaybe<CategoriesCategoryIdFkeyInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  parentId?: InputMaybe<Scalars['UUID']['input']>;
  productsUsingId?: InputMaybe<ProductsCategoryIdFkeyInverseInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

/** A filter to be used against many `Category` object types. All fields are combined with a logical ‘and.’ */
export type CategoryToManyCategoryFilter = {
  /** Every related `Category` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<CategoryFilter>;
  /** No related `Category` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<CategoryFilter>;
  /** Some related `Category` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<CategoryFilter>;
};

/** A filter to be used against many `Product` object types. All fields are combined with a logical ‘and.’ */
export type CategoryToManyProductFilter = {
  /** Every related `Product` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<ProductFilter>;
  /** No related `Product` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<ProductFilter>;
  /** Some related `Product` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<ProductFilter>;
};

/** A connection to a list of `Company` values. */
export type CompaniesConnection = {
  __typename?: 'CompaniesConnection';
  /** A list of edges which contains the `Company` and cursor to aid in pagination. */
  edges: Array<CompaniesEdge>;
  /** A list of `Company` objects. */
  nodes: Array<Company>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Company` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `Company` edge in the connection. */
export type CompaniesEdge = {
  __typename?: 'CompaniesEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Company` at the end of the edge. */
  node: Company;
};

/** Methods to use when ordering `Company`. */
export enum CompaniesOrderBy {
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  UserIdAsc = 'USER_ID_ASC',
  UserIdDesc = 'USER_ID_DESC',
}

/** The `company` to be created by this mutation. */
export type CompaniesUserIdFkeyCompaniesCreateInput = {
  addressUsingId?: InputMaybe<AddressesCompanyIdFkeyInverseInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  isVerified?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  productsUsingId?: InputMaybe<ProductsCompanyIdFkeyInverseInput>;
  userToUserId?: InputMaybe<CompaniesUserIdFkeyInput>;
};

/** Input for the nested mutation of `user` in the `CompanyInput` mutation. */
export type CompaniesUserIdFkeyInput = {
  /** The primary key(s) for `user` for the far side of the relationship. */
  connectById?: InputMaybe<UserUsersPkeyConnect>;
  /** A `UserInput` object that will be created and connected to this object. */
  create?: InputMaybe<CompaniesUserIdFkeyUsersCreateInput>;
  /** The primary key(s) for `user` for the far side of the relationship. */
  deleteById?: InputMaybe<UserUsersPkeyDelete>;
  /** The primary key(s) and patch data for `user` for the far side of the relationship. */
  updateById?: InputMaybe<UserOnCompanyForCompaniesUserIdFkeyUsingUsersPkeyUpdate>;
};

/** Input for the nested mutation of `company` in the `UserInput` mutation. */
export type CompaniesUserIdFkeyInverseInput = {
  /** The primary key(s) for `company` for the far side of the relationship. */
  connectById?: InputMaybe<CompanyCompaniesPkeyConnect>;
  /** The primary key(s) for `company` for the far side of the relationship. */
  connectByUserId?: InputMaybe<CompanyCompaniesUserIdKeyConnect>;
  /** A `CompanyInput` object that will be created and connected to this object. */
  create?: InputMaybe<Array<CompaniesUserIdFkeyCompaniesCreateInput>>;
  /** The primary key(s) for `company` for the far side of the relationship. */
  deleteById?: InputMaybe<CompanyCompaniesPkeyDelete>;
  /** The primary key(s) for `company` for the far side of the relationship. */
  deleteByUserId?: InputMaybe<CompanyCompaniesUserIdKeyDelete>;
  /** Flag indicating whether all other `company` records that match this relationship should be removed. */
  deleteOthers?: InputMaybe<Scalars['Boolean']['input']>;
  /** The primary key(s) and patch data for `company` for the far side of the relationship. */
  updateById?: InputMaybe<CompanyOnCompanyForCompaniesUserIdFkeyUsingCompaniesPkeyUpdate>;
  /** The primary key(s) and patch data for `company` for the far side of the relationship. */
  updateByUserId?: InputMaybe<CompanyOnCompanyForCompaniesUserIdFkeyUsingCompaniesUserIdKeyUpdate>;
};

/** The `user` to be created by this mutation. */
export type CompaniesUserIdFkeyUsersCreateInput = {
  addressesUsingId?: InputMaybe<AddressesUserIdFkeyInverseInput>;
  companyUsingId?: InputMaybe<CompaniesUserIdFkeyInverseInput>;
  email: Scalars['String']['input'];
  isAdmin?: InputMaybe<Scalars['Boolean']['input']>;
  isVerified?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  ordersUsingId?: InputMaybe<OrdersUserIdFkeyInverseInput>;
  password?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type Company = {
  __typename?: 'Company';
  /** Reads a single `Address` that is related to this `Company`. */
  address?: Maybe<Address>;
  /**
   * Reads and enables pagination through a set of `Address`.
   * @deprecated Please use address instead
   */
  addresses: AddressesConnection;
  /** Reads and enables pagination through a set of `Category`. */
  categoriesByProductCompanyIdAndCategoryId: CompanyCategoriesByProductCompanyIdAndCategoryIdManyToManyConnection;
  createdAt: Scalars['Datetime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['UUID']['output'];
  isVerified: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  /** Reads and enables pagination through a set of `Product`. */
  products: ProductsConnection;
  updatedAt: Scalars['Datetime']['output'];
  /** Reads a single `User` that is related to this `Company`. */
  user?: Maybe<User>;
  userId: Scalars['UUID']['output'];
};

export type CompanyAddressesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<AddressCondition>;
  filter?: InputMaybe<AddressFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AddressesOrderBy>>;
};

export type CompanyCategoriesByProductCompanyIdAndCategoryIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<CategoryCondition>;
  filter?: InputMaybe<CategoryFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CategoriesOrderBy>>;
};

export type CompanyProductsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<ProductCondition>;
  filter?: InputMaybe<ProductFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ProductsOrderBy>>;
};

/** A connection to a list of `Category` values, with data from `Product`. */
export type CompanyCategoriesByProductCompanyIdAndCategoryIdManyToManyConnection =
  {
    __typename?: 'CompanyCategoriesByProductCompanyIdAndCategoryIdManyToManyConnection';
    /** A list of edges which contains the `Category`, info from the `Product`, and the cursor to aid in pagination. */
    edges: Array<CompanyCategoriesByProductCompanyIdAndCategoryIdManyToManyEdge>;
    /** A list of `Category` objects. */
    nodes: Array<Category>;
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
    /** The count of *all* `Category` you could get from the connection. */
    totalCount: Scalars['Int']['output'];
  };

/** A `Category` edge in the connection, with data from `Product`. */
export type CompanyCategoriesByProductCompanyIdAndCategoryIdManyToManyEdge = {
  __typename?: 'CompanyCategoriesByProductCompanyIdAndCategoryIdManyToManyEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Category` at the end of the edge. */
  node: Category;
  /** Reads and enables pagination through a set of `Product`. */
  products: ProductsConnection;
};

/** A `Category` edge in the connection, with data from `Product`. */
export type CompanyCategoriesByProductCompanyIdAndCategoryIdManyToManyEdgeProductsArgs =
  {
    after?: InputMaybe<Scalars['Cursor']['input']>;
    before?: InputMaybe<Scalars['Cursor']['input']>;
    condition?: InputMaybe<ProductCondition>;
    filter?: InputMaybe<ProductFilter>;
    first?: InputMaybe<Scalars['Int']['input']>;
    last?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    orderBy?: InputMaybe<Array<ProductsOrderBy>>;
  };

/** The fields on `company` to look up the row to connect. */
export type CompanyCompaniesPkeyConnect = {
  id: Scalars['UUID']['input'];
};

/** The fields on `company` to look up the row to delete. */
export type CompanyCompaniesPkeyDelete = {
  id: Scalars['UUID']['input'];
};

/** The fields on `company` to look up the row to connect. */
export type CompanyCompaniesUserIdKeyConnect = {
  userId: Scalars['UUID']['input'];
};

/** The fields on `company` to look up the row to delete. */
export type CompanyCompaniesUserIdKeyDelete = {
  userId: Scalars['UUID']['input'];
};

/** A condition to be used against `Company` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type CompanyCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `userId` field. */
  userId?: InputMaybe<Scalars['UUID']['input']>;
};

/** A filter to be used against `Company` object types. All fields are combined with a logical ‘and.’ */
export type CompanyFilter = {
  /** Filter by the object’s `address` relation. */
  address?: InputMaybe<AddressFilter>;
  /** A related `address` exists. */
  addressExists?: InputMaybe<Scalars['Boolean']['input']>;
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<CompanyFilter>>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<UuidFilter>;
  /** Negates the expression. */
  not?: InputMaybe<CompanyFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<CompanyFilter>>;
  /** Filter by the object’s `products` relation. */
  products?: InputMaybe<CompanyToManyProductFilter>;
  /** Some related `products` exist. */
  productsExist?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `user` relation. */
  user?: InputMaybe<UserFilter>;
  /** Filter by the object’s `userId` field. */
  userId?: InputMaybe<UuidFilter>;
};

/** An input for mutations affecting `Company` */
export type CompanyInput = {
  addressUsingId?: InputMaybe<AddressesCompanyIdFkeyInverseInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  isVerified?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  productsUsingId?: InputMaybe<ProductsCompanyIdFkeyInverseInput>;
  userId?: InputMaybe<Scalars['UUID']['input']>;
  userToUserId?: InputMaybe<CompaniesUserIdFkeyInput>;
};

/** The fields on `company` to look up the row to update. */
export type CompanyOnAddressForAddressesCompanyIdFkeyUsingCompaniesPkeyUpdate =
  {
    id: Scalars['UUID']['input'];
    /** An object where the defined keys will be set on the `company` being updated. */
    patch: UpdateCompanyOnAddressForAddressesCompanyIdFkeyPatch;
  };

/** The fields on `company` to look up the row to update. */
export type CompanyOnAddressForAddressesCompanyIdFkeyUsingCompaniesUserIdKeyUpdate =
  {
    /** An object where the defined keys will be set on the `company` being updated. */
    patch: UpdateCompanyOnAddressForAddressesCompanyIdFkeyPatch;
    userId: Scalars['UUID']['input'];
  };

/** The fields on `company` to look up the row to update. */
export type CompanyOnCompanyForCompaniesUserIdFkeyUsingCompaniesPkeyUpdate = {
  id: Scalars['UUID']['input'];
  /** An object where the defined keys will be set on the `company` being updated. */
  patch: UpdateCompanyOnCompanyForCompaniesUserIdFkeyPatch;
};

/** The fields on `company` to look up the row to update. */
export type CompanyOnCompanyForCompaniesUserIdFkeyUsingCompaniesUserIdKeyUpdate =
  {
    /** An object where the defined keys will be set on the `company` being updated. */
    patch: UpdateCompanyOnCompanyForCompaniesUserIdFkeyPatch;
    userId: Scalars['UUID']['input'];
  };

/** The fields on `company` to look up the row to update. */
export type CompanyOnProductForProductsCompanyIdFkeyUsingCompaniesPkeyUpdate = {
  id: Scalars['UUID']['input'];
  /** An object where the defined keys will be set on the `company` being updated. */
  patch: UpdateCompanyOnProductForProductsCompanyIdFkeyPatch;
};

/** The fields on `company` to look up the row to update. */
export type CompanyOnProductForProductsCompanyIdFkeyUsingCompaniesUserIdKeyUpdate =
  {
    /** An object where the defined keys will be set on the `company` being updated. */
    patch: UpdateCompanyOnProductForProductsCompanyIdFkeyPatch;
    userId: Scalars['UUID']['input'];
  };

/** Represents an update to a `Company`. Fields that are set will be updated. */
export type CompanyPatch = {
  addressUsingId?: InputMaybe<AddressesCompanyIdFkeyInverseInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  isVerified?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  productsUsingId?: InputMaybe<ProductsCompanyIdFkeyInverseInput>;
  userId?: InputMaybe<Scalars['UUID']['input']>;
  userToUserId?: InputMaybe<CompaniesUserIdFkeyInput>;
};

/** A filter to be used against many `Product` object types. All fields are combined with a logical ‘and.’ */
export type CompanyToManyProductFilter = {
  /** Every related `Product` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<ProductFilter>;
  /** No related `Product` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<ProductFilter>;
  /** Some related `Product` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<ProductFilter>;
};

/** All input for the create `Address` mutation. */
export type CreateAddressInput = {
  /** The `Address` to be created by this mutation. */
  address: AddressInput;
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

/** The output of our create `Address` mutation. */
export type CreateAddressPayload = {
  __typename?: 'CreateAddressPayload';
  /** The `Address` that was created by this mutation. */
  address?: Maybe<Address>;
  /** An edge for our `Address`. May be used by Relay 1. */
  addressEdge?: Maybe<AddressesEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Reads a single `Company` that is related to this `Address`. */
  company?: Maybe<Company>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `User` that is related to this `Address`. */
  user?: Maybe<User>;
};

/** The output of our create `Address` mutation. */
export type CreateAddressPayloadAddressEdgeArgs = {
  orderBy?: InputMaybe<Array<AddressesOrderBy>>;
};

/** All input for the create `Category` mutation. */
export type CreateCategoryInput = {
  /** The `Category` to be created by this mutation. */
  category: CategoryInput;
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

/** The output of our create `Category` mutation. */
export type CreateCategoryPayload = {
  __typename?: 'CreateCategoryPayload';
  /** The `Category` that was created by this mutation. */
  category?: Maybe<Category>;
  /** An edge for our `Category`. May be used by Relay 1. */
  categoryEdge?: Maybe<CategoriesEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Reads a single `Category` that is related to this `Category`. */
  parent?: Maybe<Category>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** The output of our create `Category` mutation. */
export type CreateCategoryPayloadCategoryEdgeArgs = {
  orderBy?: InputMaybe<Array<CategoriesOrderBy>>;
};

/** All input for the create `Company` mutation. */
export type CreateCompanyInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The `Company` to be created by this mutation. */
  company: CompanyInput;
};

/** The output of our create `Company` mutation. */
export type CreateCompanyPayload = {
  __typename?: 'CreateCompanyPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** The `Company` that was created by this mutation. */
  company?: Maybe<Company>;
  /** An edge for our `Company`. May be used by Relay 1. */
  companyEdge?: Maybe<CompaniesEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `User` that is related to this `Company`. */
  user?: Maybe<User>;
};

/** The output of our create `Company` mutation. */
export type CreateCompanyPayloadCompanyEdgeArgs = {
  orderBy?: InputMaybe<Array<CompaniesOrderBy>>;
};

/** All input for the create `Order` mutation. */
export type CreateOrderInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The `Order` to be created by this mutation. */
  order: OrderInput;
};

/** The output of our create `Order` mutation. */
export type CreateOrderPayload = {
  __typename?: 'CreateOrderPayload';
  /** Reads a single `Address` that is related to this `Order`. */
  address?: Maybe<Address>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** The `Order` that was created by this mutation. */
  order?: Maybe<Order>;
  /** An edge for our `Order`. May be used by Relay 1. */
  orderEdge?: Maybe<OrdersEdge>;
  /** Reads a single `Product` that is related to this `Order`. */
  product?: Maybe<Product>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `User` that is related to this `Order`. */
  user?: Maybe<User>;
};

/** The output of our create `Order` mutation. */
export type CreateOrderPayloadOrderEdgeArgs = {
  orderBy?: InputMaybe<Array<OrdersOrderBy>>;
};

/** All input for the create `Product` mutation. */
export type CreateProductInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The `Product` to be created by this mutation. */
  product: ProductInput;
};

/** The output of our create `Product` mutation. */
export type CreateProductPayload = {
  __typename?: 'CreateProductPayload';
  /** Reads a single `Category` that is related to this `Product`. */
  category?: Maybe<Category>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Reads a single `Company` that is related to this `Product`. */
  company?: Maybe<Company>;
  /** The `Product` that was created by this mutation. */
  product?: Maybe<Product>;
  /** An edge for our `Product`. May be used by Relay 1. */
  productEdge?: Maybe<ProductsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** The output of our create `Product` mutation. */
export type CreateProductPayloadProductEdgeArgs = {
  orderBy?: InputMaybe<Array<ProductsOrderBy>>;
};

/** All input for the create `User` mutation. */
export type CreateUserInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The `User` to be created by this mutation. */
  user: UserInput;
};

/** The output of our create `User` mutation. */
export type CreateUserPayload = {
  __typename?: 'CreateUserPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `User` that was created by this mutation. */
  user?: Maybe<User>;
  /** An edge for our `User`. May be used by Relay 1. */
  userEdge?: Maybe<UsersEdge>;
};

/** The output of our create `User` mutation. */
export type CreateUserPayloadUserEdgeArgs = {
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
};

/** All input for the `deleteAddressByCompanyId` mutation. */
export type DeleteAddressByCompanyIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  companyId: Scalars['UUID']['input'];
};

/** All input for the `deleteAddress` mutation. */
export type DeleteAddressInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
};

/** The output of our delete `Address` mutation. */
export type DeleteAddressPayload = {
  __typename?: 'DeleteAddressPayload';
  /** The `Address` that was deleted by this mutation. */
  address?: Maybe<Address>;
  /** An edge for our `Address`. May be used by Relay 1. */
  addressEdge?: Maybe<AddressesEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Reads a single `Company` that is related to this `Address`. */
  company?: Maybe<Company>;
  deletedAddressNodeId?: Maybe<Scalars['ID']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `User` that is related to this `Address`. */
  user?: Maybe<User>;
};

/** The output of our delete `Address` mutation. */
export type DeleteAddressPayloadAddressEdgeArgs = {
  orderBy?: InputMaybe<Array<AddressesOrderBy>>;
};

/** All input for the `deleteCategory` mutation. */
export type DeleteCategoryInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
};

/** The output of our delete `Category` mutation. */
export type DeleteCategoryPayload = {
  __typename?: 'DeleteCategoryPayload';
  /** The `Category` that was deleted by this mutation. */
  category?: Maybe<Category>;
  /** An edge for our `Category`. May be used by Relay 1. */
  categoryEdge?: Maybe<CategoriesEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedCategoryNodeId?: Maybe<Scalars['ID']['output']>;
  /** Reads a single `Category` that is related to this `Category`. */
  parent?: Maybe<Category>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** The output of our delete `Category` mutation. */
export type DeleteCategoryPayloadCategoryEdgeArgs = {
  orderBy?: InputMaybe<Array<CategoriesOrderBy>>;
};

/** All input for the `deleteCompanyByUserId` mutation. */
export type DeleteCompanyByUserIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  userId: Scalars['UUID']['input'];
};

/** All input for the `deleteCompany` mutation. */
export type DeleteCompanyInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
};

/** The output of our delete `Company` mutation. */
export type DeleteCompanyPayload = {
  __typename?: 'DeleteCompanyPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** The `Company` that was deleted by this mutation. */
  company?: Maybe<Company>;
  /** An edge for our `Company`. May be used by Relay 1. */
  companyEdge?: Maybe<CompaniesEdge>;
  deletedCompanyNodeId?: Maybe<Scalars['ID']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `User` that is related to this `Company`. */
  user?: Maybe<User>;
};

/** The output of our delete `Company` mutation. */
export type DeleteCompanyPayloadCompanyEdgeArgs = {
  orderBy?: InputMaybe<Array<CompaniesOrderBy>>;
};

/** All input for the `deleteOrder` mutation. */
export type DeleteOrderInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
};

/** The output of our delete `Order` mutation. */
export type DeleteOrderPayload = {
  __typename?: 'DeleteOrderPayload';
  /** Reads a single `Address` that is related to this `Order`. */
  address?: Maybe<Address>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedOrderNodeId?: Maybe<Scalars['ID']['output']>;
  /** The `Order` that was deleted by this mutation. */
  order?: Maybe<Order>;
  /** An edge for our `Order`. May be used by Relay 1. */
  orderEdge?: Maybe<OrdersEdge>;
  /** Reads a single `Product` that is related to this `Order`. */
  product?: Maybe<Product>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `User` that is related to this `Order`. */
  user?: Maybe<User>;
};

/** The output of our delete `Order` mutation. */
export type DeleteOrderPayloadOrderEdgeArgs = {
  orderBy?: InputMaybe<Array<OrdersOrderBy>>;
};

/** All input for the `deleteProduct` mutation. */
export type DeleteProductInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
};

/** The output of our delete `Product` mutation. */
export type DeleteProductPayload = {
  __typename?: 'DeleteProductPayload';
  /** Reads a single `Category` that is related to this `Product`. */
  category?: Maybe<Category>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Reads a single `Company` that is related to this `Product`. */
  company?: Maybe<Company>;
  deletedProductNodeId?: Maybe<Scalars['ID']['output']>;
  /** The `Product` that was deleted by this mutation. */
  product?: Maybe<Product>;
  /** An edge for our `Product`. May be used by Relay 1. */
  productEdge?: Maybe<ProductsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** The output of our delete `Product` mutation. */
export type DeleteProductPayloadProductEdgeArgs = {
  orderBy?: InputMaybe<Array<ProductsOrderBy>>;
};

/** All input for the `deleteUser` mutation. */
export type DeleteUserInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
};

/** The output of our delete `User` mutation. */
export type DeleteUserPayload = {
  __typename?: 'DeleteUserPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedUserNodeId?: Maybe<Scalars['ID']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `User` that was deleted by this mutation. */
  user?: Maybe<User>;
  /** An edge for our `User`. May be used by Relay 1. */
  userEdge?: Maybe<UsersEdge>;
};

/** The output of our delete `User` mutation. */
export type DeleteUserPayloadUserEdgeArgs = {
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
};

export type LoginInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type LoginPayload = {
  __typename?: 'LoginPayload';
  token?: Maybe<Scalars['String']['output']>;
  user: User;
};

export type LogoutPayload = {
  __typename?: 'LogoutPayload';
  success?: Maybe<Scalars['Boolean']['output']>;
};

/** The root mutation type which contains root level fields which mutate data. */
export type Mutation = {
  __typename?: 'Mutation';
  /** Creates a single `Address`. */
  createAddress?: Maybe<CreateAddressPayload>;
  /** Creates a single `Category`. */
  createCategory?: Maybe<CreateCategoryPayload>;
  /** Creates a single `Company`. */
  createCompany?: Maybe<CreateCompanyPayload>;
  /** Creates a single `Order`. */
  createOrder?: Maybe<CreateOrderPayload>;
  /** Creates a single `Product`. */
  createProduct?: Maybe<CreateProductPayload>;
  /** Creates a single `User`. */
  createUser?: Maybe<CreateUserPayload>;
  /** Deletes a single `Address` using a unique key. */
  deleteAddress?: Maybe<DeleteAddressPayload>;
  /** Deletes a single `Address` using a unique key. */
  deleteAddressByCompanyId?: Maybe<DeleteAddressPayload>;
  /** Deletes a single `Category` using a unique key. */
  deleteCategory?: Maybe<DeleteCategoryPayload>;
  /** Deletes a single `Company` using a unique key. */
  deleteCompany?: Maybe<DeleteCompanyPayload>;
  /** Deletes a single `Company` using a unique key. */
  deleteCompanyByUserId?: Maybe<DeleteCompanyPayload>;
  /** Deletes a single `Order` using a unique key. */
  deleteOrder?: Maybe<DeleteOrderPayload>;
  /** Deletes a single `Product` using a unique key. */
  deleteProduct?: Maybe<DeleteProductPayload>;
  /** Deletes a single `User` using a unique key. */
  deleteUser?: Maybe<DeleteUserPayload>;
  /** Use this mutation to log in to your account; this login uses sessions so you do not need to take further action. */
  login?: Maybe<LoginPayload>;
  /** Use this mutation to logout from your account. Don't forget to clear the client state! */
  logout?: Maybe<LogoutPayload>;
  /** Use this mutation to create an account on our system. This may only be used if you are logged out. */
  register?: Maybe<RegisterPayload>;
  registerCompany?: Maybe<RegisterCompanyPayload>;
  /** After triggering forgotPassword, you'll be sent a reset token. Combine this with your user ID and a new password to reset your password. */
  resetPassword?: Maybe<ResetPasswordPayload>;
  /** Updates a single `Address` using a unique key and a patch. */
  updateAddress?: Maybe<UpdateAddressPayload>;
  /** Updates a single `Address` using a unique key and a patch. */
  updateAddressByCompanyId?: Maybe<UpdateAddressPayload>;
  /** Updates a single `Category` using a unique key and a patch. */
  updateCategory?: Maybe<UpdateCategoryPayload>;
  /** Updates a single `Company` using a unique key and a patch. */
  updateCompany?: Maybe<UpdateCompanyPayload>;
  /** Updates a single `Company` using a unique key and a patch. */
  updateCompanyByUserId?: Maybe<UpdateCompanyPayload>;
  /** Updates a single `Order` using a unique key and a patch. */
  updateOrder?: Maybe<UpdateOrderPayload>;
  /** Updates a single `Product` using a unique key and a patch. */
  updateProduct?: Maybe<UpdateProductPayload>;
  /** Updates a single `User` using a unique key and a patch. */
  updateUser?: Maybe<UpdateUserPayload>;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateAddressArgs = {
  input: CreateAddressInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateCategoryArgs = {
  input: CreateCategoryInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateCompanyArgs = {
  input: CreateCompanyInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateOrderArgs = {
  input: CreateOrderInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateProductArgs = {
  input: CreateProductInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateUserArgs = {
  input: CreateUserInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteAddressArgs = {
  input: DeleteAddressInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteAddressByCompanyIdArgs = {
  input: DeleteAddressByCompanyIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteCategoryArgs = {
  input: DeleteCategoryInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteCompanyArgs = {
  input: DeleteCompanyInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteCompanyByUserIdArgs = {
  input: DeleteCompanyByUserIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteOrderArgs = {
  input: DeleteOrderInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteProductArgs = {
  input: DeleteProductInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteUserArgs = {
  input: DeleteUserInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationLoginArgs = {
  input: LoginInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationRegisterArgs = {
  input: RegisterInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationRegisterCompanyArgs = {
  input: RegisterCompanyInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationResetPasswordArgs = {
  input: ResetPasswordInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateAddressArgs = {
  input: UpdateAddressInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateAddressByCompanyIdArgs = {
  input: UpdateAddressByCompanyIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateCategoryArgs = {
  input: UpdateCategoryInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateCompanyArgs = {
  input: UpdateCompanyInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateCompanyByUserIdArgs = {
  input: UpdateCompanyByUserIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateOrderArgs = {
  input: UpdateOrderInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateProductArgs = {
  input: UpdateProductInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateUserArgs = {
  input: UpdateUserInput;
};

export type Order = {
  __typename?: 'Order';
  /** Reads a single `Address` that is related to this `Order`. */
  address?: Maybe<Address>;
  addressId: Scalars['UUID']['output'];
  createdAt: Scalars['Datetime']['output'];
  id: Scalars['UUID']['output'];
  /** Reads a single `Product` that is related to this `Order`. */
  product?: Maybe<Product>;
  productId: Scalars['UUID']['output'];
  status: Scalars['String']['output'];
  updatedAt: Scalars['Datetime']['output'];
  /** Reads a single `User` that is related to this `Order`. */
  user?: Maybe<User>;
  userId: Scalars['UUID']['output'];
};

/** A condition to be used against `Order` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type OrderCondition = {
  /** Checks for equality with the object’s `addressId` field. */
  addressId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `productId` field. */
  productId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `userId` field. */
  userId?: InputMaybe<Scalars['UUID']['input']>;
};

/** A filter to be used against `Order` object types. All fields are combined with a logical ‘and.’ */
export type OrderFilter = {
  /** Filter by the object’s `address` relation. */
  address?: InputMaybe<AddressFilter>;
  /** Filter by the object’s `addressId` field. */
  addressId?: InputMaybe<UuidFilter>;
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<OrderFilter>>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<UuidFilter>;
  /** Negates the expression. */
  not?: InputMaybe<OrderFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<OrderFilter>>;
  /** Filter by the object’s `product` relation. */
  product?: InputMaybe<ProductFilter>;
  /** Filter by the object’s `productId` field. */
  productId?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `user` relation. */
  user?: InputMaybe<UserFilter>;
  /** Filter by the object’s `userId` field. */
  userId?: InputMaybe<UuidFilter>;
};

/** An input for mutations affecting `Order` */
export type OrderInput = {
  addressId?: InputMaybe<Scalars['UUID']['input']>;
  addressToAddressId?: InputMaybe<OrdersAddressIdFkeyInput>;
  productId?: InputMaybe<Scalars['UUID']['input']>;
  productToProductId?: InputMaybe<OrdersProductIdFkeyInput>;
  status: Scalars['String']['input'];
  userId?: InputMaybe<Scalars['UUID']['input']>;
  userToUserId?: InputMaybe<OrdersUserIdFkeyInput>;
};

/** The fields on `order` to look up the row to update. */
export type OrderOnOrderForOrdersAddressIdFkeyUsingOrdersPkeyUpdate = {
  id: Scalars['UUID']['input'];
  /** An object where the defined keys will be set on the `order` being updated. */
  patch: UpdateOrderOnOrderForOrdersAddressIdFkeyPatch;
};

/** The fields on `order` to look up the row to update. */
export type OrderOnOrderForOrdersProductIdFkeyUsingOrdersPkeyUpdate = {
  id: Scalars['UUID']['input'];
  /** An object where the defined keys will be set on the `order` being updated. */
  patch: UpdateOrderOnOrderForOrdersProductIdFkeyPatch;
};

/** The fields on `order` to look up the row to update. */
export type OrderOnOrderForOrdersUserIdFkeyUsingOrdersPkeyUpdate = {
  id: Scalars['UUID']['input'];
  /** An object where the defined keys will be set on the `order` being updated. */
  patch: UpdateOrderOnOrderForOrdersUserIdFkeyPatch;
};

/** The fields on `order` to look up the row to connect. */
export type OrderOrdersPkeyConnect = {
  id: Scalars['UUID']['input'];
};

/** The fields on `order` to look up the row to delete. */
export type OrderOrdersPkeyDelete = {
  id: Scalars['UUID']['input'];
};

/** Represents an update to a `Order`. Fields that are set will be updated. */
export type OrderPatch = {
  addressId?: InputMaybe<Scalars['UUID']['input']>;
  addressToAddressId?: InputMaybe<OrdersAddressIdFkeyInput>;
  productId?: InputMaybe<Scalars['UUID']['input']>;
  productToProductId?: InputMaybe<OrdersProductIdFkeyInput>;
  status?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['UUID']['input']>;
  userToUserId?: InputMaybe<OrdersUserIdFkeyInput>;
};

/** The `address` to be created by this mutation. */
export type OrdersAddressIdFkeyAddressesCreateInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  companyId?: InputMaybe<Scalars['UUID']['input']>;
  companyToCompanyId?: InputMaybe<AddressesCompanyIdFkeyInput>;
  contactNumber?: InputMaybe<Scalars['String']['input']>;
  isPrimary?: InputMaybe<Scalars['Boolean']['input']>;
  ordersUsingId?: InputMaybe<OrdersAddressIdFkeyInverseInput>;
  userId?: InputMaybe<Scalars['UUID']['input']>;
  userToUserId?: InputMaybe<AddressesUserIdFkeyInput>;
};

/** Input for the nested mutation of `address` in the `OrderInput` mutation. */
export type OrdersAddressIdFkeyInput = {
  /** The primary key(s) for `address` for the far side of the relationship. */
  connectByCompanyId?: InputMaybe<AddressAddressesCompanyIdKeyConnect>;
  /** The primary key(s) for `address` for the far side of the relationship. */
  connectById?: InputMaybe<AddressAddressesPkeyConnect>;
  /** A `AddressInput` object that will be created and connected to this object. */
  create?: InputMaybe<OrdersAddressIdFkeyAddressesCreateInput>;
  /** The primary key(s) for `address` for the far side of the relationship. */
  deleteByCompanyId?: InputMaybe<AddressAddressesCompanyIdKeyDelete>;
  /** The primary key(s) for `address` for the far side of the relationship. */
  deleteById?: InputMaybe<AddressAddressesPkeyDelete>;
  /** The primary key(s) and patch data for `address` for the far side of the relationship. */
  updateByCompanyId?: InputMaybe<AddressOnOrderForOrdersAddressIdFkeyUsingAddressesCompanyIdKeyUpdate>;
  /** The primary key(s) and patch data for `address` for the far side of the relationship. */
  updateById?: InputMaybe<AddressOnOrderForOrdersAddressIdFkeyUsingAddressesPkeyUpdate>;
};

/** Input for the nested mutation of `order` in the `AddressInput` mutation. */
export type OrdersAddressIdFkeyInverseInput = {
  /** The primary key(s) for `order` for the far side of the relationship. */
  connectById?: InputMaybe<Array<OrderOrdersPkeyConnect>>;
  /** A `OrderInput` object that will be created and connected to this object. */
  create?: InputMaybe<Array<OrdersAddressIdFkeyOrdersCreateInput>>;
  /** The primary key(s) for `order` for the far side of the relationship. */
  deleteById?: InputMaybe<Array<OrderOrdersPkeyDelete>>;
  /** Flag indicating whether all other `order` records that match this relationship should be removed. */
  deleteOthers?: InputMaybe<Scalars['Boolean']['input']>;
  /** The primary key(s) and patch data for `order` for the far side of the relationship. */
  updateById?: InputMaybe<
    Array<OrderOnOrderForOrdersAddressIdFkeyUsingOrdersPkeyUpdate>
  >;
};

/** The `order` to be created by this mutation. */
export type OrdersAddressIdFkeyOrdersCreateInput = {
  addressToAddressId?: InputMaybe<OrdersAddressIdFkeyInput>;
  productId?: InputMaybe<Scalars['UUID']['input']>;
  productToProductId?: InputMaybe<OrdersProductIdFkeyInput>;
  status: Scalars['String']['input'];
  userId?: InputMaybe<Scalars['UUID']['input']>;
  userToUserId?: InputMaybe<OrdersUserIdFkeyInput>;
};

/** A connection to a list of `Order` values. */
export type OrdersConnection = {
  __typename?: 'OrdersConnection';
  /** A list of edges which contains the `Order` and cursor to aid in pagination. */
  edges: Array<OrdersEdge>;
  /** A list of `Order` objects. */
  nodes: Array<Order>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Order` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `Order` edge in the connection. */
export type OrdersEdge = {
  __typename?: 'OrdersEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Order` at the end of the edge. */
  node: Order;
};

/** Methods to use when ordering `Order`. */
export enum OrdersOrderBy {
  AddressIdAsc = 'ADDRESS_ID_ASC',
  AddressIdDesc = 'ADDRESS_ID_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  ProductIdAsc = 'PRODUCT_ID_ASC',
  ProductIdDesc = 'PRODUCT_ID_DESC',
  UserIdAsc = 'USER_ID_ASC',
  UserIdDesc = 'USER_ID_DESC',
}

/** Input for the nested mutation of `product` in the `OrderInput` mutation. */
export type OrdersProductIdFkeyInput = {
  /** The primary key(s) for `product` for the far side of the relationship. */
  connectById?: InputMaybe<ProductProductsPkeyConnect>;
  /** A `ProductInput` object that will be created and connected to this object. */
  create?: InputMaybe<OrdersProductIdFkeyProductsCreateInput>;
  /** The primary key(s) for `product` for the far side of the relationship. */
  deleteById?: InputMaybe<ProductProductsPkeyDelete>;
  /** The primary key(s) and patch data for `product` for the far side of the relationship. */
  updateById?: InputMaybe<ProductOnOrderForOrdersProductIdFkeyUsingProductsPkeyUpdate>;
};

/** Input for the nested mutation of `order` in the `ProductInput` mutation. */
export type OrdersProductIdFkeyInverseInput = {
  /** The primary key(s) for `order` for the far side of the relationship. */
  connectById?: InputMaybe<Array<OrderOrdersPkeyConnect>>;
  /** A `OrderInput` object that will be created and connected to this object. */
  create?: InputMaybe<Array<OrdersProductIdFkeyOrdersCreateInput>>;
  /** The primary key(s) for `order` for the far side of the relationship. */
  deleteById?: InputMaybe<Array<OrderOrdersPkeyDelete>>;
  /** Flag indicating whether all other `order` records that match this relationship should be removed. */
  deleteOthers?: InputMaybe<Scalars['Boolean']['input']>;
  /** The primary key(s) and patch data for `order` for the far side of the relationship. */
  updateById?: InputMaybe<
    Array<OrderOnOrderForOrdersProductIdFkeyUsingOrdersPkeyUpdate>
  >;
};

/** The `order` to be created by this mutation. */
export type OrdersProductIdFkeyOrdersCreateInput = {
  addressId?: InputMaybe<Scalars['UUID']['input']>;
  addressToAddressId?: InputMaybe<OrdersAddressIdFkeyInput>;
  productToProductId?: InputMaybe<OrdersProductIdFkeyInput>;
  status: Scalars['String']['input'];
  userId?: InputMaybe<Scalars['UUID']['input']>;
  userToUserId?: InputMaybe<OrdersUserIdFkeyInput>;
};

/** The `product` to be created by this mutation. */
export type OrdersProductIdFkeyProductsCreateInput = {
  categoryId?: InputMaybe<Scalars['UUID']['input']>;
  categoryToCategoryId?: InputMaybe<ProductsCategoryIdFkeyInput>;
  companyId?: InputMaybe<Scalars['UUID']['input']>;
  companyToCompanyId?: InputMaybe<ProductsCompanyIdFkeyInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  imgUrl?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  ordersUsingId?: InputMaybe<OrdersProductIdFkeyInverseInput>;
  price: Scalars['BigFloat']['input'];
  quantity: Scalars['Int']['input'];
};

/** Input for the nested mutation of `user` in the `OrderInput` mutation. */
export type OrdersUserIdFkeyInput = {
  /** The primary key(s) for `user` for the far side of the relationship. */
  connectById?: InputMaybe<UserUsersPkeyConnect>;
  /** A `UserInput` object that will be created and connected to this object. */
  create?: InputMaybe<OrdersUserIdFkeyUsersCreateInput>;
  /** The primary key(s) for `user` for the far side of the relationship. */
  deleteById?: InputMaybe<UserUsersPkeyDelete>;
  /** The primary key(s) and patch data for `user` for the far side of the relationship. */
  updateById?: InputMaybe<UserOnOrderForOrdersUserIdFkeyUsingUsersPkeyUpdate>;
};

/** Input for the nested mutation of `order` in the `UserInput` mutation. */
export type OrdersUserIdFkeyInverseInput = {
  /** The primary key(s) for `order` for the far side of the relationship. */
  connectById?: InputMaybe<Array<OrderOrdersPkeyConnect>>;
  /** A `OrderInput` object that will be created and connected to this object. */
  create?: InputMaybe<Array<OrdersUserIdFkeyOrdersCreateInput>>;
  /** The primary key(s) for `order` for the far side of the relationship. */
  deleteById?: InputMaybe<Array<OrderOrdersPkeyDelete>>;
  /** Flag indicating whether all other `order` records that match this relationship should be removed. */
  deleteOthers?: InputMaybe<Scalars['Boolean']['input']>;
  /** The primary key(s) and patch data for `order` for the far side of the relationship. */
  updateById?: InputMaybe<
    Array<OrderOnOrderForOrdersUserIdFkeyUsingOrdersPkeyUpdate>
  >;
};

/** The `order` to be created by this mutation. */
export type OrdersUserIdFkeyOrdersCreateInput = {
  addressId?: InputMaybe<Scalars['UUID']['input']>;
  addressToAddressId?: InputMaybe<OrdersAddressIdFkeyInput>;
  productId?: InputMaybe<Scalars['UUID']['input']>;
  productToProductId?: InputMaybe<OrdersProductIdFkeyInput>;
  status: Scalars['String']['input'];
  userToUserId?: InputMaybe<OrdersUserIdFkeyInput>;
};

/** The `user` to be created by this mutation. */
export type OrdersUserIdFkeyUsersCreateInput = {
  addressesUsingId?: InputMaybe<AddressesUserIdFkeyInverseInput>;
  companyUsingId?: InputMaybe<CompaniesUserIdFkeyInverseInput>;
  email: Scalars['String']['input'];
  isAdmin?: InputMaybe<Scalars['Boolean']['input']>;
  isVerified?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  ordersUsingId?: InputMaybe<OrdersUserIdFkeyInverseInput>;
  password?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['Cursor']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['Cursor']['output']>;
};

export type Product = {
  __typename?: 'Product';
  /** Reads and enables pagination through a set of `Address`. */
  addressesByOrderProductIdAndAddressId: ProductAddressesByOrderProductIdAndAddressIdManyToManyConnection;
  /** Reads a single `Category` that is related to this `Product`. */
  category?: Maybe<Category>;
  categoryId?: Maybe<Scalars['UUID']['output']>;
  /** Reads a single `Company` that is related to this `Product`. */
  company?: Maybe<Company>;
  companyId: Scalars['UUID']['output'];
  createdAt: Scalars['Datetime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['UUID']['output'];
  imgUrl?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  /** Reads and enables pagination through a set of `Order`. */
  orders: OrdersConnection;
  price: Scalars['BigFloat']['output'];
  quantity: Scalars['Int']['output'];
  updatedAt: Scalars['Datetime']['output'];
  /** Reads and enables pagination through a set of `User`. */
  usersByOrderProductIdAndUserId: ProductUsersByOrderProductIdAndUserIdManyToManyConnection;
};

export type ProductAddressesByOrderProductIdAndAddressIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<AddressCondition>;
  filter?: InputMaybe<AddressFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AddressesOrderBy>>;
};

export type ProductOrdersArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<OrderCondition>;
  filter?: InputMaybe<OrderFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OrdersOrderBy>>;
};

export type ProductUsersByOrderProductIdAndUserIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<UserCondition>;
  filter?: InputMaybe<UserFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
};

/** A connection to a list of `Address` values, with data from `Order`. */
export type ProductAddressesByOrderProductIdAndAddressIdManyToManyConnection = {
  __typename?: 'ProductAddressesByOrderProductIdAndAddressIdManyToManyConnection';
  /** A list of edges which contains the `Address`, info from the `Order`, and the cursor to aid in pagination. */
  edges: Array<ProductAddressesByOrderProductIdAndAddressIdManyToManyEdge>;
  /** A list of `Address` objects. */
  nodes: Array<Address>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Address` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `Address` edge in the connection, with data from `Order`. */
export type ProductAddressesByOrderProductIdAndAddressIdManyToManyEdge = {
  __typename?: 'ProductAddressesByOrderProductIdAndAddressIdManyToManyEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Address` at the end of the edge. */
  node: Address;
  /** Reads and enables pagination through a set of `Order`. */
  orders: OrdersConnection;
};

/** A `Address` edge in the connection, with data from `Order`. */
export type ProductAddressesByOrderProductIdAndAddressIdManyToManyEdgeOrdersArgs =
  {
    after?: InputMaybe<Scalars['Cursor']['input']>;
    before?: InputMaybe<Scalars['Cursor']['input']>;
    condition?: InputMaybe<OrderCondition>;
    filter?: InputMaybe<OrderFilter>;
    first?: InputMaybe<Scalars['Int']['input']>;
    last?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    orderBy?: InputMaybe<Array<OrdersOrderBy>>;
  };

/** A condition to be used against `Product` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type ProductCondition = {
  /** Checks for equality with the object’s `categoryId` field. */
  categoryId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `companyId` field. */
  companyId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']['input']>;
};

/** A filter to be used against `Product` object types. All fields are combined with a logical ‘and.’ */
export type ProductFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<ProductFilter>>;
  /** Filter by the object’s `category` relation. */
  category?: InputMaybe<CategoryFilter>;
  /** A related `category` exists. */
  categoryExists?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `categoryId` field. */
  categoryId?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `company` relation. */
  company?: InputMaybe<CompanyFilter>;
  /** Filter by the object’s `companyId` field. */
  companyId?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<UuidFilter>;
  /** Negates the expression. */
  not?: InputMaybe<ProductFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<ProductFilter>>;
  /** Filter by the object’s `orders` relation. */
  orders?: InputMaybe<ProductToManyOrderFilter>;
  /** Some related `orders` exist. */
  ordersExist?: InputMaybe<Scalars['Boolean']['input']>;
};

/** An input for mutations affecting `Product` */
export type ProductInput = {
  categoryId?: InputMaybe<Scalars['UUID']['input']>;
  categoryToCategoryId?: InputMaybe<ProductsCategoryIdFkeyInput>;
  companyId?: InputMaybe<Scalars['UUID']['input']>;
  companyToCompanyId?: InputMaybe<ProductsCompanyIdFkeyInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  imgUrl?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  ordersUsingId?: InputMaybe<OrdersProductIdFkeyInverseInput>;
  price: Scalars['BigFloat']['input'];
  quantity: Scalars['Int']['input'];
};

/** The fields on `product` to look up the row to update. */
export type ProductOnOrderForOrdersProductIdFkeyUsingProductsPkeyUpdate = {
  id: Scalars['UUID']['input'];
  /** An object where the defined keys will be set on the `product` being updated. */
  patch: UpdateProductOnOrderForOrdersProductIdFkeyPatch;
};

/** The fields on `product` to look up the row to update. */
export type ProductOnProductForProductsCategoryIdFkeyUsingProductsPkeyUpdate = {
  id: Scalars['UUID']['input'];
  /** An object where the defined keys will be set on the `product` being updated. */
  patch: UpdateProductOnProductForProductsCategoryIdFkeyPatch;
};

/** The fields on `product` to look up the row to update. */
export type ProductOnProductForProductsCompanyIdFkeyUsingProductsPkeyUpdate = {
  id: Scalars['UUID']['input'];
  /** An object where the defined keys will be set on the `product` being updated. */
  patch: UpdateProductOnProductForProductsCompanyIdFkeyPatch;
};

/** Represents an update to a `Product`. Fields that are set will be updated. */
export type ProductPatch = {
  categoryId?: InputMaybe<Scalars['UUID']['input']>;
  categoryToCategoryId?: InputMaybe<ProductsCategoryIdFkeyInput>;
  companyId?: InputMaybe<Scalars['UUID']['input']>;
  companyToCompanyId?: InputMaybe<ProductsCompanyIdFkeyInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  imgUrl?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  ordersUsingId?: InputMaybe<OrdersProductIdFkeyInverseInput>;
  price?: InputMaybe<Scalars['BigFloat']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
};

/** The fields on `product` to look up the row to connect. */
export type ProductProductsPkeyConnect = {
  id: Scalars['UUID']['input'];
};

/** The fields on `product` to look up the row to delete. */
export type ProductProductsPkeyDelete = {
  id: Scalars['UUID']['input'];
};

/** A filter to be used against many `Order` object types. All fields are combined with a logical ‘and.’ */
export type ProductToManyOrderFilter = {
  /** Every related `Order` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<OrderFilter>;
  /** No related `Order` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<OrderFilter>;
  /** Some related `Order` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<OrderFilter>;
};

/** A connection to a list of `User` values, with data from `Order`. */
export type ProductUsersByOrderProductIdAndUserIdManyToManyConnection = {
  __typename?: 'ProductUsersByOrderProductIdAndUserIdManyToManyConnection';
  /** A list of edges which contains the `User`, info from the `Order`, and the cursor to aid in pagination. */
  edges: Array<ProductUsersByOrderProductIdAndUserIdManyToManyEdge>;
  /** A list of `User` objects. */
  nodes: Array<User>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `User` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `User` edge in the connection, with data from `Order`. */
export type ProductUsersByOrderProductIdAndUserIdManyToManyEdge = {
  __typename?: 'ProductUsersByOrderProductIdAndUserIdManyToManyEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `User` at the end of the edge. */
  node: User;
  /** Reads and enables pagination through a set of `Order`. */
  orders: OrdersConnection;
};

/** A `User` edge in the connection, with data from `Order`. */
export type ProductUsersByOrderProductIdAndUserIdManyToManyEdgeOrdersArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<OrderCondition>;
  filter?: InputMaybe<OrderFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OrdersOrderBy>>;
};

/** The `category` to be created by this mutation. */
export type ProductsCategoryIdFkeyCategoriesCreateInput = {
  categoryToParentId?: InputMaybe<CategoriesCategoryIdFkeyInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  parentId?: InputMaybe<Scalars['UUID']['input']>;
  productsUsingId?: InputMaybe<ProductsCategoryIdFkeyInverseInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

/** Input for the nested mutation of `category` in the `ProductInput` mutation. */
export type ProductsCategoryIdFkeyInput = {
  /** The primary key(s) for `category` for the far side of the relationship. */
  connectById?: InputMaybe<CategoryCategoriesPkeyConnect>;
  /** A `CategoryInput` object that will be created and connected to this object. */
  create?: InputMaybe<ProductsCategoryIdFkeyCategoriesCreateInput>;
  /** The primary key(s) for `category` for the far side of the relationship. */
  deleteById?: InputMaybe<CategoryCategoriesPkeyDelete>;
  /** The primary key(s) and patch data for `category` for the far side of the relationship. */
  updateById?: InputMaybe<CategoryOnProductForProductsCategoryIdFkeyUsingCategoriesPkeyUpdate>;
};

/** Input for the nested mutation of `product` in the `CategoryInput` mutation. */
export type ProductsCategoryIdFkeyInverseInput = {
  /** The primary key(s) for `product` for the far side of the relationship. */
  connectById?: InputMaybe<Array<ProductProductsPkeyConnect>>;
  /** A `ProductInput` object that will be created and connected to this object. */
  create?: InputMaybe<Array<ProductsCategoryIdFkeyProductsCreateInput>>;
  /** The primary key(s) for `product` for the far side of the relationship. */
  deleteById?: InputMaybe<Array<ProductProductsPkeyDelete>>;
  /** Flag indicating whether all other `product` records that match this relationship should be removed. */
  deleteOthers?: InputMaybe<Scalars['Boolean']['input']>;
  /** The primary key(s) and patch data for `product` for the far side of the relationship. */
  updateById?: InputMaybe<
    Array<ProductOnProductForProductsCategoryIdFkeyUsingProductsPkeyUpdate>
  >;
};

/** The `product` to be created by this mutation. */
export type ProductsCategoryIdFkeyProductsCreateInput = {
  categoryToCategoryId?: InputMaybe<ProductsCategoryIdFkeyInput>;
  companyId?: InputMaybe<Scalars['UUID']['input']>;
  companyToCompanyId?: InputMaybe<ProductsCompanyIdFkeyInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  imgUrl?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  ordersUsingId?: InputMaybe<OrdersProductIdFkeyInverseInput>;
  price: Scalars['BigFloat']['input'];
  quantity: Scalars['Int']['input'];
};

/** The `company` to be created by this mutation. */
export type ProductsCompanyIdFkeyCompaniesCreateInput = {
  addressUsingId?: InputMaybe<AddressesCompanyIdFkeyInverseInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  isVerified?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  productsUsingId?: InputMaybe<ProductsCompanyIdFkeyInverseInput>;
  userId?: InputMaybe<Scalars['UUID']['input']>;
  userToUserId?: InputMaybe<CompaniesUserIdFkeyInput>;
};

/** Input for the nested mutation of `company` in the `ProductInput` mutation. */
export type ProductsCompanyIdFkeyInput = {
  /** The primary key(s) for `company` for the far side of the relationship. */
  connectById?: InputMaybe<CompanyCompaniesPkeyConnect>;
  /** The primary key(s) for `company` for the far side of the relationship. */
  connectByUserId?: InputMaybe<CompanyCompaniesUserIdKeyConnect>;
  /** A `CompanyInput` object that will be created and connected to this object. */
  create?: InputMaybe<ProductsCompanyIdFkeyCompaniesCreateInput>;
  /** The primary key(s) for `company` for the far side of the relationship. */
  deleteById?: InputMaybe<CompanyCompaniesPkeyDelete>;
  /** The primary key(s) for `company` for the far side of the relationship. */
  deleteByUserId?: InputMaybe<CompanyCompaniesUserIdKeyDelete>;
  /** The primary key(s) and patch data for `company` for the far side of the relationship. */
  updateById?: InputMaybe<CompanyOnProductForProductsCompanyIdFkeyUsingCompaniesPkeyUpdate>;
  /** The primary key(s) and patch data for `company` for the far side of the relationship. */
  updateByUserId?: InputMaybe<CompanyOnProductForProductsCompanyIdFkeyUsingCompaniesUserIdKeyUpdate>;
};

/** Input for the nested mutation of `product` in the `CompanyInput` mutation. */
export type ProductsCompanyIdFkeyInverseInput = {
  /** The primary key(s) for `product` for the far side of the relationship. */
  connectById?: InputMaybe<Array<ProductProductsPkeyConnect>>;
  /** A `ProductInput` object that will be created and connected to this object. */
  create?: InputMaybe<Array<ProductsCompanyIdFkeyProductsCreateInput>>;
  /** The primary key(s) for `product` for the far side of the relationship. */
  deleteById?: InputMaybe<Array<ProductProductsPkeyDelete>>;
  /** Flag indicating whether all other `product` records that match this relationship should be removed. */
  deleteOthers?: InputMaybe<Scalars['Boolean']['input']>;
  /** The primary key(s) and patch data for `product` for the far side of the relationship. */
  updateById?: InputMaybe<
    Array<ProductOnProductForProductsCompanyIdFkeyUsingProductsPkeyUpdate>
  >;
};

/** The `product` to be created by this mutation. */
export type ProductsCompanyIdFkeyProductsCreateInput = {
  categoryId?: InputMaybe<Scalars['UUID']['input']>;
  categoryToCategoryId?: InputMaybe<ProductsCategoryIdFkeyInput>;
  companyToCompanyId?: InputMaybe<ProductsCompanyIdFkeyInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  imgUrl?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  ordersUsingId?: InputMaybe<OrdersProductIdFkeyInverseInput>;
  price: Scalars['BigFloat']['input'];
  quantity: Scalars['Int']['input'];
};

/** A connection to a list of `Product` values. */
export type ProductsConnection = {
  __typename?: 'ProductsConnection';
  /** A list of edges which contains the `Product` and cursor to aid in pagination. */
  edges: Array<ProductsEdge>;
  /** A list of `Product` objects. */
  nodes: Array<Product>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Product` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `Product` edge in the connection. */
export type ProductsEdge = {
  __typename?: 'ProductsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Product` at the end of the edge. */
  node: Product;
};

/** Methods to use when ordering `Product`. */
export enum ProductsOrderBy {
  CategoryIdAsc = 'CATEGORY_ID_ASC',
  CategoryIdDesc = 'CATEGORY_ID_DESC',
  CompanyIdAsc = 'COMPANY_ID_ASC',
  CompanyIdDesc = 'COMPANY_ID_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
}

/** The root query type which gives access points into the data universe. */
export type Query = {
  __typename?: 'Query';
  address?: Maybe<Address>;
  addressByCompanyId?: Maybe<Address>;
  /** Reads and enables pagination through a set of `Address`. */
  addresses?: Maybe<AddressesConnection>;
  /** Reads and enables pagination through a set of `Category`. */
  categories?: Maybe<CategoriesConnection>;
  category?: Maybe<Category>;
  /** Reads and enables pagination through a set of `Company`. */
  companies?: Maybe<CompaniesConnection>;
  company?: Maybe<Company>;
  companyByUserId?: Maybe<Company>;
  currentSessionId?: Maybe<Scalars['UUID']['output']>;
  currentUser?: Maybe<User>;
  currentUserId?: Maybe<Scalars['UUID']['output']>;
  currentUserIsAdmin?: Maybe<Scalars['Boolean']['output']>;
  order?: Maybe<Order>;
  /** Reads and enables pagination through a set of `Order`. */
  orders?: Maybe<OrdersConnection>;
  product?: Maybe<Product>;
  /** Reads and enables pagination through a set of `Product`. */
  products?: Maybe<ProductsConnection>;
  /**
   * Exposes the root query type nested one level down. This is helpful for Relay 1
   * which can only query top level fields if they are in a particular form.
   */
  query: Query;
  user?: Maybe<User>;
  /** Reads and enables pagination through a set of `User`. */
  users?: Maybe<UsersConnection>;
};

/** The root query type which gives access points into the data universe. */
export type QueryAddressArgs = {
  id: Scalars['UUID']['input'];
};

/** The root query type which gives access points into the data universe. */
export type QueryAddressByCompanyIdArgs = {
  companyId: Scalars['UUID']['input'];
};

/** The root query type which gives access points into the data universe. */
export type QueryAddressesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<AddressCondition>;
  filter?: InputMaybe<AddressFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AddressesOrderBy>>;
};

/** The root query type which gives access points into the data universe. */
export type QueryCategoriesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<CategoryCondition>;
  filter?: InputMaybe<CategoryFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CategoriesOrderBy>>;
};

/** The root query type which gives access points into the data universe. */
export type QueryCategoryArgs = {
  id: Scalars['UUID']['input'];
};

/** The root query type which gives access points into the data universe. */
export type QueryCompaniesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<CompanyCondition>;
  filter?: InputMaybe<CompanyFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CompaniesOrderBy>>;
};

/** The root query type which gives access points into the data universe. */
export type QueryCompanyArgs = {
  id: Scalars['UUID']['input'];
};

/** The root query type which gives access points into the data universe. */
export type QueryCompanyByUserIdArgs = {
  userId: Scalars['UUID']['input'];
};

/** The root query type which gives access points into the data universe. */
export type QueryOrderArgs = {
  id: Scalars['UUID']['input'];
};

/** The root query type which gives access points into the data universe. */
export type QueryOrdersArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<OrderCondition>;
  filter?: InputMaybe<OrderFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OrdersOrderBy>>;
};

/** The root query type which gives access points into the data universe. */
export type QueryProductArgs = {
  id: Scalars['UUID']['input'];
};

/** The root query type which gives access points into the data universe. */
export type QueryProductsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<ProductCondition>;
  filter?: InputMaybe<ProductFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ProductsOrderBy>>;
};

/** The root query type which gives access points into the data universe. */
export type QueryUserArgs = {
  id: Scalars['UUID']['input'];
};

/** The root query type which gives access points into the data universe. */
export type QueryUsersArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<UserCondition>;
  filter?: InputMaybe<UserFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
};

export type RegisterCompanyInput = {
  address: Scalars['String']['input'];
  companyName: Scalars['String']['input'];
  contactNumber: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type RegisterCompanyPayload = {
  __typename?: 'RegisterCompanyPayload';
  company: Company;
  token: Scalars['String']['output'];
};

export type RegisterInput = {
  address: Scalars['String']['input'];
  contactNumber: Scalars['String']['input'];
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type RegisterPayload = {
  __typename?: 'RegisterPayload';
  token: Scalars['String']['output'];
  user: User;
};

/** All input for the `resetPassword` mutation. */
export type ResetPasswordInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  newPassword: Scalars['String']['input'];
  resetToken: Scalars['String']['input'];
  userId: Scalars['UUID']['input'];
};

/** The output of our `resetPassword` mutation. */
export type ResetPasswordPayload = {
  __typename?: 'ResetPasswordPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

/** A filter to be used against String fields. All fields are combined with a logical ‘and.’ */
export type StringFilter = {
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: InputMaybe<Scalars['String']['input']>;
  /** Not equal to the specified value, treating null like an ordinary value (case-insensitive). */
  distinctFromInsensitive?: InputMaybe<Scalars['String']['input']>;
  /** Ends with the specified string (case-sensitive). */
  endsWith?: InputMaybe<Scalars['String']['input']>;
  /** Ends with the specified string (case-insensitive). */
  endsWithInsensitive?: InputMaybe<Scalars['String']['input']>;
  /** Equal to the specified value. */
  equalTo?: InputMaybe<Scalars['String']['input']>;
  /** Equal to the specified value (case-insensitive). */
  equalToInsensitive?: InputMaybe<Scalars['String']['input']>;
  /** Greater than the specified value. */
  greaterThan?: InputMaybe<Scalars['String']['input']>;
  /** Greater than the specified value (case-insensitive). */
  greaterThanInsensitive?: InputMaybe<Scalars['String']['input']>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: InputMaybe<Scalars['String']['input']>;
  /** Greater than or equal to the specified value (case-insensitive). */
  greaterThanOrEqualToInsensitive?: InputMaybe<Scalars['String']['input']>;
  /** Included in the specified list. */
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Included in the specified list (case-insensitive). */
  inInsensitive?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Contains the specified string (case-sensitive). */
  includes?: InputMaybe<Scalars['String']['input']>;
  /** Contains the specified string (case-insensitive). */
  includesInsensitive?: InputMaybe<Scalars['String']['input']>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  /** Less than the specified value. */
  lessThan?: InputMaybe<Scalars['String']['input']>;
  /** Less than the specified value (case-insensitive). */
  lessThanInsensitive?: InputMaybe<Scalars['String']['input']>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: InputMaybe<Scalars['String']['input']>;
  /** Less than or equal to the specified value (case-insensitive). */
  lessThanOrEqualToInsensitive?: InputMaybe<Scalars['String']['input']>;
  /** Matches the specified pattern (case-sensitive). An underscore (_) matches any single character; a percent sign (%) matches any sequence of zero or more characters. */
  like?: InputMaybe<Scalars['String']['input']>;
  /** Matches the specified pattern (case-insensitive). An underscore (_) matches any single character; a percent sign (%) matches any sequence of zero or more characters. */
  likeInsensitive?: InputMaybe<Scalars['String']['input']>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: InputMaybe<Scalars['String']['input']>;
  /** Equal to the specified value, treating null like an ordinary value (case-insensitive). */
  notDistinctFromInsensitive?: InputMaybe<Scalars['String']['input']>;
  /** Does not end with the specified string (case-sensitive). */
  notEndsWith?: InputMaybe<Scalars['String']['input']>;
  /** Does not end with the specified string (case-insensitive). */
  notEndsWithInsensitive?: InputMaybe<Scalars['String']['input']>;
  /** Not equal to the specified value. */
  notEqualTo?: InputMaybe<Scalars['String']['input']>;
  /** Not equal to the specified value (case-insensitive). */
  notEqualToInsensitive?: InputMaybe<Scalars['String']['input']>;
  /** Not included in the specified list. */
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Not included in the specified list (case-insensitive). */
  notInInsensitive?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Does not contain the specified string (case-sensitive). */
  notIncludes?: InputMaybe<Scalars['String']['input']>;
  /** Does not contain the specified string (case-insensitive). */
  notIncludesInsensitive?: InputMaybe<Scalars['String']['input']>;
  /** Does not match the specified pattern (case-sensitive). An underscore (_) matches any single character; a percent sign (%) matches any sequence of zero or more characters. */
  notLike?: InputMaybe<Scalars['String']['input']>;
  /** Does not match the specified pattern (case-insensitive). An underscore (_) matches any single character; a percent sign (%) matches any sequence of zero or more characters. */
  notLikeInsensitive?: InputMaybe<Scalars['String']['input']>;
  /** Does not start with the specified string (case-sensitive). */
  notStartsWith?: InputMaybe<Scalars['String']['input']>;
  /** Does not start with the specified string (case-insensitive). */
  notStartsWithInsensitive?: InputMaybe<Scalars['String']['input']>;
  /** Starts with the specified string (case-sensitive). */
  startsWith?: InputMaybe<Scalars['String']['input']>;
  /** Starts with the specified string (case-insensitive). */
  startsWithInsensitive?: InputMaybe<Scalars['String']['input']>;
};

/** A filter to be used against UUID fields. All fields are combined with a logical ‘and.’ */
export type UuidFilter = {
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: InputMaybe<Scalars['UUID']['input']>;
  /** Equal to the specified value. */
  equalTo?: InputMaybe<Scalars['UUID']['input']>;
  /** Greater than the specified value. */
  greaterThan?: InputMaybe<Scalars['UUID']['input']>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: InputMaybe<Scalars['UUID']['input']>;
  /** Included in the specified list. */
  in?: InputMaybe<Array<Scalars['UUID']['input']>>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  /** Less than the specified value. */
  lessThan?: InputMaybe<Scalars['UUID']['input']>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: InputMaybe<Scalars['UUID']['input']>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: InputMaybe<Scalars['UUID']['input']>;
  /** Not equal to the specified value. */
  notEqualTo?: InputMaybe<Scalars['UUID']['input']>;
  /** Not included in the specified list. */
  notIn?: InputMaybe<Array<Scalars['UUID']['input']>>;
};

/** All input for the `updateAddressByCompanyId` mutation. */
export type UpdateAddressByCompanyIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  companyId: Scalars['UUID']['input'];
  /** An object where the defined keys will be set on the `Address` being updated. */
  patch: AddressPatch;
};

/** All input for the `updateAddress` mutation. */
export type UpdateAddressInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
  /** An object where the defined keys will be set on the `Address` being updated. */
  patch: AddressPatch;
};

/** The output of our update `Address` mutation. */
export type UpdateAddressPayload = {
  __typename?: 'UpdateAddressPayload';
  /** The `Address` that was updated by this mutation. */
  address?: Maybe<Address>;
  /** An edge for our `Address`. May be used by Relay 1. */
  addressEdge?: Maybe<AddressesEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Reads a single `Company` that is related to this `Address`. */
  company?: Maybe<Company>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `User` that is related to this `Address`. */
  user?: Maybe<User>;
};

/** The output of our update `Address` mutation. */
export type UpdateAddressPayloadAddressEdgeArgs = {
  orderBy?: InputMaybe<Array<AddressesOrderBy>>;
};

/** All input for the `updateCategory` mutation. */
export type UpdateCategoryInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
  /** An object where the defined keys will be set on the `Category` being updated. */
  patch: CategoryPatch;
};

/** The output of our update `Category` mutation. */
export type UpdateCategoryPayload = {
  __typename?: 'UpdateCategoryPayload';
  /** The `Category` that was updated by this mutation. */
  category?: Maybe<Category>;
  /** An edge for our `Category`. May be used by Relay 1. */
  categoryEdge?: Maybe<CategoriesEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Reads a single `Category` that is related to this `Category`. */
  parent?: Maybe<Category>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** The output of our update `Category` mutation. */
export type UpdateCategoryPayloadCategoryEdgeArgs = {
  orderBy?: InputMaybe<Array<CategoriesOrderBy>>;
};

/** All input for the `updateCompanyByUserId` mutation. */
export type UpdateCompanyByUserIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** An object where the defined keys will be set on the `Company` being updated. */
  patch: CompanyPatch;
  userId: Scalars['UUID']['input'];
};

/** All input for the `updateCompany` mutation. */
export type UpdateCompanyInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
  /** An object where the defined keys will be set on the `Company` being updated. */
  patch: CompanyPatch;
};

/** The output of our update `Company` mutation. */
export type UpdateCompanyPayload = {
  __typename?: 'UpdateCompanyPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** The `Company` that was updated by this mutation. */
  company?: Maybe<Company>;
  /** An edge for our `Company`. May be used by Relay 1. */
  companyEdge?: Maybe<CompaniesEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `User` that is related to this `Company`. */
  user?: Maybe<User>;
};

/** The output of our update `Company` mutation. */
export type UpdateCompanyPayloadCompanyEdgeArgs = {
  orderBy?: InputMaybe<Array<CompaniesOrderBy>>;
};

/** All input for the `updateOrder` mutation. */
export type UpdateOrderInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
  /** An object where the defined keys will be set on the `Order` being updated. */
  patch: OrderPatch;
};

/** The output of our update `Order` mutation. */
export type UpdateOrderPayload = {
  __typename?: 'UpdateOrderPayload';
  /** Reads a single `Address` that is related to this `Order`. */
  address?: Maybe<Address>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** The `Order` that was updated by this mutation. */
  order?: Maybe<Order>;
  /** An edge for our `Order`. May be used by Relay 1. */
  orderEdge?: Maybe<OrdersEdge>;
  /** Reads a single `Product` that is related to this `Order`. */
  product?: Maybe<Product>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `User` that is related to this `Order`. */
  user?: Maybe<User>;
};

/** The output of our update `Order` mutation. */
export type UpdateOrderPayloadOrderEdgeArgs = {
  orderBy?: InputMaybe<Array<OrdersOrderBy>>;
};

/** All input for the `updateProduct` mutation. */
export type UpdateProductInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
  /** An object where the defined keys will be set on the `Product` being updated. */
  patch: ProductPatch;
};

/** The output of our update `Product` mutation. */
export type UpdateProductPayload = {
  __typename?: 'UpdateProductPayload';
  /** Reads a single `Category` that is related to this `Product`. */
  category?: Maybe<Category>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Reads a single `Company` that is related to this `Product`. */
  company?: Maybe<Company>;
  /** The `Product` that was updated by this mutation. */
  product?: Maybe<Product>;
  /** An edge for our `Product`. May be used by Relay 1. */
  productEdge?: Maybe<ProductsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** The output of our update `Product` mutation. */
export type UpdateProductPayloadProductEdgeArgs = {
  orderBy?: InputMaybe<Array<ProductsOrderBy>>;
};

/** All input for the `updateUser` mutation. */
export type UpdateUserInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
  /** An object where the defined keys will be set on the `User` being updated. */
  patch: UserPatch;
};

/** The output of our update `User` mutation. */
export type UpdateUserPayload = {
  __typename?: 'UpdateUserPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `User` that was updated by this mutation. */
  user?: Maybe<User>;
  /** An edge for our `User`. May be used by Relay 1. */
  userEdge?: Maybe<UsersEdge>;
};

/** The output of our update `User` mutation. */
export type UpdateUserPayloadUserEdgeArgs = {
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
};

export type User = {
  __typename?: 'User';
  /** Reads and enables pagination through a set of `Address`. */
  addresses: AddressesConnection;
  /** Reads and enables pagination through a set of `Address`. */
  addressesByOrderUserIdAndAddressId: UserAddressesByOrderUserIdAndAddressIdManyToManyConnection;
  /**
   * Reads and enables pagination through a set of `Company`.
   * @deprecated Please use company instead
   */
  companies: CompaniesConnection;
  /** Reads a single `Company` that is related to this `User`. */
  company?: Maybe<Company>;
  createdAt: Scalars['Datetime']['output'];
  email: Scalars['String']['output'];
  id: Scalars['UUID']['output'];
  isAdmin: Scalars['Boolean']['output'];
  isVerified: Scalars['Boolean']['output'];
  name?: Maybe<Scalars['String']['output']>;
  /** Reads and enables pagination through a set of `Order`. */
  orders: OrdersConnection;
  password?: Maybe<Scalars['String']['output']>;
  /** Reads and enables pagination through a set of `Product`. */
  productsByOrderUserIdAndProductId: UserProductsByOrderUserIdAndProductIdManyToManyConnection;
  type: Scalars['String']['output'];
  updatedAt: Scalars['Datetime']['output'];
};

export type UserAddressesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<AddressCondition>;
  filter?: InputMaybe<AddressFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AddressesOrderBy>>;
};

export type UserAddressesByOrderUserIdAndAddressIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<AddressCondition>;
  filter?: InputMaybe<AddressFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AddressesOrderBy>>;
};

export type UserCompaniesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<CompanyCondition>;
  filter?: InputMaybe<CompanyFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CompaniesOrderBy>>;
};

export type UserOrdersArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<OrderCondition>;
  filter?: InputMaybe<OrderFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OrdersOrderBy>>;
};

export type UserProductsByOrderUserIdAndProductIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<ProductCondition>;
  filter?: InputMaybe<ProductFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ProductsOrderBy>>;
};

/** A connection to a list of `Address` values, with data from `Order`. */
export type UserAddressesByOrderUserIdAndAddressIdManyToManyConnection = {
  __typename?: 'UserAddressesByOrderUserIdAndAddressIdManyToManyConnection';
  /** A list of edges which contains the `Address`, info from the `Order`, and the cursor to aid in pagination. */
  edges: Array<UserAddressesByOrderUserIdAndAddressIdManyToManyEdge>;
  /** A list of `Address` objects. */
  nodes: Array<Address>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Address` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `Address` edge in the connection, with data from `Order`. */
export type UserAddressesByOrderUserIdAndAddressIdManyToManyEdge = {
  __typename?: 'UserAddressesByOrderUserIdAndAddressIdManyToManyEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Address` at the end of the edge. */
  node: Address;
  /** Reads and enables pagination through a set of `Order`. */
  orders: OrdersConnection;
};

/** A `Address` edge in the connection, with data from `Order`. */
export type UserAddressesByOrderUserIdAndAddressIdManyToManyEdgeOrdersArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<OrderCondition>;
  filter?: InputMaybe<OrderFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OrdersOrderBy>>;
};

/** A condition to be used against `User` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type UserCondition = {
  /** Checks for equality with the object’s `email` field. */
  email?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `name` field. */
  name?: InputMaybe<Scalars['String']['input']>;
};

/** A filter to be used against `User` object types. All fields are combined with a logical ‘and.’ */
export type UserFilter = {
  /** Filter by the object’s `addresses` relation. */
  addresses?: InputMaybe<UserToManyAddressFilter>;
  /** Some related `addresses` exist. */
  addressesExist?: InputMaybe<Scalars['Boolean']['input']>;
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<UserFilter>>;
  /** Filter by the object’s `company` relation. */
  company?: InputMaybe<CompanyFilter>;
  /** A related `company` exists. */
  companyExists?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `email` field. */
  email?: InputMaybe<StringFilter>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `name` field. */
  name?: InputMaybe<StringFilter>;
  /** Negates the expression. */
  not?: InputMaybe<UserFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<UserFilter>>;
  /** Filter by the object’s `orders` relation. */
  orders?: InputMaybe<UserToManyOrderFilter>;
  /** Some related `orders` exist. */
  ordersExist?: InputMaybe<Scalars['Boolean']['input']>;
};

/** An input for mutations affecting `User` */
export type UserInput = {
  addressesUsingId?: InputMaybe<AddressesUserIdFkeyInverseInput>;
  companyUsingId?: InputMaybe<CompaniesUserIdFkeyInverseInput>;
  email: Scalars['String']['input'];
  isAdmin?: InputMaybe<Scalars['Boolean']['input']>;
  isVerified?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  ordersUsingId?: InputMaybe<OrdersUserIdFkeyInverseInput>;
  password?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

/** The fields on `user` to look up the row to update. */
export type UserOnAddressForAddressesUserIdFkeyUsingUsersPkeyUpdate = {
  id: Scalars['UUID']['input'];
  /** An object where the defined keys will be set on the `user` being updated. */
  patch: UpdateUserOnAddressForAddressesUserIdFkeyPatch;
};

/** The fields on `user` to look up the row to update. */
export type UserOnCompanyForCompaniesUserIdFkeyUsingUsersPkeyUpdate = {
  id: Scalars['UUID']['input'];
  /** An object where the defined keys will be set on the `user` being updated. */
  patch: UpdateUserOnCompanyForCompaniesUserIdFkeyPatch;
};

/** The fields on `user` to look up the row to update. */
export type UserOnOrderForOrdersUserIdFkeyUsingUsersPkeyUpdate = {
  id: Scalars['UUID']['input'];
  /** An object where the defined keys will be set on the `user` being updated. */
  patch: UpdateUserOnOrderForOrdersUserIdFkeyPatch;
};

/** Represents an update to a `User`. Fields that are set will be updated. */
export type UserPatch = {
  addressesUsingId?: InputMaybe<AddressesUserIdFkeyInverseInput>;
  companyUsingId?: InputMaybe<CompaniesUserIdFkeyInverseInput>;
  email?: InputMaybe<Scalars['String']['input']>;
  isAdmin?: InputMaybe<Scalars['Boolean']['input']>;
  isVerified?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  ordersUsingId?: InputMaybe<OrdersUserIdFkeyInverseInput>;
  password?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

/** A connection to a list of `Product` values, with data from `Order`. */
export type UserProductsByOrderUserIdAndProductIdManyToManyConnection = {
  __typename?: 'UserProductsByOrderUserIdAndProductIdManyToManyConnection';
  /** A list of edges which contains the `Product`, info from the `Order`, and the cursor to aid in pagination. */
  edges: Array<UserProductsByOrderUserIdAndProductIdManyToManyEdge>;
  /** A list of `Product` objects. */
  nodes: Array<Product>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Product` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `Product` edge in the connection, with data from `Order`. */
export type UserProductsByOrderUserIdAndProductIdManyToManyEdge = {
  __typename?: 'UserProductsByOrderUserIdAndProductIdManyToManyEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Product` at the end of the edge. */
  node: Product;
  /** Reads and enables pagination through a set of `Order`. */
  orders: OrdersConnection;
};

/** A `Product` edge in the connection, with data from `Order`. */
export type UserProductsByOrderUserIdAndProductIdManyToManyEdgeOrdersArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<OrderCondition>;
  filter?: InputMaybe<OrderFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OrdersOrderBy>>;
};

/** A filter to be used against many `Address` object types. All fields are combined with a logical ‘and.’ */
export type UserToManyAddressFilter = {
  /** Every related `Address` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<AddressFilter>;
  /** No related `Address` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<AddressFilter>;
  /** Some related `Address` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<AddressFilter>;
};

/** A filter to be used against many `Order` object types. All fields are combined with a logical ‘and.’ */
export type UserToManyOrderFilter = {
  /** Every related `Order` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<OrderFilter>;
  /** No related `Order` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<OrderFilter>;
  /** Some related `Order` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<OrderFilter>;
};

/** The fields on `user` to look up the row to connect. */
export type UserUsersPkeyConnect = {
  id: Scalars['UUID']['input'];
};

/** The fields on `user` to look up the row to delete. */
export type UserUsersPkeyDelete = {
  id: Scalars['UUID']['input'];
};

/** A connection to a list of `User` values. */
export type UsersConnection = {
  __typename?: 'UsersConnection';
  /** A list of edges which contains the `User` and cursor to aid in pagination. */
  edges: Array<UsersEdge>;
  /** A list of `User` objects. */
  nodes: Array<User>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `User` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `User` edge in the connection. */
export type UsersEdge = {
  __typename?: 'UsersEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `User` at the end of the edge. */
  node: User;
};

/** Methods to use when ordering `User`. */
export enum UsersOrderBy {
  EmailAsc = 'EMAIL_ASC',
  EmailDesc = 'EMAIL_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
}

/** An object where the defined keys will be set on the `address` being updated. */
export type UpdateAddressOnAddressForAddressesCompanyIdFkeyPatch = {
  address?: InputMaybe<Scalars['String']['input']>;
  companyToCompanyId?: InputMaybe<AddressesCompanyIdFkeyInput>;
  contactNumber?: InputMaybe<Scalars['String']['input']>;
  isPrimary?: InputMaybe<Scalars['Boolean']['input']>;
  ordersUsingId?: InputMaybe<OrdersAddressIdFkeyInverseInput>;
  userId?: InputMaybe<Scalars['UUID']['input']>;
  userToUserId?: InputMaybe<AddressesUserIdFkeyInput>;
};

/** An object where the defined keys will be set on the `address` being updated. */
export type UpdateAddressOnAddressForAddressesUserIdFkeyPatch = {
  address?: InputMaybe<Scalars['String']['input']>;
  companyId?: InputMaybe<Scalars['UUID']['input']>;
  companyToCompanyId?: InputMaybe<AddressesCompanyIdFkeyInput>;
  contactNumber?: InputMaybe<Scalars['String']['input']>;
  isPrimary?: InputMaybe<Scalars['Boolean']['input']>;
  ordersUsingId?: InputMaybe<OrdersAddressIdFkeyInverseInput>;
  userToUserId?: InputMaybe<AddressesUserIdFkeyInput>;
};

/** An object where the defined keys will be set on the `address` being updated. */
export type UpdateAddressOnOrderForOrdersAddressIdFkeyPatch = {
  address?: InputMaybe<Scalars['String']['input']>;
  companyId?: InputMaybe<Scalars['UUID']['input']>;
  companyToCompanyId?: InputMaybe<AddressesCompanyIdFkeyInput>;
  contactNumber?: InputMaybe<Scalars['String']['input']>;
  isPrimary?: InputMaybe<Scalars['Boolean']['input']>;
  ordersUsingId?: InputMaybe<OrdersAddressIdFkeyInverseInput>;
  userId?: InputMaybe<Scalars['UUID']['input']>;
  userToUserId?: InputMaybe<AddressesUserIdFkeyInput>;
};

/** An object where the defined keys will be set on the `category` being updated. */
export type UpdateCategoryOnCategoryForCategoriesCategoryIdFkeyPatch = {
  categoryToParentId?: InputMaybe<CategoriesCategoryIdFkeyInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  productsUsingId?: InputMaybe<ProductsCategoryIdFkeyInverseInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

/** An object where the defined keys will be set on the `category` being updated. */
export type UpdateCategoryOnProductForProductsCategoryIdFkeyPatch = {
  categoryToParentId?: InputMaybe<CategoriesCategoryIdFkeyInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  parentId?: InputMaybe<Scalars['UUID']['input']>;
  productsUsingId?: InputMaybe<ProductsCategoryIdFkeyInverseInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

/** An object where the defined keys will be set on the `company` being updated. */
export type UpdateCompanyOnAddressForAddressesCompanyIdFkeyPatch = {
  addressUsingId?: InputMaybe<AddressesCompanyIdFkeyInverseInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  isVerified?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  productsUsingId?: InputMaybe<ProductsCompanyIdFkeyInverseInput>;
  userId?: InputMaybe<Scalars['UUID']['input']>;
  userToUserId?: InputMaybe<CompaniesUserIdFkeyInput>;
};

/** An object where the defined keys will be set on the `company` being updated. */
export type UpdateCompanyOnCompanyForCompaniesUserIdFkeyPatch = {
  addressUsingId?: InputMaybe<AddressesCompanyIdFkeyInverseInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  isVerified?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  productsUsingId?: InputMaybe<ProductsCompanyIdFkeyInverseInput>;
  userToUserId?: InputMaybe<CompaniesUserIdFkeyInput>;
};

/** An object where the defined keys will be set on the `company` being updated. */
export type UpdateCompanyOnProductForProductsCompanyIdFkeyPatch = {
  addressUsingId?: InputMaybe<AddressesCompanyIdFkeyInverseInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  isVerified?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  productsUsingId?: InputMaybe<ProductsCompanyIdFkeyInverseInput>;
  userId?: InputMaybe<Scalars['UUID']['input']>;
  userToUserId?: InputMaybe<CompaniesUserIdFkeyInput>;
};

/** An object where the defined keys will be set on the `order` being updated. */
export type UpdateOrderOnOrderForOrdersAddressIdFkeyPatch = {
  addressToAddressId?: InputMaybe<OrdersAddressIdFkeyInput>;
  productId?: InputMaybe<Scalars['UUID']['input']>;
  productToProductId?: InputMaybe<OrdersProductIdFkeyInput>;
  status?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['UUID']['input']>;
  userToUserId?: InputMaybe<OrdersUserIdFkeyInput>;
};

/** An object where the defined keys will be set on the `order` being updated. */
export type UpdateOrderOnOrderForOrdersProductIdFkeyPatch = {
  addressId?: InputMaybe<Scalars['UUID']['input']>;
  addressToAddressId?: InputMaybe<OrdersAddressIdFkeyInput>;
  productToProductId?: InputMaybe<OrdersProductIdFkeyInput>;
  status?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['UUID']['input']>;
  userToUserId?: InputMaybe<OrdersUserIdFkeyInput>;
};

/** An object where the defined keys will be set on the `order` being updated. */
export type UpdateOrderOnOrderForOrdersUserIdFkeyPatch = {
  addressId?: InputMaybe<Scalars['UUID']['input']>;
  addressToAddressId?: InputMaybe<OrdersAddressIdFkeyInput>;
  productId?: InputMaybe<Scalars['UUID']['input']>;
  productToProductId?: InputMaybe<OrdersProductIdFkeyInput>;
  status?: InputMaybe<Scalars['String']['input']>;
  userToUserId?: InputMaybe<OrdersUserIdFkeyInput>;
};

/** An object where the defined keys will be set on the `product` being updated. */
export type UpdateProductOnOrderForOrdersProductIdFkeyPatch = {
  categoryId?: InputMaybe<Scalars['UUID']['input']>;
  categoryToCategoryId?: InputMaybe<ProductsCategoryIdFkeyInput>;
  companyId?: InputMaybe<Scalars['UUID']['input']>;
  companyToCompanyId?: InputMaybe<ProductsCompanyIdFkeyInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  imgUrl?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  ordersUsingId?: InputMaybe<OrdersProductIdFkeyInverseInput>;
  price?: InputMaybe<Scalars['BigFloat']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
};

/** An object where the defined keys will be set on the `product` being updated. */
export type UpdateProductOnProductForProductsCategoryIdFkeyPatch = {
  categoryToCategoryId?: InputMaybe<ProductsCategoryIdFkeyInput>;
  companyId?: InputMaybe<Scalars['UUID']['input']>;
  companyToCompanyId?: InputMaybe<ProductsCompanyIdFkeyInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  imgUrl?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  ordersUsingId?: InputMaybe<OrdersProductIdFkeyInverseInput>;
  price?: InputMaybe<Scalars['BigFloat']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
};

/** An object where the defined keys will be set on the `product` being updated. */
export type UpdateProductOnProductForProductsCompanyIdFkeyPatch = {
  categoryId?: InputMaybe<Scalars['UUID']['input']>;
  categoryToCategoryId?: InputMaybe<ProductsCategoryIdFkeyInput>;
  companyToCompanyId?: InputMaybe<ProductsCompanyIdFkeyInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  imgUrl?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  ordersUsingId?: InputMaybe<OrdersProductIdFkeyInverseInput>;
  price?: InputMaybe<Scalars['BigFloat']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
};

/** An object where the defined keys will be set on the `user` being updated. */
export type UpdateUserOnAddressForAddressesUserIdFkeyPatch = {
  addressesUsingId?: InputMaybe<AddressesUserIdFkeyInverseInput>;
  companyUsingId?: InputMaybe<CompaniesUserIdFkeyInverseInput>;
  email?: InputMaybe<Scalars['String']['input']>;
  isAdmin?: InputMaybe<Scalars['Boolean']['input']>;
  isVerified?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  ordersUsingId?: InputMaybe<OrdersUserIdFkeyInverseInput>;
  password?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

/** An object where the defined keys will be set on the `user` being updated. */
export type UpdateUserOnCompanyForCompaniesUserIdFkeyPatch = {
  addressesUsingId?: InputMaybe<AddressesUserIdFkeyInverseInput>;
  companyUsingId?: InputMaybe<CompaniesUserIdFkeyInverseInput>;
  email?: InputMaybe<Scalars['String']['input']>;
  isAdmin?: InputMaybe<Scalars['Boolean']['input']>;
  isVerified?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  ordersUsingId?: InputMaybe<OrdersUserIdFkeyInverseInput>;
  password?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

/** An object where the defined keys will be set on the `user` being updated. */
export type UpdateUserOnOrderForOrdersUserIdFkeyPatch = {
  addressesUsingId?: InputMaybe<AddressesUserIdFkeyInverseInput>;
  companyUsingId?: InputMaybe<CompaniesUserIdFkeyInverseInput>;
  email?: InputMaybe<Scalars['String']['input']>;
  isAdmin?: InputMaybe<Scalars['Boolean']['input']>;
  isVerified?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  ordersUsingId?: InputMaybe<OrdersUserIdFkeyInverseInput>;
  password?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type AddressQueryVariables = Exact<{
  id: Scalars['UUID']['input'];
}>;

export type AddressQuery = {
  __typename?: 'Query';
  address?: {
    __typename?: 'Address';
    id: any;
    address?: string | null;
    contactNumber?: string | null;
  } | null;
};

export type CategoriesQueryVariables = Exact<{
  condition?: InputMaybe<CategoryCondition>;
}>;

export type CategoriesQuery = {
  __typename?: 'Query';
  categories?: {
    __typename?: 'CategoriesConnection';
    nodes: Array<{ __typename?: 'Category'; id: any; name: string }>;
  } | null;
};

export type CategoryQueryVariables = Exact<{
  id: Scalars['UUID']['input'];
}>;

export type CategoryQuery = {
  __typename?: 'Query';
  category?: { __typename?: 'Category'; id: any; name: string } | null;
};

export type CreateProductMutationVariables = Exact<{
  product: ProductInput;
}>;

export type CreateProductMutation = {
  __typename?: 'Mutation';
  createProduct?: {
    __typename?: 'CreateProductPayload';
    product?: {
      __typename?: 'Product';
      id: any;
      name: string;
      description?: string | null;
      price: any;
      imgUrl?: string | null;
      quantity: number;
      companyId: any;
      categoryId?: any | null;
      category?: {
        __typename?: 'Category';
        id: any;
        name: string;
        description?: string | null;
        parentId?: any | null;
        slug?: string | null;
      } | null;
      company?: {
        __typename?: 'Company';
        id: any;
        name: string;
        description?: string | null;
        address?: {
          __typename?: 'Address';
          id: any;
          address?: string | null;
          contactNumber?: string | null;
        } | null;
      } | null;
    } | null;
  } | null;
};

export type Lite_CategoryFragment = {
  __typename?: 'Category';
  id: any;
  name: string;
  description?: string | null;
  parentId?: any | null;
  slug?: string | null;
};

export type Lite_ProductFragment = {
  __typename?: 'Product';
  id: any;
  name: string;
  description?: string | null;
  price: any;
  imgUrl?: string | null;
  quantity: number;
  companyId: any;
  categoryId?: any | null;
  category?: {
    __typename?: 'Category';
    id: any;
    name: string;
    description?: string | null;
    parentId?: any | null;
    slug?: string | null;
  } | null;
  company?: {
    __typename?: 'Company';
    id: any;
    name: string;
    description?: string | null;
    address?: {
      __typename?: 'Address';
      id: any;
      address?: string | null;
      contactNumber?: string | null;
    } | null;
  } | null;
};

export type ProductQueryVariables = Exact<{
  id: Scalars['UUID']['input'];
}>;

export type ProductQuery = {
  __typename?: 'Query';
  product?: {
    __typename?: 'Product';
    id: any;
    name: string;
    description?: string | null;
    price: any;
    imgUrl?: string | null;
    quantity: number;
    companyId: any;
    categoryId?: any | null;
    category?: {
      __typename?: 'Category';
      id: any;
      name: string;
      description?: string | null;
      parentId?: any | null;
      slug?: string | null;
    } | null;
    company?: {
      __typename?: 'Company';
      id: any;
      name: string;
      description?: string | null;
      address?: {
        __typename?: 'Address';
        id: any;
        address?: string | null;
        contactNumber?: string | null;
      } | null;
    } | null;
  } | null;
};

export type UpdateAddressMutationVariables = Exact<{
  id: Scalars['UUID']['input'];
  patch: AddressPatch;
}>;

export type UpdateAddressMutation = {
  __typename?: 'Mutation';
  updateAddress?: {
    __typename?: 'UpdateAddressPayload';
    user?: {
      __typename?: 'User';
      id: any;
      name?: string | null;
      email: string;
      type: string;
      addresses: {
        __typename?: 'AddressesConnection';
        nodes: Array<{
          __typename?: 'Address';
          id: any;
          address?: string | null;
          contactNumber?: string | null;
        }>;
      };
      company?: {
        __typename?: 'Company';
        id: any;
        name: string;
        description?: string | null;
      } | null;
    } | null;
  } | null;
};

export type UpdateProductMutationVariables = Exact<{
  id: Scalars['UUID']['input'];
  product: ProductPatch;
}>;

export type UpdateProductMutation = {
  __typename?: 'Mutation';
  updateProduct?: {
    __typename?: 'UpdateProductPayload';
    product?: {
      __typename?: 'Product';
      id: any;
      name: string;
      description?: string | null;
      price: any;
      imgUrl?: string | null;
      quantity: number;
      companyId: any;
      categoryId?: any | null;
      category?: {
        __typename?: 'Category';
        id: any;
        name: string;
        description?: string | null;
        parentId?: any | null;
        slug?: string | null;
      } | null;
      company?: {
        __typename?: 'Company';
        id: any;
        name: string;
        description?: string | null;
        address?: {
          __typename?: 'Address';
          id: any;
          address?: string | null;
          contactNumber?: string | null;
        } | null;
      } | null;
    } | null;
  } | null;
};

export type CurrentUserQueryVariables = Exact<{ [key: string]: never }>;

export type CurrentUserQuery = {
  __typename?: 'Query';
  currentUser?: {
    __typename?: 'User';
    id: any;
    name?: string | null;
    email: string;
    type: string;
    addresses: {
      __typename?: 'AddressesConnection';
      nodes: Array<{
        __typename?: 'Address';
        id: any;
        address?: string | null;
        contactNumber?: string | null;
      }>;
    };
    company?: {
      __typename?: 'Company';
      id: any;
      name: string;
      description?: string | null;
    } | null;
  } | null;
};

export type Lite_CompanyFragment = {
  __typename?: 'Company';
  id: any;
  name: string;
  description?: string | null;
  address?: {
    __typename?: 'Address';
    id: any;
    address?: string | null;
    contactNumber?: string | null;
  } | null;
};

export type Lite_UserFragment = {
  __typename?: 'User';
  id: any;
  name?: string | null;
  email: string;
  type: string;
  addresses: {
    __typename?: 'AddressesConnection';
    nodes: Array<{
      __typename?: 'Address';
      id: any;
      address?: string | null;
      contactNumber?: string | null;
    }>;
  };
  company?: {
    __typename?: 'Company';
    id: any;
    name: string;
    description?: string | null;
  } | null;
};

export type LoginMutationVariables = Exact<{
  input: LoginInput;
}>;

export type LoginMutation = {
  __typename?: 'Mutation';
  login?: {
    __typename?: 'LoginPayload';
    token?: string | null;
    user: {
      __typename?: 'User';
      id: any;
      name?: string | null;
      email: string;
      type: string;
      companies: {
        __typename?: 'CompaniesConnection';
        nodes: Array<{
          __typename?: 'Company';
          id: any;
          name: string;
          description?: string | null;
          address?: {
            __typename?: 'Address';
            id: any;
            address?: string | null;
            contactNumber?: string | null;
          } | null;
        }>;
      };
      addresses: {
        __typename?: 'AddressesConnection';
        nodes: Array<{
          __typename?: 'Address';
          id: any;
          address?: string | null;
          contactNumber?: string | null;
        }>;
      };
      company?: {
        __typename?: 'Company';
        id: any;
        name: string;
        description?: string | null;
      } | null;
    };
  } | null;
};

export type LogoutMutationVariables = Exact<{ [key: string]: never }>;

export type LogoutMutation = {
  __typename?: 'Mutation';
  logout?: { __typename?: 'LogoutPayload'; success?: boolean | null } | null;
};

export type RegisterMutationVariables = Exact<{
  input: RegisterInput;
}>;

export type RegisterMutation = {
  __typename?: 'Mutation';
  register?: {
    __typename?: 'RegisterPayload';
    token: string;
    user: {
      __typename?: 'User';
      id: any;
      name?: string | null;
      email: string;
      type: string;
      addresses: {
        __typename?: 'AddressesConnection';
        nodes: Array<{
          __typename?: 'Address';
          id: any;
          address?: string | null;
          contactNumber?: string | null;
        }>;
      };
      company?: {
        __typename?: 'Company';
        id: any;
        name: string;
        description?: string | null;
      } | null;
    };
  } | null;
};

export type RegisterCompanyMutationVariables = Exact<{
  input: RegisterCompanyInput;
}>;

export type RegisterCompanyMutation = {
  __typename?: 'Mutation';
  registerCompany?: {
    __typename?: 'RegisterCompanyPayload';
    token: string;
    company: {
      __typename?: 'Company';
      userId: any;
      id: any;
      name: string;
      description?: string | null;
      address?: {
        __typename?: 'Address';
        id: any;
        address?: string | null;
        contactNumber?: string | null;
      } | null;
    };
  } | null;
};

export type ProductsQueryVariables = Exact<{
  filter?: InputMaybe<ProductFilter>;
}>;

export type ProductsQuery = {
  __typename?: 'Query';
  products?: {
    __typename?: 'ProductsConnection';
    nodes: Array<{
      __typename?: 'Product';
      id: any;
      name: string;
      description?: string | null;
      price: any;
      imgUrl?: string | null;
      quantity: number;
      companyId: any;
      categoryId?: any | null;
      category?: {
        __typename?: 'Category';
        id: any;
        name: string;
        description?: string | null;
        parentId?: any | null;
        slug?: string | null;
      } | null;
      company?: {
        __typename?: 'Company';
        id: any;
        name: string;
        description?: string | null;
        address?: {
          __typename?: 'Address';
          id: any;
          address?: string | null;
          contactNumber?: string | null;
        } | null;
      } | null;
    }>;
  } | null;
};

export type CompanyQueryVariables = Exact<{
  id: Scalars['UUID']['input'];
}>;

export type CompanyQuery = {
  __typename?: 'Query';
  company?: {
    __typename?: 'Company';
    id: any;
    name: string;
    description?: string | null;
    user?: {
      __typename?: 'User';
      id: any;
      name?: string | null;
      email: string;
      type: string;
      addresses: {
        __typename?: 'AddressesConnection';
        nodes: Array<{
          __typename?: 'Address';
          id: any;
          address?: string | null;
          contactNumber?: string | null;
        }>;
      };
      company?: {
        __typename?: 'Company';
        id: any;
        name: string;
        description?: string | null;
      } | null;
    } | null;
    address?: {
      __typename?: 'Address';
      id: any;
      address?: string | null;
      contactNumber?: string | null;
    } | null;
  } | null;
};

export type UpdateCompanyMutationVariables = Exact<{
  id: Scalars['UUID']['input'];
  company: CompanyPatch;
}>;

export type UpdateCompanyMutation = {
  __typename?: 'Mutation';
  updateCompany?: {
    __typename?: 'UpdateCompanyPayload';
    company?: {
      __typename?: 'Company';
      id: any;
      name: string;
      description?: string | null;
      address?: {
        __typename?: 'Address';
        id: any;
        address?: string | null;
        contactNumber?: string | null;
      } | null;
    } | null;
  } | null;
};

export const Lite_CategoryFragmentDoc = gql`
  fragment Lite_Category on Category {
    id
    name
    description
    parentId
    slug
  }
`;
export const Lite_CompanyFragmentDoc = gql`
  fragment Lite_Company on Company {
    id
    name
    description
    address {
      id
      address
      contactNumber
    }
  }
`;
export const Lite_ProductFragmentDoc = gql`
  fragment Lite_Product on Product {
    id
    name
    description
    price
    imgUrl
    quantity
    companyId
    categoryId
    category {
      ...Lite_Category
    }
    company {
      ...Lite_Company
    }
  }
  ${Lite_CategoryFragmentDoc}
  ${Lite_CompanyFragmentDoc}
`;
export const Lite_UserFragmentDoc = gql`
  fragment Lite_User on User {
    id
    name
    email
    type
    addresses {
      nodes {
        id
        address
        contactNumber
      }
    }
    company {
      id
      name
      description
    }
  }
`;
export const AddressDocument = gql`
  query Address($id: UUID!) {
    address(id: $id) {
      id
      address
      contactNumber
    }
  }
`;

/**
 * __useAddressQuery__
 *
 * To run a query within a React component, call `useAddressQuery` and pass it any options that fit your needs.
 * When your component renders, `useAddressQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAddressQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useAddressQuery(
  baseOptions: Apollo.QueryHookOptions<AddressQuery, AddressQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<AddressQuery, AddressQueryVariables>(
    AddressDocument,
    options
  );
}
export function useAddressLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<AddressQuery, AddressQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<AddressQuery, AddressQueryVariables>(
    AddressDocument,
    options
  );
}
export type AddressQueryHookResult = ReturnType<typeof useAddressQuery>;
export type AddressLazyQueryHookResult = ReturnType<typeof useAddressLazyQuery>;
export type AddressQueryResult = Apollo.QueryResult<
  AddressQuery,
  AddressQueryVariables
>;
export const CategoriesDocument = gql`
  query Categories($condition: CategoryCondition) {
    categories(condition: $condition) {
      nodes {
        id
        name
      }
    }
  }
`;

/**
 * __useCategoriesQuery__
 *
 * To run a query within a React component, call `useCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCategoriesQuery({
 *   variables: {
 *      condition: // value for 'condition'
 *   },
 * });
 */
export function useCategoriesQuery(
  baseOptions?: Apollo.QueryHookOptions<
    CategoriesQuery,
    CategoriesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<CategoriesQuery, CategoriesQueryVariables>(
    CategoriesDocument,
    options
  );
}
export function useCategoriesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    CategoriesQuery,
    CategoriesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<CategoriesQuery, CategoriesQueryVariables>(
    CategoriesDocument,
    options
  );
}
export type CategoriesQueryHookResult = ReturnType<typeof useCategoriesQuery>;
export type CategoriesLazyQueryHookResult = ReturnType<
  typeof useCategoriesLazyQuery
>;
export type CategoriesQueryResult = Apollo.QueryResult<
  CategoriesQuery,
  CategoriesQueryVariables
>;
export const CategoryDocument = gql`
  query Category($id: UUID!) {
    category(id: $id) {
      id
      name
    }
  }
`;

/**
 * __useCategoryQuery__
 *
 * To run a query within a React component, call `useCategoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useCategoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCategoryQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useCategoryQuery(
  baseOptions: Apollo.QueryHookOptions<CategoryQuery, CategoryQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<CategoryQuery, CategoryQueryVariables>(
    CategoryDocument,
    options
  );
}
export function useCategoryLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    CategoryQuery,
    CategoryQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<CategoryQuery, CategoryQueryVariables>(
    CategoryDocument,
    options
  );
}
export type CategoryQueryHookResult = ReturnType<typeof useCategoryQuery>;
export type CategoryLazyQueryHookResult = ReturnType<
  typeof useCategoryLazyQuery
>;
export type CategoryQueryResult = Apollo.QueryResult<
  CategoryQuery,
  CategoryQueryVariables
>;
export const CreateProductDocument = gql`
  mutation CreateProduct($product: ProductInput!) {
    createProduct(input: { product: $product }) {
      product {
        id
        ...Lite_Product
      }
    }
  }
  ${Lite_ProductFragmentDoc}
`;
export type CreateProductMutationFn = Apollo.MutationFunction<
  CreateProductMutation,
  CreateProductMutationVariables
>;

/**
 * __useCreateProductMutation__
 *
 * To run a mutation, you first call `useCreateProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProductMutation, { data, loading, error }] = useCreateProductMutation({
 *   variables: {
 *      product: // value for 'product'
 *   },
 * });
 */
export function useCreateProductMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateProductMutation,
    CreateProductMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateProductMutation,
    CreateProductMutationVariables
  >(CreateProductDocument, options);
}
export type CreateProductMutationHookResult = ReturnType<
  typeof useCreateProductMutation
>;
export type CreateProductMutationResult =
  Apollo.MutationResult<CreateProductMutation>;
export type CreateProductMutationOptions = Apollo.BaseMutationOptions<
  CreateProductMutation,
  CreateProductMutationVariables
>;
export const ProductDocument = gql`
  query Product($id: UUID!) {
    product(id: $id) {
      id
      ...Lite_Product
    }
  }
  ${Lite_ProductFragmentDoc}
`;

/**
 * __useProductQuery__
 *
 * To run a query within a React component, call `useProductQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useProductQuery(
  baseOptions: Apollo.QueryHookOptions<ProductQuery, ProductQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<ProductQuery, ProductQueryVariables>(
    ProductDocument,
    options
  );
}
export function useProductLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<ProductQuery, ProductQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<ProductQuery, ProductQueryVariables>(
    ProductDocument,
    options
  );
}
export type ProductQueryHookResult = ReturnType<typeof useProductQuery>;
export type ProductLazyQueryHookResult = ReturnType<typeof useProductLazyQuery>;
export type ProductQueryResult = Apollo.QueryResult<
  ProductQuery,
  ProductQueryVariables
>;
export const UpdateAddressDocument = gql`
  mutation UpdateAddress($id: UUID!, $patch: AddressPatch!) {
    updateAddress(input: { patch: $patch, id: $id }) {
      user {
        ...Lite_User
      }
    }
  }
  ${Lite_UserFragmentDoc}
`;
export type UpdateAddressMutationFn = Apollo.MutationFunction<
  UpdateAddressMutation,
  UpdateAddressMutationVariables
>;

/**
 * __useUpdateAddressMutation__
 *
 * To run a mutation, you first call `useUpdateAddressMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateAddressMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateAddressMutation, { data, loading, error }] = useUpdateAddressMutation({
 *   variables: {
 *      id: // value for 'id'
 *      patch: // value for 'patch'
 *   },
 * });
 */
export function useUpdateAddressMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateAddressMutation,
    UpdateAddressMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpdateAddressMutation,
    UpdateAddressMutationVariables
  >(UpdateAddressDocument, options);
}
export type UpdateAddressMutationHookResult = ReturnType<
  typeof useUpdateAddressMutation
>;
export type UpdateAddressMutationResult =
  Apollo.MutationResult<UpdateAddressMutation>;
export type UpdateAddressMutationOptions = Apollo.BaseMutationOptions<
  UpdateAddressMutation,
  UpdateAddressMutationVariables
>;
export const UpdateProductDocument = gql`
  mutation UpdateProduct($id: UUID!, $product: ProductPatch!) {
    updateProduct(input: { patch: $product, id: $id }) {
      product {
        id
        ...Lite_Product
      }
    }
  }
  ${Lite_ProductFragmentDoc}
`;
export type UpdateProductMutationFn = Apollo.MutationFunction<
  UpdateProductMutation,
  UpdateProductMutationVariables
>;

/**
 * __useUpdateProductMutation__
 *
 * To run a mutation, you first call `useUpdateProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateProductMutation, { data, loading, error }] = useUpdateProductMutation({
 *   variables: {
 *      id: // value for 'id'
 *      product: // value for 'product'
 *   },
 * });
 */
export function useUpdateProductMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateProductMutation,
    UpdateProductMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpdateProductMutation,
    UpdateProductMutationVariables
  >(UpdateProductDocument, options);
}
export type UpdateProductMutationHookResult = ReturnType<
  typeof useUpdateProductMutation
>;
export type UpdateProductMutationResult =
  Apollo.MutationResult<UpdateProductMutation>;
export type UpdateProductMutationOptions = Apollo.BaseMutationOptions<
  UpdateProductMutation,
  UpdateProductMutationVariables
>;
export const CurrentUserDocument = gql`
  query CurrentUser {
    currentUser {
      id
      ...Lite_User
    }
  }
  ${Lite_UserFragmentDoc}
`;

/**
 * __useCurrentUserQuery__
 *
 * To run a query within a React component, call `useCurrentUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useCurrentUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCurrentUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useCurrentUserQuery(
  baseOptions?: Apollo.QueryHookOptions<
    CurrentUserQuery,
    CurrentUserQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<CurrentUserQuery, CurrentUserQueryVariables>(
    CurrentUserDocument,
    options
  );
}
export function useCurrentUserLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    CurrentUserQuery,
    CurrentUserQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<CurrentUserQuery, CurrentUserQueryVariables>(
    CurrentUserDocument,
    options
  );
}
export type CurrentUserQueryHookResult = ReturnType<typeof useCurrentUserQuery>;
export type CurrentUserLazyQueryHookResult = ReturnType<
  typeof useCurrentUserLazyQuery
>;
export type CurrentUserQueryResult = Apollo.QueryResult<
  CurrentUserQuery,
  CurrentUserQueryVariables
>;
export const LoginDocument = gql`
  mutation login($input: LoginInput!) {
    login(input: $input) {
      token
      user {
        ...Lite_User
        companies {
          nodes {
            ...Lite_Company
          }
        }
      }
    }
  }
  ${Lite_UserFragmentDoc}
  ${Lite_CompanyFragmentDoc}
`;
export type LoginMutationFn = Apollo.MutationFunction<
  LoginMutation,
  LoginMutationVariables
>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useLoginMutation(
  baseOptions?: Apollo.MutationHookOptions<
    LoginMutation,
    LoginMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<LoginMutation, LoginMutationVariables>(
    LoginDocument,
    options
  );
}
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<
  LoginMutation,
  LoginMutationVariables
>;
export const LogoutDocument = gql`
  mutation Logout {
    logout {
      success
    }
  }
`;
export type LogoutMutationFn = Apollo.MutationFunction<
  LogoutMutation,
  LogoutMutationVariables
>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(
  baseOptions?: Apollo.MutationHookOptions<
    LogoutMutation,
    LogoutMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(
    LogoutDocument,
    options
  );
}
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<
  LogoutMutation,
  LogoutMutationVariables
>;
export const RegisterDocument = gql`
  mutation Register($input: RegisterInput!) {
    register(input: $input) {
      token
      user {
        id
        ...Lite_User
      }
    }
  }
  ${Lite_UserFragmentDoc}
`;
export type RegisterMutationFn = Apollo.MutationFunction<
  RegisterMutation,
  RegisterMutationVariables
>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useRegisterMutation(
  baseOptions?: Apollo.MutationHookOptions<
    RegisterMutation,
    RegisterMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(
    RegisterDocument,
    options
  );
}
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<
  RegisterMutation,
  RegisterMutationVariables
>;
export const RegisterCompanyDocument = gql`
  mutation RegisterCompany($input: RegisterCompanyInput!) {
    registerCompany(input: $input) {
      company {
        ...Lite_Company
        userId
      }
      token
    }
  }
  ${Lite_CompanyFragmentDoc}
`;
export type RegisterCompanyMutationFn = Apollo.MutationFunction<
  RegisterCompanyMutation,
  RegisterCompanyMutationVariables
>;

/**
 * __useRegisterCompanyMutation__
 *
 * To run a mutation, you first call `useRegisterCompanyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterCompanyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerCompanyMutation, { data, loading, error }] = useRegisterCompanyMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useRegisterCompanyMutation(
  baseOptions?: Apollo.MutationHookOptions<
    RegisterCompanyMutation,
    RegisterCompanyMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    RegisterCompanyMutation,
    RegisterCompanyMutationVariables
  >(RegisterCompanyDocument, options);
}
export type RegisterCompanyMutationHookResult = ReturnType<
  typeof useRegisterCompanyMutation
>;
export type RegisterCompanyMutationResult =
  Apollo.MutationResult<RegisterCompanyMutation>;
export type RegisterCompanyMutationOptions = Apollo.BaseMutationOptions<
  RegisterCompanyMutation,
  RegisterCompanyMutationVariables
>;
export const ProductsDocument = gql`
  query Products($filter: ProductFilter) {
    products(filter: $filter) {
      nodes {
        ...Lite_Product
      }
    }
  }
  ${Lite_ProductFragmentDoc}
`;

/**
 * __useProductsQuery__
 *
 * To run a query within a React component, call `useProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductsQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useProductsQuery(
  baseOptions?: Apollo.QueryHookOptions<ProductsQuery, ProductsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<ProductsQuery, ProductsQueryVariables>(
    ProductsDocument,
    options
  );
}
export function useProductsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ProductsQuery,
    ProductsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<ProductsQuery, ProductsQueryVariables>(
    ProductsDocument,
    options
  );
}
export type ProductsQueryHookResult = ReturnType<typeof useProductsQuery>;
export type ProductsLazyQueryHookResult = ReturnType<
  typeof useProductsLazyQuery
>;
export type ProductsQueryResult = Apollo.QueryResult<
  ProductsQuery,
  ProductsQueryVariables
>;
export const CompanyDocument = gql`
  query Company($id: UUID!) {
    company(id: $id) {
      id
      ...Lite_Company
      user {
        id
        ...Lite_User
      }
    }
  }
  ${Lite_CompanyFragmentDoc}
  ${Lite_UserFragmentDoc}
`;

/**
 * __useCompanyQuery__
 *
 * To run a query within a React component, call `useCompanyQuery` and pass it any options that fit your needs.
 * When your component renders, `useCompanyQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCompanyQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useCompanyQuery(
  baseOptions: Apollo.QueryHookOptions<CompanyQuery, CompanyQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<CompanyQuery, CompanyQueryVariables>(
    CompanyDocument,
    options
  );
}
export function useCompanyLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<CompanyQuery, CompanyQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<CompanyQuery, CompanyQueryVariables>(
    CompanyDocument,
    options
  );
}
export type CompanyQueryHookResult = ReturnType<typeof useCompanyQuery>;
export type CompanyLazyQueryHookResult = ReturnType<typeof useCompanyLazyQuery>;
export type CompanyQueryResult = Apollo.QueryResult<
  CompanyQuery,
  CompanyQueryVariables
>;
export const UpdateCompanyDocument = gql`
  mutation UpdateCompany($id: UUID!, $company: CompanyPatch!) {
    updateCompany(input: { patch: $company, id: $id }) {
      company {
        id
        ...Lite_Company
      }
    }
  }
  ${Lite_CompanyFragmentDoc}
`;
export type UpdateCompanyMutationFn = Apollo.MutationFunction<
  UpdateCompanyMutation,
  UpdateCompanyMutationVariables
>;

/**
 * __useUpdateCompanyMutation__
 *
 * To run a mutation, you first call `useUpdateCompanyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCompanyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCompanyMutation, { data, loading, error }] = useUpdateCompanyMutation({
 *   variables: {
 *      id: // value for 'id'
 *      company: // value for 'company'
 *   },
 * });
 */
export function useUpdateCompanyMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateCompanyMutation,
    UpdateCompanyMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpdateCompanyMutation,
    UpdateCompanyMutationVariables
  >(UpdateCompanyDocument, options);
}
export type UpdateCompanyMutationHookResult = ReturnType<
  typeof useUpdateCompanyMutation
>;
export type UpdateCompanyMutationResult =
  Apollo.MutationResult<UpdateCompanyMutation>;
export type UpdateCompanyMutationOptions = Apollo.BaseMutationOptions<
  UpdateCompanyMutation,
  UpdateCompanyMutationVariables
>;
