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
  userId: Scalars['UUID']['output'];
  /** Reads and enables pagination through a set of `User`. */
  usersByOrderAddressIdAndUserId: AddressUsersByOrderAddressIdAndUserIdManyToManyConnection;
};

export type AddressOrdersArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<OrderCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OrdersOrderBy>>;
};

export type AddressProductsByOrderAddressIdAndProductIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<ProductCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ProductsOrderBy>>;
};

export type AddressUsersByOrderAddressIdAndUserIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<UserCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
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
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `userId` field. */
  userId?: InputMaybe<Scalars['UUID']['input']>;
};

/** An input for mutations affecting `Address` */
export type AddressInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  contactNumber?: InputMaybe<Scalars['String']['input']>;
  isPrimary?: InputMaybe<Scalars['Boolean']['input']>;
  ordersUsingId?: InputMaybe<OrdersAddressIdFkeyInverseInput>;
  userId?: InputMaybe<Scalars['UUID']['input']>;
  userToUserId?: InputMaybe<AddressesUserIdFkeyInput>;
};

/** The fields on `address` to look up the row to update. */
export type AddressOnAddressForAddressesUserIdFkeyUsingAddressesPkeyUpdate = {
  id: Scalars['UUID']['input'];
  /** An object where the defined keys will be set on the `address` being updated. */
  patch: UpdateAddressOnAddressForAddressesUserIdFkeyPatch;
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
    first?: InputMaybe<Scalars['Int']['input']>;
    last?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    orderBy?: InputMaybe<Array<OrdersOrderBy>>;
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
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OrdersOrderBy>>;
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
  connectById?: InputMaybe<Array<AddressAddressesPkeyConnect>>;
  /** A `AddressInput` object that will be created and connected to this object. */
  create?: InputMaybe<Array<AddressesUserIdFkeyAddressesCreateInput>>;
  /** The primary key(s) for `address` for the far side of the relationship. */
  deleteById?: InputMaybe<Array<AddressAddressesPkeyDelete>>;
  /** Flag indicating whether all other `address` records that match this relationship should be removed. */
  deleteOthers?: InputMaybe<Scalars['Boolean']['input']>;
  /** The primary key(s) and patch data for `address` for the far side of the relationship. */
  updateById?: InputMaybe<
    Array<AddressOnAddressForAddressesUserIdFkeyUsingAddressesPkeyUpdate>
  >;
};

/** The `user` to be created by this mutation. */
export type AddressesUserIdFkeyUsersCreateInput = {
  addressesUsingId?: InputMaybe<AddressesUserIdFkeyInverseInput>;
  companiesUsingId?: InputMaybe<CompaniesUserIdFkeyInverseInput>;
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
  name: Scalars['String']['input'];
  productCategoriesUsingId?: InputMaybe<ProductCategoriesCategoryIdFkeyInverseInput>;
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
}

export type Category = {
  __typename?: 'Category';
  /** Reads and enables pagination through a set of `Category`. */
  childCategories: CategoriesConnection;
  createdAt: Scalars['Datetime']['output'];
  id: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  /** Reads a single `Category` that is related to this `Category`. */
  parent?: Maybe<Category>;
  parentId?: Maybe<Scalars['UUID']['output']>;
  /** Reads and enables pagination through a set of `ProductCategory`. */
  productCategories: ProductCategoriesConnection;
  /** Reads and enables pagination through a set of `Product`. */
  productsByProductCategoryCategoryIdAndProductId: CategoryProductsByProductCategoryCategoryIdAndProductIdManyToManyConnection;
  slug?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['Datetime']['output'];
};

export type CategoryChildCategoriesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<CategoryCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CategoriesOrderBy>>;
};

export type CategoryProductCategoriesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<ProductCategoryCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ProductCategoriesOrderBy>>;
};

export type CategoryProductsByProductCategoryCategoryIdAndProductIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<ProductCondition>;
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
};

/** An input for mutations affecting `Category` */
export type CategoryInput = {
  categoryToParentId?: InputMaybe<CategoriesCategoryIdFkeyInput>;
  name: Scalars['String']['input'];
  parentId?: InputMaybe<Scalars['UUID']['input']>;
  productCategoriesUsingId?: InputMaybe<ProductCategoriesCategoryIdFkeyInverseInput>;
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
export type CategoryOnProductCategoryForProductCategoriesCategoryIdFkeyUsingCategoriesPkeyUpdate =
  {
    id: Scalars['UUID']['input'];
    /** An object where the defined keys will be set on the `category` being updated. */
    patch: UpdateCategoryOnProductCategoryForProductCategoriesCategoryIdFkeyPatch;
  };

/** Represents an update to a `Category`. Fields that are set will be updated. */
export type CategoryPatch = {
  categoryToParentId?: InputMaybe<CategoriesCategoryIdFkeyInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  parentId?: InputMaybe<Scalars['UUID']['input']>;
  productCategoriesUsingId?: InputMaybe<ProductCategoriesCategoryIdFkeyInverseInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

/** A connection to a list of `Product` values, with data from `ProductCategory`. */
export type CategoryProductsByProductCategoryCategoryIdAndProductIdManyToManyConnection =
  {
    __typename?: 'CategoryProductsByProductCategoryCategoryIdAndProductIdManyToManyConnection';
    /** A list of edges which contains the `Product`, info from the `ProductCategory`, and the cursor to aid in pagination. */
    edges: Array<CategoryProductsByProductCategoryCategoryIdAndProductIdManyToManyEdge>;
    /** A list of `Product` objects. */
    nodes: Array<Product>;
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
    /** The count of *all* `Product` you could get from the connection. */
    totalCount: Scalars['Int']['output'];
  };

/** A `Product` edge in the connection, with data from `ProductCategory`. */
export type CategoryProductsByProductCategoryCategoryIdAndProductIdManyToManyEdge =
  {
    __typename?: 'CategoryProductsByProductCategoryCategoryIdAndProductIdManyToManyEdge';
    /** A cursor for use in pagination. */
    cursor?: Maybe<Scalars['Cursor']['output']>;
    /** The `Product` at the end of the edge. */
    node: Product;
    /** Reads and enables pagination through a set of `ProductCategory`. */
    productCategories: ProductCategoriesConnection;
  };

/** A `Product` edge in the connection, with data from `ProductCategory`. */
export type CategoryProductsByProductCategoryCategoryIdAndProductIdManyToManyEdgeProductCategoriesArgs =
  {
    after?: InputMaybe<Scalars['Cursor']['input']>;
    before?: InputMaybe<Scalars['Cursor']['input']>;
    condition?: InputMaybe<ProductCategoryCondition>;
    first?: InputMaybe<Scalars['Int']['input']>;
    last?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    orderBy?: InputMaybe<Array<ProductCategoriesOrderBy>>;
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
  connectById?: InputMaybe<Array<CompanyCompaniesPkeyConnect>>;
  /** A `CompanyInput` object that will be created and connected to this object. */
  create?: InputMaybe<Array<CompaniesUserIdFkeyCompaniesCreateInput>>;
  /** The primary key(s) for `company` for the far side of the relationship. */
  deleteById?: InputMaybe<Array<CompanyCompaniesPkeyDelete>>;
  /** Flag indicating whether all other `company` records that match this relationship should be removed. */
  deleteOthers?: InputMaybe<Scalars['Boolean']['input']>;
  /** The primary key(s) and patch data for `company` for the far side of the relationship. */
  updateById?: InputMaybe<
    Array<CompanyOnCompanyForCompaniesUserIdFkeyUsingCompaniesPkeyUpdate>
  >;
};

/** The `user` to be created by this mutation. */
export type CompaniesUserIdFkeyUsersCreateInput = {
  addressesUsingId?: InputMaybe<AddressesUserIdFkeyInverseInput>;
  companiesUsingId?: InputMaybe<CompaniesUserIdFkeyInverseInput>;
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

export type CompanyProductsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<ProductCondition>;
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

/** A condition to be used against `Company` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type CompanyCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `userId` field. */
  userId?: InputMaybe<Scalars['UUID']['input']>;
};

/** An input for mutations affecting `Company` */
export type CompanyInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  isVerified?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  productsUsingId?: InputMaybe<ProductsCompanyIdFkeyInverseInput>;
  userId?: InputMaybe<Scalars['UUID']['input']>;
  userToUserId?: InputMaybe<CompaniesUserIdFkeyInput>;
};

/** The fields on `company` to look up the row to update. */
export type CompanyOnCompanyForCompaniesUserIdFkeyUsingCompaniesPkeyUpdate = {
  id: Scalars['UUID']['input'];
  /** An object where the defined keys will be set on the `company` being updated. */
  patch: UpdateCompanyOnCompanyForCompaniesUserIdFkeyPatch;
};

/** The fields on `company` to look up the row to update. */
export type CompanyOnProductForProductsCompanyIdFkeyUsingCompaniesPkeyUpdate = {
  id: Scalars['UUID']['input'];
  /** An object where the defined keys will be set on the `company` being updated. */
  patch: UpdateCompanyOnProductForProductsCompanyIdFkeyPatch;
};

/** Represents an update to a `Company`. Fields that are set will be updated. */
export type CompanyPatch = {
  description?: InputMaybe<Scalars['String']['input']>;
  isVerified?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  productsUsingId?: InputMaybe<ProductsCompanyIdFkeyInverseInput>;
  userId?: InputMaybe<Scalars['UUID']['input']>;
  userToUserId?: InputMaybe<CompaniesUserIdFkeyInput>;
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

/** All input for the create `ProductCategory` mutation. */
export type CreateProductCategoryInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The `ProductCategory` to be created by this mutation. */
  productCategory: ProductCategoryInput;
};

/** The output of our create `ProductCategory` mutation. */
export type CreateProductCategoryPayload = {
  __typename?: 'CreateProductCategoryPayload';
  /** Reads a single `Category` that is related to this `ProductCategory`. */
  category?: Maybe<Category>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Reads a single `Product` that is related to this `ProductCategory`. */
  product?: Maybe<Product>;
  /** The `ProductCategory` that was created by this mutation. */
  productCategory?: Maybe<ProductCategory>;
  /** An edge for our `ProductCategory`. May be used by Relay 1. */
  productCategoryEdge?: Maybe<ProductCategoriesEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** The output of our create `ProductCategory` mutation. */
export type CreateProductCategoryPayloadProductCategoryEdgeArgs = {
  orderBy?: InputMaybe<Array<ProductCategoriesOrderBy>>;
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

/** All input for the `deleteProductCategory` mutation. */
export type DeleteProductCategoryInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
};

/** The output of our delete `ProductCategory` mutation. */
export type DeleteProductCategoryPayload = {
  __typename?: 'DeleteProductCategoryPayload';
  /** Reads a single `Category` that is related to this `ProductCategory`. */
  category?: Maybe<Category>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedProductCategoryNodeId?: Maybe<Scalars['ID']['output']>;
  /** Reads a single `Product` that is related to this `ProductCategory`. */
  product?: Maybe<Product>;
  /** The `ProductCategory` that was deleted by this mutation. */
  productCategory?: Maybe<ProductCategory>;
  /** An edge for our `ProductCategory`. May be used by Relay 1. */
  productCategoryEdge?: Maybe<ProductCategoriesEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** The output of our delete `ProductCategory` mutation. */
export type DeleteProductCategoryPayloadProductCategoryEdgeArgs = {
  orderBy?: InputMaybe<Array<ProductCategoriesOrderBy>>;
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
  /** Creates a single `ProductCategory`. */
  createProductCategory?: Maybe<CreateProductCategoryPayload>;
  /** Creates a single `User`. */
  createUser?: Maybe<CreateUserPayload>;
  /** Deletes a single `Address` using a unique key. */
  deleteAddress?: Maybe<DeleteAddressPayload>;
  /** Deletes a single `Category` using a unique key. */
  deleteCategory?: Maybe<DeleteCategoryPayload>;
  /** Deletes a single `Company` using a unique key. */
  deleteCompany?: Maybe<DeleteCompanyPayload>;
  /** Deletes a single `Order` using a unique key. */
  deleteOrder?: Maybe<DeleteOrderPayload>;
  /** Deletes a single `Product` using a unique key. */
  deleteProduct?: Maybe<DeleteProductPayload>;
  /** Deletes a single `ProductCategory` using a unique key. */
  deleteProductCategory?: Maybe<DeleteProductCategoryPayload>;
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
  /** Updates a single `Category` using a unique key and a patch. */
  updateCategory?: Maybe<UpdateCategoryPayload>;
  /** Updates a single `Company` using a unique key and a patch. */
  updateCompany?: Maybe<UpdateCompanyPayload>;
  /** Updates a single `Order` using a unique key and a patch. */
  updateOrder?: Maybe<UpdateOrderPayload>;
  /** Updates a single `Product` using a unique key and a patch. */
  updateProduct?: Maybe<UpdateProductPayload>;
  /** Updates a single `ProductCategory` using a unique key and a patch. */
  updateProductCategory?: Maybe<UpdateProductCategoryPayload>;
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
export type MutationCreateProductCategoryArgs = {
  input: CreateProductCategoryInput;
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
export type MutationDeleteCategoryArgs = {
  input: DeleteCategoryInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteCompanyArgs = {
  input: DeleteCompanyInput;
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
export type MutationDeleteProductCategoryArgs = {
  input: DeleteProductCategoryInput;
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
export type MutationUpdateCategoryArgs = {
  input: UpdateCategoryInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateCompanyArgs = {
  input: UpdateCompanyInput;
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
export type MutationUpdateProductCategoryArgs = {
  input: UpdateProductCategoryInput;
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
  contactNumber?: InputMaybe<Scalars['String']['input']>;
  isPrimary?: InputMaybe<Scalars['Boolean']['input']>;
  ordersUsingId?: InputMaybe<OrdersAddressIdFkeyInverseInput>;
  userId?: InputMaybe<Scalars['UUID']['input']>;
  userToUserId?: InputMaybe<AddressesUserIdFkeyInput>;
};

/** Input for the nested mutation of `address` in the `OrderInput` mutation. */
export type OrdersAddressIdFkeyInput = {
  /** The primary key(s) for `address` for the far side of the relationship. */
  connectById?: InputMaybe<AddressAddressesPkeyConnect>;
  /** A `AddressInput` object that will be created and connected to this object. */
  create?: InputMaybe<OrdersAddressIdFkeyAddressesCreateInput>;
  /** The primary key(s) for `address` for the far side of the relationship. */
  deleteById?: InputMaybe<AddressAddressesPkeyDelete>;
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
  companyId?: InputMaybe<Scalars['UUID']['input']>;
  companyToCompanyId?: InputMaybe<ProductsCompanyIdFkeyInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  ordersUsingId?: InputMaybe<OrdersProductIdFkeyInverseInput>;
  price: Scalars['BigFloat']['input'];
  productCategoriesUsingId?: InputMaybe<ProductCategoriesProductIdFkeyInverseInput>;
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
  companiesUsingId?: InputMaybe<CompaniesUserIdFkeyInverseInput>;
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
  /** Reads and enables pagination through a set of `Category`. */
  categoriesByProductCategoryProductIdAndCategoryId: ProductCategoriesByProductCategoryProductIdAndCategoryIdManyToManyConnection;
  /** Reads a single `Company` that is related to this `Product`. */
  company?: Maybe<Company>;
  companyId: Scalars['UUID']['output'];
  createdAt: Scalars['Datetime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  /** Reads and enables pagination through a set of `Order`. */
  orders: OrdersConnection;
  price: Scalars['BigFloat']['output'];
  /** Reads and enables pagination through a set of `ProductCategory`. */
  productCategories: ProductCategoriesConnection;
  quantity: Scalars['Int']['output'];
  updatedAt: Scalars['Datetime']['output'];
  /** Reads and enables pagination through a set of `User`. */
  usersByOrderProductIdAndUserId: ProductUsersByOrderProductIdAndUserIdManyToManyConnection;
};

export type ProductAddressesByOrderProductIdAndAddressIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<AddressCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AddressesOrderBy>>;
};

export type ProductCategoriesByProductCategoryProductIdAndCategoryIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<CategoryCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CategoriesOrderBy>>;
};

export type ProductOrdersArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<OrderCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OrdersOrderBy>>;
};

export type ProductProductCategoriesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<ProductCategoryCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ProductCategoriesOrderBy>>;
};

export type ProductUsersByOrderProductIdAndUserIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<UserCondition>;
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
    first?: InputMaybe<Scalars['Int']['input']>;
    last?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    orderBy?: InputMaybe<Array<OrdersOrderBy>>;
  };

/** A connection to a list of `Category` values, with data from `ProductCategory`. */
export type ProductCategoriesByProductCategoryProductIdAndCategoryIdManyToManyConnection =
  {
    __typename?: 'ProductCategoriesByProductCategoryProductIdAndCategoryIdManyToManyConnection';
    /** A list of edges which contains the `Category`, info from the `ProductCategory`, and the cursor to aid in pagination. */
    edges: Array<ProductCategoriesByProductCategoryProductIdAndCategoryIdManyToManyEdge>;
    /** A list of `Category` objects. */
    nodes: Array<Category>;
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
    /** The count of *all* `Category` you could get from the connection. */
    totalCount: Scalars['Int']['output'];
  };

/** A `Category` edge in the connection, with data from `ProductCategory`. */
export type ProductCategoriesByProductCategoryProductIdAndCategoryIdManyToManyEdge =
  {
    __typename?: 'ProductCategoriesByProductCategoryProductIdAndCategoryIdManyToManyEdge';
    /** A cursor for use in pagination. */
    cursor?: Maybe<Scalars['Cursor']['output']>;
    /** The `Category` at the end of the edge. */
    node: Category;
    /** Reads and enables pagination through a set of `ProductCategory`. */
    productCategories: ProductCategoriesConnection;
  };

/** A `Category` edge in the connection, with data from `ProductCategory`. */
export type ProductCategoriesByProductCategoryProductIdAndCategoryIdManyToManyEdgeProductCategoriesArgs =
  {
    after?: InputMaybe<Scalars['Cursor']['input']>;
    before?: InputMaybe<Scalars['Cursor']['input']>;
    condition?: InputMaybe<ProductCategoryCondition>;
    first?: InputMaybe<Scalars['Int']['input']>;
    last?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    orderBy?: InputMaybe<Array<ProductCategoriesOrderBy>>;
  };

/** The `category` to be created by this mutation. */
export type ProductCategoriesCategoryIdFkeyCategoriesCreateInput = {
  categoryToParentId?: InputMaybe<CategoriesCategoryIdFkeyInput>;
  name: Scalars['String']['input'];
  parentId?: InputMaybe<Scalars['UUID']['input']>;
  productCategoriesUsingId?: InputMaybe<ProductCategoriesCategoryIdFkeyInverseInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

/** Input for the nested mutation of `category` in the `ProductCategoryInput` mutation. */
export type ProductCategoriesCategoryIdFkeyInput = {
  /** The primary key(s) for `category` for the far side of the relationship. */
  connectById?: InputMaybe<CategoryCategoriesPkeyConnect>;
  /** A `CategoryInput` object that will be created and connected to this object. */
  create?: InputMaybe<ProductCategoriesCategoryIdFkeyCategoriesCreateInput>;
  /** The primary key(s) for `category` for the far side of the relationship. */
  deleteById?: InputMaybe<CategoryCategoriesPkeyDelete>;
  /** The primary key(s) and patch data for `category` for the far side of the relationship. */
  updateById?: InputMaybe<CategoryOnProductCategoryForProductCategoriesCategoryIdFkeyUsingCategoriesPkeyUpdate>;
};

/** Input for the nested mutation of `productCategory` in the `CategoryInput` mutation. */
export type ProductCategoriesCategoryIdFkeyInverseInput = {
  /** The primary key(s) for `productCategory` for the far side of the relationship. */
  connectById?: InputMaybe<Array<ProductCategoryProductCategoriesPkeyConnect>>;
  /** A `ProductCategoryInput` object that will be created and connected to this object. */
  create?: InputMaybe<
    Array<ProductCategoriesCategoryIdFkeyProductCategoriesCreateInput>
  >;
  /** The primary key(s) for `productCategory` for the far side of the relationship. */
  deleteById?: InputMaybe<Array<ProductCategoryProductCategoriesPkeyDelete>>;
  /** Flag indicating whether all other `productCategory` records that match this relationship should be removed. */
  deleteOthers?: InputMaybe<Scalars['Boolean']['input']>;
  /** The primary key(s) and patch data for `productCategory` for the far side of the relationship. */
  updateById?: InputMaybe<
    Array<ProductCategoryOnProductCategoryForProductCategoriesCategoryIdFkeyUsingProductCategoriesPkeyUpdate>
  >;
};

/** The `productCategory` to be created by this mutation. */
export type ProductCategoriesCategoryIdFkeyProductCategoriesCreateInput = {
  categoryToCategoryId?: InputMaybe<ProductCategoriesCategoryIdFkeyInput>;
  productId?: InputMaybe<Scalars['UUID']['input']>;
  productToProductId?: InputMaybe<ProductCategoriesProductIdFkeyInput>;
};

/** A connection to a list of `ProductCategory` values. */
export type ProductCategoriesConnection = {
  __typename?: 'ProductCategoriesConnection';
  /** A list of edges which contains the `ProductCategory` and cursor to aid in pagination. */
  edges: Array<ProductCategoriesEdge>;
  /** A list of `ProductCategory` objects. */
  nodes: Array<ProductCategory>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `ProductCategory` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `ProductCategory` edge in the connection. */
export type ProductCategoriesEdge = {
  __typename?: 'ProductCategoriesEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `ProductCategory` at the end of the edge. */
  node: ProductCategory;
};

/** Methods to use when ordering `ProductCategory`. */
export enum ProductCategoriesOrderBy {
  CategoryIdAsc = 'CATEGORY_ID_ASC',
  CategoryIdDesc = 'CATEGORY_ID_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  ProductIdAsc = 'PRODUCT_ID_ASC',
  ProductIdDesc = 'PRODUCT_ID_DESC',
}

/** Input for the nested mutation of `product` in the `ProductCategoryInput` mutation. */
export type ProductCategoriesProductIdFkeyInput = {
  /** The primary key(s) for `product` for the far side of the relationship. */
  connectById?: InputMaybe<ProductProductsPkeyConnect>;
  /** A `ProductInput` object that will be created and connected to this object. */
  create?: InputMaybe<ProductCategoriesProductIdFkeyProductsCreateInput>;
  /** The primary key(s) for `product` for the far side of the relationship. */
  deleteById?: InputMaybe<ProductProductsPkeyDelete>;
  /** The primary key(s) and patch data for `product` for the far side of the relationship. */
  updateById?: InputMaybe<ProductOnProductCategoryForProductCategoriesProductIdFkeyUsingProductsPkeyUpdate>;
};

/** Input for the nested mutation of `productCategory` in the `ProductInput` mutation. */
export type ProductCategoriesProductIdFkeyInverseInput = {
  /** The primary key(s) for `productCategory` for the far side of the relationship. */
  connectById?: InputMaybe<Array<ProductCategoryProductCategoriesPkeyConnect>>;
  /** A `ProductCategoryInput` object that will be created and connected to this object. */
  create?: InputMaybe<
    Array<ProductCategoriesProductIdFkeyProductCategoriesCreateInput>
  >;
  /** The primary key(s) for `productCategory` for the far side of the relationship. */
  deleteById?: InputMaybe<Array<ProductCategoryProductCategoriesPkeyDelete>>;
  /** Flag indicating whether all other `productCategory` records that match this relationship should be removed. */
  deleteOthers?: InputMaybe<Scalars['Boolean']['input']>;
  /** The primary key(s) and patch data for `productCategory` for the far side of the relationship. */
  updateById?: InputMaybe<
    Array<ProductCategoryOnProductCategoryForProductCategoriesProductIdFkeyUsingProductCategoriesPkeyUpdate>
  >;
};

/** The `productCategory` to be created by this mutation. */
export type ProductCategoriesProductIdFkeyProductCategoriesCreateInput = {
  categoryId?: InputMaybe<Scalars['UUID']['input']>;
  categoryToCategoryId?: InputMaybe<ProductCategoriesCategoryIdFkeyInput>;
  productToProductId?: InputMaybe<ProductCategoriesProductIdFkeyInput>;
};

/** The `product` to be created by this mutation. */
export type ProductCategoriesProductIdFkeyProductsCreateInput = {
  companyId?: InputMaybe<Scalars['UUID']['input']>;
  companyToCompanyId?: InputMaybe<ProductsCompanyIdFkeyInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  ordersUsingId?: InputMaybe<OrdersProductIdFkeyInverseInput>;
  price: Scalars['BigFloat']['input'];
  productCategoriesUsingId?: InputMaybe<ProductCategoriesProductIdFkeyInverseInput>;
  quantity: Scalars['Int']['input'];
};

export type ProductCategory = {
  __typename?: 'ProductCategory';
  /** Reads a single `Category` that is related to this `ProductCategory`. */
  category?: Maybe<Category>;
  categoryId: Scalars['UUID']['output'];
  createdAt: Scalars['Datetime']['output'];
  id: Scalars['UUID']['output'];
  /** Reads a single `Product` that is related to this `ProductCategory`. */
  product?: Maybe<Product>;
  productId: Scalars['UUID']['output'];
  updatedAt: Scalars['Datetime']['output'];
};

/**
 * A condition to be used against `ProductCategory` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type ProductCategoryCondition = {
  /** Checks for equality with the object’s `categoryId` field. */
  categoryId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `productId` field. */
  productId?: InputMaybe<Scalars['UUID']['input']>;
};

/** An input for mutations affecting `ProductCategory` */
export type ProductCategoryInput = {
  categoryId?: InputMaybe<Scalars['UUID']['input']>;
  categoryToCategoryId?: InputMaybe<ProductCategoriesCategoryIdFkeyInput>;
  productId?: InputMaybe<Scalars['UUID']['input']>;
  productToProductId?: InputMaybe<ProductCategoriesProductIdFkeyInput>;
};

/** The fields on `productCategory` to look up the row to update. */
export type ProductCategoryOnProductCategoryForProductCategoriesCategoryIdFkeyUsingProductCategoriesPkeyUpdate =
  {
    id: Scalars['UUID']['input'];
    /** An object where the defined keys will be set on the `productCategory` being updated. */
    patch: UpdateProductCategoryOnProductCategoryForProductCategoriesCategoryIdFkeyPatch;
  };

/** The fields on `productCategory` to look up the row to update. */
export type ProductCategoryOnProductCategoryForProductCategoriesProductIdFkeyUsingProductCategoriesPkeyUpdate =
  {
    id: Scalars['UUID']['input'];
    /** An object where the defined keys will be set on the `productCategory` being updated. */
    patch: UpdateProductCategoryOnProductCategoryForProductCategoriesProductIdFkeyPatch;
  };

/** Represents an update to a `ProductCategory`. Fields that are set will be updated. */
export type ProductCategoryPatch = {
  categoryId?: InputMaybe<Scalars['UUID']['input']>;
  categoryToCategoryId?: InputMaybe<ProductCategoriesCategoryIdFkeyInput>;
  productId?: InputMaybe<Scalars['UUID']['input']>;
  productToProductId?: InputMaybe<ProductCategoriesProductIdFkeyInput>;
};

/** The fields on `productCategory` to look up the row to connect. */
export type ProductCategoryProductCategoriesPkeyConnect = {
  id: Scalars['UUID']['input'];
};

/** The fields on `productCategory` to look up the row to delete. */
export type ProductCategoryProductCategoriesPkeyDelete = {
  id: Scalars['UUID']['input'];
};

/** A condition to be used against `Product` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type ProductCondition = {
  /** Checks for equality with the object’s `companyId` field. */
  companyId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']['input']>;
};

/** An input for mutations affecting `Product` */
export type ProductInput = {
  companyId?: InputMaybe<Scalars['UUID']['input']>;
  companyToCompanyId?: InputMaybe<ProductsCompanyIdFkeyInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  ordersUsingId?: InputMaybe<OrdersProductIdFkeyInverseInput>;
  price: Scalars['BigFloat']['input'];
  productCategoriesUsingId?: InputMaybe<ProductCategoriesProductIdFkeyInverseInput>;
  quantity: Scalars['Int']['input'];
};

/** The fields on `product` to look up the row to update. */
export type ProductOnOrderForOrdersProductIdFkeyUsingProductsPkeyUpdate = {
  id: Scalars['UUID']['input'];
  /** An object where the defined keys will be set on the `product` being updated. */
  patch: UpdateProductOnOrderForOrdersProductIdFkeyPatch;
};

/** The fields on `product` to look up the row to update. */
export type ProductOnProductCategoryForProductCategoriesProductIdFkeyUsingProductsPkeyUpdate =
  {
    id: Scalars['UUID']['input'];
    /** An object where the defined keys will be set on the `product` being updated. */
    patch: UpdateProductOnProductCategoryForProductCategoriesProductIdFkeyPatch;
  };

/** The fields on `product` to look up the row to update. */
export type ProductOnProductForProductsCompanyIdFkeyUsingProductsPkeyUpdate = {
  id: Scalars['UUID']['input'];
  /** An object where the defined keys will be set on the `product` being updated. */
  patch: UpdateProductOnProductForProductsCompanyIdFkeyPatch;
};

/** Represents an update to a `Product`. Fields that are set will be updated. */
export type ProductPatch = {
  companyId?: InputMaybe<Scalars['UUID']['input']>;
  companyToCompanyId?: InputMaybe<ProductsCompanyIdFkeyInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  ordersUsingId?: InputMaybe<OrdersProductIdFkeyInverseInput>;
  price?: InputMaybe<Scalars['BigFloat']['input']>;
  productCategoriesUsingId?: InputMaybe<ProductCategoriesProductIdFkeyInverseInput>;
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
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OrdersOrderBy>>;
};

/** The `company` to be created by this mutation. */
export type ProductsCompanyIdFkeyCompaniesCreateInput = {
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
  /** A `CompanyInput` object that will be created and connected to this object. */
  create?: InputMaybe<ProductsCompanyIdFkeyCompaniesCreateInput>;
  /** The primary key(s) for `company` for the far side of the relationship. */
  deleteById?: InputMaybe<CompanyCompaniesPkeyDelete>;
  /** The primary key(s) and patch data for `company` for the far side of the relationship. */
  updateById?: InputMaybe<CompanyOnProductForProductsCompanyIdFkeyUsingCompaniesPkeyUpdate>;
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
  companyToCompanyId?: InputMaybe<ProductsCompanyIdFkeyInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  ordersUsingId?: InputMaybe<OrdersProductIdFkeyInverseInput>;
  price: Scalars['BigFloat']['input'];
  productCategoriesUsingId?: InputMaybe<ProductCategoriesProductIdFkeyInverseInput>;
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
  /** Reads and enables pagination through a set of `Address`. */
  addresses?: Maybe<AddressesConnection>;
  /** Reads and enables pagination through a set of `Category`. */
  categories?: Maybe<CategoriesConnection>;
  category?: Maybe<Category>;
  /** Reads and enables pagination through a set of `Company`. */
  companies?: Maybe<CompaniesConnection>;
  company?: Maybe<Company>;
  currentSessionId?: Maybe<Scalars['UUID']['output']>;
  currentUser?: Maybe<User>;
  currentUserId?: Maybe<Scalars['UUID']['output']>;
  currentUserIsAdmin?: Maybe<Scalars['Boolean']['output']>;
  order?: Maybe<Order>;
  /** Reads and enables pagination through a set of `Order`. */
  orders?: Maybe<OrdersConnection>;
  product?: Maybe<Product>;
  /** Reads and enables pagination through a set of `ProductCategory`. */
  productCategories?: Maybe<ProductCategoriesConnection>;
  productCategory?: Maybe<ProductCategory>;
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
export type QueryAddressesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<AddressCondition>;
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
export type QueryOrderArgs = {
  id: Scalars['UUID']['input'];
};

/** The root query type which gives access points into the data universe. */
export type QueryOrdersArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<OrderCondition>;
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
export type QueryProductCategoriesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<ProductCategoryCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ProductCategoriesOrderBy>>;
};

/** The root query type which gives access points into the data universe. */
export type QueryProductCategoryArgs = {
  id: Scalars['UUID']['input'];
};

/** The root query type which gives access points into the data universe. */
export type QueryProductsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<ProductCondition>;
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
  email: Scalars['String']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
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

/** All input for the `updateProductCategory` mutation. */
export type UpdateProductCategoryInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
  /** An object where the defined keys will be set on the `ProductCategory` being updated. */
  patch: ProductCategoryPatch;
};

/** The output of our update `ProductCategory` mutation. */
export type UpdateProductCategoryPayload = {
  __typename?: 'UpdateProductCategoryPayload';
  /** Reads a single `Category` that is related to this `ProductCategory`. */
  category?: Maybe<Category>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Reads a single `Product` that is related to this `ProductCategory`. */
  product?: Maybe<Product>;
  /** The `ProductCategory` that was updated by this mutation. */
  productCategory?: Maybe<ProductCategory>;
  /** An edge for our `ProductCategory`. May be used by Relay 1. */
  productCategoryEdge?: Maybe<ProductCategoriesEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** The output of our update `ProductCategory` mutation. */
export type UpdateProductCategoryPayloadProductCategoryEdgeArgs = {
  orderBy?: InputMaybe<Array<ProductCategoriesOrderBy>>;
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
  /** Reads and enables pagination through a set of `Company`. */
  companies: CompaniesConnection;
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
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AddressesOrderBy>>;
};

export type UserAddressesByOrderUserIdAndAddressIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<AddressCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AddressesOrderBy>>;
};

export type UserCompaniesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<CompanyCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CompaniesOrderBy>>;
};

export type UserOrdersArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<OrderCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OrdersOrderBy>>;
};

export type UserProductsByOrderUserIdAndProductIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<ProductCondition>;
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

/** An input for mutations affecting `User` */
export type UserInput = {
  addressesUsingId?: InputMaybe<AddressesUserIdFkeyInverseInput>;
  companiesUsingId?: InputMaybe<CompaniesUserIdFkeyInverseInput>;
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
  companiesUsingId?: InputMaybe<CompaniesUserIdFkeyInverseInput>;
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
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OrdersOrderBy>>;
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
export type UpdateAddressOnAddressForAddressesUserIdFkeyPatch = {
  address?: InputMaybe<Scalars['String']['input']>;
  contactNumber?: InputMaybe<Scalars['String']['input']>;
  isPrimary?: InputMaybe<Scalars['Boolean']['input']>;
  ordersUsingId?: InputMaybe<OrdersAddressIdFkeyInverseInput>;
  userToUserId?: InputMaybe<AddressesUserIdFkeyInput>;
};

/** An object where the defined keys will be set on the `address` being updated. */
export type UpdateAddressOnOrderForOrdersAddressIdFkeyPatch = {
  address?: InputMaybe<Scalars['String']['input']>;
  contactNumber?: InputMaybe<Scalars['String']['input']>;
  isPrimary?: InputMaybe<Scalars['Boolean']['input']>;
  ordersUsingId?: InputMaybe<OrdersAddressIdFkeyInverseInput>;
  userId?: InputMaybe<Scalars['UUID']['input']>;
  userToUserId?: InputMaybe<AddressesUserIdFkeyInput>;
};

/** An object where the defined keys will be set on the `category` being updated. */
export type UpdateCategoryOnCategoryForCategoriesCategoryIdFkeyPatch = {
  categoryToParentId?: InputMaybe<CategoriesCategoryIdFkeyInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  productCategoriesUsingId?: InputMaybe<ProductCategoriesCategoryIdFkeyInverseInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

/** An object where the defined keys will be set on the `category` being updated. */
export type UpdateCategoryOnProductCategoryForProductCategoriesCategoryIdFkeyPatch =
  {
    categoryToParentId?: InputMaybe<CategoriesCategoryIdFkeyInput>;
    name?: InputMaybe<Scalars['String']['input']>;
    parentId?: InputMaybe<Scalars['UUID']['input']>;
    productCategoriesUsingId?: InputMaybe<ProductCategoriesCategoryIdFkeyInverseInput>;
    slug?: InputMaybe<Scalars['String']['input']>;
  };

/** An object where the defined keys will be set on the `company` being updated. */
export type UpdateCompanyOnCompanyForCompaniesUserIdFkeyPatch = {
  description?: InputMaybe<Scalars['String']['input']>;
  isVerified?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  productsUsingId?: InputMaybe<ProductsCompanyIdFkeyInverseInput>;
  userToUserId?: InputMaybe<CompaniesUserIdFkeyInput>;
};

/** An object where the defined keys will be set on the `company` being updated. */
export type UpdateCompanyOnProductForProductsCompanyIdFkeyPatch = {
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

/** An object where the defined keys will be set on the `productCategory` being updated. */
export type UpdateProductCategoryOnProductCategoryForProductCategoriesCategoryIdFkeyPatch =
  {
    categoryToCategoryId?: InputMaybe<ProductCategoriesCategoryIdFkeyInput>;
    productId?: InputMaybe<Scalars['UUID']['input']>;
    productToProductId?: InputMaybe<ProductCategoriesProductIdFkeyInput>;
  };

/** An object where the defined keys will be set on the `productCategory` being updated. */
export type UpdateProductCategoryOnProductCategoryForProductCategoriesProductIdFkeyPatch =
  {
    categoryId?: InputMaybe<Scalars['UUID']['input']>;
    categoryToCategoryId?: InputMaybe<ProductCategoriesCategoryIdFkeyInput>;
    productToProductId?: InputMaybe<ProductCategoriesProductIdFkeyInput>;
  };

/** An object where the defined keys will be set on the `product` being updated. */
export type UpdateProductOnOrderForOrdersProductIdFkeyPatch = {
  companyId?: InputMaybe<Scalars['UUID']['input']>;
  companyToCompanyId?: InputMaybe<ProductsCompanyIdFkeyInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  ordersUsingId?: InputMaybe<OrdersProductIdFkeyInverseInput>;
  price?: InputMaybe<Scalars['BigFloat']['input']>;
  productCategoriesUsingId?: InputMaybe<ProductCategoriesProductIdFkeyInverseInput>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
};

/** An object where the defined keys will be set on the `product` being updated. */
export type UpdateProductOnProductCategoryForProductCategoriesProductIdFkeyPatch =
  {
    companyId?: InputMaybe<Scalars['UUID']['input']>;
    companyToCompanyId?: InputMaybe<ProductsCompanyIdFkeyInput>;
    description?: InputMaybe<Scalars['String']['input']>;
    name?: InputMaybe<Scalars['String']['input']>;
    ordersUsingId?: InputMaybe<OrdersProductIdFkeyInverseInput>;
    price?: InputMaybe<Scalars['BigFloat']['input']>;
    productCategoriesUsingId?: InputMaybe<ProductCategoriesProductIdFkeyInverseInput>;
    quantity?: InputMaybe<Scalars['Int']['input']>;
  };

/** An object where the defined keys will be set on the `product` being updated. */
export type UpdateProductOnProductForProductsCompanyIdFkeyPatch = {
  companyToCompanyId?: InputMaybe<ProductsCompanyIdFkeyInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  ordersUsingId?: InputMaybe<OrdersProductIdFkeyInverseInput>;
  price?: InputMaybe<Scalars['BigFloat']['input']>;
  productCategoriesUsingId?: InputMaybe<ProductCategoriesProductIdFkeyInverseInput>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
};

/** An object where the defined keys will be set on the `user` being updated. */
export type UpdateUserOnAddressForAddressesUserIdFkeyPatch = {
  addressesUsingId?: InputMaybe<AddressesUserIdFkeyInverseInput>;
  companiesUsingId?: InputMaybe<CompaniesUserIdFkeyInverseInput>;
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
  companiesUsingId?: InputMaybe<CompaniesUserIdFkeyInverseInput>;
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
  companiesUsingId?: InputMaybe<CompaniesUserIdFkeyInverseInput>;
  email?: InputMaybe<Scalars['String']['input']>;
  isAdmin?: InputMaybe<Scalars['Boolean']['input']>;
  isVerified?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  ordersUsingId?: InputMaybe<OrdersUserIdFkeyInverseInput>;
  password?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type Lite_CompanyFragment = {
  __typename?: 'Company';
  id: any;
  name: string;
  description?: string | null;
};

export type Lite_UserFragment = {
  __typename?: 'User';
  id: any;
  name?: string | null;
  email: string;
  password?: string | null;
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
      password?: string | null;
      companies: {
        __typename?: 'CompaniesConnection';
        nodes: Array<{
          __typename?: 'Company';
          id: any;
          name: string;
          description?: string | null;
        }>;
      };
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
      password?: string | null;
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
    };
  } | null;
};

export const Lite_CompanyFragmentDoc = gql`
  fragment Lite_Company on Company {
    id
    name
    description
  }
`;
export const Lite_UserFragmentDoc = gql`
  fragment Lite_User on User {
    id
    name
    email
    password
  }
`;
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
