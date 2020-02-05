import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as React from 'react';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  DateTime: any,
};

export type Attachment = {
   __typename?: 'Attachment',
  id: Scalars['ID'],
  name: Scalars['String'],
  description?: Maybe<Scalars['String']>,
  type?: Maybe<AttachmentType>,
  from: AttachmentFrom,
  web?: Maybe<WebAttachment>,
  file?: Maybe<FileAttachment>,
  projectsId?: Maybe<Array<Scalars['String']>>,
  organizationsId?: Maybe<Array<Scalars['String']>>,
  technologiesId?: Maybe<Array<Scalars['String']>>,
  createdAt: Scalars['DateTime'],
  updatedAt: Scalars['DateTime'],
  projects: Array<Project>,
  organizations: Array<Organization>,
  technologies: Array<Technology>,
};


export type AttachmentOrganizationsArgs = {
  orderBy?: Maybe<OrganizationOrderBy>,
  filter?: Maybe<OrganizationFilter>
};


export type AttachmentTechnologiesArgs = {
  orderBy?: Maybe<TechnologyOrderBy>,
  filter?: Maybe<TechnologyFilter>
};

export type AttachmentFilter = {
  type?: Maybe<Array<AttachmentType>>,
  limit?: Maybe<Scalars['Int']>,
};

export enum AttachmentFrom {
  Web = 'web',
  Url = 'url',
  Upload = 'upload'
}

export enum AttachmentOrderBy {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC'
}

export enum AttachmentType {
  Media = 'media',
  Article = 'article',
  Wikipedia = 'wikipedia',
  News = 'news',
  Movie = 'movie',
  Whitepaper = 'whitepaper',
  ProductPage = 'product_page',
  Book = 'book'
}

export enum AuthStrategy {
  NoAuth = 'no_auth',
  EmailOnly = 'email_only',
  EmailPassword = 'email_password',
  Google = 'google',
  Facebook = 'facebook',
  Linkedin = 'linkedin'
}

export type Board = {
   __typename?: 'Board',
  id: Scalars['String'],
  name?: Maybe<Scalars['String']>,
  slug?: Maybe<Scalars['String']>,
  project: Project,
  technologies: Array<Technology>,
  collections: Array<Collection>,
};


export type BoardTechnologiesArgs = {
  orderBy?: Maybe<TechnologyOrderBy>,
  filter?: Maybe<TechnologyFilter>
};

export type Collection = {
   __typename?: 'Collection',
  id: Scalars['ID'],
  name: Scalars['String'],
  summary?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  technologiesId?: Maybe<Array<Scalars['ID']>>,
  technologies?: Maybe<Array<Technology>>,
  board: Board,
  descriptionHTML: Scalars['String'],
};


export type CollectionTechnologiesArgs = {
  orderBy?: Maybe<TechnologyOrderBy>,
  filter?: Maybe<TechnologyFilter>
};

export enum CountryCode {
  Ad = 'AD',
  Ae = 'AE',
  Af = 'AF',
  Ag = 'AG',
  Ai = 'AI',
  Al = 'AL',
  Am = 'AM',
  Ao = 'AO',
  Aq = 'AQ',
  Ar = 'AR',
  As = 'AS',
  At = 'AT',
  Au = 'AU',
  Aw = 'AW',
  Ax = 'AX',
  Az = 'AZ',
  Ba = 'BA',
  Bb = 'BB',
  Bd = 'BD',
  Be = 'BE',
  Bf = 'BF',
  Bg = 'BG',
  Bh = 'BH',
  Bi = 'BI',
  Bj = 'BJ',
  Bl = 'BL',
  Bm = 'BM',
  Bn = 'BN',
  Bo = 'BO',
  Bq = 'BQ',
  Br = 'BR',
  Bs = 'BS',
  Bt = 'BT',
  Bv = 'BV',
  Bw = 'BW',
  By = 'BY',
  Bz = 'BZ',
  Ca = 'CA',
  Cc = 'CC',
  Cd = 'CD',
  Cf = 'CF',
  Cg = 'CG',
  Ch = 'CH',
  Ci = 'CI',
  Ck = 'CK',
  Cl = 'CL',
  Cm = 'CM',
  Cn = 'CN',
  Co = 'CO',
  Cr = 'CR',
  Cu = 'CU',
  Cv = 'CV',
  Cw = 'CW',
  Cx = 'CX',
  Cy = 'CY',
  Cz = 'CZ',
  De = 'DE',
  Dj = 'DJ',
  Dk = 'DK',
  Dm = 'DM',
  Do = 'DO',
  Dz = 'DZ',
  Ec = 'EC',
  Ee = 'EE',
  Eg = 'EG',
  Eh = 'EH',
  Er = 'ER',
  Es = 'ES',
  Et = 'ET',
  Fi = 'FI',
  Fj = 'FJ',
  Fk = 'FK',
  Fm = 'FM',
  Fo = 'FO',
  Fr = 'FR',
  Ga = 'GA',
  Gb = 'GB',
  Gd = 'GD',
  Ge = 'GE',
  Gf = 'GF',
  Gg = 'GG',
  Gh = 'GH',
  Gi = 'GI',
  Gl = 'GL',
  Gm = 'GM',
  Gn = 'GN',
  Gp = 'GP',
  Gq = 'GQ',
  Gr = 'GR',
  Gs = 'GS',
  Gt = 'GT',
  Gu = 'GU',
  Gw = 'GW',
  Gy = 'GY',
  Hk = 'HK',
  Hm = 'HM',
  Hn = 'HN',
  Hr = 'HR',
  Ht = 'HT',
  Hu = 'HU',
  Id = 'ID',
  Ie = 'IE',
  Il = 'IL',
  Im = 'IM',
  In = 'IN',
  Io = 'IO',
  Iq = 'IQ',
  Ir = 'IR',
  Is = 'IS',
  It = 'IT',
  Je = 'JE',
  Jm = 'JM',
  Jo = 'JO',
  Jp = 'JP',
  Ke = 'KE',
  Kg = 'KG',
  Kh = 'KH',
  Ki = 'KI',
  Km = 'KM',
  Kn = 'KN',
  Kp = 'KP',
  Kr = 'KR',
  Kw = 'KW',
  Ky = 'KY',
  Kz = 'KZ',
  La = 'LA',
  Lb = 'LB',
  Lc = 'LC',
  Li = 'LI',
  Lk = 'LK',
  Lr = 'LR',
  Ls = 'LS',
  Lt = 'LT',
  Lu = 'LU',
  Lv = 'LV',
  Ly = 'LY',
  Ma = 'MA',
  Mc = 'MC',
  Md = 'MD',
  Me = 'ME',
  Mf = 'MF',
  Mg = 'MG',
  Mh = 'MH',
  Mk = 'MK',
  Ml = 'ML',
  Mm = 'MM',
  Mn = 'MN',
  Mo = 'MO',
  Mp = 'MP',
  Mq = 'MQ',
  Mr = 'MR',
  Ms = 'MS',
  Mt = 'MT',
  Mu = 'MU',
  Mv = 'MV',
  Mw = 'MW',
  Mx = 'MX',
  My = 'MY',
  Mz = 'MZ',
  Na = 'NA',
  Nc = 'NC',
  Ne = 'NE',
  Nf = 'NF',
  Ng = 'NG',
  Ni = 'NI',
  Nl = 'NL',
  No = 'NO',
  Np = 'NP',
  Nr = 'NR',
  Nu = 'NU',
  Nz = 'NZ',
  Om = 'OM',
  Pa = 'PA',
  Pe = 'PE',
  Pf = 'PF',
  Pg = 'PG',
  Ph = 'PH',
  Pk = 'PK',
  Pl = 'PL',
  Pm = 'PM',
  Pn = 'PN',
  Pr = 'PR',
  Ps = 'PS',
  Pt = 'PT',
  Pw = 'PW',
  Py = 'PY',
  Qa = 'QA',
  Re = 'RE',
  Ro = 'RO',
  Rs = 'RS',
  Ru = 'RU',
  Rw = 'RW',
  Sa = 'SA',
  Sb = 'SB',
  Sc = 'SC',
  Sd = 'SD',
  Se = 'SE',
  Sg = 'SG',
  Sh = 'SH',
  Si = 'SI',
  Sj = 'SJ',
  Sk = 'SK',
  Sl = 'SL',
  Sm = 'SM',
  Sn = 'SN',
  So = 'SO',
  Sr = 'SR',
  Ss = 'SS',
  St = 'ST',
  Sv = 'SV',
  Sx = 'SX',
  Sy = 'SY',
  Sz = 'SZ',
  Tc = 'TC',
  Td = 'TD',
  Tf = 'TF',
  Tg = 'TG',
  Th = 'TH',
  Tj = 'TJ',
  Tk = 'TK',
  Tl = 'TL',
  Tm = 'TM',
  Tn = 'TN',
  To = 'TO',
  Tr = 'TR',
  Tt = 'TT',
  Tv = 'TV',
  Tw = 'TW',
  Tz = 'TZ',
  Ua = 'UA',
  Ug = 'UG',
  Um = 'UM',
  Us = 'US',
  Uy = 'UY',
  Uz = 'UZ',
  Va = 'VA',
  Vc = 'VC',
  Ve = 'VE',
  Vg = 'VG',
  Vi = 'VI',
  Vn = 'VN',
  Vu = 'VU',
  Wf = 'WF',
  Ws = 'WS',
  Ye = 'YE',
  Yt = 'YT',
  Za = 'ZA',
  Zm = 'ZM',
  Zw = 'ZW'
}

export type CreateMetricInput = {
  name: Scalars['String'],
  description: Scalars['String'],
  calculationMethod: MetricCalculationMethod,
  pollModel: MetricPollModel,
  scoreRange: MetricScoreRangeInput,
  questions: Array<MetricQuestionInput>,
  resultLabels: Array<MetricResultLabelInput>,
};

export type CreateSurveyInput = {
  name: Scalars['String'],
  description: Scalars['String'],
  slug: Scalars['String'],
  imageId: Scalars['String'],
  authPageText: Scalars['String'],
  authPageImageId: Scalars['String'],
  metricsId: Array<Scalars['String']>,
  workgroupImageId: Scalars['String'],
  workgroupName: Scalars['String'],
  metricPageText: Scalars['String'],
  darkLabelsOnImageEnabled: Scalars['Boolean'],
  labelsOnImageEnabled: Scalars['Boolean'],
  emailLoginTitleText: Scalars['String'],
  projectId: Scalars['String'],
  boardId: Scalars['String'],
  config: SurveyConfigInput,
};

export type CreateUserInput = {
  username: Scalars['String'],
  firstName: Scalars['String'],
  lastName: Scalars['String'],
  password: Scalars['String'],
  roles: Array<UserRole>,
};


export type FileAttachment = {
   __typename?: 'FileAttachment',
  _id?: Maybe<Scalars['String']>,
  type: Scalars['String'],
  sourceUrl?: Maybe<Scalars['String']>,
};

export type IAnswersCounter = {
  answersCount: Scalars['Int'],
};

export type IMetricQuestionOption = {
  id: Scalars['ID'],
  label: Scalars['String'],
  description: Scalars['String'],
  score: Scalars['Int'],
};

export type IProject = {
  id: Scalars['ID'],
  name: Scalars['String'],
  summary: Scalars['String'],
  description: Scalars['String'],
  descriptionHtml?: Maybe<Scalars['String']>,
  imageId?: Maybe<Scalars['String']>,
  boardsId: Array<Scalars['String']>,
};

export type ITechnology = {
  id: Scalars['ID'],
  name: Scalars['String'],
  status: TechnologyStatus,
  imageId?: Maybe<Scalars['String']>,
  domain?: Maybe<Array<TechnologyDomain>>,
  industry?: Maybe<Array<TechnologyIndustry>>,
  sdg?: Maybe<Array<TechnologySdg>>,
  taxonomy?: Maybe<TechnologyTaxonomy>,
  synonyms?: Maybe<Array<Scalars['String']>>,
  trl?: Maybe<Scalars['Float']>,
  parentsId?: Maybe<Array<Scalars['ID']>>,
  updatedAt: Scalars['DateTime'],
  createdAt: Scalars['DateTime'],
};

export type LoginWithPasswordSuccess = {
   __typename?: 'LoginWithPasswordSuccess',
  token: Scalars['String'],
  viewer: User,
};

export type Metric = {
   __typename?: 'Metric',
  id: Scalars['ID'],
  name: Scalars['String'],
  description?: Maybe<Scalars['String']>,
  scoreRange: MetricScoreRange,
  calculationMethod?: Maybe<MetricCalculationMethod>,
  pollModel?: Maybe<MetricPollModel>,
  questions: Array<MetricQuestion>,
  resultLabels: Array<MetricResultLabel>,
};

export type MetricAnswer = {
   __typename?: 'MetricAnswer',
  question: MetricQuestion,
  option?: Maybe<MetricQuestionOption>,
  metric: Metric,
  submittedAt?: Maybe<Scalars['DateTime']>,
};

export enum MetricCalculationMethod {
  HarmonicMean = 'harmonic_mean',
  InterquartileMean = 'interquartile_mean',
  ArtithmeticAvg = 'artithmetic_avg'
}

export enum MetricPollModel {
  OneRange = 'one_range',
  SpecificRange = 'specific_range'
}

export type MetricQuestion = {
   __typename?: 'MetricQuestion',
  id: Scalars['ID'],
  label: Scalars['String'],
  description: Scalars['String'],
  options: Array<MetricQuestionOption>,
};

export type MetricQuestionInput = {
  label: Scalars['String'],
  description: Scalars['String'],
  options: Array<MetricQuestionOptionInput>,
};

export type MetricQuestionOption = IMetricQuestionOption & {
   __typename?: 'MetricQuestionOption',
  id: Scalars['ID'],
  label: Scalars['String'],
  description: Scalars['String'],
  score: Scalars['Int'],
};

export type MetricQuestionOptionInput = {
  label: Scalars['String'],
  description: Scalars['String'],
  score: Scalars['Int'],
};

export type MetricQuestionOptionResult = IMetricQuestionOption & IAnswersCounter & {
   __typename?: 'MetricQuestionOptionResult',
  id: Scalars['ID'],
  label: Scalars['String'],
  description: Scalars['String'],
  score: Scalars['Int'],
  answersCount: Scalars['Int'],
};

export type MetricQuestionResult = IAnswersCounter & {
   __typename?: 'MetricQuestionResult',
  answersCount: Scalars['Int'],
  id: Scalars['String'],
  label: Scalars['String'],
  description: Scalars['String'],
  options: Array<MetricQuestionOptionResult>,
};

export type MetricResult = IAnswersCounter & {
   __typename?: 'MetricResult',
  answersCount: Scalars['Int'],
  id: Scalars['String'],
  name: Scalars['String'],
  description?: Maybe<Scalars['String']>,
  scoreRange: MetricScoreRange,
  calculationMethod?: Maybe<MetricCalculationMethod>,
  pollModel?: Maybe<MetricPollModel>,
  questions: Array<MetricQuestionResult>,
  resultLabels: Array<MetricResultLabel>,
  userAnswersCount: Scalars['Int'],
};

export type MetricResultLabel = {
   __typename?: 'MetricResultLabel',
  label: Scalars['String'],
  description: Scalars['String'],
  score: Scalars['Int'],
};

export type MetricResultLabelInput = {
  label: Scalars['String'],
  description: Scalars['String'],
  score: Scalars['Int'],
};

export type MetricScoreRange = {
   __typename?: 'MetricScoreRange',
  min: Scalars['Int'],
  max: Scalars['Int'],
};

export type MetricScoreRangeInput = {
  min: Scalars['Int'],
  max: Scalars['Int'],
};

export type Mutation = {
   __typename?: 'Mutation',
  createUser?: Maybe<User>,
  createMetric?: Maybe<Metric>,
  updateMetric?: Maybe<Metric>,
  createSurvey?: Maybe<Survey>,
  updateSurvey?: Maybe<Survey>,
  resetSurveyAnswers?: Maybe<Scalars['Boolean']>,
  submitAnswer?: Maybe<MetricAnswer>,
  loginWithPassword?: Maybe<LoginWithPasswordSuccess>,
  logout?: Maybe<Scalars['Boolean']>,
};


export type MutationCreateUserArgs = {
  input: CreateUserInput
};


export type MutationCreateMetricArgs = {
  input: CreateMetricInput
};


export type MutationUpdateMetricArgs = {
  input: UpdateMetricInput
};


export type MutationCreateSurveyArgs = {
  input: CreateSurveyInput
};


export type MutationUpdateSurveyArgs = {
  input: UpdateSurveyInput
};


export type MutationResetSurveyAnswersArgs = {
  surveyId: Scalars['String']
};


export type MutationSubmitAnswerArgs = {
  input: SubmitSurveyAnswerInput
};


export type MutationLoginWithPasswordArgs = {
  password: Scalars['String'],
  email: Scalars['String']
};

export type Organization = {
   __typename?: 'Organization',
  id: Scalars['ID'],
  name: Scalars['String'],
  description?: Maybe<Scalars['String']>,
  country?: Maybe<CountryCode>,
  type?: Maybe<OrganizationType>,
  foundingYear?: Maybe<Scalars['Int']>,
  url?: Maybe<Scalars['String']>,
  logo?: Maybe<Scalars['String']>,
  technologiesId: Array<Scalars['ID']>,
  projectsId: Array<Scalars['ID']>,
  attachmentsId: Array<Scalars['ID']>,
  attachments: Array<Attachment>,
  technologies: Array<Technology>,
  projects: Array<Project>,
};


export type OrganizationAttachmentsArgs = {
  orderBy?: Maybe<AttachmentOrderBy>,
  filter?: Maybe<AttachmentFilter>
};


export type OrganizationTechnologiesArgs = {
  orderBy?: Maybe<TechnologyOrderBy>,
  filter?: Maybe<TechnologyFilter>
};

export type OrganizationFilter = {
  type?: Maybe<Array<OrganizationType>>,
  country?: Maybe<Array<CountryCode>>,
  limit?: Maybe<Scalars['Int']>,
};

export enum OrganizationOrderBy {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC',
  CountryAsc = 'country_ASC',
  CountryDesc = 'country_DESC'
}

export enum OrganizationType {
  Academic = 'academic',
  NonProfit = 'non_profit',
  Governamental = 'governamental',
  Private = 'private'
}

export type Project = IProject & {
   __typename?: 'Project',
  id: Scalars['ID'],
  name: Scalars['String'],
  summary: Scalars['String'],
  description: Scalars['String'],
  descriptionHtml?: Maybe<Scalars['String']>,
  imageId?: Maybe<Scalars['String']>,
  boardsId: Array<Scalars['String']>,
  shortTextHtml?: Maybe<Scalars['String']>,
  boards?: Maybe<Array<Board>>,
};

export type Query = {
   __typename?: 'Query',
  collection: Collection,
  collections: Array<Collection>,
  boards: Array<Board>,
  board?: Maybe<Board>,
  projects: Array<Project>,
  attachments: Array<Attachment>,
  attachment?: Maybe<Attachment>,
  organization?: Maybe<Organization>,
  organizations?: Maybe<Array<Organization>>,
  viewer?: Maybe<User>,
  technology?: Maybe<Technology>,
  technologies: Array<Technology>,
  metric?: Maybe<Metric>,
  metrics?: Maybe<Array<Metric>>,
  survey?: Maybe<Survey>,
  surveys?: Maybe<Array<Survey>>,
};


export type QueryCollectionArgs = {
  id: Scalars['String']
};


export type QueryBoardArgs = {
  id: Scalars['String']
};


export type QueryAttachmentsArgs = {
  orderBy?: Maybe<AttachmentOrderBy>,
  filter?: Maybe<AttachmentFilter>
};


export type QueryAttachmentArgs = {
  id: Scalars['ID']
};


export type QueryOrganizationArgs = {
  id: Scalars['String']
};


export type QueryOrganizationsArgs = {
  orderBy?: Maybe<OrganizationOrderBy>,
  filter?: Maybe<OrganizationFilter>
};


export type QueryTechnologyArgs = {
  id: Scalars['String']
};


export type QueryTechnologiesArgs = {
  orderBy?: Maybe<TechnologyOrderBy>,
  filter?: Maybe<TechnologyFilter>
};


export type QueryMetricArgs = {
  id: Scalars['String']
};


export type QuerySurveyArgs = {
  id: Scalars['String']
};

export type ReadinessAverageScore = {
   __typename?: 'ReadinessAverageScore',
  viability: Scalars['Float'],
  demonstrability: Scalars['Float'],
  desirability: Scalars['Float'],
  investment: Scalars['Float'],
  competition: Scalars['Float'],
  expertise: Scalars['Float'],
};

export type ReadinessRangeFilter = {
  min?: Maybe<Scalars['Int']>,
  max?: Maybe<Scalars['Int']>,
};

export type ReadinessScore = {
   __typename?: 'ReadinessScore',
  technologyId: Scalars['ID'],
  averageScores: ReadinessAverageScore,
  version: ReadinessVersion,
  readiness: Scalars['Float'],
  createdAt: Scalars['DateTime'],
  updatedAt: Scalars['DateTime'],
  id: Scalars['ID'],
};

export type ReadinessVersion = {
   __typename?: 'ReadinessVersion',
  major: Scalars['Int'],
  patch: Scalars['Int'],
};

export type SubmitSurveyAnswerInput = {
  surveyId: Scalars['String'],
  optionId: Scalars['String'],
  technologyId: Scalars['String'],
};

export type Survey = {
   __typename?: 'Survey',
  id: Scalars['String'],
  name: Scalars['String'],
  slug: Scalars['String'],
  description?: Maybe<Scalars['String']>,
  imageId?: Maybe<Scalars['String']>,
  metricPageText?: Maybe<Scalars['String']>,
  workgroupImageId?: Maybe<Scalars['String']>,
  darkLabelsOnImageEnabled?: Maybe<Scalars['Boolean']>,
  emailLoginTitleText: Scalars['String'],
  labelsOnImageEnabled?: Maybe<Scalars['Boolean']>,
  workgroupName?: Maybe<Scalars['String']>,
  authPageImageId: Scalars['String'],
  authPageText: Scalars['String'],
  metrics: Array<Metric>,
  board: Board,
  technologies: Array<TechnologySurvey>,
  questionsCount: Scalars['Int'],
  answersCount: Scalars['Int'],
  technologiesCount: Scalars['Int'],
  project: Project,
};

export type SurveyAnswer = {
   __typename?: 'SurveyAnswer',
  technology: Technology,
  answers: Array<MetricAnswer>,
};

export type SurveyConfigInput = {
  authStrategies: Array<AuthStrategy>,
};

export type Technology = ITechnology & {
   __typename?: 'Technology',
  id: Scalars['ID'],
  name: Scalars['String'],
  status: TechnologyStatus,
  imageId?: Maybe<Scalars['String']>,
  domain?: Maybe<Array<TechnologyDomain>>,
  industry?: Maybe<Array<TechnologyIndustry>>,
  sdg?: Maybe<Array<TechnologySdg>>,
  taxonomy?: Maybe<TechnologyTaxonomy>,
  synonyms?: Maybe<Array<Scalars['String']>>,
  trl?: Maybe<Scalars['Float']>,
  parentsId?: Maybe<Array<Scalars['ID']>>,
  updatedAt: Scalars['DateTime'],
  createdAt: Scalars['DateTime'],
  organizations: Array<Organization>,
  attachments: Array<Attachment>,
  parents?: Maybe<Array<Technology>>,
  description?: Maybe<TechnologyDescription>,
  readinessScore?: Maybe<ReadinessScore>,
  updatedBy?: Maybe<User>,
};


export type TechnologyOrganizationsArgs = {
  orderBy?: Maybe<OrganizationOrderBy>,
  filter?: Maybe<OrganizationFilter>
};


export type TechnologyAttachmentsArgs = {
  orderBy?: Maybe<AttachmentOrderBy>,
  filter?: Maybe<AttachmentFilter>
};

export type TechnologyDescription = {
   __typename?: 'TechnologyDescription',
  id: Scalars['String'],
  status: TechnologyDescriptionStatus,
  shortText: Scalars['String'],
  longText: Scalars['String'],
  shortTextHtml?: Maybe<Scalars['String']>,
  longTextHtml?: Maybe<Scalars['String']>,
};

export enum TechnologyDescriptionStatus {
  Draft = 'draft',
  Published = 'published'
}

export enum TechnologyDomain {
  AdditiveManufacturing = 'additive_manufacturing',
  ArtificialIntelligence = 'artificial_intelligence',
  Augmentation = 'augmentation',
  Automation = 'automation',
  Biomaterials = 'biomaterials',
  Biosensors = 'biosensors',
  Biotech = 'biotech',
  Blockchain = 'blockchain',
  Computing = 'computing',
  Displays = 'displays',
  Drones = 'drones',
  Electronics = 'electronics',
  Energy = 'energy',
  FuelCells = 'fuel_cells',
  Genomics = 'genomics',
  Geoengineering = 'geoengineering',
  HumanAugmentation = 'human_augmentation',
  InternetOfThings = 'internet_of_things',
  Longevity = 'longevity',
  MachineLearning = 'machine_learning',
  MachineVision = 'machine_vision',
  Materials = 'materials',
  MixedReality = 'mixed_reality',
  MobileCommunications = 'mobile_communications',
  Nanotechnology = 'nanotechnology',
  Neurotechnology = 'neurotechnology',
  PervasiveComputing = 'pervasive_computing',
  Photovoltaics = 'photovoltaics',
  QuantumComputing = 'quantum_computing',
  Robotics = 'robotics',
  Space = 'space'
}

export type TechnologyFilter = {
  status?: Maybe<Array<TechnologyStatus>>,
  domain?: Maybe<Array<TechnologyDomain>>,
  industry?: Maybe<Array<TechnologyIndustry>>,
  sdg?: Maybe<Array<TechnologySdg>>,
  taxonomy?: Maybe<Array<TechnologyTaxonomy>>,
  notUpdatedSince?: Maybe<Scalars['DateTime']>,
  limit?: Maybe<Scalars['Int']>,
  readiness?: Maybe<ReadinessRangeFilter>,
};

export enum TechnologyIndustry {
  Agriculture = 'agriculture',
  ArtAndDesign = 'art_and_design',
  Aviation = 'aviation',
  Cosmetics = 'cosmetics',
  Communications = 'communications',
  Construction = 'construction',
  Defense = 'defense',
  Education = 'education',
  Energy = 'energy',
  Environment = 'environment',
  Finance = 'finance',
  Fashion = 'fashion',
  Food = 'food',
  Government = 'government',
  Health = 'health',
  Hospitality = 'hospitality',
  Materials = 'materials',
  Manufacturing = 'manufacturing',
  Media = 'media',
  Mobility = 'mobility',
  Retail = 'retail',
  Space = 'space',
  Textiles = 'textiles',
  Transportation = 'transportation'
}

export enum TechnologyOrderBy {
  ReadinessAsc = 'readiness_ASC',
  ReadinessDesc = 'readiness_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  TrlAsc = 'trl_ASC',
  TrlDesc = 'trl_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC'
}

export enum TechnologySdg {
  NoPoverty = 'no_poverty',
  ZeroHunger = 'zero_hunger',
  GoodHealthAndWellBeing = 'good_health_and_well_being',
  QualityEducation = 'quality_education',
  GenderEquality = 'gender_equality',
  CleanWaterAndSanitation = 'clean_water_and_sanitation',
  AffordableAndCleanEnergy = 'affordable_and_clean_energy',
  DecentWorkAndEconomicGrowth = 'decent_work_and_economic_growth',
  IndustryInnovationAndInfrastructure = 'industry_innovation_and_infrastructure',
  ReducedInequality = 'reduced_inequality',
  SustainableCitiesAndCommunities = 'sustainable_cities_and_communities',
  ResponsibleConsumptionAndProduction = 'responsible_consumption_and_production',
  ClimateAction = 'climate_action',
  LifeBelowWater = 'life_below_water',
  LifeOnLand = 'life_on_land',
  PeaceAndJusticeStrongInstitutions = 'peace_and_justice_strong_institutions',
  PartnershipsToAchieveTheGoal = 'partnerships_to_achieve_the_goal'
}

export enum TechnologyStatus {
  Draft = 'draft',
  Review = 'review',
  Published = 'published'
}

export type TechnologySurvey = ITechnology & IAnswersCounter & {
   __typename?: 'TechnologySurvey',
  id: Scalars['ID'],
  name: Scalars['String'],
  status: TechnologyStatus,
  imageId?: Maybe<Scalars['String']>,
  domain?: Maybe<Array<TechnologyDomain>>,
  industry?: Maybe<Array<TechnologyIndustry>>,
  sdg?: Maybe<Array<TechnologySdg>>,
  taxonomy?: Maybe<TechnologyTaxonomy>,
  synonyms?: Maybe<Array<Scalars['String']>>,
  trl?: Maybe<Scalars['Float']>,
  parentsId?: Maybe<Array<Scalars['ID']>>,
  updatedAt: Scalars['DateTime'],
  createdAt: Scalars['DateTime'],
  answersCount: Scalars['Int'],
  organizations: Array<Organization>,
  attachments: Array<Attachment>,
  parents?: Maybe<Array<Technology>>,
  description?: Maybe<TechnologyDescription>,
  readinessScore?: Maybe<ReadinessScore>,
  updatedBy?: Maybe<User>,
  survey: Survey,
  viewerAnswers: Array<MetricAnswer>,
  metricResults: Array<MetricResult>,
};


export type TechnologySurveyOrganizationsArgs = {
  orderBy?: Maybe<OrganizationOrderBy>,
  filter?: Maybe<OrganizationFilter>
};


export type TechnologySurveyAttachmentsArgs = {
  orderBy?: Maybe<AttachmentOrderBy>,
  filter?: Maybe<AttachmentFilter>
};

export enum TechnologyTaxonomy {
  Draft = 'draft',
  Review = 'review',
  Published = 'published',
  BusinessModel = 'business_model',
  Policy = 'policy',
  Software = 'software',
  Hardware = 'hardware',
  Material = 'material',
  Protocol = 'protocol',
  System = 'system'
}

export type UpdateMetricInput = {
  id: Scalars['String'],
  name?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  calculationMethod?: Maybe<MetricCalculationMethod>,
  pollModel?: Maybe<MetricPollModel>,
  scoreRange?: Maybe<MetricScoreRangeInput>,
  questions?: Maybe<Array<UpdateMetricQuestionInput>>,
  resultLabels?: Maybe<Array<MetricResultLabelInput>>,
};

export type UpdateMetricQuestionInput = {
  id: Scalars['String'],
  label?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  options?: Maybe<Array<UpdateMetricQuestionOptionInput>>,
};

export type UpdateMetricQuestionOptionInput = {
  id: Scalars['String'],
  label?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  score?: Maybe<Scalars['Int']>,
};

export type UpdateSurveyInput = {
  id: Scalars['String'],
  name?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  slug?: Maybe<Scalars['String']>,
  imageId?: Maybe<Scalars['String']>,
  authPageText?: Maybe<Scalars['String']>,
  authPageImageId?: Maybe<Scalars['String']>,
  workgroupImageId?: Maybe<Scalars['String']>,
  workgroupName?: Maybe<Scalars['String']>,
  metricPageText?: Maybe<Scalars['String']>,
  darkLabelsOnImageEnabled?: Maybe<Scalars['Boolean']>,
  labelsOnImageEnabled?: Maybe<Scalars['Boolean']>,
  emailLoginTitleText?: Maybe<Scalars['String']>,
};

export type User = {
   __typename?: 'User',
  id: Scalars['String'],
  display: Scalars['String'],
  roles?: Maybe<Array<Scalars['String']>>,
  isAdmin: Scalars['Boolean'],
};

export enum UserRole {
  Admin = 'admin',
  Editor = 'editor',
  Viewer = 'viewer'
}

export type WebAttachment = {
   __typename?: 'WebAttachment',
  thumbnailUrl?: Maybe<Scalars['String']>,
  sourceUrl?: Maybe<Scalars['String']>,
};

export type LoginSuccessFieldsFragment = (
  { __typename?: 'LoginWithPasswordSuccess' }
  & Pick<LoginWithPasswordSuccess, 'token'>
  & { viewer: (
    { __typename?: 'User' }
    & Pick<User, 'id' | 'display' | 'roles' | 'isAdmin'>
  ) }
);

export type LoginMutationVariables = {
  email: Scalars['String'],
  password: Scalars['String']
};


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { loginWithPassword: Maybe<(
    { __typename?: 'LoginWithPasswordSuccess' }
    & LoginSuccessFieldsFragment
  )> }
);

export type LogoutMutationVariables = {};


export type LogoutMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'logout'>
);

export type TechnologyFieldsFragment = (
  { __typename?: 'Technology' }
  & Pick<Technology, 'id' | 'name' | 'status' | 'imageId'>
);

export type GetTechnologiesQueryVariables = {};


export type GetTechnologiesQuery = (
  { __typename?: 'Query' }
  & { technologies: Array<(
    { __typename?: 'Technology' }
    & TechnologyFieldsFragment
  )> }
);

export const LoginSuccessFieldsFragmentDoc = gql`
    fragment LoginSuccessFields on LoginWithPasswordSuccess {
  token
  viewer {
    id
    display
    roles
    isAdmin
  }
}
    `;
export const TechnologyFieldsFragmentDoc = gql`
    fragment TechnologyFields on Technology {
  id
  name
  status
  imageId
}
    `;
export const LoginDocument = gql`
    mutation Login($email: String!, $password: String!) {
  loginWithPassword(email: $email, password: $password) {
    ...LoginSuccessFields
  }
}
    ${LoginSuccessFieldsFragmentDoc}`;
export type LoginMutationFn = ApolloReactCommon.MutationFunction<LoginMutation, LoginMutationVariables>;
export type LoginComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<LoginMutation, LoginMutationVariables>, 'mutation'>;

    export const LoginComponent = (props: LoginComponentProps) => (
      <ApolloReactComponents.Mutation<LoginMutation, LoginMutationVariables> mutation={LoginDocument} {...props} />
    );
    

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
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        return ApolloReactHooks.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, baseOptions);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = ApolloReactCommon.MutationResult<LoginMutation>;
export type LoginMutationOptions = ApolloReactCommon.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const LogoutDocument = gql`
    mutation Logout {
  logout
}
    `;
export type LogoutMutationFn = ApolloReactCommon.MutationFunction<LogoutMutation, LogoutMutationVariables>;
export type LogoutComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<LogoutMutation, LogoutMutationVariables>, 'mutation'>;

    export const LogoutComponent = (props: LogoutComponentProps) => (
      <ApolloReactComponents.Mutation<LogoutMutation, LogoutMutationVariables> mutation={LogoutDocument} {...props} />
    );
    

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
export function useLogoutMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        return ApolloReactHooks.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, baseOptions);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = ApolloReactCommon.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = ApolloReactCommon.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const GetTechnologiesDocument = gql`
    query GetTechnologies {
  technologies {
    ...TechnologyFields
  }
}
    ${TechnologyFieldsFragmentDoc}`;
export type GetTechnologiesComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetTechnologiesQuery, GetTechnologiesQueryVariables>, 'query'>;

    export const GetTechnologiesComponent = (props: GetTechnologiesComponentProps) => (
      <ApolloReactComponents.Query<GetTechnologiesQuery, GetTechnologiesQueryVariables> query={GetTechnologiesDocument} {...props} />
    );
    

/**
 * __useGetTechnologiesQuery__
 *
 * To run a query within a React component, call `useGetTechnologiesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTechnologiesQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTechnologiesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetTechnologiesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetTechnologiesQuery, GetTechnologiesQueryVariables>) {
        return ApolloReactHooks.useQuery<GetTechnologiesQuery, GetTechnologiesQueryVariables>(GetTechnologiesDocument, baseOptions);
      }
export function useGetTechnologiesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetTechnologiesQuery, GetTechnologiesQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetTechnologiesQuery, GetTechnologiesQueryVariables>(GetTechnologiesDocument, baseOptions);
        }
export type GetTechnologiesQueryHookResult = ReturnType<typeof useGetTechnologiesQuery>;
export type GetTechnologiesLazyQueryHookResult = ReturnType<typeof useGetTechnologiesLazyQuery>;
export type GetTechnologiesQueryResult = ApolloReactCommon.QueryResult<GetTechnologiesQuery, GetTechnologiesQueryVariables>;