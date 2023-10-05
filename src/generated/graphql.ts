import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Cursor: { input: any; output: any; }
  Datetime: { input: any; output: any; }
  UUID: { input: any; output: any; }
};

export type Address = {
  __typename?: 'Address';
  address?: Maybe<Scalars['String']['output']>;
  /** Reads and enables pagination through a set of `Availability`. */
  availabilitiesByBookingAddressIdAndAvailabilityId: AddressAvailabilitiesByBookingAddressIdAndAvailabilityIdManyToManyConnection;
  /** Reads and enables pagination through a set of `Booking`. */
  bookings: BookingsConnection;
  contactNumber?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['Datetime']['output'];
  id: Scalars['UUID']['output'];
  isPrimary: Scalars['Boolean']['output'];
  /** Reads and enables pagination through a set of `Service`. */
  servicesByBookingAddressIdAndServiceId: AddressServicesByBookingAddressIdAndServiceIdManyToManyConnection;
  updatedAt: Scalars['Datetime']['output'];
  /** Reads a single `User` that is related to this `Address`. */
  user?: Maybe<User>;
  userId: Scalars['UUID']['output'];
  /** Reads and enables pagination through a set of `User`. */
  usersByBookingAddressIdAndUserId: AddressUsersByBookingAddressIdAndUserIdManyToManyConnection;
};


export type AddressAvailabilitiesByBookingAddressIdAndAvailabilityIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<AvailabilityCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AvailabilitiesOrderBy>>;
};


export type AddressBookingsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<BookingCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<BookingsOrderBy>>;
};


export type AddressServicesByBookingAddressIdAndServiceIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<ServiceCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ServicesOrderBy>>;
};


export type AddressUsersByBookingAddressIdAndUserIdArgs = {
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

/** A connection to a list of `Availability` values, with data from `Booking`. */
export type AddressAvailabilitiesByBookingAddressIdAndAvailabilityIdManyToManyConnection = {
  __typename?: 'AddressAvailabilitiesByBookingAddressIdAndAvailabilityIdManyToManyConnection';
  /** A list of edges which contains the `Availability`, info from the `Booking`, and the cursor to aid in pagination. */
  edges: Array<AddressAvailabilitiesByBookingAddressIdAndAvailabilityIdManyToManyEdge>;
  /** A list of `Availability` objects. */
  nodes: Array<Availability>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Availability` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `Availability` edge in the connection, with data from `Booking`. */
export type AddressAvailabilitiesByBookingAddressIdAndAvailabilityIdManyToManyEdge = {
  __typename?: 'AddressAvailabilitiesByBookingAddressIdAndAvailabilityIdManyToManyEdge';
  /** Reads and enables pagination through a set of `Booking`. */
  bookings: BookingsConnection;
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Availability` at the end of the edge. */
  node: Availability;
};


/** A `Availability` edge in the connection, with data from `Booking`. */
export type AddressAvailabilitiesByBookingAddressIdAndAvailabilityIdManyToManyEdgeBookingsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<BookingCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<BookingsOrderBy>>;
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
  bookingsUsingId?: InputMaybe<BookingsAddressIdFkeyInverseInput>;
  contactNumber?: InputMaybe<Scalars['String']['input']>;
  isPrimary?: InputMaybe<Scalars['Boolean']['input']>;
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
export type AddressOnBookingForBookingsAddressIdFkeyUsingAddressesPkeyUpdate = {
  id: Scalars['UUID']['input'];
  /** An object where the defined keys will be set on the `address` being updated. */
  patch: UpdateAddressOnBookingForBookingsAddressIdFkeyPatch;
};

/** Represents an update to a `Address`. Fields that are set will be updated. */
export type AddressPatch = {
  address?: InputMaybe<Scalars['String']['input']>;
  bookingsUsingId?: InputMaybe<BookingsAddressIdFkeyInverseInput>;
  contactNumber?: InputMaybe<Scalars['String']['input']>;
  isPrimary?: InputMaybe<Scalars['Boolean']['input']>;
  userId?: InputMaybe<Scalars['UUID']['input']>;
  userToUserId?: InputMaybe<AddressesUserIdFkeyInput>;
};

/** A connection to a list of `Service` values, with data from `Booking`. */
export type AddressServicesByBookingAddressIdAndServiceIdManyToManyConnection = {
  __typename?: 'AddressServicesByBookingAddressIdAndServiceIdManyToManyConnection';
  /** A list of edges which contains the `Service`, info from the `Booking`, and the cursor to aid in pagination. */
  edges: Array<AddressServicesByBookingAddressIdAndServiceIdManyToManyEdge>;
  /** A list of `Service` objects. */
  nodes: Array<Service>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Service` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `Service` edge in the connection, with data from `Booking`. */
export type AddressServicesByBookingAddressIdAndServiceIdManyToManyEdge = {
  __typename?: 'AddressServicesByBookingAddressIdAndServiceIdManyToManyEdge';
  /** Reads and enables pagination through a set of `Booking`. */
  bookings: BookingsConnection;
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Service` at the end of the edge. */
  node: Service;
};


/** A `Service` edge in the connection, with data from `Booking`. */
export type AddressServicesByBookingAddressIdAndServiceIdManyToManyEdgeBookingsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<BookingCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<BookingsOrderBy>>;
};

/** A connection to a list of `User` values, with data from `Booking`. */
export type AddressUsersByBookingAddressIdAndUserIdManyToManyConnection = {
  __typename?: 'AddressUsersByBookingAddressIdAndUserIdManyToManyConnection';
  /** A list of edges which contains the `User`, info from the `Booking`, and the cursor to aid in pagination. */
  edges: Array<AddressUsersByBookingAddressIdAndUserIdManyToManyEdge>;
  /** A list of `User` objects. */
  nodes: Array<User>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `User` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `User` edge in the connection, with data from `Booking`. */
export type AddressUsersByBookingAddressIdAndUserIdManyToManyEdge = {
  __typename?: 'AddressUsersByBookingAddressIdAndUserIdManyToManyEdge';
  /** Reads and enables pagination through a set of `Booking`. */
  bookings: BookingsConnection;
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `User` at the end of the edge. */
  node: User;
};


/** A `User` edge in the connection, with data from `Booking`. */
export type AddressUsersByBookingAddressIdAndUserIdManyToManyEdgeBookingsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<BookingCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<BookingsOrderBy>>;
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
  UserIdDesc = 'USER_ID_DESC'
}

/** The `address` to be created by this mutation. */
export type AddressesUserIdFkeyAddressesCreateInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  bookingsUsingId?: InputMaybe<BookingsAddressIdFkeyInverseInput>;
  contactNumber?: InputMaybe<Scalars['String']['input']>;
  isPrimary?: InputMaybe<Scalars['Boolean']['input']>;
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
  updateById?: InputMaybe<Array<AddressOnAddressForAddressesUserIdFkeyUsingAddressesPkeyUpdate>>;
};

/** The `user` to be created by this mutation. */
export type AddressesUserIdFkeyUsersCreateInput = {
  addressesUsingId?: InputMaybe<AddressesUserIdFkeyInverseInput>;
  bookingsUsingId?: InputMaybe<BookingsUserIdFkeyInverseInput>;
  companiesUsingId?: InputMaybe<CompaniesUserIdFkeyInverseInput>;
  email: Scalars['String']['input'];
  isAdmin?: InputMaybe<Scalars['Boolean']['input']>;
  isVerified?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

/** The `availability` to be created by this mutation. */
export type AvailabilitiesCompanyIdFkeyAvailabilitiesCreateInput = {
  bookingsUsingId?: InputMaybe<BookingsAvailabilityIdFkeyInverseInput>;
  companyToCompanyId?: InputMaybe<AvailabilitiesCompanyIdFkeyInput>;
  endTime: Scalars['Datetime']['input'];
  startTime: Scalars['Datetime']['input'];
};

/** The `company` to be created by this mutation. */
export type AvailabilitiesCompanyIdFkeyCompaniesCreateInput = {
  availabilitiesUsingId?: InputMaybe<AvailabilitiesCompanyIdFkeyInverseInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  isVerified?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  servicesUsingId?: InputMaybe<ServicesCompanyIdFkeyInverseInput>;
  userId?: InputMaybe<Scalars['UUID']['input']>;
  userToUserId?: InputMaybe<CompaniesUserIdFkeyInput>;
};

/** Input for the nested mutation of `company` in the `AvailabilityInput` mutation. */
export type AvailabilitiesCompanyIdFkeyInput = {
  /** The primary key(s) for `company` for the far side of the relationship. */
  connectById?: InputMaybe<CompanyCompaniesPkeyConnect>;
  /** A `CompanyInput` object that will be created and connected to this object. */
  create?: InputMaybe<AvailabilitiesCompanyIdFkeyCompaniesCreateInput>;
  /** The primary key(s) for `company` for the far side of the relationship. */
  deleteById?: InputMaybe<CompanyCompaniesPkeyDelete>;
  /** The primary key(s) and patch data for `company` for the far side of the relationship. */
  updateById?: InputMaybe<CompanyOnAvailabilityForAvailabilitiesCompanyIdFkeyUsingCompaniesPkeyUpdate>;
};

/** Input for the nested mutation of `availability` in the `CompanyInput` mutation. */
export type AvailabilitiesCompanyIdFkeyInverseInput = {
  /** The primary key(s) for `availability` for the far side of the relationship. */
  connectById?: InputMaybe<Array<AvailabilityAvailabilitiesPkeyConnect>>;
  /** A `AvailabilityInput` object that will be created and connected to this object. */
  create?: InputMaybe<Array<AvailabilitiesCompanyIdFkeyAvailabilitiesCreateInput>>;
  /** The primary key(s) for `availability` for the far side of the relationship. */
  deleteById?: InputMaybe<Array<AvailabilityAvailabilitiesPkeyDelete>>;
  /** Flag indicating whether all other `availability` records that match this relationship should be removed. */
  deleteOthers?: InputMaybe<Scalars['Boolean']['input']>;
  /** The primary key(s) and patch data for `availability` for the far side of the relationship. */
  updateById?: InputMaybe<Array<AvailabilityOnAvailabilityForAvailabilitiesCompanyIdFkeyUsingAvailabilitiesPkeyUpdate>>;
};

/** A connection to a list of `Availability` values. */
export type AvailabilitiesConnection = {
  __typename?: 'AvailabilitiesConnection';
  /** A list of edges which contains the `Availability` and cursor to aid in pagination. */
  edges: Array<AvailabilitiesEdge>;
  /** A list of `Availability` objects. */
  nodes: Array<Availability>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Availability` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `Availability` edge in the connection. */
export type AvailabilitiesEdge = {
  __typename?: 'AvailabilitiesEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Availability` at the end of the edge. */
  node: Availability;
};

/** Methods to use when ordering `Availability`. */
export enum AvailabilitiesOrderBy {
  CompanyIdAsc = 'COMPANY_ID_ASC',
  CompanyIdDesc = 'COMPANY_ID_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

export type Availability = {
  __typename?: 'Availability';
  /** Reads and enables pagination through a set of `Address`. */
  addressesByBookingAvailabilityIdAndAddressId: AvailabilityAddressesByBookingAvailabilityIdAndAddressIdManyToManyConnection;
  /** Reads and enables pagination through a set of `Booking`. */
  bookings: BookingsConnection;
  /** Reads a single `Company` that is related to this `Availability`. */
  company?: Maybe<Company>;
  companyId: Scalars['UUID']['output'];
  createdAt: Scalars['Datetime']['output'];
  endTime: Scalars['Datetime']['output'];
  id: Scalars['UUID']['output'];
  /** Reads and enables pagination through a set of `Service`. */
  servicesByBookingAvailabilityIdAndServiceId: AvailabilityServicesByBookingAvailabilityIdAndServiceIdManyToManyConnection;
  startTime: Scalars['Datetime']['output'];
  /** Reads and enables pagination through a set of `User`. */
  usersByBookingAvailabilityIdAndUserId: AvailabilityUsersByBookingAvailabilityIdAndUserIdManyToManyConnection;
};


export type AvailabilityAddressesByBookingAvailabilityIdAndAddressIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<AddressCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AddressesOrderBy>>;
};


export type AvailabilityBookingsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<BookingCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<BookingsOrderBy>>;
};


export type AvailabilityServicesByBookingAvailabilityIdAndServiceIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<ServiceCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ServicesOrderBy>>;
};


export type AvailabilityUsersByBookingAvailabilityIdAndUserIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<UserCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
};

/** A connection to a list of `Address` values, with data from `Booking`. */
export type AvailabilityAddressesByBookingAvailabilityIdAndAddressIdManyToManyConnection = {
  __typename?: 'AvailabilityAddressesByBookingAvailabilityIdAndAddressIdManyToManyConnection';
  /** A list of edges which contains the `Address`, info from the `Booking`, and the cursor to aid in pagination. */
  edges: Array<AvailabilityAddressesByBookingAvailabilityIdAndAddressIdManyToManyEdge>;
  /** A list of `Address` objects. */
  nodes: Array<Address>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Address` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `Address` edge in the connection, with data from `Booking`. */
export type AvailabilityAddressesByBookingAvailabilityIdAndAddressIdManyToManyEdge = {
  __typename?: 'AvailabilityAddressesByBookingAvailabilityIdAndAddressIdManyToManyEdge';
  /** Reads and enables pagination through a set of `Booking`. */
  bookings: BookingsConnection;
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Address` at the end of the edge. */
  node: Address;
};


/** A `Address` edge in the connection, with data from `Booking`. */
export type AvailabilityAddressesByBookingAvailabilityIdAndAddressIdManyToManyEdgeBookingsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<BookingCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<BookingsOrderBy>>;
};

/** The fields on `availability` to look up the row to connect. */
export type AvailabilityAvailabilitiesPkeyConnect = {
  id: Scalars['UUID']['input'];
};

/** The fields on `availability` to look up the row to delete. */
export type AvailabilityAvailabilitiesPkeyDelete = {
  id: Scalars['UUID']['input'];
};

/**
 * A condition to be used against `Availability` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type AvailabilityCondition = {
  /** Checks for equality with the object’s `companyId` field. */
  companyId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']['input']>;
};

/** An input for mutations affecting `Availability` */
export type AvailabilityInput = {
  bookingsUsingId?: InputMaybe<BookingsAvailabilityIdFkeyInverseInput>;
  companyId?: InputMaybe<Scalars['UUID']['input']>;
  companyToCompanyId?: InputMaybe<AvailabilitiesCompanyIdFkeyInput>;
  endTime: Scalars['Datetime']['input'];
  startTime: Scalars['Datetime']['input'];
};

/** The fields on `availability` to look up the row to update. */
export type AvailabilityOnAvailabilityForAvailabilitiesCompanyIdFkeyUsingAvailabilitiesPkeyUpdate = {
  id: Scalars['UUID']['input'];
  /** An object where the defined keys will be set on the `availability` being updated. */
  patch: UpdateAvailabilityOnAvailabilityForAvailabilitiesCompanyIdFkeyPatch;
};

/** The fields on `availability` to look up the row to update. */
export type AvailabilityOnBookingForBookingsAvailabilityIdFkeyUsingAvailabilitiesPkeyUpdate = {
  id: Scalars['UUID']['input'];
  /** An object where the defined keys will be set on the `availability` being updated. */
  patch: UpdateAvailabilityOnBookingForBookingsAvailabilityIdFkeyPatch;
};

/** Represents an update to a `Availability`. Fields that are set will be updated. */
export type AvailabilityPatch = {
  bookingsUsingId?: InputMaybe<BookingsAvailabilityIdFkeyInverseInput>;
  companyId?: InputMaybe<Scalars['UUID']['input']>;
  companyToCompanyId?: InputMaybe<AvailabilitiesCompanyIdFkeyInput>;
  endTime?: InputMaybe<Scalars['Datetime']['input']>;
  startTime?: InputMaybe<Scalars['Datetime']['input']>;
};

/** A connection to a list of `Service` values, with data from `Booking`. */
export type AvailabilityServicesByBookingAvailabilityIdAndServiceIdManyToManyConnection = {
  __typename?: 'AvailabilityServicesByBookingAvailabilityIdAndServiceIdManyToManyConnection';
  /** A list of edges which contains the `Service`, info from the `Booking`, and the cursor to aid in pagination. */
  edges: Array<AvailabilityServicesByBookingAvailabilityIdAndServiceIdManyToManyEdge>;
  /** A list of `Service` objects. */
  nodes: Array<Service>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Service` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `Service` edge in the connection, with data from `Booking`. */
export type AvailabilityServicesByBookingAvailabilityIdAndServiceIdManyToManyEdge = {
  __typename?: 'AvailabilityServicesByBookingAvailabilityIdAndServiceIdManyToManyEdge';
  /** Reads and enables pagination through a set of `Booking`. */
  bookings: BookingsConnection;
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Service` at the end of the edge. */
  node: Service;
};


/** A `Service` edge in the connection, with data from `Booking`. */
export type AvailabilityServicesByBookingAvailabilityIdAndServiceIdManyToManyEdgeBookingsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<BookingCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<BookingsOrderBy>>;
};

/** A connection to a list of `User` values, with data from `Booking`. */
export type AvailabilityUsersByBookingAvailabilityIdAndUserIdManyToManyConnection = {
  __typename?: 'AvailabilityUsersByBookingAvailabilityIdAndUserIdManyToManyConnection';
  /** A list of edges which contains the `User`, info from the `Booking`, and the cursor to aid in pagination. */
  edges: Array<AvailabilityUsersByBookingAvailabilityIdAndUserIdManyToManyEdge>;
  /** A list of `User` objects. */
  nodes: Array<User>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `User` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `User` edge in the connection, with data from `Booking`. */
export type AvailabilityUsersByBookingAvailabilityIdAndUserIdManyToManyEdge = {
  __typename?: 'AvailabilityUsersByBookingAvailabilityIdAndUserIdManyToManyEdge';
  /** Reads and enables pagination through a set of `Booking`. */
  bookings: BookingsConnection;
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `User` at the end of the edge. */
  node: User;
};


/** A `User` edge in the connection, with data from `Booking`. */
export type AvailabilityUsersByBookingAvailabilityIdAndUserIdManyToManyEdgeBookingsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<BookingCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<BookingsOrderBy>>;
};

export type Booking = {
  __typename?: 'Booking';
  /** Reads a single `Address` that is related to this `Booking`. */
  address?: Maybe<Address>;
  addressId: Scalars['UUID']['output'];
  /** Reads a single `Availability` that is related to this `Booking`. */
  availability?: Maybe<Availability>;
  availabilityId: Scalars['UUID']['output'];
  createdAt: Scalars['Datetime']['output'];
  id: Scalars['UUID']['output'];
  /** Reads a single `Service` that is related to this `Booking`. */
  service?: Maybe<Service>;
  serviceId: Scalars['UUID']['output'];
  status: Scalars['String']['output'];
  updatedAt: Scalars['Datetime']['output'];
  /** Reads a single `User` that is related to this `Booking`. */
  user?: Maybe<User>;
  userId: Scalars['UUID']['output'];
};

/** The fields on `booking` to look up the row to connect. */
export type BookingBookingsPkeyConnect = {
  id: Scalars['UUID']['input'];
};

/** The fields on `booking` to look up the row to delete. */
export type BookingBookingsPkeyDelete = {
  id: Scalars['UUID']['input'];
};

/** A condition to be used against `Booking` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type BookingCondition = {
  /** Checks for equality with the object’s `addressId` field. */
  addressId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `availabilityId` field. */
  availabilityId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `serviceId` field. */
  serviceId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `userId` field. */
  userId?: InputMaybe<Scalars['UUID']['input']>;
};

/** An input for mutations affecting `Booking` */
export type BookingInput = {
  addressId?: InputMaybe<Scalars['UUID']['input']>;
  addressToAddressId?: InputMaybe<BookingsAddressIdFkeyInput>;
  availabilityId?: InputMaybe<Scalars['UUID']['input']>;
  availabilityToAvailabilityId?: InputMaybe<BookingsAvailabilityIdFkeyInput>;
  serviceId?: InputMaybe<Scalars['UUID']['input']>;
  serviceToServiceId?: InputMaybe<BookingsServiceIdFkeyInput>;
  userId?: InputMaybe<Scalars['UUID']['input']>;
  userToUserId?: InputMaybe<BookingsUserIdFkeyInput>;
};

/** The fields on `booking` to look up the row to update. */
export type BookingOnBookingForBookingsAddressIdFkeyUsingBookingsPkeyUpdate = {
  id: Scalars['UUID']['input'];
  /** An object where the defined keys will be set on the `booking` being updated. */
  patch: UpdateBookingOnBookingForBookingsAddressIdFkeyPatch;
};

/** The fields on `booking` to look up the row to update. */
export type BookingOnBookingForBookingsAvailabilityIdFkeyUsingBookingsPkeyUpdate = {
  id: Scalars['UUID']['input'];
  /** An object where the defined keys will be set on the `booking` being updated. */
  patch: UpdateBookingOnBookingForBookingsAvailabilityIdFkeyPatch;
};

/** The fields on `booking` to look up the row to update. */
export type BookingOnBookingForBookingsServiceIdFkeyUsingBookingsPkeyUpdate = {
  id: Scalars['UUID']['input'];
  /** An object where the defined keys will be set on the `booking` being updated. */
  patch: UpdateBookingOnBookingForBookingsServiceIdFkeyPatch;
};

/** The fields on `booking` to look up the row to update. */
export type BookingOnBookingForBookingsUserIdFkeyUsingBookingsPkeyUpdate = {
  id: Scalars['UUID']['input'];
  /** An object where the defined keys will be set on the `booking` being updated. */
  patch: UpdateBookingOnBookingForBookingsUserIdFkeyPatch;
};

/** Represents an update to a `Booking`. Fields that are set will be updated. */
export type BookingPatch = {
  addressId?: InputMaybe<Scalars['UUID']['input']>;
  addressToAddressId?: InputMaybe<BookingsAddressIdFkeyInput>;
  availabilityId?: InputMaybe<Scalars['UUID']['input']>;
  availabilityToAvailabilityId?: InputMaybe<BookingsAvailabilityIdFkeyInput>;
  serviceId?: InputMaybe<Scalars['UUID']['input']>;
  serviceToServiceId?: InputMaybe<BookingsServiceIdFkeyInput>;
  status?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['UUID']['input']>;
  userToUserId?: InputMaybe<BookingsUserIdFkeyInput>;
};

/** The `address` to be created by this mutation. */
export type BookingsAddressIdFkeyAddressesCreateInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  bookingsUsingId?: InputMaybe<BookingsAddressIdFkeyInverseInput>;
  contactNumber?: InputMaybe<Scalars['String']['input']>;
  isPrimary?: InputMaybe<Scalars['Boolean']['input']>;
  userId?: InputMaybe<Scalars['UUID']['input']>;
  userToUserId?: InputMaybe<AddressesUserIdFkeyInput>;
};

/** The `booking` to be created by this mutation. */
export type BookingsAddressIdFkeyBookingsCreateInput = {
  addressToAddressId?: InputMaybe<BookingsAddressIdFkeyInput>;
  availabilityId?: InputMaybe<Scalars['UUID']['input']>;
  availabilityToAvailabilityId?: InputMaybe<BookingsAvailabilityIdFkeyInput>;
  serviceId?: InputMaybe<Scalars['UUID']['input']>;
  serviceToServiceId?: InputMaybe<BookingsServiceIdFkeyInput>;
  userId?: InputMaybe<Scalars['UUID']['input']>;
  userToUserId?: InputMaybe<BookingsUserIdFkeyInput>;
};

/** Input for the nested mutation of `address` in the `BookingInput` mutation. */
export type BookingsAddressIdFkeyInput = {
  /** The primary key(s) for `address` for the far side of the relationship. */
  connectById?: InputMaybe<AddressAddressesPkeyConnect>;
  /** A `AddressInput` object that will be created and connected to this object. */
  create?: InputMaybe<BookingsAddressIdFkeyAddressesCreateInput>;
  /** The primary key(s) for `address` for the far side of the relationship. */
  deleteById?: InputMaybe<AddressAddressesPkeyDelete>;
  /** The primary key(s) and patch data for `address` for the far side of the relationship. */
  updateById?: InputMaybe<AddressOnBookingForBookingsAddressIdFkeyUsingAddressesPkeyUpdate>;
};

/** Input for the nested mutation of `booking` in the `AddressInput` mutation. */
export type BookingsAddressIdFkeyInverseInput = {
  /** The primary key(s) for `booking` for the far side of the relationship. */
  connectById?: InputMaybe<Array<BookingBookingsPkeyConnect>>;
  /** A `BookingInput` object that will be created and connected to this object. */
  create?: InputMaybe<Array<BookingsAddressIdFkeyBookingsCreateInput>>;
  /** The primary key(s) for `booking` for the far side of the relationship. */
  deleteById?: InputMaybe<Array<BookingBookingsPkeyDelete>>;
  /** Flag indicating whether all other `booking` records that match this relationship should be removed. */
  deleteOthers?: InputMaybe<Scalars['Boolean']['input']>;
  /** The primary key(s) and patch data for `booking` for the far side of the relationship. */
  updateById?: InputMaybe<Array<BookingOnBookingForBookingsAddressIdFkeyUsingBookingsPkeyUpdate>>;
};

/** The `availability` to be created by this mutation. */
export type BookingsAvailabilityIdFkeyAvailabilitiesCreateInput = {
  bookingsUsingId?: InputMaybe<BookingsAvailabilityIdFkeyInverseInput>;
  companyId?: InputMaybe<Scalars['UUID']['input']>;
  companyToCompanyId?: InputMaybe<AvailabilitiesCompanyIdFkeyInput>;
  endTime: Scalars['Datetime']['input'];
  startTime: Scalars['Datetime']['input'];
};

/** The `booking` to be created by this mutation. */
export type BookingsAvailabilityIdFkeyBookingsCreateInput = {
  addressId?: InputMaybe<Scalars['UUID']['input']>;
  addressToAddressId?: InputMaybe<BookingsAddressIdFkeyInput>;
  availabilityToAvailabilityId?: InputMaybe<BookingsAvailabilityIdFkeyInput>;
  serviceId?: InputMaybe<Scalars['UUID']['input']>;
  serviceToServiceId?: InputMaybe<BookingsServiceIdFkeyInput>;
  userId?: InputMaybe<Scalars['UUID']['input']>;
  userToUserId?: InputMaybe<BookingsUserIdFkeyInput>;
};

/** Input for the nested mutation of `availability` in the `BookingInput` mutation. */
export type BookingsAvailabilityIdFkeyInput = {
  /** The primary key(s) for `availability` for the far side of the relationship. */
  connectById?: InputMaybe<AvailabilityAvailabilitiesPkeyConnect>;
  /** A `AvailabilityInput` object that will be created and connected to this object. */
  create?: InputMaybe<BookingsAvailabilityIdFkeyAvailabilitiesCreateInput>;
  /** The primary key(s) for `availability` for the far side of the relationship. */
  deleteById?: InputMaybe<AvailabilityAvailabilitiesPkeyDelete>;
  /** The primary key(s) and patch data for `availability` for the far side of the relationship. */
  updateById?: InputMaybe<AvailabilityOnBookingForBookingsAvailabilityIdFkeyUsingAvailabilitiesPkeyUpdate>;
};

/** Input for the nested mutation of `booking` in the `AvailabilityInput` mutation. */
export type BookingsAvailabilityIdFkeyInverseInput = {
  /** The primary key(s) for `booking` for the far side of the relationship. */
  connectById?: InputMaybe<Array<BookingBookingsPkeyConnect>>;
  /** A `BookingInput` object that will be created and connected to this object. */
  create?: InputMaybe<Array<BookingsAvailabilityIdFkeyBookingsCreateInput>>;
  /** The primary key(s) for `booking` for the far side of the relationship. */
  deleteById?: InputMaybe<Array<BookingBookingsPkeyDelete>>;
  /** Flag indicating whether all other `booking` records that match this relationship should be removed. */
  deleteOthers?: InputMaybe<Scalars['Boolean']['input']>;
  /** The primary key(s) and patch data for `booking` for the far side of the relationship. */
  updateById?: InputMaybe<Array<BookingOnBookingForBookingsAvailabilityIdFkeyUsingBookingsPkeyUpdate>>;
};

/** A connection to a list of `Booking` values. */
export type BookingsConnection = {
  __typename?: 'BookingsConnection';
  /** A list of edges which contains the `Booking` and cursor to aid in pagination. */
  edges: Array<BookingsEdge>;
  /** A list of `Booking` objects. */
  nodes: Array<Booking>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Booking` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `Booking` edge in the connection. */
export type BookingsEdge = {
  __typename?: 'BookingsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Booking` at the end of the edge. */
  node: Booking;
};

/** Methods to use when ordering `Booking`. */
export enum BookingsOrderBy {
  AddressIdAsc = 'ADDRESS_ID_ASC',
  AddressIdDesc = 'ADDRESS_ID_DESC',
  AvailabilityIdAsc = 'AVAILABILITY_ID_ASC',
  AvailabilityIdDesc = 'AVAILABILITY_ID_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  ServiceIdAsc = 'SERVICE_ID_ASC',
  ServiceIdDesc = 'SERVICE_ID_DESC',
  UserIdAsc = 'USER_ID_ASC',
  UserIdDesc = 'USER_ID_DESC'
}

/** The `booking` to be created by this mutation. */
export type BookingsServiceIdFkeyBookingsCreateInput = {
  addressId?: InputMaybe<Scalars['UUID']['input']>;
  addressToAddressId?: InputMaybe<BookingsAddressIdFkeyInput>;
  availabilityId?: InputMaybe<Scalars['UUID']['input']>;
  availabilityToAvailabilityId?: InputMaybe<BookingsAvailabilityIdFkeyInput>;
  serviceToServiceId?: InputMaybe<BookingsServiceIdFkeyInput>;
  userId?: InputMaybe<Scalars['UUID']['input']>;
  userToUserId?: InputMaybe<BookingsUserIdFkeyInput>;
};

/** Input for the nested mutation of `service` in the `BookingInput` mutation. */
export type BookingsServiceIdFkeyInput = {
  /** The primary key(s) for `service` for the far side of the relationship. */
  connectById?: InputMaybe<ServiceServicesPkeyConnect>;
  /** A `ServiceInput` object that will be created and connected to this object. */
  create?: InputMaybe<BookingsServiceIdFkeyServicesCreateInput>;
  /** The primary key(s) and patch data for `service` for the far side of the relationship. */
  updateById?: InputMaybe<ServiceOnBookingForBookingsServiceIdFkeyUsingServicesPkeyUpdate>;
};

/** Input for the nested mutation of `booking` in the `ServiceInput` mutation. */
export type BookingsServiceIdFkeyInverseInput = {
  /** The primary key(s) for `booking` for the far side of the relationship. */
  connectById?: InputMaybe<Array<BookingBookingsPkeyConnect>>;
  /** A `BookingInput` object that will be created and connected to this object. */
  create?: InputMaybe<Array<BookingsServiceIdFkeyBookingsCreateInput>>;
  /** The primary key(s) for `booking` for the far side of the relationship. */
  deleteById?: InputMaybe<Array<BookingBookingsPkeyDelete>>;
  /** Flag indicating whether all other `booking` records that match this relationship should be removed. */
  deleteOthers?: InputMaybe<Scalars['Boolean']['input']>;
  /** The primary key(s) and patch data for `booking` for the far side of the relationship. */
  updateById?: InputMaybe<Array<BookingOnBookingForBookingsServiceIdFkeyUsingBookingsPkeyUpdate>>;
};

/** The `service` to be created by this mutation. */
export type BookingsServiceIdFkeyServicesCreateInput = {
  bookingsUsingId?: InputMaybe<BookingsServiceIdFkeyInverseInput>;
  companyId?: InputMaybe<Scalars['UUID']['input']>;
  companyToCompanyId?: InputMaybe<ServicesCompanyIdFkeyInput>;
  description: Scalars['String']['input'];
  name: Scalars['String']['input'];
  price: Scalars['Int']['input'];
  serviceCategoriesUsingId?: InputMaybe<CategoriesServiceIdFkeyInverseInput>;
};

/** The `booking` to be created by this mutation. */
export type BookingsUserIdFkeyBookingsCreateInput = {
  addressId?: InputMaybe<Scalars['UUID']['input']>;
  addressToAddressId?: InputMaybe<BookingsAddressIdFkeyInput>;
  availabilityId?: InputMaybe<Scalars['UUID']['input']>;
  availabilityToAvailabilityId?: InputMaybe<BookingsAvailabilityIdFkeyInput>;
  serviceId?: InputMaybe<Scalars['UUID']['input']>;
  serviceToServiceId?: InputMaybe<BookingsServiceIdFkeyInput>;
  userToUserId?: InputMaybe<BookingsUserIdFkeyInput>;
};

/** Input for the nested mutation of `user` in the `BookingInput` mutation. */
export type BookingsUserIdFkeyInput = {
  /** The primary key(s) for `user` for the far side of the relationship. */
  connectById?: InputMaybe<UserUsersPkeyConnect>;
  /** A `UserInput` object that will be created and connected to this object. */
  create?: InputMaybe<BookingsUserIdFkeyUsersCreateInput>;
  /** The primary key(s) for `user` for the far side of the relationship. */
  deleteById?: InputMaybe<UserUsersPkeyDelete>;
  /** The primary key(s) and patch data for `user` for the far side of the relationship. */
  updateById?: InputMaybe<UserOnBookingForBookingsUserIdFkeyUsingUsersPkeyUpdate>;
};

/** Input for the nested mutation of `booking` in the `UserInput` mutation. */
export type BookingsUserIdFkeyInverseInput = {
  /** The primary key(s) for `booking` for the far side of the relationship. */
  connectById?: InputMaybe<Array<BookingBookingsPkeyConnect>>;
  /** A `BookingInput` object that will be created and connected to this object. */
  create?: InputMaybe<Array<BookingsUserIdFkeyBookingsCreateInput>>;
  /** The primary key(s) for `booking` for the far side of the relationship. */
  deleteById?: InputMaybe<Array<BookingBookingsPkeyDelete>>;
  /** Flag indicating whether all other `booking` records that match this relationship should be removed. */
  deleteOthers?: InputMaybe<Scalars['Boolean']['input']>;
  /** The primary key(s) and patch data for `booking` for the far side of the relationship. */
  updateById?: InputMaybe<Array<BookingOnBookingForBookingsUserIdFkeyUsingBookingsPkeyUpdate>>;
};

/** The `user` to be created by this mutation. */
export type BookingsUserIdFkeyUsersCreateInput = {
  addressesUsingId?: InputMaybe<AddressesUserIdFkeyInverseInput>;
  bookingsUsingId?: InputMaybe<BookingsUserIdFkeyInverseInput>;
  companiesUsingId?: InputMaybe<CompaniesUserIdFkeyInverseInput>;
  email: Scalars['String']['input'];
  isAdmin?: InputMaybe<Scalars['Boolean']['input']>;
  isVerified?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

/** The `category` to be created by this mutation. */
export type CategoriesCategoryIdFkeyCategoriesCreateInput = {
  categoryToParentId?: InputMaybe<CategoriesParentIdFkeyInput>;
  name: Scalars['String']['input'];
  parentId?: InputMaybe<Scalars['UUID']['input']>;
  serviceCategoriesUsingId?: InputMaybe<CategoriesCategoryIdFkeyInverseInput>;
  slug: Scalars['String']['input'];
};

/** Input for the nested mutation of `category` in the `ServiceCategoryInput` mutation. */
export type CategoriesCategoryIdFkeyInput = {
  /** The primary key(s) for `category` for the far side of the relationship. */
  connectById?: InputMaybe<CategoryCategoriesPkeyConnect>;
  /** The primary key(s) for `category` for the far side of the relationship. */
  connectBySlug?: InputMaybe<CategoryCategoriesSlugKeyConnect>;
  /** A `CategoryInput` object that will be created and connected to this object. */
  create?: InputMaybe<CategoriesCategoryIdFkeyCategoriesCreateInput>;
  /** The primary key(s) for `category` for the far side of the relationship. */
  deleteById?: InputMaybe<CategoryCategoriesPkeyDelete>;
  /** The primary key(s) for `category` for the far side of the relationship. */
  deleteBySlug?: InputMaybe<CategoryCategoriesSlugKeyDelete>;
  /** The primary key(s) and patch data for `category` for the far side of the relationship. */
  updateById?: InputMaybe<CategoryOnServiceCategoryForCategoriesCategoryIdFkeyUsingCategoriesPkeyUpdate>;
  /** The primary key(s) and patch data for `category` for the far side of the relationship. */
  updateBySlug?: InputMaybe<CategoryOnServiceCategoryForCategoriesCategoryIdFkeyUsingCategoriesSlugKeyUpdate>;
};

/** Input for the nested mutation of `serviceCategory` in the `CategoryInput` mutation. */
export type CategoriesCategoryIdFkeyInverseInput = {
  /** The primary key(s) for `serviceCategory` for the far side of the relationship. */
  connectById?: InputMaybe<Array<ServiceCategoryServiceCategoriesPkeyConnect>>;
  /** A `ServiceCategoryInput` object that will be created and connected to this object. */
  create?: InputMaybe<Array<CategoriesCategoryIdFkeyServiceCategoriesCreateInput>>;
  /** The primary key(s) for `serviceCategory` for the far side of the relationship. */
  deleteById?: InputMaybe<Array<ServiceCategoryServiceCategoriesPkeyDelete>>;
  /** Flag indicating whether all other `serviceCategory` records that match this relationship should be removed. */
  deleteOthers?: InputMaybe<Scalars['Boolean']['input']>;
  /** The primary key(s) and patch data for `serviceCategory` for the far side of the relationship. */
  updateById?: InputMaybe<Array<ServiceCategoryOnServiceCategoryForCategoriesCategoryIdFkeyUsingServiceCategoriesPkeyUpdate>>;
};

/** The `serviceCategory` to be created by this mutation. */
export type CategoriesCategoryIdFkeyServiceCategoriesCreateInput = {
  categoryToCategoryId?: InputMaybe<CategoriesCategoryIdFkeyInput>;
  serviceId?: InputMaybe<Scalars['UUID']['input']>;
  serviceToServiceId?: InputMaybe<CategoriesServiceIdFkeyInput>;
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
  SlugDesc = 'SLUG_DESC'
}

/** The `category` to be created by this mutation. */
export type CategoriesParentIdFkeyCategoriesCreateInput = {
  categoryToParentId?: InputMaybe<CategoriesParentIdFkeyInput>;
  name: Scalars['String']['input'];
  serviceCategoriesUsingId?: InputMaybe<CategoriesCategoryIdFkeyInverseInput>;
  slug: Scalars['String']['input'];
};

/** Input for the nested mutation of `category` in the `CategoryInput` mutation. */
export type CategoriesParentIdFkeyInput = {
  /** The primary key(s) for `category` for the far side of the relationship. */
  connectById?: InputMaybe<CategoryCategoriesPkeyConnect>;
  /** The primary key(s) for `category` for the far side of the relationship. */
  connectBySlug?: InputMaybe<CategoryCategoriesSlugKeyConnect>;
  /** A `CategoryInput` object that will be created and connected to this object. */
  create?: InputMaybe<CategoriesParentIdFkeyCategoriesCreateInput>;
  /** The primary key(s) for `category` for the far side of the relationship. */
  deleteById?: InputMaybe<CategoryCategoriesPkeyDelete>;
  /** The primary key(s) for `category` for the far side of the relationship. */
  deleteBySlug?: InputMaybe<CategoryCategoriesSlugKeyDelete>;
  /** The primary key(s) and patch data for `category` for the far side of the relationship. */
  updateById?: InputMaybe<CategoryOnCategoryForCategoriesParentIdFkeyUsingCategoriesPkeyUpdate>;
  /** The primary key(s) and patch data for `category` for the far side of the relationship. */
  updateBySlug?: InputMaybe<CategoryOnCategoryForCategoriesParentIdFkeyUsingCategoriesSlugKeyUpdate>;
};

/** Input for the nested mutation of `service` in the `ServiceCategoryInput` mutation. */
export type CategoriesServiceIdFkeyInput = {
  /** The primary key(s) for `service` for the far side of the relationship. */
  connectById?: InputMaybe<ServiceServicesPkeyConnect>;
  /** A `ServiceInput` object that will be created and connected to this object. */
  create?: InputMaybe<CategoriesServiceIdFkeyServicesCreateInput>;
  /** The primary key(s) and patch data for `service` for the far side of the relationship. */
  updateById?: InputMaybe<ServiceOnServiceCategoryForCategoriesServiceIdFkeyUsingServicesPkeyUpdate>;
};

/** Input for the nested mutation of `serviceCategory` in the `ServiceInput` mutation. */
export type CategoriesServiceIdFkeyInverseInput = {
  /** The primary key(s) for `serviceCategory` for the far side of the relationship. */
  connectById?: InputMaybe<Array<ServiceCategoryServiceCategoriesPkeyConnect>>;
  /** A `ServiceCategoryInput` object that will be created and connected to this object. */
  create?: InputMaybe<Array<CategoriesServiceIdFkeyServiceCategoriesCreateInput>>;
  /** The primary key(s) for `serviceCategory` for the far side of the relationship. */
  deleteById?: InputMaybe<Array<ServiceCategoryServiceCategoriesPkeyDelete>>;
  /** Flag indicating whether all other `serviceCategory` records that match this relationship should be removed. */
  deleteOthers?: InputMaybe<Scalars['Boolean']['input']>;
  /** The primary key(s) and patch data for `serviceCategory` for the far side of the relationship. */
  updateById?: InputMaybe<Array<ServiceCategoryOnServiceCategoryForCategoriesServiceIdFkeyUsingServiceCategoriesPkeyUpdate>>;
};

/** The `serviceCategory` to be created by this mutation. */
export type CategoriesServiceIdFkeyServiceCategoriesCreateInput = {
  categoryId?: InputMaybe<Scalars['UUID']['input']>;
  categoryToCategoryId?: InputMaybe<CategoriesCategoryIdFkeyInput>;
  serviceToServiceId?: InputMaybe<CategoriesServiceIdFkeyInput>;
};

/** The `service` to be created by this mutation. */
export type CategoriesServiceIdFkeyServicesCreateInput = {
  bookingsUsingId?: InputMaybe<BookingsServiceIdFkeyInverseInput>;
  companyId?: InputMaybe<Scalars['UUID']['input']>;
  companyToCompanyId?: InputMaybe<ServicesCompanyIdFkeyInput>;
  description: Scalars['String']['input'];
  name: Scalars['String']['input'];
  price: Scalars['Int']['input'];
  serviceCategoriesUsingId?: InputMaybe<CategoriesServiceIdFkeyInverseInput>;
};

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
  /** Reads and enables pagination through a set of `ServiceCategory`. */
  serviceCategories: ServiceCategoriesConnection;
  /** Reads and enables pagination through a set of `Service`. */
  servicesByServiceCategoryCategoryIdAndServiceId: CategoryServicesByServiceCategoryCategoryIdAndServiceIdManyToManyConnection;
  slug: Scalars['String']['output'];
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


export type CategoryServiceCategoriesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<ServiceCategoryCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ServiceCategoriesOrderBy>>;
};


export type CategoryServicesByServiceCategoryCategoryIdAndServiceIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<ServiceCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ServicesOrderBy>>;
};

/** The fields on `category` to look up the row to connect. */
export type CategoryCategoriesPkeyConnect = {
  id: Scalars['UUID']['input'];
};

/** The fields on `category` to look up the row to delete. */
export type CategoryCategoriesPkeyDelete = {
  id: Scalars['UUID']['input'];
};

/** The fields on `category` to look up the row to connect. */
export type CategoryCategoriesSlugKeyConnect = {
  slug: Scalars['String']['input'];
};

/** The fields on `category` to look up the row to delete. */
export type CategoryCategoriesSlugKeyDelete = {
  slug: Scalars['String']['input'];
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

/** An input for mutations affecting `Category` */
export type CategoryInput = {
  categoryToParentId?: InputMaybe<CategoriesParentIdFkeyInput>;
  name: Scalars['String']['input'];
  parentId?: InputMaybe<Scalars['UUID']['input']>;
  serviceCategoriesUsingId?: InputMaybe<CategoriesCategoryIdFkeyInverseInput>;
  slug: Scalars['String']['input'];
};

/** The fields on `category` to look up the row to update. */
export type CategoryOnCategoryForCategoriesParentIdFkeyUsingCategoriesPkeyUpdate = {
  id: Scalars['UUID']['input'];
  /** An object where the defined keys will be set on the `category` being updated. */
  patch: UpdateCategoryOnCategoryForCategoriesParentIdFkeyPatch;
};

/** The fields on `category` to look up the row to update. */
export type CategoryOnCategoryForCategoriesParentIdFkeyUsingCategoriesSlugKeyUpdate = {
  /** An object where the defined keys will be set on the `category` being updated. */
  patch: UpdateCategoryOnCategoryForCategoriesParentIdFkeyPatch;
  slug: Scalars['String']['input'];
};

/** The fields on `category` to look up the row to update. */
export type CategoryOnServiceCategoryForCategoriesCategoryIdFkeyUsingCategoriesPkeyUpdate = {
  id: Scalars['UUID']['input'];
  /** An object where the defined keys will be set on the `category` being updated. */
  patch: UpdateCategoryOnServiceCategoryForCategoriesCategoryIdFkeyPatch;
};

/** The fields on `category` to look up the row to update. */
export type CategoryOnServiceCategoryForCategoriesCategoryIdFkeyUsingCategoriesSlugKeyUpdate = {
  /** An object where the defined keys will be set on the `category` being updated. */
  patch: UpdateCategoryOnServiceCategoryForCategoriesCategoryIdFkeyPatch;
  slug: Scalars['String']['input'];
};

/** Represents an update to a `Category`. Fields that are set will be updated. */
export type CategoryPatch = {
  categoryToParentId?: InputMaybe<CategoriesParentIdFkeyInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  parentId?: InputMaybe<Scalars['UUID']['input']>;
  serviceCategoriesUsingId?: InputMaybe<CategoriesCategoryIdFkeyInverseInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

/** A connection to a list of `Service` values, with data from `ServiceCategory`. */
export type CategoryServicesByServiceCategoryCategoryIdAndServiceIdManyToManyConnection = {
  __typename?: 'CategoryServicesByServiceCategoryCategoryIdAndServiceIdManyToManyConnection';
  /** A list of edges which contains the `Service`, info from the `ServiceCategory`, and the cursor to aid in pagination. */
  edges: Array<CategoryServicesByServiceCategoryCategoryIdAndServiceIdManyToManyEdge>;
  /** A list of `Service` objects. */
  nodes: Array<Service>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Service` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `Service` edge in the connection, with data from `ServiceCategory`. */
export type CategoryServicesByServiceCategoryCategoryIdAndServiceIdManyToManyEdge = {
  __typename?: 'CategoryServicesByServiceCategoryCategoryIdAndServiceIdManyToManyEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Service` at the end of the edge. */
  node: Service;
  /** Reads and enables pagination through a set of `ServiceCategory`. */
  serviceCategories: ServiceCategoriesConnection;
};


/** A `Service` edge in the connection, with data from `ServiceCategory`. */
export type CategoryServicesByServiceCategoryCategoryIdAndServiceIdManyToManyEdgeServiceCategoriesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<ServiceCategoryCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ServiceCategoriesOrderBy>>;
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
  UserIdDesc = 'USER_ID_DESC'
}

/** The `company` to be created by this mutation. */
export type CompaniesUserIdFkeyCompaniesCreateInput = {
  availabilitiesUsingId?: InputMaybe<AvailabilitiesCompanyIdFkeyInverseInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  isVerified?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  servicesUsingId?: InputMaybe<ServicesCompanyIdFkeyInverseInput>;
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
  updateById?: InputMaybe<Array<CompanyOnCompanyForCompaniesUserIdFkeyUsingCompaniesPkeyUpdate>>;
};

/** The `user` to be created by this mutation. */
export type CompaniesUserIdFkeyUsersCreateInput = {
  addressesUsingId?: InputMaybe<AddressesUserIdFkeyInverseInput>;
  bookingsUsingId?: InputMaybe<BookingsUserIdFkeyInverseInput>;
  companiesUsingId?: InputMaybe<CompaniesUserIdFkeyInverseInput>;
  email: Scalars['String']['input'];
  isAdmin?: InputMaybe<Scalars['Boolean']['input']>;
  isVerified?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type Company = {
  __typename?: 'Company';
  /** Reads and enables pagination through a set of `Availability`. */
  availabilities: AvailabilitiesConnection;
  createdAt: Scalars['Datetime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['UUID']['output'];
  isVerified: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  /** Reads and enables pagination through a set of `Service`. */
  services: ServicesConnection;
  updatedAt: Scalars['Datetime']['output'];
  /** Reads a single `User` that is related to this `Company`. */
  user?: Maybe<User>;
  userId: Scalars['UUID']['output'];
};


export type CompanyAvailabilitiesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<AvailabilityCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AvailabilitiesOrderBy>>;
};


export type CompanyServicesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<ServiceCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ServicesOrderBy>>;
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
  availabilitiesUsingId?: InputMaybe<AvailabilitiesCompanyIdFkeyInverseInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  isVerified?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  servicesUsingId?: InputMaybe<ServicesCompanyIdFkeyInverseInput>;
  userId?: InputMaybe<Scalars['UUID']['input']>;
  userToUserId?: InputMaybe<CompaniesUserIdFkeyInput>;
};

/** The fields on `company` to look up the row to update. */
export type CompanyOnAvailabilityForAvailabilitiesCompanyIdFkeyUsingCompaniesPkeyUpdate = {
  id: Scalars['UUID']['input'];
  /** An object where the defined keys will be set on the `company` being updated. */
  patch: UpdateCompanyOnAvailabilityForAvailabilitiesCompanyIdFkeyPatch;
};

/** The fields on `company` to look up the row to update. */
export type CompanyOnCompanyForCompaniesUserIdFkeyUsingCompaniesPkeyUpdate = {
  id: Scalars['UUID']['input'];
  /** An object where the defined keys will be set on the `company` being updated. */
  patch: UpdateCompanyOnCompanyForCompaniesUserIdFkeyPatch;
};

/** The fields on `company` to look up the row to update. */
export type CompanyOnServiceForServicesCompanyIdFkeyUsingCompaniesPkeyUpdate = {
  id: Scalars['UUID']['input'];
  /** An object where the defined keys will be set on the `company` being updated. */
  patch: UpdateCompanyOnServiceForServicesCompanyIdFkeyPatch;
};

/** Represents an update to a `Company`. Fields that are set will be updated. */
export type CompanyPatch = {
  availabilitiesUsingId?: InputMaybe<AvailabilitiesCompanyIdFkeyInverseInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  isVerified?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  servicesUsingId?: InputMaybe<ServicesCompanyIdFkeyInverseInput>;
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

/** All input for the create `Availability` mutation. */
export type CreateAvailabilityInput = {
  /** The `Availability` to be created by this mutation. */
  availability: AvailabilityInput;
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

/** The output of our create `Availability` mutation. */
export type CreateAvailabilityPayload = {
  __typename?: 'CreateAvailabilityPayload';
  /** The `Availability` that was created by this mutation. */
  availability?: Maybe<Availability>;
  /** An edge for our `Availability`. May be used by Relay 1. */
  availabilityEdge?: Maybe<AvailabilitiesEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Reads a single `Company` that is related to this `Availability`. */
  company?: Maybe<Company>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our create `Availability` mutation. */
export type CreateAvailabilityPayloadAvailabilityEdgeArgs = {
  orderBy?: InputMaybe<Array<AvailabilitiesOrderBy>>;
};

/** All input for the create `Booking` mutation. */
export type CreateBookingInput = {
  /** The `Booking` to be created by this mutation. */
  booking: BookingInput;
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

/** The output of our create `Booking` mutation. */
export type CreateBookingPayload = {
  __typename?: 'CreateBookingPayload';
  /** Reads a single `Address` that is related to this `Booking`. */
  address?: Maybe<Address>;
  /** Reads a single `Availability` that is related to this `Booking`. */
  availability?: Maybe<Availability>;
  /** The `Booking` that was created by this mutation. */
  booking?: Maybe<Booking>;
  /** An edge for our `Booking`. May be used by Relay 1. */
  bookingEdge?: Maybe<BookingsEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Service` that is related to this `Booking`. */
  service?: Maybe<Service>;
  /** Reads a single `User` that is related to this `Booking`. */
  user?: Maybe<User>;
};


/** The output of our create `Booking` mutation. */
export type CreateBookingPayloadBookingEdgeArgs = {
  orderBy?: InputMaybe<Array<BookingsOrderBy>>;
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

/** All input for the create `ServiceCategory` mutation. */
export type CreateServiceCategoryInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The `ServiceCategory` to be created by this mutation. */
  serviceCategory: ServiceCategoryInput;
};

/** The output of our create `ServiceCategory` mutation. */
export type CreateServiceCategoryPayload = {
  __typename?: 'CreateServiceCategoryPayload';
  /** Reads a single `Category` that is related to this `ServiceCategory`. */
  category?: Maybe<Category>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Service` that is related to this `ServiceCategory`. */
  service?: Maybe<Service>;
  /** The `ServiceCategory` that was created by this mutation. */
  serviceCategory?: Maybe<ServiceCategory>;
  /** An edge for our `ServiceCategory`. May be used by Relay 1. */
  serviceCategoryEdge?: Maybe<ServiceCategoriesEdge>;
};


/** The output of our create `ServiceCategory` mutation. */
export type CreateServiceCategoryPayloadServiceCategoryEdgeArgs = {
  orderBy?: InputMaybe<Array<ServiceCategoriesOrderBy>>;
};

/** All input for the create `Service` mutation. */
export type CreateServiceInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The `Service` to be created by this mutation. */
  service: ServiceInput;
};

/** The output of our create `Service` mutation. */
export type CreateServicePayload = {
  __typename?: 'CreateServicePayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Reads a single `Company` that is related to this `Service`. */
  company?: Maybe<Company>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `Service` that was created by this mutation. */
  service?: Maybe<Service>;
  /** An edge for our `Service`. May be used by Relay 1. */
  serviceEdge?: Maybe<ServicesEdge>;
};


/** The output of our create `Service` mutation. */
export type CreateServicePayloadServiceEdgeArgs = {
  orderBy?: InputMaybe<Array<ServicesOrderBy>>;
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

/** All input for the `deleteAvailability` mutation. */
export type DeleteAvailabilityInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
};

/** The output of our delete `Availability` mutation. */
export type DeleteAvailabilityPayload = {
  __typename?: 'DeleteAvailabilityPayload';
  /** The `Availability` that was deleted by this mutation. */
  availability?: Maybe<Availability>;
  /** An edge for our `Availability`. May be used by Relay 1. */
  availabilityEdge?: Maybe<AvailabilitiesEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Reads a single `Company` that is related to this `Availability`. */
  company?: Maybe<Company>;
  deletedAvailabilityNodeId?: Maybe<Scalars['ID']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our delete `Availability` mutation. */
export type DeleteAvailabilityPayloadAvailabilityEdgeArgs = {
  orderBy?: InputMaybe<Array<AvailabilitiesOrderBy>>;
};

/** All input for the `deleteBooking` mutation. */
export type DeleteBookingInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
};

/** The output of our delete `Booking` mutation. */
export type DeleteBookingPayload = {
  __typename?: 'DeleteBookingPayload';
  /** Reads a single `Address` that is related to this `Booking`. */
  address?: Maybe<Address>;
  /** Reads a single `Availability` that is related to this `Booking`. */
  availability?: Maybe<Availability>;
  /** The `Booking` that was deleted by this mutation. */
  booking?: Maybe<Booking>;
  /** An edge for our `Booking`. May be used by Relay 1. */
  bookingEdge?: Maybe<BookingsEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedBookingNodeId?: Maybe<Scalars['ID']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Service` that is related to this `Booking`. */
  service?: Maybe<Service>;
  /** Reads a single `User` that is related to this `Booking`. */
  user?: Maybe<User>;
};


/** The output of our delete `Booking` mutation. */
export type DeleteBookingPayloadBookingEdgeArgs = {
  orderBy?: InputMaybe<Array<BookingsOrderBy>>;
};

/** All input for the `deleteCategoryBySlug` mutation. */
export type DeleteCategoryBySlugInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  slug: Scalars['String']['input'];
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

/** All input for the `deleteServiceCategory` mutation. */
export type DeleteServiceCategoryInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
};

/** The output of our delete `ServiceCategory` mutation. */
export type DeleteServiceCategoryPayload = {
  __typename?: 'DeleteServiceCategoryPayload';
  /** Reads a single `Category` that is related to this `ServiceCategory`. */
  category?: Maybe<Category>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedServiceCategoryNodeId?: Maybe<Scalars['ID']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Service` that is related to this `ServiceCategory`. */
  service?: Maybe<Service>;
  /** The `ServiceCategory` that was deleted by this mutation. */
  serviceCategory?: Maybe<ServiceCategory>;
  /** An edge for our `ServiceCategory`. May be used by Relay 1. */
  serviceCategoryEdge?: Maybe<ServiceCategoriesEdge>;
};


/** The output of our delete `ServiceCategory` mutation. */
export type DeleteServiceCategoryPayloadServiceCategoryEdgeArgs = {
  orderBy?: InputMaybe<Array<ServiceCategoriesOrderBy>>;
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
  /** Creates a single `Availability`. */
  createAvailability?: Maybe<CreateAvailabilityPayload>;
  /** Creates a single `Booking`. */
  createBooking?: Maybe<CreateBookingPayload>;
  /** Creates a single `Category`. */
  createCategory?: Maybe<CreateCategoryPayload>;
  /** Creates a single `Company`. */
  createCompany?: Maybe<CreateCompanyPayload>;
  /** Creates a single `Service`. */
  createService?: Maybe<CreateServicePayload>;
  /** Creates a single `ServiceCategory`. */
  createServiceCategory?: Maybe<CreateServiceCategoryPayload>;
  /** Creates a single `User`. */
  createUser?: Maybe<CreateUserPayload>;
  /** Deletes a single `Address` using a unique key. */
  deleteAddress?: Maybe<DeleteAddressPayload>;
  /** Deletes a single `Availability` using a unique key. */
  deleteAvailability?: Maybe<DeleteAvailabilityPayload>;
  /** Deletes a single `Booking` using a unique key. */
  deleteBooking?: Maybe<DeleteBookingPayload>;
  /** Deletes a single `Category` using a unique key. */
  deleteCategory?: Maybe<DeleteCategoryPayload>;
  /** Deletes a single `Category` using a unique key. */
  deleteCategoryBySlug?: Maybe<DeleteCategoryPayload>;
  /** Deletes a single `Company` using a unique key. */
  deleteCompany?: Maybe<DeleteCompanyPayload>;
  /** Deletes a single `ServiceCategory` using a unique key. */
  deleteServiceCategory?: Maybe<DeleteServiceCategoryPayload>;
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
  /** Updates a single `Availability` using a unique key and a patch. */
  updateAvailability?: Maybe<UpdateAvailabilityPayload>;
  /** Updates a single `Booking` using a unique key and a patch. */
  updateBooking?: Maybe<UpdateBookingPayload>;
  /** Updates a single `Category` using a unique key and a patch. */
  updateCategory?: Maybe<UpdateCategoryPayload>;
  /** Updates a single `Category` using a unique key and a patch. */
  updateCategoryBySlug?: Maybe<UpdateCategoryPayload>;
  /** Updates a single `Company` using a unique key and a patch. */
  updateCompany?: Maybe<UpdateCompanyPayload>;
  /** Updates a single `Service` using a unique key and a patch. */
  updateService?: Maybe<UpdateServicePayload>;
  /** Updates a single `ServiceCategory` using a unique key and a patch. */
  updateServiceCategory?: Maybe<UpdateServiceCategoryPayload>;
  /** Updates a single `User` using a unique key and a patch. */
  updateUser?: Maybe<UpdateUserPayload>;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateAddressArgs = {
  input: CreateAddressInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateAvailabilityArgs = {
  input: CreateAvailabilityInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateBookingArgs = {
  input: CreateBookingInput;
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
export type MutationCreateServiceArgs = {
  input: CreateServiceInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateServiceCategoryArgs = {
  input: CreateServiceCategoryInput;
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
export type MutationDeleteAvailabilityArgs = {
  input: DeleteAvailabilityInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteBookingArgs = {
  input: DeleteBookingInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteCategoryArgs = {
  input: DeleteCategoryInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteCategoryBySlugArgs = {
  input: DeleteCategoryBySlugInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteCompanyArgs = {
  input: DeleteCompanyInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteServiceCategoryArgs = {
  input: DeleteServiceCategoryInput;
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
export type MutationUpdateAvailabilityArgs = {
  input: UpdateAvailabilityInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateBookingArgs = {
  input: UpdateBookingInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateCategoryArgs = {
  input: UpdateCategoryInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateCategoryBySlugArgs = {
  input: UpdateCategoryBySlugInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateCompanyArgs = {
  input: UpdateCompanyInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateServiceArgs = {
  input: UpdateServiceInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateServiceCategoryArgs = {
  input: UpdateServiceCategoryInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateUserArgs = {
  input: UpdateUserInput;
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

/** The root query type which gives access points into the data universe. */
export type Query = {
  __typename?: 'Query';
  address?: Maybe<Address>;
  /** Reads and enables pagination through a set of `Address`. */
  addresses?: Maybe<AddressesConnection>;
  /** Reads and enables pagination through a set of `Availability`. */
  availabilities?: Maybe<AvailabilitiesConnection>;
  availability?: Maybe<Availability>;
  booking?: Maybe<Booking>;
  /** Reads and enables pagination through a set of `Booking`. */
  bookings?: Maybe<BookingsConnection>;
  /** Reads and enables pagination through a set of `Category`. */
  categories?: Maybe<CategoriesConnection>;
  category?: Maybe<Category>;
  categoryBySlug?: Maybe<Category>;
  /** Reads and enables pagination through a set of `Company`. */
  companies?: Maybe<CompaniesConnection>;
  company?: Maybe<Company>;
  currentSessionId?: Maybe<Scalars['UUID']['output']>;
  currentUser?: Maybe<User>;
  currentUserId?: Maybe<Scalars['UUID']['output']>;
  currentUserIsAdmin?: Maybe<Scalars['Boolean']['output']>;
  /**
   * Exposes the root query type nested one level down. This is helpful for Relay 1
   * which can only query top level fields if they are in a particular form.
   */
  query: Query;
  service?: Maybe<Service>;
  /** Reads and enables pagination through a set of `ServiceCategory`. */
  serviceCategories?: Maybe<ServiceCategoriesConnection>;
  serviceCategory?: Maybe<ServiceCategory>;
  /** Reads and enables pagination through a set of `Service`. */
  services?: Maybe<ServicesConnection>;
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
export type QueryAvailabilitiesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<AvailabilityCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AvailabilitiesOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAvailabilityArgs = {
  id: Scalars['UUID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryBookingArgs = {
  id: Scalars['UUID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryBookingsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<BookingCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<BookingsOrderBy>>;
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
export type QueryCategoryBySlugArgs = {
  slug: Scalars['String']['input'];
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
export type QueryServiceArgs = {
  id: Scalars['UUID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryServiceCategoriesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<ServiceCategoryCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ServiceCategoriesOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryServiceCategoryArgs = {
  id: Scalars['UUID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryServicesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<ServiceCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ServicesOrderBy>>;
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

export type Service = {
  __typename?: 'Service';
  /** Reads and enables pagination through a set of `Address`. */
  addressesByBookingServiceIdAndAddressId: ServiceAddressesByBookingServiceIdAndAddressIdManyToManyConnection;
  /** Reads and enables pagination through a set of `Availability`. */
  availabilitiesByBookingServiceIdAndAvailabilityId: ServiceAvailabilitiesByBookingServiceIdAndAvailabilityIdManyToManyConnection;
  /** Reads and enables pagination through a set of `Booking`. */
  bookings: BookingsConnection;
  /** Reads and enables pagination through a set of `Category`. */
  categoriesByServiceCategoryServiceIdAndCategoryId: ServiceCategoriesByServiceCategoryServiceIdAndCategoryIdManyToManyConnection;
  /** Reads a single `Company` that is related to this `Service`. */
  company?: Maybe<Company>;
  companyId: Scalars['UUID']['output'];
  createdAt: Scalars['Datetime']['output'];
  description: Scalars['String']['output'];
  id: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  price: Scalars['Int']['output'];
  /** Reads and enables pagination through a set of `ServiceCategory`. */
  serviceCategories: ServiceCategoriesConnection;
  updatedAt: Scalars['Datetime']['output'];
  /** Reads and enables pagination through a set of `User`. */
  usersByBookingServiceIdAndUserId: ServiceUsersByBookingServiceIdAndUserIdManyToManyConnection;
};


export type ServiceAddressesByBookingServiceIdAndAddressIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<AddressCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AddressesOrderBy>>;
};


export type ServiceAvailabilitiesByBookingServiceIdAndAvailabilityIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<AvailabilityCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AvailabilitiesOrderBy>>;
};


export type ServiceBookingsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<BookingCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<BookingsOrderBy>>;
};


export type ServiceCategoriesByServiceCategoryServiceIdAndCategoryIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<CategoryCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CategoriesOrderBy>>;
};


export type ServiceServiceCategoriesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<ServiceCategoryCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ServiceCategoriesOrderBy>>;
};


export type ServiceUsersByBookingServiceIdAndUserIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<UserCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
};

/** A connection to a list of `Address` values, with data from `Booking`. */
export type ServiceAddressesByBookingServiceIdAndAddressIdManyToManyConnection = {
  __typename?: 'ServiceAddressesByBookingServiceIdAndAddressIdManyToManyConnection';
  /** A list of edges which contains the `Address`, info from the `Booking`, and the cursor to aid in pagination. */
  edges: Array<ServiceAddressesByBookingServiceIdAndAddressIdManyToManyEdge>;
  /** A list of `Address` objects. */
  nodes: Array<Address>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Address` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `Address` edge in the connection, with data from `Booking`. */
export type ServiceAddressesByBookingServiceIdAndAddressIdManyToManyEdge = {
  __typename?: 'ServiceAddressesByBookingServiceIdAndAddressIdManyToManyEdge';
  /** Reads and enables pagination through a set of `Booking`. */
  bookings: BookingsConnection;
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Address` at the end of the edge. */
  node: Address;
};


/** A `Address` edge in the connection, with data from `Booking`. */
export type ServiceAddressesByBookingServiceIdAndAddressIdManyToManyEdgeBookingsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<BookingCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<BookingsOrderBy>>;
};

/** A connection to a list of `Availability` values, with data from `Booking`. */
export type ServiceAvailabilitiesByBookingServiceIdAndAvailabilityIdManyToManyConnection = {
  __typename?: 'ServiceAvailabilitiesByBookingServiceIdAndAvailabilityIdManyToManyConnection';
  /** A list of edges which contains the `Availability`, info from the `Booking`, and the cursor to aid in pagination. */
  edges: Array<ServiceAvailabilitiesByBookingServiceIdAndAvailabilityIdManyToManyEdge>;
  /** A list of `Availability` objects. */
  nodes: Array<Availability>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Availability` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `Availability` edge in the connection, with data from `Booking`. */
export type ServiceAvailabilitiesByBookingServiceIdAndAvailabilityIdManyToManyEdge = {
  __typename?: 'ServiceAvailabilitiesByBookingServiceIdAndAvailabilityIdManyToManyEdge';
  /** Reads and enables pagination through a set of `Booking`. */
  bookings: BookingsConnection;
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Availability` at the end of the edge. */
  node: Availability;
};


/** A `Availability` edge in the connection, with data from `Booking`. */
export type ServiceAvailabilitiesByBookingServiceIdAndAvailabilityIdManyToManyEdgeBookingsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<BookingCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<BookingsOrderBy>>;
};

/** A connection to a list of `Category` values, with data from `ServiceCategory`. */
export type ServiceCategoriesByServiceCategoryServiceIdAndCategoryIdManyToManyConnection = {
  __typename?: 'ServiceCategoriesByServiceCategoryServiceIdAndCategoryIdManyToManyConnection';
  /** A list of edges which contains the `Category`, info from the `ServiceCategory`, and the cursor to aid in pagination. */
  edges: Array<ServiceCategoriesByServiceCategoryServiceIdAndCategoryIdManyToManyEdge>;
  /** A list of `Category` objects. */
  nodes: Array<Category>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Category` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `Category` edge in the connection, with data from `ServiceCategory`. */
export type ServiceCategoriesByServiceCategoryServiceIdAndCategoryIdManyToManyEdge = {
  __typename?: 'ServiceCategoriesByServiceCategoryServiceIdAndCategoryIdManyToManyEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Category` at the end of the edge. */
  node: Category;
  /** Reads and enables pagination through a set of `ServiceCategory`. */
  serviceCategories: ServiceCategoriesConnection;
};


/** A `Category` edge in the connection, with data from `ServiceCategory`. */
export type ServiceCategoriesByServiceCategoryServiceIdAndCategoryIdManyToManyEdgeServiceCategoriesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<ServiceCategoryCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ServiceCategoriesOrderBy>>;
};

/** A connection to a list of `ServiceCategory` values. */
export type ServiceCategoriesConnection = {
  __typename?: 'ServiceCategoriesConnection';
  /** A list of edges which contains the `ServiceCategory` and cursor to aid in pagination. */
  edges: Array<ServiceCategoriesEdge>;
  /** A list of `ServiceCategory` objects. */
  nodes: Array<ServiceCategory>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `ServiceCategory` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `ServiceCategory` edge in the connection. */
export type ServiceCategoriesEdge = {
  __typename?: 'ServiceCategoriesEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `ServiceCategory` at the end of the edge. */
  node: ServiceCategory;
};

/** Methods to use when ordering `ServiceCategory`. */
export enum ServiceCategoriesOrderBy {
  CategoryIdAsc = 'CATEGORY_ID_ASC',
  CategoryIdDesc = 'CATEGORY_ID_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  ServiceIdAsc = 'SERVICE_ID_ASC',
  ServiceIdDesc = 'SERVICE_ID_DESC'
}

export type ServiceCategory = {
  __typename?: 'ServiceCategory';
  /** Reads a single `Category` that is related to this `ServiceCategory`. */
  category?: Maybe<Category>;
  categoryId: Scalars['UUID']['output'];
  createdAt: Scalars['Datetime']['output'];
  id: Scalars['UUID']['output'];
  /** Reads a single `Service` that is related to this `ServiceCategory`. */
  service?: Maybe<Service>;
  serviceId: Scalars['UUID']['output'];
  updatedAt: Scalars['Datetime']['output'];
};

/**
 * A condition to be used against `ServiceCategory` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type ServiceCategoryCondition = {
  /** Checks for equality with the object’s `categoryId` field. */
  categoryId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `serviceId` field. */
  serviceId?: InputMaybe<Scalars['UUID']['input']>;
};

/** An input for mutations affecting `ServiceCategory` */
export type ServiceCategoryInput = {
  categoryId?: InputMaybe<Scalars['UUID']['input']>;
  categoryToCategoryId?: InputMaybe<CategoriesCategoryIdFkeyInput>;
  serviceId?: InputMaybe<Scalars['UUID']['input']>;
  serviceToServiceId?: InputMaybe<CategoriesServiceIdFkeyInput>;
};

/** The fields on `serviceCategory` to look up the row to update. */
export type ServiceCategoryOnServiceCategoryForCategoriesCategoryIdFkeyUsingServiceCategoriesPkeyUpdate = {
  id: Scalars['UUID']['input'];
  /** An object where the defined keys will be set on the `serviceCategory` being updated. */
  patch: UpdateServiceCategoryOnServiceCategoryForCategoriesCategoryIdFkeyPatch;
};

/** The fields on `serviceCategory` to look up the row to update. */
export type ServiceCategoryOnServiceCategoryForCategoriesServiceIdFkeyUsingServiceCategoriesPkeyUpdate = {
  id: Scalars['UUID']['input'];
  /** An object where the defined keys will be set on the `serviceCategory` being updated. */
  patch: UpdateServiceCategoryOnServiceCategoryForCategoriesServiceIdFkeyPatch;
};

/** Represents an update to a `ServiceCategory`. Fields that are set will be updated. */
export type ServiceCategoryPatch = {
  categoryId?: InputMaybe<Scalars['UUID']['input']>;
  categoryToCategoryId?: InputMaybe<CategoriesCategoryIdFkeyInput>;
  serviceId?: InputMaybe<Scalars['UUID']['input']>;
  serviceToServiceId?: InputMaybe<CategoriesServiceIdFkeyInput>;
};

/** The fields on `serviceCategory` to look up the row to connect. */
export type ServiceCategoryServiceCategoriesPkeyConnect = {
  id: Scalars['UUID']['input'];
};

/** The fields on `serviceCategory` to look up the row to delete. */
export type ServiceCategoryServiceCategoriesPkeyDelete = {
  id: Scalars['UUID']['input'];
};

/** A condition to be used against `Service` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type ServiceCondition = {
  /** Checks for equality with the object’s `companyId` field. */
  companyId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `name` field. */
  name?: InputMaybe<Scalars['String']['input']>;
};

/** An input for mutations affecting `Service` */
export type ServiceInput = {
  bookingsUsingId?: InputMaybe<BookingsServiceIdFkeyInverseInput>;
  companyId?: InputMaybe<Scalars['UUID']['input']>;
  companyToCompanyId?: InputMaybe<ServicesCompanyIdFkeyInput>;
  description: Scalars['String']['input'];
  name: Scalars['String']['input'];
  price: Scalars['Int']['input'];
  serviceCategoriesUsingId?: InputMaybe<CategoriesServiceIdFkeyInverseInput>;
};

/** The fields on `service` to look up the row to update. */
export type ServiceOnBookingForBookingsServiceIdFkeyUsingServicesPkeyUpdate = {
  id: Scalars['UUID']['input'];
  /** An object where the defined keys will be set on the `service` being updated. */
  patch: UpdateServiceOnBookingForBookingsServiceIdFkeyPatch;
};

/** The fields on `service` to look up the row to update. */
export type ServiceOnServiceCategoryForCategoriesServiceIdFkeyUsingServicesPkeyUpdate = {
  id: Scalars['UUID']['input'];
  /** An object where the defined keys will be set on the `service` being updated. */
  patch: UpdateServiceOnServiceCategoryForCategoriesServiceIdFkeyPatch;
};

/** The fields on `service` to look up the row to update. */
export type ServiceOnServiceForServicesCompanyIdFkeyUsingServicesPkeyUpdate = {
  id: Scalars['UUID']['input'];
  /** An object where the defined keys will be set on the `service` being updated. */
  patch: UpdateServiceOnServiceForServicesCompanyIdFkeyPatch;
};

/** Represents an update to a `Service`. Fields that are set will be updated. */
export type ServicePatch = {
  bookingsUsingId?: InputMaybe<BookingsServiceIdFkeyInverseInput>;
  companyId?: InputMaybe<Scalars['UUID']['input']>;
  companyToCompanyId?: InputMaybe<ServicesCompanyIdFkeyInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Int']['input']>;
  serviceCategoriesUsingId?: InputMaybe<CategoriesServiceIdFkeyInverseInput>;
};

/** The fields on `service` to look up the row to connect. */
export type ServiceServicesPkeyConnect = {
  id: Scalars['UUID']['input'];
};

/** A connection to a list of `User` values, with data from `Booking`. */
export type ServiceUsersByBookingServiceIdAndUserIdManyToManyConnection = {
  __typename?: 'ServiceUsersByBookingServiceIdAndUserIdManyToManyConnection';
  /** A list of edges which contains the `User`, info from the `Booking`, and the cursor to aid in pagination. */
  edges: Array<ServiceUsersByBookingServiceIdAndUserIdManyToManyEdge>;
  /** A list of `User` objects. */
  nodes: Array<User>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `User` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `User` edge in the connection, with data from `Booking`. */
export type ServiceUsersByBookingServiceIdAndUserIdManyToManyEdge = {
  __typename?: 'ServiceUsersByBookingServiceIdAndUserIdManyToManyEdge';
  /** Reads and enables pagination through a set of `Booking`. */
  bookings: BookingsConnection;
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `User` at the end of the edge. */
  node: User;
};


/** A `User` edge in the connection, with data from `Booking`. */
export type ServiceUsersByBookingServiceIdAndUserIdManyToManyEdgeBookingsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<BookingCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<BookingsOrderBy>>;
};

/** The `company` to be created by this mutation. */
export type ServicesCompanyIdFkeyCompaniesCreateInput = {
  availabilitiesUsingId?: InputMaybe<AvailabilitiesCompanyIdFkeyInverseInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  isVerified?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  servicesUsingId?: InputMaybe<ServicesCompanyIdFkeyInverseInput>;
  userId?: InputMaybe<Scalars['UUID']['input']>;
  userToUserId?: InputMaybe<CompaniesUserIdFkeyInput>;
};

/** Input for the nested mutation of `company` in the `ServiceInput` mutation. */
export type ServicesCompanyIdFkeyInput = {
  /** The primary key(s) for `company` for the far side of the relationship. */
  connectById?: InputMaybe<CompanyCompaniesPkeyConnect>;
  /** A `CompanyInput` object that will be created and connected to this object. */
  create?: InputMaybe<ServicesCompanyIdFkeyCompaniesCreateInput>;
  /** The primary key(s) for `company` for the far side of the relationship. */
  deleteById?: InputMaybe<CompanyCompaniesPkeyDelete>;
  /** The primary key(s) and patch data for `company` for the far side of the relationship. */
  updateById?: InputMaybe<CompanyOnServiceForServicesCompanyIdFkeyUsingCompaniesPkeyUpdate>;
};

/** Input for the nested mutation of `service` in the `CompanyInput` mutation. */
export type ServicesCompanyIdFkeyInverseInput = {
  /** The primary key(s) for `service` for the far side of the relationship. */
  connectById?: InputMaybe<Array<ServiceServicesPkeyConnect>>;
  /** A `ServiceInput` object that will be created and connected to this object. */
  create?: InputMaybe<Array<ServicesCompanyIdFkeyServicesCreateInput>>;
  /** The primary key(s) and patch data for `service` for the far side of the relationship. */
  updateById?: InputMaybe<Array<ServiceOnServiceForServicesCompanyIdFkeyUsingServicesPkeyUpdate>>;
};

/** The `service` to be created by this mutation. */
export type ServicesCompanyIdFkeyServicesCreateInput = {
  bookingsUsingId?: InputMaybe<BookingsServiceIdFkeyInverseInput>;
  companyToCompanyId?: InputMaybe<ServicesCompanyIdFkeyInput>;
  description: Scalars['String']['input'];
  name: Scalars['String']['input'];
  price: Scalars['Int']['input'];
  serviceCategoriesUsingId?: InputMaybe<CategoriesServiceIdFkeyInverseInput>;
};

/** A connection to a list of `Service` values. */
export type ServicesConnection = {
  __typename?: 'ServicesConnection';
  /** A list of edges which contains the `Service` and cursor to aid in pagination. */
  edges: Array<ServicesEdge>;
  /** A list of `Service` objects. */
  nodes: Array<Service>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Service` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `Service` edge in the connection. */
export type ServicesEdge = {
  __typename?: 'ServicesEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Service` at the end of the edge. */
  node: Service;
};

/** Methods to use when ordering `Service`. */
export enum ServicesOrderBy {
  CompanyIdAsc = 'COMPANY_ID_ASC',
  CompanyIdDesc = 'COMPANY_ID_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

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

/** All input for the `updateAvailability` mutation. */
export type UpdateAvailabilityInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
  /** An object where the defined keys will be set on the `Availability` being updated. */
  patch: AvailabilityPatch;
};

/** The output of our update `Availability` mutation. */
export type UpdateAvailabilityPayload = {
  __typename?: 'UpdateAvailabilityPayload';
  /** The `Availability` that was updated by this mutation. */
  availability?: Maybe<Availability>;
  /** An edge for our `Availability`. May be used by Relay 1. */
  availabilityEdge?: Maybe<AvailabilitiesEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Reads a single `Company` that is related to this `Availability`. */
  company?: Maybe<Company>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our update `Availability` mutation. */
export type UpdateAvailabilityPayloadAvailabilityEdgeArgs = {
  orderBy?: InputMaybe<Array<AvailabilitiesOrderBy>>;
};

/** All input for the `updateBooking` mutation. */
export type UpdateBookingInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
  /** An object where the defined keys will be set on the `Booking` being updated. */
  patch: BookingPatch;
};

/** The output of our update `Booking` mutation. */
export type UpdateBookingPayload = {
  __typename?: 'UpdateBookingPayload';
  /** Reads a single `Address` that is related to this `Booking`. */
  address?: Maybe<Address>;
  /** Reads a single `Availability` that is related to this `Booking`. */
  availability?: Maybe<Availability>;
  /** The `Booking` that was updated by this mutation. */
  booking?: Maybe<Booking>;
  /** An edge for our `Booking`. May be used by Relay 1. */
  bookingEdge?: Maybe<BookingsEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Service` that is related to this `Booking`. */
  service?: Maybe<Service>;
  /** Reads a single `User` that is related to this `Booking`. */
  user?: Maybe<User>;
};


/** The output of our update `Booking` mutation. */
export type UpdateBookingPayloadBookingEdgeArgs = {
  orderBy?: InputMaybe<Array<BookingsOrderBy>>;
};

/** All input for the `updateCategoryBySlug` mutation. */
export type UpdateCategoryBySlugInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** An object where the defined keys will be set on the `Category` being updated. */
  patch: CategoryPatch;
  slug: Scalars['String']['input'];
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

/** All input for the `updateServiceCategory` mutation. */
export type UpdateServiceCategoryInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
  /** An object where the defined keys will be set on the `ServiceCategory` being updated. */
  patch: ServiceCategoryPatch;
};

/** The output of our update `ServiceCategory` mutation. */
export type UpdateServiceCategoryPayload = {
  __typename?: 'UpdateServiceCategoryPayload';
  /** Reads a single `Category` that is related to this `ServiceCategory`. */
  category?: Maybe<Category>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Service` that is related to this `ServiceCategory`. */
  service?: Maybe<Service>;
  /** The `ServiceCategory` that was updated by this mutation. */
  serviceCategory?: Maybe<ServiceCategory>;
  /** An edge for our `ServiceCategory`. May be used by Relay 1. */
  serviceCategoryEdge?: Maybe<ServiceCategoriesEdge>;
};


/** The output of our update `ServiceCategory` mutation. */
export type UpdateServiceCategoryPayloadServiceCategoryEdgeArgs = {
  orderBy?: InputMaybe<Array<ServiceCategoriesOrderBy>>;
};

/** All input for the `updateService` mutation. */
export type UpdateServiceInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
  /** An object where the defined keys will be set on the `Service` being updated. */
  patch: ServicePatch;
};

/** The output of our update `Service` mutation. */
export type UpdateServicePayload = {
  __typename?: 'UpdateServicePayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Reads a single `Company` that is related to this `Service`. */
  company?: Maybe<Company>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `Service` that was updated by this mutation. */
  service?: Maybe<Service>;
  /** An edge for our `Service`. May be used by Relay 1. */
  serviceEdge?: Maybe<ServicesEdge>;
};


/** The output of our update `Service` mutation. */
export type UpdateServicePayloadServiceEdgeArgs = {
  orderBy?: InputMaybe<Array<ServicesOrderBy>>;
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
  addressesByBookingUserIdAndAddressId: UserAddressesByBookingUserIdAndAddressIdManyToManyConnection;
  /** Reads and enables pagination through a set of `Availability`. */
  availabilitiesByBookingUserIdAndAvailabilityId: UserAvailabilitiesByBookingUserIdAndAvailabilityIdManyToManyConnection;
  /** Reads and enables pagination through a set of `Booking`. */
  bookings: BookingsConnection;
  /** Reads and enables pagination through a set of `Company`. */
  companies: CompaniesConnection;
  createdAt: Scalars['Datetime']['output'];
  email: Scalars['String']['output'];
  id: Scalars['UUID']['output'];
  isAdmin: Scalars['Boolean']['output'];
  isVerified: Scalars['Boolean']['output'];
  name?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  /** Reads and enables pagination through a set of `Service`. */
  servicesByBookingUserIdAndServiceId: UserServicesByBookingUserIdAndServiceIdManyToManyConnection;
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


export type UserAddressesByBookingUserIdAndAddressIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<AddressCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AddressesOrderBy>>;
};


export type UserAvailabilitiesByBookingUserIdAndAvailabilityIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<AvailabilityCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AvailabilitiesOrderBy>>;
};


export type UserBookingsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<BookingCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<BookingsOrderBy>>;
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


export type UserServicesByBookingUserIdAndServiceIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<ServiceCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ServicesOrderBy>>;
};

/** A connection to a list of `Address` values, with data from `Booking`. */
export type UserAddressesByBookingUserIdAndAddressIdManyToManyConnection = {
  __typename?: 'UserAddressesByBookingUserIdAndAddressIdManyToManyConnection';
  /** A list of edges which contains the `Address`, info from the `Booking`, and the cursor to aid in pagination. */
  edges: Array<UserAddressesByBookingUserIdAndAddressIdManyToManyEdge>;
  /** A list of `Address` objects. */
  nodes: Array<Address>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Address` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `Address` edge in the connection, with data from `Booking`. */
export type UserAddressesByBookingUserIdAndAddressIdManyToManyEdge = {
  __typename?: 'UserAddressesByBookingUserIdAndAddressIdManyToManyEdge';
  /** Reads and enables pagination through a set of `Booking`. */
  bookings: BookingsConnection;
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Address` at the end of the edge. */
  node: Address;
};


/** A `Address` edge in the connection, with data from `Booking`. */
export type UserAddressesByBookingUserIdAndAddressIdManyToManyEdgeBookingsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<BookingCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<BookingsOrderBy>>;
};

/** A connection to a list of `Availability` values, with data from `Booking`. */
export type UserAvailabilitiesByBookingUserIdAndAvailabilityIdManyToManyConnection = {
  __typename?: 'UserAvailabilitiesByBookingUserIdAndAvailabilityIdManyToManyConnection';
  /** A list of edges which contains the `Availability`, info from the `Booking`, and the cursor to aid in pagination. */
  edges: Array<UserAvailabilitiesByBookingUserIdAndAvailabilityIdManyToManyEdge>;
  /** A list of `Availability` objects. */
  nodes: Array<Availability>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Availability` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `Availability` edge in the connection, with data from `Booking`. */
export type UserAvailabilitiesByBookingUserIdAndAvailabilityIdManyToManyEdge = {
  __typename?: 'UserAvailabilitiesByBookingUserIdAndAvailabilityIdManyToManyEdge';
  /** Reads and enables pagination through a set of `Booking`. */
  bookings: BookingsConnection;
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Availability` at the end of the edge. */
  node: Availability;
};


/** A `Availability` edge in the connection, with data from `Booking`. */
export type UserAvailabilitiesByBookingUserIdAndAvailabilityIdManyToManyEdgeBookingsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<BookingCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<BookingsOrderBy>>;
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
  bookingsUsingId?: InputMaybe<BookingsUserIdFkeyInverseInput>;
  companiesUsingId?: InputMaybe<CompaniesUserIdFkeyInverseInput>;
  email: Scalars['String']['input'];
  isAdmin?: InputMaybe<Scalars['Boolean']['input']>;
  isVerified?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
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
export type UserOnBookingForBookingsUserIdFkeyUsingUsersPkeyUpdate = {
  id: Scalars['UUID']['input'];
  /** An object where the defined keys will be set on the `user` being updated. */
  patch: UpdateUserOnBookingForBookingsUserIdFkeyPatch;
};

/** The fields on `user` to look up the row to update. */
export type UserOnCompanyForCompaniesUserIdFkeyUsingUsersPkeyUpdate = {
  id: Scalars['UUID']['input'];
  /** An object where the defined keys will be set on the `user` being updated. */
  patch: UpdateUserOnCompanyForCompaniesUserIdFkeyPatch;
};

/** Represents an update to a `User`. Fields that are set will be updated. */
export type UserPatch = {
  addressesUsingId?: InputMaybe<AddressesUserIdFkeyInverseInput>;
  bookingsUsingId?: InputMaybe<BookingsUserIdFkeyInverseInput>;
  companiesUsingId?: InputMaybe<CompaniesUserIdFkeyInverseInput>;
  email?: InputMaybe<Scalars['String']['input']>;
  isAdmin?: InputMaybe<Scalars['Boolean']['input']>;
  isVerified?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

/** A connection to a list of `Service` values, with data from `Booking`. */
export type UserServicesByBookingUserIdAndServiceIdManyToManyConnection = {
  __typename?: 'UserServicesByBookingUserIdAndServiceIdManyToManyConnection';
  /** A list of edges which contains the `Service`, info from the `Booking`, and the cursor to aid in pagination. */
  edges: Array<UserServicesByBookingUserIdAndServiceIdManyToManyEdge>;
  /** A list of `Service` objects. */
  nodes: Array<Service>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Service` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `Service` edge in the connection, with data from `Booking`. */
export type UserServicesByBookingUserIdAndServiceIdManyToManyEdge = {
  __typename?: 'UserServicesByBookingUserIdAndServiceIdManyToManyEdge';
  /** Reads and enables pagination through a set of `Booking`. */
  bookings: BookingsConnection;
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Service` at the end of the edge. */
  node: Service;
};


/** A `Service` edge in the connection, with data from `Booking`. */
export type UserServicesByBookingUserIdAndServiceIdManyToManyEdgeBookingsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<BookingCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<BookingsOrderBy>>;
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
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** An object where the defined keys will be set on the `address` being updated. */
export type UpdateAddressOnAddressForAddressesUserIdFkeyPatch = {
  address?: InputMaybe<Scalars['String']['input']>;
  bookingsUsingId?: InputMaybe<BookingsAddressIdFkeyInverseInput>;
  contactNumber?: InputMaybe<Scalars['String']['input']>;
  isPrimary?: InputMaybe<Scalars['Boolean']['input']>;
  userToUserId?: InputMaybe<AddressesUserIdFkeyInput>;
};

/** An object where the defined keys will be set on the `address` being updated. */
export type UpdateAddressOnBookingForBookingsAddressIdFkeyPatch = {
  address?: InputMaybe<Scalars['String']['input']>;
  bookingsUsingId?: InputMaybe<BookingsAddressIdFkeyInverseInput>;
  contactNumber?: InputMaybe<Scalars['String']['input']>;
  isPrimary?: InputMaybe<Scalars['Boolean']['input']>;
  userId?: InputMaybe<Scalars['UUID']['input']>;
  userToUserId?: InputMaybe<AddressesUserIdFkeyInput>;
};

/** An object where the defined keys will be set on the `availability` being updated. */
export type UpdateAvailabilityOnAvailabilityForAvailabilitiesCompanyIdFkeyPatch = {
  bookingsUsingId?: InputMaybe<BookingsAvailabilityIdFkeyInverseInput>;
  companyToCompanyId?: InputMaybe<AvailabilitiesCompanyIdFkeyInput>;
  endTime?: InputMaybe<Scalars['Datetime']['input']>;
  startTime?: InputMaybe<Scalars['Datetime']['input']>;
};

/** An object where the defined keys will be set on the `availability` being updated. */
export type UpdateAvailabilityOnBookingForBookingsAvailabilityIdFkeyPatch = {
  bookingsUsingId?: InputMaybe<BookingsAvailabilityIdFkeyInverseInput>;
  companyId?: InputMaybe<Scalars['UUID']['input']>;
  companyToCompanyId?: InputMaybe<AvailabilitiesCompanyIdFkeyInput>;
  endTime?: InputMaybe<Scalars['Datetime']['input']>;
  startTime?: InputMaybe<Scalars['Datetime']['input']>;
};

/** An object where the defined keys will be set on the `booking` being updated. */
export type UpdateBookingOnBookingForBookingsAddressIdFkeyPatch = {
  addressToAddressId?: InputMaybe<BookingsAddressIdFkeyInput>;
  availabilityId?: InputMaybe<Scalars['UUID']['input']>;
  availabilityToAvailabilityId?: InputMaybe<BookingsAvailabilityIdFkeyInput>;
  serviceId?: InputMaybe<Scalars['UUID']['input']>;
  serviceToServiceId?: InputMaybe<BookingsServiceIdFkeyInput>;
  status?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['UUID']['input']>;
  userToUserId?: InputMaybe<BookingsUserIdFkeyInput>;
};

/** An object where the defined keys will be set on the `booking` being updated. */
export type UpdateBookingOnBookingForBookingsAvailabilityIdFkeyPatch = {
  addressId?: InputMaybe<Scalars['UUID']['input']>;
  addressToAddressId?: InputMaybe<BookingsAddressIdFkeyInput>;
  availabilityToAvailabilityId?: InputMaybe<BookingsAvailabilityIdFkeyInput>;
  serviceId?: InputMaybe<Scalars['UUID']['input']>;
  serviceToServiceId?: InputMaybe<BookingsServiceIdFkeyInput>;
  status?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['UUID']['input']>;
  userToUserId?: InputMaybe<BookingsUserIdFkeyInput>;
};

/** An object where the defined keys will be set on the `booking` being updated. */
export type UpdateBookingOnBookingForBookingsServiceIdFkeyPatch = {
  addressId?: InputMaybe<Scalars['UUID']['input']>;
  addressToAddressId?: InputMaybe<BookingsAddressIdFkeyInput>;
  availabilityId?: InputMaybe<Scalars['UUID']['input']>;
  availabilityToAvailabilityId?: InputMaybe<BookingsAvailabilityIdFkeyInput>;
  serviceToServiceId?: InputMaybe<BookingsServiceIdFkeyInput>;
  status?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['UUID']['input']>;
  userToUserId?: InputMaybe<BookingsUserIdFkeyInput>;
};

/** An object where the defined keys will be set on the `booking` being updated. */
export type UpdateBookingOnBookingForBookingsUserIdFkeyPatch = {
  addressId?: InputMaybe<Scalars['UUID']['input']>;
  addressToAddressId?: InputMaybe<BookingsAddressIdFkeyInput>;
  availabilityId?: InputMaybe<Scalars['UUID']['input']>;
  availabilityToAvailabilityId?: InputMaybe<BookingsAvailabilityIdFkeyInput>;
  serviceId?: InputMaybe<Scalars['UUID']['input']>;
  serviceToServiceId?: InputMaybe<BookingsServiceIdFkeyInput>;
  status?: InputMaybe<Scalars['String']['input']>;
  userToUserId?: InputMaybe<BookingsUserIdFkeyInput>;
};

/** An object where the defined keys will be set on the `category` being updated. */
export type UpdateCategoryOnCategoryForCategoriesParentIdFkeyPatch = {
  categoryToParentId?: InputMaybe<CategoriesParentIdFkeyInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  serviceCategoriesUsingId?: InputMaybe<CategoriesCategoryIdFkeyInverseInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

/** An object where the defined keys will be set on the `category` being updated. */
export type UpdateCategoryOnServiceCategoryForCategoriesCategoryIdFkeyPatch = {
  categoryToParentId?: InputMaybe<CategoriesParentIdFkeyInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  parentId?: InputMaybe<Scalars['UUID']['input']>;
  serviceCategoriesUsingId?: InputMaybe<CategoriesCategoryIdFkeyInverseInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

/** An object where the defined keys will be set on the `company` being updated. */
export type UpdateCompanyOnAvailabilityForAvailabilitiesCompanyIdFkeyPatch = {
  availabilitiesUsingId?: InputMaybe<AvailabilitiesCompanyIdFkeyInverseInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  isVerified?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  servicesUsingId?: InputMaybe<ServicesCompanyIdFkeyInverseInput>;
  userId?: InputMaybe<Scalars['UUID']['input']>;
  userToUserId?: InputMaybe<CompaniesUserIdFkeyInput>;
};

/** An object where the defined keys will be set on the `company` being updated. */
export type UpdateCompanyOnCompanyForCompaniesUserIdFkeyPatch = {
  availabilitiesUsingId?: InputMaybe<AvailabilitiesCompanyIdFkeyInverseInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  isVerified?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  servicesUsingId?: InputMaybe<ServicesCompanyIdFkeyInverseInput>;
  userToUserId?: InputMaybe<CompaniesUserIdFkeyInput>;
};

/** An object where the defined keys will be set on the `company` being updated. */
export type UpdateCompanyOnServiceForServicesCompanyIdFkeyPatch = {
  availabilitiesUsingId?: InputMaybe<AvailabilitiesCompanyIdFkeyInverseInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  isVerified?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  servicesUsingId?: InputMaybe<ServicesCompanyIdFkeyInverseInput>;
  userId?: InputMaybe<Scalars['UUID']['input']>;
  userToUserId?: InputMaybe<CompaniesUserIdFkeyInput>;
};

/** An object where the defined keys will be set on the `serviceCategory` being updated. */
export type UpdateServiceCategoryOnServiceCategoryForCategoriesCategoryIdFkeyPatch = {
  categoryToCategoryId?: InputMaybe<CategoriesCategoryIdFkeyInput>;
  serviceId?: InputMaybe<Scalars['UUID']['input']>;
  serviceToServiceId?: InputMaybe<CategoriesServiceIdFkeyInput>;
};

/** An object where the defined keys will be set on the `serviceCategory` being updated. */
export type UpdateServiceCategoryOnServiceCategoryForCategoriesServiceIdFkeyPatch = {
  categoryId?: InputMaybe<Scalars['UUID']['input']>;
  categoryToCategoryId?: InputMaybe<CategoriesCategoryIdFkeyInput>;
  serviceToServiceId?: InputMaybe<CategoriesServiceIdFkeyInput>;
};

/** An object where the defined keys will be set on the `service` being updated. */
export type UpdateServiceOnBookingForBookingsServiceIdFkeyPatch = {
  bookingsUsingId?: InputMaybe<BookingsServiceIdFkeyInverseInput>;
  companyId?: InputMaybe<Scalars['UUID']['input']>;
  companyToCompanyId?: InputMaybe<ServicesCompanyIdFkeyInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Int']['input']>;
  serviceCategoriesUsingId?: InputMaybe<CategoriesServiceIdFkeyInverseInput>;
};

/** An object where the defined keys will be set on the `service` being updated. */
export type UpdateServiceOnServiceCategoryForCategoriesServiceIdFkeyPatch = {
  bookingsUsingId?: InputMaybe<BookingsServiceIdFkeyInverseInput>;
  companyId?: InputMaybe<Scalars['UUID']['input']>;
  companyToCompanyId?: InputMaybe<ServicesCompanyIdFkeyInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Int']['input']>;
  serviceCategoriesUsingId?: InputMaybe<CategoriesServiceIdFkeyInverseInput>;
};

/** An object where the defined keys will be set on the `service` being updated. */
export type UpdateServiceOnServiceForServicesCompanyIdFkeyPatch = {
  bookingsUsingId?: InputMaybe<BookingsServiceIdFkeyInverseInput>;
  companyToCompanyId?: InputMaybe<ServicesCompanyIdFkeyInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Int']['input']>;
  serviceCategoriesUsingId?: InputMaybe<CategoriesServiceIdFkeyInverseInput>;
};

/** An object where the defined keys will be set on the `user` being updated. */
export type UpdateUserOnAddressForAddressesUserIdFkeyPatch = {
  addressesUsingId?: InputMaybe<AddressesUserIdFkeyInverseInput>;
  bookingsUsingId?: InputMaybe<BookingsUserIdFkeyInverseInput>;
  companiesUsingId?: InputMaybe<CompaniesUserIdFkeyInverseInput>;
  email?: InputMaybe<Scalars['String']['input']>;
  isAdmin?: InputMaybe<Scalars['Boolean']['input']>;
  isVerified?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

/** An object where the defined keys will be set on the `user` being updated. */
export type UpdateUserOnBookingForBookingsUserIdFkeyPatch = {
  addressesUsingId?: InputMaybe<AddressesUserIdFkeyInverseInput>;
  bookingsUsingId?: InputMaybe<BookingsUserIdFkeyInverseInput>;
  companiesUsingId?: InputMaybe<CompaniesUserIdFkeyInverseInput>;
  email?: InputMaybe<Scalars['String']['input']>;
  isAdmin?: InputMaybe<Scalars['Boolean']['input']>;
  isVerified?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

/** An object where the defined keys will be set on the `user` being updated. */
export type UpdateUserOnCompanyForCompaniesUserIdFkeyPatch = {
  addressesUsingId?: InputMaybe<AddressesUserIdFkeyInverseInput>;
  bookingsUsingId?: InputMaybe<BookingsUserIdFkeyInverseInput>;
  companiesUsingId?: InputMaybe<CompaniesUserIdFkeyInverseInput>;
  email?: InputMaybe<Scalars['String']['input']>;
  isAdmin?: InputMaybe<Scalars['Boolean']['input']>;
  isVerified?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type Lite_UserFragment = { __typename?: 'User', id: any, name?: string | null, email: string, password?: string | null };

export type LoginMutationVariables = Exact<{
  input: LoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login?: { __typename?: 'LoginPayload', token?: string | null, user: { __typename?: 'User', id: any, name?: string | null, email: string, password?: string | null } } | null };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', logout?: { __typename?: 'LogoutPayload', success?: boolean | null } | null };

export type RegisterMutationVariables = Exact<{
  input: RegisterInput;
}>;


export type RegisterMutation = { __typename?: 'Mutation', register?: { __typename?: 'RegisterPayload', token: string, user: { __typename?: 'User', id: any, name?: string | null, email: string, password?: string | null } } | null };

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
      id
      ...Lite_User
    }
  }
}
    ${Lite_UserFragmentDoc}`;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

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
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const LogoutDocument = gql`
    mutation Logout {
  logout {
    success
  }
}
    `;
export type LogoutMutationFn = Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>;

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
export function useLogoutMutation(baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, options);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
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
    ${Lite_UserFragmentDoc}`;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

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
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, options);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;